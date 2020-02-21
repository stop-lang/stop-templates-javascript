var StateTemplateNodeParameterCollection = function(type){
    this.type = type;
    this.values = [];
};
StateTemplateNodeParameterCollection.prototype.constructor = StateTemplateNodeParameterCollection;

StateTemplateNodeParameterCollection.prototype.addParameterValue = function(value) {
	this.values.push(value);
};

module.exports = StateTemplateNodeParameterCollection;
