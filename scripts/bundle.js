webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_App=__webpack_require__(623),_App2=_interopRequireDefault(_App),_NationModal=__webpack_require__(639),_NationModal2=_interopRequireDefault(_NationModal),_SideBar=__webpack_require__(644),_SideBar2=_interopRequireDefault(_SideBar),_Provider=__webpack_require__(669),_Provider2=_interopRequireDefault(_Provider),_stores=__webpack_require__(668),_stores2=_interopRequireDefault(_stores);__webpack_require__(451);var pathName=location.pathname;console.log(pathName),_reactDom2["default"].render(_react2["default"].createElement(_SideBar2["default"],null),document.getElementById("side_bar")),_reactDom2["default"].render(_react2["default"].createElement(_Provider2["default"],{store:(0,_stores2["default"])(window.__state__)},_react2["default"].createElement(_App2["default"],null)),document.getElementById("content")),_reactDom2["default"].render(_react2["default"].createElement(_NationModal2["default"],null),document.getElementById("nation_modal")),_RouteAction2["default"].updatePath(pathName),window.onpopstate=function(e){var t=location.pathname;null!==e.state&&"undefined"!=typeof e.state.pathname&&(t=e.state.pathname),console.log(t),_RouteAction2["default"].updatePath(t)};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_classGenerator2=__webpack_require__(485),_classGenerator3=_interopRequireDefault(_classGenerator2),_colorFilter2=__webpack_require__(486),_colorFilter3=_interopRequireDefault(_colorFilter2),_stateFilter2=__webpack_require__(488),_stateFilter3=_interopRequireDefault(_stateFilter2),_typeFilter2=__webpack_require__(489),_typeFilter3=_interopRequireDefault(_typeFilter2),_nameSetter=__webpack_require__(487),_nameSetter2=_interopRequireDefault(_nameSetter),FilterFactory=function(){function e(t){_classCallCheck(this,e),this.ComposeComponent=t}return _createClass(e,[{key:"classGenerator",value:function(e){return this.ComposeComponent=(0,_classGenerator3["default"])(e,this.ComposeComponent),this}},{key:"colorFilter",value:function(){return this.ComposeComponent=(0,_colorFilter3["default"])(this.ComposeComponent),this}},{key:"stateFilter",value:function(e){return this.ComposeComponent=(0,_stateFilter3["default"])(e,this.ComposeComponent),this}},{key:"typeFilter",value:function(){return this.ComposeComponent=(0,_typeFilter3["default"])(this.ComposeComponent),this}},{key:"getComposeComponent",value:function(e){return(0,_nameSetter2["default"])(e,this.ComposeComponent)}}]),e}();exports["default"]=FilterFactory;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),Div=function(e){var t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",r,t)};exports["default"]=Div;

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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_NationAction=__webpack_require__(236),_NationAction2=_interopRequireDefault(_NationAction),_PostListAction=__webpack_require__(237),_PostListAction2=_interopRequireDefault(_PostListAction),_AuthorAction=__webpack_require__(624),_AuthorAction2=_interopRequireDefault(_AuthorAction),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),RouteAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updatePath",value:function(t,e){switch(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_UPDATE_PATH,pathName:t,hash:e}),t=t.split("/"),t[1]){case"about_authors":_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_AUTH_PAGE});break;case"view_africa_nations":_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_MAP_PAGE}),_NationAction2["default"].loadNationData();break;case"view_post_list":t.length>3&&("posts"===t[2]?(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_PAGE,postID:t[3]}),_AuthorAction2["default"].loadAuthorData()):"category"===t[2]?(_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_PAGE,postID:t[3]}),_PostListAction2["default"].updatePostList(t[3],_TumblrConfig2["default"].postList.loadAmount)):"tag"===t[2]?(t[3]=decodeURIComponent(t[3]),_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_TAG_PAGE,tag:t[3]})):"author"===t[2]&&(t[3]=decodeURIComponent(t[3]),_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_POST_LIST_AUTHOR_PAGE,author:t[3]})));break;default:"undefined"!=typeof e&&_AppDispatcher2["default"].dispatch({actionType:_RouteConstants2["default"].ROUTE_HASHTAG,hash:e}),_PostListAction2["default"].updatePostList("top",2),_PostListAction2["default"].updatePostList("new",2),_PostListAction2["default"].updateAllPostList(1)}}}]),t}();exports["default"]=new RouteAction;

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _flux=__webpack_require__(191);exports["default"]=new _flux.Dispatcher;

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(632),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"CategoryMenu",getInitialState:function(){return{categories:_PostListConfig2["default"].categories,nameMap:_PostListConfig2["default"].categoryMap}},render:function(){var e=this.state,t=e.categories,o=e.nameMap;return _react2["default"].createElement(_Component2["default"],{categories:t,nameMap:o,onCategoryClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,o=t.pathname,a=t.hash;history.pushState({pathname:o,hash:a},"",o),_RouteAction2["default"].updatePath(o,a),e.preventDefault()}});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_MenuStore=__webpack_require__(115),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(636),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"IndexMenu",getInitialState:function(){return{currentMenu:_MenuStore2["default"].getAll()}},componentDidMount:function(){function e(){$("#category-menu").slideToggle()}"index"==_RouteStore2["default"].getCurrentRoute().name?$("#btn-article").off("click",e):$("#btn-article").on("click",e)},render:function(){var e=this.state.currentMenu;return _react2["default"].createElement(_Component2["default"],{currentMenu:e,onMenuClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,n=t.hash;history.pushState({pathname:r,hash:n},"",r),_RouteAction2["default"].updatePath(r,n),e.preventDefault()}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Statistic=exports.Items=exports.Item=exports.Feed=exports.Comments=exports.Comment=exports.Card=exports.Ad=exports.Tab=exports.Sticky=exports.Sidebar=exports.Shape=exports.Search=exports.Rating=exports.Progress=exports.Popup=exports.Modal=exports.Embed=exports.Dropdown=exports.Dimmer=exports.Checkbox=exports.Accordion=exports.Steps=exports.Step=exports.Segment=exports.Reveal=exports.Rail=exports.Loader=exports.List=exports.Label=exports.Input=exports.Image=exports.Icon=exports.Header=exports.Flag=exports.Divider=exports.Container=exports.Button=exports.Title=exports.Text=exports.Section=exports.Row=exports.Fields=exports.Field=exports.Content=exports.Column=exports.Table=exports.Message=exports.Menu=exports.Grid=exports.Form=exports.Breadcrumb=void 0;var _breadcrumb=__webpack_require__(455),_breadcrumb2=_interopRequireDefault(_breadcrumb),_form=__webpack_require__(456),_form2=_interopRequireDefault(_form),_grid=__webpack_require__(457),_grid2=_interopRequireDefault(_grid),_menu=__webpack_require__(458),_menu2=_interopRequireDefault(_menu),_message=__webpack_require__(459),_message2=_interopRequireDefault(_message),_table=__webpack_require__(460),_table2=_interopRequireDefault(_table),_column=__webpack_require__(461),_column2=_interopRequireDefault(_column),_content=__webpack_require__(462),_content2=_interopRequireDefault(_content),_field=__webpack_require__(463),_field2=_interopRequireDefault(_field),_fields=__webpack_require__(464),_fields2=_interopRequireDefault(_fields),_row=__webpack_require__(465),_row2=_interopRequireDefault(_row),_section=__webpack_require__(466),_section2=_interopRequireDefault(_section),_text=__webpack_require__(467),_text2=_interopRequireDefault(_text),_title=__webpack_require__(468),_title2=_interopRequireDefault(_title),_button=__webpack_require__(469),_button2=_interopRequireDefault(_button),_container=__webpack_require__(470),_container2=_interopRequireDefault(_container),_divider=__webpack_require__(471),_divider2=_interopRequireDefault(_divider),_flag=__webpack_require__(472),_flag2=_interopRequireDefault(_flag),_header=__webpack_require__(473),_header2=_interopRequireDefault(_header),_icon=__webpack_require__(474),_icon2=_interopRequireDefault(_icon),_image=__webpack_require__(475),_image2=_interopRequireDefault(_image),_input=__webpack_require__(476),_input2=_interopRequireDefault(_input),_label=__webpack_require__(477),_label2=_interopRequireDefault(_label),_list=__webpack_require__(478),_list2=_interopRequireDefault(_list),_loader=__webpack_require__(479),_loader2=_interopRequireDefault(_loader),_rail=__webpack_require__(480),_rail2=_interopRequireDefault(_rail),_reveal=__webpack_require__(481),_reveal2=_interopRequireDefault(_reveal),_segment=__webpack_require__(482),_segment2=_interopRequireDefault(_segment),_step=__webpack_require__(483),_step2=_interopRequireDefault(_step),_steps=__webpack_require__(484),_steps2=_interopRequireDefault(_steps),_accordion=__webpack_require__(490),_accordion2=_interopRequireDefault(_accordion),_checkbox=__webpack_require__(491),_checkbox2=_interopRequireDefault(_checkbox),_dimmer=__webpack_require__(492),_dimmer2=_interopRequireDefault(_dimmer),_dropdown=__webpack_require__(493),_dropdown2=_interopRequireDefault(_dropdown),_embed=__webpack_require__(494),_embed2=_interopRequireDefault(_embed),_modal=__webpack_require__(495),_modal2=_interopRequireDefault(_modal),_popup=__webpack_require__(496),_popup2=_interopRequireDefault(_popup),_progress=__webpack_require__(497),_progress2=_interopRequireDefault(_progress),_rating=__webpack_require__(498),_rating2=_interopRequireDefault(_rating),_search=__webpack_require__(499),_search2=_interopRequireDefault(_search),_shape=__webpack_require__(500),_shape2=_interopRequireDefault(_shape),_sidebar=__webpack_require__(501),_sidebar2=_interopRequireDefault(_sidebar),_sticky=__webpack_require__(502),_sticky2=_interopRequireDefault(_sticky),_tab=__webpack_require__(503),_tab2=_interopRequireDefault(_tab),_advertisement=__webpack_require__(504),_advertisement2=_interopRequireDefault(_advertisement),_card=__webpack_require__(505),_card2=_interopRequireDefault(_card),_comment=__webpack_require__(506),_comment2=_interopRequireDefault(_comment),_comments=__webpack_require__(507),_comments2=_interopRequireDefault(_comments),_feed=__webpack_require__(508),_feed2=_interopRequireDefault(_feed),_item=__webpack_require__(509),_item2=_interopRequireDefault(_item),_items=__webpack_require__(510),_items2=_interopRequireDefault(_items),_statistic=__webpack_require__(511),_statistic2=_interopRequireDefault(_statistic);exports.Breadcrumb=_breadcrumb2["default"],exports.Form=_form2["default"],exports.Grid=_grid2["default"],exports.Menu=_menu2["default"],exports.Message=_message2["default"],exports.Table=_table2["default"],exports.Column=_column2["default"],exports.Content=_content2["default"],exports.Field=_field2["default"],exports.Fields=_fields2["default"],exports.Row=_row2["default"],exports.Section=_section2["default"],exports.Text=_text2["default"],exports.Title=_title2["default"],exports.Button=_button2["default"],exports.Container=_container2["default"],exports.Divider=_divider2["default"],exports.Flag=_flag2["default"],exports.Header=_header2["default"],exports.Icon=_icon2["default"],exports.Image=_image2["default"],exports.Input=_input2["default"],exports.Label=_label2["default"],exports.List=_list2["default"],exports.Loader=_loader2["default"],exports.Rail=_rail2["default"],exports.Reveal=_reveal2["default"],exports.Segment=_segment2["default"],exports.Step=_step2["default"],exports.Steps=_steps2["default"],exports.Accordion=_accordion2["default"],exports.Checkbox=_checkbox2["default"],exports.Dimmer=_dimmer2["default"],exports.Dropdown=_dropdown2["default"],exports.Embed=_embed2["default"],exports.Modal=_modal2["default"],exports.Popup=_popup2["default"],exports.Progress=_progress2["default"],exports.Rating=_rating2["default"],exports.Search=_search2["default"],exports.Shape=_shape2["default"],exports.Sidebar=_sidebar2["default"],exports.Sticky=_sticky2["default"],exports.Tab=_tab2["default"],exports.Ad=_advertisement2["default"],exports.Card=_card2["default"],exports.Comment=_comment2["default"],exports.Comments=_comments2["default"],exports.Feed=_feed2["default"],exports.Item=_item2["default"],exports.Items=_items2["default"],exports.Statistic=_statistic2["default"];

/***/ },
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(634),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"Footer",render:function(){return _react2["default"].createElement(_Component2["default"],{onFooterClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,o=t.hash;history.pushState({pathname:r,hash:o},"",r),_RouteAction2["default"].updatePath(r,o),e.preventDefault()}});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig);exports["default"]={listContainer:{news:{},people:{},nature:{},innovation:{},society:{},history:{},art:{},travel:{},newPosts:{}},postContainer:_extends({id:"",title:"",image:"",category:""},_PostConfig2["default"].settingContainer),categories:["news","people","nature","innovation","society","history","art","travel"],categoryMap:{news:"時事新聞",people:"人物專欄",nature:"自然保育",innovation:"創新應用",society:"社會人文",history:"歷史故事",art:"藝文介紹",travel:"旅行專欄"},categoryMapZh:{"時事新聞":"news","人物專欄":"people","自然保育":"nature","創新應用":"innovation","社會人文":"society","歷史故事":"history","藝文介紹":"art","旅行專欄":"travel"},tagMap:{top:"最新消息"}};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={blogName:"wowafrica.tumblr.com",consumerKey:"M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi",author:{tag:"exploreafrica-tw-author",picWidth:512},nation:{tag:"nation"},postList:{loadAmount:20}};var TumblrActivityConfig=exports.TumblrActivityConfig={blogName:"wowafrica-activity.tumblr.com",consumerKey:"M5o8MnMmq8jAwmmj82HhkyPNkiI6mq9VccTZzYZZLZPgfl08Hi"};

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports) {

	"use strict";function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isObject(e){return"object"===("undefined"==typeof e?"undefined":_typeof(e))&&null!==e}function isUndefined(e){return void 0===e}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(e){if(!isNumber(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},EventEmitter.prototype.emit=function(e){var t,n,i,s,r,o;if(this._events||(this._events={}),"error"===e&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var h=new Error('Uncaught, unspecified "error" event. ('+t+")");throw h.context=t,h}if(n=this._events[e],isUndefined(n))return!1;if(isFunction(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(isObject(n))for(s=Array.prototype.slice.call(arguments,1),o=n.slice(),i=o.length,r=0;r<i;r++)o[r].apply(this,s);return!0},EventEmitter.prototype.addListener=function(e,t){var n;if(!isFunction(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,isFunction(t.listener)?t.listener:t),this._events[e]?isObject(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,isObject(this._events[e])&&!this._events[e].warned&&(n=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!isFunction(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},EventEmitter.prototype.removeListener=function(e,t){var n,i,s,r;if(!isFunction(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||isFunction(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(isObject(n)){for(r=s;r-- >0;)if(n[r]===t||n[r].listener&&n[r].listener===t){i=r;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],isFunction(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},EventEmitter.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?isFunction(this._events[e])?[this._events[e]]:this._events[e].slice():[]},EventEmitter.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(isFunction(t))return 1;if(t)return t.length}return 0},EventEmitter.listenerCount=function(e,t){return e.listenerCount(t)};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={ROUTE_UPDATE_PATH:1,ROUTE_AUTH_PAGE:2,ROUTE_MAP_PAGE:3,ROUTE_POST_PAGE:4,ROUTE_POST_LIST_PAGE:5,ROUTE_POST_LIST_TAG_PAGE:6,ROUTE_HASHTAG:7,ROUTE_EVENT:"ROUTE_EVENT"};

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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(){function e(){for(var o=[],t=0;t<arguments.length;t++){var f=arguments[t];if(f){var r="undefined"==typeof f?"undefined":_typeof(f);if("string"===r||"number"===r)o.push(f);else if(Array.isArray(f))o.push(e.apply(null,f));else if("object"===r)for(var i in f)n.call(f,i)&&f[i]&&o.push(i)}}return o.join(" ")}var n={}.hasOwnProperty;"undefined"!=typeof module&&module.exports?module.exports=e:"function"=="function"&&"object"===_typeof(__webpack_require__(248))&&__webpack_require__(248)?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return e}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.classNames=e}();

/***/ },
/* 71 */,
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var tumblr=__webpack_require__(613);tumblr.request(__webpack_require__(615)),module.exports=tumblr;

/***/ },
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={settingAlias:{"作者":"author","摘要":"brief"},settingContainer:{author:"WOW Africa",brief:""}};

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={POST_LIST_UPDATE:100,POST_LIST_TAG_UPDATE:101,POST_LIST_AUTHOR_UPDATE:102,POST_LIST_READMORE_UPDATE:103,POST_LIST_CATEGORY_EVENT:"POST_LIST_CATEGORY_EVENT",POST_LIST_NEW_EVENT:"POST_LIST_NEW_EVENT",POST_LIST_TOP_EVENT:"POST_LIST_TOP_EVENT",POST_LIST_TAG_EVENT:"POST_LIST_TAG_EVENT",POST_LIST_AUTHOR_EVENT:"POST_LIST_AUTHOR_EVENT",POST_LIST_READMORE_EVENT:"POST_LIST_READMORE_EVENT",POST_LIST_AUTHOR_URL:"/view_post_list/authorPostList.json",POST_LIST_ALL_URL:"/view_post_list/allPostList.json"};

/***/ },
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),link=function(e){var t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("a",r,t)},icon=function(e){var t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("i",r,t)},div=function(e){var t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",r,t)},basicComponentMap={link:link,icon:icon,div:div},Unit=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.type,n=void 0===r?"div":r,o=_objectWithoutProperties(e,["children","type"]),i=basicComponentMap[n];return _react2["default"].createElement(i,o,t)}}]),t}(_react2["default"].Component);exports["default"]=Unit;

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_events=__webpack_require__(52),_routr=__webpack_require__(231),_routr2=_interopRequireDefault(_routr),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_RouteConfig=__webpack_require__(649),_RouteConfig2=_interopRequireDefault(_RouteConfig),_MenuStore=__webpack_require__(115),_MenuStore2=_interopRequireDefault(_MenuStore),RouteStore=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return r.routeConfig=e,r.routeHandler=new _routr2["default"](e),r.currentRoute=r.routeHandler.getRoute("/"),r.currentHash="",r}return _inherits(t,e),_createClass(t,[{key:"getSubPageById",value:function(e){return this.routeConfig[e].subPage}},{key:"getNameById",value:function(e){return this.routeConfig[e].name}},{key:"getCurrentRoute",value:function(){return this.currentRoute}},{key:"getAll",value:function(){return this.routeConfig}},{key:"onReceiveUpdatePath",value:function(e,t){this.currentRoute=this.routeHandler.getRoute(e),this.currentHash="undefined"!=typeof t?t.substring(1):"",this.emitChange()}},{key:"emitChange",value:function(){this.emit(_RouteConstants2["default"].ROUTE_EVENT)}},{key:"addChangeListener",value:function(e){this.on(_RouteConstants2["default"].ROUTE_EVENT,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(_RouteConstants2["default"].ROUTE_EVENT,e)}}]),t}(_events.EventEmitter),routeStore=new RouteStore(_RouteConfig2["default"]);_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_UPDATE_PATH:routeStore.onReceiveUpdatePath(e.pathName,e.hash),_MenuStore2["default"].onReceiveUpdatePath(e.pathName)}}),exports["default"]=routeStore;

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

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function requestActivities(){return{type:REQUEST_ACTIVITIES}}function receiveActivities(t){return{type:RECEIVE_ACTIVITIES,rawApi:t}}function showOldActivities(t){return{type:SHOW_OLD_ACTIVITIES}}function showNewActivities(t){return{type:SHOW_NEW_ACTIVITIES}}function showOtherHost(t){return{type:SHOW_OTHER_HOST}}function showWaHost(t){return{type:SHOW_WA_HOST}}function fetchTumblr(){return new Promise(function(t,e){client.posts(_TumblrConfig.TumblrActivityConfig.blogName,{},function(i,r){i?e(i):t(r)})})}function fetchActivities(){return function(t){return t(requestActivities()),fetchTumblr().then(function(e){t(receiveActivities(e))})}}function showActivity(t){return{type:SHOW_ACTIVITY,activity:t}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SHOW_ACTIVITY=exports.SHOW_WA_HOST=exports.SHOW_OTHER_HOST=exports.SHOW_NEW_ACTIVITIES=exports.SHOW_OLD_ACTIVITIES=exports.RECEIVE_ACTIVITIES=exports.REQUEST_ACTIVITIES=void 0,exports.showOldActivities=showOldActivities,exports.showNewActivities=showNewActivities,exports.showOtherHost=showOtherHost,exports.showWaHost=showWaHost,exports.fetchActivities=fetchActivities,exports.showActivity=showActivity;var _tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig.TumblrActivityConfig.consumerKey}),REQUEST_ACTIVITIES=exports.REQUEST_ACTIVITIES="REQUEST_ACTIVITIES",RECEIVE_ACTIVITIES=exports.RECEIVE_ACTIVITIES="RECEIVE_ACTIVITIES",SHOW_OLD_ACTIVITIES=exports.SHOW_OLD_ACTIVITIES="SHOW_OLD_ACTIVITIES",SHOW_NEW_ACTIVITIES=exports.SHOW_NEW_ACTIVITIES="SHOW_NEW_ACTIVITIES",SHOW_OTHER_HOST=exports.SHOW_OTHER_HOST="SHOW_OTHER_HOST",SHOW_WA_HOST=exports.SHOW_WA_HOST="SHOW_WA_HOST",SHOW_ACTIVITY=exports.SHOW_ACTIVITY="SHOW_ACTIVITY";

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_index=__webpack_require__(440),_index2=_interopRequireDefault(_index),GridCard=function(e){var t=e.id,a=e.title,r=e.brief,i=e.image,l=e.onPostGridClick;return _react2["default"].createElement("a",{className:"card",href:"/view_post_list/posts/"+t,onClick:l},_react2["default"].createElement("div",{className:_index2["default"].postListCardImg,style:{backgroundImage:"url("+i+")"}}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("div",{className:"header"},a),_react2["default"].createElement("div",{className:"meta"},r)))},MoreGridCard=function(e){var t=e.moreButtonLoading,a=e.onMorePostClick;return _react2["default"].createElement("a",{className:"card",onClick:a,style:{boxShadow:"none",display:"flex",alignItems:"center",justifyContent:"center"}},_react2["default"].createElement("div",null,_react2["default"].createElement("div",{id:_index2["default"].postListLoadMoreBtn,className:(0,_classnames2["default"])("ui button",{loading:t})},"載入更多文章")))},PostGrid=function(e){var t=e.title,a=e.posts,r=e.onMorePostClick,i=e.moreButtonLoading,l=e.moreButton,n=void 0!==l&&l,d=e.onPostGridClick;return _react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement("div",{className:_index2["default"].postListTitle},t),_react2["default"].createElement("div",{className:"ui centered cards"},a.map(function(e){return _react2["default"].createElement(GridCard,{id:e.id,key:e.id,title:e.title,brief:e.brief,image:e.image,onPostGridClick:d})}),n?_react2["default"].createElement(MoreGridCard,{moreButtonLoading:i,onMorePostClick:r}):""))};exports["default"]=PostGrid;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var u=n[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(n,t,u){return t&&e(n.prototype,t),u&&e(n,u),n}}(),_MenuConfig=__webpack_require__(648),_MenuConfig2=_interopRequireDefault(_MenuConfig),MenuStore=function(){function e(n){_classCallCheck(this,e),this.menuConfig=n}return _createClass(e,[{key:"getAll",value:function(){return this.menuConfig}},{key:"onReceiveUpdatePath",value:function(e){this.updatePath(e)}},{key:"updatePath",value:function(e){this.menuConfig.forEach(function(n){var t="";n.subPage.forEach(function(n){"undefined"!=typeof n.url&&n.url===e?(n.status=!0,t=n.showName):n.status=!1}),n.currentPage=t})}},{key:"getArticleSubPages",value:function(){var e=!0,n=!1,t=void 0;try{for(var u,r=this.menuConfig[Symbol.iterator]();!(e=(u=r.next()).done);e=!0){var a=u.value;if("文章分類"==a.showName)return a.subPage}}catch(o){n=!0,t=o}finally{try{!e&&r["return"]&&r["return"]()}finally{if(n)throw t}}}},{key:"getIndexAnchors",value:function(){var e=[];return this.menuConfig.forEach(function(n){"文章分類"==n.showName&&n.subPage.forEach(function(n){e.push(n.url.substring(2))})}),e}}]),e}(),menuStore=new MenuStore(_MenuConfig2["default"]);exports["default"]=menuStore;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,s){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?t:s}function _inherits(t,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);t.prototype=Object.create(s&&s.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(t,s):t.__proto__=s)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,s){for(var e=0;e<s.length;e++){var o=s[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(s,e,o){return e&&t(s.prototype,e),o&&t(s,o),s}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostConstants=__webpack_require__(241),_PostConstants2=_interopRequireDefault(_PostConstants),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(117),_tumblrPost2=_interopRequireDefault(_tumblrPost),PostListStore=function(t){function s(){_classCallCheck(this,s);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(s).call(this));return t.postList=_PostListConfig2["default"].listContainer,t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),_PostListConfig2["default"].categories.forEach(function(s){t.postList[s]={name:s,posts:[],parsedPostNum:0,totalPostNum:0}}),t.postList["new"]={name:"new",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t.postList.top={name:"top",posts:[_PostListConfig2["default"].postContainer]},t}return _inherits(s,t),_createClass(s,[{key:"getListContainer",value:function(t){return this.postList[t]}},{key:"getPostList",value:function(t){return this.postList[t].posts}},{key:"loadMorePosts",value:function(t,s){t in _PostListConfig2["default"].categoryMap?this.postList[t].parsedPostNum<this.postList[t].totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList[t].parsedPostNum,tag:_PostListConfig2["default"].categoryMap[t]},this.loadMorePostsCategory.bind(this)):"new"==t&&this.postList["new"].parsedPostNum<this.postList["new"].totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList[t].parsedPostNum,limit:s,type:"text"},this.loadMorePostsNew.bind(this))}},{key:"loadMorePostsCategory",value:function(t,s){var e=this;t?console.log(t.stack):!function(){var t=_tumblrPost2["default"].parsePosts(s);t.length>0&&(e.postList[t[0].category].parsedPostNum+=s.posts.length,e.postList[t[0].category].totalPostNum=s.total_posts,t.forEach(function(s){e.postList[t[0].category].posts.push(s)}),e.emitChange("category"))}()}},{key:"loadMorePostsNew",value:function(t,s){var e=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(s);o.length>0&&(this.postList["new"].parsedPostNum+=s.posts.length,this.postList["new"].totalPostNum=s.total_posts,o.forEach(function(t){e.postList["new"].posts.push(t)}),this.emitChange("new"))}}},{key:"onReceviceUpdatePostList",value:function(t,s){t in _PostListConfig2["default"].categoryMap?(this.postList[t].totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,tag:_PostListConfig2["default"].categoryMap[t]},this.updateListCategory.bind(this))):"new"==t?(this.postList["new"].totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,type:"text"},this.updateListNew.bind(this))):"top"==t&&this.client.posts(_TumblrConfig2["default"].blogName,{limit:s,tag:_PostListConfig2["default"].tagMap.top},this.updateListTop.bind(this))}},{key:"updateListTop",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePostsNoValidation(s);e.length>0&&(this.postList.top.posts=e,this.emitChange("top"))}}},{key:"updateListNew",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePosts(s);e.length>0&&(this.postList["new"].parsedPostNum=s.posts.length,this.postList["new"].totalPostNum=s.total_posts,this.postList["new"].posts=e,this.emitChange("new"))}}},{key:"updateListCategory",value:function(t,s){if(t)console.log(t.stack);else{var e=_tumblrPost2["default"].parsePosts(s);e.length>0&&(this.postList[e[0].category].parsedPostNum=s.posts.length,this.postList[e[0].category].totalPostNum=s.total_posts,this.postList[e[0].category].posts=e,this.emitChange("category"))}}},{key:"emitChange",value:function(t){switch(t){case"category":this.emit(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT);break;case"new":this.emit(_PostListConstants2["default"].POST_LIST_NEW_EVENT);break;case"top":this.emit(_PostListConstants2["default"].POST_LIST_TOP_EVENT)}}},{key:"addChangeListener",value:function(t,s){switch(t){case"category":this.on(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT,s);break;case"new":this.on(_PostListConstants2["default"].POST_LIST_NEW_EVENT,s);break;case"top":this.on(_PostListConstants2["default"].POST_LIST_TOP_EVENT,s)}}},{key:"removeChangeListener",value:function(t,s){switch(t){case"category":this.removeListener(_PostListConstants2["default"].POST_LIST_CATEGORY_EVENT,s);break;case"new":this.removeListener(_PostListConstants2["default"].POST_LIST_NEW_EVENT,s);break;case"top":this.removeListener(_PostListConstants2["default"].POST_LIST_TOP_EVENT,s)}}}]),s}(_events.EventEmitter),postListStore=new PostListStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_UPDATE:postListStore.onReceviceUpdatePostList(t.category,t.amount);break;case _RouteConstants2["default"].ROUTE_POST_LIST_PAGE:postListStore.onReceviceUpdatePostList(t.category,t.amount)}}),exports["default"]=postListStore;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toArray(t){return Array.isArray(t)?t:Array.from(t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),parsePostData=function(t){var r=t.id,o=t.title,a=parsePostImage(t.body),e=parsePostBody(t.body),i=parsePostCategory(t.tags),n=i.category,s=i.valid;return _extends({id:r,title:o,image:a,category:n},e,{valid:s})},parsePostBody=function(t){var r=t.split("<hr>"),o=_toArray(r),a=o[0],e=o.slice(1),i=_PostConfig2["default"].settingContainer;return e.length>0&&(t=e.join("<hr>"),a.match(/[^>]*[:：][^<]*/g).forEach(function(t){var r=t.split(/[:：]/),o=_toArray(r),a=o[0],e=o.slice(1);a in _PostConfig2["default"].settingAlias&&(i[_PostConfig2["default"].settingAlias[a]]=e.join("：").trim())})),i},parsePostImage=function(t){var r="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg",o=t.match(/<img [^>]*\/>/g);if(o){var a=o[0].match(/http[^\"\'\s]*/);a&&(r=a[0])}return r},parsePostCategory=function(t){var r=!0,o=!1,a=void 0;try{for(var e,i=t[Symbol.iterator]();!(r=(e=i.next()).done);r=!0){var n=e.value;if(n in _PostListConfig2["default"].categoryMapZh)return{category:_PostListConfig2["default"].categoryMapZh[n],valid:!0}}}catch(s){o=!0,a=s}finally{try{!r&&i["return"]&&i["return"]()}finally{if(o)throw a}}return{category:"",valid:!1}};exports["default"]={parsePosts:function(t){var r=[];return t.posts.forEach(function(t){var o=parsePostData(t);1==o.valid&&r.push(o)}),r},parsePostsNoValidation:function(t){var r=[];return t.posts.forEach(function(t){var o=parsePostData(t);r.push(o)}),r}};

/***/ },
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
/* 226 */
/***/ function(module, exports) {

	"use strict";function compose(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];if(0===o.length)return function(t){return t};var n=function(){var t=o[o.length-1],e=o.slice(0,-1);return{v:function(){return e.reduceRight(function(t,o){return o(t)},t.apply(void 0,arguments))}}}();return"object"===("undefined"==typeof n?"undefined":_typeof(n))?n.v:void 0}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};exports.__esModule=!0,exports["default"]=compose;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function createStore(e,t,n){function o(){l===b&&(l=b.slice())}function r(){return p}function i(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return o(),l.push(e),function(){if(t){t=!1,o();var n=l.indexOf(e);l.splice(n,1)}}}function u(e){if(!(0,_isPlainObject2["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,p=a(p,e)}finally{y=!1}for(var t=b=l,n=0;n<t.length;n++)t[n]();return e}function c(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,u({type:ActionTypes.INIT})}function f(){var e,t=i;return e={subscribe:function(e){function n(){e.next&&e.next(r())}if("object"!==("undefined"==typeof e?"undefined":_typeof(e)))throw new TypeError("Expected the observer to be an object.");n();var o=t(n);return{unsubscribe:o}}},e[_symbolObservable2["default"]]=function(){return this},e}var s;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(createStore)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var a=e,p=t,b=[],l=b,y=!1;return u({type:ActionTypes.INIT}),s={dispatch:u,subscribe:i,getState:r,replaceReducer:c},s[_symbolObservable2["default"]]=f,s}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};exports.__esModule=!0,exports.ActionTypes=void 0,exports["default"]=createStore;var _isPlainObject=__webpack_require__(230),_isPlainObject2=_interopRequireDefault(_isPlainObject),_symbolObservable=__webpack_require__(598),_symbolObservable2=_interopRequireDefault(_symbolObservable),ActionTypes=exports.ActionTypes={INIT:"@@redux/INIT"};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function isCrushed(){}exports.__esModule=!0,exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=void 0;var _createStore=__webpack_require__(227),_createStore2=_interopRequireDefault(_createStore),_combineReducers=__webpack_require__(593),_combineReducers2=_interopRequireDefault(_combineReducers),_bindActionCreators=__webpack_require__(592),_bindActionCreators2=_interopRequireDefault(_bindActionCreators),_applyMiddleware=__webpack_require__(591),_applyMiddleware2=_interopRequireDefault(_applyMiddleware),_compose=__webpack_require__(226),_compose2=_interopRequireDefault(_compose),_warning=__webpack_require__(229),_warning2=_interopRequireDefault(_warning);"production"!==("production")&&"string"==typeof isCrushed.name&&"isCrushed"!==isCrushed.name&&(0,_warning2["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),exports.createStore=_createStore2["default"],exports.combineReducers=_combineReducers2["default"],exports.bindActionCreators=_bindActionCreators2["default"],exports.applyMiddleware=_applyMiddleware2["default"],exports.compose=_compose2["default"];

/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";function warning(o){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(o);try{throw new Error(o)}catch(e){}}exports.__esModule=!0,exports["default"]=warning;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function isPlainObject(t){if(!isObjectLike(t)||objectToString.call(t)!=objectTag||isHostObject(t))return!1;var o=getPrototype(t);if(null===o)return!0;var e=hasOwnProperty.call(o,"constructor")&&o.constructor;return"function"==typeof e&&e instanceof e&&funcToString.call(e)==objectCtorString}var getPrototype=__webpack_require__(594),isHostObject=__webpack_require__(595),isObjectLike=__webpack_require__(597),objectTag="[object Object]",objectProto=Object.prototype,funcToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object),objectToString=objectProto.toString;module.exports=isPlainObject;

/***/ },
/* 231 */,
/* 232 */,
/* 233 */
/***/ function(module, exports) {

	"use strict";function blogPath(r,e){var t=r.indexOf(".")!==-1?r:r+".tumblr.com";return"/blog/"+t+e}function requestCallback(r){if(r)return function(e,t,n){if(e)return r(e);if(t.statusCode>=400){var o=n.meta?n.meta.msg:n.error;return r(new Error("API error: "+t.statusCode+" "+o))}return n&&n.response?r(null,n.response):r(new Error("API error (malformed API response): "+n))}}function requestCallbackJSONP(r){if(r)return function(e,t){if(!t.meta)return r(t);if(t.meta.status>=400){var n=t.meta.msg;return r(new Error("API error: "+t.statusCode+" "+n))}return t&&t.response?r(null,t.response):r(new Error("API error (malformed API response): "+t))}}function isFunction(r){return"[object Function]"==Object.prototype.toString.call(r)}function requireValidation(r,e){for(var t=0,n=0;n<e.length;n++)r[e[n]]&&(t+=1);if(1===e.length){if(0===t)throw new Error('Missing required field: "'+e[0]+'"')}else if(e.length>1){if(0===t)throw new Error("Missing one of: "+e.join(","));if(t>1)throw new Error("Can only use one of: "+e.join(","))}}var baseUrl="https://api.tumblr.com/v2";module.exports={baseUrl:baseUrl,blogPath:blogPath,requestCallback:requestCallback,requestCallbackJSONP:requestCallbackJSONP,isFunction:isFunction,requireValidation:requireValidation};

/***/ },
/* 234 */,
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";exports.decode=exports.parse=__webpack_require__(621),exports.encode=exports.stringify=__webpack_require__(622);

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_NationConstants=__webpack_require__(240),_NationConstants2=_interopRequireDefault(_NationConstants),NationAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updateNation",value:function(t){_AppDispatcher2["default"].dispatch({actionType:_NationConstants2["default"].NATION_UPDATE,nationName:t})}},{key:"loadNationData",value:function(){_AppDispatcher2["default"].dispatch({actionType:_NationConstants2["default"].NATION_LOAD_DATA})}}]),t}();exports["default"]=new NationAction;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),PostListAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"updatePostList",value:function(t,e){_AppDispatcher2["default"].dispatch({actionType:_PostListConstants2["default"].POST_LIST_UPDATE,category:t,amount:e})}},{key:"updateAllPostList",value:function(t){var e=this;_PostListConfig2["default"].categories.forEach(function(s){e.updatePostList(s,t)})}}]),t}();exports["default"]=new PostListAction;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(36),_index=__webpack_require__(442),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"ShareButton",render:function(){var e=this.props,t=e.pageUrl,r=_objectWithoutProperties(e,["pageUrl"]);return _react2["default"].createElement("div",null,_react2["default"].createElement("a",_extends({},r,{className:_index2["default"].url,target:"_blank",href:"https://www.facebook.com/share.php?u=https://wowafrica.tw"+t}),_react2["default"].createElement(_reactSemantify.Image,{className:"mini",src:"/images/facebook_button.png"})))}});

/***/ },
/* 239 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={AUTHOR_LOAD_DATA:20,AUTHORS_EVENT:"AUTHORS_EVENT"};

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={NATION_UPDATE:10,NATION_LOAD_DATA:11,NATION_SHOW_EVENT:"NATION_SHOW_EVENT",NATION_AREA_EVENT:"NATION_AREA_EVENT",NATION_URL:"/data/nations.json"};

/***/ },
/* 241 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={POST_EVENT:"POST_EVENT"};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_IndexWideBlock=__webpack_require__(638),_IndexWideBlock2=_interopRequireDefault(_IndexWideBlock),_IndexCategoryBlock=__webpack_require__(635),_IndexCategoryBlock2=_interopRequireDefault(_IndexCategoryBlock),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_MenuStore=__webpack_require__(115),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_elevator=__webpack_require__(247),_elevator2=_interopRequireDefault(_elevator),_index=__webpack_require__(446),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"IndexPage",IndexDispatch:"",getInitialState:function(){return{targetSection:""}},componentDidMount:function(){this.IndexDispatch=_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_HASHTAG:}}),$("#landing-img").fadeIn(2200),$("#menu-logo").hide(),$("#index-menu-anchor").sticky({offset:0,onStick:function(){$("#index-main-content").css("margin-top","40px"),$("#menu-logo").fadeIn(),$("#index-menu-anchor").css("z-index",999)},onUnstick:function(){$("#index-main-content").css("margin-top","0px"),$("#menu-logo").hide()}}),$("#category-menu-anchor").sticky({offset:40,onStick:function(){$("#category-block-divider").css("margin-top","40px")},onUnstick:function(){$("#category-block-divider").css("margin-top","0px")}});new _elevator2["default"]({element:document.querySelector("#btn-article"),targetElement:document.querySelector("#category-block-divider"),duration:1500})},componentWillUnmount:function(){_AppDispatcher2["default"].unregister(this.IndexDispatch),$("#menu-logo").show(),$("#index-menu-anchor").sticky({offset:0,onStick:function(){},onUnstick:function(){}})},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"ui basic segment"},_react2["default"].createElement("div",{className:_index2["default"].indexLanding},_react2["default"].createElement("img",{id:"landing-img",src:"/images/landing.png",style:{width:"35%",display:"none"}})),_react2["default"].createElement("div",{className:"ui sticky",id:"index-menu-anchor"},_react2["default"].createElement(_IndexMenu2["default"],null)),_react2["default"].createElement("div",{id:"index-main-content",style:{backgroundColor:"white"}},_react2["default"].createElement("div",null,_react2["default"].createElement(_IndexWideBlock2["default"],{type:"new"}),_react2["default"].createElement(_IndexWideBlock2["default"],{type:"top"}),_react2["default"].createElement("div",{className:"ui basic segment"},_react2["default"].createElement("div",{className:"ui sticky",id:"category-menu-anchor"},_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{id:"category-block-divider",style:{height:"15px"}}),_react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement(_IndexCategoryBlock2["default"],null))))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"})))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_MapStore=__webpack_require__(245),_MapStore2=_interopRequireDefault(_MapStore),_NationsStore=__webpack_require__(246),_NationsStore2=_interopRequireDefault(_NationsStore),_NationAction=__webpack_require__(236),_NationAction2=_interopRequireDefault(_NationAction),_d=__webpack_require__(144),_d2=_interopRequireDefault(_d),_index=__webpack_require__(449),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36),CONFIG_SCALE={origin:{scale:380,rotate:[-20,0]},CentralAfrica:{scale:1e3,rotate:[-20,-5]},EastAfrica:{scale:800,rotate:[-40,0]},NorthAfrica:{scale:600,rotate:[-13,-20]},SouthernAfrica:{scale:1e3,rotate:[-28,20]},WestAfrica:{scale:780,rotate:[4,-5]}};exports["default"]=_react2["default"].createClass({displayName:"ViewAfricaNationsPage",getInitialState:function(){return{map:_MapStore2["default"].getAll(),nations:_NationsStore2["default"].getAll(),type:"origin"}},componentDidMount:function(){_NationsStore2["default"].addAreaListener(this._onChange),_MapStore2["default"].addChangeListener(this._onChange),$("#category-menu").hide()},componentWillUnmount:function(){_NationsStore2["default"].removeAreaListener(this._onChange),_MapStore2["default"].removeChangeListener(this._onChange)},_onMouseEnter:function(e){var t=e.currentTarget,a=$(t).attr("data-nation");a in this.refs&&(_reactDom2["default"].findDOMNode(this.refs[a]).style.fill="#F88D2F")},_onMouseLeave:function(e){var t=e.currentTarget,a=$(t).attr("data-nation");a in this.refs&&(_reactDom2["default"].findDOMNode(this.refs[a]).style.fill="#2E8398")},renderArea:function(e){var t=this;return _react2["default"].createElement("div",{className:"content"},_react2["default"].createElement(_reactSemantify.List,{className:"animated small link"},Object.keys(e).map(function(a){var r=e[a],n=r.country,i=r.flag;if(n)return i=""===i?"Kenya_flag.png":i,_react2["default"].createElement("div",{className:"item","data-nation":a,onMouseEnter:t._onMouseEnter,onMouseLeave:t._onMouseLeave},_react2["default"].createElement(_reactSemantify.Image,{className:"avatar",src:"/images/nations/"+i}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("a",{className:"header","data-nation":a,onClick:t._onClick},n)))})))},render:function(){var e=this.state,t=e.nations,a=e.type,r=this.state.map,n=r.features,i=r.area;return t.forEach(function(e){for(var t in i)e.iso in i[t]&&(i[t][e.iso]=e)}),_react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement("div",{className:"ui stackable four column grid"},_react2["default"].createElement("div",{className:"three wide column"}),_react2["default"].createElement("div",{className:"six wide column"},this._drawMap(n,a)),_react2["default"].createElement("div",{className:"five wide column"},_react2["default"].createElement(_reactSemantify.Accordion,{className:_index2["default"].contentArea,init:!0},_react2["default"].createElement("div",{className:"title",onClick:this._onCentralAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"中非"),this.renderArea(i.CentralAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onEastAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"東非"),this.renderArea(i.EastAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onNorthAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"北非"),this.renderArea(i.NorthAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onSouthernAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"南非"),this.renderArea(i.SouthernAfrica),_react2["default"].createElement("div",{className:"title",onClick:this._onWestAfricaClick},_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown"}),"西非"),this.renderArea(i.WestAfrica))),_react2["default"].createElement("div",{className:"two wide column"}))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))},_onChange:function(){this.setState({map:_MapStore2["default"].getAll(),nations:_NationsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget;console.log($(t).attr("data-nation")),_NationAction2["default"].updateNation($(t).attr("data-nation"))},_onCentralAfricaClick:function(){var e=this.state.type;this.setState({type:"CentralAfrica"===e?"origin":"CentralAfrica"})},_onEastAfricaClick:function(){var e=this.state.type;this.setState({type:"EastAfrica"===e?"origin":"EastAfrica"})},_onNorthAfricaClick:function(){var e=this.state.type;this.setState({type:"NorthAfrica"===e?"origin":"NorthAfrica"})},_onSouthernAfricaClick:function(){var e=this.state.type;this.setState({type:"SouthernAfrica"===e?"origin":"SouthernAfrica"})},_onWestAfricaClick:function(){var e=this.state.type;this.setState({type:"WestAfrica"===e?"origin":"WestAfrica"})},_drawMap:function(e,t){var a=this,r=600,n=600,i=CONFIG_SCALE[t],o=_d2["default"].geo.equirectangular().scale(i.scale).translate([r/2,n/2]).rotate(i.rotate),c=_d2["default"].geo.path().projection(o);return _react2["default"].createElement("svg",{className:_index2["default"].mapAfrica,viewBox:"0 0 550 600"},e.map(function(e){return _react2["default"].createElement("path",{className:_index2["default"].land,d:c(e),"data-nation":e.properties.ISO_A3,onMouseEnter:a._onMouseEnter,onMouseLeave:a._onMouseLeave,ref:e.properties.ISO_A3,onClick:a._onClick})}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_AuthorConstants=__webpack_require__(239),_AuthorConstants2=_interopRequireDefault(_AuthorConstants),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),AuthorsStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.authors=[],t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t}return _inherits(e,t),_createClass(e,[{key:"getAll",value:function(){return this.authors}},{key:"onReceviceUpdateAuthors",value:function(){var t=_TumblrConfig2["default"].author.tag;this.client.posts(_TumblrConfig2["default"].blogName,{tag:t,filter:"text"},this.parseAuthorData.bind(this))}},{key:"parseAuthorData",value:function(t,e){t&&console.log(t.stack);var r=_TumblrConfig2["default"].author.picWidth;this.authors=e.posts.map(function(t){var e=t.caption.split("\n\n"),n=t.photos[0].alt_sizes.filter(function(t){return t.width<r});return{id:t.id,name:e[0],from:e[1],description:e[2],photoUrl:n.length?n[0].url:""}}),this.emitChange()}},{key:"emitChange",value:function(){this.emit(_AuthorConstants2["default"].AUTHORS_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_AuthorConstants2["default"].AUTHORS_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_AuthorConstants2["default"].AUTHORS_EVENT,t)}}]),e}(_events.EventEmitter),authorsStore=new AuthorsStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _RouteConstants2["default"].ROUTE_AUTH_PAGE:authorsStore.onReceviceUpdateAuthors();break;case _AuthorConstants2["default"].AUTHOR_LOAD_DATA:authorsStore.onReceviceUpdateAuthors()}}),exports["default"]=authorsStore;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_events=__webpack_require__(52),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),_MapConstants=__webpack_require__(651),_MapConstants2=_interopRequireDefault(_MapConstants),_MapConfig=__webpack_require__(646),_MapConfig2=_interopRequireDefault(_MapConfig),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),MapStore=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.geoJson={features:[],area:{CentralAfrica:{},EastAfrica:{},NorthAfrica:{},SouthernAfrica:{},WestAfrica:{}}},e}return _inherits(t,e),_createClass(t,[{key:"getAll",value:function(){return this.geoJson}},{key:"getNationMapByISO",value:function(e){var t={};return this.geoJson.features.forEach(function(n){n.properties.ISO_A3===e&&(t=n)}),t}},{key:"onReceiveUpdateMaps",value:function(){this.loadMapData()}},{key:"loadMapData",value:function(){var e=this;_superagent2["default"].get(_MapConfig2["default"].contryUrl).end(function(t,n){t?console.log("Cannot get Africa geoJson"):e.geoJson.features=n.body.features,_superagent2["default"].get(_MapConfig2["default"].areaUrl).end(function(t,n){t?console.log("Cannot Get Africa area"):e.geoJson.area=n.body,e.emitChange()})})}},{key:"emitChange",value:function(){this.emit(_MapConstants2["default"].MAP_EVENT)}},{key:"addChangeListener",value:function(e){this.on(_MapConstants2["default"].MAP_EVENT,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(_MapConstants2["default"].MAP_EVENT,e)}}]),t}(_events.EventEmitter),mapStore=new MapStore;_AppDispatcher2["default"].register(function(e){switch(e.actionType){case _RouteConstants2["default"].ROUTE_MAP_PAGE:mapStore.onReceiveUpdateMaps()}}),exports["default"]=mapStore;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),_events=__webpack_require__(52),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_NationConstants=__webpack_require__(240),_NationConstants2=_interopRequireDefault(_NationConstants),NationsStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.nations=[],t.defaultNation={iso:"",country:"",introduction:"",symbol:"",currency:"",language:"",flag:"",emblem:"",headOfState:"",politics:"",atmosphere:"",geography:"",capital:"",population:"",faith:[],economy:[]},t.currentNation=t.defaultNation,t}return _inherits(e,t),_createClass(e,[{key:"getAll",value:function(){return this.nations}},{key:"getNationByName",value:function(t){return this.nations}},{key:"getCurrentNation",value:function(){return this.currentNation}},{key:"onReceiveUpdateNations",value:function(t){var e=this;this.currentNation=null,this.nations.forEach(function(n){n.iso===t&&(e.currentNation=n)}),null===this.currentNation&&(this.currentNation=this.defaultNation,this.currentNation.iso=t,this.currentNation.country=t),this.emitShow()}},{key:"onReceiveLoadNationData",value:function(){var t=this;_superagent2["default"].get(_NationConstants2["default"].NATION_URL).end(function(e,n){e?console.log("Cannot get Nation json"):t.nations=n.body})}},{key:"emitShow",value:function(){this.emit(_NationConstants2["default"].NATION_SHOW_EVENT)}},{key:"addShowListener",value:function(t){this.on(_NationConstants2["default"].NATION_SHOW_EVENT,t)}},{key:"removeShowListener",value:function(t){this.removeListener(_NationConstants2["default"].NATION_SHOW_EVENT,t)}},{key:"addAreaListener",value:function(t){this.on(_NationConstants2["default"].NATION_AREA_EVENT,t)}},{key:"removeAreaListener",value:function(t){this.removeListener(_NationConstants2["default"].NATION_AREA_EVENT,t)}}]),e}(_events.EventEmitter),nationsStore=new NationsStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _NationConstants2["default"].NATION_UPDATE:nationsStore.onReceiveUpdateNations(t.nationName);break;case _NationConstants2["default"].NATION_LOAD_DATA:nationsStore.onReceiveLoadNationData()}}),exports["default"]=nationsStore;

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Elevator=function(n){function e(n,e,t,o){return n/=o/2,n<1?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n,e){for(var t in e){var o=void 0===n[t]&&"function"!=typeof t;o&&(n[t]=e[t])}return n}function o(n){for(var e=0;n;)e+=n.offsetTop||0,n=n.offsetParent;return e}function l(n){T||(T=n);var t=n-T,o=e(t,k,y-k,b);window.scrollTo(0,o),t<b?w=requestAnimationFrame(l):a()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){T=null,k=null,h=!1}function r(){C&&(y=o(C))}function a(){u(),f&&(f.pause(),f.currentTime=0),p&&p.play(),A&&A()}function d(){h&&(cancelAnimationFrame(w),u(),f&&(f.pause(),f.currentTime=0),r(),window.scrollTo(0,y))}function c(n){n.addEventListener?n.addEventListener("click",F.elevate,!1):n.attachEvent("onclick",function(){r(),document.documentElement.scrollTop=y,document.body.scrollTop=y,window.scroll(0,y)})}function s(n){v=document.body;var e={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0,startCallback:null,endCallback:null};n=t(n,e),n.element&&c(n.element),i()&&(n.duration&&(E=!0,b=n.duration),n.targetElement&&(C=n.targetElement),window.addEventListener("blur",d,!1),n.mainAudio&&(f=new Audio(n.mainAudio),f.setAttribute("preload",n.preloadAudio),f.setAttribute("loop",n.loopAudio)),n.endAudio&&(p=new Audio(n.endAudio),p.setAttribute("preload","true")),n.endCallback&&(A=n.endCallback),n.startCallback&&(m=n.startCallback))}var m,f,p,A,v=null,w=null,b=null,E=!1,T=null,k=null,y=0,C=null,h=!1,F=this;this.elevate=function(){h||(h=!0,k=document.documentElement.scrollTop||v.scrollTop,r(),E||(b=1.5*Math.abs(y-k)),requestAnimationFrame(l),f&&f.play(),m&&m())},s(n)};exports["default"]=Elevator;

/***/ },
/* 248 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
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
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"index__container___3OZ4G","title":"index__title___24uBc"};

/***/ },
/* 434 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"gridTitle":"index__gridTitle___ayxH7","card":"index__card___3eMWZ","cardImg":"index__cardImg___1jz1p","meta":"index__meta___rhziA","description":"index__description___1SCle"};

/***/ },
/* 435 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"categoryBox":"index__categoryBox___R1QFw","categoryBoxLeftUp":"index__categoryBoxLeftUp___1cWDy","categoryBoxLeftBottom":"index__categoryBoxLeftBottom___2MMzO","categoryBoxRightUp":"index__categoryBoxRightUp___3HhFq","categoryBoxRightBottom":"index__categoryBoxRightBottom___3Baxi","categoryBoxCenterUp":"index__categoryBoxCenterUp___1-lAQ","categoryBoxCenterBottom":"index__categoryBoxCenterBottom___2pcXM","categoryBoxCategory":"index__categoryBoxCategory___1JUfS","categoryBoxTitle":"index__categoryBoxTitle___IGPK8"};

/***/ },
/* 436 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"categoryBoxMore":"index__categoryBoxMore___2K0Iz","categoryBoxMoreTitle":"index__categoryBoxMoreTitle___2GTfh"};

/***/ },
/* 437 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"footer":"index__footer___1Ustb","footerBox":"index__footerBox___1JaKv","footerBoxInfo":"index__footerBoxInfo___1ISkD","footerIconGroups":"index__footerIconGroups___kqVbW","footerIcon":"index__footerIcon___1zmWe","footerIconMail":"index__footerIconMail___23Nsc","footerIconTumblr":"index__footerIconTumblr___3GgFC","footerIconFacebook":"index__footerIconFacebook___O-oEh","footerEmailBtn":"index__footerEmailBtn___1rFB3"};

/***/ },
/* 438 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"dropdownMenu":"index__dropdownMenu___REqpG","indexMenu":"index__indexMenu___33OqS"};

/***/ },
/* 439 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"indexWide":"index__indexWide___28Hwb","indexWideBoxBefore":"index__indexWideBoxBefore___1rncr","indexWideBox":"index__indexWideBox___gTB5u","indexWideType":"index__indexWideType___KU7Bm","indexWideTitle":"index__indexWideTitle___2Mwho"};

/***/ },
/* 440 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"postListTitle":"index__postListTitle___3TQaW","postListCardImg":"index__postListCardImg___Dx-Ha","postListLoadMoreBtn":"index__postListLoadMoreBtn___4B0QD"};

/***/ },
/* 441 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"block":"index__block___3Z4ZF"};

/***/ },
/* 442 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"url":"index__url___BK9DG"};

/***/ },
/* 443 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"overrideGrid":"index__overrideGrid___1o52j"};

/***/ },
/* 444 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"storyButton":"index__storyButton___2fRbd","storySection":"index__storySection___16BsH","index":"index__index___3WqtC","wowFunc":"index__wowFunc___3eypG","goal":"index__goal___MgvAM","title":"index__title___3mYAJ","content":"index__content___1Ybz-","informationBefore":"index__informationBefore___17LWQ","informationAfter":"index__informationAfter___1Xzqy","member":"index__member___iGdgN","partnerButton":"index__partnerButton___nC2AT","videoContainer":"index__videoContainer___3Qch_","video":"index__video___1UOtb","headerSection":"index__headerSection___1bwDe","headerDivider":"index__headerDivider___26EwH","headerButton":"index__headerButton___2uBDk","aboutButton":"index__aboutButton___18jad","hover":"index__hover___3d_Oa"};

/***/ },
/* 445 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contactUsBox":"index__contactUsBox___YDqRT","contactUsBoxTitle":"index__contactUsBoxTitle___rQcJY","contactUsBoxInner":"index__contactUsBoxInner___3FM1J","contactUsBoxContent":"index__contactUsBoxContent___29pnq","contactForm":"index__contactForm___cdu5G","submitBtn":"index__submitBtn___2aT6l"};

/***/ },
/* 446 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"indexLanding":"index__indexLanding___-Dch2"};

/***/ },
/* 447 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ugandaShowroom":"index__ugandaShowroom___3bp3r","showroomPosition":"index__showroomPosition___2TcWA","showroomImg":"index__showroomImg___3Qn7W","showroomAnima5":"index__showroomAnima5___1Rvqa","backimgAnimation-5":"index__backimgAnimation-5___3jlU1","showroomAnima7":"index__showroomAnima7___2r0QX","backimgAnimation-7":"index__backimgAnimation-7___AG9VX","showrommTitle":"index__showrommTitle___2FcJw"};

/***/ },
/* 448 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"postImage":"index__postImage___b32nO","inner":"index__inner___3LEwR","innerTitle":"index__innerTitle___K6fdg","containerPost":"index__containerPost___CJLH3","containerActivity":"index__containerActivity___1a5q-","sectionActivity":"index__sectionActivity___1SlW-","buy":"index__buy___29ITs","antiVeryPadded":"index__antiVeryPadded___2r6hn"};

/***/ },
/* 449 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"contentArea":"index__contentArea___3uYc0","land":"index__land___1e4bi","mapAfrica":"index__mapAfrica___3rXHE"};

/***/ },
/* 450 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"postImage":"index__postImage___2cXsY","inner":"index__inner___2eJFc","innerTitle":"index__innerTitle___1qY2L","containerPost":"index__containerPost___2Z4Q0","containerPostAuthor":"index__containerPostAuthor___3BYvj","sectionPostAuthor":"index__sectionPostAuthor___2vwA_","antiVeryPadded":"index__antiVeryPadded___1mFqx"};

/***/ },
/* 451 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui breadcrumb",componentName="Breadcrumb",Breadcrumb=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Breadcrumb;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui form",componentName="Form",Form=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Form;

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui grid",componentName="Grid",Grid=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Grid;

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui menu",componentName="Menu",Menu=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Menu;

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui message",componentName="Message",Message=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Message;

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui table",componentName="Table",Basic=function(e){var t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("table",r,t)},Table=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Table;

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="column",componentName="Column",Column=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Column;

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["active"],defaultClassName="content",componentName="Content",Content=new _filter2["default"](_div2["default"]).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Content;

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="field",componentName="Field",Field=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Field;

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="fields",componentName="Fields",Fields=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Fields;

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="row",componentName="Row",Row=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Row;

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_unit=__webpack_require__(84),_unit2=_interopRequireDefault(_unit),defaultClassName="section",componentName="Section",Section=new _filter2["default"](_unit2["default"]).typeFilter().colorFilter().classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Section;

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="text",componentName="Text",Text=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Text;

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["active"],defaultClassName="title",componentName="Title",Title=new _filter2["default"](_div2["default"]).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Title;

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_unit=__webpack_require__(84),_unit2=_interopRequireDefault(_unit),stateArray=["disabled","active","loading"],defaultClassName="ui button",componentName="Button",Button=new _filter2["default"](_unit2["default"]).typeFilter().colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Button;

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui container",componentName="Container",Container=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Container;

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui divider",componentName="Divider",Divider=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Divider;

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="flag",componentName="Flag",Basic=function(e){return _react2["default"].createElement("i",e)},Flag=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Flag;

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_unit=__webpack_require__(84),_unit2=_interopRequireDefault(_unit),stateArray=["disabled"],defaultClassName="ui header",componentName="Header",Header=new _filter2["default"](_unit2["default"]).typeFilter().colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Header;

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["disabled","loading"],defaultClassName="icon",componentName="Icon",Basic=function(e){return _react2["default"].createElement("i",e)},Icon=new _filter2["default"](Basic).colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Icon;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["disabled"],defaultClassName="ui image",componentName="Image",Basic=function(e){return _react2["default"].createElement("img",e)},Image=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Image;

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["loading","focus","error"],defaultClassName="ui input",componentName="Input",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=e.placeholder,a=e.type,l=_objectWithoutProperties(e,["children","placeholder","type"]);return"undefined"!=typeof t?_react2["default"].createElement("div",l,t):_react2["default"].createElement("div",l,_react2["default"].createElement("input",{placeholder:r,type:a}))}}),Input=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Input;

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_unit=__webpack_require__(84),_unit2=_interopRequireDefault(_unit),defaultClassName="ui label",componentName="Label",Label=new _filter2["default"](_unit2["default"]).typeFilter().colorFilter().classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Label;

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui list",componentName="List",List=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=List;

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["disabled","active"],defaultClassName="ui loader",componentName="Loader",Loader=new _filter2["default"](_div2["default"]).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Loader;

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui rail",componentName="Rail",Rail=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Rail;

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["disabled"],defaultClassName="ui reveal",componentName="Reveal",Reveal=new _filter2["default"](_div2["default"]).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Reveal;

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["disabled","loading"],defaultClassName="ui segment",componentName="Segment",Segment=new _filter2["default"](_div2["default"]).colorFilter().stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Segment;

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),stateArray=["active","completed","disabled"],defaultClassName="step",componentName="Step",Step=new _filter2["default"](_div2["default"]).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Step;

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui steps",componentName="Steps",Steps=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Steps;

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();exports["default"]=function(e,t){return function(r){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments))}return _inherits(n,r),_createClass(n,[{key:"render",value:function(){var r=this.props,n=r.className,o=void 0===n?"":n,i=r.children,u=_objectWithoutProperties(r,["className","children"]);return o=(o+" "+e).trim(),_react2["default"].createElement(t,_extends({className:o},u),i)}}]),n}(_react2["default"].Component)};var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();exports["default"]=function(e){var t=function(t){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,t),_createClass(r,[{key:"render",value:function(){var t=this.props,r=t.className,o=void 0===r?"":r,n=t.children,a=t.color,c=void 0===a?"":a,i=_objectWithoutProperties(t,["className","children","color"]);return colorArray.indexOf(c)!==-1&&(o=(o+" "+c).trim()),_react2["default"].createElement(e,_extends({className:o},i),n)}}]),r}(_react2["default"].Component);return t.propTypes={color:_react2["default"].PropTypes.oneOf(colorArray)},t};var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),colorArray=["black","yellow","green","blue","orange","purple","red","teal"];

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();exports["default"]=function(e,t){var r,n;return n=r=function(e){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,e),_createClass(r,[{key:"render",value:function(){var e=this.props,r=e.children,n=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement(t,n,r)}}]),r}(_react2["default"].Component),r.displayName=e,n};var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react);

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();exports["default"]=function(e,t){var r=function(r){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,Object.getPrototypeOf(n).apply(this,arguments))}return _inherits(n,r),_createClass(n,[{key:"render",value:function(){var r=this.props,n=r.className,o=void 0===n?"":n,a=r.children,i=_objectWithoutProperties(r,["className","children"]);return e.forEach(function(e){e in i&&(i[e]&&(o=e in keyMap?(o+" "+keyMap[e]).trim():(o+" "+e).trim()),delete i[e])}),_react2["default"].createElement(t,_extends({className:o},i),a)}}]),n}(_react2["default"].Component),n={};return e.forEach(function(e){return n[e]=_react2["default"].PropTypes.bool}),r.propTypes=n,r};var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),keyMap={readOnly:"read-only"};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":_typeof(t))&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":_typeof(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();exports["default"]=function(e){var t=function(t){function r(){return _classCallCheck(this,r),_possibleConstructorReturn(this,Object.getPrototypeOf(r).apply(this,arguments))}return _inherits(r,t),_createClass(r,[{key:"render",value:function(){var t=this.props,r=t.children,n=_objectWithoutProperties(t,["children"]);return _react2["default"].createElement(e,n,r)}}]),r}(_react2["default"].Component);return t.propTypes={type:_react2["default"].PropTypes.oneOf(typeArray)},t};var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),typeArray=["div","link","icon"];

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var o in e)r.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui accordion",componentName="Accordion",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},t,{ref:"accordion"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.accordion).accordion():$(this.refs.accordion).accordion(r))}}),Accordion=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Accordion;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["disabled","readOnly"],defaultClassName="ui checkbox",componentName="Checkbox",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},r,{ref:"checkbox"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.checkbox).checkbox():$(this.refs.checkbox).checkbox(t))}}),Checkbox=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Checkbox;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var i in e)r.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["disabled","active"],defaultClassName="ui dimmer",componentName="Dimmer",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},t,{ref:"dimmer"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.dimmer).dimmer():$(this.refs.dimmer).dimmer(r))}}),Dimmer=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Dimmer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var o in e)r.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["error","disabled","active"],defaultClassName="ui dropdown",componentName="Dropdown",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.className,t=e.children,o=_objectWithoutProperties(e,["className","children"]);return r.indexOf("active")>=0&&(r+=" simple"),_react2["default"].createElement("div",_extends({},o,{className:r,ref:"dropdown"}),t)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.dropdown).dropdown():$(this.refs.dropdown).dropdown(r))}}),Dropdown=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Dropdown;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var a in e)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui embed",componentName="Embed",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=e.placeholder,a=e.source,o=e.sourceId,i=e.url,n=e.icon,c=_objectWithoutProperties(e,["children","placeholder","source","sourceId","url","icon"]);return _react2["default"].createElement("div",_extends({},c,{"data-source":a,"data-id":o,"data-placeholder":t,"data-url":i,"data-icon":n,ref:"embed"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.embed).embed():$(this.refs.embed).embed(r))}}),Embed=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Embed;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["active"],defaultClassName="ui modal",componentName="Modal",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},r,{ref:"modal"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.modal).modal():$(this.refs.modal).modal(t))}}),Modal=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Modal;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui popup",componentName="Popup",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",r,t)}}),Popup=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Popup;

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var a in e)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["active","success","warning","error","disabled"],defaultClassName="ui progress",componentName="Progress",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=e.percent,a=e.value,s=e.total,o=_objectWithoutProperties(e,["children","percent","value","total"]);return _react2["default"].createElement("div",_extends({},o,{"data-percent":t,"data-value":a,"data-total":s,ref:"progress"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.progress).progress():$(this.refs.progress).progress(r))}}),Progress=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Progress;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui rating",componentName="Rating",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=e.rating,a=e.maxRating,i=_objectWithoutProperties(e,["children","rating","maxRating"]);return _react2["default"].createElement("div",_extends({},i,{"data-rating":r,"data-max-rating":a,ref:"rating"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.rating).rating():$(this.refs.rating).rating(t))}}),Rating=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Rating;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var a in e)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["loading"],defaultClassName="ui search",componentName="Search",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},t,{ref:"search"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.search).search():$(this.refs.search).search(r))}}),Search=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Search;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui shape",componentName="Shape",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},r,{ref:"shape"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.shape).shape():$(this.refs.shape).shape(t))}}),Shap=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Shap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,r){var t={};for(var a in e)r.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui sidebar",componentName="Sidebar",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,r=e.children,t=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},t,{ref:"sidebar"}),r)},componentDidMount:function(){var e=this.props.init,r=void 0!==e&&e;r!==!1&&(r===!0?$(this.refs.sidebar).sidebar():$(this.refs.sidebar).sidebar(r))}}),Sidebar=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Sidebar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui sticky",componentName="Sticky",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=_objectWithoutProperties(e,["children"]);return _react2["default"].createElement("div",_extends({},r,{ref:"sticky"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.sticky).sticky():$(this.refs.sticky).sticky(t))}}),Sticky=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Sticky;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),stateArray=["active","loading"],defaultClassName="ui tab",componentName="Tab",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=e.tab,a=_objectWithoutProperties(e,["children","tab"]);return _react2["default"].createElement("div",_extends({},a,{"data-tab":r,ref:"tab"}),t)},componentDidMount:function(){var e=this.props.init,t=void 0!==e&&e;t!==!1&&(t===!0?$(this.refs.tab).tab():$(this.refs.tab).tab(t))}}),Tab=new _filter2["default"](Basic).stateFilter(stateArray).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Tab;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 504 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui ad",componentName="Ad",Ad=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Ad;

/***/ },
/* 505 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui card",componentName="Card",Card=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Card;

/***/ },
/* 506 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="comment",componentName="Comment",Comment=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Comment;

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui comments",componentName="Comments",Comments=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Comments;

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui feed",componentName="Feed",Feed=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Feed;

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_unit=__webpack_require__(84),_unit2=_interopRequireDefault(_unit),defaultClassName="item",componentName="Item",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.children,r=e.value,a=_objectWithoutProperties(e,["children","value"]);return _react2["default"].createElement(_unit2["default"],_extends({},a,{"data-value":r}),t)}}),Item=new _filter2["default"](Basic).typeFilter().classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Item;

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _objectWithoutProperties(e,t){var r={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),defaultClassName="ui items",componentName="Items",Basic=_react2["default"].createClass({displayName:"Basic",render:function(){var e=this.props,t=e.className,r=e.children,a=e.type,i=void 0===a?"":a,n=_objectWithoutProperties(e,["className","children","type"]);return"link"===i&&(t+=" link"),_react2["default"].createElement("div",_extends({},n,{className:t}),r)}}),Items=new _filter2["default"](Basic).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Items;

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_filter=__webpack_require__(3),_filter2=_interopRequireDefault(_filter),_div=__webpack_require__(10),_div2=_interopRequireDefault(_div),defaultClassName="ui statistic",componentName="Statistic",Statistic=new _filter2["default"](_div2["default"]).classGenerator(defaultClassName).getComposeComponent(componentName);exports["default"]=Statistic;

/***/ },
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
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */
/***/ function(module, exports) {

	"use strict";function createThunkMiddleware(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(u){return"function"==typeof u?u(n,r,t):e(u)}}}}exports.__esModule=!0;var thunk=createThunkMiddleware();thunk.withExtraArgument=createThunkMiddleware,exports["default"]=thunk;

