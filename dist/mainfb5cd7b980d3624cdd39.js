/*! For license information please see mainfb5cd7b980d3624cdd39.js.LICENSE.txt */
(()=>{"use strict";var r={705:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<r.length;s++){var l=[].concat(r[s]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},476:r=>{r.exports=function(r){var n=r[1],t=r[3];if(!t)return n;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},426:(r,n,t)=>{t.d(n,{Z:()=>c});var e=t(476),o=t.n(e),i=t(705),a=t.n(i)()(o());a.push([r.id,":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(0, 0, 0);\r\n    --background-color-main: rgb(230, 243, 241);\r\n    --background-color-block: rgb(255, 255, 255);\r\n    --shadow-window: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n    --shadow-line: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    background-color: var(--background-color-main);\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.header {\r\n    margin: 1rem;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.input {\r\n    background-color: var(--background-color-main);\r\n    border: 1px solid;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.input:focus {\r\n    border: 1px solid blue;\r\n}\r\n\r\n.input:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\n.input::placeholder {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#submit {\r\n    width: calc(var(--main-font) + .2rem);\r\n}\r\n\r\n.weather {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.country, .city, .temp {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.icon {\r\n    width: calc(var(--main-font) + 1.5rem);\r\n}\r\n\r\n.footer {\r\n    position: static;\r\n    display: flex;\r\n    bottom: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(var(--main-font) - 3px);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n.github-mark {\r\n    width: var(--main-font);\r\n    border-radius: 1rem;\r\n    transition: all .3s;\r\n}\r\n\r\n.github-mark:hover {\r\n    transform: rotate(360deg);\r\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,iFAAiF;IACjF,0BAA0B;IAC1B,2CAA2C;IAC3C,4CAA4C;IAC5C,mJAAmJ;IACnJ,+EAA+E;AACnF;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,8CAA8C;IAC9C,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,8CAA8C;IAC9C,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,uCAAuC;IACvC,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B",sourcesContent:[":root {\r\n    --main-font: clamp(16px, calc(16px + (28 - 16) * ((100vw - 360px) / 1560)), 28px);\r\n    --font-color: rgb(0, 0, 0);\r\n    --background-color-main: rgb(230, 243, 241);\r\n    --background-color-block: rgb(255, 255, 255);\r\n    --shadow-window: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\r\n    --shadow-line: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n}\r\n\r\nbody {\r\n    background-color: var(--background-color-main);\r\n    font-size: var(--main-font);\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.header {\r\n    margin: 1rem;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.input {\r\n    background-color: var(--background-color-main);\r\n    border: 1px solid;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.input:focus {\r\n    border: 1px solid blue;\r\n}\r\n\r\n.input:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\n.input::placeholder {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#submit {\r\n    width: calc(var(--main-font) + .2rem);\r\n}\r\n\r\n.weather {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.country, .city, .temp {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.icon {\r\n    width: calc(var(--main-font) + 1.5rem);\r\n}\r\n\r\n.footer {\r\n    position: static;\r\n    display: flex;\r\n    bottom: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(var(--main-font) - 3px);\r\n    text-align: center;\r\n    padding: 1rem;\r\n}\r\n\r\n.github-mark {\r\n    width: var(--main-font);\r\n    border-radius: 1rem;\r\n    transition: all .3s;\r\n}\r\n\r\n.github-mark:hover {\r\n    transform: rotate(360deg);\r\n}"],sourceRoot:""}]);const c=a},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var i={},a=[],c=0;c<r.length;c++){var u=r[c],s=e.base?u[0]+e.base:u[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=t(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var A=o(d,e);e.byIndex=c,n.splice(c,0,{identifier:p,updater:A,references:1})}a.push(p)}return a}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var i=e(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var u=e(r,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=u}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return r[e](i,i.exports,t),i.exports}t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var n=t.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),t.nc=void 0,(()=>{var r=t(379),n=t.n(r),e=t(795),o=t.n(e),i=t(569),a=t.n(i),c=t(565),u=t.n(c),s=t(216),l=t.n(s),p=t(589),f=t.n(p),d=t(426),A={};function h(r){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(r)}function m(){m=function(){return r};var r={},n=Object.prototype,t=n.hasOwnProperty,e=Object.defineProperty||function(r,n,t){r[n]=t.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(r,n,t){return Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{u({},"")}catch(r){u=function(r,n,t){return r[n]=t}}function s(r,n,t,o){var i=n&&n.prototype instanceof f?n:f,a=Object.create(i.prototype),c=new k(o||[]);return e(a,"_invoke",{value:w(r,t,c)}),a}function l(r,n,t){try{return{type:"normal",arg:r.call(n,t)}}catch(r){return{type:"throw",arg:r}}}r.wrap=s;var p={};function f(){}function d(){}function A(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==n&&t.call(g,i)&&(v=g);var b=A.prototype=f.prototype=Object.create(v);function x(r){["next","throw","return"].forEach((function(n){u(r,n,(function(r){return this._invoke(n,r)}))}))}function C(r,n){function o(e,i,a,c){var u=l(r[e],r,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==h(p)&&t.call(p,"__await")?n.resolve(p.__await).then((function(r){o("next",r,a,c)}),(function(r){o("throw",r,a,c)})):n.resolve(p).then((function(r){s.value=r,a(s)}),(function(r){return o("throw",r,a,c)}))}c(u.arg)}var i;e(this,"_invoke",{value:function(r,t){function e(){return new n((function(n,e){o(r,t,n,e)}))}return i=i?i.then(e,e):e()}})}function w(r,n,t){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=B(a,t);if(c){if(c===p)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var u=l(r,n,t);if("normal"===u.type){if(e=t.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(e="completed",t.method="throw",t.arg=u.arg)}}}function B(r,n){var t=n.method,e=r.iterator[t];if(void 0===e)return n.delegate=null,"throw"===t&&r.iterator.return&&(n.method="return",n.arg=void 0,B(r,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),p;var o=l(e,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function I(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function E(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function k(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(I,this),this.reset(!0)}function j(r){if(r){var n=r[i];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,o=function n(){for(;++e<r.length;)if(t.call(r,e))return n.value=r[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=A,e(b,"constructor",{value:A,configurable:!0}),e(A,"constructor",{value:d,configurable:!0}),d.displayName=u(A,c,"GeneratorFunction"),r.isGeneratorFunction=function(r){var n="function"==typeof r&&r.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,A):(r.__proto__=A,u(r,c,"GeneratorFunction")),r.prototype=Object.create(b),r},r.awrap=function(r){return{__await:r}},x(C.prototype),u(C.prototype,a,(function(){return this})),r.AsyncIterator=C,r.async=function(n,t,e,o,i){void 0===i&&(i=Promise);var a=new C(s(n,t,e,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(r){return r.done?r.value:a.next()}))},x(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var n=Object(r),t=[];for(var e in n)t.push(e);return t.reverse(),function r(){for(;t.length;){var e=t.pop();if(e in n)return r.value=e,r.done=!1,r}return r.done=!0,r}},r.values=j,k.prototype={constructor:k,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!r)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(t,e){return a.type="throw",a.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(r,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=r,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(r,n){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&n&&(this.next=n),p},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===r)return this.complete(t.completion,t.afterLoc),E(t),p}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===r){var e=t.completion;if("throw"===e.type){var o=e.arg;E(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,t){return this.delegate={iterator:j(r),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},r}function v(r,n,t,e,o,i,a){try{var c=r[i](a),u=c.value}catch(r){return void t(r)}c.done?n(u):Promise.resolve(u).then(e,o)}function y(r){return function(){var n=this,t=arguments;return new Promise((function(e,o){var i=r.apply(n,t);function a(r){v(i,e,o,a,c,"next",r)}function c(r){v(i,e,o,a,c,"throw",r)}a(void 0)}))}}A.styleTagTransform=f(),A.setAttributes=u(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=l(),n()(d.Z,A),d.Z&&d.Z.locals&&d.Z.locals,t.p,t.p;var g=function(){var r="3edcd2b2225748b2a0c84115230304",n="bdc_d421cee4e72e4bba8e17ae387919f89e";function t(){return t=y(m().mark((function n(t){var o,a,c,u,s,l,p;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=".concat(r,"&q=").concat(t),{mode:"cors"});case 3:return o=n.sent,n.next=6,o.json();case 6:return a=n.sent,n.next=9,i(a);case 9:return c=n.sent,n.abrupt("return",c);case 13:return n.prev=13,n.t0=n.catch(0),console.log(n.t0.message),n.next=18,e();case 18:return u=n.sent,n.next=21,fetch("https://api.weatherapi.com/v1/current.json?key=".concat(r,"&q=").concat(u),{mode:"cors"});case 21:return s=n.sent,n.next=24,s.json();case 24:return l=n.sent,n.next=27,i(l);case 27:return p=n.sent,n.abrupt("return",p);case 29:case"end":return n.stop()}}),n,null,[[0,13]])}))),t.apply(this,arguments)}function e(){return o.apply(this,arguments)}function o(){return(o=y(m().mark((function r(){var t,e;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://api.bigdatacloud.net/data/ip-geolocation?key=".concat(n),{mode:"cors"});case 3:return t=r.sent,r.next=6,t.json();case 6:return e=r.sent,r.abrupt("return",e.location.city);case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function i(r){var n=JSON.stringify({city:r.location.name,country:r.location.country,temp_c:r.current.temp_c,temp_f:r.current.temp_f,feelslike_c:r.current.feelslike_c,feelslike_f:r.current.feelslike_f,condition:r.current.condition.text,icon:r.current.condition.icon,wind_kph:r.current.wind_kph,wind_mph:r.current.wind_mph});return JSON.parse(n)}return{getWeather:function(r){return t.apply(this,arguments)}}}(),b=(document.querySelector(".container"),document.querySelector(".city")),x=document.querySelector(".icon"),C=document.querySelector(".temp"),w=document.querySelector(".country"),B=document.getElementById("submit"),I=document.getElementById("input-city");function E(r){g.getWeather(r).then((function(r){w.textContent=r.country+",",b.textContent=r.city+":",x.src=r.icon,x.title=r.condition,C.textContent=r.temp_c+"°C",console.log(r.city)}))}B.addEventListener("click",(function(){E(I.value),console.log(I.value)})),E()})()})();
//# sourceMappingURL=mainfb5cd7b980d3624cdd39.js.map