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
exports.ReceiverParameterContext = exports.FormalParametersContext = exports.QualifiedNameListContext = exports.TypeArgumentContext = exports.TypeRefContext = exports.ClassOrInterfaceTypeContext = exports.ArrayInitializerContext = exports.VariableInitializerContext = exports.VariableDeclaratorIdContext = exports.VariableDeclaratorContext = exports.VariableDeclaratorsContext = exports.InterfaceCommonBodyDeclarationContext = exports.GenericInterfaceMethodDeclarationContext = exports.InterfaceMethodModifierContext = exports.InterfaceMethodDeclarationContext = exports.ConstantDeclaratorContext = exports.ConstDeclarationContext = exports.InterfaceMemberDeclarationContext = exports.InterfaceBodyDeclarationContext = exports.FieldDeclarationContext = exports.ConstructorDeclarationContext = exports.GenericConstructorDeclarationContext = exports.GenericMethodDeclarationContext = exports.TypeTypeOrVoidContext = exports.MethodBodyContext = exports.MethodDeclarationContext = exports.MemberDeclarationContext = exports.ClassBodyDeclarationContext = exports.InterfaceBodyContext = exports.ClassBodyContext = exports.InterfaceDeclarationContext = exports.EnumBodyDeclarationsContext = exports.EnumConstantContext = exports.EnumConstantsContext = exports.EnumDeclarationContext = exports.TypeBoundContext = exports.TypeParameterContext = exports.TypeParametersContext = exports.ClassDeclarationContext = exports.PermitsListContext = exports.ImplementsListContext = exports.ExtendsListContext = exports.VariableModifierContext = exports.ClassOrInterfaceModifierContext = exports.ModifierContext = exports.TypeDeclarationContext = exports.ImportDeclarationContext = exports.PackageDeclarationContext = exports.CompilationUnitContext = exports.JavaParser = void 0;
exports.ParExpressionContext = exports.EnhancedForControlContext = exports.ForInitContext = exports.ForControlContext = exports.SwitchLabelContext = exports.SwitchBlockStatementGroupContext = exports.ResourceContext = exports.ResourcesContext = exports.ResourceSpecificationContext = exports.FinallyBlockContext = exports.CatchTypeContext = exports.CatchClauseContext = exports.StatementContext = exports.LocalTypeDeclarationContext = exports.IdentifierContext = exports.LocalVariableDeclarationContext = exports.BlockStatementContext = exports.BlockContext = exports.RecordBodyContext = exports.RecordComponentContext = exports.RecordComponentListContext = exports.RecordHeaderContext = exports.RecordDeclarationContext = exports.RequiresModifierContext = exports.ModuleDirectiveContext = exports.ModuleBodyContext = exports.ModuleDeclarationContext = exports.DefaultValueContext = exports.AnnotationConstantRestContext = exports.AnnotationMethodRestContext = exports.AnnotationMethodOrConstantRestContext = exports.AnnotationTypeElementRestContext = exports.AnnotationTypeElementDeclarationContext = exports.AnnotationTypeBodyContext = exports.AnnotationTypeDeclarationContext = exports.ElementValueArrayInitializerContext = exports.ElementValueContext = exports.ElementValuePairContext = exports.ElementValuePairsContext = exports.AnnotationContext = exports.AltAnnotationQualifiedNameContext = exports.FloatLiteralContext = exports.IntegerLiteralContext = exports.LiteralContext = exports.QualifiedNameContext = exports.LambdaLVTIParameterContext = exports.LambdaLVTIListContext = exports.LastFormalParameterContext = exports.FormalParameterContext = exports.FormalParameterListContext = void 0;
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
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 672;
                this.typeRef();
                this.state = 677;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 673;
                                this.match(JavaParser.DOT);
                                this.state = 674;
                                this.typeRef();
                            }
                        }
                    }
                    this.state = 679;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
    typeRef() {
        let _localctx = new TypeRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaParser.RULE_typeRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this.identifier();
                this.state = 682;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 681;
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
        this.enterRule(_localctx, 90, JavaParser.RULE_typeArgument);
        let _la;
        try {
            this.state = 696;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 684;
                        this.typeType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 688;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 685;
                                    this.annotation();
                                }
                            }
                            this.state = 690;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 691;
                        this.match(JavaParser.QUESTION);
                        this.state = 694;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                            {
                                this.state = 692;
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
                                this.state = 693;
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
        this.enterRule(_localctx, 92, JavaParser.RULE_qualifiedNameList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 698;
                this.qualifiedName();
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 699;
                            this.match(JavaParser.COMMA);
                            this.state = 700;
                            this.qualifiedName();
                        }
                    }
                    this.state = 705;
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
        this.enterRule(_localctx, 94, JavaParser.RULE_formalParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 706;
                this.match(JavaParser.LPAREN);
                this.state = 718;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 708;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 707;
                                    this.receiverParameter();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 710;
                            this.receiverParameter();
                            this.state = 713;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.COMMA) {
                                {
                                    this.state = 711;
                                    this.match(JavaParser.COMMA);
                                    this.state = 712;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 716;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 715;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                }
                this.state = 720;
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
        this.enterRule(_localctx, 96, JavaParser.RULE_receiverParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 722;
                this.typeType();
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 723;
                            this.identifier();
                            this.state = 724;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 730;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 731;
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
        this.enterRule(_localctx, 98, JavaParser.RULE_formalParameterList);
        let _la;
        try {
            let _alt;
            this.state = 746;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 733;
                        this.formalParameter();
                        this.state = 738;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 734;
                                        this.match(JavaParser.COMMA);
                                        this.state = 735;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 740;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                        }
                        this.state = 743;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 741;
                                this.match(JavaParser.COMMA);
                                this.state = 742;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 745;
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
        this.enterRule(_localctx, 100, JavaParser.RULE_formalParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 751;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 748;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 753;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
                }
                this.state = 754;
                this.typeType();
                this.state = 755;
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
        this.enterRule(_localctx, 102, JavaParser.RULE_lastFormalParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 757;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 762;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
                this.state = 763;
                this.typeType();
                this.state = 767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 764;
                            this.annotation();
                        }
                    }
                    this.state = 769;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 770;
                this.match(JavaParser.ELLIPSIS);
                this.state = 771;
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
        this.enterRule(_localctx, 104, JavaParser.RULE_lambdaLVTIList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 773;
                this.lambdaLVTIParameter();
                this.state = 778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 774;
                            this.match(JavaParser.COMMA);
                            this.state = 775;
                            this.lambdaLVTIParameter();
                        }
                    }
                    this.state = 780;
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
        this.enterRule(_localctx, 106, JavaParser.RULE_lambdaLVTIParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 784;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 781;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 786;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
                }
                this.state = 787;
                this.match(JavaParser.VAR);
                this.state = 788;
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
        this.enterRule(_localctx, 108, JavaParser.RULE_qualifiedName);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 790;
                this.identifier();
                this.state = 795;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 791;
                                this.match(JavaParser.DOT);
                                this.state = 792;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 797;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
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
        this.enterRule(_localctx, 110, JavaParser.RULE_literal);
        try {
            this.state = 805;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 798;
                        this.integerLiteral();
                    }
                    break;
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 799;
                        this.floatLiteral();
                    }
                    break;
                case JavaParser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 800;
                        this.match(JavaParser.CHAR_LITERAL);
                    }
                    break;
                case JavaParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 801;
                        this.match(JavaParser.STRING_LITERAL);
                    }
                    break;
                case JavaParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 802;
                        this.match(JavaParser.BOOL_LITERAL);
                    }
                    break;
                case JavaParser.NULL_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 803;
                        this.match(JavaParser.NULL_LITERAL);
                    }
                    break;
                case JavaParser.TEXT_BLOCK:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 804;
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
        this.enterRule(_localctx, 112, JavaParser.RULE_integerLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 807;
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
        this.enterRule(_localctx, 114, JavaParser.RULE_floatLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 809;
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
        this.enterRule(_localctx, 116, JavaParser.RULE_altAnnotationQualifiedName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 811;
                            this.identifier();
                            this.state = 812;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 818;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 819;
                this.match(JavaParser.AT);
                this.state = 820;
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
        this.enterRule(_localctx, 118, JavaParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 825;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                    case 1:
                        {
                            this.state = 822;
                            this.match(JavaParser.AT);
                            this.state = 823;
                            this.qualifiedName();
                        }
                        break;
                    case 2:
                        {
                            this.state = 824;
                            this.altAnnotationQualifiedName();
                        }
                        break;
                }
                this.state = 833;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 827;
                        this.match(JavaParser.LPAREN);
                        this.state = 830;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                            case 1:
                                {
                                    this.state = 828;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 829;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 832;
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
        this.enterRule(_localctx, 120, JavaParser.RULE_elementValuePairs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 835;
                this.elementValuePair();
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 836;
                            this.match(JavaParser.COMMA);
                            this.state = 837;
                            this.elementValuePair();
                        }
                    }
                    this.state = 842;
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
        this.enterRule(_localctx, 122, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 843;
                this.identifier();
                this.state = 844;
                this.match(JavaParser.ASSIGN);
                this.state = 845;
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
        this.enterRule(_localctx, 124, JavaParser.RULE_elementValue);
        try {
            this.state = 850;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 847;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 848;
                        this.annotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 849;
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
        this.enterRule(_localctx, 126, JavaParser.RULE_elementValueArrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 852;
                this.match(JavaParser.LBRACE);
                this.state = 861;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LBRACE - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 853;
                        this.elementValue();
                        this.state = 858;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 854;
                                        this.match(JavaParser.COMMA);
                                        this.state = 855;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 860;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                        }
                    }
                }
                this.state = 864;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 863;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 866;
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
        this.enterRule(_localctx, 128, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 868;
                this.match(JavaParser.AT);
                this.state = 869;
                this.match(JavaParser.INTERFACE);
                this.state = 870;
                this.identifier();
                this.state = 871;
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
        this.enterRule(_localctx, 130, JavaParser.RULE_annotationTypeBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 873;
                this.match(JavaParser.LBRACE);
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 874;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 879;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 880;
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
        this.enterRule(_localctx, 132, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let _alt;
            this.state = 890;
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
                        this.state = 885;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 882;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 887;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
                        }
                        this.state = 888;
                        this.annotationTypeElementRest();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 889;
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
        this.enterRule(_localctx, 134, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 916;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 892;
                        this.typeType();
                        this.state = 893;
                        this.annotationMethodOrConstantRest();
                        this.state = 894;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 896;
                        this.classDeclaration();
                        this.state = 898;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
                            case 1:
                                {
                                    this.state = 897;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 900;
                        this.interfaceDeclaration();
                        this.state = 902;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 901;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 904;
                        this.enumDeclaration();
                        this.state = 906;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 905;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 908;
                        this.annotationTypeDeclaration();
                        this.state = 910;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                            case 1:
                                {
                                    this.state = 909;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 912;
                        this.recordDeclaration();
                        this.state = 914;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 913;
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
        this.enterRule(_localctx, 136, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 920;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 918;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 919;
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
        this.enterRule(_localctx, 138, JavaParser.RULE_annotationMethodRest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 922;
                this.identifier();
                this.state = 923;
                this.match(JavaParser.LPAREN);
                this.state = 924;
                this.match(JavaParser.RPAREN);
                this.state = 926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 925;
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
        this.enterRule(_localctx, 140, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 928;
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
        this.enterRule(_localctx, 142, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                this.match(JavaParser.DEFAULT);
                this.state = 931;
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
        this.enterRule(_localctx, 144, JavaParser.RULE_moduleDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 934;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.OPEN) {
                    {
                        this.state = 933;
                        this.match(JavaParser.OPEN);
                    }
                }
                this.state = 936;
                this.match(JavaParser.MODULE);
                this.state = 937;
                this.qualifiedName();
                this.state = 938;
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
        this.enterRule(_localctx, 146, JavaParser.RULE_moduleBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 940;
                this.match(JavaParser.LBRACE);
                this.state = 944;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaParser.REQUIRES - 53)) | (1 << (JavaParser.EXPORTS - 53)) | (1 << (JavaParser.OPENS - 53)) | (1 << (JavaParser.USES - 53)) | (1 << (JavaParser.PROVIDES - 53)))) !== 0)) {
                    {
                        {
                            this.state = 941;
                            this.moduleDirective();
                        }
                    }
                    this.state = 946;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 947;
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
        this.enterRule(_localctx, 148, JavaParser.RULE_moduleDirective);
        let _la;
        try {
            let _alt;
            this.state = 985;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.REQUIRES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 949;
                        this.match(JavaParser.REQUIRES);
                        this.state = 953;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 950;
                                        this.requiresModifier();
                                    }
                                }
                            }
                            this.state = 955;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
                        }
                        this.state = 956;
                        this.qualifiedName();
                        this.state = 957;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.EXPORTS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 959;
                        this.match(JavaParser.EXPORTS);
                        this.state = 960;
                        this.qualifiedName();
                        this.state = 963;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 961;
                                this.match(JavaParser.TO);
                                this.state = 962;
                                this.qualifiedName();
                            }
                        }
                        this.state = 965;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.OPENS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 967;
                        this.match(JavaParser.OPENS);
                        this.state = 968;
                        this.qualifiedName();
                        this.state = 971;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 969;
                                this.match(JavaParser.TO);
                                this.state = 970;
                                this.qualifiedName();
                            }
                        }
                        this.state = 973;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.USES:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 975;
                        this.match(JavaParser.USES);
                        this.state = 976;
                        this.qualifiedName();
                        this.state = 977;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.PROVIDES:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 979;
                        this.match(JavaParser.PROVIDES);
                        this.state = 980;
                        this.qualifiedName();
                        this.state = 981;
                        this.match(JavaParser.WITH);
                        this.state = 982;
                        this.qualifiedName();
                        this.state = 983;
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
        this.enterRule(_localctx, 150, JavaParser.RULE_requiresModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 987;
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
        this.enterRule(_localctx, 152, JavaParser.RULE_recordDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 989;
                this.match(JavaParser.RECORD);
                this.state = 990;
                this.identifier();
                this.state = 992;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 991;
                        this.typeParameters();
                    }
                }
                this.state = 994;
                this.recordHeader();
                this.state = 996;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 995;
                        this.implementsList();
                    }
                }
                this.state = 998;
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
        this.enterRule(_localctx, 154, JavaParser.RULE_recordHeader);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1000;
                this.match(JavaParser.LPAREN);
                this.state = 1002;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 1001;
                        this.recordComponentList();
                    }
                }
                this.state = 1004;
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
        this.enterRule(_localctx, 156, JavaParser.RULE_recordComponentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1006;
                this.recordComponent();
                this.state = 1011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1007;
                            this.match(JavaParser.COMMA);
                            this.state = 1008;
                            this.recordComponent();
                        }
                    }
                    this.state = 1013;
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
        this.enterRule(_localctx, 158, JavaParser.RULE_recordComponent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1014;
                this.typeType();
                this.state = 1015;
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
        this.enterRule(_localctx, 160, JavaParser.RULE_recordBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1017;
                this.match(JavaParser.LBRACE);
                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 1018;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 1023;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1024;
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
        this.enterRule(_localctx, 162, JavaParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1026;
                this.match(JavaParser.LBRACE);
                this.state = 1030;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                    {
                        {
                            this.state = 1027;
                            this.blockStatement();
                        }
                    }
                    this.state = 1032;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1033;
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
        this.enterRule(_localctx, 164, JavaParser.RULE_blockStatement);
        try {
            this.state = 1040;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1035;
                        this.localVariableDeclaration();
                        this.state = 1036;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1038;
                        this.localTypeDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1039;
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
        this.enterRule(_localctx, 166, JavaParser.RULE_localVariableDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1045;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1042;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1047;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
                }
                this.state = 1056;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 118, this._ctx)) {
                    case 1:
                        {
                            this.state = 1048;
                            this.match(JavaParser.VAR);
                            this.state = 1049;
                            this.identifier();
                            this.state = 1050;
                            this.match(JavaParser.ASSIGN);
                            this.state = 1051;
                            this.expression(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1053;
                            this.typeType();
                            this.state = 1054;
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
        this.enterRule(_localctx, 168, JavaParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1058;
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
    localTypeDeclaration() {
        let _localctx = new LocalTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JavaParser.RULE_localTypeDeclaration);
        try {
            let _alt;
            this.state = 1072;
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
                        this.state = 1063;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1060;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 1065;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
                        }
                        this.state = 1069;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 1066;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 1067;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.RECORD:
                                {
                                    this.state = 1068;
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
                        this.state = 1071;
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
            this.state = 1187;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1074;
                        _localctx._blockLabel = this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1075;
                        this.match(JavaParser.ASSERT);
                        this.state = 1076;
                        this.expression(0);
                        this.state = 1079;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COLON) {
                            {
                                this.state = 1077;
                                this.match(JavaParser.COLON);
                                this.state = 1078;
                                this.expression(0);
                            }
                        }
                        this.state = 1081;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1083;
                        this.match(JavaParser.IF);
                        this.state = 1084;
                        this.parExpression();
                        this.state = 1085;
                        this.statement();
                        this.state = 1088;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 123, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1086;
                                    this.match(JavaParser.ELSE);
                                    this.state = 1087;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1090;
                        this.match(JavaParser.FOR);
                        this.state = 1091;
                        this.match(JavaParser.LPAREN);
                        this.state = 1092;
                        this.forControl();
                        this.state = 1093;
                        this.match(JavaParser.RPAREN);
                        this.state = 1094;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1096;
                        this.match(JavaParser.WHILE);
                        this.state = 1097;
                        this.parExpression();
                        this.state = 1098;
                        this.statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1100;
                        this.match(JavaParser.DO);
                        this.state = 1101;
                        this.statement();
                        this.state = 1102;
                        this.match(JavaParser.WHILE);
                        this.state = 1103;
                        this.parExpression();
                        this.state = 1104;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1106;
                        this.match(JavaParser.TRY);
                        this.state = 1107;
                        this.block();
                        this.state = 1117;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CATCH:
                                {
                                    this.state = 1109;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1108;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 1111;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === JavaParser.CATCH);
                                    this.state = 1114;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.FINALLY) {
                                        {
                                            this.state = 1113;
                                            this.finallyBlock();
                                        }
                                    }
                                }
                                break;
                            case JavaParser.FINALLY:
                                {
                                    this.state = 1116;
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
                        this.state = 1119;
                        this.match(JavaParser.TRY);
                        this.state = 1120;
                        this.resourceSpecification();
                        this.state = 1121;
                        this.block();
                        this.state = 1125;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CATCH) {
                            {
                                {
                                    this.state = 1122;
                                    this.catchClause();
                                }
                            }
                            this.state = 1127;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1129;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINALLY) {
                            {
                                this.state = 1128;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1131;
                        this.match(JavaParser.SWITCH);
                        this.state = 1132;
                        this.parExpression();
                        this.state = 1133;
                        this.match(JavaParser.LBRACE);
                        this.state = 1137;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1134;
                                        this.switchBlockStatementGroup();
                                    }
                                }
                            }
                            this.state = 1139;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                        }
                        this.state = 1143;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                            {
                                {
                                    this.state = 1140;
                                    this.switchLabel();
                                }
                            }
                            this.state = 1145;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1146;
                        this.match(JavaParser.RBRACE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1148;
                        this.match(JavaParser.SYNCHRONIZED);
                        this.state = 1149;
                        this.parExpression();
                        this.state = 1150;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1152;
                        this.match(JavaParser.RETURN);
                        this.state = 1154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1153;
                                this.expression(0);
                            }
                        }
                        this.state = 1156;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1157;
                        this.match(JavaParser.THROW);
                        this.state = 1158;
                        this.expression(0);
                        this.state = 1159;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1161;
                        this.match(JavaParser.BREAK);
                        this.state = 1163;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1162;
                                this.identifier();
                            }
                        }
                        this.state = 1165;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1166;
                        this.match(JavaParser.CONTINUE);
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
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1171;
                        this.match(JavaParser.YIELD);
                        this.state = 1172;
                        this.expression(0);
                        this.state = 1173;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1175;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1176;
                        _localctx._statementExpression = this.expression(0);
                        this.state = 1177;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1179;
                        this.switchExpression();
                        this.state = 1181;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1180;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1183;
                        _localctx._identifierLabel = this.identifier();
                        this.state = 1184;
                        this.match(JavaParser.COLON);
                        this.state = 1185;
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
                this.state = 1189;
                this.match(JavaParser.CATCH);
                this.state = 1190;
                this.match(JavaParser.LPAREN);
                this.state = 1194;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1191;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1196;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
                }
                this.state = 1197;
                this.catchType();
                this.state = 1198;
                this.identifier();
                this.state = 1199;
                this.match(JavaParser.RPAREN);
                this.state = 1200;
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
                this.state = 1202;
                this.qualifiedName();
                this.state = 1207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 1203;
                            this.match(JavaParser.BITOR);
                            this.state = 1204;
                            this.qualifiedName();
                        }
                    }
                    this.state = 1209;
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
                this.state = 1210;
                this.match(JavaParser.FINALLY);
                this.state = 1211;
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
                this.state = 1213;
                this.match(JavaParser.LPAREN);
                this.state = 1214;
                this.resources();
                this.state = 1216;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 1215;
                        this.match(JavaParser.SEMI);
                    }
                }
                this.state = 1218;
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
                this.state = 1220;
                this.resource();
                this.state = 1225;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1221;
                                this.match(JavaParser.SEMI);
                                this.state = 1222;
                                this.resource();
                            }
                        }
                    }
                    this.state = 1227;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
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
            this.state = 1245;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1231;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1228;
                                        this.variableModifier();
                                    }
                                }
                            }
                            this.state = 1233;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                        }
                        this.state = 1239;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1234;
                                    this.match(JavaParser.VAR);
                                    this.state = 1235;
                                    this.identifier();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1236;
                                    this.classOrInterfaceType();
                                    this.state = 1237;
                                    this.variableDeclaratorId();
                                }
                                break;
                        }
                        this.state = 1241;
                        this.match(JavaParser.ASSIGN);
                        this.state = 1242;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1244;
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
                this.state = 1248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1247;
                            this.switchLabel();
                        }
                    }
                    this.state = 1250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
                this.state = 1253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1252;
                            this.blockStatement();
                        }
                    }
                    this.state = 1255;
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
            this.state = 1268;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1257;
                        this.match(JavaParser.CASE);
                        this.state = 1263;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 145, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1258;
                                    _localctx._constantExpression = this.expression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1259;
                                    _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1260;
                                    this.typeType();
                                    this.state = 1261;
                                    _localctx._varName = this.identifier();
                                }
                                break;
                        }
                        this.state = 1265;
                        this.match(JavaParser.COLON);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1266;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1267;
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
            this.state = 1282;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1270;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1272;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1271;
                                this.forInit();
                            }
                        }
                        this.state = 1274;
                        this.match(JavaParser.SEMI);
                        this.state = 1276;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1275;
                                this.expression(0);
                            }
                        }
                        this.state = 1278;
                        this.match(JavaParser.SEMI);
                        this.state = 1280;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1279;
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
            this.state = 1286;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1284;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1285;
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
                this.state = 1291;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1288;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1293;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                }
                this.state = 1296;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                    case 1:
                        {
                            this.state = 1294;
                            this.typeType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1295;
                            this.match(JavaParser.VAR);
                        }
                        break;
                }
                this.state = 1298;
                this.variableDeclaratorId();
                this.state = 1299;
                this.match(JavaParser.COLON);
                this.state = 1300;
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
                this.state = 1302;
                this.match(JavaParser.LPAREN);
                this.state = 1303;
                this.expression(0);
                this.state = 1304;
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
                this.state = 1306;
                this.expression(0);
                this.state = 1311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1307;
                            this.match(JavaParser.COMMA);
                            this.state = 1308;
                            this.expression(0);
                        }
                    }
                    this.state = 1313;
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
            this.state = 1333;
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
                        this.state = 1314;
                        this.identifier();
                        this.state = 1315;
                        this.match(JavaParser.LPAREN);
                        this.state = 1317;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1316;
                                this.expressionList();
                            }
                        }
                        this.state = 1319;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.THIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1321;
                        this.match(JavaParser.THIS);
                        this.state = 1322;
                        this.match(JavaParser.LPAREN);
                        this.state = 1324;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1323;
                                this.expressionList();
                            }
                        }
                        this.state = 1326;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1327;
                        this.match(JavaParser.SUPER);
                        this.state = 1328;
                        this.match(JavaParser.LPAREN);
                        this.state = 1330;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1329;
                                this.expressionList();
                            }
                        }
                        this.state = 1332;
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
                this.state = 1380;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 164, this._ctx)) {
                    case 1:
                        {
                            this.state = 1336;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1337;
                            this.methodCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1338;
                            this.match(JavaParser.NEW);
                            this.state = 1339;
                            this.creator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1340;
                            this.match(JavaParser.LPAREN);
                            this.state = 1344;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1341;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1346;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                            }
                            this.state = 1347;
                            this.typeType();
                            this.state = 1352;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.BITAND) {
                                {
                                    {
                                        this.state = 1348;
                                        this.match(JavaParser.BITAND);
                                        this.state = 1349;
                                        this.typeType();
                                    }
                                }
                                this.state = 1354;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1355;
                            this.match(JavaParser.RPAREN);
                            this.state = 1356;
                            this.expression(22);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1358;
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
                            this.state = 1359;
                            this.expression(20);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1360;
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
                            this.state = 1361;
                            this.expression(19);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1362;
                            this.lambdaExpression();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1363;
                            this.switchExpression();
                        }
                        break;
                    case 9:
                        {
                            this.state = 1364;
                            this.typeType();
                            this.state = 1365;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1371;
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
                                        this.state = 1367;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1366;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1369;
                                        this.identifier();
                                    }
                                    break;
                                case JavaParser.NEW:
                                    {
                                        this.state = 1370;
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
                            this.state = 1373;
                            this.classType();
                            this.state = 1374;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1376;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.LT) {
                                {
                                    this.state = 1375;
                                    this.typeArguments();
                                }
                            }
                            this.state = 1378;
                            this.match(JavaParser.NEW);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1465;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1463;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1382;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1383;
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
                                        this.state = 1384;
                                        this.expression(19);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1385;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1386;
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
                                        this.state = 1387;
                                        this.expression(18);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1388;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1396;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1389;
                                                    this.match(JavaParser.LT);
                                                    this.state = 1390;
                                                    this.match(JavaParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1391;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1392;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1393;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1394;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1395;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1398;
                                        this.expression(17);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1399;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1400;
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
                                        this.state = 1401;
                                        this.expression(16);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1402;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1403;
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
                                        this.state = 1404;
                                        this.expression(14);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1405;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1406;
                                        _localctx._bop = this.match(JavaParser.BITAND);
                                        this.state = 1407;
                                        this.expression(13);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1408;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1409;
                                        _localctx._bop = this.match(JavaParser.CARET);
                                        this.state = 1410;
                                        this.expression(12);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1411;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1412;
                                        _localctx._bop = this.match(JavaParser.BITOR);
                                        this.state = 1413;
                                        this.expression(11);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1414;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1415;
                                        _localctx._bop = this.match(JavaParser.AND);
                                        this.state = 1416;
                                        this.expression(10);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1417;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1418;
                                        _localctx._bop = this.match(JavaParser.OR);
                                        this.state = 1419;
                                        this.expression(9);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1420;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1421;
                                        _localctx._bop = this.match(JavaParser.QUESTION);
                                        this.state = 1422;
                                        this.expression(0);
                                        this.state = 1423;
                                        this.match(JavaParser.COLON);
                                        this.state = 1424;
                                        this.expression(7);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1426;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1427;
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
                                        this.state = 1428;
                                        this.expression(6);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1429;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 1430;
                                        _localctx._bop = this.match(JavaParser.DOT);
                                        this.state = 1442;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 167, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1431;
                                                    this.identifier();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1432;
                                                    this.methodCall();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1433;
                                                    this.match(JavaParser.THIS);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1434;
                                                    this.match(JavaParser.NEW);
                                                    this.state = 1436;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === JavaParser.LT) {
                                                        {
                                                            this.state = 1435;
                                                            this.nonWildcardTypeArguments();
                                                        }
                                                    }
                                                    this.state = 1438;
                                                    this.innerCreator();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1439;
                                                    this.match(JavaParser.SUPER);
                                                    this.state = 1440;
                                                    this.superSuffix();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1441;
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
                                        this.state = 1444;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1445;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1446;
                                        this.expression(0);
                                        this.state = 1447;
                                        this.match(JavaParser.RBRACK);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1449;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 1450;
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
                                        this.state = 1451;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1452;
                                        _localctx._bop = this.match(JavaParser.INSTANCEOF);
                                        this.state = 1455;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1453;
                                                    this.typeType();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1454;
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
                                        this.state = 1457;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1458;
                                        this.match(JavaParser.COLONCOLON);
                                        this.state = 1460;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1459;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1462;
                                        this.identifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1467;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
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
                this.state = 1471;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1468;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1473;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                }
                this.state = 1474;
                this.typeType();
                this.state = 1478;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1475;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1480;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                }
                this.state = 1481;
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
                this.state = 1483;
                this.lambdaParameters();
                this.state = 1484;
                this.match(JavaParser.ARROW);
                this.state = 1485;
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
            this.state = 1509;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 177, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1487;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1488;
                        this.match(JavaParser.LPAREN);
                        this.state = 1490;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1489;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1492;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1493;
                        this.match(JavaParser.LPAREN);
                        this.state = 1494;
                        this.identifier();
                        this.state = 1499;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.COMMA) {
                            {
                                {
                                    this.state = 1495;
                                    this.match(JavaParser.COMMA);
                                    this.state = 1496;
                                    this.identifier();
                                }
                            }
                            this.state = 1501;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1502;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1504;
                        this.match(JavaParser.LPAREN);
                        this.state = 1506;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINAL || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1505;
                                this.lambdaLVTIList();
                            }
                        }
                        this.state = 1508;
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
            this.state = 1513;
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
                        this.state = 1511;
                        this.expression(0);
                    }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1512;
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
            this.state = 1533;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1515;
                        this.match(JavaParser.LPAREN);
                        this.state = 1516;
                        this.expression(0);
                        this.state = 1517;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1519;
                        this.match(JavaParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1520;
                        this.match(JavaParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1521;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1522;
                        this.identifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1523;
                        this.typeTypeOrVoid();
                        this.state = 1524;
                        this.match(JavaParser.DOT);
                        this.state = 1525;
                        this.match(JavaParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1527;
                        this.nonWildcardTypeArguments();
                        this.state = 1531;
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
                                    this.state = 1528;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case JavaParser.THIS:
                                {
                                    this.state = 1529;
                                    this.match(JavaParser.THIS);
                                    this.state = 1530;
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
                this.state = 1535;
                this.match(JavaParser.SWITCH);
                this.state = 1536;
                this.parExpression();
                this.state = 1537;
                this.match(JavaParser.LBRACE);
                this.state = 1541;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                    {
                        {
                            this.state = 1538;
                            this.switchLabeledRule();
                        }
                    }
                    this.state = 1543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1544;
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
            this.state = 1557;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1546;
                        this.match(JavaParser.CASE);
                        this.state = 1550;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 182, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1547;
                                    this.expressionList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1548;
                                    this.match(JavaParser.NULL_LITERAL);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1549;
                                    this.guardedPattern(0);
                                }
                                break;
                        }
                        this.state = 1552;
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
                        this.state = 1553;
                        this.switchRuleOutcome();
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1554;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1555;
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
                        this.state = 1556;
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
                this.state = 1585;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.LPAREN:
                        {
                            this.state = 1560;
                            this.match(JavaParser.LPAREN);
                            this.state = 1561;
                            this.guardedPattern(0);
                            this.state = 1562;
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
                            this.state = 1567;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1564;
                                            this.variableModifier();
                                        }
                                    }
                                }
                                this.state = 1569;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 184, this._ctx);
                            }
                            this.state = 1570;
                            this.typeType();
                            this.state = 1574;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1571;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1576;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            }
                            this.state = 1577;
                            this.identifier();
                            this.state = 1582;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1578;
                                            this.match(JavaParser.AND);
                                            this.state = 1579;
                                            this.expression(0);
                                        }
                                    }
                                }
                                this.state = 1584;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1592;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
                                this.state = 1587;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1588;
                                this.match(JavaParser.AND);
                                this.state = 1589;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 1594;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 188, this._ctx);
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
            this.state = 1602;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 190, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1595;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1599;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                            {
                                {
                                    this.state = 1596;
                                    this.blockStatement();
                                }
                            }
                            this.state = 1601;
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
                this.state = 1607;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                    case 1:
                        {
                            this.state = 1604;
                            this.classOrInterfaceType();
                            this.state = 1605;
                            this.match(JavaParser.DOT);
                        }
                        break;
                }
                this.state = 1612;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1609;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1614;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
                }
                this.state = 1615;
                this.identifier();
                this.state = 1617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1616;
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
            this.state = 1628;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1619;
                        this.nonWildcardTypeArguments();
                        this.state = 1620;
                        this.createdName();
                        this.state = 1621;
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
                        this.state = 1623;
                        this.createdName();
                        this.state = 1626;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.LBRACK:
                                {
                                    this.state = 1624;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case JavaParser.LPAREN:
                                {
                                    this.state = 1625;
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
            this.state = 1645;
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
                        this.state = 1630;
                        this.identifier();
                        this.state = 1632;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1631;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1641;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.DOT) {
                            {
                                {
                                    this.state = 1634;
                                    this.match(JavaParser.DOT);
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
                                }
                            }
                            this.state = 1643;
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
                        this.state = 1644;
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
                this.state = 1647;
                this.identifier();
                this.state = 1649;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1648;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1651;
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
                this.state = 1653;
                this.match(JavaParser.LBRACK);
                this.state = 1681;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                        {
                            this.state = 1654;
                            this.match(JavaParser.RBRACK);
                            this.state = 1659;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.LBRACK) {
                                {
                                    {
                                        this.state = 1655;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1656;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                                this.state = 1661;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1662;
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
                            this.state = 1663;
                            this.expression(0);
                            this.state = 1664;
                            this.match(JavaParser.RBRACK);
                            this.state = 1671;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1665;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1666;
                                            this.expression(0);
                                            this.state = 1667;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1673;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 202, this._ctx);
                            }
                            this.state = 1678;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1674;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1675;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1680;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
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
                this.state = 1683;
                this.arguments();
                this.state = 1685;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 205, this._ctx)) {
                    case 1:
                        {
                            this.state = 1684;
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
                this.state = 1687;
                this.nonWildcardTypeArguments();
                this.state = 1688;
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
            this.state = 1693;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1690;
                        this.match(JavaParser.LT);
                        this.state = 1691;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1692;
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
                this.state = 1700;
                this.match(JavaParser.LT);
                this.state = 1701;
                this.typeList();
                this.state = 1702;
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
                this.state = 1704;
                this.typeType();
                this.state = 1709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1705;
                            this.match(JavaParser.COMMA);
                            this.state = 1706;
                            this.typeType();
                        }
                    }
                    this.state = 1711;
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
                this.state = 1715;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1712;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1717;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 209, this._ctx);
                }
                this.state = 1720;
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
                            this.state = 1718;
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
                            this.state = 1719;
                            this.primitiveType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1732;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1725;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                    {
                                        {
                                            this.state = 1722;
                                            this.annotation();
                                        }
                                    }
                                    this.state = 1727;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1728;
                                this.match(JavaParser.LBRACK);
                                this.state = 1729;
                                this.match(JavaParser.RBRACK);
                            }
                        }
                    }
                    this.state = 1734;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
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
                this.state = 1735;
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
                this.state = 1737;
                this.match(JavaParser.LT);
                this.state = 1738;
                this.typeArgument();
                this.state = 1743;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1739;
                            this.match(JavaParser.COMMA);
                            this.state = 1740;
                            this.typeArgument();
                        }
                    }
                    this.state = 1745;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1746;
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
            this.state = 1757;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1748;
                        this.arguments();
                    }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1749;
                        this.match(JavaParser.DOT);
                        this.state = 1751;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1750;
                                this.typeArguments();
                            }
                        }
                        this.state = 1753;
                        this.identifier();
                        this.state = 1755;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 215, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1754;
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
            this.state = 1764;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1759;
                        this.match(JavaParser.SUPER);
                        this.state = 1760;
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
                        this.state = 1761;
                        this.identifier();
                        this.state = 1762;
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
                this.state = 1766;
                this.match(JavaParser.LPAREN);
                this.state = 1768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 1767;
                        this.expressionList();
                    }
                }
                this.state = 1770;
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
JavaParser.RULE_typeRef = 44;
JavaParser.RULE_typeArgument = 45;
JavaParser.RULE_qualifiedNameList = 46;
JavaParser.RULE_formalParameters = 47;
JavaParser.RULE_receiverParameter = 48;
JavaParser.RULE_formalParameterList = 49;
JavaParser.RULE_formalParameter = 50;
JavaParser.RULE_lastFormalParameter = 51;
JavaParser.RULE_lambdaLVTIList = 52;
JavaParser.RULE_lambdaLVTIParameter = 53;
JavaParser.RULE_qualifiedName = 54;
JavaParser.RULE_literal = 55;
JavaParser.RULE_integerLiteral = 56;
JavaParser.RULE_floatLiteral = 57;
JavaParser.RULE_altAnnotationQualifiedName = 58;
JavaParser.RULE_annotation = 59;
JavaParser.RULE_elementValuePairs = 60;
JavaParser.RULE_elementValuePair = 61;
JavaParser.RULE_elementValue = 62;
JavaParser.RULE_elementValueArrayInitializer = 63;
JavaParser.RULE_annotationTypeDeclaration = 64;
JavaParser.RULE_annotationTypeBody = 65;
JavaParser.RULE_annotationTypeElementDeclaration = 66;
JavaParser.RULE_annotationTypeElementRest = 67;
JavaParser.RULE_annotationMethodOrConstantRest = 68;
JavaParser.RULE_annotationMethodRest = 69;
JavaParser.RULE_annotationConstantRest = 70;
JavaParser.RULE_defaultValue = 71;
JavaParser.RULE_moduleDeclaration = 72;
JavaParser.RULE_moduleBody = 73;
JavaParser.RULE_moduleDirective = 74;
JavaParser.RULE_requiresModifier = 75;
JavaParser.RULE_recordDeclaration = 76;
JavaParser.RULE_recordHeader = 77;
JavaParser.RULE_recordComponentList = 78;
JavaParser.RULE_recordComponent = 79;
JavaParser.RULE_recordBody = 80;
JavaParser.RULE_block = 81;
JavaParser.RULE_blockStatement = 82;
JavaParser.RULE_localVariableDeclaration = 83;
JavaParser.RULE_identifier = 84;
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
    "typeRef", "typeArgument", "qualifiedNameList", "formalParameters", "receiverParameter",
    "formalParameterList", "formalParameter", "lastFormalParameter", "lambdaLVTIList",
    "lambdaLVTIParameter", "qualifiedName", "literal", "integerLiteral", "floatLiteral",
    "altAnnotationQualifiedName", "annotation", "elementValuePairs", "elementValuePair",
    "elementValue", "elementValueArrayInitializer", "annotationTypeDeclaration",
    "annotationTypeBody", "annotationTypeElementDeclaration", "annotationTypeElementRest",
    "annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest",
    "defaultValue", "moduleDeclaration", "moduleBody", "moduleDirective",
    "requiresModifier", "recordDeclaration", "recordHeader", "recordComponentList",
    "recordComponent", "recordBody", "block", "blockStatement", "localVariableDeclaration",
    "identifier", "localTypeDeclaration", "statement", "catchClause", "catchType",
    "finallyBlock", "resourceSpecification", "resources", "resource", "switchBlockStatementGroup",
    "switchLabel", "forControl", "forInit", "enhancedForControl", "parExpression",
    "expressionList", "methodCall", "expression", "pattern", "lambdaExpression",
    "lambdaParameters", "lambdaBody", "primary", "switchExpression", "switchLabeledRule",
    "guardedPattern", "switchRuleOutcome", "classType", "creator", "createdName",
    "innerCreator", "arrayCreatorRest", "classCreatorRest", "explicitGenericInvocation",
    "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "nonWildcardTypeArguments",
    "typeList", "typeType", "primitiveType", "typeArguments", "superSuffix",
    "explicitGenericInvocationSuffix", "arguments",
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
JavaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x82\u06EF\x04" +
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
    "\x03-\x03-\x03-\x07-\u02A6\n-\f-\x0E-\u02A9\v-\x03.\x03.\x05.\u02AD\n" +
    ".\x03/\x03/\x07/\u02B1\n/\f/\x0E/\u02B4\v/\x03/\x03/\x03/\x05/\u02B9\n" +
    "/\x05/\u02BB\n/\x030\x030\x030\x070\u02C0\n0\f0\x0E0\u02C3\v0\x031\x03" +
    "1\x051\u02C7\n1\x031\x031\x031\x051\u02CC\n1\x031\x051\u02CF\n1\x051\u02D1" +
    "\n1\x031\x031\x032\x032\x032\x032\x072\u02D9\n2\f2\x0E2\u02DC\v2\x032" +
    "\x032\x033\x033\x033\x073\u02E3\n3\f3\x0E3\u02E6\v3\x033\x033\x053\u02EA" +
    "\n3\x033\x053\u02ED\n3\x034\x074\u02F0\n4\f4\x0E4\u02F3\v4\x034\x034\x03" +
    "4\x035\x075\u02F9\n5\f5\x0E5\u02FC\v5\x035\x035\x075\u0300\n5\f5\x0E5" +
    "\u0303\v5\x035\x035\x035\x036\x036\x036\x076\u030B\n6\f6\x0E6\u030E\v" +
    "6\x037\x077\u0311\n7\f7\x0E7\u0314\v7\x037\x037\x037\x038\x038\x038\x07" +
    "8\u031C\n8\f8\x0E8\u031F\v8\x039\x039\x039\x039\x039\x039\x039\x059\u0328" +
    "\n9\x03:\x03:\x03;\x03;\x03<\x03<\x03<\x07<\u0331\n<\f<\x0E<\u0334\v<" +
    "\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u033C\n=\x03=\x03=\x03=\x05=\u0341" +
    "\n=\x03=\x05=\u0344\n=\x03>\x03>\x03>\x07>\u0349\n>\f>\x0E>\u034C\v>\x03" +
    "?\x03?\x03?\x03?\x03@\x03@\x03@\x05@\u0355\n@\x03A\x03A\x03A\x03A\x07" +
    "A\u035B\nA\fA\x0EA\u035E\vA\x05A\u0360\nA\x03A\x05A\u0363\nA\x03A\x03" +
    "A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x07C\u036E\nC\fC\x0EC\u0371\vC\x03" +
    "C\x03C\x03D\x07D\u0376\nD\fD\x0ED\u0379\vD\x03D\x03D\x05D\u037D\nD\x03" +
    "E\x03E\x03E\x03E\x03E\x03E\x05E\u0385\nE\x03E\x03E\x05E\u0389\nE\x03E" +
    "\x03E\x05E\u038D\nE\x03E\x03E\x05E\u0391\nE\x03E\x03E\x05E\u0395\nE\x05" +
    "E\u0397\nE\x03F\x03F\x05F\u039B\nF\x03G\x03G\x03G\x03G\x05G\u03A1\nG\x03" +
    "H\x03H\x03I\x03I\x03I\x03J\x05J\u03A9\nJ\x03J\x03J\x03J\x03J\x03K\x03" +
    "K\x07K\u03B1\nK\fK\x0EK\u03B4\vK\x03K\x03K\x03L\x03L\x07L\u03BA\nL\fL" +
    "\x0EL\u03BD\vL\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u03C6\nL\x03L\x03" +
    "L\x03L\x03L\x03L\x03L\x05L\u03CE\nL\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
    "L\x03L\x03L\x03L\x03L\x03L\x05L\u03DC\nL\x03M\x03M\x03N\x03N\x03N\x05" +
    "N\u03E3\nN\x03N\x03N\x05N\u03E7\nN\x03N\x03N\x03O\x03O\x05O\u03ED\nO\x03" +
    "O\x03O\x03P\x03P\x03P\x07P\u03F4\nP\fP\x0EP\u03F7\vP\x03Q\x03Q\x03Q\x03" +
    "R\x03R\x07R\u03FE\nR\fR\x0ER\u0401\vR\x03R\x03R\x03S\x03S\x07S\u0407\n" +
    "S\fS\x0ES\u040A\vS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x05T\u0413\nT\x03" +
    "U\x07U\u0416\nU\fU\x0EU\u0419\vU\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
    "U\x05U\u0423\nU\x03V\x03V\x03W\x07W\u0428\nW\fW\x0EW\u042B\vW\x03W\x03" +
    "W\x03W\x05W\u0430\nW\x03W\x05W\u0433\nW\x03X\x03X\x03X\x03X\x03X\x05X" +
    "\u043A\nX\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u0443\nX\x03X\x03X\x03" +
    "X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03" +
    "X\x03X\x03X\x06X\u0458\nX\rX\x0EX\u0459\x03X\x05X\u045D\nX\x03X\x05X\u0460" +
    "\nX\x03X\x03X\x03X\x03X\x07X\u0466\nX\fX\x0EX\u0469\vX\x03X\x05X\u046C" +
    "\nX\x03X\x03X\x03X\x03X\x07X\u0472\nX\fX\x0EX\u0475\vX\x03X\x07X\u0478" +
    "\nX\fX\x0EX\u047B\vX\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u0485" +
    "\nX\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05X\u048E\nX\x03X\x03X\x03X\x05" +
    "X\u0493\nX\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x03X\x05" +
    "X\u04A0\nX\x03X\x03X\x03X\x03X\x05X\u04A6\nX\x03Y\x03Y\x03Y\x07Y\u04AB" +
    "\nY\fY\x0EY\u04AE\vY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x07Z\u04B8" +
    "\nZ\fZ\x0EZ\u04BB\vZ\x03[\x03[\x03[\x03\\\x03\\\x03\\\x05\\\u04C3\n\\" +
    "\x03\\\x03\\\x03]\x03]\x03]\x07]\u04CA\n]\f]\x0E]\u04CD\v]\x03^\x07^\u04D0" +
    "\n^\f^\x0E^\u04D3\v^\x03^\x03^\x03^\x03^\x03^\x05^\u04DA\n^\x03^\x03^" +
    "\x03^\x03^\x05^\u04E0\n^\x03_\x06_\u04E3\n_\r_\x0E_\u04E4\x03_\x06_\u04E8" +
    "\n_\r_\x0E_\u04E9\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u04F2\n`\x03`\x03" +
    "`\x03`\x05`\u04F7\n`\x03a\x03a\x05a\u04FB\na\x03a\x03a\x05a\u04FF\na\x03" +
    "a\x03a\x05a\u0503\na\x05a\u0505\na\x03b\x03b\x05b\u0509\nb\x03c\x07c\u050C" +
    "\nc\fc\x0Ec\u050F\vc\x03c\x03c\x05c\u0513\nc\x03c\x03c\x03c\x03c\x03d" +
    "\x03d\x03d\x03d\x03e\x03e\x03e\x07e\u0520\ne\fe\x0Ee\u0523\ve\x03f\x03" +
    "f\x03f\x05f\u0528\nf\x03f\x03f\x03f\x03f\x03f\x05f\u052F\nf\x03f\x03f" +
    "\x03f\x03f\x05f\u0535\nf\x03f\x05f\u0538\nf\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x07g\u0541\ng\fg\x0Eg\u0544\vg\x03g\x03g\x03g\x07g\u0549\ng\fg" +
    "\x0Eg\u054C\vg\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g" +
    "\x03g\x05g\u055A\ng\x03g\x03g\x05g\u055E\ng\x03g\x03g\x03g\x05g\u0563" +
    "\ng\x03g\x03g\x05g\u0567\ng\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x05g\u0577\ng\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x05g\u059F\ng\x03g\x03g\x03g\x03g\x05g\u05A5\ng" +
    "\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u05B2\ng" +
    "\x03g\x03g\x03g\x05g\u05B7\ng\x03g\x07g\u05BA\ng\fg\x0Eg\u05BD\vg\x03" +
    "h\x07h\u05C0\nh\fh\x0Eh\u05C3\vh\x03h\x03h\x07h\u05C7\nh\fh\x0Eh\u05CA" +
    "\vh\x03h\x03h\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x05j\u05D5\nj\x03j\x03" +
    "j\x03j\x03j\x03j\x07j\u05DC\nj\fj\x0Ej\u05DF\vj\x03j\x03j\x03j\x03j\x05" +
    "j\u05E5\nj\x03j\x05j\u05E8\nj\x03k\x03k\x05k\u05EC\nk\x03l\x03l\x03l\x03" +
    "l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u05FE" +
    "\nl\x05l\u0600\nl\x03m\x03m\x03m\x03m\x07m\u0606\nm\fm\x0Em\u0609\vm\x03" +
    "m\x03m\x03n\x03n\x03n\x03n\x05n\u0611\nn\x03n\x03n\x03n\x03n\x03n\x05" +
    "n\u0618\nn\x03o\x03o\x03o\x03o\x03o\x03o\x07o\u0620\no\fo\x0Eo\u0623\v" +
    "o\x03o\x03o\x07o\u0627\no\fo\x0Eo\u062A\vo\x03o\x03o\x03o\x07o\u062F\n" +
    "o\fo\x0Eo\u0632\vo\x05o\u0634\no\x03o\x03o\x03o\x07o\u0639\no\fo\x0Eo" +
    "\u063C\vo\x03p\x03p\x07p\u0640\np\fp\x0Ep\u0643\vp\x05p\u0645\np\x03q" +
    "\x03q\x03q\x05q\u064A\nq\x03q\x07q\u064D\nq\fq\x0Eq\u0650\vq\x03q\x03" +
    "q\x05q\u0654\nq\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u065D\nr\x05r" +
    "\u065F\nr\x03s\x03s\x05s\u0663\ns\x03s\x03s\x03s\x05s\u0668\ns\x07s\u066A" +
    "\ns\fs\x0Es\u066D\vs\x03s\x05s\u0670\ns\x03t\x03t\x05t\u0674\nt\x03t\x03" +
    "t\x03u\x03u\x03u\x03u\x07u\u067C\nu\fu\x0Eu\u067F\vu\x03u\x03u\x03u\x03" +
    "u\x03u\x03u\x03u\x07u\u0688\nu\fu\x0Eu\u068B\vu\x03u\x03u\x07u\u068F\n" +
    "u\fu\x0Eu\u0692\vu\x05u\u0694\nu\x03v\x03v\x05v\u0698\nv\x03w\x03w\x03" +
    "w\x03x\x03x\x03x\x05x\u06A0\nx\x03y\x03y\x03y\x05y\u06A5\ny\x03z\x03z" +
    "\x03z\x03z\x03{\x03{\x03{\x07{\u06AE\n{\f{\x0E{\u06B1\v{\x03|\x07|\u06B4" +
    "\n|\f|\x0E|\u06B7\v|\x03|\x03|\x05|\u06BB\n|\x03|\x07|\u06BE\n|\f|\x0E" +
    "|\u06C1\v|\x03|\x03|\x07|\u06C5\n|\f|\x0E|\u06C8\v|\x03}\x03}\x03~\x03" +
    "~\x03~\x03~\x07~\u06D0\n~\f~\x0E~\u06D3\v~\x03~\x03~\x03\x7F\x03\x7F\x03" +
    "\x7F\x05\x7F\u06DA\n\x7F\x03\x7F\x03\x7F\x05\x7F\u06DE\n\x7F\x05\x7F\u06E0" +
    "\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u06E7\n\x80\x03" +
    "\x81\x03\x81\x05\x81\u06EB\n\x81\x03\x81\x03\x81\x03\x81\x02\x02\x04\xCC" +
    "\xDC\x82\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
    "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
    "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
    "\xFA\x02\xFC\x02\xFE\x02\u0100\x02\x02\x11\x04\x02\x13\x13**\x03\x02E" +
    "H\x03\x02IJ\x04\x02((>>\x04\x025C\x82\x82\x03\x02fi\x03\x02\\]\x04\x02" +
    "jkoo\x03\x02hi\x04\x02Z[ab\x04\x02``cc\x04\x02YYpz\x03\x02fg\x04\x02_" +
    "_{{\n\x02\x05\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x02" +
    "\u07B2\x02\u0114\x03\x02\x02\x02\x04\u0119\x03\x02\x02\x02\x06\u0120\x03" +
    "\x02\x02\x02\b\u0139\x03\x02\x02\x02\n\u0140\x03\x02\x02\x02\f\u014C\x03" +
    "\x02\x02\x02\x0E\u0150\x03\x02\x02\x02\x10\u0152\x03\x02\x02\x02\x12\u0155" +
    "\x03\x02\x02\x02\x14\u0158\x03\x02\x02\x02\x16\u015B\x03\x02\x02\x02\x18" +
    "\u016C\x03\x02\x02\x02\x1A\u017A\x03\x02\x02\x02\x1C\u0188\x03\x02\x02" +
    "\x02\x1E\u0190\x03\x02\x02\x02 \u01A1\x03\x02\x02\x02\"\u01AC\x03\x02" +
    "\x02\x02$\u01B6\x03\x02\x02\x02&\u01BD\x03\x02\x02\x02(\u01CA\x03\x02" +
    "\x02\x02*\u01D3\x03\x02\x02\x02,\u01E8\x03\x02\x02\x02.\u01F4\x03\x02" +
    "\x02\x020\u01F6\x03\x02\x02\x022\u0208\x03\x02\x02\x024\u020C\x03\x02" +
    "\x02\x026\u020E\x03\x02\x02\x028\u0211\x03\x02\x02\x02:\u0214\x03\x02" +
    "\x02\x02<\u021C\x03\x02\x02\x02>\u0228\x03\x02\x02\x02@\u0232\x03\x02" +
    "\x02\x02B\u0234\x03\x02\x02\x02D\u023F\x03\x02\x02\x02F\u024D\x03\x02" +
    "\x02\x02H\u0258\x03\x02\x02\x02J\u025D\x03\x02\x02\x02L\u0266\x03\x02" +
    "\x02\x02N\u0279\x03\x02\x02\x02P\u0281\x03\x02\x02\x02R\u0286\x03\x02" +
    "\x02\x02T\u0290\x03\x02\x02\x02V\u0292\x03\x02\x02\x02X\u02A2\x03\x02" +
    "\x02\x02Z\u02AA\x03\x02\x02\x02\\\u02BA\x03\x02\x02\x02^\u02BC\x03\x02" +
    "\x02\x02`\u02C4\x03\x02\x02\x02b\u02D4\x03\x02\x02\x02d\u02EC\x03\x02" +
    "\x02\x02f\u02F1\x03\x02\x02\x02h\u02FA\x03\x02\x02\x02j\u0307\x03\x02" +
    "\x02\x02l\u0312\x03\x02\x02\x02n\u0318\x03\x02\x02\x02p\u0327\x03\x02" +
    "\x02\x02r\u0329\x03\x02\x02\x02t\u032B\x03\x02\x02\x02v\u0332\x03\x02" +
    "\x02\x02x\u033B\x03\x02\x02\x02z\u0345\x03\x02\x02\x02|\u034D\x03\x02" +
    "\x02\x02~\u0354\x03\x02\x02\x02\x80\u0356\x03\x02\x02\x02\x82\u0366\x03" +
    "\x02\x02\x02\x84\u036B\x03\x02\x02\x02\x86\u037C\x03\x02\x02\x02\x88\u0396" +
    "\x03\x02\x02\x02\x8A\u039A\x03\x02\x02\x02\x8C\u039C\x03\x02\x02\x02\x8E" +
    "\u03A2\x03\x02\x02\x02\x90\u03A4\x03\x02\x02\x02\x92\u03A8\x03\x02\x02" +
    "\x02\x94\u03AE\x03\x02\x02\x02\x96\u03DB\x03\x02\x02\x02\x98\u03DD\x03" +
    "\x02\x02\x02\x9A\u03DF\x03\x02\x02\x02\x9C\u03EA\x03\x02\x02\x02\x9E\u03F0" +
    "\x03\x02\x02\x02\xA0\u03F8\x03\x02\x02\x02\xA2\u03FB\x03\x02\x02\x02\xA4" +
    "\u0404\x03\x02\x02\x02\xA6\u0412\x03\x02\x02\x02\xA8\u0417\x03\x02\x02" +
    "\x02\xAA\u0424\x03\x02\x02\x02\xAC\u0432\x03\x02\x02\x02\xAE\u04A5\x03" +
    "\x02\x02\x02\xB0\u04A7\x03\x02\x02\x02\xB2\u04B4\x03\x02\x02\x02\xB4\u04BC" +
    "\x03\x02\x02\x02\xB6\u04BF\x03\x02\x02\x02\xB8\u04C6\x03\x02\x02\x02\xBA" +
    "\u04DF\x03\x02\x02\x02\xBC\u04E2\x03\x02\x02\x02\xBE\u04F6\x03\x02\x02" +
    "\x02\xC0\u0504\x03\x02\x02\x02\xC2\u0508\x03\x02\x02\x02\xC4\u050D\x03" +
    "\x02\x02\x02\xC6\u0518\x03\x02\x02\x02\xC8\u051C\x03\x02\x02\x02\xCA\u0537" +
    "\x03\x02\x02\x02\xCC\u0566\x03\x02\x02\x02\xCE\u05C1\x03\x02\x02\x02\xD0" +
    "\u05CD\x03\x02\x02\x02\xD2\u05E7\x03\x02\x02\x02\xD4\u05EB\x03\x02\x02" +
    "\x02\xD6\u05FF\x03\x02\x02\x02\xD8\u0601\x03\x02\x02\x02\xDA\u0617\x03" +
    "\x02\x02\x02\xDC\u0633\x03\x02\x02\x02\xDE\u0644\x03\x02\x02\x02\xE0\u0649" +
    "\x03\x02\x02\x02\xE2\u065E\x03\x02\x02\x02\xE4\u066F\x03\x02\x02\x02\xE6" +
    "\u0671\x03\x02\x02\x02\xE8\u0677\x03\x02\x02\x02\xEA\u0695\x03\x02\x02" +
    "\x02\xEC\u0699\x03\x02\x02\x02\xEE\u069F\x03\x02\x02\x02\xF0\u06A4\x03" +
    "\x02\x02\x02\xF2\u06A6\x03\x02\x02\x02\xF4\u06AA\x03\x02\x02\x02\xF6\u06B5" +
    "\x03\x02\x02\x02\xF8\u06C9\x03\x02\x02\x02\xFA\u06CB\x03\x02\x02\x02\xFC" +
    "\u06DF\x03\x02\x02\x02\xFE\u06E6\x03\x02\x02\x02\u0100\u06E8\x03\x02\x02" +
    "\x02\u0102\u0104\x05\x04\x03\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104" +
    "\x03\x02\x02\x02";
