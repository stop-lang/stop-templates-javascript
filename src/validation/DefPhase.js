const StopTemplatesListener = require("../parser/StopTemplatesListener");
const Scope = require("../symbols/Scope");
const StatementSymbol = require("../symbols/StatementSymbol");
const CollectionSymbol = require("../symbols/CollectionSymbol");
const ConditionalSymbol = require("../symbols/ConditionalSymbol");
const ComponentSymbol = require("../symbols/ComponentSymbol");
const ParameterSymbol = require("../symbols/ParameterSymbol");
const uuidv4 = require('uuid/v4');

var DefPhase = function() {
    StopTemplatesListener.StopTemplatesListener.call(this); // inherit default listener
    this.errors = [];
    this.globals = undefined;
    this.scopes = [];
    this.currentScope = undefined;
    return this;
};
DefPhase.prototype = Object.create(StopTemplatesListener.StopTemplatesListener.prototype);
DefPhase.prototype.constructor = DefPhase;
DefPhase.prototype.saveScope = function(ctx, s) {
    if (!ctx.id){
        ctx.id = uuidv4();
    } 
    this.scopes[ctx.id] = s;
};

// Enter a parse tree produced by StopTemplatesParser#file.
DefPhase.prototype.enterFile = function(ctx) {
	this.globals = new Scope();
    this.currentScope = this.globals;
};

// Enter a parse tree produced by StopTemplatesParser#statement.
DefPhase.prototype.enterStatement = function(ctx) {
	var statementSymbol = new StatementSymbol(ctx, this.currentScope);
	this.saveScope(ctx, statementSymbol);
    this.currentScope = statementSymbol;
};

// Exit a parse tree produced by StopTemplatesParser#statement.
DefPhase.prototype.exitStatement = function(ctx) {
	this.currentScope = this.currentScope.enclosingScope;
};


// Enter a parse tree produced by StopTemplatesParser#nested_statements.
DefPhase.prototype.enterNested_statements = function(ctx) {
	var localScope = new Scope(this.currentScope);
    this.saveScope(ctx, localScope);
    this.currentScope = localScope;
};

// Exit a parse tree produced by StopTemplatesParser#nested_statements.
DefPhase.prototype.exitNested_statements = function(ctx) {
	this.currentScope = this.currentScope.enclosingScope;
};


// Enter a parse tree produced by StopTemplatesParser#component.
DefPhase.prototype.enterComponent = function(ctx) {
	var component = new ComponentSymbol(ctx, this.currentScope);
    this.saveScope(ctx, component);
    this.currentScope = component;
};

// Exit a parse tree produced by StopTemplatesParser#component.
DefPhase.prototype.exitComponent = function(ctx) {
	this.currentScope = this.currentScope.enclosingScope;
};


// Enter a parse tree produced by StopTemplatesParser#component_parameter.
DefPhase.prototype.enterComponent_parameter = function(ctx) {
	if( this.currentScope instanceof ComponentSymbol){
        var componentSymbol = this.currentScope;
        var parameterSymbol = new ParameterSymbol(ctx);
        componentSymbol.addParameter(ctx.ID().getText(), parameterSymbol);
    }
};

// Enter a parse tree produced by StopTemplatesParser#collection.
DefPhase.prototype.enterCollection = function(ctx) {
	var collection = new CollectionSymbol(ctx, this.currentScope);
    this.saveScope(ctx, collection);
    this.currentScope = collection;
};

// Exit a parse tree produced by StopTemplatesParser#collection.
DefPhase.prototype.exitCollection = function(ctx) {
	this.currentScope = this.currentScope.enclosingScope;
};


// Enter a parse tree produced by StopTemplatesParser#conditional.
DefPhase.prototype.enterConditional = function(ctx) {
	var conditional = new ConditionalSymbol(ctx, this.currentScope);
    this.saveScope(ctx, conditional);
    this.currentScope = conditional;
};

// Exit a parse tree produced by StopTemplatesParser#conditional.
DefPhase.prototype.exitConditional = function(ctx) {
	this.currentScope = this.currentScope.enclosingScope;
};


module.exports = DefPhase;
