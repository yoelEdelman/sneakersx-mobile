(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-465e7657"],{4859:function(t,a,n){"use strict";var s=n("a429"),i=n.n(s);i.a},a2f9:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("ion-app",[n("Nav"),n("div",{staticClass:"ion-page main-background",attrs:{main:""}},[n("ion-header",{staticClass:"header-background"},[n("ion-toolbar",{staticClass:"header-background"},[n("ion-buttons",{attrs:{slot:"start"},slot:"start"},[n("ion-menu-button",{attrs:{color:"light"}})],1),n("ion-title",{attrs:{color:"light"}},[t._v("Actualités")])],1)],1),n("ion-content",{staticClass:"main-background"},[n("h2",[t._v("Actualités")]),t._l(t.news,(function(a,s){return n("ion-card",{staticClass:"card"},[n("ion-card-header",[n("img",{attrs:{alt:"Vue logo",src:a.image}})]),n("ion-card-subtitle",[t._v("Écrit par "+t._s(a.author.name)+" "+t._s(a.date))]),n("ion-card-title",[t._v(t._s(a.title))]),n("ion-card-content",[t._v(t._s(a.summary))]),n("ion-item",[n("ion-button",{attrs:{slot:"end",fill:"outline",href:"/new/"+a.id},slot:"end"},[t._v("Lire la suite")])],1)],1)}))],2)],1)],1)],1)},i=[],e=n("216c"),o={name:"news",data:function(){return{news:{}}},components:{Nav:e["a"]},mounted:function(){var t=this;this.axios.get("http://sneakersx.herokuapp.com/api/news").then((function(a){t.news=a.data}))}},r=o,c=(n("4859"),n("2877")),l=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=l.exports},a429:function(t,a,n){}}]);
//# sourceMappingURL=chunk-465e7657.23ed4428.js.map