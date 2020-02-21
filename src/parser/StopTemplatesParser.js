// Generated from StopTemplates.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StopTemplatesListener = require('./StopTemplatesListener').StopTemplatesListener;
var grammarFileName = "StopTemplates.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016h\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0019\n\u0002\f\u0002\u000e\u0002\u001c\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "#\n\u0003\u0003\u0003\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0004",
    "\u0003\u0004\u0006\u0004+\n\u0004\r\u0004\u000e\u0004,\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u00056\n\u0005\f\u0005\u000e\u00059\u000b\u0005\u0007\u0005;\n\u0005",
    "\f\u0005\u000e\u0005>\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005\u0007",
    "H\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bN\n\b\f\b\u000e\bQ",
    "\u000b\b\u0007\bS\n\b\f\b\u000e\bV\u000b\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0005\n]\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0005\u000bd\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002",
    "\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0004\u0004",
    "\u0002\t\u000b\u0011\u0012\u0003\u0002\u0011\u0012\u0002j\u0002\u001a",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006(\u0003",
    "\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002\nA\u0003\u0002\u0002\u0002",
    "\fG\u0003\u0002\u0002\u0002\u000eI\u0003\u0002\u0002\u0002\u0010Y\u0003",
    "\u0002\u0002\u0002\u0012\\\u0003\u0002\u0002\u0002\u0014c\u0003\u0002",
    "\u0002\u0002\u0016\u0019\u0007\u0014\u0002\u0002\u0017\u0019\u0005\u0004",
    "\u0003\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002",
    "\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001d\u0003\u0002",
    "\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0002",
    "\u0002\u0003\u001e\u0003\u0003\u0002\u0002\u0002\u001f#\u0005\b\u0005",
    "\u0002 #\u0005\u0012\n\u0002!#\u0005\u0014\u000b\u0002\"\u001f\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"!\u0003\u0002\u0002\u0002",
    "#$\u0003\u0002\u0002\u0002$&\u0007\u0014\u0002\u0002%\'\u0005\u0006",
    "\u0004\u0002&%\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "\u0005\u0003\u0002\u0002\u0002(*\u0007\u0015\u0002\u0002)+\u0005\u0004",
    "\u0003\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,*\u0003",
    "\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    "./\u0007\u0016\u0002\u0002/\u0007\u0003\u0002\u0002\u000201\u0007\u0010",
    "\u0002\u00021<\u0007\u0003\u0002\u000227\u0005\n\u0006\u000234\u0007",
    "\u0004\u0002\u000246\u0005\n\u0006\u000253\u0003\u0002\u0002\u00026",
    "9\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:2\u0003\u0002",
    "\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002",
    "?@\u0007\u0005\u0002\u0002@\t\u0003\u0002\u0002\u0002AB\u0007\u0011",
    "\u0002\u0002BC\u0007\u0006\u0002\u0002CD\u0005\f\u0007\u0002D\u000b",
    "\u0003\u0002\u0002\u0002EH\u0005\u000e\b\u0002FH\u0005\u0010\t\u0002",
    "GE\u0003\u0002\u0002\u0002GF\u0003\u0002\u0002\u0002H\r\u0003\u0002",
    "\u0002\u0002IT\u0007\u0007\u0002\u0002JO\u0005\u0010\t\u0002KL\u0007",
    "\u0004\u0002\u0002LN\u0005\u0010\t\u0002MK\u0003\u0002\u0002\u0002N",
    "Q\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002",
    "\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002\u0002RJ\u0003\u0002",
    "\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003",
    "\u0002\u0002\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002",
    "WX\u0007\b\u0002\u0002X\u000f\u0003\u0002\u0002\u0002YZ\t\u0002\u0002",
    "\u0002Z\u0011\u0003\u0002\u0002\u0002[]\u0007\r\u0002\u0002\\[\u0003",
    "\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002",
    "^_\u0007\u0007\u0002\u0002_`\t\u0003\u0002\u0002`a\u0007\b\u0002\u0002",
    "a\u0013\u0003\u0002\u0002\u0002bd\u0007\r\u0002\u0002cb\u0003\u0002",
    "\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\t",
    "\u0003\u0002\u0002f\u0015\u0003\u0002\u0002\u0002\u000e\u0018\u001a",
    "\"&,7<GOT\\c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "','", "')'", "':'", "'['", "']'", null, 
                     null, null, "'\t'", "'!'", "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "STRING_LITERAL", 
                      "NUMBER_LITERAL", "BOOL_LITERAL", "TAB", "NOT", "DOT", 
                      "NUMBER", "COMPONENT_TYPE", "ID", "REFERENCE", "SKIP_", 
                      "NEWLINE", "INDENT", "DEDENT" ];

