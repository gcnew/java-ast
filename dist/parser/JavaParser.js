"use strict";
// Generated from src/parser/JavaParser.g4 by ANTLR 4.9.0-SNAPSHOT
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormalParameterListContext = exports.ReceiverParameterContext = exports.FormalParametersContext = exports.QualifiedNameListContext = exports.TypeArgumentContext = exports.ClassOrInterfaceTypeContext = exports.ArrayInitializerContext = exports.VariableInitializerContext = exports.VariableDeclaratorIdContext = exports.VariableDeclaratorContext = exports.VariableDeclaratorsContext = exports.InterfaceCommonBodyDeclarationContext = exports.GenericInterfaceMethodDeclarationContext = exports.InterfaceMethodModifierContext = exports.InterfaceMethodDeclarationContext = exports.ConstantDeclaratorContext = exports.ConstDeclarationContext = exports.InterfaceMemberDeclarationContext = exports.InterfaceBodyDeclarationContext = exports.FieldDeclarationContext = exports.ConstructorDeclarationContext = exports.GenericConstructorDeclarationContext = exports.GenericMethodDeclarationContext = exports.TypeTypeOrVoidContext = exports.MethodBodyContext = exports.MethodDeclarationContext = exports.MemberDeclarationContext = exports.ClassBodyDeclarationContext = exports.InterfaceBodyContext = exports.ClassBodyContext = exports.InterfaceDeclarationContext = exports.EnumBodyDeclarationsContext = exports.EnumConstantContext = exports.EnumConstantsContext = exports.EnumDeclarationContext = exports.TypeBoundContext = exports.TypeParameterContext = exports.TypeParametersContext = exports.ClassDeclarationContext = exports.PermitsListContext = exports.ImplementsListContext = exports.ExtendsListContext = exports.VariableModifierContext = exports.ClassOrInterfaceModifierContext = exports.ModifierContext = exports.TypeDeclarationContext = exports.ImportDeclarationContext = exports.PackageDeclarationContext = exports.CompilationUnitContext = exports.JavaParser = void 0;
exports.ParExpressionContext = exports.EnhancedForControlContext = exports.ForInitContext = exports.ForControlContext = exports.SwitchLabelContext = exports.SwitchBlockStatementGroupContext = exports.ResourceContext = exports.ResourcesContext = exports.ResourceSpecificationContext = exports.FinallyBlockContext = exports.CatchTypeContext = exports.CatchClauseContext = exports.StatementContext = exports.LocalTypeDeclarationContext = exports.TypeIdentifierContext = exports.IdentifierContext = exports.LocalVariableDeclarationContext = exports.BlockStatementContext = exports.BlockContext = exports.RecordBodyContext = exports.RecordComponentContext = exports.RecordComponentListContext = exports.RecordHeaderContext = exports.RecordDeclarationContext = exports.RequiresModifierContext = exports.ModuleDirectiveContext = exports.ModuleBodyContext = exports.ModuleDeclarationContext = exports.DefaultValueContext = exports.AnnotationConstantRestContext = exports.AnnotationMethodRestContext = exports.AnnotationMethodOrConstantRestContext = exports.AnnotationTypeElementRestContext = exports.AnnotationTypeElementDeclarationContext = exports.AnnotationTypeBodyContext = exports.AnnotationTypeDeclarationContext = exports.ElementValueArrayInitializerContext = exports.ElementValueContext = exports.ElementValuePairContext = exports.ElementValuePairsContext = exports.AnnotationContext = exports.AltAnnotationQualifiedNameContext = exports.FloatLiteralContext = exports.IntegerLiteralContext = exports.LiteralContext = exports.QualifiedNameContext = exports.LambdaLVTIParameterContext = exports.LambdaLVTIListContext = exports.LastFormalParameterContext = exports.FormalParameterContext = void 0;
exports.ArgumentsContext = exports.ExplicitGenericInvocationSuffixContext = exports.SuperSuffixContext = exports.TypeArgumentsContext = exports.PrimitiveTypeContext = exports.TypeTypeContext = exports.TypeListContext = exports.NonWildcardTypeArgumentsContext = exports.NonWildcardTypeArgumentsOrDiamondContext = exports.TypeArgumentsOrDiamondContext = exports.ExplicitGenericInvocationContext = exports.ClassCreatorRestContext = exports.ArrayCreatorRestContext = exports.InnerCreatorContext = exports.CreatedNameContext = exports.CreatorContext = exports.ClassTypeContext = exports.SwitchRuleOutcomeContext = exports.GuardedPatternContext = exports.SwitchLabeledRuleContext = exports.SwitchExpressionContext = exports.PrimaryContext = exports.LambdaBodyContext = exports.LambdaParametersContext = exports.LambdaExpressionContext = exports.PatternContext = exports.ExpressionContext = exports.MethodCallContext = exports.ExpressionListContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class JavaParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(JavaParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return JavaParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "JavaParser.g4"; }
    // @Override
    get ruleNames() { return JavaParser.ruleNames; }
    // @Override
    get serializedATN() { return JavaParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    compilationUnit() {
        let _localctx = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
        let _la;
        try {
            this.state = 274;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 257;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                            case 1:
                                {
                                    this.state = 256;
                                    this.packageDeclaration();
                                }
                                break;
                        }
                        this.state = 262;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.IMPORT) {
                            {
                                {
                                    this.state = 259;
                                    this.importDeclaration();
                                }
                            }
                            this.state = 264;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 268;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 265;
                                    this.typeDeclaration();
                                }
                            }
                            this.state = 270;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 271;
                        this.moduleDeclaration();
                        this.state = 272;
                        this.match(JavaParser.EOF);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    packageDeclaration() {
        let _localctx = new PackageDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 276;
                            this.annotation();
                        }
                    }
                    this.state = 281;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 282;
                this.match(JavaParser.PACKAGE);
                this.state = 283;
                this.qualifiedName();
                this.state = 284;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importDeclaration() {
        let _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 286;
                this.match(JavaParser.IMPORT);
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.STATIC) {
                    {
                        this.state = 287;
                        this.match(JavaParser.STATIC);
                    }
                }
                this.state = 290;
                this.qualifiedName();
                this.state = 293;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DOT) {
                    {
                        this.state = 291;
                        this.match(JavaParser.DOT);
                        this.state = 292;
                        this.match(JavaParser.MUL);
                    }
                }
                this.state = 295;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeDeclaration() {
        let _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
        try {
            let _alt;
            this.state = 311;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.CLASS:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.INTERFACE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.NON_SEALED:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 300;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 297;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 302;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        }
                        this.state = 308;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 303;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.ENUM:
                                {
                                    this.state = 304;
                                    this.enumDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 305;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.AT:
                                {
                                    this.state = 306;
                                    this.annotationTypeDeclaration();
                                }
                                break;
                            case JavaParser.RECORD:
                                {
                                    this.state = 307;
                                    this.recordDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 310;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modifier() {
        let _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
        try {
            this.state = 318;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.FINAL:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.NON_SEALED:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 313;
                        this.classOrInterfaceModifier();
                    }
                    break;
                case JavaParser.NATIVE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 314;
                        this.match(JavaParser.NATIVE);
                    }
                    break;
                case JavaParser.SYNCHRONIZED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 315;
                        this.match(JavaParser.SYNCHRONIZED);
                    }
                    break;
                case JavaParser.TRANSIENT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 316;
                        this.match(JavaParser.TRANSIENT);
                    }
                    break;
                case JavaParser.VOLATILE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 317;
                        this.match(JavaParser.VOLATILE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classOrInterfaceModifier() {
        let _localctx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
        try {
            this.state = 330;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 320;
                        this.annotation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 321;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 322;
                        this.match(JavaParser.PROTECTED);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 323;
                        this.match(JavaParser.PRIVATE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 324;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 325;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 326;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 327;
                        this.match(JavaParser.STRICTFP);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 328;
                        this.match(JavaParser.SEALED);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 329;
                        this.match(JavaParser.NON_SEALED);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableModifier() {
        let _localctx = new VariableModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 334;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 332;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 333;
                        this.annotation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extendsList() {
        let _localctx = new ExtendsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaParser.RULE_extendsList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 336;
                this.match(JavaParser.EXTENDS);
                this.state = 337;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    implementsList() {
        let _localctx = new ImplementsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaParser.RULE_implementsList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 340;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    permitsList() {
        let _localctx = new PermitsListContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaParser.RULE_permitsList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 342;
                this.match(JavaParser.PERMITS);
                this.state = 343;
                this.typeList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classDeclaration() {
        let _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaParser.RULE_classDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.match(JavaParser.CLASS);
                this.state = 346;
                this.identifier();
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 347;
                        this.typeParameters();
                    }
                }
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 350;
                        this.match(JavaParser.EXTENDS);
                        this.state = 351;
                        this.typeType();
                    }
                }
                this.state = 355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 354;
                        this.implementsList();
                    }
                }
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.PERMITS) {
                    {
                        this.state = 357;
                        this.permitsList();
                    }
                }
                this.state = 360;
                this.classBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameters() {
        let _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavaParser.RULE_typeParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.match(JavaParser.LT);
                this.state = 363;
                this.typeParameter();
                this.state = 368;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 364;
                            this.match(JavaParser.COMMA);
                            this.state = 365;
                            this.typeParameter();
                        }
                    }
                    this.state = 370;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 371;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameter() {
        let _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavaParser.RULE_typeParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 376;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 373;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 378;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 379;
                this.identifier();
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 380;
                        this.match(JavaParser.EXTENDS);
                        this.state = 384;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 381;
                                        this.annotation();
                                    }
                                }
                            }
                            this.state = 386;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        }
                        this.state = 387;
                        this.typeBound();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeBound() {
        let _localctx = new TypeBoundContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavaParser.RULE_typeBound);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.typeType();
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITAND) {
                    {
                        {
                            this.state = 391;
                            this.match(JavaParser.BITAND);
                            this.state = 392;
                            this.typeType();
                        }
                    }
                    this.state = 397;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumDeclaration() {
        let _localctx = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavaParser.RULE_enumDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 398;
                this.match(JavaParser.ENUM);
                this.state = 399;
                this.identifier();
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 400;
                        this.implementsList();
                    }
                }
                this.state = 403;
                this.match(JavaParser.LBRACE);
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 404;
                        this.enumConstants();
                    }
                }
                this.state = 408;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 407;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 410;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 413;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumConstants() {
        let _localctx = new EnumConstantsContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavaParser.RULE_enumConstants);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.enumConstant();
                this.state = 420;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 416;
                                this.match(JavaParser.COMMA);
                                this.state = 417;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 422;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumConstant() {
        let _localctx = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavaParser.RULE_enumConstant);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 426;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 423;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 428;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                }
                this.state = 429;
                this.identifier();
                this.state = 431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 430;
                        this.arguments();
                    }
                }
                this.state = 434;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LBRACE) {
                    {
                        this.state = 433;
                        this.classBody();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumBodyDeclarations() {
        let _localctx = new EnumBodyDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavaParser.RULE_enumBodyDeclarations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.match(JavaParser.SEMI);
                this.state = 440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 437;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 442;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceDeclaration() {
        let _localctx = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavaParser.RULE_interfaceDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this.match(JavaParser.INTERFACE);
                this.state = 444;
                this.identifier();
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 445;
                        this.typeParameters();
                    }
                }
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 448;
                        this.extendsList();
                    }
                }
                this.state = 452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.PERMITS) {
                    {
                        this.state = 451;
                        this.permitsList();
                    }
                }
                this.state = 454;
                this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classBody() {
        let _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavaParser.RULE_classBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 456;
                this.match(JavaParser.LBRACE);
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 457;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 462;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 463;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceBody() {
        let _localctx = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaParser.RULE_interfaceBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.match(JavaParser.LBRACE);
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 466;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 471;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 472;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classBodyDeclaration() {
        let _localctx = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavaParser.RULE_classBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.state = 486;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 474;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 476;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.STATIC) {
                            {
                                this.state = 475;
                                this.match(JavaParser.STATIC);
                            }
                        }
                        this.state = 478;
                        this.block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 482;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 479;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                        }
                        this.state = 485;
                        this.memberDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    memberDeclaration() {
        let _localctx = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 498;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 488;
                        this.recordDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 489;
                        this.methodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 490;
                        this.genericMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 491;
                        this.fieldDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 492;
                        this.constructorDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 493;
                        this.genericConstructorDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 494;
                        this.interfaceDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 495;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 496;
                        this.classDeclaration();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 497;
                        this.enumDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodDeclaration() {
        let _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JavaParser.RULE_methodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 500;
                this.typeTypeOrVoid();
                this.state = 501;
                this.identifier();
                this.state = 502;
                this.formalParameters();
                this.state = 507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 503;
                            this.match(JavaParser.LBRACK);
                            this.state = 504;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 509;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 512;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 510;
                        this.match(JavaParser.THROWS);
                        this.state = 511;
                        this.qualifiedNameList();
                    }
                }
                this.state = 514;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodBody() {
        let _localctx = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JavaParser.RULE_methodBody);
        try {
            this.state = 518;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 516;
                        this.block();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 517;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeTypeOrVoid() {
        let _localctx = new TypeTypeOrVoidContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JavaParser.RULE_typeTypeOrVoid);
        try {
            this.state = 522;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 520;
                        this.typeType();
                    }
                    break;
                case JavaParser.VOID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 521;
                        this.match(JavaParser.VOID);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericMethodDeclaration() {
        let _localctx = new GenericMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.typeParameters();
                this.state = 525;
                this.methodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericConstructorDeclaration() {
        let _localctx = new GenericConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 527;
                this.typeParameters();
                this.state = 528;
                this.constructorDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constructorDeclaration() {
        let _localctx = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JavaParser.RULE_constructorDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.identifier();
                this.state = 531;
                this.formalParameters();
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 532;
                        this.match(JavaParser.THROWS);
                        this.state = 533;
                        this.qualifiedNameList();
                    }
                }
                this.state = 536;
                _localctx._constructorBody = this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fieldDeclaration() {
        let _localctx = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 538;
                this.typeType();
                this.state = 539;
                this.variableDeclarators();
                this.state = 540;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceBodyDeclaration() {
        let _localctx = new InterfaceBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            let _alt;
            this.state = 550;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DEFAULT:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOID:
                case JavaParser.VOLATILE:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.NON_SEALED:
                case JavaParser.LT:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 545;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 542;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 547;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        }
                        this.state = 548;
                        this.interfaceMemberDeclaration();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 549;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMemberDeclaration() {
        let _localctx = new InterfaceMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 560;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 552;
                        this.constDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 553;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 554;
                        this.genericInterfaceMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 555;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 556;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 557;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 558;
                        this.enumDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 559;
                        this.recordDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constDeclaration() {
        let _localctx = new ConstDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JavaParser.RULE_constDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.typeType();
                this.state = 563;
                this.constantDeclarator();
                this.state = 568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 564;
                            this.match(JavaParser.COMMA);
                            this.state = 565;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 570;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 571;
                this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constantDeclarator() {
        let _localctx = new ConstantDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JavaParser.RULE_constantDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                this.identifier();
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 574;
                            this.match(JavaParser.LBRACK);
                            this.state = 575;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 581;
                this.match(JavaParser.ASSIGN);
                this.state = 582;
                this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMethodDeclaration() {
        let _localctx = new InterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JavaParser.RULE_interfaceMethodDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 587;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 584;
                                this.interfaceMethodModifier();
                            }
                        }
                    }
                    this.state = 589;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                }
                this.state = 590;
                this.interfaceCommonBodyDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceMethodModifier() {
        let _localctx = new InterfaceMethodModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JavaParser.RULE_interfaceMethodModifier);
        try {
            this.state = 598;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 592;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 593;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 594;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 595;
                        this.match(JavaParser.DEFAULT);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 596;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 597;
                        this.match(JavaParser.STRICTFP);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    genericInterfaceMethodDeclaration() {
        let _localctx = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JavaParser.RULE_genericInterfaceMethodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.ABSTRACT || _la === JavaParser.DEFAULT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.PUBLIC - 35)) | (1 << (JavaParser.STATIC - 35)) | (1 << (JavaParser.STRICTFP - 35)) | (1 << (JavaParser.MODULE - 35)) | (1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.EXPORTS - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.WITH - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.YIELD - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.PERMITS - 35)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 600;
                            this.interfaceMethodModifier();
                        }
                    }
                    this.state = 605;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 606;
                this.typeParameters();
                this.state = 607;
                this.interfaceCommonBodyDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    interfaceCommonBodyDeclaration() {
        let _localctx = new InterfaceCommonBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JavaParser.RULE_interfaceCommonBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 612;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 609;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 614;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 615;
                this.typeTypeOrVoid();
                this.state = 616;
                this.identifier();
                this.state = 617;
                this.formalParameters();
                this.state = 622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 618;
                            this.match(JavaParser.LBRACK);
                            this.state = 619;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 627;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 625;
                        this.match(JavaParser.THROWS);
                        this.state = 626;
                        this.qualifiedNameList();
                    }
                }
                this.state = 629;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarators() {
        let _localctx = new VariableDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JavaParser.RULE_variableDeclarators);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 631;
                this.variableDeclarator();
                this.state = 636;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 632;
                            this.match(JavaParser.COMMA);
                            this.state = 633;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 638;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclarator() {
        let _localctx = new VariableDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JavaParser.RULE_variableDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 639;
                this.variableDeclaratorId();
                this.state = 642;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.ASSIGN) {
                    {
                        this.state = 640;
                        this.match(JavaParser.ASSIGN);
                        this.state = 641;
                        this.variableInitializer();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaratorId() {
        let _localctx = new VariableDeclaratorIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JavaParser.RULE_variableDeclaratorId);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.identifier();
                this.state = 649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 645;
                            this.match(JavaParser.LBRACK);
                            this.state = 646;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 651;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableInitializer() {
        let _localctx = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JavaParser.RULE_variableInitializer);
        try {
            this.state = 654;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 652;
                        this.arrayInitializer();
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.SWITCH:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                case JavaParser.BOOL_LITERAL:
                case JavaParser.CHAR_LITERAL:
                case JavaParser.STRING_LITERAL:
                case JavaParser.TEXT_BLOCK:
                case JavaParser.NULL_LITERAL:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 653;
                        this.expression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayInitializer() {
        let _localctx = new ArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JavaParser.RULE_arrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 656;
                this.match(JavaParser.LBRACE);
                this.state = 668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LBRACE - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 657;
                        this.variableInitializer();
                        this.state = 662;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 658;
                                        this.match(JavaParser.COMMA);
                                        this.state = 659;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 664;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        }
                        this.state = 666;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 665;
                                this.match(JavaParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 670;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classOrInterfaceType() {
        let _localctx = new ClassOrInterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JavaParser.RULE_classOrInterfaceType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 672;
                                this.identifier();
                                this.state = 674;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === JavaParser.LT) {
                                    {
                                        this.state = 673;
                                        this.typeArguments();
                                    }
                                }
                                this.state = 676;
                                this.match(JavaParser.DOT);
                            }
                        }
                    }
                    this.state = 682;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
                }
                this.state = 683;
                this.typeIdentifier();
                this.state = 685;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                    case 1:
                        {
                            this.state = 684;
                            this.typeArguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArgument() {
        let _localctx = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaParser.RULE_typeArgument);
        let _la;
        try {
            this.state = 699;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 687;
                        this.typeType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 691;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 688;
                                    this.annotation();
                                }
                            }
                            this.state = 693;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 694;
                        this.match(JavaParser.QUESTION);
                        this.state = 697;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                            {
                                this.state = 695;
                                _la = this._input.LA(1);
                                if (!(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 696;
                                this.typeType();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedNameList() {
        let _localctx = new QualifiedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JavaParser.RULE_qualifiedNameList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 701;
                this.qualifiedName();
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 702;
                            this.match(JavaParser.COMMA);
                            this.state = 703;
                            this.qualifiedName();
                        }
                    }
                    this.state = 708;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameters() {
        let _localctx = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JavaParser.RULE_formalParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.match(JavaParser.LPAREN);
                this.state = 721;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 711;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 710;
                                    this.receiverParameter();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 713;
                            this.receiverParameter();
                            this.state = 716;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.COMMA) {
                                {
                                    this.state = 714;
                                    this.match(JavaParser.COMMA);
                                    this.state = 715;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 719;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 718;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                }
                this.state = 723;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    receiverParameter() {
        let _localctx = new ReceiverParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JavaParser.RULE_receiverParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 725;
                this.typeType();
                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 726;
                            this.identifier();
                            this.state = 727;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 733;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 734;
                this.match(JavaParser.THIS);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameterList() {
        let _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JavaParser.RULE_formalParameterList);
        let _la;
        try {
            let _alt;
            this.state = 749;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 736;
                        this.formalParameter();
                        this.state = 741;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 737;
                                        this.match(JavaParser.COMMA);
                                        this.state = 738;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 743;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                        }
                        this.state = 746;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 744;
                                this.match(JavaParser.COMMA);
                                this.state = 745;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 748;
                        this.lastFormalParameter();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    formalParameter() {
        let _localctx = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JavaParser.RULE_formalParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 754;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 751;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 756;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
                this.state = 757;
                this.typeType();
                this.state = 758;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lastFormalParameter() {
        let _localctx = new LastFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JavaParser.RULE_lastFormalParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 760;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 765;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                }
                this.state = 766;
                this.typeType();
                this.state = 770;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 767;
                            this.annotation();
                        }
                    }
                    this.state = 772;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 773;
                this.match(JavaParser.ELLIPSIS);
                this.state = 774;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaLVTIList() {
        let _localctx = new LambdaLVTIListContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JavaParser.RULE_lambdaLVTIList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 776;
                this.lambdaLVTIParameter();
                this.state = 781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 777;
                            this.match(JavaParser.COMMA);
                            this.state = 778;
                            this.lambdaLVTIParameter();
                        }
                    }
                    this.state = 783;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaLVTIParameter() {
        let _localctx = new LambdaLVTIParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JavaParser.RULE_lambdaLVTIParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 787;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 784;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 789;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                }
                this.state = 790;
                this.match(JavaParser.VAR);
                this.state = 791;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    qualifiedName() {
        let _localctx = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JavaParser.RULE_qualifiedName);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.identifier();
                this.state = 798;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 794;
                                this.match(JavaParser.DOT);
                                this.state = 795;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 800;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JavaParser.RULE_literal);
        try {
            this.state = 808;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 801;
                        this.integerLiteral();
                    }
                    break;
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 802;
                        this.floatLiteral();
                    }
                    break;
                case JavaParser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 803;
                        this.match(JavaParser.CHAR_LITERAL);
                    }
                    break;
                case JavaParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 804;
                        this.match(JavaParser.STRING_LITERAL);
                    }
                    break;
                case JavaParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 805;
                        this.match(JavaParser.BOOL_LITERAL);
                    }
                    break;
                case JavaParser.NULL_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 806;
                        this.match(JavaParser.NULL_LITERAL);
                    }
                    break;
                case JavaParser.TEXT_BLOCK:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 807;
                        this.match(JavaParser.TEXT_BLOCK);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    integerLiteral() {
        let _localctx = new IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JavaParser.RULE_integerLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                _la = this._input.LA(1);
                if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.DECIMAL_LITERAL - 67)) | (1 << (JavaParser.HEX_LITERAL - 67)) | (1 << (JavaParser.OCT_LITERAL - 67)) | (1 << (JavaParser.BINARY_LITERAL - 67)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    floatLiteral() {
        let _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JavaParser.RULE_floatLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 812;
                _la = this._input.LA(1);
                if (!(_la === JavaParser.FLOAT_LITERAL || _la === JavaParser.HEX_FLOAT_LITERAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    altAnnotationQualifiedName() {
        let _localctx = new AltAnnotationQualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JavaParser.RULE_altAnnotationQualifiedName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 819;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 814;
                            this.identifier();
                            this.state = 815;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 821;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 822;
                this.match(JavaParser.AT);
                this.state = 823;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation() {
        let _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, JavaParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 828;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 825;
                            this.match(JavaParser.AT);
                            this.state = 826;
                            this.qualifiedName();
                        }
                        break;
                    case 2:
                        {
                            this.state = 827;
                            this.altAnnotationQualifiedName();
                        }
                        break;
                }
                this.state = 836;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 830;
                        this.match(JavaParser.LPAREN);
                        this.state = 833;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                            case 1:
                                {
                                    this.state = 831;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 832;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 835;
                        this.match(JavaParser.RPAREN);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValuePairs() {
        let _localctx = new ElementValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JavaParser.RULE_elementValuePairs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 838;
                this.elementValuePair();
                this.state = 843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 839;
                            this.match(JavaParser.COMMA);
                            this.state = 840;
                            this.elementValuePair();
                        }
                    }
                    this.state = 845;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValuePair() {
        let _localctx = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 846;
                this.identifier();
                this.state = 847;
                this.match(JavaParser.ASSIGN);
                this.state = 848;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValue() {
        let _localctx = new ElementValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JavaParser.RULE_elementValue);
        try {
            this.state = 853;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 850;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 851;
                        this.annotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 852;
                        this.elementValueArrayInitializer();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elementValueArrayInitializer() {
        let _localctx = new ElementValueArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JavaParser.RULE_elementValueArrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 855;
                this.match(JavaParser.LBRACE);
                this.state = 864;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LBRACE - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 856;
                        this.elementValue();
                        this.state = 861;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 857;
                                        this.match(JavaParser.COMMA);
                                        this.state = 858;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 863;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        }
                    }
                }
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 866;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 869;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeDeclaration() {
        let _localctx = new AnnotationTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 871;
                this.match(JavaParser.AT);
                this.state = 872;
                this.match(JavaParser.INTERFACE);
                this.state = 873;
                this.identifier();
                this.state = 874;
                this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeBody() {
        let _localctx = new AnnotationTypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JavaParser.RULE_annotationTypeBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 876;
                this.match(JavaParser.LBRACE);
                this.state = 880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 877;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 882;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 883;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeElementDeclaration() {
        let _localctx = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let _alt;
            this.state = 893;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOLATILE:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.NON_SEALED:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 888;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 885;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 890;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        }
                        this.state = 891;
                        this.annotationTypeElementRest();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 892;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationTypeElementRest() {
        let _localctx = new AnnotationTypeElementRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 919;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 895;
                        this.typeType();
                        this.state = 896;
                        this.annotationMethodOrConstantRest();
                        this.state = 897;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 899;
                        this.classDeclaration();
                        this.state = 901;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 900;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 903;
                        this.interfaceDeclaration();
                        this.state = 905;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 904;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 907;
                        this.enumDeclaration();
                        this.state = 909;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                            case 1:
                                {
                                    this.state = 908;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 911;
                        this.annotationTypeDeclaration();
                        this.state = 913;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 912;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 915;
                        this.recordDeclaration();
                        this.state = 917;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                            case 1:
                                {
                                    this.state = 916;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationMethodOrConstantRest() {
        let _localctx = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 923;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 921;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 922;
                        this.annotationConstantRest();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationMethodRest() {
        let _localctx = new AnnotationMethodRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JavaParser.RULE_annotationMethodRest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 925;
                this.identifier();
                this.state = 926;
                this.match(JavaParser.LPAREN);
                this.state = 927;
                this.match(JavaParser.RPAREN);
                this.state = 929;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 928;
                        this.defaultValue();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationConstantRest() {
        let _localctx = new AnnotationConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 931;
                this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    defaultValue() {
        let _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 933;
                this.match(JavaParser.DEFAULT);
                this.state = 934;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleDeclaration() {
        let _localctx = new ModuleDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JavaParser.RULE_moduleDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 937;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.OPEN) {
                    {
                        this.state = 936;
                        this.match(JavaParser.OPEN);
                    }
                }
                this.state = 939;
                this.match(JavaParser.MODULE);
                this.state = 940;
                this.qualifiedName();
                this.state = 941;
                this.moduleBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleBody() {
        let _localctx = new ModuleBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JavaParser.RULE_moduleBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 943;
                this.match(JavaParser.LBRACE);
                this.state = 947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaParser.REQUIRES - 53)) | (1 << (JavaParser.EXPORTS - 53)) | (1 << (JavaParser.OPENS - 53)) | (1 << (JavaParser.USES - 53)) | (1 << (JavaParser.PROVIDES - 53)))) !== 0)) {
                    {
                        {
                            this.state = 944;
                            this.moduleDirective();
                        }
                    }
                    this.state = 949;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 950;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    moduleDirective() {
        let _localctx = new ModuleDirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, JavaParser.RULE_moduleDirective);
        let _la;
        try {
            let _alt;
            this.state = 988;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.REQUIRES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 952;
                        this.match(JavaParser.REQUIRES);
                        this.state = 956;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 953;
                                        this.requiresModifier();
                                    }
                                }
                            }
                            this.state = 958;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        }
                        this.state = 959;
                        this.qualifiedName();
                        this.state = 960;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.EXPORTS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 962;
                        this.match(JavaParser.EXPORTS);
                        this.state = 963;
                        this.qualifiedName();
                        this.state = 966;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 964;
                                this.match(JavaParser.TO);
                                this.state = 965;
                                this.qualifiedName();
                            }
                        }
                        this.state = 968;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.OPENS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 970;
                        this.match(JavaParser.OPENS);
                        this.state = 971;
                        this.qualifiedName();
                        this.state = 974;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 972;
                                this.match(JavaParser.TO);
                                this.state = 973;
                                this.qualifiedName();
                            }
                        }
                        this.state = 976;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.USES:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 978;
                        this.match(JavaParser.USES);
                        this.state = 979;
                        this.qualifiedName();
                        this.state = 980;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.PROVIDES:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 982;
                        this.match(JavaParser.PROVIDES);
                        this.state = 983;
                        this.qualifiedName();
                        this.state = 984;
                        this.match(JavaParser.WITH);
                        this.state = 985;
                        this.qualifiedName();
                        this.state = 986;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    requiresModifier() {
        let _localctx = new RequiresModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, JavaParser.RULE_requiresModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 990;
                _la = this._input.LA(1);
                if (!(_la === JavaParser.STATIC || _la === JavaParser.TRANSITIVE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordDeclaration() {
        let _localctx = new RecordDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, JavaParser.RULE_recordDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 992;
                this.match(JavaParser.RECORD);
                this.state = 993;
                this.identifier();
                this.state = 995;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 994;
                        this.typeParameters();
                    }
                }
                this.state = 997;
                this.recordHeader();
                this.state = 999;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 998;
                        this.implementsList();
                    }
                }
                this.state = 1001;
                this.recordBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordHeader() {
        let _localctx = new RecordHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, JavaParser.RULE_recordHeader);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1003;
                this.match(JavaParser.LPAREN);
                this.state = 1005;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 1004;
                        this.recordComponentList();
                    }
                }
                this.state = 1007;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordComponentList() {
        let _localctx = new RecordComponentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, JavaParser.RULE_recordComponentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1009;
                this.recordComponent();
                this.state = 1014;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1010;
                            this.match(JavaParser.COMMA);
                            this.state = 1011;
                            this.recordComponent();
                        }
                    }
                    this.state = 1016;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordComponent() {
        let _localctx = new RecordComponentContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JavaParser.RULE_recordComponent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1017;
                this.typeType();
                this.state = 1018;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    recordBody() {
        let _localctx = new RecordBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, JavaParser.RULE_recordBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1020;
                this.match(JavaParser.LBRACE);
                this.state = 1024;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 1021;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 1026;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1027;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, JavaParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1029;
                this.match(JavaParser.LBRACE);
                this.state = 1033;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                    {
                        {
                            this.state = 1030;
                            this.blockStatement();
                        }
                    }
                    this.state = 1035;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1036;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockStatement() {
        let _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, JavaParser.RULE_blockStatement);
        try {
            this.state = 1043;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1038;
                        this.localVariableDeclaration();
                        this.state = 1039;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1041;
                        this.localTypeDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1042;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localVariableDeclaration() {
        let _localctx = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, JavaParser.RULE_localVariableDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1048;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1045;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1050;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                }
                this.state = 1059;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        {
                            this.state = 1051;
                            this.match(JavaParser.VAR);
                            this.state = 1052;
                            this.identifier();
                            this.state = 1053;
                            this.match(JavaParser.ASSIGN);
                            this.state = 1054;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1056;
                            this.typeType();
                            this.state = 1057;
                            this.variableDeclarators();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, JavaParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1061;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeIdentifier() {
        let _localctx = new TypeIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, JavaParser.RULE_typeIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1063;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    localTypeDeclaration() {
        let _localctx = new LocalTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JavaParser.RULE_localTypeDeclaration);
        try {
            let _alt;
            this.state = 1077;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.CLASS:
                case JavaParser.FINAL:
                case JavaParser.INTERFACE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.NON_SEALED:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1068;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1065;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 1070;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        }
                        this.state = 1074;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 1071;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 1072;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.RECORD:
                                {
                                    this.state = 1073;
                                    this.recordDeclaration();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1076;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, JavaParser.RULE_statement);
        let _la;
        try {
            let _alt;
            this.state = 1192;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1079;
                        _localctx._blockLabel = this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1080;
                        this.match(JavaParser.ASSERT);
                        this.state = 1081;
                        this.expression(0);
                        this.state = 1084;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COLON) {
                            {
                                this.state = 1082;
                                this.match(JavaParser.COLON);
                                this.state = 1083;
                                this.expression(0);
                            }
                        }
                        this.state = 1086;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1088;
                        this.match(JavaParser.IF);
                        this.state = 1089;
                        this.parExpression();
                        this.state = 1090;
                        this.statement();
                        this.state = 1093;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1091;
                                    this.match(JavaParser.ELSE);
                                    this.state = 1092;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1095;
                        this.match(JavaParser.FOR);
                        this.state = 1096;
                        this.match(JavaParser.LPAREN);
                        this.state = 1097;
                        this.forControl();
                        this.state = 1098;
                        this.match(JavaParser.RPAREN);
                        this.state = 1099;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1101;
                        this.match(JavaParser.WHILE);
                        this.state = 1102;
                        this.parExpression();
                        this.state = 1103;
                        this.statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1105;
                        this.match(JavaParser.DO);
                        this.state = 1106;
                        this.statement();
                        this.state = 1107;
                        this.match(JavaParser.WHILE);
                        this.state = 1108;
                        this.parExpression();
                        this.state = 1109;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1111;
                        this.match(JavaParser.TRY);
                        this.state = 1112;
                        this.block();
                        this.state = 1122;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CATCH:
                                {
                                    this.state = 1114;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1113;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 1116;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === JavaParser.CATCH);
                                    this.state = 1119;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.FINALLY) {
                                        {
                                            this.state = 1118;
                                            this.finallyBlock();
                                        }
                                    }
                                }
                                break;
                            case JavaParser.FINALLY:
                                {
                                    this.state = 1121;
                                    this.finallyBlock();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1124;
                        this.match(JavaParser.TRY);
                        this.state = 1125;
                        this.resourceSpecification();
                        this.state = 1126;
                        this.block();
                        this.state = 1130;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CATCH) {
                            {
                                {
                                    this.state = 1127;
                                    this.catchClause();
                                }
                            }
                            this.state = 1132;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1134;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINALLY) {
                            {
                                this.state = 1133;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1136;
                        this.match(JavaParser.SWITCH);
                        this.state = 1137;
                        this.parExpression();
                        this.state = 1138;
                        this.match(JavaParser.LBRACE);
                        this.state = 1142;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1139;
                                        this.switchBlockStatementGroup();
                                    }
                                }
                            }
                            this.state = 1144;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        }
                        this.state = 1148;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                            {
                                {
                                    this.state = 1145;
                                    this.switchLabel();
                                }
                            }
                            this.state = 1150;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1151;
                        this.match(JavaParser.RBRACE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1153;
                        this.match(JavaParser.SYNCHRONIZED);
                        this.state = 1154;
                        this.parExpression();
                        this.state = 1155;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1157;
                        this.match(JavaParser.RETURN);
                        this.state = 1159;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1158;
                                this.expression(0);
                            }
                        }
                        this.state = 1161;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1162;
                        this.match(JavaParser.THROW);
                        this.state = 1163;
                        this.expression(0);
                        this.state = 1164;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1166;
                        this.match(JavaParser.BREAK);
                        this.state = 1168;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1167;
                                this.identifier();
                            }
                        }
                        this.state = 1170;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1171;
                        this.match(JavaParser.CONTINUE);
                        this.state = 1173;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1172;
                                this.identifier();
                            }
                        }
                        this.state = 1175;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1176;
                        this.match(JavaParser.YIELD);
                        this.state = 1177;
                        this.expression(0);
                        this.state = 1178;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1180;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1181;
                        _localctx._statementExpression = this.expression(0);
                        this.state = 1182;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1184;
                        this.switchExpression();
                        this.state = 1186;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1185;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1188;
                        _localctx._identifierLabel = this.identifier();
                        this.state = 1189;
                        this.match(JavaParser.COLON);
                        this.state = 1190;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchClause() {
        let _localctx = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, JavaParser.RULE_catchClause);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1194;
                this.match(JavaParser.CATCH);
                this.state = 1195;
                this.match(JavaParser.LPAREN);
                this.state = 1199;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1196;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1201;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                }
                this.state = 1202;
                this.catchType();
                this.state = 1203;
                this.identifier();
                this.state = 1204;
                this.match(JavaParser.RPAREN);
                this.state = 1205;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchType() {
        let _localctx = new CatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, JavaParser.RULE_catchType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1207;
                this.qualifiedName();
                this.state = 1212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 1208;
                            this.match(JavaParser.BITOR);
                            this.state = 1209;
                            this.qualifiedName();
                        }
                    }
                    this.state = 1214;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    finallyBlock() {
        let _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1215;
                this.match(JavaParser.FINALLY);
                this.state = 1216;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resourceSpecification() {
        let _localctx = new ResourceSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, JavaParser.RULE_resourceSpecification);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1218;
                this.match(JavaParser.LPAREN);
                this.state = 1219;
                this.resources();
                this.state = 1221;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 1220;
                        this.match(JavaParser.SEMI);
                    }
                }
                this.state = 1223;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resources() {
        let _localctx = new ResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, JavaParser.RULE_resources);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1225;
                this.resource();
                this.state = 1230;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1226;
                                this.match(JavaParser.SEMI);
                                this.state = 1227;
                                this.resource();
                            }
                        }
                    }
                    this.state = 1232;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    resource() {
        let _localctx = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, JavaParser.RULE_resource);
        try {
            let _alt;
            this.state = 1250;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1236;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1233;
                                        this.variableModifier();
                                    }
                                }
                            }
                            this.state = 1238;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        }
                        this.state = 1244;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1239;
                                    this.classOrInterfaceType();
                                    this.state = 1240;
                                    this.variableDeclaratorId();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1242;
                                    this.match(JavaParser.VAR);
                                    this.state = 1243;
                                    this.identifier();
                                }
                                break;
                        }
                        this.state = 1246;
                        this.match(JavaParser.ASSIGN);
                        this.state = 1247;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1249;
                        this.identifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchBlockStatementGroup() {
        let _localctx = new SwitchBlockStatementGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, JavaParser.RULE_switchBlockStatementGroup);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1252;
                            this.switchLabel();
                        }
                    }
                    this.state = 1255;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
                this.state = 1258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1257;
                            this.blockStatement();
                        }
                    }
                    this.state = 1260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchLabel() {
        let _localctx = new SwitchLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, JavaParser.RULE_switchLabel);
        try {
            this.state = 1273;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1262;
                        this.match(JavaParser.CASE);
                        this.state = 1268;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1263;
                                    _localctx._constantExpression = this.expression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1264;
                                    _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1265;
                                    this.typeType();
                                    this.state = 1266;
                                    _localctx._varName = this.identifier();
                                }
                                break;
                        }
                        this.state = 1270;
                        this.match(JavaParser.COLON);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1271;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1272;
                        this.match(JavaParser.COLON);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forControl() {
        let _localctx = new ForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, JavaParser.RULE_forControl);
        let _la;
        try {
            this.state = 1287;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1275;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1277;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1276;
                                this.forInit();
                            }
                        }
                        this.state = 1279;
                        this.match(JavaParser.SEMI);
                        this.state = 1281;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1280;
                                this.expression(0);
                            }
                        }
                        this.state = 1283;
                        this.match(JavaParser.SEMI);
                        this.state = 1285;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1284;
                                _localctx._forUpdate = this.expressionList();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forInit() {
        let _localctx = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, JavaParser.RULE_forInit);
        try {
            this.state = 1291;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1289;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1290;
                        this.expressionList();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enhancedForControl() {
        let _localctx = new EnhancedForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, JavaParser.RULE_enhancedForControl);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1296;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1293;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1298;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                }
                this.state = 1301;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                    case 1:
                        {
                            this.state = 1299;
                            this.typeType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1300;
                            this.match(JavaParser.VAR);
                        }
                        break;
                }
                this.state = 1303;
                this.variableDeclaratorId();
                this.state = 1304;
                this.match(JavaParser.COLON);
                this.state = 1305;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parExpression() {
        let _localctx = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1307;
                this.match(JavaParser.LPAREN);
                this.state = 1308;
                this.expression(0);
                this.state = 1309;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionList() {
        let _localctx = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, JavaParser.RULE_expressionList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1311;
                this.expression(0);
                this.state = 1316;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1312;
                            this.match(JavaParser.COMMA);
                            this.state = 1313;
                            this.expression(0);
                        }
                    }
                    this.state = 1318;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    methodCall() {
        let _localctx = new MethodCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, JavaParser.RULE_methodCall);
        let _la;
        try {
            this.state = 1338;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1319;
                        this.identifier();
                        this.state = 1320;
                        this.match(JavaParser.LPAREN);
                        this.state = 1322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1321;
                                this.expressionList();
                            }
                        }
                        this.state = 1324;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.THIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1326;
                        this.match(JavaParser.THIS);
                        this.state = 1327;
                        this.match(JavaParser.LPAREN);
                        this.state = 1329;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1328;
                                this.expressionList();
                            }
                        }
                        this.state = 1331;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1332;
                        this.match(JavaParser.SUPER);
                        this.state = 1333;
                        this.match(JavaParser.LPAREN);
                        this.state = 1335;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1334;
                                this.expressionList();
                            }
                        }
                        this.state = 1337;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 202;
        this.enterRecursionRule(_localctx, 202, JavaParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1385;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        {
                            this.state = 1341;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1342;
                            this.methodCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1343;
                            this.match(JavaParser.NEW);
                            this.state = 1344;
                            this.creator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1345;
                            this.match(JavaParser.LPAREN);
                            this.state = 1349;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1346;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1351;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                            }
                            this.state = 1352;
                            this.typeType();
                            this.state = 1357;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.BITAND) {
                                {
                                    {
                                        this.state = 1353;
                                        this.match(JavaParser.BITAND);
                                        this.state = 1354;
                                        this.typeType();
                                    }
                                }
                                this.state = 1359;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1360;
                            this.match(JavaParser.RPAREN);
                            this.state = 1361;
                            this.expression(22);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1363;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)))) !== 0))) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1364;
                            this.expression(20);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1365;
                            _localctx._prefix = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === JavaParser.BANG || _la === JavaParser.TILDE)) {
                                _localctx._prefix = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1366;
                            this.expression(19);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1367;
                            this.lambdaExpression();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1368;
                            this.switchExpression();
                        }
                        break;
                    case 9:
                        {
                            this.state = 1369;
                            this.typeType();
                            this.state = 1370;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1376;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case JavaParser.MODULE:
                                case JavaParser.OPEN:
                                case JavaParser.REQUIRES:
                                case JavaParser.EXPORTS:
                                case JavaParser.OPENS:
                                case JavaParser.TO:
                                case JavaParser.USES:
                                case JavaParser.PROVIDES:
                                case JavaParser.WITH:
                                case JavaParser.TRANSITIVE:
                                case JavaParser.VAR:
                                case JavaParser.YIELD:
                                case JavaParser.RECORD:
                                case JavaParser.SEALED:
                                case JavaParser.PERMITS:
                                case JavaParser.LT:
                                case JavaParser.IDENTIFIER:
                                    {
                                        this.state = 1372;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1371;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1374;
                                        this.identifier();
                                    }
                                    break;
                                case JavaParser.NEW:
                                    {
                                        this.state = 1375;
                                        this.match(JavaParser.NEW);
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                    case 10:
                        {
                            this.state = 1378;
                            this.classType();
                            this.state = 1379;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1381;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.LT) {
                                {
                                    this.state = 1380;
                                    this.typeArguments();
                                }
                            }
                            this.state = 1383;
                            this.match(JavaParser.NEW);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1470;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1468;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1387;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1388;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (JavaParser.MUL - 104)) | (1 << (JavaParser.DIV - 104)) | (1 << (JavaParser.MOD - 104)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1389;
                                        this.expression(19);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1390;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1391;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.ADD || _la === JavaParser.SUB)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1392;
                                        this.expression(18);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1393;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1401;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1394;
                                                    this.match(JavaParser.LT);
                                                    this.state = 1395;
                                                    this.match(JavaParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1396;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1397;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1398;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1399;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1400;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1403;
                                        this.expression(17);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1404;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1405;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (JavaParser.GT - 88)) | (1 << (JavaParser.LT - 88)) | (1 << (JavaParser.LE - 88)) | (1 << (JavaParser.GE - 88)))) !== 0))) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1406;
                                        this.expression(16);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1407;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1408;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1409;
                                        this.expression(14);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1410;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1411;
                                        _localctx._bop = this.match(JavaParser.BITAND);
                                        this.state = 1412;
                                        this.expression(13);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1413;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1414;
                                        _localctx._bop = this.match(JavaParser.CARET);
                                        this.state = 1415;
                                        this.expression(12);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1416;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1417;
                                        _localctx._bop = this.match(JavaParser.BITOR);
                                        this.state = 1418;
                                        this.expression(11);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1419;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1420;
                                        _localctx._bop = this.match(JavaParser.AND);
                                        this.state = 1421;
                                        this.expression(10);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1422;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1423;
                                        _localctx._bop = this.match(JavaParser.OR);
                                        this.state = 1424;
                                        this.expression(9);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1425;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1426;
                                        _localctx._bop = this.match(JavaParser.QUESTION);
                                        this.state = 1427;
                                        this.expression(0);
                                        this.state = 1428;
                                        this.match(JavaParser.COLON);
                                        this.state = 1429;
                                        this.expression(7);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1431;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1432;
                                        _localctx._bop = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (JavaParser.ASSIGN - 87)) | (1 << (JavaParser.ADD_ASSIGN - 87)) | (1 << (JavaParser.SUB_ASSIGN - 87)) | (1 << (JavaParser.MUL_ASSIGN - 87)) | (1 << (JavaParser.DIV_ASSIGN - 87)) | (1 << (JavaParser.AND_ASSIGN - 87)) | (1 << (JavaParser.OR_ASSIGN - 87)) | (1 << (JavaParser.XOR_ASSIGN - 87)) | (1 << (JavaParser.MOD_ASSIGN - 87)) | (1 << (JavaParser.LSHIFT_ASSIGN - 87)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN)) {
                                            _localctx._bop = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1433;
                                        this.expression(6);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1434;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 1435;
                                        _localctx._bop = this.match(JavaParser.DOT);
                                        this.state = 1447;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1436;
                                                    this.identifier();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1437;
                                                    this.methodCall();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1438;
                                                    this.match(JavaParser.THIS);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1439;
                                                    this.match(JavaParser.NEW);
                                                    this.state = 1441;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === JavaParser.LT) {
                                                        {
                                                            this.state = 1440;
                                                            this.nonWildcardTypeArguments();
                                                        }
                                                    }
                                                    this.state = 1443;
                                                    this.innerCreator();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1444;
                                                    this.match(JavaParser.SUPER);
                                                    this.state = 1445;
                                                    this.superSuffix();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1446;
                                                    this.explicitGenericInvocation();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1449;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1450;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1451;
                                        this.expression(0);
                                        this.state = 1452;
                                        this.match(JavaParser.RBRACK);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1454;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 1455;
                                        _localctx._postfix = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === JavaParser.INC || _la === JavaParser.DEC)) {
                                            _localctx._postfix = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                                case 16:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1456;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1457;
                                        _localctx._bop = this.match(JavaParser.INSTANCEOF);
                                        this.state = 1460;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1458;
                                                    this.typeType();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1459;
                                                    this.pattern();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 17:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1462;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1463;
                                        this.match(JavaParser.COLONCOLON);
                                        this.state = 1465;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1464;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1467;
                                        this.identifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1472;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pattern() {
        let _localctx = new PatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, JavaParser.RULE_pattern);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1476;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1473;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1478;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                }
                this.state = 1479;
                this.typeType();
                this.state = 1483;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1480;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1485;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                }
                this.state = 1486;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaExpression() {
        let _localctx = new LambdaExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, JavaParser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1488;
                this.lambdaParameters();
                this.state = 1489;
                this.match(JavaParser.ARROW);
                this.state = 1490;
                this.lambdaBody();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaParameters() {
        let _localctx = new LambdaParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, JavaParser.RULE_lambdaParameters);
        let _la;
        try {
            this.state = 1514;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1492;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1493;
                        this.match(JavaParser.LPAREN);
                        this.state = 1495;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1494;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1497;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1498;
                        this.match(JavaParser.LPAREN);
                        this.state = 1499;
                        this.identifier();
                        this.state = 1504;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.COMMA) {
                            {
                                {
                                    this.state = 1500;
                                    this.match(JavaParser.COMMA);
                                    this.state = 1501;
                                    this.identifier();
                                }
                            }
                            this.state = 1506;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1507;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1509;
                        this.match(JavaParser.LPAREN);
                        this.state = 1511;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINAL || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1510;
                                this.lambdaLVTIList();
                            }
                        }
                        this.state = 1513;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaBody() {
        let _localctx = new LambdaBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, JavaParser.RULE_lambdaBody);
        try {
            this.state = 1518;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.SWITCH:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                case JavaParser.BOOL_LITERAL:
                case JavaParser.CHAR_LITERAL:
                case JavaParser.STRING_LITERAL:
                case JavaParser.TEXT_BLOCK:
                case JavaParser.NULL_LITERAL:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.AT:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1516;
                        this.expression(0);
                    }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1517;
                        this.block();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primary() {
        let _localctx = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, JavaParser.RULE_primary);
        try {
            this.state = 1538;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1520;
                        this.match(JavaParser.LPAREN);
                        this.state = 1521;
                        this.expression(0);
                        this.state = 1522;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1524;
                        this.match(JavaParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1525;
                        this.match(JavaParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1526;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1527;
                        this.identifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1528;
                        this.typeTypeOrVoid();
                        this.state = 1529;
                        this.match(JavaParser.DOT);
                        this.state = 1530;
                        this.match(JavaParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1532;
                        this.nonWildcardTypeArguments();
                        this.state = 1536;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.SUPER:
                            case JavaParser.MODULE:
                            case JavaParser.OPEN:
                            case JavaParser.REQUIRES:
                            case JavaParser.EXPORTS:
                            case JavaParser.OPENS:
                            case JavaParser.TO:
                            case JavaParser.USES:
                            case JavaParser.PROVIDES:
                            case JavaParser.WITH:
                            case JavaParser.TRANSITIVE:
                            case JavaParser.VAR:
                            case JavaParser.YIELD:
                            case JavaParser.RECORD:
                            case JavaParser.SEALED:
                            case JavaParser.PERMITS:
                            case JavaParser.IDENTIFIER:
                                {
                                    this.state = 1533;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case JavaParser.THIS:
                                {
                                    this.state = 1534;
                                    this.match(JavaParser.THIS);
                                    this.state = 1535;
                                    this.arguments();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchExpression() {
        let _localctx = new SwitchExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, JavaParser.RULE_switchExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1540;
                this.match(JavaParser.SWITCH);
                this.state = 1541;
                this.parExpression();
                this.state = 1542;
                this.match(JavaParser.LBRACE);
                this.state = 1546;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                    {
                        {
                            this.state = 1543;
                            this.switchLabeledRule();
                        }
                    }
                    this.state = 1548;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1549;
                this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchLabeledRule() {
        let _localctx = new SwitchLabeledRuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, JavaParser.RULE_switchLabeledRule);
        let _la;
        try {
            this.state = 1562;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1551;
                        this.match(JavaParser.CASE);
                        this.state = 1555;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1552;
                                    this.expressionList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1553;
                                    this.match(JavaParser.NULL_LITERAL);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1554;
                                    this.guardedPattern(0);
                                }
                                break;
                        }
                        this.state = 1557;
                        _la = this._input.LA(1);
                        if (!(_la === JavaParser.COLON || _la === JavaParser.ARROW)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1558;
                        this.switchRuleOutcome();
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1559;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1560;
                        _la = this._input.LA(1);
                        if (!(_la === JavaParser.COLON || _la === JavaParser.ARROW)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1561;
                        this.switchRuleOutcome();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    guardedPattern(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new GuardedPatternContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 218;
        this.enterRecursionRule(_localctx, 218, JavaParser.RULE_guardedPattern, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1590;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.LPAREN:
                        {
                            this.state = 1565;
                            this.match(JavaParser.LPAREN);
                            this.state = 1566;
                            this.guardedPattern(0);
                            this.state = 1567;
                            this.match(JavaParser.RPAREN);
                        }
                        break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FINAL:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                    case JavaParser.MODULE:
                    case JavaParser.OPEN:
                    case JavaParser.REQUIRES:
                    case JavaParser.EXPORTS:
                    case JavaParser.OPENS:
                    case JavaParser.TO:
                    case JavaParser.USES:
                    case JavaParser.PROVIDES:
                    case JavaParser.WITH:
                    case JavaParser.TRANSITIVE:
                    case JavaParser.VAR:
                    case JavaParser.YIELD:
                    case JavaParser.RECORD:
                    case JavaParser.SEALED:
                    case JavaParser.PERMITS:
                    case JavaParser.AT:
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1572;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1569;
                                            this.variableModifier();
                                        }
                                    }
                                }
                                this.state = 1574;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            }
                            this.state = 1575;
                            this.typeType();
                            this.state = 1579;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1576;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1581;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            }
                            this.state = 1582;
                            this.identifier();
                            this.state = 1587;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1583;
                                            this.match(JavaParser.AND);
                                            this.state = 1584;
                                            this.expression(0);
                                        }
                                    }
                                }
                                this.state = 1589;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1597;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new GuardedPatternContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_guardedPattern);
                                this.state = 1592;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1593;
                                this.match(JavaParser.AND);
                                this.state = 1594;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 1599;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 189, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    switchRuleOutcome() {
        let _localctx = new SwitchRuleOutcomeContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, JavaParser.RULE_switchRuleOutcome);
        let _la;
        try {
            this.state = 1607;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1600;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1604;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                            {
                                {
                                    this.state = 1601;
                                    this.blockStatement();
                                }
                            }
                            this.state = 1606;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classType() {
        let _localctx = new ClassTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, JavaParser.RULE_classType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1612;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                    case 1:
                        {
                            this.state = 1609;
                            this.classOrInterfaceType();
                            this.state = 1610;
                            this.match(JavaParser.DOT);
                        }
                        break;
                }
                this.state = 1617;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1614;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1619;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                }
                this.state = 1620;
                this.identifier();
                this.state = 1622;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1621;
                        this.typeArguments();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    creator() {
        let _localctx = new CreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, JavaParser.RULE_creator);
        try {
            this.state = 1633;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1624;
                        this.nonWildcardTypeArguments();
                        this.state = 1625;
                        this.createdName();
                        this.state = 1626;
                        this.classCreatorRest();
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1628;
                        this.createdName();
                        this.state = 1631;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.LBRACK:
                                {
                                    this.state = 1629;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case JavaParser.LPAREN:
                                {
                                    this.state = 1630;
                                    this.classCreatorRest();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    createdName() {
        let _localctx = new CreatedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, JavaParser.RULE_createdName);
        let _la;
        try {
            this.state = 1650;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1635;
                        this.identifier();
                        this.state = 1637;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1636;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1646;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.DOT) {
                            {
                                {
                                    this.state = 1639;
                                    this.match(JavaParser.DOT);
                                    this.state = 1640;
                                    this.identifier();
                                    this.state = 1642;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.LT) {
                                        {
                                            this.state = 1641;
                                            this.typeArgumentsOrDiamond();
                                        }
                                    }
                                }
                            }
                            this.state = 1648;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1649;
                        this.primitiveType();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    innerCreator() {
        let _localctx = new InnerCreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, JavaParser.RULE_innerCreator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1652;
                this.identifier();
                this.state = 1654;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1653;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1656;
                this.classCreatorRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arrayCreatorRest() {
        let _localctx = new ArrayCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, JavaParser.RULE_arrayCreatorRest);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1658;
                this.match(JavaParser.LBRACK);
                this.state = 1686;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                        {
                            this.state = 1659;
                            this.match(JavaParser.RBRACK);
                            this.state = 1664;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.LBRACK) {
                                {
                                    {
                                        this.state = 1660;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1661;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                                this.state = 1666;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1667;
                            this.arrayInitializer();
                        }
                        break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.NEW:
                    case JavaParser.SHORT:
                    case JavaParser.SUPER:
                    case JavaParser.SWITCH:
                    case JavaParser.THIS:
                    case JavaParser.VOID:
                    case JavaParser.MODULE:
                    case JavaParser.OPEN:
                    case JavaParser.REQUIRES:
                    case JavaParser.EXPORTS:
                    case JavaParser.OPENS:
                    case JavaParser.TO:
                    case JavaParser.USES:
                    case JavaParser.PROVIDES:
                    case JavaParser.WITH:
                    case JavaParser.TRANSITIVE:
                    case JavaParser.VAR:
                    case JavaParser.YIELD:
                    case JavaParser.RECORD:
                    case JavaParser.SEALED:
                    case JavaParser.PERMITS:
                    case JavaParser.DECIMAL_LITERAL:
                    case JavaParser.HEX_LITERAL:
                    case JavaParser.OCT_LITERAL:
                    case JavaParser.BINARY_LITERAL:
                    case JavaParser.FLOAT_LITERAL:
                    case JavaParser.HEX_FLOAT_LITERAL:
                    case JavaParser.BOOL_LITERAL:
                    case JavaParser.CHAR_LITERAL:
                    case JavaParser.STRING_LITERAL:
                    case JavaParser.TEXT_BLOCK:
                    case JavaParser.NULL_LITERAL:
                    case JavaParser.LPAREN:
                    case JavaParser.LT:
                    case JavaParser.BANG:
                    case JavaParser.TILDE:
                    case JavaParser.INC:
                    case JavaParser.DEC:
                    case JavaParser.ADD:
                    case JavaParser.SUB:
                    case JavaParser.AT:
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1668;
                            this.expression(0);
                            this.state = 1669;
                            this.match(JavaParser.RBRACK);
                            this.state = 1676;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1670;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1671;
                                            this.expression(0);
                                            this.state = 1672;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1678;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                            }
                            this.state = 1683;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1679;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1680;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1685;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classCreatorRest() {
        let _localctx = new ClassCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1688;
                this.arguments();
                this.state = 1690;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                    case 1:
                        {
                            this.state = 1689;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    explicitGenericInvocation() {
        let _localctx = new ExplicitGenericInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1692;
                this.nonWildcardTypeArguments();
                this.state = 1693;
                this.explicitGenericInvocationSuffix();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArgumentsOrDiamond() {
        let _localctx = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1698;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1695;
                        this.match(JavaParser.LT);
                        this.state = 1696;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1697;
                        this.typeArguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonWildcardTypeArgumentsOrDiamond() {
        let _localctx = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1703;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1700;
                        this.match(JavaParser.LT);
                        this.state = 1701;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1702;
                        this.nonWildcardTypeArguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nonWildcardTypeArguments() {
        let _localctx = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1705;
                this.match(JavaParser.LT);
                this.state = 1706;
                this.typeList();
                this.state = 1707;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeList() {
        let _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, JavaParser.RULE_typeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1709;
                this.typeType();
                this.state = 1714;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1710;
                            this.match(JavaParser.COMMA);
                            this.state = 1711;
                            this.typeType();
                        }
                    }
                    this.state = 1716;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeType() {
        let _localctx = new TypeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, JavaParser.RULE_typeType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1720;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1717;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1722;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                }
                this.state = 1725;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.MODULE:
                    case JavaParser.OPEN:
                    case JavaParser.REQUIRES:
                    case JavaParser.EXPORTS:
                    case JavaParser.OPENS:
                    case JavaParser.TO:
                    case JavaParser.USES:
                    case JavaParser.PROVIDES:
                    case JavaParser.WITH:
                    case JavaParser.TRANSITIVE:
                    case JavaParser.VAR:
                    case JavaParser.YIELD:
                    case JavaParser.RECORD:
                    case JavaParser.SEALED:
                    case JavaParser.PERMITS:
                    case JavaParser.IDENTIFIER:
                        {
                            this.state = 1723;
                            this.classOrInterfaceType();
                        }
                        break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                        {
                            this.state = 1724;
                            this.primitiveType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1737;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1730;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                    {
                                        {
                                            this.state = 1727;
                                            this.annotation();
                                        }
                                    }
                                    this.state = 1732;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1733;
                                this.match(JavaParser.LBRACK);
                                this.state = 1734;
                                this.match(JavaParser.RBRACK);
                            }
                        }
                    }
                    this.state = 1739;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primitiveType() {
        let _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, JavaParser.RULE_primitiveType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1740;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArguments() {
        let _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, JavaParser.RULE_typeArguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1742;
                this.match(JavaParser.LT);
                this.state = 1743;
                this.typeArgument();
                this.state = 1748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1744;
                            this.match(JavaParser.COMMA);
                            this.state = 1745;
                            this.typeArgument();
                        }
                    }
                    this.state = 1750;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1751;
                this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    superSuffix() {
        let _localctx = new SuperSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, JavaParser.RULE_superSuffix);
        let _la;
        try {
            this.state = 1762;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1753;
                        this.arguments();
                    }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1754;
                        this.match(JavaParser.DOT);
                        this.state = 1756;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1755;
                                this.typeArguments();
                            }
                        }
                        this.state = 1758;
                        this.identifier();
                        this.state = 1760;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1759;
                                    this.arguments();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    explicitGenericInvocationSuffix() {
        let _localctx = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1769;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1764;
                        this.match(JavaParser.SUPER);
                        this.state = 1765;
                        this.superSuffix();
                    }
                    break;
                case JavaParser.MODULE:
                case JavaParser.OPEN:
                case JavaParser.REQUIRES:
                case JavaParser.EXPORTS:
                case JavaParser.OPENS:
                case JavaParser.TO:
                case JavaParser.USES:
                case JavaParser.PROVIDES:
                case JavaParser.WITH:
                case JavaParser.TRANSITIVE:
                case JavaParser.VAR:
                case JavaParser.YIELD:
                case JavaParser.RECORD:
                case JavaParser.SEALED:
                case JavaParser.PERMITS:
                case JavaParser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1766;
                        this.identifier();
                        this.state = 1767;
                        this.arguments();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, JavaParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1771;
                this.match(JavaParser.LPAREN);
                this.state = 1773;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 1772;
                        this.expressionList();
                    }
                }
                this.state = 1775;
                this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 101:
                return this.expression_sempred(_localctx, predIndex);
            case 109:
                return this.guardedPattern_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 18);
            case 1:
                return this.precpred(this._ctx, 17);
            case 2:
                return this.precpred(this._ctx, 16);
            case 3:
                return this.precpred(this._ctx, 15);
            case 4:
                return this.precpred(this._ctx, 13);
            case 5:
                return this.precpred(this._ctx, 12);
            case 6:
                return this.precpred(this._ctx, 11);
            case 7:
                return this.precpred(this._ctx, 10);
            case 8:
                return this.precpred(this._ctx, 9);
            case 9:
                return this.precpred(this._ctx, 8);
            case 10:
                return this.precpred(this._ctx, 7);
            case 11:
                return this.precpred(this._ctx, 6);
            case 12:
                return this.precpred(this._ctx, 26);
            case 13:
                return this.precpred(this._ctx, 25);
            case 14:
                return this.precpred(this._ctx, 21);
            case 15:
                return this.precpred(this._ctx, 14);
            case 16:
                return this.precpred(this._ctx, 3);
        }
        return true;
    }
    guardedPattern_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 17:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!JavaParser.__ATN) {
            JavaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
        }
        return JavaParser.__ATN;
    }
}
exports.JavaParser = JavaParser;
JavaParser.ABSTRACT = 1;
JavaParser.ASSERT = 2;
JavaParser.BOOLEAN = 3;
JavaParser.BREAK = 4;
JavaParser.BYTE = 5;
JavaParser.CASE = 6;
JavaParser.CATCH = 7;
JavaParser.CHAR = 8;
JavaParser.CLASS = 9;
JavaParser.CONST = 10;
JavaParser.CONTINUE = 11;
JavaParser.DEFAULT = 12;
JavaParser.DO = 13;
JavaParser.DOUBLE = 14;
JavaParser.ELSE = 15;
JavaParser.ENUM = 16;
JavaParser.EXTENDS = 17;
JavaParser.FINAL = 18;
JavaParser.FINALLY = 19;
JavaParser.FLOAT = 20;
JavaParser.FOR = 21;
JavaParser.IF = 22;
JavaParser.GOTO = 23;
JavaParser.IMPLEMENTS = 24;
JavaParser.IMPORT = 25;
JavaParser.INSTANCEOF = 26;
JavaParser.INT = 27;
JavaParser.INTERFACE = 28;
JavaParser.LONG = 29;
JavaParser.NATIVE = 30;
JavaParser.NEW = 31;
JavaParser.PACKAGE = 32;
JavaParser.PRIVATE = 33;
JavaParser.PROTECTED = 34;
JavaParser.PUBLIC = 35;
JavaParser.RETURN = 36;
JavaParser.SHORT = 37;
JavaParser.STATIC = 38;
JavaParser.STRICTFP = 39;
JavaParser.SUPER = 40;
JavaParser.SWITCH = 41;
JavaParser.SYNCHRONIZED = 42;
JavaParser.THIS = 43;
JavaParser.THROW = 44;
JavaParser.THROWS = 45;
JavaParser.TRANSIENT = 46;
JavaParser.TRY = 47;
JavaParser.VOID = 48;
JavaParser.VOLATILE = 49;
JavaParser.WHILE = 50;
JavaParser.MODULE = 51;
JavaParser.OPEN = 52;
JavaParser.REQUIRES = 53;
JavaParser.EXPORTS = 54;
JavaParser.OPENS = 55;
JavaParser.TO = 56;
JavaParser.USES = 57;
JavaParser.PROVIDES = 58;
JavaParser.WITH = 59;
JavaParser.TRANSITIVE = 60;
JavaParser.VAR = 61;
JavaParser.YIELD = 62;
JavaParser.RECORD = 63;
JavaParser.SEALED = 64;
JavaParser.PERMITS = 65;
JavaParser.NON_SEALED = 66;
JavaParser.DECIMAL_LITERAL = 67;
JavaParser.HEX_LITERAL = 68;
JavaParser.OCT_LITERAL = 69;
JavaParser.BINARY_LITERAL = 70;
JavaParser.FLOAT_LITERAL = 71;
JavaParser.HEX_FLOAT_LITERAL = 72;
JavaParser.BOOL_LITERAL = 73;
JavaParser.CHAR_LITERAL = 74;
JavaParser.STRING_LITERAL = 75;
JavaParser.TEXT_BLOCK = 76;
JavaParser.NULL_LITERAL = 77;
JavaParser.LPAREN = 78;
JavaParser.RPAREN = 79;
JavaParser.LBRACE = 80;
JavaParser.RBRACE = 81;
JavaParser.LBRACK = 82;
JavaParser.RBRACK = 83;
JavaParser.SEMI = 84;
JavaParser.COMMA = 85;
JavaParser.DOT = 86;
JavaParser.ASSIGN = 87;
JavaParser.GT = 88;
JavaParser.LT = 89;
JavaParser.BANG = 90;
JavaParser.TILDE = 91;
JavaParser.QUESTION = 92;
JavaParser.COLON = 93;
JavaParser.EQUAL = 94;
JavaParser.LE = 95;
JavaParser.GE = 96;
JavaParser.NOTEQUAL = 97;
JavaParser.AND = 98;
JavaParser.OR = 99;
JavaParser.INC = 100;
JavaParser.DEC = 101;
JavaParser.ADD = 102;
JavaParser.SUB = 103;
JavaParser.MUL = 104;
JavaParser.DIV = 105;
JavaParser.BITAND = 106;
JavaParser.BITOR = 107;
JavaParser.CARET = 108;
JavaParser.MOD = 109;
JavaParser.ADD_ASSIGN = 110;
JavaParser.SUB_ASSIGN = 111;
JavaParser.MUL_ASSIGN = 112;
JavaParser.DIV_ASSIGN = 113;
JavaParser.AND_ASSIGN = 114;
JavaParser.OR_ASSIGN = 115;
JavaParser.XOR_ASSIGN = 116;
JavaParser.MOD_ASSIGN = 117;
JavaParser.LSHIFT_ASSIGN = 118;
JavaParser.RSHIFT_ASSIGN = 119;
JavaParser.URSHIFT_ASSIGN = 120;
JavaParser.ARROW = 121;
JavaParser.COLONCOLON = 122;
JavaParser.AT = 123;
JavaParser.ELLIPSIS = 124;
JavaParser.WS = 125;
JavaParser.COMMENT = 126;
JavaParser.LINE_COMMENT = 127;
JavaParser.IDENTIFIER = 128;
JavaParser.RULE_compilationUnit = 0;
JavaParser.RULE_packageDeclaration = 1;
JavaParser.RULE_importDeclaration = 2;
JavaParser.RULE_typeDeclaration = 3;
JavaParser.RULE_modifier = 4;
JavaParser.RULE_classOrInterfaceModifier = 5;
JavaParser.RULE_variableModifier = 6;
JavaParser.RULE_extendsList = 7;
JavaParser.RULE_implementsList = 8;
JavaParser.RULE_permitsList = 9;
JavaParser.RULE_classDeclaration = 10;
JavaParser.RULE_typeParameters = 11;
JavaParser.RULE_typeParameter = 12;
JavaParser.RULE_typeBound = 13;
JavaParser.RULE_enumDeclaration = 14;
JavaParser.RULE_enumConstants = 15;
JavaParser.RULE_enumConstant = 16;
JavaParser.RULE_enumBodyDeclarations = 17;
JavaParser.RULE_interfaceDeclaration = 18;
JavaParser.RULE_classBody = 19;
JavaParser.RULE_interfaceBody = 20;
JavaParser.RULE_classBodyDeclaration = 21;
JavaParser.RULE_memberDeclaration = 22;
JavaParser.RULE_methodDeclaration = 23;
JavaParser.RULE_methodBody = 24;
JavaParser.RULE_typeTypeOrVoid = 25;
JavaParser.RULE_genericMethodDeclaration = 26;
JavaParser.RULE_genericConstructorDeclaration = 27;
JavaParser.RULE_constructorDeclaration = 28;
JavaParser.RULE_fieldDeclaration = 29;
JavaParser.RULE_interfaceBodyDeclaration = 30;
JavaParser.RULE_interfaceMemberDeclaration = 31;
JavaParser.RULE_constDeclaration = 32;
JavaParser.RULE_constantDeclarator = 33;
JavaParser.RULE_interfaceMethodDeclaration = 34;
JavaParser.RULE_interfaceMethodModifier = 35;
JavaParser.RULE_genericInterfaceMethodDeclaration = 36;
JavaParser.RULE_interfaceCommonBodyDeclaration = 37;
JavaParser.RULE_variableDeclarators = 38;
JavaParser.RULE_variableDeclarator = 39;
JavaParser.RULE_variableDeclaratorId = 40;
JavaParser.RULE_variableInitializer = 41;
JavaParser.RULE_arrayInitializer = 42;
JavaParser.RULE_classOrInterfaceType = 43;
JavaParser.RULE_typeArgument = 44;
JavaParser.RULE_qualifiedNameList = 45;
JavaParser.RULE_formalParameters = 46;
JavaParser.RULE_receiverParameter = 47;
JavaParser.RULE_formalParameterList = 48;
JavaParser.RULE_formalParameter = 49;
JavaParser.RULE_lastFormalParameter = 50;
JavaParser.RULE_lambdaLVTIList = 51;
JavaParser.RULE_lambdaLVTIParameter = 52;
JavaParser.RULE_qualifiedName = 53;
JavaParser.RULE_literal = 54;
JavaParser.RULE_integerLiteral = 55;
JavaParser.RULE_floatLiteral = 56;
JavaParser.RULE_altAnnotationQualifiedName = 57;
JavaParser.RULE_annotation = 58;
JavaParser.RULE_elementValuePairs = 59;
JavaParser.RULE_elementValuePair = 60;
JavaParser.RULE_elementValue = 61;
JavaParser.RULE_elementValueArrayInitializer = 62;
JavaParser.RULE_annotationTypeDeclaration = 63;
JavaParser.RULE_annotationTypeBody = 64;
JavaParser.RULE_annotationTypeElementDeclaration = 65;
JavaParser.RULE_annotationTypeElementRest = 66;
JavaParser.RULE_annotationMethodOrConstantRest = 67;
JavaParser.RULE_annotationMethodRest = 68;
JavaParser.RULE_annotationConstantRest = 69;
JavaParser.RULE_defaultValue = 70;
JavaParser.RULE_moduleDeclaration = 71;
JavaParser.RULE_moduleBody = 72;
JavaParser.RULE_moduleDirective = 73;
JavaParser.RULE_requiresModifier = 74;
JavaParser.RULE_recordDeclaration = 75;
JavaParser.RULE_recordHeader = 76;
JavaParser.RULE_recordComponentList = 77;
JavaParser.RULE_recordComponent = 78;
JavaParser.RULE_recordBody = 79;
JavaParser.RULE_block = 80;
JavaParser.RULE_blockStatement = 81;
JavaParser.RULE_localVariableDeclaration = 82;
JavaParser.RULE_identifier = 83;
JavaParser.RULE_typeIdentifier = 84;
JavaParser.RULE_localTypeDeclaration = 85;
JavaParser.RULE_statement = 86;
JavaParser.RULE_catchClause = 87;
JavaParser.RULE_catchType = 88;
JavaParser.RULE_finallyBlock = 89;
JavaParser.RULE_resourceSpecification = 90;
JavaParser.RULE_resources = 91;
JavaParser.RULE_resource = 92;
JavaParser.RULE_switchBlockStatementGroup = 93;
JavaParser.RULE_switchLabel = 94;
JavaParser.RULE_forControl = 95;
JavaParser.RULE_forInit = 96;
JavaParser.RULE_enhancedForControl = 97;
JavaParser.RULE_parExpression = 98;
JavaParser.RULE_expressionList = 99;
JavaParser.RULE_methodCall = 100;
JavaParser.RULE_expression = 101;
JavaParser.RULE_pattern = 102;
JavaParser.RULE_lambdaExpression = 103;
JavaParser.RULE_lambdaParameters = 104;
JavaParser.RULE_lambdaBody = 105;
JavaParser.RULE_primary = 106;
JavaParser.RULE_switchExpression = 107;
JavaParser.RULE_switchLabeledRule = 108;
JavaParser.RULE_guardedPattern = 109;
JavaParser.RULE_switchRuleOutcome = 110;
JavaParser.RULE_classType = 111;
JavaParser.RULE_creator = 112;
JavaParser.RULE_createdName = 113;
JavaParser.RULE_innerCreator = 114;
JavaParser.RULE_arrayCreatorRest = 115;
JavaParser.RULE_classCreatorRest = 116;
JavaParser.RULE_explicitGenericInvocation = 117;
JavaParser.RULE_typeArgumentsOrDiamond = 118;
JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond = 119;
JavaParser.RULE_nonWildcardTypeArguments = 120;
JavaParser.RULE_typeList = 121;
JavaParser.RULE_typeType = 122;
JavaParser.RULE_primitiveType = 123;
JavaParser.RULE_typeArguments = 124;
JavaParser.RULE_superSuffix = 125;
JavaParser.RULE_explicitGenericInvocationSuffix = 126;
JavaParser.RULE_arguments = 127;
// tslint:disable:no-trailing-whitespace
JavaParser.ruleNames = [
    "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration",
    "modifier", "classOrInterfaceModifier", "variableModifier", "extendsList",
    "implementsList", "permitsList", "classDeclaration", "typeParameters",
    "typeParameter", "typeBound", "enumDeclaration", "enumConstants", "enumConstant",
    "enumBodyDeclarations", "interfaceDeclaration", "classBody", "interfaceBody",
    "classBodyDeclaration", "memberDeclaration", "methodDeclaration", "methodBody",
    "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration",
    "constructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration",
    "interfaceMemberDeclaration", "constDeclaration", "constantDeclarator",
    "interfaceMethodDeclaration", "interfaceMethodModifier", "genericInterfaceMethodDeclaration",
    "interfaceCommonBodyDeclaration", "variableDeclarators", "variableDeclarator",
    "variableDeclaratorId", "variableInitializer", "arrayInitializer", "classOrInterfaceType",
    "typeArgument", "qualifiedNameList", "formalParameters", "receiverParameter",
    "formalParameterList", "formalParameter", "lastFormalParameter", "lambdaLVTIList",
    "lambdaLVTIParameter", "qualifiedName", "literal", "integerLiteral", "floatLiteral",
    "altAnnotationQualifiedName", "annotation", "elementValuePairs", "elementValuePair",
    "elementValue", "elementValueArrayInitializer", "annotationTypeDeclaration",
    "annotationTypeBody", "annotationTypeElementDeclaration", "annotationTypeElementRest",
    "annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest",
    "defaultValue", "moduleDeclaration", "moduleBody", "moduleDirective",
    "requiresModifier", "recordDeclaration", "recordHeader", "recordComponentList",
    "recordComponent", "recordBody", "block", "blockStatement", "localVariableDeclaration",
    "identifier", "typeIdentifier", "localTypeDeclaration", "statement", "catchClause",
    "catchType", "finallyBlock", "resourceSpecification", "resources", "resource",
    "switchBlockStatementGroup", "switchLabel", "forControl", "forInit", "enhancedForControl",
    "parExpression", "expressionList", "methodCall", "expression", "pattern",
    "lambdaExpression", "lambdaParameters", "lambdaBody", "primary", "switchExpression",
    "switchLabeledRule", "guardedPattern", "switchRuleOutcome", "classType",
    "creator", "createdName", "innerCreator", "arrayCreatorRest", "classCreatorRest",
    "explicitGenericInvocation", "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond",
    "nonWildcardTypeArguments", "typeList", "typeType", "primitiveType", "typeArguments",
    "superSuffix", "explicitGenericInvocationSuffix", "arguments",
];
JavaParser._LITERAL_NAMES = [
    undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'",
    "'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'",
    "'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'",
    "'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'",
    "'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'",
    "'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'",
    "'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'",
    "'transient'", "'try'", "'void'", "'volatile'", "'while'", "'module'",
    "'open'", "'requires'", "'exports'", "'opens'", "'to'", "'uses'", "'provides'",
    "'with'", "'transitive'", "'var'", "'yield'", "'record'", "'sealed'",
    "'permits'", "'non-sealed'", undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "'null'",
    "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='",
    "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='",
    "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'",
    "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='",
    "'%='", "'<<='", "'>>='", "'>>>='", "'->'", "'::'", "'@'", "'...'",
];
JavaParser._SYMBOLIC_NAMES = [
    undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH",
    "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE",
    "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS",
    "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE",
    "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP",
    "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT",
    "TRY", "VOID", "VOLATILE", "WHILE", "MODULE", "OPEN", "REQUIRES", "EXPORTS",
    "OPENS", "TO", "USES", "PROVIDES", "WITH", "TRANSITIVE", "VAR", "YIELD",
    "RECORD", "SEALED", "PERMITS", "NON_SEALED", "DECIMAL_LITERAL", "HEX_LITERAL",
    "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", "HEX_FLOAT_LITERAL",
    "BOOL_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "TEXT_BLOCK", "NULL_LITERAL",
    "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA",
    "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL",
    "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL",
    "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN",
    "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN",
    "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ARROW", "COLONCOLON",
    "AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT", "IDENTIFIER",
];
JavaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);
JavaParser._serializedATNSegments = 4;
JavaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x82\u06F4\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
    "\x03\x02\x05\x02\u0104\n\x02\x03\x02\x07\x02\u0107\n\x02\f\x02\x0E\x02" +
    "\u010A\v\x02\x03\x02\x07\x02\u010D\n\x02\f\x02\x0E\x02\u0110\v\x02\x03" +
    "\x02\x03\x02\x03\x02\x05\x02\u0115\n\x02\x03\x03\x07\x03\u0118\n\x03\f" +
    "\x03\x0E\x03\u011B\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
    "\x05\x04\u0123\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0128\n\x04\x03\x04" +
    "\x03\x04\x03\x05\x07\x05\u012D\n\x05\f\x05\x0E\x05\u0130\v\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0137\n\x05\x03\x05\x05\x05\u013A" +
    "\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0141\n\x06\x03" +
    "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x05\x07\u014D\n\x07\x03\b\x03\b\x05\b\u0151\n\b\x03\t\x03\t\x03\t" +
    "\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u015F\n\f" +
    "\x03\f\x03\f\x05\f\u0163\n\f\x03\f\x05\f\u0166\n\f\x03\f\x05\f\u0169\n" +
    "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\u0171\n\r\f\r\x0E\r\u0174" +
    "\v\r\x03\r\x03\r\x03\x0E\x07\x0E\u0179\n\x0E\f\x0E\x0E\x0E\u017C\v\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0181\n\x0E\f\x0E\x0E\x0E\u0184\v\x0E" +
    "\x03\x0E\x05\x0E\u0187\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u018C\n\x0F" +
    "\f\x0F\x0E\x0F\u018F\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0194\n\x10" +
    "\x03\x10\x03\x10\x05\x10\u0198\n\x10\x03\x10\x05\x10\u019B\n\x10\x03\x10" +
    "\x05\x10\u019E\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u01A5" +
    "\n\x11\f\x11\x0E\x11\u01A8\v\x11\x03\x12\x07\x12\u01AB\n\x12\f\x12\x0E" +
    "\x12\u01AE\v\x12\x03\x12\x03\x12\x05\x12\u01B2\n\x12\x03\x12\x05\x12\u01B5" +
    "\n\x12\x03\x13\x03\x13\x07\x13\u01B9\n\x13\f\x13\x0E\x13\u01BC\v\x13\x03" +
    "\x14\x03\x14\x03\x14\x05\x14\u01C1\n\x14\x03\x14\x05\x14\u01C4\n\x14\x03" +
    "\x14\x05\x14\u01C7\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u01CD" +
    "\n\x15\f\x15\x0E\x15\u01D0\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16" +
    "\u01D6\n\x16\f\x16\x0E\x16\u01D9\v\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
    "\x05\x17\u01DF\n\x17\x03\x17\x03\x17\x07\x17\u01E3\n\x17\f\x17\x0E\x17" +
    "\u01E6\v\x17\x03\x17\x05\x17\u01E9\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
    "\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01F5\n\x18\x03" +
    "\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01FC\n\x19\f\x19\x0E\x19" +
    "\u01FF\v\x19\x03\x19\x03\x19\x05\x19\u0203\n\x19\x03\x19\x03\x19\x03\x1A" +
    "\x03\x1A\x05\x1A\u0209\n\x1A\x03\x1B\x03\x1B\x05\x1B\u020D\n\x1B\x03\x1C" +
    "\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x05\x1E\u0219\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
    " \x07 \u0222\n \f \x0E \u0225\v \x03 \x03 \x05 \u0229\n \x03!\x03!\x03" +
    "!\x03!\x03!\x03!\x03!\x03!\x05!\u0233\n!\x03\"\x03\"\x03\"\x03\"\x07\"" +
    "\u0239\n\"\f\"\x0E\"\u023C\v\"\x03\"\x03\"\x03#\x03#\x03#\x07#\u0243\n" +
    "#\f#\x0E#\u0246\v#\x03#\x03#\x03#\x03$\x07$\u024C\n$\f$\x0E$\u024F\v$" +
    "\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0259\n%\x03&\x07&\u025C" +
    "\n&\f&\x0E&\u025F\v&\x03&\x03&\x03&\x03\'\x07\'\u0265\n\'\f\'\x0E\'\u0268" +
    "\v\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'\u026F\n\'\f\'\x0E\'\u0272\v\'" +
    "\x03\'\x03\'\x05\'\u0276\n\'\x03\'\x03\'\x03(\x03(\x03(\x07(\u027D\n(" +
    "\f(\x0E(\u0280\v(\x03)\x03)\x03)\x05)\u0285\n)\x03*\x03*\x03*\x07*\u028A" +
    "\n*\f*\x0E*\u028D\v*\x03+\x03+\x05+\u0291\n+\x03,\x03,\x03,\x03,\x07," +
    "\u0297\n,\f,\x0E,\u029A\v,\x03,\x05,\u029D\n,\x05,\u029F\n,\x03,\x03," +
    "\x03-\x03-\x05-\u02A5\n-\x03-\x03-\x07-\u02A9\n-\f-\x0E-\u02AC\v-\x03" +
    "-\x03-\x05-\u02B0\n-\x03.\x03.\x07.\u02B4\n.\f.\x0E.\u02B7\v.\x03.\x03" +
    ".\x03.\x05.\u02BC\n.\x05.\u02BE\n.\x03/\x03/\x03/\x07/\u02C3\n/\f/\x0E" +
    "/\u02C6\v/\x030\x030\x050\u02CA\n0\x030\x030\x030\x050\u02CF\n0\x030\x05" +
    "0\u02D2\n0\x050\u02D4\n0\x030\x030\x031\x031\x031\x031\x071\u02DC\n1\f" +
    "1\x0E1\u02DF\v1\x031\x031\x032\x032\x032\x072\u02E6\n2\f2\x0E2\u02E9\v" +
    "2\x032\x032\x052\u02ED\n2\x032\x052\u02F0\n2\x033\x073\u02F3\n3\f3\x0E" +
    "3\u02F6\v3\x033\x033\x033\x034\x074\u02FC\n4\f4\x0E4\u02FF\v4\x034\x03" +
    "4\x074\u0303\n4\f4\x0E4\u0306\v4\x034\x034\x034\x035\x035\x035\x075\u030E" +
    "\n5\f5\x0E5\u0311\v5\x036\x076\u0314\n6\f6\x0E6\u0317\v6\x036\x036\x03" +
    "6\x037\x037\x037\x077\u031F\n7\f7\x0E7\u0322\v7\x038\x038\x038\x038\x03" +
    "8\x038\x038\x058\u032B\n8\x039\x039\x03:\x03:\x03;\x03;\x03;\x07;\u0334" +
    "\n;\f;\x0E;\u0337\v;\x03;\x03;\x03;\x03<\x03<\x03<\x05<\u033F\n<\x03<" +
    "\x03<\x03<\x05<\u0344\n<\x03<\x05<\u0347\n<\x03=\x03=\x03=\x07=\u034C" +
    "\n=\f=\x0E=\u034F\v=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x05?\u0358\n?" +
    "\x03@\x03@\x03@\x03@\x07@\u035E\n@\f@\x0E@\u0361\v@\x05@\u0363\n@\x03" +
    "@\x05@\u0366\n@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x07B\u0371" +
    "\nB\fB\x0EB\u0374\vB\x03B\x03B\x03C\x07C\u0379\nC\fC\x0EC\u037C\vC\x03" +
    "C\x03C\x05C\u0380\nC\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0388\nD\x03D" +
    "\x03D\x05D\u038C\nD\x03D\x03D\x05D\u0390\nD\x03D\x03D\x05D\u0394\nD\x03" +
    "D\x03D\x05D\u0398\nD\x05D\u039A\nD\x03E\x03E\x05E\u039E\nE\x03F\x03F\x03" +
    "F\x03F\x05F\u03A4\nF\x03G\x03G\x03H\x03H\x03H\x03I\x05I\u03AC\nI\x03I" +
    "\x03I\x03I\x03I\x03J\x03J\x07J\u03B4\nJ\fJ\x0EJ\u03B7\vJ\x03J\x03J\x03" +
    "K\x03K\x07K\u03BD\nK\fK\x0EK\u03C0\vK\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
    "K\x05K\u03C9\nK\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03D1\nK\x03K\x03K" +
    "\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x05K\u03DF\nK\x03L" +
    "\x03L\x03M\x03M\x03M\x05M\u03E6\nM\x03M\x03M\x05M\u03EA\nM\x03M\x03M\x03" +
    "N\x03N\x05N\u03F0\nN\x03N\x03N\x03O\x03O\x03O\x07O\u03F7\nO\fO\x0EO\u03FA" +
    "\vO\x03P\x03P\x03P\x03Q\x03Q\x07Q\u0401\nQ\fQ\x0EQ\u0404\vQ\x03Q\x03Q" +
    "\x03R\x03R\x07R\u040A\nR\fR\x0ER\u040D\vR\x03R\x03R\x03S\x03S\x03S\x03" +
    "S\x03S\x05S\u0416\nS\x03T\x07T\u0419\nT\fT\x0ET\u041C\vT\x03T\x03T\x03" +
    "T\x03T\x03T\x03T\x03T\x03T\x05T\u0426\nT\x03U\x03U\x03V\x03V\x03W\x07" +
    "W\u042D\nW\fW\x0EW\u0430\vW\x03W\x03W\x03W\x05W\u0435\nW\x03W\x05W\u0438" +
    "\nW\x03X\x03X\x03X\x03X\x03X\x05X\u043F\nX\x03X\x03X\x03X\x03X\x03X\x03" +
    "X\x03X\x05X\u0448\nX\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
    "X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x06X\u045D\nX\rX\x0EX\u045E" +
    "\x03X\x05X\u0462\nX\x03X\x05X\u0465\nX\x03X\x03X\x03X\x03X\x07X\u046B" +
    "\nX\fX\x0EX\u046E\vX\x03X\x05X\u0471\nX\x03X\x03X\x03X\x03X\x07X\u0477" +
    "\nX\fX\x0EX\u047A\vX\x03X\x07X\u047D\nX\fX\x0EX\u0480\vX\x03X\x03X\x03" +
    "X\x03X\x03X\x03X\x03X\x03X\x05X\u048A\nX\x03X\x03X\x03X\x03X\x03X\x03" +
    "X\x03X\x05X\u0493\nX\x03X\x03X\x03X\x05X\u0498\nX\x03X\x03X\x03X\x03X" +
    "\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u04A5\nX\x03X\x03X\x03X\x03X" +
    "\x05X\u04AB\nX\x03Y\x03Y\x03Y\x07Y\u04B0\nY\fY\x0EY\u04B3\vY\x03Y\x03" +
    "Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x07Z\u04BD\nZ\fZ\x0EZ\u04C0\vZ\x03[\x03" +
    "[\x03[\x03\\\x03\\\x03\\\x05\\\u04C8\n\\\x03\\\x03\\\x03]\x03]\x03]\x07" +
    "]\u04CF\n]\f]\x0E]\u04D2\v]\x03^\x07^\u04D5\n^\f^\x0E^\u04D8\v^\x03^\x03" +
    "^\x03^\x03^\x03^\x05^\u04DF\n^\x03^\x03^\x03^\x03^\x05^\u04E5\n^\x03_" +
    "\x06_\u04E8\n_\r_\x0E_\u04E9\x03_\x06_\u04ED\n_\r_\x0E_\u04EE\x03`\x03" +
    "`\x03`\x03`\x03`\x03`\x05`\u04F7\n`\x03`\x03`\x03`\x05`\u04FC\n`\x03a" +
    "\x03a\x05a\u0500\na\x03a\x03a\x05a\u0504\na\x03a\x03a\x05a\u0508\na\x05" +
    "a\u050A\na\x03b\x03b\x05b\u050E\nb\x03c\x07c\u0511\nc\fc\x0Ec\u0514\v" +
    "c\x03c\x03c\x05c\u0518\nc\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03" +
    "e\x03e\x03e\x07e\u0525\ne\fe\x0Ee\u0528\ve\x03f\x03f\x03f\x05f\u052D\n" +
    "f\x03f\x03f\x03f\x03f\x03f\x05f\u0534\nf\x03f\x03f\x03f\x03f\x05f\u053A" +
    "\nf\x03f\x05f\u053D\nf\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x07g\u0546\n" +
    "g\fg\x0Eg\u0549\vg\x03g\x03g\x03g\x07g\u054E\ng\fg\x0Eg\u0551\vg\x03g" +
    "\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u055F\ng" +
    "\x03g\x03g\x05g\u0563\ng\x03g\x03g\x03g\x05g\u0568\ng\x03g\x03g\x05g\u056C" +
    "\ng\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x05g\u057C\ng\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05" +
    "g\u05A4\ng\x03g\x03g\x03g\x03g\x05g\u05AA\ng\x03g\x03g\x03g\x03g\x03g" +
    "\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u05B7\ng\x03g\x03g\x03g\x05g\u05BC" +
    "\ng\x03g\x07g\u05BF\ng\fg\x0Eg\u05C2\vg\x03h\x07h\u05C5\nh\fh\x0Eh\u05C8" +
    "\vh\x03h\x03h\x07h\u05CC\nh\fh\x0Eh\u05CF\vh\x03h\x03h\x03i\x03i\x03i" +
    "\x03i\x03j\x03j\x03j\x05j\u05DA\nj\x03j\x03j\x03j\x03j\x03j\x07j\u05E1" +
    "\nj\fj\x0Ej\u05E4\vj\x03j\x03j\x03j\x03j\x05j\u05EA\nj\x03j\x05j\u05ED" +
    "\nj\x03k\x03k\x05k\u05F1\nk\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03" +
    "l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u0603\nl\x05l\u0605\nl\x03m" +
    "\x03m\x03m\x03m\x07m\u060B\nm\fm\x0Em\u060E\vm\x03m\x03m\x03n\x03n\x03" +
    "n\x03n\x05n\u0616\nn\x03n\x03n\x03n\x03n\x03n\x05n\u061D\nn\x03o\x03o" +
    "\x03o\x03o\x03o\x03o\x07o\u0625\no\fo\x0Eo\u0628\vo\x03o\x03o\x07o\u062C" +
    "\no\fo\x0Eo\u062F\vo\x03o\x03o\x03o\x07o\u0634\no\fo\x0Eo\u0637\vo\x05" +
    "o\u0639\no\x03o\x03o\x03o\x07o\u063E\no\fo\x0Eo\u0641\vo\x03p\x03p\x07" +
    "p\u0645\np\fp\x0Ep\u0648\vp\x05p\u064A\np\x03q\x03q\x03q\x05q\u064F\n" +
    "q\x03q\x07q\u0652\nq\fq\x0Eq\u0655\vq\x03q\x03q\x05q\u0659\nq\x03r\x03" +
    "r\x03r\x03r\x03r\x03r\x03r\x05r\u0662\nr\x05r\u0664\nr\x03s\x03s\x05s" +
    "\u0668\ns\x03s\x03s\x03s\x05s\u066D\ns\x07s\u066F\ns\fs\x0Es\u0672\vs" +
    "\x03s\x05s\u0675\ns\x03t\x03t\x05t\u0679\nt\x03t\x03t\x03u\x03u\x03u\x03" +
    "u\x07u\u0681\nu\fu\x0Eu\u0684\vu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x07" +
    "u\u068D\nu\fu\x0Eu\u0690\vu\x03u\x03u\x07u\u0694\nu\fu\x0Eu\u0697\vu\x05" +
    "u\u0699\nu\x03v\x03v\x05v\u069D\nv\x03w\x03w\x03w\x03x\x03x\x03x\x05x" +
    "\u06A5\nx\x03y\x03y\x03y\x05y\u06AA\ny\x03z\x03z\x03z\x03z\x03{\x03{\x03" +
    "{\x07{\u06B3\n{\f{\x0E{\u06B6\v{\x03|\x07|\u06B9\n|\f|\x0E|\u06BC\v|\x03" +
    "|\x03|\x05|\u06C0\n|\x03|\x07|\u06C3\n|\f|\x0E|\u06C6\v|\x03|\x03|\x07" +
    "|\u06CA\n|\f|\x0E|\u06CD\v|\x03}\x03}\x03~\x03~\x03~\x03~\x07~\u06D5\n" +
    "~\f~\x0E~\u06D8\v~\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u06DF\n\x7F" +
    "\x03\x7F\x03\x7F\x05\x7F\u06E3\n\x7F\x05\x7F\u06E5\n\x7F\x03\x80\x03\x80" +
    "\x03\x80\x03\x80\x03\x80\x05\x80\u06EC\n\x80\x03\x81\x03\x81\x05\x81\u06F0" +
    "\n\x81\x03\x81\x03\x81\x03\x81\x02\x02\x04\xCC\xDC\x82\x02\x02\x04\x02" +
    "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
    "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
    "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
    "L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
    "h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82" +
    "\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94" +
    "\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6" +
    "\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8" +
    "\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA" +
    "\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC" +
    "\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE" +
    "\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100" +
    "\x02\x02\x12\x04\x02\x13\x13**\x03\x02EH\x03\x02IJ\x04\x02((>>\x04\x02" +
    "5C\x82\x82\x05\x025>AC\x82\x82\x03\x02fi\x03\x02\\]\x04\x02jkoo\x03\x02" +
    "hi\x04\x02Z[ab\x04\x02``cc\x04\x02YYpz\x03\x02fg\x04\x02__{{\n\x02\x05" +
    "\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x02\u07B8\x02\u0114" +
    "\x03\x02\x02\x02\x04\u0119\x03\x02\x02\x02\x06\u0120\x03\x02\x02\x02\b" +
    "\u0139\x03\x02\x02\x02\n\u0140\x03\x02\x02\x02\f\u014C\x03\x02\x02\x02" +
    "\x0E\u0150\x03\x02\x02\x02\x10\u0152\x03\x02\x02\x02\x12\u0155\x03\x02" +
    "\x02\x02\x14\u0158\x03\x02\x02\x02\x16\u015B\x03\x02\x02\x02\x18\u016C" +
    "\x03\x02\x02\x02\x1A\u017A\x03\x02\x02\x02\x1C\u0188\x03\x02\x02\x02\x1E" +
    "\u0190\x03\x02\x02\x02 \u01A1\x03\x02\x02\x02\"\u01AC\x03\x02\x02\x02" +
    "$\u01B6\x03\x02\x02\x02&\u01BD\x03\x02\x02\x02(\u01CA\x03\x02\x02\x02" +
    "*\u01D3\x03\x02\x02\x02,\u01E8\x03\x02\x02\x02.\u01F4\x03\x02\x02\x02" +
    "0\u01F6\x03\x02\x02\x022\u0208\x03\x02\x02\x024\u020C\x03\x02\x02\x02" +
    "6\u020E\x03\x02\x02\x028\u0211\x03\x02\x02\x02:\u0214\x03\x02\x02\x02" +
    "<\u021C\x03\x02\x02\x02>\u0228\x03\x02\x02\x02@\u0232\x03\x02\x02\x02" +
    "B\u0234\x03\x02\x02\x02D\u023F\x03\x02\x02\x02F\u024D\x03\x02\x02\x02" +
    "H\u0258\x03\x02\x02\x02J\u025D\x03\x02\x02\x02L\u0266\x03\x02\x02\x02" +
    "N\u0279\x03\x02\x02\x02P\u0281\x03\x02\x02\x02R\u0286\x03\x02\x02\x02" +
    "T\u0290\x03\x02\x02\x02V\u0292\x03\x02\x02\x02X\u02AA\x03\x02\x02\x02" +
    "Z\u02BD\x03\x02\x02\x02\\\u02BF\x03\x02\x02\x02^\u02C7\x03\x02\x02\x02" +
    "`\u02D7\x03\x02\x02\x02b\u02EF\x03\x02\x02\x02d\u02F4\x03\x02\x02\x02" +
    "f\u02FD\x03\x02\x02\x02h\u030A\x03\x02\x02\x02j\u0315\x03\x02\x02\x02" +
    "l\u031B\x03\x02\x02\x02n\u032A\x03\x02\x02\x02p\u032C\x03\x02\x02\x02" +
    "r\u032E\x03\x02\x02\x02t\u0335\x03\x02\x02\x02v\u033E\x03\x02\x02\x02" +
    "x\u0348\x03\x02\x02\x02z\u0350\x03\x02\x02\x02|\u0357\x03\x02\x02\x02" +
    "~\u0359\x03\x02\x02\x02\x80\u0369\x03\x02\x02\x02\x82\u036E\x03\x02\x02" +
    "\x02\x84\u037F\x03\x02\x02\x02\x86\u0399\x03\x02\x02\x02\x88\u039D\x03" +
    "\x02\x02\x02\x8A\u039F\x03\x02\x02\x02\x8C\u03A5\x03\x02\x02\x02\x8E\u03A7" +
    "\x03\x02\x02\x02\x90\u03AB\x03\x02\x02\x02\x92\u03B1\x03\x02\x02\x02\x94" +
    "\u03DE\x03\x02\x02\x02\x96\u03E0\x03\x02\x02\x02\x98\u03E2\x03\x02\x02" +
    "\x02\x9A\u03ED\x03\x02\x02\x02\x9C\u03F3\x03\x02\x02\x02\x9E\u03FB\x03" +
    "\x02\x02\x02\xA0\u03FE\x03\x02\x02\x02\xA2\u0407\x03\x02\x02\x02\xA4\u0415" +
    "\x03\x02\x02\x02\xA6\u041A\x03\x02\x02\x02\xA8\u0427\x03\x02\x02\x02\xAA" +
    "\u0429\x03\x02\x02\x02\xAC\u0437\x03\x02\x02\x02\xAE\u04AA\x03\x02\x02" +
    "\x02\xB0\u04AC\x03\x02\x02\x02\xB2\u04B9\x03\x02\x02\x02\xB4\u04C1\x03" +
    "\x02\x02\x02\xB6\u04C4\x03\x02\x02\x02\xB8\u04CB\x03\x02\x02\x02\xBA\u04E4" +
    "\x03\x02\x02\x02\xBC\u04E7\x03\x02\x02\x02\xBE\u04FB\x03\x02\x02\x02\xC0" +
    "\u0509\x03\x02\x02\x02\xC2\u050D\x03\x02\x02\x02\xC4\u0512\x03\x02\x02" +
    "\x02\xC6\u051D\x03\x02\x02\x02\xC8\u0521\x03\x02\x02\x02\xCA\u053C\x03" +
    "\x02\x02\x02\xCC\u056B\x03\x02\x02\x02\xCE\u05C6\x03\x02\x02\x02\xD0\u05D2" +
    "\x03\x02\x02\x02\xD2\u05EC\x03\x02\x02\x02\xD4\u05F0\x03\x02\x02\x02\xD6" +
    "\u0604\x03\x02\x02\x02\xD8\u0606\x03\x02\x02\x02\xDA\u061C\x03\x02\x02" +
    "\x02\xDC\u0638\x03\x02\x02\x02\xDE\u0649\x03\x02\x02\x02\xE0\u064E\x03" +
    "\x02\x02\x02\xE2\u0663\x03\x02\x02\x02\xE4\u0674\x03\x02\x02\x02\xE6\u0676" +
    "\x03\x02\x02\x02\xE8\u067C\x03\x02\x02\x02\xEA\u069A\x03\x02\x02\x02\xEC" +
    "\u069E\x03\x02\x02\x02\xEE\u06A4\x03\x02\x02\x02\xF0\u06A9\x03\x02\x02" +
    "\x02\xF2\u06AB\x03\x02\x02\x02\xF4\u06AF\x03\x02\x02\x02\xF6\u06BA\x03" +
    "\x02\x02\x02\xF8\u06CE\x03\x02\x02\x02\xFA\u06D0\x03\x02\x02\x02\xFC\u06E4" +
    "\x03\x02\x02\x02\xFE\u06EB\x03\x02\x02\x02\u0100\u06ED\x03\x02\x02";
