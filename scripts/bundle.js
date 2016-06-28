webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_App=__webpack_require__(595),_App2=_interopRequireDefault(_App),_NationModal=__webpack_require__(603),_NationModal2=_interopRequireDefault(_NationModal),_SideBar=__webpack_require__(609),_SideBar2=_interopRequireDefault(_SideBar);__webpack_require__(436);var pathName=location.pathname;console.log(pathName),_reactDom2["default"].render(_react2["default"].createElement(_SideBar2["default"],null),document.getElementById("side_bar")),_reactDom2["default"].render(_react2["default"].createElement(_App2["default"],null),document.getElementById("content")),_reactDom2["default"].render(_react2["default"].createElement(_NationModal2["default"],null),document.getElementById("nation_modal")),_RouteAction2["default"].updatePath(pathName),window.onpopstate=function(e){var t=location.pathname;null!==e.state&&"undefined"!=typeof e.state.pathname&&(t=e.state.pathname),console.log(t),_RouteAction2["default"].updatePath(t)};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classGenerator2 = __webpack_require__(469);
	
	var _classGenerator3 = _interopRequireDefault(_classGenerator2);
	
	var _colorFilter2 = __webpack_require__(470);
	
	var _colorFilter3 = _interopRequireDefault(_colorFilter2);
	
	var _stateFilter2 = __webpack_require__(472);
	
	var _stateFilter3 = _interopRequireDefault(_stateFilter2);
	
	var _typeFilter2 = __webpack_require__(473);
	
	var _typeFilter3 = _interopRequireDefault(_typeFilter2);
	
	var _nameSetter = __webpack_require__(471);
	
	var _nameSetter2 = _interopRequireDefault(_nameSetter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FilterFactory = function () {
	  function FilterFactory(ComposeComponent) {
	    _classCallCheck(this, FilterFactory);
	
	    this.ComposeComponent = ComposeComponent;
	  }
	
	  _createClass(FilterFactory, [{
	    key: 'classGenerator',
	    value: function classGenerator(defaultClassName) {
	      this.ComposeComponent = (0, _classGenerator3.default)(defaultClassName, this.ComposeComponent);
	      return this;
	    }
	  }, {
	    key: 'colorFilter',
	    value: function colorFilter() {
	      this.ComposeComponent = (0, _colorFilter3.default)(this.ComposeComponent);
	      return this;
	    }
	  }, {
	    key: 'stateFilter',
	    value: function stateFilter(stateArray) {
	      this.ComposeComponent = (0, _stateFilter3.default)(stateArray, this.ComposeComponent);
	      return this;
	    }
	  }, {
	    key: 'typeFilter',
	    value: function typeFilter() {
	      this.ComposeComponent = (0, _typeFilter3.default)(this.ComposeComponent);
	      return this;
	    }
	  }, {
	    key: 'getComposeComponent',
	    value: function getComposeComponent(componentName) {
	      return (0, _nameSetter2.default)(componentName, this.ComposeComponent);
	    }
	  }]);
	
	  return FilterFactory;
	}();
	
	exports.default = FilterFactory;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var Div = function Div(_ref) {
	  var children = _ref.children;
	
	  var other = _objectWithoutProperties(_ref, ['children']);
	
	  return _react2.default.createElement(
	    'div',
	    other,
	    children
	  );
	};
	
	exports.default = Div;

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_NationAction=__webpack_require__(228),_NationAction2=_interopRequireDefault(_NationAction),_PostListAction=__webpack_require__(229),_PostListAction2=_interopRequireDefault(_PostListAction),_AuthorAction=__webpack_require__(596),_AuthorAction2=_interopRequireDefault(_AuthorAction),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),RouteAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updatePath",value:function(t,e){switch(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_UPDATE_PATH,pathName:t,hash:e}),t=t.split("/"),t[1]){case"about_authors":_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_AUTH_PAGE});break;case"view_africa_nations":_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_MAP_PAGE}),_NationAction2["default"].loadNationData();break;case"view_post_list":t.length>3&&("posts"===t[2]?(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_PAGE,postID:t[3]}),_AuthorAction2["default"].loadAuthorData()):"category"===t[2]?(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_PAGE,postID:t[3]}),_PostListAction2["default"].updatePostList(t[3],_TumblrConfig2["default"].postList.loadAmount)):"tag"===t[2]?(t[3]=decodeURIComponent(t[3]),_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_TAG_PAGE,tag:t[3]})):"author"===t[2]&&(t[3]=decodeURIComponent(t[3]),_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_AUTHOR_PAGE,author:t[3]})));break;default:"undefined"!=typeof e&&_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_HASHTAG,hash:e}),_PostListAction2["default"].updatePostList("top",2),_PostListAction2["default"].updatePostList("new",2),_PostListAction2["default"].updateAllPostList(1)}}}]),t}();exports["default"]=new RouteAction;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _flux=__webpack_require__(190);exports["default"]=new _flux.Dispatcher;

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Statistic = exports.Items = exports.Item = exports.Feed = exports.Comments = exports.Comment = exports.Card = exports.Ad = exports.Tab = exports.Sticky = exports.Sidebar = exports.Shape = exports.Search = exports.Rating = exports.Progress = exports.Popup = exports.Modal = exports.Embed = exports.Dropdown = exports.Dimmer = exports.Checkbox = exports.Accordion = exports.Steps = exports.Step = exports.Segment = exports.Reveal = exports.Rail = exports.Loader = exports.List = exports.Label = exports.Input = exports.Image = exports.Icon = exports.Header = exports.Flag = exports.Divider = exports.Container = exports.Button = exports.Title = exports.Text = exports.Section = exports.Row = exports.Fields = exports.Field = exports.Content = exports.Column = exports.Table = exports.Message = exports.Menu = exports.Grid = exports.Form = exports.Breadcrumb = undefined;
	
	var _breadcrumb = __webpack_require__(439);
	
	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);
	
	var _form = __webpack_require__(440);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _grid = __webpack_require__(441);
	
	var _grid2 = _interopRequireDefault(_grid);
	
	var _menu = __webpack_require__(442);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _message = __webpack_require__(443);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _table = __webpack_require__(444);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _column = __webpack_require__(445);
	
	var _column2 = _interopRequireDefault(_column);
	
	var _content = __webpack_require__(446);
	
	var _content2 = _interopRequireDefault(_content);
	
	var _field = __webpack_require__(447);
	
	var _field2 = _interopRequireDefault(_field);
	
	var _fields = __webpack_require__(448);
	
	var _fields2 = _interopRequireDefault(_fields);
	
	var _row = __webpack_require__(449);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _section = __webpack_require__(450);
	
	var _section2 = _interopRequireDefault(_section);
	
	var _text = __webpack_require__(451);
	
	var _text2 = _interopRequireDefault(_text);
	
	var _title = __webpack_require__(452);
	
	var _title2 = _interopRequireDefault(_title);
	
	var _button = __webpack_require__(453);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _container = __webpack_require__(454);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _divider = __webpack_require__(455);
	
	var _divider2 = _interopRequireDefault(_divider);
	
	var _flag = __webpack_require__(456);
	
	var _flag2 = _interopRequireDefault(_flag);
	
	var _header = __webpack_require__(457);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _icon = __webpack_require__(458);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _image = __webpack_require__(459);
	
	var _image2 = _interopRequireDefault(_image);
	
	var _input = __webpack_require__(460);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _label = __webpack_require__(461);
	
	var _label2 = _interopRequireDefault(_label);
	
	var _list = __webpack_require__(462);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _loader = __webpack_require__(463);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _rail = __webpack_require__(464);
	
	var _rail2 = _interopRequireDefault(_rail);
	
	var _reveal = __webpack_require__(465);
	
	var _reveal2 = _interopRequireDefault(_reveal);
	
	var _segment = __webpack_require__(466);
	
	var _segment2 = _interopRequireDefault(_segment);
	
	var _step = __webpack_require__(467);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _steps = __webpack_require__(468);
	
	var _steps2 = _interopRequireDefault(_steps);
	
	var _accordion = __webpack_require__(474);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _checkbox = __webpack_require__(475);
	
	var _checkbox2 = _interopRequireDefault(_checkbox);
	
	var _dimmer = __webpack_require__(476);
	
	var _dimmer2 = _interopRequireDefault(_dimmer);
	
	var _dropdown = __webpack_require__(477);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _embed = __webpack_require__(478);
	
	var _embed2 = _interopRequireDefault(_embed);
	
	var _modal = __webpack_require__(479);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _popup = __webpack_require__(480);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	var _progress = __webpack_require__(481);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _rating = __webpack_require__(482);
	
	var _rating2 = _interopRequireDefault(_rating);
	
	var _search = __webpack_require__(483);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _shape = __webpack_require__(484);
	
	var _shape2 = _interopRequireDefault(_shape);
	
	var _sidebar = __webpack_require__(485);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _sticky = __webpack_require__(486);
	
	var _sticky2 = _interopRequireDefault(_sticky);
	
	var _tab = __webpack_require__(487);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _advertisement = __webpack_require__(488);
	
	var _advertisement2 = _interopRequireDefault(_advertisement);
	
	var _card = __webpack_require__(489);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _comment = __webpack_require__(490);
	
	var _comment2 = _interopRequireDefault(_comment);
	
	var _comments = __webpack_require__(491);
	
	var _comments2 = _interopRequireDefault(_comments);
	
	var _feed = __webpack_require__(492);
	
	var _feed2 = _interopRequireDefault(_feed);
	
	var _item = __webpack_require__(493);
	
	var _item2 = _interopRequireDefault(_item);
	
	var _items = __webpack_require__(494);
	
	var _items2 = _interopRequireDefault(_items);
	
	var _statistic = __webpack_require__(495);
	
	var _statistic2 = _interopRequireDefault(_statistic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Breadcrumb = _breadcrumb2.default;
	// collections
	
	exports.Form = _form2.default;
	exports.Grid = _grid2.default;
	exports.Menu = _menu2.default;
	exports.Message = _message2.default;
	exports.Table = _table2.default;
	
	// commons
	
	exports.Column = _column2.default;
	exports.Content = _content2.default;
	exports.Field = _field2.default;
	exports.Fields = _fields2.default;
	exports.Row = _row2.default;
	exports.Section = _section2.default;
	exports.Text = _text2.default;
	exports.Title = _title2.default;
	
	// elements
	
	exports.Button = _button2.default;
	exports.Container = _container2.default;
	exports.Divider = _divider2.default;
	exports.Flag = _flag2.default;
	exports.Header = _header2.default;
	exports.Icon = _icon2.default;
	exports.Image = _image2.default;
	exports.Input = _input2.default;
	exports.Label = _label2.default;
	exports.List = _list2.default;
	exports.Loader = _loader2.default;
	exports.Rail = _rail2.default;
	exports.Reveal = _reveal2.default;
	exports.Segment = _segment2.default;
	exports.Step = _step2.default;
	exports.Steps = _steps2.default;
	
	// modules
	
	exports.Accordion = _accordion2.default;
	exports.Checkbox = _checkbox2.default;
	exports.Dimmer = _dimmer2.default;
	exports.Dropdown = _dropdown2.default;
	exports.Embed = _embed2.default;
	exports.Modal = _modal2.default;
	exports.Popup = _popup2.default;
	exports.Progress = _progress2.default;
	exports.Rating = _rating2.default;
	exports.Search = _search2.default;
	exports.Shape = _shape2.default;
	exports.Sidebar = _sidebar2.default;
	exports.Sticky = _sticky2.default;
	exports.Tab = _tab2.default;
	
	// views
	
	exports.Ad = _advertisement2.default;
	exports.Card = _card2.default;
	exports.Comment = _comment2.default;
	exports.Comments = _comments2.default;
	exports.Feed = _feed2.default;
	exports.Item = _item2.default;
	exports.Items = _items2.default;
	exports.Statistic = _statistic2.default;

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(598),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"CategoryMenu",getInitialState:function(){return{categories:_PostListConfig2["default"].categories,nameMap:_PostListConfig2["default"].categoryMap}},render:function(){var e=this.state,t=e.categories,o=e.nameMap;return _react2["default"].createElement(_Component2["default"],{categories:t,nameMap:o,onCategoryClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,o=t.pathname,a=t.hash;history.pushState({pathname:o,hash:a},"",o),_RouteAction2["default"].updatePath(o,a),e.preventDefault()}});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_MenuStore=__webpack_require__(114),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_index=__webpack_require__(426),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34);exports["default"]=_react2["default"].createClass({displayName:"IndexMenu",getInitialState:function(){return{currentMenu:_MenuStore2["default"].getAll()}},componentDidMount:function(){function e(){$("#category-menu").slideToggle()}"index"==_RouteStore2["default"].getCurrentRoute().name?$("#btn-article").off("click",e):$("#btn-article").on("click",e)},render:function(){return _react2["default"].createElement("div",{id:_index2["default"].indexMenu},_react2["default"].createElement("div",{className:"ui centered grid"},_react2["default"].createElement(_reactSemantify.Menu,{className:"secondary"},_react2["default"].createElement(_reactSemantify.Item,{id:"menu-logo",style:{paddingTop:"14px"}},_react2["default"].createElement("a",{href:"/"},_react2["default"].createElement("img",{src:"/images/wow_logo2.png",style:{width:"180px"}}))),this.renderDropdown())))},renderDropdown:function(){var e=this,t=this.state.currentMenu;return t.map(function(t){var r=t.showName,a=t.name,n=!1;""!==t.currentPage&&(r=t.currentPage);var u=!0,i=!1,c=void 0;try{for(var o,l=t.subPage[Symbol.iterator]();!(u=(o=l.next()).done);u=!0){var d=o.value;d.status&&(n=!0)}}catch(f){i=!0,c=f}finally{try{!u&&l["return"]&&l["return"]()}finally{if(i)throw c}}return _react2["default"].createElement(_reactSemantify.Item,{id:"btn-"+a,active:n},_react2["default"].createElement(_reactSemantify.Dropdown,{init:!0},_react2["default"].createElement(_reactSemantify.Text,{style:{color:"#E8F5FF"}},r),_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown",style:{color:"#E8F5FF"}}),_react2["default"].createElement(_reactSemantify.Menu,null,e.renderItem(t))))})},renderItem:function(e){var t=this;if("article"!==e.name)return e.subPage.map(function(e){return _react2["default"].createElement(_reactSemantify.Item,{type:"link",active:e.status,href:e.url,onClick:t._onClick},e.showName)})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,a=t.hash;history.pushState({pathname:r,hash:a},"",r),_RouteAction2["default"].updatePath(r,a),e.preventDefault()}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig);exports["default"]={listContainer:{news:{},people:{},nature:{},innovation:{},society:{},history:{},art:{},travel:{},newPosts:{}},postContainer:_extends({id:"",title:"",image:"",category:""},_PostConfig2["default"].settingContainer),categories:["news","people","nature","innovation","society","history","art","travel"],categoryMap:{news:"時事新聞",people:"人物專欄",nature:"自然保育",innovation:"創新應用",society:"社會人文",history:"歷史故事",art:"藝文介紹",travel:"旅行專欄"},categoryMapZh:{"時事新聞":"news","人物專欄":"people","自然保育":"nature","創新應用":"innovation","社會人文":"society","歷史故事":"history","藝文介紹":"art","旅行專欄":"travel"},tagMap:{top:"最新消息"}};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={blogName:"wowafrica.tumblr.com",consumerKey:"M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi",author:{tag:"exploreafrica-tw-author",picWidth:512},nation:{tag:"nation"},postList:{loadAmount:20}};

/***/ },
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(600),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"Footer",render:function(){return _react2["default"].createElement(_Component2["default"],{onFooterClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,o=t.hash;history.pushState({pathname:r,hash:o},"",r),_RouteAction2["default"].updatePath(r,o),e.preventDefault()}});

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={ROUTE_UPDATE_PATH:1,ROUTE_AUTH_PAGE:2,ROUTE_MAP_PAGE:3,ROUTE_POST_PAGE:4,ROUTE_POST_LIST_PAGE:5,ROUTE_POST_LIST_TAG_PAGE:6,ROUTE_HASHTAG:7,ROUTE_EVENT:"ROUTE_EVENT"};

/***/ },
/* 53 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var tumblr = __webpack_require__(588);
	tumblr.request(__webpack_require__(590));
	
	module.exports = tumblr;


/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={settingAlias:{"作者":"author","摘要":"brief"},settingContainer:{author:"WOW Africa",brief:""}};

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={POST_LIST_UPDATE:100,POST_LIST_TAG_UPDATE:101,POST_LIST_AUTHOR_UPDATE:102,POST_LIST_READMORE_UPDATE:103,POST_LIST_CATEGORY_EVENT:"POST_LIST_CATEGORY_EVENT",POST_LIST_NEW_EVENT:"POST_LIST_NEW_EVENT",POST_LIST_TOP_EVENT:"POST_LIST_TOP_EVENT",POST_LIST_TAG_EVENT:"POST_LIST_TAG_EVENT",POST_LIST_AUTHOR_EVENT:"POST_LIST_AUTHOR_EVENT",POST_LIST_READMORE_EVENT:"POST_LIST_READMORE_EVENT",POST_LIST_AUTHOR_URL:"/view_post_list/authorPostList.json",POST_LIST_ALL_URL:"/view_post_list/allPostList.json"};

/***/ },
/* 81 */,
/* 82 */,
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var link = function link(_ref) {
	  var children = _ref.children;
	
	  var other = _objectWithoutProperties(_ref, ['children']);
	
	  return _react2.default.createElement(
	    'a',
	    other,
	    children
	  );
	};
	
	var icon = function icon(_ref2) {
	  var children = _ref2.children;
	
	  var other = _objectWithoutProperties(_ref2, ['children']);
	
	  return _react2.default.createElement(
	    'i',
	    other,
	    children
	  );
	};
	
	var div = function div(_ref3) {
	  var children = _ref3.children;
	
	  var other = _objectWithoutProperties(_ref3, ['children']);
	
	  return _react2.default.createElement(
	    'div',
	    other,
	    children
	  );
	};
	
	var basicComponentMap = {
	  link: link,
	  icon: icon,
	  div: div
	};
	
	var Unit = function (_React$Component) {
	  _inherits(Unit, _React$Component);
	
	  function Unit() {
	    _classCallCheck(this, Unit);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unit).apply(this, arguments));
	  }
	
	  _createClass(Unit, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'div' : _props$type;
	
	      var other = _objectWithoutProperties(_props, ['children', 'type']);
	
	      var Component = basicComponentMap[type];
	
	      return _react2.default.createElement(
	        Component,
	        other,
	        children
	      );
	    }
	  }]);
	
	  return Unit;
	}(_react2.default.Component);
	
	exports.default = Unit;

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_events=__webpack_require__(53),_routr=__webpack_require__(225),_routr2=_interopRequireDefault(_routr),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_RouteConfig=__webpack_require__(614),_RouteConfig2=_interopRequireDefault(_RouteConfig),_MenuStore=__webpack_require__(114),_MenuStore2=_interopRequireDefault(_MenuStore),RouteStore=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return r.routeConfig=e,r.routeHandler=new _routr2["default"](e),r.currentRoute=r.routeHandler.getRoute("/"),r.currentHash="",r}return _inherits(t,e),_createClass(t,[{key:"getSubPageById",value:function(e){return this.routeConfig[e].subPage}},{key:"getNameById",value:function(e){return this.routeConfig[e].name}},{key:"getCurrentRoute",value:function(){return this.currentRoute}},{key:"getAll",value:function(){return this.routeConfig}},{key:"onReceiveUpdatePath",value:function(e,t){this.currentRoute=this.routeHandler.getRoute(e),this.currentHash="undefined"!=typeof t?t.substring(1):"",this.emitChange()}},{key:"emitChange",value:function(){this.emit(_RouteConstants2["default"].ROUTE_EVENT)}},{key:"addChangeListener",value:function(e){this.on(_RouteConstants2["default"].ROUTE_EVENT,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(_RouteConstants2["default"].ROUTE_EVENT,e)}}]),t}(_events.EventEmitter),routeStore=new RouteStore(_RouteConfig2["default"]);_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_UPDATE_PATH:routeStore.onReceiveUpdatePath(e.pathName,e.hash),_MenuStore2["default"].onReceiveUpdatePath(e.pathName)}}),exports["default"]=routeStore;

