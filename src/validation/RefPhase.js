const StopTemplatesListener = require("../parser/StopTemplatesListener");
const Scope = require("../symbols/Scope");
const StatementSymbol = require("../symbols/StatementSymbol");
const CollectionSymbol = require("../symbols/CollectionSymbol");
const ConditionalSymbol = require("../symbols/ConditionalSymbol");
const ComponentSymbol = require("../symbols/ComponentSymbol");
const ParameterSymbol = require("../symbols/ParameterSymbol");
const ReferenceSymbol = require("../symbols/ReferenceSymbol");

const StateTemplateNode = require("../models/StateTemplateNode");
const CollectionTemplateNode = require("../models/CollectionTemplateNode");
const ConditionalTemplateNode = require("../models/ConditionalTemplateNode");
const StateTemplateNodeParameterValue = require("../models/StateTemplateNodeParameterValue");
const StateTemplateNodeParameterCollection = require("../models/StateTemplateNodeParameterCollection");

const StopTemplateValidationException = require("./StopTemplateValidationException");

const stop = require('stop');
const REFERENCE_DELIMETER = ".";

var RefPhase = function(stopInstance, templateState, root, globals, scopes) {
    StopTemplatesListener.StopTemplatesListener.call(this); // inherit default listener
    this.errors = [];
    this.globals = globals;
    this.scopes = scopes;
    this.currentScope = undefined;
    this.stop = stopInstance;
    this.templateState = templateState;
    this.node = root;
    this.lastNode = null;

    this.childrenProperty = new stop.Stop.models.Property("children", stop.Stop.models.Property.PropertyType.STRING, true, false);
    this.globals.define(new ReferenceSymbol(this.childrenProperty.name, this.childrenProperty));

    for (var key in templateState.properties){
        var value = templateState.properties[key];
        this.globals.define(new ReferenceSymbol(key, value));
    }

    return this;
};
RefPhase.prototype = Object.create(StopTemplatesListener.StopTemplatesListener.prototype);
RefPhase.prototype.constructor = RefPhase;

RefPhase.prototype.getScope = function(ctx) { 
    return this.scopes[ctx.id];
};

RefPhase.prototype.enterFile = function(ctx) {
    this.currentScope = this.globals;
};

// Enter a parse tree produced by StopTemplatesParser#component.
RefPhase.prototype.enterComponent = function(ctx) {
    var componentName = ctx.COMPONENT_TYPE().getText();
    var componentState = this.getComponent(componentName);
    if (componentState == null){
        this.errors.push(new StopTemplateValidationException("No component state " + componentName + " found within stop file"));
    }

    var stateTemplateNode = new StateTemplateNode(this.node, componentState);
    this.node.addChild(stateTemplateNode);
    this.lastNode = stateTemplateNode;

    this.currentScope = this.getScope(ctx);

    if (this.currentScope instanceof ComponentSymbol) {
        var componentSymbol = this.currentScope;
        for (var propertyName in componentState.properties){
            var property = componentState.properties[propertyName];
            if (!property.optional){
                if (!componentSymbol.parameters[propertyName]){
                    this.errors.push(new StopTemplateValidationException("Component missing required property " + propertyName));
                }
            }
        }

        for(var parameterKey in componentSymbol.parameters){
            var s = componentSymbol.parameters[parameterKey];
            if (s instanceof ParameterSymbol){
                var p = s;
                if (p.isValue()) {
                    var value = p.getValueSymbol();
                    if (value.isValueID()) {
                        stateTemplateNode.addParameter(p.name, new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.ID, value.getValueID()));
                    }else if (value.isValueReference()){
                        stateTemplateNode.addParameter(p.name, new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.REFERENCE, value.getValueReference()));
                    } else {
                        stateTemplateNode.addParameter(p.name, new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.LITERAL, value.getValue()));
                    }
                }else if (p.isCollection()){
                    var collectionSymbol = p.getCollectionSymbol();
                    var params = new StateTemplateNodeParameterCollection(StateTemplateNodeParameterValue.Type.COLLECTION);
                    for (var i in collectionSymbol.values){
                        var value = collectionSymbol.values[i];
                        if (value.isValueID()) {
                            params.addParameterValue(new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.ID, value.getValueID()));
                        } else if (value.isValueReference()){
                            params.addParameterValue(new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.REFERENCE, value.getValueReference()));
                        } else {
                            params.addParameterValue(new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.LITERAL, value.getValue()));
                        }
                    }
                    stateTemplateNode.addParameter(p.name, params);
                }
            }
        }
    }
};

// Exit a parse tree produced by StopTemplatesParser#component.
RefPhase.prototype.exitComponent = function(ctx) {
    this.currentScope = this.currentScope.enclosingScope;
};

