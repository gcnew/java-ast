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
exports.LambdaLVTIListContext = exports.LastFormalParameterContext = exports.FormalParameterContext = exports.FormalParameterListContext = exports.ReceiverParameterContext = exports.FormalParametersContext = exports.QualifiedNameListContext = exports.TypeArgumentContext = exports.ClassOrInterfaceTypeContext = exports.ArrayInitializerContext = exports.VariableInitializerContext = exports.VariableDeclaratorIdContext = exports.VariableDeclaratorContext = exports.VariableDeclaratorsContext = exports.InterfaceCommonBodyDeclarationContext = exports.GenericInterfaceMethodDeclarationContext = exports.InterfaceMethodModifierContext = exports.InterfaceMethodDeclarationContext = exports.ConstantDeclaratorContext = exports.ConstDeclarationContext = exports.InterfaceMemberDeclarationContext = exports.InterfaceBodyDeclarationContext = exports.FieldDeclarationContext = exports.ConstructorDeclarationContext = exports.GenericConstructorDeclarationContext = exports.GenericMethodDeclarationContext = exports.TypeTypeOrVoidContext = exports.MethodBodyContext = exports.MethodDeclarationContext = exports.MemberDeclarationContext = exports.ClassBodyDeclarationContext = exports.InterfaceBodyContext = exports.ClassBodyContext = exports.InterfaceDeclarationContext = exports.EnumBodyDeclarationsContext = exports.EnumConstantContext = exports.EnumConstantsContext = exports.EnumDeclarationContext = exports.TypeBoundContext = exports.TypeParameterContext = exports.TypeParametersContext = exports.ClassDeclarationContext = exports.VariableModifierContext = exports.ClassOrInterfaceModifierContext = exports.ModifierContext = exports.TypeDeclarationContext = exports.ImportDeclarationContext = exports.PackageDeclarationContext = exports.CompilationUnitContext = exports.JavaParser = void 0;
exports.PatternContext = exports.ExpressionContext = exports.MethodCallContext = exports.ExpressionListContext = exports.ParExpressionContext = exports.EnhancedForControlContext = exports.ForInitContext = exports.ForControlContext = exports.SwitchLabelContext = exports.SwitchBlockStatementGroupContext = exports.ResourceContext = exports.ResourcesContext = exports.ResourceSpecificationContext = exports.FinallyBlockContext = exports.CatchTypeContext = exports.CatchClauseContext = exports.StatementContext = exports.LocalTypeDeclarationContext = exports.IdentifierContext = exports.LocalVariableDeclarationContext = exports.BlockStatementContext = exports.BlockContext = exports.RecordBodyContext = exports.RecordComponentContext = exports.RecordComponentListContext = exports.RecordHeaderContext = exports.RecordDeclarationContext = exports.RequiresModifierContext = exports.ModuleDirectiveContext = exports.ModuleBodyContext = exports.ModuleDeclarationContext = exports.DefaultValueContext = exports.AnnotationConstantRestContext = exports.AnnotationMethodRestContext = exports.AnnotationMethodOrConstantRestContext = exports.AnnotationTypeElementRestContext = exports.AnnotationTypeElementDeclarationContext = exports.AnnotationTypeBodyContext = exports.AnnotationTypeDeclarationContext = exports.ElementValueArrayInitializerContext = exports.ElementValueContext = exports.ElementValuePairContext = exports.ElementValuePairsContext = exports.AnnotationContext = exports.AltAnnotationQualifiedNameContext = exports.FloatLiteralContext = exports.IntegerLiteralContext = exports.LiteralContext = exports.QualifiedNameContext = exports.LambdaLVTIParameterContext = void 0;
exports.ArgumentsContext = exports.ExplicitGenericInvocationSuffixContext = exports.SuperSuffixContext = exports.TypeArgumentsContext = exports.PrimitiveTypeContext = exports.TypeTypeContext = exports.TypeListContext = exports.NonWildcardTypeArgumentsContext = exports.NonWildcardTypeArgumentsOrDiamondContext = exports.TypeArgumentsOrDiamondContext = exports.ExplicitGenericInvocationContext = exports.ClassCreatorRestContext = exports.ArrayCreatorRestContext = exports.InnerCreatorContext = exports.CreatedNameContext = exports.CreatorContext = exports.ClassTypeContext = exports.SwitchRuleOutcomeContext = exports.GuardedPatternContext = exports.SwitchLabeledRuleContext = exports.SwitchExpressionContext = exports.PrimaryContext = exports.LambdaBodyContext = exports.LambdaParametersContext = exports.LambdaExpressionContext = void 0;
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
            this.state = 266;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 249;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                            case 1:
                                {
                                    this.state = 248;
                                    this.packageDeclaration();
                                }
                                break;
                        }
                        this.state = 254;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.IMPORT) {
                            {
                                {
                                    this.state = 251;
                                    this.importDeclaration();
                                }
                            }
                            this.state = 256;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 260;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 257;
                                    this.typeDeclaration();
                                }
                            }
                            this.state = 262;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 263;
                        this.moduleDeclaration();
                        this.state = 264;
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
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 268;
                            this.annotation();
                        }
                    }
                    this.state = 273;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 274;
                this.match(JavaParser.PACKAGE);
                this.state = 275;
                this.qualifiedName();
                this.state = 276;
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
                this.state = 278;
                this.match(JavaParser.IMPORT);
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.STATIC) {
                    {
                        this.state = 279;
                        this.match(JavaParser.STATIC);
                    }
                }
                this.state = 282;
                this.qualifiedName();
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DOT) {
                    {
                        this.state = 283;
                        this.match(JavaParser.DOT);
                        this.state = 284;
                        this.match(JavaParser.MUL);
                    }
                }
                this.state = 287;
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
            this.state = 303;
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
                        this.state = 292;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 289;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 294;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                        }
                        this.state = 300;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 295;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.ENUM:
                                {
                                    this.state = 296;
                                    this.enumDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 297;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.AT:
                                {
                                    this.state = 298;
                                    this.annotationTypeDeclaration();
                                }
                                break;
                            case JavaParser.RECORD:
                                {
                                    this.state = 299;
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
                        this.state = 302;
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
            this.state = 310;
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
                        this.state = 305;
                        this.classOrInterfaceModifier();
                    }
                    break;
                case JavaParser.NATIVE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 306;
                        this.match(JavaParser.NATIVE);
                    }
                    break;
                case JavaParser.SYNCHRONIZED:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 307;
                        this.match(JavaParser.SYNCHRONIZED);
                    }
                    break;
                case JavaParser.TRANSIENT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 308;
                        this.match(JavaParser.TRANSIENT);
                    }
                    break;
                case JavaParser.VOLATILE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 309;
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
            this.state = 322;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 312;
                        this.annotation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 313;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 314;
                        this.match(JavaParser.PROTECTED);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 315;
                        this.match(JavaParser.PRIVATE);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 316;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 317;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 318;
                        this.match(JavaParser.FINAL);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 319;
                        this.match(JavaParser.STRICTFP);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 320;
                        this.match(JavaParser.SEALED);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 321;
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
            this.state = 326;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 324;
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
                        this.state = 325;
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
    classDeclaration() {
        let _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.match(JavaParser.CLASS);
                this.state = 329;
                this.identifier();
                this.state = 331;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 330;
                        this.typeParameters();
                    }
                }
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 333;
                        this.match(JavaParser.EXTENDS);
                        this.state = 334;
                        this.typeType();
                    }
                }
                this.state = 339;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 337;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 338;
                        this.typeList();
                    }
                }
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.PERMITS) {
                    {
                        this.state = 341;
                        this.match(JavaParser.PERMITS);
                        this.state = 342;
                        this.typeList();
                    }
                }
                this.state = 345;
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
        this.enterRule(_localctx, 16, JavaParser.RULE_typeParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 347;
                this.match(JavaParser.LT);
                this.state = 348;
                this.typeParameter();
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 349;
                            this.match(JavaParser.COMMA);
                            this.state = 350;
                            this.typeParameter();
                        }
                    }
                    this.state = 355;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 356;
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
        this.enterRule(_localctx, 18, JavaParser.RULE_typeParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 358;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 363;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 364;
                this.identifier();
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 365;
                        this.match(JavaParser.EXTENDS);
                        this.state = 369;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 366;
                                        this.annotation();
                                    }
                                }
                            }
                            this.state = 371;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
                        }
                        this.state = 372;
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
        this.enterRule(_localctx, 20, JavaParser.RULE_typeBound);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 375;
                this.typeType();
                this.state = 380;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITAND) {
                    {
                        {
                            this.state = 376;
                            this.match(JavaParser.BITAND);
                            this.state = 377;
                            this.typeType();
                        }
                    }
                    this.state = 382;
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
        this.enterRule(_localctx, 22, JavaParser.RULE_enumDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 383;
                this.match(JavaParser.ENUM);
                this.state = 384;
                this.identifier();
                this.state = 387;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 385;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 386;
                        this.typeList();
                    }
                }
                this.state = 389;
                this.match(JavaParser.LBRACE);
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 390;
                        this.enumConstants();
                    }
                }
                this.state = 394;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 393;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 396;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 399;
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
        this.enterRule(_localctx, 24, JavaParser.RULE_enumConstants);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 401;
                this.enumConstant();
                this.state = 406;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 402;
                                this.match(JavaParser.COMMA);
                                this.state = 403;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 408;
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
        this.enterRule(_localctx, 26, JavaParser.RULE_enumConstant);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 409;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 414;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
                }
                this.state = 415;
                this.identifier();
                this.state = 417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 416;
                        this.arguments();
                    }
                }
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LBRACE) {
                    {
                        this.state = 419;
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
        this.enterRule(_localctx, 28, JavaParser.RULE_enumBodyDeclarations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 422;
                this.match(JavaParser.SEMI);
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 423;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 428;
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
        this.enterRule(_localctx, 30, JavaParser.RULE_interfaceDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 429;
                this.match(JavaParser.INTERFACE);
                this.state = 430;
                this.identifier();
                this.state = 432;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 431;
                        this.typeParameters();
                    }
                }
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 434;
                        this.match(JavaParser.EXTENDS);
                        this.state = 435;
                        this.typeList();
                    }
                }
                this.state = 440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.PERMITS) {
                    {
                        this.state = 438;
                        this.match(JavaParser.PERMITS);
                        this.state = 439;
                        this.typeList();
                    }
                }
                this.state = 442;
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
        this.enterRule(_localctx, 32, JavaParser.RULE_classBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this.match(JavaParser.LBRACE);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 445;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 451;
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
        this.enterRule(_localctx, 34, JavaParser.RULE_interfaceBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.match(JavaParser.LBRACE);
                this.state = 457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DEFAULT) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 454;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 460;
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
        this.enterRule(_localctx, 36, JavaParser.RULE_classBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.state = 474;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 462;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 464;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.STATIC) {
                            {
                                this.state = 463;
                                this.match(JavaParser.STATIC);
                            }
                        }
                        this.state = 466;
                        this.block();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 470;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 467;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 472;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
                        }
                        this.state = 473;
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
        this.enterRule(_localctx, 38, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 486;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 476;
                        this.methodDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 477;
                        this.genericMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 478;
                        this.fieldDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 479;
                        this.constructorDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 480;
                        this.genericConstructorDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 481;
                        this.interfaceDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 482;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 483;
                        this.classDeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 484;
                        this.enumDeclaration();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 485;
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
    methodDeclaration() {
        let _localctx = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaParser.RULE_methodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this.typeTypeOrVoid();
                this.state = 489;
                this.identifier();
                this.state = 490;
                this.formalParameters();
                this.state = 495;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 491;
                            this.match(JavaParser.LBRACK);
                            this.state = 492;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 497;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 498;
                        this.match(JavaParser.THROWS);
                        this.state = 499;
                        this.qualifiedNameList();
                    }
                }
                this.state = 502;
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
        this.enterRule(_localctx, 42, JavaParser.RULE_methodBody);
        try {
            this.state = 506;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 504;
                        this.block();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 505;
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
        this.enterRule(_localctx, 44, JavaParser.RULE_typeTypeOrVoid);
        try {
            this.state = 510;
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
                        this.state = 508;
                        this.typeType();
                    }
                    break;
                case JavaParser.VOID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 509;
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
        this.enterRule(_localctx, 46, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.typeParameters();
                this.state = 513;
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
        this.enterRule(_localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.typeParameters();
                this.state = 516;
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
        this.enterRule(_localctx, 50, JavaParser.RULE_constructorDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.identifier();
                this.state = 519;
                this.formalParameters();
                this.state = 522;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 520;
                        this.match(JavaParser.THROWS);
                        this.state = 521;
                        this.qualifiedNameList();
                    }
                }
                this.state = 524;
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
        this.enterRule(_localctx, 52, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 526;
                this.typeType();
                this.state = 527;
                this.variableDeclarators();
                this.state = 528;
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
        this.enterRule(_localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            let _alt;
            this.state = 538;
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
                        this.state = 533;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 530;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 535;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
                        }
                        this.state = 536;
                        this.interfaceMemberDeclaration();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 537;
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
        this.enterRule(_localctx, 56, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 548;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 540;
                        this.constDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 541;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 542;
                        this.genericInterfaceMethodDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 543;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 544;
                        this.annotationTypeDeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 545;
                        this.classDeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 546;
                        this.enumDeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 547;
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
        this.enterRule(_localctx, 58, JavaParser.RULE_constDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 550;
                this.typeType();
                this.state = 551;
                this.constantDeclarator();
                this.state = 556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 552;
                            this.match(JavaParser.COMMA);
                            this.state = 553;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 558;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 559;
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
        this.enterRule(_localctx, 60, JavaParser.RULE_constantDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.identifier();
                this.state = 566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 562;
                            this.match(JavaParser.LBRACK);
                            this.state = 563;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 568;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 569;
                this.match(JavaParser.ASSIGN);
                this.state = 570;
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
        this.enterRule(_localctx, 62, JavaParser.RULE_interfaceMethodDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 572;
                                this.interfaceMethodModifier();
                            }
                        }
                    }
                    this.state = 577;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
                }
                this.state = 578;
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
        this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMethodModifier);
        try {
            this.state = 586;
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
                        this.state = 580;
                        this.annotation();
                    }
                    break;
                case JavaParser.PUBLIC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 581;
                        this.match(JavaParser.PUBLIC);
                    }
                    break;
                case JavaParser.ABSTRACT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 582;
                        this.match(JavaParser.ABSTRACT);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 583;
                        this.match(JavaParser.DEFAULT);
                    }
                    break;
                case JavaParser.STATIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 584;
                        this.match(JavaParser.STATIC);
                    }
                    break;
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 585;
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
        this.enterRule(_localctx, 66, JavaParser.RULE_genericInterfaceMethodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.ABSTRACT || _la === JavaParser.DEFAULT || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (JavaParser.PUBLIC - 35)) | (1 << (JavaParser.STATIC - 35)) | (1 << (JavaParser.STRICTFP - 35)) | (1 << (JavaParser.MODULE - 35)) | (1 << (JavaParser.OPEN - 35)) | (1 << (JavaParser.REQUIRES - 35)) | (1 << (JavaParser.EXPORTS - 35)) | (1 << (JavaParser.OPENS - 35)) | (1 << (JavaParser.TO - 35)) | (1 << (JavaParser.USES - 35)) | (1 << (JavaParser.PROVIDES - 35)) | (1 << (JavaParser.WITH - 35)) | (1 << (JavaParser.TRANSITIVE - 35)) | (1 << (JavaParser.VAR - 35)) | (1 << (JavaParser.YIELD - 35)) | (1 << (JavaParser.RECORD - 35)) | (1 << (JavaParser.SEALED - 35)) | (1 << (JavaParser.PERMITS - 35)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 588;
                            this.interfaceMethodModifier();
                        }
                    }
                    this.state = 593;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 594;
                this.typeParameters();
                this.state = 595;
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
        this.enterRule(_localctx, 68, JavaParser.RULE_interfaceCommonBodyDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 597;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 602;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 603;
                this.typeTypeOrVoid();
                this.state = 604;
                this.identifier();
                this.state = 605;
                this.formalParameters();
                this.state = 610;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 606;
                            this.match(JavaParser.LBRACK);
                            this.state = 607;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 612;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 613;
                        this.match(JavaParser.THROWS);
                        this.state = 614;
                        this.qualifiedNameList();
                    }
                }
                this.state = 617;
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
        this.enterRule(_localctx, 70, JavaParser.RULE_variableDeclarators);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 619;
                this.variableDeclarator();
                this.state = 624;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 620;
                            this.match(JavaParser.COMMA);
                            this.state = 621;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 626;
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
        this.enterRule(_localctx, 72, JavaParser.RULE_variableDeclarator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 627;
                this.variableDeclaratorId();
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.ASSIGN) {
                    {
                        this.state = 628;
                        this.match(JavaParser.ASSIGN);
                        this.state = 629;
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
        this.enterRule(_localctx, 74, JavaParser.RULE_variableDeclaratorId);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.identifier();
                this.state = 637;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 633;
                            this.match(JavaParser.LBRACK);
                            this.state = 634;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 639;
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
        this.enterRule(_localctx, 76, JavaParser.RULE_variableInitializer);
        try {
            this.state = 642;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 640;
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
                        this.state = 641;
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
        this.enterRule(_localctx, 78, JavaParser.RULE_arrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 644;
                this.match(JavaParser.LBRACE);
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LBRACE - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 645;
                        this.variableInitializer();
                        this.state = 650;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 646;
                                        this.match(JavaParser.COMMA);
                                        this.state = 647;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 652;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
                        }
                        this.state = 654;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 653;
                                this.match(JavaParser.COMMA);
                            }
                        }
                    }
                }
                this.state = 658;
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
        this.enterRule(_localctx, 80, JavaParser.RULE_classOrInterfaceType);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 660;
                this.identifier();
                this.state = 662;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 661;
                            this.typeArguments();
                        }
                        break;
                }
                this.state = 671;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 664;
                                this.match(JavaParser.DOT);
                                this.state = 665;
                                this.identifier();
                                this.state = 667;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 666;
                                            this.typeArguments();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 673;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
        this.enterRule(_localctx, 82, JavaParser.RULE_typeArgument);
        let _la;
        try {
            this.state = 686;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 674;
                        this.typeType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 678;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                {
                                    this.state = 675;
                                    this.annotation();
                                }
                            }
                            this.state = 680;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 681;
                        this.match(JavaParser.QUESTION);
                        this.state = 684;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                            {
                                this.state = 682;
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
                                this.state = 683;
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
        this.enterRule(_localctx, 84, JavaParser.RULE_qualifiedNameList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                this.qualifiedName();
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 689;
                            this.match(JavaParser.COMMA);
                            this.state = 690;
                            this.qualifiedName();
                        }
                    }
                    this.state = 695;
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
        this.enterRule(_localctx, 86, JavaParser.RULE_formalParameters);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 696;
                this.match(JavaParser.LPAREN);
                this.state = 708;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                    case 1:
                        {
                            this.state = 698;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 697;
                                    this.receiverParameter();
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 700;
                            this.receiverParameter();
                            this.state = 703;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.COMMA) {
                                {
                                    this.state = 701;
                                    this.match(JavaParser.COMMA);
                                    this.state = 702;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 706;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                {
                                    this.state = 705;
                                    this.formalParameterList();
                                }
                            }
                        }
                        break;
                }
                this.state = 710;
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
        this.enterRule(_localctx, 88, JavaParser.RULE_receiverParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 712;
                this.typeType();
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 713;
                            this.identifier();
                            this.state = 714;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 720;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 721;
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
        this.enterRule(_localctx, 90, JavaParser.RULE_formalParameterList);
        let _la;
        try {
            let _alt;
            this.state = 736;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 723;
                        this.formalParameter();
                        this.state = 728;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 724;
                                        this.match(JavaParser.COMMA);
                                        this.state = 725;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 730;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                        }
                        this.state = 733;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 731;
                                this.match(JavaParser.COMMA);
                                this.state = 732;
                                this.lastFormalParameter();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 735;
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
        this.enterRule(_localctx, 92, JavaParser.RULE_formalParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 741;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 738;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 743;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                }
                this.state = 744;
                this.typeType();
                this.state = 745;
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
        this.enterRule(_localctx, 94, JavaParser.RULE_lastFormalParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 750;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 747;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 752;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                }
                this.state = 753;
                this.typeType();
                this.state = 757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 754;
                            this.annotation();
                        }
                    }
                    this.state = 759;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 760;
                this.match(JavaParser.ELLIPSIS);
                this.state = 761;
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
        this.enterRule(_localctx, 96, JavaParser.RULE_lambdaLVTIList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 763;
                this.lambdaLVTIParameter();
                this.state = 768;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 764;
                            this.match(JavaParser.COMMA);
                            this.state = 765;
                            this.lambdaLVTIParameter();
                        }
                    }
                    this.state = 770;
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
        this.enterRule(_localctx, 98, JavaParser.RULE_lambdaLVTIParameter);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 774;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 771;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 776;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
                }
                this.state = 777;
                this.match(JavaParser.VAR);
                this.state = 778;
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
        this.enterRule(_localctx, 100, JavaParser.RULE_qualifiedName);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 780;
                this.identifier();
                this.state = 785;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 781;
                                this.match(JavaParser.DOT);
                                this.state = 782;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 787;
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
        this.enterRule(_localctx, 102, JavaParser.RULE_literal);
        try {
            this.state = 795;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.DECIMAL_LITERAL:
                case JavaParser.HEX_LITERAL:
                case JavaParser.OCT_LITERAL:
                case JavaParser.BINARY_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 788;
                        this.integerLiteral();
                    }
                    break;
                case JavaParser.FLOAT_LITERAL:
                case JavaParser.HEX_FLOAT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 789;
                        this.floatLiteral();
                    }
                    break;
                case JavaParser.CHAR_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 790;
                        this.match(JavaParser.CHAR_LITERAL);
                    }
                    break;
                case JavaParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 791;
                        this.match(JavaParser.STRING_LITERAL);
                    }
                    break;
                case JavaParser.BOOL_LITERAL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 792;
                        this.match(JavaParser.BOOL_LITERAL);
                    }
                    break;
                case JavaParser.NULL_LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 793;
                        this.match(JavaParser.NULL_LITERAL);
                    }
                    break;
                case JavaParser.TEXT_BLOCK:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 794;
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
        this.enterRule(_localctx, 104, JavaParser.RULE_integerLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 797;
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
        this.enterRule(_localctx, 106, JavaParser.RULE_floatLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 799;
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
        this.enterRule(_localctx, 108, JavaParser.RULE_altAnnotationQualifiedName);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 801;
                            this.identifier();
                            this.state = 802;
                            this.match(JavaParser.DOT);
                        }
                    }
                    this.state = 808;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 809;
                this.match(JavaParser.AT);
                this.state = 810;
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
        this.enterRule(_localctx, 110, JavaParser.RULE_annotation);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 815;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 86, this._ctx)) {
                    case 1:
                        {
                            this.state = 812;
                            this.match(JavaParser.AT);
                            this.state = 813;
                            this.qualifiedName();
                        }
                        break;
                    case 2:
                        {
                            this.state = 814;
                            this.altAnnotationQualifiedName();
                        }
                        break;
                }
                this.state = 823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 817;
                        this.match(JavaParser.LPAREN);
                        this.state = 820;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                            case 1:
                                {
                                    this.state = 818;
                                    this.elementValuePairs();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 819;
                                    this.elementValue();
                                }
                                break;
                        }
                        this.state = 822;
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
        this.enterRule(_localctx, 112, JavaParser.RULE_elementValuePairs);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 825;
                this.elementValuePair();
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 826;
                            this.match(JavaParser.COMMA);
                            this.state = 827;
                            this.elementValuePair();
                        }
                    }
                    this.state = 832;
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
        this.enterRule(_localctx, 114, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 833;
                this.identifier();
                this.state = 834;
                this.match(JavaParser.ASSIGN);
                this.state = 835;
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
        this.enterRule(_localctx, 116, JavaParser.RULE_elementValue);
        try {
            this.state = 840;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 90, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 837;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 838;
                        this.annotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 839;
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
        this.enterRule(_localctx, 118, JavaParser.RULE_elementValueArrayInitializer);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(JavaParser.LBRACE);
                this.state = 851;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LBRACE - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 843;
                        this.elementValue();
                        this.state = 848;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 844;
                                        this.match(JavaParser.COMMA);
                                        this.state = 845;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 850;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
                        }
                    }
                }
                this.state = 854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 853;
                        this.match(JavaParser.COMMA);
                    }
                }
                this.state = 856;
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
        this.enterRule(_localctx, 120, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 858;
                this.match(JavaParser.AT);
                this.state = 859;
                this.match(JavaParser.INTERFACE);
                this.state = 860;
                this.identifier();
                this.state = 861;
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
        this.enterRule(_localctx, 122, JavaParser.RULE_annotationTypeBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 863;
                this.match(JavaParser.LBRACE);
                this.state = 867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.SEMI - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 864;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 869;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 870;
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
        this.enterRule(_localctx, 124, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let _alt;
            this.state = 880;
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
                        this.state = 875;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 872;
                                        this.modifier();
                                    }
                                }
                            }
                            this.state = 877;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                        }
                        this.state = 878;
                        this.annotationTypeElementRest();
                    }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 879;
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
        this.enterRule(_localctx, 126, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 906;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 882;
                        this.typeType();
                        this.state = 883;
                        this.annotationMethodOrConstantRest();
                        this.state = 884;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 886;
                        this.classDeclaration();
                        this.state = 888;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                            case 1:
                                {
                                    this.state = 887;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 890;
                        this.interfaceDeclaration();
                        this.state = 892;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                            case 1:
                                {
                                    this.state = 891;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 894;
                        this.enumDeclaration();
                        this.state = 896;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 99, this._ctx)) {
                            case 1:
                                {
                                    this.state = 895;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 898;
                        this.annotationTypeDeclaration();
                        this.state = 900;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 100, this._ctx)) {
                            case 1:
                                {
                                    this.state = 899;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 902;
                        this.recordDeclaration();
                        this.state = 904;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                            case 1:
                                {
                                    this.state = 903;
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
        this.enterRule(_localctx, 128, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 910;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 908;
                        this.annotationMethodRest();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 909;
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
        this.enterRule(_localctx, 130, JavaParser.RULE_annotationMethodRest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 912;
                this.identifier();
                this.state = 913;
                this.match(JavaParser.LPAREN);
                this.state = 914;
                this.match(JavaParser.RPAREN);
                this.state = 916;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 915;
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
        this.enterRule(_localctx, 132, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 918;
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
        this.enterRule(_localctx, 134, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.match(JavaParser.DEFAULT);
                this.state = 921;
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
        this.enterRule(_localctx, 136, JavaParser.RULE_moduleDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.OPEN) {
                    {
                        this.state = 923;
                        this.match(JavaParser.OPEN);
                    }
                }
                this.state = 926;
                this.match(JavaParser.MODULE);
                this.state = 927;
                this.qualifiedName();
                this.state = 928;
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
        this.enterRule(_localctx, 138, JavaParser.RULE_moduleBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 930;
                this.match(JavaParser.LBRACE);
                this.state = 934;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (JavaParser.REQUIRES - 53)) | (1 << (JavaParser.EXPORTS - 53)) | (1 << (JavaParser.OPENS - 53)) | (1 << (JavaParser.USES - 53)) | (1 << (JavaParser.PROVIDES - 53)))) !== 0)) {
                    {
                        {
                            this.state = 931;
                            this.moduleDirective();
                        }
                    }
                    this.state = 936;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 937;
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
        this.enterRule(_localctx, 140, JavaParser.RULE_moduleDirective);
        let _la;
        try {
            let _alt;
            this.state = 975;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.REQUIRES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 939;
                        this.match(JavaParser.REQUIRES);
                        this.state = 943;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 940;
                                        this.requiresModifier();
                                    }
                                }
                            }
                            this.state = 945;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                        }
                        this.state = 946;
                        this.qualifiedName();
                        this.state = 947;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.EXPORTS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 949;
                        this.match(JavaParser.EXPORTS);
                        this.state = 950;
                        this.qualifiedName();
                        this.state = 953;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 951;
                                this.match(JavaParser.TO);
                                this.state = 952;
                                this.qualifiedName();
                            }
                        }
                        this.state = 955;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.OPENS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 957;
                        this.match(JavaParser.OPENS);
                        this.state = 958;
                        this.qualifiedName();
                        this.state = 961;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.TO) {
                            {
                                this.state = 959;
                                this.match(JavaParser.TO);
                                this.state = 960;
                                this.qualifiedName();
                            }
                        }
                        this.state = 963;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.USES:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 965;
                        this.match(JavaParser.USES);
                        this.state = 966;
                        this.qualifiedName();
                        this.state = 967;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case JavaParser.PROVIDES:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 969;
                        this.match(JavaParser.PROVIDES);
                        this.state = 970;
                        this.qualifiedName();
                        this.state = 971;
                        this.match(JavaParser.WITH);
                        this.state = 972;
                        this.qualifiedName();
                        this.state = 973;
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
        this.enterRule(_localctx, 142, JavaParser.RULE_requiresModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 977;
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
        this.enterRule(_localctx, 144, JavaParser.RULE_recordDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 979;
                this.match(JavaParser.RECORD);
                this.state = 980;
                this.identifier();
                this.state = 982;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 981;
                        this.typeParameters();
                    }
                }
                this.state = 984;
                this.recordHeader();
                this.state = 987;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 985;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 986;
                        this.typeList();
                    }
                }
                this.state = 989;
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
        this.enterRule(_localctx, 146, JavaParser.RULE_recordHeader);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.match(JavaParser.LPAREN);
                this.state = 993;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        this.state = 992;
                        this.recordComponentList();
                    }
                }
                this.state = 995;
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
        this.enterRule(_localctx, 148, JavaParser.RULE_recordComponentList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 997;
                this.recordComponent();
                this.state = 1002;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 998;
                            this.match(JavaParser.COMMA);
                            this.state = 999;
                            this.recordComponent();
                        }
                    }
                    this.state = 1004;
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
        this.enterRule(_localctx, 150, JavaParser.RULE_recordComponent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1005;
                this.typeType();
                this.state = 1006;
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
        this.enterRule(_localctx, 152, JavaParser.RULE_recordBody);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1008;
                this.match(JavaParser.LBRACE);
                this.state = 1012;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                    {
                        {
                            this.state = 1009;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 1014;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1015;
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
        this.enterRule(_localctx, 154, JavaParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1017;
                this.match(JavaParser.LBRACE);
                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                    {
                        {
                            this.state = 1018;
                            this.blockStatement();
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
    blockStatement() {
        let _localctx = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JavaParser.RULE_blockStatement);
        try {
            this.state = 1031;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1026;
                        this.localVariableDeclaration();
                        this.state = 1027;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1029;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1030;
                        this.localTypeDeclaration();
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
        this.enterRule(_localctx, 158, JavaParser.RULE_localVariableDeclaration);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1036;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1033;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1038;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
                }
                this.state = 1047;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
                    case 1:
                        {
                            this.state = 1039;
                            this.typeType();
                            this.state = 1040;
                            this.variableDeclarators();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1042;
                            this.match(JavaParser.VAR);
                            this.state = 1043;
                            this.identifier();
                            this.state = 1044;
                            this.match(JavaParser.ASSIGN);
                            this.state = 1045;
                            this.expression(0);
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
        this.enterRule(_localctx, 160, JavaParser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1049;
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
        this.enterRule(_localctx, 162, JavaParser.RULE_localTypeDeclaration);
        try {
            let _alt;
            this.state = 1063;
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
                        this.state = 1054;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1051;
                                        this.classOrInterfaceModifier();
                                    }
                                }
                            }
                            this.state = 1056;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
                        }
                        this.state = 1060;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CLASS:
                                {
                                    this.state = 1057;
                                    this.classDeclaration();
                                }
                                break;
                            case JavaParser.INTERFACE:
                                {
                                    this.state = 1058;
                                    this.interfaceDeclaration();
                                }
                                break;
                            case JavaParser.RECORD:
                                {
                                    this.state = 1059;
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
                        this.state = 1062;
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
        this.enterRule(_localctx, 164, JavaParser.RULE_statement);
        let _la;
        try {
            let _alt;
            this.state = 1178;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 136, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1065;
                        _localctx._blockLabel = this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1066;
                        this.match(JavaParser.ASSERT);
                        this.state = 1067;
                        this.expression(0);
                        this.state = 1070;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COLON) {
                            {
                                this.state = 1068;
                                this.match(JavaParser.COLON);
                                this.state = 1069;
                                this.expression(0);
                            }
                        }
                        this.state = 1072;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1074;
                        this.match(JavaParser.IF);
                        this.state = 1075;
                        this.parExpression();
                        this.state = 1076;
                        this.statement();
                        this.state = 1079;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1077;
                                    this.match(JavaParser.ELSE);
                                    this.state = 1078;
                                    this.statement();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1081;
                        this.match(JavaParser.FOR);
                        this.state = 1082;
                        this.match(JavaParser.LPAREN);
                        this.state = 1083;
                        this.forControl();
                        this.state = 1084;
                        this.match(JavaParser.RPAREN);
                        this.state = 1085;
                        this.statement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1087;
                        this.match(JavaParser.WHILE);
                        this.state = 1088;
                        this.parExpression();
                        this.state = 1089;
                        this.statement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1091;
                        this.match(JavaParser.DO);
                        this.state = 1092;
                        this.statement();
                        this.state = 1093;
                        this.match(JavaParser.WHILE);
                        this.state = 1094;
                        this.parExpression();
                        this.state = 1095;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1097;
                        this.match(JavaParser.TRY);
                        this.state = 1098;
                        this.block();
                        this.state = 1108;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.CATCH:
                                {
                                    this.state = 1100;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 1099;
                                                this.catchClause();
                                            }
                                        }
                                        this.state = 1102;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === JavaParser.CATCH);
                                    this.state = 1105;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.FINALLY) {
                                        {
                                            this.state = 1104;
                                            this.finallyBlock();
                                        }
                                    }
                                }
                                break;
                            case JavaParser.FINALLY:
                                {
                                    this.state = 1107;
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
                        this.state = 1110;
                        this.match(JavaParser.TRY);
                        this.state = 1111;
                        this.resourceSpecification();
                        this.state = 1112;
                        this.block();
                        this.state = 1116;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CATCH) {
                            {
                                {
                                    this.state = 1113;
                                    this.catchClause();
                                }
                            }
                            this.state = 1118;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1120;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINALLY) {
                            {
                                this.state = 1119;
                                this.finallyBlock();
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1122;
                        this.match(JavaParser.SWITCH);
                        this.state = 1123;
                        this.parExpression();
                        this.state = 1124;
                        this.match(JavaParser.LBRACE);
                        this.state = 1128;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1125;
                                        this.switchBlockStatementGroup();
                                    }
                                }
                            }
                            this.state = 1130;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
                        }
                        this.state = 1134;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                            {
                                {
                                    this.state = 1131;
                                    this.switchLabel();
                                }
                            }
                            this.state = 1136;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1137;
                        this.match(JavaParser.RBRACE);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1139;
                        this.match(JavaParser.SYNCHRONIZED);
                        this.state = 1140;
                        this.parExpression();
                        this.state = 1141;
                        this.block();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1143;
                        this.match(JavaParser.RETURN);
                        this.state = 1145;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1144;
                                this.expression(0);
                            }
                        }
                        this.state = 1147;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1148;
                        this.match(JavaParser.THROW);
                        this.state = 1149;
                        this.expression(0);
                        this.state = 1150;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1152;
                        this.match(JavaParser.BREAK);
                        this.state = 1154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1153;
                                this.identifier();
                            }
                        }
                        this.state = 1156;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1157;
                        this.match(JavaParser.CONTINUE);
                        this.state = 1159;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1158;
                                this.identifier();
                            }
                        }
                        this.state = 1161;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1162;
                        this.match(JavaParser.YIELD);
                        this.state = 1163;
                        this.expression(0);
                        this.state = 1164;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1166;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1167;
                        _localctx._statementExpression = this.expression(0);
                        this.state = 1168;
                        this.match(JavaParser.SEMI);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1170;
                        this.switchExpression();
                        this.state = 1172;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1171;
                                    this.match(JavaParser.SEMI);
                                }
                                break;
                        }
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1174;
                        _localctx._identifierLabel = this.identifier();
                        this.state = 1175;
                        this.match(JavaParser.COLON);
                        this.state = 1176;
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
        this.enterRule(_localctx, 166, JavaParser.RULE_catchClause);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1180;
                this.match(JavaParser.CATCH);
                this.state = 1181;
                this.match(JavaParser.LPAREN);
                this.state = 1185;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1182;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1187;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                }
                this.state = 1188;
                this.catchType();
                this.state = 1189;
                this.identifier();
                this.state = 1190;
                this.match(JavaParser.RPAREN);
                this.state = 1191;
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
        this.enterRule(_localctx, 168, JavaParser.RULE_catchType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1193;
                this.qualifiedName();
                this.state = 1198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 1194;
                            this.match(JavaParser.BITOR);
                            this.state = 1195;
                            this.qualifiedName();
                        }
                    }
                    this.state = 1200;
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
        this.enterRule(_localctx, 170, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1201;
                this.match(JavaParser.FINALLY);
                this.state = 1202;
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
        this.enterRule(_localctx, 172, JavaParser.RULE_resourceSpecification);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1204;
                this.match(JavaParser.LPAREN);
                this.state = 1205;
                this.resources();
                this.state = 1207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 1206;
                        this.match(JavaParser.SEMI);
                    }
                }
                this.state = 1209;
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
        this.enterRule(_localctx, 174, JavaParser.RULE_resources);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1211;
                this.resource();
                this.state = 1216;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1212;
                                this.match(JavaParser.SEMI);
                                this.state = 1213;
                                this.resource();
                            }
                        }
                    }
                    this.state = 1218;
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
        this.enterRule(_localctx, 176, JavaParser.RULE_resource);
        try {
            let _alt;
            this.state = 1236;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1222;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1219;
                                        this.variableModifier();
                                    }
                                }
                            }
                            this.state = 1224;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 141, this._ctx);
                        }
                        this.state = 1230;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1225;
                                    this.classOrInterfaceType();
                                    this.state = 1226;
                                    this.variableDeclaratorId();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1228;
                                    this.match(JavaParser.VAR);
                                    this.state = 1229;
                                    this.identifier();
                                }
                                break;
                        }
                        this.state = 1232;
                        this.match(JavaParser.ASSIGN);
                        this.state = 1233;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1235;
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
        this.enterRule(_localctx, 178, JavaParser.RULE_switchBlockStatementGroup);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1239;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1238;
                            this.switchLabel();
                        }
                    }
                    this.state = 1241;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT);
                this.state = 1244;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1243;
                            this.blockStatement();
                        }
                    }
                    this.state = 1246;
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
        this.enterRule(_localctx, 180, JavaParser.RULE_switchLabel);
        try {
            this.state = 1259;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1248;
                        this.match(JavaParser.CASE);
                        this.state = 1254;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1249;
                                    _localctx._constantExpression = this.expression(0);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1250;
                                    _localctx._enumConstantName = this.match(JavaParser.IDENTIFIER);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1251;
                                    this.typeType();
                                    this.state = 1252;
                                    _localctx._varName = this.identifier();
                                }
                                break;
                        }
                        this.state = 1256;
                        this.match(JavaParser.COLON);
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1257;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1258;
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
        this.enterRule(_localctx, 182, JavaParser.RULE_forControl);
        let _la;
        try {
            this.state = 1273;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1261;
                        this.enhancedForControl();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1263;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1262;
                                this.forInit();
                            }
                        }
                        this.state = 1265;
                        this.match(JavaParser.SEMI);
                        this.state = 1267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1266;
                                this.expression(0);
                            }
                        }
                        this.state = 1269;
                        this.match(JavaParser.SEMI);
                        this.state = 1271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1270;
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
        this.enterRule(_localctx, 184, JavaParser.RULE_forInit);
        try {
            this.state = 1277;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1275;
                        this.localVariableDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1276;
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
        this.enterRule(_localctx, 186, JavaParser.RULE_enhancedForControl);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1282;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1279;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1284;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
                }
                this.state = 1287;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                    case 1:
                        {
                            this.state = 1285;
                            this.typeType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1286;
                            this.match(JavaParser.VAR);
                        }
                        break;
                }
                this.state = 1289;
                this.variableDeclaratorId();
                this.state = 1290;
                this.match(JavaParser.COLON);
                this.state = 1291;
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
        this.enterRule(_localctx, 188, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1293;
                this.match(JavaParser.LPAREN);
                this.state = 1294;
                this.expression(0);
                this.state = 1295;
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
        this.enterRule(_localctx, 190, JavaParser.RULE_expressionList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1297;
                this.expression(0);
                this.state = 1302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1298;
                            this.match(JavaParser.COMMA);
                            this.state = 1299;
                            this.expression(0);
                        }
                    }
                    this.state = 1304;
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
        this.enterRule(_localctx, 192, JavaParser.RULE_methodCall);
        let _la;
        try {
            this.state = 1324;
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
                        this.state = 1305;
                        this.identifier();
                        this.state = 1306;
                        this.match(JavaParser.LPAREN);
                        this.state = 1308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1307;
                                this.expressionList();
                            }
                        }
                        this.state = 1310;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.THIS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1312;
                        this.match(JavaParser.THIS);
                        this.state = 1313;
                        this.match(JavaParser.LPAREN);
                        this.state = 1315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1314;
                                this.expressionList();
                            }
                        }
                        this.state = 1317;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1318;
                        this.match(JavaParser.SUPER);
                        this.state = 1319;
                        this.match(JavaParser.LPAREN);
                        this.state = 1321;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                            {
                                this.state = 1320;
                                this.expressionList();
                            }
                        }
                        this.state = 1323;
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
        let _startState = 194;
        this.enterRecursionRule(_localctx, 194, JavaParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1371;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                    case 1:
                        {
                            this.state = 1327;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1328;
                            this.methodCall();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1329;
                            this.match(JavaParser.NEW);
                            this.state = 1330;
                            this.creator();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1331;
                            this.match(JavaParser.LPAREN);
                            this.state = 1335;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1332;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1337;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
                            }
                            this.state = 1338;
                            this.typeType();
                            this.state = 1343;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.BITAND) {
                                {
                                    {
                                        this.state = 1339;
                                        this.match(JavaParser.BITAND);
                                        this.state = 1340;
                                        this.typeType();
                                    }
                                }
                                this.state = 1345;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1346;
                            this.match(JavaParser.RPAREN);
                            this.state = 1347;
                            this.expression(22);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1349;
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
                            this.state = 1350;
                            this.expression(20);
                        }
                        break;
                    case 6:
                        {
                            this.state = 1351;
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
                            this.state = 1352;
                            this.expression(19);
                        }
                        break;
                    case 7:
                        {
                            this.state = 1353;
                            this.lambdaExpression();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1354;
                            this.switchExpression();
                        }
                        break;
                    case 9:
                        {
                            this.state = 1355;
                            this.typeType();
                            this.state = 1356;
                            this.match(JavaParser.COLONCOLON);
                            this.state = 1362;
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
                                        this.state = 1358;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1357;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1360;
                                        this.identifier();
                                    }
                                    break;
                                case JavaParser.NEW:
                                    {
                                        this.state = 1361;
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
                            this.state = 1364;
                            this.classType();
                            this.state = 1365;
                            this.match(JavaParser.COLONCOLON);
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
                            this.match(JavaParser.NEW);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1456;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1454;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1373;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 1374;
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
                                        this.state = 1375;
                                        this.expression(19);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1376;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 1377;
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
                                        this.state = 1378;
                                        this.expression(18);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1379;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 1387;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1380;
                                                    this.match(JavaParser.LT);
                                                    this.state = 1381;
                                                    this.match(JavaParser.LT);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1382;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1383;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1384;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1385;
                                                    this.match(JavaParser.GT);
                                                    this.state = 1386;
                                                    this.match(JavaParser.GT);
                                                }
                                                break;
                                        }
                                        this.state = 1389;
                                        this.expression(17);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1390;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 1391;
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
                                        this.state = 1392;
                                        this.expression(16);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1393;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 1394;
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
                                        this.state = 1395;
                                        this.expression(14);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1396;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 1397;
                                        _localctx._bop = this.match(JavaParser.BITAND);
                                        this.state = 1398;
                                        this.expression(13);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1399;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 1400;
                                        _localctx._bop = this.match(JavaParser.CARET);
                                        this.state = 1401;
                                        this.expression(12);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1402;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 1403;
                                        _localctx._bop = this.match(JavaParser.BITOR);
                                        this.state = 1404;
                                        this.expression(11);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1405;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 1406;
                                        _localctx._bop = this.match(JavaParser.AND);
                                        this.state = 1407;
                                        this.expression(10);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1408;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1409;
                                        _localctx._bop = this.match(JavaParser.OR);
                                        this.state = 1410;
                                        this.expression(9);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1411;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1412;
                                        _localctx._bop = this.match(JavaParser.QUESTION);
                                        this.state = 1413;
                                        this.expression(0);
                                        this.state = 1414;
                                        this.match(JavaParser.COLON);
                                        this.state = 1415;
                                        this.expression(7);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1417;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1418;
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
                                        this.state = 1419;
                                        this.expression(6);
                                    }
                                    break;
                                case 13:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1420;
                                        if (!(this.precpred(this._ctx, 26))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
                                        }
                                        this.state = 1421;
                                        _localctx._bop = this.match(JavaParser.DOT);
                                        this.state = 1433;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1422;
                                                    this.identifier();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1423;
                                                    this.methodCall();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1424;
                                                    this.match(JavaParser.THIS);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1425;
                                                    this.match(JavaParser.NEW);
                                                    this.state = 1427;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                    if (_la === JavaParser.LT) {
                                                        {
                                                            this.state = 1426;
                                                            this.nonWildcardTypeArguments();
                                                        }
                                                    }
                                                    this.state = 1429;
                                                    this.innerCreator();
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1430;
                                                    this.match(JavaParser.SUPER);
                                                    this.state = 1431;
                                                    this.superSuffix();
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1432;
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
                                        this.state = 1435;
                                        if (!(this.precpred(this._ctx, 25))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
                                        }
                                        this.state = 1436;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1437;
                                        this.expression(0);
                                        this.state = 1438;
                                        this.match(JavaParser.RBRACK);
                                    }
                                    break;
                                case 15:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                        this.state = 1440;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 1441;
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
                                        this.state = 1442;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 1443;
                                        _localctx._bop = this.match(JavaParser.INSTANCEOF);
                                        this.state = 1446;
                                        this._errHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1444;
                                                    this.typeType();
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1445;
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
                                        this.state = 1448;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1449;
                                        this.match(JavaParser.COLONCOLON);
                                        this.state = 1451;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === JavaParser.LT) {
                                            {
                                                this.state = 1450;
                                                this.typeArguments();
                                            }
                                        }
                                        this.state = 1453;
                                        this.identifier();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1458;
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
        this.enterRule(_localctx, 196, JavaParser.RULE_pattern);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1462;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1459;
                                this.variableModifier();
                            }
                        }
                    }
                    this.state = 1464;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
                }
                this.state = 1465;
                this.typeType();
                this.state = 1469;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1466;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1471;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 174, this._ctx);
                }
                this.state = 1472;
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
        this.enterRule(_localctx, 198, JavaParser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1474;
                this.lambdaParameters();
                this.state = 1475;
                this.match(JavaParser.ARROW);
                this.state = 1476;
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
        this.enterRule(_localctx, 200, JavaParser.RULE_lambdaParameters);
        let _la;
        try {
            this.state = 1500;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1478;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1479;
                        this.match(JavaParser.LPAREN);
                        this.state = 1481;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1480;
                                this.formalParameterList();
                            }
                        }
                        this.state = 1483;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1484;
                        this.match(JavaParser.LPAREN);
                        this.state = 1485;
                        this.identifier();
                        this.state = 1490;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.COMMA) {
                            {
                                {
                                    this.state = 1486;
                                    this.match(JavaParser.COMMA);
                                    this.state = 1487;
                                    this.identifier();
                                }
                            }
                            this.state = 1492;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1493;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1495;
                        this.match(JavaParser.LPAREN);
                        this.state = 1497;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.FINAL || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                            {
                                this.state = 1496;
                                this.lambdaLVTIList();
                            }
                        }
                        this.state = 1499;
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
        this.enterRule(_localctx, 202, JavaParser.RULE_lambdaBody);
        try {
            this.state = 1504;
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
                        this.state = 1502;
                        this.expression(0);
                    }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1503;
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
        this.enterRule(_localctx, 204, JavaParser.RULE_primary);
        try {
            this.state = 1524;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 181, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1506;
                        this.match(JavaParser.LPAREN);
                        this.state = 1507;
                        this.expression(0);
                        this.state = 1508;
                        this.match(JavaParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1510;
                        this.match(JavaParser.THIS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1511;
                        this.match(JavaParser.SUPER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1512;
                        this.literal();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1513;
                        this.identifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1514;
                        this.typeTypeOrVoid();
                        this.state = 1515;
                        this.match(JavaParser.DOT);
                        this.state = 1516;
                        this.match(JavaParser.CLASS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1518;
                        this.nonWildcardTypeArguments();
                        this.state = 1522;
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
                                    this.state = 1519;
                                    this.explicitGenericInvocationSuffix();
                                }
                                break;
                            case JavaParser.THIS:
                                {
                                    this.state = 1520;
                                    this.match(JavaParser.THIS);
                                    this.state = 1521;
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
        this.enterRule(_localctx, 206, JavaParser.RULE_switchExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1526;
                this.match(JavaParser.SWITCH);
                this.state = 1527;
                this.parExpression();
                this.state = 1528;
                this.match(JavaParser.LBRACE);
                this.state = 1532;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                    {
                        {
                            this.state = 1529;
                            this.switchLabeledRule();
                        }
                    }
                    this.state = 1534;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1535;
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
        this.enterRule(_localctx, 208, JavaParser.RULE_switchLabeledRule);
        let _la;
        try {
            this.state = 1548;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.CASE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1537;
                        this.match(JavaParser.CASE);
                        this.state = 1541;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1538;
                                    this.expressionList();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1539;
                                    this.match(JavaParser.NULL_LITERAL);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1540;
                                    this.guardedPattern(0);
                                }
                                break;
                        }
                        this.state = 1543;
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
                        this.state = 1544;
                        this.switchRuleOutcome();
                    }
                    break;
                case JavaParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1545;
                        this.match(JavaParser.DEFAULT);
                        this.state = 1546;
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
                        this.state = 1547;
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
        let _startState = 210;
        this.enterRecursionRule(_localctx, 210, JavaParser.RULE_guardedPattern, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1576;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.LPAREN:
                        {
                            this.state = 1551;
                            this.match(JavaParser.LPAREN);
                            this.state = 1552;
                            this.guardedPattern(0);
                            this.state = 1553;
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
                            this.state = 1558;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1555;
                                            this.variableModifier();
                                        }
                                    }
                                }
                                this.state = 1560;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 185, this._ctx);
                            }
                            this.state = 1561;
                            this.typeType();
                            this.state = 1565;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1562;
                                            this.annotation();
                                        }
                                    }
                                }
                                this.state = 1567;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 186, this._ctx);
                            }
                            this.state = 1568;
                            this.identifier();
                            this.state = 1573;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1569;
                                            this.match(JavaParser.AND);
                                            this.state = 1570;
                                            this.expression(0);
                                        }
                                    }
                                }
                                this.state = 1575;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 187, this._ctx);
                            }
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1583;
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
                                this.state = 1578;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1579;
                                this.match(JavaParser.AND);
                                this.state = 1580;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 1585;
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
        this.enterRule(_localctx, 212, JavaParser.RULE_switchRuleOutcome);
        let _la;
        try {
            this.state = 1593;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 191, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1586;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1590;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.MODULE - 33)) | (1 << (JavaParser.OPEN - 33)) | (1 << (JavaParser.REQUIRES - 33)) | (1 << (JavaParser.EXPORTS - 33)) | (1 << (JavaParser.OPENS - 33)) | (1 << (JavaParser.TO - 33)) | (1 << (JavaParser.USES - 33)) | (1 << (JavaParser.PROVIDES - 33)) | (1 << (JavaParser.WITH - 33)) | (1 << (JavaParser.TRANSITIVE - 33)) | (1 << (JavaParser.VAR - 33)) | (1 << (JavaParser.YIELD - 33)) | (1 << (JavaParser.RECORD - 33)) | (1 << (JavaParser.SEALED - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (JavaParser.PERMITS - 65)) | (1 << (JavaParser.NON_SEALED - 65)) | (1 << (JavaParser.DECIMAL_LITERAL - 65)) | (1 << (JavaParser.HEX_LITERAL - 65)) | (1 << (JavaParser.OCT_LITERAL - 65)) | (1 << (JavaParser.BINARY_LITERAL - 65)) | (1 << (JavaParser.FLOAT_LITERAL - 65)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 65)) | (1 << (JavaParser.BOOL_LITERAL - 65)) | (1 << (JavaParser.CHAR_LITERAL - 65)) | (1 << (JavaParser.STRING_LITERAL - 65)) | (1 << (JavaParser.TEXT_BLOCK - 65)) | (1 << (JavaParser.NULL_LITERAL - 65)) | (1 << (JavaParser.LPAREN - 65)) | (1 << (JavaParser.LBRACE - 65)) | (1 << (JavaParser.SEMI - 65)) | (1 << (JavaParser.LT - 65)) | (1 << (JavaParser.BANG - 65)) | (1 << (JavaParser.TILDE - 65)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (JavaParser.INC - 100)) | (1 << (JavaParser.DEC - 100)) | (1 << (JavaParser.ADD - 100)) | (1 << (JavaParser.SUB - 100)) | (1 << (JavaParser.AT - 100)) | (1 << (JavaParser.IDENTIFIER - 100)))) !== 0)) {
                            {
                                {
                                    this.state = 1587;
                                    this.blockStatement();
                                }
                            }
                            this.state = 1592;
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
        this.enterRule(_localctx, 214, JavaParser.RULE_classType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1598;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
                    case 1:
                        {
                            this.state = 1595;
                            this.classOrInterfaceType();
                            this.state = 1596;
                            this.match(JavaParser.DOT);
                        }
                        break;
                }
                this.state = 1603;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1600;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1605;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
                }
                this.state = 1606;
                this.identifier();
                this.state = 1608;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1607;
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
        this.enterRule(_localctx, 216, JavaParser.RULE_creator);
        try {
            this.state = 1619;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1610;
                        this.nonWildcardTypeArguments();
                        this.state = 1611;
                        this.createdName();
                        this.state = 1612;
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
                        this.state = 1614;
                        this.createdName();
                        this.state = 1617;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case JavaParser.LBRACK:
                                {
                                    this.state = 1615;
                                    this.arrayCreatorRest();
                                }
                                break;
                            case JavaParser.LPAREN:
                                {
                                    this.state = 1616;
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
        this.enterRule(_localctx, 218, JavaParser.RULE_createdName);
        let _la;
        try {
            this.state = 1636;
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
                        this.state = 1621;
                        this.identifier();
                        this.state = 1623;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1622;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 1632;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.DOT) {
                            {
                                {
                                    this.state = 1625;
                                    this.match(JavaParser.DOT);
                                    this.state = 1626;
                                    this.identifier();
                                    this.state = 1628;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.LT) {
                                        {
                                            this.state = 1627;
                                            this.typeArgumentsOrDiamond();
                                        }
                                    }
                                }
                            }
                            this.state = 1634;
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
                        this.state = 1635;
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
        this.enterRule(_localctx, 220, JavaParser.RULE_innerCreator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1638;
                this.identifier();
                this.state = 1640;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1639;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }
                this.state = 1642;
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
        this.enterRule(_localctx, 222, JavaParser.RULE_arrayCreatorRest);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1644;
                this.match(JavaParser.LBRACK);
                this.state = 1672;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                        {
                            this.state = 1645;
                            this.match(JavaParser.RBRACK);
                            this.state = 1650;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === JavaParser.LBRACK) {
                                {
                                    {
                                        this.state = 1646;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1647;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                                this.state = 1652;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1653;
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
                            this.state = 1654;
                            this.expression(0);
                            this.state = 1655;
                            this.match(JavaParser.RBRACK);
                            this.state = 1662;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1656;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1657;
                                            this.expression(0);
                                            this.state = 1658;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1664;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                            }
                            this.state = 1669;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 204, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1665;
                                            this.match(JavaParser.LBRACK);
                                            this.state = 1666;
                                            this.match(JavaParser.RBRACK);
                                        }
                                    }
                                }
                                this.state = 1671;
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
        this.enterRule(_localctx, 224, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1674;
                this.arguments();
                this.state = 1676;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 206, this._ctx)) {
                    case 1:
                        {
                            this.state = 1675;
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
        this.enterRule(_localctx, 226, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1678;
                this.nonWildcardTypeArguments();
                this.state = 1679;
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
        this.enterRule(_localctx, 228, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1684;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1681;
                        this.match(JavaParser.LT);
                        this.state = 1682;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1683;
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
        this.enterRule(_localctx, 230, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1689;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 208, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1686;
                        this.match(JavaParser.LT);
                        this.state = 1687;
                        this.match(JavaParser.GT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1688;
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
        this.enterRule(_localctx, 232, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1691;
                this.match(JavaParser.LT);
                this.state = 1692;
                this.typeList();
                this.state = 1693;
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
        this.enterRule(_localctx, 234, JavaParser.RULE_typeList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1695;
                this.typeType();
                this.state = 1700;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1696;
                            this.match(JavaParser.COMMA);
                            this.state = 1697;
                            this.typeType();
                        }
                    }
                    this.state = 1702;
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
        this.enterRule(_localctx, 236, JavaParser.RULE_typeType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1706;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1703;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 1708;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
                }
                this.state = 1711;
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
                            this.state = 1709;
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
                            this.state = 1710;
                            this.primitiveType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1723;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1716;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.MODULE - 51)) | (1 << (JavaParser.OPEN - 51)) | (1 << (JavaParser.REQUIRES - 51)) | (1 << (JavaParser.EXPORTS - 51)) | (1 << (JavaParser.OPENS - 51)) | (1 << (JavaParser.TO - 51)) | (1 << (JavaParser.USES - 51)) | (1 << (JavaParser.PROVIDES - 51)) | (1 << (JavaParser.WITH - 51)) | (1 << (JavaParser.TRANSITIVE - 51)) | (1 << (JavaParser.VAR - 51)) | (1 << (JavaParser.YIELD - 51)) | (1 << (JavaParser.RECORD - 51)) | (1 << (JavaParser.SEALED - 51)) | (1 << (JavaParser.PERMITS - 51)))) !== 0) || _la === JavaParser.AT || _la === JavaParser.IDENTIFIER) {
                                    {
                                        {
                                            this.state = 1713;
                                            this.annotation();
                                        }
                                    }
                                    this.state = 1718;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1719;
                                this.match(JavaParser.LBRACK);
                                this.state = 1720;
                                this.match(JavaParser.RBRACK);
                            }
                        }
                    }
                    this.state = 1725;
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
        this.enterRule(_localctx, 238, JavaParser.RULE_primitiveType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1726;
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
        this.enterRule(_localctx, 240, JavaParser.RULE_typeArguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1728;
                this.match(JavaParser.LT);
                this.state = 1729;
                this.typeArgument();
                this.state = 1734;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1730;
                            this.match(JavaParser.COMMA);
                            this.state = 1731;
                            this.typeArgument();
                        }
                    }
                    this.state = 1736;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1737;
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
        this.enterRule(_localctx, 242, JavaParser.RULE_superSuffix);
        let _la;
        try {
            this.state = 1748;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1739;
                        this.arguments();
                    }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1740;
                        this.match(JavaParser.DOT);
                        this.state = 1742;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.LT) {
                            {
                                this.state = 1741;
                                this.typeArguments();
                            }
                        }
                        this.state = 1744;
                        this.identifier();
                        this.state = 1746;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 216, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1745;
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
        this.enterRule(_localctx, 244, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1755;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1750;
                        this.match(JavaParser.SUPER);
                        this.state = 1751;
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
                        this.state = 1752;
                        this.identifier();
                        this.state = 1753;
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
        this.enterRule(_localctx, 246, JavaParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1757;
                this.match(JavaParser.LPAREN);
                this.state = 1759;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.SWITCH - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.MODULE - 37)) | (1 << (JavaParser.OPEN - 37)) | (1 << (JavaParser.REQUIRES - 37)) | (1 << (JavaParser.EXPORTS - 37)) | (1 << (JavaParser.OPENS - 37)) | (1 << (JavaParser.TO - 37)) | (1 << (JavaParser.USES - 37)) | (1 << (JavaParser.PROVIDES - 37)) | (1 << (JavaParser.WITH - 37)) | (1 << (JavaParser.TRANSITIVE - 37)) | (1 << (JavaParser.VAR - 37)) | (1 << (JavaParser.YIELD - 37)) | (1 << (JavaParser.RECORD - 37)) | (1 << (JavaParser.SEALED - 37)) | (1 << (JavaParser.PERMITS - 37)) | (1 << (JavaParser.DECIMAL_LITERAL - 37)) | (1 << (JavaParser.HEX_LITERAL - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.OCT_LITERAL - 69)) | (1 << (JavaParser.BINARY_LITERAL - 69)) | (1 << (JavaParser.FLOAT_LITERAL - 69)) | (1 << (JavaParser.HEX_FLOAT_LITERAL - 69)) | (1 << (JavaParser.BOOL_LITERAL - 69)) | (1 << (JavaParser.CHAR_LITERAL - 69)) | (1 << (JavaParser.STRING_LITERAL - 69)) | (1 << (JavaParser.TEXT_BLOCK - 69)) | (1 << (JavaParser.NULL_LITERAL - 69)) | (1 << (JavaParser.LPAREN - 69)) | (1 << (JavaParser.LT - 69)) | (1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (JavaParser.DEC - 101)) | (1 << (JavaParser.ADD - 101)) | (1 << (JavaParser.SUB - 101)) | (1 << (JavaParser.AT - 101)) | (1 << (JavaParser.IDENTIFIER - 101)))) !== 0)) {
                    {
                        this.state = 1758;
                        this.expressionList();
                    }
                }
                this.state = 1761;
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
            case 97:
                return this.expression_sempred(_localctx, predIndex);
            case 105:
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
JavaParser.RULE_classDeclaration = 7;
JavaParser.RULE_typeParameters = 8;
JavaParser.RULE_typeParameter = 9;
JavaParser.RULE_typeBound = 10;
JavaParser.RULE_enumDeclaration = 11;
JavaParser.RULE_enumConstants = 12;
JavaParser.RULE_enumConstant = 13;
JavaParser.RULE_enumBodyDeclarations = 14;
JavaParser.RULE_interfaceDeclaration = 15;
JavaParser.RULE_classBody = 16;
JavaParser.RULE_interfaceBody = 17;
JavaParser.RULE_classBodyDeclaration = 18;
JavaParser.RULE_memberDeclaration = 19;
JavaParser.RULE_methodDeclaration = 20;
JavaParser.RULE_methodBody = 21;
JavaParser.RULE_typeTypeOrVoid = 22;
JavaParser.RULE_genericMethodDeclaration = 23;
JavaParser.RULE_genericConstructorDeclaration = 24;
JavaParser.RULE_constructorDeclaration = 25;
JavaParser.RULE_fieldDeclaration = 26;
JavaParser.RULE_interfaceBodyDeclaration = 27;
JavaParser.RULE_interfaceMemberDeclaration = 28;
JavaParser.RULE_constDeclaration = 29;
JavaParser.RULE_constantDeclarator = 30;
JavaParser.RULE_interfaceMethodDeclaration = 31;
JavaParser.RULE_interfaceMethodModifier = 32;
JavaParser.RULE_genericInterfaceMethodDeclaration = 33;
JavaParser.RULE_interfaceCommonBodyDeclaration = 34;
JavaParser.RULE_variableDeclarators = 35;
JavaParser.RULE_variableDeclarator = 36;
JavaParser.RULE_variableDeclaratorId = 37;
JavaParser.RULE_variableInitializer = 38;
JavaParser.RULE_arrayInitializer = 39;
JavaParser.RULE_classOrInterfaceType = 40;
JavaParser.RULE_typeArgument = 41;
JavaParser.RULE_qualifiedNameList = 42;
JavaParser.RULE_formalParameters = 43;
JavaParser.RULE_receiverParameter = 44;
JavaParser.RULE_formalParameterList = 45;
JavaParser.RULE_formalParameter = 46;
JavaParser.RULE_lastFormalParameter = 47;
JavaParser.RULE_lambdaLVTIList = 48;
JavaParser.RULE_lambdaLVTIParameter = 49;
JavaParser.RULE_qualifiedName = 50;
JavaParser.RULE_literal = 51;
JavaParser.RULE_integerLiteral = 52;
JavaParser.RULE_floatLiteral = 53;
JavaParser.RULE_altAnnotationQualifiedName = 54;
JavaParser.RULE_annotation = 55;
JavaParser.RULE_elementValuePairs = 56;
JavaParser.RULE_elementValuePair = 57;
JavaParser.RULE_elementValue = 58;
JavaParser.RULE_elementValueArrayInitializer = 59;
JavaParser.RULE_annotationTypeDeclaration = 60;
JavaParser.RULE_annotationTypeBody = 61;
JavaParser.RULE_annotationTypeElementDeclaration = 62;
JavaParser.RULE_annotationTypeElementRest = 63;
JavaParser.RULE_annotationMethodOrConstantRest = 64;
JavaParser.RULE_annotationMethodRest = 65;
JavaParser.RULE_annotationConstantRest = 66;
JavaParser.RULE_defaultValue = 67;
JavaParser.RULE_moduleDeclaration = 68;
JavaParser.RULE_moduleBody = 69;
JavaParser.RULE_moduleDirective = 70;
JavaParser.RULE_requiresModifier = 71;
JavaParser.RULE_recordDeclaration = 72;
JavaParser.RULE_recordHeader = 73;
JavaParser.RULE_recordComponentList = 74;
JavaParser.RULE_recordComponent = 75;
JavaParser.RULE_recordBody = 76;
JavaParser.RULE_block = 77;
JavaParser.RULE_blockStatement = 78;
JavaParser.RULE_localVariableDeclaration = 79;
JavaParser.RULE_identifier = 80;
JavaParser.RULE_localTypeDeclaration = 81;
JavaParser.RULE_statement = 82;
JavaParser.RULE_catchClause = 83;
JavaParser.RULE_catchType = 84;
JavaParser.RULE_finallyBlock = 85;
JavaParser.RULE_resourceSpecification = 86;
JavaParser.RULE_resources = 87;
JavaParser.RULE_resource = 88;
JavaParser.RULE_switchBlockStatementGroup = 89;
JavaParser.RULE_switchLabel = 90;
JavaParser.RULE_forControl = 91;
JavaParser.RULE_forInit = 92;
JavaParser.RULE_enhancedForControl = 93;
JavaParser.RULE_parExpression = 94;
JavaParser.RULE_expressionList = 95;
JavaParser.RULE_methodCall = 96;
JavaParser.RULE_expression = 97;
JavaParser.RULE_pattern = 98;
JavaParser.RULE_lambdaExpression = 99;
JavaParser.RULE_lambdaParameters = 100;
JavaParser.RULE_lambdaBody = 101;
JavaParser.RULE_primary = 102;
JavaParser.RULE_switchExpression = 103;
JavaParser.RULE_switchLabeledRule = 104;
JavaParser.RULE_guardedPattern = 105;
JavaParser.RULE_switchRuleOutcome = 106;
JavaParser.RULE_classType = 107;
JavaParser.RULE_creator = 108;
JavaParser.RULE_createdName = 109;
JavaParser.RULE_innerCreator = 110;
JavaParser.RULE_arrayCreatorRest = 111;
JavaParser.RULE_classCreatorRest = 112;
JavaParser.RULE_explicitGenericInvocation = 113;
JavaParser.RULE_typeArgumentsOrDiamond = 114;
JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond = 115;
JavaParser.RULE_nonWildcardTypeArguments = 116;
JavaParser.RULE_typeList = 117;
JavaParser.RULE_typeType = 118;
JavaParser.RULE_primitiveType = 119;
JavaParser.RULE_typeArguments = 120;
JavaParser.RULE_superSuffix = 121;
JavaParser.RULE_explicitGenericInvocationSuffix = 122;
JavaParser.RULE_arguments = 123;
// tslint:disable:no-trailing-whitespace
JavaParser.ruleNames = [
    "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration",
    "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration",
    "typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants",
    "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "classBody",
    "interfaceBody", "classBodyDeclaration", "memberDeclaration", "methodDeclaration",
    "methodBody", "typeTypeOrVoid", "genericMethodDeclaration", "genericConstructorDeclaration",
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
JavaParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x82\u06E6\x04" +
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
    "{\t{\x04|\t|\x04}\t}\x03\x02\x05\x02\xFC\n\x02\x03\x02\x07\x02\xFF\n\x02" +
    "\f\x02\x0E\x02\u0102\v\x02\x03\x02\x07\x02\u0105\n\x02\f\x02\x0E\x02\u0108" +
    "\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\u010D\n\x02\x03\x03\x07\x03\u0110" +
    "\n\x03\f\x03\x0E\x03\u0113\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
    "\x03\x04\x05\x04\u011B\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0120\n\x04" +
    "\x03\x04\x03\x04\x03\x05\x07\x05\u0125\n\x05\f\x05\x0E\x05\u0128\v\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u012F\n\x05\x03\x05\x05" +
    "\x05\u0132\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0139" +
    "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x05\x07\u0145\n\x07\x03\b\x03\b\x05\b\u0149\n\b\x03\t" +
    "\x03\t\x03\t\x05\t\u014E\n\t\x03\t\x03\t\x05\t\u0152\n\t\x03\t\x03\t\x05" +
    "\t\u0156\n\t\x03\t\x03\t\x05\t\u015A\n\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
    "\x03\n\x07\n\u0162\n\n\f\n\x0E\n\u0165\v\n\x03\n\x03\n\x03\v\x07\v\u016A" +
    "\n\v\f\v\x0E\v\u016D\v\v\x03\v\x03\v\x03\v\x07\v\u0172\n\v\f\v\x0E\v\u0175" +
    "\v\v\x03\v\x05\v\u0178\n\v\x03\f\x03\f\x03\f\x07\f\u017D\n\f\f\f\x0E\f" +
    "\u0180\v\f\x03\r\x03\r\x03\r\x03\r\x05\r\u0186\n\r\x03\r\x03\r\x05\r\u018A" +
    "\n\r\x03\r\x05\r\u018D\n\r\x03\r\x05\r\u0190\n\r\x03\r\x03\r\x03\x0E\x03" +
    "\x0E\x03\x0E\x07\x0E\u0197\n\x0E\f\x0E\x0E\x0E\u019A\v\x0E\x03\x0F\x07" +
    "\x0F\u019D\n\x0F\f\x0F\x0E\x0F\u01A0\v\x0F\x03\x0F\x03\x0F\x05\x0F\u01A4" +
    "\n\x0F\x03\x0F\x05\x0F\u01A7\n\x0F\x03\x10\x03\x10\x07\x10\u01AB\n\x10" +
    "\f\x10\x0E\x10\u01AE\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u01B3\n\x11" +
    "\x03\x11\x03\x11\x05\x11\u01B7\n\x11\x03\x11\x03\x11\x05\x11\u01BB\n\x11" +
    "\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12\u01C1\n\x12\f\x12\x0E\x12\u01C4" +
    "\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u01CA\n\x13\f\x13\x0E\x13" +
    "\u01CD\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u01D3\n\x14\x03\x14" +
    "\x03\x14\x07\x14\u01D7\n\x14\f\x14\x0E\x14\u01DA\v\x14\x03\x14\x05\x14" +
    "\u01DD\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
    "\x15\x03\x15\x03\x15\x05\x15\u01E9\n\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
    "\x03\x16\x07\x16\u01F0\n\x16\f\x16\x0E\x16\u01F3\v\x16\x03\x16\x03\x16" +
    "\x05\x16\u01F7\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u01FD\n\x17" +
    "\x03\x18\x03\x18\x05\x18\u0201\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u020D\n\x1B\x03\x1B" +
    "\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x07\x1D\u0216\n\x1D\f" +
    "\x1D\x0E\x1D\u0219\v\x1D\x03\x1D\x03\x1D\x05\x1D\u021D\n\x1D\x03\x1E\x03" +
    "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0227\n\x1E" +
    "\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u022D\n\x1F\f\x1F\x0E\x1F\u0230" +
    "\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u0237\n \f \x0E \u023A\v \x03" +
    " \x03 \x03 \x03!\x07!\u0240\n!\f!\x0E!\u0243\v!\x03!\x03!\x03\"\x03\"" +
    "\x03\"\x03\"\x03\"\x03\"\x05\"\u024D\n\"\x03#\x07#\u0250\n#\f#\x0E#\u0253" +
    "\v#\x03#\x03#\x03#\x03$\x07$\u0259\n$\f$\x0E$\u025C\v$\x03$\x03$\x03$" +
    "\x03$\x03$\x07$\u0263\n$\f$\x0E$\u0266\v$\x03$\x03$\x05$\u026A\n$\x03" +
    "$\x03$\x03%\x03%\x03%\x07%\u0271\n%\f%\x0E%\u0274\v%\x03&\x03&\x03&\x05" +
    "&\u0279\n&\x03\'\x03\'\x03\'\x07\'\u027E\n\'\f\'\x0E\'\u0281\v\'\x03(" +
    "\x03(\x05(\u0285\n(\x03)\x03)\x03)\x03)\x07)\u028B\n)\f)\x0E)\u028E\v" +
    ")\x03)\x05)\u0291\n)\x05)\u0293\n)\x03)\x03)\x03*\x03*\x05*\u0299\n*\x03" +
    "*\x03*\x03*\x05*\u029E\n*\x07*\u02A0\n*\f*\x0E*\u02A3\v*\x03+\x03+\x07" +
    "+\u02A7\n+\f+\x0E+\u02AA\v+\x03+\x03+\x03+\x05+\u02AF\n+\x05+\u02B1\n" +
    "+\x03,\x03,\x03,\x07,\u02B6\n,\f,\x0E,\u02B9\v,\x03-\x03-\x05-\u02BD\n" +
    "-\x03-\x03-\x03-\x05-\u02C2\n-\x03-\x05-\u02C5\n-\x05-\u02C7\n-\x03-\x03" +
    "-\x03.\x03.\x03.\x03.\x07.\u02CF\n.\f.\x0E.\u02D2\v.\x03.\x03.\x03/\x03" +
    "/\x03/\x07/\u02D9\n/\f/\x0E/\u02DC\v/\x03/\x03/\x05/\u02E0\n/\x03/\x05" +
    "/\u02E3\n/\x030\x070\u02E6\n0\f0\x0E0\u02E9\v0\x030\x030\x030\x031\x07" +
    "1\u02EF\n1\f1\x0E1\u02F2\v1\x031\x031\x071\u02F6\n1\f1\x0E1\u02F9\v1\x03" +
    "1\x031\x031\x032\x032\x032\x072\u0301\n2\f2\x0E2\u0304\v2\x033\x073\u0307" +
    "\n3\f3\x0E3\u030A\v3\x033\x033\x033\x034\x034\x034\x074\u0312\n4\f4\x0E" +
    "4\u0315\v4\x035\x035\x035\x035\x035\x035\x035\x055\u031E\n5\x036\x036" +
    "\x037\x037\x038\x038\x038\x078\u0327\n8\f8\x0E8\u032A\v8\x038\x038\x03" +
    "8\x039\x039\x039\x059\u0332\n9\x039\x039\x039\x059\u0337\n9\x039\x059" +
    "\u033A\n9\x03:\x03:\x03:\x07:\u033F\n:\f:\x0E:\u0342\v:\x03;\x03;\x03" +
    ";\x03;\x03<\x03<\x03<\x05<\u034B\n<\x03=\x03=\x03=\x03=\x07=\u0351\n=" +
    "\f=\x0E=\u0354\v=\x05=\u0356\n=\x03=\x05=\u0359\n=\x03=\x03=\x03>\x03" +
    ">\x03>\x03>\x03>\x03?\x03?\x07?\u0364\n?\f?\x0E?\u0367\v?\x03?\x03?\x03" +
    "@\x07@\u036C\n@\f@\x0E@\u036F\v@\x03@\x03@\x05@\u0373\n@\x03A\x03A\x03" +
    "A\x03A\x03A\x03A\x05A\u037B\nA\x03A\x03A\x05A\u037F\nA\x03A\x03A\x05A" +
    "\u0383\nA\x03A\x03A\x05A\u0387\nA\x03A\x03A\x05A\u038B\nA\x05A\u038D\n" +
    "A\x03B\x03B\x05B\u0391\nB\x03C\x03C\x03C\x03C\x05C\u0397\nC\x03D\x03D" +
    "\x03E\x03E\x03E\x03F\x05F\u039F\nF\x03F\x03F\x03F\x03F\x03G\x03G\x07G" +
    "\u03A7\nG\fG\x0EG\u03AA\vG\x03G\x03G\x03H\x03H\x07H\u03B0\nH\fH\x0EH\u03B3" +
    "\vH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u03BC\nH\x03H\x03H\x03H\x03" +
    "H\x03H\x03H\x05H\u03C4\nH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
    "H\x03H\x03H\x03H\x05H\u03D2\nH\x03I\x03I\x03J\x03J\x03J\x05J\u03D9\nJ" +
    "\x03J\x03J\x03J\x05J\u03DE\nJ\x03J\x03J\x03K\x03K\x05K\u03E4\nK\x03K\x03" +
    "K\x03L\x03L\x03L\x07L\u03EB\nL\fL\x0EL\u03EE\vL\x03M\x03M\x03M\x03N\x03" +
    "N\x07N\u03F5\nN\fN\x0EN\u03F8\vN\x03N\x03N\x03O\x03O\x07O\u03FE\nO\fO" +
    "\x0EO\u0401\vO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x05P\u040A\nP\x03Q\x07" +
    "Q\u040D\nQ\fQ\x0EQ\u0410\vQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05" +
    "Q\u041A\nQ\x03R\x03R\x03S\x07S\u041F\nS\fS\x0ES\u0422\vS\x03S\x03S\x03" +
    "S\x05S\u0427\nS\x03S\x05S\u042A\nS\x03T\x03T\x03T\x03T\x03T\x05T\u0431" +
    "\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u043A\nT\x03T\x03T\x03T\x03" +
    "T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03" +
    "T\x03T\x06T\u044F\nT\rT\x0ET\u0450\x03T\x05T\u0454\nT\x03T\x05T\u0457" +
    "\nT\x03T\x03T\x03T\x03T\x07T\u045D\nT\fT\x0ET\u0460\vT\x03T\x05T\u0463" +
    "\nT\x03T\x03T\x03T\x03T\x07T\u0469\nT\fT\x0ET\u046C\vT\x03T\x07T\u046F" +
    "\nT\fT\x0ET\u0472\vT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u047C" +
    "\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0485\nT\x03T\x03T\x03T\x05" +
    "T\u048A\nT\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05" +
    "T\u0497\nT\x03T\x03T\x03T\x03T\x05T\u049D\nT\x03U\x03U\x03U\x07U\u04A2" +
    "\nU\fU\x0EU\u04A5\vU\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x07V\u04AF" +
    "\nV\fV\x0EV\u04B2\vV\x03W\x03W\x03W\x03X\x03X\x03X\x05X\u04BA\nX\x03X" +
    "\x03X\x03Y\x03Y\x03Y\x07Y\u04C1\nY\fY\x0EY\u04C4\vY\x03Z\x07Z\u04C7\n" +
    "Z\fZ\x0EZ\u04CA\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u04D1\nZ\x03Z\x03Z\x03" +
    "Z\x03Z\x05Z\u04D7\nZ\x03[\x06[\u04DA\n[\r[\x0E[\u04DB\x03[\x06[\u04DF" +
    "\n[\r[\x0E[\u04E0\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\\u04E9\n\\" +
    "\x03\\\x03\\\x03\\\x05\\\u04EE\n\\\x03]\x03]\x05]\u04F2\n]\x03]\x03]\x05" +
    "]\u04F6\n]\x03]\x03]\x05]\u04FA\n]\x05]\u04FC\n]\x03^\x03^\x05^\u0500" +
    "\n^\x03_\x07_\u0503\n_\f_\x0E_\u0506\v_\x03_\x03_\x05_\u050A\n_\x03_\x03" +
    "_\x03_\x03_\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x07a\u0517\na\fa\x0Ea\u051A" +
    "\va\x03b\x03b\x03b\x05b\u051F\nb\x03b\x03b\x03b\x03b\x03b\x05b\u0526\n" +
    "b\x03b\x03b\x03b\x03b\x05b\u052C\nb\x03b\x05b\u052F\nb\x03c\x03c\x03c" +
    "\x03c\x03c\x03c\x03c\x07c\u0538\nc\fc\x0Ec\u053B\vc\x03c\x03c\x03c\x07" +
    "c\u0540\nc\fc\x0Ec\u0543\vc\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x05c\u0551\nc\x03c\x03c\x05c\u0555\nc\x03c\x03c\x03c" +
    "\x05c\u055A\nc\x03c\x03c\x05c\u055E\nc\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u056E\nc\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03" +
    "c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u0596\nc\x03c\x03c\x03c\x03c\x05" +
    "c\u059C\nc\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05" +
    "c\u05A9\nc\x03c\x03c\x03c\x05c\u05AE\nc\x03c\x07c\u05B1\nc\fc\x0Ec\u05B4" +
    "\vc\x03d\x07d\u05B7\nd\fd\x0Ed\u05BA\vd\x03d\x03d\x07d\u05BE\nd\fd\x0E" +
    "d\u05C1\vd\x03d\x03d\x03e\x03e\x03e\x03e\x03f\x03f\x03f\x05f\u05CC\nf" +
    "\x03f\x03f\x03f\x03f\x03f\x07f\u05D3\nf\ff\x0Ef\u05D6\vf\x03f\x03f\x03" +
    "f\x03f\x05f\u05DC\nf\x03f\x05f\u05DF\nf\x03g\x03g\x05g\u05E3\ng\x03h\x03" +
    "h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x03" +
    "h\x05h\u05F5\nh\x05h\u05F7\nh\x03i\x03i\x03i\x03i\x07i\u05FD\ni\fi\x0E" +
    "i\u0600\vi\x03i\x03i\x03j\x03j\x03j\x03j\x05j\u0608\nj\x03j\x03j\x03j" +
    "\x03j\x03j\x05j\u060F\nj\x03k\x03k\x03k\x03k\x03k\x03k\x07k\u0617\nk\f" +
    "k\x0Ek\u061A\vk\x03k\x03k\x07k\u061E\nk\fk\x0Ek\u0621\vk\x03k\x03k\x03" +
    "k\x07k\u0626\nk\fk\x0Ek\u0629\vk\x05k\u062B\nk\x03k\x03k\x03k\x07k\u0630" +
    "\nk\fk\x0Ek\u0633\vk\x03l\x03l\x07l\u0637\nl\fl\x0El\u063A\vl\x05l\u063C" +
    "\nl\x03m\x03m\x03m\x05m\u0641\nm\x03m\x07m\u0644\nm\fm\x0Em\u0647\vm\x03" +
    "m\x03m\x05m\u064B\nm\x03n\x03n\x03n\x03n\x03n\x03n\x03n\x05n\u0654\nn" +
    "\x05n\u0656\nn\x03o\x03o\x05o\u065A\no\x03o\x03o\x03o\x05o\u065F\no\x07" +
    "o\u0661\no\fo\x0Eo\u0664\vo\x03o\x05o\u0667\no\x03p\x03p\x05p\u066B\n" +
    "p\x03p\x03p\x03q\x03q\x03q\x03q\x07q\u0673\nq\fq\x0Eq\u0676\vq\x03q\x03" +
    "q\x03q\x03q\x03q\x03q\x03q\x07q\u067F\nq\fq\x0Eq\u0682\vq\x03q\x03q\x07" +
    "q\u0686\nq\fq\x0Eq\u0689\vq\x05q\u068B\nq\x03r\x03r\x05r\u068F\nr\x03" +
    "s\x03s\x03s\x03t\x03t\x03t\x05t\u0697\nt\x03u\x03u\x03u\x05u\u069C\nu" +
    "\x03v\x03v\x03v\x03v\x03w\x03w\x03w\x07w\u06A5\nw\fw\x0Ew\u06A8\vw\x03" +
    "x\x07x\u06AB\nx\fx\x0Ex\u06AE\vx\x03x\x03x\x05x\u06B2\nx\x03x\x07x\u06B5" +
    "\nx\fx\x0Ex\u06B8\vx\x03x\x03x\x07x\u06BC\nx\fx\x0Ex\u06BF\vx\x03y\x03" +
    "y\x03z\x03z\x03z\x03z\x07z\u06C7\nz\fz\x0Ez\u06CA\vz\x03z\x03z\x03{\x03" +
    "{\x03{\x05{\u06D1\n{\x03{\x03{\x05{\u06D5\n{\x05{\u06D7\n{\x03|\x03|\x03" +
    "|\x03|\x03|\x05|\u06DE\n|\x03}\x03}\x05}\u06E2\n}\x03}\x03}\x03}\x02\x02" +
    "\x04\xC4\xD4~\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
    "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
    "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
    "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
    "\x02\x11\x04\x02\x13\x13**\x03\x02EH\x03\x02IJ\x04\x02((>>\x04\x025C\x82" +
    "\x82\x03\x02fi\x03\x02\\]\x04\x02jkoo\x03\x02hi\x04\x02Z[ab\x04\x02``" +
    "cc\x04\x02YYpz\x03\x02fg\x04\x02__{{\n\x02\x05\x05\x07\x07\n\n\x10\x10" +
    "\x16\x16\x1D\x1D\x1F\x1F\'\'\x02\u07AE\x02\u010C\x03\x02\x02\x02\x04\u0111" +
    "\x03\x02\x02\x02\x06\u0118\x03\x02\x02\x02\b\u0131\x03\x02\x02\x02\n\u0138" +
    "\x03\x02\x02\x02\f\u0144\x03\x02\x02\x02\x0E\u0148\x03\x02\x02\x02\x10" +
    "\u014A\x03\x02\x02\x02\x12\u015D\x03\x02\x02\x02\x14\u016B\x03\x02\x02" +
    "\x02\x16\u0179\x03\x02\x02\x02\x18\u0181\x03\x02\x02\x02\x1A\u0193\x03" +
    "\x02\x02\x02\x1C\u019E\x03\x02\x02\x02\x1E\u01A8\x03\x02\x02\x02 \u01AF" +
    "\x03\x02\x02\x02\"\u01BE\x03\x02\x02\x02$\u01C7\x03\x02\x02\x02&\u01DC" +
    "\x03\x02\x02\x02(\u01E8\x03\x02\x02\x02*\u01EA\x03\x02\x02\x02,\u01FC" +
    "\x03\x02\x02\x02.\u0200\x03\x02\x02\x020\u0202\x03\x02\x02\x022\u0205" +
    "\x03\x02\x02\x024\u0208\x03\x02\x02\x026\u0210\x03\x02\x02\x028\u021C" +
    "\x03\x02\x02\x02:\u0226\x03\x02\x02\x02<\u0228\x03\x02\x02\x02>\u0233" +
    "\x03\x02\x02\x02@\u0241\x03\x02\x02\x02B\u024C\x03\x02\x02\x02D\u0251" +
    "\x03\x02\x02\x02F\u025A\x03\x02\x02\x02H\u026D\x03\x02\x02\x02J\u0275" +
    "\x03\x02\x02\x02L\u027A\x03\x02\x02\x02N\u0284\x03\x02\x02\x02P\u0286" +
    "\x03\x02\x02\x02R\u0296\x03\x02\x02\x02T\u02B0\x03\x02\x02\x02V\u02B2" +
    "\x03\x02\x02\x02X\u02BA\x03\x02\x02\x02Z\u02CA\x03\x02\x02\x02\\\u02E2" +
    "\x03\x02\x02\x02^\u02E7\x03\x02\x02\x02`\u02F0\x03\x02\x02\x02b\u02FD" +
    "\x03\x02\x02\x02d\u0308\x03\x02\x02\x02f\u030E\x03\x02\x02\x02h\u031D" +
    "\x03\x02\x02\x02j\u031F\x03\x02\x02\x02l\u0321\x03\x02\x02\x02n\u0328" +
    "\x03\x02\x02\x02p\u0331\x03\x02\x02\x02r\u033B\x03\x02\x02\x02t\u0343" +
    "\x03\x02\x02\x02v\u034A\x03\x02\x02\x02x\u034C\x03\x02\x02\x02z\u035C" +
    "\x03\x02\x02\x02|\u0361\x03\x02\x02\x02~\u0372\x03\x02\x02\x02\x80\u038C" +
    "\x03\x02\x02\x02\x82\u0390\x03\x02\x02\x02\x84\u0392\x03\x02\x02\x02\x86" +
    "\u0398\x03\x02\x02\x02\x88\u039A\x03\x02\x02\x02\x8A\u039E\x03\x02\x02" +
    "\x02\x8C\u03A4\x03\x02\x02\x02\x8E\u03D1\x03\x02\x02\x02\x90\u03D3\x03" +
    "\x02\x02\x02\x92\u03D5\x03\x02\x02\x02\x94\u03E1\x03\x02\x02\x02\x96\u03E7" +
    "\x03\x02\x02\x02\x98\u03EF\x03\x02\x02\x02\x9A\u03F2\x03\x02\x02\x02\x9C" +
    "\u03FB\x03\x02\x02\x02\x9E\u0409\x03\x02\x02\x02\xA0\u040E\x03\x02\x02" +
    "\x02\xA2\u041B\x03\x02\x02\x02\xA4\u0429\x03\x02\x02\x02\xA6\u049C\x03" +
    "\x02\x02\x02\xA8\u049E\x03\x02\x02\x02\xAA\u04AB\x03\x02\x02\x02\xAC\u04B3" +
    "\x03\x02\x02\x02\xAE\u04B6\x03\x02\x02\x02\xB0\u04BD\x03\x02\x02\x02\xB2" +
    "\u04D6\x03\x02\x02\x02\xB4\u04D9\x03\x02\x02\x02\xB6\u04ED\x03\x02\x02" +
    "\x02\xB8\u04FB\x03\x02\x02\x02\xBA\u04FF\x03\x02\x02\x02\xBC\u0504\x03" +
    "\x02\x02\x02\xBE\u050F\x03\x02\x02\x02\xC0\u0513\x03\x02\x02\x02\xC2\u052E" +
    "\x03\x02\x02\x02\xC4\u055D\x03\x02\x02\x02\xC6\u05B8\x03\x02\x02\x02\xC8" +
    "\u05C4\x03\x02\x02\x02\xCA\u05DE\x03\x02\x02\x02\xCC\u05E2\x03\x02\x02" +
    "\x02\xCE\u05F6\x03\x02\x02\x02\xD0\u05F8\x03\x02\x02\x02\xD2\u060E\x03" +
    "\x02\x02\x02\xD4\u062A\x03\x02\x02\x02\xD6\u063B\x03\x02\x02\x02\xD8\u0640" +
    "\x03\x02\x02\x02\xDA\u0655\x03\x02\x02\x02\xDC\u0666\x03\x02\x02\x02\xDE" +
    "\u0668\x03\x02\x02\x02\xE0\u066E\x03\x02\x02\x02\xE2\u068C\x03\x02\x02" +
    "\x02\xE4\u0690\x03\x02\x02\x02\xE6\u0696\x03\x02\x02\x02\xE8\u069B\x03" +
    "\x02\x02\x02\xEA\u069D\x03\x02\x02\x02\xEC\u06A1\x03\x02\x02\x02\xEE\u06AC" +
    "\x03\x02\x02\x02\xF0\u06C0\x03\x02\x02\x02\xF2\u06C2\x03\x02\x02\x02\xF4" +
    "\u06D6\x03\x02\x02\x02\xF6\u06DD\x03\x02\x02\x02\xF8\u06DF\x03\x02\x02" +
    "\x02\xFA\xFC\x05\x04\x03\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02" +
    "\x02\xFC\u0100\x03\x02\x02\x02\xFD\xFF\x05\x06\x04\x02\xFE\xFD\x03\x02" +
    "\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101" +
    "\x03\x02\x02\x02\u0101\u0106\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02" +
    "\u0103";
JavaParser._serializedATNSegment1 = "\u0105\x05\b\x05\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02" +
    "\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010D" +
    "\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010A\x05\x8AF\x02" +
    "\u010A\u010B\x07\x02\x02\x03\u010B\u010D\x03\x02\x02\x02\u010C\xFB\x03" +
    "\x02\x02\x02\u010C\u0109\x03\x02\x02\x02\u010D\x03\x03\x02\x02\x02\u010E" +
    "\u0110\x05p9\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02" +
    "\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03" +
    "\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0115\x07\"\x02\x02\u0115" +
    "\u0116\x05f4\x02\u0116\u0117\x07V\x02\x02\u0117\x05\x03\x02\x02\x02\u0118" +
    "\u011A\x07\x1B\x02\x02\u0119\u011B\x07(\x02\x02\u011A\u0119\x03\x02\x02" +
    "\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011F" +
    "\x05f4\x02\u011D\u011E\x07X\x02\x02\u011E\u0120\x07j\x02\x02\u011F\u011D" +
    "\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02" +
    "\u0121\u0122\x07V\x02\x02\u0122\x07\x03\x02\x02\x02\u0123\u0125\x05\f" +
    "\x07\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126" +
    "\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u012E\x03\x02" +
    "\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012F\x05\x10\t\x02\u012A\u012F" +
    "\x05\x18\r\x02\u012B\u012F\x05 \x11\x02\u012C\u012F\x05z>\x02\u012D\u012F" +
    "\x05\x92J\x02\u012E\u0129\x03\x02\x02\x02\u012E\u012A\x03\x02\x02\x02" +
    "\u012E\u012B\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012D\x03" +
    "\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u0132\x07V\x02\x02\u0131" +
    "\u0126\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\t\x03\x02\x02" +
    "\x02\u0133\u0139\x05\f\x07\x02\u0134\u0139\x07 \x02\x02\u0135\u0139\x07" +
    ",\x02\x02\u0136\u0139\x070\x02\x02\u0137\u0139\x073\x02\x02\u0138\u0133" +
    "\x03\x02\x02\x02\u0138\u0134\x03\x02\x02\x02\u0138\u0135\x03\x02\x02\x02" +
    "\u0138\u0136\x03\x02\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139\v\x03\x02" +
    "\x02\x02\u013A\u0145\x05p9\x02\u013B\u0145\x07%\x02\x02\u013C\u0145\x07" +
    "$\x02\x02\u013D\u0145\x07#\x02\x02\u013E\u0145\x07(\x02\x02\u013F\u0145" +
    "\x07\x03\x02\x02\u0140\u0145\x07\x14\x02\x02\u0141\u0145\x07)\x02\x02" +
    "\u0142\u0145\x07B\x02\x02\u0143\u0145\x07D\x02\x02\u0144\u013A\x03\x02" +
    "\x02\x02\u0144\u013B\x03\x02\x02\x02\u0144\u013C\x03\x02\x02\x02\u0144" +
    "\u013D\x03\x02\x02\x02\u0144\u013E\x03\x02\x02\x02\u0144\u013F\x03\x02" +
    "\x02\x02\u0144\u0140\x03\x02\x02\x02\u0144\u0141\x03\x02\x02\x02\u0144" +
    "\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145\r\x03\x02\x02" +
    "\x02\u0146\u0149\x07\x14\x02\x02\u0147\u0149\x05p9\x02\u0148\u0146\x03" +
    "\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\x0F\x03\x02\x02\x02\u014A" +
    "\u014B\x07\v\x02\x02\u014B\u014D\x05\xA2R\x02\u014C\u014E\x05\x12\n\x02" +
    "\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0151\x03" +
    "\x02\x02\x02\u014F\u0150\x07\x13\x02\x02\u0150\u0152\x05\xEEx\x02\u0151" +
    "\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0155\x03\x02" +
    "\x02\x02\u0153\u0154\x07\x1A\x02\x02\u0154\u0156\x05\xECw\x02\u0155\u0153" +
    "\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02" +
    "\u0157\u0158\x07C\x02\x02\u0158\u015A\x05\xECw\x02\u0159\u0157\x03\x02" +
    "\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
    "\u015C\x05\"\x12\x02\u015C\x11\x03\x02\x02\x02\u015D\u015E\x07[\x02\x02" +
    "\u015E\u0163\x05\x14\v\x02\u015F\u0160\x07W\x02\x02\u0160\u0162\x05\x14" +
    "\v\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0165\x03\x02\x02\x02\u0163\u0161" +
    "\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02" +
    "\u0165\u0163\x03\x02\x02\x02\u0166\u0167\x07Z\x02\x02\u0167\x13\x03\x02" +
    "\x02\x02\u0168\u016A\x05p9\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016D" +
    "\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
    "\u016C\u016E\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0177\x05" +
    "\xA2R\x02\u016F\u0173\x07\x13\x02\x02\u0170\u0172\x05p9\x02\u0171\u0170" +
    "\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02" +
    "\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0173\x03" +
    "\x02\x02\x02\u0176\u0178\x05\x16\f\x02\u0177\u016F\x03\x02\x02\x02\u0177" +
    "\u0178\x03\x02\x02\x02\u0178\x15\x03\x02\x02\x02\u0179\u017E\x05\xEEx" +
    "\x02\u017A\u017B\x07l\x02\x02\u017B\u017D\x05\xEEx\x02\u017C\u017A\x03" +
    "\x02\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E" +
    "\u017F\x03\x02\x02\x02\u017F\x17\x03\x02\x02\x02\u0180\u017E\x03\x02\x02" +
    "\x02\u0181\u0182\x07\x12\x02\x02\u0182\u0185\x05\xA2R\x02\u0183\u0184" +
    "\x07\x1A\x02\x02\u0184\u0186\x05\xECw\x02\u0185\u0183\x03\x02\x02\x02" +
    "\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x07" +
    "R\x02\x02\u0188\u018A\x05\x1A\x0E\x02\u0189\u0188\x03\x02\x02\x02\u0189" +
    "\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u018D\x07W\x02" +
    "\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F" +
    "\x03\x02\x02\x02\u018E\u0190\x05\x1E\x10\x02\u018F\u018E\x03\x02\x02\x02" +
    "\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x07" +
    "S\x02\x02\u0192\x19\x03\x02\x02\x02\u0193\u0198\x05\x1C\x0F\x02\u0194" +
    "\u0195\x07W\x02\x02\u0195\u0197\x05\x1C\x0F\x02\u0196\u0194\x03\x02\x02" +
    "\x02\u0197\u019A\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199" +
    "\x03\x02\x02\x02\u0199\x1B\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02" +
    "\u019B\u019D\x05p9\x02\u019C\u019B\x03\x02\x02\x02\u019D\u01A0\x03\x02" +
    "\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F" +
    "\u01A1\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A3\x05\xA2" +
    "R\x02\u01A2\u01A4\x05\xF8}\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4" +
    "\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A7\x05\"\x12\x02" +
    "\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\x1D\x03" +
    "\x02\x02\x02\u01A8\u01AC\x07V\x02\x02\u01A9\u01AB\x05&\x14\x02\u01AA\u01A9" +
    "\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
    "\u01AC\u01AD\x03\x02\x02\x02\u01AD\x1F\x03\x02\x02\x02\u01AE\u01AC\x03" +
    "\x02\x02\x02\u01AF\u01B0\x07\x1E\x02\x02\u01B0\u01B2\x05\xA2R\x02\u01B1" +
    "\u01B3\x05\x12\n\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02" +
    "\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B5\x07\x13\x02\x02\u01B5\u01B7" +
    "\x05\xECw\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
    "\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B9\x07C\x02\x02\u01B9\u01BB\x05" +
    "\xECw\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
    "\u01BC\x03\x02\x02\x02\u01BC\u01BD\x05$\x13\x02\u01BD!\x03\x02\x02\x02" +
    "\u01BE\u01C2\x07R\x02\x02\u01BF\u01C1\x05&\x14\x02\u01C0\u01BF\x03\x02" +
    "\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2" +
    "\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C2\x03\x02" +
    "\x02\x02\u01C5\u01C6\x07S\x02\x02\u01C6#\x03\x02\x02\x02\u01C7\u01CB\x07" +
    "R\x02\x02\u01C8\u01CA\x058\x1D\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD" +
    "\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
    "\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x07" +
    "S\x02\x02\u01CF%\x03\x02\x02\x02\u01D0\u01DD\x07V\x02\x02\u01D1\u01D3" +
    "\x07(\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
    "\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01DD\x05\x9CO\x02\u01D5\u01D7\x05" +
    "\n\x06\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8" +
    "\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x03\x02" +
    "\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DD\x05(\x15\x02\u01DC\u01D0" +
    "\x03\x02\x02\x02\u01DC\u01D2\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02" +
    "\u01DD\'\x03\x02\x02\x02\u01DE\u01E9\x05*\x16\x02\u01DF\u01E9\x050\x19" +
    "\x02\u01E0\u01E9\x056\x1C\x02\u01E1\u01E9\x054\x1B\x02\u01E2\u01E9\x05" +
    "2\x1A\x02\u01E3\u01E9\x05 \x11\x02\u01E4\u01E9\x05z>\x02\u01E5\u01E9\x05" +
    "\x10\t\x02\u01E6\u01E9\x05\x18\r\x02\u01E7\u01E9\x05\x92J\x02\u01E8\u01DE" +
    "\x03\x02\x02\x02\u01E8\u01DF\x03\x02\x02\x02\u01E8\u01E0\x03\x02\x02\x02" +
    "\u01E8\u01E1\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3\x03" +
    "\x02\x02\x02\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E8" +
    "\u01E6\x03\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9)\x03\x02\x02" +
    "\x02\u01EA\u01EB\x05.\x18\x02\u01EB\u01EC\x05\xA2R\x02\u01EC\u01F1\x05" +
    "X-\x02\u01ED\u01EE\x07T\x02\x02\u01EE\u01F0\x07U\x02\x02\u01EF\u01ED\x03" +
    "\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
    "\u01F2\x03\x02\x02\x02\u01F2\u01F6\x03\x02\x02\x02\u01F3\u01F1\x03\x02" +
    "\x02\x02\u01F4\u01F5\x07/\x02\x02\u01F5\u01F7\x05V,\x02\u01F6\u01F4\x03" +
    "\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8" +
    "\u01F9\x05,\x17\x02\u01F9+\x03\x02\x02\x02\u01FA\u01FD\x05\x9CO\x02\u01FB" +
    "\u01FD\x07V\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02" +
    "\x02\u01FD-\x03\x02\x02\x02\u01FE\u0201\x05\xEEx\x02\u01FF\u0201\x072" +
    "\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201" +
    "/\x03\x02\x02\x02\u0202\u0203\x05\x12\n\x02\u0203\u0204\x05*\x16\x02\u0204" +
    "1\x03\x02\x02\x02\u0205\u0206\x05\x12\n\x02\u0206\u0207\x054\x1B\x02\u0207" +
    "3\x03\x02\x02\x02\u0208\u0209\x05\xA2R\x02\u0209\u020C\x05X-\x02\u020A" +
    "\u020B\x07/\x02\x02\u020B\u020D\x05V,\x02\u020C\u020A\x03\x02\x02\x02" +
    "\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u020F\x05" +
    "\x9CO\x02\u020F5\x03\x02\x02\x02\u0210\u0211\x05\xEEx\x02\u0211\u0212" +
    "\x05H%\x02\u0212\u0213\x07V\x02\x02\u02137\x03\x02\x02\x02\u0214\u0216" +
    "\x05\n\x06\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02" +
    "\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03" +
    "\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021D\x05:\x1E\x02\u021B" +
    "\u021D\x07V\x02\x02\u021C\u0217\x03\x02\x02\x02\u021C\u021B\x03\x02\x02" +
    "\x02\u021D9\x03\x02\x02\x02\u021E\u0227\x05<\x1F\x02\u021F\u0227\x05@" +
    "!\x02\u0220\u0227\x05D#\x02\u0221\u0227\x05 \x11\x02\u0222\u0227\x05z" +
    ">\x02\u0223\u0227\x05\x10\t\x02\u0224\u0227\x05\x18\r\x02\u0225\u0227" +
    "\x05\x92J\x02\u0226\u021E\x03\x02\x02\x02\u0226\u021F\x03\x02\x02\x02" +
    "\u0226\u0220\x03\x02\x02\x02\u0226\u0221\x03\x02\x02\x02\u0226\u0222\x03" +
    "\x02\x02\x02\u0226\u0223\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226" +
    "\u0225\x03\x02\x02\x02\u0227;\x03\x02\x02\x02\u0228\u0229\x05\xEEx\x02" +
    "\u0229\u022E\x05> \x02\u022A\u022B\x07W\x02\x02\u022B\u022D\x05> \x02" +
    "\u022C\u022A\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03" +
    "\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0231\x03\x02\x02\x02\u0230" +
    "\u022E\x03\x02\x02\x02\u0231\u0232\x07V\x02\x02\u0232=\x03\x02\x02\x02" +
    "\u0233\u0238\x05\xA2R\x02\u0234\u0235\x07T\x02\x02\u0235\u0237\x07U\x02" +
    "\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238\u0236" +
    "\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03\x02\x02\x02" +
    "\u023A\u0238\x03\x02\x02\x02\u023B\u023C\x07Y\x02\x02\u023C\u023D\x05" +
    "N(\x02\u023D?\x03\x02\x02\x02\u023E\u0240\x05B\"\x02\u023F\u023E\x03\x02" +
    "\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241" +
    "\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02\u0243\u0241\x03\x02" +
    "\x02\x02\u0244\u0245\x05F$\x02\u0245A\x03\x02\x02\x02\u0246\u024D\x05" +
    "p9\x02\u0247\u024D\x07%\x02\x02\u0248\u024D\x07\x03\x02\x02\u0249\u024D" +
    "\x07\x0E\x02\x02\u024A\u024D\x07(\x02\x02\u024B\u024D\x07)\x02\x02\u024C" +
    "\u0246\x03\x02\x02\x02\u024C\u0247\x03\x02\x02\x02\u024C\u0248\x03\x02" +
    "\x02\x02\u024C\u0249\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C" +
    "\u024B\x03\x02\x02\x02\u024DC\x03\x02\x02\x02\u024E\u0250\x05B\"\x02\u024F" +
    "\u024E\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02" +
    "\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253" +
    "\u0251\x03\x02\x02\x02\u0254\u0255\x05\x12\n\x02\u0255\u0256\x05F$\x02" +
    "\u0256E\x03\x02\x02\x02\u0257\u0259\x05p9\x02\u0258\u0257\x03\x02\x02" +
    "\x02\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u025B" +
    "\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C\u025A\x03\x02\x02\x02" +
    "\u025D\u025E\x05.\x18\x02\u025E\u025F\x05\xA2R\x02\u025F\u0264\x05X-\x02" +
    "\u0260\u0261\x07T\x02\x02\u0261\u0263\x07U\x02\x02\u0262\u0260\x03\x02" +
    "\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264" +
    "\u0265\x03\x02\x02\x02\u0265\u0269\x03\x02\x02\x02\u0266\u0264\x03\x02" +
    "\x02\x02\u0267\u0268\x07/\x02\x02\u0268\u026A\x05V,\x02\u0269\u0267\x03" +
    "\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B" +
    "\u026C\x05,\x17\x02\u026CG\x03\x02\x02\x02\u026D\u0272\x05J&\x02\u026E" +
    "\u026F\x07W\x02\x02\u026F\u0271\x05J&\x02\u0270\u026E\x03\x02\x02\x02" +
    "\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03" +
    "\x02\x02\x02\u0273I\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275" +
    "\u0278\x05L\'\x02\u0276\u0277\x07Y\x02\x02\u0277\u0279\x05N(\x02\u0278" +
    "\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279K\x03\x02\x02" +
    "\x02\u027A\u027F\x05\xA2R\x02\u027B\u027C\x07T\x02\x02\u027C\u027E\x07" +
    "U\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F" +
    "\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280M\x03\x02\x02" +
    "\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0285\x05P)\x02\u0283\u0285\x05" +
    "\xC4c\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285" +
    "O\x03\x02\x02\x02\u0286\u0292\x07R\x02\x02\u0287\u028C\x05N(\x02\u0288" +
    "\u0289\x07W\x02\x02\u0289\u028B\x05N(\x02\u028A\u0288\x03\x02\x02\x02" +
    "\u028B\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03" +
    "\x02\x02\x02\u028D\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F" +
    "\u0291\x07W\x02\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291\x03\x02\x02" +
    "\x02\u0291\u0293\x03\x02\x02\x02\u0292\u0287\x03\x02\x02\x02\u0292\u0293" +
    "\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x07S\x02\x02" +
    "\u0295Q\x03\x02\x02\x02\u0296\u0298\x05\xA2R\x02\u0297\u0299\x05\xF2z" +
    "\x02\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u02A1" +
    "\x03\x02\x02\x02\u029A\u029B\x07X\x02\x02\u029B\u029D\x05\xA2R\x02\u029C" +
    "\u029E\x05\xF2z\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03\x02\x02" +
    "\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029A\x03\x02\x02\x02\u02A0\u02A3" +
    "\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02" +
    "\u02A2S\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02B1\x05\xEE" +
    "x\x02\u02A5\u02A7\x05p9\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7\u02AA\x03" +
    "\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9" +
    "\u02AB\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB\u02AE\x07^\x02" +
    "\x02\u02AC\u02AD\t\x02\x02\x02\u02AD\u02AF\x05\xEEx\x02\u02AE\u02AC\x03" +
    "\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0" +
    "\u02A4\x03\x02\x02\x02\u02B0\u02A8\x03\x02\x02\x02\u02B1U\x03\x02\x02" +
    "\x02\u02B2\u02B7\x05f4\x02\u02B3\u02B4\x07W\x02\x02\u02B4\u02B6\x05f4" +
    "\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5" +
    "\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8W\x03\x02\x02\x02\u02B9" +
    "\u02B7\x03\x02\x02\x02\u02BA\u02C6\x07P\x02\x02\u02BB\u02BD\x05Z.\x02" +
    "\u02BC\u02BB\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02C7\x03" +
    "\x02\x02\x02\u02BE\u02C1\x05Z.\x02\u02BF\u02C0\x07W\x02\x02\u02C0\u02C2" +
    "\x05\\/\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2" +
    "\u02C7\x03\x02\x02\x02\u02C3\u02C5\x05\\/\x02\u02C4\u02C3\x03\x02\x02" +
    "\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7\x03\x02\x02\x02\u02C6\u02BC" +
    "\x03\x02\x02\x02\u02C6\u02BE\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02" +
    "\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x07Q\x02\x02\u02C9Y\x03\x02\x02" +
    "\x02\u02CA\u02D0\x05\xEEx\x02\u02CB\u02CC\x05\xA2R\x02\u02CC\u02CD\x07" +
    "X\x02\x02\u02CD\u02CF\x03\x02\x02\x02\u02CE\u02CB\x03\x02\x02\x02\u02CF" +
    "\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02" +
    "\x02\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3" +
    "\u02D4\x07-\x02\x02\u02D4[\x03\x02\x02\x02\u02D5\u02DA\x05^0\x02\u02D6" +
    "\u02D7\x07W\x02\x02\u02D7\u02D9\x05^0\x02\u02D8\u02D6\x03\x02\x02\x02" +
    "\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03" +
    "\x02\x02\x02\u02DB\u02DF\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD" +
    "\u02DE\x07W\x02\x02\u02DE\u02E0\x05`1\x02\u02DF\u02DD\x03\x02\x02\x02" +
    "\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02E3\x05" +
    "`1\x02\u02E2\u02D5\x03\x02\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3]" +
    "\x03\x02\x02\x02\u02E4\u02E6\x05\x0E\b\x02\u02E5\u02E4\x03\x02\x02\x02" +
    "\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03" +
    "\x02\x02\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA" +
    "\u02EB\x05\xEEx\x02\u02EB\u02EC\x05L\'\x02\u02EC_\x03\x02\x02\x02\u02ED" +
    "\u02EF\x05\x0E\b\x02\u02EE\u02ED\x03\x02\x02\x02\u02EF\u02F2\x03\x02\x02" +
    "\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F3" +
    "\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u02F7\x05\xEEx\x02" +
    "\u02F4\u02F6\x05p9\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6\u02F9\x03\x02" +
    "\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8" +
    "\u02FA\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA\u02FB\x07~\x02" +
    "\x02\u02FB\u02FC\x05L\'\x02\u02FCa\x03\x02\x02\x02\u02FD\u0302\x05d3\x02" +
    "\u02FE\u02FF\x07W\x02\x02\u02FF\u0301\x05d3\x02\u0300\u02FE\x03\x02\x02" +
    "\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0302\u0303" +
    "\x03\x02\x02\x02\u0303c\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02\u0305" +
    "\u0307\x05\x0E\b\x02\u0306\u0305\x03\x02\x02\x02\u0307\u030A\x03\x02\x02" +
    "\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B" +
    "\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030C\x07?\x02\x02" +
    "\u030C\u030D\x05\xA2R\x02\u030De\x03\x02\x02\x02\u030E\u0313\x05\xA2R" +
    "\x02\u030F\u0310\x07X\x02\x02\u0310\u0312\x05\xA2R\x02\u0311\u030F\x03" +
    "\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313" +
    "\u0314\x03\x02\x02\x02\u0314g\x03\x02\x02\x02\u0315\u0313\x03\x02\x02" +
    "\x02\u0316\u031E\x05j6\x02\u0317\u031E\x05l7\x02\u0318\u031E\x07L\x02" +
    "\x02\u0319\u031E\x07M\x02\x02\u031A\u031E\x07K\x02\x02\u031B\u031E\x07" +
    "O\x02\x02\u031C\u031E\x07N\x02\x02\u031D\u0316\x03\x02\x02\x02\u031D\u0317" +
    "\x03\x02\x02\x02\u031D\u0318\x03\x02\x02\x02\u031D\u0319\x03\x02\x02\x02" +
    "\u031D\u031A\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031C\x03" +
    "\x02\x02\x02\u031Ei\x03\x02\x02\x02\u031F\u0320\t\x03\x02\x02\u0320k\x03" +
    "\x02\x02\x02\u0321\u0322\t\x04\x02\x02\u0322m\x03\x02\x02\x02\u0323\u0324" +
    "\x05\xA2R\x02\u0324\u0325\x07X\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326" +
    "\u0323\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02" +
    "\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02\x02\x02\u032A" +
    "\u0328\x03\x02\x02\x02\u032B\u032C\x07}\x02\x02\u032C\u032D\x05\xA2R\x02" +
    "\u032Do\x03\x02\x02\x02\u032E\u032F\x07}\x02\x02\u032F\u0332\x05f4\x02" +
    "\u0330\u0332\x05n8\x02\u0331\u032E\x03\x02\x02\x02\u0331\u0330\x03\x02" +
    "\x02\x02\u0332\u0339\x03\x02\x02\x02\u0333\u0336\x07P\x02\x02\u0334\u0337" +
    "\x05r:\x02\u0335\u0337\x05v<\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0335" +
    "\x03\x02\x02\x02\u0336\u0337\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
    "\u0338\u033A\x07Q\x02\x02\u0339\u0333\x03\x02\x02\x02\u0339\u033A\x03" +
    "\x02\x02\x02\u033Aq\x03\x02\x02\x02\u033B\u0340\x05t;\x02\u033C\u033D" +
    "\x07W\x02\x02\u033D\u033F\x05t;\x02\u033E\u033C\x03\x02\x02\x02\u033F" +
    "\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02" +
    "\x02\x02\u0341s\x03\x02\x02\x02\u0342\u0340\x03\x02\x02\x02\u0343\u0344" +
    "\x05\xA2R\x02\u0344\u0345\x07Y\x02\x02\u0345\u0346\x05v<\x02\u0346u\x03" +
    "\x02\x02\x02\u0347\u034B\x05\xC4c\x02\u0348\u034B\x05p9\x02\u0349\u034B" +
    "\x05x=\x02\u034A\u0347\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A" +
    "\u0349\x03\x02\x02\x02\u034Bw\x03\x02\x02\x02\u034C\u0355\x07R\x02\x02" +
    "\u034D\u0352\x05v<\x02\u034E\u034F\x07W\x02\x02\u034F\u0351\x05v<\x02" +
    "\u0350\u034E\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0350\x03" +
    "\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0356\x03\x02\x02\x02\u0354" +
    "\u0352\x03\x02\x02\x02\u0355\u034D\x03\x02\x02\x02\u0355\u0356\x03\x02" +
    "\x02\x02\u0356\u0358\x03\x02\x02\x02\u0357\u0359\x07W\x02\x02\u0358\u0357" +
    "\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02" +
    "\u035A\u035B\x07S\x02\x02\u035By\x03\x02\x02\x02\u035C\u035D\x07}\x02" +
    "\x02\u035D\u035E\x07\x1E\x02\x02\u035E\u035F\x05\xA2R\x02\u035F\u0360" +
    "\x05|?\x02\u0360{\x03\x02\x02\x02\u0361\u0365\x07R\x02\x02\u0362\u0364" +
    "\x05~@\x02\u0363\u0362\x03\x02\x02\x02\u0364\u0367\x03\x02\x02\x02\u0365" +
    "\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02" +
    "\x02\x02\u0367\u0365\x03\x02\x02\x02\u0368\u0369\x07S\x02\x02\u0369}\x03" +
    "\x02\x02\x02\u036A\u036C\x05\n\x06\x02\u036B\u036A\x03\x02\x02\x02\u036C" +
    "\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03\x02" +
    "\x02\x02\u036E\u0370\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u0370" +
    "\u0373\x05\x80A\x02\u0371\u0373\x07V\x02\x02\u0372\u036D\x03\x02\x02\x02" +
    "\u0372\u0371\x03\x02\x02\x02\u0373\x7F\x03\x02\x02\x02\u0374\u0375\x05" +
    "\xEEx\x02\u0375\u0376\x05\x82B\x02\u0376\u0377\x07V\x02\x02\u0377\u038D" +
    "\x03\x02\x02\x02\u0378\u037A\x05\x10\t\x02\u0379\u037B\x07V\x02\x02\u037A" +
    "\u0379\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u038D\x03\x02" +
    "\x02\x02\u037C\u037E\x05 \x11\x02\u037D\u037F\x07V\x02\x02\u037E\u037D" +
    "\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u038D\x03\x02\x02\x02" +
    "\u0380\u0382\x05\x18\r\x02\u0381\u0383\x07V\x02\x02\u0382\u0381\x03\x02" +
    "\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u038D\x03\x02\x02\x02\u0384" +
    "\u0386\x05z>\x02\u0385\u0387\x07V\x02\x02\u0386\u0385\x03\x02\x02\x02" +
    "\u0386\u0387\x03\x02\x02\x02\u0387\u038D\x03\x02\x02\x02\u0388\u038A\x05" +
    "\x92J\x02\u0389\u038B\x07V\x02\x02\u038A\u0389\x03\x02\x02\x02\u038A\u038B" +
    "\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u0374\x03\x02\x02\x02" +
    "\u038C\u0378\x03\x02\x02\x02\u038C\u037C\x03\x02\x02\x02\u038C\u0380\x03" +
    "\x02\x02\x02\u038C\u0384\x03\x02\x02\x02\u038C\u0388\x03\x02\x02\x02\u038D" +
    "\x81\x03\x02\x02\x02\u038E\u0391\x05\x84C\x02\u038F\u0391\x05\x86D\x02" +
    "\u0390\u038E\x03\x02\x02\x02\u0390\u038F\x03\x02\x02\x02\u0391\x83\x03" +
    "\x02\x02\x02\u0392\u0393\x05\xA2R\x02\u0393\u0394\x07P\x02\x02\u0394\u0396" +
    "\x07Q\x02\x02\u0395\u0397\x05\x88E\x02\u0396\u0395\x03\x02\x02\x02\u0396" +
    "\u0397\x03\x02\x02\x02\u0397\x85\x03\x02\x02\x02\u0398\u0399\x05H%\x02" +
    "\u0399\x87\x03\x02\x02\x02\u039A\u039B\x07\x0E\x02\x02\u039B\u039C\x05" +
    "v<\x02\u039C\x89\x03\x02\x02\x02\u039D\u039F\x076\x02\x02\u039E\u039D" +
    "\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02" +
    "\u03A0\u03A1\x075\x02\x02\u03A1\u03A2\x05f4\x02\u03A2\u03A3\x05\x8CG\x02" +
    "\u03A3\x8B\x03\x02\x02\x02\u03A4\u03A8\x07R\x02\x02\u03A5\u03A7\x05\x8E" +
    "H\x02\u03A6\u03A5\x03\x02\x02\x02\u03A7\u03AA\x03\x02\x02\x02\u03A8\u03A6" +
    "\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AB\x03\x02\x02\x02" +
    "\u03AA\u03A8\x03\x02\x02\x02\u03AB\u03AC\x07S\x02\x02\u03AC\x8D\x03\x02" +
    "\x02\x02\u03AD\u03B1\x077\x02\x02\u03AE\u03B0\x05";
JavaParser._serializedATNSegment2 = "\x90I\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0\u03B3\x03\x02\x02\x02\u03B1" +
    "\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x03\x02" +
    "\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u03B5\x05f4\x02\u03B5\u03B6" +
    "\x07V\x02\x02\u03B6\u03D2\x03\x02\x02\x02\u03B7\u03B8\x078\x02\x02\u03B8" +
    "\u03BB\x05f4\x02\u03B9\u03BA\x07:\x02\x02\u03BA\u03BC\x05f4\x02\u03BB" +
    "\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BD\x03\x02" +
    "\x02\x02\u03BD\u03BE\x07V\x02\x02\u03BE\u03D2\x03\x02\x02\x02\u03BF\u03C0" +
    "\x079\x02\x02\u03C0\u03C3\x05f4\x02\u03C1\u03C2\x07:\x02\x02\u03C2\u03C4" +
    "\x05f4\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
    "\u03C5\x03\x02\x02\x02\u03C5\u03C6\x07V\x02\x02\u03C6\u03D2\x03\x02\x02" +
    "\x02\u03C7\u03C8\x07;\x02\x02\u03C8\u03C9\x05f4\x02\u03C9\u03CA\x07V\x02" +
    "\x02\u03CA\u03D2\x03\x02\x02\x02\u03CB\u03CC\x07<\x02\x02\u03CC\u03CD" +
    "\x05f4\x02\u03CD\u03CE\x07=\x02\x02\u03CE\u03CF\x05f4\x02\u03CF\u03D0" +
    "\x07V\x02\x02\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03AD\x03\x02\x02\x02" +
    "\u03D1\u03B7\x03\x02\x02\x02\u03D1\u03BF\x03\x02\x02\x02\u03D1\u03C7\x03" +
    "\x02\x02\x02\u03D1\u03CB\x03\x02\x02\x02\u03D2\x8F\x03\x02\x02\x02\u03D3" +
    "\u03D4\t\x05\x02\x02\u03D4\x91\x03\x02\x02\x02\u03D5\u03D6\x07A\x02\x02" +
    "\u03D6\u03D8\x05\xA2R\x02\u03D7\u03D9\x05\x12\n\x02\u03D8\u03D7\x03\x02" +
    "\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA" +
    "\u03DD\x05\x94K\x02\u03DB\u03DC\x07\x1A\x02\x02\u03DC\u03DE\x05\xECw\x02" +
    "\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE\u03DF\x03" +
    "\x02\x02\x02\u03DF\u03E0\x05\x9AN\x02\u03E0\x93\x03\x02\x02\x02\u03E1" +
    "\u03E3\x07P\x02\x02\u03E2\u03E4\x05\x96L\x02\u03E3\u03E2\x03\x02\x02\x02" +
    "\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x07" +
    "Q\x02\x02\u03E6\x95\x03\x02\x02\x02\u03E7\u03EC\x05\x98M\x02\u03E8\u03E9" +
    "\x07W\x02\x02\u03E9\u03EB\x05\x98M\x02\u03EA\u03E8\x03\x02\x02\x02\u03EB" +
    "\u03EE\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02" +
    "\x02\x02\u03ED\x97\x03\x02\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF\u03F0" +
    "\x05\xEEx\x02\u03F0\u03F1\x05\xA2R\x02\u03F1\x99\x03\x02\x02\x02\u03F2" +
    "\u03F6\x07R\x02\x02\u03F3\u03F5\x05&\x14\x02\u03F4\u03F3\x03\x02\x02\x02" +
    "\u03F5\u03F8\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F7\x03" +
    "\x02\x02\x02\u03F7\u03F9\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F9" +
    "\u03FA\x07S\x02\x02\u03FA\x9B\x03\x02\x02\x02\u03FB\u03FF\x07R\x02\x02" +
    "\u03FC\u03FE\x05\x9EP\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03" +
    "\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
    "\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0403\x07S\x02" +
    "\x02\u0403\x9D\x03\x02\x02\x02\u0404\u0405\x05\xA0Q\x02\u0405\u0406\x07" +
    "V\x02\x02\u0406\u040A\x03\x02\x02\x02\u0407\u040A\x05\xA6T\x02\u0408\u040A" +
    "\x05\xA4S\x02\u0409\u0404\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02" +
    "\u0409\u0408\x03\x02\x02\x02\u040A\x9F\x03\x02\x02\x02\u040B\u040D\x05" +
    "\x0E\b\x02\u040C\u040B\x03\x02\x02\x02\u040D\u0410\x03\x02\x02\x02\u040E" +
    "\u040C\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0419\x03\x02" +
    "\x02\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0412\x05\xEEx\x02\u0412\u0413" +
    "\x05H%\x02\u0413\u041A\x03\x02\x02\x02\u0414\u0415\x07?\x02\x02\u0415" +
    "\u0416\x05\xA2R\x02\u0416\u0417\x07Y\x02\x02\u0417\u0418\x05\xC4c\x02" +
    "\u0418\u041A\x03\x02\x02\x02\u0419\u0411\x03\x02\x02\x02\u0419\u0414\x03" +
    "\x02\x02\x02\u041A\xA1\x03\x02\x02\x02\u041B\u041C\t\x06\x02\x02\u041C" +
    "\xA3\x03\x02\x02\x02\u041D\u041F\x05\f\x07\x02\u041E\u041D\x03\x02\x02" +
    "\x02\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421" +
    "\x03\x02\x02\x02\u0421\u0426\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02" +
    "\u0423\u0427\x05\x10\t\x02\u0424\u0427\x05 \x11\x02\u0425\u0427\x05\x92" +
    "J\x02\u0426\u0423\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426\u0425" +
    "\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u042A\x07V\x02\x02" +
    "\u0429\u0420\x03\x02\x02\x02\u0429\u0428\x03\x02\x02\x02\u042A\xA5\x03" +
    "\x02\x02\x02\u042B\u049D\x05\x9CO\x02\u042C\u042D\x07\x04\x02\x02\u042D" +
    "\u0430\x05\xC4c\x02\u042E\u042F\x07_\x02\x02\u042F\u0431\x05\xC4c\x02" +
    "\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431\u0432\x03" +
    "\x02\x02\x02\u0432\u0433\x07V\x02\x02\u0433\u049D\x03\x02\x02\x02\u0434" +
    "\u0435\x07\x18\x02\x02\u0435\u0436\x05\xBE`\x02\u0436\u0439\x05\xA6T\x02" +
    "\u0437\u0438\x07\x11\x02\x02\u0438\u043A\x05\xA6T\x02\u0439\u0437\x03" +
    "\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\u049D\x03\x02\x02\x02\u043B" +
    "\u043C\x07\x17\x02\x02\u043C\u043D\x07P\x02\x02\u043D\u043E\x05\xB8]\x02" +
    "\u043E\u043F\x07Q\x02\x02\u043F\u0440\x05\xA6T\x02\u0440\u049D\x03\x02" +
    "\x02\x02\u0441\u0442\x074\x02\x02\u0442\u0443\x05\xBE`\x02\u0443\u0444" +
    "\x05\xA6T\x02\u0444\u049D\x03\x02\x02\x02\u0445\u0446\x07\x0F\x02\x02" +
    "\u0446\u0447\x05\xA6T\x02\u0447\u0448\x074\x02\x02\u0448\u0449\x05\xBE" +
    "`\x02\u0449\u044A\x07V\x02\x02\u044A\u049D\x03\x02\x02\x02\u044B\u044C" +
    "\x071\x02\x02\u044C\u0456\x05\x9CO\x02\u044D\u044F\x05\xA8U\x02\u044E" +
    "\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u044E\x03\x02" +
    "\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0453\x03\x02\x02\x02\u0452" +
    "\u0454\x05\xACW\x02\u0453\u0452\x03\x02\x02\x02\u0453\u0454\x03\x02\x02" +
    "\x02\u0454\u0457\x03\x02\x02\x02\u0455\u0457\x05\xACW\x02\u0456\u044E" +
    "\x03\x02\x02\x02\u0456\u0455\x03\x02\x02\x02\u0457\u049D\x03\x02\x02\x02" +
    "\u0458\u0459\x071\x02\x02\u0459\u045A\x05\xAEX\x02\u045A\u045E\x05\x9C" +
    "O\x02\u045B\u045D\x05\xA8U\x02\u045C\u045B\x03\x02\x02\x02\u045D\u0460" +
    "\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02" +
    "\u045F\u0462\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0461\u0463\x05" +
    "\xACW\x02\u0462\u0461\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463" +
    "\u049D\x03\x02\x02\x02\u0464\u0465\x07+\x02\x02\u0465\u0466\x05\xBE`\x02" +
    "\u0466\u046A\x07R\x02\x02\u0467\u0469\x05\xB4[\x02\u0468\u0467\x03\x02" +
    "\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046A" +
    "\u046B\x03\x02\x02\x02\u046B\u0470\x03\x02\x02\x02\u046C\u046A\x03\x02" +
    "\x02\x02\u046D\u046F\x05\xB6\\\x02\u046E\u046D\x03\x02\x02\x02\u046F\u0472" +
    "\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02" +
    "\u0471\u0473\x03\x02\x02\x02\u0472\u0470\x03\x02\x02\x02\u0473\u0474\x07" +
    "S\x02\x02\u0474\u049D\x03\x02\x02\x02\u0475\u0476\x07,\x02\x02\u0476\u0477" +
    "\x05\xBE`\x02\u0477\u0478\x05\x9CO\x02\u0478\u049D\x03\x02\x02\x02\u0479" +
    "\u047B\x07&\x02\x02\u047A\u047C\x05\xC4c\x02\u047B\u047A\x03\x02\x02\x02" +
    "\u047B\u047C\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u049D\x07" +
    "V\x02\x02\u047E\u047F\x07.\x02\x02\u047F\u0480\x05\xC4c\x02\u0480\u0481" +
    "\x07V\x02\x02\u0481\u049D\x03\x02\x02\x02\u0482\u0484\x07\x06\x02\x02" +
    "\u0483\u0485\x05\xA2R\x02\u0484\u0483\x03\x02\x02\x02\u0484\u0485\x03" +
    "\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486\u049D\x07V\x02\x02\u0487" +
    "\u0489\x07\r\x02\x02\u0488\u048A\x05\xA2R\x02\u0489\u0488\x03\x02\x02" +
    "\x02\u0489\u048A\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u049D" +
    "\x07V\x02\x02\u048C\u048D\x07@\x02\x02\u048D\u048E\x05\xC4c\x02\u048E" +
    "\u048F\x07V\x02\x02\u048F\u049D\x03\x02\x02\x02\u0490\u049D\x07V\x02\x02" +
    "\u0491\u0492\x05\xC4c\x02\u0492\u0493\x07V\x02\x02\u0493\u049D\x03\x02" +
    "\x02\x02\u0494\u0496\x05\xD0i\x02\u0495\u0497\x07V\x02\x02\u0496\u0495" +
    "\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u049D\x03\x02\x02\x02" +
    "\u0498\u0499\x05\xA2R\x02\u0499\u049A\x07_\x02\x02\u049A\u049B\x05\xA6" +
    "T\x02\u049B\u049D\x03\x02\x02\x02\u049C\u042B\x03\x02\x02\x02\u049C\u042C" +
    "\x03\x02\x02\x02\u049C\u0434\x03\x02\x02\x02\u049C\u043B\x03\x02\x02\x02" +
    "\u049C\u0441\x03\x02\x02\x02\u049C\u0445\x03\x02\x02\x02\u049C\u044B\x03" +
    "\x02\x02\x02\u049C\u0458\x03\x02\x02\x02\u049C\u0464\x03\x02\x02\x02\u049C" +
    "\u0475\x03\x02\x02\x02\u049C\u0479\x03\x02\x02\x02\u049C\u047E\x03\x02" +
    "\x02\x02\u049C\u0482\x03\x02\x02\x02\u049C\u0487\x03\x02\x02\x02\u049C" +
    "\u048C\x03\x02\x02\x02\u049C\u0490\x03\x02\x02\x02\u049C\u0491\x03\x02" +
    "\x02\x02\u049C\u0494\x03\x02\x02\x02\u049C\u0498\x03\x02\x02\x02\u049D" +
    "\xA7\x03\x02\x02\x02\u049E\u049F\x07\t\x02\x02\u049F\u04A3\x07P\x02\x02" +
    "\u04A0\u04A2\x05\x0E\b\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\u04A5\x03" +
    "\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4" +
    "\u04A6\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A6\u04A7\x05\xAA" +
    "V\x02\u04A7\u04A8\x05\xA2R\x02\u04A8\u04A9\x07Q\x02\x02\u04A9\u04AA\x05" +
    "\x9CO\x02\u04AA\xA9\x03\x02\x02\x02\u04AB\u04B0\x05f4\x02\u04AC\u04AD" +
    "\x07m\x02\x02\u04AD\u04AF\x05f4\x02\u04AE\u04AC\x03\x02\x02\x02\u04AF" +
    "\u04B2\x03\x02\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B0\u04B1\x03\x02" +
    "\x02\x02\u04B1\xAB\x03\x02\x02\x02\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B4" +
    "\x07\x15\x02\x02\u04B4\u04B5\x05\x9CO\x02\u04B5\xAD\x03\x02\x02\x02\u04B6" +
    "\u04B7\x07P\x02\x02\u04B7\u04B9\x05\xB0Y\x02\u04B8\u04BA\x07V\x02\x02" +
    "\u04B9\u04B8\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BB\x03" +
    "\x02\x02\x02\u04BB\u04BC\x07Q\x02\x02\u04BC\xAF\x03\x02\x02\x02\u04BD" +
    "\u04C2\x05\xB2Z\x02\u04BE\u04BF\x07V\x02\x02\u04BF\u04C1\x05\xB2Z\x02" +
    "\u04C0\u04BE\x03\x02\x02\x02\u04C1\u04C4\x03\x02\x02\x02\u04C2\u04C0\x03" +
    "\x02\x02\x02\u04C2\u04C3\x03\x02\x02\x02\u04C3\xB1\x03\x02\x02\x02\u04C4" +
    "\u04C2\x03\x02\x02\x02\u04C5\u04C7\x05\x0E\b\x02\u04C6\u04C5\x03\x02\x02" +
    "\x02\u04C7\u04CA\x03\x02\x02\x02\u04C8\u04C6\x03\x02\x02\x02\u04C8\u04C9" +
    "\x03\x02\x02\x02\u04C9\u04D0\x03\x02\x02\x02\u04CA\u04C8\x03\x02\x02\x02" +
    "\u04CB\u04CC\x05R*\x02\u04CC\u04CD\x05L\'\x02\u04CD\u04D1\x03\x02\x02" +
    "\x02\u04CE\u04CF\x07?\x02\x02\u04CF\u04D1\x05\xA2R\x02\u04D0\u04CB\x03" +
    "\x02\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2" +
    "\u04D3\x07Y\x02\x02\u04D3\u04D4\x05\xC4c\x02\u04D4\u04D7\x03\x02\x02\x02" +
    "\u04D5\u04D7\x05\xA2R\x02\u04D6\u04C8\x03\x02\x02\x02\u04D6\u04D5\x03" +
    "\x02\x02\x02\u04D7\xB3\x03\x02\x02\x02\u04D8\u04DA\x05\xB6\\\x02\u04D9" +
    "\u04D8\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04D9\x03\x02" +
    "\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x03\x02\x02\x02\u04DD" +
    "\u04DF\x05\x9EP\x02\u04DE\u04DD\x03\x02\x02\x02\u04DF\u04E0\x03\x02\x02" +
    "\x02\u04E0\u04DE\x03\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\xB5" +
    "\x03\x02\x02\x02\u04E2\u04E8\x07\b\x02\x02\u04E3\u04E9\x05\xC4c\x02\u04E4" +
    "\u04E9\x07\x82\x02\x02\u04E5\u04E6\x05\xEEx\x02\u04E6\u04E7\x05\xA2R\x02" +
    "\u04E7\u04E9\x03\x02\x02\x02\u04E8\u04E3\x03\x02\x02\x02\u04E8\u04E4\x03" +
    "\x02\x02\x02\u04E8\u04E5\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA" +
    "\u04EE\x07_\x02\x02\u04EB\u04EC\x07\x0E\x02\x02\u04EC\u04EE\x07_\x02\x02" +
    "\u04ED\u04E2\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02\u04EE\xB7\x03" +
    "\x02\x02\x02\u04EF\u04FC\x05\xBC_\x02\u04F0\u04F2\x05\xBA^\x02\u04F1\u04F0" +
    "\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02" +
    "\u04F3\u04F5\x07V\x02\x02\u04F4\u04F6\x05\xC4c\x02\u04F5\u04F4\x03\x02" +
    "\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7" +
    "\u04F9\x07V\x02\x02\u04F8\u04FA\x05\xC0a\x02\u04F9\u04F8\x03\x02\x02\x02" +
    "\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FC\x03\x02\x02\x02\u04FB\u04EF\x03" +
    "\x02\x02\x02\u04FB\u04F1\x03\x02\x02\x02\u04FC\xB9\x03\x02\x02\x02\u04FD" +
    "\u0500\x05\xA0Q\x02\u04FE\u0500\x05\xC0a\x02\u04FF\u04FD\x03\x02\x02\x02" +
    "\u04FF\u04FE\x03\x02\x02\x02\u0500\xBB\x03\x02\x02\x02\u0501\u0503\x05" +
    "\x0E\b\x02\u0502\u0501\x03\x02\x02\x02\u0503\u0506\x03\x02\x02\x02\u0504" +
    "\u0502\x03\x02\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0509\x03\x02" +
    "\x02\x02\u0506\u0504\x03\x02\x02\x02\u0507\u050A\x05\xEEx\x02\u0508\u050A" +
    "\x07?\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u0508\x03\x02\x02\x02" +
    "\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x05L\'\x02\u050C\u050D\x07_\x02" +
    "\x02\u050D\u050E\x05\xC4c\x02\u050E\xBD\x03\x02\x02\x02\u050F\u0510\x07" +
    "P\x02\x02\u0510\u0511\x05\xC4c\x02\u0511\u0512\x07Q\x02\x02\u0512\xBF" +
    "\x03\x02\x02\x02\u0513\u0518\x05\xC4c\x02\u0514\u0515\x07W\x02\x02\u0515" +
    "\u0517\x05\xC4c\x02\u0516\u0514\x03\x02\x02\x02\u0517\u051A\x03\x02\x02" +
    "\x02\u0518\u0516\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\xC1" +
    "\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B\u051C\x05\xA2R\x02" +
    "\u051C\u051E\x07P\x02\x02\u051D\u051F\x05\xC0a\x02\u051E\u051D\x03\x02" +
    "\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520" +
    "\u0521\x07Q\x02\x02\u0521\u052F\x03\x02\x02\x02\u0522\u0523\x07-\x02\x02" +
    "\u0523\u0525\x07P\x02\x02\u0524\u0526\x05\xC0a\x02\u0525\u0524\x03\x02" +
    "\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527" +
    "\u052F\x07Q\x02\x02\u0528\u0529\x07*\x02\x02\u0529\u052B\x07P\x02\x02" +
    "\u052A\u052C\x05\xC0a\x02\u052B\u052A\x03\x02\x02\x02\u052B\u052C\x03" +
    "\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052F\x07Q\x02\x02\u052E" +
    "\u051B\x03\x02\x02\x02\u052E\u0522\x03\x02\x02\x02\u052E\u0528\x03\x02" +
    "\x02\x02\u052F\xC3\x03\x02\x02\x02\u0530\u0531\bc\x01\x02\u0531\u055E" +
    "\x05\xCEh\x02\u0532\u055E\x05\xC2b\x02\u0533\u0534\x07!\x02\x02\u0534" +
    "\u055E\x05\xDAn\x02\u0535\u0539\x07P\x02\x02\u0536\u0538\x05p9\x02\u0537" +
    "\u0536\x03\x02\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u0537\x03\x02" +
    "\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053C\x03\x02\x02\x02\u053B" +
    "\u0539\x03\x02\x02\x02\u053C\u0541\x05\xEEx\x02\u053D\u053E\x07l\x02\x02" +
    "\u053E\u0540\x05\xEEx\x02\u053F\u053D\x03\x02\x02\x02\u0540\u0543\x03" +
    "\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542" +
    "\u0544\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02\u0544\u0545\x07Q\x02" +
    "\x02\u0545\u0546\x05\xC4c\x18\u0546\u055E\x03\x02\x02\x02\u0547\u0548" +
    "\t\x07\x02\x02\u0548\u055E\x05\xC4c\x16\u0549\u054A\t\b\x02\x02\u054A" +
    "\u055E\x05\xC4c\x15\u054B\u055E\x05\xC8e\x02\u054C\u055E\x05\xD0i\x02" +
    "\u054D\u054E\x05\xEEx\x02\u054E\u0554\x07|\x02\x02\u054F\u0551\x05\xF2" +
    "z\x02\u0550\u054F\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0552" +
    "\x03\x02\x02\x02\u0552\u0555\x05\xA2R\x02\u0553\u0555\x07!\x02\x02\u0554" +
    "\u0550\x03\x02\x02\x02\u0554\u0553\x03\x02\x02\x02\u0555\u055E\x03\x02" +
    "\x02\x02\u0556\u0557\x05\xD8m\x02\u0557\u0559\x07|\x02\x02\u0558\u055A" +
    "\x05\xF2z\x02\u0559\u0558\x03\x02\x02\x02\u0559\u055A\x03\x02\x02\x02" +
    "\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x07!\x02\x02\u055C\u055E\x03" +
    "\x02\x02\x02\u055D\u0530\x03\x02\x02\x02\u055D\u0532\x03\x02\x02\x02\u055D" +
    "\u0533\x03\x02\x02\x02\u055D\u0535\x03\x02\x02\x02\u055D\u0547\x03\x02" +
    "\x02\x02\u055D\u0549\x03\x02\x02\x02\u055D\u054B\x03\x02\x02\x02\u055D" +
    "\u054C\x03\x02\x02\x02\u055D\u054D\x03\x02\x02\x02\u055D\u0556\x03\x02" +
    "\x02\x02\u055E\u05B2\x03\x02\x02\x02\u055F\u0560\f\x14\x02\x02\u0560\u0561" +
    "\t\t\x02\x02\u0561\u05B1\x05\xC4c\x15\u0562\u0563\f\x13\x02\x02\u0563" +
    "\u0564\t\n\x02\x02\u0564\u05B1\x05\xC4c\x14\u0565\u056D\f\x12\x02\x02" +
    "\u0566\u0567\x07[\x02\x02\u0567\u056E\x07[\x02\x02\u0568\u0569\x07Z\x02" +
    "\x02\u0569\u056A\x07Z\x02\x02\u056A\u056E\x07Z\x02\x02\u056B\u056C\x07" +
    "Z\x02\x02\u056C\u056E\x07Z\x02\x02\u056D\u0566\x03\x02\x02\x02\u056D\u0568" +
    "\x03\x02\x02\x02\u056D\u056B\x03\x02\x02\x02\u056E\u056F\x03\x02\x02\x02" +
    "\u056F\u05B1\x05\xC4c\x13\u0570\u0571\f\x11\x02\x02\u0571\u0572\t\v\x02" +
    "\x02\u0572\u05B1\x05\xC4c\x12\u0573\u0574\f\x0F\x02\x02\u0574\u0575\t" +
    "\f\x02\x02\u0575\u05B1\x05\xC4c\x10\u0576\u0577\f\x0E\x02\x02\u0577\u0578" +
    "\x07l\x02\x02\u0578\u05B1\x05\xC4c\x0F\u0579\u057A\f\r\x02\x02\u057A\u057B" +
    "\x07n\x02\x02\u057B\u05B1\x05\xC4c\x0E\u057C\u057D\f\f\x02\x02\u057D\u057E" +
    "\x07m\x02\x02\u057E\u05B1\x05\xC4c\r\u057F\u0580\f\v\x02\x02\u0580\u0581" +
    "\x07d\x02\x02\u0581\u05B1\x05\xC4c\f\u0582\u0583\f\n\x02\x02\u0583\u0584" +
    "\x07e\x02\x02\u0584\u05B1\x05\xC4c\v\u0585\u0586\f\t\x02\x02\u0586\u0587" +
    "\x07^\x02\x02\u0587\u0588\x05\xC4c\x02\u0588\u0589\x07_\x02\x02\u0589" +
    "\u058A\x05\xC4c\t\u058A\u05B1\x03\x02\x02\x02\u058B\u058C\f\b\x02\x02" +
    "\u058C\u058D\t\r\x02\x02\u058D\u05B1\x05\xC4c\b\u058E\u058F\f\x1C\x02" +
    "\x02\u058F\u059B\x07X\x02\x02\u0590\u059C\x05\xA2R\x02\u0591\u059C\x05" +
    "\xC2b\x02\u0592\u059C\x07-\x02\x02\u0593\u0595\x07!\x02\x02\u0594\u0596" +
    "\x05\xEAv\x02\u0595\u0594\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02" +
    "\u0596\u0597\x03\x02\x02\x02\u0597\u059C\x05\xDEp\x02\u0598\u0599\x07" +
    "*\x02\x02\u0599\u059C\x05\xF4{\x02\u059A\u059C\x05\xE4s\x02\u059B\u0590" +
    "\x03\x02\x02\x02\u059B\u0591\x03\x02\x02\x02\u059B\u0592\x03\x02\x02\x02" +
    "\u059B\u0593\x03\x02\x02\x02\u059B\u0598\x03\x02\x02\x02\u059B\u059A\x03" +
    "\x02\x02\x02\u059C\u05B1\x03\x02\x02\x02\u059D\u059E\f\x1B\x02\x02\u059E" +
    "\u059F\x07T\x02\x02\u059F\u05A0\x05\xC4c\x02\u05A0\u05A1\x07U\x02\x02" +
    "\u05A1\u05B1\x03\x02\x02\x02\u05A2\u05A3\f\x17\x02\x02\u05A3\u05B1\t\x0E" +
    "\x02\x02\u05A4\u05A5\f\x10\x02\x02\u05A5\u05A8\x07\x1C\x02\x02\u05A6\u05A9" +
    "\x05\xEEx\x02\u05A7\u05A9\x05\xC6d\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8" +
    "\u05A7\x03\x02\x02\x02\u05A9\u05B1\x03\x02\x02\x02\u05AA\u05AB\f\x05\x02" +
    "\x02\u05AB\u05AD\x07|\x02\x02\u05AC\u05AE\x05\xF2z\x02\u05AD\u05AC\x03" +
    "\x02\x02\x02\u05AD\u05AE\x03\x02\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF" +
    "\u05B1\x05\xA2R\x02\u05B0\u055F\x03\x02\x02\x02\u05B0\u0562\x03\x02\x02" +
    "\x02\u05B0\u0565\x03\x02\x02\x02\u05B0\u0570\x03\x02\x02\x02\u05B0\u0573" +
    "\x03\x02\x02\x02\u05B0\u0576\x03\x02\x02\x02\u05B0\u0579\x03\x02\x02\x02" +
    "\u05B0\u057C\x03\x02\x02\x02\u05B0\u057F\x03\x02\x02\x02\u05B0\u0582\x03" +
    "\x02\x02\x02\u05B0\u0585\x03\x02\x02\x02\u05B0\u058B\x03\x02\x02\x02\u05B0" +
    "\u058E\x03\x02\x02\x02\u05B0\u059D\x03\x02\x02\x02\u05B0\u05A2\x03\x02" +
    "\x02\x02\u05B0\u05A4\x03\x02\x02\x02\u05B0\u05AA\x03\x02\x02\x02\u05B1" +
    "\u05B4\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02" +
    "\x02\x02\u05B3\xC5\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B7" +
    "\x05\x0E\b\x02\u05B6\u05B5\x03\x02\x02\x02\u05B7\u05BA\x03\x02\x02\x02" +
    "\u05B8\u05B6\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BB\x03" +
    "\x02\x02\x02\u05BA\u05B8\x03\x02\x02\x02\u05BB\u05BF\x05\xEEx\x02\u05BC" +
    "\u05BE\x05p9\x02\u05BD\u05BC\x03\x02\x02\x02\u05BE\u05C1\x03\x02\x02\x02" +
    "\u05BF\u05BD\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C2\x03" +
    "\x02\x02\x02\u05C1\u05BF\x03\x02\x02\x02\u05C2\u05C3\x05\xA2R\x02\u05C3" +
    "\xC7\x03\x02\x02\x02\u05C4\u05C5\x05\xCAf\x02\u05C5\u05C6\x07{\x02\x02" +
    "\u05C6\u05C7\x05\xCCg\x02\u05C7\xC9\x03\x02\x02\x02\u05C8\u05DF\x05\xA2" +
    "R\x02\u05C9\u05CB\x07P\x02\x02\u05CA\u05CC\x05\\/\x02\u05CB\u05CA\x03" +
    "\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD" +
    "\u05DF\x07Q\x02\x02\u05CE\u05CF\x07P\x02\x02\u05CF\u05D4\x05\xA2R\x02" +
    "\u05D0\u05D1\x07W\x02\x02\u05D1\u05D3\x05\xA2R\x02\u05D2\u05D0\x03\x02" +
    "\x02\x02\u05D3\u05D6\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D4" +
    "\u05D5\x03\x02\x02\x02\u05D5\u05D7\x03\x02\x02\x02\u05D6\u05D4\x03\x02" +
    "\x02\x02\u05D7\u05D8\x07Q\x02\x02\u05D8\u05DF\x03\x02\x02\x02\u05D9\u05DB" +
    "\x07P\x02\x02\u05DA\u05DC\x05b2\x02\u05DB\u05DA\x03\x02\x02\x02\u05DB" +
    "\u05DC\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\u05DF\x07Q\x02" +
    "\x02\u05DE\u05C8\x03\x02\x02\x02\u05DE\u05C9\x03\x02\x02\x02\u05DE\u05CE" +
    "\x03\x02\x02\x02\u05DE\u05D9\x03\x02\x02\x02\u05DF\xCB\x03\x02\x02\x02" +
    "\u05E0\u05E3\x05\xC4c\x02\u05E1\u05E3\x05\x9CO\x02\u05E2\u05E0\x03\x02" +
    "\x02\x02\u05E2\u05E1\x03\x02\x02\x02\u05E3\xCD\x03\x02\x02\x02\u05E4\u05E5" +
    "\x07P\x02\x02\u05E5\u05E6\x05\xC4c\x02\u05E6\u05E7\x07Q\x02\x02\u05E7" +
    "\u05F7\x03\x02\x02\x02\u05E8\u05F7\x07-\x02\x02\u05E9\u05F7\x07*\x02\x02" +
    "\u05EA\u05F7\x05h5\x02\u05EB\u05F7\x05\xA2R\x02\u05EC\u05ED\x05.\x18\x02" +
    "\u05ED\u05EE\x07X\x02\x02\u05EE\u05EF\x07\v\x02\x02\u05EF\u05F7\x03\x02" +
    "\x02\x02\u05F0\u05F4\x05\xEAv\x02\u05F1\u05F5\x05\xF6|\x02\u05F2\u05F3" +
    "\x07-\x02\x02\u05F3\u05F5\x05\xF8}\x02\u05F4\u05F1\x03\x02\x02\x02\u05F4" +
    "\u05F2\x03\x02\x02\x02\u05F5\u05F7\x03\x02\x02\x02\u05F6\u05E4\x03\x02" +
    "\x02\x02\u05F6\u05E8\x03\x02\x02\x02\u05F6\u05E9\x03\x02\x02\x02\u05F6" +
    "\u05EA\x03\x02\x02\x02\u05F6\u05EB\x03\x02\x02\x02\u05F6\u05EC\x03\x02" +
    "\x02\x02\u05F6\u05F0\x03\x02\x02\x02\u05F7\xCF\x03\x02\x02\x02\u05F8\u05F9" +
    "\x07+\x02\x02\u05F9\u05FA\x05\xBE`\x02\u05FA\u05FE\x07R\x02\x02\u05FB" +
    "\u05FD\x05\xD2j\x02\u05FC\u05FB\x03\x02\x02\x02\u05FD\u0600\x03\x02\x02" +
    "\x02\u05FE\u05FC\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02\x02\u05FF\u0601" +
    "\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02\u0601\u0602\x07S\x02\x02" +
    "\u0602\xD1\x03\x02\x02\x02\u0603\u0607\x07\b\x02\x02\u0604\u0608\x05\xC0" +
    "a\x02\u0605\u0608\x07O\x02\x02\u0606\u0608\x05\xD4k\x02\u0607\u0604\x03" +
    "\x02\x02\x02\u0607\u0605\x03\x02\x02\x02\u0607\u0606\x03\x02\x02\x02\u0608" +
    "\u0609\x03\x02\x02\x02\u0609\u060A\t\x0F\x02\x02\u060A\u060F\x05\xD6l" +
    "\x02\u060B\u060C\x07\x0E\x02\x02\u060C\u060D\t\x0F\x02\x02\u060D\u060F" +
    "\x05\xD6l\x02\u060E\u0603\x03\x02\x02\x02\u060E\u060B\x03\x02\x02\x02" +
    "\u060F\xD3\x03\x02\x02\x02\u0610\u0611\bk\x01\x02\u0611\u0612\x07P\x02" +
    "\x02\u0612\u0613\x05\xD4k\x02\u0613\u0614\x07Q\x02\x02\u0614\u062B\x03" +
    "\x02\x02\x02\u0615\u0617\x05\x0E\b\x02\u0616\u0615\x03\x02\x02\x02\u0617" +
    "\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0618\u0619\x03\x02" +
    "\x02\x02\u0619\u061B\x03\x02\x02\x02\u061A\u0618\x03\x02\x02\x02\u061B" +
    "\u061F\x05\xEEx\x02\u061C\u061E\x05p9\x02\u061D\u061C\x03\x02\x02\x02" +
    "\u061E\u0621\x03\x02\x02\x02\u061F\u061D\x03\x02\x02\x02\u061F\u0620\x03" +
    "\x02\x02\x02\u0620\u0622\x03\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0622" +
    "\u0627\x05\xA2R\x02\u0623\u0624\x07d\x02\x02\u0624\u0626\x05\xC4c\x02" +
    "\u0625\u0623\x03\x02\x02\x02\u0626\u0629\x03\x02\x02\x02\u0627\u0625\x03" +
    "\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062B\x03\x02\x02\x02\u0629" +
    "\u0627\x03\x02\x02\x02\u062A\u0610\x03\x02\x02\x02\u062A\u0618\x03\x02" +
    "\x02\x02\u062B\u0631\x03\x02\x02\x02\u062C\u062D\f\x03\x02\x02\u062D\u062E" +
    "\x07d\x02\x02\u062E\u0630\x05\xC4c\x02\u062F\u062C\x03\x02\x02\x02\u0630" +
    "\u0633\x03\x02\x02\x02\u0631\u062F\x03\x02\x02\x02\u0631\u0632\x03\x02" +
    "\x02\x02\u0632\xD5\x03\x02\x02\x02\u0633\u0631\x03\x02\x02\x02\u0634\u063C" +
    "\x05\x9CO\x02\u0635\u0637\x05\x9EP\x02\u0636\u0635\x03\x02\x02\x02\u0637" +
    "\u063A\x03\x02\x02\x02\u0638\u0636\x03\x02\x02\x02\u0638\u0639\x03\x02" +
    "\x02\x02\u0639\u063C\x03\x02\x02\x02\u063A\u0638\x03\x02\x02\x02\u063B" +
    "\u0634\x03\x02\x02\x02\u063B\u0638\x03\x02\x02\x02\u063C\xD7\x03\x02\x02" +
    "\x02\u063D\u063E\x05R*\x02\u063E\u063F\x07X\x02\x02\u063F\u0641\x03\x02" +
    "\x02\x02\u0640\u063D\x03\x02\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641" +
    "\u0645\x03\x02\x02\x02\u0642\u0644\x05p9\x02\u0643\u0642\x03\x02\x02\x02" +
    "\u0644\u0647\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0646\x03" +
    "\x02\x02\x02\u0646\u0648\x03\x02\x02\x02\u0647\u0645\x03\x02\x02\x02\u0648" +
    "\u064A\x05\xA2R\x02\u0649\u064B\x05\xF2z\x02\u064A\u0649\x03\x02\x02\x02" +
    "\u064A\u064B\x03\x02\x02\x02\u064B\xD9\x03\x02\x02\x02\u064C\u064D\x05" +
    "\xEAv\x02\u064D\u064E\x05\xDCo\x02\u064E\u064F\x05\xE2r\x02\u064F\u0656" +
    "\x03\x02\x02\x02\u0650\u0653\x05\xDCo\x02\u0651\u0654\x05\xE0q\x02\u0652" +
    "\u0654\x05\xE2r\x02\u0653\u0651\x03\x02\x02\x02\u0653\u0652\x03\x02\x02" +
    "\x02\u0654\u0656\x03\x02\x02\x02\u0655\u064C\x03\x02\x02\x02\u0655\u0650" +
    "\x03\x02\x02\x02\u0656\xDB\x03\x02\x02\x02\u0657\u0659\x05\xA2R\x02\u0658" +
    "\u065A\x05\xE6t\x02\u0659\u0658\x03\x02\x02";
JavaParser._serializedATNSegment3 = "\x02\u0659\u065A\x03\x02\x02\x02\u065A\u0662\x03\x02\x02\x02\u065B\u065C" +
    "\x07X\x02\x02\u065C\u065E\x05\xA2R\x02\u065D\u065F\x05\xE6t\x02\u065E" +
    "\u065D\x03\x02\x02\x02\u065E\u065F\x03\x02\x02\x02\u065F\u0661\x03\x02" +
    "\x02\x02\u0660\u065B\x03\x02\x02\x02\u0661\u0664\x03\x02\x02\x02\u0662" +
    "\u0660\x03\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0667\x03\x02" +
    "\x02\x02\u0664\u0662\x03\x02\x02\x02\u0665\u0667\x05\xF0y\x02\u0666\u0657" +
    "\x03\x02\x02\x02\u0666\u0665\x03\x02\x02\x02\u0667\xDD\x03\x02\x02\x02" +
    "\u0668\u066A\x05\xA2R\x02\u0669\u066B\x05\xE8u\x02\u066A\u0669\x03\x02" +
    "\x02\x02\u066A\u066B\x03\x02\x02\x02\u066B\u066C\x03\x02\x02\x02\u066C" +
    "\u066D\x05\xE2r\x02\u066D\xDF\x03\x02\x02\x02\u066E\u068A\x07T\x02\x02" +
    "\u066F\u0674\x07U\x02\x02\u0670\u0671\x07T\x02\x02\u0671\u0673\x07U\x02" +
    "\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0676\x03\x02\x02\x02\u0674\u0672" +
    "\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u0677\x03\x02\x02\x02" +
    "\u0676\u0674\x03\x02\x02\x02\u0677\u068B\x05P)\x02\u0678\u0679\x05\xC4" +
    "c\x02\u0679\u0680\x07U\x02\x02\u067A\u067B\x07T\x02\x02\u067B\u067C\x05" +
    "\xC4c\x02\u067C\u067D\x07U\x02\x02\u067D\u067F\x03\x02\x02\x02\u067E\u067A" +
    "\x03\x02\x02\x02\u067F\u0682\x03\x02\x02\x02\u0680\u067E\x03\x02\x02\x02" +
    "\u0680\u0681\x03\x02\x02\x02\u0681\u0687\x03\x02\x02\x02\u0682\u0680\x03" +
    "\x02\x02\x02\u0683\u0684\x07T\x02\x02\u0684\u0686\x07U\x02\x02\u0685\u0683" +
    "\x03\x02\x02\x02\u0686\u0689\x03\x02\x02\x02\u0687\u0685\x03\x02\x02\x02" +
    "\u0687\u0688\x03\x02\x02\x02\u0688\u068B\x03\x02\x02\x02\u0689\u0687\x03" +
    "\x02\x02\x02\u068A\u066F\x03\x02\x02\x02\u068A\u0678\x03\x02\x02\x02\u068B" +
    "\xE1\x03\x02\x02\x02\u068C\u068E\x05\xF8}\x02\u068D\u068F\x05\"\x12\x02" +
    "\u068E\u068D\x03\x02\x02\x02\u068E\u068F\x03\x02\x02\x02\u068F\xE3\x03" +
    "\x02\x02\x02\u0690\u0691\x05\xEAv\x02\u0691\u0692\x05\xF6|\x02\u0692\xE5" +
    "\x03\x02\x02\x02\u0693\u0694\x07[\x02\x02\u0694\u0697\x07Z\x02\x02\u0695" +
    "\u0697\x05\xF2z\x02\u0696\u0693\x03\x02\x02\x02\u0696\u0695\x03\x02\x02" +
    "\x02\u0697\xE7\x03\x02\x02\x02\u0698\u0699\x07[\x02\x02\u0699\u069C\x07" +
    "Z\x02\x02\u069A\u069C\x05\xEAv\x02\u069B\u0698\x03\x02\x02\x02\u069B\u069A" +
    "\x03\x02\x02\x02\u069C\xE9\x03\x02\x02\x02\u069D\u069E\x07[\x02\x02\u069E" +
    "\u069F\x05\xECw\x02\u069F\u06A0\x07Z\x02\x02\u06A0\xEB\x03\x02\x02\x02" +
    "\u06A1\u06A6\x05\xEEx\x02\u06A2\u06A3\x07W\x02\x02\u06A3\u06A5\x05\xEE" +
    "x\x02\u06A4\u06A2\x03\x02\x02\x02\u06A5\u06A8\x03\x02\x02\x02\u06A6\u06A4" +
    "\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7\xED\x03\x02\x02\x02" +
    "\u06A8\u06A6\x03\x02\x02\x02\u06A9\u06AB\x05p9\x02\u06AA\u06A9\x03\x02" +
    "\x02\x02\u06AB\u06AE\x03\x02\x02\x02\u06AC\u06AA\x03\x02\x02\x02\u06AC" +
    "\u06AD\x03\x02\x02\x02\u06AD\u06B1\x03\x02\x02\x02\u06AE\u06AC\x03\x02" +
    "\x02\x02\u06AF\u06B2\x05R*\x02\u06B0\u06B2\x05\xF0y\x02\u06B1\u06AF\x03" +
    "\x02\x02\x02\u06B1\u06B0\x03\x02\x02\x02\u06B2\u06BD\x03\x02\x02\x02\u06B3" +
    "\u06B5\x05p9\x02\u06B4\u06B3\x03\x02\x02\x02\u06B5\u06B8\x03\x02\x02\x02" +
    "\u06B6\u06B4\x03\x02\x02\x02\u06B6\u06B7\x03\x02\x02\x02\u06B7\u06B9\x03" +
    "\x02\x02\x02\u06B8\u06B6\x03\x02\x02\x02\u06B9\u06BA\x07T\x02\x02\u06BA" +
    "\u06BC\x07U\x02\x02\u06BB\u06B6\x03\x02\x02\x02\u06BC\u06BF\x03\x02\x02" +
    "\x02\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\xEF" +
    "\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06C0\u06C1\t\x10\x02\x02" +
    "\u06C1\xF1\x03\x02\x02\x02\u06C2\u06C3\x07[\x02\x02\u06C3\u06C8\x05T+" +
    "\x02\u06C4\u06C5\x07W\x02\x02\u06C5\u06C7\x05T+\x02\u06C6\u06C4\x03\x02" +
    "\x02\x02\u06C7\u06CA\x03\x02\x02\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8" +
    "\u06C9\x03\x02\x02\x02\u06C9\u06CB\x03\x02\x02\x02\u06CA\u06C8\x03\x02" +
    "\x02\x02\u06CB\u06CC\x07Z\x02\x02\u06CC\xF3\x03\x02\x02\x02\u06CD\u06D7" +
    "\x05\xF8}\x02\u06CE\u06D0\x07X\x02\x02\u06CF\u06D1\x05\xF2z\x02\u06D0" +
    "\u06CF\x03\x02\x02\x02\u06D0\u06D1\x03\x02\x02\x02\u06D1\u06D2\x03\x02" +
    "\x02\x02\u06D2\u06D4\x05\xA2R\x02\u06D3\u06D5\x05\xF8}\x02\u06D4\u06D3" +
    "\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02\u06D5\u06D7\x03\x02\x02\x02" +
    "\u06D6\u06CD\x03\x02\x02\x02\u06D6\u06CE\x03\x02\x02\x02\u06D7\xF5\x03" +
    "\x02\x02\x02\u06D8\u06D9\x07*\x02\x02\u06D9\u06DE\x05\xF4{\x02\u06DA\u06DB" +
    "\x05\xA2R\x02\u06DB\u06DC\x05\xF8}\x02\u06DC\u06DE\x03\x02\x02\x02\u06DD" +
    "\u06D8\x03\x02\x02\x02\u06DD\u06DA\x03\x02\x02\x02\u06DE\xF7\x03\x02\x02" +
    "\x02\u06DF\u06E1\x07P\x02\x02\u06E0\u06E2\x05\xC0a\x02\u06E1\u06E0\x03" +
    "\x02\x02\x02\u06E1\u06E2\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3" +
    "\u06E4\x07Q\x02\x02\u06E4\xF9\x03\x02\x02\x02\xDE\xFB\u0100\u0106\u010C" +
    "\u0111\u011A\u011F\u0126\u012E\u0131\u0138\u0144\u0148\u014D\u0151\u0155" +
    "\u0159\u0163\u016B\u0173\u0177\u017E\u0185\u0189\u018C\u018F\u0198\u019E" +
    "\u01A3\u01A6\u01AC\u01B2\u01B6\u01BA\u01C2\u01CB\u01D2\u01D8\u01DC\u01E8" +
    "\u01F1\u01F6\u01FC\u0200\u020C\u0217\u021C\u0226\u022E\u0238\u0241\u024C" +
    "\u0251\u025A\u0264\u0269\u0272\u0278\u027F\u0284\u028C\u0290\u0292\u0298" +
    "\u029D\u02A1\u02A8\u02AE\u02B0\u02B7\u02BC\u02C1\u02C4\u02C6\u02D0\u02DA" +
    "\u02DF\u02E2\u02E7\u02F0\u02F7\u0302\u0308\u0313\u031D\u0328\u0331\u0336" +
    "\u0339\u0340\u034A\u0352\u0355\u0358\u0365\u036D\u0372\u037A\u037E\u0382" +
    "\u0386\u038A\u038C\u0390\u0396\u039E\u03A8\u03B1\u03BB\u03C3\u03D1\u03D8" +
    "\u03DD\u03E3\u03EC\u03F6\u03FF\u0409\u040E\u0419\u0420\u0426\u0429\u0430" +
    "\u0439\u0450\u0453\u0456\u045E\u0462\u046A\u0470\u047B\u0484\u0489\u0496" +
    "\u049C\u04A3\u04B0\u04B9\u04C2\u04C8\u04D0\u04D6\u04DB\u04E0\u04E8\u04ED" +
    "\u04F1\u04F5\u04F9\u04FB\u04FF\u0504\u0509\u0518\u051E\u0525\u052B\u052E" +
    "\u0539\u0541\u0550\u0554\u0559\u055D\u056D\u0595\u059B\u05A8\u05AD\u05B0" +
    "\u05B2\u05B8\u05BF\u05CB\u05D4\u05DB\u05DE\u05E2\u05F4\u05F6\u05FE\u0607" +
    "\u060E\u0618\u061F\u0627\u062A\u0631\u0638\u063B\u0640\u0645\u064A\u0653" +
    "\u0655\u0659\u065E\u0662\u0666\u066A\u0674\u0680\u0687\u068A\u068E\u0696" +
    "\u069B\u06A6\u06AC\u06B1\u06B6\u06BD\u06C8\u06D0\u06D4\u06D6\u06DD\u06E1";
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
    IMPLEMENTS() { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
    typeList(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeListContext);
        }
        else {
            return this.getRuleContext(i, TypeListContext);
        }
    }
    PERMITS() { return this.tryGetToken(JavaParser.PERMITS, 0); }
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
    IMPLEMENTS() { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
    typeList() {
        return this.tryGetRuleContext(0, TypeListContext);
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
    EXTENDS() { return this.tryGetToken(JavaParser.EXTENDS, 0); }
    typeList(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeListContext);
        }
        else {
            return this.getRuleContext(i, TypeListContext);
        }
    }
    PERMITS() { return this.tryGetToken(JavaParser.PERMITS, 0); }
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
    recordDeclaration() {
        return this.tryGetRuleContext(0, RecordDeclarationContext);
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
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
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
    IMPLEMENTS() { return this.tryGetToken(JavaParser.IMPLEMENTS, 0); }
    typeList() {
        return this.tryGetRuleContext(0, TypeListContext);
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
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    localTypeDeclaration() {
        return this.tryGetRuleContext(0, LocalTypeDeclarationContext);
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
    typeType() {
        return this.tryGetRuleContext(0, TypeTypeContext);
    }
    variableDeclarators() {
        return this.tryGetRuleContext(0, VariableDeclaratorsContext);
    }
    VAR() { return this.tryGetToken(JavaParser.VAR, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    ASSIGN() { return this.tryGetToken(JavaParser.ASSIGN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
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