/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(83),_classnames2=_interopRequireDefault(_classnames),_index=__webpack_require__(428),_index2=_interopRequireDefault(_index),GridCard=function(e){var t=e.id,a=e.title,r=e.brief,i=e.image,l=e.onPostGridClick;return _react2["default"].createElement("a",{className:"card",href:"/view_post_list/posts/"+t,onClick:l},_react2["default"].createElement("div",{className:_index2["default"].postListCardImg,style:{backgroundImage:"url("+i+")"}}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("div",{className:"header"},a),_react2["default"].createElement("div",{className:"meta"},r)))},MoreGridCard=function(e){var t=e.moreButtonLoading,a=e.onMorePostClick;return _react2["default"].createElement("a",{className:"card",onClick:a,style:{boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"center"}},_react2["default"].createElement("div",null,_react2["default"].createElement("div",{id:_index2["default"].postListLoadMoreBtn,className:(0,_classnames2["default"])("ui button",{loading:t})},"載入更多文章")))},PostGrid=function(e){var t=e.title,a=e.posts,r=e.onMorePostClick,i=e.moreButtonLoading,l=e.moreButton,n=void 0!==l&&l,d=e.onPostGridClick;return _react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement("div",{className:_index2["default"].postListTitle},t),_react2["default"].createElement("div",{className:"ui centered cards"},a.map(function(e){return _react2["default"].createElement(GridCard,{id:e.id,key:e.id,title:e.title,brief:e.brief,image:e.image,onPostGridClick:d})}),n?_react2["default"].createElement(MoreGridCard,{moreButtonLoading:i,onMorePostClick:r}):""))};exports["default"]=PostGrid;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}}(),_MenuConfig=__webpack_require__(613),_MenuConfig2=_interopRequireDefault(_MenuConfig),MenuStore=function(){function e(n){_classCallCheck(this,e),this.menuConfig=n}return _createClass(e,[{key:"getAll",value:function(){return this.menuConfig}},{key:"onReceiveUpdatePath",value:function(e){this.updatePath(e)}},{key:"updatePath",value:function(e){this.menuConfig.forEach(function(n){var t="";n.subPage.forEach(function(n){"undefined"!=typeof n.url&&n.url===e?(n.status=!0,t=n.showName):n.status=!1}),n.currentPage=t})}},{key:"getArticleSubPages",value:function(){var e=!0,n=!1,t=void 0;try{for(var u,r=this.menuConfig[Symbol.iterator]();!(e=(u=r.next()).done);e=!0){var a=u.value;if("文章分類"==a.showName)return a.subPage}}catch(o){n=!0,t=o}finally{try{!e&&r["return"]&&r["return"]()}finally{if(n)throw t}}}},{key:"getIndexAnchors",value:function(){var e=[];return this.menuConfig.forEach(function(n){"文章分類"==n.showName&&n.subPage.forEach(function(n){e.push(n.url.substring(2))})}),e}}]),e}(),menuStore=new MenuStore(_MenuConfig2["default"]);exports["default"]=menuStore;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,s){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?t:s}function _inherits(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(t,s):t.__proto__=s)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,s){for(var e=0;e<s.length;e++){var o=s[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(s,e,o){return e&&t(s.prototype,e),o&&t(s,o),s}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostConstants=__webpack_require__(232),_PostConstants2=_interopRequireDefault(_PostConstants),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(116),_tumblrPost2=_interopRequireDefault(_tumblrPost),PostListStore=function(t){function s(){_classCallCheck(this,s);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(s).call(this));return t.postList=_PostListConfig2["default"].listContainer,t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),_PostListConfig2["default"].categories.forEach(function(s){t.postList[s]={name:s,posts:[],parsedPostNum:0,totalPostNum:0}}),t.postList["new"]={name:"new",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t.postList.top={name:"top",posts:[_PostListConfig2["default"].postContainer]},t}return _inherits(s,t),_createClass(s,[{key:"getListContainer",value:function(t){return this.postList[t]}},{key:"getPostList",value:function(t){return this.postList[t].posts}},{key:"loadMorePosts",value:function(t,s){t in _PostListConfig2["default"].categoryMap?this.postList[t].parsedPostNum<this.postList[t].totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList[t].parsedPostNum,tag:_PostListConfig2["default"].categoryMap[t]},this.loadMorePostsCategory.bind(this)):"new"==t&&this.postList["new"].parsedPostNum<this.postList["new"].totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList[t].parsedPostNum,limit:s,type:"text"},this.loadMorePostsNew.bind(this))}},{key:"loadMorePostsCategory",value:function(t,s){var e=this;t?console.log(t.stack):!function(){var t=_tumblrPost2["default"].parsePosts(s);t.length>0&&(e.postList[t[0].category].parsedPostNum+=s.posts.length,e.postList[t[0].category].totalPostNum=s.total_posts,t.forEach(function(s){e.postList[t[0].category].posts.push(s)}),e.emitChange("category"))}()}},{key:"loadMorePostsNew",value:function(t,s){var e=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(s);o.length>0&&(this.postList["new"].parsedPostNum+=s.posts.length,this.postList["new"].totalPostNum=s.total_posts,o.forEach(function(t){e.postList["new"].posts.push(t)}),this.emitChange("new"))}}},{key:"onReceviceUpdatePostList",value:function(t,s){t in _PostListConfig2["default"].categoryMap?(this.postList[t].totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,tag:_PostListConfig2["default"].categoryMap[t]},this.updateListCategory.bind(this))):"new"==t?(this.postList["new"].totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,type:"text"},this.updateListNew.bind(this))):"top"==t&&this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,tag:_PostListConfig2["default"].tagMap.top},this.updateListTop.bind(this))}},{key:"updateListTop",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePostsNoValidation(s);e.length>0&&(this.postList.top.posts=e,this.emitChange("top"))}}},{key:"updateListNew",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePosts(s);e.length>0&&(this.postList["new"].parsedPostNum=s.posts.length,this.postList["new"].totalPostNum=s.total_posts,this.postList["new"].posts=e,this.emitChange("new"))}}},{key:"updateListCategory",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePosts(s);e.length>0&&(this.postList[e[0].category].parsedPostNum=s.posts.length,this.postList[e[0].category].totalPostNum=s.total_posts,this.postList[e[0].category].posts=e,this.emitChange("category"))}}},{key:"emitChange",value:function(t){switch(t){case"category":this.emit(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT);break;case"new":this.emit(_PostListConstants2["default"].POST_LIST_NEW_EVENT);break;case"top":this.emit(_PostListConstants2["default"].POST_LIST_TOP_EVENT)}}},{key:"addChangeListener",value:function(t,s){switch(t){case"category":this.on(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT,s);break;case"new":this.on(_PostListConstants2["default"].POST_LIST_NEW_EVENT,s);break;case"top":this.on(_PostListConstants2["default"].POST_LIST_TOP_EVENT,s)}}},{key:"removeChangeListener",value:function(t,s){switch(t){case"category":this.removeListener(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT,s);break;case"new":this.removeListener(_PostListConstants2["default"].POST_LIST_NEW_EVENT,s);break;case"top":this.removeListener(_PostListConstants2["default"].POST_LIST_TOP_EVENT,s)}}}]),s}(_events.EventEmitter),postListStore=new PostListStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_UPDATE:postListStore.onReceviceUpdatePostList(t.category,t.amount);break;case _RouteConstants2["default"].ROUTE_POST_LIST_PAGE:postListStore.onReceviceUpdatePostList(t.category,t.amount)}}),exports["default"]=postListStore;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toArray(t){return Array.isArray(t)?t:Array.from(t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),parsePostData=function(t){var r=t.id,o=t.title,a=parsePostImage(t.body),e=parsePostBody(t.body),i=parsePostCategory(t.tags),s=i.category,n=i.valid;return _extends({id:r,title:o,image:a,category:s},e,{valid:n})},parsePostBody=function(t){var r=t.split("<hr>"),o=_toArray(r),a=o[0],e=o.slice(1),i=_PostConfig2["default"].settingContainer;return e.length>0&&(t=e.join("<hr>"),a.match(/[^>]*[:：][^<]*/g).forEach(function(t){var r=t.split(/[:：]/),o=_toArray(r),a=o[0],e=o.slice(1);a in _PostConfig2["default"].settingAlias&&(i[_PostConfig2["default"].settingAlias[a]]=e.join("：").trim())})),i},parsePostImage=function(t){var r=t.match(/<img [^>]*\/>/g);if(r){var o=r[0].match(/http[^\"\'\s]*/);r=o?o[0]:"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg"}else r="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg";return r},parsePostCategory=function(t){var r=!0,o=!1,a=void 0;try{for(var e,i=t[Symbol.iterator]();!(r=(e=i.next()).done);r=!0){var s=e.value;if(s in _PostListConfig2["default"].categoryMapZh)return{category:_PostListConfig2["default"].categoryMapZh[s],valid:!0}}}catch(n){o=!0,a=n}finally{try{!r&&i["return"]&&i["return"]()}finally{if(o)throw a}}return{category:"",valid:!1}};exports["default"]={parsePosts:function(t){var r=[];return t.posts.forEach(function(t){var o=parsePostData(t);1==o.valid&&r.push(o)}),r},parsePostsNoValidation:function(t){var r=[];return t.posts.forEach(function(t){var o=parsePostData(t);r.push(o)}),r}};

/***/ },
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ function(module, exports) {

	'use strict';
	
	var baseUrl = 'https://api.tumblr.com/v2';
	
	function blogPath(blogName, path) {
	  var bn = blogName.indexOf('.') !== -1 ? blogName : blogName + '.tumblr.com';
	  return '/blog/' + bn + path;
	}
	
	function requestCallback(callback) {
	  if (!callback) return undefined;
	  return function (err, response, body) {
	    if (err) return callback(err);
	    if (response.statusCode >= 400) {
	      var errString = body.meta ? body.meta.msg : body.error;
	      return callback(new Error('API error: ' + response.statusCode + ' ' + errString));
	    }
	
	    if (body && body.response) {
	      return callback(null, body.response);
	    } else {
	      return callback(new Error('API error (malformed API response): ' + body));
	    }
	  };
	}
	
	function requestCallbackJSONP(callback) {
	  if (!callback) return undefined;
	  return function (err, body) {
	    if (!body.meta) return callback(body);
	    if (body.meta.status >= 400) {
	      var errString = body.meta.msg;
	      return callback(new Error('API error: ' + body.statusCode + ' ' + errString));
	    }
	
	    if (body && body.response) {
	      return callback(null, body.response);
	    } else {
	      return callback(new Error('API error (malformed API response): ' + body));
	    }
	  };
	}
	
	function isFunction(value) {
	  return Object.prototype.toString.call(value) == '[object Function]';
	}
	
	function requireValidation(options, choices) {
	  var count = 0;
	  for (var i = 0; i < choices.length; i++) {
	    if (options[choices[i]]) {
	      count += 1;
	    }
	  }
	  if (choices.length === 1) {
	    if (count === 0) {
	      throw new Error('Missing required field: "' + choices[0] + '"');
	    }
	  } else if (choices.length > 1) {
	    if (count === 0) {
	      throw new Error('Missing one of: ' + choices.join(','));
	    }
	    if (count > 1) {
	      throw new Error('Can only use one of: ' + choices.join(','));
	    }
	  }
	}
	
	
	module.exports = {
	  baseUrl: baseUrl,
	  blogPath: blogPath,
	  requestCallback: requestCallback,
	  requestCallbackJSONP: requestCallbackJSONP,
	  isFunction: isFunction,
	  requireValidation: requireValidation
	};


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_NationConstants=__webpack_require__(231),_NationConstants2=_interopRequireDefault(_NationConstants),NationAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updateNation",value:function(t){_AppDispatcher2["default"].dispatch({actionType:_NationConstants2["default"].NATION_UPDATE,nationName:t})}},{key:"loadNationData",value:function(){_AppDispatcher2["default"].dispatch({actionType:_NationConstants2["default"].NATION_LOAD_DATA})}}]),t}();exports["default"]=new NationAction;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),PostListAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updatePostList",value:function(t,e){_AppDispatcher2["default"].dispatch({actionType:_PostListConstants2["default"].POST_LIST_UPDATE,category:t,amount:e})}},{key:"updateAllPostList",value:function(t){var e=this;_PostListConfig2["default"].categories.forEach(function(s){e.updatePostList(s,t)})}}]),t}();exports["default"]=new PostListAction;

/***/ },
/* 230 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={AUTHOR_LOAD_DATA:20,AUTHORS_EVENT:"AUTHORS_EVENT"};

/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={NATION_UPDATE:10,NATION_LOAD_DATA:11,NATION_SHOW_EVENT:"NATION_SHOW_EVENT",NATION_AREA_EVENT:"NATION_AREA_EVENT",NATION_URL:"/data/nations.json"};

/***/ },
/* 232 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={POST_EVENT:"POST_EVENT"};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_IndexWideBlock=__webpack_require__(602),_IndexWideBlock2=_interopRequireDefault(_IndexWideBlock),_IndexCategoryBlock=__webpack_require__(601),_IndexCategoryBlock2=_interopRequireDefault(_IndexCategoryBlock),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_MenuStore=__webpack_require__(114),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_elevator=__webpack_require__(238),_elevator2=_interopRequireDefault(_elevator),_index=__webpack_require__(432),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"IndexPage",IndexDispatch:"",getInitialState:function(){return{targetSection:""}},componentDidMount:function(){this.IndexDispatch=_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_HASHTAG:}}),$("#landing-img").fadeIn(2200),$("#menu-logo").hide(),$("#index-menu-anchor").sticky({offset:0,onStick:function(){$("#index-main-content").css("margin-top","40px"),$("#menu-logo").fadeIn(),$("#index-menu-anchor").css("z-index",999)},onUnstick:function(){$("#index-main-content").css("margin-top","0px"),$("#menu-logo").hide()}}),$("#category-menu-anchor").sticky({offset:40,onStick:function(){$("#category-block-divider").css("margin-top","40px")},onUnstick:function(){$("#category-block-divider").css("margin-top","0px")}});new _elevator2["default"]({element:document.querySelector("#btn-article"),targetElement:document.querySelector("#category-block-divider"),duration:1500})},componentWillUnmount:function(){_AppDispatcher2["default"].unregister(this.IndexDispatch),$("#menu-logo").show(),$("#index-menu-anchor").sticky({offset:0,onStick:function(){},onUnstick:function(){}})},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"ui basic segment"},_react2["default"].createElement("div",{className:_index2["default"].indexLanding},_react2["default"].createElement("img",{id:"landing-img",src:"/images/landing.png",style:{width:"35%",display:"none"}})),_react2["default"].createElement("div",{className:"ui sticky",id:"index-menu-anchor"},_react2["default"].createElement(_IndexMenu2["default"],null)),_react2["default"].createElement("div",{id:"index-main-content",style:{backgroundColor:"white"}},_react2["default"].createElement("div",null,_react2["default"].createElement(_IndexWideBlock2["default"],{type:"new"}),_react2["default"].createElement(_IndexWideBlock2["default"],{type:"top"}),_react2["default"].createElement("div",{className:"ui basic segment"},_react2["default"].createElement("div",{className:"ui sticky",id:"category-menu-anchor"},_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{id:"category-block-divider",style:{height:"15px"}}),_react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement(_IndexCategoryBlock2["default"],null))))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"})))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_MapStore=__webpack_require__(236),_MapStore2=_interopRequireDefault(_MapStore),_NationsStore=__webpack_require__(237),_NationsStore2=_interopRequireDefault(_NationsStore),_NationAction=__webpack_require__(228),_NationAction2=_interopRequireDefault(_NationAction),_d=__webpack_require__(143),_d2=_interopRequireDefault(_d),_index=__webpack_require__(434),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34),CONFIG_SCALE={origin:{scale:380,rotate:[-20,0]},CentralAfrica:{scale:1e3,rotate:[-20,-5]},EastAfrica:{scale:800,rotate:[-40,0]},NorthAfrica:{scale:600,rotate:[-13,-20]},SouthernAfrica:{scale:1e3,rotate:[-28,20]},WestAfrica:{scale:780,rotate:[4,-5]}};exports["default"]=_react2["default"].createClass({displayName:"ViewAfricaNationsPage",getInitialState:function(){return{map:_MapStore2["default"].getAll(),nations:_NationsStore2["default"].getAll(),type:"origin"}},componentDidMount:function(){_NationsStore2["default"].addAreaListener(this._onChange),_MapStore2["default"].addChangeListener(this._onChange),$("#category-menu").hide()},componentWillUnmount:function(){_NationsStore2["default"].removeAreaListener(this._onChange),_MapStore2["default"].removeChangeListener(this._onChange)},_onMouseEnter:function(e){var t=e.currentTarget,a=$(t).attr("data-nation");a in this.refs&&(_reactDom2["default"].findDOMNode(this.refs[a]).style.fill="#F88D2F")},_onMouseLeave:function(e){var t=e.currentTarget,a=$(t).attr("data-nation");a in this.refs&&(_reactDom2["default"].findDOMNode(this.refs[a]).style.fill="#2E8398")},renderArea:function(e){var t=this;return _react2["default"].createElement("div",{className:"content"},_react2["default"].createElement(_reactSemantify.List,{className:"animated small link"},Object.keys(e).map(function(a){var r=e[a],n=r.country,i=r.flag;if(n)return i=""===i?"Kenya_flag.png":i,_react2["default"].createElement("div",{className:"item","data-nation":a,onMouseEnter:t._onMouseEnter,onMouseLeave:t._onMouseLeave},_react2["default"].createElement(_reactSemantify.Image,{className:"avatar",src:"/images/nations/"+i}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("a",{className:"header","data-nation":a,onClick:t._onClick},n)))})))},render:function(){var e=this.state,t=e.nations,a=e.type,r=this.state.map,n=r.features,i=r.area;return t.forEach(function(e){for(var t in i)e.iso in i[t]&&(i[t][e.iso]=e)}),_react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement("div",{className:"ui stackable four column grid"},_react2["default"].createElement("div",{className:"three wide column"}),_react2["default"].createElement("div",{className:"six wide column"},this._drawMap(n,a)),_react2["default"].createElement("div",{className:"five wide column"},_react2["default"].createElement(_reactSemantify.Accordion,{className:_index2["default"].contentArea,init:!0},_react2["default"].createElement("div",{className:"title",onClick:this._onCentralAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"中非"),this.renderArea(i.CentralAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onEastAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"東非"),this.renderArea(i.EastAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onNorthAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"北非"),this.renderArea(i.NorthAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onSouthernAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"南非"),this.renderArea(i.SouthernAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onWestAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"西非"),this.renderArea(i.WestAfrica))),_react2["default"].createElement("div",{className:"two wide column"}))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))},_onChange:function(){this.setState({map:_MapStore2["default"].getAll(),nations:_NationsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget;console.log($(t).attr("data-nation")),_NationAction2["default"].updateNation($(t).attr("data-nation"))},_onCentralAfricaClick:function(){var e=this.state.type;this.setState({type:"CentralAfrica"===e?"origin":"CentralAfrica"})},_onEastAfricaClick:function(){var e=this.state.type;this.setState({type:"EastAfrica"===e?"origin":"EastAfrica"})},_onNorthAfricaClick:function(){var e=this.state.type;this.setState({type:"NorthAfrica"===e?"origin":"NorthAfrica"})},_onSouthernAfricaClick:function(){var e=this.state.type;this.setState({type:"SouthernAfrica"===e?"origin":"SouthernAfrica"})},_onWestAfricaClick:function(){var e=this.state.type;this.setState({type:"WestAfrica"===e?"origin":"WestAfrica"})},_drawMap:function(e,t){var a=this,r=600,n=600,i=CONFIG_SCALE[t],o=_d2["default"].geo.equirectangular().scale(i.scale).translate([r/2,n/2]).rotate(i.rotate),c=_d2["default"].geo.path().projection(o);return _react2["default"].createElement("svg",{className:_index2["default"].mapAfrica,viewBox:"0 0 550 600"},e.map(function(e){return _react2["default"].createElement("path",{className:_index2["default"].land,d:c(e),"data-nation":e.properties.ISO_A3,onMouseEnter:a._onMouseEnter,onMouseLeave:a._onMouseLeave,ref:e.properties.ISO_A3,onClick:a._onClick})}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_AuthorConstants=__webpack_require__(230),_AuthorConstants2=_interopRequireDefault(_AuthorConstants),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),AuthorsStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.authors=[],t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t}return _inherits(e,t),_createClass(e,[{key:"getAll",value:function(){return this.authors}},{key:"onReceviceUpdateAuthors",value:function(){var t=_TumblrConfig2["default"].author.tag;this.client.posts(_TumblrConfig2["default"].blogName,{tag:t,filter:"text"},this.parseAuthorData.bind(this))}},{key:"parseAuthorData",value:function(t,e){t&&console.log(t.stack);var r=_TumblrConfig2["default"].author.picWidth;this.authors=e.posts.map(function(t){var e=t.caption.split("\n\n"),n=t.photos[0].alt_sizes.filter(function(t){return t.width<r});return{id:t.id,name:e[0],from:e[1],description:e[2],photoUrl:n.length?n[0].url:""}}),this.emitChange()}},{key:"emitChange",value:function(){this.emit(_AuthorConstants2["default"].AUTHORS_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_AuthorConstants2["default"].AUTHORS_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_AuthorConstants2["default"].AUTHORS_EVENT,t)}}]),e}(_events.EventEmitter),authorsStore=new AuthorsStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _RouteConstants2["default"].ROUTE_AUTH_PAGE:authorsStore.onReceviceUpdateAuthors();break;case _AuthorConstants2["default"].AUTHOR_LOAD_DATA:authorsStore.onReceviceUpdateAuthors()}}),exports["default"]=authorsStore;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_events=__webpack_require__(53),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),_MapConstants=__webpack_require__(616),_MapConstants2=_interopRequireDefault(_MapConstants),_MapConfig=__webpack_require__(611),_MapConfig2=_interopRequireDefault(_MapConfig),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),MapStore=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.geoJson={features:[],area:{CentralAfrica:{},EastAfrica:{},NorthAfrica:{},SouthernAfrica:{},WestAfrica:{}}},e}return _inherits(t,e),_createClass(t,[{key:"getAll",value:function(){return this.geoJson}},{key:"getNationMapByISO",value:function(e){var t={};return this.geoJson.features.forEach(function(n){n.properties.ISO_A3===e&&(t=n)}),t}},{key:"onReceiveUpdateMaps",value:function(){this.loadMapData()}},{key:"loadMapData",value:function(){var e=this;_superagent2["default"].get(_MapConfig2["default"].contryUrl).end(function(t,n){t?console.log("Cannot get Africa geoJson"):e.geoJson.features=n.body.features,_superagent2["default"].get(_MapConfig2["default"].areaUrl).end(function(t,n){t?console.log("Cannot Get Africa area"):e.geoJson.area=n.body,e.emitChange()})})}},{key:"emitChange",value:function(){this.emit(_MapConstants2["default"].MAP_EVENT)}},{key:"addChangeListener",value:function(e){this.on(_MapConstants2["default"].MAP_EVENT,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(_MapConstants2["default"].MAP_EVENT,e)}}]),t}(_events.EventEmitter),mapStore=new MapStore;_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_MAP_PAGE:mapStore.onReceiveUpdateMaps()}}),exports["default"]=mapStore;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),_events=__webpack_require__(53),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_NationConstants=__webpack_require__(231),_NationConstants2=_interopRequireDefault(_NationConstants),NationsStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.nations=[],t.defaultNation={iso:"",country:"",introduction:"",symbol:"",currency:"",language:"",flag:"",emblem:"",headOfState:"",politics:"",atmosphere:"",geography:"",capital:"",population:"",faith:[],economy:[]},t.currentNation=t.defaultNation,t}return _inherits(e,t),_createClass(e,[{key:"getAll",value:function(){return this.nations}},{key:"getNationByName",value:function(t){return this.nations}},{key:"getCurrentNation",value:function(){return this.currentNation}},{key:"onReceiveUpdateNations",value:function(t){var e=this;this.currentNation=null,this.nations.forEach(function(n){n.iso===t&&(e.currentNation=n)}),null===this.currentNation&&(this.currentNation=this.defaultNation,this.currentNation.iso=t,this.currentNation.country=t),this.emitShow()}},{key:"onReceiveLoadNationData",value:function(){var t=this;_superagent2["default"].get(_NationConstants2["default"].NATION_URL).end(function(e,n){e?console.log("Cannot get Nation json"):t.nations=n.body})}},{key:"emitShow",value:function(){this.emit(_NationConstants2["default"].NATION_SHOW_EVENT)}},{key:"addShowListener",value:function(t){this.on(_NationConstants2["default"].NATION_SHOW_EVENT,t)}},{key:"removeShowListener",value:function(t){this.removeListener(_NationConstants2["default"].NATION_SHOW_EVENT,t)}},{key:"addAreaListener",value:function(t){this.on(_NationConstants2["default"].NATION_AREA_EVENT,t)}},{key:"removeAreaListener",value:function(t){this.removeListener(_NationConstants2["default"].NATION_AREA_EVENT,t)}}]),e}(_events.EventEmitter),nationsStore=new NationsStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _NationConstants2["default"].NATION_UPDATE:nationsStore.onReceiveUpdateNations(t.nationName);break;case _NationConstants2["default"].NATION_LOAD_DATA:nationsStore.onReceiveLoadNationData()}}),exports["default"]=nationsStore;

/***/ },
/* 238 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Elevator=function(n){function e(n,e,t,o){return n/=o/2,n<1?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),t<b?w=requestAnimationFrame(l):a()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function r(){C&&(y=o(C))}function a(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),A&&A()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),r(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){r(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){v=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(A=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,A,v=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||v.scrollTop,r(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)};exports["default"]=Elevator;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.decode = exports.parse = __webpack_require__(631);
	exports.encode = exports.stringify = __webpack_require__(632);


/***/ },
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"index__footer___1Ustb","footerBox":"index__footerBox___1JaKv","footerBoxInfo":"index__footerBoxInfo___1ISkD","footerIconGroups":"index__footerIconGroups___kqVbW","footerIcon":"index__footerIcon___1zmWe","footerIconMail":"index__footerIconMail___23Nsc","footerIconTumblr":"index__footerIconTumblr___3GgFC","footerIconFacebook":"index__footerIconFacebook___O-oEh","footerEmailBtn":"index__footerEmailBtn___1rFB3"};