JavaParser._serializedATNSegment1 = "\u0104\u0108\x03\x02\x02\x02\u0105\u0107\x05\x06\x04\x02\u0106\u0105\x03" +
    "\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108" +
    "\u0109\x03\x02\x02\x02\u0109\u010E\x03\x02\x02\x02\u010A\u0108\x03\x02" +
    "\x02\x02\u010B\u010D\x05\b\x05\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110" +
    "\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02" +
    "\u010F\u0115\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0112\x05" +
    "\x92J\x02\u0112\u0113\x07\x02\x02\x03\u0113\u0115\x03\x02\x02\x02\u0114" +
    "\u0103\x03\x02\x02\x02\u0114\u0111\x03\x02\x02\x02\u0115\x03\x03\x02\x02" +
    "\x02\u0116\u0118\x05x=\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03" +
    "\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
    "\u011C\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u011D\x07\"\x02" +
    "\x02\u011D\u011E\x05n8\x02\u011E\u011F\x07V\x02\x02\u011F\x05\x03\x02" +
    "\x02\x02\u0120\u0122\x07\x1B\x02\x02\u0121\u0123\x07(\x02\x02\u0122\u0121" +
    "\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
    "\u0124\u0127\x05n8\x02\u0125\u0126\x07X\x02\x02\u0126\u0128\x07j\x02\x02" +
    "\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03" +
    "\x02\x02\x02\u0129\u012A\x07V\x02\x02\u012A\x07\x03\x02\x02\x02\u012B" +
    "\u012D\x05\f\x07\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02" +
    "\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0136" +
    "\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0137\x05\x16\f\x02" +
    "\u0132\u0137\x05\x1E\x10\x02\u0133\u0137\x05&\x14\x02\u0134\u0137\x05" +
    "\x82B\x02\u0135\u0137\x05\x9AN\x02\u0136\u0131\x03\x02\x02\x02\u0136\u0132" +
    "\x03\x02\x02\x02\u0136\u0133\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02" +
    "\u0136\u0135\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u013A\x07" +
    "V\x02\x02\u0139\u012E\x03\x02\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A" +
    "\t\x03\x02\x02\x02\u013B\u0141\x05\f\x07\x02\u013C\u0141\x07 \x02\x02" +
    "\u013D\u0141\x07,\x02\x02\u013E\u0141\x070\x02\x02\u013F\u0141\x073\x02" +
    "\x02\u0140\u013B\x03\x02\x02\x02\u0140\u013C\x03\x02\x02\x02\u0140\u013D" +
    "\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02" +
    "\u0141\v\x03\x02\x02\x02\u0142\u014D\x05x=\x02\u0143\u014D\x07%\x02\x02" +
    "\u0144\u014D\x07$\x02\x02\u0145\u014D\x07#\x02\x02\u0146\u014D\x07(\x02" +
    "\x02\u0147\u014D\x07\x03\x02\x02\u0148\u014D\x07\x14\x02\x02\u0149\u014D" +
    "\x07)\x02\x02\u014A\u014D\x07B\x02\x02\u014B\u014D\x07D\x02\x02\u014C" +
    "\u0142\x03\x02\x02\x02\u014C\u0143\x03\x02\x02\x02\u014C\u0144\x03\x02" +
    "\x02\x02\u014C\u0145\x03\x02\x02\x02\u014C\u0146\x03\x02\x02\x02\u014C" +
    "\u0147\x03\x02\x02\x02\u014C\u0148\x03\x02\x02\x02\u014C\u0149\x03\x02" +
    "\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D" +
    "\r\x03\x02\x02\x02\u014E\u0151\x07\x14\x02\x02\u014F\u0151\x05x=\x02\u0150" +
    "\u014E\x03\x02\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151\x0F\x03\x02\x02" +
    "\x02\u0152\u0153\x07\x13\x02\x02\u0153\u0154\x05\xF4{\x02\u0154\x11\x03" +
    "\x02\x02\x02\u0155\u0156\x07\x1A\x02\x02\u0156\u0157\x05\xF4{\x02\u0157" +
    "\x13\x03\x02\x02\x02\u0158\u0159\x07C\x02\x02\u0159\u015A\x05\xF4{\x02" +
    "\u015A\x15\x03\x02\x02\x02\u015B\u015C\x07\v\x02\x02\u015C\u015E\x05\xAA" +
    "V\x02\u015D\u015F\x05\x18\r\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F" +
    "\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160\u0161\x07\x13\x02\x02" +
    "\u0161\u0163\x05\xF6|\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03" +
    "\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0166\x05\x12\n\x02\u0165" +
    "\u0164\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02" +
    "\x02\x02\u0167\u0169\x05\x14\v\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169" +
    "\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x05(\x15\x02" +
    "\u016B\x17\x03\x02\x02\x02\u016C\u016D\x07[\x02\x02\u016D\u0172\x05\x1A" +
    "\x0E\x02\u016E\u016F\x07W\x02\x02\u016F\u0171\x05\x1A\x0E\x02\u0170\u016E" +
    "\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02" +
    "\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0172\x03" +
    "\x02\x02\x02\u0175\u0176\x07Z\x02\x02\u0176\x19\x03\x02\x02\x02\u0177" +
    "\u0179\x05x=\x02\u0178\u0177\x03\x02\x02\x02\u0179\u017C\x03\x02\x02\x02" +
    "\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03" +
    "\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017D\u0186\x05\xAAV\x02\u017E" +
    "\u0182\x07\x13\x02\x02\u017F\u0181\x05x=\x02\u0180\u017F\x03\x02\x02\x02" +
    "\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03" +
    "\x02\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185" +
    "\u0187\x05\x1C\x0F\x02\u0186\u017E\x03\x02\x02\x02\u0186\u0187\x03\x02" +
    "\x02\x02\u0187\x1B\x03\x02\x02\x02\u0188\u018D\x05\xF6|\x02\u0189\u018A" +
    "\x07l\x02\x02\u018A\u018C\x05\xF6|\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
    "\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02" +
    "\x02\x02\u018E\x1D\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0191" +
    "\x07\x12\x02\x02\u0191\u0193\x05\xAAV\x02\u0192\u0194\x05\x12\n\x02\u0193" +
    "\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0195\x03\x02" +
    "\x02\x02\u0195\u0197\x07R\x02\x02\u0196\u0198\x05 \x11\x02\u0197\u0196" +
    "\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02" +
    "\u0199\u019B\x07W\x02\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03" +
    "\x02\x02\x02\u019B\u019D\x03\x02\x02\x02\u019C\u019E\x05$\x13\x02\u019D" +
    "\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02" +
    "\x02\x02\u019F\u01A0\x07S\x02\x02\u01A0\x1F\x03\x02\x02\x02\u01A1\u01A6" +
    "\x05\"\x12\x02\u01A2\u01A3\x07W\x02\x02\u01A3\u01A5\x05\"\x12\x02\u01A4" +
    "\u01A2\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02" +
    "\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7!\x03\x02\x02\x02\u01A8\u01A6" +
    "\x03\x02\x02\x02\u01A9\u01AB\x05x=\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB" +
    "\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02" +
    "\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF" +
    "\u01B1\x05\xAAV\x02\u01B0\u01B2\x05\u0100\x81\x02\u01B1\u01B0\x03\x02" +
    "\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3" +
    "\u01B5\x05(\x15\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02" +
    "\x02\u01B5#\x03\x02\x02\x02\u01B6\u01BA\x07V\x02\x02\u01B7\u01B9\x05," +
    "\x17\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA" +
    "\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB%\x03\x02\x02" +
    "\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x07\x1E\x02\x02\u01BE\u01C0" +
    "\x05\xAAV\x02\u01BF\u01C1\x05\x18\r\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0" +
    "\u01C1\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01C4\x05\x10" +
    "\t\x02\u01C3\u01C2\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6" +
    "\x03\x02\x02\x02\u01C5\u01C7\x05\x14\v\x02\u01C6\u01C5\x03\x02\x02\x02" +
    "\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x05" +
    "*\x16\x02\u01C9\'\x03\x02\x02\x02\u01CA\u01CE\x07R\x02\x02\u01CB\u01CD" +
    "\x05,\x17\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02" +
    "\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03" +
    "\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x07S\x02\x02\u01D2" +
    ")\x03\x02\x02\x02\u01D3\u01D7\x07R\x02\x02\u01D4\u01D6\x05> \x02\u01D5" +
    "\u01D4\x03\x02\x02\x02\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02" +
    "\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9" +
    "\u01D7\x03\x02\x02\x02\u01DA\u01DB\x07S\x02\x02\u01DB+\x03\x02\x02\x02" +
    "\u01DC\u01E9\x07V\x02\x02\u01DD\u01DF\x07(\x02\x02\u01DE\u01DD\x03\x02" +
    "\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0" +
    "\u01E9\x05\xA4S\x02\u01E1\u01E3\x05\n\x06\x02\u01E2\u01E1\x03\x02\x02" +
    "\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
    "\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02" +
    "\u01E7\u01E9\x05.\x18\x02\u01E8\u01DC\x03\x02\x02\x02\u01E8\u01DE\x03" +
    "\x02\x02\x02\u01E8\u01E4\x03\x02\x02\x02\u01E9-\x03\x02\x02\x02\u01EA" +
    "\u01F5\x05\x9AN\x02\u01EB\u01F5\x050\x19\x02\u01EC\u01F5\x056\x1C\x02" +
    "\u01ED\u01F5\x05<\x1F\x02\u01EE\u01F5\x05:\x1E\x02\u01EF\u01F5\x058\x1D" +
    "\x02\u01F0\u01F5\x05&\x14\x02\u01F1\u01F5\x05\x82B\x02\u01F2\u01F5\x05" +
    "\x16\f\x02\u01F3\u01F5\x05\x1E\x10\x02\u01F4\u01EA\x03\x02\x02\x02\u01F4" +
    "\u01EB\x03\x02\x02\x02\u01F4\u01EC\x03\x02\x02\x02\u01F4\u01ED\x03\x02" +
    "\x02\x02\u01F4\u01EE\x03\x02\x02\x02\u01F4\u01EF\x03\x02\x02\x02\u01F4" +
    "\u01F0\x03\x02\x02\x02\u01F4\u01F1\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
    "\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5/\x03\x02\x02\x02\u01F6\u01F7" +
    "\x054\x1B\x02\u01F7\u01F8\x05\xAAV\x02\u01F8\u01FD\x05`1\x02\u01F9\u01FA" +
    "\x07T\x02\x02\u01FA\u01FC\x07U\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC" +
    "\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02" +
    "\x02\x02\u01FE\u0202\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200" +
    "\u0201\x07/\x02\x02\u0201\u0203\x05^0\x02\u0202\u0200\x03\x02\x02\x02" +
    "\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x05" +
    "2\x1A\x02\u02051\x03\x02\x02\x02\u0206\u0209\x05\xA4S\x02\u0207\u0209" +
    "\x07V\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02" +
    "\u02093\x03\x02\x02\x02\u020A\u020D\x05\xF6|\x02\u020B\u020D\x072\x02" +
    "\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D5\x03" +
    "\x02\x02\x02\u020E\u020F\x05\x18\r\x02\u020F\u0210\x050\x19\x02\u0210" +
    "7\x03\x02\x02\x02\u0211\u0212\x05\x18\r\x02\u0212\u0213\x05:\x1E\x02\u0213" +
    "9\x03\x02\x02\x02\u0214\u0215\x05\xAAV\x02\u0215\u0218\x05`1\x02\u0216" +
    "\u0217\x07/\x02\x02\u0217\u0219\x05^0\x02\u0218\u0216\x03\x02\x02\x02" +
    "\u0218\u0219\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021B\x05" +
    "\xA4S\x02\u021B;\x03\x02\x02\x02\u021C\u021D\x05\xF6|\x02\u021D\u021E" +
    "\x05N(\x02\u021E\u021F\x07V\x02\x02\u021F=\x03\x02\x02\x02\u0220\u0222" +
    "\x05\n\x06\x02\u0221\u0220\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02" +
    "\u0223\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x03" +
    "\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0226\u0229\x05@!\x02\u0227\u0229" +
    "\x07V\x02\x02\u0228\u0223\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02" +
    "\u0229?\x03\x02\x02\x02\u022A\u0233\x05B\"\x02\u022B\u0233\x05F$\x02\u022C" +
    "\u0233\x05J&\x02\u022D\u0233\x05&\x14\x02\u022E\u0233\x05\x82B\x02\u022F" +
    "\u0233\x05\x16\f\x02\u0230\u0233\x05\x1E\x10\x02\u0231\u0233\x05\x9AN" +
    "\x02\u0232\u022A\x03\x02\x02\x02\u0232\u022B\x03\x02\x02\x02\u0232\u022C" +
    "\x03\x02\x02\x02\u0232\u022D\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02" +
    "\u0232\u022F\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03" +
    "\x02\x02\x02\u0233A\x03\x02\x02\x02\u0234\u0235\x05\xF6|\x02\u0235\u023A" +
    "\x05D#\x02\u0236\u0237\x07W\x02\x02\u0237\u0239\x05D#\x02\u0238\u0236" +
    "\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02" +
    "\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023A\x03" +
    "\x02\x02\x02\u023D\u023E\x07V\x02\x02\u023EC\x03\x02\x02\x02\u023F\u0244" +
    "\x05\xAAV\x02\u0240\u0241\x07T\x02\x02\u0241\u0243\x07U\x02\x02\u0242" +
    "\u0240\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02" +
    "\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247\x03\x02\x02\x02\u0246" +
    "\u0244\x03\x02\x02\x02\u0247\u0248\x07Y\x02\x02\u0248\u0249\x05T+\x02" +
    "\u0249E\x03\x02\x02\x02\u024A\u024C\x05H%\x02\u024B\u024A\x03\x02\x02" +
    "\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E" +
    "\x03\x02\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02" +
    "\u0250\u0251\x05L\'\x02\u0251G\x03\x02\x02\x02\u0252\u0259\x05x=\x02\u0253" +
    "\u0259\x07%\x02\x02\u0254\u0259\x07\x03\x02\x02\u0255\u0259\x07\x0E\x02" +
    "\x02\u0256\u0259\x07(\x02\x02\u0257\u0259\x07)\x02\x02\u0258\u0252\x03" +
    "\x02\x02\x02\u0258\u0253\x03\x02\x02\x02\u0258\u0254\x03\x02\x02\x02\u0258" +
    "\u0255\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0257\x03\x02" +
    "\x02\x02\u0259I\x03\x02\x02\x02\u025A\u025C\x05H%\x02\u025B\u025A\x03" +
    "\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D" +
    "\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u025D\x03\x02" +
    "\x02\x02\u0260\u0261\x05\x18\r\x02\u0261\u0262\x05L\'\x02\u0262K\x03\x02" +
    "\x02\x02\u0263\u0265\x05x=\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0268" +
    "\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02" +
    "\u0267\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269\u026A\x05" +
    "4\x1B\x02\u026A\u026B\x05\xAAV\x02\u026B\u0270\x05`1\x02\u026C\u026D\x07" +
    "T\x02\x02\u026D\u026F\x07U\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0272" +
    "\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
    "\u0271\u0275\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0274\x07" +
    "/\x02\x02\u0274\u0276\x05^0\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276" +
    "\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x052\x1A\x02" +
    "\u0278M\x03\x02\x02\x02\u0279\u027E\x05P)\x02\u027A\u027B\x07W\x02\x02" +
    "\u027B\u027D\x05P)\x02\u027C\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02" +
    "\x02\x02\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F" +
    "O\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0284\x05R*\x02\u0282" +
    "\u0283\x07Y\x02\x02\u0283\u0285\x05T+\x02\u0284\u0282\x03\x02\x02\x02" +
    "\u0284\u0285\x03\x02\x02\x02\u0285Q\x03\x02\x02\x02\u0286\u028B\x05\xAA" +
    "V\x02\u0287\u0288\x07T\x02\x02\u0288\u028A\x07U\x02\x02\u0289\u0287\x03" +
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
    "\x02\x02\x02\u02A0\u02A1\x07S\x02\x02\u02A1W\x03\x02\x02\x02\u02A2\u02A7" +
    "\x05Z.\x02\u02A3\u02A4\x07X\x02\x02\u02A4\u02A6\x05Z.\x02\u02A5\u02A3" +
    "\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02" +
    "\u02A7\u02A8\x03\x02\x02\x02\u02A8Y\x03\x02\x02\x02\u02A9\u02A7\x03\x02" +
    "\x02\x02\u02AA\u02AC\x05\xAAV\x02\u02AB\u02AD\x05\xFA~\x02\u02AC\u02AB" +
    "\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD[\x03\x02\x02\x02\u02AE" +
    "\u02BB\x05\xF6|\x02\u02AF\u02B1\x05x=\x02\u02B0\u02AF\x03\x02\x02\x02" +
    "\u02B1\u02B4\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03" +
    "\x02\x02\x02\u02B3\u02B5\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5" +
    "\u02B8\x07^\x02\x02\u02B6\u02B7\t\x02\x02\x02\u02B7\u02B9\x05\xF6|\x02" +
    "\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB\x03" +
    "\x02\x02\x02\u02BA\u02AE\x03\x02\x02\x02\u02BA\u02B2\x03\x02\x02\x02\u02BB" +
    "]\x03\x02\x02\x02\u02BC\u02C1\x05n8\x02\u02BD\u02BE\x07W\x02\x02\u02BE" +
    "\u02C0\x05n8\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02\x02" +
    "\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2_\x03\x02" +
    "\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02D0\x07P\x02\x02\u02C5\u02C7" +
    "\x05b2\x02\u02C6\u02C5\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
    "\u02D1\x03\x02\x02\x02\u02C8\u02CB\x05b2\x02\u02C9\u02CA\x07W\x02\x02" +
    "\u02CA\u02CC\x05d3\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02" +
    "\x02\x02\u02CC\u02D1\x03\x02\x02\x02\u02CD\u02CF\x05d3\x02\u02CE\u02CD" +
    "\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D1\x03\x02\x02\x02" +
    "\u02D0\u02C6\x03\x02\x02\x02\u02D0\u02C8\x03\x02\x02\x02\u02D0\u02CE\x03" +
    "\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x07Q\x02\x02\u02D3" +
    "a\x03\x02\x02\x02\u02D4\u02DA\x05\xF6|\x02\u02D5\u02D6\x05\xAAV\x02\u02D6" +
    "\u02D7\x07X\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02D5\x03\x02\x02" +
    "\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02DB" +
    "\x03\x02\x02\x02\u02DB\u02DD\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02" +
    "\u02DD\u02DE\x07-\x02\x02\u02DEc\x03\x02\x02\x02\u02DF\u02E4\x05f4\x02" +
    "\u02E0\u02E1\x07W\x02\x02\u02E1\u02E3\x05f4\x02\u02E2\u02E0\x03\x02\x02" +
    "\x02\u02E3\u02E6\x03\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5" +
    "\x03\x02\x02\x02\u02E5\u02E9\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02" +
    "\u02E7\u02E8\x07W\x02\x02\u02E8\u02EA\x05h5\x02\u02E9\u02E7\x03\x02\x02" +
    "\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02ED" +
    "\x05h5\x02\u02EC\u02DF\x03\x02\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED" +
    "e\x03\x02\x02\x02\u02EE\u02F0\x05\x0E\b\x02\u02EF\u02EE\x03\x02\x02\x02" +
    "\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03" +
    "\x02\x02\x02\u02F2\u02F4\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4" +
    "\u02F5\x05\xF6|\x02\u02F5\u02F6\x05R*\x02\u02F6g\x03\x02\x02\x02\u02F7" +
    "\u02F9\x05\x0E\b\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\u02FC\x03\x02\x02" +
    "\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FD" +
    "\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FD\u0301\x05\xF6|\x02" +
    "\u02FE\u0300\x05x=\x02\u02FF\u02FE\x03\x02\x02\x02\u0300\u0303\x03\x02" +
    "\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302" +
    "\u0304\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304\u0305\x07~\x02" +
    "\x02\u0305\u0306\x05R*\x02\u0306i\x03\x02\x02\x02\u0307\u030C\x05l7\x02" +
    "\u0308\u0309\x07W\x02\x02\u0309\u030B\x05l7\x02\u030A\u0308\x03\x02\x02" +
    "\x02\u030B\u030E\x03\x02\x02\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030D" +
    "\x03\x02\x02\x02\u030Dk\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F" +
    "\u0311\x05\x0E\b\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02" +
    "\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315" +
    "\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0316\x07?\x02\x02" +
    "\u0316\u0317\x05\xAAV\x02\u0317m\x03\x02\x02\x02\u0318\u031D\x05\xAAV" +
    "\x02\u0319\u031A\x07X\x02\x02\u031A\u031C\x05\xAAV\x02\u031B\u0319\x03" +
    "\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D" +
    "\u031E\x03\x02\x02\x02\u031Eo\x03\x02\x02\x02\u031F\u031D\x03\x02\x02" +
    "\x02\u0320\u0328\x05r:\x02\u0321\u0328\x05t;\x02\u0322\u0328\x07L\x02" +
    "\x02\u0323\u0328\x07M\x02\x02\u0324\u0328\x07K\x02\x02\u0325\u0328\x07" +
    "O\x02\x02\u0326\u0328\x07N\x02\x02\u0327\u0320\x03\x02\x02\x02\u0327\u0321" +
    "\x03\x02\x02\x02\u0327\u0322\x03\x02\x02\x02\u0327\u0323\x03\x02\x02\x02" +
    "\u0327\u0324\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327\u0326\x03" +
    "\x02\x02\x02\u0328q\x03\x02\x02\x02\u0329\u032A\t\x03\x02\x02\u032As\x03" +
    "\x02\x02\x02\u032B\u032C\t\x04\x02\x02\u032Cu\x03\x02\x02\x02\u032D\u032E" +
    "\x05\xAAV\x02\u032E\u032F\x07X\x02\x02\u032F\u0331\x03\x02\x02\x02\u0330" +
    "\u032D\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02" +
    "\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x03\x02\x02\x02\u0334" +
    "\u0332\x03\x02\x02\x02\u0335\u0336\x07}\x02\x02\u0336\u0337\x05\xAAV\x02" +
    "\u0337w\x03\x02\x02\x02\u0338\u0339\x07}\x02\x02\u0339\u033C\x05n8\x02" +
    "\u033A\u033C\x05v<\x02\u033B\u0338\x03\x02\x02\x02\u033B\u033A\x03\x02" +
    "\x02\x02\u033C\u0343\x03\x02\x02\x02\u033D\u0340\x07P\x02\x02\u033E\u0341" +
    "\x05z>\x02\u033F\u0341\x05~@\x02\u0340\u033E\x03\x02\x02\x02\u0340\u033F" +
    "\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
    "\u0342\u0344\x07Q\x02\x02\u0343\u033D\x03\x02\x02\x02\u0343\u0344\x03" +
    "\x02\x02\x02\u0344y\x03\x02\x02\x02\u0345\u034A\x05|?\x02\u0346\u0347" +
    "\x07W\x02\x02\u0347\u0349\x05|?\x02\u0348\u0346\x03\x02\x02\x02\u0349" +
    "\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B\x03\x02" +
    "\x02\x02\u034B{\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034D\u034E" +
    "\x05\xAAV\x02\u034E\u034F\x07Y\x02\x02\u034F\u0350\x05~@\x02\u0350}\x03" +
    "\x02\x02\x02\u0351\u0355\x05\xCCg\x02\u0352\u0355\x05x=\x02\u0353\u0355" +
    "\x05\x80A\x02\u0354\u0351\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02" +
    "\u0354\u0353\x03\x02\x02\x02\u0355\x7F\x03\x02\x02\x02\u0356\u035F\x07" +
    "R\x02\x02\u0357\u035C\x05~@\x02\u0358\u0359\x07W\x02\x02\u0359\u035B\x05" +
    "~@\x02\u035A\u0358\x03\x02\x02\x02\u035B\u035E\x03\x02\x02\x02\u035C\u035A" +
    "\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u0360\x03\x02\x02\x02" +
    "\u035E\u035C\x03\x02\x02\x02\u035F\u0357\x03\x02\x02\x02\u035F\u0360\x03" +
    "\x02\x02\x02\u0360\u0362\x03\x02\x02\x02\u0361\u0363\x07W\x02\x02\u0362" +
    "\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364\x03\x02" +
    "\x02\x02\u0364\u0365\x07S\x02\x02\u0365\x81\x03\x02\x02\x02\u0366\u0367" +
    "\x07}\x02\x02\u0367\u0368\x07\x1E\x02\x02\u0368\u0369\x05\xAAV\x02\u0369" +
    "\u036A\x05\x84C\x02\u036A\x83\x03\x02\x02\x02\u036B\u036F\x07R\x02\x02" +
    "\u036C\u036E\x05\x86D\x02\u036D\u036C\x03\x02\x02\x02\u036E\u0371\x03" +
    "\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370" +
    "\u0372\x03\x02\x02\x02\u0371\u036F\x03\x02\x02\x02\u0372\u0373\x07S\x02" +
    "\x02\u0373\x85\x03\x02\x02\x02\u0374\u0376\x05\n\x06\x02\u0375\u0374\x03" +
    "\x02\x02\x02\u0376\u0379\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377" +
    "\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u0377\x03\x02" +
    "\x02\x02\u037A\u037D\x05\x88E\x02\u037B\u037D\x07V\x02\x02\u037C\u0377" +
    "\x03\x02\x02\x02\u037C\u037B\x03\x02\x02\x02\u037D\x87\x03\x02\x02\x02" +
    "\u037E\u037F\x05\xF6|\x02\u037F\u0380\x05\x8AF\x02\u0380\u0381\x07V\x02" +
    "\x02\u0381\u0397\x03\x02\x02\x02\u0382\u0384\x05\x16\f\x02\u0383\u0385" +
    "\x07V\x02\x02\u0384\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02" +
    "\u0385\u0397\x03\x02\x02\x02\u0386\u0388\x05&\x14\x02\u0387\u0389\x07" +
    "V\x02\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389" +
    "\u0397\x03\x02\x02\x02\u038A\u038C\x05\x1E\x10\x02\u038B\u038D\x07V\x02" +
    "\x02\u038C\u038B\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u0397" +
    "\x03\x02\x02\x02\u038E\u0390\x05\x82B\x02\u038F\u0391\x07V\x02\x02\u0390" +
    "\u038F\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0397\x03\x02" +
    "\x02\x02\u0392\u0394\x05\x9AN\x02\u0393\u0395\x07V\x02\x02\u0394\u0393" +
    "\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02" +
    "\u0396\u037E\x03\x02\x02\x02\u0396\u0382\x03\x02\x02\x02\u0396\u0386\x03" +
    "\x02\x02\x02\u0396\u038A\x03\x02\x02\x02\u0396\u038E\x03\x02\x02\x02\u0396" +
    "\u0392\x03\x02\x02\x02\u0397\x89\x03\x02\x02\x02\u0398\u039B\x05\x8CG" +
    "\x02\u0399\u039B\x05\x8EH\x02\u039A\u0398\x03\x02\x02\x02\u039A\u0399" +
    "\x03\x02\x02\x02\u039B\x8B\x03\x02\x02\x02\u039C\u039D\x05\xAAV\x02\u039D" +
    "\u039E\x07P\x02\x02\u039E\u03A0\x07Q\x02\x02\u039F\u03A1\x05\x90I\x02" +
    "\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\x8D\x03" +
    "\x02\x02\x02\u03A2\u03A3\x05N(\x02\u03A3\x8F\x03\x02\x02\x02\u03A4\u03A5" +
    "\x07\x0E\x02\x02\u03A5\u03A6\x05~@\x02\u03A6\x91\x03\x02\x02\x02\u03A7" +
    "\u03A9\x076\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02" +
    "\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x075\x02\x02\u03AB\u03AC" +
    "\x05n8\x02\u03AC\u03AD\x05\x94K\x02\u03AD\x93\x03\x02\x02\x02\u03AE\u03B2" +
    "\x07R\x02\x02\u03AF\u03B1\x05\x96L\x02\u03B0\u03AF";
