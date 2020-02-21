const TemplateNode = require("./TemplateNode");

var ConditionalTemplateNode = function(parent, properties, empty){
    TemplateNode.call(this, parent);
    this.properties = null;
    this.property = null;
    if (properties){
    	if (properties instanceof Array){
    		this.properties = properties;
		}else{
			this.property = properties;
		}
	}
    this.empty = empty;
};
ConditionalTemplateNode.prototype = Object.create(TemplateNode.prototype);
ConditionalTemplateNode.prototype.constructor = ConditionalTemplateNode;

ConditionalTemplateNode.prototype.getProperty = function() {
	return this.property;
};

module.exports = ConditionalTemplateNode;