/***/ },
/* 425 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"categoryBox":"index__categoryBox___2A0dk","categoryBoxLeftUp":"index__categoryBoxLeftUp___IN6IR","categoryBoxLeftBottom":"index__categoryBoxLeftBottom___z_21L","categoryBoxRightUp":"index__categoryBoxRightUp___8nfzQ","categoryBoxRightBottom":"index__categoryBoxRightBottom___39OUH","categoryBoxCenterUp":"index__categoryBoxCenterUp___1amEH","categoryBoxCenterBottom":"index__categoryBoxCenterBottom___2zy9Y","categoryBoxCategory":"index__categoryBoxCategory___3wZy7","categoryBoxTitle":"index__categoryBoxTitle___27ci5","categoryBoxMore":"index__categoryBoxMore___yEOFa","categoryBoxMoreTitle":"index__categoryBoxMoreTitle___2uoU7"};

/***/ },
/* 426 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"indexMenu":"index__indexMenu___33OqS"};

/***/ },
/* 427 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"indexWide":"index__indexWide___28Hwb","indexWideBoxBefore":"index__indexWideBoxBefore___1rncr","indexWideBox":"index__indexWideBox___gTB5u","indexWideType":"index__indexWideType___KU7Bm","indexWideTitle":"index__indexWideTitle___2Mwho"};

/***/ },
/* 428 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"postListTitle":"index__postListTitle___3TQaW","postListCardImg":"index__postListCardImg___Dx-Ha","postListLoadMoreBtn":"index__postListLoadMoreBtn___4B0QD"};

/***/ },
/* 429 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"block":"index__block___3Z4ZF"};

/***/ },
/* 430 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"storyButton":"index__storyButton___2fRbd","storySection":"index__storySection___16BsH","index":"index__index___3WqtC","wowFunc":"index__wowFunc___3eypG","goal":"index__goal___MgvAM","title":"index__title___3mYAJ","content":"index__content___1Ybz-","informationBefore":"index__informationBefore___17LWQ","informationAfter":"index__informationAfter___1Xzqy","member":"index__member___iGdgN","partnerButton":"index__partnerButton___nC2AT","videoContainer":"index__videoContainer___3Qch_","video":"index__video___1UOtb","headerSection":"index__headerSection___1bwDe","headerDivider":"index__headerDivider___26EwH","headerButton":"index__headerButton___2uBDk","aboutButton":"index__aboutButton___18jad","hover":"index__hover___3d_Oa"};

/***/ },
/* 431 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contactUsBox":"index__contactUsBox___YDqRT","contactUsBoxTitle":"index__contactUsBoxTitle___rQcJY","contactUsBoxInner":"index__contactUsBoxInner___3FM1J","contactUsBoxContent":"index__contactUsBoxContent___29pnq","contactForm":"index__contactForm___cdu5G","submitBtn":"index__submitBtn___2aT6l"};

/***/ },
/* 432 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"indexLanding":"index__indexLanding___-Dch2"};

/***/ },
/* 433 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ugandaShowroom":"index__ugandaShowroom___3bp3r","showroomPosition":"index__showroomPosition___2TcWA","showroomImg":"index__showroomImg___3Qn7W","showroomAnima5":"index__showroomAnima5___1Rvqa","backimgAnimation-5":"index__backimgAnimation-5___3jlU1","showroomAnima7":"index__showroomAnima7___2r0QX","backimgAnimation-7":"index__backimgAnimation-7___AG9VX","showrommTitle":"index__showrommTitle___2FcJw"};

/***/ },
/* 434 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contentArea":"index__contentArea___3uYc0","land":"index__land___1e4bi","mapAfrica":"index__mapAfrica___3rXHE"};

/***/ },
/* 435 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"postImage":"index__postImage___2cXsY","inner":"index__inner___2eJFc","innerTitle":"index__innerTitle___1qY2L","containerPost":"index__containerPost___2Z4Q0","containerPostAuthor":"index__containerPostAuthor___3BYvj","sectionPostAuthor":"index__sectionPostAuthor___2vwA_","antiVeryPadded":"index__antiVeryPadded___1mFqx"};

/***/ },
/* 436 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 437 */,
/* 438 */,
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui breadcrumb';
	var componentName = 'Breadcrumb';
	
	var Breadcrumb = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Breadcrumb;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui form';
	var componentName = 'Form';
	
	var Form = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Form;

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui grid';
	var componentName = 'Grid';
	
	var Grid = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Grid;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui menu';
	var componentName = 'Menu';
	
	var Menu = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Menu;

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui message';
	var componentName = 'Message';
	
	var Message = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Message;

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui table';
	var componentName = 'Table';
	
	var Basic = function Basic(_ref) {
	  var children = _ref.children;
	
	  var other = _objectWithoutProperties(_ref, ['children']);
	
	  return _react2.default.createElement(
	    'table',
	    other,
	    children
	  );
	};
	
	var Table = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Table;

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'column';
	var componentName = 'Column';
	
	var Column = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Column;

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['active'];
	var defaultClassName = 'content';
	var componentName = 'Content';
	
	var Content = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Content;

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'field';
	var componentName = 'Field';
	
	var Field = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Field;

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'fields';
	var componentName = 'Fields';
	
	var Fields = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Fields;

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'row';
	var componentName = 'Row';
	
	var Row = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Row;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _unit = __webpack_require__(84);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'section';
	var componentName = 'Section';
	
	var Section = new _filter2.default(_unit2.default).typeFilter().colorFilter().classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Section;

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'text';
	var componentName = 'Text';
	
	var Text = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Text;

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['active'];
	var defaultClassName = 'title';
	var componentName = 'Title';
	
	var Title = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Title;

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _unit = __webpack_require__(84);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled', 'active', 'loading'];
	var defaultClassName = 'ui button';
	var componentName = 'Button';
	
	var Button = new _filter2.default(_unit2.default).typeFilter().colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Button;

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui container';
	var componentName = 'Container';
	
	var Container = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Container;

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui divider';
	var componentName = 'Divider';
	
	var Divider = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Divider;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'flag';
	var componentName = 'Flag';
	
	var Basic = function Basic(props) {
	  return _react2.default.createElement('i', props);
	};
	
	var Flag = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Flag;

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _unit = __webpack_require__(84);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled'];
	var defaultClassName = 'ui header';
	var componentName = 'Header';
	
	var Header = new _filter2.default(_unit2.default).typeFilter().colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Header;

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled', 'loading'];
	var defaultClassName = 'icon';
	var componentName = 'Icon';
	
	var Basic = function Basic(props) {
	  return _react2.default.createElement('i', props);
	};
	
	var Icon = new _filter2.default(Basic).colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Icon;

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled'];
	var defaultClassName = 'ui image';
	var componentName = 'Image';
	
	var Basic = function Basic(props) {
	  return _react2.default.createElement('img', props);
	};
	
	var Image = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Image;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['loading', 'focus', 'error'];
	var defaultClassName = 'ui input';
	var componentName = 'Input';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var placeholder = _props.placeholder;
	    var type = _props.type;
	
	    var other = _objectWithoutProperties(_props, ['children', 'placeholder', 'type']);
	
	    if (typeof children != 'undefined') {
	      return _react2.default.createElement(
	        'div',
	        other,
	        children
	      );
	    } else {
	      return _react2.default.createElement(
	        'div',
	        other,
	        _react2.default.createElement('input', {
	          placeholder: placeholder,
	          type: type })
	      );
	    }
	  }
	});
	
	var Input = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Input;

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _unit = __webpack_require__(84);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui label';
	var componentName = 'Label';
	
	var Label = new _filter2.default(_unit2.default).typeFilter().colorFilter().classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Label;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui list';
	var componentName = 'List';
	
	var List = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = List;

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled', 'active'];
	var defaultClassName = 'ui loader';
	var componentName = 'Loader';
	
	var Loader = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Loader;

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui rail';
	var componentName = 'Rail';
	
	var Rail = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Rail;

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled'];
	var defaultClassName = 'ui reveal';
	var componentName = 'Reveal';
	
	var Reveal = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Reveal;

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['disabled', 'loading'];
	var defaultClassName = 'ui segment';
	var componentName = 'Segment';
	
	var Segment = new _filter2.default(_div2.default).colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Segment;

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stateArray = ['active', 'completed', 'disabled'];
	var defaultClassName = 'step';
	var componentName = 'Step';
	
	var Step = new _filter2.default(_div2.default).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Step;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui steps';
	var componentName = 'Steps';
	
	var Steps = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Steps;

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (defaultClassName, ComposeComponent) {
	
	  return function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class() {
	      _classCallCheck(this, _class);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var _props$className = _props.className;
	        var className = _props$className === undefined ? '' : _props$className;
	        var children = _props.children;
	
	        var other = _objectWithoutProperties(_props, ['className', 'children']);
	
	        className = (className + ' ' + defaultClassName).trim();
	
	        return _react2.default.createElement(
	          ComposeComponent,
	          _extends({ className: className }, other),
	          children
	        );
	      }
	    }]);
	
	    return _class;
	  }(_react2.default.Component);
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	;

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (ComposeComponent) {
	  var HigherOrderComponent = function (_React$Component) {
	    _inherits(HigherOrderComponent, _React$Component);
	
	    function HigherOrderComponent() {
	      _classCallCheck(this, HigherOrderComponent);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(HigherOrderComponent).apply(this, arguments));
	    }
	
	    _createClass(HigherOrderComponent, [{
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var _props$className = _props.className;
	        var className = _props$className === undefined ? '' : _props$className;
	        var children = _props.children;
	        var _props$color = _props.color;
	        var color = _props$color === undefined ? '' : _props$color;
	
	        var other = _objectWithoutProperties(_props, ['className', 'children', 'color']);
	
	        if (colorArray.indexOf(color) !== -1) {
	          className = (className + ' ' + color).trim();
	        }
	
	        return _react2.default.createElement(
	          ComposeComponent,
	          _extends({ className: className }, other),
	          children
	        );
	      }
	    }]);
	
	    return HigherOrderComponent;
	  }(_react2.default.Component);
	
	  HigherOrderComponent.propTypes = {
	    color: _react2.default.PropTypes.oneOf(colorArray)
	  };
	
	  return HigherOrderComponent;
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var colorArray = ['black', 'yellow', 'green', 'blue', 'orange', 'purple', 'red', 'teal'];

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (componentName, ComposeComponent) {
	  var _class, _temp;
	
	  return _temp = _class = function (_React$Component) {
	    _inherits(_class, _React$Component);
	
	    function _class() {
	      _classCallCheck(this, _class);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	    }
	
	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var children = _props.children;
	
	        var other = _objectWithoutProperties(_props, ['children']);
	
	        return _react2.default.createElement(
	          ComposeComponent,
	          other,
	          children
	        );
	      }
	    }]);
	
	    return _class;
	  }(_react2.default.Component), _class.displayName = componentName, _temp;
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	;

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (stateArray, ComposeComponent) {
	  var HigherOrderComponent = function (_React$Component) {
	    _inherits(HigherOrderComponent, _React$Component);
	
	    function HigherOrderComponent() {
	      _classCallCheck(this, HigherOrderComponent);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(HigherOrderComponent).apply(this, arguments));
	    }
	
	    _createClass(HigherOrderComponent, [{
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var _props$className = _props.className;
	        var className = _props$className === undefined ? '' : _props$className;
	        var children = _props.children;
	
	        var other = _objectWithoutProperties(_props, ['className', 'children']);
	
	        stateArray.forEach(function (key) {
	          if (key in other) {
	
	            if (other[key]) {
	              if (key in keyMap) {
	                className = (className + ' ' + keyMap[key]).trim();
	              } else {
	                className = (className + ' ' + key).trim();
	              }
	            }
	
	            delete other[key];
	          }
	        });
	
	        return _react2.default.createElement(
	          ComposeComponent,
	          _extends({ className: className }, other),
	          children
	        );
	      }
	    }]);
	
	    return HigherOrderComponent;
	  }(_react2.default.Component);
	
	  var propTypes = {};
	
	  stateArray.forEach(function (key) {
	    return propTypes[key] = _react2.default.PropTypes.bool;
	  });
	
	  HigherOrderComponent.propTypes = propTypes;
	
	  return HigherOrderComponent;
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var keyMap = {
	  'readOnly': 'read-only'
	};

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function (ComposeComponent) {
	  var HigherOrderComponent = function (_React$Component) {
	    _inherits(HigherOrderComponent, _React$Component);
	
	    function HigherOrderComponent() {
	      _classCallCheck(this, HigherOrderComponent);
	
	      return _possibleConstructorReturn(this, Object.getPrototypeOf(HigherOrderComponent).apply(this, arguments));
	    }
	
	    _createClass(HigherOrderComponent, [{
	      key: 'render',
	      value: function render() {
	        var _props = this.props;
	        var children = _props.children;
	
	        var other = _objectWithoutProperties(_props, ['children']);
	
	        return _react2.default.createElement(
	          ComposeComponent,
	          other,
	          children
	        );
	      }
	    }]);
	
	    return HigherOrderComponent;
	  }(_react2.default.Component);
	
	  HigherOrderComponent.propTypes = {
	    type: _react2.default.PropTypes.oneOf(typeArray)
	  };
	
	  return HigherOrderComponent;
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var typeArray = ['div', 'link', 'icon'];

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui accordion';
	var componentName = 'Accordion';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'accordion' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.accordion).accordion();
	    } else {
	      $(this.refs.accordion).accordion(init);
	    }
	  }
	});
	
	var Accordion = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Accordion;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['disabled', 'readOnly'];
	var defaultClassName = 'ui checkbox';
	var componentName = 'Checkbox';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'checkbox' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.checkbox).checkbox();
	    } else {
	      $(this.refs.checkbox).checkbox(init);
	    }
	  }
	});
	
	var Checkbox = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Checkbox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['disabled', 'active'];
	var defaultClassName = 'ui dimmer';
	var componentName = 'Dimmer';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'dimmer' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.dimmer).dimmer();
	    } else {
	      $(this.refs.dimmer).dimmer(init);
	    }
	  }
	});
	
	var Dimmer = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Dimmer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['error', 'disabled', 'active'];
	var defaultClassName = 'ui dropdown';
	var componentName = 'Dropdown';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['className', 'children']);
	
	    if (className.indexOf('active') >= 0) {
	      className += ' simple';
	    }
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className, ref: 'dropdown' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.dropdown).dropdown();
	    } else {
	      $(this.refs.dropdown).dropdown(init);
	    }
	  }
	});
	
	var Dropdown = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Dropdown;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui embed';
	var componentName = 'Embed';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var placeholder = _props.placeholder;
	    var source = _props.source;
	    var sourceId = _props.sourceId;
	    var url = _props.url;
	    var icon = _props.icon;
	
	    var other = _objectWithoutProperties(_props, ['children', 'placeholder', 'source', 'sourceId', 'url', 'icon']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        'data-source': source,
	        'data-id': sourceId,
	        'data-placeholder': placeholder,
	        'data-url': url,
	        'data-icon': icon,
	        ref: 'embed' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.embed).embed();
	    } else {
	      $(this.refs.embed).embed(init);
	    }
	  }
	});
	
	var Embed = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Embed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['active'];
	var defaultClassName = 'ui modal';
	var componentName = 'Modal';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'modal' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.modal).modal();
	    } else {
	      $(this.refs.modal).modal(init);
	    }
	  }
	});
	
	var Modal = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Modal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui popup';
	var componentName = 'Popup';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      other,
	      children
	    );
	  }
	});
	
	var Popup = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Popup;

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['active', 'success', 'warning', 'error', 'disabled'];
	var defaultClassName = 'ui progress';
	var componentName = 'Progress';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var percent = _props.percent;
	    var value = _props.value;
	    var total = _props.total;
	
	    var other = _objectWithoutProperties(_props, ['children', 'percent', 'value', 'total']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        'data-percent': percent,
	        'data-value': value,
	        'data-total': total,
	        ref: 'progress' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.progress).progress();
	    } else {
	      $(this.refs.progress).progress(init);
	    }
	  }
	});
	
	var Progress = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Progress;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui rating';
	var componentName = 'Rating';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var rating = _props.rating;
	    var maxRating = _props.maxRating;
	
	    var other = _objectWithoutProperties(_props, ['children', 'rating', 'maxRating']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        'data-rating': rating,
	        'data-max-rating': maxRating,
	        ref: 'rating' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.rating).rating();
	    } else {
	      $(this.refs.rating).rating(init);
	    }
	  }
	});
	
	var Rating = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Rating;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['loading'];
	var defaultClassName = 'ui search';
	var componentName = 'Search';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'search' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.search).search();
	    } else {
	      $(this.refs.search).search(init);
	    }
	  }
	});
	
	var Search = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Search;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui shape';
	var componentName = 'Shape';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'shape' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.shape).shape();
	    } else {
	      $(this.refs.shape).shape(init);
	    }
	  }
	});
	
	var Shap = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Shap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui sidebar';
	var componentName = 'Sidebar';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'sidebar' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.sidebar).sidebar();
	    } else {
	      $(this.refs.sidebar).sidebar(init);
	    }
	  }
	});
	
	var Sidebar = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Sidebar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui sticky';
	var componentName = 'Sticky';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	
	    var other = _objectWithoutProperties(_props, ['children']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { ref: 'sticky' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.sticky).sticky();
	    } else {
	      $(this.refs.sticky).sticky(init);
	    }
	  }
	});
	
	var Sticky = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Sticky;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var stateArray = ['active', 'loading'];
	var defaultClassName = 'ui tab';
	var componentName = 'Tab';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var tab = _props.tab;
	
	    var other = _objectWithoutProperties(_props, ['children', 'tab']);
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        'data-tab': tab,
	        ref: 'tab' }),
	      children
	    );
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _props$init = this.props.init;
	    var init = _props$init === undefined ? false : _props$init;
	
	
	    if (init === false) {
	      return;
	    }
	
	    if (init === true) {
	      $(this.refs.tab).tab();
	    } else {
	      $(this.refs.tab).tab(init);
	    }
	  }
	});
	
	var Tab = new _filter2.default(Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Tab;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui ad';
	var componentName = 'Ad';
	
	var Ad = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Ad;

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui card';
	var componentName = 'Card';
	
	var Card = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Card;

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'comment';
	var componentName = 'Comment';
	
	var Comment = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Comment;

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui comments';
	var componentName = 'Comments';
	
	var Comments = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Comments;

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui feed';
	var componentName = 'Feed';
	
	var Feed = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Feed;

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _unit = __webpack_require__(84);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'item';
	var componentName = 'Item';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var value = _props.value;
	
	    var other = _objectWithoutProperties(_props, ['children', 'value']);
	
	    return _react2.default.createElement(
	      _unit2.default,
	      _extends({}, other, {
	        'data-value': value }),
	      children
	    );
	  }
	});
	
	var Item = new _filter2.default(Basic).typeFilter().classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Item;

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var defaultClassName = 'ui items';
	var componentName = 'Items';
	
	var Basic = _react2.default.createClass({
	  displayName: 'Basic',
	
	
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var _props$type = _props.type;
	    var type = _props$type === undefined ? '' : _props$type;
	
	    var other = _objectWithoutProperties(_props, ['className', 'children', 'type']);
	
	    if (type === 'link') {
	      className += ' link';
	    }
	
	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { className: className }),
	      children
	    );
	  }
	});
	
	var Items = new _filter2.default(Basic).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Items;

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _filter = __webpack_require__(3);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _div = __webpack_require__(10);
	
	var _div2 = _interopRequireDefault(_div);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultClassName = 'ui statistic';
	var componentName = 'Statistic';
	
	var Statistic = new _filter2.default(_div2.default).classGenerator(defaultClassName).getComposeComponent(componentName);
	
	exports.default = Statistic;

