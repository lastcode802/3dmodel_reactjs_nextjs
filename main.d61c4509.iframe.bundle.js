(self.webpackChunk_lastcode_3dmodel_reactjs_nextjs=self.webpackChunk_lastcode_3dmodel_reactjs_nextjs||[]).push([[179],{"./src/stories/ThreedView/ThreedView.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CanvasColorExample:function(){return CanvasColorExample},Default:function(){return Default},DirectionLightColorExample:function(){return DirectionLightColorExample},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ThreedView_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),react=__webpack_require__("./node_modules/react/index.js"),three_module=__webpack_require__("./node_modules/three/build/three.module.js"),three_obj_mtl_loader=__webpack_require__("./node_modules/three-obj-mtl-loader/index.js"),OrbitControls=__webpack_require__("./node_modules/three-orbitcontrols/OrbitControls.js"),OrbitControls_default=__webpack_require__.n(OrbitControls),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThreedView=function(_React$Component){(0,inherits.Z)(ThreedView,_React$Component);var _super=(0,createSuper.Z)(ThreedView);function ThreedView(props){var _this;(0,classCallCheck.Z)(this,ThreedView),(_this=_super.call(this,props)).mount=void 0,_this.scene=void 0,_this.renderer=void 0,_this.camera=void 0,_this.freedomMesh=void 0,_this.frameId=void 0,_this.start=function(){_this.frameId||(_this.frameId=requestAnimationFrame(_this.animate))},_this.stop=function(){cancelAnimationFrame(_this.frameId)},_this.animate=function(){var _this$props=_this.props,rotationx=_this$props.rotationx,rotationy=_this$props.rotationy,rotationz=_this$props.rotationz;_this.freedomMesh&&(_this.freedomMesh.rotation.x+=rotationx,_this.freedomMesh.rotation.y+=rotationy,_this.freedomMesh.rotation.z+=rotationz),_this.renderScene(),_this.frameId=window.requestAnimationFrame(_this.animate)},_this.renderScene=function(){_this.renderer&&_this.renderer.render(_this.scene,_this.camera)};var near=_this.props.near;return _this.scene=new three_module.Scene,_this.renderer=new three_module.WebGLRenderer({antialias:!0}),_this.camera=new three_module.PerspectiveCamera(75,window.innerWidth/window.innerHeight,near,1e3),_this}return(0,createClass.Z)(ThreedView,[{key:"componentDidMount",value:function componentDidMount(){var _this$props2=this.props,threedviewcanvascolor=_this$props2.threedviewcanvascolor,directionallightintensity=_this$props2.directionallightintensity,directionallightcolor=_this$props2.directionallightcolor,near=_this$props2.near,positionx3d=_this$props2.positionx3d,positiony3d=_this$props2.positiony3d,positionz3d=_this$props2.positionz3d,width=this.mount.clientWidth,height=this.mount.clientHeight;this.renderer.setClearColor(threedviewcanvascolor),this.renderer.setSize(width,height),this.mount.appendChild(this.renderer.domElement),this.camera=new three_module.PerspectiveCamera(75,width/height,near,1e3),this.camera.position.x=positionx3d,this.camera.position.y=positiony3d,this.camera.position.z=positionz3d,new(OrbitControls_default())(this.camera,this.renderer.domElement);var directionalLight=new three_module.DirectionalLight(directionallightcolor,directionallightintensity);this.scene.add(directionalLight),this.addModels(),this.renderScene(),this.start()}},{key:"addModels",value:function addModels(){var _this2=this,_this$props3=this.props,model3dmtl=_this$props3.model3dmtl,model3dobj=_this$props3.model3dobj,scalex=_this$props3.scalex,scaley=_this$props3.scaley,scalez=_this$props3.scalez,meshpositionx=_this$props3.meshpositionx,meshpositiony=_this$props3.meshpositiony,meshpositionz=_this$props3.meshpositionz;(new three_obj_mtl_loader.v).load(model3dmtl,(function(materials){materials.preload(),console.log("Material loaded");var objLoader=new three_obj_mtl_loader.L;objLoader.setMaterials(materials),objLoader.load(model3dobj,(function(object){_this2.freedomMesh=object,_this2.freedomMesh.position.setX(meshpositionx),_this2.freedomMesh.position.setY(meshpositiony),_this2.freedomMesh.position.setZ(meshpositionz),_this2.freedomMesh.scale.set(scalex,scaley,scalez),_this2.scene.add(_this2.freedomMesh)}),(function(xhr){console.log(xhr.loaded/xhr.total*100+"% loaded")}),(function(error){console.log("An error happened"+error)}))}))}},{key:"render",value:function render(){var _this3=this;return(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,jsx_runtime.jsx)("div",{style:{width:"1000px",height:"1000px"},ref:function ref(mount){_this3.mount=mount}})})}}]),ThreedView}(react.Component),components_ThreedView=ThreedView;try{ThreedView.displayName="ThreedView",ThreedView.__docgenInfo={description:"",displayName:"ThreedView",props:{model3dmtl:{defaultValue:null,description:"",name:"model3dmtl",required:!0,type:{name:"string"}},model3dobj:{defaultValue:null,description:"",name:"model3dobj",required:!0,type:{name:"string"}},near:{defaultValue:null,description:"",name:"near",required:!0,type:{name:"number"}},positionx3d:{defaultValue:null,description:"",name:"positionx3d",required:!0,type:{name:"number"}},positiony3d:{defaultValue:null,description:"",name:"positiony3d",required:!0,type:{name:"number"}},positionz3d:{defaultValue:null,description:"",name:"positionz3d",required:!0,type:{name:"number"}},meshpositionx:{defaultValue:null,description:"",name:"meshpositionx",required:!0,type:{name:"number"}},meshpositiony:{defaultValue:null,description:"",name:"meshpositiony",required:!0,type:{name:"number"}},meshpositionz:{defaultValue:null,description:"",name:"meshpositionz",required:!0,type:{name:"number"}},rotationx:{defaultValue:null,description:"",name:"rotationx",required:!0,type:{name:"number"}},rotationy:{defaultValue:null,description:"",name:"rotationy",required:!0,type:{name:"number"}},rotationz:{defaultValue:null,description:"",name:"rotationz",required:!0,type:{name:"number"}},scalex:{defaultValue:null,description:"",name:"scalex",required:!0,type:{name:"number"}},scaley:{defaultValue:null,description:"",name:"scaley",required:!0,type:{name:"number"}},scalez:{defaultValue:null,description:"",name:"scalez",required:!0,type:{name:"number"}},threedviewcanvascolor:{defaultValue:null,description:"",name:"threedviewcanvascolor",required:!0,type:{name:"string"}},directionallightcolor:{defaultValue:null,description:"",name:"directionallightcolor",required:!0,type:{name:"ColorRepresentation"}},directionallightintensity:{defaultValue:null,description:"",name:"directionallightintensity",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThreedView/index.tsx#ThreedView"]={docgenInfo:ThreedView.__docgenInfo,name:"ThreedView",path:"src/components/ThreedView/index.tsx#ThreedView"})}catch(__react_docgen_typescript_loader_error){}var ThreedView_stories={title:"3DmodelExample/ThreedView",component:components_ThreedView},Template=function Template(args){return(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"},children:(0,jsx_runtime.jsx)(components_ThreedView,(0,objectSpread2.Z)({},args))})},Default=Template.bind({});Default.args={model3dmtl:"./assets/IronMan/IronMan.mtl",model3dobj:"./assets/IronMan/IronMan.obj",near:.1,positionx3d:0,positiony3d:5,positionz3d:20,meshpositionx:0,meshpositiony:3,meshpositionz:0,rotationx:0,rotationy:.01,rotationz:0,scalex:.02,scaley:.02,scalez:.02,threedviewcanvascolor:"#263238",directionallightcolor:16777215,directionallightintensity:1.8};var DirectionLightColorExample=Template.bind({});DirectionLightColorExample.args={model3dmtl:"./assets/IronMan/IronMan.mtl",model3dobj:"./assets/IronMan/IronMan.obj",near:.1,positionx3d:0,positiony3d:5,positionz3d:20,meshpositionx:0,meshpositiony:3,meshpositionz:0,rotationx:0,rotationy:.01,rotationz:0,scalex:.02,scaley:.02,scalez:.02,threedviewcanvascolor:"#263238",directionallightcolor:"white",directionallightintensity:1.8};var CanvasColorExample=Template.bind({});CanvasColorExample.args={model3dmtl:"./assets/IronMan/IronMan.mtl",model3dobj:"./assets/IronMan/IronMan.obj",near:.1,positionx3d:0,positiony3d:5,positionz3d:20,meshpositionx:0,meshpositiony:3,meshpositionz:0,rotationx:0,rotationy:.01,rotationz:0,scalex:.02,scaley:.02,scalez:.02,threedviewcanvascolor:"#f5e1fd",directionallightcolor:"white",directionallightintensity:1.8},Default.parameters=(0,objectSpread2.Z)({storySource:{source:"(args: ThreedViewProps) => (\r\n    <div style={{textAlign:'center'}}>\r\n\t\t<ThreedView {...args} />\r\n  </div>\r\n)"}},Default.parameters),DirectionLightColorExample.parameters=(0,objectSpread2.Z)({storySource:{source:"(args: ThreedViewProps) => (\r\n    <div style={{textAlign:'center'}}>\r\n\t\t<ThreedView {...args} />\r\n  </div>\r\n)"}},DirectionLightColorExample.parameters),CanvasColorExample.parameters=(0,objectSpread2.Z)({storySource:{source:"(args: ThreedViewProps) => (\r\n    <div style={{textAlign:'center'}}>\r\n\t\t<ThreedView {...args} />\r\n  </div>\r\n)"}},CanvasColorExample.parameters);var __namedExportsOrder=["Default","DirectionLightColorExample","CanvasColorExample"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/ThreedView/ThreedView.stories.tsx":"./src/stories/ThreedView/ThreedView.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[624],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);