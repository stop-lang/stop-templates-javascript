const Scope = require("./Scope");

var ReferenceSymbol = function(name, property){
	Scope.call(this, null);
    this.name = name;
    this.property = property;
};
ReferenceSymbol.prototype = Object.create(Scope.prototype);
ReferenceSymbol.prototype.constructor = ReferenceSymbol;

module.exports = ReferenceSymbol;