JavaParser._serializedATNSegment1 = "\x02\u0102\u0104\x05\x04\x03\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104" +
    "\x03\x02\x02\x02\u0104\u0108\x03\x02\x02\x02\u0105\u0107\x05\x06\x04\x02" +
    "\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03" +
    "\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010E\x03\x02\x02\x02\u010A" +
    "\u0108\x03\x02\x02\x02\u010B\u010D\x05\b\x05\x02\u010C\u010B\x03\x02\x02" +
    "\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F" +
    "\x03\x02\x02\x02\u010F\u0115\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02" +
    "\u0111\u0112\x05\x90I\x02\u0112\u0113\x07\x02\x02\x03\u0113\u0115\x03" +
    "\x02\x02\x02\u0114\u0103\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0115" +
    "\x03\x03\x02\x02\x02\u0116\u0118\x05v<\x02\u0117\u0116\x03\x02\x02\x02" +
    "\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03" +
    "\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C" +
    "\u011D\x07\"\x02\x02\u011D\u011E\x05l7\x02\u011E\u011F\x07V\x02\x02\u011F" +
    "\x05\x03\x02\x02\x02\u0120\u0122\x07\x1B\x02\x02\u0121\u0123\x07(\x02" +
    "\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124" +
    "\x03\x02\x02\x02\u0124\u0127\x05l7\x02\u0125\u0126\x07X\x02\x02\u0126" +
    "\u0128\x07j\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02" +
    "\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x07V\x02\x02\u012A\x07\x03" +
    "\x02\x02\x02\u012B\u012D\x05\f\x07\x02\u012C\u012B\x03\x02\x02\x02\u012D" +
    "\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02" +
    "\x02\x02\u012F\u0136\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131" +
    "\u0137\x05\x16\f\x02\u0132\u0137\x05\x1E\x10\x02\u0133\u0137\x05&\x14" +
    "\x02\u0134\u0137\x05\x80A\x02\u0135\u0137\x05\x98M\x02\u0136\u0131\x03" +
    "\x02\x02\x02\u0136\u0132\x03\x02\x02\x02\u0136\u0133\x03\x02\x02\x02\u0136" +
    "\u0134\x03\x02\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137\u013A\x03\x02" +
    "\x02\x02\u0138\u013A\x07V\x02\x02\u0139\u012E\x03\x02\x02\x02\u0139\u0138" +
    "\x03\x02\x02\x02\u013A\t\x03\x02\x02\x02\u013B\u0141\x05\f\x07\x02\u013C" +
    "\u0141\x07 \x02\x02\u013D\u0141\x07,\x02\x02\u013E\u0141\x070\x02\x02" +
    "\u013F\u0141\x073\x02\x02\u0140\u013B\x03\x02\x02\x02\u0140\u013C\x03" +
    "\x02\x02\x02\u0140\u013D\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
    "\u013F\x03\x02\x02\x02\u0141\v\x03\x02\x02\x02\u0142\u014D\x05v<\x02\u0143" +
    "\u014D\x07%\x02\x02\u0144\u014D\x07$\x02\x02\u0145\u014D\x07#\x02\x02" +
    "\u0146\u014D\x07(\x02\x02\u0147\u014D\x07\x03\x02\x02\u0148\u014D\x07" +
    "\x14\x02\x02\u0149\u014D\x07)\x02\x02\u014A\u014D\x07B\x02\x02\u014B\u014D" +
    "\x07D\x02\x02\u014C\u0142\x03\x02\x02\x02\u014C\u0143\x03\x02\x02\x02" +
    "\u014C\u0144\x03\x02\x02\x02\u014C\u0145\x03\x02\x02\x02\u014C\u0146\x03" +
    "\x02\x02\x02\u014C\u0147\x03\x02\x02\x02\u014C\u0148\x03\x02\x02\x02\u014C" +
    "\u0149\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03\x02" +
    "\x02\x02\u014D\r\x03\x02\x02\x02\u014E\u0151\x07\x14\x02\x02\u014F\u0151" +
    "\x05v<\x02\u0150\u014E\x03\x02\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
    "\x0F\x03\x02\x02\x02\u0152\u0153\x07\x13\x02\x02\u0153\u0154\x05\xF4{" +
    "\x02\u0154\x11\x03\x02\x02\x02\u0155\u0156\x07\x1A\x02\x02\u0156\u0157" +
    "\x05\xF4{\x02\u0157\x13\x03\x02\x02\x02\u0158\u0159\x07C\x02\x02\u0159" +
    "\u015A\x05\xF4{\x02\u015A\x15\x03\x02\x02\x02\u015B\u015C\x07\v\x02\x02" +
    "\u015C\u015E\x05\xA8U\x02\u015D\u015F\x05\x18\r\x02\u015E\u015D\x03\x02" +
    "\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160" +
    "\u0161\x07\x13\x02\x02\u0161\u0163\x05\xF6|\x02\u0162\u0160\x03\x02\x02" +
    "\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0166" +
    "\x05\x12\n\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
    "\u0166\u0168\x03\x02\x02\x02\u0167\u0169\x05\x14\v\x02\u0168\u0167\x03" +
    "\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A" +
    "\u016B\x05(\x15\x02\u016B\x17\x03\x02\x02\x02\u016C\u016D\x07[\x02\x02" +
    "\u016D\u0172\x05\x1A\x0E\x02\u016E\u016F\x07W\x02\x02\u016F\u0171\x05" +
    "\x1A\x0E\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172" +
    "\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02" +
    "\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0176\x07Z\x02\x02\u0176\x19" +
    "\x03\x02\x02\x02\u0177\u0179\x05v<\x02\u0178\u0177\x03\x02\x02\x02\u0179" +
    "\u017C\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02" +
    "\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D" +
    "\u0186\x05\xA8U\x02\u017E\u0182\x07\x13\x02\x02\u017F\u0181\x05v<\x02" +
    "\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03" +
    "\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184" +
    "\u0182\x03\x02\x02\x02\u0185\u0187\x05\x1C\x0F\x02\u0186\u017E\x03\x02" +
    "\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\x1B\x03\x02\x02\x02\u0188\u018D" +
    "\x05\xF6|\x02\u0189\u018A\x07l\x02\x02\u018A\u018C\x05\xF6|\x02\u018B" +
    "\u0189\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02" +
    "\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\x1D\x03\x02\x02\x02\u018F\u018D" +
    "\x03\x02\x02\x02\u0190\u0191\x07\x12\x02\x02\u0191\u0193\x05\xA8U\x02" +
    "\u0192\u0194\x05\x12\n\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03" +
    "\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x07R\x02\x02\u0196" +
    "\u0198\x05 \x11\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02" +
    "\x02\u0198\u019A\x03\x02\x02\x02\u0199\u019B\x07W\x02\x02\u019A\u0199" +
    "\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x03\x02\x02\x02" +
    "\u019C\u019E\x05$\x13\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03" +
    "\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07S\x02\x02\u01A0" +
    "\x1F\x03\x02\x02\x02\u01A1\u01A6\x05\"\x12\x02\u01A2\u01A3\x07W\x02\x02" +
    "\u01A3\u01A5\x05\"\x12\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A8\x03" +
    "\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
    "!\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AB\x05v<\x02\u01AA" +
    "\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
    "\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE" +
    "\u01AC\x03\x02\x02\x02\u01AF\u01B1\x05\xA8U\x02\u01B0\u01B2\x05\u0100" +
    "\x81\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
    "\u01B4\x03\x02\x02\x02\u01B3\u01B5\x05(\x15\x02\u01B4\u01B3\x03\x02\x02" +
    "\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5#\x03\x02\x02\x02\u01B6\u01BA\x07" +
    "V\x02\x02\u01B7\u01B9\x05,\x17\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC" +
    "\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02" +
    "\u01BB%\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x07\x1E" +
    "\x02\x02\u01BE\u01C0\x05\xA8U\x02\u01BF\u01C1\x05\x18\r\x02\u01C0\u01BF" +
    "\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02" +
    "\u01C2\u01C4\x05\x10\t\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03" +
    "\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01C7\x05\x14\v\x02\u01C6" +
    "\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
    "\x02\x02\u01C8\u01C9\x05*\x16\x02\u01C9\'\x03\x02\x02\x02\u01CA\u01CE" +
    "\x07R\x02\x02\u01CB\u01CD\x05,\x17\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD" +
    "\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
    "\x02\x02\u01CF\u01D1\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1" +
    "\u01D2\x07S\x02\x02\u01D2)\x03\x02\x02\x02\u01D3\u01D7\x07R\x02\x02\u01D4" +
    "\u01D6\x05> \x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02" +
    "\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03" +
    "\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\x07S\x02\x02\u01DB" +
    "+\x03\x02\x02\x02\u01DC\u01E9\x07V\x02\x02\u01DD\u01DF\x07(\x02\x02\u01DE" +
    "\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02" +
    "\x02\x02\u01E0\u01E9\x05\xA2R\x02\u01E1\u01E3\x05\n\x06\x02\u01E2\u01E1" +
    "\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02" +
    "\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03" +
    "\x02\x02\x02\u01E7\u01E9\x05.\x18\x02\u01E8\u01DC\x03\x02\x02\x02\u01E8" +
    "\u01DE\x03\x02\x02\x02\u01E8\u01E4\x03\x02\x02\x02\u01E9-\x03\x02\x02" +
    "\x02\u01EA\u01F5\x05\x98M\x02\u01EB\u01F5\x050\x19\x02\u01EC\u01F5\x05" +
    "6\x1C\x02\u01ED\u01F5\x05<\x1F\x02\u01EE\u01F5\x05:\x1E\x02\u01EF\u01F5" +
    "\x058\x1D\x02\u01F0\u01F5\x05&\x14\x02\u01F1\u01F5\x05\x80A\x02\u01F2" +
    "\u01F5\x05\x16\f\x02\u01F3\u01F5\x05\x1E\x10\x02\u01F4\u01EA\x03\x02\x02" +
    "\x02\u01F4\u01EB\x03\x02\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01ED" +
    "\x03\x02\x02\x02\u01F4\u01EE\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02" +
    "\u01F4\u01F0\x03\x02\x02\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2\x03" +
    "\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5/\x03\x02\x02\x02\u01F6" +
    "\u01F7\x054\x1B\x02\u01F7\u01F8\x05\xA8U\x02\u01F8\u01FD\x05^0\x02\u01F9" +
    "\u01FA\x07T\x02\x02\u01FA\u01FC\x07U\x02\x02\u01FB\u01F9\x03\x02\x02\x02" +
    "\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03" +
    "\x02\x02\x02\u01FE\u0202\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200" +
    "\u0201\x07/\x02\x02\u0201\u0203\x05\\/\x02\u0202\u0200\x03\x02\x02\x02" +
    "\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x05" +
    "2\x1A\x02\u02051\x03\x02\x02\x02\u0206\u0209\x05\xA2R\x02\u0207\u0209" +
    "\x07V\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02" +
    "\u02093\x03\x02\x02\x02\u020A\u020D\x05\xF6|\x02\u020B\u020D\x072\x02" +
    "\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D5\x03" +
    "\x02\x02\x02\u020E\u020F\x05\x18\r\x02\u020F\u0210\x050\x19\x02\u0210" +
    "7\x03\x02\x02\x02\u0211\u0212\x05\x18\r\x02\u0212\u0213\x05:\x1E\x02\u0213" +
    "9\x03\x02\x02\x02\u0214\u0215\x05\xA8U\x02\u0215\u0218\x05^0\x02\u0216" +
    "\u0217\x07/\x02\x02\u0217\u0219\x05\\/\x02\u0218\u0216\x03\x02\x02\x02" +
    "\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x05" +
    "\xA2R\x02\u021B;\x03\x02\x02\x02\u021C\u021D\x05\xF6|\x02\u021D\u021E" +
    "\x05N(\x02\u021E\u021F\x07V\x02\x02\u021F=\x03\x02\x02\x02\u0220\u0222" +
    "\x05\n\x06\x02\u0221\u0220\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02" +
    "\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x03" +
    "\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0226\u0229\x05@!\x02\u0227\u0229" +
    "\x07V\x02\x02\u0228\u0223\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02" +
    "\u0229?\x03\x02\x02\x02\u022A\u0233\x05B\"\x02\u022B\u0233\x05F$\x02\u022C" +
    "\u0233\x05J&\x02\u022D\u0233\x05&\x14\x02\u022E\u0233\x05\x80A\x02\u022F" +
    "\u0233\x05\x16\f\x02\u0230\u0233\x05\x1E\x10\x02\u0231\u0233\x05\x98M" +
    "\x02\u0232\u022A\x03\x02\x02\x02\u0232\u022B\x03\x02\x02\x02\u0232\u022C" +
    "\x03\x02\x02\x02\u0232\u022D\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02" +
    "\u0232\u022F\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03" +
    "\x02\x02\x02\u0233A\x03\x02\x02\x02\u0234\u0235\x05\xF6|\x02\u0235\u023A" +
    "\x05D#\x02\u0236\u0237\x07W\x02\x02\u0237\u0239\x05D#\x02\u0238\u0236" +
    "\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02" +
    "\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023A\x03" +
    "\x02\x02\x02\u023D\u023E\x07V\x02\x02\u023EC\x03\x02\x02\x02\u023F\u0244" +
    "\x05\xA8U\x02\u0240\u0241\x07T\x02\x02\u0241\u0243\x07U\x02\x02\u0242" +
    "\u0240\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02" +
    "\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247\x03\x02\x02\x02\u0246" +
    "\u0244\x03\x02\x02\x02\u0247\u0248\x07Y\x02\x02\u0248\u0249\x05T+\x02" +
    "\u0249E\x03\x02\x02\x02\u024A\u024C\x05H%\x02\u024B\u024A\x03\x02\x02" +
    "\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E" +
    "\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02" +
    "\u0250\u0251\x05L\'\x02\u0251G\x03\x02\x02\x02\u0252\u0259\x05v<\x02\u0253" +
    "\u0259\x07%\x02\x02\u0254\u0259\x07\x03\x02\x02\u0255\u0259\x07\x0E\x02" +
    "\x02\u0256\u0259\x07(\x02\x02\u0257\u0259\x07)\x02\x02\u0258\u0252\x03" +
    "\x02\x02\x02\u0258\u0253\x03\x02\x02\x02\u0258\u0254\x03\x02\x02\x02\u0258" +
    "\u0255\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0257\x03\x02" +
    "\x02\x02\u0259I\x03\x02\x02\x02\u025A\u025C\x05H%\x02\u025B\u025A\x03" +
    "\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D" +
    "\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u025D\x03\x02" +
    "\x02\x02\u0260\u0261\x05\x18\r\x02\u0261\u0262\x05L\'\x02\u0262K\x03\x02" +
    "\x02\x02\u0263\u0265\x05v<\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0268" +
    "\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02" +
    "\u0267\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269\u026A\x05" +
    "4\x1B\x02\u026A\u026B\x05\xA8U\x02\u026B\u0270\x05^0\x02\u026C\u026D\x07" +
    "T\x02\x02\u026D\u026F\x07U\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0272" +
    "\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
    "\u0271\u0275\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x07" +
    "/\x02\x02\u0274\u0276\x05\\/\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276" +
    "\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x052\x1A\x02" +
    "\u0278M\x03\x02\x02\x02\u0279\u027E\x05P)\x02\u027A\u027B\x07W\x02\x02" +
    "\u027B\u027D\x05P)\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02" +
    "\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
    "O\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0284\x05R*\x02\u0282" +
    "\u0283\x07Y\x02\x02\u0283\u0285\x05T+\x02\u0284\u0282\x03\x02\x02\x02" +
    "\u0284\u0285\x03\x02\x02\x02\u0285Q\x03\x02\x02\x02\u0286\u028B\x05\xA8" +
    "U\x02\u0287\u0288\x07T\x02\x02\u0288\u028A\x07U\x02\x02\u0289\u0287\x03" +
    "\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B" +
    "\u028C\x03\x02\x02\x02\u028CS\x03\x02\x02\x02\u028D\u028B\x03\x02\x02" +
    "\x02\u028E\u0291\x05V,\x02\u028F\u0291\x05\xCCg\x02\u0290\u028E\x03\x02" +
    "\x02\x02\u0290\u028F\x03\x02\x02\x02\u0291U\x03\x02\x02\x02\u0292\u029E" +
    "\x07R\x02\x02\u0293\u0298\x05T+\x02\u0294\u0295\x07W\x02\x02\u0295\u0297" +
    "\x05T+\x02\u0296\u0294\x03\x02\x02\x02\u0297\u029A\x03\x02\x02\x02\u0298" +
    "\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029C\x03\x02" +
    "\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029D\x07W\x02\x02\u029C\u029B" +
    "\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029F\x03\x02\x02\x02" +
    "\u029E\u0293\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x03" +
    "\x02\x02\x02\u02A0\u02A1\x07S\x02\x02\u02A1W\x03\x02\x02\x02\u02A2\u02A4" +
    "\x05\xA8U\x02\u02A3\u02A5\x05\xFA~\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4" +
    "\u02A5\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A7\x07X\x02" +
    "\x02\u02A7\u02A9\x03\x02\x02\x02\u02A8\u02A2\x03\x02\x02\x02\u02A9\u02AC" +
    "\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02" +
    "\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AD\u02AF\x05" +
    "\xAAV\x02\u02AE\u02B0\x05\xFA~\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0" +
    "\x03\x02\x02\x02\u02B0Y\x03\x02\x02\x02\u02B1\u02BE\x05\xF6|\x02\u02B2" +
    "\u02B4\x05v<\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02\x02" +
    "\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B8\x03" +
    "\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02BB\x07^\x02\x02\u02B9" +
    "\u02BA\t\x02\x02\x02\u02BA\u02BC\x05\xF6|\x02\u02BB\u02B9\x03\x02\x02" +
    "\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02B1" +
    "\x03\x02\x02\x02\u02BD\u02B5\x03\x02\x02\x02\u02BE[\x03\x02\x02\x02\u02BF" +
    "\u02C4\x05l7\x02\u02C0\u02C1\x07W\x02\x02\u02C1\u02C3\x05l7\x02\u02C2" +
    "\u02C0\x03\x02\x02\x02\u02C3\u02C6\x03\x02\x02\x02\u02C4\u02C2\x03\x02" +
    "\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5]\x03\x02\x02\x02\u02C6\u02C4" +
    "\x03\x02\x02\x02\u02C7\u02D3\x07P\x02\x02\u02C8\u02CA\x05`1\x02\u02C9" +
    "\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02D4\x03\x02" +
    "\x02\x02\u02CB\u02CE\x05`1\x02\u02CC\u02CD\x07W\x02\x02\u02CD\u02CF\x05" +
    "b2\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D4" +
    "\x03\x02\x02\x02\u02D0\u02D2\x05b2\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1" +
    "\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02C9\x03\x02" +
    "\x02\x02\u02D3\u02CB\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D4" +
    "\u02D5\x03\x02\x02\x02\u02D5\u02D6\x07Q\x02\x02\u02D6_\x03\x02\x02\x02" +
    "\u02D7\u02DD\x05\xF6|\x02\u02D8\u02D9\x05\xA8U\x02\u02D9\u02DA\x07X\x02" +
    "\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB\u02D8\x03\x02\x02\x02\u02DC\u02DF" +
    "\x03\x02\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02" +
    "\u02DE\u02E0\x03\x02\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E1\x07" +
    "-\x02\x02\u02E1a\x03\x02\x02\x02\u02E2\u02E7\x05d3\x02\u02E3\u02E4\x07" +
    "W\x02\x02\u02E4\u02E6\x05d3\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E9" +
    "\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02" +
    "\u02E8\u02EC\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02EB\x07" +
    "W\x02\x02\u02EB\u02ED\x05f4\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED" +
    "\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02F0\x05f4\x02\u02EF" +
    "\u02E2\x03\x02\x02\x02\u02EF\u02EE\x03\x02\x02\x02\u02F0c\x03\x02\x02" +
    "\x02\u02F1\u02F3\x05\x0E\b\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3\u02F6" +
    "\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02" +
    "\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7\u02F8\x05" +
    "\xF6|\x02\u02F8\u02F9\x05R*\x02\u02F9e\x03\x02\x02\x02\u02FA\u02FC\x05" +
    "\x0E\b\x02\u02FB\u02FA\x03\x02\x02\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD" +
    "\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0300\x03\x02" +
    "\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0304\x05\xF6|\x02\u0301\u0303" +
    "\x05v<\x02\u0302\u0301\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304" +
    "\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03\x02" +
    "\x02\x02\u0306\u0304\x03\x02\x02\x02\u0307\u0308\x07~\x02\x02\u0308\u0309" +
    "\x05R*\x02\u0309g\x03\x02\x02\x02\u030A\u030F\x05j6\x02\u030B\u030C\x07" +
    "W\x02\x02\u030C\u030E\x05j6\x02\u030D\u030B\x03\x02\x02\x02\u030E\u0311" +
    "\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02" +
    "\u0310i\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0314\x05\x0E" +
    "\b\x02\u0313\u0312\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02\u0315\u0313" +
    "\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02" +
    "\u0317\u0315\x03\x02\x02\x02\u0318\u0319\x07?\x02\x02\u0319\u031A\x05" +
    "\xA8U\x02\u031Ak\x03\x02\x02\x02\u031B\u0320\x05\xA8U\x02\u031C\u031D" +
    "\x07X\x02\x02\u031D\u031F\x05\xA8U\x02\u031E\u031C\x03\x02\x02\x02\u031F" +
    "\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02" +
    "\x02\x02\u0321m\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u032B" +
    "\x05p9\x02\u0324\u032B\x05r:\x02\u0325\u032B\x07L\x02\x02\u0326\u032B" +
    "\x07M\x02\x02\u0327\u032B\x07K\x02\x02\u0328\u032B\x07O\x02\x02\u0329" +
    "\u032B\x07N\x02\x02\u032A\u0323\x03\x02\x02\x02\u032A\u0324\x03\x02\x02" +
    "\x02\u032A\u0325\x03\x02\x02\x02\u032A\u0326\x03\x02\x02\x02\u032A\u0327" +
    "\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02\u032A\u0329\x03\x02\x02\x02" +
    "\u032Bo\x03\x02\x02\x02\u032C\u032D\t\x03\x02\x02\u032Dq\x03\x02\x02\x02" +
    "\u032E\u032F\t\x04\x02\x02\u032Fs\x03\x02\x02\x02\u0330\u0331\x05\xA8" +
    "U\x02\u0331\u0332\x07X\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0330" +
    "\x03\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02" +
    "\u0335\u0336\x03\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u0335\x03" +
    "\x02\x02\x02\u0338\u0339\x07}\x02\x02\u0339\u033A\x05\xA8U\x02\u033Au" +
    "\x03\x02\x02\x02\u033B\u033C\x07}\x02\x02\u033C\u033F\x05l7\x02\u033D" +
    "\u033F\x05t;\x02\u033E\u033B\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02" +
    "\u033F\u0346\x03\x02\x02\x02\u0340\u0343\x07P\x02\x02\u0341\u0344\x05" +
    "x=\x02\u0342\u0344\x05|?\x02\u0343\u0341\x03\x02\x02\x02\u0343\u0342\x03" +
    "\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
    "\u0347\x07Q\x02\x02\u0346\u0340\x03\x02\x02\x02\u0346\u0347\x03\x02\x02" +
    "\x02\u0347w\x03\x02\x02\x02\u0348\u034D\x05z>\x02\u0349\u034A\x07W\x02" +
    "\x02\u034A\u034C\x05z>\x02\u034B\u0349\x03\x02\x02\x02\u034C\u034F\x03" +
    "\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
    "y\x03\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u0350\u0351\x05\xA8U\x02" +
    "\u0351\u0352\x07Y\x02\x02\u0352\u0353\x05|?\x02\u0353{\x03\x02\x02\x02" +
    "\u0354\u0358\x05\xCCg\x02\u0355\u0358\x05v<\x02\u0356\u0358\x05~@\x02" +
    "\u0357\u0354\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0356\x03" +
    "\x02\x02\x02\u0358}\x03\x02\x02\x02\u0359\u0362\x07R\x02\x02\u035A\u035F" +
    "\x05|?\x02\u035B\u035C\x07W\x02\x02\u035C\u035E\x05|?\x02\u035D\u035B" +
    "\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03\x02\x02\x02" +
    "\u035F\u0360\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03" +
    "\x02\x02\x02\u0362\u035A\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363" +
    "\u0365\x03\x02\x02\x02\u0364\u0366\x07W\x02\x02\u0365\u0364\x03\x02\x02" +
    "\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u0368" +
    "\x07S\x02\x02\u0368\x7F\x03\x02\x02\x02\u0369\u036A\x07}\x02\x02\u036A" +
    "\u036B\x07\x1E\x02\x02\u036B\u036C\x05\xA8U\x02\u036C\u036D\x05\x82B\x02" +
    "\u036D\x81\x03\x02\x02\x02\u036E\u0372\x07R\x02\x02\u036F\u0371\x05\x84" +
    "C\x02\u0370\u036F\x03\x02\x02\x02\u0371\u0374\x03\x02\x02\x02\u0372\u0370" +
    "\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02\x02\x02" +
    "\u0374\u0372\x03\x02\x02\x02\u0375\u0376\x07S\x02\x02\u0376\x83\x03\x02" +
    "\x02\x02\u0377\u0379\x05\n\x06\x02\u0378\u0377\x03\x02\x02\x02\u0379\u037C" +
    "\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02" +
    "\u037B\u037D\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037D\u0380\x05" +
    "\x86D\x02\u037E\u0380\x07V\x02\x02\u037F\u037A\x03\x02\x02\x02\u037F\u037E" +
    "\x03\x02\x02\x02\u0380\x85\x03\x02\x02\x02\u0381\u0382\x05\xF6|\x02\u0382" +
    "\u0383\x05\x88E\x02\u0383\u0384\x07V\x02\x02\u0384\u039A\x03\x02\x02\x02" +
    "\u0385\u0387\x05\x16\f\x02\u0386\u0388\x07V\x02\x02\u0387\u0386\x03\x02" +
    "\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u039A\x03\x02\x02\x02\u0389" +
    "\u038B\x05&\x14\x02\u038A\u038C\x07V\x02\x02\u038B\u038A\x03\x02\x02\x02" +
    "\u038B\u038C\x03\x02\x02\x02\u038C\u039A\x03\x02\x02\x02\u038D\u038F\x05" +
    "\x1E\x10\x02\u038E\u0390\x07V\x02\x02\u038F\u038E\x03\x02\x02\x02\u038F" +
    "\u0390\x03\x02\x02\x02\u0390\u039A\x03\x02\x02\x02\u0391\u0393\x05\x80" +
    "A\x02\u0392\u0394\x07V\x02\x02\u0393\u0392\x03\x02\x02\x02\u0393\u0394" +
    "\x03\x02\x02\x02\u0394\u039A\x03\x02\x02\x02\u0395\u0397\x05\x98M\x02" +
    "\u0396\u0398\x07V\x02\x02\u0397\u0396\x03\x02\x02\x02\u0397\u0398\x03" +
    "\x02\x02\x02\u0398\u039A\x03\x02\x02\x02\u0399\u0381\x03\x02\x02\x02\u0399" +
    "\u0385\x03\x02\x02\x02\u0399\u0389\x03\x02\x02\x02\u0399\u038D\x03\x02" +
    "\x02\x02\u0399\u0391\x03\x02\x02\x02\u0399\u0395\x03\x02\x02\x02\u039A" +
    "\x87\x03\x02\x02\x02\u039B\u039E\x05\x8AF\x02\u039C\u039E\x05\x8CG\x02" +
    "\u039D\u039B\x03\x02\x02\x02\u039D\u039C\x03\x02\x02\x02\u039E\x89\x03" +
    "\x02\x02\x02\u039F\u03A0\x05\xA8U\x02\u03A0\u03A1\x07P\x02\x02\u03A1\u03A3" +
    "\x07Q\x02\x02\u03A2\u03A4\x05\x8EH\x02\u03A3\u03A2\x03\x02\x02\x02\u03A3" +
    "\u03A4\x03\x02\x02\x02\u03A4\x8B\x03\x02\x02\x02\u03A5\u03A6\x05N(\x02" +
    "\u03A6\x8D\x03\x02\x02\x02\u03A7\u03A8\x07\x0E\x02\x02\u03A8\u03A9\x05" +
    "|?\x02\u03A9\x8F\x03\x02\x02\x02\u03AA\u03AC\x076\x02\x02\u03AB\u03AA" +
    "\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC";
