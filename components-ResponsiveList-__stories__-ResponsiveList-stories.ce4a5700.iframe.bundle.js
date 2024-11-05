"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[4249],{"./src/components/ResponsiveList/__stories__/ResponsiveList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ResponsiveList_stories_ResponsiveList_stories});__webpack_require__("../../node_modules/react/index.js");var react_resizable=__webpack_require__("../../node_modules/react-resizable/index.js"),Open=__webpack_require__("./src/components/Icon/Icons/components/Open.tsx"),Alert=__webpack_require__("./src/components/Icon/Icons/components/Alert.tsx"),Activity=__webpack_require__("./src/components/Icon/Icons/components/Activity.tsx"),Broom=__webpack_require__("./src/components/Icon/Icons/components/Broom.tsx"),Group=__webpack_require__("./src/components/Icon/Icons/components/Group.tsx"),Moon=__webpack_require__("./src/components/Icon/Icons/components/Moon.tsx"),API=__webpack_require__("./src/components/Icon/Icons/components/API.tsx"),Sun=__webpack_require__("./src/components/Icon/Icons/components/Sun.tsx"),Bolt=__webpack_require__("./src/components/Icon/Icons/components/Bolt.tsx"),ResponsiveList=__webpack_require__("./src/components/ResponsiveList/ResponsiveList.tsx"),Menu=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),SplitButton=__webpack_require__("./src/components/SplitButton/SplitButton.tsx"),Search=__webpack_require__("./src/components/Search/Search.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ResponsiveList_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ResponsiveList_stories.A,options);ResponsiveList_stories.A&&ResponsiveList_stories.A.locals&&ResponsiveList_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ResponsiveList_stories_ResponsiveList_stories={parameters:{storySource:{source:'import React from "react";\nimport { ResizableBox } from "react-resizable";\nimport { Activity, Alert, API, Bolt, Broom, Group, Moon, Sun, Open } from "../../Icon/Icons";\nimport ResponsiveList from "../ResponsiveList";\nimport Menu from "../../Menu/Menu/Menu";\nimport MenuItem from "../../Menu/MenuItem/MenuItem";\nimport SplitButton from "../../SplitButton/SplitButton";\nimport Search from "../../Search/Search";\nimport Button from "../../Button/Button";\nimport Icon from "../../Icon/Icon";\nimport "./ResponsiveList.stories.scss";\n\nexport default {\n  title: "Layout/ResponsiveList",\n  component: ResponsiveList\n};\n\nconst ContainerForDemonstration = ({ children }) => {\n  return (\n    <div style={{ width: "100%" }}>\n      <div style={{ width: "80%" }}>\n        <ResizableBox\n          height={48}\n          width={700}\n          handle={\n            <span className="custom-handle custom-handle-se">\n              <Icon icon={Open} iconSize={20} clickable={false} className="icon-resizer" />\n            </span>\n          }\n          handleSize={[12, 12]}\n          className="resizable-container"\n          minConstraints={[200, 48]}\n          maxConstraints={[850, 48]}\n        >\n          {children}\n        </ResizableBox>\n      </div>\n    </div>\n  );\n};\n\nconst componentTemplate = responseListProps => {\n  const secondaryContent = (\n    <Menu>\n      <MenuItem icon={Alert} title="Watch out" />\n      <MenuItem icon={Activity} title="History" />\n    </Menu>\n  );\n  return (\n    <ContainerForDemonstration>\n      <ResponsiveList id="Knobs" className="responsive-story" menuButtonSize="40" {...responseListProps}>\n        <SplitButton size={SplitButton.sizes.MAIN} marginRight secondaryDialogContent={secondaryContent}>\n          Add Item\n        </SplitButton>\n        <div\n          className="responsive-lst-search"\n          \n          responsiveListPlaceholder={<Search id="search-icon-inside" size="medium" placeholder="search for content" />}\n        >\n          <Search size="medium" placeholder="search for content" />\n        </div>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={Broom} ignoreFocusStyle className="responsive-icon-margin" />\n          Clean\n        </Button>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={Group} ignoreFocusStyle />\n        </Button>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={Moon} ignoreFocusStyle />\n        </Button>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={API} ignoreFocusStyle />\n        </Button>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={Sun} ignoreFocusStyle />\n        </Button>\n        <Button kind={Button.kinds.TERTIARY} marginLeft>\n          <Icon icon={Bolt} ignoreFocusStyle />\n        </Button>\n      </ResponsiveList>\n    </ContainerForDemonstration>\n  );\n};\n\nexport const Overview = {\n  render: componentTemplate.bind({}),\n  name: "Overview",\n  args: {}\n};\n',locationsMap:{overview:{startLoc:{col:24,line:86},endLoc:{col:1,line:90},startBody:{col:24,line:86},endBody:{col:1,line:90}}}}},title:"Layout/ResponsiveList",component:ResponsiveList.A};var ContainerForDemonstration=function ContainerForDemonstration(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsx)("div",{style:{width:"80%"},children:(0,jsx_runtime.jsx)(react_resizable.ResizableBox,{height:48,width:700,handle:(0,jsx_runtime.jsx)("span",{className:"custom-handle custom-handle-se",children:(0,jsx_runtime.jsx)(Icon.A,{icon:Open.A,iconSize:20,clickable:!1,className:"icon-resizer"})}),handleSize:[12,12],className:"resizable-container",minConstraints:[200,48],maxConstraints:[850,48],children})})})};ContainerForDemonstration.displayName="ContainerForDemonstration";var componentTemplate=function componentTemplate(responseListProps){var secondaryContent=(0,jsx_runtime.jsxs)(Menu.A,{children:[(0,jsx_runtime.jsx)(MenuItem.A,{icon:Alert.A,title:"Watch out"}),(0,jsx_runtime.jsx)(MenuItem.A,{icon:Activity.A,title:"History"})]});return(0,jsx_runtime.jsx)(ContainerForDemonstration,{children:(0,jsx_runtime.jsxs)(ResponsiveList.A,_objectSpread(_objectSpread({id:"Knobs",className:"responsive-story",menuButtonSize:"40"},responseListProps),{},{children:[(0,jsx_runtime.jsx)(SplitButton.A,{size:SplitButton.A.sizes.MAIN,marginRight:!0,secondaryDialogContent:secondaryContent,children:"Add Item"}),(0,jsx_runtime.jsx)("div",{className:"responsive-lst-search",responsiveListPlaceholder:(0,jsx_runtime.jsx)(Search.A,{id:"search-icon-inside",size:"medium",placeholder:"search for content"}),children:(0,jsx_runtime.jsx)(Search.A,{size:"medium",placeholder:"search for content"})}),(0,jsx_runtime.jsxs)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:[(0,jsx_runtime.jsx)(Icon.A,{icon:Broom.A,ignoreFocusStyle:!0,className:"responsive-icon-margin"}),"Clean"]}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Group.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Moon.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:API.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Sun.A,ignoreFocusStyle:!0})}),(0,jsx_runtime.jsx)(Button.A,{kind:Button.A.kinds.TERTIARY,marginLeft:!0,children:(0,jsx_runtime.jsx)(Icon.A,{icon:Bolt.A,ignoreFocusStyle:!0})})]}))})};componentTemplate.displayName="componentTemplate";var Overview={render:componentTemplate.bind({}),name:"Overview",args:{}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: componentTemplate.bind({}),\n  name: "Overview",\n  args: {}\n}',...Overview.parameters?.docs?.source}}};const __namedExportsOrder=["Overview"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".custom-handle{position:absolute;width:20px;height:20px;display:flex;justify-content:center;align-items:center;color:var(--sb-primary-color);border-radius:var(--sb-border-radius-small);padding:2px}.custom-handle:hover{background:var(--sb-primary-background-hover-color)}.custom-handle .icon-resizer{transform:rotate(45deg)}.custom-handle-se{bottom:0;right:-8px;cursor:ew-resize}.resizable-container{position:relative}.responsive-story{display:flex;align-items:center}.responsive-story .responsive-icon-margin{margin-right:8px}.responsive-story .responsive-lst-search{width:250px}","",{version:3,sources:["webpack://./src/components/ResponsiveList/__stories__/ResponsiveList.stories.scss"],names:[],mappings:"AAAA,eACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,6BAAA,CACA,2CAAA,CACA,WAAA,CACA,qBACE,mDAAA,CAEF,6BACE,uBAAA,CAKJ,kBACE,QAAA,CACA,UAAA,CACA,gBAAA,CAGF,qBACE,iBAAA,CAGF,kBACE,YAAA,CACA,kBAAA,CACA,0CACE,gBAAA,CAGF,yCACE,WAAA",sourcesContent:[".custom-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--sb-primary-color);\n  border-radius: var(--sb-border-radius-small);\n  padding: 2px;\n  &:hover {\n    background: var(--sb-primary-background-hover-color);\n  }\n  .icon-resizer {\n    transform: rotate(45deg);\n\n  }\n\n}\n.custom-handle-se {\n  bottom: 0;\n  right: -8px;\n  cursor: ew-resize;\n}\n\n.resizable-container {\n  position: relative;\n}\n\n.responsive-story {\n  display: flex;\n  align-items: center;\n  .responsive-icon-margin {\n    margin-right: 8px;\n  }\n\n  .responsive-lst-search {\n    width: 250px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);