"use strict";

var expect = require('chai').expect;

const stop = require('stop');
const stopTemplates = require('../src/index');

describe('TemplateEngine', function() {
    describe('instance', function() {
        it('should create a stop instance based on an input string', function() {
        	let stopTestContent = `
ViewState {
    string message
    [Joke] jokes
    bool on
}

Joke {
    string joke
}

Text {
    string text
}
        	`;
            let templateTestContent = `
Text(text: message)
    [jokes]
        Text(text: joke)
    on
        Text(text: "ON")
    !on
        Text(text: "OFF")
`;
        	expect(function(){
        		let stopInstance = new stop.Stop(stopTestContent);
                let state = stopInstance.states["ViewState"];
                let template = new stopTemplates.StopTemplate(stopInstance, state, templateTestContent);
                let impl = {};
                impl.executeTemplate = function(stateInstance, children){
                    var s = stateInstance.state.name + " ("+ stateInstance.properties["text"] +")\n";
                    for (var i in children){
                        s += children[i] + "\n";
                    }
                    return s;
                };
                impl.renderTemplateChildren = function(children){
                    var sb = "";
                    for (var i in children){
                        sb += children[i];
                    }
                    return sb;
                };
                let templateEngine = new stopTemplates.TemplateEngine(impl, template);
                var joke = new stop.Stop.models.StateInstance(stopInstance.states["Joke"], {joke: "fuck"});
                var instance = new stop.Stop.models.StateInstance(state, {message: "Kyle", jokes:[joke], on: false});
                var result = templateEngine.render(instance);
                console.log(result);
        	}).to.not.throw();
        });
    });
});