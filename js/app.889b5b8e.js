(function(e){function t(t){for(var n,i,u=t[0],l=t[1],s=t[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var l=a[u];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dynamic-marquee-playground/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"268c":function(e,t,a){},"55ef":function(e,t,a){},"69a9":function(e,t,a){"use strict";a("268c")},"8bb5":function(e,t,a){"use strict";a("9463")},"942d":function(e,t,a){"use strict";a("adf3")},9463:function(e,t,a){},"9eb0":function(e,t,a){"use strict";a("55ef")},adf3:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-vuejs")]),a("v-toolbar-title",[e._v("Vue Dynamic Marquee")]),a("v-spacer"),a("v-btn",{staticClass:"mr-lg-2",attrs:{href:"https://github.com/YishaiBerg/vue-dynamic-marquee",target:"_blank",icon:""}},[a("v-icon",[e._v("mdi-github")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("install"),a("v-row",[a("v-col",{staticClass:"order-lg-1",attrs:{cols:"12",lg:"6"}},[a("Marquee",{attrs:{elNum:e.elNum,wrapperHeight:e.wrapperHeight,wrapperWidth:e.wrapperWidth,direction:e.direction,reverse:e.reverse,repeat:e.repeat,repeatMargin:e.repeatMargin,pause:e.pause,speed:e.speed,hoverPause:e.hoverPause}})],1),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("controls",{attrs:{elNum:e.elNum,width:e.wrapperWidth,height:e.wrapperHeight,direction:e.direction,reverse:e.reverse,repeat:e.repeat,repeatMargin:e.repeatMargin,pause:e.pause,hoverPause:e.hoverPause,speed:e.speed},on:{"change-pause":function(t){e.pause=t},"change-hover-pause":function(t){e.hoverPause=t},"change-repeat-margin":function(t){e.repeatMargin=t},"change-repeat":function(t){e.repeat=t},"change-reverse":function(t){e.reverse=t},"change-direction":function(t){e.direction=t},"change-elnum":e.changeElNum,"change-wrapper-height":function(t){e.wrapperHeight+=t},"change-wrapper-width":function(t){e.wrapperWidth+=t},"change-speed-type":function(t){e.speed=Object.assign({},e.speed,{type:t})},"change-speed-number":function(t){e.speed=Object.assign({},e.speed,{number:t})}}})],1)],1)],1),a("v-footer",[a("v-card",{staticClass:"amber lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[a("v-card-text",{staticClass:"white--text"},[e._v(" Author: "),a("a",{attrs:{href:"mailto:ymb123@gmail.com"}},[e._v("Yishai Berg")]),e._v(". License: MIT. ")])],1)],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("v-card",{staticClass:"pa-3 wrapper",style:{height:e.wrapperHeight+"vh",width:e.wrapperWidth+"vw"},attrs:{elevation:"24"}},[a("dynamic-marquee",{attrs:{direction:e.direction,reverse:e.reverse,repeat:e.repeat,speed:e.speed,pause:e.pause,hoverPause:e.hoverPause,repeatMargin:e.repeatMargin}},[a("div",{staticClass:"marquee-wrapper",class:{"flex-column":"column"===e.direction}},e._l(e.elNum,(function(t){return a("v-card",{key:t,staticClass:"pa-3 ma-3 text-center",attrs:{color:"primary",dark:""}},[e._v("Element "+e._s(t))])})),1)])],1)],1)},u=[],l=(a("a9e3"),a("caad"),n["a"].extend({name:"marquee",components:{},props:{elNum:{type:Number,default:1},wrapperHeight:{type:Number,default:40},wrapperWidth:{type:Number,default:25},speed:{type:Object,default:function(){return{type:"pps",number:100}},validator:function(e){return e.type&&["pps","duration"].includes(e.type)&&e.number&&!isNaN(e.number)}},repeat:{type:Boolean,default:!0},repeatMargin:{type:Number,default:10},hoverPause:{type:Boolean,default:!0},pause:{type:Boolean,default:!1},direction:{type:String,default:"column",validator:function(e){return["column","row"].includes(e)}},reverse:{type:Boolean,default:!1}}})),s=l,c=(a("9eb0"),a("2877")),p=a("6544"),d=a.n(p),m=a("b0af"),v=Object(c["a"])(s,i,u,!1,null,"e0bb71fe",null),f=v.exports;d()(v,{VCard:m["a"]});var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"mt-2",attrs:{color:"green darken-1",dark:""}},[a("v-card-title",[e._v("Props:")]),a("v-card-subtitle",[e._v("Expand rows to control")])],1),a("v-data-table",{attrs:{items:e.tableItems,"item-key":"name",headers:e.tableHeaders,"hide-default-footer":"","show-expand":"",expanded:e.expanded},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.type",fn:function(t){var n=t.item;return[a("code",[e._v(e._s(n.type))])]}},{key:"item.default",fn:function(t){var n=t.item;return[a("code",[e._v(e._s(n.default))])]}},{key:"expanded-item",fn:function(t){var n=t.item;return[a("td",["direction"===n.name?a("direction",{key:n.name,on:{"change-direction":function(t){return e.$emit("change-direction",t)}}}):"reverse"===n.name?a("v-switch",{key:n.name,attrs:{"input-value":e.reverse,label:"reverse"},on:{change:function(t){return e.$emit("change-reverse",t)}}}):"repeat"===n.name?a("v-switch",{key:n.name,attrs:{"input-value":e.repeat,label:"repeat"},on:{change:function(t){return e.$emit("change-repeat",t)}}}):"repeatMargin"===n.name?a("v-text-field",{key:n.name,staticClass:"mt-4",attrs:{label:"repeatMargin",value:e.repeatMargin,rules:e.txtRules,outlined:""},on:{input:function(t){return e.$emit("change-repeat-margin",+t)}}}):"pause"===n.name?a("v-switch",{key:n.name,attrs:{"input-value":e.pause,label:"pause"},on:{change:function(t){return e.$emit("change-pause",t)}}}):"hoverPause"===n.name?a("v-switch",{key:n.name,attrs:{"input-value":e.hoverPause,label:"hoverPause"},on:{change:function(t){return e.$emit("change-hover-pause",t)}}}):"speed"===n.name?a("div",{key:n.name,staticClass:"d-flex justify-content-center"},[a("v-radio-group",{attrs:{value:e.speed.type},on:{change:function(t){return e.$emit("change-speed-type",t)}}},[a("v-radio",{attrs:{label:"pps",value:"pps"}}),a("v-radio",{attrs:{label:"duration",value:"duration"}})],1)],1):e._e()],1),"speed"===n.name?a("td",[a("v-text-field",{staticClass:"mt-4",attrs:{label:"number",value:e.speed.number,rules:e.txtRules,outlined:""},on:{input:function(t){return e.$emit("change-speed-number",+t)}}})],1):e._e()]}}])}),a("v-card",{staticClass:"mt-4",attrs:{color:"green darken-1",dark:""}},[a("v-card-title",[e._v("Dimensions:")])],1),a("blockquote",{staticClass:"blockquote"},[e._v("The component should be able to accommodate for any changes in wrapper or slot content dimensions that take place on the fly. Number of times to repeat the slot will be recalculated, and the margin between them will remain unharmed.")]),a("el-num",{attrs:{elNum:e.elNum},on:{"change-elnum":function(t){return e.$emit("change-elnum",t)}}}),a("wrapper-dimension",{attrs:{width:e.width,height:e.height},on:{"change-width":function(t){return e.$emit("change-wrapper-width",t)},"change-height":function(t){return e.$emit("change-wrapper-height",t)}}})],1)},b=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("num-input",{attrs:{label:"Elements in slot",value:e.elNum},on:{"change-num":function(t){return e.$emit("change-elnum",t)}}})},y=[],w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",{},[e._v(e._s(e.label)+":")]),a("div",{staticClass:"d-flex align-center justify-space-between num-controls"},[a("v-btn",{staticClass:"mx-3",attrs:{fab:"","x-small":"",disabled:1===e.value,color:"error"},on:{click:function(t){return e.$emit("change-num",-1)}}},[a("h1",[e._v("-")])]),a("div",[e._v(e._s(e.value))]),a("v-btn",{staticClass:"mx-3",attrs:{fab:"","x-small":"",color:"success"},on:{click:function(t){return e.$emit("change-num",1)}}},[a("h1",[e._v("+")])])],1)])])],1)},x=[],_=n["a"].extend({name:"num-input",props:{value:{type:Number,default:1},label:String}}),k=_,j=(a("942d"),a("8336")),N=a("62ad"),V=a("0fd9b"),C=Object(c["a"])(k,w,x,!1,null,"39859a3a",null),q=C.exports;d()(C,{VBtn:j["a"],VCol:N["a"],VRow:V["a"]});var M=n["a"].extend({name:"el-num",components:{NumInput:q},props:{elNum:{type:Number,default:1}},data:function(){return{}}}),$=M,O=Object(c["a"])($,g,y,!1,null,"0c3d9d15",null),P=O.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("num-input",{attrs:{value:e.height,label:"Wrapper height in vh"},on:{"change-num":function(t){return e.$emit("change-height",t)}}}),a("num-input",{attrs:{value:e.width,label:"Wrapper width in vw"},on:{"change-num":function(t){return e.$emit("change-width",t)}}})],1)},B=[],E=n["a"].extend({name:"wrapper-dimension",components:{NumInput:q},props:{width:{type:Number,default:25},height:{type:Number,default:40}}}),S=E,W=Object(c["a"])(S,T,B,!1,null,"3f84bbec",null),I=W.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex justify-content-center"},[a("v-radio-group",{attrs:{value:e.direction},on:{change:function(t){return e.$emit("change-direction",t)}}},[a("v-radio",{attrs:{label:"column",value:"column"}}),a("v-radio",{attrs:{label:"row",value:"row"}})],1)],1)])},R=[],H=n["a"].extend({name:"direction",props:{direction:{type:String,default:"column"}}}),A=H,U=a("67b6"),F=a("43a6"),G=Object(c["a"])(A,D,R,!1,null,"57e48c3c",null),J=G.exports;d()(G,{VRadio:U["a"],VRadioGroup:F["a"]});var Y=n["a"].extend({name:"controls",components:{ElNum:P,WrapperDimension:I,Direction:J},props:{elNum:{type:Number,default:1},width:{type:Number,default:25},height:{type:Number,default:40},speed:{type:Object,default:function(){return{type:"pps",number:100}},validator:function(e){return e.type&&["pps","duration"].includes(e.type)&&e.number&&!isNaN(e.number)}},repeat:{type:Boolean,default:!0},repeatMargin:{type:Number,default:10},hoverPause:{type:Boolean,default:!0},pause:{type:Boolean,default:!1},direction:{type:String,default:"column",validator:function(e){return["column","row"].includes(e)}},reverse:{type:Boolean,default:!1}},data:function(){return{tableHeaders:[{text:"Name",value:"name",sortable:!1},{text:"Type",value:"type",sortable:!1},{text:"Default",value:"default",sortable:!1},{text:"Explanation",value:"explanation",sortable:!1},{text:"",value:"data-table-expand"}],tableItems:[{name:"direction",type:"'row'|'column'",default:"'column'",explanation:"animation direction"},{name:"reverse",type:"boolean",default:"false",explanation:"By default the slot will translate according to document flow - top to bottom for {direction: 'column'} and and for {direction: 'row'} in accordance to ltr-rtl direction style of the wrapper. This behaviour can be reversed with this prop."},{name:"repeat",type:"boolean",default:"true",explanation:"If true the slot will repeat itself so as not to leave whitespace as the slot is finishing to translate out of the wrapper. The component will compute the number of times to repeat the slot in accordance with the repeatMargin prop."},{name:"repeatMargin",type:"number",default:"10",explanation:"Pixels between repeated slots."},{name:"speed",type:"{type: 'pps'|'duration', number: number}",default:"{type: 'pps', number: 100}",explanation:"There are two ways to define the translation speed. When choosing 'pps', 'number' is number of pixels per second. When choosing 'duration', 'number' is the number of milliseconds in which the slot will translate from the begining to the end of the wrapper element."},{name:"hoverPause",type:"boolean",default:"true",explanation:"Should animation pause upon hovering over wrapper element."},{name:"pause",type:"boolean",default:"false",explanation:"Use to programmaticlly pause animation."}],expanded:[],txtRules:[function(e){return!isNaN(+e)||"Value must be a number"},function(e){return+e>=0||"Value cannot be a negative number"}]}}}),L=Y,z=(a("69a9"),a("99d9")),K=a("8fea"),Q=a("b73d"),X=a("8654"),Z=Object(c["a"])(L,h,b,!1,null,null,null),ee=Z.exports;d()(Z,{VCard:m["a"],VCardSubtitle:z["a"],VCardTitle:z["c"],VDataTable:K["a"],VRadio:U["a"],VRadioGroup:F["a"],VSwitch:Q["a"],VTextField:X["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{color:"purple darken-1",dark:""}},n),[e._v("Installation and Usage")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{staticClass:"prism-comp"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-toolbar-title",[e._v("Installation and Usage")])],1),a("v-row",{attrs:{justify:"center"}},[a("blockquote",{staticClass:"blockquote"},[e._v("Install from npm")])]),a("v-row",{attrs:{justify:"center"}},[a("prism",[e._v(e._s(e.texts.npm))])],1),a("v-row",{attrs:{justify:"center"}},[a("blockquote",{staticClass:"blockquote"},[e._v("Or pull from CDN")])]),a("v-row",{attrs:{justify:"center"}},[a("prism",{attrs:{language:"html"}},[e._v(e._s(e.texts.cdn))])],1),a("v-row",{attrs:{justify:"center"}},[a("blockquote",{staticClass:"blockquote"},[e._v("Register component globally")])]),a("v-row",{attrs:{justify:"center"}},[a("prism",{attrs:{language:"javascript"}},[e._v(e._s(e.texts.global))])],1),a("v-row",{attrs:{justify:"center"}},[a("blockquote",{staticClass:"blockquote"},[e._v("Or import locally")])]),a("v-row",{attrs:{justify:"center"}},[a("prism",{attrs:{language:"html"}},[e._v(e._s(e.texts.local))])],1),a("v-row",{attrs:{justify:"center"}},[a("blockquote",{staticClass:"blockquote"},[e._v("The slot contents will translate across the component's immediate wrapper. Take note that since the slot will be absolutely positioned, the wrapper's width and height cannot rely on the contents.")])])],1)],1)],1)],1)},ae=[],ne=a("8d51"),re=a.n(ne),oe=n["a"].extend({name:"install",components:{Prism:re.a},data:function(){return{dialog:!1,texts:{npm:"yarn add vue-dynamic-marquee \n // or \n npm i vue-dynamic-marquee",cdn:"<script src=\"https://cdn.jsdelivr.net/npm/vue-dynamic-marquee@0.x/dist/vue-dynamic-marquee.umd.min.js\"><\/script>\n<script>\n    Vue.component('dynamic-marquee', window['vue-dynamic-marquee'])\n<\/script>",global:"//in main.js\n    import DynamicMarquee from 'vue-dynamic-marquee';\n    Vue.component('dynamic-marquee', DynamicMarquee);",local:"<template>\n    <div>\n\t    <dynamic-marquee>\n\t        \x3c!--your content to be animated--\x3e\n\t    </dynamic-marquee>\n    </div>\n</template>\n<script>\nimport DynamicMarquee from 'vue-dynamic-marquee';\n<\/script>"}}}}),ie=oe,ue=(a("8bb5"),a("169a")),le=a("132d"),se=a("71d9"),ce=a("2a7f"),pe=Object(c["a"])(ie,te,ae,!1,null,null,null),de=pe.exports;d()(pe,{VBtn:j["a"],VCard:m["a"],VDialog:ue["a"],VIcon:le["a"],VRow:V["a"],VToolbar:se["a"],VToolbarTitle:ce["a"]});var me=n["a"].extend({name:"App",components:{Marquee:f,Controls:ee,Install:de},data:function(){return{elNum:1,wrapperHeight:70,wrapperWidth:25,direction:"column",reverse:!1,repeat:!0,repeatMargin:10,pause:!1,hoverPause:!0,speed:{type:"pps",number:100}}},methods:{changeElNum:function(e){this.elNum+e>0&&(this.elNum+=e)}},mounted:function(){window.innerWidth<1264&&(this.wrapperWidth=80)}}),ve=me,fe=a("7496"),he=a("40dc"),be=a("a523"),ge=a("a75b"),ye=a("553a"),we=a("2fa4"),xe=Object(c["a"])(ve,r,o,!1,null,null,null),_e=xe.exports;d()(xe,{VApp:fe["a"],VAppBar:he["a"],VBtn:j["a"],VCard:m["a"],VCardText:z["b"],VCol:N["a"],VContainer:be["a"],VContent:ge["a"],VFooter:ye["a"],VIcon:le["a"],VRow:V["a"],VSpacer:we["a"],VToolbarTitle:ce["a"]});var ke=a("f309");n["a"].use(ke["a"]);var je=new ke["a"]({}),Ne=a("e043"),Ve=a.n(Ne);a("c197"),a("84bf");n["a"].config.productionTip=!1,n["a"].component("dynamic-marquee",Ve.a),new n["a"]({vuetify:je,render:function(e){return e(_e)}}).$mount("#app")}});
//# sourceMappingURL=app.889b5b8e.js.map