// Enter a parse tree produced by StopTemplatesParser#component_parameter_value.
RefPhase.prototype.enterComponent_parameter = function(ctx) {
    var id = ctx.ID().getText();

    if( this.currentScope instanceof ComponentSymbol) {
        var componentSymbol = this.currentScope;
        var componentName = componentSymbol.name;
        var componentState = this.getComponent(componentName);
        if (componentState == null){
            this.errors.push(new StopTemplateValidationException("No component state " + componentName + " found within stop file"));
        }else{
            var property = componentState.properties[id];
            if (property == null){
                this.errors.push(new StopTemplateValidationException("No property " + id + " found within state " + componentState.name));
            } else {
                var symbol = componentSymbol.parameters[id];
                if ((symbol!=null) && (symbol instanceof ParameterSymbol)){
                    var parameterSymbol = symbol;
                    if (parameterSymbol.isValue()) {
                        var parameterValueSymbol = parameterSymbol.getValueSymbol();
                        this.validateParameterValueSymbol(id, property, parameterValueSymbol);
                    }else if (parameterSymbol.isCollection()){
                        for (var i in parameterSymbol.getCollectionSymbol().values){
                            parameterValueSymbol = parameterSymbol.getCollectionSymbol().values[i];
                            this.validateParameterValueSymbol(id, property, parameterValueSymbol);
                        }
                    }
                }else {
                    this.errors.push(new StopTemplateValidationException("No property found " + id + " found within state " + componentState.name));
                }
            }
        }
    }else {
        this.errors.push(new StopTemplateValidationException("No component found"));
    }
};

// Enter a parse tree produced by StopTemplatesParser#collection.
RefPhase.prototype.enterCollection = function(ctx) {
    var id;
    var property;
    var isOptional = false;
    var properties = null;

    if (ctx.REFERENCE()!=null){
        id = ctx.REFERENCE().getText();
        properties = this.findReferenceProperty(id);
        if (properties == null){
            this.errors.push(new StopTemplateValidationException("Couldn't find reference " + id));
            return;
        }
        property = properties[properties.length-1];
        for (var i in properties){
            var p = properties[i];
            if (p.optional){
                isOptional = true;
                break;
            }
        }
    }else {
        id = ctx.ID().getText();
        property = this.findParentProperty(this.currentScope, id);
        isOptional = property.optional;
    }

    if (property == null){
        this.errors.push(new StopTemplateValidationException("No property " + id + " found within state " + templateState.name));
        return;
    }
    if (!property.collection){
        this.errors.push(new StopTemplateValidationException("No collection " + id + " found within state " + templateState.name));
        return;
    }

    this.currentScope = this.getScope(ctx);

    if (ctx.NOT() == null) {
        var collectionItem = new stop.Stop.models.Property(property.name, property.type, false, false);

        if (property.isStateProperty()) {
            collectionItem = new stop.Stop.models.Property(property.name+"_item", property.type, false, false, property.state);
            for (var key in property.state.properties) {
                var value = property.state.properties[key];
                if (value){
                    this.currentScope.enclosingScope.define(new ReferenceSymbol(key, value));
                }
            }
        }

        this.currentScope.enclosingScope.define(new ReferenceSymbol(property.name+"_item", collectionItem));
    }

    var collectionTemplateNode;
    if (properties!=null){
        collectionTemplateNode = new CollectionTemplateNode(this.node, properties, ctx.NOT() != null);
    }else {
        collectionTemplateNode = new CollectionTemplateNode(this.node, property, ctx.NOT() != null);
    }

    this.node.addChild(collectionTemplateNode);
    this.lastNode = collectionTemplateNode;
};

// Exit a parse tree produced by StopTemplatesParser#collection.
RefPhase.prototype.exitCollection = function(ctx) {
    this.currentScope = this.currentScope.enclosingScope;
};

// Enter a parse tree produced by StopTemplatesParser#conditional.
RefPhase.prototype.enterConditional = function(ctx) {
    var id;
    var property;
    var isOptional = false;
    var properties = null;

    if (ctx.REFERENCE()!=null){
        id = ctx.REFERENCE().getText();
        properties = this.findReferenceProperty(id);
        if (properties == null){
            this.errors.push(new StopTemplateValidationException("Couldn't find reference " + id));
            return;
        }
        property = properties[properties.length-1];
        for (var key in properties){
            var p = properties[key];
            if (p.optional){
                isOptional = true;
                break;
            }
        }
    }else {
        id = ctx.ID().getText();
        property = this.findParentProperty(this.currentScope, id);
        isOptional = property.optional;
    }

    if (property == null) {
        this.errors.push(new StopTemplateValidationException("No property " + id + " found within state " + templateState.name));
        return;
    }
    if (!(isOptional || property.collection || (property.type == stop.Stop.models.Property.PropertyType.BOOL))) {
        this.errors.push(new StopTemplateValidationException("Property " + id + " found within state " + templateState.name + " but it is not optional, collection or boolean"));
        return;
    }

    this.currentScope = this.getScope(ctx);

    var conditionalTemplateNode;
    if (properties!=null){
        conditionalTemplateNode = new ConditionalTemplateNode(this.node, properties, ctx.NOT() != null);
    }else{
        conditionalTemplateNode = new ConditionalTemplateNode(this.node, property, ctx.NOT() != null);
    }

    this.node.addChild(conditionalTemplateNode);
    this.lastNode = conditionalTemplateNode;

    if (ctx.NOT() == null) {
        if (property.isStateProperty()) {
            for (var key in property.state.properties) {
                var value = property.state.properties[key];
                this.currentScope.enclosingScope.define(new ReferenceSymbol(key, value));
            }
        }
    }
};