JavaParser._serializedATNSegment2 = "\x03\x02\x02\x02\u03B1\u03B4\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02" +
    "\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B5\x03\x02\x02\x02\u03B4\u03B2\x03" +
    "\x02\x02\x02\u03B5\u03B6\x07S\x02\x02\u03B6\x95\x03\x02\x02\x02\u03B7" +
    "\u03BB\x077\x02\x02\u03B8\u03BA\x05\x98M\x02\u03B9\u03B8\x03\x02\x02\x02" +
    "\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03" +
    "\x02\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE" +
    "\u03BF\x05n8\x02\u03BF\u03C0\x07V\x02\x02\u03C0\u03DC\x03\x02\x02\x02" +
    "\u03C1\u03C2\x078\x02\x02\u03C2\u03C5\x05n8\x02\u03C3\u03C4\x07:\x02\x02" +
    "\u03C4\u03C6\x05n8\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02" +
    "\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\u03C8\x07V\x02\x02\u03C8\u03DC" +
    "\x03\x02\x02\x02\u03C9\u03CA\x079\x02\x02\u03CA\u03CD\x05n8\x02\u03CB" +
    "\u03CC\x07:\x02\x02\u03CC\u03CE\x05n8\x02\u03CD\u03CB\x03\x02\x02\x02" +
    "\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D0\x07" +
    "V\x02\x02\u03D0\u03DC\x03\x02\x02\x02\u03D1\u03D2\x07;\x02\x02\u03D2\u03D3" +
    "\x05n8\x02\u03D3\u03D4\x07V\x02\x02\u03D4\u03DC\x03\x02\x02\x02\u03D5" +
    "\u03D6\x07<\x02\x02\u03D6\u03D7\x05n8\x02\u03D7\u03D8\x07=\x02\x02\u03D8" +
    "\u03D9\x05n8\x02\u03D9\u03DA\x07V\x02\x02\u03DA\u03DC\x03\x02\x02\x02" +
    "\u03DB\u03B7\x03\x02\x02\x02\u03DB\u03C1\x03\x02\x02\x02\u03DB\u03C9\x03" +
    "\x02\x02\x02\u03DB\u03D1\x03\x02\x02\x02\u03DB\u03D5\x03\x02\x02\x02\u03DC" +
    "\x97\x03\x02\x02\x02\u03DD\u03DE\t\x05\x02\x02\u03DE\x99\x03\x02\x02\x02" +
    "\u03DF\u03E0\x07A\x02\x02\u03E0\u03E2\x05\xAAV\x02\u03E1\u03E3\x05\x18" +
    "\r\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4" +
    "\x03\x02\x02\x02\u03E4\u03E6\x05\x9CO\x02\u03E5\u03E7\x05\x12\n\x02\u03E6" +
    "\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8\x03\x02" +
    "\x02\x02\u03E8\u03E9\x05\xA2R\x02\u03E9\x9B\x03\x02\x02\x02\u03EA\u03EC" +
    "\x07P\x02\x02\u03EB\u03ED\x05\x9EP\x02\u03EC\u03EB\x03\x02\x02\x02\u03EC" +
    "\u03ED\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EF\x07Q\x02" +
    "\x02\u03EF\x9D\x03\x02\x02\x02\u03F0\u03F5\x05\xA0Q\x02\u03F1\u03F2\x07" +
    "W\x02\x02\u03F2\u03F4\x05\xA0Q\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F7" +
    "\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02" +
    "\u03F6\x9F\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03F9\x05" +
    "\xF6|\x02\u03F9\u03FA\x05\xAAV\x02\u03FA\xA1\x03\x02\x02\x02\u03FB\u03FF" +
    "\x07R\x02\x02\u03FC\u03FE\x05,\x17\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE" +
    "\u0401\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02" +
    "\x02\x02\u0400\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402" +
    "\u0403\x07S\x02\x02\u0403\xA3\x03\x02\x02\x02\u0404\u0408\x07R\x02\x02" +
    "\u0405\u0407\x05\xA6T\x02\u0406\u0405\x03\x02\x02\x02\u0407\u040A\x03" +
    "\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409" +
    "\u040B\x03\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040C\x07S\x02" +
    "\x02\u040C\xA5\x03\x02\x02\x02\u040D\u040E\x05\xA8U\x02\u040E\u040F\x07" +
    "V\x02\x02\u040F\u0413\x03\x02\x02\x02\u0410\u0413\x05\xACW\x02\u0411\u0413" +
    "\x05\xAEX\x02\u0412\u040D\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02" +
    "\u0412\u0411\x03\x02\x02\x02\u0413\xA7\x03\x02\x02\x02\u0414\u0416\x05" +
    "\x0E\b\x02\u0415\u0414\x03\x02\x02\x02\u0416\u0419\x03\x02\x02\x02\u0417" +
    "\u0415\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0422\x03\x02" +
    "\x02\x02\u0419\u0417\x03\x02\x02\x02\u041A\u041B\x07?\x02\x02\u041B\u041C" +
    "\x05\xAAV\x02\u041C\u041D\x07Y\x02\x02\u041D\u041E\x05\xCCg\x02\u041E" +
    "\u0423\x03\x02\x02\x02\u041F\u0420\x05\xF6|\x02\u0420\u0421\x05N(\x02" +
    "\u0421\u0423\x03\x02\x02\x02\u0422\u041A\x03\x02\x02\x02\u0422\u041F\x03" +
    "\x02\x02\x02\u0423\xA9\x03\x02\x02\x02\u0424\u0425\t\x06\x02\x02\u0425" +
    "\xAB\x03\x02\x02\x02\u0426\u0428\x05\f\x07\x02\u0427\u0426\x03\x02\x02" +
    "\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429\u042A" +
    "\x03\x02\x02\x02\u042A\u042F\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02" +
    "\u042C\u0430\x05\x16\f\x02\u042D\u0430\x05&\x14\x02\u042E\u0430\x05\x9A" +
    "N\x02\u042F\u042C\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u042F\u042E" +
    "\x03\x02\x02\x02\u0430\u0433\x03\x02\x02\x02\u0431\u0433\x07V\x02\x02" +
    "\u0432\u0429\x03\x02\x02\x02\u0432\u0431\x03\x02\x02\x02\u0433\xAD\x03" +
    "\x02\x02\x02\u0434\u04A6\x05\xA4S\x02\u0435\u0436\x07\x04\x02\x02\u0436" +
    "\u0439\x05\xCCg\x02\u0437\u0438\x07_\x02\x02\u0438\u043A\x05\xCCg\x02" +
    "\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u043B\x03" +
    "\x02\x02\x02\u043B\u043C\x07V\x02\x02\u043C\u04A6\x03\x02\x02\x02\u043D" +
    "\u043E\x07\x18\x02\x02\u043E\u043F\x05\xC6d\x02\u043F\u0442\x05\xAEX\x02" +
    "\u0440\u0441\x07\x11\x02\x02\u0441\u0443\x05\xAEX\x02\u0442\u0440\x03" +
    "\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443\u04A6\x03\x02\x02\x02\u0444" +
    "\u0445\x07\x17\x02\x02\u0445\u0446\x07P\x02\x02\u0446\u0447\x05\xC0a\x02" +
    "\u0447\u0448\x07Q\x02\x02\u0448\u0449\x05\xAEX\x02\u0449\u04A6\x03\x02" +
    "\x02\x02\u044A\u044B\x074\x02\x02\u044B\u044C\x05\xC6d\x02\u044C\u044D" +
    "\x05\xAEX\x02\u044D\u04A6\x03\x02\x02\x02\u044E\u044F\x07\x0F\x02\x02" +
    "\u044F\u0450\x05\xAEX\x02\u0450\u0451\x074\x02\x02\u0451\u0452\x05\xC6" +
    "d\x02\u0452\u0453\x07V\x02\x02\u0453\u04A6\x03\x02\x02\x02\u0454\u0455" +
    "\x071\x02\x02\u0455\u045F\x05\xA4S\x02\u0456\u0458\x05\xB0Y\x02\u0457" +
    "\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u0457\x03\x02" +
    "\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B" +
    "\u045D\x05\xB4[\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02\x02" +
    "\x02\u045D\u0460\x03\x02\x02\x02\u045E\u0460\x05\xB4[\x02\u045F\u0457" +
    "\x03\x02\x02\x02\u045F\u045E\x03\x02\x02\x02\u0460\u04A6\x03\x02\x02\x02" +
    "\u0461\u0462\x071\x02\x02\u0462\u0463\x05\xB6\\\x02\u0463\u0467\x05\xA4" +
    "S\x02\u0464\u0466\x05\xB0Y\x02\u0465\u0464\x03\x02\x02\x02\u0466\u0469" +
    "\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02" +
    "\u0468\u046B\x03\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u046A\u046C\x05" +
    "\xB4[\x02\u046B\u046A\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02\u046C" +
    "\u04A6\x03\x02\x02\x02\u046D\u046E\x07+\x02\x02\u046E\u046F\x05\xC6d\x02" +
    "\u046F\u0473\x07R\x02\x02\u0470\u0472\x05\xBC_\x02\u0471\u0470\x03\x02" +
    "\x02\x02\u0472\u0475\x03\x02\x02\x02\u0473\u0471\x03\x02\x02\x02\u0473" +
    "\u0474\x03\x02\x02\x02\u0474\u0479\x03\x02\x02\x02\u0475\u0473\x03\x02" +
    "\x02\x02\u0476\u0478\x05\xBE`\x02\u0477\u0476\x03\x02\x02\x02\u0478\u047B" +
    "\x03\x02\x02\x02\u0479\u0477\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02" +
    "\u047A\u047C\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047C\u047D\x07" +
    "S\x02\x02\u047D\u04A6\x03\x02\x02\x02\u047E\u047F\x07,\x02\x02\u047F\u0480" +
    "\x05\xC6d\x02\u0480\u0481\x05\xA4S\x02\u0481\u04A6\x03\x02\x02\x02\u0482" +
    "\u0484\x07&\x02\x02\u0483\u0485\x05\xCCg\x02\u0484\u0483\x03\x02\x02\x02" +
    "\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u04A6\x07" +
    "V\x02\x02\u0487\u0488\x07.\x02\x02\u0488\u0489\x05\xCCg\x02\u0489\u048A" +
    "\x07V\x02\x02\u048A\u04A6\x03\x02\x02\x02\u048B\u048D\x07\x06\x02\x02" +
    "\u048C\u048E\x05\xAAV\x02\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03" +
    "\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F\u04A6\x07V\x02\x02\u0490" +
    "\u0492\x07\r\x02\x02\u0491\u0493\x05\xAAV\x02\u0492\u0491\x03\x02\x02" +
    "\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03\x02\x02\x02\u0494\u04A6" +
    "\x07V\x02\x02\u0495\u0496\x07@\x02\x02\u0496\u0497\x05\xCCg\x02\u0497" +
    "\u0498\x07V\x02\x02\u0498\u04A6\x03\x02\x02\x02\u0499\u04A6\x07V\x02\x02" +
    "\u049A\u049B\x05\xCCg\x02\u049B\u049C\x07V\x02\x02\u049C\u04A6\x03\x02" +
    "\x02\x02\u049D\u049F\x05\xD8m\x02\u049E\u04A0\x07V\x02\x02\u049F\u049E" +
    "\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\u04A6\x03\x02\x02\x02" +
    "\u04A1\u04A2\x05\xAAV\x02\u04A2\u04A3\x07_\x02\x02\u04A3\u04A4\x05\xAE" +
    "X\x02\u04A4\u04A6\x03\x02\x02\x02\u04A5\u0434\x03\x02\x02\x02\u04A5\u0435" +
    "\x03\x02\x02\x02\u04A5\u043D\x03\x02\x02\x02\u04A5\u0444\x03\x02\x02\x02" +
    "\u04A5\u044A\x03\x02\x02\x02\u04A5\u044E\x03\x02\x02\x02\u04A5\u0454\x03" +
    "\x02\x02\x02\u04A5\u0461\x03\x02\x02\x02\u04A5\u046D\x03\x02\x02\x02\u04A5" +
    "\u047E\x03\x02\x02\x02\u04A5\u0482\x03\x02\x02\x02\u04A5\u0487\x03\x02" +
    "\x02\x02\u04A5\u048B\x03\x02\x02\x02\u04A5\u0490\x03\x02\x02\x02\u04A5" +
    "\u0495\x03\x02\x02\x02\u04A5\u0499\x03\x02\x02\x02\u04A5\u049A\x03\x02" +
    "\x02\x02\u04A5\u049D\x03\x02\x02\x02\u04A5\u04A1\x03\x02\x02\x02\u04A6" +
    "\xAF\x03\x02\x02\x02\u04A7\u04A8\x07\t\x02\x02\u04A8\u04AC\x07P\x02\x02" +
    "\u04A9\u04AB\x05\x0E\b\x02\u04AA\u04A9\x03\x02\x02\x02\u04AB\u04AE\x03" +
    "\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD" +
    "\u04AF\x03\x02\x02\x02\u04AE\u04AC\x03\x02\x02\x02\u04AF\u04B0\x05\xB2" +
    "Z\x02\u04B0\u04B1\x05\xAAV\x02\u04B1\u04B2\x07Q\x02\x02\u04B2\u04B3\x05" +
    "\xA4S\x02\u04B3\xB1\x03\x02\x02\x02\u04B4\u04B9\x05n8\x02\u04B5\u04B6" +
    "\x07m\x02\x02\u04B6\u04B8\x05n8\x02\u04B7\u04B5\x03\x02\x02\x02\u04B8" +
    "\u04BB\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04BA\x03\x02" +
    "\x02\x02\u04BA\xB3\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC\u04BD" +
    "\x07\x15\x02\x02\u04BD\u04BE\x05\xA4S\x02\u04BE\xB5\x03\x02\x02\x02\u04BF" +
    "\u04C0\x07P\x02\x02\u04C0\u04C2\x05\xB8]\x02\u04C1\u04C3\x07V\x02\x02" +
    "\u04C2\u04C1\x03\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\u04C4\x03" +
    "\x02\x02\x02\u04C4\u04C5\x07Q\x02\x02\u04C5\xB7\x03\x02\x02\x02\u04C6" +
    "\u04CB\x05\xBA^\x02\u04C7\u04C8\x07V\x02\x02\u04C8\u04CA\x05\xBA^\x02" +
    "\u04C9\u04C7\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03" +
    "\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\xB9\x03\x02\x02\x02\u04CD" +
    "\u04CB\x03\x02\x02\x02\u04CE\u04D0\x05\x0E\b\x02\u04CF\u04CE\x03\x02\x02" +
    "\x02\u04D0\u04D3\x03\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1\u04D2" +
    "\x03\x02\x02\x02\u04D2\u04D9\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02" +
    "\u04D4\u04D5\x07?\x02\x02\u04D5\u04DA\x05\xAAV\x02\u04D6\u04D7\x05X-\x02" +
    "\u04D7\u04D8\x05R*\x02\u04D8\u04DA\x03\x02\x02\x02\u04D9\u04D4\x03\x02" +
    "\x02\x02\u04D9\u04D6\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB" +
    "\u04DC\x07Y\x02\x02\u04DC\u04DD\x05\xCCg\x02\u04DD\u04E0\x03\x02\x02\x02" +
    "\u04DE\u04E0\x05\xAAV\x02\u04DF\u04D1\x03\x02\x02\x02\u04DF\u04DE\x03" +
    "\x02\x02\x02\u04E0\xBB\x03\x02\x02\x02\u04E1\u04E3\x05\xBE`\x02\u04E2" +
    "\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02\x02\x02\u04E4\u04E2\x03\x02" +
    "\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E7\x03\x02\x02\x02\u04E6" +
    "\u04E8\x05\xA6T\x02\u04E7\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02" +
    "\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\xBD" +
    "\x03\x02\x02\x02\u04EB\u04F1\x07\b\x02\x02\u04EC\u04F2\x05\xCCg\x02\u04ED" +
    "\u04F2\x07\x82\x02\x02\u04EE\u04EF\x05\xF6|\x02\u04EF\u04F0\x05\xAAV\x02" +
    "\u04F0\u04F2\x03\x02\x02\x02\u04F1\u04EC\x03\x02\x02\x02\u04F1\u04ED\x03" +
    "\x02\x02\x02\u04F1\u04EE\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3" +
    "\u04F7\x07_\x02\x02\u04F4\u04F5\x07\x0E\x02\x02\u04F5\u04F7\x07_\x02\x02" +
    "\u04F6\u04EB\x03\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7\xBF\x03" +
    "\x02\x02\x02\u04F8\u0505\x05\xC4c\x02\u04F9\u04FB\x05\xC2b\x02\u04FA\u04F9" +
    "\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02" +
    "\u04FC\u04FE\x07V\x02\x02\u04FD\u04FF\x05\xCCg\x02\u04FE\u04FD\x03\x02" +
    "\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500" +
    "\u0502\x07V\x02\x02\u0501\u0503\x05\xC8e\x02\u0502\u0501\x03\x02\x02\x02" +
    "\u0502\u0503\x03\x02\x02\x02\u0503\u0505\x03\x02\x02\x02\u0504\u04F8\x03" +
    "\x02\x02\x02\u0504\u04FA\x03\x02\x02\x02\u0505\xC1\x03\x02\x02\x02\u0506" +
    "\u0509\x05\xA8U\x02\u0507\u0509\x05\xC8e\x02\u0508\u0506\x03\x02\x02\x02" +
    "\u0508\u0507\x03\x02\x02\x02\u0509\xC3\x03\x02\x02\x02\u050A\u050C\x05" +
    "\x0E\b\x02\u050B\u050A\x03\x02\x02\x02\u050C\u050F\x03\x02\x02\x02\u050D" +
    "\u050B\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u0512\x03\x02" +
    "\x02\x02\u050F\u050D\x03\x02\x02\x02\u0510\u0513\x05\xF6|\x02\u0511\u0513" +
    "\x07?\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0511\x03\x02\x02\x02" +
    "\u0513\u0514\x03\x02\x02\x02\u0514\u0515\x05R*\x02\u0515\u0516\x07_\x02" +
    "\x02\u0516\u0517\x05\xCCg\x02\u0517\xC5\x03\x02\x02\x02\u0518\u0519\x07" +
    "P\x02\x02\u0519\u051A\x05\xCCg\x02\u051A\u051B\x07Q\x02\x02\u051B\xC7" +
    "\x03\x02\x02\x02\u051C\u0521\x05\xCCg\x02\u051D\u051E\x07W\x02\x02\u051E" +
    "\u0520\x05\xCCg\x02\u051F\u051D\x03\x02\x02\x02\u0520\u0523\x03\x02\x02" +
    "\x02\u0521\u051F\x03\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\xC9" +
    "\x03\x02\x02\x02\u0523\u0521\x03\x02\x02\x02\u0524\u0525\x05\xAAV\x02" +
    "\u0525\u0527\x07P\x02\x02\u0526\u0528\x05\xC8e\x02\u0527\u0526\x03\x02" +
    "\x02\x02\u0527\u0528\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529" +
    "\u052A\x07Q\x02\x02\u052A\u0538\x03\x02\x02\x02\u052B\u052C\x07-\x02\x02" +
    "\u052C\u052E\x07P\x02\x02\u052D\u052F\x05\xC8e\x02\u052E\u052D\x03\x02" +
    "\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530" +
    "\u0538\x07Q\x02\x02\u0531\u0532\x07*\x02\x02\u0532\u0534\x07P\x02\x02" +
    "\u0533\u0535\x05\xC8e\x02\u0534\u0533\x03\x02\x02\x02\u0534\u0535\x03" +
    "\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0538\x07Q\x02\x02\u0537" +
    "\u0524\x03\x02\x02\x02\u0537\u052B\x03\x02\x02\x02\u0537\u0531\x03\x02" +
    "\x02\x02\u0538\xCB\x03\x02\x02\x02\u0539\u053A\bg\x01\x02\u053A\u0567" +
    "\x05\xD6l\x02\u053B\u0567\x05\xCAf\x02\u053C\u053D\x07!\x02\x02\u053D" +
    "\u0567\x05\xE2r\x02\u053E\u0542\x07P\x02\x02\u053F\u0541\x05x=\x02\u0540" +
    "\u053F\x03\x02\x02\x02\u0541\u0544\x03\x02\x02\x02\u0542\u0540\x03\x02" +
    "\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0545\x03\x02\x02\x02\u0544" +
    "\u0542\x03\x02\x02\x02\u0545\u054A\x05\xF6|\x02\u0546\u0547\x07l\x02\x02" +
    "\u0547\u0549\x05\xF6|\x02\u0548\u0546\x03\x02\x02\x02\u0549\u054C\x03" +
    "\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B" +
    "\u054D\x03\x02\x02\x02\u054C\u054A\x03\x02\x02\x02\u054D\u054E\x07Q\x02" +
    "\x02\u054E\u054F\x05\xCCg\x18\u054F\u0567\x03\x02\x02\x02\u0550\u0551" +
    "\t\x07\x02\x02\u0551\u0567\x05\xCCg\x16\u0552\u0553\t\b\x02\x02\u0553" +
    "\u0567\x05\xCCg\x15\u0554\u0567\x05\xD0i\x02\u0555\u0567\x05\xD8m\x02" +
    "\u0556\u0557\x05\xF6|\x02\u0557\u055D\x07|\x02\x02\u0558\u055A\x05\xFA" +
    "~\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A\u055B" +
    "\x03\x02\x02\x02\u055B\u055E\x05\xAAV\x02\u055C\u055E\x07!\x02\x02\u055D" +
    "\u0559\x03\x02\x02\x02\u055D\u055C\x03\x02\x02\x02\u055E\u0567\x03\x02" +
    "\x02\x02\u055F\u0560\x05\xE0q\x02\u0560\u0562\x07|\x02\x02\u0561\u0563" +
    "\x05\xFA~\x02\u0562\u0561\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02" +
    "\u0563\u0564\x03\x02\x02\x02\u0564\u0565\x07!\x02\x02\u0565\u0567\x03" +
    "\x02\x02\x02\u0566\u0539\x03\x02\x02\x02\u0566\u053B\x03\x02\x02\x02\u0566" +
    "\u053C\x03\x02\x02\x02\u0566\u053E\x03\x02\x02\x02\u0566\u0550\x03\x02" +
    "\x02\x02\u0566\u0552\x03\x02\x02\x02\u0566\u0554\x03\x02\x02\x02\u0566" +
    "\u0555\x03\x02\x02\x02\u0566\u0556\x03\x02\x02\x02\u0566\u055F\x03\x02" +
    "\x02\x02\u0567\u05BB\x03\x02\x02\x02\u0568\u0569\f\x14\x02\x02\u0569\u056A" +
    "\t\t\x02\x02\u056A\u05BA\x05\xCCg\x15\u056B\u056C\f\x13\x02\x02\u056C" +
    "\u056D\t\n\x02\x02\u056D\u05BA\x05\xCCg\x14\u056E\u0576\f\x12\x02\x02" +
    "\u056F\u0570\x07[\x02\x02\u0570\u0577\x07[\x02\x02\u0571\u0572\x07Z\x02" +
    "\x02\u0572\u0573\x07Z\x02\x02\u0573\u0577\x07Z\x02\x02\u0574\u0575\x07" +
    "Z\x02\x02\u0575\u0577\x07Z\x02\x02\u0576\u056F\x03\x02\x02\x02\u0576\u0571" +
    "\x03\x02\x02\x02\u0576\u0574\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02" +
    "\u0578\u05BA\x05\xCCg\x13\u0579\u057A\f\x11\x02\x02\u057A\u057B\t\v\x02" +
    "\x02\u057B\u05BA\x05\xCCg\x12\u057C\u057D\f\x0F\x02\x02\u057D\u057E\t" +
    "\f\x02\x02\u057E\u05BA\x05\xCCg\x10\u057F\u0580\f\x0E\x02\x02\u0580\u0581" +
    "\x07l\x02\x02\u0581\u05BA\x05\xCCg\x0F\u0582\u0583\f\r\x02\x02\u0583\u0584" +
    "\x07n\x02\x02\u0584\u05BA\x05\xCCg\x0E\u0585\u0586\f\f\x02\x02\u0586\u0587" +
    "\x07m\x02\x02\u0587\u05BA\x05\xCCg\r\u0588\u0589\f\v\x02\x02\u0589\u058A" +
    "\x07d\x02\x02\u058A\u05BA\x05\xCCg\f\u058B\u058C\f\n\x02\x02\u058C\u058D" +
    "\x07e\x02\x02\u058D\u05BA\x05\xCCg\v\u058E\u058F\f\t\x02\x02\u058F\u0590" +
    "\x07^\x02\x02\u0590\u0591\x05\xCCg\x02\u0591\u0592\x07_\x02\x02\u0592" +
    "\u0593\x05\xCCg\t\u0593\u05BA\x03\x02\x02\x02\u0594\u0595\f\b\x02\x02" +
    "\u0595\u0596\t\r\x02\x02\u0596\u05BA\x05\xCCg\b\u0597\u0598\f\x1C\x02" +
    "\x02\u0598\u05A4\x07X\x02\x02\u0599\u05A5\x05\xAAV\x02\u059A\u05A5\x05" +
    "\xCAf\x02\u059B\u05A5\x07-\x02\x02\u059C\u059E\x07!\x02\x02\u059D\u059F" +
    "\x05\xF2z\x02\u059E\u059D\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02" +
    "\u059F\u05A0\x03\x02\x02\x02\u05A0\u05A5\x05\xE6t\x02\u05A1\u05A2\x07" +
    "*\x02\x02\u05A2\u05A5\x05\xFC\x7F\x02\u05A3\u05A5\x05\xECw\x02\u05A4\u0599" +
    "\x03\x02\x02\x02\u05A4\u059A\x03\x02\x02\x02\u05A4\u059B\x03\x02\x02\x02" +
    "\u05A4\u059C\x03\x02\x02\x02\u05A4\u05A1\x03\x02\x02\x02\u05A4\u05A3\x03" +
    "\x02\x02\x02\u05A5\u05BA\x03\x02\x02\x02\u05A6\u05A7\f\x1B\x02\x02\u05A7" +
    "\u05A8\x07T\x02\x02\u05A8\u05A9\x05\xCCg\x02\u05A9\u05AA\x07U\x02\x02" +
    "\u05AA\u05BA\x03\x02\x02\x02\u05AB\u05AC\f\x17\x02\x02\u05AC\u05BA\t\x0E" +
    "\x02\x02\u05AD\u05AE\f\x10\x02\x02\u05AE\u05B1\x07\x1C\x02\x02\u05AF\u05B2" +
    "\x05\xF6|\x02\u05B0\u05B2\x05\xCEh\x02\u05B1\u05AF\x03\x02\x02\x02\u05B1" +
    "\u05B0\x03\x02\x02\x02\u05B2\u05BA\x03\x02\x02\x02\u05B3\u05B4\f\x05\x02" +
    "\x02\u05B4\u05B6\x07|\x02\x02\u05B5\u05B7\x05\xFA~\x02\u05B6\u05B5\x03" +
    "\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8" +
    "\u05BA\x05\xAAV\x02\u05B9\u0568\x03\x02\x02\x02\u05B9\u056B\x03\x02\x02" +
    "\x02\u05B9\u056E\x03\x02\x02\x02\u05B9\u0579\x03\x02\x02\x02\u05B9\u057C" +
    "\x03\x02\x02\x02\u05B9\u057F\x03\x02\x02\x02\u05B9\u0582\x03\x02\x02\x02" +
    "\u05B9\u0585\x03\x02\x02\x02\u05B9\u0588\x03\x02\x02\x02\u05B9\u058B\x03" +
    "\x02\x02\x02\u05B9\u058E\x03\x02\x02\x02\u05B9\u0594\x03\x02\x02\x02\u05B9" +
    "\u0597\x03\x02\x02\x02\u05B9\u05A6\x03\x02\x02\x02\u05B9\u05AB\x03\x02" +
    "\x02\x02\u05B9\u05AD\x03\x02\x02\x02\u05B9\u05B3\x03\x02\x02\x02\u05BA" +
    "\u05BD\x03\x02\x02\x02\u05BB\u05B9\x03\x02\x02\x02\u05BB\u05BC\x03\x02" +
    "\x02\x02\u05BC\xCD\x03\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BE\u05C0" +
    "\x05\x0E\b\x02\u05BF\u05BE\x03\x02\x02\x02\u05C0\u05C3\x03\x02\x02\x02" +
    "\u05C1\u05BF\x03\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2\u05C4\x03" +
    "\x02\x02\x02\u05C3\u05C1\x03\x02\x02\x02\u05C4\u05C8\x05\xF6|\x02\u05C5" +
    "\u05C7\x05x=\x02\u05C6\u05C5\x03\x02\x02\x02\u05C7\u05CA\x03\x02\x02\x02" +
    "\u05C8\u05C6\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CB\x03" +
    "\x02\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CB\u05CC\x05\xAAV\x02\u05CC" +
    "\xCF\x03\x02\x02\x02\u05CD\u05CE\x05\xD2j\x02\u05CE\u05CF\x07{\x02\x02" +
    "\u05CF\u05D0\x05\xD4k\x02\u05D0\xD1\x03\x02\x02\x02\u05D1\u05E8\x05\xAA" +
    "V\x02\u05D2\u05D4\x07P\x02\x02\u05D3\u05D5\x05d3\x02\u05D4\u05D3\x03\x02" +
    "\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6" +
    "\u05E8\x07Q\x02\x02\u05D7\u05D8\x07P\x02\x02\u05D8\u05DD\x05\xAAV\x02" +
    "\u05D9\u05DA\x07W\x02\x02\u05DA\u05DC\x05\xAAV\x02\u05DB\u05D9\x03\x02" +
    "\x02\x02\u05DC\u05DF\x03\x02\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD" +
    "\u05DE\x03\x02\x02\x02\u05DE\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02" +
    "\x02\x02\u05E0\u05E1\x07Q\x02\x02\u05E1\u05E8\x03\x02\x02\x02\u05E2\u05E4" +
    "\x07P\x02\x02\u05E3\u05E5\x05j6\x02\u05E4\u05E3\x03\x02\x02\x02\u05E4" +
    "\u05E5\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E8\x07Q\x02" +
    "\x02\u05E7\u05D1\x03\x02\x02\x02\u05E7\u05D2\x03\x02\x02\x02\u05E7\u05D7" +
    "\x03\x02\x02\x02\u05E7\u05E2\x03\x02\x02\x02\u05E8\xD3\x03\x02\x02\x02" +
    "\u05E9\u05EC\x05\xCCg\x02\u05EA\u05EC\x05\xA4S\x02\u05EB\u05E9\x03\x02" +
    "\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\xD5\x03\x02\x02\x02\u05ED\u05EE" +
    "\x07P\x02\x02\u05EE\u05EF\x05\xCCg\x02\u05EF\u05F0\x07Q\x02\x02\u05F0" +
    "\u0600\x03\x02\x02\x02\u05F1\u0600\x07-\x02\x02\u05F2\u0600\x07*\x02\x02" +
    "\u05F3\u0600\x05p9\x02\u05F4\u0600\x05\xAAV\x02\u05F5\u05F6\x054\x1B\x02" +
    "\u05F6\u05F7\x07X\x02\x02\u05F7\u05F8\x07\v\x02\x02\u05F8\u0600\x03\x02" +
    "\x02\x02\u05F9\u05FD\x05\xF2z\x02\u05FA\u05FE\x05\xFE\x80\x02\u05FB\u05FC" +
    "\x07-\x02\x02\u05FC\u05FE\x05\u0100\x81\x02\u05FD\u05FA\x03\x02\x02\x02" +
    "\u05FD\u05FB\x03\x02\x02\x02\u05FE\u0600\x03\x02\x02\x02\u05FF\u05ED\x03" +
    "\x02\x02\x02\u05FF\u05F1\x03\x02\x02\x02\u05FF\u05F2\x03\x02\x02\x02\u05FF" +
    "\u05F3\x03\x02\x02\x02\u05FF\u05F4\x03\x02\x02\x02\u05FF\u05F5\x03\x02" +
    "\x02\x02\u05FF\u05F9\x03\x02\x02\x02\u0600\xD7\x03\x02\x02\x02\u0601\u0602" +
    "\x07+\x02\x02\u0602\u0603\x05\xC6d\x02\u0603\u0607\x07R\x02\x02\u0604" +
    "\u0606\x05\xDAn\x02\u0605\u0604\x03\x02\x02\x02\u0606\u0609\x03\x02\x02" +
    "\x02\u0607\u0605\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u060A" +
    "\x03\x02\x02\x02\u0609\u0607\x03\x02\x02\x02\u060A\u060B\x07S\x02\x02" +
    "\u060B\xD9\x03\x02\x02\x02\u060C\u0610\x07\b\x02\x02\u060D\u0611\x05\xC8" +
    "e\x02\u060E\u0611\x07O\x02\x02\u060F\u0611\x05\xDCo\x02\u0610\u060D\x03" +
    "\x02\x02\x02\u0610\u060E\x03\x02\x02\x02\u0610\u060F\x03\x02\x02\x02\u0611" +
    "\u0612\x03\x02\x02\x02\u0612\u0613\t\x0F\x02\x02\u0613\u0618\x05\xDEp" +
    "\x02\u0614\u0615\x07\x0E\x02\x02\u0615\u0616\t\x0F\x02\x02\u0616\u0618" +
    "\x05\xDEp\x02\u0617\u060C\x03\x02\x02\x02\u0617\u0614\x03\x02\x02\x02" +
    "\u0618\xDB\x03\x02\x02\x02\u0619\u061A\bo\x01\x02\u061A\u061B\x07P\x02" +
    "\x02\u061B\u061C\x05\xDCo\x02\u061C\u061D\x07Q\x02\x02\u061D\u0634\x03" +
    "\x02\x02\x02\u061E\u0620\x05\x0E\b\x02\u061F\u061E\x03\x02\x02\x02\u0620" +
    "\u0623\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621\u0622\x03\x02" +
    "\x02\x02\u0622\u0624\x03\x02\x02\x02\u0623\u0621\x03\x02\x02\x02\u0624" +
    "\u0628\x05\xF6|\x02\u0625\u0627\x05x=\x02\u0626\u0625\x03\x02\x02\x02" +
    "\u0627\u062A\x03\x02\x02\x02\u0628\u0626\x03\x02\x02\x02\u0628\u0629\x03" +
    "\x02\x02\x02\u0629\u062B\x03\x02\x02\x02\u062A\u0628\x03\x02\x02\x02\u062B" +
    "\u0630\x05\xAAV\x02\u062C\u062D\x07d\x02\x02\u062D\u062F\x05\xCCg\x02" +
    "\u062E\u062C\x03\x02\x02\x02\u062F\u0632\x03\x02\x02\x02\u0630\u062E\x03" +
    "\x02\x02\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0634\x03\x02\x02\x02\u0632" +
    "\u0630\x03\x02\x02\x02\u0633\u0619\x03\x02\x02\x02\u0633\u0621\x03\x02" +
    "\x02\x02\u0634\u063A\x03\x02\x02\x02\u0635\u0636\f\x03\x02\x02\u0636\u0637" +
    "\x07d\x02\x02\u0637\u0639\x05\xCCg\x02\u0638\u0635\x03\x02\x02\x02\u0639" +
    "\u063C\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02\u063A\u063B\x03\x02" +
    "\x02\x02\u063B\xDD\x03\x02\x02\x02\u063C\u063A\x03\x02\x02\x02\u063D\u0645" +
    "\x05\xA4S\x02\u063E\u0640\x05\xA6T\x02\u063F\u063E\x03\x02\x02\x02\u0640" +
    "\u0643\x03\x02\x02\x02\u0641\u063F\x03\x02\x02\x02\u0641\u0642\x03\x02" +
    "\x02\x02\u0642\u0645\x03\x02\x02\x02\u0643\u0641\x03\x02\x02\x02\u0644" +
    "\u063D\x03\x02\x02\x02\u0644\u0641\x03\x02\x02\x02\u0645\xDF\x03\x02\x02" +
    "\x02\u0646\u0647\x05X-\x02\u0647\u0648\x07X\x02\x02\u0648\u064A\x03\x02" +
    "\x02\x02\u0649\u0646\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A" +
    "\u064E\x03\x02\x02\x02\u064B\u064D\x05x=\x02\u064C\u064B\x03\x02\x02\x02" +
    "\u064D\u0650\x03\x02\x02\x02\u064E\u064C\x03\x02\x02\x02\u064E\u064F\x03" +
    "\x02\x02\x02\u064F\u0651\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0651" +
    "\u0653\x05\xAAV\x02\u0652\u0654\x05\xFA~\x02\u0653\u0652\x03\x02\x02\x02" +
    "\u0653\u0654\x03\x02\x02\x02\u0654\xE1\x03\x02\x02\x02\u0655\u0656\x05" +
    "\xF2z\x02\u0656\u0657\x05\xE4s\x02\u0657\u0658\x05\xEAv\x02\u0658\u065F" +
    "\x03\x02\x02\x02\u0659\u065C\x05\xE4s\x02\u065A\u065D\x05\xE8u\x02\u065B" +
    "\u065D\x05\xEAv\x02\u065C\u065A\x03\x02";
