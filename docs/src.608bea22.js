parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PBIn":[function(require,module,exports) {
"use strict";function t(t){var e=t.id,o=void 0===e?Date.now():e,i=t.content,s=t.complete,c=void 0!==s&&s,a=t.category,n=t.tags,r=void 0===n?[]:n;this.id=o,this.content=i,this.complete=c,this.category=a,this.tags=r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,t.prototype.updateTodo=function(t){var e=t.content,o=t.complete,i=t.category,s=t.tags;this.content=e,this.complete=o,this.category=i,this.tags=s};
},{}],"gJam":[function(require,module,exports) {
"use strict";var o=this&&this.__spreadArray||function(o,t,n){if(n||2===arguments.length)for(var e,r=0,i=t.length;r<i;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return o.concat(e||Array.prototype.slice.call(t))};function t(){this.todos=[]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,t.prototype.addTodo=function(o){return this.todos.push(o),console.log("새로운 Todo 추가 완료"),this.logger(),this.todos},t.prototype.findAllTodos=function(){return console.log("모든 Todo 출력"),this.logger(),this.todos},t.prototype.findTodoById=function(o){var t=this.todos.filter(function(t){return t.id===+o});return console.log("ID: ".concat(o,", Todo 찾기 완료")),this.logger(),t},t.prototype.updateTodoById=function(t){return this.todos=this.todos.filter(function(o){return+o.id!=+t.id}),this.todos=o(o([],this.todos,!0),[t],!1).sort(function(o,t){return+o.id-+t.id}),console.log("ID: ".concat(t.id,", Todo 수정 완료")),this.logger(),t},t.prototype.updateTagById=function(o,t){},t.prototype.removeTodoById=function(o){this.todos=this.todos.filter(function(t){return t.id!==+o}),console.log("ID: ".concat(o,", Todo 삭제 완료")),this.logger()},t.prototype.removeAllTodo=function(){this.todos=[],console.log("Todo 전체 삭제 완료"),this.logger()},t.prototype.removeAllTagByTodoId=function(o){this.todos.forEach(function(t){t.id===o&&(t.tags=[])}),console.log("ID: ".concat(o,", Tag 전체 삭제 완료")),this.logger()},t.prototype.removeTagByTodoIdAndTagId=function(o,t){this.todos.forEach(function(n){n.id===o&&(n.tags=n.tags.filter(function(o){return o.id!==t}))}),console.log("ID: ".concat(o," TagID: ").concat(t,", Tag 삭제 완료")),this.logger()},t.prototype.logger=function(){var o;(null===(o=this.todos)||void 0===o?void 0:o.length)?console.table(this.todos):console.warn("Todo가 존재하지 않습니다.")};
},{}],"B6dB":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=e(require("./Todo")),o=e(require("./Todos")),a=function(t){var e=t.id,n=t.content,o=t.category,a=t.tags,r=t.complete;return"<li data-id=".concat(e,">\n            <div>").concat(n,"</div>\n            <span>카테고리: ").concat(o,"</span>\n            <span>태그: ").concat(a.join(", "),'</span>\n            <button class="delete">삭제</button>\n            <button class="toggle">').concat(r?"완료":"미완료","</button>\n          </li>")},r=function(){var e=document.querySelector("form"),r=document.querySelector("ul"),c=document.querySelector(".remove-all"),i=new o.default,l=function(){console.log(i),r.innerHTML=i.todos.map(function(e){return a(t({},e))}).join("")};e.addEventListener("submit",function(t){t.preventDefault();var e=t.target.content.value,o=t.target.category.value,a=t.target.tags.value.split(",").map(function(t){return t.trim()}).filter(function(t){return t.length>0});i.addTodo(new n.default({content:e,category:o,tags:a})),l()}),r.addEventListener("click",function(e){var o=e.target;if(o instanceof Element){if(o.classList.contains("delete")){var a=o.parentElement.dataset.id;i.removeTodoById(a),l()}if(o.classList.contains("toggle")){a=o.parentElement.dataset.id;var r=i.findTodoById(a)[0];console.log(r),i.updateTodoById(new n.default(t(t({},r),{complete:!r.complete}))),l()}}}),c.addEventListener("click",function(){i.removeAllTodo(),l()})};window.onload=function(){r()};
},{"./Todo":"PBIn","./Todos":"gJam"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.608bea22.js.map