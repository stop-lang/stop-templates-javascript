const antlr4 = require("antlr4");
const StopTemplatesLexer = require("./parser/StopTemplatesLexer");
const StopTemplatesParser = require("./parser/StopTemplatesParser");

const StateTemplateNode = require("./models/StateTemplateNode");
const StateTemplateNodeParameterValue = require("./models/StateTemplateNodeParameterValue");

const DefPhase = require("./validation/DefPhase");
const RefPhase = require("./validation/RefPhase");

var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};
AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;
AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};

function Template(stop, state, input){
	var stream = antlr4.CharStreams.fromString(input);
    var lexer = new StopTemplatesLexer.StopTemplatesLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new StopTemplatesParser.StopTemplatesParser(tokens);
    var annotations = [];
    
    var listener = new AnnotatingErrorListener(annotations);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    var tree = parser.file();
    
    var defPhase = new DefPhase();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(defPhase, tree);
    handleErrors(listener, defPhase.errors);

    this.state = state;
    this.root = new StateTemplateNode(this.state);
    for(var key in state.properties){
        this.root.addParameter(key, new StateTemplateNodeParameterValue(StateTemplateNodeParameterValue.Type.ID, key));
    }

    var refPhase = new RefPhase(stop, state, this.root, defPhase.globals, defPhase.scopes);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(refPhase, tree);
    handleErrors(listener, refPhase.errors);

    if (annotations.length > 0){
        for (var i in annotations){
            console.log(annotations[i]);
        }
        throw Error("invalid file");
    }
}

function handleErrors(listener, errors){
    for (var errorIndex in errors){
        var error = errors[errorIndex];
        listener.annotations.push({
            row: error.line - 1,
            column: 0,
            text: error.message,
            type: "error"
        });
    }
}

module.exports = Template;