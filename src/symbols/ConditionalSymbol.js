const Scope = require("./Scope");

var ConditionalSymbol = function(ctx, enclosingScope){
	Scope.call(this, enclosingScope);
    this.name = ( ctx.ID() != null ? ctx.ID().getText() : ctx.REFERENCE().getText() );
	this.negated = (ctx.NOT() != null);
};
ConditionalSymbol.prototype = Object.create(Scope.prototype);
ConditionalSymbol.prototype.constructor = ConditionalSymbol;

module.exports = ConditionalSymbol;