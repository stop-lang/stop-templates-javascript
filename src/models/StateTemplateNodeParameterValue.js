var StateTemplateNodeParameterValue = function(type, value){
    this.type = type;
    this.value = value;
};
StateTemplateNodeParameterValue.prototype.constructor = StateTemplateNodeParameterValue;

StateTemplateNodeParameterValue.Type = {
	LITERAL : 0,
	ID: 1,
	COLLECTION : 2,
	REFERENCE : 3
};

module.exports = StateTemplateNodeParameterValue;
