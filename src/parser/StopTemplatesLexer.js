// Generated from StopTemplates.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');


  let StopTemplatesParser = require('./StopTemplatesParser').StopTemplatesParser;
  let CommonToken = require('antlr4/Token').CommonToken;



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0014\u0106\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\bN\n\b\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n[\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0005\u000ed\n\u000e\u0003\u000e\u0003\u000e",
    "\u0006\u000eh\n\u000e\r\u000e\u000e\u000ei\u0003\u000e\u0006\u000em",
    "\n\u000e\r\u000e\u000e\u000en\u0003\u000e\u0003\u000e\u0007\u000es\n",
    "\u000e\f\u000e\u000e\u000ev\u000b\u000e\u0005\u000ex\n\u000e\u0005\u000e",
    "z\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u007f\n\u000f",
    "\f\u000f\u000e\u000f\u0082\u000b\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u0087\n\u0010\f\u0010\u000e\u0010\u008a\u000b\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0090\n",
    "\u0011\f\u0011\u000e\u0011\u0093\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0006\u0016\u009e\n\u0016\r\u0016\u000e\u0016\u009f\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u00a4\n\u0017\f\u0017\u000e\u0017\u00a7",
    "\u000b\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u00ab\n\u0018\u0003",
    "\u0018\u0005\u0018\u00ae\n\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u00b2\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00b7",
    "\n\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u00be\n\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00c2",
    "\n\u001a\u0003\u001a\u0005\u001a\u00c5\n\u001a\u0005\u001a\u00c7\n\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b",
    "\u00ce\n\u001b\f\u001b\u000e\u001b\u00d1\u000b\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u00d7\n\u001b\f\u001b\u000e",
    "\u001b\u00da\u000b\u001b\u0003\u001b\u0005\u001b\u00dd\n\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u00e4",
    "\n\u001c\f\u001c\u000e\u001c\u00e7\u000b\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0007\u001c\u00f1\n\u001c\f\u001c\u000e\u001c\u00f4\u000b\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u00f9\n\u001c\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u00fd\n\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0105\n\u001f",
    "\u0004\u00e5\u00f2\u0002 \u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e",
    "\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0002%\u0002\'\u0002)\u0002",
    "+\u0002-\u0002/\u00021\u00133\u00145\u00027\u00029\u0002;\u0002=\u0002",
    "\u0003\u0002\u000b\u0003\u0002C\\\u0003\u0002c|\u0005\u0002C\\aac|\u0003",
    "\u00022;\u0004\u0002\u000b\u000b\"\"\u0004\u0002\f\f\u000e\u000f\u0006",
    "\u0002\f\f\u000e\u000f))^^\u0006\u0002\f\f\u000e\u000f$$^^\u0003\u0002",
    "^^\u0002\u011d\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u0003?\u0003\u0002\u0002\u0002\u0005A\u0003\u0002\u0002",
    "\u0002\u0007C\u0003\u0002\u0002\u0002\tE\u0003\u0002\u0002\u0002\u000b",
    "G\u0003\u0002\u0002\u0002\rI\u0003\u0002\u0002\u0002\u000fM\u0003\u0002",
    "\u0002\u0002\u0011O\u0003\u0002\u0002\u0002\u0013Z\u0003\u0002\u0002",
    "\u0002\u0015\\\u0003\u0002\u0002\u0002\u0017^\u0003\u0002\u0002\u0002",
    "\u0019`\u0003\u0002\u0002\u0002\u001bc\u0003\u0002\u0002\u0002\u001d",
    "{\u0003\u0002\u0002\u0002\u001f\u0083\u0003\u0002\u0002\u0002!\u008b",
    "\u0003\u0002\u0002\u0002#\u0094\u0003\u0002\u0002\u0002%\u0096\u0003",
    "\u0002\u0002\u0002\'\u0098\u0003\u0002\u0002\u0002)\u009a\u0003\u0002",
    "\u0002\u0002+\u009d\u0003\u0002\u0002\u0002-\u00a1\u0003\u0002\u0002",
    "\u0002/\u00a8\u0003\u0002\u0002\u00021\u00b6\u0003\u0002\u0002\u0002",
    "3\u00c6\u0003\u0002\u0002\u00025\u00dc\u0003\u0002\u0002\u00027\u00f8",
    "\u0003\u0002\u0002\u00029\u00fc\u0003\u0002\u0002\u0002;\u00fe\u0003",
    "\u0002\u0002\u0002=\u0104\u0003\u0002\u0002\u0002?@\u0007*\u0002\u0002",
    "@\u0004\u0003\u0002\u0002\u0002AB\u0007.\u0002\u0002B\u0006\u0003\u0002",
    "\u0002\u0002CD\u0007+\u0002\u0002D\b\u0003\u0002\u0002\u0002EF\u0007",
    "<\u0002\u0002F\n\u0003\u0002\u0002\u0002GH\u0007]\u0002\u0002H\f\u0003",
    "\u0002\u0002\u0002IJ\u0007_\u0002\u0002J\u000e\u0003\u0002\u0002\u0002",
    "KN\u00055\u001b\u0002LN\u00057\u001c\u0002MK\u0003\u0002\u0002\u0002",
    "ML\u0003\u0002\u0002\u0002N\u0010\u0003\u0002\u0002\u0002OP\u0005\u001b",
    "\u000e\u0002P\u0012\u0003\u0002\u0002\u0002QR\u0007v\u0002\u0002RS\u0007",
    "t\u0002\u0002ST\u0007w\u0002\u0002T[\u0007g\u0002\u0002UV\u0007h\u0002",
    "\u0002VW\u0007c\u0002\u0002WX\u0007n\u0002\u0002XY\u0007u\u0002\u0002",
    "Y[\u0007g\u0002\u0002ZQ\u0003\u0002\u0002\u0002ZU\u0003\u0002\u0002",
    "\u0002[\u0014\u0003\u0002\u0002\u0002\\]\u0007\u000b\u0002\u0002]\u0016",
    "\u0003\u0002\u0002\u0002^_\u0007#\u0002\u0002_\u0018\u0003\u0002\u0002",
    "\u0002`a\u00070\u0002\u0002a\u001a\u0003\u0002\u0002\u0002bd\u0007/",
    "\u0002\u0002cb\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002dy\u0003",
    "\u0002\u0002\u0002eg\u00070\u0002\u0002fh\u0005)\u0015\u0002gf\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002",
    "ij\u0003\u0002\u0002\u0002jz\u0003\u0002\u0002\u0002km\u0005)\u0015",
    "\u0002lk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002ow\u0003\u0002\u0002\u0002pt\u0007",
    "0\u0002\u0002qs\u0005)\u0015\u0002rq\u0003\u0002\u0002\u0002sv\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002",
    "ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wp\u0003\u0002\u0002",
    "\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002ye\u0003\u0002",
    "\u0002\u0002yl\u0003\u0002\u0002\u0002z\u001c\u0003\u0002\u0002\u0002",
    "{\u0080\u0005#\u0012\u0002|\u007f\u0005\'\u0014\u0002}\u007f\u0005)",
    "\u0015\u0002~|\u0003\u0002\u0002\u0002~}\u0003\u0002\u0002\u0002\u007f",
    "\u0082\u0003\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0003\u0002\u0002\u0002\u0081\u001e\u0003\u0002\u0002\u0002\u0082",
    "\u0080\u0003\u0002\u0002\u0002\u0083\u0088\u0005%\u0013\u0002\u0084",
    "\u0087\u0005\'\u0014\u0002\u0085\u0087\u0005)\u0015\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u008a",
    "\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089",
    "\u0003\u0002\u0002\u0002\u0089 \u0003\u0002\u0002\u0002\u008a\u0088",
    "\u0003\u0002\u0002\u0002\u008b\u0091\u0005%\u0013\u0002\u008c\u0090",
    "\u0005\'\u0014\u0002\u008d\u0090\u0005)\u0015\u0002\u008e\u0090\u0005",
    "\u0019\r\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008d\u0003",
    "\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0093\u0003",
    "\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003",
    "\u0002\u0002\u0002\u0092\"\u0003\u0002\u0002\u0002\u0093\u0091\u0003",
    "\u0002\u0002\u0002\u0094\u0095\t\u0002\u0002\u0002\u0095$\u0003\u0002",
    "\u0002\u0002\u0096\u0097\t\u0003\u0002\u0002\u0097&\u0003\u0002\u0002",
    "\u0002\u0098\u0099\t\u0004\u0002\u0002\u0099(\u0003\u0002\u0002\u0002",
    "\u009a\u009b\t\u0005\u0002\u0002\u009b*\u0003\u0002\u0002\u0002\u009c",
    "\u009e\t\u0006\u0002\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\u0003\u0002\u0002\u0002\u00a0,\u0003\u0002\u0002\u0002\u00a1",
    "\u00a5\u0007%\u0002\u0002\u00a2\u00a4\n\u0007\u0002\u0002\u00a3\u00a2",
    "\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6.",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00aa",
    "\u0007^\u0002\u0002\u00a9\u00ab\u0005+\u0016\u0002\u00aa\u00a9\u0003",
    "\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00b1\u0003",
    "\u0002\u0002\u0002\u00ac\u00ae\u0007\u000f\u0002\u0002\u00ad\u00ac\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af\u0003",
    "\u0002\u0002\u0002\u00af\u00b2\u0007\f\u0002\u0002\u00b0\u00b2\u0004",
    "\u000e\u000f\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b20\u0003\u0002\u0002\u0002\u00b3\u00b7\u0005",
    "+\u0016\u0002\u00b4\u00b7\u0005-\u0017\u0002\u00b5\u00b7\u0005/\u0018",
    "\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\b\u0019\u0002\u0002\u00b92\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0006\u001a\u0002\u0002\u00bb\u00c7\u0005+\u0016\u0002",
    "\u00bc\u00be\u0007\u000f\u0002\u0002\u00bd\u00bc\u0003\u0002\u0002\u0002",
    "\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0007\f\u0002\u0002\u00c0\u00c2\u0007\u000f\u0002\u0002",
    "\u00c1\u00bd\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002",
    "\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3\u00c5\u0005+\u0016\u0002",
    "\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002",
    "\u00c5\u00c7\u0003\u0002\u0002\u0002\u00c6\u00ba\u0003\u0002\u0002\u0002",
    "\u00c6\u00c1\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\b\u001a\u0003\u0002\u00c94\u0003\u0002\u0002\u0002\u00ca",
    "\u00cf\u0007)\u0002\u0002\u00cb\u00ce\u0005=\u001f\u0002\u00cc\u00ce",
    "\n\b\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00cd\u00cc\u0003",
    "\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d2\u0003",
    "\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00dd\u0007",
    ")\u0002\u0002\u00d3\u00d8\u0007$\u0002\u0002\u00d4\u00d7\u0005=\u001f",
    "\u0002\u00d5\u00d7\n\t\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002",
    "\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9\u00db\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
    "\u00db\u00dd\u0007$\u0002\u0002\u00dc\u00ca\u0003\u0002\u0002\u0002",
    "\u00dc\u00d3\u0003\u0002\u0002\u0002\u00dd6\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0007)\u0002\u0002\u00df\u00e0\u0007)\u0002\u0002\u00e0",
    "\u00e1\u0007)\u0002\u0002\u00e1\u00e5\u0003\u0002\u0002\u0002\u00e2",
    "\u00e4\u00059\u001d\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4",
    "\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e5",
    "\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7",
    "\u00e5\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007)\u0002\u0002\u00e9",
    "\u00ea\u0007)\u0002\u0002\u00ea\u00f9\u0007)\u0002\u0002\u00eb\u00ec",
    "\u0007$\u0002\u0002\u00ec\u00ed\u0007$\u0002\u0002\u00ed\u00ee\u0007",
    "$\u0002\u0002\u00ee\u00f2\u0003\u0002\u0002\u0002\u00ef\u00f1\u0005",
    "9\u001d\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003",
    "\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003",
    "\u0002\u0002\u0002\u00f3\u00f5\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0007$\u0002\u0002\u00f6\u00f7\u0007",
    "$\u0002\u0002\u00f7\u00f9\u0007$\u0002\u0002\u00f8\u00de\u0003\u0002",
    "\u0002\u0002\u00f8\u00eb\u0003\u0002\u0002\u0002\u00f98\u0003\u0002",
    "\u0002\u0002\u00fa\u00fd\u0005;\u001e\u0002\u00fb\u00fd\u0005=\u001f",
    "\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003\u0002\u0002",
    "\u0002\u00fd:\u0003\u0002\u0002\u0002\u00fe\u00ff\n\n\u0002\u0002\u00ff",
    "<\u0003\u0002\u0002\u0002\u0100\u0101\u0007^\u0002\u0002\u0101\u0105",
    "\u000b\u0002\u0002\u0002\u0102\u0103\u0007^\u0002\u0002\u0103\u0105",
    "\u00053\u001a\u0002\u0104\u0100\u0003\u0002\u0002\u0002\u0104\u0102",
    "\u0003\u0002\u0002\u0002\u0105>\u0003\u0002\u0002\u0002%\u0002MZcin",
    "twy~\u0080\u0086\u0088\u008f\u0091\u009f\u00a5\u00aa\u00ad\u00b1\u00b6",
    "\u00bd\u00c1\u00c4\u00c6\u00cd\u00cf\u00d6\u00d8\u00dc\u00e5\u00f2\u00f8",
    "\u00fc\u0104\u0004\b\u0002\u0002\u0003\u001a\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function StopTemplatesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());

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

    return this;
}