/***/ },
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */
/***/ function(module, exports, __webpack_require__) {

	
	var qs           = __webpack_require__(239);
	var jsonp        = __webpack_require__(591);
	
	var helpers      = __webpack_require__(227);
	var TumblrClient = __webpack_require__(589);
	
	TumblrClient.prototype._get = function(path, params, callback, addApiKey) {
	    params = params || {};
	    if (addApiKey) {
	      params.api_key = this.credentials.consumer_key;
	    }
	
	    jsonp(
	        helpers.baseUrl + path + '?' + qs.stringify(params),
	        helpers.requestCallbackJSONP(callback)
	    );
	};
	
	module.exports = TumblrClient;

/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	var TumblrClient = __webpack_require__(587);
	
	module.exports = {
	
	  Client: TumblrClient,
	
	  createClient: function(credentials) {
	    return new TumblrClient(credentials);
	  },
	
	  request: function(r) {
	    TumblrClient.prototype.request = r;
	  }
	
	};


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	var fs = __webpack_require__(629);
	var qs = __webpack_require__(239);
	
	var helpers = __webpack_require__(227);
	
	var calls = {
	  postCreation: function (type, requireOptions, acceptsData) {
	    return function (blogName, options, callback) {
	      helpers.requireValidation(options, requireOptions);
	      options.type = type;
	      if (!acceptsData) {
	        delete options.data;
	      }
	      this._post(helpers.blogPath(blogName, '/post'), options, callback);
	    };
	  },
	
	  getWithOptions: function (path) {
	    return function (options, callback) {
	      if (helpers.isFunction(options)) { callback = options; options = {}; }
	      this._get(path, options, callback);
	    };
	  },
	
	  blogList: function (path) {
	    return function (blogName, options, callback) {
	      if (helpers.isFunction(options)) { callback = options; options = {}; }
	      this._get(helpers.blogPath(blogName, path), options, callback);
	    };
	  }
	};
	
	function TumblrClient(credentials, req) {
	  this.credentials = credentials || {};
	}
	
	TumblrClient.prototype = {
	
	  // Tagged
	
	  tagged: function (tag, options, callback) {
	    if (helpers.isFunction(options)) { callback = options; options = {}; }
	
	    options = options || {};
	    options.tag = tag;
	
	    this._get('/tagged', options, callback, true);
	  },
	
	  // Blogs
	
	  blogInfo: function (blogName, callback) {
	    this._get(helpers.blogPath(blogName, '/info'), {}, callback, true);
	  },
	
	  avatar: function (blogName, size, callback) {
	    if (helpers.isFunction(size)) { callback = size; size = null; }
	    var path = size ? '/avatar/' + size : '/avatar';
	    this._get(helpers.blogPath(blogName, path), {}, callback, true);
	  },
	
	  blogLikes: function (blogName, options, callback) {
	    if (helpers.isFunction(options)) { callback = options; options = {}; }
	    this._get(helpers.blogPath(blogName, '/likes'), options, callback, true);
	  },
	
	  followers: function (blogName, options, callback) {
	    if (helpers.isFunction(options)) { callback = options; options = {}; }
	    this._get(helpers.blogPath(blogName, '/followers'), options, callback);
	  },
	
	  posts: function (blogName, options, callback) {
	    if (helpers.isFunction(options)) { callback = options; options = {}; }
	    options = options || {};
	    var path = options.type ? '/posts/' + options.type : '/posts';
	    this._get(helpers.blogPath(blogName, path), options, callback, true);
	  },
	
	  queue:       calls.blogList('/posts/queue'),
	  drafts:      calls.blogList('/posts/draft'),
	  submissions: calls.blogList('/posts/submission'),
	
	  // Posts
	
	  edit: function (blogName, options, callback) {
	    this._post(helpers.blogPath(blogName, '/post/edit'), options, callback);
	  },
	
	  reblog: function (blogName, options, callback) {
	    this._post(helpers.blogPath(blogName, '/post/reblog'), options, callback);
	  },
	
	  deletePost: function (blogName, id, callback) {
	    this._post(helpers.blogPath(blogName, '/post/delete'), {id: id}, callback);
	  },
	
	  photo: calls.postCreation('photo', ['data', 'source'],       true),
	  audio: calls.postCreation('audio', ['data', 'external_url'], true),
	  video: calls.postCreation('video', ['data', 'embed'],        true),
	  quote: calls.postCreation('quote', ['quote'],                false),
	  text:  calls.postCreation('text',  ['body'],                 false),
	  link:  calls.postCreation('link',  ['url'],                  false),
	  chat:  calls.postCreation('chat',  ['conversation'],         false),
	
	  // User
	
	  userInfo: function (callback) {
	    this._get('/user/info', {}, callback);
	  },
	
	  likes: function (options, callback) {
	    if (helpers.isFunction(options)) { callback = options; options = {}; }
	    this._get('/user/likes', options, callback);
	  },
	
	  follow: function (url, callback) {
	    this._post('/user/follow', {url: url}, callback);
	  },
	
	  unfollow: function (url, callback) {
	    this._post('/user/unfollow', {url: url}, callback);
	  },
	
	  like: function (id, reblogKey, callback) {
	    this._post('/user/like', {id: id, reblog_key: reblogKey}, callback);
	  },
	
	  unlike: function (id, reblogKey, callback) {
	    this._post('/user/unlike', {id: id, reblog_key: reblogKey}, callback);
	  },
	
	  dashboard: calls.getWithOptions('/user/dashboard'),
	  following: calls.getWithOptions('/user/following'),
	
	  // Helpers
	
	  _get: function (path, params, callback, addApiKey) {
	
	    params = params || {};
	    if (addApiKey) {
	      params.api_key = this.credentials.consumer_key;
	    }
	
	    this.request.get({
	      url: helpers.baseUrl + path + '?' + qs.stringify(params),
	      json: true,
	      oauth: this.credentials,
	      followRedirect: false
	    }, helpers.requestCallback(callback));
	
	  },
	
	  _post: function (path, params, callback) {
	
	    var data = params.data;
	    delete params.data;
	
	    // Sign without multipart data
	    var r = this.request.post(helpers.baseUrl + path, function (err, response, body) {
	      try { body = JSON.parse(body); } catch (e) { body = { error: 'Malformed Response: ' + body }; }
	      helpers.requestCallback(callback)(err, response, body);
	    });
	
	    // Sign it with the non-data parameters
	    r.form(params);
	    r.oauth(this.credentials);
	
	    // Clear the side effects from form(param)
	    delete r.headers['content-type'];
	    delete r.body;
	
	    // And then add the full body
	    var form = r.form();
	    for (var key in params) {
	      form.append(key, params[key]);
	    }
	    if (data) {
	      form.append('data', fs.createReadStream(data));
	    }
	
	    // Add the form header back
	    var headers = form.getHeaders();
	    for (key in headers) {
	      r.headers[key] = headers[key];
	    }
	
	  }
	
	};
	
	
	
	module.exports = TumblrClient;

/***/ },
/* 590 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Browser Request
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	
	// UMD HEADER START 
	(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	  }
	}(this, function () {
	// UMD HEADER END
	
	var XHR = XMLHttpRequest
	if (!XHR) throw new Error('missing XMLHttpRequest')
	request.log = {
	  'trace': noop, 'debug': noop, 'info': noop, 'warn': noop, 'error': noop
	}
	
	var DEFAULT_TIMEOUT = 3 * 60 * 1000 // 3 minutes
	
	//
	// request
	//
	
	function request(options, callback) {
	  // The entry-point to the API: prep the options object and pass the real work to run_xhr.
	  if(typeof callback !== 'function')
	    throw new Error('Bad callback given: ' + callback)
	
	  if(!options)
	    throw new Error('No options given')
	
	  var options_onResponse = options.onResponse; // Save this for later.
	
	  if(typeof options === 'string')
	    options = {'uri':options};
	  else
	    options = JSON.parse(JSON.stringify(options)); // Use a duplicate for mutating.
	
	  options.onResponse = options_onResponse // And put it back.
	
	  if (options.verbose) request.log = getLogger();
	
	  if(options.url) {
	    options.uri = options.url;
	    delete options.url;
	  }
	
	  if(!options.uri && options.uri !== "")
	    throw new Error("options.uri is a required argument");
	
	  if(typeof options.uri != "string")
	    throw new Error("options.uri must be a string");
	
	  var unsupported_options = ['proxy', '_redirectsFollowed', 'maxRedirects', 'followRedirect']
	  for (var i = 0; i < unsupported_options.length; i++)
	    if(options[ unsupported_options[i] ])
	      throw new Error("options." + unsupported_options[i] + " is not supported")
	
	  options.callback = callback
	  options.method = options.method || 'GET';
	  options.headers = options.headers || {};
	  options.body    = options.body || null
	  options.timeout = options.timeout || request.DEFAULT_TIMEOUT
	
	  if(options.headers.host)
	    throw new Error("Options.headers.host is not supported");
	
	  if(options.json) {
	    options.headers.accept = options.headers.accept || 'application/json'
	    if(options.method !== 'GET')
	      options.headers['content-type'] = 'application/json'
	
	    if(typeof options.json !== 'boolean')
	      options.body = JSON.stringify(options.json)
	    else if(typeof options.body !== 'string')
	      options.body = JSON.stringify(options.body)
	  }
	  
	  //BEGIN QS Hack
	  var serialize = function(obj) {
	    var str = [];
	    for(var p in obj)
	      if (obj.hasOwnProperty(p)) {
	        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	      }
	    return str.join("&");
	  }
	  
	  if(options.qs){
	    var qs = (typeof options.qs == 'string')? options.qs : serialize(options.qs);
	    if(options.uri.indexOf('?') !== -1){ //no get params
	        options.uri = options.uri+'&'+qs;
	    }else{ //existing get params
	        options.uri = options.uri+'?'+qs;
	    }
	  }
	  //END QS Hack
	  
	  //BEGIN FORM Hack
	  var multipart = function(obj) {
	    //todo: support file type (useful?)
	    var result = {};
	    result.boundry = '-------------------------------'+Math.floor(Math.random()*1000000000);
	    var lines = [];
	    for(var p in obj){
	        if (obj.hasOwnProperty(p)) {
	            lines.push(
	                '--'+result.boundry+"\n"+
	                'Content-Disposition: form-data; name="'+p+'"'+"\n"+
	                "\n"+
	                obj[p]+"\n"
	            );
	        }
	    }
	    lines.push( '--'+result.boundry+'--' );
	    result.body = lines.join('');
	    result.length = result.body.length;
	    result.type = 'multipart/form-data; boundary='+result.boundry;
	    return result;
	  }
	  
	  if(options.form){
	    if(typeof options.form == 'string') throw('form name unsupported');
	    if(options.method === 'POST'){
	        var encoding = (options.encoding || 'application/x-www-form-urlencoded').toLowerCase();
	        options.headers['content-type'] = encoding;
	        switch(encoding){
	            case 'application/x-www-form-urlencoded':
	                options.body = serialize(options.form).replace(/%20/g, "+");
	                break;
	            case 'multipart/form-data':
	                var multi = multipart(options.form);
	                //options.headers['content-length'] = multi.length;
	                options.body = multi.body;
	                options.headers['content-type'] = multi.type;
	                break;
	            default : throw new Error('unsupported encoding:'+encoding);
	        }
	    }
	  }
	  //END FORM Hack
	
	  // If onResponse is boolean true, call back immediately when the response is known,
	  // not when the full request is complete.
	  options.onResponse = options.onResponse || noop
	  if(options.onResponse === true) {
	    options.onResponse = callback
	    options.callback = noop
	  }
	
	  // XXX Browsers do not like this.
	  //if(options.body)
	  //  options.headers['content-length'] = options.body.length;
	
	  // HTTP basic authentication
	  if(!options.headers.authorization && options.auth)
	    options.headers.authorization = 'Basic ' + b64_enc(options.auth.username + ':' + options.auth.password);
	
	  return run_xhr(options)
	}
	
	var req_seq = 0
	function run_xhr(options) {
	  var xhr = new XHR
	    , timed_out = false
	    , is_cors = is_crossDomain(options.uri)
	    , supports_cors = ('withCredentials' in xhr)
	
	  req_seq += 1
	  xhr.seq_id = req_seq
	  xhr.id = req_seq + ': ' + options.method + ' ' + options.uri
	  xhr._id = xhr.id // I know I will type "_id" from habit all the time.
	
	  if(is_cors && !supports_cors) {
	    var cors_err = new Error('Browser does not support cross-origin request: ' + options.uri)
	    cors_err.cors = 'unsupported'
	    return options.callback(cors_err, xhr)
	  }
	
	  xhr.timeoutTimer = setTimeout(too_late, options.timeout)
	  function too_late() {
	    timed_out = true
	    var er = new Error('ETIMEDOUT')
	    er.code = 'ETIMEDOUT'
	    er.duration = options.timeout
	
	    request.log.error('Timeout', { 'id':xhr._id, 'milliseconds':options.timeout })
	    return options.callback(er, xhr)
	  }
	
	  // Some states can be skipped over, so remember what is still incomplete.
	  var did = {'response':false, 'loading':false, 'end':false}
	
	  xhr.onreadystatechange = on_state_change
	  xhr.open(options.method, options.uri, true) // asynchronous
	  if(is_cors)
	    xhr.withCredentials = !! options.withCredentials
	  xhr.send(options.body)
	  return xhr
	
	  function on_state_change(event) {
	    if(timed_out)
	      return request.log.debug('Ignoring timed out state change', {'state':xhr.readyState, 'id':xhr.id})
	
	    request.log.debug('State change', {'state':xhr.readyState, 'id':xhr.id, 'timed_out':timed_out})
	
	    if(xhr.readyState === XHR.OPENED) {
	      request.log.debug('Request started', {'id':xhr.id})
	      for (var key in options.headers)
	        xhr.setRequestHeader(key, options.headers[key])
	    }
	
	    else if(xhr.readyState === XHR.HEADERS_RECEIVED)
	      on_response()
	
	    else if(xhr.readyState === XHR.LOADING) {
	      on_response()
	      on_loading()
	    }
	
	    else if(xhr.readyState === XHR.DONE) {
	      on_response()
	      on_loading()
	      on_end()
	    }
	  }
	
	  function on_response() {
	    if(did.response)
	      return
	
	    did.response = true
	    request.log.debug('Got response', {'id':xhr.id, 'status':xhr.status})
	    clearTimeout(xhr.timeoutTimer)
	    xhr.statusCode = xhr.status // Node request compatibility
	
	    // Detect failed CORS requests.
	    if(is_cors && xhr.statusCode == 0) {
	      var cors_err = new Error('CORS request rejected: ' + options.uri)
	      cors_err.cors = 'rejected'
	
	      // Do not process this request further.
	      did.loading = true
	      did.end = true
	
	      return options.callback(cors_err, xhr)
	    }
	
	    options.onResponse(null, xhr)
	  }
	
	  function on_loading() {
	    if(did.loading)
	      return
	
	    did.loading = true
	    request.log.debug('Response body loading', {'id':xhr.id})
	    // TODO: Maybe simulate "data" events by watching xhr.responseText
	  }
	
	  function on_end() {
	    if(did.end)
	      return
	
	    did.end = true
	    request.log.debug('Request done', {'id':xhr.id})
	
	    xhr.body = xhr.responseText
	    if(options.json) {
	      try        { xhr.body = JSON.parse(xhr.responseText) }
	      catch (er) { return options.callback(er, xhr)        }
	    }
	
	    options.callback(null, xhr, xhr.body)
	  }
	
	} // request
	
	request.withCredentials = false;
	request.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;
	
	//
	// defaults
	//
	
	request.defaults = function(options, requester) {
	  var def = function (method) {
	    var d = function (params, callback) {
	      if(typeof params === 'string')
	        params = {'uri': params};
	      else {
	        params = JSON.parse(JSON.stringify(params));
	      }
	      for (var i in options) {
	        if (params[i] === undefined) params[i] = options[i]
	      }
	      return method(params, callback)
	    }
	    return d
	  }
	  var de = def(request)
	  de.get = def(request.get)
	  de.post = def(request.post)
	  de.put = def(request.put)
	  de.head = def(request.head)
	  return de
	}
	
	//
	// HTTP method shortcuts
	//
	
	var shortcuts = [ 'get', 'put', 'post', 'head' ];
	shortcuts.forEach(function(shortcut) {
	  var method = shortcut.toUpperCase();
	  var func   = shortcut.toLowerCase();
	
	  request[func] = function(opts) {
	    if(typeof opts === 'string')
	      opts = {'method':method, 'uri':opts};
	    else {
	      opts = JSON.parse(JSON.stringify(opts));
	      opts.method = method;
	    }
	
	    var args = [opts].concat(Array.prototype.slice.apply(arguments, [1]));
	    return request.apply(this, args);
	  }
	})
	
	//
	// CouchDB shortcut
	//
	
	request.couch = function(options, callback) {
	  if(typeof options === 'string')
	    options = {'uri':options}
	
	  // Just use the request API to do JSON.
	  options.json = true
	  if(options.body)
	    options.json = options.body
	  delete options.body
	
	  callback = callback || noop
	
	  var xhr = request(options, couch_handler)
	  return xhr
	
	  function couch_handler(er, resp, body) {
	    if(er)
	      return callback(er, resp, body)
	
	    if((resp.statusCode < 200 || resp.statusCode > 299) && body.error) {
	      // The body is a Couch JSON object indicating the error.
	      er = new Error('CouchDB error: ' + (body.error.reason || body.error.error))
	      for (var key in body)
	        er[key] = body[key]
	      return callback(er, resp, body);
	    }
	
	    return callback(er, resp, body);
	  }
	}
	
	//
	// Utility
	//
	
	function noop() {}
	
	function getLogger() {
	  var logger = {}
	    , levels = ['trace', 'debug', 'info', 'warn', 'error']
	    , level, i
	
	  for(i = 0; i < levels.length; i++) {
	    level = levels[i]
	
	    logger[level] = noop
	    if(typeof console !== 'undefined' && console && console[level])
	      logger[level] = formatted(console, level)
	  }
	
	  return logger
	}
	
	function formatted(obj, method) {
	  return formatted_logger
	
	  function formatted_logger(str, context) {
	    if(typeof context === 'object')
	      str += ' ' + JSON.stringify(context)
	
	    return obj[method].call(obj, str)
	  }
	}
	
	// Return whether a URL is a cross-domain request.
	function is_crossDomain(url) {
	  var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/
	
	  // jQuery #8138, IE may throw an exception when accessing
	  // a field from window.location if document.domain has been set
	  var ajaxLocation
	  try { ajaxLocation = location.href }
	  catch (e) {
	    // Use the href attribute of an A element since IE will modify it given document.location
	    ajaxLocation = document.createElement( "a" );
	    ajaxLocation.href = "";
	    ajaxLocation = ajaxLocation.href;
	  }
	
	  var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []
	    , parts = rurl.exec(url.toLowerCase() )
	
	  var result = !!(
	    parts &&
	    (  parts[1] != ajaxLocParts[1]
	    || parts[2] != ajaxLocParts[2]
	    || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))
	    )
	  )
	
	  //console.debug('is_crossDomain('+url+') -> ' + result)
	  return result
	}
	
	// MIT License from http://phpjs.org/functions/base64_encode:358
	function b64_enc (data) {
	    // Encodes string using MIME base64 algorithm
	    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc="", tmp_arr = [];
	
	    if (!data) {
	        return data;
	    }
	
	    // assume utf8 data
	    // data = this.utf8_encode(data+'');
	
	    do { // pack three octets into four hexets
	        o1 = data.charCodeAt(i++);
	        o2 = data.charCodeAt(i++);
	        o3 = data.charCodeAt(i++);
	
	        bits = o1<<16 | o2<<8 | o3;
	
	        h1 = bits>>18 & 0x3f;
	        h2 = bits>>12 & 0x3f;
	        h3 = bits>>6 & 0x3f;
	        h4 = bits & 0x3f;
	
	        // use hexets to index into b64, and append result to encoded string
	        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	    } while (i < data.length);
	
	    enc = tmp_arr.join('');
	
	    switch (data.length % 3) {
	        case 1:
	            enc = enc.slice(0, -2) + '==';
	        break;
	        case 2:
	            enc = enc.slice(0, -1) + '=';
	        break;
	    }
	
	    return enc;
	}
	    return request;
	//UMD FOOTER START
	}));
	//UMD FOOTER END


/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var debug = __webpack_require__(592)('jsonp');
	
	/**
	 * Module exports.
	 */
	
	module.exports = jsonp;
	
	/**
	 * Callback index.
	 */
	
	var count = 0;
	
	/**
	 * Noop function.
	 */
	
	function noop(){}
	
	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */
	
	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};
	
	  var prefix = opts.prefix || '__jp';
	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;
	
	  // generate a unique id for this request
	  var id = prefix + (count++);
	
	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }
	
	  function cleanup(){
	    script.parentNode.removeChild(script);
	    window[id] = noop;
	  }
	
	  window[id] = function(data){
	    debug('jsonp got', data);
	    if (timer) clearTimeout(timer);
	    cleanup();
	    if (fn) fn(null, data);
	  };
	
	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');
	
	  debug('jsonp req "%s"', url);
	
	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);
	}


