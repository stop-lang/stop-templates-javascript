const Scope = require("./Scope");

const ParameterValueSymbol = require("./ParameterValueSymbol");

var ParameterCollectionSymbol = function(name, ctx){
	Scope.call(this, null);
    this.name = name;
    this.ctx = ctx;
    this.values = [];

    for(var i in ctx.component_parameter_value()){
        var parameterCtx = ctx.component_parameter_value()[i];
        this.values.push(new ParameterValueSymbol(name, parameterCtx));
    }
};
ParameterCollectionSymbol.prototype = Object.create(Scope.prototype);
ParameterCollectionSymbol.prototype.constructor = ParameterCollectionSymbol;

module.exports = ParameterCollectionSymbol;