/***/ },
/* 591 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function applyMiddleware(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(r,n,o){var a=e(r,n,o),u=a.dispatch,p=[],i={getState:a.getState,dispatch:function(e){return u(e)}};return p=t.map(function(e){return e(i)}),u=_compose2["default"].apply(void 0,p)(a.dispatch),_extends({},a,{dispatch:u})}}}exports.__esModule=!0;var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};exports["default"]=applyMiddleware;var _compose=__webpack_require__(226),_compose2=_interopRequireDefault(_compose);

/***/ },
/* 592 */
/***/ function(module, exports) {

	"use strict";function bindActionCreator(t,o){return function(){return o(t.apply(void 0,arguments))}}function bindActionCreators(t,o){if("function"==typeof t)return bindActionCreator(t,o);if("object"!==("undefined"==typeof t?"undefined":_typeof(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":"undefined"==typeof t?"undefined":_typeof(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),e={},r=0;r<n.length;r++){var i=n[r],f=t[i];"function"==typeof f&&(e[i]=bindActionCreator(f,o))}return e}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};exports.__esModule=!0,exports["default"]=bindActionCreators;

/***/ },
/* 593 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function getUndefinedStateErrorMessage(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function getUnexpectedStateShapeWarningMessage(e,t,n){var r=Object.keys(t),i=n&&n.type===_createStore.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,_isPlainObject2["default"])(e))return"The "+i+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var a=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)});return a.length>0?"Unexpected "+(a.length>1?"keys":"key")+" "+('"'+a.join('", "')+'" found in '+i+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function assertReducerSanity(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:_createStore.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var i="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:i}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function combineReducers(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];"function"==typeof e[i]&&(n[i]=e[i])}var a,o=Object.keys(n);try{assertReducerSanity(n)}catch(u){a=u}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;if(false){var r=getUnexpectedStateShapeWarningMessage(e,n,t);r&&(0,_warning2["default"])(r)}for(var i=!1,u={},s=0;s<o.length;s++){var d=o[s],c=n[d],f=e[d],l=c(f,t);if("undefined"==typeof l){var h=getUndefinedStateErrorMessage(d,t);throw new Error(h)}u[d]=l,i=i||l!==f}return i?u:e}}exports.__esModule=!0,exports["default"]=combineReducers;var _createStore=__webpack_require__(227),_isPlainObject=__webpack_require__(230),_isPlainObject2=_interopRequireDefault(_isPlainObject),_warning=__webpack_require__(229),_warning2=_interopRequireDefault(_warning);

/***/ },
/* 594 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var overArg=__webpack_require__(596),nativeGetPrototype=Object.getPrototypeOf,getPrototype=overArg(nativeGetPrototype,Object);module.exports=getPrototype;

/***/ },
/* 595 */
/***/ function(module, exports) {

	"use strict";function isHostObject(t){var o=!1;if(null!=t&&"function"!=typeof t.toString)try{o=!!(t+"")}catch(c){}return o}module.exports=isHostObject;

/***/ },
/* 596 */
/***/ function(module, exports) {

	"use strict";function overArg(r,e){return function(t){return r(e(t))}}module.exports=overArg;

/***/ },
/* 597 */
/***/ function(module, exports) {

	"use strict";function isObjectLike(t){return!!t&&"object"==("undefined"==typeof t?"undefined":_typeof(t))}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};module.exports=isObjectLike;

/***/ },
/* 598 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";module.exports=__webpack_require__(599)(global||window||void 0);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 599 */
/***/ function(module, exports) {

	"use strict";module.exports=function(e){var b,o=e.Symbol;return"function"==typeof o?o.observable?b=o.observable:(b=o("observable"),o.observable=b):b="@@observable",b};

/***/ },
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var qs=__webpack_require__(235),jsonp=__webpack_require__(616),helpers=__webpack_require__(233),TumblrClient=__webpack_require__(614);TumblrClient.prototype._get=function(e,r,s,i){r=r||{},i&&(r.api_key=this.credentials.consumer_key),jsonp(helpers.baseUrl+e+"?"+qs.stringify(r),helpers.requestCallbackJSONP(s))},module.exports=TumblrClient;

/***/ },
/* 613 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var TumblrClient=__webpack_require__(612);module.exports={Client:TumblrClient,createClient:function(e){return new TumblrClient(e)},request:function(e){TumblrClient.prototype.request=e}};

/***/ },
/* 614 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function TumblrClient(e,t){this.credentials=e||{}}var fs=__webpack_require__(620),qs=__webpack_require__(235),helpers=__webpack_require__(233),calls={postCreation:function(e,t,s){return function(o,i,l){helpers.requireValidation(i,t),i.type=e,s||delete i.data,this._post(helpers.blogPath(o,"/post"),i,l)}},getWithOptions:function(e){return function(t,s){helpers.isFunction(t)&&(s=t,t={}),this._get(e,t,s)}},blogList:function(e){return function(t,s,o){helpers.isFunction(s)&&(o=s,s={}),this._get(helpers.blogPath(t,e),s,o)}}};TumblrClient.prototype={tagged:function(e,t,s){helpers.isFunction(t)&&(s=t,t={}),t=t||{},t.tag=e,this._get("/tagged",t,s,!0)},blogInfo:function(e,t){this._get(helpers.blogPath(e,"/info"),{},t,!0)},avatar:function(e,t,s){helpers.isFunction(t)&&(s=t,t=null);var o=t?"/avatar/"+t:"/avatar";this._get(helpers.blogPath(e,o),{},s,!0)},blogLikes:function(e,t,s){helpers.isFunction(t)&&(s=t,t={}),this._get(helpers.blogPath(e,"/likes"),t,s,!0)},followers:function(e,t,s){helpers.isFunction(t)&&(s=t,t={}),this._get(helpers.blogPath(e,"/followers"),t,s)},posts:function(e,t,s){helpers.isFunction(t)&&(s=t,t={}),t=t||{};var o=t.type?"/posts/"+t.type:"/posts";this._get(helpers.blogPath(e,o),t,s,!0)},queue:calls.blogList("/posts/queue"),drafts:calls.blogList("/posts/draft"),submissions:calls.blogList("/posts/submission"),edit:function(e,t,s){this._post(helpers.blogPath(e,"/post/edit"),t,s)},reblog:function(e,t,s){this._post(helpers.blogPath(e,"/post/reblog"),t,s)},deletePost:function(e,t,s){this._post(helpers.blogPath(e,"/post/delete"),{id:t},s)},photo:calls.postCreation("photo",["data","source"],!0),audio:calls.postCreation("audio",["data","external_url"],!0),video:calls.postCreation("video",["data","embed"],!0),quote:calls.postCreation("quote",["quote"],!1),text:calls.postCreation("text",["body"],!1),link:calls.postCreation("link",["url"],!1),chat:calls.postCreation("chat",["conversation"],!1),userInfo:function(e){this._get("/user/info",{},e)},likes:function(e,t){helpers.isFunction(e)&&(t=e,e={}),this._get("/user/likes",e,t)},follow:function(e,t){this._post("/user/follow",{url:e},t)},unfollow:function(e,t){this._post("/user/unfollow",{url:e},t)},like:function(e,t,s){this._post("/user/like",{id:e,reblog_key:t},s)},unlike:function(e,t,s){this._post("/user/unlike",{id:e,reblog_key:t},s)},dashboard:calls.getWithOptions("/user/dashboard"),following:calls.getWithOptions("/user/following"),_get:function(e,t,s,o){t=t||{},o&&(t.api_key=this.credentials.consumer_key),this.request.get({url:helpers.baseUrl+e+"?"+qs.stringify(t),json:!0,oauth:this.credentials,followRedirect:!1},helpers.requestCallback(s))},_post:function(e,t,s){var o=t.data;delete t.data;var i=this.request.post(helpers.baseUrl+e,function(e,t,o){try{o=JSON.parse(o)}catch(i){o={error:"Malformed Response: "+o}}helpers.requestCallback(s)(e,t,o)});i.form(t),i.oauth(this.credentials),delete i.headers["content-type"],delete i.body;var l=i.form();for(var r in t)l.append(r,t[r]);o&&l.append("data",fs.createReadStream(o));var n=l.getHeaders();for(r in n)i.headers[r]=n[r]}},module.exports=TumblrClient;

/***/ },
/* 615 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=r():e.returnExports=r()}(void 0,function(){function e(n,i){if("function"!=typeof i)throw new Error("Bad callback given: "+i);if(!n)throw new Error("No options given");var s=n.onResponse;if(n="string"==typeof n?{uri:n}:JSON.parse(JSON.stringify(n)),n.onResponse=s,n.verbose&&(e.log=o()),n.url&&(n.uri=n.url,delete n.url),!n.uri&&""!==n.uri)throw new Error("options.uri is a required argument");if("string"!=typeof n.uri)throw new Error("options.uri must be a string");for(var u=["proxy","_redirectsFollowed","maxRedirects","followRedirect"],d=0;d<u.length;d++)if(n[u[d]])throw new Error("options."+u[d]+" is not supported");if(n.callback=i,n.method=n.method||"GET",n.headers=n.headers||{},n.body=n.body||null,n.timeout=n.timeout||e.DEFAULT_TIMEOUT,n.headers.host)throw new Error("Options.headers.host is not supported");n.json&&(n.headers.accept=n.headers.accept||"application/json","GET"!==n.method&&(n.headers["content-type"]="application/json"),"boolean"!=typeof n.json?n.body=JSON.stringify(n.json):"string"!=typeof n.body&&(n.body=JSON.stringify(n.body)));var c=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return r.join("&")};if(n.qs){var f="string"==typeof n.qs?n.qs:c(n.qs);n.uri.indexOf("?")!==-1?n.uri=n.uri+"&"+f:n.uri=n.uri+"?"+f}var p=function(e){var r={};r.boundry="-------------------------------"+Math.floor(1e9*Math.random());var t=[];for(var o in e)e.hasOwnProperty(o)&&t.push("--"+r.boundry+'\nContent-Disposition: form-data; name="'+o+'"\n\n'+e[o]+"\n");return t.push("--"+r.boundry+"--"),r.body=t.join(""),r.length=r.body.length,r.type="multipart/form-data; boundary="+r.boundry,r};if(n.form){if("string"==typeof n.form)throw"form name unsupported";if("POST"===n.method){var l=(n.encoding||"application/x-www-form-urlencoded").toLowerCase();switch(n.headers["content-type"]=l,l){case"application/x-www-form-urlencoded":n.body=c(n.form).replace(/%20/g,"+");break;case"multipart/form-data":var h=p(n.form);n.body=h.body,n.headers["content-type"]=h.type;break;default:throw new Error("unsupported encoding:"+l)}}}return n.onResponse=n.onResponse||t,n.onResponse===!0&&(n.onResponse=i,n.callback=t),!n.headers.authorization&&n.auth&&(n.headers.authorization="Basic "+a(n.auth.username+":"+n.auth.password)),r(n)}function r(r){function t(){f=!0;var t=new Error("ETIMEDOUT");return t.code="ETIMEDOUT",t.duration=r.timeout,e.log.error("Timeout",{id:c._id,milliseconds:r.timeout}),r.callback(t,c)}function o(t){if(f)return e.log.debug("Ignoring timed out state change",{state:c.readyState,id:c.id});if(e.log.debug("State change",{state:c.readyState,id:c.id,timed_out:f}),c.readyState===s.OPENED){e.log.debug("Request started",{id:c.id});for(var o in r.headers)c.setRequestHeader(o,r.headers[o])}else c.readyState===s.HEADERS_RECEIVED?n():c.readyState===s.LOADING?(n(),a()):c.readyState===s.DONE&&(n(),a(),u())}function n(){if(!y.response){if(y.response=!0,e.log.debug("Got response",{id:c.id,status:c.status}),clearTimeout(c.timeoutTimer),c.statusCode=c.status,p&&0==c.statusCode){var t=new Error("CORS request rejected: "+r.uri);return t.cors="rejected",y.loading=!0,y.end=!0,r.callback(t,c)}r.onResponse(null,c)}}function a(){y.loading||(y.loading=!0,e.log.debug("Response body loading",{id:c.id}))}function u(){if(!y.end){if(y.end=!0,e.log.debug("Request done",{id:c.id}),c.body=c.responseText,r.json)try{c.body=JSON.parse(c.responseText)}catch(t){return r.callback(t,c)}r.callback(null,c,c.body)}}var c=new s,f=!1,p=i(r.uri),l="withCredentials"in c;if(d+=1,c.seq_id=d,c.id=d+": "+r.method+" "+r.uri,c._id=c.id,p&&!l){var h=new Error("Browser does not support cross-origin request: "+r.uri);return h.cors="unsupported",r.callback(h,c)}c.timeoutTimer=setTimeout(t,r.timeout);var y={response:!1,loading:!1,end:!1};return c.onreadystatechange=o,c.open(r.method,r.uri,!0),p&&(c.withCredentials=!!r.withCredentials),c.send(r.body),c}function t(){}function o(){var e,r,o={},i=["trace","debug","info","warn","error"];for(r=0;r<i.length;r++)e=i[r],o[e]=t,"undefined"!=typeof console&&console&&console[e]&&(o[e]=n(console,e));return o}function n(e,r){function t(t,o){return"object"===("undefined"==typeof o?"undefined":_typeof(o))&&(t+=" "+JSON.stringify(o)),e[r].call(e,t)}return t}function i(e){var r,t=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;try{r=location.href}catch(o){r=document.createElement("a"),r.href="",r=r.href}var n=t.exec(r.toLowerCase())||[],i=t.exec(e.toLowerCase()),a=!(!i||i[1]==n[1]&&i[2]==n[2]&&(i[3]||("http:"===i[1]?80:443))==(n[3]||("http:"===n[1]?80:443)));return a}function a(e){var r,t,o,n,i,a,s,u,d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=0,f=0,p="",l=[];if(!e)return e;do r=e.charCodeAt(c++),t=e.charCodeAt(c++),o=e.charCodeAt(c++),u=r<<16|t<<8|o,n=u>>18&63,i=u>>12&63,a=u>>6&63,s=63&u,l[f++]=d.charAt(n)+d.charAt(i)+d.charAt(a)+d.charAt(s);while(c<e.length);switch(p=l.join(""),e.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p}var s=XMLHttpRequest;if(!s)throw new Error("missing XMLHttpRequest");e.log={trace:t,debug:t,info:t,warn:t,error:t};var u=18e4,d=0;e.withCredentials=!1,e.DEFAULT_TIMEOUT=u,e.defaults=function(r,t){var o=function(e){var t=function(t,o){t="string"==typeof t?{uri:t}:JSON.parse(JSON.stringify(t));for(var n in r)void 0===t[n]&&(t[n]=r[n]);return e(t,o)};return t},n=o(e);return n.get=o(e.get),n.post=o(e.post),n.put=o(e.put),n.head=o(e.head),n};var c=["get","put","post","head"];return c.forEach(function(r){var t=r.toUpperCase(),o=r.toLowerCase();e[o]=function(r){"string"==typeof r?r={method:t,uri:r}:(r=JSON.parse(JSON.stringify(r)),r.method=t);var o=[r].concat(Array.prototype.slice.apply(arguments,[1]));return e.apply(this,o)}}),e.couch=function(r,o){function n(e,r,t){if(e)return o(e,r,t);if((r.statusCode<200||r.statusCode>299)&&t.error){e=new Error("CouchDB error: "+(t.error.reason||t.error.error));for(var n in t)e[n]=t[n];return o(e,r,t)}return o(e,r,t)}"string"==typeof r&&(r={uri:r}),r.json=!0,r.body&&(r.json=r.body),delete r.body,o=o||t;var i=e(r,n);return i},e});

/***/ },
/* 616 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function noop(){}function jsonp(e,o,n){function t(){u.parentNode.removeChild(u),window[m]=noop}"function"==typeof o&&(n=o,o={}),o||(o={});var u,r,c=o.prefix||"__jp",i=o.param||"callback",p=null!=o.timeout?o.timeout:6e4,d=encodeURIComponent,a=document.getElementsByTagName("script")[0]||document.head,m=c+count++;p&&(r=setTimeout(function(){t(),n&&n(new Error("Timeout"))},p)),window[m]=function(e){debug("jsonp got",e),r&&clearTimeout(r),t(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+i+"="+d(m),e=e.replace("?&","?"),debug('jsonp req "%s"',e),u=document.createElement("script"),u.src=e,a.parentNode.insertBefore(u,a)}var debug=__webpack_require__(618)("jsonp");module.exports=jsonp;var count=0;

/***/ },
/* 617 */
/***/ function(module, exports) {

	"use strict";function parse(e){if(e=String(e),!(e.length>1e4)){var r=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(r){var n=parseFloat(r[1]),t=(r[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"yrs":case"yr":case"y":return n*y;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*m;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function fmtShort(e){return e>=d?Math.round(e/d)+"d":e>=h?Math.round(e/h)+"h":e>=m?Math.round(e/m)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function fmtLong(e){return plural(e,d,"day")||plural(e,h,"hour")||plural(e,m,"minute")||plural(e,s,"second")||e+" ms"}function plural(e,s,r){if(!(e<s))return e<1.5*s?Math.floor(e/s)+" "+r:Math.ceil(e/s)+" "+r+"s"}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;module.exports=function(e,s){s=s||{};var r="undefined"==typeof e?"undefined":_typeof(e);if("string"===r&&e.length>0)return parse(e);if("number"===r&&isNaN(e)===!1)return s["long"]?fmtLong(e):fmtShort(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};

/***/ },
/* 618 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";function useColors(){return"undefined"!=typeof window&&"undefined"!=typeof window.process&&"renderer"===window.process.type||("undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||"undefined"!=typeof window&&window.console&&(console.firebug||console.exception&&console.table)||navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function formatArgs(e){var o=this.useColors;if(e[0]=(o?"%c":"")+this.namespace+(o?" %c":" ")+e[0]+(o?"%c ":" ")+"+"+exports.humanize(this.diff),o){var t="color: "+this.color;e.splice(1,0,t,"color: inherit");var r=0,n=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(n=r))}),e.splice(n,0,t)}}function log(){return"object"===("undefined"==typeof console?"undefined":_typeof(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(e){try{null==e?exports.storage.removeItem("debug"):exports.storage.debug=e}catch(o){}}function load(){try{return exports.storage.debug}catch(e){}if("undefined"!=typeof process&&"env"in process)return ({"NODE_ENV":"production","BROWSER":true}).DEBUG}function localstorage(){try{return window.localStorage}catch(e){}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};exports=module.exports=__webpack_require__(619),exports.log=log,exports.formatArgs=formatArgs,exports.save=save,exports.load=load,exports.useColors=useColors,exports.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:localstorage(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(o){return"[UnexpectedJSONParseError]: "+o.message}},exports.enable(load()),window&&(window.debug=exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(234)))

/***/ },
/* 619 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function selectColor(e){var r,t=0;for(r in e)t=(t<<5)-t+e.charCodeAt(r),t|=0;return exports.colors[Math.abs(t)%exports.colors.length]}function createDebug(e){function r(){if(r.enabled){var e=r,t=+new Date,o=t-(prevTime||t);e.diff=o,e.prev=prevTime,e.curr=t,prevTime=t;for(var s=new Array(arguments.length),n=0;n<s.length;n++)s[n]=arguments[n];s[0]=exports.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var a=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,t){if("%%"===r)return r;a++;var o=exports.formatters[t];if("function"==typeof o){var n=s[a];r=o.call(e,n),s.splice(a,1),a--}return r}),exports.formatArgs.call(e,s);var p=r.log||exports.log||console.log.bind(console);p.apply(e,s)}}return r.namespace=e,r.enabled=exports.enabled(e),r.useColors=exports.useColors(),r.color=selectColor(e),"function"==typeof exports.init&&exports.init(r),r}function enable(e){exports.save(e);for(var r=(e||"").split(/[\s,]+/),t=r.length,o=0;o<t;o++)r[o]&&(e=r[o].replace(/\*/g,".*?"),"-"===e[0]?exports.skips.push(new RegExp("^"+e.substr(1)+"$")):exports.names.push(new RegExp("^"+e+"$")))}function disable(){exports.enable("")}function enabled(e){var r,t;for(r=0,t=exports.skips.length;r<t;r++)if(exports.skips[r].test(e))return!1;for(r=0,t=exports.names.length;r<t;r++)if(exports.names[r].test(e))return!0;return!1}function coerce(e){return e instanceof Error?e.stack||e.message:e}exports=module.exports=createDebug.debug=createDebug["default"]=createDebug,exports.coerce=coerce,exports.disable=disable,exports.enable=enable,exports.enabled=enabled,exports.humanize=__webpack_require__(617),exports.names=[],exports.skips=[],exports.formatters={};var prevTime;

/***/ },
/* 620 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 621 */
/***/ function(module, exports) {

	"use strict";function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(r,e,t,n){e=e||"&",t=t||"=";var o={};if("string"!=typeof r||0===r.length)return o;var a=/\+/g;r=r.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var p=r.length;s>0&&p>s&&(p=s);for(var y=0;y<p;++y){var u,c,i,l,f=r[y].replace(a,"%20"),v=f.indexOf(t);v>=0?(u=f.substr(0,v),c=f.substr(v+1)):(u=f,c=""),i=decodeURIComponent(u),l=decodeURIComponent(c),hasOwnProperty(o,i)?isArray(o[i])?o[i].push(l):o[i]=[o[i],l]:o[i]=l}return o};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};

/***/ },
/* 622 */
/***/ function(module, exports) {

	"use strict";function map(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},stringifyPrimitive=function(e){switch("undefined"==typeof e?"undefined":_typeof(e)){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};module.exports=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===("undefined"==typeof e?"undefined":_typeof(e))?map(objectKeys(e),function(r){var o=encodeURIComponent(stringifyPrimitive(r))+n;return isArray(e[r])?map(e[r],function(e){return o+encodeURIComponent(stringifyPrimitive(e))}).join(t):o+encodeURIComponent(stringifyPrimitive(e[r]))}).join(t):r?encodeURIComponent(stringifyPrimitive(r))+n+encodeURIComponent(stringifyPrimitive(e)):""};var isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},objectKeys=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t};