/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(593);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(594);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 594 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 595 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore),_IndexPage=__webpack_require__(233),_IndexPage2=_interopRequireDefault(_IndexPage);exports["default"]=_react2["default"].createClass({displayName:"App",getInitialState:function(){return{currentRoute:_RouteStore2["default"].getCurrentRoute()}},componentDidMount:function(){_RouteStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_RouteStore2["default"].removeChangeListener(this._onChange)},render:function(){var e=this.state.currentRoute,t=e.config.page;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{id:"side-menu",className:"ui vertical fixed icon inverted menu sidebar-trans"},_react2["default"].createElement("a",{className:"item",onClick:this._onSideBarClick},_react2["default"].createElement("i",{className:"sidebar icon"}))),_react2["default"].createElement(t,{pageUrl:e.url}))},_onChange:function(){this.setState({currentRoute:_RouteStore2["default"].getCurrentRoute()})},_onSideBarClick:function(e){e.preventDefault(),$(".ui.sidebar").sidebar("toggle")}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 596 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_AuthorConstants=__webpack_require__(230),_AuthorConstants2=_interopRequireDefault(_AuthorConstants),AuthorAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"loadAuthorData",value:function(){_AppDispatcher2["default"].dispatch({actionType:_AuthorConstants2["default"].AUTHOR_LOAD_DATA})}}]),t}();exports["default"]=new AuthorAction;

