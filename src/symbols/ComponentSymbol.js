const Scope = require("./Scope");

var ComponentSymbol = function(ctx, enclosingScope){
	Scope.call(this, enclosingScope);
    this.name = ctx.COMPONENT_TYPE().getText();
    this.parameters = {};
};
ComponentSymbol.prototype = Object.create(Scope.prototype);
ComponentSymbol.prototype.constructor = ComponentSymbol;

ComponentSymbol.prototype.addParameter = function(name, value) {
	this.parameters[name] = value;
};

module.exports = ComponentSymbol;