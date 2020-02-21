const TemplateNode = require("./TemplateNode");

var StateTemplateNode = function(parent, state){
    TemplateNode.call(this, parent);
    this.state = state;
    this.parameters = {};
};
StateTemplateNode.prototype = Object.create(TemplateNode.prototype);
StateTemplateNode.prototype.constructor = StateTemplateNode;

StateTemplateNode.prototype.addParameter = function(key, value) {
	this.parameters[key] = value;
};

module.exports = StateTemplateNode;