// Exit a parse tree produced by StopTemplatesParser#conditional.
RefPhase.prototype.exitConditional = function(ctx) {
};

// Enter a parse tree produced by StopTemplatesParser#nested_statements.
RefPhase.prototype.enterNested_statements = function(ctx) {
    this.node = this.lastNode;
};

// Exit a parse tree produced by StopTemplatesParser#nested_statements.
RefPhase.prototype.exitNested_statements = function(ctx) {
    this.node = this.node.parent;
};

RefPhase.prototype.getComponent = function(componentName){
    var componentState = this.stop.states[componentName];
    if (componentState==null){
        for (var stateName in this.stop.states){
            var state = this.stop.states[stateName];
            var name = state.name;
            if (name.contains(REFERENCE_DELIMETER)){
                var simpleNameParts = name.split(".");
                name = simpleNameParts[simpleNameParts.length-1];
            }
            if (name.toLowerCase() == componentName.toLowerCase()){
                return state;
            }
        }
    }
    return componentState;
}

RefPhase.prototype.findParentProperty = function(scope, name){
    var symbol = scope.definitions[name];
    if ( symbol!=null){
        if (symbol instanceof ReferenceSymbol){
            return symbol.property;
        }
    }

    var nestedScopes = scope.getNestedScopes();
    for (var i in nestedScopes){
        var nestedScope = nestedScopes[i];
        var nestedSymbol = nestedScope.definitions[name];
        if ( nestedSymbol!=null){
            if (nestedSymbol instanceof ReferenceSymbol){
                return nestedSymbol.property;
            }
        }
    }

    var parentScope = scope.enclosingScope;
    if (parentScope!=null){
        return this.findParentProperty(parentScope, name);
    }

    return null;
}