var ruleNames =  [ "file", "statement", "nested_statements", "component", 
                   "component_parameter", "component_parameter_value_or_collection", 
                   "component_parameter_value_collection", "component_parameter_value", 
                   "collection", "conditional" ];

function StopTemplatesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StopTemplatesParser.prototype = Object.create(antlr4.Parser.prototype);
StopTemplatesParser.prototype.constructor = StopTemplatesParser;

Object.defineProperty(StopTemplatesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StopTemplatesParser.EOF = antlr4.Token.EOF;
StopTemplatesParser.T__0 = 1;
StopTemplatesParser.T__1 = 2;
StopTemplatesParser.T__2 = 3;
StopTemplatesParser.T__3 = 4;
StopTemplatesParser.T__4 = 5;
StopTemplatesParser.T__5 = 6;
StopTemplatesParser.STRING_LITERAL = 7;
StopTemplatesParser.NUMBER_LITERAL = 8;
StopTemplatesParser.BOOL_LITERAL = 9;
StopTemplatesParser.TAB = 10;
StopTemplatesParser.NOT = 11;
StopTemplatesParser.DOT = 12;
StopTemplatesParser.NUMBER = 13;
StopTemplatesParser.COMPONENT_TYPE = 14;
StopTemplatesParser.ID = 15;
StopTemplatesParser.REFERENCE = 16;
StopTemplatesParser.SKIP_ = 17;
StopTemplatesParser.NEWLINE = 18;
StopTemplatesParser.INDENT = 19;
StopTemplatesParser.DEDENT = 20;

StopTemplatesParser.RULE_file = 0;
StopTemplatesParser.RULE_statement = 1;
StopTemplatesParser.RULE_nested_statements = 2;
StopTemplatesParser.RULE_component = 3;
StopTemplatesParser.RULE_component_parameter = 4;
StopTemplatesParser.RULE_component_parameter_value_or_collection = 5;
StopTemplatesParser.RULE_component_parameter_value_collection = 6;
StopTemplatesParser.RULE_component_parameter_value = 7;
StopTemplatesParser.RULE_collection = 8;
StopTemplatesParser.RULE_conditional = 9;


function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.EOF = function() {
    return this.getToken(StopTemplatesParser.EOF, 0);
};

FileContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StopTemplatesParser.NEWLINE);
    } else {
        return this.getToken(StopTemplatesParser.NEWLINE, i);
    }
};


FileContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitFile(this);
	}
};




StopTemplatesParser.FileContext = FileContext;

StopTemplatesParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StopTemplatesParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopTemplatesParser.T__4) | (1 << StopTemplatesParser.NOT) | (1 << StopTemplatesParser.COMPONENT_TYPE) | (1 << StopTemplatesParser.ID) | (1 << StopTemplatesParser.REFERENCE) | (1 << StopTemplatesParser.NEWLINE))) !== 0)) {
            this.state = 22;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case StopTemplatesParser.NEWLINE:
                this.state = 20;
                this.match(StopTemplatesParser.NEWLINE);
                break;
            case StopTemplatesParser.T__4:
            case StopTemplatesParser.NOT:
            case StopTemplatesParser.COMPONENT_TYPE:
            case StopTemplatesParser.ID:
            case StopTemplatesParser.REFERENCE:
                this.state = 21;
                this.statement();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 26;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 27;
        this.match(StopTemplatesParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.NEWLINE = function() {
    return this.getToken(StopTemplatesParser.NEWLINE, 0);
};

StatementContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

StatementContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

StatementContext.prototype.conditional = function() {
    return this.getTypedRuleContext(ConditionalContext,0);
};

StatementContext.prototype.nested_statements = function() {
    return this.getTypedRuleContext(Nested_statementsContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitStatement(this);
	}
};




StopTemplatesParser.StatementContext = StatementContext;

StopTemplatesParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StopTemplatesParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 29;
            this.component();
            break;

        case 2:
            this.state = 30;
            this.collection();
            break;

        case 3:
            this.state = 31;
            this.conditional();
            break;

        }
        this.state = 34;
        this.match(StopTemplatesParser.NEWLINE);
        this.state = 36;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopTemplatesParser.INDENT) {
            this.state = 35;
            this.nested_statements();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Nested_statementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_nested_statements;
    return this;
}

Nested_statementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Nested_statementsContext.prototype.constructor = Nested_statementsContext;

Nested_statementsContext.prototype.INDENT = function() {
    return this.getToken(StopTemplatesParser.INDENT, 0);
};

