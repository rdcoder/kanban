webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),u=n(29),i=r(u),c=n(161),l=r(c);i["default"].render(a["default"].createElement(l["default"],null),document.getElementById("app"))},161:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(162),s=r(f),d=n(164),p=r(d),v=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.addNote=function(){n.setState({notes:n.state.notes.concat([{id:s["default"].v4(),task:"New task"}])})},n.deleteNote=function(e,t){t.stopPropagation(),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.activateNoteEdit=function(e){n.setState({notes:n.state.notes.map(function(t){return t.id===e&&(t.editing=!0),t})})},n.editNote=function(e,t){n.setState({notes:n.state.notes.map(function(n){return n.id===e&&(n.editing=!1,n.task=t),n})})},n.state={notes:[{id:s["default"].v4(),task:"Learn React"},{id:s["default"].v4(),task:"Do laundry"}]},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state.notes;return l["default"].createElement("div",null,l["default"].createElement("button",{onClick:this.addNote},"+"),l["default"].createElement(p["default"],{notes:e,onNoteClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))}}]),t}(l["default"].Component);t["default"]=v},162:function(e,t,n){function r(e,t,n){var r=t&&n||0,o=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){o<16&&(t[r+o++]=l[e])});o<16;)t[r+o++]=0;return t}function o(e,t){var n=t||0,r=c;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function a(e,t,n){var r=t&&n||0,a=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:p,i=void 0!==e.msecs?e.msecs:(new Date).getTime(),c=void 0!==e.nsecs?e.nsecs:y+1,l=i-v+(c-y)/1e4;if(l<0&&void 0===e.clockseq&&(u=u+1&16383),(l<0||i>v)&&void 0===e.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=i,y=c,p=u,i+=122192928e5;var f=(1e4*(268435455&i)+c)%4294967296;a[r++]=f>>>24&255,a[r++]=f>>>16&255,a[r++]=f>>>8&255,a[r++]=255&f;var s=i/4294967296*1e4&268435455;a[r++]=s>>>8&255,a[r++]=255&s,a[r++]=s>>>24&15|16,a[r++]=s>>>16&255,a[r++]=u>>>8|128,a[r++]=255&u;for(var b=e.node||d,h=0;h<6;h++)a[r+h]=b[h];return t?t:o(a)}function u(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;u++)t[r+u]=a[u];return t||o(a)}for(var i=n(163),c=[],l={},f=0;f<256;f++)c[f]=(f+256).toString(16).substr(1),l[c[f]]=f;var s=i(),d=[1|s[0],s[1],s[2],s[3],s[4],s[5]],p=16383&(s[6]<<8|s[7]),v=0,y=0,b=u;b.v1=a,b.v4=u,b.parse=r,b.unparse=o,e.exports=b},163:function(e,t){(function(t){var n;if(t.crypto&&crypto.getRandomValues){var r=new Uint8Array(16);n=function(){return crypto.getRandomValues(r),r}}if(!n){var o=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}e.exports=n}).call(t,function(){return this}())},164:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),u=n(165),i=r(u),c=n(166),l=r(c);t["default"]=function(e){var t=e.notes,n=e.onNoteClick,r=void 0===n?function(){}:n,o=e.onEdit,u=void 0===o?function(){}:o,c=e.onDelete,f=void 0===c?function(){}:c;return a["default"].createElement("ul",null,t.map(function(e){var t=e.id,n=e.editing,o=e.task;return a["default"].createElement("li",{key:t},a["default"].createElement(i["default"],{onClick:r.bind(null,t)},a["default"].createElement(l["default"],{editing:n,value:o,onEdit:u.bind(null,t)}),a["default"].createElement("button",{onClick:f.bind(null,t)},"x")))}))}},165:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=r(a);t["default"]=function(e){var t=e.children,n=o(e,["children"]);return u["default"].createElement("div",n,t)}},166:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(1),s=r(f);t["default"]=function(e){var t=e.editing,n=e.value,r=e.onEdit,o=i(e,["editing","value","onEdit"]);return t?s["default"].createElement(d,l({value:n,onEdit:r},o)):s["default"].createElement("span",o,n)};var d=function(e){function t(){var e,n,r,u;o(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&r.props.onEdit(t)},u=n,a(r,u)}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=i(e,["value"]);return s["default"].createElement("input",l({type:"text",autoFocus:!0,defaultValue:t,onBlur:this.finishEdit,onKeyPress:this.checkEnter},n))}}]),t}(s["default"].Component)}});
//# sourceMappingURL=app.20dbb8abd0a40d9e651b.js.map