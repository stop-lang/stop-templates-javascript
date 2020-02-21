const Scope = require("./Scope");
const ParameterValueSymbol = require("./ParameterValueSymbol");
const ParameterCollectionSymbol = require("./ParameterCollectionSymbol");

var ParameterSymbol = function(ctx, enclosingScope){
	Scope.call(this, enclosingScope);
    this.name = ctx.ID().getText();
    this.ctx = ctx;
};
ParameterSymbol.prototype = Object.create(Scope.prototype);
ParameterSymbol.prototype.constructor = ParameterSymbol;

ParameterSymbol.prototype.isValue = function() {
	return this.ctx.component_parameter_value_or_collection().component_parameter_value()!=null;
};
ParameterSymbol.prototype.getValueSymbol = function() {
	return new ParameterValueSymbol(this.ctx.ID().getText(), this.ctx.component_parameter_value_or_collection().component_parameter_value());
};
ParameterSymbol.prototype.isCollection = function() {
	return this.ctx.component_parameter_value_or_collection().component_parameter_value_collection()!=null;
};
ParameterSymbol.prototype.getCollectionSymbol = function() {
	return new ParameterCollectionSymbol(this.ctx.ID().getText(), this.ctx.component_parameter_value_or_collection().component_parameter_value_collection());
};

module.exports = ParameterSymbol;