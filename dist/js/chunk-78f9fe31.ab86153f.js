(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f9fe31"],{1317:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vm"},[r("h2",{staticClass:"h-title"},[t._v("预加载 preload")]),r("div",{staticClass:"map-bx"},[r("div",{staticClass:"map-x",attrs:{id:"map1"}}),r("div",{staticClass:"map-x",attrs:{id:"map2"}})]),r("div",{staticClass:"explain"},[r("p",[t._v("预加载：preload: Infinity")]),r("p",[t._v("默认值：preload: 0")])])])}],n=(r("5bc0"),r("a2c7")),a=r("5eee"),s=r("480c"),c=r("a226"),u={name:"PreloadMap",data:function(){return{map1:null,map2:null,mapView:new n["a"]({projection:"EPSG:4326",center:[114.064839,22.548857],zoom:10})}},methods:{initMap:function(){this.map1=new a["a"]({target:"map1",layers:[new s["a"]({preload:1/0,source:new c["a"]({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"Aerial"})})],view:this.mapView}),this.map2=new a["a"]({target:"map2",layers:[new s["a"]({preload:0,source:new c["a"]({key:"AiZrfxUNMRpOOlCpcMkBPxMUSKOEzqGeJTcVKUrXBsUdQDXutUBFN3-GnMNSlso-",imagerySet:"AerialWithLabels"})})],view:this.mapView})}},mounted:function(){this.initMap()}},l=u,p=(r("5025"),r("2877")),m=Object(p["a"])(l,i,o,!1,null,"2d670b01",null);e["default"]=m.exports},5025:function(t,e,r){"use strict";r("b324")},a226:function(t,e,r){"use strict";var i=r("6d83"),o=r("91b1"),n=r("0af5"),a=r("9cff"),s=r("2c30"),c=r("089b"),u=r("256f"),l=r("e4e0"),p=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();function m(t){var e,r,i=t[0],o=new Array(i),n=1<<i-1;for(e=0;e<i;++e)r=48,t[1]&n&&(r+=1),t[2]&n&&(r+=2),o[e]=String.fromCharCode(r),n>>=1;return o.join("")}var d='<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>',h=function(t){function e(e){var r=this,o=void 0!==e.hidpi&&e.hidpi;r=t.call(this,{cacheSize:e.cacheSize,crossOrigin:"anonymous",imageSmoothing:e.imageSmoothing,opaque:!0,projection:Object(u["g"])("EPSG:3857"),reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:i["a"].LOADING,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:o?2:1,wrapX:void 0===e.wrapX||e.wrapX,transition:e.transition,zDirection:e.zDirection})||this,r.hidpi_=o,r.culture_=void 0!==e.culture?e.culture:"en-us",r.maxZoom_=void 0!==e.maxZoom?e.maxZoom:-1,r.apiKey_=e.key,r.imagerySet_=e.imagerySet;var n="https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+r.imagerySet_+"?uriScheme=https&include=ImageryProviders&key="+r.apiKey_+"&c="+r.culture_;return Object(l["a"])(n,r.handleImageryMetadataResponse.bind(r),void 0,"jsonp"),r}return p(e,t),e.prototype.getApiKey=function(){return this.apiKey_},e.prototype.getImagerySet=function(){return this.imagerySet_},e.prototype.handleImageryMetadataResponse=function(t){if(200==t.statusCode&&"OK"==t.statusDescription&&"ValidCredentials"==t.authenticationResultCode&&1==t.resourceSets.length&&1==t.resourceSets[0].resources.length){var e=t.resourceSets[0].resources[0],r=-1==this.maxZoom_?e.zoomMax:this.maxZoom_,o=this.getProjection(),l=Object(c["b"])(o),p=this.hidpi_?2:1,h=e.imageWidth==e.imageHeight?e.imageWidth/p:[e.imageWidth/p,e.imageHeight/p],f=Object(c["a"])({extent:l,minZoom:e.zoomMin,maxZoom:r,tileSize:h});this.tileGrid=f;var v=this.culture_,y=this.hidpi_;if(this.tileUrlFunction=Object(a["b"])(e.imageUrlSubdomains.map((function(t){var r=[0,0,0],i=e.imageUrl.replace("{subdomain}",t).replace("{culture}",v);return function(t,e,o){if(t){Object(s["a"])(t[0],t[1],t[2],r);var n=i;return y&&(n+="&dpi=d1&device=mobile"),n.replace("{quadkey}",m(r))}}}))),e.imageryProviders){var g=Object(u["j"])(Object(u["g"])("EPSG:4326"),this.getProjection());this.setAttributions(function(t){var r=[],i=t.viewState,o=this.getTileGrid(),a=o.getZForResolution(i.resolution,this.zDirection),s=o.getTileCoordForCoordAndZ(i.center,a),c=s[0];return e.imageryProviders.map((function(e){for(var i=!1,o=e.coverageAreas,a=0,s=o.length;a<s;++a){var u=o[a];if(c>=u.zoomMin&&c<=u.zoomMax){var l=u.bbox,p=[l[1],l[0],l[3],l[2]],m=Object(n["a"])(p,g);if(Object(n["F"])(m,t.extent)){i=!0;break}}}i&&r.push(e.attribution)})),r.push(d),r}.bind(this))}this.setState(i["a"].READY)}else this.setState(i["a"].ERROR)},e}(o["a"]);e["a"]=h},b324:function(t,e,r){},e4e0:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));var i=r("1300"),o=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}();function n(t,e,r,o){var n=document.createElement("script"),a="olc_"+Object(i["c"])(e);function s(){delete window[a],n.parentNode.removeChild(n)}n.async=!0,n.src=t+(-1==t.indexOf("?")?"?":"&")+(o||"callback")+"="+a;var c=setTimeout((function(){s(),r&&r()}),1e4);window[a]=function(t){clearTimeout(c),s(),e(t)},document.getElementsByTagName("head")[0].appendChild(n)}(function(t){function e(e){var r=this,i="Unexpected response status: "+e.status;return r=t.call(this,i)||this,r.name="ResponseError",r.response=e,r}o(e,t)})(Error),function(t){function e(e){var r=t.call(this,"Failed to issue request")||this;return r.name="ClientError",r.client=e,r}o(e,t)}(Error)}).call(this,r("c8ba"))}}]);
//# sourceMappingURL=chunk-78f9fe31.ab86153f.js.map