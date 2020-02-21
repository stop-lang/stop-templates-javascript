const Scope = require("./Scope");

var CollectionSymbol = function(ctx, enclosingScope){
	Scope.call(this, enclosingScope);
    this.name = ( ctx.ID() != null ? ctx.ID().getText() : ctx.REFERENCE().getText() );
	this.negated = (ctx.NOT() != null);
};
CollectionSymbol.prototype = Object.create(Scope.prototype);
CollectionSymbol.prototype.constructor = CollectionSymbol;

module.exports = CollectionSymbol;