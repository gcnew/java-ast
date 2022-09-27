"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVisitor = exports.walk = exports.parse = void 0;
// parse
const antlr4ts_1 = require("antlr4ts");
const JavaLexer_1 = require("./parser/JavaLexer");
const JavaParser_1 = require("./parser/JavaParser");
// walk
const ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
// createVisitor
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * Parses the given source code and returns the AST
 * @param source Java source code to parse
 */
function parse(source) {
    const chars = new antlr4ts_1.ANTLRInputStream(source);
    const lexer = new JavaLexer_1.JavaLexer(chars);
    const tokens = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new JavaParser_1.JavaParser(tokens);
    return parser.compilationUnit();
}
exports.parse = parse;
/**
 * Walks a parse tree
 * @see https://github.com/antlr/antlr4/blob/master/doc/listeners.md
 */
function walk(listener, tree) {
    ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
}
exports.walk = walk;
function createVisitor(visitor) {
    // we don't want users to write classes because it's not JavaScript-y
    // so we'll set implementation of abstract methods and other visit* methods in constructor
    // @ts-ignore
    return new class extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
        constructor() {
            super();
            Object.assign(this, Object.assign({ defaultResult: () => undefined, aggregateResult: () => undefined }, visitor));
        }
    }();
}
exports.createVisitor = createVisitor;
__exportStar(require("./parser/JavaContexts"), exports);
