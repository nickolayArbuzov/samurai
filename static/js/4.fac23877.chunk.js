(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[4],{295:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(n,"a",(function(){return r}))},296:function(e,n,t){e.exports={paginator:"Paginator_paginator__10Dp5",pageNumber:"Paginator_pageNumber__2KOAv",selectedPage:"Paginator_selectedPage__hywpT"}},297:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===a)for(var u in r)t.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},298:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__ka57n"}},299:function(e,n,t){e.exports=t.p+"static/media/1200px-Smiley.svg.f5b65636.png"},304:function(e,n,t){"use strict";t.r(n);var r=t(48),o=t(49),a=t(51),l=t(50),u=t(52),i=t(0),s=t.n(i),c=t(128),f=t(16),p=t(84),g=t(17),h=t(295),m=t(296),v=t.n(m),d=t(297),P=t.n(d),y=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.Page,o=e.onPageChanged,a=e.portionSize,l=void 0===a?10:a,u=Math.ceil(n/t),c=[],f=1;f<=u;f++)c.push(f);var p=Math.ceil(u/l),m=Object(i.useState)(1),d=Object(h.a)(m,2),y=d[0],b=d[1],w=(y-1)*l+1,E=y*l;return s.a.createElement("div",{className:v.a.paginator},y>1&&s.a.createElement("button",{onClick:function(){b(y-1)}},"PREV"),c.filter((function(e){return e>=w&&e<=E})).map((function(e){return s.a.createElement("span",{className:P()(Object(g.a)({},v.a.selectedPage,r===e),v.a.pageNumber),key:e,onClick:function(n){o(e)}},e," ")})),p>y&&s.a.createElement("button",{onClick:function(){b(y+1)}},"NEXT"))},b=t(298),w=t.n(b),E=t(299),C=t.n(E),j=t(13),S=function(e){var n=e.user,t=e.followingInProgress,r=e.follow,o=e.unfollow;return s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement(j.b,{to:"/profile/"+n.id},s.a.createElement("img",{className:w.a.userPhoto,src:n.photos.small?n.photos.small:C.a}))),s.a.createElement("div",null,n.isFollow?s.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)}},"Unfollow"):s.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,n.name),s.a.createElement("div",null,n.status)),s.a.createElement("span",null,s.a.createElement("div",null,"u.location.country"),s.a.createElement("div",null,"u.location.city"))))},O=function(e){var n=e.Page,t=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,a=e.users,l=Object(p.a)(e,["Page","onPageChanged","totalUsersCount","pageSize","users"]);return s.a.createElement("div",null,s.a.createElement(y,{Page:n,onPageChanged:t,totalItemsCount:r,pageSize:o}),a.map((function(e){return s.a.createElement(S,{user:e,key:e.id,followingInProgress:l.followingInProgress,unfollow:l.unfollow,follow:l.follow})})))},k=t(61),_=t(6);function z(e,n){return e===n}function A(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function U(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var I=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var a=0,l=r.pop(),u=U(r),i=e.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(t)),s=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return i.apply(null,e)}));return s.resultFunc=l,s.dependencies=u,s.recomputations=function(){return a},s.resetRecomputations=function(){return a=0},s}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,t=null,r=null;return function(){return A(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var x=I((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),F=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},q=function(e){return e.usersPage.currentPage},M=function(e){return e.usersPage.isFetching},T=function(e){return e.usersPage.followingInProgress},D=function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(t=Object(a.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(u)))).onPageChanged=function(e){var n=t.props.pageSize;t.props.requestUsers(e,n)},t}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.Page,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(k.a,null):null,s.a.createElement(O,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,Page:this.props.Page,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(s.a.Component);n.default=Object(_.d)(Object(f.b)((function(e){return{users:x(e),pageSize:F(e),totalUsersCount:N(e),currentPage:q(e),isFetching:M(e),followingInProgress:T(e)}}),{follow:c.b,unfollow:c.f,setCurrentPage:c.d,toggleFollowingProgress:c.e,requestUsers:c.c}))(D)}}]);
//# sourceMappingURL=4.fac23877.chunk.js.map