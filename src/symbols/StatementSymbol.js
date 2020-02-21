const Scope = require("./Scope");

var StatementSymbol = function(ctx, enclosingScope){
	Scope.call(this, enclosingScope);
    this.name = ctx.getText();
};
StatementSymbol.prototype = Object.create(Scope.prototype);
StatementSymbol.prototype.constructor = StatementSymbol;

module.exports = StatementSymbol;