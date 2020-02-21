const stop = require('stop');
const StateTemplateNode = require("../models/StateTemplateNode");
const CollectionTemplateNode = require("../models/CollectionTemplateNode");
const ConditionalTemplateNode = require("../models/ConditionalTemplateNode");
const StateTemplateNodeParameterValue = require("../models/StateTemplateNodeParameterValue");
const StateTemplateNodeParameterCollection = require("../models/StateTemplateNodeParameterCollection");

var TemplateEngine = function(implementation, template){
    this.implementation = implementation;
    this.template = template;
};

TemplateEngine.prototype.constructor = TemplateEngine;

TemplateEngine.prototype.render = function(templateStateInstance, children){
    if (children == undefined){
        children = [];
    }

    if (templateStateInstance.state.name.toLowerCase() != this.template.state.name.toLowerCase()){
        throw new TemplateEngineException("State instance does not map to template state");
    }

    templateStateInstance.validateProperties();

    var context = templateStateInstance.properties;

    if (children!=null) {
        context["children"] = children;
    }

    var root = this.template.root;

    var childrenCollection = this.collect(0, root.children, context);

    return this.implementation.renderTemplateChildren(childrenCollection);
};

TemplateEngine.prototype.collect = function(level, nodes, context){
    var children = [];

    for (var i in nodes) {
        var child = nodes[i];
        var visited = this.visit(level, child, context);
        if (visited != null) {
            for ( var j in visited){
                children.push(visited[j]);
            }
        }
    }

    return children;
};