JavaParser._serializedATNSegment2 = "\u03AD\x03\x02\x02\x02\u03AD\u03AE\x075\x02\x02\u03AE\u03AF\x05l7\x02" +
    "\u03AF\u03B0\x05\x92J\x02\u03B0\x91\x03\x02\x02\x02\u03B1\u03B5\x07R\x02" +
    "\x02\u03B2\u03B4\x05\x94K\x02\u03B3\u03B2\x03\x02\x02\x02\u03B4\u03B7" +
    "\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02" +
    "\u03B6\u03B8\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03B9\x07" +
    "S\x02\x02\u03B9\x93\x03\x02\x02\x02\u03BA\u03BE\x077\x02\x02\u03BB\u03BD" +
    "\x05\x96L\x02\u03BC\u03BB\x03\x02\x02\x02\u03BD\u03C0\x03\x02\x02\x02" +
    "\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C1\x03" +
    "\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1\u03C2\x05l7\x02\u03C2\u03C3" +
    "\x07V\x02\x02\u03C3\u03DF\x03\x02\x02\x02\u03C4\u03C5\x078\x02\x02\u03C5" +
    "\u03C8\x05l7\x02\u03C6\u03C7\x07:\x02\x02\u03C7\u03C9\x05l7\x02\u03C8" +
    "\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02" +
    "\x02\x02\u03CA\u03CB\x07V\x02\x02\u03CB\u03DF\x03\x02\x02\x02\u03CC\u03CD" +
    "\x079\x02\x02\u03CD\u03D0\x05l7\x02\u03CE\u03CF\x07:\x02\x02\u03CF\u03D1" +
    "\x05l7\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1" +
    "\u03D2\x03\x02\x02\x02\u03D2\u03D3\x07V\x02\x02\u03D3\u03DF\x03\x02\x02" +
    "\x02\u03D4\u03D5\x07;\x02\x02\u03D5\u03D6\x05l7\x02\u03D6\u03D7\x07V\x02" +
    "\x02\u03D7\u03DF\x03\x02\x02\x02\u03D8\u03D9\x07<\x02\x02\u03D9\u03DA" +
    "\x05l7\x02\u03DA\u03DB\x07=\x02\x02\u03DB\u03DC\x05l7\x02\u03DC\u03DD" +
    "\x07V\x02\x02\u03DD\u03DF\x03\x02\x02\x02\u03DE\u03BA\x03\x02\x02\x02" +
    "\u03DE\u03C4\x03\x02\x02\x02\u03DE\u03CC\x03\x02\x02\x02\u03DE\u03D4\x03" +
    "\x02\x02\x02\u03DE\u03D8\x03\x02\x02\x02\u03DF\x95\x03\x02\x02\x02\u03E0" +
    "\u03E1\t\x05\x02\x02\u03E1\x97\x03\x02\x02\x02\u03E2\u03E3\x07A\x02\x02" +
    "\u03E3\u03E5\x05\xA8U\x02\u03E4\u03E6\x05\x18\r\x02\u03E5\u03E4\x03\x02" +
    "\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7" +
    "\u03E9\x05\x9AN\x02\u03E8\u03EA\x05\x12\n\x02\u03E9\u03E8\x03\x02\x02" +
    "\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03EC" +
    "\x05\xA0Q\x02\u03EC\x99\x03\x02\x02\x02\u03ED\u03EF\x07P\x02\x02\u03EE" +
    "\u03F0\x05\x9CO\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02" +
    "\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x07Q\x02\x02\u03F2\x9B\x03" +
    "\x02\x02\x02\u03F3\u03F8\x05\x9EP\x02\u03F4\u03F5\x07W\x02\x02\u03F5\u03F7" +
    "\x05\x9EP\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7\u03FA\x03\x02\x02\x02" +
    "\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\x9D\x03" +
    "\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB\u03FC\x05\xF6|\x02\u03FC" +
    "\u03FD\x05\xA8U\x02\u03FD\x9F\x03\x02\x02\x02\u03FE\u0402\x07R\x02\x02" +
    "\u03FF\u0401\x05,\x17\x02\u0400\u03FF\x03\x02\x02\x02\u0401\u0404\x03" +
    "\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403" +
    "\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0405\u0406\x07S\x02" +
    "\x02\u0406\xA1\x03\x02\x02\x02\u0407\u040B\x07R\x02\x02\u0408\u040A\x05" +
    "\xA4S\x02\u0409\u0408\x03\x02\x02\x02\u040A\u040D\x03\x02\x02\x02\u040B" +
    "\u0409\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040E\x03\x02" +
    "\x02\x02\u040D\u040B\x03\x02\x02\x02\u040E\u040F\x07S\x02\x02\u040F\xA3" +
    "\x03\x02\x02\x02\u0410\u0411\x05\xA6T\x02\u0411\u0412\x07V\x02\x02\u0412" +
    "\u0416\x03\x02\x02\x02\u0413\u0416\x05\xACW\x02\u0414\u0416\x05\xAEX\x02" +
    "\u0415\u0410\x03\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0415\u0414\x03" +
    "\x02\x02\x02\u0416\xA5\x03\x02\x02\x02\u0417\u0419\x05\x0E\b\x02\u0418" +
    "\u0417\x03\x02\x02\x02\u0419\u041C\x03\x02\x02\x02\u041A\u0418\x03\x02" +
    "\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u0425\x03\x02\x02\x02\u041C" +
    "\u041A\x03\x02\x02\x02\u041D\u041E\x07?\x02\x02\u041E\u041F\x05\xA8U\x02" +
    "\u041F\u0420\x07Y\x02\x02\u0420\u0421\x05\xCCg\x02\u0421\u0426\x03\x02" +
    "\x02\x02\u0422\u0423\x05\xF6|\x02\u0423\u0424\x05N(\x02\u0424\u0426\x03" +
    "\x02\x02\x02\u0425\u041D\x03\x02\x02\x02\u0425\u0422\x03\x02\x02\x02\u0426" +
    "\xA7\x03\x02\x02\x02\u0427\u0428\t\x06\x02\x02\u0428\xA9\x03\x02\x02\x02" +
    "\u0429\u042A\t\x07\x02\x02\u042A\xAB\x03\x02\x02\x02\u042B\u042D\x05\f" +
    "\x07\x02\u042C\u042B\x03\x02\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E" +
    "\u042C\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0434\x03\x02" +
    "\x02\x02\u0430\u042E\x03\x02\x02\x02\u0431\u0435\x05\x16\f\x02\u0432\u0435" +
    "\x05&\x14\x02\u0433\u0435\x05\x98M\x02\u0434\u0431\x03\x02\x02\x02\u0434" +
    "\u0432\x03\x02\x02\x02\u0434\u0433\x03\x02\x02\x02\u0435\u0438\x03\x02" +
    "\x02\x02\u0436\u0438\x07V\x02\x02\u0437\u042E\x03\x02\x02\x02\u0437\u0436" +
    "\x03\x02\x02\x02\u0438\xAD\x03\x02\x02\x02\u0439\u04AB\x05\xA2R\x02\u043A" +
    "\u043B\x07\x04\x02\x02\u043B\u043E\x05\xCCg\x02\u043C\u043D\x07_\x02\x02" +
    "\u043D\u043F\x05\xCCg\x02\u043E\u043C\x03\x02\x02\x02\u043E\u043F\x03" +
    "\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x07V\x02\x02\u0441" +
    "\u04AB\x03\x02\x02\x02\u0442\u0443\x07\x18\x02\x02\u0443\u0444\x05\xC6" +
    "d\x02\u0444\u0447\x05\xAEX\x02\u0445\u0446\x07\x11\x02\x02\u0446\u0448" +
    "\x05\xAEX\x02\u0447\u0445\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02" +
    "\u0448\u04AB\x03\x02\x02\x02\u0449\u044A\x07\x17\x02\x02\u044A\u044B\x07" +
    "P\x02\x02\u044B\u044C\x05\xC0a\x02\u044C\u044D\x07Q\x02\x02\u044D\u044E" +
    "\x05\xAEX\x02\u044E\u04AB\x03\x02\x02\x02\u044F\u0450\x074\x02\x02\u0450" +
    "\u0451\x05\xC6d\x02\u0451\u0452\x05\xAEX\x02\u0452\u04AB\x03\x02\x02\x02" +
    "\u0453\u0454\x07\x0F\x02\x02\u0454\u0455\x05\xAEX\x02\u0455\u0456\x07" +
    "4\x02\x02\u0456\u0457\x05\xC6d\x02\u0457\u0458\x07V\x02\x02\u0458\u04AB" +
    "\x03\x02\x02\x02\u0459\u045A\x071\x02\x02\u045A\u0464\x05\xA2R\x02\u045B" +
    "\u045D\x05\xB0Y\x02\u045C\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02" +
    "\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0461" +
    "\x03\x02\x02\x02\u0460\u0462\x05\xB4[\x02\u0461\u0460\x03\x02\x02\x02" +
    "\u0461\u0462\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0465\x05" +
    "\xB4[\x02\u0464\u045C\x03\x02\x02\x02\u0464\u0463\x03\x02\x02\x02\u0465" +
    "\u04AB\x03\x02\x02\x02\u0466\u0467\x071\x02\x02\u0467\u0468\x05\xB6\\" +
    "\x02\u0468\u046C\x05\xA2R\x02\u0469\u046B\x05\xB0Y\x02\u046A\u0469\x03" +
    "\x02\x02\x02\u046B\u046E\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C" +
    "\u046D\x03\x02\x02\x02\u046D\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02" +
    "\x02\x02\u046F\u0471\x05\xB4[\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471" +
    "\x03\x02\x02\x02\u0471\u04AB\x03\x02\x02\x02\u0472\u0473\x07+\x02\x02" +
    "\u0473\u0474\x05\xC6d\x02\u0474\u0478\x07R\x02\x02\u0475\u0477\x05\xBC" +
    "_\x02\u0476\u0475\x03\x02\x02\x02\u0477\u047A\x03\x02\x02\x02\u0478\u0476" +
    "\x03\x02\x02\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047E\x03\x02\x02\x02" +
    "\u047A\u0478\x03\x02\x02\x02\u047B\u047D\x05\xBE`\x02\u047C\u047B\x03" +
    "\x02\x02\x02\u047D\u0480\x03\x02\x02\x02\u047E\u047C\x03\x02\x02\x02\u047E" +
    "\u047F\x03\x02\x02\x02\u047F\u0481\x03\x02\x02\x02\u0480\u047E\x03\x02" +
    "\x02\x02\u0481\u0482\x07S\x02\x02\u0482\u04AB\x03\x02\x02\x02\u0483\u0484" +
    "\x07,\x02\x02\u0484\u0485\x05\xC6d\x02\u0485\u0486\x05\xA2R\x02\u0486" +
    "\u04AB\x03\x02\x02\x02\u0487\u0489\x07&\x02\x02\u0488\u048A\x05\xCCg\x02" +
    "\u0489\u0488\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048B\x03" +
    "\x02\x02\x02\u048B\u04AB\x07V\x02\x02\u048C\u048D\x07.\x02\x02\u048D\u048E" +
    "\x05\xCCg\x02\u048E\u048F\x07V\x02\x02\u048F\u04AB\x03\x02\x02\x02\u0490" +
    "\u0492\x07\x06\x02\x02\u0491\u0493\x05\xA8U\x02\u0492\u0491\x03\x02\x02" +
    "\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u04AB" +
    "\x07V\x02\x02\u0495\u0497\x07\r\x02\x02\u0496\u0498\x05\xA8U\x02\u0497" +
    "\u0496\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u0499\x03\x02" +
    "\x02\x02\u0499\u04AB\x07V\x02\x02\u049A\u049B\x07@\x02\x02\u049B\u049C" +
    "\x05\xCCg\x02\u049C\u049D\x07V\x02\x02\u049D\u04AB\x03\x02\x02\x02\u049E" +
    "\u04AB\x07V\x02\x02\u049F\u04A0\x05\xCCg\x02\u04A0\u04A1\x07V\x02\x02" +
    "\u04A1\u04AB\x03\x02\x02\x02\u04A2\u04A4\x05\xD8m\x02\u04A3\u04A5\x07" +
    "V\x02\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5" +
    "\u04AB\x03\x02\x02\x02\u04A6\u04A7\x05\xA8U\x02\u04A7\u04A8\x07_\x02\x02" +
    "\u04A8\u04A9\x05\xAEX\x02\u04A9\u04AB\x03\x02\x02\x02\u04AA\u0439\x03" +
    "\x02\x02\x02\u04AA\u043A\x03\x02\x02\x02\u04AA\u0442\x03\x02\x02\x02\u04AA" +
    "\u0449\x03\x02\x02\x02\u04AA\u044F\x03\x02\x02\x02\u04AA\u0453\x03\x02" +
    "\x02\x02\u04AA\u0459\x03\x02\x02\x02\u04AA\u0466\x03\x02\x02\x02\u04AA" +
    "\u0472\x03\x02\x02\x02\u04AA\u0483\x03\x02\x02\x02\u04AA\u0487\x03\x02" +
    "\x02\x02\u04AA\u048C\x03\x02\x02\x02\u04AA\u0490\x03\x02\x02\x02\u04AA" +
    "\u0495\x03\x02\x02\x02\u04AA\u049A\x03\x02\x02\x02\u04AA\u049E\x03\x02" +
    "\x02\x02\u04AA\u049F\x03\x02\x02\x02\u04AA\u04A2\x03\x02\x02\x02\u04AA" +
    "\u04A6\x03\x02\x02\x02\u04AB\xAF\x03\x02\x02\x02\u04AC\u04AD\x07\t\x02" +
    "\x02\u04AD\u04B1\x07P\x02\x02\u04AE\u04B0\x05\x0E\b\x02\u04AF\u04AE\x03" +
    "\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02\u04B1" +
    "\u04B2\x03\x02\x02\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3\u04B1\x03\x02" +
    "\x02\x02\u04B4\u04B5\x05\xB2Z\x02\u04B5\u04B6\x05\xA8U\x02\u04B6\u04B7" +
    "\x07Q\x02\x02\u04B7\u04B8\x05\xA2R\x02\u04B8\xB1\x03\x02\x02\x02\u04B9" +
    "\u04BE\x05l7\x02\u04BA\u04BB\x07m\x02\x02\u04BB\u04BD\x05l7\x02\u04BC" +
    "\u04BA\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02" +
    "\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\xB3\x03\x02\x02\x02\u04C0\u04BE" +
    "\x03\x02\x02\x02\u04C1\u04C2\x07\x15\x02\x02\u04C2\u04C3\x05\xA2R\x02" +
    "\u04C3\xB5\x03\x02\x02\x02\u04C4\u04C5\x07P\x02\x02\u04C5\u04C7\x05\xB8" +
    "]\x02\u04C6\u04C8\x07V\x02\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8" +
    "\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x07Q\x02\x02" +
    "\u04CA\xB7\x03\x02\x02\x02\u04CB\u04D0\x05\xBA^\x02\u04CC\u04CD\x07V\x02" +
    "\x02\u04CD\u04CF\x05\xBA^\x02\u04CE\u04CC\x03\x02\x02\x02\u04CF\u04D2" +
    "\x03\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02" +
    "\u04D1\xB9\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D5\x05" +
    "\x0E\b\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D8\x03\x02\x02\x02\u04D6" +
    "\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04DE\x03\x02" +
    "\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D9\u04DA\x05X-\x02\u04DA\u04DB" +
    "\x05R*\x02\u04DB\u04DF\x03\x02\x02\x02\u04DC\u04DD\x07?\x02\x02\u04DD" +
    "\u04DF\x05\xA8U\x02\u04DE\u04D9\x03\x02\x02\x02\u04DE\u04DC\x03\x02\x02" +
    "\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x07Y\x02\x02\u04E1\u04E2" +
    "\x05\xCCg\x02\u04E2\u04E5\x03\x02\x02\x02\u04E3\u04E5\x05\xA8U\x02\u04E4" +
    "\u04D6\x03\x02\x02\x02\u04E4\u04E3\x03\x02\x02\x02\u04E5\xBB\x03\x02\x02" +
    "\x02\u04E6\u04E8\x05\xBE`\x02\u04E7\u04E6\x03\x02\x02\x02\u04E8\u04E9" +
    "\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02" +
    "\u04EA\u04EC\x03\x02\x02\x02\u04EB\u04ED\x05\xA4S\x02\u04EC\u04EB\x03" +
    "\x02\x02\x02\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE" +
    "\u04EF\x03\x02\x02\x02\u04EF\xBD\x03\x02\x02\x02\u04F0\u04F6\x07\b\x02" +
    "\x02\u04F1\u04F7\x05\xCCg\x02\u04F2\u04F7\x07\x82\x02\x02\u04F3\u04F4" +
    "\x05\xF6|\x02\u04F4\u04F5\x05\xA8U\x02\u04F5\u04F7\x03\x02\x02\x02\u04F6" +
    "\u04F1\x03\x02\x02\x02\u04F6\u04F2\x03\x02\x02\x02\u04F6\u04F3\x03\x02" +
    "\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04FC\x07_\x02\x02\u04F9\u04FA" +
    "\x07\x0E\x02\x02\u04FA\u04FC\x07_\x02\x02\u04FB\u04F0\x03\x02\x02\x02" +
    "\u04FB\u04F9\x03\x02\x02\x02\u04FC\xBF\x03\x02\x02\x02\u04FD\u050A\x05" +
    "\xC4c\x02\u04FE\u0500\x05\xC2b\x02\u04FF\u04FE\x03\x02\x02\x02\u04FF\u0500" +
    "\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0503\x07V\x02\x02" +
    "\u0502\u0504\x05\xCCg\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504\x03" +
    "\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0507\x07V\x02\x02\u0506" +
    "\u0508\x05\xC8e\x02\u0507\u0506\x03\x02\x02\x02\u0507\u0508\x03\x02\x02" +
    "\x02\u0508\u050A\x03\x02\x02\x02\u0509\u04FD\x03\x02\x02\x02\u0509\u04FF" +
    "\x03\x02\x02\x02\u050A\xC1\x03\x02\x02\x02\u050B\u050E\x05\xA6T\x02\u050C" +
    "\u050E\x05\xC8e\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050C\x03\x02\x02" +
    "\x02\u050E\xC3\x03\x02\x02\x02\u050F\u0511\x05\x0E\b\x02\u0510\u050F\x03" +
    "\x02\x02\x02\u0511\u0514\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512" +
    "\u0513\x03\x02\x02\x02\u0513\u0517\x03\x02\x02\x02\u0514\u0512\x03\x02" +
    "\x02\x02\u0515\u0518\x05\xF6|\x02\u0516\u0518\x07?\x02\x02\u0517\u0515" +
    "\x03\x02\x02\x02\u0517\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02" +
    "\u0519\u051A\x05R*\x02\u051A\u051B\x07_\x02\x02\u051B\u051C\x05\xCCg\x02" +
    "\u051C\xC5\x03\x02\x02\x02\u051D\u051E\x07P\x02\x02\u051E\u051F\x05\xCC" +
    "g\x02\u051F\u0520\x07Q\x02\x02\u0520\xC7\x03\x02\x02\x02\u0521\u0526\x05" +
    "\xCCg\x02\u0522\u0523\x07W\x02\x02\u0523\u0525\x05\xCCg\x02\u0524\u0522" +
    "\x03\x02\x02\x02\u0525\u0528\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02" +
    "\u0526\u0527\x03\x02\x02\x02\u0527\xC9\x03\x02\x02\x02\u0528\u0526\x03" +
    "\x02\x02\x02\u0529\u052A\x05\xA8U\x02\u052A\u052C\x07P\x02\x02\u052B\u052D" +
    "\x05\xC8e\x02\u052C\u052B\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02" +
    "\u052D\u052E\x03\x02\x02\x02\u052E\u052F\x07Q\x02\x02\u052F\u053D\x03" +
    "\x02\x02\x02\u0530\u0531\x07-\x02\x02\u0531\u0533\x07P\x02\x02\u0532\u0534" +
    "\x05\xC8e\x02\u0533\u0532\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02" +
    "\u0534\u0535\x03\x02\x02\x02\u0535\u053D\x07Q\x02\x02\u0536\u0537\x07" +
    "*\x02\x02\u0537\u0539\x07P\x02\x02\u0538\u053A\x05\xC8e\x02\u0539\u0538" +
    "\x03\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02" +
    "\u053B\u053D\x07Q\x02\x02\u053C\u0529\x03\x02\x02\x02\u053C\u0530\x03" +
    "\x02\x02\x02\u053C\u0536\x03\x02\x02\x02\u053D\xCB\x03\x02\x02\x02\u053E" +
    "\u053F\bg\x01\x02\u053F\u056C\x05\xD6l\x02\u0540\u056C\x05\xCAf\x02\u0541" +
    "\u0542\x07!\x02\x02\u0542\u056C\x05\xE2r\x02\u0543\u0547\x07P\x02\x02" +
    "\u0544\u0546\x05v<\x02\u0545\u0544\x03\x02\x02\x02\u0546\u0549\x03\x02" +
    "\x02\x02\u0547\u0545\x03\x02\x02\x02\u0547\u0548\x03\x02\x02\x02\u0548" +
    "\u054A\x03\x02\x02\x02\u0549\u0547\x03\x02\x02\x02\u054A\u054F\x05\xF6" +
    "|\x02\u054B\u054C\x07l\x02\x02\u054C\u054E\x05\xF6|\x02\u054D\u054B\x03" +
    "\x02\x02\x02\u054E\u0551\x03\x02\x02\x02\u054F\u054D\x03\x02\x02\x02\u054F" +
    "\u0550\x03\x02\x02\x02\u0550\u0552\x03\x02\x02\x02\u0551\u054F\x03\x02" +
    "\x02\x02\u0552\u0553\x07Q\x02\x02\u0553\u0554\x05\xCCg\x18\u0554\u056C" +
    "\x03\x02\x02\x02\u0555\u0556\t\b\x02\x02\u0556\u056C\x05\xCCg\x16\u0557" +
    "\u0558\t\t\x02\x02\u0558\u056C\x05\xCCg\x15\u0559\u056C\x05\xD0i\x02\u055A" +
    "\u056C\x05\xD8m\x02\u055B\u055C\x05\xF6|\x02\u055C\u0562\x07|\x02\x02" +
    "\u055D\u055F\x05\xFA~\x02\u055E\u055D\x03\x02\x02\x02\u055E\u055F\x03" +
    "\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\u0563\x05\xA8U\x02\u0561" +
    "\u0563\x07!\x02\x02\u0562\u055E\x03\x02\x02\x02\u0562\u0561\x03\x02\x02" +
    "\x02\u0563\u056C\x03\x02\x02\x02\u0564\u0565\x05\xE0q\x02\u0565\u0567" +
    "\x07|\x02\x02\u0566\u0568\x05\xFA~\x02\u0567\u0566\x03\x02\x02\x02\u0567" +
    "\u0568\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u056A\x07!\x02" +
    "\x02\u056A\u056C\x03\x02\x02\x02\u056B\u053E\x03\x02\x02\x02\u056B\u0540" +
    "\x03\x02\x02\x02\u056B\u0541\x03\x02\x02\x02\u056B\u0543\x03\x02\x02\x02" +
    "\u056B\u0555\x03\x02\x02\x02\u056B\u0557\x03\x02\x02\x02\u056B\u0559\x03" +
    "\x02\x02\x02\u056B\u055A\x03\x02\x02\x02\u056B\u055B\x03\x02\x02\x02\u056B" +
    "\u0564\x03\x02\x02\x02\u056C\u05C0\x03\x02\x02\x02\u056D\u056E\f\x14\x02" +
    "\x02\u056E\u056F\t\n\x02\x02\u056F\u05BF\x05\xCCg\x15\u0570\u0571\f\x13" +
    "\x02\x02\u0571\u0572\t\v\x02\x02\u0572\u05BF\x05\xCCg\x14\u0573\u057B" +
    "\f\x12\x02\x02\u0574\u0575\x07[\x02\x02\u0575\u057C\x07[\x02\x02\u0576" +
    "\u0577\x07Z\x02\x02\u0577\u0578\x07Z\x02\x02\u0578\u057C\x07Z\x02\x02" +
    "\u0579\u057A\x07Z\x02\x02\u057A\u057C\x07Z\x02\x02\u057B\u0574\x03\x02" +
    "\x02\x02\u057B\u0576\x03\x02\x02\x02\u057B\u0579\x03\x02\x02\x02\u057C" +
    "\u057D\x03\x02\x02\x02\u057D\u05BF\x05\xCCg\x13\u057E\u057F\f\x11\x02" +
    "\x02\u057F\u0580\t\f\x02\x02\u0580\u05BF\x05\xCCg\x12\u0581\u0582\f\x0F" +
    "\x02\x02\u0582\u0583\t\r\x02\x02\u0583\u05BF\x05\xCCg\x10\u0584\u0585" +
    "\f\x0E\x02\x02\u0585\u0586\x07l\x02\x02\u0586\u05BF\x05\xCCg\x0F\u0587" +
    "\u0588\f\r\x02\x02\u0588\u0589\x07n\x02\x02\u0589\u05BF\x05\xCCg\x0E\u058A" +
    "\u058B\f\f\x02\x02\u058B\u058C\x07m\x02\x02\u058C\u05BF\x05\xCCg\r\u058D" +
    "\u058E\f\v\x02\x02\u058E\u058F\x07d\x02\x02\u058F\u05BF\x05\xCCg\f\u0590" +
    "\u0591\f\n\x02\x02\u0591\u0592\x07e\x02\x02\u0592\u05BF\x05\xCCg\v\u0593" +
    "\u0594\f\t\x02\x02\u0594\u0595\x07^\x02\x02\u0595\u0596\x05\xCCg\x02\u0596" +
    "\u0597\x07_\x02\x02\u0597\u0598\x05\xCCg\t\u0598\u05BF\x03\x02\x02\x02" +
    "\u0599\u059A\f\b\x02\x02\u059A\u059B\t\x0E\x02\x02\u059B\u05BF\x05\xCC" +
    "g\b\u059C\u059D\f\x1C\x02\x02\u059D\u05A9\x07X\x02\x02\u059E\u05AA\x05" +
    "\xA8U\x02\u059F\u05AA\x05\xCAf\x02\u05A0\u05AA\x07-\x02\x02\u05A1\u05A3" +
    "\x07!\x02\x02\u05A2\u05A4\x05\xF2z\x02\u05A3\u05A2\x03\x02\x02\x02\u05A3" +
    "\u05A4\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5\u05AA\x05\xE6" +
    "t\x02\u05A6\u05A7\x07*\x02\x02\u05A7\u05AA\x05\xFC\x7F\x02\u05A8\u05AA" +
    "\x05\xECw\x02\u05A9\u059E\x03\x02\x02\x02\u05A9\u059F\x03\x02\x02\x02" +
    "\u05A9\u05A0\x03\x02\x02\x02\u05A9\u05A1\x03\x02\x02\x02\u05A9\u05A6\x03" +
    "\x02\x02\x02\u05A9\u05A8\x03\x02\x02\x02\u05AA\u05BF\x03\x02\x02\x02\u05AB" +
    "\u05AC\f\x1B\x02\x02\u05AC\u05AD\x07T\x02\x02\u05AD\u05AE\x05\xCCg\x02" +
    "\u05AE\u05AF\x07U\x02\x02\u05AF\u05BF\x03\x02\x02\x02\u05B0\u05B1\f\x17" +
    "\x02\x02\u05B1\u05BF\t\x0F\x02\x02\u05B2\u05B3\f\x10\x02\x02\u05B3\u05B6" +
    "\x07\x1C\x02\x02\u05B4\u05B7\x05\xF6|\x02\u05B5\u05B7\x05\xCEh\x02\u05B6" +
    "\u05B4\x03\x02\x02\x02\u05B6\u05B5\x03\x02\x02\x02\u05B7\u05BF\x03\x02" +
    "\x02\x02\u05B8\u05B9\f\x05\x02\x02\u05B9\u05BB\x07|\x02\x02\u05BA\u05BC" +
    "\x05\xFA~\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02" +
    "\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BF\x05\xA8U\x02\u05BE\u056D\x03" +
    "\x02\x02\x02\u05BE\u0570\x03\x02\x02\x02\u05BE\u0573\x03\x02\x02\x02\u05BE" +
    "\u057E\x03\x02\x02\x02\u05BE\u0581\x03\x02\x02\x02\u05BE\u0584\x03\x02" +
    "\x02\x02\u05BE\u0587\x03\x02\x02\x02\u05BE\u058A\x03\x02\x02\x02\u05BE" +
    "\u058D\x03\x02\x02\x02\u05BE\u0590\x03\x02\x02\x02\u05BE\u0593\x03\x02" +
    "\x02\x02\u05BE\u0599\x03\x02\x02\x02\u05BE\u059C\x03\x02\x02\x02\u05BE" +
    "\u05AB\x03\x02\x02\x02\u05BE\u05B0\x03\x02\x02\x02\u05BE\u05B2\x03\x02" +
    "\x02\x02\u05BE\u05B8\x03\x02\x02\x02\u05BF\u05C2\x03\x02\x02\x02\u05C0" +
    "\u05BE\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\xCD\x03\x02\x02" +
    "\x02\u05C2\u05C0\x03\x02\x02\x02\u05C3\u05C5\x05\x0E\b\x02\u05C4\u05C3" +
    "\x03\x02\x02\x02\u05C5\u05C8\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02" +
    "\u05C6\u05C7\x03\x02\x02\x02\u05C7\u05C9\x03\x02\x02\x02\u05C8\u05C6\x03" +
    "\x02\x02\x02\u05C9\u05CD\x05\xF6|\x02\u05CA\u05CC\x05v<\x02\u05CB\u05CA" +
    "\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02" +
    "\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D0\x03\x02\x02\x02\u05CF\u05CD\x03" +
    "\x02\x02\x02\u05D0\u05D1\x05\xA8U\x02\u05D1\xCF\x03\x02\x02\x02\u05D2" +
    "\u05D3\x05\xD2j\x02\u05D3\u05D4\x07{\x02\x02\u05D4\u05D5\x05\xD4k\x02" +
    "\u05D5\xD1\x03\x02\x02\x02\u05D6\u05ED\x05\xA8U\x02\u05D7\u05D9\x07P\x02" +
    "\x02\u05D8\u05DA\x05b2\x02\u05D9\u05D8\x03\x02\x02\x02\u05D9\u05DA\x03" +
    "\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB\u05ED\x07Q\x02\x02\u05DC" +
    "\u05DD\x07P\x02\x02\u05DD\u05E2\x05\xA8U\x02\u05DE\u05DF\x07W\x02\x02" +
    "\u05DF\u05E1\x05\xA8U\x02\u05E0\u05DE\x03\x02\x02\x02\u05E1\u05E4\x03" +
    "\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3" +
    "\u05E5\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05E6\x07Q\x02" +
    "\x02\u05E6\u05ED\x03\x02\x02\x02\u05E7\u05E9\x07P\x02\x02\u05E8\u05EA" +
    "\x05h5\x02\u05E9\u05E8\x03\x02\x02\x02\u05E9\u05EA\x03\x02\x02\x02\u05EA" +
    "\u05EB\x03\x02\x02\x02\u05EB\u05ED\x07Q\x02\x02\u05EC\u05D6\x03\x02\x02" +
    "\x02\u05EC\u05D7\x03\x02\x02\x02\u05EC\u05DC\x03\x02\x02\x02\u05EC\u05E7" +
    "\x03\x02\x02\x02\u05ED\xD3\x03\x02\x02\x02\u05EE\u05F1\x05\xCCg\x02\u05EF" +
    "\u05F1\x05\xA2R\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0\u05EF\x03\x02\x02" +
    "\x02\u05F1\xD5\x03\x02\x02\x02\u05F2\u05F3\x07P\x02\x02\u05F3\u05F4\x05" +
    "\xCCg\x02\u05F4\u05F5\x07Q\x02\x02\u05F5\u0605\x03\x02\x02\x02\u05F6\u0605" +
    "\x07-\x02\x02\u05F7\u0605\x07*\x02\x02\u05F8\u0605\x05n8\x02\u05F9\u0605" +
    "\x05\xA8U\x02\u05FA\u05FB\x054\x1B\x02\u05FB\u05FC\x07X\x02\x02\u05FC" +
    "\u05FD\x07\v\x02\x02\u05FD\u0605\x03\x02\x02\x02\u05FE\u0602\x05\xF2z" +
    "\x02\u05FF\u0603\x05\xFE\x80\x02\u0600\u0601\x07-\x02\x02\u0601\u0603" +
    "\x05\u0100\x81\x02\u0602\u05FF\x03\x02\x02\x02\u0602\u0600\x03\x02\x02" +
    "\x02\u0603\u0605\x03\x02\x02\x02\u0604\u05F2\x03\x02\x02\x02\u0604\u05F6" +
    "\x03\x02\x02\x02\u0604\u05F7\x03\x02\x02\x02\u0604\u05F8\x03\x02\x02\x02" +
    "\u0604\u05F9\x03\x02\x02\x02\u0604\u05FA\x03\x02\x02\x02\u0604\u05FE\x03" +
    "\x02\x02\x02\u0605\xD7\x03\x02\x02\x02\u0606\u0607\x07+\x02\x02\u0607" +
    "\u0608\x05\xC6d\x02\u0608\u060C\x07R\x02\x02\u0609\u060B\x05\xDAn\x02" +
    "\u060A\u0609\x03\x02\x02\x02\u060B\u060E\x03\x02\x02\x02\u060C\u060A\x03" +
    "\x02\x02\x02\u060C\u060D\x03\x02\x02\x02\u060D\u060F\x03\x02\x02\x02\u060E" +
    "\u060C\x03\x02\x02\x02\u060F\u0610\x07S\x02\x02\u0610\xD9\x03\x02\x02" +
    "\x02\u0611\u0615\x07\b\x02\x02\u0612\u0616\x05\xC8e\x02\u0613\u0616\x07" +
    "O\x02\x02\u0614\u0616\x05\xDCo\x02\u0615\u0612\x03\x02\x02\x02\u0615\u0613" +
    "\x03\x02\x02\x02\u0615\u0614\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02" +
    "\u0617\u0618\t\x10\x02\x02\u0618\u061D\x05\xDEp\x02\u0619\u061A\x07\x0E" +
    "\x02\x02\u061A\u061B\t\x10\x02\x02\u061B\u061D\x05\xDEp\x02\u061C\u0611" +
    "\x03\x02\x02\x02\u061C\u0619\x03\x02\x02\x02\u061D\xDB\x03\x02\x02\x02" +
    "\u061E\u061F\bo\x01\x02\u061F\u0620\x07P\x02\x02\u0620\u0621\x05\xDCo" +
    "\x02\u0621\u0622\x07Q\x02\x02\u0622\u0639\x03\x02\x02\x02\u0623\u0625" +
    "\x05\x0E\b\x02\u0624\u0623\x03\x02\x02\x02\u0625\u0628\x03\x02\x02\x02" +
    "\u0626\u0624\x03\x02\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0629\x03" +
    "\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0629\u062D\x05\xF6|\x02\u062A" +
    "\u062C\x05v<\x02\u062B\u062A\x03\x02\x02\x02\u062C\u062F\x03\x02\x02\x02" +
    "\u062D\u062B\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u0630\x03" +
    "\x02\x02\x02\u062F\u062D\x03\x02\x02\x02\u0630\u0635\x05\xA8U\x02\u0631" +
    "\u0632\x07d\x02\x02\u0632\u0634\x05\xCCg\x02\u0633\u0631\x03\x02\x02\x02" +
    "\u0634\u0637\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02\u0635\u0636\x03" +
    "\x02\x02\x02\u0636\u0639\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02\u0638" +
    "\u061E\x03\x02\x02\x02\u0638\u0626\x03\x02\x02\x02\u0639\u063F\x03\x02" +
    "\x02\x02\u063A\u063B\f\x03\x02\x02\u063B\u063C\x07d\x02\x02\u063C\u063E" +
    "\x05\xCCg\x02\u063D\u063A\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02" +
    "\u063F\u063D\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\xDD\x03" +
    "\x02\x02\x02\u0641\u063F\x03\x02\x02\x02\u0642\u064A\x05\xA2R\x02\u0643" +
    "\u0645\x05\xA4S\x02\u0644\u0643\x03\x02\x02\x02\u0645\u0648\x03\x02\x02" +
    "\x02\u0646\u0644\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u064A" +
    "\x03\x02\x02\x02\u0648\u0646\x03\x02\x02\x02\u0649\u0642\x03\x02\x02\x02" +
    "\u0649\u0646\x03\x02\x02\x02\u064A\xDF\x03\x02\x02\x02\u064B\u064C\x05" +
    "X-\x02\u064C\u064D\x07X\x02\x02\u064D\u064F\x03\x02\x02\x02\u064E\u064B" +
    "\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0653\x03\x02\x02\x02" +
    "\u0650\u0652\x05v<\x02\u0651\u0650\x03\x02\x02\x02\u0652\u0655\x03\x02" +
    "\x02\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
    "\u0656\x03\x02\x02\x02\u0655\u0653\x03\x02\x02\x02\u0656\u0658\x05\xA8" +
    "U\x02\u0657\u0659\x05\xFA~\x02\u0658\u0657\x03\x02\x02\x02\u0658\u0659" +
    "\x03";
