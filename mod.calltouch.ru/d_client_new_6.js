var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):[]}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:[]}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:[])}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
function ct_replace_whatsapp(){
   if (!!window.call_value) {ct_repl_a('a[href="https://wa.me/79054607015"],a[href="https://api.whatsapp.com/send?phone=79054607015"]','href','https://wa.me/79054607015?text=%2A%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%E2%84%96'+window.call_value+'.%2A%20%D0%9F%D1%80%D0%BE%D1%81%D1%8C%D0%B1%D0%B0%20%D0%BD%D0%B5%20%D1%83%D0%B4%D0%B0%D0%BB%D1%8F%D1%82%D1%8C%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%83%D1%8E%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%D1%83%2C%20%D0%BE%D0%BD%D0%B0%20%D0%BD%D1%83%D0%B6%D0%BD%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8F.');}
}
ct_ready(ct_replace_whatsapp);            if (window['ct'] && typeof window['ct'] === 'function') {
            window['ct']('init_matcher_replacement', {useObserver: false, params: [{"value_code":"495","value_phone":"1872885","phone_code":"903","phone_number":"4133321","selector":"body"},{"value_code":"495","value_phone":"1872885","phone_code":"499","phone_number":"1300470","selector":"body"}]});
            }
            window.calltouch_phone = "74951872885";            if (window['ct'] && typeof window['ct'] === 'function') {
            window['ct']('create_session', {
                sessionId: 186466496,
                siteId: 65610,
                modId: '6s5pkva9',
                setCookie: true,
                endSessionTime: 1739648438,
                domain: 'go-good.ru',
                setCtCookie: '2700000000115827760',
                setLkCookie: null,
                denialTime: 15,
                phones: {"381820":{"subPoolName":"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435","phoneId":"1073496","phoneNumber":"74951872885","phoneCode":"495","phoneBody":"1872885"}},
                ecommerceGa4Enabled: false,
                ecommerceTimeout: 1000,
                calltouchDnsHost: '',
                dataGoEnabled: false,
                GA4: [],
                quietMediaEnabled: false,
                fields: ''
            });
                        window['ct']('session_data', {"mod_id":"6s5pkva9","source":"(direct)","medium":"(none)","utm_source":"","utm_medium":"","utm_campaign":"","utm_content":"","utm_term":"","keyword":"(not set)","city":"krasnodar","region":"krasnodarskiy kray","country":"","url":"https:\/\/go-good.ru\/","deviceType":"desktop"});
                        } else {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", 'https://mod.calltouch.ru/set_attrs_by_get.php?siteId=65610&sessionId=186466496&attrs={"clientError_NO_CT_CREATE_SESSION": 1}', true );
            xmlHttp.send( null );
            }
            
window.ctw = {};
window.ctw.clientFormConfig = {}
window.ctw.clientFormConfig.getClientFormsSettingsUrl = "//mod.calltouch.ru/callback_widget_user_form_find.php";
window.ctw.clientFormConfig.sendClientFormsRequestUrl = "//mod.calltouch.ru/callback_request_user_form_create.php";
(function (targetWindow, nameSpace, params){
!function(){var e={9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},693:function(e,t,n){var r=n(9713);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(693),t=n.n(e);function r(e,n,r,o){try{var a=Boolean(window.event&&window.event.target&&"A"===window.event.target.nodeName),c=Boolean(window.event&&(window.event.target&&"submit"===window.event.target.type||"submit"===window.event.type)),i=function(){var e;if(e||"undefined"==typeof XMLHttpRequest)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}else e=new XMLHttpRequest;return e}(),s=n?"POST":"GET";i.open(s,e,!a&&!c&&!o),a||c||o||(i.timeout=6e4),i.setRequestHeader("Content-type","application/json"),i.onreadystatechange=function(){if(4===i.readyState&&r)if(200===i.status){var e=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t}(i.response);e?e.data?r(!0,t()({},e.data)):e.error?r(!1,t()({},e.error)):r(!1,{type:"unknown_error",message:"Unknown JSON format",details:{}}):r(!1,{type:"unknown_error",message:"JSON parse error",details:{}})}else 0===i.status?r(!1,{type:"unknown_error",message:"Request timeout exceeded or connection reset",details:{}}):r(!1,{type:"unknown_error",message:"Unexpected HTTP code: ".concat(i.statusText),details:{}})},i.send(n)}catch(e){r&&r(!1,{type:"unknown_error",message:"Unexpected js exception",details:{}})}}!function(e,t,n){var o=e||window,a=t||"ctw";o[a]||(o[a]={});var c=o[a].clientFormConfig||{},i=c.getClientFormsSettingsUrl,s=c.sendClientFormsRequestUrl;o[a].getRouteKeyData=function(e,t){var o=1e6*Math.random(),a="".concat(i,"?siteId=").concat(n.siteId,"&routeKey=").concat(e,"&pageUrl=").concat(n.pageUrl,"&sessionId=").concat(n.sessionId);r("".concat(a,"&rand=").concat(Math.floor(o)),null,t)};var u=function(e,t,o,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,d=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=1e6*Math.random(),f={siteId:n.siteId,sessionId:n.sessionId,workMode:1,pageUrl:n.pageUrl,tags:i,phone:t,routeKey:e,fields:o,scheduleTime:c,unitId:u};r("".concat(s,"?rand=").concat(Math.floor(l)),JSON.stringify(f),a,d)};o[a].createRequest=u,o[a+"_"+n.modId]={createRequest:u}}(targetWindow,nameSpace,params)}()}();
})(window, "ctw", {"siteId":65610,"sessionId":186466496,"pageUrl":"https:\/\/go-good.ru\/privacy","modId":"6s5pkva9"})
            var call_value = '186466496';
            var call_value_6s5pkva9 = call_value;
            if(window.onSessionCallValue) {
            onSessionCallValue('186466496', '');
            }
            