TemplateEngine.prototype.visit = function(level, node, context){
    if (node instanceof StateTemplateNode) {
        var stateTemplateNode = node;
        var stateInstance = this.mapContextToStateInstance(stateTemplateNode.state, context, stateTemplateNode);

        var children = this.collect(level+1, node.children, context);

        var retValues = [];
        retValues.push(this.implementation.executeTemplate(stateInstance, children));
        return retValues;
    } else if (node instanceof CollectionTemplateNode){
        var collectionTemplateNode = node;
        if (collectionTemplateNode.properties!=null){
            var value = null;
            if (collectionTemplateNode.properties.length>0) {
                var rootProperty = collectionTemplateNode.properties[0];
                var rootObject = context[rootProperty.name];
                if ((rootObject!=null) && (rootObject instanceof stop.Stop.models.StateInstance)){
                    var stateInstance = rootObject;
                    var nodeIndex = 1;
                    while (nodeIndex < collectionTemplateNode.properties.length) {
                        var nodeProperty = collectionTemplateNode.properties[nodeIndex];
                        var nodeValue = stateInstance.properties[nodeProperty.name];
                        if (nodeValue!=null) {
                            if (nodeIndex == (collectionTemplateNode.properties.length-1)){
                                value = nodeValue;
                                break;
                            }else if (nodeValue instanceof stop.Stop.models.StateInstance) {
                                stateInstance = nodeValue;
                                nodeIndex++;
                            } else {
                                break;
                            }
                        }else {
                            break;
                        }
                    }
                }
            }
            if (!collectionTemplateNode.empty && (value != null) && (value instanceof Array) && (value.length>0)) {
                var values = value;
                var retValues = [];
                for (var j in values) {
                    var o = values[j];
                    if (o instanceof stop.Stop.models.StateInstance) {
                        var si = o;
                        var valueContext = {};
                        for (var key in context){
                            valueContext[key] = context[key];
                        }
                        for (var key in si.properties){
                            valueContext[key] = si.properties[key];
                        }
                        valueContext[collectionTemplateNode.getProperty().name+ "_item"] = si;

                        var retCollect = this.collect(level, node.children, valueContext);
                        for (var key in retCollect){
                            retValues.push(retCollect[key]);
                        }
                    } else {
                        var valueContext = {};
                        for (var key in context){
                            valueContext[key] = context[key];
                        }
                        valueContext[collectionTemplateNode.getProperty().name+ "_item"] = o;

                        var retCollect = this.collect(level, node.children, valueContext);
                        for (var key in retCollect){
                            retValues.push(retCollect[key]);
                        }
                    }
                }
                return retValues;
            } else if (collectionTemplateNode.empty && (value != null) && (value instanceof Array) && (value.length==0)) {
                return this.collect(level, node.children, context);
            } else if (collectionTemplateNode.empty && (value==null)){
                return this.collect(level, node.children, context);
            }
        }else {
            if (context[collectionTemplateNode.getProperty().name]) {
                var value = context[collectionTemplateNode.getProperty().name];
                if (!collectionTemplateNode.empty && (value != null) && (value instanceof Array) && (value.length>0)) {
                    var values = value;
                    var retValues = [];
                    for (var i in values) {
                        var o = values[i];
                        if (o instanceof stop.Stop.models.StateInstance) {
                            var si = o;

                            var valueContext = {};
                            for (var key in context){
                                valueContext[key] = context[key];
                            }
                            for (var key in si.properties){
                                valueContext[key] = si.properties[key];
                            }
                            valueContext[collectionTemplateNode.getProperty().name+ "_item"] = si;

                            var retCollect = this.collect(level, node.children, valueContext);
                            for (var key in retCollect){
                                retValues.push(retCollect[key]);
                            }
                        } else {
                            var valueContext = {};
                            for (var key in context){
                                valueContext[key] = context[key];
                            }
                            valueContext[collectionTemplateNode.getProperty().name+ "_item"] = o;

                            var retCollect = this.collect(level, node.children, valueContext);
                            for (var key in retCollect){
                                retValues.push(retCollect[key]);
                            }
                        }
                    }
                    return  retValues;
                } else if (collectionTemplateNode.empty && (value != null) && (value instanceof Array) && (value.length==0)) {
                    return this.collect(level, node.children, context);
                }
            } else if (collectionTemplateNode.empty && !context[collectionTemplateNode.getProperty().name]) {
                return this.collect(level, node.children, context);
            }
        }
    }else if (node instanceof ConditionalTemplateNode) {
        var conditionalTemplateNode = node;
        if (conditionalTemplateNode.properties!=null){
            var value = null;
            if (conditionalTemplateNode.properties.length > 0) {
                var rootProperty = conditionalTemplateNode.properties[0];
                var rootObject = context[rootProperty.name];
                if ((rootObject!=null) && (rootObject instanceof stop.Stop.models.StateInstance)){
                    var stateInstance = rootObject;
                    var nodeIndex = 1;
                    while (nodeIndex < conditionalTemplateNode.properties.length) {
                        var nodeProperty = conditionalTemplateNode.properties[nodeIndex];
                        var nodeValue = stateInstance.properties[nodeProperty.name];
                        if (nodeValue!=null) {
                            if (nodeIndex == (conditionalTemplateNode.properties.length-1)){
                                value = nodeValue;
                                break;
                            }else if (nodeValue instanceof stop.Stop.models.StateInstance) {
                                stateInstance = nodeValue;
                                nodeIndex++;
                            } else {
                                break;
                            }
                        }else {
                            break;
                        }
                    }
                }
            }
            if (!conditionalTemplateNode.empty && (value != null) && (value != false) && !((value instanceof Array) && (value.length==0))) {
                var valueContext = {};
                for (var key in context){
                    valueContext[key] = context[key];
                }

                if (value instanceof stop.Stop.models.StateInstance) {
                    var si = value;
                    for (var key in si.properties){
                        valueContext[key] = si.properties[key];
                    }
                }

                return this.collect(level, node.children, valueContext);
            } else if (conditionalTemplateNode.empty && ((value == null) || (value===false) || ((value instanceof Array) && (value.length==0)) )) {
                return this.collect(level, node.children, context);
            }
        } else {
            if (context[conditionalTemplateNode.getProperty().name]) {
                var value = context[conditionalTemplateNode.getProperty().name];
                if (!conditionalTemplateNode.empty && (value != null) && (value !== false) && !((value instanceof Array) && (value.length==0)) ) {
                    var valueContext = {};
                    for (var key in context){
                        valueContext[key] = context[key];
                    }

                    if (value instanceof stop.Stop.models.StateInstance) {
                        var si = value;
                        for (var key in si.properties){
                            valueContext[key] = si.properties[key];
                        }
                    }

                    return this.collect(level, node.children, valueContext);
                } else if (conditionalTemplateNode.empty && ((value == null) || (value === false) || ((value instanceof Array) && (value.length==0)) )) {
                    return this.collect(level, node.children, context);
                }
            } else if (conditionalTemplateNode.empty && !context[conditionalTemplateNode.getProperty().name]) {
                return this.collect(level, node.children, context);
            }
        }
    }
    return null;
};