JavaParser._serializedATNSegment3 = "\x02\x02\x02\u0659\xE1\x03\x02\x02\x02\u065A\u065B\x05\xF2z\x02\u065B" +
    "\u065C\x05\xE4s\x02\u065C\u065D\x05\xEAv\x02\u065D\u0664\x03\x02\x02\x02" +
    "\u065E\u0661\x05\xE4s\x02\u065F\u0662\x05\xE8u\x02\u0660\u0662\x05\xEA" +
    "v\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0660\x03\x02\x02\x02\u0662\u0664" +
    "\x03\x02\x02\x02\u0663\u065A\x03\x02\x02\x02\u0663\u065E\x03\x02\x02\x02" +
    "\u0664\xE3\x03\x02\x02\x02\u0665\u0667\x05\xA8U\x02\u0666\u0668\x05\xEE" +
    "x\x02\u0667\u0666\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u0670" +
    "\x03\x02\x02\x02\u0669\u066A\x07X\x02\x02\u066A\u066C\x05\xA8U\x02\u066B" +
    "\u066D\x05\xEEx\x02\u066C\u066B\x03\x02\x02\x02\u066C\u066D\x03\x02\x02" +
    "\x02\u066D\u066F\x03\x02\x02\x02\u066E\u0669\x03\x02\x02\x02\u066F\u0672" +
    "\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02" +
    "\u0671\u0675\x03\x02\x02\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0675\x05" +
    "\xF8}\x02\u0674\u0665\x03\x02\x02\x02\u0674\u0673\x03\x02\x02\x02\u0675" +
    "\xE5\x03\x02\x02\x02\u0676\u0678\x05\xA8U\x02\u0677\u0679\x05\xF0y\x02" +
    "\u0678\u0677\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u067A\x03" +
    "\x02\x02\x02\u067A\u067B\x05\xEAv\x02\u067B\xE7\x03\x02\x02\x02\u067C" +
    "\u0698\x07T\x02\x02\u067D\u0682\x07U\x02\x02\u067E\u067F\x07T\x02\x02" +
    "\u067F\u0681\x07U\x02\x02\u0680\u067E\x03\x02\x02\x02\u0681\u0684\x03" +
    "\x02\x02\x02\u0682\u0680\x03\x02\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683" +
    "\u0685\x03\x02\x02\x02\u0684\u0682\x03\x02\x02\x02\u0685\u0699\x05V,\x02" +
    "\u0686\u0687\x05\xCCg\x02\u0687\u068E\x07U\x02\x02\u0688\u0689\x07T\x02" +
    "\x02\u0689\u068A\x05\xCCg\x02\u068A\u068B\x07U\x02\x02\u068B\u068D\x03" +
    "\x02\x02\x02\u068C\u0688\x03\x02\x02\x02\u068D\u0690\x03\x02\x02\x02\u068E" +
    "\u068C\x03\x02\x02\x02\u068E\u068F\x03\x02\x02\x02\u068F\u0695\x03\x02" +
    "\x02\x02\u0690\u068E\x03\x02\x02\x02\u0691\u0692\x07T\x02\x02\u0692\u0694" +
    "\x07U\x02\x02\u0693\u0691\x03\x02\x02\x02\u0694\u0697\x03\x02\x02\x02" +
    "\u0695\u0693\x03\x02\x02\x02\u0695\u0696\x03\x02\x02\x02\u0696\u0699\x03" +
    "\x02\x02\x02\u0697\u0695\x03\x02\x02\x02\u0698\u067D\x03\x02\x02\x02\u0698" +
    "\u0686\x03\x02\x02\x02\u0699\xE9\x03\x02\x02\x02\u069A\u069C\x05\u0100" +
    "\x81\x02\u069B\u069D\x05(\x15\x02\u069C\u069B\x03\x02\x02\x02\u069C\u069D" +
    "\x03\x02\x02\x02\u069D\xEB\x03\x02\x02\x02\u069E\u069F\x05\xF2z\x02\u069F" +
    "\u06A0\x05\xFE\x80\x02\u06A0\xED\x03\x02\x02\x02\u06A1\u06A2\x07[\x02" +
    "\x02\u06A2\u06A5\x07Z\x02\x02\u06A3\u06A5\x05\xFA~\x02\u06A4\u06A1\x03" +
    "\x02\x02\x02\u06A4\u06A3\x03\x02\x02\x02\u06A5\xEF\x03\x02\x02\x02\u06A6" +
    "\u06A7\x07[\x02\x02\u06A7\u06AA\x07Z\x02\x02\u06A8\u06AA\x05\xF2z\x02" +
    "\u06A9\u06A6\x03\x02\x02\x02\u06A9\u06A8\x03\x02\x02\x02\u06AA\xF1\x03" +
    "\x02\x02\x02\u06AB\u06AC\x07[\x02\x02\u06AC\u06AD\x05\xF4{\x02\u06AD\u06AE" +
    "\x07Z\x02\x02\u06AE\xF3\x03\x02\x02\x02\u06AF\u06B4\x05\xF6|\x02\u06B0" +
    "\u06B1\x07W\x02\x02\u06B1\u06B3\x05\xF6|\x02\u06B2\u06B0\x03\x02\x02\x02" +
    "\u06B3\u06B6\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B5\x03" +
    "\x02\x02\x02\u06B5\xF5\x03\x02\x02\x02\u06B6\u06B4\x03\x02\x02\x02\u06B7" +
    "\u06B9\x05v<\x02\u06B8\u06B7\x03\x02\x02\x02\u06B9\u06BC\x03\x02\x02\x02" +
    "\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BF\x03" +
    "\x02\x02\x02\u06BC\u06BA\x03\x02\x02\x02\u06BD\u06C0\x05X-\x02\u06BE\u06C0" +
    "\x05\xF8}\x02\u06BF\u06BD\x03\x02\x02\x02\u06BF\u06BE\x03\x02\x02\x02" +
    "\u06C0\u06CB\x03\x02\x02\x02\u06C1\u06C3\x05v<\x02\u06C2\u06C1\x03\x02" +
    "\x02\x02\u06C3\u06C6\x03\x02\x02\x02\u06C4\u06C2\x03\x02\x02\x02\u06C4" +
    "\u06C5\x03\x02\x02\x02\u06C5\u06C7\x03\x02\x02\x02\u06C6\u06C4\x03\x02" +
    "\x02\x02\u06C7\u06C8\x07T\x02\x02\u06C8\u06CA\x07U\x02\x02\u06C9\u06C4" +
    "\x03\x02\x02\x02\u06CA\u06CD\x03\x02\x02\x02\u06CB\u06C9\x03\x02\x02\x02" +
    "\u06CB\u06CC\x03\x02\x02\x02\u06CC\xF7\x03\x02\x02\x02\u06CD\u06CB\x03" +
    "\x02\x02\x02\u06CE\u06CF\t\x11\x02\x02\u06CF\xF9\x03\x02\x02\x02\u06D0" +
    "\u06D1\x07[\x02\x02\u06D1\u06D6\x05Z.\x02\u06D2\u06D3\x07W\x02\x02\u06D3" +
    "\u06D5\x05Z.\x02\u06D4\u06D2\x03\x02\x02\x02\u06D5\u06D8\x03\x02\x02\x02" +
    "\u06D6\u06D4\x03\x02\x02\x02\u06D6\u06D7\x03\x02\x02\x02\u06D7\u06D9\x03" +
    "\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D9\u06DA\x07Z\x02\x02\u06DA" +
    "\xFB\x03\x02\x02\x02\u06DB\u06E5\x05\u0100\x81\x02\u06DC\u06DE\x07X\x02" +
    "\x02\u06DD\u06DF\x05\xFA~\x02\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF" +
    "\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E2\x05\xA8U\x02" +
    "\u06E1\u06E3\x05\u0100\x81\x02\u06E2\u06E1\x03\x02\x02\x02\u06E2\u06E3" +
    "\x03\x02\x02\x02\u06E3\u06E5\x03\x02\x02\x02\u06E4\u06DB\x03\x02\x02\x02" +
    "\u06E4\u06DC\x03\x02\x02\x02\u06E5\xFD\x03\x02\x02\x02\u06E6\u06E7\x07" +
    "*\x02\x02\u06E7\u06EC\x05\xFC\x7F\x02\u06E8\u06E9\x05\xA8U\x02\u06E9\u06EA" +
    "\x05\u0100\x81\x02\u06EA\u06EC\x03\x02\x02\x02\u06EB\u06E6\x03\x02\x02" +
    "\x02\u06EB\u06E8\x03\x02\x02\x02\u06EC\xFF\x03\x02\x02\x02\u06ED\u06EF" +
    "\x07P\x02\x02\u06EE\u06F0\x05\xC8e\x02\u06EF\u06EE\x03\x02\x02\x02\u06EF" +
    "\u06F0\x03\x02\x02\x02\u06F0\u06F1\x03\x02\x02\x02\u06F1\u06F2\x07Q\x02" +
    "\x02\u06F2\u0101\x03\x02\x02\x02\xDE\u0103\u0108\u010E\u0114\u0119\u0122" +
    "\u0127\u012E\u0136\u0139\u0140\u014C\u0150\u015E\u0162\u0165\u0168\u0172" +
    "\u017A\u0182\u0186\u018D\u0193\u0197\u019A\u019D\u01A6\u01AC\u01B1\u01B4" +
    "\u01BA\u01C0\u01C3\u01C6\u01CE\u01D7\u01DE\u01E4\u01E8\u01F4\u01FD\u0202" +
    "\u0208\u020C\u0218\u0223\u0228\u0232\u023A\u0244\u024D\u0258\u025D\u0266" +
    "\u0270\u0275\u027E\u0284\u028B\u0290\u0298\u029C\u029E\u02A4\u02AA\u02AF" +
    "\u02B5\u02BB\u02BD\u02C4\u02C9\u02CE\u02D1\u02D3\u02DD\u02E7\u02EC\u02EF" +
    "\u02F4\u02FD\u0304\u030F\u0315\u0320\u032A\u0335\u033E\u0343\u0346\u034D" +
    "\u0357\u035F\u0362\u0365\u0372\u037A\u037F\u0387\u038B\u038F\u0393\u0397" +
    "\u0399\u039D\u03A3\u03AB\u03B5\u03BE\u03C8\u03D0\u03DE\u03E5\u03E9\u03EF" +
    "\u03F8\u0402\u040B\u0415\u041A\u0425\u042E\u0434\u0437\u043E\u0447\u045E" +
    "\u0461\u0464\u046C\u0470\u0478\u047E\u0489\u0492\u0497\u04A4\u04AA\u04B1" +
    "\u04BE\u04C7\u04D0\u04D6\u04DE\u04E4\u04E9\u04EE\u04F6\u04FB\u04FF\u0503" +
    "\u0507\u0509\u050D\u0512\u0517\u0526\u052C\u0533\u0539\u053C\u0547\u054F" +
    "\u055E\u0562\u0567\u056B\u057B\u05A3\u05A9\u05B6\u05BB\u05BE\u05C0\u05C6" +
    "\u05CD\u05D9\u05E2\u05E9\u05EC\u05F0\u0602\u0604\u060C\u0615\u061C\u0626" +
    "\u062D\u0635\u0638\u063F\u0646\u0649\u064E\u0653\u0658\u0661\u0663\u0667" +
    "\u066C\u0670\u0674\u0678\u0682\u068E\u0695\u0698\u069C\u06A4\u06A9\u06B4" +
    "\u06BA\u06BF\u06C4\u06CB\u06D6\u06DE\u06E2\u06E4\u06EB\u06EF";
