(window["webpackJsonpevaluations-react-table-crud"]=window["webpackJsonpevaluations-react-table-crud"]||[]).push([[0],{43:function(e,t,r){e.exports=r(60)},48:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var n,a,o,c,i,l,s,u=r(12),h=r(0),d=r.n(h),f=r(36),m=r.n(f),p=r(18),v=r(5),b=(r(48),r(7)),g=(n={},Object(b.a)(n,"save","save-btn"),Object(b.a)(n,"delete","delete-btn"),Object(b.a)(n,"reset","reset-btn"),n),y=(a={},Object(b.a)(a,"save","Save"),Object(b.a)(a,"delete","Delete"),Object(b.a)(a,"reset","Reset Users"),a),E=function(e){var t=e.onClick,r=e.label,n=e.isDisabled,a=e.type,o=e.customCls,c=g[a]||"",i=r||y[a];return d.a.createElement("button",{onClick:t,disabled:n,className:"btn ".concat(c," ").concat(o)},i)},j=(r(49),function(e){var t=e.headerTitle,r=e.headerBtnProps,n=e.pageHeaderCls,a=void 0===n?"":n;return d.a.createElement("div",{className:"page-header ".concat(a)},d.a.createElement("h1",null,t),d.a.createElement(E,r))}),O=(r(50),function(e){var t=e.children,r=e.pageTitle,n=e.pageHeaderButtonProps,a=e.pageHeaderCls;return d.a.createElement("div",{className:"main-page-container"},d.a.createElement(j,{headerTitle:r,headerBtnProps:n,pageHeaderCls:a}),t)}),w=r(37),U=r(42),x=(r(51),["width"]),N=function(e){var t=e.width,r=void 0===t?"100px":t,n=Object(U.a)(e,x);return d.a.createElement("span",{className:"loader",style:Object(w.a)({width:r,height:r},n)})},L=(r(52),function(){}),S=function(e){var t=e.email,r=e.name,n=e.role,a=e.showCheckbox,o=void 0===a||a,c=e.rowCls,i=void 0===c?"":c,l=e.isSelected,s=e.onClick,u=l?"selected":"",h="../details?user=".concat(t);return d.a.createElement("div",{className:"users-table-row ".concat(u," ").concat(i),onClick:s},d.a.createElement("div",{className:"user-table-row-checkbox"},o&&d.a.createElement("input",{type:"checkbox",checked:l,onChange:L})),d.a.createElement("div",{className:"user-table-row-value user-id-container"},d.a.createElement("p",{className:"user-email-value"},o?d.a.createElement(p.b,{to:h},t):t),d.a.createElement("p",{className:"user-name-value-mobile"},r)),d.a.createElement("p",{className:"user-table-row-value user-name-value"},r),d.a.createElement("p",{className:"user-table-row-value user-role-value"},n))},k=function(){return d.a.createElement(S,{showCheckbox:!1,email:"EMAIL",name:"NAME",role:"ROLE",rowCls:"users-table-labels"})},C=function(e){var t=e.checkIfUserIsSelected,r=e.handleSelectUser,n=e.resetUsers,a=e.usersAreLoading,o=e.users,c=void 0===o?[]:o;return d.a.createElement(d.a.Fragment,null,a&&d.a.createElement(N,null),d.a.createElement(k,null),c.map((function(e){var n=t(e.email);return d.a.createElement(S,Object.assign({},e,{isSelected:n,onClick:function(){return r(e.email)},key:e.email}))})),!a&&d.a.createElement(E,{onClick:n,type:"reset"}))},A=r(8),I=r(6),R=r(16),P=r(21),_=r(35),D=Object(_.a)(o||(o=Object(P.a)(["\n  mutation updateUser($email: ID!, $newAttributes: UserAttributesInput!) {\n    updateUser(email: $email, newAttributes: $newAttributes) {\n      email\n      name\n      role\n    }\n  }\n"]))),T=Object(_.a)(c||(c=Object(P.a)(["\n  mutation deleteUsers($emails: [ID]!) {\n    deleteUsers(emails: $emails)\n  }\n"]))),G=Object(_.a)(i||(i=Object(P.a)(["\n  mutation resetUsers {\n    resetUsers\n  }\n"]))),M=Object(_.a)(l||(l=Object(P.a)(["\n  query getAllUsers {\n    allUsers {\n      email\n      name\n      role\n    }\n  }\n"]))),F=Object(_.a)(s||(s=Object(P.a)(["\n  query getUser($email: ID!) {\n    user(email: $email) {\n      name\n      role\n      email\n    }\n  }\n"]))),$=r(14),H=function(){var e=Object(h.useState)([]),t=Object(I.a)(e,2),r=t[0],n=t[1],a=function(e){return r.includes(e)};return{selectedUsers:r,handleSelectUser:function(e){var t=[];t=a(e)?r.filter((function(t){return t!==e})):[].concat(Object($.a)(r),[e]),n(t)},checkIfUserIsSelected:a,clearSelectedUsers:function(){return n([])}}};function q(){q=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),c=new w(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var u={};function h(){}function d(){}function f(){}var m={};i(m,a,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(U([])));v&&v!==t&&r.call(v,a)&&(m=v);var b=f.prototype=h.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function U(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=f,i(b,"constructor",f),i(f,"constructor",d),d.displayName=i(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(y.prototype),i(y.prototype,o,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new y(l(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},g(b),i(b,c,"Generator"),i(b,a,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=U,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:U(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var B,z=Object(h.createContext)(null),J=function(e){var t=e.children,r=Object(h.useState)(!0),n=Object(I.a)(r,2),a=n[0],o=n[1],c=Object(h.useState)([]),i=Object(I.a)(c,2),l=i[0],s=i[1],u=H(),f=u.selectedUsers,m=u.handleSelectUser,p=u.checkIfUserIsSelected,v=u.clearSelectedUsers,b=Object(R.b)(M,{onCompleted:function(e){var t=e.allUsers;s(t),o(!1)},fetchPolicy:"network-only"}).refetch,g=Object(R.a)(T,{variables:{emails:f},onCompleted:function(){O(),v(),o(!1)}}),y=Object(I.a)(g,1)[0],E=Object(R.a)(G,{onCompleted:function(){var e=Object(A.a)(q().mark((function e(){var t,r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r=t.data,s(null===r||void 0===r?void 0:r.allUsers),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),j=Object(I.a)(E,1)[0],O=function(){var e=l.filter((function(e){return!p(e.email)}));s(e)};return d.a.createElement(z.Provider,{value:{selectedUsers:f,users:l,usersAreLoading:a,handleSelectUser:m,checkIfUserIsSelected:p,deleteUsers:function(){o(!0),y()},resetUsers:function(){o(!0),j()}}},t)},K=(r(56),function(){var e=Object(h.useContext)(z),t=e.selectedUsers,r=e.checkIfUserIsSelected,n=e.handleSelectUser,a=e.deleteUsers,o=e.resetUsers,c=e.users,i=e.usersAreLoading,l={onClick:a,isDisabled:!t.length||i,type:"delete"};return d.a.createElement(O,{pageTitle:"Users",pageHeaderButtonProps:l},d.a.createElement(C,{resetUsers:o,handleSelectUser:n,selectedUsers:t,usersAreLoading:i,users:c,checkIfUserIsSelected:r}))}),V=function(){return d.a.createElement(J,null,d.a.createElement(K,null))},Y=function(e){var t=e.userName,r=e.handleUserNameChange;return d.a.createElement("div",{className:"user-name-input-container"},d.a.createElement("label",{htmlFor:"userName"},"Name"),d.a.createElement("input",{id:"userName",placeholder:"Type in user full name",value:t,onChange:r}))},Q=function(e){var t=Object(p.c)();return Object(I.a)(t,1)[0].get(e)},W=Object(h.createContext)(null),X=function(e){var t=e.children,r=Q("user"),n=Object(h.useState)(!1),a=Object(I.a)(n,2),o=a[0],c=a[1],i=Object(h.useState)(""),l=Object(I.a)(i,2),s=l[0],u=l[1],f=Object(h.useState)(""),m=Object(I.a)(f,2),p=m[0],v=m[1],b=Object(h.useState)(!0),g=Object(I.a)(b,2),y=g[0],E=g[1],j=Object(h.useState)(""),O=Object(I.a)(j,2),w=O[0],U=O[1],x=Object(h.useState)(""),N=Object(I.a)(x,2),L=N[0],S=N[1];Object(R.b)(F,{variables:{email:r},onCompleted:function(e){var t=e.user;E(!1),U(t.name),u(t.name),S(t.role),v(t.role)}});var k=Object(R.a)(D,{variables:{email:r,newAttributes:{name:w,role:L}},onCompleted:function(){return E(!1)}}),C=Object(I.a)(k,1)[0];return Object(h.useEffect)((function(){c(s!==w||p!==L)}),[s,p,w,L]),d.a.createElement(W.Provider,{value:{userEmail:r,userRole:L,userName:w,formIsDirty:o,userDetailsAreLoading:y,handleUpdateUser:function(){E(!0),C()},handleUserNameChange:function(e){var t=e.target;return U(t.value||"")},handleUserRoleChange:function(e){var t=e.target;return S(t.value||"")}}},t)},Z=["ADMIN","DEVELOPER","APP_MANAGER","MARKETING","SALES"],ee=(B={},Object(b.a)(B,"ADMIN","Admin"),Object(b.a)(B,"DEVELOPER","Developer"),Object(b.a)(B,"APP_MANAGER","App Manager"),Object(b.a)(B,"MARKETING","Marketing"),Object(b.a)(B,"SALES","Sales"),B),te=(r(57),function(e){var t=e.userRole,r=e.isSelected,n=ee[t];return d.a.createElement("div",{className:"user-role-option"},d.a.createElement("input",{type:"radio",id:t,value:t,name:"userRoles",defaultChecked:r,key:t}),d.a.createElement("label",{htmlFor:t},n))}),re=function(e){var t=e.activeRole,r=e.handleRoleChange;return d.a.createElement("div",{className:"user-roles-radio-group"},d.a.createElement("label",{htmlFor:"userRoles"},"Role"),d.a.createElement("fieldset",{id:"userRoles",onChange:r},Z.map((function(e){var r=e===t;return d.a.createElement(te,{userRole:e,key:e,isSelected:r})}))))},ne=(r(58),function(){var e=Object(h.useContext)(W),t=e.userEmail,r=e.userRole,n=e.userName,a=e.formIsDirty,o=e.userDetailsAreLoading,c=e.handleUpdateUser,i=e.handleUserNameChange,l=e.handleUserRoleChange,s={onClick:c,isDisabled:o||!n||!a,type:"save"};return d.a.createElement(O,{pageTitle:t,pageHeaderButtonProps:s,pageHeaderCls:"details-page-header"},o?d.a.createElement(N,null):d.a.createElement("div",{className:"details-page-body"},d.a.createElement(Y,{userName:n,handleUserNameChange:i}),d.a.createElement(re,{activeRole:r,handleRoleChange:l})))}),ae=function(){return d.a.createElement(X,null,d.a.createElement(ne,null))},oe=function(){return Object(v.o)([{path:"/",children:[{path:"/",element:d.a.createElement(v.a,{to:"main"})},{path:"main",element:d.a.createElement(V,null)},{path:"details",element:d.a.createElement(ae,null)}]}])},ce=r(29),ie="https://dn6jtahorvekvabij3ziq3rsk4.appsync-api.us-east-1.amazonaws.com/graphql",le="da2-jfxhcmqg6jhgjjzdca2w2d5o7m",se=new ce.a({uri:ie,request:function(e){e.setContext({headers:{"x-api-key":le}})}}),ue=(r(59),function(){return d.a.createElement(u.a,{client:se},d.a.createElement(p.a,null,d.a.createElement(oe,null)))});m.a.render(d.a.createElement(ue,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.2c29e79a.chunk.js.map