StopTemplatesLexer.prototype = Object.create(antlr4.Lexer.prototype);
StopTemplatesLexer.prototype.constructor = StopTemplatesLexer;

Object.defineProperty(StopTemplatesLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

StopTemplatesLexer.EOF = antlr4.Token.EOF;
StopTemplatesLexer.T__0 = 1;
StopTemplatesLexer.T__1 = 2;
StopTemplatesLexer.T__2 = 3;
StopTemplatesLexer.T__3 = 4;
StopTemplatesLexer.T__4 = 5;
StopTemplatesLexer.T__5 = 6;
StopTemplatesLexer.STRING_LITERAL = 7;
StopTemplatesLexer.NUMBER_LITERAL = 8;
StopTemplatesLexer.BOOL_LITERAL = 9;
StopTemplatesLexer.TAB = 10;
StopTemplatesLexer.NOT = 11;
StopTemplatesLexer.DOT = 12;
StopTemplatesLexer.NUMBER = 13;
StopTemplatesLexer.COMPONENT_TYPE = 14;
StopTemplatesLexer.ID = 15;
StopTemplatesLexer.REFERENCE = 16;
StopTemplatesLexer.SKIP_ = 17;
StopTemplatesLexer.NEWLINE = 18;

StopTemplatesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

StopTemplatesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

StopTemplatesLexer.prototype.literalNames = [ null, "'('", "','", "')'", 
                                              "':'", "'['", "']'", null, 
                                              null, null, "'\t'", "'!'", 
                                              "'.'" ];

StopTemplatesLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                               null, null, "STRING_LITERAL", 
                                               "NUMBER_LITERAL", "BOOL_LITERAL", 
                                               "TAB", "NOT", "DOT", "NUMBER", 
                                               "COMPONENT_TYPE", "ID", "REFERENCE", 
                                               "SKIP_", "NEWLINE" ];

StopTemplatesLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                           "T__4", "T__5", "STRING_LITERAL", 
                                           "NUMBER_LITERAL", "BOOL_LITERAL", 
                                           "TAB", "NOT", "DOT", "NUMBER", 
                                           "COMPONENT_TYPE", "ID", "REFERENCE", 
                                           "UPPERCASE_LETTER", "LOWERCASE_LETTER", 
                                           "LETTER", "DIGIT", "SPACES", 
                                           "COMMENT", "LINE_JOINING", "SKIP_", 
                                           "NEWLINE", "SHORT_STRING", "LONG_STRING", 
                                           "LONG_STRING_ITEM", "LONG_STRING_CHAR", 
                                           "STRING_ESCAPE_SEQ" ];

StopTemplatesLexer.prototype.grammarFileName = "StopTemplates.g4";

StopTemplatesLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 24:
		this.NEWLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


StopTemplatesLexer.prototype.NEWLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

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
		   
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};
StopTemplatesLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 24:
			return this.NEWLINE_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

StopTemplatesLexer.prototype.NEWLINE_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.StopTemplatesLexer = StopTemplatesLexer;

