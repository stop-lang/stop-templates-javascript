grammar StopTemplates;

tokens { INDENT, DEDENT }

@lexer::header {
  let StopTemplatesParser = require('./StopTemplatesParser').StopTemplatesParser;
  let CommonToken = require('antlr4/Token').CommonToken;
}

@lexer::members {
    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
    this.token_queue = [];
    // The stack that keeps track of the indentation level.
    this.indents = [];
    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;

  StopTemplatesLexer.prototype.emitToken = function(token) {
    this._token = token;
    this.token_queue.push(token);
  };

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  StopTemplatesLexer.prototype.nextToken = function() {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this._input.LA(1) === StopTemplatesParser.EOF && this.indents.length) {
      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter(function(val) {
        return val.type !== StopTemplatesParser.EOF;
      });

      // First emit an extra line break that serves as the end of the statement.
      this.emitToken(this.commonToken(StopTemplatesParser.NEWLINE, "\n"));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emitToken(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emitToken(this.commonToken(StopTemplatesParser.EOF, "<EOF>"));
    }

    let next = antlr4.Lexer.prototype.nextToken.call(this);
    return this.token_queue.length ? this.token_queue.shift() : next;
  };

  StopTemplatesLexer.prototype.createDedent = function() {
    return this.commonToken(StopTemplatesParser.DEDENT, "");
  }

  StopTemplatesLexer.prototype.commonToken = function(type, text) {
    let stop = this.getCharIndex() - 1;
    let start = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(this._tokenFactorySourcePair, type, antlr4.Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
  }

  StopTemplatesLexer.prototype.getIndentationCount = function(whitespace) {
    let count = 0;
    for (let i = 0; i < whitespace.length; i++) {
      if (whitespace[i] === '\t') {
        count += 4 - count % 4;
      } else {
        count++;
      }
    }
    return count;
  }

  StopTemplatesLexer.prototype.atStartOfInput = function() {
    return this.getCharIndex() === 0;
  }
}

file: (NEWLINE | statement)* EOF;

statement:
    (component | collection | conditional) NEWLINE nested_statements?;

nested_statements: INDENT statement+ DEDENT;

component:
    COMPONENT_TYPE '(' (component_parameter (',' component_parameter)*)* ')'
   ;

component_parameter
    : ID ':' component_parameter_value_or_collection
    ;

component_parameter_value_or_collection
    : component_parameter_value_collection
    | component_parameter_value
    ;

component_parameter_value_collection
    : '[' (component_parameter_value (',' component_parameter_value)*)* ']'
    ;

component_parameter_value
    : ID
    | REFERENCE
    | STRING_LITERAL
    | NUMBER_LITERAL
    | BOOL_LITERAL
    ;

collection:
    NOT? '[' (ID | REFERENCE) ']';

conditional:
    NOT? (ID | REFERENCE);

/// stringliteral   ::=  [stringprefix](shortstring | longstring)
/// stringprefix    ::=  "r" | "u" | "R" | "U" | "f" | "F"
///                      | "fr" | "Fr" | "fR" | "FR" | "rf" | "rF" | "Rf" | "RF"
STRING_LITERAL
 : ( SHORT_STRING | LONG_STRING )
 ;

NUMBER_LITERAL
    : NUMBER;

BOOL_LITERAL
    : 'true' | 'false';

TAB : '\t';

NOT: '!';

DOT: '.';

NUMBER
   : '-'? ( '.' DIGIT+ | DIGIT+ ( '.' DIGIT* )? )
   ;

COMPONENT_TYPE
   : UPPERCASE_LETTER  ( LETTER | DIGIT )*
   ;

ID
   : LOWERCASE_LETTER ( LETTER | DIGIT )*
   ;

REFERENCE
    : LOWERCASE_LETTER ( LETTER | DIGIT | DOT)*;

fragment UPPERCASE_LETTER
   : [A-Z]
   ;

fragment LOWERCASE_LETTER
   : [a-z]
   ;

fragment LETTER
   : [a-zA-Z_]
   ;

fragment DIGIT
   : [0-9]
   ;

fragment SPACES
 : [ \t]+
 ;

fragment COMMENT
 : '#' ~[\r\n\f]*
 ;

fragment LINE_JOINING
 : '\\' SPACES? ( '\r'? '\n' | '\r' | '\f')
 ;

SKIP_
: ( SPACES | COMMENT | LINE_JOINING ) -> skip
;

NEWLINE
 : ( {this.atStartOfInput()}?   SPACES
   | ( '\r'? '\n' | '\r' ) SPACES?
   ) {
     let newLine = this.text.replace(/[^\r\n]+/g, '');
     let spaces = this.text.replace(/[\r\n]+/g, '');
     // Strip newlines inside open clauses except if we are near EOF. We keep NEWLINEs near EOF to
     // satisfy the final newline needed by the single_put rule used by the REPL.
     let next = this._input.LA(1);
     let nextnext = this._input.LA(2);
     if (this.opened > 0 || (nextnext != -1 /* EOF */ && (next === 13 /* '\r' */ || next === 10 /* '\n' */ || next === 35 /* '#' */))) {
       // If we're inside a list or on a blank line, ignore all indents,
       // dedents and line breaks.
       this.skip();
     } else {
       this.emitToken(this.commonToken(StopTemplatesParser.NEWLINE, newLine));
       let indent = this.getIndentationCount(spaces);
       let previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;
       if (indent === previous) {
         // skip indents of the same size as the present indent-size
         this.skip();
       } else if (indent > previous) {
         this.indents.push(indent);
         this.emitToken(this.commonToken(StopTemplatesParser.INDENT, spaces));
       } else {
         // Possibly emit more than 1 DEDENT token.
         while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
           this.emitToken(this.createDedent());
           this.indents.pop();
         }
       }
     }
   }
 ;

/*
 * fragments
 */

/// shortstring     ::=  "'" shortstringitem* "'" | '"' shortstringitem* '"'
/// shortstringitem ::=  shortstringchar | stringescapeseq
/// shortstringchar ::=  <any source character except "\" or newline or the quote>
fragment SHORT_STRING
 : '\'' ( STRING_ESCAPE_SEQ | ~[\\\r\n\f'] )* '\''
 | '"' ( STRING_ESCAPE_SEQ | ~[\\\r\n\f"] )* '"'
 ;
/// longstring      ::=  "'''" longstringitem* "'''" | '"""' longstringitem* '"""'
fragment LONG_STRING
 : '\'\'\'' LONG_STRING_ITEM*? '\'\'\''
 | '"""' LONG_STRING_ITEM*? '"""'
 ;

/// longstringitem  ::=  longstringchar | stringescapeseq
fragment LONG_STRING_ITEM
 : LONG_STRING_CHAR
 | STRING_ESCAPE_SEQ
 ;

/// longstringchar  ::=  <any source character except "\">
fragment LONG_STRING_CHAR
 : ~'\\'
 ;

/// stringescapeseq ::=  "\" <any source character>
fragment STRING_ESCAPE_SEQ
 : '\\' .
 | '\\' NEWLINE
 ;
