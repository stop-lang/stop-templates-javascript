var Scope = function(scope){
    this.enclosingScope = scope;
    this.definitions = {};
};
Scope.prototype.constructor = Scope;
Scope.prototype.define = function(symbol){
    if (symbol == undefined){
        return;
    }
    if (symbol.name == undefined){
        return;
    }
    var name = symbol.name;
    if (this.definitions[name] != undefined){
        var line = 1;
        var lineScope = this.getEnclosingScopeWithLine(this);
        if(lineScope){
            line = lineScope.line;
        }
        throw {line: line, message: name+ " is already defined"};
    }
    this.definitions[name] = symbol;
};
Scope.prototype.getNestedScopes = function(symbol){
    var nestedScopes = [];

    for (var name in this.definitions){
        var value = this.definitions[name];
        if (value instanceof Scope){
            nestedScopes.push(value);
        }
    }

    return nestedScopes;
};
Scope.prototype.getEnclosingScopeWithLine = function(scope){
    if (scope.line){
        return scope;
    }
    if (scope.enclosingScope){
        return this.getEnclosingScopeWithLine(scope.enclosingScope);
    }
    return undefined;
}

module.exports = Scope;