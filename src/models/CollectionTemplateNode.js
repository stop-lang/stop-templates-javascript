const TemplateNode = require("./TemplateNode");

var CollectionTemplateNode = function(parent, properties, empty){
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
CollectionTemplateNode.prototype = Object.create(TemplateNode.prototype);
CollectionTemplateNode.prototype.constructor = CollectionTemplateNode;

CollectionTemplateNode.prototype.getProperty = function() {
	if (this.properties && (this.properties.length>0)){
		return this.properties[this.properties.length-1];
	}
	return this.property;
};

module.exports = CollectionTemplateNode;