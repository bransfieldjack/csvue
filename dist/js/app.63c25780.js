(function(e){function t(t){for(var o,a,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0399":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"",""])},1:function(e,t){},2:function(e,t){},"37ec":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}\nbody,html{height:100%\n}\nbody{color:#fffce1;font-family:Raleway,Arial,sans-serif;margin:0\n}\n#app{height:100%\n}\na{color:#fffce1;text-decoration:none\n}\na:focus,a:hover{color:#c94e50\n}\nmain{background:#fffce1;height:100%;overflow:auto;padding:3em 2em;text-align:center\n}\nh1{font-size:3.75em;font-weight:800\n}\n.description{font-weight:400;line-height:1.3em;margin:1.2em auto 1em;max-width:20em\n}\n.demo-buttons{font-size:1em;margin:2em auto 3em;max-width:1200px;padding:0 10em\n}\n.demo-buttons a{background:#fffce1;border-bottom-left-radius:20px 50px;border-bottom-right-radius:20px 50px;border-top-left-radius:20px 50px;border-top-right-radius:20px 50px;cursor:pointer;display:inline-block;font-weight:800;letter-spacing:1px;margin:.75em;padding:1.35em 1.1em;text-transform:uppercase;width:15em\n}\n.demo-buttons a.currentDemo{background:#c94e50;color:#fffce1\n}\n.sideButton{background:#fffce1;cursor:pointer;display:inline-block;font-size:.8em;font-weight:800;height:2.5em;letter-spacing:1px;line-height:2.5em;text-transform:uppercase;width:5em\n}\n.sideButton.left{border-bottom-left-radius:10px;border-top-left-radius:10px\n}\n.sideButton.right{border-bottom-right-radius:10px;border-top-right-radius:10px\n}\n.sideButton.active{background:#c94e50;color:#fffce1\n}\n@media screen and (max-width:40em){\nmain{font-size:80%\n}\nh1{font-size:2.5em;padding-top:1em\n}\n.demo-buttons{max-width:900px;padding:0 2em\n}\n}\n.bm-burger-button{height:30px;left:36px;position:absolute;top:36px;width:36px\n}\n.right .bm-burger-button{left:auto;right:36px\n}\n.bm-burger-bars{background:#373a47\n}\n.bm-morph-shape{fill:#fffce1\n}\n.bm-menu{background:#373a47\n}\n.bm-menu a{color:#fffce1\n}\n.bm-menu a:focus,.bm-menu a:hover{color:#c94e50\n}\n.menu-1 .bm-cross{background:#fffce1\n}\n.menu-1 .bm-menu{font-size:1.15em;padding:2.5em 1.5em 0\n}\n.menu-2 .bm-cross{background:#999\n}\n.menu-2 .bm-menu{padding:3.4em 1em 0\n}\n.menu-2 a{padding:1em\n}\n.menu-2 i{color:#282a35;font-size:1.7em;vertical-align:middle\n}\n.menu-3 .bm-cross{background:#888\n}\n.menu-3 .bm-menu{font-size:1.15em;padding:2em 1em\n}\n.menu-3 i{opacity:.5\n}\n.menu-3 span{font-size:.75em;letter-spacing:1px;text-transform:uppercase\n}\n.menu-4 .bm-cross{background:#888\n}\n.menu-4 h2{box-shadow:inset 0 -1px rgba(0,0,0,.2);color:rgba(0,0,0,.4);margin:0 auto;padding:2em 1em\n}\n.menu-4 h2 i{margin-left:.2em\n}\n.menu-4 h2 span{font-size:1.6em;font-weight:700\n}\n.menu-4 a{box-shadow:inset 0 -1px rgba(0,0,0,.2);padding:1em;text-transform:uppercase;transition:background .3s,box-shadow .3s\n}\n.menu-4 a span{font-weight:400;letter-spacing:1px\n}\n.menu-4 a:focus,.menu-4 a:hover{background:rgba(0,0,0,.2);box-shadow:inset 0 -1px transparent;color:#b8b7ad\n}",""])},5663:function(e,t,n){var o=n("0399");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("8f7c7de2",o,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.currentMenu,{tag:"component",attrs:{right:"right"===e.side}},[n("router-link",{attrs:{to:"/barchart"}},[n("i",{staticClass:"fa fa-fw fa-bar-chart"}),n("span",[e._v("Barchart")])])],1),n("router-view")],1)},s=[],a=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)}),i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"sideNav",staticClass:"bm-menu"},[n("nav",{staticClass:"bm-item-list"},[e._t("default")],2),n("span",{staticClass:"bm-cross-button cross-style",class:{hidden:!e.crossIcon},on:{click:e.closeMenu}},e._l(2,function(e,t){return n("span",{key:e,staticClass:"bm-cross",style:{position:"absolute",width:"3px",height:"14px",transform:1===t?"rotate(45deg)":"rotate(-45deg)"}})}),0)]),n("div",{ref:"bmBurgerButton",staticClass:"bm-burger-button",class:{hidden:!e.burgerIcon},on:{click:e.openMenu}},e._l(3,function(e,t){return n("span",{key:t,staticClass:"bm-burger-bars line-style",style:{top:2*t*20+"%"}})}),0)])},l=[],c={name:"menubar",data:function(){return{isSideBarOpen:!1}},props:{isOpen:{type:Boolean,required:!1},right:{type:Boolean,required:!1},width:{type:[String],required:!1,default:"300"},disableEsc:{type:Boolean,required:!1},noOverlay:{type:Boolean,required:!1},onStateChange:{type:Function,required:!1},burgerIcon:{type:Boolean,required:!1,default:!0},crossIcon:{type:Boolean,required:!1,default:!0},disableOutsideClick:{type:Boolean,required:!1,default:!1}},methods:{openMenu:function(){this.$emit("openMenu"),this.isSideBarOpen=!0,this.noOverlay||document.body.classList.add("bm-overlay"),this.right&&(this.$refs.sideNav.style.left="auto",this.$refs.sideNav.style.right="0px"),this.$nextTick(function(){this.$refs.sideNav.style.width=this.width?this.width+"px":"300px"})},closeMenu:function(){this.$emit("closeMenu"),this.isSideBarOpen=!1,document.body.classList.remove("bm-overlay"),this.$refs.sideNav.style.width="0px"},closeMenuOnEsc:function(e){e=e||window.event,"Escape"!==e.key&&27!==e.keyCode||this.closeMenu()},documentClick:function(e){var t=this.$refs.bmBurgerButton,n=null;e&&e.target&&(n=e.target),t&&t!==n&&!t.contains(n)&&"bm-menu"!==e.target.className&&this.isSideBarOpen&&!this.disableOutsideClick&&this.closeMenu()}},mounted:function(){this.disableEsc||document.addEventListener("keyup",this.closeMenuOnEsc)},created:function(){document.addEventListener("click",this.documentClick)},destroyed:function(){document.removeEventListener("keyup",this.closeMenuOnEsc),document.removeEventListener("click",this.documentClick)},watch:{isOpen:{deep:!0,immediate:!0,handler:function(e,t){var n=this;this.$nextTick(function(){!t&&e&&n.openMenu(),t&&!e&&n.closeMenu()})}},right:{deep:!0,immediate:!0,handler:function(e,t){var n=this;e&&this.$nextTick(function(){n.$refs.bmBurgerButton.style.left="auto",n.$refs.bmBurgerButton.style.right="36px",n.$refs.sideNav.style.left="auto",n.$refs.sideNav.style.right="0px",document.querySelector(".bm-burger-button").style.left="auto",document.querySelector(".bm-burger-button").style.right="36px",document.querySelector(".bm-menu").style.left="auto",document.querySelector(".bm-menu").style.right="0px",document.querySelector(".cross-style").style.right="250px"}),t&&this.$refs.bmBurgerButton.hasAttribute("style")&&(this.$refs.bmBurgerButton.removeAttribute("style"),this.$refs.sideNav.style.right="auto",document.querySelector(".bm-burger-button").removeAttribute("style"),document.getElementById("sideNav").style.right="auto",document.querySelector(".cross-style").style.right="0px")}}}},p=c,d=(n("efa6"),n("2877")),m=Object(d["a"])(p,u,l,!1,null,null,null);m.options.__file="Menu.vue";var h=m.exports,f={name:"slide",components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},y=f,b=Object(d["a"])(y,a,i,!1,null,null,null);b.options.__file="slide.vue";var g=b.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({ref:"sideNav",on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},x=[],w={name:"bubble",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){var e=this.$refs.sideNav.$el.querySelector(".bm-menu");e.style.borderRadius="150% / 70%",this.$attrs.right?(e.style.borderTopRightRadius="0px 900px",e.style.borderBottomRightRadius="0px"):(e.style.borderTopLeftRadius="0px 900px",e.style.borderBottomLeftRadius="0px"),e.style.transitionTimingFunction="easy-in",this.$emit("openMenu"),setTimeout(function(){e.style.transitionTimingFunction="cubic-bezier(.29, 1.01, 1, -0.68)",e.style.borderRadius="0px"},300)},closeMenu:function(){var e=this.$refs.sideNav.$el.querySelector(".bm-menu");e.style.transitionTimingFunction=null,this.$emit("closeMenu")}}},M=w,S=Object(d["a"])(M,v,x,!1,null,null,null);S.options.__file="bubble.vue";var $=S.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({attrs:{openMenu:"openMenu"},on:{closeMenu:e.closeMenu}},"Menu",e.propsToPass,!1),[e._t("default")],2)],1)},O=[],q={name:"elastic",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},k=q,B=Object(d["a"])(k,_,O,!1,null,null,null);B.options.__file="elastic.vue";var E=B.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({ref:"sideNav",on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},C=[],j={name:"elastic",components:{Menu:h},data:function(){return{bodyOldStyle:"",propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){var e=this;this.$emit("openMenu");var t=this.$attrs.width?this.$attrs.width+"px":"300px";this.$refs.sideNav.$el.querySelector(".bm-menu").style.overflowY="hidden",this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$refs.sideNav.$el.querySelector(".bm-menu").style.transition="0.5s",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(t,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(t,", 0px, 0px )"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",this.$nextTick(function(){e.$refs.sideNav.$el.querySelector(".bm-menu").style.height="100%"})},closeMenu:function(){this.$emit("closeMenu"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.body.setAttribute("style",this.bodyOldStyle),this.$refs.sideNav.$el.querySelector(".bm-menu").style.height="0px"}},mounted:function(){this.$refs.sideNav.$el.querySelector(".bm-menu").style.height="0px"}},A=j,N=Object(d["a"])(A,T,C,!1,null,null,null);N.options.__file="fallDown.vue";var R=N.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},z=[],L={name:"push",data:function(){return{bodyOldStyle:""}},components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px )"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.body.setAttribute("style",this.bodyOldStyle)}}},D=L,X=Object(d["a"])(D,P,z,!1,null,null,null);X.options.__file="push.vue";var F=X.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},Y=[],J={name:"pushrotate",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?(document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px ) rotateY(15deg)"),document.querySelector("#page-wrap").style.transformOrigin="100% 50% 0px"):(document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px ) rotateY(-15deg)"),document.querySelector("#page-wrap").style.transformOrigin="0% 50% 0px"),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},V=J,G=Object(d["a"])(V,I,Y,!1,null,null,null);G.options.__file="pushRotate.vue";var H=G.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},Q=[],U={name:"reveal",data:function(){return{bodyOldStyle:""}},components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px )"),document.querySelector("#page-wrap").style.position="relative",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.position="",document.body.setAttribute("style",this.bodyOldStyle)}}},W=U,Z=Object(d["a"])(W,K,Q,!1,null,null,null);Z.options.__file="reveal.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},ne=[],oe={name:"scaledown",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"100px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, -600px ) "):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, -600px ) "),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.overflow="hidden",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden",document.querySelector("#app").style.height="100%"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#page-wrap").style.overflow="auto",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},re=oe,se=Object(d["a"])(re,te,ne,!1,null,null,null);se.options.__file="scaleDown.vue";var ae=se.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},ue=[],le={name:"scalerotate",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"100px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, -600px ) rotateY(20deg)"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, -600px ) rotateY(-20deg)"),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.overflow="hidden",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden",document.querySelector("#app").style.height="100%"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#page-wrap").style.overflow="auto",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},ce=le,pe=Object(d["a"])(ce,ie,ue,!1,null,null,null);pe.options.__file="scaleRotate.vue";var de=pe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({attrs:{openMenu:"openMenu"},on:{closeMenu:e.closeMenu}},"Menu",e.propsToPass,!1),[e._t("default")],2)],1)},he=[],fe={name:"stack",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},ye=fe,be=Object(d["a"])(ye,me,he,!1,null,null,null);be.options.__file="stack.vue";var ge=be.exports,ve={data:function(){return{menus:{slide:{buttonText:"Slide"},push:{buttonText:"Push"},pushRotate:{buttonText:"Push Rotate"},reveal:{buttonText:"Reveal"},scaleDown:{buttonText:"Scale Down"},scaleRotate:{buttonText:"Scale Rotate"},bubble:{buttonText:"Bubble"},fallDown:{buttonText:"Fall Down"}},side:"right",currentMenu:"scalerotate"}},components:{slide:g,bubble:$,elastic:E,push:F,pushrotate:H,scaledown:ae,scalerotate:de,reveal:ee,stack:ge,falldown:R,Menu:h},methods:{changeMenu:function(e){return this.currentMenu=e.replace(/ +/g,"").toLowerCase(),this.currentMenu},changeSide:function(e){this.side=e}}},xe=ve,we=(n("7c55"),Object(d["a"])(xe,r,s,!1,null,null,null));we.options.__file="App.vue";var Me=we.exports,Se=n("8c4f"),$e=n("43f9"),_e=n.n($e),Oe=(n("51de"),n("5f5b")),qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"bv-example-row"},[n("br"),n("hr"),n("br"),n("b-row",{staticClass:"text-center"},[n("b-col"),n("b-col",{attrs:{cols:"8"}},[n("div",[n("apexchart",{attrs:{width:"100%",type:e.type,options:e.options,series:e.series}})],1),n("br"),n("hr"),n("br"),n("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),n("div",{staticClass:"mt-3"},[e._v("Selected file: "+e._s(e.file?e.file.name:"")+"   "),n("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.parse()}}},[e._v("Parse")]),e._v("  "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.line()}}},[e._v("Line")]),e._v("  "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.bar()}}},[e._v("Bar")]),e._v("  ")],1),n("br"),n("br"),n("br"),n("hr")],1),n("b-col")],1)],1)},ke=[],Be=(n("456d"),n("ac6a"),n("8615"),n("43e0")),Ee=n.n(Be),Te=n("f751"),Ce={components:{VuePlotly:Ee.a},data:function(){return{type:"",csv_data:null,file:null,options:null,series:null}},methods:{line:function(){this.type="line"},bar:function(){this.type="bar"},parse:function(){var e=this;this.csv_data=this.$papa.parse(this.file,{header:!0,dynamicTyping:!0,complete:function(t){var n,o=Object.values(t.data);Object.values(o);for(n=0;n<o.length;n++)e.options={chart:{id:"vuechart-example"},xaxis:{categories:Object.keys(o[n])}},e.series=[{name:"series-1",data:Object.values(o[n])}]}}),this.$refs.plotlyRef.$on("click",function(e){console.log(e)})}}},je=Ce,Ae=(n("72e5"),Object(d["a"])(je,qe,ke,!1,null,"5f480fd2",null));Ae.options.__file="Barchart.vue";var Ne=Ae.exports,Re=[{path:"/barchart",component:Ne}],Pe=n("1321"),ze=n.n(Pe);n("f9e3"),n("2dd8");o["default"].config.productionTip=!1,o["default"].use(Se["a"]),o["default"].use(_e.a),o["default"].use(Oe["a"]),o["default"].use(Te["a"]),o["default"].component("apexchart",ze.a);var Le=new Se["a"]({routes:Re});new o["default"]({render:function(e){return e(Me)},router:Le}).$mount("#app")},"5e6f":function(e,t,n){var o=n("6d18");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("55c52291",o,!0,{sourceMap:!1,shadowMode:!1})},"6d18":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\nhtml{height:100%\n}\n.bm-burger-button{cursor:pointer;height:30px;left:36px;position:absolute;top:36px;width:36px\n}\n.bm-burger-button.hidden{display:none\n}\n.bm-burger-bars{background-color:#373a47\n}\n.line-style{height:20%;left:0;position:absolute;right:0\n}\n.cross-style{cursor:pointer;position:absolute;right:2px;top:12px\n}\n.bm-cross{background:#bdc3c7\n}\n.bm-cross-button{height:24px;width:24px\n}\n.bm-cross-button.hidden{display:none\n}\n.bm-menu{background-color:#3f3f41;height:100%;left:0;overflow-x:hidden;padding-top:60px;position:fixed;top:0;transition:.5s;width:0;z-index:1000\n}\n.bm-overlay{background:rgba(0,0,0,.3)\n}\n.bm-item-list{color:#b8b7ad;font-size:20px;margin-left:10%\n}\n.bm-item-list>*{display:flex;padding:.7em;text-decoration:none\n}\n.bm-item-list>*>span{color:#fff;font-weight:700;margin-left:10px\n}",""])},"72e5":function(e,t,n){"use strict";var o=n("5663"),r=n.n(o);r.a},"7c55":function(e,t,n){"use strict";var o=n("ca61"),r=n.n(o);r.a},ca61:function(e,t,n){var o=n("37ec");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("499e").default;r("3cfdf817",o,!0,{sourceMap:!1,shadowMode:!1})},efa6:function(e,t,n){"use strict";var o=n("5e6f"),r=n.n(o);r.a}});
//# sourceMappingURL=app.63c25780.js.map