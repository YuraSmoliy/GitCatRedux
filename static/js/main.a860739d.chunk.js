(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={elementsContainer:"Presentation_elementsContainer__3LSuh",elementsLine:"Presentation_elementsLine__3dtDB",element:"Presentation_element__3vz8u",header:"Presentation_header__1NB4g",title:"Presentation_title__nmszp",overview:"Presentation_overview__1LCsU"}},11:function(e,t,n){e.exports={sidemenu:"SideMenu_sidemenu__4HjcK",menuItem:"SideMenu_menuItem__3W_F1",menuItemActove:"SideMenu_menuItemActove__1Aq3r",logoContainer:"SideMenu_logoContainer__C_EuL",logo:"SideMenu_logo__2Q4hK",userShortInfo:"SideMenu_userShortInfo__1LrOi",category:"SideMenu_category__MPho0",navigationContainer:"SideMenu_navigationContainer__3Kc_5"}},14:function(e,t,n){e.exports={body:"List_body__m92Jz",listContainer:"List_listContainer__1owXi",elementsLine:"List_elementsLine__q0uaq",tableHeader:"List_tableHeader__IFci4"}},15:function(e,t,n){e.exports={userInfoContainer:"UserInfo_userInfoContainer__1VvXF",avatarUrl:"UserInfo_avatarUrl__2BCgR",userInfo:"UserInfo_userInfo__2N0I3",accountDetails:"UserInfo_accountDetails__OZ045"}},17:function(e,t,n){e.exports={app:"App_app__V2P2T",mainSection:"App_mainSection__10fKU",appContent:"App_appContent__Ks681"}},21:function(e,t,n){e.exports={loaderContainer:"LoadingView_loaderContainer__1sSo9",loader:"LoadingView_loader__3TDFi",spin:"LoadingView_spin__3odox"}},26:function(e,t,n){e.exports=n.p+"static/media/github-logo.53011edb.png"},28:function(e,t,n){e.exports=n(52)},36:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(23),i=n.n(o),c=(n(36),n(5)),u=n(6),l=n(3),s=n(9);function f(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){p=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var s={};function f(){}function h(){}function m(){}var v={};c(v,a,function(){return this});var d=Object.getPrototypeOf,y=d&&d(d(x([])));y&&y!==t&&n.call(y,a)&&(v=y);var g=m.prototype=f.prototype=Object.create(v);function _(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,c(g,"constructor",m),c(m,"constructor",h),h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},_(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},_(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var m=function(){var e=Object(s.a)(p().mark(function e(t){var n;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t)).then(function(e){return e.json()}).catch(function(){});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(p().mark(function e(t){var n;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then(function(e){return e.json()}).catch(function(){});case 2:return n=e.sent,console.log(t),console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(p().mark(function e(t){var n,r,a,o,i;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos")).then(function(e){return e.json()});case 2:n=e.sent,r=[],a=f(n);try{for(a.s();!(o=a.n()).done;)i=o.value,r.push({owner:i.owner.login,name:i.name,forks:i.forks,private:i.private,description:i.description})}catch(c){a.e(c)}finally{a.f()}return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(p().mark(function e(t){var n,r,a,o,i;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/followers")).then(function(e){return e.json()});case 2:n=e.sent,r=[],a=f(n);try{for(a.s();!(o=a.n()).done;)i=o.value,r.push({id:i.id,name:i.login,detail:i.url,type:i.type})}catch(c){a.e(c)}finally{a.f()}return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(p().mark(function e(t){var n,r,a,o,i;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/subscriptions")).then(function(e){return e.json()});case 2:n=e.sent,r=[],a=f(n);try{for(a.s();!(o=a.n()).done;)i=o.value,r.push({name:i.name,private:i.private,description:i.description,html_url:i.html_url})}catch(c){a.e(c)}finally{a.f()}return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=n(10),b=n.n(_),E=function(e){return a.a.createElement("div",null,a.a.createElement("input",{value:e.value,type:"text",placeholder:"search value by name",onChange:function(t){e.search(t.target.value)}}))},w=n(14),O=n.n(w),j=function(e){return a.a.createElement("div",{className:O.a.listContainer},a.a.createElement("div",{className:[O.a.elementsLine,O.a.tableHeader].join(" ")},e.header),a.a.createElement("div",{className:O.a.body},e.elements))};function x(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=0,N=function(e){var t=a.a.useCallback(e.headers.map(function(e){return a.a.createElement("div",{key:e,className:b.a.element},e)},[])),n=[];if(e.elements){var r,o=x(e.elements);try{for(o.s();!(r=o.n()).done;){var i,c=r.value,u=[],l=x(e.headers);try{for(l.s();!(i=l.n()).done;){var s=i.value;u.push(a.a.createElement("div",{key:""+ ++L+c[s],className:b.a.element},String(c[s])))}}catch(p){l.e(p)}finally{l.f()}var f="";for(var h in c)f+=c[h];n.push(a.a.createElement("div",{key:f,className:b.a.elementsLine},u))}}catch(p){o.e(p)}finally{o.f()}}return a.a.createElement("div",{className:b.a.elementsContainer},a.a.createElement("div",{className:b.a.header},a.a.createElement("div",null,a.a.createElement("div",{className:b.a.title},e.section),a.a.createElement("div",{className:b.a.overview},"Overview of GitHub")),a.a.createElement("div",{className:b.a.filter},a.a.createElement(E,{value:e.serValue,search:e.setSearchData}))),a.a.createElement(j,{header:t,elements:n}))},I=n(21),C=n.n(I),k=function(e){return a.a.createElement("div",{className:C.a.loaderContainer},a.a.createElement("div",{className:C.a.loader}))},U=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],f=u[1],h=Object(r.useState)(null),p=Object(l.a)(h,2),m=p[0],v=p[1],d=function(e){v(o.filter(function(t){if(t.name&&t.name.startsWith(e))return t}))};return Object(r.useEffect)(function(){i(e.repositories)},[e.repositories]),a.a.createElement(a.a.Fragment,null,o?a.a.createElement(N,{elements:m||o,headers:["owner","name","description","forks","private"],serchValue:s,setSearchData:function(e){f(e),d(e)},section:"Repositories:"}):a.a.createElement(k,null))},F=Object(c.b)(Object(u.b)(function(e){return{repositories:e.repositories.repositories}},function(e){return{}}))(U),A=n(0),R=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],f=u[1],h=Object(r.useState)(null),p=Object(l.a)(h,2),m=p[0],v=p[1],d=function(e){v(o.filter(function(t){if(t.name&&t.name.startsWith(e))return t}))};return Object(r.useEffect)(function(){e.setUserSubscription(),i(e.subscriptions)},[e.subscriptions]),a.a.createElement(a.a.Fragment,null,o?a.a.createElement(N,{elements:m||o,headers:["name","description","html_url","private"],serchValue:s,setSearchData:function(e){f(e),d(e)},section:"Subscriptions:"}):a.a.createElement(k,null))},P=n(12),T={user_info:{login:null,company:null,avatar_url:null,email:null,blog:null,repos_url:null,events_url:null}},G={repositories:[]},M={followers:[]},H={subscription:[]},D={events:[]};function V(){V=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new O(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};c(m,a,function(){return this});var v=Object.getPrototypeOf,d=v&&v(v(j([])));d&&d!==t&&n.call(d,a)&&(m=d);var y=p.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function _(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var u=l(e[a],e,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(_.prototype),c(_.prototype,o,function(){return this}),e.AsyncIterator=_,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new _(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var B=function(){var e=Object(s.a)(V().mark(function e(t){var n,r;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("mojombo");case 2:n=e.sent,r={login:n.login,email:n.email,company:n.company,avatar_url:n.avatar_url,repos_url:n.repos_url,blog:n.blog,events_url:n.events_url},t({type:"USER_INFO",payload:r});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(V().mark(function e(t){var n;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("mojombo");case 2:n=e.sent,t({type:"USER_FOLLOWERS",payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(s.a)(V().mark(function e(t){var n;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("mojombo");case 2:n=e.sent,t({type:"USER_SUBSCRIPTION",payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(V().mark(function e(t){var n;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("mojombo");case 2:n=e.sent,t({type:"USER_REPOSITORIES",payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(V().mark(function e(t,n){var r;return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:r=e.sent,t({type:"USER_EVENTS",payload:r});case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),q=Object(c.b)(Object(u.b)(function(e){return{subscriptions:e.subscription.subscription}},function(e){return{setUserSubscription:function(){K(e)}}}))(R),J=n(17),Q=n.n(J),X=n(15),$=n.n(X),Z=Object(r.memo)(function(e){var t=e.login||null;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement("div",{className:$.a.userInfoContainer},a.a.createElement("div",{className:$.a.avatarUrl},a.a.createElement("img",{src:e.avatar_url,alt:""})),a.a.createElement("div",{className:$.a.userInfo},a.a.createElement("div",null,e.login),a.a.createElement("div",{className:$.a.accountDetails},"ACCOUNT DETAILS: "),a.a.createElement("div",null,"email: ",e.email?e.email:"an email wasn't added"),a.a.createElement("div",null,"repos: ",e.repos_url),a.a.createElement("div",null,"company: ",e.company),a.a.createElement("div",null,"blog: ",e.blog))):a.a.createElement(k,null))}),ee=Object(c.b)(Object(u.b)(function(e){return{login:e.userInfo.user_info.login,company:e.userInfo.user_info.company,email:e.userInfo.user_info.email,avatar_url:e.userInfo.user_info.avatar_url,blog:e.userInfo.user_info.blog,repos_url:e.userInfo.user_info.repos_url}},function(e){return{}}))(Z),te=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],f=u[1],h=Object(r.useState)(null),p=Object(l.a)(h,2),m=p[0],v=p[1],d=function(e){v(o.filter(function(t){if(t.name&&t.name.startsWith(e))return t}))};return Object(r.useEffect)(function(){i(e.followers)},[e.followers]),a.a.createElement(a.a.Fragment,null,o?a.a.createElement(N,{elements:m||o,headers:["id","name","detail","type"],serchValue:s,setSearchData:function(e){f(e),d(e)},section:"Followers:"}):a.a.createElement(k,null))},ne=Object(c.b)(Object(u.b)(function(e){return{followers:e.followers.followers}},function(e){return{}}))(te),re=n(11),ae=n.n(re),oe=n(13),ie=n(27),ce=n(16),ue=function(e){e.setUserInfo(),Object(r.useEffect)(function(){},[e]);var t="/users/".concat(e.login,"/reposlist"),n="/users/".concat(e.login,"/followers"),o="/users/".concat(e.login,"/subscription"),i="/users/".concat(e.login,"/"),c=function(e,t,n){return a.a.createElement(oe.b,{to:e,className:function(e){return e.isActive?[ae.a.menuItemActove]:ae.a.menuItem}},a.a.createElement(ie.a,{icon:t}),a.a.createElement("div",{className:ae.a.category},n))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:ae.a.sidemenu},a.a.createElement("div",{className:ae.a.logoContainer},a.a.createElement("img",{src:e.avatar_url,alt:"",className:ae.a.logo})),a.a.createElement("div",{className:ae.a.userShortInfo},a.a.createElement("div",null,e.login),a.a.createElement("div",null,e.email?e.email:"An email wasn't added")),a.a.createElement("div",{className:ae.a.navigationContainer},c(t,ce.a,"REPOSITORIES"),c(n,ce.d,"FOLLOWERS"),c(o,ce.b,"SUBSCRIPTION"),c(i,ce.c,"ABOUT"))))},le=Object(c.b)(Object(u.b)(function(e){return{login:e.userInfo.user_info.login,company:e.userInfo.user_info.company,email:e.userInfo.user_info.email,avatar_url:e.userInfo.user_info.avatar_url,blog:e.userInfo.user_info.blog,repos_url:e.userInfo.user_info.repos_url}},function(e){return{setUserInfo:function(){B(e)}}}))(ue),se=n(7),fe=n.n(se),he=n(26),pe=n.n(he),me=Object(r.memo)(function(e){var t=Object(r.useState)(0),n=Object(l.a)(t,2),o=(n[0],n[1]);return Object(r.useEffect)(function(){e.setUserEvents(e.events_url),e.setUserFollowers(),e.setUserRepos(),o(e.events)},[e.events_url]),a.a.createElement("div",{className:fe.a.header},a.a.createElement("div",{className:fe.a.welcome},"Welcome to",a.a.createElement("p",null,"GitCat"),a.a.createElement("img",{src:pe.a,alt:"github img"})),a.a.createElement("div",{className:fe.a.data},a.a.createElement("div",{className:fe.a.dataContainer},a.a.createElement("div",{className:fe.a.dataLine},a.a.createElement("div",{className:fe.a.key},"Received events"),a.a.createElement("div",{className:fe.a.value},e.events)),a.a.createElement("div",{className:fe.a.dataLine},a.a.createElement("div",{className:fe.a.key},"Followers"),a.a.createElement("div",{className:fe.a.value},e.followers)),a.a.createElement("div",{className:fe.a.dataLine},a.a.createElement("div",{className:fe.a.key},"Repos"),a.a.createElement("div",{className:fe.a.value},e.repos)))))}),ve=Object(c.b)(Object(u.b)(function(e){return console.log(e.userInfo.user_info.events_url),{events:e.events.events?e.events.events.length:null,followers:e.followers.followers?e.followers.followers.length:null,repos:e.repositories.repositories?e.repositories.repositories.length:null,events_url:e.userInfo.user_info.events_url?e.userInfo.user_info.events_url.split("{")[0]:null}},function(e){return{setUserEvents:function(t){Y(e,t)},setUserFollowers:function(){W(e)},setUserRepos:function(){z(e)}}}))(me);var de=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:Q.a.app},a.a.createElement(le,null),a.a.createElement("div",{className:Q.a.mainSection},a.a.createElement(ve,null),a.a.createElement("div",{className:Q.a.appContent},a.a.createElement(A.c,null,a.a.createElement(A.a,{exact:!0,path:"/",element:a.a.createElement(F,null)}),a.a.createElement(A.a,{exact:!0,path:"/users/:accountName/reposlist",element:a.a.createElement(F,null)}),a.a.createElement(A.a,{exact:!0,path:"/users/:accountName/followers",element:a.a.createElement(ne,null)}),a.a.createElement(A.a,{exact:!0,path:"/users/:accountName/subscription",element:a.a.createElement(q,null)}),a.a.createElement(A.a,{exact:!0,path:"/users/:accountName",element:a.a.createElement(ee,null)}))))))},ye=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,53)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})},ge=Object(c.a)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INFO":return Object(P.a)({},e,{user_info:t.payload});default:return e}},repositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_REPOSITORIES":return Object(P.a)({},e,{repositories:t.payload});default:return e}},followers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_FOLLOWERS":return Object(P.a)({},e,{followers:t.payload});default:return e}},subscription:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SUBSCRIPTION":return Object(P.a)({},e,{subscription:t.payload});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_EVENTS":return Object(P.a)({},e,{events:t.payload});default:return e}}}),_e=Object(c.c)(ge);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(oe.a,null,a.a.createElement(u.a,{store:_e},a.a.createElement(de,null))))),ye()},7:function(e,t,n){e.exports={header:"Header_header__3ACSQ",welcome:"Header_welcome__1odOE",data:"Header_data__3eoci",dataContainer:"Header_dataContainer__TANhQ",dataLine:"Header_dataLine__3683C",key:"Header_key__Mg2id",value:"Header_value__ItzoE"}}},[[28,3,2]]]);
//# sourceMappingURL=main.a860739d.chunk.js.map