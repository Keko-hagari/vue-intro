(function(t){function e(e){for(var o,a,l=e[0],c=e[1],i=e[2],s=0,f=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},u=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var p=c;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],a={name:"App",components:{}},l=a,c=n("2877"),i=Object(c["a"])(l,r,u,!1,null,null,null),p=i.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("Go to about")]),n("router-link",{attrs:{to:"/picts"}},[t._v("Go to picts")])],1)},v=[],b={name:"Home",components:{}},d=b,m=Object(c["a"])(d,f,v,!1,null,null,null),h=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("About")]),n("router-link",{attrs:{to:"/"}},[t._v("Go to home")]),n("router-link",{attrs:{to:"/picts"}},[t._v("Go to picts")])],1)},y=[],O={name:"About",components:{}},j=O,w=Object(c["a"])(j,_,y,!1,null,null,null),g=w.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Pict")]),n("router-link",{attrs:{to:"/"}},[t._v("Go to home")]),n("router-link",{attrs:{to:"/about"}},[t._v("Go to about")])],1)},k=[],P={name:"Picts",components:{}},G=P,S=Object(c["a"])(G,x,k,!1,null,null,null),$=S.exports;o["a"].use(s["a"]);var E=new s["a"]({mode:"history",routes:[{path:"/about",name:"about",component:g},{path:"/picts",name:"picts",component:$},{path:"/",name:"Home",component:h}]});o["a"].config.productionTip=!1,new o["a"]({router:E,render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=app.4c808845.js.map