Nested_statementsContext.prototype.DEDENT = function() {
    return this.getToken(StopTemplatesParser.DEDENT, 0);
};

Nested_statementsContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Nested_statementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterNested_statements(this);
	}
};

Nested_statementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitNested_statements(this);
	}
};




StopTemplatesParser.Nested_statementsContext = Nested_statementsContext;

StopTemplatesParser.prototype.nested_statements = function() {

    var localctx = new Nested_statementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StopTemplatesParser.RULE_nested_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(StopTemplatesParser.INDENT);
        this.state = 40; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 39;
            this.statement();
            this.state = 42; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopTemplatesParser.T__4) | (1 << StopTemplatesParser.NOT) | (1 << StopTemplatesParser.COMPONENT_TYPE) | (1 << StopTemplatesParser.ID) | (1 << StopTemplatesParser.REFERENCE))) !== 0));
        this.state = 44;
        this.match(StopTemplatesParser.DEDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.COMPONENT_TYPE = function() {
    return this.getToken(StopTemplatesParser.COMPONENT_TYPE, 0);
};

ComponentContext.prototype.component_parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Component_parameterContext);
    } else {
        return this.getTypedRuleContext(Component_parameterContext,i);
    }
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitComponent(this);
	}
};




StopTemplatesParser.ComponentContext = ComponentContext;

StopTemplatesParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StopTemplatesParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(StopTemplatesParser.COMPONENT_TYPE);
        this.state = 47;
        this.match(StopTemplatesParser.T__0);
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StopTemplatesParser.ID) {
            this.state = 48;
            this.component_parameter();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===StopTemplatesParser.T__1) {
                this.state = 49;
                this.match(StopTemplatesParser.T__1);
                this.state = 50;
                this.component_parameter();
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(StopTemplatesParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Component_parameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_component_parameter;
    return this;
}

Component_parameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Component_parameterContext.prototype.constructor = Component_parameterContext;

Component_parameterContext.prototype.ID = function() {
    return this.getToken(StopTemplatesParser.ID, 0);
};

Component_parameterContext.prototype.component_parameter_value_or_collection = function() {
    return this.getTypedRuleContext(Component_parameter_value_or_collectionContext,0);
};

Component_parameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterComponent_parameter(this);
	}
};

Component_parameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitComponent_parameter(this);
	}
};




StopTemplatesParser.Component_parameterContext = Component_parameterContext;

StopTemplatesParser.prototype.component_parameter = function() {

    var localctx = new Component_parameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StopTemplatesParser.RULE_component_parameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(StopTemplatesParser.ID);
        this.state = 64;
        this.match(StopTemplatesParser.T__3);
        this.state = 65;
        this.component_parameter_value_or_collection();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Component_parameter_value_or_collectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_component_parameter_value_or_collection;
    return this;
}

Component_parameter_value_or_collectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Component_parameter_value_or_collectionContext.prototype.constructor = Component_parameter_value_or_collectionContext;

Component_parameter_value_or_collectionContext.prototype.component_parameter_value_collection = function() {
    return this.getTypedRuleContext(Component_parameter_value_collectionContext,0);
};

Component_parameter_value_or_collectionContext.prototype.component_parameter_value = function() {
    return this.getTypedRuleContext(Component_parameter_valueContext,0);
};

Component_parameter_value_or_collectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterComponent_parameter_value_or_collection(this);
	}
};

Component_parameter_value_or_collectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitComponent_parameter_value_or_collection(this);
	}
};




StopTemplatesParser.Component_parameter_value_or_collectionContext = Component_parameter_value_or_collectionContext;

StopTemplatesParser.prototype.component_parameter_value_or_collection = function() {

    var localctx = new Component_parameter_value_or_collectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, StopTemplatesParser.RULE_component_parameter_value_or_collection);
    try {
        this.state = 69;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StopTemplatesParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.component_parameter_value_collection();
            break;
        case StopTemplatesParser.STRING_LITERAL:
        case StopTemplatesParser.NUMBER_LITERAL:
        case StopTemplatesParser.BOOL_LITERAL:
        case StopTemplatesParser.ID:
        case StopTemplatesParser.REFERENCE:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.component_parameter_value();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Component_parameter_value_collectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_component_parameter_value_collection;
    return this;
}

Component_parameter_value_collectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Component_parameter_value_collectionContext.prototype.constructor = Component_parameter_value_collectionContext;

Component_parameter_value_collectionContext.prototype.component_parameter_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Component_parameter_valueContext);
    } else {
        return this.getTypedRuleContext(Component_parameter_valueContext,i);
    }
};

Component_parameter_value_collectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterComponent_parameter_value_collection(this);
	}
};

