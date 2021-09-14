(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208113"],{a2e1:function(e,t,r){"use strict";var o=r("4cdf"),n=r("01d4"),i=r("8f37"),a=r("f623"),c=r("0af5"),s=r("1e8d"),u=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),p=function(e){function t(t){var r=e.call(this)||this;return r.geometries_=t||null,r.changeEventsKeys_=[],r.listenGeometriesChange_(),r}return u(t,e),t.prototype.unlistenGeometriesChange_=function(){this.changeEventsKeys_.forEach(s["c"]),this.changeEventsKeys_.length=0},t.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push(Object(s["a"])(this.geometries_[e],n["a"].CHANGE,this.changed,this))},t.prototype.clone=function(){var e=new t(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e},t.prototype.closestPointXY=function(e,t,r,o){if(o<Object(c["f"])(this.getExtent(),e,t))return o;for(var n=this.geometries_,i=0,a=n.length;i<a;++i)o=n[i].closestPointXY(e,t,r,o);return o},t.prototype.containsXY=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)if(r[o].containsXY(e,t))return!0;return!1},t.prototype.computeExtent=function(e){Object(c["m"])(e);for(var t=this.geometries_,r=0,o=t.length;r<o;++r)Object(c["q"])(e,t[r].getExtent());return e},t.prototype.getGeometries=function(){return f(this.geometries_)},t.prototype.getGeometriesArray=function(){return this.geometries_},t.prototype.getGeometriesArrayRecursive=function(){for(var e=[],t=this.geometries_,r=0,o=t.length;r<o;++r)t[r].getType()===this.getType()?e=e.concat(t[r].getGeometriesArrayRecursive()):e.push(t[r]);return e},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;for(var r=[],o=this.geometries_,n=!1,i=0,a=o.length;i<a;++i){var c=o[i],s=c.getSimplifiedGeometry(e);r.push(s),s!==c&&(n=!0)}if(n){var u=new t(null);return u.setGeometriesArray(r),u}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this},t.prototype.getType=function(){return a["a"].GEOMETRY_COLLECTION},t.prototype.intersectsExtent=function(e){for(var t=this.geometries_,r=0,o=t.length;r<o;++r)if(t[r].intersectsExtent(e))return!0;return!1},t.prototype.isEmpty=function(){return 0===this.geometries_.length},t.prototype.rotate=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].rotate(e,t);this.changed()},t.prototype.scale=function(e,t,r){var o=r;o||(o=Object(c["x"])(this.getExtent()));for(var n=this.geometries_,i=0,a=n.length;i<a;++i)n[i].scale(e,t,o);this.changed()},t.prototype.setGeometries=function(e){this.setGeometriesArray(f(e))},t.prototype.setGeometriesArray=function(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()},t.prototype.applyTransform=function(e){for(var t=this.geometries_,r=0,o=t.length;r<o;++r)t[r].applyTransform(e);this.changed()},t.prototype.translate=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].translate(e,t);this.changed()},t.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),e.prototype.disposeInternal.call(this)},t}(i["a"]);function f(e){for(var t=[],r=0,o=e.length;r<o;++r)t.push(e[r].clone());return t}var y=p,l=r("fced"),h=r("1300"),d=r("38f3"),m=r("256f"),g=function(){function e(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}return e.prototype.getReadOptions=function(e,t){var r;if(t){var o=t.dataProjection?Object(m["g"])(t.dataProjection):this.readProjection(e);t.extent&&o&&o.getUnits()===l["b"].TILE_PIXELS&&(o=Object(m["g"])(o),o.setWorldExtent(t.extent)),r={dataProjection:o,featureProjection:t.featureProjection}}return this.adaptOptions(r)},e.prototype.adaptOptions=function(e){return Object(d["a"])({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},e)},e.prototype.getType=function(){return Object(h["b"])()},e.prototype.readFeature=function(e,t){return Object(h["b"])()},e.prototype.readFeatures=function(e,t){return Object(h["b"])()},e.prototype.readGeometry=function(e,t){return Object(h["b"])()},e.prototype.readProjection=function(e){return Object(h["b"])()},e.prototype.writeFeature=function(e,t){return Object(h["b"])()},e.prototype.writeFeatures=function(e,t){return Object(h["b"])()},e.prototype.writeGeometry=function(e,t){return Object(h["b"])()},e}(),O=g;function b(e,t,r){var o,n=r?Object(m["g"])(r.featureProjection):null,i=r?Object(m["g"])(r.dataProjection):null;if(o=n&&i&&!Object(m["c"])(n,i)?(t?e.clone():e).transform(t?n:i,t?i:n):e,t&&r&&void 0!==r.decimals){var a=Math.pow(10,r.decimals),c=function(e){for(var t=0,r=e.length;t<r;++t)e[t]=Math.round(e[t]*a)/a;return e};o===e&&(o=e.clone()),o.applyTransform(c)}return o}var j=r("1ecb"),_=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),v=function(e){function t(){return e.call(this)||this}return _(t,e),t.prototype.getType=function(){return j["a"].JSON},t.prototype.readFeature=function(e,t){return this.readFeatureFromObject(G(e),this.getReadOptions(e,t))},t.prototype.readFeatures=function(e,t){return this.readFeaturesFromObject(G(e),this.getReadOptions(e,t))},t.prototype.readFeatureFromObject=function(e,t){return Object(h["b"])()},t.prototype.readFeaturesFromObject=function(e,t){return Object(h["b"])()},t.prototype.readGeometry=function(e,t){return this.readGeometryFromObject(G(e),this.getReadOptions(e,t))},t.prototype.readGeometryFromObject=function(e,t){return Object(h["b"])()},t.prototype.readProjection=function(e){return this.readProjectionFromObject(G(e))},t.prototype.readProjectionFromObject=function(e){return Object(h["b"])()},t.prototype.writeFeature=function(e,t){return JSON.stringify(this.writeFeatureObject(e,t))},t.prototype.writeFeatureObject=function(e,t){return Object(h["b"])()},t.prototype.writeFeatures=function(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))},t.prototype.writeFeaturesObject=function(e,t){return Object(h["b"])()},t.prototype.writeGeometry=function(e,t){return JSON.stringify(this.writeGeometryObject(e,t))},t.prototype.writeGeometryObject=function(e,t){return Object(h["b"])()},t}(O);function G(e){if("string"===typeof e){var t=JSON.parse(e);return t||null}return null!==e?e:null}var P=v,w=r("7a09"),F=r("47e4"),T=r("9a44"),E=r("88da"),N=r("f403"),C=r("5bc3"),I=r("92fa"),L=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),S=function(e){function t(t){var r=this,o=t||{};return r=e.call(this)||this,r.dataProjection=Object(m["g"])(o.dataProjection?o.dataProjection:"EPSG:4326"),o.featureProjection&&(r.defaultFeatureProjection=Object(m["g"])(o.featureProjection)),r.geometryName_=o.geometryName,r.extractGeometryName_=o.extractGeometryName,r.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"],r}return L(t,e),t.prototype.readFeatureFromObject=function(e,t){var r=null;r="Feature"===e["type"]?e:{type:"Feature",geometry:e,properties:null};var n=M(r["geometry"],t),i=new o["a"];return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r["geometry_name"]),i.setGeometry(n),"id"in r&&i.setId(r["id"]),r["properties"]&&i.setProperties(r["properties"],!0),i},t.prototype.readFeaturesFromObject=function(e,t){var r=e,o=null;if("FeatureCollection"===r["type"]){var n=e;o=[];for(var i=n["features"],a=0,c=i.length;a<c;++a)o.push(this.readFeatureFromObject(i[a],t))}else o=[this.readFeatureFromObject(e,t)];return o},t.prototype.readGeometryFromObject=function(e,t){return M(e,t)},t.prototype.readProjectionFromObject=function(e){var t,r=e["crs"];return r?"name"==r["type"]?t=Object(m["g"])(r["properties"]["name"]):"EPSG"===r["type"]?t=Object(m["g"])("EPSG:"+r["properties"]["code"]):Object(I["a"])(!1,36):t=this.dataProjection,t},t.prototype.writeFeatureObject=function(e,t){t=this.adaptOptions(t);var r={type:"Feature",geometry:null,properties:null},o=e.getId();if(void 0!==o&&(r.id=o),!e.hasProperties())return r;var n=e.getProperties(),i=e.getGeometry();return i&&(r.geometry=q(i,t),delete n[e.getGeometryName()]),Object(d["d"])(n)||(r.properties=n),r},t.prototype.writeFeaturesObject=function(e,t){t=this.adaptOptions(t);for(var r=[],o=0,n=e.length;o<n;++o)r.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:r}},t.prototype.writeGeometryObject=function(e,t){return q(e,this.adaptOptions(t))},t}(P);function M(e,t){if(!e)return null;var r;switch(e["type"]){case a["a"].POINT:r=k(e);break;case a["a"].LINE_STRING:r=R(e);break;case a["a"].POLYGON:r=J(e);break;case a["a"].MULTI_POINT:r=Y(e);break;case a["a"].MULTI_LINE_STRING:r=A(e);break;case a["a"].MULTI_POLYGON:r=U(e);break;case a["a"].GEOMETRY_COLLECTION:r=x(e);break;default:throw new Error("Unsupported GeoJSON type: "+e.type)}return b(r,!1,t)}function x(e,t){var r=e["geometries"].map((function(e){return M(e,t)}));return new y(r)}function k(e){return new N["a"](e["coordinates"])}function R(e){return new w["a"](e["coordinates"])}function A(e){return new F["a"](e["coordinates"])}function Y(e){return new T["a"](e["coordinates"])}function U(e){return new E["a"](e["coordinates"])}function J(e){return new C["a"](e["coordinates"])}function q(e,t){e=b(e,!0,t);var r,o=e.getType();switch(o){case a["a"].POINT:r=B(e,t);break;case a["a"].LINE_STRING:r=K(e,t);break;case a["a"].POLYGON:r=D(e,t);break;case a["a"].MULTI_POINT:r=W(e,t);break;case a["a"].MULTI_LINE_STRING:r=H(e,t);break;case a["a"].MULTI_POLYGON:r=z(e,t);break;case a["a"].GEOMETRY_COLLECTION:r=X(e,t);break;case a["a"].CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}function X(e,t){var r=e.getGeometriesArray().map((function(e){var r=Object(d["a"])({},t);return delete r.featureProjection,q(e,r)}));return{type:"GeometryCollection",geometries:r}}function K(e,t){return{type:"LineString",coordinates:e.getCoordinates()}}function H(e,t){return{type:"MultiLineString",coordinates:e.getCoordinates()}}function W(e,t){return{type:"MultiPoint",coordinates:e.getCoordinates()}}function z(e,t){var r;return t&&(r=t.rightHanded),{type:"MultiPolygon",coordinates:e.getCoordinates(r)}}function B(e,t){return{type:"Point",coordinates:e.getCoordinates()}}function D(e,t){var r;return t&&(r=t.rightHanded),{type:"Polygon",coordinates:e.getCoordinates(r)}}t["a"]=S}}]);
//# sourceMappingURL=chunk-2d208113.b1edc57d.js.map