JavaParser._serializedATN = Utils.join([
    JavaParser._serializedATNSegment0,
    JavaParser._serializedATNSegment1,
    JavaParser._serializedATNSegment2,
    JavaParser._serializedATNSegment3,
], "");
class CompilationUnitContext extends ParserRuleContext_1.ParserRuleContext {
    packageDeclaration() {
        return this.tryGetRuleContext(0, PackageDeclarationContext);
    }
    importDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ImportDeclarationContext);
        }
    }
    typeDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        else {
            return this.getRuleContext(i, TypeDeclarationContext);
        }
    }
    moduleDeclaration() {
        return this.tryGetRuleContext(0, ModuleDeclarationContext);
    }
    EOF() { return this.tryGetToken(JavaParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_compilationUnit; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompilationUnit) {
            return visitor.visitCompilationUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompilationUnitContext = CompilationUnitContext;
class PackageDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    PACKAGE() { return this.getToken(JavaParser.PACKAGE, 0); }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_packageDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterPackageDeclaration) {
            listener.enterPackageDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPackageDeclaration) {
            listener.exitPackageDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPackageDeclaration) {
            return visitor.visitPackageDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PackageDeclarationContext = PackageDeclarationContext;
class ImportDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    IMPORT() { return this.getToken(JavaParser.IMPORT, 0); }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    MUL() { return this.tryGetToken(JavaParser.MUL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_importDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportDeclaration) {
            listener.enterImportDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportDeclaration) {
            listener.exitImportDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportDeclaration) {
            return visitor.visitImportDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportDeclarationContext = ImportDeclarationContext;
class TypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
    }
    classOrInterfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeDeclaration) {
            listener.enterTypeDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeDeclaration) {
            listener.exitTypeDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeDeclaration) {
            return visitor.visitTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeDeclarationContext = TypeDeclarationContext;
class ModifierContext extends ParserRuleContext_1.ParserRuleContext {
    classOrInterfaceModifier() {
        return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
    }
    NATIVE() { return this.tryGetToken(JavaParser.NATIVE, 0); }
    SYNCHRONIZED() { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
    TRANSIENT() { return this.tryGetToken(JavaParser.TRANSIENT, 0); }
    VOLATILE() { return this.tryGetToken(JavaParser.VOLATILE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_modifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModifierContext = ModifierContext;
class ClassOrInterfaceModifierContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    PUBLIC() { return this.tryGetToken(JavaParser.PUBLIC, 0); }
    PROTECTED() { return this.tryGetToken(JavaParser.PROTECTED, 0); }
    PRIVATE() { return this.tryGetToken(JavaParser.PRIVATE, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    ABSTRACT() { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
    FINAL() { return this.tryGetToken(JavaParser.FINAL, 0); }
    STRICTFP() { return this.tryGetToken(JavaParser.STRICTFP, 0); }
    SEALED() { return this.tryGetToken(JavaParser.SEALED, 0); }
    NON_SEALED() { return this.tryGetToken(JavaParser.NON_SEALED, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classOrInterfaceModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassOrInterfaceModifier) {
            listener.enterClassOrInterfaceModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassOrInterfaceModifier) {
            listener.exitClassOrInterfaceModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassOrInterfaceModifier) {
            return visitor.visitClassOrInterfaceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassOrInterfaceModifierContext = ClassOrInterfaceModifierContext;
class VariableModifierContext extends ParserRuleContext_1.ParserRuleContext {
    FINAL() { return this.tryGetToken(JavaParser.FINAL, 0); }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableModifier) {
            listener.enterVariableModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableModifier) {
            listener.exitVariableModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableModifier) {
            return visitor.visitVariableModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableModifierContext = VariableModifierContext;
class ExtendsListContext extends ParserRuleContext_1.ParserRuleContext {
    EXTENDS() { return this.getToken(JavaParser.EXTENDS, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_extendsList; }
    // @Override
    enterRule(listener) {
        if (listener.enterExtendsList) {
            listener.enterExtendsList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExtendsList) {
            listener.exitExtendsList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExtendsList) {
            return visitor.visitExtendsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtendsListContext = ExtendsListContext;
class ImplementsListContext extends ParserRuleContext_1.ParserRuleContext {
    IMPLEMENTS() { return this.getToken(JavaParser.IMPLEMENTS, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_implementsList; }
    // @Override
    enterRule(listener) {
        if (listener.enterImplementsList) {
            listener.enterImplementsList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImplementsList) {
            listener.exitImplementsList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImplementsList) {
            return visitor.visitImplementsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImplementsListContext = ImplementsListContext;
class PermitsListContext extends ParserRuleContext_1.ParserRuleContext {
    PERMITS() { return this.getToken(JavaParser.PERMITS, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_permitsList; }
    // @Override
    enterRule(listener) {
        if (listener.enterPermitsList) {
            listener.enterPermitsList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPermitsList) {
            listener.exitPermitsList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPermitsList) {
            return visitor.visitPermitsList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PermitsListContext = PermitsListContext;
class ClassDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    CLASS() { return this.getToken(JavaParser.CLASS, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    implementsList() {
        return this.tryGetRuleContext(0, ImplementsListContext);
    }
    permitsList() {
        return this.tryGetRuleContext(0, PermitsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassDeclarationContext = ClassDeclarationContext;
class TypeParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParametersContext = TypeParametersContext;
class TypeParameterContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    typeBound() {
        return this.tryGetRuleContext(0, TypeBoundContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterContext = TypeParameterContext;
class TypeBoundContext extends ParserRuleContext_1.ParserRuleContext {
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    BITAND(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITAND);
        }
        else {
            return this.getToken(JavaParser.BITAND, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeBound; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeBound) {
            listener.enterTypeBound(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeBound) {
            listener.exitTypeBound(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeBound) {
            return visitor.visitTypeBound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeBoundContext = TypeBoundContext;
class EnumDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    ENUM() { return this.getToken(JavaParser.ENUM, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    implementsList() {
        return this.tryGetRuleContext(0, ImplementsListContext);
    }
    enumConstants() {
        return this.tryGetRuleContext(0, EnumConstantsContext);
    }
    COMMA() { return this.tryGetToken(JavaParser.COMMA, 0); }
    enumBodyDeclarations() {
        return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumDeclaration) {
            listener.enterEnumDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumDeclaration) {
            listener.exitEnumDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumDeclaration) {
            return visitor.visitEnumDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumDeclarationContext = EnumDeclarationContext;
class EnumConstantsContext extends ParserRuleContext_1.ParserRuleContext {
    enumConstant(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }
        else {
            return this.getRuleContext(i, EnumConstantContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumConstants; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumConstants) {
            listener.enterEnumConstants(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumConstants) {
            listener.exitEnumConstants(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumConstants) {
            return visitor.visitEnumConstants(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumConstantsContext = EnumConstantsContext;
class EnumConstantContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumConstant) {
            listener.enterEnumConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumConstant) {
            listener.exitEnumConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumConstant) {
            return visitor.visitEnumConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumConstantContext = EnumConstantContext;
class EnumBodyDeclarationsContext extends ParserRuleContext_1.ParserRuleContext {
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enumBodyDeclarations; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumBodyDeclarations) {
            listener.enterEnumBodyDeclarations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumBodyDeclarations) {
            listener.exitEnumBodyDeclarations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumBodyDeclarations) {
            return visitor.visitEnumBodyDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumBodyDeclarationsContext = EnumBodyDeclarationsContext;
class InterfaceDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    INTERFACE() { return this.getToken(JavaParser.INTERFACE, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    interfaceBody() {
        return this.getRuleContext(0, InterfaceBodyContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    extendsList() {
        return this.tryGetRuleContext(0, ExtendsListContext);
    }
    permitsList() {
        return this.tryGetRuleContext(0, PermitsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceDeclaration) {
            listener.enterInterfaceDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceDeclaration) {
            listener.exitInterfaceDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceDeclaration) {
            return visitor.visitInterfaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceDeclarationContext = InterfaceDeclarationContext;
class ClassBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassBody) {
            listener.enterClassBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassBody) {
            listener.exitClassBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassBodyContext = ClassBodyContext;
class InterfaceBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    interfaceBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, InterfaceBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceBody) {
            listener.enterInterfaceBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceBody) {
            listener.exitInterfaceBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceBody) {
            return visitor.visitInterfaceBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceBodyContext = InterfaceBodyContext;
class ClassBodyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    memberDeclaration() {
        return this.tryGetRuleContext(0, MemberDeclarationContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classBodyDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassBodyDeclaration) {
            listener.enterClassBodyDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassBodyDeclaration) {
            listener.exitClassBodyDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassBodyDeclaration) {
            return visitor.visitClassBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassBodyDeclarationContext = ClassBodyDeclarationContext;
class MemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
    }
    methodDeclaration() {
        return this.tryGetRuleContext(0, MethodDeclarationContext);
    }
    genericMethodDeclaration() {
        return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
    }
    fieldDeclaration() {
        return this.tryGetRuleContext(0, FieldDeclarationContext);
    }
    constructorDeclaration() {
        return this.tryGetRuleContext(0, ConstructorDeclarationContext);
    }
    genericConstructorDeclaration() {
        return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_memberDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberDeclaration) {
            listener.enterMemberDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberDeclaration) {
            listener.exitMemberDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberDeclaration) {
            return visitor.visitMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberDeclarationContext = MemberDeclarationContext;
class MethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeTypeOrVoid() {
        return this.getRuleContext(0, TypeTypeOrVoidContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    THROWS() { return this.tryGetToken(JavaParser.THROWS, 0); }
    qualifiedNameList() {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterMethodDeclaration) {
            listener.enterMethodDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMethodDeclaration) {
            listener.exitMethodDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodDeclaration) {
            return visitor.visitMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodDeclarationContext = MethodDeclarationContext;
class MethodBodyContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterMethodBody) {
            listener.enterMethodBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMethodBody) {
            listener.exitMethodBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodBody) {
            return visitor.visitMethodBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodBodyContext = MethodBodyContext;
class TypeTypeOrVoidContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    VOID() { return this.tryGetToken(JavaParser.VOID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeTypeOrVoid; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeTypeOrVoid) {
            listener.enterTypeTypeOrVoid(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeTypeOrVoid) {
            listener.exitTypeTypeOrVoid(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeTypeOrVoid) {
            return visitor.visitTypeTypeOrVoid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTypeOrVoidContext = TypeTypeOrVoidContext;
class GenericMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    methodDeclaration() {
        return this.getRuleContext(0, MethodDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericMethodDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterGenericMethodDeclaration) {
            listener.enterGenericMethodDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGenericMethodDeclaration) {
            listener.exitGenericMethodDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericMethodDeclaration) {
            return visitor.visitGenericMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericMethodDeclarationContext = GenericMethodDeclarationContext;
class GenericConstructorDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    constructorDeclaration() {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericConstructorDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterGenericConstructorDeclaration) {
            listener.enterGenericConstructorDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGenericConstructorDeclaration) {
            listener.exitGenericConstructorDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericConstructorDeclaration) {
            return visitor.visitGenericConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericConstructorDeclarationContext = GenericConstructorDeclarationContext;
class ConstructorDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    THROWS() { return this.tryGetToken(JavaParser.THROWS, 0); }
    qualifiedNameList() {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constructorDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstructorDeclaration) {
            listener.enterConstructorDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstructorDeclaration) {
            listener.exitConstructorDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstructorDeclaration) {
            return visitor.visitConstructorDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstructorDeclarationContext = ConstructorDeclarationContext;
class FieldDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclarators() {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_fieldDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterFieldDeclaration) {
            listener.enterFieldDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFieldDeclaration) {
            listener.exitFieldDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFieldDeclaration) {
            return visitor.visitFieldDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FieldDeclarationContext = FieldDeclarationContext;
class InterfaceBodyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    interfaceMemberDeclaration() {
        return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceBodyDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceBodyDeclaration) {
            listener.enterInterfaceBodyDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceBodyDeclaration) {
            listener.exitInterfaceBodyDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceBodyDeclaration) {
            return visitor.visitInterfaceBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceBodyDeclarationContext = InterfaceBodyDeclarationContext;
class InterfaceMemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constDeclaration() {
        return this.tryGetRuleContext(0, ConstDeclarationContext);
    }
    interfaceMethodDeclaration() {
        return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
    }
    genericInterfaceMethodDeclaration() {
        return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMemberDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceMemberDeclaration) {
            listener.enterInterfaceMemberDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceMemberDeclaration) {
            listener.exitInterfaceMemberDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMemberDeclaration) {
            return visitor.visitInterfaceMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMemberDeclarationContext = InterfaceMemberDeclarationContext;
class ConstDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    constantDeclarator(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, ConstantDeclaratorContext);
        }
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstDeclaration) {
            listener.enterConstDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstDeclaration) {
            listener.exitConstDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstDeclaration) {
            return visitor.visitConstDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstDeclarationContext = ConstDeclarationContext;
class ConstantDeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    ASSIGN() { return this.getToken(JavaParser.ASSIGN, 0); }
    variableInitializer() {
        return this.getRuleContext(0, VariableInitializerContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_constantDeclarator; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstantDeclarator) {
            listener.enterConstantDeclarator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstantDeclarator) {
            listener.exitConstantDeclarator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstantDeclarator) {
            return visitor.visitConstantDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantDeclaratorContext = ConstantDeclaratorContext;
class InterfaceMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    interfaceCommonBodyDeclaration() {
        return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
    }
    interfaceMethodModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }
        else {
            return this.getRuleContext(i, InterfaceMethodModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMethodDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceMethodDeclaration) {
            listener.enterInterfaceMethodDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceMethodDeclaration) {
            listener.exitInterfaceMethodDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMethodDeclaration) {
            return visitor.visitInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMethodDeclarationContext = InterfaceMethodDeclarationContext;
class InterfaceMethodModifierContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    PUBLIC() { return this.tryGetToken(JavaParser.PUBLIC, 0); }
    ABSTRACT() { return this.tryGetToken(JavaParser.ABSTRACT, 0); }
    DEFAULT() { return this.tryGetToken(JavaParser.DEFAULT, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    STRICTFP() { return this.tryGetToken(JavaParser.STRICTFP, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceMethodModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceMethodModifier) {
            listener.enterInterfaceMethodModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceMethodModifier) {
            listener.exitInterfaceMethodModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceMethodModifier) {
            return visitor.visitInterfaceMethodModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceMethodModifierContext = InterfaceMethodModifierContext;
class GenericInterfaceMethodDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    interfaceCommonBodyDeclaration() {
        return this.getRuleContext(0, InterfaceCommonBodyDeclarationContext);
    }
    interfaceMethodModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }
        else {
            return this.getRuleContext(i, InterfaceMethodModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterGenericInterfaceMethodDeclaration) {
            listener.enterGenericInterfaceMethodDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGenericInterfaceMethodDeclaration) {
            listener.exitGenericInterfaceMethodDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenericInterfaceMethodDeclaration) {
            return visitor.visitGenericInterfaceMethodDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenericInterfaceMethodDeclarationContext = GenericInterfaceMethodDeclarationContext;
class InterfaceCommonBodyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    typeTypeOrVoid() {
        return this.getRuleContext(0, TypeTypeOrVoidContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    THROWS() { return this.tryGetToken(JavaParser.THROWS, 0); }
    qualifiedNameList() {
        return this.tryGetRuleContext(0, QualifiedNameListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_interfaceCommonBodyDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterInterfaceCommonBodyDeclaration) {
            listener.enterInterfaceCommonBodyDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInterfaceCommonBodyDeclaration) {
            listener.exitInterfaceCommonBodyDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInterfaceCommonBodyDeclaration) {
            return visitor.visitInterfaceCommonBodyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InterfaceCommonBodyDeclarationContext = InterfaceCommonBodyDeclarationContext;
class VariableDeclaratorsContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclarator(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclaratorContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclarators; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclarators) {
            listener.enterVariableDeclarators(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclarators) {
            listener.exitVariableDeclarators(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarators) {
            return visitor.visitVariableDeclarators(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorsContext = VariableDeclaratorsContext;
class VariableDeclaratorContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    variableInitializer() {
        return this.tryGetRuleContext(0, VariableInitializerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclarator; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclarator) {
            listener.enterVariableDeclarator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclarator) {
            listener.exitVariableDeclarator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarator) {
            return visitor.visitVariableDeclarator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorContext = VariableDeclaratorContext;
class VariableDeclaratorIdContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableDeclaratorId; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclaratorId) {
            listener.enterVariableDeclaratorId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclaratorId) {
            listener.exitVariableDeclaratorId(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclaratorId) {
            return visitor.visitVariableDeclaratorId(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclaratorIdContext = VariableDeclaratorIdContext;
class VariableInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    arrayInitializer() {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_variableInitializer; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableInitializer) {
            listener.enterVariableInitializer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableInitializer) {
            listener.exitVariableInitializer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableInitializer) {
            return visitor.visitVariableInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableInitializerContext = VariableInitializerContext;
class ArrayInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    variableInitializer(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        else {
            return this.getRuleContext(i, VariableInitializerContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arrayInitializer; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayInitializer) {
            listener.enterArrayInitializer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayInitializer) {
            listener.exitArrayInitializer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayInitializer) {
            return visitor.visitArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayInitializerContext = ArrayInitializerContext;
class ClassOrInterfaceTypeContext extends ParserRuleContext_1.ParserRuleContext {
    typeIdentifier() {
        return this.getRuleContext(0, TypeIdentifierContext);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    typeArguments(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classOrInterfaceType; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassOrInterfaceType) {
            listener.enterClassOrInterfaceType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassOrInterfaceType) {
            listener.exitClassOrInterfaceType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassOrInterfaceType) {
            return visitor.visitClassOrInterfaceType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;
class TypeArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    QUESTION() { return this.tryGetToken(JavaParser.QUESTION, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArgument; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeArgument) {
            listener.enterTypeArgument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeArgument) {
            listener.exitTypeArgument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArgument) {
            return visitor.visitTypeArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentContext = TypeArgumentContext;
class QualifiedNameListContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_qualifiedNameList; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedNameList) {
            listener.enterQualifiedNameList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedNameList) {
            listener.exitQualifiedNameList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedNameList) {
            return visitor.visitQualifiedNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedNameListContext = QualifiedNameListContext;
class FormalParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    receiverParameter() {
        return this.tryGetRuleContext(0, ReceiverParameterContext);
    }
    COMMA() { return this.tryGetToken(JavaParser.COMMA, 0); }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormalParameters) {
            listener.enterFormalParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormalParameters) {
            listener.exitFormalParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameters) {
            return visitor.visitFormalParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParametersContext = FormalParametersContext;
class ReceiverParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    THIS() { return this.getToken(JavaParser.THIS, 0); }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_receiverParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterReceiverParameter) {
            listener.enterReceiverParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReceiverParameter) {
            listener.exitReceiverParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReceiverParameter) {
            return visitor.visitReceiverParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReceiverParameterContext = ReceiverParameterContext;
class FormalParameterListContext extends ParserRuleContext_1.ParserRuleContext {
    formalParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    lastFormalParameter() {
        return this.tryGetRuleContext(0, LastFormalParameterContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameterList; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterListContext = FormalParameterListContext;
class FormalParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_formalParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterFormalParameter) {
            listener.enterFormalParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFormalParameter) {
            listener.exitFormalParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameter) {
            return visitor.visitFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FormalParameterContext = FormalParameterContext;
class LastFormalParameterContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    ELLIPSIS() { return this.getToken(JavaParser.ELLIPSIS, 0); }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lastFormalParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterLastFormalParameter) {
            listener.enterLastFormalParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLastFormalParameter) {
            listener.exitLastFormalParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLastFormalParameter) {
            return visitor.visitLastFormalParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LastFormalParameterContext = LastFormalParameterContext;
class LambdaLVTIListContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaLVTIParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(LambdaLVTIParameterContext);
        }
        else {
            return this.getRuleContext(i, LambdaLVTIParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaLVTIList; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaLVTIList) {
            listener.enterLambdaLVTIList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaLVTIList) {
            listener.exitLambdaLVTIList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaLVTIList) {
            return visitor.visitLambdaLVTIList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaLVTIListContext = LambdaLVTIListContext;
class LambdaLVTIParameterContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(JavaParser.VAR, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaLVTIParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaLVTIParameter) {
            listener.enterLambdaLVTIParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaLVTIParameter) {
            listener.exitLambdaLVTIParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaLVTIParameter) {
            return visitor.visitLambdaLVTIParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaLVTIParameterContext = LambdaLVTIParameterContext;
class QualifiedNameContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_qualifiedName; }
    // @Override
    enterRule(listener) {
        if (listener.enterQualifiedName) {
            listener.enterQualifiedName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQualifiedName) {
            listener.exitQualifiedName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QualifiedNameContext = QualifiedNameContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    integerLiteral() {
        return this.tryGetRuleContext(0, IntegerLiteralContext);
    }
    floatLiteral() {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    }
    CHAR_LITERAL() { return this.tryGetToken(JavaParser.CHAR_LITERAL, 0); }
    STRING_LITERAL() { return this.tryGetToken(JavaParser.STRING_LITERAL, 0); }
    BOOL_LITERAL() { return this.tryGetToken(JavaParser.BOOL_LITERAL, 0); }
    NULL_LITERAL() { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
    TEXT_BLOCK() { return this.tryGetToken(JavaParser.TEXT_BLOCK, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class IntegerLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    DECIMAL_LITERAL() { return this.tryGetToken(JavaParser.DECIMAL_LITERAL, 0); }
    HEX_LITERAL() { return this.tryGetToken(JavaParser.HEX_LITERAL, 0); }
    OCT_LITERAL() { return this.tryGetToken(JavaParser.OCT_LITERAL, 0); }
    BINARY_LITERAL() { return this.tryGetToken(JavaParser.BINARY_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_integerLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterIntegerLiteral) {
            listener.enterIntegerLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIntegerLiteral) {
            listener.exitIntegerLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIntegerLiteral) {
            return visitor.visitIntegerLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerLiteralContext = IntegerLiteralContext;
class FloatLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    FLOAT_LITERAL() { return this.tryGetToken(JavaParser.FLOAT_LITERAL, 0); }
    HEX_FLOAT_LITERAL() { return this.tryGetToken(JavaParser.HEX_FLOAT_LITERAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_floatLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterFloatLiteral) {
            listener.enterFloatLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFloatLiteral) {
            listener.exitFloatLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FloatLiteralContext = FloatLiteralContext;
class AltAnnotationQualifiedNameContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.getToken(JavaParser.AT, 0); }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_altAnnotationQualifiedName; }
    // @Override
    enterRule(listener) {
        if (listener.enterAltAnnotationQualifiedName) {
            listener.enterAltAnnotationQualifiedName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAltAnnotationQualifiedName) {
            listener.exitAltAnnotationQualifiedName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAltAnnotationQualifiedName) {
            return visitor.visitAltAnnotationQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AltAnnotationQualifiedNameContext = AltAnnotationQualifiedNameContext;
class AnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.tryGetToken(JavaParser.AT, 0); }
    qualifiedName() {
        return this.tryGetRuleContext(0, QualifiedNameContext);
    }
    altAnnotationQualifiedName() {
        return this.tryGetRuleContext(0, AltAnnotationQualifiedNameContext);
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    elementValuePairs() {
        return this.tryGetRuleContext(0, ElementValuePairsContext);
    }
    elementValue() {
        return this.tryGetRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationContext = AnnotationContext;
class ElementValuePairsContext extends ParserRuleContext_1.ParserRuleContext {
    elementValuePair(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }
        else {
            return this.getRuleContext(i, ElementValuePairContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValuePairs; }
    // @Override
    enterRule(listener) {
        if (listener.enterElementValuePairs) {
            listener.enterElementValuePairs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementValuePairs) {
            listener.exitElementValuePairs(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValuePairs) {
            return visitor.visitElementValuePairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValuePairsContext = ElementValuePairsContext;
class ElementValuePairContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    ASSIGN() { return this.getToken(JavaParser.ASSIGN, 0); }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValuePair; }
    // @Override
    enterRule(listener) {
        if (listener.enterElementValuePair) {
            listener.enterElementValuePair(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementValuePair) {
            listener.exitElementValuePair(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValuePair) {
            return visitor.visitElementValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValuePairContext = ElementValuePairContext;
class ElementValueContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    elementValueArrayInitializer() {
        return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValue; }
    // @Override
    enterRule(listener) {
        if (listener.enterElementValue) {
            listener.enterElementValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementValue) {
            listener.exitElementValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValue) {
            return visitor.visitElementValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValueContext = ElementValueContext;
class ElementValueArrayInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    elementValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }
        else {
            return this.getRuleContext(i, ElementValueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_elementValueArrayInitializer; }
    // @Override
    enterRule(listener) {
        if (listener.enterElementValueArrayInitializer) {
            listener.enterElementValueArrayInitializer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElementValueArrayInitializer) {
            listener.exitElementValueArrayInitializer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementValueArrayInitializer) {
            return visitor.visitElementValueArrayInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementValueArrayInitializerContext = ElementValueArrayInitializerContext;
class AnnotationTypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.getToken(JavaParser.AT, 0); }
    INTERFACE() { return this.getToken(JavaParser.INTERFACE, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    annotationTypeBody() {
        return this.getRuleContext(0, AnnotationTypeBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationTypeDeclaration) {
            listener.enterAnnotationTypeDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationTypeDeclaration) {
            listener.exitAnnotationTypeDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeDeclaration) {
            return visitor.visitAnnotationTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeDeclarationContext = AnnotationTypeDeclarationContext;
class AnnotationTypeBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    annotationTypeElementDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationTypeBody) {
            listener.enterAnnotationTypeBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationTypeBody) {
            listener.exitAnnotationTypeBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeBody) {
            return visitor.visitAnnotationTypeBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeBodyContext = AnnotationTypeBodyContext;
class AnnotationTypeElementDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    annotationTypeElementRest() {
        return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeElementDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationTypeElementDeclaration) {
            listener.enterAnnotationTypeElementDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationTypeElementDeclaration) {
            listener.exitAnnotationTypeElementDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeElementDeclaration) {
            return visitor.visitAnnotationTypeElementDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeElementDeclarationContext = AnnotationTypeElementDeclarationContext;
class AnnotationTypeElementRestContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    annotationMethodOrConstantRest() {
        return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    enumDeclaration() {
        return this.tryGetRuleContext(0, EnumDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
    }
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationTypeElementRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationTypeElementRest) {
            listener.enterAnnotationTypeElementRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationTypeElementRest) {
            listener.exitAnnotationTypeElementRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationTypeElementRest) {
            return visitor.visitAnnotationTypeElementRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationTypeElementRestContext = AnnotationTypeElementRestContext;
class AnnotationMethodOrConstantRestContext extends ParserRuleContext_1.ParserRuleContext {
    annotationMethodRest() {
        return this.tryGetRuleContext(0, AnnotationMethodRestContext);
    }
    annotationConstantRest() {
        return this.tryGetRuleContext(0, AnnotationConstantRestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationMethodOrConstantRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationMethodOrConstantRest) {
            listener.enterAnnotationMethodOrConstantRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationMethodOrConstantRest) {
            listener.exitAnnotationMethodOrConstantRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationMethodOrConstantRest) {
            return visitor.visitAnnotationMethodOrConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationMethodOrConstantRestContext = AnnotationMethodOrConstantRestContext;
class AnnotationMethodRestContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    defaultValue() {
        return this.tryGetRuleContext(0, DefaultValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationMethodRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationMethodRest) {
            listener.enterAnnotationMethodRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationMethodRest) {
            listener.exitAnnotationMethodRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationMethodRest) {
            return visitor.visitAnnotationMethodRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationMethodRestContext = AnnotationMethodRestContext;
class AnnotationConstantRestContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclarators() {
        return this.getRuleContext(0, VariableDeclaratorsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_annotationConstantRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationConstantRest) {
            listener.enterAnnotationConstantRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationConstantRest) {
            listener.exitAnnotationConstantRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationConstantRest) {
            return visitor.visitAnnotationConstantRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationConstantRestContext = AnnotationConstantRestContext;
class DefaultValueContext extends ParserRuleContext_1.ParserRuleContext {
    DEFAULT() { return this.getToken(JavaParser.DEFAULT, 0); }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_defaultValue; }
    // @Override
    enterRule(listener) {
        if (listener.enterDefaultValue) {
            listener.enterDefaultValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDefaultValue) {
            listener.exitDefaultValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefaultValueContext = DefaultValueContext;
class ModuleDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    MODULE() { return this.getToken(JavaParser.MODULE, 0); }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    moduleBody() {
        return this.getRuleContext(0, ModuleBodyContext);
    }
    OPEN() { return this.tryGetToken(JavaParser.OPEN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_moduleDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterModuleDeclaration) {
            listener.enterModuleDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModuleDeclaration) {
            listener.exitModuleDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleDeclaration) {
            return visitor.visitModuleDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleDeclarationContext = ModuleDeclarationContext;
class ModuleBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    moduleDirective(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModuleDirectiveContext);
        }
        else {
            return this.getRuleContext(i, ModuleDirectiveContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_moduleBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterModuleBody) {
            listener.enterModuleBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModuleBody) {
            listener.exitModuleBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleBody) {
            return visitor.visitModuleBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleBodyContext = ModuleBodyContext;
class ModuleDirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    REQUIRES() { return this.tryGetToken(JavaParser.REQUIRES, 0); }
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    }
    SEMI() { return this.getToken(JavaParser.SEMI, 0); }
    requiresModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(RequiresModifierContext);
        }
        else {
            return this.getRuleContext(i, RequiresModifierContext);
        }
    }
    EXPORTS() { return this.tryGetToken(JavaParser.EXPORTS, 0); }
    TO() { return this.tryGetToken(JavaParser.TO, 0); }
    OPENS() { return this.tryGetToken(JavaParser.OPENS, 0); }
    USES() { return this.tryGetToken(JavaParser.USES, 0); }
    PROVIDES() { return this.tryGetToken(JavaParser.PROVIDES, 0); }
    WITH() { return this.tryGetToken(JavaParser.WITH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_moduleDirective; }
    // @Override
    enterRule(listener) {
        if (listener.enterModuleDirective) {
            listener.enterModuleDirective(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModuleDirective) {
            listener.exitModuleDirective(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModuleDirective) {
            return visitor.visitModuleDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModuleDirectiveContext = ModuleDirectiveContext;
class RequiresModifierContext extends ParserRuleContext_1.ParserRuleContext {
    TRANSITIVE() { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
    STATIC() { return this.tryGetToken(JavaParser.STATIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_requiresModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterRequiresModifier) {
            listener.enterRequiresModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRequiresModifier) {
            listener.exitRequiresModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRequiresModifier) {
            return visitor.visitRequiresModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RequiresModifierContext = RequiresModifierContext;
class RecordDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    RECORD() { return this.getToken(JavaParser.RECORD, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    recordHeader() {
        return this.getRuleContext(0, RecordHeaderContext);
    }
    recordBody() {
        return this.getRuleContext(0, RecordBodyContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    implementsList() {
        return this.tryGetRuleContext(0, ImplementsListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_recordDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordDeclaration) {
            listener.enterRecordDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordDeclaration) {
            listener.exitRecordDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordDeclaration) {
            return visitor.visitRecordDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordDeclarationContext = RecordDeclarationContext;
class RecordHeaderContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    recordComponentList() {
        return this.tryGetRuleContext(0, RecordComponentListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_recordHeader; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordHeader) {
            listener.enterRecordHeader(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordHeader) {
            listener.exitRecordHeader(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordHeader) {
            return visitor.visitRecordHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordHeaderContext = RecordHeaderContext;
class RecordComponentListContext extends ParserRuleContext_1.ParserRuleContext {
    recordComponent(i) {
        if (i === undefined) {
            return this.getRuleContexts(RecordComponentContext);
        }
        else {
            return this.getRuleContext(i, RecordComponentContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_recordComponentList; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordComponentList) {
            listener.enterRecordComponentList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordComponentList) {
            listener.exitRecordComponentList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordComponentList) {
            return visitor.visitRecordComponentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordComponentListContext = RecordComponentListContext;
class RecordComponentContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_recordComponent; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordComponent) {
            listener.enterRecordComponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordComponent) {
            listener.exitRecordComponent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordComponent) {
            return visitor.visitRecordComponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordComponentContext = RecordComponentContext;
class RecordBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassBodyDeclarationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_recordBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterRecordBody) {
            listener.enterRecordBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRecordBody) {
            listener.exitRecordBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRecordBody) {
            return visitor.visitRecordBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RecordBodyContext = RecordBodyContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class BlockStatementContext extends ParserRuleContext_1.ParserRuleContext {
    localVariableDeclaration() {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    localTypeDeclaration() {
        return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
    }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_blockStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockStatement) {
            listener.enterBlockStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockStatement) {
            listener.exitBlockStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockStatementContext = BlockStatementContext;
class LocalVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    variableDeclarators() {
        return this.tryGetRuleContext(0, VariableDeclaratorsContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_localVariableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalVariableDeclaration) {
            listener.enterLocalVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalVariableDeclaration) {
            listener.exitLocalVariableDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalVariableDeclaration) {
            return visitor.visitLocalVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    MODULE() { return this.tryGetToken(JavaParser.MODULE, 0); }
    OPEN() { return this.tryGetToken(JavaParser.OPEN, 0); }
    REQUIRES() { return this.tryGetToken(JavaParser.REQUIRES, 0); }
    EXPORTS() { return this.tryGetToken(JavaParser.EXPORTS, 0); }
    OPENS() { return this.tryGetToken(JavaParser.OPENS, 0); }
    TO() { return this.tryGetToken(JavaParser.TO, 0); }
    USES() { return this.tryGetToken(JavaParser.USES, 0); }
    PROVIDES() { return this.tryGetToken(JavaParser.PROVIDES, 0); }
    WITH() { return this.tryGetToken(JavaParser.WITH, 0); }
    TRANSITIVE() { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
    YIELD() { return this.tryGetToken(JavaParser.YIELD, 0); }
    SEALED() { return this.tryGetToken(JavaParser.SEALED, 0); }
    PERMITS() { return this.tryGetToken(JavaParser.PERMITS, 0); }
    RECORD() { return this.tryGetToken(JavaParser.RECORD, 0); }
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class TypeIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    MODULE() { return this.tryGetToken(JavaParser.MODULE, 0); }
    OPEN() { return this.tryGetToken(JavaParser.OPEN, 0); }
    REQUIRES() { return this.tryGetToken(JavaParser.REQUIRES, 0); }
    EXPORTS() { return this.tryGetToken(JavaParser.EXPORTS, 0); }
    OPENS() { return this.tryGetToken(JavaParser.OPENS, 0); }
    TO() { return this.tryGetToken(JavaParser.TO, 0); }
    USES() { return this.tryGetToken(JavaParser.USES, 0); }
    PROVIDES() { return this.tryGetToken(JavaParser.PROVIDES, 0); }
    WITH() { return this.tryGetToken(JavaParser.WITH, 0); }
    TRANSITIVE() { return this.tryGetToken(JavaParser.TRANSITIVE, 0); }
    SEALED() { return this.tryGetToken(JavaParser.SEALED, 0); }
    PERMITS() { return this.tryGetToken(JavaParser.PERMITS, 0); }
    RECORD() { return this.tryGetToken(JavaParser.RECORD, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeIdentifier) {
            listener.enterTypeIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeIdentifier) {
            listener.exitTypeIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeIdentifier) {
            return visitor.visitTypeIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeIdentifierContext = TypeIdentifierContext;
class LocalTypeDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.tryGetRuleContext(0, InterfaceDeclarationContext);
    }
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
    }
    classOrInterfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }
        else {
            return this.getRuleContext(i, ClassOrInterfaceModifierContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_localTypeDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalTypeDeclaration) {
            listener.enterLocalTypeDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalTypeDeclaration) {
            listener.exitLocalTypeDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalTypeDeclaration) {
            return visitor.visitLocalTypeDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalTypeDeclarationContext = LocalTypeDeclarationContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    ASSERT() { return this.tryGetToken(JavaParser.ASSERT, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    COLON() { return this.tryGetToken(JavaParser.COLON, 0); }
    IF() { return this.tryGetToken(JavaParser.IF, 0); }
    parExpression() {
        return this.tryGetRuleContext(0, ParExpressionContext);
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    ELSE() { return this.tryGetToken(JavaParser.ELSE, 0); }
    FOR() { return this.tryGetToken(JavaParser.FOR, 0); }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    forControl() {
        return this.tryGetRuleContext(0, ForControlContext);
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    WHILE() { return this.tryGetToken(JavaParser.WHILE, 0); }
    DO() { return this.tryGetToken(JavaParser.DO, 0); }
    TRY() { return this.tryGetToken(JavaParser.TRY, 0); }
    finallyBlock() {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    }
    catchClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        else {
            return this.getRuleContext(i, CatchClauseContext);
        }
    }
    resourceSpecification() {
        return this.tryGetRuleContext(0, ResourceSpecificationContext);
    }
    SWITCH() { return this.tryGetToken(JavaParser.SWITCH, 0); }
    LBRACE() { return this.tryGetToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.tryGetToken(JavaParser.RBRACE, 0); }
    switchBlockStatementGroup(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }
        else {
            return this.getRuleContext(i, SwitchBlockStatementGroupContext);
        }
    }
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    }
    SYNCHRONIZED() { return this.tryGetToken(JavaParser.SYNCHRONIZED, 0); }
    RETURN() { return this.tryGetToken(JavaParser.RETURN, 0); }
    THROW() { return this.tryGetToken(JavaParser.THROW, 0); }
    BREAK() { return this.tryGetToken(JavaParser.BREAK, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    CONTINUE() { return this.tryGetToken(JavaParser.CONTINUE, 0); }
    YIELD() { return this.tryGetToken(JavaParser.YIELD, 0); }
    switchExpression() {
        return this.tryGetRuleContext(0, SwitchExpressionContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class CatchClauseContext extends ParserRuleContext_1.ParserRuleContext {
    CATCH() { return this.getToken(JavaParser.CATCH, 0); }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    catchType() {
        return this.getRuleContext(0, CatchTypeContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_catchClause; }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchClause) {
            listener.enterCatchClause(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchClause) {
            listener.exitCatchClause(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchClause) {
            return visitor.visitCatchClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchClauseContext = CatchClauseContext;
class CatchTypeContext extends ParserRuleContext_1.ParserRuleContext {
    qualifiedName(i) {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }
        else {
            return this.getRuleContext(i, QualifiedNameContext);
        }
    }
    BITOR(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITOR);
        }
        else {
            return this.getToken(JavaParser.BITOR, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_catchType; }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchType) {
            listener.enterCatchType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchType) {
            listener.exitCatchType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchType) {
            return visitor.visitCatchType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchTypeContext = CatchTypeContext;
class FinallyBlockContext extends ParserRuleContext_1.ParserRuleContext {
    FINALLY() { return this.getToken(JavaParser.FINALLY, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_finallyBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterFinallyBlock) {
            listener.enterFinallyBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFinallyBlock) {
            listener.exitFinallyBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FinallyBlockContext = FinallyBlockContext;
class ResourceSpecificationContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    resources() {
        return this.getRuleContext(0, ResourcesContext);
    }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    SEMI() { return this.tryGetToken(JavaParser.SEMI, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resourceSpecification; }
    // @Override
    enterRule(listener) {
        if (listener.enterResourceSpecification) {
            listener.enterResourceSpecification(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResourceSpecification) {
            listener.exitResourceSpecification(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResourceSpecification) {
            return visitor.visitResourceSpecification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourceSpecificationContext = ResourceSpecificationContext;
class ResourcesContext extends ParserRuleContext_1.ParserRuleContext {
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        else {
            return this.getRuleContext(i, ResourceContext);
        }
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resources; }
    // @Override
    enterRule(listener) {
        if (listener.enterResources) {
            listener.enterResources(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResources) {
            listener.exitResources(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResources) {
            return visitor.visitResources(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourcesContext = ResourcesContext;
class ResourceContext extends ParserRuleContext_1.ParserRuleContext {
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    variableDeclaratorId() {
        return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
    }
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_resource; }
    // @Override
    enterRule(listener) {
        if (listener.enterResource) {
            listener.enterResource(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitResource) {
            listener.exitResource(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitResource) {
            return visitor.visitResource(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ResourceContext = ResourceContext;
class SwitchBlockStatementGroupContext extends ParserRuleContext_1.ParserRuleContext {
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabelContext);
        }
    }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchBlockStatementGroup; }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchBlockStatementGroup) {
            listener.enterSwitchBlockStatementGroup(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchBlockStatementGroup) {
            listener.exitSwitchBlockStatementGroup(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchBlockStatementGroup) {
            return visitor.visitSwitchBlockStatementGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;
class SwitchLabelContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CASE() { return this.tryGetToken(JavaParser.CASE, 0); }
    COLON() { return this.getToken(JavaParser.COLON, 0); }
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    IDENTIFIER() { return this.tryGetToken(JavaParser.IDENTIFIER, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    DEFAULT() { return this.tryGetToken(JavaParser.DEFAULT, 0); }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchLabel; }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchLabel) {
            listener.enterSwitchLabel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchLabel) {
            listener.exitSwitchLabel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchLabel) {
            return visitor.visitSwitchLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchLabelContext = SwitchLabelContext;
class ForControlContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enhancedForControl() {
        return this.tryGetRuleContext(0, EnhancedForControlContext);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.SEMI);
        }
        else {
            return this.getToken(JavaParser.SEMI, i);
        }
    }
    forInit() {
        return this.tryGetRuleContext(0, ForInitContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_forControl; }
    // @Override
    enterRule(listener) {
        if (listener.enterForControl) {
            listener.enterForControl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForControl) {
            listener.exitForControl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForControl) {
            return visitor.visitForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForControlContext = ForControlContext;
class ForInitContext extends ParserRuleContext_1.ParserRuleContext {
    localVariableDeclaration() {
        return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
    }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_forInit; }
    // @Override
    enterRule(listener) {
        if (listener.enterForInit) {
            listener.enterForInit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForInit) {
            listener.exitForInit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForInit) {
            return visitor.visitForInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForInitContext = ForInitContext;
class EnhancedForControlContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    COLON() { return this.getToken(JavaParser.COLON, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_enhancedForControl; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnhancedForControl) {
            listener.enterEnhancedForControl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnhancedForControl) {
            listener.exitEnhancedForControl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnhancedForControl) {
            return visitor.visitEnhancedForControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnhancedForControlContext = EnhancedForControlContext;
class ParExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_parExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterParExpression) {
            listener.enterParExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParExpression) {
            listener.exitParExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParExpression) {
            return visitor.visitParExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParExpressionContext = ParExpressionContext;
class ExpressionListContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_expressionList; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionList) {
            listener.enterExpressionList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionList) {
            listener.exitExpressionList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionList) {
            return visitor.visitExpressionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionListContext = ExpressionListContext;
class MethodCallContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_methodCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterMethodCall) {
            listener.enterMethodCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMethodCall) {
            listener.exitMethodCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMethodCall) {
            return visitor.visitMethodCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MethodCallContext = MethodCallContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary() {
        return this.tryGetRuleContext(0, PrimaryContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    methodCall() {
        return this.tryGetRuleContext(0, MethodCallContext);
    }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    NEW() { return this.tryGetToken(JavaParser.NEW, 0); }
    innerCreator() {
        return this.tryGetRuleContext(0, InnerCreatorContext);
    }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    superSuffix() {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    }
    explicitGenericInvocation() {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
    }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    LBRACK() { return this.tryGetToken(JavaParser.LBRACK, 0); }
    RBRACK() { return this.tryGetToken(JavaParser.RBRACK, 0); }
    creator() {
        return this.tryGetRuleContext(0, CreatorContext);
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    BITAND(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.BITAND);
        }
        else {
            return this.getToken(JavaParser.BITAND, i);
        }
    }
    INC() { return this.tryGetToken(JavaParser.INC, 0); }
    DEC() { return this.tryGetToken(JavaParser.DEC, 0); }
    ADD() { return this.tryGetToken(JavaParser.ADD, 0); }
    SUB() { return this.tryGetToken(JavaParser.SUB, 0); }
    TILDE() { return this.tryGetToken(JavaParser.TILDE, 0); }
    BANG() { return this.tryGetToken(JavaParser.BANG, 0); }
    MUL() { return this.tryGetToken(JavaParser.MUL, 0); }
    DIV() { return this.tryGetToken(JavaParser.DIV, 0); }
    MOD() { return this.tryGetToken(JavaParser.MOD, 0); }
    LT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LT);
        }
        else {
            return this.getToken(JavaParser.LT, i);
        }
    }
    GT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.GT);
        }
        else {
            return this.getToken(JavaParser.GT, i);
        }
    }
    LE() { return this.tryGetToken(JavaParser.LE, 0); }
    GE() { return this.tryGetToken(JavaParser.GE, 0); }
    INSTANCEOF() { return this.tryGetToken(JavaParser.INSTANCEOF, 0); }
    pattern() {
        return this.tryGetRuleContext(0, PatternContext);
    }
    EQUAL() { return this.tryGetToken(JavaParser.EQUAL, 0); }
    NOTEQUAL() { return this.tryGetToken(JavaParser.NOTEQUAL, 0); }
    CARET() { return this.tryGetToken(JavaParser.CARET, 0); }
    BITOR() { return this.tryGetToken(JavaParser.BITOR, 0); }
    AND() { return this.tryGetToken(JavaParser.AND, 0); }
    OR() { return this.tryGetToken(JavaParser.OR, 0); }
    COLON() { return this.tryGetToken(JavaParser.COLON, 0); }
    QUESTION() { return this.tryGetToken(JavaParser.QUESTION, 0); }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    ADD_ASSIGN() { return this.tryGetToken(JavaParser.ADD_ASSIGN, 0); }
    SUB_ASSIGN() { return this.tryGetToken(JavaParser.SUB_ASSIGN, 0); }
    MUL_ASSIGN() { return this.tryGetToken(JavaParser.MUL_ASSIGN, 0); }
    DIV_ASSIGN() { return this.tryGetToken(JavaParser.DIV_ASSIGN, 0); }
    AND_ASSIGN() { return this.tryGetToken(JavaParser.AND_ASSIGN, 0); }
    OR_ASSIGN() { return this.tryGetToken(JavaParser.OR_ASSIGN, 0); }
    XOR_ASSIGN() { return this.tryGetToken(JavaParser.XOR_ASSIGN, 0); }
    RSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.RSHIFT_ASSIGN, 0); }
    URSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.URSHIFT_ASSIGN, 0); }
    LSHIFT_ASSIGN() { return this.tryGetToken(JavaParser.LSHIFT_ASSIGN, 0); }
    MOD_ASSIGN() { return this.tryGetToken(JavaParser.MOD_ASSIGN, 0); }
    lambdaExpression() {
        return this.tryGetRuleContext(0, LambdaExpressionContext);
    }
    switchExpression() {
        return this.tryGetRuleContext(0, SwitchExpressionContext);
    }
    COLONCOLON() { return this.tryGetToken(JavaParser.COLONCOLON, 0); }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    classType() {
        return this.tryGetRuleContext(0, ClassTypeContext);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class PatternContext extends ParserRuleContext_1.ParserRuleContext {
    typeType() {
        return this.getRuleContext(0, TypeTypeContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_pattern; }
    // @Override
    enterRule(listener) {
        if (listener.enterPattern) {
            listener.enterPattern(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPattern) {
            listener.exitPattern(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPattern) {
            return visitor.visitPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatternContext = PatternContext;
class LambdaExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaParameters() {
        return this.getRuleContext(0, LambdaParametersContext);
    }
    ARROW() { return this.getToken(JavaParser.ARROW, 0); }
    lambdaBody() {
        return this.getRuleContext(0, LambdaBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaExpression) {
            listener.enterLambdaExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaExpression) {
            listener.exitLambdaExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaExpression) {
            return visitor.visitLambdaExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaExpressionContext = LambdaExpressionContext;
class LambdaParametersContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    formalParameterList() {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    lambdaLVTIList() {
        return this.tryGetRuleContext(0, LambdaLVTIListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaParameters) {
            listener.enterLambdaParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaParameters) {
            listener.exitLambdaParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaParametersContext = LambdaParametersContext;
class LambdaBodyContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_lambdaBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaBody) {
            listener.enterLambdaBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaBody) {
            listener.exitLambdaBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaBody) {
            return visitor.visitLambdaBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaBodyContext = LambdaBodyContext;
class PrimaryContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    THIS() { return this.tryGetToken(JavaParser.THIS, 0); }
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    typeTypeOrVoid() {
        return this.tryGetRuleContext(0, TypeTypeOrVoidContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    CLASS() { return this.tryGetToken(JavaParser.CLASS, 0); }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    explicitGenericInvocationSuffix() {
        return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_primary; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimary) {
            return visitor.visitPrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimaryContext = PrimaryContext;
class SwitchExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    SWITCH() { return this.getToken(JavaParser.SWITCH, 0); }
    parExpression() {
        return this.getRuleContext(0, ParExpressionContext);
    }
    LBRACE() { return this.getToken(JavaParser.LBRACE, 0); }
    RBRACE() { return this.getToken(JavaParser.RBRACE, 0); }
    switchLabeledRule(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabeledRuleContext);
        }
        else {
            return this.getRuleContext(i, SwitchLabeledRuleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchExpression) {
            listener.enterSwitchExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchExpression) {
            listener.exitSwitchExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchExpression) {
            return visitor.visitSwitchExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchExpressionContext = SwitchExpressionContext;
class SwitchLabeledRuleContext extends ParserRuleContext_1.ParserRuleContext {
    CASE() { return this.tryGetToken(JavaParser.CASE, 0); }
    switchRuleOutcome() {
        return this.getRuleContext(0, SwitchRuleOutcomeContext);
    }
    ARROW() { return this.tryGetToken(JavaParser.ARROW, 0); }
    COLON() { return this.tryGetToken(JavaParser.COLON, 0); }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    NULL_LITERAL() { return this.tryGetToken(JavaParser.NULL_LITERAL, 0); }
    guardedPattern() {
        return this.tryGetRuleContext(0, GuardedPatternContext);
    }
    DEFAULT() { return this.tryGetToken(JavaParser.DEFAULT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchLabeledRule; }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchLabeledRule) {
            listener.enterSwitchLabeledRule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchLabeledRule) {
            listener.exitSwitchLabeledRule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchLabeledRule) {
            return visitor.visitSwitchLabeledRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchLabeledRuleContext = SwitchLabeledRuleContext;
class GuardedPatternContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.tryGetToken(JavaParser.LPAREN, 0); }
    guardedPattern() {
        return this.tryGetRuleContext(0, GuardedPatternContext);
    }
    RPAREN() { return this.tryGetToken(JavaParser.RPAREN, 0); }
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        else {
            return this.getRuleContext(i, VariableModifierContext);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.AND);
        }
        else {
            return this.getToken(JavaParser.AND, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_guardedPattern; }
    // @Override
    enterRule(listener) {
        if (listener.enterGuardedPattern) {
            listener.enterGuardedPattern(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGuardedPattern) {
            listener.exitGuardedPattern(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGuardedPattern) {
            return visitor.visitGuardedPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GuardedPatternContext = GuardedPatternContext;
class SwitchRuleOutcomeContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        else {
            return this.getRuleContext(i, BlockStatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_switchRuleOutcome; }
    // @Override
    enterRule(listener) {
        if (listener.enterSwitchRuleOutcome) {
            listener.enterSwitchRuleOutcome(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSwitchRuleOutcome) {
            listener.exitSwitchRuleOutcome(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchRuleOutcome) {
            return visitor.visitSwitchRuleOutcome(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SwitchRuleOutcomeContext = SwitchRuleOutcomeContext;
class ClassTypeContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classType; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassType) {
            listener.enterClassType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassType) {
            listener.exitClassType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassType) {
            return visitor.visitClassType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassTypeContext = ClassTypeContext;
class CreatorContext extends ParserRuleContext_1.ParserRuleContext {
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    createdName() {
        return this.getRuleContext(0, CreatedNameContext);
    }
    classCreatorRest() {
        return this.tryGetRuleContext(0, ClassCreatorRestContext);
    }
    arrayCreatorRest() {
        return this.tryGetRuleContext(0, ArrayCreatorRestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_creator; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreator) {
            listener.enterCreator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreator) {
            listener.exitCreator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreator) {
            return visitor.visitCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreatorContext = CreatorContext;
class CreatedNameContext extends ParserRuleContext_1.ParserRuleContext {
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    }
    typeArgumentsOrDiamond(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsOrDiamondContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.DOT);
        }
        else {
            return this.getToken(JavaParser.DOT, i);
        }
    }
    primitiveType() {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_createdName; }
    // @Override
    enterRule(listener) {
        if (listener.enterCreatedName) {
            listener.enterCreatedName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCreatedName) {
            listener.exitCreatedName(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCreatedName) {
            return visitor.visitCreatedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CreatedNameContext = CreatedNameContext;
class InnerCreatorContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    classCreatorRest() {
        return this.getRuleContext(0, ClassCreatorRestContext);
    }
    nonWildcardTypeArgumentsOrDiamond() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_innerCreator; }
    // @Override
    enterRule(listener) {
        if (listener.enterInnerCreator) {
            listener.enterInnerCreator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInnerCreator) {
            listener.exitInnerCreator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInnerCreator) {
            return visitor.visitInnerCreator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InnerCreatorContext = InnerCreatorContext;
class ArrayCreatorRestContext extends ParserRuleContext_1.ParserRuleContext {
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    arrayInitializer() {
        return this.tryGetRuleContext(0, ArrayInitializerContext);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arrayCreatorRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterArrayCreatorRest) {
            listener.enterArrayCreatorRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArrayCreatorRest) {
            listener.exitArrayCreatorRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayCreatorRest) {
            return visitor.visitArrayCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArrayCreatorRestContext = ArrayCreatorRestContext;
class ClassCreatorRestContext extends ParserRuleContext_1.ParserRuleContext {
    arguments() {
        return this.getRuleContext(0, ArgumentsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_classCreatorRest; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassCreatorRest) {
            listener.enterClassCreatorRest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassCreatorRest) {
            listener.exitClassCreatorRest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassCreatorRest) {
            return visitor.visitClassCreatorRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassCreatorRestContext = ClassCreatorRestContext;
class ExplicitGenericInvocationContext extends ParserRuleContext_1.ParserRuleContext {
    nonWildcardTypeArguments() {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    explicitGenericInvocationSuffix() {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_explicitGenericInvocation; }
    // @Override
    enterRule(listener) {
        if (listener.enterExplicitGenericInvocation) {
            listener.enterExplicitGenericInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExplicitGenericInvocation) {
            listener.exitExplicitGenericInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExplicitGenericInvocation) {
            return visitor.visitExplicitGenericInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExplicitGenericInvocationContext = ExplicitGenericInvocationContext;
class TypeArgumentsOrDiamondContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.tryGetToken(JavaParser.LT, 0); }
    GT() { return this.tryGetToken(JavaParser.GT, 0); }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArgumentsOrDiamond; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeArgumentsOrDiamond) {
            listener.enterTypeArgumentsOrDiamond(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeArgumentsOrDiamond) {
            listener.exitTypeArgumentsOrDiamond(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArgumentsOrDiamond) {
            return visitor.visitTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentsOrDiamondContext = TypeArgumentsOrDiamondContext;
class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.tryGetToken(JavaParser.LT, 0); }
    GT() { return this.tryGetToken(JavaParser.GT, 0); }
    nonWildcardTypeArguments() {
        return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
    // @Override
    enterRule(listener) {
        if (listener.enterNonWildcardTypeArgumentsOrDiamond) {
            listener.enterNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNonWildcardTypeArgumentsOrDiamond) {
            listener.exitNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
            return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonWildcardTypeArgumentsOrDiamondContext = NonWildcardTypeArgumentsOrDiamondContext;
class NonWildcardTypeArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeList() {
        return this.getRuleContext(0, TypeListContext);
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_nonWildcardTypeArguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterNonWildcardTypeArguments) {
            listener.enterNonWildcardTypeArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNonWildcardTypeArguments) {
            listener.exitNonWildcardTypeArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNonWildcardTypeArguments) {
            return visitor.visitNonWildcardTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NonWildcardTypeArgumentsContext = NonWildcardTypeArgumentsContext;
class TypeListContext extends ParserRuleContext_1.ParserRuleContext {
    typeType(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeTypeContext);
        }
        else {
            return this.getRuleContext(i, TypeTypeContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeList; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeList) {
            listener.enterTypeList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeList) {
            listener.exitTypeList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeListContext = TypeListContext;
class TypeTypeContext extends ParserRuleContext_1.ParserRuleContext {
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    primitiveType() {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.LBRACK);
        }
        else {
            return this.getToken(JavaParser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.RBRACK);
        }
        else {
            return this.getToken(JavaParser.RBRACK, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeType; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeType) {
            listener.enterTypeType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeType) {
            listener.exitTypeType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeType) {
            return visitor.visitTypeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTypeContext = TypeTypeContext;
class PrimitiveTypeContext extends ParserRuleContext_1.ParserRuleContext {
    BOOLEAN() { return this.tryGetToken(JavaParser.BOOLEAN, 0); }
    CHAR() { return this.tryGetToken(JavaParser.CHAR, 0); }
    BYTE() { return this.tryGetToken(JavaParser.BYTE, 0); }
    SHORT() { return this.tryGetToken(JavaParser.SHORT, 0); }
    INT() { return this.tryGetToken(JavaParser.INT, 0); }
    LONG() { return this.tryGetToken(JavaParser.LONG, 0); }
    FLOAT() { return this.tryGetToken(JavaParser.FLOAT, 0); }
    DOUBLE() { return this.tryGetToken(JavaParser.DOUBLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_primitiveType; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimitiveTypeContext = PrimitiveTypeContext;
class TypeArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LT() { return this.getToken(JavaParser.LT, 0); }
    typeArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        else {
            return this.getRuleContext(i, TypeArgumentContext);
        }
    }
    GT() { return this.getToken(JavaParser.GT, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(JavaParser.COMMA);
        }
        else {
            return this.getToken(JavaParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeArguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentsContext = TypeArgumentsContext;
class SuperSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    DOT() { return this.tryGetToken(JavaParser.DOT, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_superSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterSuperSuffix) {
            listener.enterSuperSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSuperSuffix) {
            listener.exitSuperSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSuperSuffix) {
            return visitor.visitSuperSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SuperSuffixContext = SuperSuffixContext;
class ExplicitGenericInvocationSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    SUPER() { return this.tryGetToken(JavaParser.SUPER, 0); }
    superSuffix() {
        return this.tryGetRuleContext(0, SuperSuffixContext);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    arguments() {
        return this.tryGetRuleContext(0, ArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_explicitGenericInvocationSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterExplicitGenericInvocationSuffix) {
            listener.enterExplicitGenericInvocationSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExplicitGenericInvocationSuffix) {
            listener.exitExplicitGenericInvocationSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExplicitGenericInvocationSuffix) {
            return visitor.visitExplicitGenericInvocationSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExplicitGenericInvocationSuffixContext = ExplicitGenericInvocationSuffixContext;
class ArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(JavaParser.LPAREN, 0); }
    RPAREN() { return this.getToken(JavaParser.RPAREN, 0); }
    expressionList() {
        return this.tryGetRuleContext(0, ExpressionListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_arguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgumentsContext = ArgumentsContext;
