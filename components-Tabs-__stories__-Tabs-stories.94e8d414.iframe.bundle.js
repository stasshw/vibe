"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3233],{"./src/components/Tabs/__stories__/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdminSectionTabs:()=>AdminSectionTabs,BoardViewsTabs:()=>BoardViewsTabs,Default:()=>Default,Motion:()=>Motion,Overview:()=>Overview,Stretched:()=>Stretched,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories_Tabs_stories});__webpack_require__("../../node_modules/react/index.js");var Tab=__webpack_require__("./src/components/Tabs/Tab/Tab.tsx"),TabList=__webpack_require__("./src/components/Tabs/TabList/TabList.tsx"),TabPanel=__webpack_require__("./src/components/Tabs/TabPanel/TabPanel.tsx"),TabPanels=__webpack_require__("./src/components/Tabs/TabPanels/TabPanels.tsx"),TabsContext=__webpack_require__("./src/components/Tabs/TabsContext/TabsContext.tsx"),Table=__webpack_require__("./src/components/Icon/Icons/components/Table.tsx"),Chart=__webpack_require__("./src/components/Icon/Icons/components/Chart.tsx"),Calendar=__webpack_require__("./src/components/Icon/Icons/components/Calendar.tsx"),TextField=__webpack_require__("./src/components/TextField/TextField.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tabs_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Tabs/__stories__/Tabs.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tabs_stories.A,options);Tabs_stories.A&&Tabs_stories.A.locals&&Tabs_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["tabPanelClassName"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const Tabs_stories_Tabs_stories={parameters:{storySource:{source:'import React from "react";\nimport Tab from "../Tab/Tab";\nimport TabList from "../TabList/TabList";\nimport TabPanel from "../TabPanel/TabPanel";\nimport TabPanels from "../TabPanels/TabPanels";\nimport TabsContext from "../TabsContext/TabsContext";\nimport { Calendar, Chart, Table } from "../../Icon/Icons";\nimport TextField from "../../TextField/TextField";\nimport "./Tabs.stories.scss";\n\nexport default {\n  title: "Navigation/Tabs/Tabs",\n  component: Tab,\n  subcomponents: {\n    TabPanel,\n    TabPanels,\n    TabList,\n    TabsContext\n  }\n};\n\nconst tabsTemplate = ({ tabPanelClassName, ...otherArgs }: { tabPanelClassName: string }) => {\n  return (\n    <TabsContext {...otherArgs}>\n      <TabList>\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel className={tabPanelClassName}>First slide</TabPanel>\n        <TabPanel className={tabPanelClassName}>Second slide</TabPanel>\n        <TabPanel className={tabPanelClassName}>Third slide</TabPanel>\n      </TabPanels>\n    </TabsContext>\n  );\n};\n\nexport const Overview = {\n  render: tabsTemplate.bind({}),\n  name: "Overview",\n\n  args: {\n    tabPanelClassName: "monday-storybook-tabs_bg-color"\n  }\n};\n\nexport const Default = {\n  render: () => (\n    <TabsContext>\n      <TabList>\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n        <Tab disabled>Disabled</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n      </TabPanels>\n    </TabsContext>\n  ),\n\n  name: "Default"\n};\n\nexport const Stretched = {\n  render: () => (\n    <div\n      style={{\n        width: "100%"\n      }}\n    >\n      <TabList tabType="stretched">\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n        <Tab disabled>Disabled</Tab>\n      </TabList>\n    </div>\n  ),\n\n  name: "Stretched"\n};\n\nexport const Motion = {\n  render: () => (\n    <div className="monday-storybook-tabs_column-wrapper">\n      <TabsContext>\n        <TabList>\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n        <TabPanels animationDirection={TabPanels.animationDirections.LTR}>\n          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n        </TabPanels>\n      </TabsContext>\n      <TabsContext>\n        <TabList>\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n        <TabPanels animationDirection={TabPanels.animationDirections.RTL}>\n          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n        </TabPanels>\n      </TabsContext>\n    </div>\n  ),\n\n  name: "Motion"\n};\n\nexport const BoardViewsTabs = {\n  render: () => (\n    <TabList>\n      <Tab icon={Table}>Main Table</Tab>\n      <Tab icon={Chart}>Chart</Tab>\n      <Tab icon={Calendar}>Calendar</Tab>\n    </TabList>\n  ),\n\n  name: "Board views tabs"\n};\n\nexport const AdminSectionTabs = {\n  render: () => (\n    <TabsContext>\n      <TabList>\n        <Tab>Profile</Tab>\n        <Tab>Account</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel className="monday-storybook-tabs_wrapper">\n          <h2>Login Details</h2>\n          <TextField title="Profile Name" size={TextField.sizes.MEDIUM} placeholder="Profile Name" />\n        </TabPanel>\n        <TabPanel className="monday-storybook-tabs_wrapper">\n          <h2>Account Details</h2>\n          <TextField title="Account Name" size={TextField.sizes.MEDIUM} placeholder="Account Name" />\n        </TabPanel>\n      </TabPanels>\n    </TabsContext>\n  ),\n\n  name: "Admin section tabs"\n};\n',locationsMap:{overview:{startLoc:{col:24,line:39},endLoc:{col:1,line:46},startBody:{col:24,line:39},endBody:{col:1,line:46}},default:{startLoc:{col:23,line:48},endLoc:{col:1,line:67},startBody:{col:23,line:48},endBody:{col:1,line:67}},stretched:{startLoc:{col:25,line:69},endLoc:{col:1,line:86},startBody:{col:25,line:69},endBody:{col:1,line:86}},motion:{startLoc:{col:22,line:88},endLoc:{col:1,line:123},startBody:{col:22,line:88},endBody:{col:1,line:123}},"board-views-tabs":{startLoc:{col:30,line:125},endLoc:{col:1,line:135},startBody:{col:30,line:125},endBody:{col:1,line:135}},"admin-section-tabs":{startLoc:{col:32,line:137},endLoc:{col:1,line:158},startBody:{col:32,line:137},endBody:{col:1,line:158}}}}},title:"Navigation/Tabs/Tabs",component:Tab.A,subcomponents:{TabPanel:TabPanel.A,TabPanels:TabPanels.A,TabList:TabList.A,TabsContext:TabsContext.A}};var tabsTemplate=function tabsTemplate(_ref){var tabPanelClassName=_ref.tabPanelClassName,otherArgs=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)(TabsContext.A,_objectSpread(_objectSpread({},otherArgs),{},{children:[(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"})]}),(0,jsx_runtime.jsxs)(TabPanels.A,{children:[(0,jsx_runtime.jsx)(TabPanel.A,{className:tabPanelClassName,children:"First slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:tabPanelClassName,children:"Second slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:tabPanelClassName,children:"Third slide"})]})]}))};tabsTemplate.displayName="tabsTemplate";var Overview={render:tabsTemplate.bind({}),name:"Overview",args:{tabPanelClassName:"monday-storybook-tabs_bg-color"}},Default={render:function render(){return(0,jsx_runtime.jsxs)(TabsContext.A,{children:[(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]}),(0,jsx_runtime.jsxs)(TabPanels.A,{children:[(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"First slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Second slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Third slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Fourth slide"})]})]})},name:"Default"},Stretched={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{width:"100%"},children:(0,jsx_runtime.jsxs)(TabList.A,{tabType:"stretched",children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]})})},name:"Stretched"},Motion={render:function render(){return(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-tabs_column-wrapper",children:[(0,jsx_runtime.jsxs)(TabsContext.A,{children:[(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]}),(0,jsx_runtime.jsxs)(TabPanels.A,{animationDirection:TabPanels.A.animationDirections.LTR,children:[(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"First slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Second slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Third slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Fourth slide"})]})]}),(0,jsx_runtime.jsxs)(TabsContext.A,{children:[(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"First"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Second"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Third"}),(0,jsx_runtime.jsx)(Tab.A,{disabled:!0,children:"Disabled"})]}),(0,jsx_runtime.jsxs)(TabPanels.A,{animationDirection:TabPanels.A.animationDirections.RTL,children:[(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"First slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Second slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Third slide"}),(0,jsx_runtime.jsx)(TabPanel.A,{className:"monday-storybook-tabs_bg-color",children:"Fourth slide"})]})]})]})},name:"Motion"},BoardViewsTabs={render:function render(){return(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{icon:Table.A,children:"Main Table"}),(0,jsx_runtime.jsx)(Tab.A,{icon:Chart.A,children:"Chart"}),(0,jsx_runtime.jsx)(Tab.A,{icon:Calendar.A,children:"Calendar"})]})},name:"Board views tabs"},AdminSectionTabs={render:function render(){return(0,jsx_runtime.jsxs)(TabsContext.A,{children:[(0,jsx_runtime.jsxs)(TabList.A,{children:[(0,jsx_runtime.jsx)(Tab.A,{children:"Profile"}),(0,jsx_runtime.jsx)(Tab.A,{children:"Account"})]}),(0,jsx_runtime.jsxs)(TabPanels.A,{children:[(0,jsx_runtime.jsxs)(TabPanel.A,{className:"monday-storybook-tabs_wrapper",children:[(0,jsx_runtime.jsx)("h2",{children:"Login Details"}),(0,jsx_runtime.jsx)(TextField.A,{title:"Profile Name",size:TextField.A.sizes.MEDIUM,placeholder:"Profile Name"})]}),(0,jsx_runtime.jsxs)(TabPanel.A,{className:"monday-storybook-tabs_wrapper",children:[(0,jsx_runtime.jsx)("h2",{children:"Account Details"}),(0,jsx_runtime.jsx)(TextField.A,{title:"Account Name",size:TextField.A.sizes.MEDIUM,placeholder:"Account Name"})]})]})]})},name:"Admin section tabs"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: tabsTemplate.bind({}),\n  name: "Overview",\n  args: {\n    tabPanelClassName: "monday-storybook-tabs_bg-color"\n  }\n}',...Overview.parameters?.docs?.source}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <TabsContext>\n      <TabList>\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n        <Tab disabled>Disabled</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n        <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n      </TabPanels>\n    </TabsContext>,\n  name: "Default"\n}',...Default.parameters?.docs?.source}}},Stretched.parameters={...Stretched.parameters,docs:{...Stretched.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: "100%"\n  }}>\n      <TabList tabType="stretched">\n        <Tab>First</Tab>\n        <Tab>Second</Tab>\n        <Tab>Third</Tab>\n        <Tab disabled>Disabled</Tab>\n      </TabList>\n    </div>,\n  name: "Stretched"\n}',...Stretched.parameters?.docs?.source}}},Motion.parameters={...Motion.parameters,docs:{...Motion.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="monday-storybook-tabs_column-wrapper">\n      <TabsContext>\n        <TabList>\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n        <TabPanels animationDirection={TabPanels.animationDirections.LTR}>\n          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n        </TabPanels>\n      </TabsContext>\n      <TabsContext>\n        <TabList>\n          <Tab>First</Tab>\n          <Tab>Second</Tab>\n          <Tab>Third</Tab>\n          <Tab disabled>Disabled</Tab>\n        </TabList>\n        <TabPanels animationDirection={TabPanels.animationDirections.RTL}>\n          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>\n          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>\n        </TabPanels>\n      </TabsContext>\n    </div>,\n  name: "Motion"\n}',...Motion.parameters?.docs?.source}}},BoardViewsTabs.parameters={...BoardViewsTabs.parameters,docs:{...BoardViewsTabs.parameters?.docs,source:{originalSource:'{\n  render: () => <TabList>\n      <Tab icon={Table}>Main Table</Tab>\n      <Tab icon={Chart}>Chart</Tab>\n      <Tab icon={Calendar}>Calendar</Tab>\n    </TabList>,\n  name: "Board views tabs"\n}',...BoardViewsTabs.parameters?.docs?.source}}},AdminSectionTabs.parameters={...AdminSectionTabs.parameters,docs:{...AdminSectionTabs.parameters?.docs,source:{originalSource:'{\n  render: () => <TabsContext>\n      <TabList>\n        <Tab>Profile</Tab>\n        <Tab>Account</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel className="monday-storybook-tabs_wrapper">\n          <h2>Login Details</h2>\n          <TextField title="Profile Name" size={TextField.sizes.MEDIUM} placeholder="Profile Name" />\n        </TabPanel>\n        <TabPanel className="monday-storybook-tabs_wrapper">\n          <h2>Account Details</h2>\n          <TextField title="Account Name" size={TextField.sizes.MEDIUM} placeholder="Account Name" />\n        </TabPanel>\n      </TabPanels>\n    </TabsContext>,\n  name: "Admin section tabs"\n}',...AdminSectionTabs.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Default","Stretched","Motion","BoardViewsTabs","AdminSectionTabs"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Tabs/__stories__/Tabs.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-tabs_spacing{padding-right:30px;padding-top:20px}.monday-storybook-tabs_bg-color{width:480px;height:111px;margin-left:40px;background-color:var(--sb-disabled-background-color);padding:16px}.monday-storybook-tabs_wrapper{margin-left:40px}.monday-storybook-tabs_column-wrapper{display:flex;flex-direction:column;gap:60px}","",{version:3,sources:["webpack://./src/components/Tabs/__stories__/Tabs.stories.scss"],names:[],mappings:"AAGE,+BACE,kBAAA,CACA,gBAAA,CAGF,gCACE,WAAA,CACA,YAAA,CACA,gBAAA,CACA,oDAAA,CACA,YAAA,CAGF,+BACE,gBAAA,CAGF,sCACE,YAAA,CACA,qBAAA,CACA,QAAA",sourcesContent:['@import "../../../styles/typography";\n\n.monday-storybook-tabs {\n  &_spacing {\n    padding-right: 30px;\n    padding-top: 20px;\n  }\n\n  &_bg-color {\n    width: 480px;\n    height: 111px;\n    margin-left: 40px;\n    background-color: var(--sb-disabled-background-color);\n    padding: 16px;\n  }\n\n  &_wrapper {\n    margin-left: 40px;\n  }\n\n  &_column-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);