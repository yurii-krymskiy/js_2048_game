parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,o){return r(t)||e(t,o)||c(t,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return e}}function r(t){if(Array.isArray(t))return t}function o(t){return u(t)||i(t)||c(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,n){if(t){if("string"==typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return s(t)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var f,l=document.querySelector("button"),d=document.querySelector(".message-start"),m=document.querySelector(".message-win"),h=document.querySelector(".message-lose"),y=document.querySelector(".game-score"),v=document.querySelectorAll(".field-row"),b=4,p=0,w=!1,A=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function S(t){f=o(A);switch(t.key){case"ArrowLeft":j(f);break;case"ArrowRight":q(f);break;case"ArrowDown":I(f);break;case"ArrowUp":C(f);break;default:return}for(var n=0;n<b;n++)for(var e=0;e<b;e++)f[n][e]!==A[n][e]&&(A=f,g(),k());w&&m.classList.remove("hidden"),O()||(h.classList.remove("hidden"),document.removeEventListener("keydown",S))}function E(){p=0,A=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h.classList.contains("hidden")||h.classList.add("hidden"),m.classList.contains("hidden")||m.classList.add("hidden")}function g(){var n=t(L(),2),e=n[0],r=n[1];A[e][r]=Math.random()<.9?2:4}function L(){var t=[];return A.forEach(function(n,e){n.forEach(function(n,r){0===n&&t.push([e,r])})}),t[Math.floor(Math.random()*t.length)]}function k(){A.forEach(function(t,n){t.forEach(function(t,e){var r=v[n].children[e];0===t?(r.textContent="",r.className="field-cell"):(r.textContent=t,r.className="field-cell field-cell--".concat(t))})}),y.textContent=p}function j(){T()&&(f=f.map(function(t){var n=t.filter(function(t){return 0!==t});return n.forEach(function(t,e){t===n[e+1]&&(n[e]*=2,n.splice(e+1,1),p+=n[e],2048===n[e]&&(w=!0))}),n.concat(Array(b-n.length).fill(0))}))}function q(){T()&&(x(),j(),x())}function x(){f.forEach(function(t){return t.reverse()})}function I(){M(),q(),M()}function C(){M(),j(),M()}function M(){f=f[0].map(function(t,n){return f.map(function(t){return t[n]})})}function O(){return!!T()||(M(),N())}function T(){var t=!1;return f.forEach(function(n){n.some(function(t,e){return 0===t||t===n[e+1]})&&(t=!0)}),t}function N(){var t=!1;return f.forEach(function(n){n.forEach(function(e,r){e===n[r+1]&&(t=!0)})}),t}l.addEventListener("click",function(t){document.addEventListener("keydown",S),l.classList.contains("start")?(l.classList.replace("start","restart"),l.innerText="Restart",d.classList.add("hidden")):(w=!1,E()),g(),g(),k()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.71476891.js.map