RefPhase.prototype.findReferenceProperty = function(reference){
    var parts = reference.split(REFERENCE_DELIMETER);
    var partIndex = 0;
    var valueName = parts[0];
    var subProperty = null;
    var properties = [];

    var foundProperty = this.findParentProperty(this.currentScope.enclosingScope, valueName);
    if (foundProperty!=null){
        partIndex = 1;
        properties.push(foundProperty);
        while (partIndex < parts.length) {
            if ((foundProperty!=null) && (foundProperty.isStateProperty())) {
                var stateProperty = foundProperty;
                var part = parts[partIndex];
                subProperty = stateProperty.state.properties[part];
                if (subProperty != null) {
                    partIndex++;
                    foundProperty = subProperty;
                    properties.push(subProperty);
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }

    return properties;
}

RefPhase.prototype.validateParameterValueSymbol = function(id, property, parameterValueSymbol){
    if (parameterValueSymbol.isValueID()) {
        var valueName = parameterValueSymbol.getValue().toString();
        var foundProperty = this.findParentProperty(this.currentScope.enclosingScope, valueName);
        if (foundProperty == null) {
            this.errors.push(new StopTemplateValidationException("Property " + valueName + " could not be found"));
            return;
        } else {
            if (!this.doesPropertyMapToProperty(property, foundProperty)){
                this.errors.push(new StopTemplateValidationException("Property " + valueName + " doesn't match type"));
                return;
            }
            if (property.isStateProperty()){
                if (foundProperty.isStateProperty()){
                    var stateProperty = property;
                    var foundStateProperty = foundProperty;

                    if (!(stateProperty.state.name.toLowerCase() == foundStateProperty.state.name.toLowerCase())){
                        this.errors.push(new StopTemplateValidationException("Property " + valueName + " is not a "+ stateProperty.state.name +" state property"));
                        return;
                    }
                }else{
                    this.errors.push(new StopTemplateValidationException("Property " + valueName + " is not a state property"));
                    return;
                }
            }
            if (foundProperty.optional && !property.optional) {
                this.errors.push(new StopTemplateValidationException("Property " + valueName + " has optional(" + foundProperty.optional + ") while component property " + id + " has optional(" + property.optional + ")"));
                return;
            }
        }
    } else if (parameterValueSymbol.isValueReference()) {
        var reference = parameterValueSymbol.getValue().toString();
        this.validateReference(id, property, reference);
    } else if (parameterValueSymbol.isValueNumber()) {
        var numberTypes = [
            stop.Stop.models.Property.PropertyType.INT32,
            stop.Stop.models.Property.PropertyType.INT64,
            stop.Stop.models.Property.PropertyType.SINT32,
            stop.Stop.models.Property.PropertyType.SINT64,
            stop.Stop.models.Property.PropertyType.FIXED32,
            stop.Stop.models.Property.PropertyType.FIXED64,
            stop.Stop.models.Property.PropertyType.UINT32,
            stop.Stop.models.Property.PropertyType.UINT64,
            stop.Stop.models.Property.PropertyType.DOUBLE,
            stop.Stop.models.Property.PropertyType.FLOAT
        ];
        if (numberTypes.indexOf(property.type) < 0) {
            this.errors.push(new StopTemplateValidationException("Property " + id + " should be a number"));
            return;
        }
    } else if (parameterValueSymbol.isValueBoolean()) {
        if (property.type != stop.Stop.models.Property.PropertyType.BOOL) {
            this.errors.push(new StopTemplateValidationException("Property " + id + " should be a bool"));
            return;
        }
    } else if (parameterValueSymbol.isValueString()) {
        if (property.type != stop.Stop.models.Property.PropertyType.STRING) {
            this.errors.push(new StopTemplateValidationException("Property " + id + " should be a string"));
            return;
        }
    }
}

RefPhase.prototype.validateReference = function(id, property, reference){
    var parts = reference.split(REFERENCE_DELIMETER);
    var partIndex = 0;
    var valueName = parts[0];

    var foundProperty = this.findParentProperty(this.currentScope.enclosingScope, valueName);
    if (foundProperty == null) {
        this.errors.push(new StopTemplateValidationException("Property " + valueName + " could not be found"));
        return;
    } else {
        if (foundProperty.optional && !property.optional) {
            this.errors.push(new StopTemplateValidationException("Property " + valueName + " has optional(" + foundProperty.optional + ") while component property " + id + " has optional(" + property.optional + ")"));
            return;
        }
        partIndex = 1;
        if (foundProperty.isStateProperty()){
            var stateProperty = foundProperty;
            var subProperty = null;
            while (partIndex < parts.length){
                var part = parts[partIndex];
                subProperty = stateProperty.state.properties[part];
                if ( subProperty != null){
                    if (subProperty.optional && !property.optional) {
                        this.errors.push(new StopTemplateValidationException("Property " + valueName + " has optional(" + subProperty.optional + ") while component property " + id + " has optional(" + property.optional + ")"));
                        return;
                    }
                    if (partIndex < (parts.length - 1)) {
                        if (subProperty.isStateProperty()){
                            stateProperty = subProperty;
                        }else {
                            this.errors.push(new StopTemplateValidationException("Can't continue because property " + subProperty.name + " is not a state property"));
                            return;
                        }
                    }
                    partIndex++;
                }else {
                    this.errors.push(new StopTemplateValidationException("Property " + valueName + " is not a state property and sub property " + part + " could not be found"));
                    return;
                }
            }
            if (subProperty!= null){
                if (!this.doesPropertyMapToProperty(property, subProperty)){
                    this.errors.push(new StopTemplateValidationException("Property " + subProperty.name + " doesn't match type"));
                    return;
                }
                if (property.isStateProperty()){
                    if (subProperty.isStateProperty()){
                        var s1 = property;
                        var s2 = subProperty;

                        if (!(s1.state.name.toLowerCase() == s2.state.name.toLowerCase())){
                            this.errors.push(new StopTemplateValidationException("Property " + subProperty.name + " is not a "+ s1.state.name +" state property"));
                            return;
                        }
                    }else{
                        this.errors.push(new StopTemplateValidationException("Property " + subProperty.name + " is not a state property"));
                        return;
                    }
                }
                if (subProperty.optional && !property.optional) {
                    this.errors.push(new StopTemplateValidationException("Property " + valueName + " has optional(" + subProperty.optional + ") while component property " + id + " has optional(" + property.optional + ")"));
                    return;
                }
            }
        }else{
            this.errors.push(new StopTemplateValidationException("Property " + valueName + " is not a state property"));
            return;
        }
    }
}

RefPhase.prototype.doesPropertyMapToProperty = function(a, b){
    if ( (b.type == stop.Stop.models.Property.PropertyType.ENUM)
        && (a.type == stop.Stop.models.Property.PropertyType.STRING)){
        return true;
    }
    return a.type == b.type;
}

module.exports = RefPhase;