JavaParser._serializedATNSegment3 = "\x02\x02\u065C\u065B\x03\x02\x02\x02\u065D\u065F\x03\x02\x02\x02\u065E" +
    "\u0655\x03\x02\x02\x02\u065E\u0659\x03\x02\x02\x02\u065F\xE3\x03\x02\x02" +
    "\x02\u0660\u0662\x05\xAAV\x02\u0661\u0663\x05\xEEx\x02\u0662\u0661\x03" +
    "\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u066B\x03\x02\x02\x02\u0664" +
    "\u0665\x07X\x02\x02\u0665\u0667\x05\xAAV\x02\u0666\u0668\x05\xEEx\x02" +
    "\u0667\u0666\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668\u066A\x03" +
    "\x02\x02\x02\u0669\u0664\x03\x02\x02\x02\u066A\u066D\x03\x02\x02\x02\u066B" +
    "\u0669\x03\x02\x02\x02\u066B\u066C\x03\x02\x02\x02\u066C\u0670\x03\x02" +
    "\x02\x02\u066D\u066B\x03\x02\x02\x02\u066E\u0670\x05\xF8}\x02\u066F\u0660" +
    "\x03\x02\x02\x02\u066F\u066E\x03\x02\x02\x02\u0670\xE5\x03\x02\x02\x02" +
    "\u0671\u0673\x05\xAAV\x02\u0672\u0674\x05\xF0y\x02\u0673\u0672\x03\x02" +
    "\x02\x02\u0673\u0674\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675" +
    "\u0676\x05\xEAv\x02\u0676\xE7\x03\x02\x02\x02\u0677\u0693\x07T\x02\x02" +
    "\u0678\u067D\x07U\x02\x02\u0679\u067A\x07T\x02\x02\u067A\u067C\x07U\x02" +
    "\x02\u067B\u0679\x03\x02\x02\x02\u067C\u067F\x03\x02\x02\x02\u067D\u067B" +
    "\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u0680\x03\x02\x02\x02" +
    "\u067F\u067D\x03\x02\x02\x02\u0680\u0694\x05V,\x02\u0681\u0682\x05\xCC" +
    "g\x02\u0682\u0689\x07U\x02\x02\u0683\u0684\x07T\x02\x02\u0684\u0685\x05" +
    "\xCCg\x02\u0685\u0686\x07U\x02\x02\u0686\u0688\x03\x02\x02\x02\u0687\u0683" +
    "\x03\x02\x02\x02\u0688\u068B\x03\x02\x02\x02\u0689\u0687\x03\x02\x02\x02" +
    "\u0689\u068A\x03\x02\x02\x02\u068A\u0690\x03\x02\x02\x02\u068B\u0689\x03" +
    "\x02\x02\x02\u068C\u068D\x07T\x02\x02\u068D\u068F\x07U\x02\x02\u068E\u068C" +
    "\x03\x02\x02\x02\u068F\u0692\x03\x02\x02\x02\u0690\u068E\x03\x02\x02\x02" +
    "\u0690\u0691\x03\x02\x02\x02\u0691\u0694\x03\x02\x02\x02\u0692\u0690\x03" +
    "\x02\x02\x02\u0693\u0678\x03\x02\x02\x02\u0693\u0681\x03\x02\x02\x02\u0694" +
    "\xE9\x03\x02\x02\x02\u0695\u0697\x05\u0100\x81\x02\u0696\u0698\x05(\x15" +
    "\x02\u0697\u0696\x03\x02\x02\x02\u0697\u0698\x03\x02\x02\x02\u0698\xEB" +
    "\x03\x02\x02\x02\u0699\u069A\x05\xF2z\x02\u069A\u069B\x05\xFE\x80\x02" +
    "\u069B\xED\x03\x02\x02\x02\u069C\u069D\x07[\x02\x02\u069D\u06A0\x07Z\x02" +
    "\x02\u069E\u06A0\x05\xFA~\x02\u069F\u069C\x03\x02\x02\x02\u069F\u069E" +
    "\x03\x02\x02\x02\u06A0\xEF\x03\x02\x02\x02\u06A1\u06A2\x07[\x02\x02\u06A2" +
    "\u06A5\x07Z\x02\x02\u06A3\u06A5\x05\xF2z\x02\u06A4\u06A1\x03\x02\x02\x02" +
    "\u06A4\u06A3\x03\x02\x02\x02\u06A5\xF1\x03\x02\x02\x02\u06A6\u06A7\x07" +
    "[\x02\x02\u06A7\u06A8\x05\xF4{\x02\u06A8\u06A9\x07Z\x02\x02\u06A9\xF3" +
    "\x03\x02\x02\x02\u06AA\u06AF\x05\xF6|\x02\u06AB\u06AC\x07W\x02\x02\u06AC" +
    "\u06AE\x05\xF6|\x02\u06AD\u06AB\x03\x02\x02\x02\u06AE\u06B1\x03\x02\x02" +
    "\x02\u06AF\u06AD\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\xF5" +
    "\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B2\u06B4\x05x=\x02\u06B3" +
    "\u06B2\x03\x02\x02\x02\u06B4\u06B7\x03\x02\x02\x02\u06B5\u06B3\x03\x02" +
    "\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06BA\x03\x02\x02\x02\u06B7" +
    "\u06B5\x03\x02\x02\x02\u06B8\u06BB\x05X-\x02\u06B9\u06BB\x05\xF8}\x02" +
    "\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06B9\x03\x02\x02\x02\u06BB\u06C6\x03" +
    "\x02\x02\x02\u06BC\u06BE\x05x=\x02\u06BD\u06BC\x03\x02\x02\x02\u06BE\u06C1" +
    "\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02" +
    "\u06C0\u06C2\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C2\u06C3\x07" +
    "T\x02\x02\u06C3\u06C5\x07U\x02\x02\u06C4\u06BF\x03\x02\x02\x02\u06C5\u06C8" +
    "\x03\x02\x02\x02\u06C6\u06C4\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02" +
    "\u06C7\xF7\x03\x02\x02\x02\u06C8\u06C6\x03\x02\x02\x02\u06C9\u06CA\t\x10" +
    "\x02\x02\u06CA\xF9\x03\x02\x02\x02\u06CB\u06CC\x07[\x02\x02\u06CC\u06D1" +
    "\x05\\/\x02\u06CD\u06CE\x07W\x02\x02\u06CE\u06D0\x05\\/\x02\u06CF\u06CD" +
    "\x03\x02\x02\x02\u06D0\u06D3\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02" +
    "\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D4\x03\x02\x02\x02\u06D3\u06D1\x03" +
    "\x02\x02\x02\u06D4\u06D5\x07Z\x02\x02\u06D5\xFB\x03\x02\x02\x02\u06D6" +
    "\u06E0\x05\u0100\x81\x02\u06D7\u06D9\x07X\x02\x02\u06D8\u06DA\x05\xFA" +
    "~\x02\u06D9\u06D8\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DB" +
    "\x03\x02\x02\x02\u06DB\u06DD\x05\xAAV\x02\u06DC\u06DE\x05\u0100\x81\x02" +
    "\u06DD\u06DC\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06E0\x03" +
    "\x02\x02\x02\u06DF\u06D6\x03\x02\x02\x02\u06DF\u06D7\x03\x02\x02\x02\u06E0" +
    "\xFD\x03\x02\x02\x02\u06E1\u06E2\x07*\x02\x02\u06E2\u06E7\x05\xFC\x7F" +
    "\x02\u06E3\u06E4\x05\xAAV\x02\u06E4\u06E5\x05\u0100\x81\x02\u06E5\u06E7" +
    "\x03\x02\x02\x02\u06E6\u06E1\x03\x02\x02\x02\u06E6\u06E3\x03\x02\x02\x02" +
    "\u06E7\xFF\x03\x02\x02\x02\u06E8\u06EA\x07P\x02\x02\u06E9\u06EB\x05\xC8" +
    "e\x02\u06EA\u06E9\x03\x02\x02\x02\u06EA\u06EB\x03\x02\x02\x02\u06EB\u06EC" +
    "\x03\x02\x02\x02\u06EC\u06ED\x07Q\x02\x02\u06ED\u0101\x03\x02\x02\x02" +
    "\xDD\u0103\u0108\u010E\u0114\u0119\u0122\u0127\u012E\u0136\u0139\u0140" +
    "\u014C\u0150\u015E\u0162\u0165\u0168\u0172\u017A\u0182\u0186\u018D\u0193" +
    "\u0197\u019A\u019D\u01A6\u01AC\u01B1\u01B4\u01BA\u01C0\u01C3\u01C6\u01CE" +
    "\u01D7\u01DE\u01E4\u01E8\u01F4\u01FD\u0202\u0208\u020C\u0218\u0223\u0228" +
    "\u0232\u023A\u0244\u024D\u0258\u025D\u0266\u0270\u0275\u027E\u0284\u028B" +
    "\u0290\u0298\u029C\u029E\u02A7\u02AC\u02B2\u02B8\u02BA\u02C1\u02C6\u02CB" +
    "\u02CE\u02D0\u02DA\u02E4\u02E9\u02EC\u02F1\u02FA\u0301\u030C\u0312\u031D" +
    "\u0327\u0332\u033B\u0340\u0343\u034A\u0354\u035C\u035F\u0362\u036F\u0377" +
    "\u037C\u0384\u0388\u038C\u0390\u0394\u0396\u039A\u03A0\u03A8\u03B2\u03BB" +
    "\u03C5\u03CD\u03DB\u03E2\u03E6\u03EC\u03F5\u03FF\u0408\u0412\u0417\u0422" +
    "\u0429\u042F\u0432\u0439\u0442\u0459\u045C\u045F\u0467\u046B\u0473\u0479" +
    "\u0484\u048D\u0492\u049F\u04A5\u04AC\u04B9\u04C2\u04CB\u04D1\u04D9\u04DF" +
    "\u04E4\u04E9\u04F1\u04F6\u04FA\u04FE\u0502\u0504\u0508\u050D\u0512\u0521" +
    "\u0527\u052E\u0534\u0537\u0542\u054A\u0559\u055D\u0562\u0566\u0576\u059E" +
    "\u05A4\u05B1\u05B6\u05B9\u05BB\u05C1\u05C8\u05D4\u05DD\u05E4\u05E7\u05EB" +
    "\u05FD\u05FF\u0607\u0610\u0617\u0621\u0628\u0630\u0633\u063A\u0641\u0644" +
    "\u0649\u064E\u0653\u065C\u065E\u0662\u0667\u066B\u066F\u0673\u067D\u0689" +
    "\u0690\u0693\u0697\u069F\u06A4\u06AF\u06B5\u06BA\u06BF\u06C6\u06D1\u06D9" +
    "\u06DD\u06DF\u06E6\u06EA";
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
    typeRef(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeRefContext);
        }
        else {
            return this.getRuleContext(i, TypeRefContext);
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
class TypeRefContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return JavaParser.RULE_typeRef; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeRef) {
            listener.enterTypeRef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeRef) {
            listener.exitTypeRef(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeRef) {
            return visitor.visitTypeRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeRefContext = TypeRefContext;
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
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    classOrInterfaceType() {
        return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
    }
    variableDeclaratorId() {
        return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
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
