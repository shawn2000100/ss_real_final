(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{410:function(t,n,e){"use strict";e.r(n),e.d(n,"amplify_nav",(function(){return p})),e.d(n,"amplify_sign_out",(function(){return h}));var r=e(62),o=e(11),u=e(27),i=e(9),a=e(19),c=e(47),s=e(79),l=function(t,n,e,r){return new(e||(e=Promise))((function(o,u){function i(t){try{c(r.next(t))}catch(t){u(t)}}function a(t){try{c(r.throw(t))}catch(t){u(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,a)}c((r=r.apply(t,n||[])).next())}))},f=function(t,n){var e,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(t,i)}catch(t){u=[6,t],r=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},p=function(){function t(t){Object(r.g)(this,t)}return t.prototype.render=function(){return Object(r.f)("nav",{class:"nav"},Object(r.f)("slot",null))},t}();p.style=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";var h=function(){function t(t){Object(r.g)(this,t),this.handleAuthStateChange=s.d,this.buttonText=o.a.get(i.a.SIGN_OUT)}return t.prototype.signOut=function(t){return l(this,void 0,void 0,(function(){var n;return f(this,(function(e){switch(e.label){case 0:if(t&&t.preventDefault(),!c.a||"function"!=typeof c.a.signOut)throw new Error(a.d);e.label=1;case 1:return e.trys.push([1,3,,4]),[4,c.a.signOut()];case 2:return e.sent(),this.handleAuthStateChange(u.a.SignedOut),[3,4];case 3:return n=e.sent(),Object(s.a)(n),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var t=this;return Object(r.f)("amplify-button",{slot:"sign-out",onClick:function(n){return t.signOut(n)},"data-test":"sign-out-button"},this.buttonText)},t}()}}]);
//# sourceMappingURL=20.bundle.js.map