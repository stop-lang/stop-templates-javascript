var TemplateNode = function(parent){
    this.parent = parent;
    this.children = [];
};
TemplateNode.prototype.constructor = TemplateNode;

TemplateNode.prototype.addChild = function(child) {
	this.children.push(child);
};

module.exports = TemplateNode;