var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/loading/loading';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './style.css.shim';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from 'ionic-angular/components/list/list';
import * as import18 from 'ionic-angular/components/item/item';
import * as import19 from 'ionic-angular/components/list/list-header';
import * as import20 from '@angular/core/src/linker/query_list';
import * as import21 from 'ionic-angular/components/spinner/spinner';
import * as import22 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import23 from 'ionic-angular/components/button/button';
import * as import24 from 'ionic-angular/components/icon/icon';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/gestures/gesture-controller';
import * as import36 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import37 from 'ionic-angular/util/form';
import * as import38 from '../../node_modules/ionic-angular/components/spinner/spinner.ngfactory';
import * as import39 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import40 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import41 from 'ionic-angular/components/nav/nav';
import * as import42 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import43 from 'ionic-angular/navigation/nav-controller-base';
import * as import44 from '@angular/core/src/linker/component_factory_resolver';
import * as import45 from 'ionic-angular/transitions/transition-controller';
import * as import46 from 'ionic-angular/navigation/deep-linker';
var renderType_Page1_Host = null;
var _View_Page1_Host0 = (function (_super) {
    __extends(_View_Page1_Host0, _super);
    function _View_Page1_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page1_Host0, renderType_Page1_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page1_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Page10(this.viewUtils, this.injector(0), this._appEl_0);
        this._Page1_0_4 = new import3.Page1(this.parentInjector.get(import8.LoadingController), this.parentInjector.get(import9.NavController));
        this._appEl_0.initComponent(this._Page1_0_4, [], compView_0);
        compView_0.create(this._Page1_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Page1_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Page1) && (0 === requestNodeIndex))) {
            return this._Page1_0_4;
        }
        return notFoundResult;
    };
    return _View_Page1_Host0;
}(import1.AppView));
function viewFactory_Page1_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page1_Host === null)) {
        (renderType_Page1_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Page1_Host0(viewUtils, parentInjector, declarationEl);
}
export var Page1NgFactory = new import11.ComponentFactory('ng-component', viewFactory_Page1_Host0, import3.Page1);
var styles_Page1 = [import12.styles];
var renderType_Page1 = null;
var _View_Page10 = (function (_super) {
    __extends(_View_Page10, _super);
    function _View_Page10(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page10, renderType_Page1, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page10.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import28.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import9.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import15.ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Loading', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'outer-content');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import31.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import16.Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import17.List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_13 = this.renderer.createElement(this._el_11, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'item');
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import36.viewFactory_Item0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Item_13_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_13), this.renderer);
        this._ListHeader_13_5 = new import19.ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_13), null);
        this._query_Label_13_0 = new import20.QueryList();
        this._query_Button_13_1 = new import20.QueryList();
        this._query_Icon_13_2 = new import20.QueryList();
        this._appEl_13.initComponent(this._Item_13_4, [], compView_13);
        this._text_14 = this.renderer.createText(null, '\n      Spinner Loading Indicators\n    ', null);
        this._query_Label_13_0.reset([]);
        this._Item_13_4.contentLabel = this._query_Label_13_0.first;
        compView_13.create(this._Item_13_4, [
            [],
            [],
            [].concat([this._text_14]),
            [],
            []
        ], null);
        this._text_15 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_16 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_16, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_16, 'ion-item', '');
        this._appEl_16 = new import2.AppElement(16, 11, this, this._el_16);
        var compView_16 = import36.viewFactory_Item0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Item_16_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_16), this.renderer);
        this._ItemContent_16_5 = new import18.ItemContent();
        this._query_Label_16_0 = new import20.QueryList();
        this._query_Button_16_1 = new import20.QueryList();
        this._query_Icon_16_2 = new import20.QueryList();
        this._appEl_16.initComponent(this._Item_16_4, [], compView_16);
        this._text_17 = this.renderer.createText(null, '\n      ', null);
        this._el_18 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_18, 'item-left', '');
        this.renderer.setElementAttribute(this._el_18, 'name', 'ios');
        this._appEl_18 = new import2.AppElement(18, 16, this, this._el_18);
        var compView_18 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(18), this._appEl_18);
        this._Spinner_18_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_18), this.renderer);
        this._appEl_18.initComponent(this._Spinner_18_4, [], compView_18);
        compView_18.create(this._Spinner_18_4, [], null);
        this._text_19 = this.renderer.createText(null, '\n      Show iOS\n    ', null);
        this._query_Label_16_0.reset([]);
        this._Item_16_4.contentLabel = this._query_Label_16_0.first;
        compView_16.create(this._Item_16_4, [
            [].concat([this._el_18]),
            [],
            [].concat([
                this._text_17,
                this._text_19
            ]),
            [],
            []
        ], null);
        this._text_20 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_21 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_21, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_21, 'ion-item', '');
        this._appEl_21 = new import2.AppElement(21, 11, this, this._el_21);
        var compView_21 = import36.viewFactory_Item0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Item_21_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_21), this.renderer);
        this._ItemContent_21_5 = new import18.ItemContent();
        this._query_Label_21_0 = new import20.QueryList();
        this._query_Button_21_1 = new import20.QueryList();
        this._query_Icon_21_2 = new import20.QueryList();
        this._appEl_21.initComponent(this._Item_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n      ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_23, 'item-left', '');
        this.renderer.setElementAttribute(this._el_23, 'name', 'dots');
        this._appEl_23 = new import2.AppElement(23, 21, this, this._el_23);
        var compView_23 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(23), this._appEl_23);
        this._Spinner_23_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_23), this.renderer);
        this._appEl_23.initComponent(this._Spinner_23_4, [], compView_23);
        compView_23.create(this._Spinner_23_4, [], null);
        this._text_24 = this.renderer.createText(null, '\n      Show Dots\n    ', null);
        this._query_Label_21_0.reset([]);
        this._Item_21_4.contentLabel = this._query_Label_21_0.first;
        compView_21.create(this._Item_21_4, [
            [].concat([this._el_23]),
            [],
            [].concat([
                this._text_22,
                this._text_24
            ]),
            [],
            []
        ], null);
        this._text_25 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_26 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_26, 'ion-item', '');
        this._appEl_26 = new import2.AppElement(26, 11, this, this._el_26);
        var compView_26 = import36.viewFactory_Item0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Item_26_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_26), this.renderer);
        this._ItemContent_26_5 = new import18.ItemContent();
        this._query_Label_26_0 = new import20.QueryList();
        this._query_Button_26_1 = new import20.QueryList();
        this._query_Icon_26_2 = new import20.QueryList();
        this._appEl_26.initComponent(this._Item_26_4, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n      ', null);
        this._el_28 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_28, 'item-left', '');
        this.renderer.setElementAttribute(this._el_28, 'name', 'bubbles');
        this._appEl_28 = new import2.AppElement(28, 26, this, this._el_28);
        var compView_28 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(28), this._appEl_28);
        this._Spinner_28_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_28), this.renderer);
        this._appEl_28.initComponent(this._Spinner_28_4, [], compView_28);
        compView_28.create(this._Spinner_28_4, [], null);
        this._text_29 = this.renderer.createText(null, '\n      Show Bubbles\n    ', null);
        this._query_Label_26_0.reset([]);
        this._Item_26_4.contentLabel = this._query_Label_26_0.first;
        compView_26.create(this._Item_26_4, [
            [].concat([this._el_28]),
            [],
            [].concat([
                this._text_27,
                this._text_29
            ]),
            [],
            []
        ], null);
        this._text_30 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_31 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_31, 'ion-item', '');
        this._appEl_31 = new import2.AppElement(31, 11, this, this._el_31);
        var compView_31 = import36.viewFactory_Item0(this.viewUtils, this.injector(31), this._appEl_31);
        this._Item_31_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_31), this.renderer);
        this._ItemContent_31_5 = new import18.ItemContent();
        this._query_Label_31_0 = new import20.QueryList();
        this._query_Button_31_1 = new import20.QueryList();
        this._query_Icon_31_2 = new import20.QueryList();
        this._appEl_31.initComponent(this._Item_31_4, [], compView_31);
        this._text_32 = this.renderer.createText(null, '\n      ', null);
        this._el_33 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_33, 'item-left', '');
        this.renderer.setElementAttribute(this._el_33, 'name', 'circles');
        this._appEl_33 = new import2.AppElement(33, 31, this, this._el_33);
        var compView_33 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(33), this._appEl_33);
        this._Spinner_33_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_33), this.renderer);
        this._appEl_33.initComponent(this._Spinner_33_4, [], compView_33);
        compView_33.create(this._Spinner_33_4, [], null);
        this._text_34 = this.renderer.createText(null, '\n      Show Circles\n    ', null);
        this._query_Label_31_0.reset([]);
        this._Item_31_4.contentLabel = this._query_Label_31_0.first;
        compView_31.create(this._Item_31_4, [
            [].concat([this._el_33]),
            [],
            [].concat([
                this._text_32,
                this._text_34
            ]),
            [],
            []
        ], null);
        this._text_35 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_36 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_36, 'ion-item', '');
        this._appEl_36 = new import2.AppElement(36, 11, this, this._el_36);
        var compView_36 = import36.viewFactory_Item0(this.viewUtils, this.injector(36), this._appEl_36);
        this._Item_36_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_36), this.renderer);
        this._ItemContent_36_5 = new import18.ItemContent();
        this._query_Label_36_0 = new import20.QueryList();
        this._query_Button_36_1 = new import20.QueryList();
        this._query_Icon_36_2 = new import20.QueryList();
        this._appEl_36.initComponent(this._Item_36_4, [], compView_36);
        this._text_37 = this.renderer.createText(null, '\n      ', null);
        this._el_38 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_38, 'item-left', '');
        this.renderer.setElementAttribute(this._el_38, 'name', 'crescent');
        this._appEl_38 = new import2.AppElement(38, 36, this, this._el_38);
        var compView_38 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(38), this._appEl_38);
        this._Spinner_38_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_38), this.renderer);
        this._appEl_38.initComponent(this._Spinner_38_4, [], compView_38);
        compView_38.create(this._Spinner_38_4, [], null);
        this._text_39 = this.renderer.createText(null, '\n      Show Crescent\n    ', null);
        this._query_Label_36_0.reset([]);
        this._Item_36_4.contentLabel = this._query_Label_36_0.first;
        compView_36.create(this._Item_36_4, [
            [].concat([this._el_38]),
            [],
            [].concat([
                this._text_37,
                this._text_39
            ]),
            [],
            []
        ], null);
        this._text_40 = this.renderer.createText(this._el_11, '\n    ', null);
        this._el_41 = this.renderer.createElement(this._el_11, 'button', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_41, 'ion-item', '');
        this._appEl_41 = new import2.AppElement(41, 11, this, this._el_41);
        var compView_41 = import36.viewFactory_Item0(this.viewUtils, this.injector(41), this._appEl_41);
        this._Item_41_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_41), this.renderer);
        this._ItemContent_41_5 = new import18.ItemContent();
        this._query_Label_41_0 = new import20.QueryList();
        this._query_Button_41_1 = new import20.QueryList();
        this._query_Icon_41_2 = new import20.QueryList();
        this._appEl_41.initComponent(this._Item_41_4, [], compView_41);
        this._text_42 = this.renderer.createText(null, '\n      ', null);
        this._el_43 = this.renderer.createElement(null, 'ion-spinner', null);
        this.renderer.setElementAttribute(this._el_43, 'item-left', '');
        this._appEl_43 = new import2.AppElement(43, 41, this, this._el_43);
        var compView_43 = import38.viewFactory_Spinner0(this.viewUtils, this.injector(43), this._appEl_43);
        this._Spinner_43_4 = new import21.Spinner(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_43), this.renderer);
        this._appEl_43.initComponent(this._Spinner_43_4, [], compView_43);
        compView_43.create(this._Spinner_43_4, [], null);
        this._text_44 = this.renderer.createText(null, '\n      Show Default\n    ', null);
        this._query_Label_41_0.reset([]);
        this._Item_41_4.contentLabel = this._query_Label_41_0.first;
        compView_41.create(this._Item_41_4, [
            [].concat([this._el_43]),
            [],
            [].concat([
                this._text_42,
                this._text_44
            ]),
            [],
            []
        ], null);
        this._text_45 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_46 = this.renderer.createText(null, '\n\n  ', null);
        this._el_47 = this.renderer.createElement(null, 'ion-list', null);
        this._List_47_3 = new import17.List(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_47), this.renderer, this.parentInjector.get(import35.GestureController));
        this._text_48 = this.renderer.createText(this._el_47, '\n    ', null);
        this._el_49 = this.renderer.createElement(this._el_47, 'ion-list-header', null);
        this.renderer.setElementAttribute(this._el_49, 'class', 'item');
        this._appEl_49 = new import2.AppElement(49, 47, this, this._el_49);
        var compView_49 = import36.viewFactory_Item0(this.viewUtils, this.injector(49), this._appEl_49);
        this._Item_49_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_49), this.renderer);
        this._ListHeader_49_5 = new import19.ListHeader(this.parentInjector.get(import25.Config), this.renderer, new import26.ElementRef(this._el_49), null);
        this._query_Label_49_0 = new import20.QueryList();
        this._query_Button_49_1 = new import20.QueryList();
        this._query_Icon_49_2 = new import20.QueryList();
        this._appEl_49.initComponent(this._Item_49_4, [], compView_49);
        this._text_50 = this.renderer.createText(null, '\n      Custom Loading Indicators\n    ', null);
        this._query_Label_49_0.reset([]);
        this._Item_49_4.contentLabel = this._query_Label_49_0.first;
        compView_49.create(this._Item_49_4, [
            [],
            [],
            [].concat([this._text_50]),
            [],
            []
        ], null);
        this._text_51 = this.renderer.createText(this._el_47, '\n    ', null);
        this._el_52 = this.renderer.createElement(this._el_47, 'button', null);
        this.renderer.setElementAttribute(this._el_52, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_52, 'ion-item', '');
        this._appEl_52 = new import2.AppElement(52, 47, this, this._el_52);
        var compView_52 = import36.viewFactory_Item0(this.viewUtils, this.injector(52), this._appEl_52);
        this._Item_52_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_52), this.renderer);
        this._ItemContent_52_5 = new import18.ItemContent();
        this._query_Label_52_0 = new import20.QueryList();
        this._query_Button_52_1 = new import20.QueryList();
        this._query_Icon_52_2 = new import20.QueryList();
        this._appEl_52.initComponent(this._Item_52_4, [], compView_52);
        this._text_53 = this.renderer.createText(null, '\n      Show Custom\n    ', null);
        this._query_Label_52_0.reset([]);
        this._Item_52_4.contentLabel = this._query_Label_52_0.first;
        compView_52.create(this._Item_52_4, [
            [],
            [],
            [].concat([this._text_53]),
            [],
            []
        ], null);
        this._text_54 = this.renderer.createText(this._el_47, '\n    ', null);
        this._el_55 = this.renderer.createElement(this._el_47, 'button', null);
        this.renderer.setElementAttribute(this._el_55, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_55, 'ion-item', '');
        this._appEl_55 = new import2.AppElement(55, 47, this, this._el_55);
        var compView_55 = import36.viewFactory_Item0(this.viewUtils, this.injector(55), this._appEl_55);
        this._Item_55_4 = new import18.Item(this.parentInjector.get(import37.Form), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_55), this.renderer);
        this._ItemContent_55_5 = new import18.ItemContent();
        this._query_Label_55_0 = new import20.QueryList();
        this._query_Button_55_1 = new import20.QueryList();
        this._query_Icon_55_2 = new import20.QueryList();
        this._appEl_55.initComponent(this._Item_55_4, [], compView_55);
        this._text_56 = this.renderer.createText(null, '\n      Show Text Only\n    ', null);
        this._query_Label_55_0.reset([]);
        this._Item_55_4.contentLabel = this._query_Label_55_0.first;
        compView_55.create(this._Item_55_4, [
            [],
            [],
            [].concat([this._text_56]),
            [],
            []
        ], null);
        this._text_57 = this.renderer.createText(this._el_47, '\n  ', null);
        this._text_58 = this.renderer.createText(null, '\n\n', null);
        compView_9.create(this._Content_9_4, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_46,
                this._el_47,
                this._text_58
            ]),
            []
        ], null);
        this._text_59 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_60 = this.renderer.createElement(parentRenderNode, 'ion-footer', null);
        this._Footer_60_3 = new import13.Footer(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_60), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_61 = this.renderer.createText(this._el_60, '\n\n  ', null);
        this._el_62 = this.renderer.createElement(this._el_60, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_62, 'class', 'toolbar');
        this._appEl_62 = new import2.AppElement(62, 60, this, this._el_62);
        var compView_62 = import39.viewFactory_Toolbar0(this.viewUtils, this.injector(62), this._appEl_62);
        this._Toolbar_62_4 = new import13.Toolbar(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_62), this.renderer);
        this._appEl_62.initComponent(this._Toolbar_62_4, [], compView_62);
        this._text_63 = this.renderer.createText(null, '\n    ', null);
        this._el_64 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_64, 'end', '');
        this._ToolbarItem_64_3 = new import22.ToolbarItem(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_64), this.renderer, this._Toolbar_62_4, this.parentInjector.get(import14.Navbar, null));
        this._query_Button_64_0 = new import20.QueryList();
        this._text_65 = this.renderer.createText(this._el_64, '\n      ', null);
        this._el_66 = this.renderer.createElement(this._el_64, 'button', null);
        this.renderer.setElementAttribute(this._el_66, 'icon-right', '');
        this.renderer.setElementAttribute(this._el_66, 'ion-button', '');
        this._appEl_66 = new import2.AppElement(66, 64, this, this._el_66);
        var compView_66 = import40.viewFactory_Button0(this.viewUtils, this.injector(66), this._appEl_66);
        this._Button_66_4 = new import23.Button(null, '', this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_66), this.renderer);
        this._appEl_66.initComponent(this._Button_66_4, [], compView_66);
        this._text_67 = this.renderer.createText(null, '\n        Show Loading and Navigate\n        ', null);
        this._el_68 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_68, 'name', 'arrow-forward');
        this.renderer.setElementAttribute(this._el_68, 'role', 'img');
        this._Icon_68_3 = new import24.Icon(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_68), this.renderer);
        this._text_69 = this.renderer.createText(null, '\n      ', null);
        compView_66.create(this._Button_66_4, [[].concat([
                this._text_67,
                this._el_68,
                this._text_69
            ])], null);
        this._text_70 = this.renderer.createText(this._el_64, '\n    ', null);
        this._text_71 = this.renderer.createText(null, '\n  ', null);
        compView_62.create(this._Toolbar_62_4, [
            [],
            [],
            [].concat([this._el_64]),
            [].concat([
                this._text_63,
                this._text_71
            ])
        ], null);
        this._text_72 = this.renderer.createText(this._el_60, '\n\n', null);
        this._text_73 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_16, 'click', this.eventHandler(this._handle_click_16_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        var disposable_2 = this.renderer.listen(this._el_26, 'click', this.eventHandler(this._handle_click_26_0.bind(this)));
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_31, 'click', this.eventHandler(this._handle_click_31_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        var disposable_4 = this.renderer.listen(this._el_36, 'click', this.eventHandler(this._handle_click_36_0.bind(this)));
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_41, 'click', this.eventHandler(this._handle_click_41_0.bind(this)));
        this._expr_19 = import7.UNINITIALIZED;
        var disposable_6 = this.renderer.listen(this._el_52, 'click', this.eventHandler(this._handle_click_52_0.bind(this)));
        var disposable_7 = this.renderer.listen(this._el_55, 'click', this.eventHandler(this._handle_click_55_0.bind(this)));
        this._expr_22 = import7.UNINITIALIZED;
        var disposable_8 = this.renderer.listen(this._el_66, 'click', this.eventHandler(this._handle_click_66_0.bind(this)));
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._text_73
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8
        ], []);
        return null;
    };
    _View_Page10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import14.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import18.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Item_13_4;
        }
        if (((token === import19.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ListHeader_13_5;
        }
        if (((token === import21.Spinner) && (18 === requestNodeIndex))) {
            return this._Spinner_18_4;
        }
        if (((token === import18.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Item_16_4;
        }
        if (((token === import18.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ItemContent_16_5;
        }
        if (((token === import21.Spinner) && (23 === requestNodeIndex))) {
            return this._Spinner_23_4;
        }
        if (((token === import18.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Item_21_4;
        }
        if (((token === import18.ItemContent) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._ItemContent_21_5;
        }
        if (((token === import21.Spinner) && (28 === requestNodeIndex))) {
            return this._Spinner_28_4;
        }
        if (((token === import18.Item) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._Item_26_4;
        }
        if (((token === import18.ItemContent) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._ItemContent_26_5;
        }
        if (((token === import21.Spinner) && (33 === requestNodeIndex))) {
            return this._Spinner_33_4;
        }
        if (((token === import18.Item) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._Item_31_4;
        }
        if (((token === import18.ItemContent) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._ItemContent_31_5;
        }
        if (((token === import21.Spinner) && (38 === requestNodeIndex))) {
            return this._Spinner_38_4;
        }
        if (((token === import18.Item) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._Item_36_4;
        }
        if (((token === import18.ItemContent) && ((36 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._ItemContent_36_5;
        }
        if (((token === import21.Spinner) && (43 === requestNodeIndex))) {
            return this._Spinner_43_4;
        }
        if (((token === import18.Item) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._Item_41_4;
        }
        if (((token === import18.ItemContent) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 44)))) {
            return this._ItemContent_41_5;
        }
        if (((token === import17.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._List_11_3;
        }
        if (((token === import18.Item) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._Item_49_4;
        }
        if (((token === import19.ListHeader) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 50)))) {
            return this._ListHeader_49_5;
        }
        if (((token === import18.Item) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._Item_52_4;
        }
        if (((token === import18.ItemContent) && ((52 <= requestNodeIndex) && (requestNodeIndex <= 53)))) {
            return this._ItemContent_52_5;
        }
        if (((token === import18.Item) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._Item_55_4;
        }
        if (((token === import18.ItemContent) && ((55 <= requestNodeIndex) && (requestNodeIndex <= 56)))) {
            return this._ItemContent_55_5;
        }
        if (((token === import17.List) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._List_47_3;
        }
        if (((token === import16.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._Content_9_4;
        }
        if (((token === import24.Icon) && (68 === requestNodeIndex))) {
            return this._Icon_68_3;
        }
        if (((token === import23.Button) && ((66 <= requestNodeIndex) && (requestNodeIndex <= 69)))) {
            return this._Button_66_4;
        }
        if (((token === import22.ToolbarItem) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._ToolbarItem_64_3;
        }
        if (((token === import13.Toolbar) && ((62 <= requestNodeIndex) && (requestNodeIndex <= 71)))) {
            return this._Toolbar_62_4;
        }
        if (((token === import13.Footer) && ((60 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._Footer_60_3;
        }
        return notFoundResult;
    };
    _View_Page10.prototype.detectChangesInternal = function (throwOnChange) {
        var changed = true;
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changed = false;
        var currVal_4 = 'ios';
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._Spinner_18_4.name = currVal_4;
            changed = true;
            this._expr_4 = currVal_4;
        }
        if (changed) {
            this._appEl_18.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_18_4.ngOnInit();
        }
        changed = false;
        var currVal_7 = 'dots';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Spinner_23_4.name = currVal_7;
            changed = true;
            this._expr_7 = currVal_7;
        }
        if (changed) {
            this._appEl_23.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_23_4.ngOnInit();
        }
        changed = false;
        var currVal_10 = 'bubbles';
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this._Spinner_28_4.name = currVal_10;
            changed = true;
            this._expr_10 = currVal_10;
        }
        if (changed) {
            this._appEl_28.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_28_4.ngOnInit();
        }
        changed = false;
        var currVal_13 = 'circles';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Spinner_33_4.name = currVal_13;
            changed = true;
            this._expr_13 = currVal_13;
        }
        if (changed) {
            this._appEl_33.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_33_4.ngOnInit();
        }
        changed = false;
        var currVal_16 = 'crescent';
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this._Spinner_38_4.name = currVal_16;
            changed = true;
            this._expr_16 = currVal_16;
        }
        if (changed) {
            this._appEl_38.componentView.markAsCheckOnce();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_38_4.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Spinner_43_4.ngOnInit();
        }
        var currVal_24 = 'arrow-forward';
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this._Icon_68_3.name = currVal_24;
            this._expr_24 = currVal_24;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_13_1.dirty) {
                this._query_Button_13_1.reset([]);
                this._Item_13_4._buttons = this._query_Button_13_1;
                this._query_Button_13_1.notifyOnChanges();
            }
            if (this._query_Icon_13_2.dirty) {
                this._query_Icon_13_2.reset([]);
                this._Item_13_4._icons = this._query_Icon_13_2;
                this._query_Icon_13_2.notifyOnChanges();
            }
            if (this._query_Button_16_1.dirty) {
                this._query_Button_16_1.reset([]);
                this._Item_16_4._buttons = this._query_Button_16_1;
                this._query_Button_16_1.notifyOnChanges();
            }
            if (this._query_Icon_16_2.dirty) {
                this._query_Icon_16_2.reset([]);
                this._Item_16_4._icons = this._query_Icon_16_2;
                this._query_Icon_16_2.notifyOnChanges();
            }
            if (this._query_Button_21_1.dirty) {
                this._query_Button_21_1.reset([]);
                this._Item_21_4._buttons = this._query_Button_21_1;
                this._query_Button_21_1.notifyOnChanges();
            }
            if (this._query_Icon_21_2.dirty) {
                this._query_Icon_21_2.reset([]);
                this._Item_21_4._icons = this._query_Icon_21_2;
                this._query_Icon_21_2.notifyOnChanges();
            }
            if (this._query_Button_26_1.dirty) {
                this._query_Button_26_1.reset([]);
                this._Item_26_4._buttons = this._query_Button_26_1;
                this._query_Button_26_1.notifyOnChanges();
            }
            if (this._query_Icon_26_2.dirty) {
                this._query_Icon_26_2.reset([]);
                this._Item_26_4._icons = this._query_Icon_26_2;
                this._query_Icon_26_2.notifyOnChanges();
            }
            if (this._query_Button_31_1.dirty) {
                this._query_Button_31_1.reset([]);
                this._Item_31_4._buttons = this._query_Button_31_1;
                this._query_Button_31_1.notifyOnChanges();
            }
            if (this._query_Icon_31_2.dirty) {
                this._query_Icon_31_2.reset([]);
                this._Item_31_4._icons = this._query_Icon_31_2;
                this._query_Icon_31_2.notifyOnChanges();
            }
            if (this._query_Button_36_1.dirty) {
                this._query_Button_36_1.reset([]);
                this._Item_36_4._buttons = this._query_Button_36_1;
                this._query_Button_36_1.notifyOnChanges();
            }
            if (this._query_Icon_36_2.dirty) {
                this._query_Icon_36_2.reset([]);
                this._Item_36_4._icons = this._query_Icon_36_2;
                this._query_Icon_36_2.notifyOnChanges();
            }
            if (this._query_Button_41_1.dirty) {
                this._query_Button_41_1.reset([]);
                this._Item_41_4._buttons = this._query_Button_41_1;
                this._query_Button_41_1.notifyOnChanges();
            }
            if (this._query_Icon_41_2.dirty) {
                this._query_Icon_41_2.reset([]);
                this._Item_41_4._icons = this._query_Icon_41_2;
                this._query_Icon_41_2.notifyOnChanges();
            }
            if (this._query_Button_49_1.dirty) {
                this._query_Button_49_1.reset([]);
                this._Item_49_4._buttons = this._query_Button_49_1;
                this._query_Button_49_1.notifyOnChanges();
            }
            if (this._query_Icon_49_2.dirty) {
                this._query_Icon_49_2.reset([]);
                this._Item_49_4._icons = this._query_Icon_49_2;
                this._query_Icon_49_2.notifyOnChanges();
            }
            if (this._query_Button_52_1.dirty) {
                this._query_Button_52_1.reset([]);
                this._Item_52_4._buttons = this._query_Button_52_1;
                this._query_Button_52_1.notifyOnChanges();
            }
            if (this._query_Icon_52_2.dirty) {
                this._query_Icon_52_2.reset([]);
                this._Item_52_4._icons = this._query_Icon_52_2;
                this._query_Icon_52_2.notifyOnChanges();
            }
            if (this._query_Button_55_1.dirty) {
                this._query_Button_55_1.reset([]);
                this._Item_55_4._buttons = this._query_Button_55_1;
                this._query_Button_55_1.notifyOnChanges();
            }
            if (this._query_Icon_55_2.dirty) {
                this._query_Icon_55_2.reset([]);
                this._Item_55_4._icons = this._query_Icon_55_2;
                this._query_Icon_55_2.notifyOnChanges();
            }
            if (this._query_Button_64_0.dirty) {
                this._query_Button_64_0.reset([this._Button_66_4]);
                this._ToolbarItem_64_3._buttons = this._query_Button_64_0;
                this._query_Button_64_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_13_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_16_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_21_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_26_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_31_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_36_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_41_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_49_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_52_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_55_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_66_4.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_5 = this._Spinner_18_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_18, 'spinner-paused', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_8 = this._Spinner_23_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_23, 'spinner-paused', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_11 = this._Spinner_28_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_28, 'spinner-paused', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_14 = this._Spinner_33_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_33, 'spinner-paused', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_17 = this._Spinner_38_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_38, 'spinner-paused', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_19 = this._Spinner_43_4.paused;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementClass(this._el_43, 'spinner-paused', currVal_19);
            this._expr_19 = currVal_19;
        }
        var currVal_22 = this._Toolbar_62_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_62, 'statusbar-padding', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_25 = this._Icon_68_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_68, 'hide', currVal_25);
            this._expr_25 = currVal_25;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_Page10.prototype.destroyInternal = function () {
        this._Content_9_4.ngOnDestroy();
        this._Icon_68_3.ngOnDestroy();
    };
    _View_Page10.prototype._handle_click_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingIos() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_21_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingDots() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_26_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingBubbles() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_31_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingCircles() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_36_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingCrescent() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_41_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingDefault() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_52_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingCustom() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_55_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.presentLoadingText() !== false);
        return (true && pd_0);
    };
    _View_Page10.prototype._handle_click_66_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.goToPage2() !== false);
        return (true && pd_0);
    };
    return _View_Page10;
}(import1.AppView));
export function viewFactory_Page10(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page1 === null)) {
        (renderType_Page1 = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/loading/page.html', 0, import10.ViewEncapsulation.Emulated, styles_Page1, {}));
    }
    return new _View_Page10(viewUtils, parentInjector, declarationEl);
}
var renderType_Page2_Host = null;
var _View_Page2_Host0 = (function (_super) {
    __extends(_View_Page2_Host0, _super);
    function _View_Page2_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page2_Host0, renderType_Page2_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page2_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Page20(this.viewUtils, this.injector(0), this._appEl_0);
        this._Page2_0_4 = new import3.Page2();
        this._appEl_0.initComponent(this._Page2_0_4, [], compView_0);
        compView_0.create(this._Page2_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Page2_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.Page2) && (0 === requestNodeIndex))) {
            return this._Page2_0_4;
        }
        return notFoundResult;
    };
    return _View_Page2_Host0;
}(import1.AppView));
function viewFactory_Page2_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page2_Host === null)) {
        (renderType_Page2_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_Page2_Host0(viewUtils, parentInjector, declarationEl);
}
export var Page2NgFactory = new import11.ComponentFactory('ng-component', viewFactory_Page2_Host0, import3.Page2);
var styles_Page2 = [];
var renderType_Page2 = null;
var _View_Page20 = (function (_super) {
    __extends(_View_Page20, _super);
    function _View_Page20(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Page20, renderType_Page2, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Page20.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import13.Header(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import27.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import2.AppElement(3, 1, this, this._el_3);
        var compView_3 = import28.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import29.App), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import9.NavController, null), this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n        ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_5 = new import2.AppElement(5, 3, this, this._el_5);
        var compView_5 = import30.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(5), this._appEl_5);
        this._ToolbarTitle_5_4 = new import15.ToolbarTitle(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_3_4);
        this._appEl_5.initComponent(this._ToolbarTitle_5_4, [], compView_5);
        this._text_6 = this.renderer.createText(null, 'Page 2', null);
        compView_5.create(this._ToolbarTitle_5_4, [[].concat([this._text_6])], null);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        compView_3.create(this._Navbar_3_4, [
            [],
            [],
            [],
            [].concat([
                this._text_4,
                this._el_5,
                this._text_7
            ])
        ], null);
        this._text_8 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_10 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_10, 'padding', '');
        this._appEl_10 = new import2.AppElement(10, null, this, this._el_10);
        var compView_10 = import31.viewFactory_Content0(this.viewUtils, this.injector(10), this._appEl_10);
        this._Content_10_4 = new import16.Content(this.parentInjector.get(import25.Config), new import26.ElementRef(this._el_10), this.renderer, this.parentInjector.get(import29.App), this.parentInjector.get(import32.Keyboard), this.parentInjector.get(import33.NgZone), this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import34.Tabs, null));
        this._appEl_10.initComponent(this._Content_10_4, [], compView_10);
        this._text_11 = this.renderer.createText(null, 'This is another page!', null);
        compView_10.create(this._Content_10_4, [
            [],
            [].concat([this._text_11]),
            []
        ], null);
        this._text_12 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_Page20.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._ToolbarTitle_5_4;
        }
        if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Navbar_3_4;
        }
        if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Header_1_3;
        }
        if (((token === import16.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Content_10_4;
        }
        return notFoundResult;
    };
    _View_Page20.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_10_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_3_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_10_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_10, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.ngAfterViewInit();
            }
        }
    };
    _View_Page20.prototype.destroyInternal = function () {
        this._Content_10_4.ngOnDestroy();
    };
    return _View_Page20;
}(import1.AppView));
export function viewFactory_Page20(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Page2 === null)) {
        (renderType_Page2 = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/loading/app.component.ts class Page2 - inline template', 0, import10.ViewEncapsulation.None, styles_Page2, {}));
    }
    return new _View_Page20(viewUtils, parentInjector, declarationEl);
}
var renderType_ApiDemoApp_Host = null;
var _View_ApiDemoApp_Host0 = (function (_super) {
    __extends(_View_ApiDemoApp_Host0, _super);
    function _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp_Host0, renderType_ApiDemoApp_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ApiDemoApp0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ApiDemoApp_0_4 = new import3.ApiDemoApp();
        this._appEl_0.initComponent(this._ApiDemoApp_0_4, [], compView_0);
        compView_0.create(this._ApiDemoApp_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ApiDemoApp_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ApiDemoApp) && (0 === requestNodeIndex))) {
            return this._ApiDemoApp_0_4;
        }
        return notFoundResult;
    };
    return _View_ApiDemoApp_Host0;
}(import1.AppView));
function viewFactory_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp_Host === null)) {
        (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_ApiDemoApp_Host0(viewUtils, parentInjector, declarationEl);
}
export var ApiDemoAppNgFactory = new import11.ComponentFactory('ng-component', viewFactory_ApiDemoApp_Host0, import3.ApiDemoApp);
var styles_ApiDemoApp = [];
var renderType_ApiDemoApp = null;
var _View_ApiDemoApp0 = (function (_super) {
    __extends(_View_ApiDemoApp0, _super);
    function _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ApiDemoApp0, renderType_ApiDemoApp, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ApiDemoApp0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-nav', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import42.viewFactory_Nav0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Nav_0_4 = new import41.Nav(this.parentInjector.get(import27.ViewController, null), this.parentInjector.get(import43.NavControllerBase, null), this.parentInjector.get(import29.App), this.parentInjector.get(import25.Config), this.parentInjector.get(import32.Keyboard), new import26.ElementRef(this._el_0), this.parentInjector.get(import33.NgZone), this.renderer, this.parentInjector.get(import44.ComponentFactoryResolver), this.parentInjector.get(import35.GestureController), this.parentInjector.get(import45.TransitionController), this.parentInjector.get(import46.DeepLinker, null));
        this._appEl_0.initComponent(this._Nav_0_4, [], compView_0);
        compView_0.create(this._Nav_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [this._el_0], [], []);
        return null;
    };
    _View_ApiDemoApp0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import41.Nav) && (0 === requestNodeIndex))) {
            return this._Nav_0_4;
        }
        return notFoundResult;
    };
    _View_ApiDemoApp0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.root;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Nav_0_4.root = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Nav_0_4.ngAfterViewInit();
            }
        }
    };
    return _View_ApiDemoApp0;
}(import1.AppView));
export function viewFactory_ApiDemoApp0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ApiDemoApp === null)) {
        (renderType_ApiDemoApp = viewUtils.createRenderComponentType('/home/ubuntu/ionic/demos/src/loading/app.component.ts class ApiDemoApp - inline template', 0, import10.ViewEncapsulation.None, styles_ApiDemoApp, {}));
    }
    return new _View_ApiDemoApp0(viewUtils, parentInjector, declarationEl);
}