TemplateEngine.prototype.mapContextToStateInstance = function(state, context, node){
    var props = {};

    for(var key in node.parameters){
        var value = node.parameters[key];

        if (value.type == StateTemplateNodeParameterValue.Type.COLLECTION) {
            if ( value instanceof StopTemplateNodeParameterCollection) {
                var parameterCollection = value;
                var values = [];
                var collectionValues = parameterCollection.getValues();
                for ( var i in collectionValues ){
                    var parameterValue = collectionValues[i];
                    var object = this.mapParameterValue(state, context, key, parameterValue);
                    if (object!=null){
                        values.push(object);
                    }
                }
                props[key] = values;
            }
        }else {
            var object = this.mapParameterValue(state, context, key, value);
            if (object!=null){
                props[key] = object;
            }
        }
    }

    var stateInstance = new stop.Stop.models.StateInstance(state, props);
    stateInstance.validateProperties();

    return stateInstance;
};

TemplateEngine.prototype.mapParameterValue = function(state, context, key, value){
    if (value.type == StateTemplateNodeParameterValue.Type.LITERAL){
        var literalValue = value.value;
        if (parseFloat(literalValue)){
            var floatValue = parseFloat(literalValue);
            var property = state.properties[key];
            if (property!=null) {
                if (
                        property.type == stop.Stop.models.Property.PropertyType.INT32
                                || property.type == stop.Stop.models.Property.PropertyType.SINT32
                                || property.type == stop.Stop.models.Property.PropertyType.FIXED32
                                || property.type == stop.Stop.models.Property.PropertyType.SFIXED32
                                || property.type == stop.Stop.models.Property.PropertyType.UINT32
                ) {
                    return parseInt(floatValue);
                }else if (
                        property.type == stop.Stop.models.Property.PropertyType.INT64
                                || property.type == stop.Stop.models.Property.PropertyType.SINT64
                                || property.type == stop.Stop.models.Property.PropertyType.FIXED64
                                || property.type == stop.Stop.models.Property.PropertyType.SFIXED64
                                || property.type == stop.Stop.models.Property.PropertyType.UINT64
                ) {
                    return parseInt(floatValue);
                } else if (property.type == stop.Stop.models.Property.PropertyType.FLOAT){
                    return floatValue;
                }else {
                    return floatValue;
                }
            }
        }else {
            return literalValue;
        }
    }else if (value.type == StateTemplateNodeParameterValue.Type.ID) {
        var idString = value.value.toString();
        if (context[idString] != null) {
            var property = state.properties[key];
            var contextValue = context[idString];
            if ((property.type == stop.Stop.models.Property.PropertyType.STRING)
                && (contextValue instanceof stop.Stop.models.EnumerationInstance)){
                return contextValue.value;
            }
            return contextValue;
        }
    }else if (value.type == StateTemplateNodeParameterValue.Type.REFERENCE) {
        var referenceString = value.value.toString();
        var referenceValue = this.getObjectValueForReference(context, referenceString);
        var property = state.properties[key];
        if ((property.type == stop.Stop.models.Property.PropertyType.STRING)
                && (referenceValue instanceof stop.Stop.models.EnumerationInstance)){
            return referenceValue.value;
        }
        return referenceValue;
    }

    return null;
};

TemplateEngine.prototype.getObjectValueForReference = function(context, referenceString){
    var parts = referenceString.split(".");
    var partsIndex = 0;
    var idString = parts[0];
    var object = context[idString];
    if (object != null){
        partsIndex++;
        while(partsIndex < parts.length){
            if ( (object!=null) && (object instanceof stop.Stop.models.StateInstance) ) {
                var si = object;
                var part = parts[partsIndex];
                object = si.properties[part];
                partsIndex++;
            } else {
                return null;
            }
        }
    }
    return object;
};

module.exports = TemplateEngine;