Component_parameter_value_collectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitComponent_parameter_value_collection(this);
	}
};




StopTemplatesParser.Component_parameter_value_collectionContext = Component_parameter_value_collectionContext;

StopTemplatesParser.prototype.component_parameter_value_collection = function() {

    var localctx = new Component_parameter_value_collectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, StopTemplatesParser.RULE_component_parameter_value_collection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(StopTemplatesParser.T__4);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopTemplatesParser.STRING_LITERAL) | (1 << StopTemplatesParser.NUMBER_LITERAL) | (1 << StopTemplatesParser.BOOL_LITERAL) | (1 << StopTemplatesParser.ID) | (1 << StopTemplatesParser.REFERENCE))) !== 0)) {
            this.state = 72;
            this.component_parameter_value();
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===StopTemplatesParser.T__1) {
                this.state = 73;
                this.match(StopTemplatesParser.T__1);
                this.state = 74;
                this.component_parameter_value();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 85;
        this.match(StopTemplatesParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Component_parameter_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_component_parameter_value;
    return this;
}

Component_parameter_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Component_parameter_valueContext.prototype.constructor = Component_parameter_valueContext;

Component_parameter_valueContext.prototype.ID = function() {
    return this.getToken(StopTemplatesParser.ID, 0);
};

Component_parameter_valueContext.prototype.REFERENCE = function() {
    return this.getToken(StopTemplatesParser.REFERENCE, 0);
};

Component_parameter_valueContext.prototype.STRING_LITERAL = function() {
    return this.getToken(StopTemplatesParser.STRING_LITERAL, 0);
};

Component_parameter_valueContext.prototype.NUMBER_LITERAL = function() {
    return this.getToken(StopTemplatesParser.NUMBER_LITERAL, 0);
};

Component_parameter_valueContext.prototype.BOOL_LITERAL = function() {
    return this.getToken(StopTemplatesParser.BOOL_LITERAL, 0);
};

Component_parameter_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterComponent_parameter_value(this);
	}
};

Component_parameter_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitComponent_parameter_value(this);
	}
};




StopTemplatesParser.Component_parameter_valueContext = Component_parameter_valueContext;

StopTemplatesParser.prototype.component_parameter_value = function() {

    var localctx = new Component_parameter_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, StopTemplatesParser.RULE_component_parameter_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StopTemplatesParser.STRING_LITERAL) | (1 << StopTemplatesParser.NUMBER_LITERAL) | (1 << StopTemplatesParser.BOOL_LITERAL) | (1 << StopTemplatesParser.ID) | (1 << StopTemplatesParser.REFERENCE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.ID = function() {
    return this.getToken(StopTemplatesParser.ID, 0);
};

CollectionContext.prototype.REFERENCE = function() {
    return this.getToken(StopTemplatesParser.REFERENCE, 0);
};

CollectionContext.prototype.NOT = function() {
    return this.getToken(StopTemplatesParser.NOT, 0);
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitCollection(this);
	}
};




StopTemplatesParser.CollectionContext = CollectionContext;

StopTemplatesParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, StopTemplatesParser.RULE_collection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopTemplatesParser.NOT) {
            this.state = 89;
            this.match(StopTemplatesParser.NOT);
        }

        this.state = 92;
        this.match(StopTemplatesParser.T__4);
        this.state = 93;
        _la = this._input.LA(1);
        if(!(_la===StopTemplatesParser.ID || _la===StopTemplatesParser.REFERENCE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 94;
        this.match(StopTemplatesParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StopTemplatesParser.RULE_conditional;
    return this;
}

ConditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

ConditionalContext.prototype.ID = function() {
    return this.getToken(StopTemplatesParser.ID, 0);
};

ConditionalContext.prototype.REFERENCE = function() {
    return this.getToken(StopTemplatesParser.REFERENCE, 0);
};

ConditionalContext.prototype.NOT = function() {
    return this.getToken(StopTemplatesParser.NOT, 0);
};

ConditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.enterConditional(this);
	}
};

ConditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof StopTemplatesListener ) {
        listener.exitConditional(this);
	}
};




StopTemplatesParser.ConditionalContext = ConditionalContext;

StopTemplatesParser.prototype.conditional = function() {

    var localctx = new ConditionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, StopTemplatesParser.RULE_conditional);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===StopTemplatesParser.NOT) {
            this.state = 96;
            this.match(StopTemplatesParser.NOT);
        }

        this.state = 99;
        _la = this._input.LA(1);
        if(!(_la===StopTemplatesParser.ID || _la===StopTemplatesParser.REFERENCE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.StopTemplatesParser = StopTemplatesParser;