/***/ },
/* 597 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListAuthorStore=__webpack_require__(625),_PostListAuthorStore2=_interopRequireDefault(_PostListAuthorStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_PostGrid=__webpack_require__(113),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"AuthorSection",getInitialState:function(){return{listCon:_PostListAuthorStore2["default"].getListContainer(this.props.author)}},componentDidMount:function(){_PostListAuthorStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_PostListAuthorStore2["default"].removeChangeListener(this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListAuthorStore2["default"].getListContainer(t.author)})},render:function(){var t=this.state.listCon,e=this.props.title;return _react2["default"].createElement(_PostGrid2["default"],{title:e,posts:t.posts,onPostGridClick:this._onClick})},_onChange:function(){this.setState({listCon:_PostListAuthorStore2["default"].getListContainer(this.props.author)})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,r=e.hash;history.pushState({pathname:o,hash:r},"",o),_RouteAction2["default"].updatePath(o,r),t.preventDefault()}});

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(34),CategoryMenu=function(e){var t=e.categories,r=e.nameMap,a=e.onCategoryClick;return _react2["default"].createElement("div",{id:"category-menu"},_react2["default"].createElement(_reactSemantify.Menu,{className:"secondary"},t.map(function(e){return _react2["default"].createElement(_reactSemantify.Item,{type:"link",key:e,href:"/view_post_list/category/"+e,onClick:a,active:!1},_react2["default"].createElement(_reactSemantify.Text,{style:{color:"#E8F5FF"}},r[e]))})))};exports["default"]=CategoryMenu;

/***/ },
/* 599 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(115),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(113),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"CategorySection",getInitialState:function(){return{listCon:_PostListStore2["default"].getListContainer(this.props.category),moreButtonLoading:!1}},componentDidMount:function(){_PostListStore2["default"].addChangeListener("category",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("category",this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListStore2["default"].getListContainer(t.category),moreButtonLoading:!1})},render:function(){var t=!1,e=this.state,o=e.listCon,i=e.moreButtonLoading,r=_PostListConfig2["default"].categoryMap[this.props.title];return o.parsedPostNum<o.totalPostNum&&(t=!0),_react2["default"].createElement(_PostGrid2["default"],{title:r,posts:o.posts,moreButton:t,moreButtonLoading:i,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListStore2["default"].getListContainer(this.props.category),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,i=e.hash;history.pushState({pathname:o,hash:i},"",o),_RouteAction2["default"].updatePath(o,i),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListStore2["default"].loadMorePosts(this.props.category,_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 600 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(83),_classnames2=_interopRequireDefault(_classnames),_index=__webpack_require__(424),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34),Brief=function(){return _react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerBox,_index2["default"].footerBoxInfo)},"wowAfrica 阿非卡為台灣最完整的非洲資訊平台，我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。")},AboutUrl=function(e){var t=e.onFooterClick;return _react2["default"].createElement(_reactSemantify.Menu,{className:"vertical secondary"},_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/about_us",onClick:t},_react2["default"].createElement(_reactSemantify.Text,{style:{wordWrap:"break-word"}},"關於 wowAfrica")),_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/about_authors",onClick:t},_react2["default"].createElement(_reactSemantify.Text,null,"成員介紹")),_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/contact_us",onClick:t},_react2["default"].createElement(_reactSemantify.Text,null,"聯絡我們")))},SocialLink=function(){return _react2["default"].createElement("div",{className:_index2["default"].footerIconGroups},_react2["default"].createElement("a",{href:"mailto:lighteningdark2014@gmail.com",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconMail)})),_react2["default"].createElement("a",{href:"http://wowafrica.tumblr.com/",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconTumblr)})),_react2["default"].createElement("a",{href:"https://www.facebook.com/wowafrica.tw/",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconFacebook)})))},Subscribe=_react2["default"].createClass({displayName:"Subscribe",render:function(){return _react2["default"].createElement("div",{className:_index2["default"].footerBox},"最新資訊及活動通知",_react2["default"].createElement("div",{id:"emailForm",className:"ui form",style:{paddingTop:"8px"}},_react2["default"].createElement("div",{className:"field"},_react2["default"].createElement("input",{id:"emailInput",type:"email",placeholder:"Email"})),_react2["default"].createElement("div",{className:"ui error message",style:{fontSize:"14px"}},"oops! 現在有些問題，請稍候再試"),_react2["default"].createElement("div",{className:(0,_classnames2["default"])("ui submit button",_index2["default"].footerEmailBtn),onClick:this._onSubBtnClick},"訂閱")))},_onSubBtnClick:function(e){$("#emailForm").removeClass("error"),$("."+_index2["default"].footerEmailBtn).removeClass("button").addClass("loading button");$.ajax({url:"https://script.google.com/macros/s/AKfycbzuOLvCRul3ZAzNl3kp9nPihUQ_iowpjB-Uf1nwuvhY9Q5lODI/exec",type:"post",data:{email:$("#emailInput")[0].value}}).done(function(e){$("."+_index2["default"].footerEmailBtn).text("完成!")}).fail(function(e){$("#emailForm").addClass("error")}).always(function(){$("."+_index2["default"].footerEmailBtn).removeClass("loading button").addClass("button")})}}),Footer=function(e){var t=e.onFooterClick;return _react2["default"].createElement("div",{className:_index2["default"].footer},_react2["default"].createElement("div",{className:""},_react2["default"].createElement("div",{className:"ui stackable grid"},_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"six wide centered column"},_react2["default"].createElement(Brief,null)),_react2["default"].createElement("div",{className:"four wide column",style:{color:"white",backgroundColor:"#BF3333"}},_react2["default"].createElement("div",{className:_index2["default"].footerBox},_react2["default"].createElement(AboutUrl,{onFooterClick:t}),_react2["default"].createElement(SocialLink,null))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement(Subscribe,null)),_react2["default"].createElement("div",{className:"one wide column"}))))};exports["default"]=Footer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 601 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(115),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_index=__webpack_require__(425),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34),CategoryBox=_react2["default"].createClass({displayName:"CategoryBox",getInitialState:function(){return"more"==this.props.category?{posts:[]}:{posts:_PostListStore2["default"].getPostList(this.props.category)}},render:function(){if("more"==this.props.category)return _react2["default"].createElement("div",{className:"middle aligned centered column"},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxMore},_react2["default"].createElement("a",{href:"/view_post_list/category/new",onClick:this._onClick},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxMoreTitle},"閱讀更多文章"))));var e="",t="",a="";return this.state.posts.length>0&&(e=this.state.posts[0].image,t=this.state.posts[0].title,a="/view_post_list/posts/"+this.state.posts[0].id),_react2["default"].createElement("div",{className:"middle aligned column"},_react2["default"].createElement("div",{className:_index2["default"].categoryBox,style:{backgroundImage:"url("+e+")"}},_react2["default"].createElement("div",{className:"ui grid"},_react2["default"].createElement("div",{className:"four wide column",style:{paddingRight:0}},_react2["default"].createElement("a",{href:a,onClick:this._onClick},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxLeftUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxLeftBottom}))),_react2["default"].createElement("div",{className:"eight wide column",style:{paddingRight:0,paddingLeft:0}},_react2["default"].createElement("a",{href:a,onClick:this._onClick},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCenterUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCenterBottom},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxTitle},t),_react2["default"].createElement("div",{className:"ui divider",style:{borderTop:"1px solid grey",margin:"0rem 1rem 0.3rem 1rem"}}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCategory},_PostListConfig2["default"].categoryMap[this.props.category])))),_react2["default"].createElement("div",{className:"four wide column",style:{paddingLeft:0}},_react2["default"].createElement("a",{href:a,onClick:this._onClick},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxRightUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxRightBottom}))))))},componentDidMount:function(){_PostListStore2["default"].addChangeListener("category",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("category",this._onChange)},_onChange:function(){"more"==this.props.category||this.setState({posts:_PostListStore2["default"].getPostList(this.props.category)})},_onClick:function(e){var t=e.currentTarget,a=t.pathname,r=t.hash;history.pushState({pathname:a,hash:r},"",a),_RouteAction2["default"].updatePath(a,r),e.preventDefault()}});exports["default"]=_react2["default"].createClass({displayName:"IndexCategoryBlock",getInitialState:function(){return{}},render:function(){var e=[];_PostListConfig2["default"].categories.forEach(function(t){e.push(t)}),e.push("more");var t=e.map(function(e){return _react2["default"].createElement(CategoryBox,{category:e})});return _react2["default"].createElement("div",{id:_index2["default"].categoryBox,className:"ui three column stackable padded grid"},t)}});

/***/ },
/* 602 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(115),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_PostListAction=__webpack_require__(229),_PostListAction2=_interopRequireDefault(_PostListAction),_elevator=__webpack_require__(238),_elevator2=_interopRequireDefault(_elevator),_index=__webpack_require__(427),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"IndexWideBlock",getInitialState:function(){switch(this.props.type){case"new":return{posts:_PostListStore2["default"].getPostList("new")};case"top":return{posts:_PostListStore2["default"].getPostList("top")}}},componentDidUpdate:function(){new _elevator2["default"]({element:document.querySelector("#btn-article"),targetElement:document.querySelector("#category-block-divider"),duration:1500})},componentDidMount:function(){_PostListStore2["default"].addChangeListener(this.props.type,this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener(this.props.type,this._onChange)},render:function(){var e=this,t="new"==this.props.type?"最新文章":"最新消息",i=this.state.posts.slice(0,2).map(function(i){var o=i.image.replace(/_540.jpg/g,"_1280.jpg");return _react2["default"].createElement("div",null,_react2["default"].createElement("a",{href:"/view_post_list/posts/"+i.id,onClick:e._onClick},_react2["default"].createElement("div",{className:_index2["default"].indexWide,style:{backgroundImage:"url("+o+")",backgroundPosition:"center"}},_react2["default"].createElement("div",{className:_index2["default"].indexWideBoxBefore}),_react2["default"].createElement("div",{className:_index2["default"].indexWideBox},_react2["default"].createElement("div",{className:_index2["default"].indexWideType},t),_react2["default"].createElement("div",{className:"ui divider",style:{width:"175px",borderTop:"1px solid white",margin:"0.3rem 0rem 0.3rem 0rem"}}),_react2["default"].createElement("div",{className:_index2["default"].indexWideTitle},i.title)))))});return _react2["default"].createElement("div",null,i)},_onChange:function(){switch(this.props.type){case"new":this.setState({posts:_PostListStore2["default"].getPostList("new")});break;case"top":this.setState({posts:_PostListStore2["default"].getPostList("top")})}},_onClick:function(e){var t=e.currentTarget,i=t.pathname,o=t.hash;history.pushState({pathname:i,hash:o},"",i),_RouteAction2["default"].updatePath(i,o),e.preventDefault()}});

/***/ },
/* 603 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_NationsStore=__webpack_require__(237),_NationsStore2=_interopRequireDefault(_NationsStore),_MapStore=__webpack_require__(236),_MapStore2=_interopRequireDefault(_MapStore),_d=__webpack_require__(143),_d2=_interopRequireDefault(_d),_reactSemantify=__webpack_require__(34),NormalSection=_react2["default"].createClass({displayName:"NormalSection",render:function(){return _react2["default"].createElement(_reactSemantify.Header,{className:"medium"},this.props.name,_react2["default"].createElement(_reactSemantify.Header,{className:"sub"},this.props.children))}}),PieChar=_react2["default"].createClass({displayName:"PieChar",render:function(){var e=this.props,t=e.width,a=e.height,r=e.piedata,n=t/2,l=a/2,i=Math.min(t,a)/2,c=r.map(function(e){return e.name}),o=_d2["default"].scale.linear().domain([0,r.length]).range(["#CEC5C5","#593030"]),m=_d2["default"].svg.arc().outerRadius(i-10).innerRadius(0),u=_d2["default"].layout.pie().sort(null).value(function(e){return e.percentage}),s=u(r);return _react2["default"].createElement("svg",{width:t,height:a},s.map(function(e,t){var a=m.centroid(e);return _react2["default"].createElement("g",{className:"arc",transform:"translate("+n+","+l+")"},_react2["default"].createElement("path",{d:m(e),style:{fill:o(t),stroke:"#FFF"}}),_react2["default"].createElement("text",{transform:"translate("+a+")",style:{textAnchor:"middle"}},c[t]))}))}}),VisualComponent=_react2["default"].createClass({displayName:"VisualComponent",render:function(){var e=this.props.visualData;return"string"==typeof e?_react2["default"].createElement("div",null,"$",e):_react2["default"].createElement(PieChar,{width:"500",height:"500",piedata:e})}}),VisualSection=_react2["default"].createClass({displayName:"VisualSection",componentDidMount:function(){$(".visualSection .menu .item").tab()},render:function(){var e=this.props.nation;return _react2["default"].createElement("div",{className:"visualSection"},_react2["default"].createElement("div",{className:"ui pointing secondary menu"},_react2["default"].createElement("a",{className:"active item","data-tab":"first"},"經濟"),_react2["default"].createElement("a",{className:"item","data-tab":"second"},"信仰")),_react2["default"].createElement("div",{className:"ui active tab segment","data-tab":"first"},_react2["default"].createElement(VisualComponent,{visualData:e.economy})),_react2["default"].createElement("div",{className:"ui tab segment","data-tab":"second"},_react2["default"].createElement(VisualComponent,{visualData:e.faith})))}});exports["default"]=_react2["default"].createClass({displayName:"NationModal",getInitialState:function(){return{nation:_NationsStore2["default"].getCurrentNation(),map:null}},componentDidMount:function(){_NationsStore2["default"].addShowListener(this._onShow)},componentWillUnmount:function(){_NationsStore2["default"].removeShowListener(this._onShow)},_onShow:function(){var e=_NationsStore2["default"].getCurrentNation(),t=_MapStore2["default"].getNationMapByISO(e.iso);this.setState({nation:e,map:t}),$(_reactDom2["default"].findDOMNode(this.refs.modal)).modal("show")},render:function(){var e=this.state,t=e.nation,a=(e.map,t.flag),r=void 0===a?"kenya_flag.png":a,n=t.emblem,l=void 0===n?"kenya_svg.png":n;return r=""===r?"kenya_flag.png":r,l=""===l?"kenya_svg.png":l,_react2["default"].createElement(_reactSemantify.Modal,{className:"long",ref:"modal",init:!0},_react2["default"].createElement(_reactSemantify.Icon,{className:"close"}),_react2["default"].createElement(_reactSemantify.Header,{className:"medium"},_react2["default"].createElement("img",{src:"/images/nations/"+l}),_react2["default"].createElement("div",{className:"content"},t.country)),_react2["default"].createElement("div",{className:"image content"},_react2["default"].createElement("div",{className:"ui medium image"},_react2["default"].createElement("img",{src:"/images/nations/"+r}),_react2["default"].createElement(NormalSection,{name:"特殊象徵品"},t.symbol)),_react2["default"].createElement("div",{className:"description"},_react2["default"].createElement(NormalSection,{name:"簡介"},t.introduction),_react2["default"].createElement(NormalSection,{name:"首都"},t.capital),_react2["default"].createElement(NormalSection,{name:"國家元首"},t.headOfState),_react2["default"].createElement(NormalSection,{name:"幣制"},t.currency),_react2["default"].createElement(NormalSection,{name:"語言"},t.language),_react2["default"].createElement(NormalSection,{name:"政治"},t.politics),_react2["default"].createElement(NormalSection,{name:"氣候"},t.atmosphere),_react2["default"].createElement(NormalSection,{name:"自然地理"},t.geography),_react2["default"].createElement(NormalSection,{name:"人口"},t.population),_react2["default"].createElement(_reactSemantify.Divider,null),_react2["default"].createElement(VisualSection,{nation:t}))))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 604 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListStore=__webpack_require__(115),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(113),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"NewSection",getInitialState:function(){return{listCon:_PostListStore2["default"].getListContainer("new"),moreButtonLoading:!1}},componentDidMount:function(){_PostListStore2["default"].addChangeListener("new",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("new",this._onChange)},render:function(){var t=!1,e=this.state,o=e.listCon,n=e.moreButtonLoading;return o.parsedPostNum<o.totalPostNum&&(t=!0),_react2["default"].createElement(_PostGrid2["default"],{title:"最新文章",posts:o.posts,moreButton:t,moreButtonLoading:n,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListStore2["default"].getListContainer("new"),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,n=e.hash;history.pushState({pathname:o,hash:n},"",o),_RouteAction2["default"].updatePath(o,n),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListStore2["default"].loadMorePosts("new",_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 605 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(429),_index2=_interopRequireDefault(_index),Block=function(e){var t=e.post,a=(e.idx,e.onBlockClick);return _react2["default"].createElement("a",{className:"item "+_index2["default"].block,href:"/view_post_list/posts/"+t.id,onClick:a},_react2["default"].createElement("div",{className:"ui medium image"},_react2["default"].createElement("img",{src:t.image,style:{maxWidth:"300px",maxHeight:"200px"}})),_react2["default"].createElement("div",{className:"middle aligned content"},_react2["default"].createElement("div",{className:"ui header"},t.title),_react2["default"].createElement("div",{className:"description"},t.brief.length>80?t.brief.substr(0,80)+"...":t.brief)))},ReadMoreBlock=function(e){var t=e.posts,a=e.onBlockClick;return _react2["default"].createElement("div",{className:"ui divided link items"},t.map(function(e,t){return _react2["default"].createElement(Block,{post:e,idx:t,onBlockClick:a})}))};exports["default"]=ReadMoreBlock;

/***/ },
/* 606 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),_PostListReadMoreStore=__webpack_require__(626),_PostListReadMoreStore2=_interopRequireDefault(_PostListReadMoreStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(605),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"ReadMoreBlock",getInitialState:function(){return{posts:[]}},componentDidMount:function(){_PostListReadMoreStore2["default"].addChangeListener(this._onChange),_PostListReadMoreStore2["default"].onUpdateRandomPostList(3,this.props.postId)},componentWillUnmount:function(){_PostListReadMoreStore2["default"].removeChangeListener(this._onChange)},_onChange:function(){this.setState({posts:_PostListReadMoreStore2["default"].getRandomPosts()})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,n=e.hash;history.pushState({pathname:o,hash:n},"",o),_RouteAction2["default"].updatePath(o,n),t.preventDefault(),_PostListReadMoreStore2["default"].onUpdateRandomPostList(3,this.props.postId)},render:function(){var t=this.state.posts;return _react2["default"].createElement(_Component2["default"],{posts:t,onBlockClick:this._onClick})}});

/***/ },
/* 607 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(34);exports["default"]=_react2["default"].createClass({displayName:"ShareButton",render:function(){var e=this.props,t=e.pageUrl,r=_objectWithoutProperties(e,["pageUrl"]);return _react2["default"].createElement("a",_extends({},r,{target:"_blank",href:"https://www.facebook.com/share.php?u=https://wowafrica.tw"+t}),_react2["default"].createElement(_reactSemantify.Image,{className:"mini",src:"/images/facebook_button.png"}))}});

/***/ },
/* 608 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(34),SectionItem=function(e){var t=e.showName,a=e.url,r=e.onMenuClick;return _react2["default"].createElement(_reactSemantify.Item,{type:"link",href:a,onClick:r,style:{fontSize:"1.5em"}},t)},Section=function(e){var t=e.showName,a=e.subPage,r=e.onMenuClick;return _react2["default"].createElement(_reactSemantify.Item,null,_react2["default"].createElement("div",{className:"ui inverted large header"},t,a.map(function(e){return _react2["default"].createElement(SectionItem,{showName:e.showName,url:e.url,onMenuClick:r})})))};exports["default"]=_react2["default"].createClass({displayName:"Component",componentDidMount:function(){$(".ui.sidebar").sidebar("hide"),$(".ui.sidebar").sidebar("setting","onHide",function(){$("#side-menu").addClass("sidebar-trans")}),$(".ui.sidebar").sidebar("setting","onVisible",function(){$("#side-menu").removeClass("sidebar-trans")})},render:function(){var e=this.props,t=e.currentMenu,a=e.onMenuClick;return _react2["default"].createElement("div",null,_react2["default"].createElement(_reactSemantify.Item,{id:"sidebar-menu-logo",style:{paddingTop:"14px"}},_react2["default"].createElement("a",{href:"/"},_react2["default"].createElement("img",{src:"/images/logo_color_trans.png",style:{width:"180px"}}))),t.map(function(e){return _react2["default"].createElement(Section,{showName:e.showName,subPage:e.subPage,onMenuClick:a})}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 609 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_MenuStore=__webpack_require__(114),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(608),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"SideBar",render:function(){var e=_MenuStore2["default"].getAll();return _react2["default"].createElement(_Component2["default"],{currentMenu:e,onMenuClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,n=t.hash;history.pushState({pathname:r,hash:n},"",r),_RouteAction2["default"].updatePath(r,n),e.preventDefault()}});

/***/ },
/* 610 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListTagStore=__webpack_require__(627),_PostListTagStore2=_interopRequireDefault(_PostListTagStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(113),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"TagSection",getInitialState:function(){return{listCon:_PostListTagStore2["default"].getListContainer(),moreButtonLoading:!1}},componentDidMount:function(){_PostListTagStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_PostListTagStore2["default"].removeChangeListener(this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListTagStore2["default"].getListContainer()})},render:function(){var t=this.state,e=t.listCon,o=t.moreButtonLoading,i=this.props.title,n=!1;return e.parsedPostNum<e.totalPostNum&&(n=!0),_react2["default"].createElement(_PostGrid2["default"],{title:i,posts:e.posts,moreButton:n,moreButtonLoading:o,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListTagStore2["default"].getListContainer(),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,i=e.hash;history.pushState({pathname:o,hash:i},"",o),_RouteAction2["default"].updatePath(o,i),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListTagStore2["default"].loadMorePosts(this.props.tag,_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 611 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={contryUrl:"/data/africa.geo.json",areaUrl:"/data/area.json"};

/***/ },
/* 612 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{name:"盧韋辰 ／ Weichen Lu",title:"共同創辦人 & 執行長 ／ Cofunder & CEO"},{name:"賴奕諭 ／ Larry Lai",title:"共同創辦人 & 總編輯 ／ Cofunder & Chief Editor"},{name:"何佩佳 ／ Pejia Ho",title:"共同創辦人 & 市場開發經理 ／ Cofunder & BD Manager"},{name:"葉菀菱 ／ Bear Ya",title:"社群總編 ／ Social Media Editor"},{name:"程可安 ／ Anna",title:"專案經理 ／ Project Director"},{name:"謝睿哲 ／ Solid",title:"專案經理 ／ Project Director"},{name:"林詩閔 ／",title:"活動總監 ／ Offline Event Director"},{name:"李俊緯 ／ Lee",title:"進擊的攻城屍 ／ Web Enginer No.1"},{name:"吳咨翰 ／ TzuHan",title:"進擊的攻城屍 ／ Web Enginer No.2"},{name:"洪野馬 ／",title:"插花的網頁介面設計師 ／ Web UI Designer"}];

/***/ },
/* 613 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{name:"about",showName:"關於我們",currentPage:"",subPage:[{url:"/about_us",showName:"團隊介紹",subPage:[],status:!1},{url:"/about_authors",showName:"寫手介紹",subPage:[],status:!1}]},{name:"knowing",showName:"認識非洲",currentPage:"",subPage:[{url:"/view_africa_nations",showName:"國家基本資料",subPage:[],status:!1}]},{name:"article",showName:"文章分類",currentPage:"",subPage:[{url:"/view_post_list/category/news",showName:"時事新聞",subPage:[],status:!1},{url:"/view_post_list/category/people",showName:"人物專欄",subPage:[],status:!1},{url:"/view_post_list/category/nature",showName:"自然保育",subPage:[],status:!1},{url:"/view_post_list/category/innovation",showName:"創新應用",subPage:[],status:!1},{url:"/view_post_list/category/society",showName:"社會人文",subPage:[],status:!1},{url:"/view_post_list/category/history",showName:"歷史故事",subPage:[],status:!1},{url:"/view_post_list/category/art",showName:"藝文介紹",subPage:[],status:!1},{url:"/view_post_list/category/travel",showName:"旅行專欄",subPage:[],status:!1}]}];

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={index:{path:"/",method:"get",page:__webpack_require__(233)["default"]},viewAfricaNations:{path:"/view_africa_nations",method:"get",page:__webpack_require__(234)["default"]},viewAfricaNationsPost:{path:"/view_africa_nations/posts/:post",method:"get",page:__webpack_require__(234)["default"]},viewPostList:{path:"/view_post_list/category/:category",method:"get",page:__webpack_require__(622)["default"]},viewPostListTag:{path:"/view_post_list/tag/:tag",method:"get",page:__webpack_require__(623)["default"]},viewPostListAuthor:{path:"/view_post_list/author/:author",method:"get",page:__webpack_require__(621)["default"]},viewPost:{path:"/view_post_list/posts/:post",method:"get",page:__webpack_require__(624)["default"]},aboutAuthors:{path:"/about_authors",method:"get",page:__webpack_require__(617)["default"]},aboutUs:{path:"/about_us",method:"get",page:__webpack_require__(618)["default"]},contactUs:{path:"/contact_us",method:"get",page:__webpack_require__(619)["default"]},ugandaLetter:{path:"/activity/uganda_letter",method:"get",page:__webpack_require__(620)["default"]}};

/***/ },
/* 615 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={origin:{title:"活動源起",picture:["u-origin.jpg"],content:"在台灣，多數的學生只知歐美日韓，<br/>其他地區不僅是陌生之所，且無從了解，<br/>因此，由穿梭於烏干達農村的志工王怡珺與南方家園出版社，<br/>共同推動「國際筆友交流計畫」，讓烏干達與台灣的小朋友更加了<br/>解彼此的文化與生活！<br/><br/>因此,我們希望由老師帶領班上學生一起參與這項計畫。<br/><br/>計畫合作人簡介：<br/><br/>王怡珺去年6月自台灣大學工業管理系畢業後，加入Peace Corps，執行USAID Feed the Future計畫，是美國歐巴馬政府推動的重點計畫，工作重點在於讓中盤商價格透明、合理，並進行財務管理訓練、諮詢，改善烏干達的農業狀況。<br/><br/>每天，王怡珺穿梭在烏干達農村，聽著他們飛天遁地的神話傳說，<br/>卻眼睜睜看著全球化浪潮,吞噬他們的傳統，<br/>她和烏干達的朋友決定發起一場當地的閱讀革命，<br/>出版一系列買得到、買得起，改編自傳統故事的雙語童書。<br/>"},method:{title:"活動方式",picture:["u-o-1.jpg","u-o-2.jpg","u-o-3.jpg","u-o-4.jpg","u-o-5.jpg"],content:"烏干達方面<br/><br/>班級人數:160人<br/><br/>年齡:小學五年級(110人)和小學六年級(50人)<br/><br/>兩個月一次,一個學期約寫2封信。<br/><br/><br/>台灣方面<br/><br/>班級人數:30人 (3~4個班級對一個烏干達班級)<br/><br/>年齡:小五~國二<br/><br/>兩個月一次,一個學期約寫2封信<br/>"},introduction:{title:"烏干達小介紹",picture:["u-origin.jpg"],content:"烏干達小介紹"},firstLetter:{title:"第一封信",picture:["u-1-1.jpg","u-1-2.jpg","u-1-3.jpg","u-1-4.jpg","u-1-5.jpg","u-1-6.jpg","u-1-7.jpg"],content:"烏干達方面<br/><br/>第一堂課：教導同學哪裡是亞洲和台灣，討論對亞洲的既定印象與非洲的異同，輸出照片讓同學傳閱，或者播放台灣相關紀錄片。同學們用繪畫或是簡單的英文寫一個小故事介紹自己，並在信件的最後，問台灣筆友一些問題。<br/><br/><br/>台灣方面<br/><br/>第一堂課：老師能在課堂上先和同學介紹烏干達和非洲，非洲的地理位置、風俗民情、歷史等，可以搭配電影教學，像是《烏干達天空下》等電影，大家能夠討論對非洲的想法。同學們可以用繪畫或是簡單的英文寫一個小故事介紹自己等等，最後可以問非洲的同學一些問題。<br/>"},secondLetter:{title:"第二封信",picture:["u-2-1.jpg","u-2-2.jpg","u-2-3.jpg","u-2-4.jpg","u-2-5.jpg"],content:"烏干達方面<br/><br/>第二堂課：收到來自台灣的信，互相分享信中的內容，跟原本想像的有什麼不一樣的地方？有什麼一樣的地方?介紹自己的文化給台灣的同學（例如最喜歡的故事、介紹自己的住所，或慶典），並回答信中的問題。<br/><br/><br/>台灣方面<br/><br/>第二堂課：收到還自烏干達的信，大家互相分享信中的內容，跟原本想像的有什麼不一樣的地方？有什麼一樣的地方？介紹自己的文化給烏干達的同學，可以分享最喜歡的故事、自己的家鄉、或是慶典節慶，回答信中的問題。<br/>"},thirdLetter:{title:"第三封信",picture:["u-origin.jpg"],content:"烏干達方面<br/><br/>第三堂課：收到來自台灣的回信，和台灣的班級視訊說「嗨～」，並表演傳統歌舞。<br/><br/><br/>台灣方面<br/><br/>第三堂課：收到來自烏干達的回信，和烏干達的班級視訊說「嗨～」<br/>"}};

/***/ },
/* 616 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={MAP_EVENT:"MAP_EVENT"};

/***/ },
/* 617 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_AuthorsStore=__webpack_require__(235),_AuthorsStore2=_interopRequireDefault(_AuthorsStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_reactSemantify=__webpack_require__(34),AuthorsBox=_react2["default"].createClass({displayName:"AuthorsBox",getInitialState:function(){return{authors:_AuthorsStore2["default"].getAll()}},componentDidMount:function(){_AuthorsStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_AuthorsStore2["default"].removeChangeListener(this._onChange)},componentDidUpdate:function(){},render:function(){var e=this,t=this.state.authors.map(function(t){return _react2["default"].createElement("a",{className:"card",href:"/view_post_list/author/"+t.name,onClick:e._onClick,key:t.id},_react2["default"].createElement(_reactSemantify.Image,{src:t.photoUrl,style:{minHeight:0,minWidth:0}}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("div",{className:"header"},t.name),_react2["default"].createElement("div",{className:"meta"},t.from),_react2["default"].createElement("div",{className:"description"},t.description)))});return _react2["default"].createElement("div",{className:"ui centered cards"},t)},_onChange:function(){this.setState({authors:_AuthorsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget,a=t.pathname,r=t.hash;history.pushState({pathname:a,hash:r},"",a),_RouteAction2["default"].updatePath(a,r),e.preventDefault()}});exports["default"]=_react2["default"].createClass({displayName:"AboutAuthorsPage",componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0)},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement("div",{className:"ui page grid"},_react2["default"].createElement("div",{className:"wide centered column"},_react2["default"].createElement(AuthorsBox,null)))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames2=__webpack_require__(83),_classnames3=_interopRequireDefault(_classnames2),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_MemberConfig=__webpack_require__(612),_MemberConfig2=_interopRequireDefault(_MemberConfig),_index=__webpack_require__(430),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34),Section=function(e){var t=e.title,a=e.imageUrl,l=void 0===a?"":a,r=e.children,c=e.className;return _react2["default"].createElement("div",{className:(0,_classnames3["default"])(c,_index2["default"].goal)},_react2["default"].createElement("div",{className:"ui fluid container"},_react2["default"].createElement(_reactSemantify.Segment,{className:"basic center aligned"},function(){if(""!==l)return _react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:l})}(),_react2["default"].createElement(_reactSemantify.Header,{className:"center aligned huge title"},t),r)))},Button=function(e){var t=e.href,a=e.children,l=e.active,r=void 0===l?"":l;return _react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{href:t,className:(0,_classnames3["default"])("ui fluid huge button",_index2["default"].aboutButton,_defineProperty({},_index2["default"].hover,r)),style:{borderRadius:"0px"}},a))},Buttons=function(e){var t=e.active,a=[{href:"#header",value:"關於 wowAfrica",active:!1},{href:"#story",value:"我們的故事與團隊",active:!1},{href:"#partner",value:"合作夥伴",active:!1}];return a[t].active=!0,_react2["default"].createElement("div",{className:"ui five column stackable grid"},_react2["default"].createElement("div",{className:"two wide column"}),a.map(function(e){return _react2["default"].createElement(Button,{href:e.href,active:e.active},e.value)}),_react2["default"].createElement("div",{className:"two wide column"}))},HeaderSection=function(){return _react2["default"].createElement("div",{className:_index2["default"].headerSection,id:"header"},_react2["default"].createElement("div",{className:(0,_classnames3["default"])("ui container",_index2["default"].index)},_react2["default"].createElement("div",{className:"ui three column grid"},_react2["default"].createElement("div",{className:"five wide column"}),_react2["default"].createElement("div",{className:"six wide column"},_react2["default"].createElement(_reactSemantify.Image,{className:"centered medium",src:"/images/website-color.png"}),_react2["default"].createElement(_reactSemantify.Divider,{className:_index2["default"].headerDivider}),_react2["default"].createElement(_reactSemantify.Header,{className:(0,_classnames3["default"])("center aligned huge",_index2["default"].title)},"台灣最大的非洲平台網站")),_react2["default"].createElement("div",{className:"five wide column"})),_react2["default"].createElement("div",{className:_index2["default"].headerButton},_react2["default"].createElement(Buttons,{active:0}))),_react2["default"].createElement(Section,{imageUrl:"/images/telescope_trans.png",title:"願景"},_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們的目標是，打造出台灣最大的「非洲資訊平台」",_react2["default"].createElement("br",null),"作為台灣與非洲的橋樑。",_react2["default"].createElement("br",null),"翻轉台灣對非洲的刻板印象，"),_react2["default"].createElement("p",null,"增進對非洲大陸的新知，提供台灣人認識非洲的最佳管道;",_react2["default"].createElement("br",null),"同時藉由直接貿易，結合社會議題進行商品販售。"),_react2["default"].createElement("p",null,"我們期待在不久的將來能夠看到越來越多台灣與非洲大陸在人才、",_react2["default"].createElement("br",null),"產品、技術有更多的交流。")),_react2["default"].createElement(Section,{imageUrl:"/images/question_mark.png",title:"為什麼要認識非洲?"},_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們常說的地球村與國際觀，其實往往僅侷限於歐美日韓與中國，",_react2["default"].createElement("br",null),"少有往世界其他地方認識的機會。",_react2["default"].createElement("br",null),"非洲一直被視為戰亂、貧窮、落後的集合體，但真的是這樣嗎?"),_react2["default"].createElement("p",null,"肯亞擁有世界最成功的手機行動支付系統",_react2["default"].createElement("br",null),"盧安達走出1994年種族大屠殺的傷痛，實現了轉型正義，",_react2["default"].createElement("br",null),"亦為全世界第一個禁用塑膠袋的國家",_react2["default"].createElement("br",null),"奈及利亞除了是非洲最大石油出口國之外以及人口紅利的經濟市",_react2["default"].createElement("br",null),"場，其電影產業「奈萊塢」產量為世界第二。",_react2["default"].createElement("br",null),"衣索比亞擺脫過往飢荒的形象，先進的機場以及輕軌系統，",_react2["default"].createElement("br",null),"並立志成為非洲的要角"),_react2["default"].createElement("p",null,"若我們只是追著「先進」國家的腳步後頭追，",_react2["default"].createElement("br",null),"那麼將永遠走不出自己的路。",_react2["default"].createElement("br",null),"非洲一方面疾病、戰爭、衝突頻繁，",_react2["default"].createElement("br",null),"另方面也有許多我們從未想過的面向值得我們",_react2["default"].createElement("br",null),"取經與學習。讓我們來一起認識非洲吧!")))},ShowFunc=function(){return _react2["default"].createElement("div",{className:"ui seven column stackable grid"},_react2["default"].createElement("div",{className:"four wide column"}),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"行動"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/action_trans.png"})),_react2["default"].createElement("div",{className:"one wide column"},_react2["default"].createElement("div",{className:"content"},"=")),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"資訊"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/information_trans.png"})),_react2["default"].createElement("div",{className:"one wide column"},_react2["default"].createElement("div",{className:"content"},"+")),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"體驗"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/experience_trans.png"})),_react2["default"].createElement("div",{className:"four wide column"}))},Member=function(e){var t=e.name,a=e.title;return _react2["default"].createElement("div",{className:_index2["default"].member},_react2["default"].createElement("div",null,t),_react2["default"].createElement("div",null,a))},ShowTeam=function(){return console.log(_MemberConfig2["default"]),_react2["default"].createElement("div",{className:"ui four column stackable grid"},_react2["default"].createElement("div",{className:"three wide column"}),_react2["default"].createElement("div",{className:"five wide column"},_MemberConfig2["default"].map(function(e,t){if(t<5)return _react2["default"].createElement(Member,{name:e.name,title:e.title})})),_react2["default"].createElement("div",{className:"five wide column"},_MemberConfig2["default"].map(function(e,t){if(t>=5)return _react2["default"].createElement(Member,{name:e.name,title:e.title})})),_react2["default"].createElement("div",{className:"three wide column"}))},StorySection=function(){return _react2["default"].createElement("div",{className:_index2["default"].storySection,id:"story"},_react2["default"].createElement("div",{className:_index2["default"].storyButton},_react2["default"].createElement("div",{className:"ui container index"},_react2["default"].createElement(Buttons,{active:1}))),_react2["default"].createElement(Section,{title:"大膽出走,看見非洲"},_react2["default"].createElement("br",null),_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們是一群熱愛非洲的台灣年輕人。"),_react2["default"].createElement("p",null,"2014年我們各自探訪了10個非洲國家，"),_react2["default"].createElement("p",null,"進行2~3個月的研究旅行。"),_react2["default"].createElement("p",null,"旅程過程中我們觀察到非洲大陸上有著許多台灣所忽視的改變以及機會。"),_react2["default"].createElement("p",null,"回臺灣後，我們努力構築一個非洲資訊整合平台。"),_react2["default"].createElement("p",null,"讓台灣認識長年忽視的非洲大陸，增加國際視野，"),_react2["default"].createElement("p",null,"也希望看到越來越多台灣與非洲之間的交流產生。")),_react2["default"].createElement(Section,{className:_index2["default"].wowFunc,title:"wowAfrica方程式："},_react2["default"].createElement("br",null),_react2["default"].createElement(ShowFunc,null),_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們相信資訊的傳遞不只是冷冰冰的文字，"),_react2["default"].createElement("p",null,"而是透過實體的交流與體驗，以輕鬆、多元、有趣的方式"),_react2["default"].createElement("p",null,"才能達到深刻的知識傳遞wowAfrica邀請去過非洲的台灣人以及在台灣的非"),_react2["default"].createElement("p",null,"洲人來到活動現場分享他們的非洲經驗以及觀察，"),_react2["default"].createElement("p",null,"並以換桌會議的形式深入探討我們也舉辦展覽、"),_react2["default"].createElement("p",null,"讓台灣認識長年忽視的非洲大陸，增加國際視野，"),_react2["default"].createElement("p",null,"非洲美食日等活動讓台灣認識非洲。"),_react2["default"].createElement("div",{className:_index2["default"].videoContainer},_react2["default"].createElement("div",{className:_index2["default"].video},_react2["default"].createElement("iframe",{src:"https://www.youtube.com/embed/o1_-2SDwAXU",frameborder:"0",allowfullscreen:!0})))),_react2["default"].createElement(Section,{title:"團隊成員"},_react2["default"].createElement(ShowTeam,null)))},PartnerSection=function(){return _react2["default"].createElement("div",{className:"partner-section",id:"partner"},_react2["default"].createElement("div",{className:_index2["default"].partnerButton},_react2["default"].createElement("div",{className:"ui container index"},_react2["default"].createElement(Buttons,{active:2}))),_react2["default"].createElement("div",{className:"ui six column stackable grid"},_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//homewardpublish.wordpress.com/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_A_homeward.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//npost.tw/archives/author/wowafrica",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_B_npost.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//www.africa.org.tw/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_C_ATEF_.png"}))),_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"four wide column"}),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//www.seinsights.asia/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_D_sei.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//buzzorange.com/author/wowafrica/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_E_buzzorange.png"}))),_react2["default"].createElement("div",{className:"four wide column"})))};exports["default"]=_react2["default"].createClass({displayName:"AboutUsPage",componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0)},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(HeaderSection,null),_react2["default"].createElement(StorySection,null),_react2["default"].createElement(PartnerSection,null)),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_index=__webpack_require__(431),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"ContactUsPage",componentDidMount:function(){$("#category-menu").hide()},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{style:{paddingTop:"180px"}},_react2["default"].createElement("div",{className:"ui two column stackable grid"},_react2["default"].createElement("div",{className:"seven wide column"},_react2["default"].createElement("div",{className:_index2["default"].contactUsBox},_react2["default"].createElement("div",{className:"ui two column grid"},_react2["default"].createElement("div",{className:"ten wide column"},_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxTitle},"聯絡我們")),_react2["default"].createElement("div",{className:"column"})),_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxInner},_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxContent},"如果想要可以即時和我們展開討論，請追蹤我們的粉絲團，掌握最新動態。"),_react2["default"].createElement("a",{href:"https://www.facebook.com/wowafrica.tw/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/rb_facebook.png",style:{width:"50px",margin:"3px"}})),_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxContent},"或者可以填寫聯絡表單，我們會以 Email 和您聯繫！")))),_react2["default"].createElement("div",{className:"column"},_react2["default"].createElement("div",{id:_index2["default"].contactForm,className:"ui large form"},_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"稱謂"),_react2["default"].createElement("input",{id:"nameInput",type:"text"})),_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"Email"),_react2["default"].createElement("input",{id:"emailInput",type:"text"})),_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"內容"),_react2["default"].createElement("textarea",{id:"contentInput"})),_react2["default"].createElement("div",{className:"ui error message"},"oops! 現在有些問題，請稍候再試"),_react2["default"].createElement("div",{className:"ui grid"},_react2["default"].createElement("div",{className:"nine wide column"}),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{id:_index2["default"].submitBtn,onClick:this._onSubBtnClick,className:"ui submit button",style:{}},"發送"))))))))},_onSubBtnClick:function(e){$("#"+_index2["default"].contactForm).removeClass("error"),$("#"+_index2["default"].submitBtn).removeClass("button").addClass("loading button");$.ajax({url:"https://script.google.com/macros/s/AKfycbw2q99zSLMh2kKqXUT4QD5CRtCACbJL8Xun7s7Y_jvO5lzJHno/exec",type:"post",data:{"稱謂":$("#nameInput")[0].value,Email:$("#emailInput")[0].value,"內容":$("#contentInput")[0].value}}).done(function(e){$("#"+_index2["default"].submitBtn).text("完成!")}).fail(function(e){$("#"+_index2["default"].contactForm).addClass("error")}).always(function(){$("#"+_index2["default"].submitBtn).removeClass("loading button").addClass("button")})}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 620 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(83),_classnames2=_interopRequireDefault(_classnames),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_UgandaLetterConfig=__webpack_require__(615),_UgandaLetterConfig2=_interopRequireDefault(_UgandaLetterConfig),_index=__webpack_require__(433),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"UgandaLetter",getInitialState:function(){return _UgandaLetterConfig2["default"].origin},componentDidMount:function(){window.scroll(0,0),$("#category-menu").hide()},_onClick:function(e){e.preventDefault(),this.setState(_UgandaLetterConfig2["default"][e.target.id])},pictureDiv:function(e){var t="showroomAnima"+e.length;return e.map(function(e,a){return _react2["default"].createElement("div",{key:"pic"+a,className:(0,_classnames2["default"])(_index2["default"].showroomPosition,_index2["default"].showroomImg,_index2["default"][t]),style:{backgroundImage:"url(/images/uganda/"+e+")",animationDelay:3*a+"s"}},_react2["default"].createElement("span",null))})},render:function(){var e=this.state,t=e.title,a=e.picture,r=e.content;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content",style:{backgroundColor:"rgb(230,236,240)"}},_react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement("div",{className:"ui stackable grid",style:{width:"inherit",marginLeft:"0"}},_react2["default"].createElement("div",{className:_index2["default"].ugandaShowroom},this.pictureDiv(a)),_react2["default"].createElement("div",{className:"row"},_react2["default"].createElement("div",{className:"column"},_react2["default"].createElement("div",{className:"ui grid",style:{paddingTop:"10px"}},_react2["default"].createElement("div",{className:"one wide column",style:{height:0}}),_react2["default"].createElement("div",{className:"fifteen wide column",style:{textAlign:"left",textDecoration:"underline",fontSize:"1.6rem",paddingTop:"20px"}},_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(190,156,194)"}}," UGANDA PENPAL ")),_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(230,236,240)"}}," 烏干達筆友 ")),_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(230,236,240)"}}," ",t," ")))))),_react2["default"].createElement("div",{className:"row",style:{height:"20em"}}),_react2["default"].createElement("div",{className:"row"},_react2["default"].createElement("div",{className:"five wide column",style:{textAlign:"left",textDecoration:"underline",fontSize:"1.6rem",paddingTop:"20px"}},_react2["default"].createElement("div",{className:"ui grid",style:{paddingTop:"3em",backgroundColor:"rgb(150,0,31)"}},_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"fourteen wide column"},_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"origin",style:{backgroundColor:"rgb(255,255,220)"}}," 活動源起 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"method",style:{backgroundColor:"rgb(255,255,220)"}}," 活動方式 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"introduction",style:{backgroundColor:"rgb(255,255,220)"}}," 烏干達小介紹 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"firstLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第一封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"secondLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第二封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"thirdLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第三封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle})))),_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"ten wide column",style:{paddingTop:"6em",textAlign:"left",fontSize:"1.5rem",lineHeight:"2em"}},_react2["default"].createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),_react2["default"].createElement("div",{style:{height:"100px"}})))),_react2["default"].createElement("div",{id:"footer-divider"}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 621 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_AuthorSection=__webpack_require__(597),_AuthorSection2=_interopRequireDefault(_AuthorSection),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListAuthorPage",componentDidMount:function(){window.scroll(0,0)},render:function(){var e=decodeURIComponent(_RouteStore2["default"].getCurrentRoute().params.author)||"賴奕諭";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(_AuthorSection2["default"],{author:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_CategorySection=__webpack_require__(599),_CategorySection2=_interopRequireDefault(_CategorySection),_NewSection=__webpack_require__(604),_NewSection2=_interopRequireDefault(_NewSection),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListPage",componentDidMount:function(){window.scroll(0,0)},componentDidUpdate:function(){window.scroll(0,0)},render:function(){var e=_RouteStore2["default"].getCurrentRoute().params.category||"news";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},"new"===e?_react2["default"].createElement(_NewSection2["default"],null):_react2["default"].createElement(_CategorySection2["default"],{category:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_TagSection=__webpack_require__(610),_TagSection2=_interopRequireDefault(_TagSection),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListTagPage",componentDidMount:function(){window.scroll(0,0)},render:function(){var e=decodeURIComponent(_RouteStore2["default"].getCurrentRoute().params.tag)||"非洲";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(_TagSection2["default"],{tag:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(83),_classnames2=_interopRequireDefault(_classnames),_IndexMenu=__webpack_require__(43),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(42),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(51),_Footer2=_interopRequireDefault(_Footer),_ShareButton=__webpack_require__(607),_ShareButton2=_interopRequireDefault(_ShareButton),_ReadMoreBlock=__webpack_require__(606),_ReadMoreBlock2=_interopRequireDefault(_ReadMoreBlock),_PostStore=__webpack_require__(628),_PostStore2=_interopRequireDefault(_PostStore),_AuthorsStore=__webpack_require__(235),_AuthorsStore2=_interopRequireDefault(_AuthorsStore),_RouteAction=__webpack_require__(22),_RouteAction2=_interopRequireDefault(_RouteAction),_index=__webpack_require__(435),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(34);exports["default"]=_react2["default"].createClass({displayName:"ViewPostPage",getInitialState:function(){return{authors:_AuthorsStore2["default"].getAll(),post:_PostStore2["default"].getPost(),loader:_PostStore2["default"].getLoader()}},componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0),_PostStore2["default"].addChangeListener(this._onChange),_AuthorsStore2["default"].addChangeListener(this._onAuthorChange)},componentWillUnmount:function(){_PostStore2["default"].removeChangeListener(this._onChange),_AuthorsStore2["default"].removeChangeListener(this._onAuthorChange)},componentDidUpdate:function(){window.scroll(0,0)},getAuthor:function(){var e=this.state,t=e.authors,a=e.post,r={name:"wowAfrica",description:"",photoUrl:""};if(t.length>0){var n=t.filter(function(e){return e.name===a.author});n.length>0&&(r=n[0])}return r},render:function(){var e=this,t=this.state,a=t.post,r=t.loader,n=a.body,l=a.title,o=a.image,u=a.tags,i=void 0===u?[]:u,c=a.date,s=void 0===c?"":c,d=this.getAuthor(),_=d.name,f=d.description,m=d.photoUrl,h=this.props.pageUrl,g=o?o.replace(/_540.jpg/g,"_1280.jpg"):o;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:_index2["default"].postImage,style:{backgroundImage:"url("+g+")",backgroundPosition:"center"}},_react2["default"].createElement("div",{className:_index2["default"].inner},_react2["default"].createElement("div",{className:_index2["default"].innerTitle},l))),_react2["default"].createElement("div",{className:"ui stackable four column grid"},_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"ten wide column"},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("very padded basic",_index2["default"].containerPost,_index2["default"].antiVeryPadded)},_react2["default"].createElement("div",{className:(0,_classnames2["default"])("ui inverted dimmer",{active:r})},_react2["default"].createElement("div",{className:"ui text loader"},"Loading")),_react2["default"].createElement("div",null,_react2["default"].createElement("em",{style:{color:"rgba(0, 0, 0, 0.3)"}},s.substring(0,10).replace(/-/g,"."))),_react2["default"].createElement("br",null),_react2["default"].createElement("div",{dangerouslySetInnerHTML:{__html:n}}),_react2["default"].createElement("br",null),_react2["default"].createElement("div",{className:"ui brown tag labels"},i.map(function(t){return _react2["default"].createElement("a",{className:"ui tag label",href:"/view_post_list/tag/"+t,onClick:e._onClick},t)})),_react2["default"].createElement("br",null),_react2["default"].createElement(_ShareButton2["default"],{pageUrl:h}),_react2["default"].createElement("div",{style:{height:"10px"}}),_react2["default"].createElement(_ReadMoreBlock2["default"],{postId:h.substr(h.lastIndexOf("/")+1)}))),_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:(0,_classnames2["default"])("four wide column",_index2["default"].sectionPostAuthor),style:{backgroundColor:"#305775"}},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("center aligned basic",_index2["default"].containerPostAuthor),style:{height:"100%",position:"absolute"}},_react2["default"].createElement("a",{href:"/view_post_list/author/"+_,onClick:this._onClick},_react2["default"].createElement(_reactSemantify.Image,{className:"small centered circular",src:m}),_react2["default"].createElement("div",null,_)),_react2["default"].createElement("div",{style:{padding:"0 1rem",textAlign:"left"}},f)))),_react2["default"].createElement("div",{id:"footer-divider"}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))},_onChange:function(){this.setState({post:_PostStore2["default"].getPost(),loader:!1})},_onAuthorChange:function(){this.setState({authors:_AuthorsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget,a=t.pathname,r=t.hash;history.pushState({pathname:a,hash:r},"",a),_RouteAction2["default"].updatePath(a,r),e.preventDefault()}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(116),_tumblrPost2=_interopRequireDefault(_tumblrPost),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),PostListAuthorStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.postList={},t.postList["default"]={name:"default",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t}return _inherits(e,t),_createClass(e,[{key:"getListContainer",value:function(t){return"undefined"!=typeof this.postList[t]?this.postList[t]:this.postList["default"]}},{key:"getPostList",value:function(t){return"undefined"!=typeof this.postList[t]?this.postList[t].posts:this.postList["default"].posts}},{key:"onReceviceUpdatePostList",value:function(t,e){var s=this;_superagent2["default"].get(_PostListConstants2["default"].POST_LIST_AUTHOR_URL).end(function(e,o){e?console.log("Cannot get author json"):(s.postList[t]||(s.postList[t]={}),s.postList[t].posts=[],s.postList[t].totalPostNum=0,s.postList[t].parsedPostNum=0,o.body[t].forEach(function(t){s.client.posts(_TumblrConfig2["default"].blogName,{id:t},s.updateList.bind(s))}))})}},{key:"updateList",value:function(t,e){var s=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(e);o.length>0&&(o.forEach(function(t){s.postList[t.author].posts.push(t)}),this.postList[o[0].author].totalPostNum+=e.posts.length,this.postList[o[0].author].parsedPostNum+=e.posts.length,this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT,t)}}]),e}(_events.EventEmitter),postListAuthorStore=new PostListAuthorStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_AUTHOR_UPDATE:break;case _RouteConstants2["default"].ROUTE_POST_LIST_AUTHOR_PAGE:postListAuthorStore.onReceviceUpdatePostList(t.author,_TumblrConfig2["default"].postList.loadAmount)}}),exports["default"]=postListAuthorStore;

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var s=e[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,o,s){return o&&t(e.prototype,o),s&&t(e,s),e}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(116),_tumblrPost2=_interopRequireDefault(_tumblrPost),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),PostListReadMoreStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.allPostList=[],t.allPosts={},t.randomPosts=[],t}return _inherits(e,t),_createClass(e,[{key:"getRandomPosts",value:function(){return this.randomPosts}},{key:"onUpdateRandomPostList",value:function(t,e){var o=this;this.randomPosts=[],this.allPostList.length<=0?_superagent2["default"].get(_PostListConstants2["default"].POST_LIST_ALL_URL).end(function(s,n){s?console.log("Cannot get all post json"):(o.allPostList=n.body,o.chooseRandomPosts(t,e))}):this.chooseRandomPosts(t,e)}},{key:"chooseRandomPosts",value:function(t,e){var o=this;this.allPostList.length<t&&(t=this.allPostList.length);for(var s=[];s.length<t;){var n=Math.floor(Math.random()*this.allPostList.length+1);s.indexOf(n)==-1&&this.allPostList[n-1]!==e&&s.push(n)}s.forEach(function(t){var e=o.allPostList[t-1];"undefined"!=typeof o.allPosts[e]?o.updateRandomPost(e):o.updateRandomPostFromServer(e)})}},{key:"updateRandomPost",value:function(t){this.randomPosts.push(this.allPosts[t]),this.emitChange()}},{key:"updateRandomPostFromServer",value:function(t){this.client.posts(_TumblrConfig2["default"].blogName,{id:t},this.updateRandomPostFromTumblr.bind(this))}},{key:"updateRandomPostFromTumblr",value:function(t,e){var o=this;if(t)console.log(t.stack);else{var s=_tumblrPost2["default"].parsePosts(e);s.length>0&&(s.forEach(function(t){o.allPosts[t.id]=t,o.randomPosts.push(t)}),this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_READMORE_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_READMORE_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_READMORE_EVENT,t)}}]),e}(_events.EventEmitter),postListReadMoreStore=new PostListReadMoreStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_READMORE_UPDATE:postListReadMoreStore.onUpdateRandomPostList(t.amount,t.postId)}}),exports["default"]=postListReadMoreStore;

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(80),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(116),_tumblrPost2=_interopRequireDefault(_tumblrPost),PostListTagStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.postList={name:"",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t}return _inherits(e,t),_createClass(e,[{key:"getListContainer",value:function(){return this.postList}},{key:"getPostList",value:function(){return this.postList.posts}},{key:"loadMorePosts",value:function(t,e){this.postList.parsedPostNum<this.postList.totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList.parsedPostNum,tag:t,limit:e},this.loadMorePostsTag.bind(this))}},{key:"loadMorePostsTag",value:function(t,e){var s=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(e);o.length>0&&(this.postList.parsedPostNum+=e.posts.length,this.postList.totalPostNum=e.total_posts,o.forEach(function(t){s.postList.posts.push(t)}),this.emitChange())}}},{key:"onReceviceUpdatePostList",value:function(t,e){this.postList.totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:e,tag:t},this.updateList.bind(this))}},{key:"updateList",value:function(t,e){if(t)console.log(t.stack);else{var s=_tumblrPost2["default"].parsePosts(e);s.length>0&&(this.postList.parsedPostNum=e.posts.length,this.postList.totalPostNum=e.total_posts,this.postList.posts=s,this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_TAG_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_TAG_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_TAG_EVENT,t)}}]),e}(_events.EventEmitter),postListTagStore=new PostListTagStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_TAG_UPDATE:break;case _RouteConstants2["default"].ROUTE_POST_LIST_TAG_PAGE:postListTagStore.onReceviceUpdatePostList(t.tag,_TumblrConfig2["default"].postList.loadAmount)}}),exports["default"]=postListTagStore;

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toArray(t){return Array.isArray(t)?t:Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},_createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),_events=__webpack_require__(53),_tumblr=__webpack_require__(78),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(45),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(79),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(44),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostConstants=__webpack_require__(232),_PostConstants2=_interopRequireDefault(_PostConstants),_RouteConstants=__webpack_require__(52),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),PostStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.post={},t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.loader=!0,t}return _inherits(e,t),_createClass(e,[{key:"getPost",value:function(){return this.post}},{key:"getLoader",value:function(){return this.loader}},{key:"setLoader",value:function(t){this.loader=t}},{key:"onReceviceUpdatePosts",value:function(t){this.client.posts(_TumblrConfig2["default"].blogName,{id:t},this.parsePostData.bind(this))}},{key:"parsePostData",value:function(t,e){if(t)console.log(t.stack);else{var o=this.parsePostImage(e.posts[0].body),n=this.parsePostSetting(e.posts[0].body),s=n.settingResult,r=n.body;this.removeTopTag(e.posts[0].tags),this.post=_extends({},e.posts[0],{body:r,image:o},s),this.emitChange()}}},{key:"removeTopTag",value:function(t){var e=t.indexOf(_PostListConfig2["default"].tagMap.top);e!=-1&&t.splice(e,1)}},{key:"parsePostSetting",value:function(t){var e=t.split("<hr>"),o=_toArray(e),n=o[0],s=o.slice(1),r=_PostConfig2["default"].settingContainer;return s.length>0&&(t=s.join("<hr>"),n.match(/[^>]*[：:][^<]*/g).forEach(function(t){var e=t.split(/[：:]/),o=_toArray(e),n=o[0],s=o.slice(1);n in _PostConfig2["default"].settingAlias&&(r[_PostConfig2["default"].settingAlias[n]]=s.join("：").trim())})),{settingResult:r,body:t}}},{key:"parsePostImage",value:function(t){var e=t.match(/<img [^>]*\/>/g);if(e){var o=e[0].match(/http[^\"\'\s]*/);e=o?o[0]:"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg"}else e="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg";return e}},{key:"emitChange",value:function(){this.emit(_PostConstants2["default"].POST_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostConstants2["default"].POST_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostConstants2["default"].POST_EVENT,t)}}]),e}(_events.EventEmitter),postStore=new PostStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _RouteConstants2["default"].ROUTE_POST_PAGE:postStore.onReceviceUpdatePosts(t.postID)}}),exports["default"]=postStore;

/***/ },
/* 629 */
/***/ function(module, exports) {



/***/ },
/* 630 */,
/* 631 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};
	
	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }
	
	  var regexp = /\+/g;
	  qs = qs.split(sep);
	
	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }
	
	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }
	
	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;
	
	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }
	
	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);
	
	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }
	
	  return obj;
	};
	
	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 632 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	'use strict';
	
	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;
	
	    case 'boolean':
	      return v ? 'true' : 'false';
	
	    case 'number':
	      return isFinite(v) ? v : '';
	
	    default:
	      return '';
	  }
	};
	
	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }
	
	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	
	  }
	
	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};
	
	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};
	
	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}
	
	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};


/***/ }
]);
//# sourceMappingURL=bundle.js.map