/***/ },
/* 623 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore),_IndexPage=__webpack_require__(242),_IndexPage2=_interopRequireDefault(_IndexPage);exports["default"]=_react2["default"].createClass({displayName:"App",getInitialState:function(){return{currentRoute:_RouteStore2["default"].getCurrentRoute()}},componentDidMount:function(){_RouteStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_RouteStore2["default"].removeChangeListener(this._onChange)},render:function(){var e=this.state.currentRoute,t=e.config.page;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{id:"side-menu",className:"ui vertical fixed icon inverted menu sidebar-trans"},_react2["default"].createElement("a",{className:"item",onClick:this._onSideBarClick},_react2["default"].createElement("i",{className:"sidebar icon"}))),_react2["default"].createElement(t,{pageUrl:e.url}))},_onChange:function(){this.setState({currentRoute:_RouteStore2["default"].getCurrentRoute()})},_onSideBarClick:function(e){e.preventDefault(),$(".ui.sidebar").sidebar("toggle")}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 624 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_AuthorConstants=__webpack_require__(239),_AuthorConstants2=_interopRequireDefault(_AuthorConstants),AuthorAction=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"loadAuthorData",value:function(){_AppDispatcher2["default"].dispatch({actionType:_AuthorConstants2["default"].AUTHOR_LOAD_DATA})}}]),t}();exports["default"]=new AuthorAction;

/***/ },
/* 625 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_ActivityAction=__webpack_require__(113),_index=__webpack_require__(433),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"ActivityFilter",contextTypes:{store:_react2["default"].PropTypes.object},componentDidMount:function(){var e=this,t=this.context.store;this.unsubscribe=t.subscribe(function(){return e.forceUpdate()}),$("#activityTimeFilter").dropdown(),$("#activityHostFilter").dropdown()},componentWillUnmount:function(){this.unsubscribe()},render:function(){var e=this.context.store,t=e.getState(),i=t.activities;return _react2["default"].createElement("div",{className:_index2["default"].container},_react2["default"].createElement("div",{className:_index2["default"].title},_react2["default"].createElement("div",{id:"activityTimeFilter",className:"ui inline dropdown"},_react2["default"].createElement("div",{className:"text"},i.showOldItems?"過去":"即將"),_react2["default"].createElement("i",{className:"dropdown icon"}),_react2["default"].createElement("div",{className:"menu"},_react2["default"].createElement("div",{className:"header"},"活動時間"),_react2["default"].createElement("div",{className:(i.showOldItems?"":"active")+" item",onClick:this.onShowNewClick,"data-text":"即將"},"即將"),_react2["default"].createElement("div",{className:(i.showOldItems?"active":"")+" item",onClick:this.onShowOldClick,"data-text":"過去"},"過去"))),"由 ",_react2["default"].createElement("div",{id:"activityHostFilter",className:"ui inline dropdown"},_react2["default"].createElement("div",{className:"text"},i.showOtherHost?"夥伴單位":"wowAfrica"),_react2["default"].createElement("i",{className:"dropdown icon"}),_react2["default"].createElement("div",{className:"menu"},_react2["default"].createElement("div",{className:"header"},"主辦單位"),_react2["default"].createElement("div",{className:(i.showOtherHost?"":"active")+" item",onClick:this.onShowWaClick,"data-text":"wowAfrica"},"wowAfrica"),_react2["default"].createElement("div",{className:(i.showOtherHost?"active":"")+" item",onClick:this.onShowOtherClick,"data-text":"夥伴單位"},"夥伴單位"))),"舉辦"))},onShowOldClick:function(){this.context.store.dispatch((0,_ActivityAction.showOldActivities)())},onShowNewClick:function(){this.context.store.dispatch((0,_ActivityAction.showNewActivities)())},onShowOtherClick:function(){this.context.store.dispatch((0,_ActivityAction.showOtherHost)())},onShowWaClick:function(){this.context.store.dispatch((0,_ActivityAction.showWaHost)())}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 626 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_ActivityFilter=__webpack_require__(625),_ActivityFilter2=_interopRequireDefault(_ActivityFilter),_index=__webpack_require__(434),_index2=_interopRequireDefault(_index),ActivityCard=function(e){var t=e.id,a=e.image,i=e.title,r=e.date,l=e.time,c=e.area,n=e.location,d=e.brief,u=e.onCardClick;return _react2["default"].createElement("a",{className:"card "+_index2["default"].card,href:"/activities/"+t,onClick:u},_react2["default"].createElement("div",{className:_index2["default"].cardImg,style:{backgroundImage:"url("+a+")"}}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("div",{className:"header"},i),_react2["default"].createElement("div",{className:_index2["default"].meta},_react2["default"].createElement("i",{className:"yellow marker icon"}),c," ",n),_react2["default"].createElement("div",{className:_index2["default"].meta},_react2["default"].createElement("i",{className:"yellow wait icon"}),r," ",l),_react2["default"].createElement("div",{className:_index2["default"].description},d)))},ActivityGrid=function(e){var t=e.items,a=e.showOther,i=e.onCardClick;return _react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement("div",{className:_index2["default"].gridTitle},"活動訊息"),_react2["default"].createElement(_ActivityFilter2["default"],null),_react2["default"].createElement("div",{className:"ui centered cards"},filterOther(t,a).map(function(e){return _react2["default"].createElement(ActivityCard,{id:e.id,title:e.title,image:e.image,date:e.date,time:e.time,area:e.area,location:e.location,brief:e.brief,ticketLink:e.ticketLink,onCardClick:i})})))},filterOther=function(e,t){return t?e.filter(function(e){return null===e.host.match(/wowAfrica/i)}):e.filter(function(e){return null!==e.host.match(/wowAfrica/i)})};exports["default"]=ActivityGrid;

/***/ },
/* 627 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_ActivityGrid=__webpack_require__(626),_ActivityGrid2=_interopRequireDefault(_ActivityGrid),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_ActivityAction=__webpack_require__(113);exports["default"]=_react2["default"].createClass({displayName:"ActivitySection",contextTypes:{store:_react2["default"].PropTypes.object},componentDidMount:function(){var t=this,e=this.context.store;this.unsubscribe=e.subscribe(function(){return t.forceUpdate()}),e.dispatch((0,_ActivityAction.fetchActivities)())},componentWillUnmount:function(){this.unsubscribe()},render:function(){var t=this.context.store,e=t.getState(),i=e.activities;return console.log(i),_react2["default"].createElement("div",null,_react2["default"].createElement(_ActivityGrid2["default"],{items:i.showOldItems?i.oldItems:i.items,showOther:i.showOtherHost,onCardClick:this._onClick}))},_onClick:function(t){var e=this.context.store,i=t.currentTarget,r=i.pathname,c=i.hash;e.dispatch((0,_ActivityAction.showActivity)(r.split("/")[2])),history.pushState({pathname:r,hash:c},"",r),_RouteAction2["default"].updatePath(r,c),t.preventDefault()}});

/***/ },
/* 628 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListAuthorStore=__webpack_require__(664),_PostListAuthorStore2=_interopRequireDefault(_PostListAuthorStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_PostGrid=__webpack_require__(114),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"AuthorSection",getInitialState:function(){return{listCon:_PostListAuthorStore2["default"].getListContainer(this.props.author)}},componentDidMount:function(){_PostListAuthorStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_PostListAuthorStore2["default"].removeChangeListener(this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListAuthorStore2["default"].getListContainer(t.author)})},render:function(){var t=this.state.listCon,e=this.props.title;return _react2["default"].createElement(_PostGrid2["default"],{title:e,posts:t.posts,onPostGridClick:this._onClick})},_onChange:function(){this.setState({listCon:_PostListAuthorStore2["default"].getListContainer(this.props.author)})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,r=e.hash;history.pushState({pathname:o,hash:r},"",o),_RouteAction2["default"].updatePath(o,r),t.preventDefault()}});

/***/ },
/* 629 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(435),_index2=_interopRequireDefault(_index),CategoryBoxLeft=function(e){var t=e.url,a=e.onCategoryBoxClick;return _react2["default"].createElement("a",{href:t,onClick:a},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxLeftUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxLeftBottom}))},CategoryBoxCenter=function(e){var t=e.url,a=e.title,r=e.onCategoryBoxClick,l=e.categoryName;return _react2["default"].createElement("a",{href:t,onClick:r},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCenterUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCenterBottom},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxTitle},a),_react2["default"].createElement("div",{className:"ui divider",style:{borderTop:"1px solid grey",margin:"0rem 1rem 0.3rem 1rem"}}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxCategory},l)))},CategoryBoxRight=function(e){var t=e.url,a=e.onCategoryBoxClick;return _react2["default"].createElement("a",{href:t,onClick:a},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxRightUp}),_react2["default"].createElement("div",{className:_index2["default"].categoryBoxRightBottom}))},CategoryBox=function(e){var t=e.backImg,a=e.url,r=e.onCategoryBoxClick,l=e.title,c=e.categoryName;return _react2["default"].createElement("div",{className:"middle aligned column"},_react2["default"].createElement("div",{className:_index2["default"].categoryBox,style:{backgroundImage:"url("+t+")"}},_react2["default"].createElement("div",{className:"ui grid"},_react2["default"].createElement("div",{className:"four wide column",style:{paddingRight:0}},_react2["default"].createElement(CategoryBoxLeft,{url:a,onCategoryBoxClick:r})),_react2["default"].createElement("div",{className:"eight wide column",style:{paddingRight:0,paddingLeft:0}},_react2["default"].createElement(CategoryBoxCenter,{url:a,onCategoryBoxClick:r,title:l,categoryName:c})),_react2["default"].createElement("div",{className:"four wide column",style:{paddingLeft:0}},_react2["default"].createElement(CategoryBoxRight,{url:a,onCategoryBoxClick:r})))))};exports["default"]=CategoryBox;

/***/ },
/* 630 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(116),_PostListStore2=_interopRequireDefault(_PostListStore),_Component=__webpack_require__(629),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"CategoryBox",getInitialState:function(){return{posts:_PostListStore2["default"].getPostList(this.props.category)}},render:function(){var t=this.state.posts,e=this.props,o=e.category,s=e.onCategoryBoxClick,r="",i="",n="",a=_PostListConfig2["default"].categoryMap[o];return this.state.posts.length>0&&(r="/view_post_list/posts/"+t[0].id,i=t[0].title,n=t[0].image),_react2["default"].createElement(_Component2["default"],{url:r,backImg:n,title:i,categoryName:a,onCategoryBoxClick:s})},componentDidMount:function(){_PostListStore2["default"].addChangeListener("category",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("category",this._onChange)},_onChange:function(){this.setState({posts:_PostListStore2["default"].getPostList(this.props.category)})}});

/***/ },
/* 631 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(436),_index2=_interopRequireDefault(_index),CategoryBoxMore=function(e){var t=e.onCategoryBoxClick;return _react2["default"].createElement("div",{className:"middle aligned centered column"},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxMore},_react2["default"].createElement("a",{href:"/view_post_list/category/new",onClick:t},_react2["default"].createElement("div",{className:_index2["default"].categoryBoxMoreTitle},"閱讀更多文章"))))};exports["default"]=CategoryBoxMore;

/***/ },
/* 632 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(36),CategoryMenu=function(e){var t=e.categories,r=e.nameMap,a=e.onCategoryClick;return _react2["default"].createElement("div",{id:"category-menu"},_react2["default"].createElement(_reactSemantify.Menu,{className:"secondary"},t.map(function(e){return _react2["default"].createElement(_reactSemantify.Item,{type:"link",key:e,href:"/view_post_list/category/"+e,onClick:a,active:!1},_react2["default"].createElement(_reactSemantify.Text,{style:{color:"#E8F5FF"}},r[e]))})))};exports["default"]=CategoryMenu;

/***/ },
/* 633 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(116),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(114),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"CategorySection",getInitialState:function(){return{listCon:_PostListStore2["default"].getListContainer(this.props.category),moreButtonLoading:!1}},componentDidMount:function(){_PostListStore2["default"].addChangeListener("category",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("category",this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListStore2["default"].getListContainer(t.category),moreButtonLoading:!1})},render:function(){var t=!1,e=this.state,o=e.listCon,i=e.moreButtonLoading,r=_PostListConfig2["default"].categoryMap[this.props.title];return o.parsedPostNum<o.totalPostNum&&(t=!0),_react2["default"].createElement(_PostGrid2["default"],{title:r,posts:o.posts,moreButton:t,moreButtonLoading:i,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListStore2["default"].getListContainer(this.props.category),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,i=e.hash;history.pushState({pathname:o,hash:i},"",o),_RouteAction2["default"].updatePath(o,i),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListStore2["default"].loadMorePosts(this.props.category,_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_index=__webpack_require__(437),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36),Brief=function(){return _react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerBox,_index2["default"].footerBoxInfo)},"wowAfrica 阿非卡為台灣最完整的非洲資訊平台，我們的願景是搭起台灣與非洲的橋樑，藉由資訊、新聞、整合各方資源及實體活動等推廣方式，豐富我們對於非洲的認識及想像，達成進一步的交流與發展。")},AboutUrl=function(e){var t=e.onFooterClick;return _react2["default"].createElement(_reactSemantify.Menu,{className:"vertical secondary"},_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/about_us",onClick:t},_react2["default"].createElement(_reactSemantify.Text,{style:{wordWrap:"break-word"}},"關於 wowAfrica")),_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/about_authors",onClick:t},_react2["default"].createElement(_reactSemantify.Text,null,"成員介紹")),_react2["default"].createElement(_reactSemantify.Item,{style:{color:"white",fontSize:"18px"},type:"link",href:"/contact_us",onClick:t},_react2["default"].createElement(_reactSemantify.Text,null,"聯絡我們")))},SocialLink=function(){return _react2["default"].createElement("div",{className:_index2["default"].footerIconGroups},_react2["default"].createElement("a",{href:"mailto:lighteningdark2014@gmail.com",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconMail)})),_react2["default"].createElement("a",{href:"http://wowafrica.tumblr.com/",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconTumblr)})),_react2["default"].createElement("a",{href:"https://www.facebook.com/wowafrica.tw/",target:"_blank"},_react2["default"].createElement("div",{className:(0,_classnames2["default"])(_index2["default"].footerIcon,_index2["default"].footerIconFacebook)})))},Subscribe=_react2["default"].createClass({displayName:"Subscribe",render:function(){return _react2["default"].createElement("div",{className:_index2["default"].footerBox},"最新資訊及活動通知",_react2["default"].createElement("div",{id:"emailForm",className:"ui form",style:{paddingTop:"8px"}},_react2["default"].createElement("div",{className:"field"},_react2["default"].createElement("input",{id:"emailInput",type:"email",placeholder:"Email"})),_react2["default"].createElement("div",{className:"ui error message",style:{fontSize:"14px"}},"oops! 現在有些問題，請稍候再試"),_react2["default"].createElement("div",{className:"ui warning message",style:{fontSize:"14px"}},"Email 忘了填喔！"),_react2["default"].createElement("div",{className:(0,_classnames2["default"])("ui submit button",_index2["default"].footerEmailBtn),onClick:this._onSubBtnClick},"訂閱")))},_onSubBtnClick:function(e){var t=document.querySelector("#emailForm").classList,a=document.querySelector("#emailInput").value,l=document.querySelector("."+_index2["default"].footerEmailBtn).classList;if(t.remove("error"),t.remove("warning"),""===a)return void emailForm.classList.add("warning");l.add("loading");$.ajax({url:"https://script.google.com/macros/s/AKfycbzuOLvCRul3ZAzNl3kp9nPihUQ_iowpjB-Uf1nwuvhY9Q5lODI/exec",type:"post",data:{email:a}}).done(function(e){document.querySelector("."+_index2["default"].footerEmailBtn).textContent="完成！"}).fail(function(e){t.add("error")}).always(function(){l.remove("loading")})}}),Footer=function(e){var t=e.onFooterClick;return _react2["default"].createElement("div",{className:_index2["default"].footer},_react2["default"].createElement("div",{className:""},_react2["default"].createElement("div",{className:"ui stackable grid"},_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"six wide centered column"},_react2["default"].createElement(Brief,null)),_react2["default"].createElement("div",{className:"four wide column",style:{color:"white",backgroundColor:"#BF3333"}},_react2["default"].createElement("div",{className:_index2["default"].footerBox},_react2["default"].createElement(AboutUrl,{onFooterClick:t}),_react2["default"].createElement(SocialLink,null))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement(Subscribe,null)),_react2["default"].createElement("div",{className:"one wide column"}))))};exports["default"]=Footer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 635 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_CategoryBox=__webpack_require__(630),_CategoryBox2=_interopRequireDefault(_CategoryBox),_CategoryBoxMore=__webpack_require__(631),_CategoryBoxMore2=_interopRequireDefault(_CategoryBoxMore);exports["default"]=_react2["default"].createClass({displayName:"IndexCategoryBlock",render:function(){var e=this,t=_PostListConfig2["default"].categories;return _react2["default"].createElement("div",{className:"ui three column stackable padded grid"},t.map(function(t){return _react2["default"].createElement(_CategoryBox2["default"],{category:t,onCategoryBoxClick:e._onClick})}),_react2["default"].createElement(_CategoryBoxMore2["default"],{onCategoryBoxClick:this._onClick}))},_onClick:function(e){var t=e.currentTarget,r=t.pathname,o=t.hash;history.pushState({pathname:r,hash:o},"",r),_RouteAction2["default"].updatePath(r,o),e.preventDefault()}});

/***/ },
/* 636 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(438),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36),MenuItems=function(e){var t=e.name,a=e.subPage,r=e.onMenuClick;return"article"===t?_react2["default"].createElement(_reactSemantify.Menu,null):_react2["default"].createElement(_reactSemantify.Menu,{className:_index2["default"].dropdownMenu},a.map(function(e){return _react2["default"].createElement(_reactSemantify.Item,{type:"link",active:e.status,href:e.url,onClick:r},e.showName)}))},MenuDropdown=function(e){var t=e.section,a=e.onMenuClick,r=t.showName,n=t.name,c=t.subPage,u=t.currentPage,l=!1;""!==u&&(r=u);var i=!0,o=!1,d=void 0;try{for(var f,m=c[Symbol.iterator]();!(i=(f=m.next()).done);i=!0){var _=f.value;_.status&&(l=!0)}}catch(s){o=!0,d=s}finally{try{!i&&m["return"]&&m["return"]()}finally{if(o)throw d}}return _react2["default"].createElement(_reactSemantify.Item,{id:"btn-"+n,active:l},_react2["default"].createElement(_reactSemantify.Dropdown,{init:!0},_react2["default"].createElement(_reactSemantify.Text,{style:{color:"#E8F5FF"}},r),_react2["default"].createElement(_reactSemantify.Icon,{className:"dropdown",style:{color:"#E8F5FF"}}),_react2["default"].createElement(MenuItems,{name:n,subPage:c,onMenuClick:a})))},IndexMenu=function(e){var t=e.currentMenu,a=e.onMenuClick;return _react2["default"].createElement("div",{id:_index2["default"].indexMenu},_react2["default"].createElement("div",{className:"ui centered grid"},_react2["default"].createElement(_reactSemantify.Menu,{className:"secondary"},_react2["default"].createElement(_reactSemantify.Item,{id:"menu-logo",style:{paddingTop:"14px"}},_react2["default"].createElement("a",{href:"/"},_react2["default"].createElement("img",{src:"/images/wow_logo2.png",style:{width:"180px"}}))),t.map(function(e){return _react2["default"].createElement(MenuDropdown,{section:e,onMenuClick:a})}))))};exports["default"]=IndexMenu;

/***/ },
/* 637 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(439),_index2=_interopRequireDefault(_index),Section=function(e){var t=e.image,i=e.title,a=e.id,d=e.displayType,l=e.onIndexWideBlockClick;return _react2["default"].createElement("div",null,_react2["default"].createElement("a",{href:"/view_post_list/posts/"+a,onClick:l},_react2["default"].createElement("div",{className:_index2["default"].indexWide,style:{backgroundImage:"url("+t+")",backgroundPosition:"center"}},_react2["default"].createElement("div",{className:_index2["default"].indexWideBoxBefore}),_react2["default"].createElement("div",{className:_index2["default"].indexWideBox},_react2["default"].createElement("div",{className:_index2["default"].indexWideType},d),_react2["default"].createElement("div",{className:"ui divider",style:{width:"175px",borderTop:"1px solid white",margin:"0.3rem 0rem 0.3rem 0rem"}}),_react2["default"].createElement("div",{className:_index2["default"].indexWideTitle},i)))))},IndexWideBlock=function(e){var t=e.posts,i=e.displayType,a=e.onIndexWideBlockClick;return _react2["default"].createElement("div",null,t.slice(0,2).map(function(e){return _react2["default"].createElement(Section,{image:e.image.replace(/_540.jpg/g,"_1280.jpg"),title:e.title,id:e.id,displayType:i,onIndexWideBlockClick:a})}))};exports["default"]=IndexWideBlock;

/***/ },
/* 638 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListStore=__webpack_require__(116),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_PostListAction=__webpack_require__(237),_PostListAction2=_interopRequireDefault(_PostListAction),_elevator=__webpack_require__(247),_elevator2=_interopRequireDefault(_elevator),_Component=__webpack_require__(637),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"IndexWideBlock",getInitialState:function(){switch(this.props.type){case"new":return{posts:_PostListStore2["default"].getPostList("new")};case"top":return{posts:_PostListStore2["default"].getPostList("top")}}},componentDidUpdate:function(){new _elevator2["default"]({element:document.querySelector("#btn-article"),targetElement:document.querySelector("#category-block-divider"),duration:1500})},componentDidMount:function(){_PostListStore2["default"].addChangeListener(this.props.type,this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener(this.props.type,this._onChange)},render:function(){var t=this.state.posts,e="new"==this.props.type?"最新文章":"最新消息";return _react2["default"].createElement(_Component2["default"],{posts:t,displayType:e,onIndexWideBlockClick:this._onClick})},_onChange:function(){switch(this.props.type){case"new":this.setState({posts:_PostListStore2["default"].getPostList("new")});break;case"top":this.setState({posts:_PostListStore2["default"].getPostList("top")})}},_onClick:function(t){var e=t.currentTarget,o=e.pathname,i=e.hash;history.pushState({pathname:o,hash:i},"",o),_RouteAction2["default"].updatePath(o,i),t.preventDefault()}});

/***/ },
/* 639 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(102),_reactDom2=_interopRequireDefault(_reactDom),_NationsStore=__webpack_require__(246),_NationsStore2=_interopRequireDefault(_NationsStore),_MapStore=__webpack_require__(245),_MapStore2=_interopRequireDefault(_MapStore),_d=__webpack_require__(144),_d2=_interopRequireDefault(_d),_reactSemantify=__webpack_require__(36),NormalSection=_react2["default"].createClass({displayName:"NormalSection",render:function(){return _react2["default"].createElement(_reactSemantify.Header,{className:"medium"},this.props.name,_react2["default"].createElement(_reactSemantify.Header,{className:"sub"},this.props.children))}}),PieChar=_react2["default"].createClass({displayName:"PieChar",render:function(){var e=this.props,t=e.width,a=e.height,r=e.piedata,n=t/2,l=a/2,i=Math.min(t,a)/2,c=r.map(function(e){return e.name}),o=_d2["default"].scale.linear().domain([0,r.length]).range(["#CEC5C5","#593030"]),m=_d2["default"].svg.arc().outerRadius(i-10).innerRadius(0),u=_d2["default"].layout.pie().sort(null).value(function(e){return e.percentage}),s=u(r);return _react2["default"].createElement("svg",{width:t,height:a},s.map(function(e,t){var a=m.centroid(e);return _react2["default"].createElement("g",{className:"arc",transform:"translate("+n+","+l+")"},_react2["default"].createElement("path",{d:m(e),style:{fill:o(t),stroke:"#FFF"}}),_react2["default"].createElement("text",{transform:"translate("+a+")",style:{textAnchor:"middle"}},c[t]))}))}}),VisualComponent=_react2["default"].createClass({displayName:"VisualComponent",render:function(){var e=this.props.visualData;return"string"==typeof e?_react2["default"].createElement("div",null,"$",e):_react2["default"].createElement(PieChar,{width:"500",height:"500",piedata:e})}}),VisualSection=_react2["default"].createClass({displayName:"VisualSection",componentDidMount:function(){$(".visualSection .menu .item").tab()},render:function(){var e=this.props.nation;return _react2["default"].createElement("div",{className:"visualSection"},_react2["default"].createElement("div",{className:"ui pointing secondary menu"},_react2["default"].createElement("a",{className:"active item","data-tab":"first"},"經濟"),_react2["default"].createElement("a",{className:"item","data-tab":"second"},"信仰")),_react2["default"].createElement("div",{className:"ui active tab segment","data-tab":"first"},_react2["default"].createElement(VisualComponent,{visualData:e.economy})),_react2["default"].createElement("div",{className:"ui tab segment","data-tab":"second"},_react2["default"].createElement(VisualComponent,{visualData:e.faith})))}});exports["default"]=_react2["default"].createClass({displayName:"NationModal",getInitialState:function(){return{nation:_NationsStore2["default"].getCurrentNation(),map:null}},componentDidMount:function(){_NationsStore2["default"].addShowListener(this._onShow)},componentWillUnmount:function(){_NationsStore2["default"].removeShowListener(this._onShow)},_onShow:function(){var e=_NationsStore2["default"].getCurrentNation(),t=_MapStore2["default"].getNationMapByISO(e.iso);this.setState({nation:e,map:t}),$(_reactDom2["default"].findDOMNode(this.refs.modal)).modal("show")},render:function(){var e=this.state,t=e.nation,a=(e.map,t.flag),r=void 0===a?"kenya_flag.png":a,n=t.emblem,l=void 0===n?"kenya_svg.png":n;return r=""===r?"kenya_flag.png":r,l=""===l?"kenya_svg.png":l,_react2["default"].createElement(_reactSemantify.Modal,{className:"long",ref:"modal",init:!0},_react2["default"].createElement(_reactSemantify.Icon,{className:"close"}),_react2["default"].createElement(_reactSemantify.Header,{className:"medium"},_react2["default"].createElement("img",{src:"/images/nations/"+l}),_react2["default"].createElement("div",{className:"content"},t.country)),_react2["default"].createElement("div",{className:"image content"},_react2["default"].createElement("div",{className:"ui medium image"},_react2["default"].createElement("img",{src:"/images/nations/"+r}),_react2["default"].createElement(NormalSection,{name:"特殊象徵品"},t.symbol)),_react2["default"].createElement("div",{className:"description"},_react2["default"].createElement(NormalSection,{name:"簡介"},t.introduction),_react2["default"].createElement(NormalSection,{name:"首都"},t.capital),_react2["default"].createElement(NormalSection,{name:"國家元首"},t.headOfState),_react2["default"].createElement(NormalSection,{name:"幣制"},t.currency),_react2["default"].createElement(NormalSection,{name:"語言"},t.language),_react2["default"].createElement(NormalSection,{name:"政治"},t.politics),_react2["default"].createElement(NormalSection,{name:"氣候"},t.atmosphere),_react2["default"].createElement(NormalSection,{name:"自然地理"},t.geography),_react2["default"].createElement(NormalSection,{name:"人口"},t.population),_react2["default"].createElement(_reactSemantify.Divider,null),_react2["default"].createElement(VisualSection,{nation:t}))))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 640 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListStore=__webpack_require__(116),_PostListStore2=_interopRequireDefault(_PostListStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(114),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"NewSection",getInitialState:function(){return{listCon:_PostListStore2["default"].getListContainer("new"),moreButtonLoading:!1}},componentDidMount:function(){_PostListStore2["default"].addChangeListener("new",this._onChange)},componentWillUnmount:function(){_PostListStore2["default"].removeChangeListener("new",this._onChange)},render:function(){var t=!1,e=this.state,o=e.listCon,n=e.moreButtonLoading;return o.parsedPostNum<o.totalPostNum&&(t=!0),_react2["default"].createElement(_PostGrid2["default"],{title:"最新文章",posts:o.posts,moreButton:t,moreButtonLoading:n,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListStore2["default"].getListContainer("new"),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,n=e.hash;history.pushState({pathname:o,hash:n},"",o),_RouteAction2["default"].updatePath(o,n),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListStore2["default"].loadMorePosts("new",_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_index=__webpack_require__(441),_index2=_interopRequireDefault(_index),Block=function(e){var t=e.post,a=(e.idx,e.onBlockClick);return _react2["default"].createElement("a",{className:"item "+_index2["default"].block,href:"/view_post_list/posts/"+t.id,onClick:a},_react2["default"].createElement("div",{className:"ui medium image"},_react2["default"].createElement("img",{src:t.image,style:{maxWidth:"300px",maxHeight:"200px"}})),_react2["default"].createElement("div",{className:"middle aligned content"},_react2["default"].createElement("div",{className:"ui header"},t.title),_react2["default"].createElement("div",{className:"description"},t.brief.length>80?t.brief.substr(0,80)+"...":t.brief)))},ReadMoreBlock=function(e){var t=e.posts,a=e.onBlockClick;return _react2["default"].createElement("div",{className:"ui divided link items"},t.map(function(e,t){return _react2["default"].createElement(Block,{post:e,idx:t,onBlockClick:a})}))};exports["default"]=ReadMoreBlock;

/***/ },
/* 642 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),_PostListReadMoreStore=__webpack_require__(665),_PostListReadMoreStore2=_interopRequireDefault(_PostListReadMoreStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(641),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"ReadMoreBlock",getInitialState:function(){return{posts:[]}},componentDidMount:function(){_PostListReadMoreStore2["default"].addChangeListener(this._onChange),_PostListReadMoreStore2["default"].onUpdateRandomPostList(3,this.props.postId)},componentWillUnmount:function(){_PostListReadMoreStore2["default"].removeChangeListener(this._onChange)},_onChange:function(){this.setState({posts:_PostListReadMoreStore2["default"].getRandomPosts()})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,n=e.hash;history.pushState({pathname:o,hash:n},"",o),_RouteAction2["default"].updatePath(o,n),t.preventDefault(),_PostListReadMoreStore2["default"].onUpdateRandomPostList(3,this.props.postId)},render:function(){var t=this.state.posts;return _react2["default"].createElement(_Component2["default"],{posts:t,onBlockClick:this._onClick})}});

/***/ },
/* 643 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_reactSemantify=__webpack_require__(36),SectionItem=function(e){var t=e.showName,a=e.url,r=e.onMenuClick;return _react2["default"].createElement(_reactSemantify.Item,{type:"link",href:a,onClick:r},t)},Section=function(e){var t=e.showName,a=e.subPage,r=e.onMenuClick;return _react2["default"].createElement(_reactSemantify.Item,null,_react2["default"].createElement("div",{className:"ui inverted large header"},t,a.map(function(e){return _react2["default"].createElement(SectionItem,{showName:e.showName,url:e.url,onMenuClick:r})})))};exports["default"]=_react2["default"].createClass({displayName:"Component",componentDidMount:function(){$(".ui.sidebar").sidebar("hide"),$(".ui.sidebar").sidebar("setting","onHide",function(){$("#side-menu").addClass("sidebar-trans")}),$(".ui.sidebar").sidebar("setting","onVisible",function(){$("#side-menu").removeClass("sidebar-trans")})},render:function(){var e=this.props,t=e.currentMenu,a=e.onMenuClick;return _react2["default"].createElement("div",null,_react2["default"].createElement(_reactSemantify.Item,{id:"sidebar-menu-logo",style:{paddingTop:"14px"}},_react2["default"].createElement("a",{href:"/"},_react2["default"].createElement("img",{src:"/images/logo_color_trans.png",style:{width:"180px"}}))),t.map(function(e){return _react2["default"].createElement(Section,{showName:e.showName,subPage:e.subPage,onMenuClick:a})}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 644 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_MenuStore=__webpack_require__(115),_MenuStore2=_interopRequireDefault(_MenuStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_Component=__webpack_require__(643),_Component2=_interopRequireDefault(_Component);exports["default"]=_react2["default"].createClass({displayName:"SideBar",render:function(){var e=_MenuStore2["default"].getAll();return _react2["default"].createElement(_Component2["default"],{currentMenu:e,onMenuClick:this._onClick})},_onClick:function(e){var t=e.currentTarget,r=t.pathname,u=t.hash;history.pushState({pathname:r,hash:u},"",r),_RouteAction2["default"].updatePath(r,u),e.preventDefault(),$(".ui.sidebar").sidebar("hide")}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 645 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_PostListTagStore=__webpack_require__(666),_PostListTagStore2=_interopRequireDefault(_PostListTagStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostGrid=__webpack_require__(114),_PostGrid2=_interopRequireDefault(_PostGrid);exports["default"]=_react2["default"].createClass({displayName:"TagSection",getInitialState:function(){return{listCon:_PostListTagStore2["default"].getListContainer(),moreButtonLoading:!1}},componentDidMount:function(){_PostListTagStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_PostListTagStore2["default"].removeChangeListener(this._onChange)},componentWillReceiveProps:function(t){this.setState({listCon:_PostListTagStore2["default"].getListContainer()})},render:function(){var t=this.state,e=t.listCon,o=t.moreButtonLoading,i=this.props.title,n=!1;return e.parsedPostNum<e.totalPostNum&&(n=!0),_react2["default"].createElement(_PostGrid2["default"],{title:i,posts:e.posts,moreButton:n,moreButtonLoading:o,onPostGridClick:this._onClick,onMorePostClick:this._onLoadMoreClick})},_onChange:function(){this.setState({listCon:_PostListTagStore2["default"].getListContainer(),moreButtonLoading:!1})},_onClick:function(t){var e=t.currentTarget,o=e.pathname,i=e.hash;history.pushState({pathname:o,hash:i},"",o),_RouteAction2["default"].updatePath(o,i),t.preventDefault()},_onLoadMoreClick:function(t){t.preventDefault(),this.setState({moreButtonLoading:!0}),_PostListTagStore2["default"].loadMorePosts(this.props.tag,_TumblrConfig2["default"].postList.loadAmount)}});

/***/ },
/* 646 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={contryUrl:"/data/africa.geo.json",areaUrl:"/data/area.json"};

/***/ },
/* 647 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{name:"盧韋辰 ／ Weichen Lu",title:"共同創辦人 & 執行長 ／ Co-funder & CEO"},{name:"張堯任 ／ Yauren Chang",title:"共同創辦人 ／ Co-funder"},{name:"何佩佳 ／ Peijia He",title:"主編 ／ Editor in Chief"},{name:"李俊緯 ／ Lee",title:"網站工程師 ／ Web Engineer"},{name:"吳咨翰 ／ TzuHan Wu",title:"網站工程師 ／ Web Engineer"},{name:"王文秀 ／ Lori Wang",title:"資訊研究員兼設計師 ／ Africa Information Researcher & Designer"},{name:"何玉渟 ／ Frederica J Ho",title:"資訊研究員 ／ Africa Information Researcher"},{name:"陳一馨 ／ Ishin Chen",title:"故事採集小組 ／ Narrator of Taiwan African Story"},{name:"林俐辰 ／ Joann Lin",title:"故事採集小組 ／ Narrator of Taiwan African Story"},{name:"蔡祁珊 ／ Sherry Tsai",title:"故事採集小組 ／ Narrator of Taiwan African Story"}];

/***/ },
/* 648 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=[{name:"about",showName:"關於我們",currentPage:"",subPage:[{url:"/about_us",showName:"團隊介紹",subPage:[],status:!1},{url:"/about_authors",showName:"寫手介紹",subPage:[],status:!1}]},{name:"knowing",showName:"認識非洲",currentPage:"",subPage:[{url:"/view_africa_nations",showName:"國家基本資料",subPage:[],status:!1}]},{name:"article",showName:"文章分類",currentPage:"",subPage:[{url:"/view_post_list/category/news",showName:"時事新聞",subPage:[],status:!1},{url:"/view_post_list/category/people",showName:"人物專欄",subPage:[],status:!1},{url:"/view_post_list/category/nature",showName:"自然保育",subPage:[],status:!1},{url:"/view_post_list/category/innovation",showName:"創新應用",subPage:[],status:!1},{url:"/view_post_list/category/society",showName:"社會人文",subPage:[],status:!1},{url:"/view_post_list/category/history",showName:"歷史故事",subPage:[],status:!1},{url:"/view_post_list/category/art",showName:"藝文介紹",subPage:[],status:!1},{url:"/view_post_list/category/travel",showName:"旅行專欄",subPage:[],status:!1}]}];

/***/ },
/* 649 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={index:{path:"/",method:"get",page:__webpack_require__(242)["default"]},viewAfricaNations:{path:"/view_africa_nations",method:"get",page:__webpack_require__(243)["default"]},viewAfricaNationsPost:{path:"/view_africa_nations/posts/:post",method:"get",page:__webpack_require__(243)["default"]},viewPostList:{path:"/view_post_list/category/:category",method:"get",page:__webpack_require__(659)["default"]},viewPostListTag:{path:"/view_post_list/tag/:tag",method:"get",page:__webpack_require__(660)["default"]},viewPostListAuthor:{path:"/view_post_list/author/:author",method:"get",page:__webpack_require__(658)["default"]},viewPost:{path:"/view_post_list/posts/:post",method:"get",page:__webpack_require__(661)["default"]},aboutAuthors:{path:"/about_authors",method:"get",page:__webpack_require__(652)["default"]},aboutUs:{path:"/about_us",method:"get",page:__webpack_require__(653)["default"]},contactUs:{path:"/contact_us",method:"get",page:__webpack_require__(655)["default"]},ugandaLetter:{path:"/activity/uganda_letter",method:"get",page:__webpack_require__(656)["default"]},activities:{path:"/activities",method:"get",page:__webpack_require__(654)["default"]},viewActivity:{path:"/activities/:activity",method:"get",page:__webpack_require__(657)["default"]}};

/***/ },
/* 650 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={origin:{title:"活動源起",picture:["u-origin.jpg"],content:"在台灣，多數的學生只知歐美日韓，<br/>其他地區不僅是陌生之所，且無從了解，<br/>因此，由穿梭於烏干達農村的志工王怡珺與南方家園出版社，<br/>共同推動「國際筆友交流計畫」，讓烏干達與台灣的小朋友更加了<br/>解彼此的文化與生活！<br/><br/>因此,我們希望由老師帶領班上學生一起參與這項計畫。<br/><br/>計畫合作人簡介：<br/><br/>王怡珺去年6月自台灣大學工業管理系畢業後，加入Peace Corps，執行USAID Feed the Future計畫，是美國歐巴馬政府推動的重點計畫，工作重點在於讓中盤商價格透明、合理，並進行財務管理訓練、諮詢，改善烏干達的農業狀況。<br/><br/>每天，王怡珺穿梭在烏干達農村，聽著他們飛天遁地的神話傳說，<br/>卻眼睜睜看著全球化浪潮,吞噬他們的傳統，<br/>她和烏干達的朋友決定發起一場當地的閱讀革命，<br/>出版一系列買得到、買得起，改編自傳統故事的雙語童書。<br/>"},method:{title:"活動方式",picture:["u-o-1.jpg","u-o-2.jpg","u-o-3.jpg","u-o-4.jpg","u-o-5.jpg"],content:"烏干達方面<br/><br/>班級人數:160人<br/><br/>年齡:小學五年級(110人)和小學六年級(50人)<br/><br/>兩個月一次,一個學期約寫2封信。<br/><br/><br/>台灣方面<br/><br/>班級人數:30人 (3~4個班級對一個烏干達班級)<br/><br/>年齡:小五~國二<br/><br/>兩個月一次,一個學期約寫2封信<br/>"},introduction:{title:"烏干達小介紹",picture:["u-origin.jpg"],content:"烏干達小介紹"},firstLetter:{title:"第一封信",picture:["u-1-1.jpg","u-1-2.jpg","u-1-3.jpg","u-1-4.jpg","u-1-5.jpg","u-1-6.jpg","u-1-7.jpg"],content:"烏干達方面<br/><br/>第一堂課：教導同學哪裡是亞洲和台灣，討論對亞洲的既定印象與非洲的異同，輸出照片讓同學傳閱，或者播放台灣相關紀錄片。同學們用繪畫或是簡單的英文寫一個小故事介紹自己，並在信件的最後，問台灣筆友一些問題。<br/><br/><br/>台灣方面<br/><br/>第一堂課：老師能在課堂上先和同學介紹烏干達和非洲，非洲的地理位置、風俗民情、歷史等，可以搭配電影教學，像是《烏干達天空下》等電影，大家能夠討論對非洲的想法。同學們可以用繪畫或是簡單的英文寫一個小故事介紹自己等等，最後可以問非洲的同學一些問題。<br/>"},secondLetter:{title:"第二封信",picture:["u-2-1.jpg","u-2-2.jpg","u-2-3.jpg","u-2-4.jpg","u-2-5.jpg"],content:"烏干達方面<br/><br/>第二堂課：收到來自台灣的信，互相分享信中的內容，跟原本想像的有什麼不一樣的地方？有什麼一樣的地方?介紹自己的文化給台灣的同學（例如最喜歡的故事、介紹自己的住所，或慶典），並回答信中的問題。<br/><br/><br/>台灣方面<br/><br/>第二堂課：收到還自烏干達的信，大家互相分享信中的內容，跟原本想像的有什麼不一樣的地方？有什麼一樣的地方？介紹自己的文化給烏干達的同學，可以分享最喜歡的故事、自己的家鄉、或是慶典節慶，回答信中的問題。<br/>"},thirdLetter:{title:"第三封信",picture:["u-origin.jpg"],content:"烏干達方面<br/><br/>第三堂課：收到來自台灣的回信，和台灣的班級視訊說「嗨～」，並表演傳統歌舞。<br/><br/><br/>台灣方面<br/><br/>第三堂課：收到來自烏干達的回信，和烏干達的班級視訊說「嗨～」<br/>"}};

/***/ },
/* 651 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={MAP_EVENT:"MAP_EVENT"};

/***/ },
/* 652 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_AuthorsStore=__webpack_require__(244),_AuthorsStore2=_interopRequireDefault(_AuthorsStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_index=__webpack_require__(443),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36),AuthorsBox=_react2["default"].createClass({displayName:"AuthorsBox",getInitialState:function(){return{authors:_AuthorsStore2["default"].getAll()}},componentDidMount:function(){_AuthorsStore2["default"].addChangeListener(this._onChange)},componentWillUnmount:function(){_AuthorsStore2["default"].removeChangeListener(this._onChange)},componentDidUpdate:function(){},render:function(){var e=this,t=this.state.authors.map(function(t){return _react2["default"].createElement("a",{className:"card",href:"/view_post_list/author/"+t.name,onClick:e._onClick,key:t.id},_react2["default"].createElement(_reactSemantify.Image,{src:t.photoUrl,style:{minHeight:0,minWidth:0}}),_react2["default"].createElement("div",{className:"content"},_react2["default"].createElement("div",{className:"header"},t.name),_react2["default"].createElement("div",{className:"meta"},t.from),_react2["default"].createElement("div",{className:"description"},t.description)))});return _react2["default"].createElement("div",{className:"ui centered cards"},t)},_onChange:function(){this.setState({authors:_AuthorsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget,a=t.pathname,r=t.hash;history.pushState({pathname:a,hash:r},"",a),_RouteAction2["default"].updatePath(a,r),e.preventDefault()}});exports["default"]=_react2["default"].createClass({displayName:"AboutAuthorsPage",componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0)},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement("div",{className:"ui page grid "+_index2["default"].overrideGrid},_react2["default"].createElement("div",{className:"wide centered column"},_react2["default"].createElement(AuthorsBox,null)))),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 653 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames2=__webpack_require__(70),_classnames3=_interopRequireDefault(_classnames2),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_MemberConfig=__webpack_require__(647),_MemberConfig2=_interopRequireDefault(_MemberConfig),_index=__webpack_require__(444),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36),Section=function(e){var t=e.title,a=e.imageUrl,l=void 0===a?"":a,r=e.children,c=e.className;return _react2["default"].createElement("div",{className:(0,_classnames3["default"])(c,_index2["default"].goal)},_react2["default"].createElement("div",{className:"ui fluid container"},_react2["default"].createElement(_reactSemantify.Segment,{className:"basic center aligned"},function(){if(""!==l)return _react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:l})}(),_react2["default"].createElement(_reactSemantify.Header,{className:"center aligned huge title"},t),r)))},Button=function(e){var t=e.href,a=e.children,l=e.active,r=void 0===l?"":l;return _react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{href:t,className:(0,_classnames3["default"])("ui fluid huge button",_index2["default"].aboutButton,_defineProperty({},_index2["default"].hover,r)),style:{borderRadius:"0px"}},a))},Buttons=function(e){var t=e.active,a=[{href:"#header",value:"關於 wowAfrica",active:!1},{href:"#story",value:"我們的故事與團隊",active:!1},{href:"#partner",value:"合作夥伴",active:!1}];return a[t].active=!0,_react2["default"].createElement("div",{className:"ui five column stackable grid"},_react2["default"].createElement("div",{className:"two wide column"}),a.map(function(e){return _react2["default"].createElement(Button,{href:e.href,active:e.active},e.value)}),_react2["default"].createElement("div",{className:"two wide column"}))},HeaderSection=function(){return _react2["default"].createElement("div",{className:_index2["default"].headerSection,id:"header"},_react2["default"].createElement("div",{className:(0,_classnames3["default"])("ui container",_index2["default"].index)},_react2["default"].createElement("div",{className:"ui three column grid"},_react2["default"].createElement("div",{className:"five wide column"}),_react2["default"].createElement("div",{className:"six wide column"},_react2["default"].createElement(_reactSemantify.Image,{className:"centered medium",src:"/images/website-color.png"}),_react2["default"].createElement(_reactSemantify.Divider,{className:_index2["default"].headerDivider}),_react2["default"].createElement(_reactSemantify.Header,{className:(0,_classnames3["default"])("center aligned huge",_index2["default"].title)},"台灣最大的非洲平台網站")),_react2["default"].createElement("div",{className:"five wide column"})),_react2["default"].createElement("div",{className:_index2["default"].headerButton},_react2["default"].createElement(Buttons,{active:0}))),_react2["default"].createElement(Section,{imageUrl:"/images/telescope_trans.png",title:"願景"},_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們的目標是，打造出台灣最大的「非洲資訊平台」",_react2["default"].createElement("br",null),"作為台灣與非洲的橋樑。",_react2["default"].createElement("br",null),"翻轉台灣對非洲的刻板印象，"),_react2["default"].createElement("p",null,"增進對非洲大陸的新知，提供台灣人認識非洲的最佳管道;",_react2["default"].createElement("br",null),"同時藉由直接貿易，結合社會議題進行商品販售。"),_react2["default"].createElement("p",null,"我們期待在不久的將來能夠看到越來越多台灣與非洲大陸在人才、",_react2["default"].createElement("br",null),"產品、技術有更多的交流。")),_react2["default"].createElement(Section,{imageUrl:"/images/question_mark.png",title:"為什麼要認識非洲?"},_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們常說的地球村與國際觀，其實往往僅侷限於歐美日韓與中國，",_react2["default"].createElement("br",null),"少有往世界其他地方認識的機會。",_react2["default"].createElement("br",null),"非洲一直被視為戰亂、貧窮、落後的集合體，但真的是這樣嗎?"),_react2["default"].createElement("p",null,"肯亞擁有世界最成功的手機行動支付系統",_react2["default"].createElement("br",null),"盧安達走出1994年種族大屠殺的傷痛，實現了轉型正義，",_react2["default"].createElement("br",null),"亦為全世界第一個禁用塑膠袋的國家",_react2["default"].createElement("br",null),"奈及利亞除了是非洲最大石油出口國之外以及人口紅利的經濟市",_react2["default"].createElement("br",null),"場，其電影產業「奈萊塢」產量為世界第二。",_react2["default"].createElement("br",null),"衣索比亞擺脫過往飢荒的形象，先進的機場以及輕軌系統，",_react2["default"].createElement("br",null),"並立志成為非洲的要角"),_react2["default"].createElement("p",null,"若我們只是追著「先進」國家的腳步後頭追，",_react2["default"].createElement("br",null),"那麼將永遠走不出自己的路。",_react2["default"].createElement("br",null),"非洲一方面疾病、戰爭、衝突頻繁，",_react2["default"].createElement("br",null),"另方面也有許多我們從未想過的面向值得我們",_react2["default"].createElement("br",null),"取經與學習。讓我們來一起認識非洲吧!")))},ShowFunc=function(){return _react2["default"].createElement("div",{className:"ui seven column stackable grid"},_react2["default"].createElement("div",{className:"four wide column"}),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"行動"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/action_trans.png"})),_react2["default"].createElement("div",{className:"one wide column"},_react2["default"].createElement("div",{className:"content"},"=")),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"資訊"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/information_trans.png"})),_react2["default"].createElement("div",{className:"one wide column"},_react2["default"].createElement("div",{className:"content"},"+")),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{className:"content"},"體驗"),_react2["default"].createElement(_reactSemantify.Image,{className:"centered small",src:"/images/experience_trans.png"})),_react2["default"].createElement("div",{className:"four wide column"}))},Member=function(e){var t=e.name,a=e.title;return _react2["default"].createElement("div",{className:_index2["default"].member},_react2["default"].createElement("div",null,t),_react2["default"].createElement("div",null,a))},ShowTeam=function(){return console.log(_MemberConfig2["default"]),_react2["default"].createElement("div",{className:"ui four column stackable grid"},_react2["default"].createElement("div",{className:"three wide column"}),_react2["default"].createElement("div",{className:"five wide column"},_MemberConfig2["default"].map(function(e,t){if(t<5)return _react2["default"].createElement(Member,{name:e.name,title:e.title})})),_react2["default"].createElement("div",{className:"five wide column"},_MemberConfig2["default"].map(function(e,t){if(t>=5)return _react2["default"].createElement(Member,{name:e.name,title:e.title})})),_react2["default"].createElement("div",{className:"three wide column"}))},StorySection=function(){return _react2["default"].createElement("div",{className:_index2["default"].storySection,id:"story"},_react2["default"].createElement("div",{className:_index2["default"].storyButton},_react2["default"].createElement("div",{className:"ui container index"},_react2["default"].createElement(Buttons,{active:1}))),_react2["default"].createElement(Section,{title:"大膽出走,看見非洲"},_react2["default"].createElement("br",null),_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們是一群熱愛非洲的台灣年輕人。"),_react2["default"].createElement("p",null,"2014年我們各自探訪了10個非洲國家，"),_react2["default"].createElement("p",null,"進行2~3個月的研究旅行。"),_react2["default"].createElement("p",null,"旅程過程中我們觀察到非洲大陸上有著許多台灣所忽視的改變以及機會。"),_react2["default"].createElement("p",null,"回臺灣後，我們努力構築一個非洲資訊整合平台。"),_react2["default"].createElement("p",null,"讓台灣認識長年忽視的非洲大陸，增加國際視野，"),_react2["default"].createElement("p",null,"也希望看到越來越多台灣與非洲之間的交流產生。")),_react2["default"].createElement(Section,{className:_index2["default"].wowFunc,title:"wowAfrica方程式："},_react2["default"].createElement("br",null),_react2["default"].createElement(ShowFunc,null),_react2["default"].createElement("br",null),_react2["default"].createElement("p",null,"我們相信資訊的傳遞不只是冷冰冰的文字，"),_react2["default"].createElement("p",null,"而是透過實體的交流與體驗，以輕鬆、多元、有趣的方式"),_react2["default"].createElement("p",null,"才能達到深刻的知識傳遞wowAfrica邀請去過非洲的台灣人以及在台灣的非"),_react2["default"].createElement("p",null,"洲人來到活動現場分享他們的非洲經驗以及觀察，"),_react2["default"].createElement("p",null,"並以換桌會議的形式深入探討我們也舉辦展覽、"),_react2["default"].createElement("p",null,"讓台灣認識長年忽視的非洲大陸，增加國際視野，"),_react2["default"].createElement("p",null,"非洲美食日等活動讓台灣認識非洲。"),_react2["default"].createElement("div",{className:_index2["default"].videoContainer},_react2["default"].createElement("div",{className:_index2["default"].video},_react2["default"].createElement("iframe",{src:"https://www.youtube.com/embed/o1_-2SDwAXU",frameborder:"0",allowfullscreen:!0})))),_react2["default"].createElement(Section,{title:"團隊成員"},_react2["default"].createElement(ShowTeam,null)))},PartnerSection=function(){return _react2["default"].createElement("div",{className:"partner-section",id:"partner"},_react2["default"].createElement("div",{className:_index2["default"].partnerButton},_react2["default"].createElement("div",{className:"ui container index"},_react2["default"].createElement(Buttons,{active:2}))),_react2["default"].createElement("div",{className:"ui six column stackable grid"},_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//homewardpublish.wordpress.com/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_A_homeward.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//npost.tw/archives/author/wowafrica",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_B_npost.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//www.africa.org.tw/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_C_ATEF_.png"}))),_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"four wide column"}),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//www.seinsights.asia/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_D_sei.png"}))),_react2["default"].createElement("div",{className:"four wide column"},_react2["default"].createElement("a",{className:"ui centered image",href:"//buzzorange.com/author/wowafrica/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/cooperator_E_buzzorange.png"}))),_react2["default"].createElement("div",{className:"four wide column"})))};exports["default"]=_react2["default"].createClass({displayName:"AboutUsPage",componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0)},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(HeaderSection,null),_react2["default"].createElement(StorySection,null),_react2["default"].createElement(PartnerSection,null)),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 654 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_ActivitySection=__webpack_require__(627),_ActivitySection2=_interopRequireDefault(_ActivitySection);exports["default"]=_react2["default"].createClass({displayName:"ActivityListPage",componentDidMount:function(){window.scroll(0,0)},componentDidUpdate:function(){},componentWillUnmount:function(){},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(_ActivitySection2["default"],null)),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 655 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_index=__webpack_require__(445),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"ContactUsPage",componentDidMount:function(){$("#category-menu").hide()},render:function(){return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{style:{paddingTop:"180px"}},_react2["default"].createElement("div",{className:"ui two column stackable grid"},_react2["default"].createElement("div",{className:"seven wide column"},_react2["default"].createElement("div",{className:_index2["default"].contactUsBox},_react2["default"].createElement("div",{className:"ui two column grid"},_react2["default"].createElement("div",{className:"ten wide column"},_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxTitle},"聯絡我們")),_react2["default"].createElement("div",{className:"column"})),_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxInner},_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxContent},"如果想要可以即時和我們展開討論，請追蹤我們的粉絲團，掌握最新動態。"),_react2["default"].createElement("a",{href:"https://www.facebook.com/wowafrica.tw/",target:"_blank"},_react2["default"].createElement("img",{src:"/images/rb_facebook.png",style:{width:"50px",margin:"3px"}})),_react2["default"].createElement("div",{className:_index2["default"].contactUsBoxContent},"或者可以填寫聯絡表單，我們會以 Email 和您聯繫！")))),_react2["default"].createElement("div",{className:"column"},_react2["default"].createElement("div",{id:_index2["default"].contactForm,className:"ui large form"},_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"稱謂"),_react2["default"].createElement("input",{id:"nameInput",type:"text"})),_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"Email"),_react2["default"].createElement("input",{id:"emailInput",type:"text"})),_react2["default"].createElement("div",{className:"eleven wide field"},_react2["default"].createElement("label",null,"內容"),_react2["default"].createElement("textarea",{id:"contentInput"})),_react2["default"].createElement("div",{className:"ui error message"},"oops! 現在有些問題，請稍候再試"),_react2["default"].createElement("div",{className:"ui grid"},_react2["default"].createElement("div",{className:"nine wide column"}),_react2["default"].createElement("div",{className:"two wide column"},_react2["default"].createElement("div",{id:_index2["default"].submitBtn,onClick:this._onSubBtnClick,className:"ui submit button",style:{}},"發送"))))))))},_onSubBtnClick:function(e){$("#"+_index2["default"].contactForm).removeClass("error"),$("#"+_index2["default"].submitBtn).removeClass("button").addClass("loading button");$.ajax({url:"https://script.google.com/macros/s/AKfycbyYVbtEdw0FcLSUUJmADYqN9P523HcmQL1MjmnUqvCdruUNkwvs/exec",type:"post",data:{"稱謂":$("#nameInput")[0].value,Email:$("#emailInput")[0].value,"內容":$("#contentInput")[0].value}}).done(function(e){$("#"+_index2["default"].submitBtn).text("完成!")}).fail(function(e){$("#"+_index2["default"].contactForm).addClass("error")}).always(function(){$("#"+_index2["default"].submitBtn).removeClass("loading button").addClass("button")})}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 656 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_UgandaLetterConfig=__webpack_require__(650),_UgandaLetterConfig2=_interopRequireDefault(_UgandaLetterConfig),_index=__webpack_require__(447),_index2=_interopRequireDefault(_index);exports["default"]=_react2["default"].createClass({displayName:"UgandaLetter",getInitialState:function(){return _UgandaLetterConfig2["default"].origin},componentDidMount:function(){window.scroll(0,0),$("#category-menu").hide()},_onClick:function(e){e.preventDefault(),this.setState(_UgandaLetterConfig2["default"][e.target.id])},pictureDiv:function(e){var t="showroomAnima"+e.length;return e.map(function(e,a){return _react2["default"].createElement("div",{key:"pic"+a,className:(0,_classnames2["default"])(_index2["default"].showroomPosition,_index2["default"].showroomImg,_index2["default"][t]),style:{backgroundImage:"url(/images/uganda/"+e+")",animationDelay:3*a+"s"}},_react2["default"].createElement("span",null))})},render:function(){var e=this.state,t=e.title,a=e.picture,r=e.content;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content",style:{backgroundColor:"rgb(230,236,240)"}},_react2["default"].createElement("div",{className:"ui container"},_react2["default"].createElement("div",{className:"ui stackable grid",style:{width:"inherit",marginLeft:"0"}},_react2["default"].createElement("div",{className:_index2["default"].ugandaShowroom},this.pictureDiv(a)),_react2["default"].createElement("div",{className:"row"},_react2["default"].createElement("div",{className:"column"},_react2["default"].createElement("div",{className:"ui grid",style:{paddingTop:"10px"}},_react2["default"].createElement("div",{className:"one wide column",style:{height:0}}),_react2["default"].createElement("div",{className:"fifteen wide column",style:{textAlign:"left",textDecoration:"underline",fontSize:"1.6rem",paddingTop:"20px"}},_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(190,156,194)"}}," UGANDA PENPAL ")),_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(230,236,240)"}}," 烏干達筆友 ")),_react2["default"].createElement("div",{style:{height:"1.5em"}},_react2["default"].createElement("span",{style:{backgroundColor:"rgb(230,236,240)"}}," ",t," ")))))),_react2["default"].createElement("div",{className:"row",style:{height:"20em"}}),_react2["default"].createElement("div",{className:"row"},_react2["default"].createElement("div",{className:"five wide column",style:{textAlign:"left",textDecoration:"underline",fontSize:"1.6rem",paddingTop:"20px"}},_react2["default"].createElement("div",{className:"ui grid",style:{paddingTop:"3em",backgroundColor:"rgb(150,0,31)"}},_react2["default"].createElement("div",{className:"two wide column"}),_react2["default"].createElement("div",{className:"fourteen wide column"},_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"origin",style:{backgroundColor:"rgb(255,255,220)"}}," 活動源起 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"method",style:{backgroundColor:"rgb(255,255,220)"}}," 活動方式 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"introduction",style:{backgroundColor:"rgb(255,255,220)"}}," 烏干達小介紹 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"firstLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第一封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"secondLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第二封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle},_react2["default"].createElement("a",{href:"",onClick:this._onClick},_react2["default"].createElement("span",{id:"thirdLetter",style:{backgroundColor:"rgb(255,255,220)"}}," 第三封信 "))),_react2["default"].createElement("div",{className:_index2["default"].showrommTitle})))),_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"ten wide column",style:{paddingTop:"6em",textAlign:"left",fontSize:"1.5rem",lineHeight:"2em"}},_react2["default"].createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),_react2["default"].createElement("div",{style:{height:"100px"}})))),_react2["default"].createElement("div",{id:"footer-divider"}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 657 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_ShareButton=__webpack_require__(238),_ShareButton2=_interopRequireDefault(_ShareButton),_ActivityAction=__webpack_require__(113),_index=__webpack_require__(448),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36);exports["default"]=_react2["default"].createClass({displayName:"ViewActivityPage",contextTypes:{store:_react2["default"].PropTypes.object},componentDidMount:function(){var e=this;window.scroll(0,0);var t=this.context.store,a=this.props.pageUrl;this.unsubscribe=t.subscribe(function(){return e.forceUpdate()});var r=t.getState(),n=r.activities.activity.id,l=void 0===n?0:n;l!==parseInt(a.split("/")[2])&&t.dispatch((0,_ActivityAction.fetchActivities)()).then(function(){return t.dispatch((0,_ActivityAction.showActivity)(a.split("/")[2]))})},componentWillUnmount:function(){this.unsubscribe()},linkButton:function(e){var t=e.match(/z=(http[^\"\'\s\&]*)/i);return null!==t?_react2["default"].createElement("div",{className:_index2["default"].buy},_react2["default"].createElement(_reactSemantify.Button,{color:"blue",type:"link",href:decodeURIComponent(t[1]),target:"_blank"},"購買")):_react2["default"].createElement("div",null)},render:function(){var e=this.context.store,t=e.getState(),a=t.activities.activity,r=a.id,n=void 0===r?0:r,l=a.title,i=void 0===l?"":l,c=a.image,u=void 0===c?"":c,d=a.content,o=void 0===d?"":d,s=a.date,_=void 0===s?"":s,m=a.time,f=void 0===m?"":m,v=a.location,p=void 0===v?"":v,E=a.address,y=void 0===E?"":E,g=a.host,h=void 0===g?"wowAfrica阿非卡":g,x=a.ticketLink,b=void 0===x?"":x,q=0===n,N=this.props.pageUrl,w=u?u.replace(/_540.jpg/g,"_1280.jpg"):u;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:_index2["default"].postImage,style:{backgroundImage:"url("+w+")",backgroundPosition:"center"}},_react2["default"].createElement("div",{className:_index2["default"].inner},_react2["default"].createElement("div",{className:_index2["default"].innerTitle},i))),_react2["default"].createElement("div",{className:"ui stackable four column grid"},_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"ten wide column"},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("very padded basic",_index2["default"].containerPost,_index2["default"].antiVeryPadded)},_react2["default"].createElement("div",{className:(0,_classnames2["default"])("ui inverted dimmer",{active:q})},_react2["default"].createElement("div",{className:"ui text loader"},"Loading")),_react2["default"].createElement("br",null),_react2["default"].createElement("div",{dangerouslySetInnerHTML:{__html:o}}),_react2["default"].createElement("br",null),_react2["default"].createElement(_ShareButton2["default"],{pageUrl:N}),_react2["default"].createElement("div",{style:{height:"10px"}}))),_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:(0,_classnames2["default"])("four wide column",_index2["default"].sectionActivity),style:{backgroundColor:"#305775"}},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("basic",_index2["default"].containerActivity),style:{height:"100%",position:"absolute"}},_react2["default"].createElement("div",null,"日期："+_),_react2["default"].createElement("div",null,"時間："+f),_react2["default"].createElement("div",null,"地點："+p),_react2["default"].createElement("div",null,""+y),_react2["default"].createElement("a",{href:"http://www.google.com/maps/search/"+y,target:"_blank"},_react2["default"].createElement("div",null,"顯示地圖 ",_react2["default"].createElement("i",{className:"yellow map icon"}))),_react2["default"].createElement("div",null,"主辦單位："+h),this.linkButton(b)))),_react2["default"].createElement("div",{id:"footer-divider"}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_AuthorSection=__webpack_require__(628),_AuthorSection2=_interopRequireDefault(_AuthorSection),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListAuthorPage",componentDidMount:function(){window.scroll(0,0)},render:function(){var e=decodeURIComponent(_RouteStore2["default"].getCurrentRoute().params.author)||"賴奕諭";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(_AuthorSection2["default"],{author:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 659 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_CategorySection=__webpack_require__(633),_CategorySection2=_interopRequireDefault(_CategorySection),_NewSection=__webpack_require__(640),_NewSection2=_interopRequireDefault(_NewSection),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListPage",componentDidMount:function(){window.scroll(0,0)},componentDidUpdate:function(){window.scroll(0,0)},render:function(){var e=_RouteStore2["default"].getCurrentRoute().params.category||"news";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},"new"===e?_react2["default"].createElement(_NewSection2["default"],null):_react2["default"].createElement(_CategorySection2["default"],{category:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 660 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_TagSection=__webpack_require__(645),_TagSection2=_interopRequireDefault(_TagSection),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_RouteStore=__webpack_require__(89),_RouteStore2=_interopRequireDefault(_RouteStore);exports["default"]=_react2["default"].createClass({displayName:"ViewPostListTagPage",componentDidMount:function(){window.scroll(0,0)},render:function(){var e=decodeURIComponent(_RouteStore2["default"].getCurrentRoute().params.tag)||"非洲";return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:"container-content"},_react2["default"].createElement(_TagSection2["default"],{tag:e,title:e})),_react2["default"].createElement("div",{id:"footer-divider",style:{height:"50px"}}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))}});

/***/ },
/* 661 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=__webpack_require__(2),_react2=_interopRequireDefault(_react),_classnames=__webpack_require__(70),_classnames2=_interopRequireDefault(_classnames),_IndexMenu=__webpack_require__(32),_IndexMenu2=_interopRequireDefault(_IndexMenu),_CategoryMenu=__webpack_require__(31),_CategoryMenu2=_interopRequireDefault(_CategoryMenu),_Footer=__webpack_require__(39),_Footer2=_interopRequireDefault(_Footer),_ShareButton=__webpack_require__(238),_ShareButton2=_interopRequireDefault(_ShareButton),_ReadMoreBlock=__webpack_require__(642),_ReadMoreBlock2=_interopRequireDefault(_ReadMoreBlock),_PostStore=__webpack_require__(667),_PostStore2=_interopRequireDefault(_PostStore),_AuthorsStore=__webpack_require__(244),_AuthorsStore2=_interopRequireDefault(_AuthorsStore),_RouteAction=__webpack_require__(21),_RouteAction2=_interopRequireDefault(_RouteAction),_index=__webpack_require__(450),_index2=_interopRequireDefault(_index),_reactSemantify=__webpack_require__(36);exports["default"]=_react2["default"].createClass({displayName:"ViewPostPage",getInitialState:function(){return{authors:_AuthorsStore2["default"].getAll(),post:_PostStore2["default"].getPost(),loader:_PostStore2["default"].getLoader()}},componentDidMount:function(){$("#category-menu").hide(),window.scroll(0,0),_PostStore2["default"].addChangeListener(this._onChange),_AuthorsStore2["default"].addChangeListener(this._onAuthorChange)},componentWillUnmount:function(){_PostStore2["default"].removeChangeListener(this._onChange),_AuthorsStore2["default"].removeChangeListener(this._onAuthorChange)},componentDidUpdate:function(){window.scroll(0,0)},getAuthor:function(){var e=this.state,t=e.authors,a=e.post,r={name:"wowAfrica",description:"",photoUrl:""};if(t.length>0){var n=t.filter(function(e){return e.name===a.author});n.length>0&&(r=n[0])}return r},render:function(){var e=this,t=this.state,a=t.post,r=t.loader,n=a.body,l=a.title,o=a.image,u=a.tags,i=void 0===u?[]:u,c=a.date,s=void 0===c?"":c,d=this.getAuthor(),_=d.name,f=d.description,m=d.photoUrl,h=this.props.pageUrl,g=o?o.replace(/_540.jpg/g,"_1280.jpg"):o;return _react2["default"].createElement("div",null,_react2["default"].createElement("div",{className:"fixed-top-menu"},_react2["default"].createElement(_IndexMenu2["default"],null),_react2["default"].createElement(_CategoryMenu2["default"],null)),_react2["default"].createElement("div",{className:_index2["default"].postImage,style:{backgroundImage:"url("+g+")",backgroundPosition:"center"}},_react2["default"].createElement("div",{className:_index2["default"].inner},_react2["default"].createElement("div",{className:_index2["default"].innerTitle},l))),_react2["default"].createElement("div",{className:"ui stackable four column grid"},_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:"ten wide column"},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("very padded basic",_index2["default"].containerPost,_index2["default"].antiVeryPadded)},_react2["default"].createElement("div",{className:(0,_classnames2["default"])("ui inverted dimmer",{active:r})},_react2["default"].createElement("div",{className:"ui text loader"},"Loading")),_react2["default"].createElement("div",null,_react2["default"].createElement("em",{style:{color:"rgba(0, 0, 0, 0.3)"}},s.substring(0,10).replace(/-/g,"."))),_react2["default"].createElement("br",null),_react2["default"].createElement("div",{dangerouslySetInnerHTML:{__html:n}}),_react2["default"].createElement("br",null),_react2["default"].createElement("div",{className:"ui brown tag labels"},i.map(function(t){return _react2["default"].createElement("a",{className:"ui tag label",href:"/view_post_list/tag/"+t,onClick:e._onClick},t)})),_react2["default"].createElement("br",null),_react2["default"].createElement(_ShareButton2["default"],{pageUrl:h}),_react2["default"].createElement("div",{style:{height:"10px"}}),_react2["default"].createElement(_ReadMoreBlock2["default"],{postId:h.substr(h.lastIndexOf("/")+1)}))),_react2["default"].createElement("div",{className:"one wide column"}),_react2["default"].createElement("div",{className:(0,_classnames2["default"])("four wide column",_index2["default"].sectionPostAuthor),style:{backgroundColor:"#305775"}},_react2["default"].createElement(_reactSemantify.Segment,{className:(0,_classnames2["default"])("center aligned basic",_index2["default"].containerPostAuthor),style:{height:"100%",position:"absolute"}},_react2["default"].createElement("a",{href:"/view_post_list/author/"+_,onClick:this._onClick},_react2["default"].createElement(_reactSemantify.Image,{className:"small centered circular",src:m}),_react2["default"].createElement("div",null,_)),_react2["default"].createElement("div",{style:{padding:"0 1rem",textAlign:"left"}},f)))),_react2["default"].createElement("div",{id:"footer-divider"}),_react2["default"].createElement(_Footer2["default"],null),_react2["default"].createElement("div",{id:"page-bottom"}))},_onChange:function(){this.setState({post:_PostStore2["default"].getPost(),loader:!1})},_onAuthorChange:function(){this.setState({authors:_AuthorsStore2["default"].getAll()})},_onClick:function(e){var t=e.currentTarget,a=t.pathname,r=t.hash;history.pushState({pathname:a,hash:r},"",a),_RouteAction2["default"].updatePath(a,r),e.preventDefault()}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 662 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i["default"]=t,i}function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}function getActivity(t,i){var e=i.activity,r=[].concat(_toConsumableArray(t.items.filter(function(t){return t.id===parseInt(e)})),_toConsumableArray(t.oldItems.filter(function(t){return t.id===parseInt(e)})));return Object.assign({},t,{activity:r[0]})}Object.defineProperty(exports,"__esModule",{value:!0});var _tumblrActivity=__webpack_require__(670),_tumblrActivity2=_interopRequireDefault(_tumblrActivity),_ActivityAction=__webpack_require__(113),ActivityAction=_interopRequireWildcard(_ActivityAction);exports["default"]=function(){var t=arguments.length<=0||void 0===arguments[0]?{isFetching:!1,showOldItems:!1,showOtherHost:!1,items:[],oldItems:[],activity:{}}:arguments[0],i=arguments[1];switch(i.type){case ActivityAction.REQUEST_ACTIVITIES:return Object.assign({},t,{isFetching:!0});case ActivityAction.RECEIVE_ACTIVITIES:var e=(0,_tumblrActivity2["default"])(i.rawApi),r=e.activities,n=e.oldActivities;return Object.assign({},t,{isFetching:!1,items:r,oldItems:n});case ActivityAction.SHOW_OLD_ACTIVITIES:return Object.assign({},t,{showOldItems:!0});case ActivityAction.SHOW_NEW_ACTIVITIES:return Object.assign({},t,{showOldItems:!1});case ActivityAction.SHOW_OTHER_HOST:return Object.assign({},t,{showOtherHost:!0});case ActivityAction.SHOW_WA_HOST:return Object.assign({},t,{showOtherHost:!1});case ActivityAction.SHOW_ACTIVITY:return getActivity(t,i);default:return t}};

/***/ },
/* 663 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _redux=__webpack_require__(228),_activities=__webpack_require__(662),_activities2=_interopRequireDefault(_activities);exports["default"]=(0,_redux.combineReducers)({activities:_activities2["default"]});

/***/ },
/* 664 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(117),_tumblrPost2=_interopRequireDefault(_tumblrPost),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),PostListAuthorStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.postList={},t.postList["default"]={name:"default",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t}return _inherits(e,t),_createClass(e,[{key:"getListContainer",value:function(t){return"undefined"!=typeof this.postList[t]?this.postList[t]:this.postList["default"]}},{key:"getPostList",value:function(t){return"undefined"!=typeof this.postList[t]?this.postList[t].posts:this.postList["default"].posts}},{key:"onReceviceUpdatePostList",value:function(t,e){var s=this;_superagent2["default"].get(_PostListConstants2["default"].POST_LIST_AUTHOR_URL).end(function(e,o){e?console.log("Cannot get author json"):(s.postList[t]||(s.postList[t]={}),s.postList[t].posts=[],s.postList[t].totalPostNum=0,s.postList[t].parsedPostNum=0,o.body[t].forEach(function(t){s.client.posts(_TumblrConfig2["default"].blogName,{id:t},s.updateList.bind(s))}))})}},{key:"updateList",value:function(t,e){var s=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(e);o.length>0&&(o.forEach(function(t){s.postList[t.author].posts.push(t)}),this.postList[o[0].author].totalPostNum+=e.posts.length,this.postList[o[0].author].parsedPostNum+=e.posts.length,this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_AUTHOR_EVENT,t)}}]),e}(_events.EventEmitter),postListAuthorStore=new PostListAuthorStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_AUTHOR_UPDATE:break;case _RouteConstants2["default"].ROUTE_POST_LIST_AUTHOR_PAGE:postListAuthorStore.onReceviceUpdatePostList(t.author,_TumblrConfig2["default"].postList.loadAmount)}}),exports["default"]=postListAuthorStore;

/***/ },
/* 665 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var s=e[o];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,o,s){return o&&t(e.prototype,o),s&&t(e,s),e}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(117),_tumblrPost2=_interopRequireDefault(_tumblrPost),_superagent=__webpack_require__(88),_superagent2=_interopRequireDefault(_superagent),PostListReadMoreStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.allPostList=[],t.allPosts={},t.randomPosts=[],t}return _inherits(e,t),_createClass(e,[{key:"getRandomPosts",value:function(){return this.randomPosts}},{key:"onUpdateRandomPostList",value:function(t,e){var o=this;this.randomPosts=[],this.allPostList.length<=0?_superagent2["default"].get(_PostListConstants2["default"].POST_LIST_ALL_URL).end(function(s,n){s?console.log("Cannot get all post json"):(o.allPostList=n.body,o.chooseRandomPosts(t,e))}):this.chooseRandomPosts(t,e)}},{key:"chooseRandomPosts",value:function(t,e){var o=this;this.allPostList.length<t&&(t=this.allPostList.length);for(var s=[];s.length<t;){var n=Math.floor(Math.random()*this.allPostList.length+1);s.indexOf(n)==-1&&this.allPostList[n-1]!==e&&s.push(n)}s.forEach(function(t){var e=o.allPostList[t-1];"undefined"!=typeof o.allPosts[e]?o.updateRandomPost(e):o.updateRandomPostFromServer(e)})}},{key:"updateRandomPost",value:function(t){this.randomPosts.push(this.allPosts[t]),this.emitChange()}},{key:"updateRandomPostFromServer",value:function(t){this.client.posts(_TumblrConfig2["default"].blogName,{id:t},this.updateRandomPostFromTumblr.bind(this))}},{key:"updateRandomPostFromTumblr",value:function(t,e){var o=this;if(t)console.log(t.stack);else{var s=_tumblrPost2["default"].parsePosts(e);s.length>0&&(s.forEach(function(t){o.allPosts[t.id]=t,o.randomPosts.push(t)}),this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_READMORE_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_READMORE_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_READMORE_EVENT,t)}}]),e}(_events.EventEmitter),postListReadMoreStore=new PostListReadMoreStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_READMORE_UPDATE:postListReadMoreStore.onUpdateRandomPostList(t.amount,t.postId)}}),exports["default"]=postListReadMoreStore;

/***/ },
/* 666 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,s,o){return s&&t(e.prototype,s),o&&t(e,o),e}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostListConstants=__webpack_require__(81),_PostListConstants2=_interopRequireDefault(_PostListConstants),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),_tumblrPost=__webpack_require__(117),_tumblrPost2=_interopRequireDefault(_tumblrPost),PostListTagStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.postList={name:"",posts:[_PostListConfig2["default"].postContainer],parsedPostNum:0,totalPostNum:0},t}return _inherits(e,t),_createClass(e,[{key:"getListContainer",value:function(){return this.postList}},{key:"getPostList",value:function(){return this.postList.posts}},{key:"loadMorePosts",value:function(t,e){this.postList.parsedPostNum<this.postList.totalPostNum&&this.client.posts(_TumblrConfig2["default"].blogName,{offset:this.postList.parsedPostNum,tag:t,limit:e},this.loadMorePostsTag.bind(this))}},{key:"loadMorePostsTag",value:function(t,e){var s=this;if(t)console.log(t.stack);else{var o=_tumblrPost2["default"].parsePosts(e);o.length>0&&(this.postList.parsedPostNum+=e.posts.length,this.postList.totalPostNum=e.total_posts,o.forEach(function(t){s.postList.posts.push(t)}),this.emitChange())}}},{key:"onReceviceUpdatePostList",value:function(t,e){this.postList.totalPostNum=0,this.client.posts(_TumblrConfig2["default"].blogName,{limit:e,tag:t},this.updateList.bind(this))}},{key:"updateList",value:function(t,e){if(t)console.log(t.stack);else{var s=_tumblrPost2["default"].parsePosts(e);s.length>0&&(this.postList.parsedPostNum=e.posts.length,this.postList.totalPostNum=e.total_posts,this.postList.posts=s,this.emitChange())}}},{key:"emitChange",value:function(){this.emit(_PostListConstants2["default"].POST_LIST_TAG_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostListConstants2["default"].POST_LIST_TAG_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostListConstants2["default"].POST_LIST_TAG_EVENT,t)}}]),e}(_events.EventEmitter),postListTagStore=new PostListTagStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _PostListConstants2["default"].POST_LIST_TAG_UPDATE:break;case _RouteConstants2["default"].ROUTE_POST_LIST_TAG_PAGE:postListTagStore.onReceviceUpdatePostList(t.tag,_TumblrConfig2["default"].postList.loadAmount)}}),exports["default"]=postListTagStore;

/***/ },
/* 667 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toArray(t){return Array.isArray(t)?t:Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},_createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),_events=__webpack_require__(52),_tumblr=__webpack_require__(72),_tumblr2=_interopRequireDefault(_tumblr),_TumblrConfig=__webpack_require__(41),_TumblrConfig2=_interopRequireDefault(_TumblrConfig),_PostConfig=__webpack_require__(80),_PostConfig2=_interopRequireDefault(_PostConfig),_PostListConfig=__webpack_require__(40),_PostListConfig2=_interopRequireDefault(_PostListConfig),_PostConstants=__webpack_require__(241),_PostConstants2=_interopRequireDefault(_PostConstants),_RouteConstants=__webpack_require__(53),_RouteConstants2=_interopRequireDefault(_RouteConstants),_AppDispatcher=__webpack_require__(23),_AppDispatcher2=_interopRequireDefault(_AppDispatcher),PostStore=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,Object.getPrototypeOf(e).call(this));return t.post={},t.client=_tumblr2["default"].createClient({consumer_key:_TumblrConfig2["default"].consumerKey}),t.loader=!0,t}return _inherits(e,t),_createClass(e,[{key:"getPost",value:function(){return this.post}},{key:"getLoader",value:function(){return this.loader}},{key:"setLoader",value:function(t){this.loader=t}},{key:"onReceviceUpdatePosts",value:function(t){this.client.posts(_TumblrConfig2["default"].blogName,{id:t},this.parsePostData.bind(this))}},{key:"parsePostData",value:function(t,e){if(t)console.log(t.stack);else{var o=this.parsePostImage(e.posts[0].body),n=this.parsePostSetting(e.posts[0].body),s=n.settingResult,r=n.body;this.removeTopTag(e.posts[0].tags),this.post=_extends({},e.posts[0],{body:r,image:o},s),this.emitChange()}}},{key:"removeTopTag",value:function(t){var e=t.indexOf(_PostListConfig2["default"].tagMap.top);e!=-1&&t.splice(e,1)}},{key:"parsePostSetting",value:function(t){var e=t.split("<hr>"),o=_toArray(e),n=o[0],s=o.slice(1),r=_PostConfig2["default"].settingContainer;return s.length>0&&(t=s.join("<hr>"),n.match(/[^>]*[：:][^<]*/g).forEach(function(t){var e=t.split(/[：:]/),o=_toArray(e),n=o[0],s=o.slice(1);n in _PostConfig2["default"].settingAlias&&(r[_PostConfig2["default"].settingAlias[n]]=s.join("：").trim())})),{settingResult:r,body:t}}},{key:"parsePostImage",value:function(t){var e=t.match(/<img [^>]*\/>/g);if(e){var o=e[0].match(/http[^\"\'\s]*/);e=o?o[0]:"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg"}else e="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpa1/t31.0-8/11154796_779010435550566_7018350735656129504_o.jpg";return e}},{key:"emitChange",value:function(){this.emit(_PostConstants2["default"].POST_EVENT)}},{key:"addChangeListener",value:function(t){this.on(_PostConstants2["default"].POST_EVENT,t)}},{key:"removeChangeListener",value:function(t){this.removeListener(_PostConstants2["default"].POST_EVENT,t)}}]),e}(_events.EventEmitter),postStore=new PostStore;_AppDispatcher2["default"].register(function(t){switch(t.actionType){case _RouteConstants2["default"].ROUTE_POST_PAGE:postStore.onReceviceUpdatePosts(t.postID)}}),exports["default"]=postStore;

/***/ },
/* 668 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function configureStore(e){return(0,_redux.createStore)(_reducers2["default"],e,(0,_redux.applyMiddleware)(_reduxThunk2["default"]))}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=configureStore;var _redux=__webpack_require__(228),_reduxThunk=__webpack_require__(590),_reduxThunk2=_interopRequireDefault(_reduxThunk),_reducers=__webpack_require__(663),_reducers2=_interopRequireDefault(_reducers);

/***/ },
/* 669 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__(2),_react2=_interopRequireDefault(_react),Provider=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"getChildContext",value:function(){return{store:this.props.store}}},{key:"render",value:function(){return this.props.children}}]),t}(_react.Component);Provider.childContextTypes={store:_react2["default"].PropTypes.object},exports["default"]=Provider;

/***/ },
/* 670 */
/***/ function(module, exports) {

	"use strict";function _toArray(t){return Array.isArray(t)?t:Array.from(t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},settingAlias={"日期":"date","時間":"time","區域":"area","地點":"location","地址":"address","主辦單位":"host","簡介":"brief","購票連結":"ticketLink"},defaultSetting={date:"",time:"",area:"",location:"",address:"",host:"wowAfrica阿非卡",brief:"",ticketLink:""},adjustTicketLink=function(t){var e=t.match(/http[^\"\'\s]*/),i=e?e[0]:t;return i},combineSysTime=function(t,e){var i=new Date("2016-07-24T18:00"),r=t.match(/[0-9.]*/),a=e.match(/[0-9:：]*/);return r&&a&&(r=r[0].replace(/\./g,"-"),i=new Date(r+"T"+a)),i},parseSetting=function(t){var e=defaultSetting;return t.match(/[^>]*[:：][^<]*/g).forEach(function(t){var i=t.split(/[:：]/),r=_toArray(i),a=r[0],n=r.slice(1);a in settingAlias&&(e[settingAlias[a]]=n.join(":").trim())}),e.ticketLink=adjustTicketLink(e.ticketLink),e.sysTime=combineSysTime(e.date,e.time),e},parseImage=function(t){var e="https://scontent-tpe1-1.xx.fbcdn.net/t31.0-8/12901553_969366159848325_1083225975357603228_o.jpg",i=t.match(/<img [^>]*\/>/g);if(i){var r=i[0].match(/http[^\"\'\s]*/);r&&(e=r[0])}return e},parseActivity=function(t){var e=t.id,i=t.title,r=t.body.split("<hr>"),a=_toArray(r),n=a[0],s=a.slice(1),c=s.join("<hr>"),o=parseSetting(n),u=parseImage(t.body);return _extends({id:e,title:i,image:u},o,{content:c})},parseActivities=function(t){var e=[],i=[],r=new Date;return t.posts.forEach(function(t){var a=parseActivity(t);a.sysTime.getTime()>=r.getTime()?e.push(a):i.push(a)}),{activities:e,oldActivities:i}};exports["default"]=parseActivities;

/***/ }
]);
//# sourceMappingURL=bundle.js.map