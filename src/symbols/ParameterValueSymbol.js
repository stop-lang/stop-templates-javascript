const Scope = require("./Scope");

var ParameterValueSymbol = function(name, ctx){
    Scope.call(this, null);
    this.name = name;
    this.ctx = ctx;
};
ParameterValueSymbol.prototype = Object.create(Scope.prototype);
ParameterValueSymbol.prototype.constructor = ParameterValueSymbol;

ParameterValueSymbol.prototype.isValueID = function() {
	return this.ctx.ID() != null;
};
ParameterValueSymbol.prototype.getValueID = function() {
	return this.ctx.ID().getText();
};
ParameterValueSymbol.prototype.isValueReference = function() {
	return this.ctx.REFERENCE() != null;
};
ParameterValueSymbol.prototype.getValueReference = function() {
	return this.ctx.REFERENCE().getText();
};
ParameterValueSymbol.prototype.isValueString = function() {
	return this.ctx.STRING_LITERAL() != null;
};
ParameterValueSymbol.prototype.isValueNumber = function() {
	return this.ctx.NUMBER_LITERAL() != null;
};
ParameterValueSymbol.prototype.isValueBoolean = function() {
	return this.ctx.BOOL_LITERAL() != null;
};
ParameterValueSymbol.prototype.getValue = function() {
    if (this.ctx.STRING_LITERAL() != null) {
        return this.getStringLiteral();
    }
    if (this.ctx.NUMBER_LITERAL() != null) {
        return this.getNumberLiteral();
    }
    if (this.ctx.BOOL_LITERAL() != null) {
        return this.getBooleanLiteral();
    }
    return this.ctx.getText();
};
ParameterValueSymbol.prototype.getStringLiteral = function() {
    var literalValue = this.ctx.STRING_LITERAL().getText();
    if ((literalValue!=null) && (literalValue.length > 2)){
        return literalValue.substring(1, literalValue.length-1);
    }
    return literalValue;
};
ParameterValueSymbol.prototype.getBooleanLiteral = function() {
	return this.ctx.BOOL_LITERAL().getText() == "true";
};
ParameterValueSymbol.prototype.getNumberLiteral = function() {
	return parseFloat(this.ctx.NUMBER_LITERAL().getText());
};

module.exports = ParameterValueSymbol;
