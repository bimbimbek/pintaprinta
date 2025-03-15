function t396_init(t){var e=document.getElementById("rec"+t),i=e?e.querySelector(".t396"):null,n=e?e.querySelector(".t396__artboard"):null;if(n){t396_initTNobj(t,n),t396__initOnlyScalable();var o="",r=t396_detectResolution(t),a=document.getElementById("allrecords"),d=a&&"edit"===a.getAttribute("data-tilda-mode");void 0===window.tn.isEditMode&&(window.tn.isEditMode=d),t396_switchResolution(t,r);var l="window"===t396_ab__getFieldValue(n,"upscale"),_;if(t396__setGlobalScaleVariables(t,r,l),t396_updateTNobj(t),t396_artboard_build(o,t),window.addEventListener("load",(function(){t396_allelems__renderView(n),t396_allgroups__renderView(n);var t=n?window.getComputedStyle(n).getPropertyValue("overflow"):"";"function"==typeof t_lazyload_update&&"auto"===t&&n&&n.addEventListener("scroll",t_throttle((function(){var t=a?a.getAttribute("data-tilda-lazy"):null;"y"!==window.lazy&&"yes"!==t||t_onFuncLoad("t_lazyload_update",(function(){t_lazyload_update()}))}),500)),""!==window.location.hash&&"visible"===t&&(n&&(n.style.overflow="hidden"),setTimeout((function(){n&&(n.style.overflow="visible")}),1))})),window.tildaMembers&&"MutationObserver"in window){var s=new MutationObserver((function(e){e.forEach((function(e){"attributes"===e.type&&"class"===e.attributeName&&e.target.classList.contains("tlk-courses_page")&&(t396_doResize(t,!0),s.disconnect())}))}));s.observe(document.body,{attributes:!0})}if(document.querySelector(".t830")&&t_onReady((function(){var e,i;["t830__allrecords_padd","t830__allrecords_padd-small"].some((function(t){return a.classList.contains(t)}))?t396_doResize(t,!0):a.addEventListener("allRecPaddingInit",(function(){t396_doResize(t,!0)}))})),e&&i&&n&&"yes"===e.getAttribute("data-connect-with-tab")&&i.addEventListener("displayChanged",(function(){t396_allelems__renderView(n),t396_allgroups__renderView(n),t396_doResize(t,!0)})),"hug"===n.getAttribute("data-artboard-heightmode")){t396__updateAutoHeight(n),setInterval((function(){t396__updateAutoHeight(n)}),3e3);var u=n.getElementsByTagName("img");Array.from(u).forEach((function(t){t.onload=function(){t396__updateAutoHeight(n)}}))}setTimeout((function(){e&&e.closest("#allrecordstable")&&i&&n&&i.addEventListener("displayChanged",(function(){t396_allelems__renderView(n),t396_allgroups__renderView(n),t396_doResize(t,!0)}))}),1e3);var c=!!document.querySelector(".t635__textholder");e&&c&&i&&n&&i.addEventListener("animationInited",(function(){t396_allelems__renderView(n),t396_allgroups__renderView(n),t396_doResize(t,!0)})),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&i&&i.classList.add("t396_safari"),l&&!d&&t_onFuncLoad("t396_scaleBlock",(function(){t396_scaleBlock(t)})),d||"y"!==t396_ab__getFieldValue(n,"fixed-need-js")||t_onFuncLoad("t396__processFixedArtBoard",(function(){t396__processFixedArtBoard(n)})),t396__processAbsoluteArtBoard(n),t396__processTopShift(n,t,!1)}}function t396__globalInit(){t396__isAllZeroBlocksRendered((function(){t396__applyFixesForAllElements(),window.addEventListener("resize",t396__onResize),window.addEventListener("orientationchange",t396__onOrientationChange)}))}function t396__onResize(){t396_waitForFinalEvent((function(){var t=t396__getAxisXPadding(),e=document.documentElement.clientWidth!==window.tn.window_width,i=t396__getBlockEditorWidth();window.tn.window_width=i||document.documentElement.clientWidth,t&&(window.tn.window_width-=t),window.tn.window_height=document.documentElement.clientHeight,t396__getZeroBlocks().forEach((function(t){var i=t.artboard,n=t.record;if(i.classList.add("t396_resizechange"),window.t396__isMobile||window.t396__isTouchDevice){if(e){if(!n)return;if(!t396_isBlockVisible(n))return;t396_doResize(n.id.replace("rec","")),i.classList.remove("t396_resizechange")}}else{if(!n)return;if(!t396_isBlockVisible(n))return;t396_doResize(n.id.replace("rec","")),i.classList.remove("t396_resizechange")}}))}),500,"global_resize_zero_unique_id")}function t396__onOrientationChange(){t396_waitForFinalEvent((function(){var t=t396__getBlockEditorWidth();window.tn.window_width=t||document.documentElement.clientWidth,window.tn.window_height=document.documentElement.clientHeight,t396__getZeroBlocks().forEach((function(t){var e=t.record;e&&t396_isBlockVisible(e)&&t396_doResize(e.id.replace("rec",""))}))}),600,"global_orientationchange_zero_unique_id")}function t396_isOnlyScalableBrowser(){return window.isOnlyScalable}function t396__initOnlyScalable(){if(void 0===window.isOnlyScalable){var t=window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),e=t?parseInt(t[1],10):126,i=window.navigator.userAgent.match(/Chrome\/([0-9]+)\./),n=i&&parseInt(i[1],10)||0;window.isOnlyScalable=e<126,window.shouldUseScaleFactor=!window.isOnlyScalable&&!t&&n<=127}}function t396__setGlobalScaleVariables(t,e,i){if(!window.tn.window_width){var n=t396__getBlockEditorWidth();window.tn.window_width=n||document.documentElement.clientWidth}var o="ab"+t,r=i?parseFloat((window.tn.window_width/e).toFixed(3)):1;window.tn[o].scaleFactor=r,window.tn_scale_factor=r;var a=document.getElementById("rec"+t);a&&!window.tn.isEditMode&&a.style.setProperty("--zoom",r.toString())}function t396__processTopShift(t,e,i){"function"!=typeof window.t396__updateTopShift||"y"!==t396_ab__getFieldValue(t,"shift-processed")&&"y"!==t396_ab__getFieldValue(t,"fixed-shift")||t396__updateTopShift(e,i)}function t396_doResize(t,e){if(e){var i=t396__getAxisXPadding(),n=t396__getBlockEditorWidth();window.tn.window_width=n||document.documentElement.clientWidth,i&&(window.tn.window_width-=i)}var o=t396_isOnlyScalableBrowser(),r=document.getElementById("rec"+t),a=document.getElementById("allrecords"),d=t396_detectResolution(t),l=r?r.querySelector(".t396__scale-style"):null;if(t396__setScaleFactorForElements(t),t396_removeElementFromDOM(l),o){var _=r?r.querySelectorAll(".tn-molecule, .tn-atom"):[];Array.prototype.forEach.call(_,(function(t){if(!t.classList.contains("tn-atom")||!t.closest(".tn-molecule")){var e=t.closest(".tn-atom__scale-wrapper"),i=e?e.parentNode:null;i&&i.removeChild(e),i&&i.appendChild(t)}}))}else{var s=r?r.querySelectorAll(".t396__elem, .t396__group"):[];Array.prototype.forEach.call(s,(function(t){t.style.zoom="";var e=t.querySelector(".tn-atom");e&&(e.style.transformOrigin="",e.style.fontSize="",e.style.webkitTextSizeAdjust="")}))}t396_switchResolution(t,d);var u=r?r.querySelector(".t396__artboard"):null,c="window"===t396_ab__getFieldValue(u,"upscale");t396__setGlobalScaleVariables(t,d,c),t396_updateTNobj(t),t396_ab__renderView(u);var w=a?a.getAttribute("data-tilda-mode"):"";c&&"edit"!==w&&t_onFuncLoad("t396_scaleBlock",(function(){t396_scaleBlock(t)})),"edit"!==w&&"y"===t396_ab__getFieldValue(u,"fixed-need-js")&&t_onFuncLoad("t396__processFixedArtBoard",(function(){t396__processFixedArtBoard(u)})),t396__processAbsoluteArtBoard(u),t396__processTopShift(u,t,!0),t396_allelems__renderView(u),t396_allgroups__renderView(u),t396__applyFixesForAllElements(),t396__updateAutoHeight(u),u&&u.dispatchEvent(new CustomEvent("artBoardResized"));var g="hug"===u.getAttribute("data-artboard-heightmode"),f;u&&!g&&[u,u.querySelector(".t396__carrier"),u.querySelector(".t396__filter")].forEach((function(t){t&&(t.style.height="")}))}function t396__updateAutoHeight(t){var e;if("hug"===t.getAttribute("data-artboard-heightmode")){var i=t396__getAutoHeight(t),n;if(i!==parseFloat(t396_ab__getFieldValue(t,"height"))){var o,r="ab"+t.getAttribute("data-artboard-recid"),a=window.tn[r].curResolution,d;a===window.tn[r].curResolution_max?t.setAttribute("data-artboard-height",i):t.setAttribute("data-artboard-height-res-"+a,i),t396_ab__renderView(t)}}}function t396__getAutoHeight(t){var e=0,i;if(t.classList.contains("t396__artboard-flex")){var n=t.style.height;t.style.height="auto",e=t.offsetHeight,t.style.height=n}else var o=t.querySelectorAll(".tn-group, .tn-elem"),e=Array.from(o).reduce((function(t,e){var i=t396_core__getFieldValue(e,"axisy"),n=t396_core__getFieldValue(e,"topunits"),o=t396_core__getFieldValue(e,"heightunits");if("%"===n||"%"===o||"bottom"===i||"center"===i)return t;var r=e.offsetTop+e.offsetHeight;return r>t&&(t=r),t}),-1/0);return e===-1/0?0:e}function t396__processAbsoluteArtBoard(t){if(t){var e=t396_ab__getFieldValue(t,"pos");if("fixed"!==e){var i="t396__artboard-fixed-no-bg";if("absolute"===e){var n=getComputedStyle(t),o=t.querySelector(".t396__filter"),r=!o||"none"===getComputedStyle(o).backgroundImage,a,d="rgba(0, 0, 0, 0)"===n.backgroundColor&&"none"===n.backgroundImage&&r?"add":"remove";t.classList[d](i)}else t.classList.remove(i)}}}function t396_detectResolution(t){if(t){var e="ab"+t,i=window.innerWidth,n;if(window.t396__isMobile||window.t396__isIPad||window.t396__isSafari){var o=t396__getBlockEditorWidth();o?window.tn.window_width=o:window.tn.window_width||(window.tn.window_width=document.documentElement.clientWidth),i=window.tn.window_width}return window.tn[e].screens.forEach((function(t){i>=t&&(n=t)})),void 0===n&&(n=window.tn[e].screens[0]),n}}function t396_initTNobj(t,e){e&&(void 0===window.tn?(window.tn={},window.tn.ab_fields=["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"],t396_setScreensTNobj(t,e)):t396_setScreensTNobj(t,e))}function t396_setScreensTNobj(t,e){var i="ab"+t;window.tn[i]={},window.tn[i].screens=[];var n=e.getAttribute("data-artboard-screens");n?(n=n.split(",")).forEach((function(t){t=parseInt(t,10),window.tn[i].screens.push(t)})):window.tn[i].screens=[320,480,640,960,1200]}function t396__getAxisXPadding(){var t=document.getElementById("allrecords"),e=Boolean(window.tildaMembers)||"allrecords"===window.zero_window_width_hook,i,n;return t&&e&&[document.body,t].reduce((function(t,e){var i=window.getComputedStyle(e).paddingLeft,n=window.getComputedStyle(e).paddingRight;return t+parseInt(i,10)+parseInt(n,10)}),0)||0}function t396_updateTNobj(t){var e=t396__getAxisXPadding();if(!window.tn.window_width){var i=t396__getBlockEditorWidth();window.tn.window_width=i||document.documentElement.clientWidth,e&&(window.tn.window_width-=e)}window.tn.window_height||(window.tn.window_height=window.t396__isMobile?document.documentElement.clientHeight:window.innerHeight);for(var n="ab"+t,o=window.tn[n].screens.slice().reverse(),r=0;r<o.length;r++)window.tn[n].curResolution===o[r]&&(window.tn[n].canvas_min_width=o[r],window.tn[n].canvas_max_width=0===r?window.tn.window_width:o[r-1]);window.tn[n].grid_width=window.tn[n].canvas_min_width,window.tn[n].grid_offset_left=(window.tn.window_width-window.tn[n].grid_width)/2}window.t396__isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.userAgent.indexOf("Instagram")>-1,window.t396__isIPad="ontouchend"in document&&-1!==navigator.userAgent.indexOf("AppleWebKit"),window.t396__isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),window.t396__isTouchDevice="ontouchend"in document,window.t396__isInAppBrowser=/WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(wv)/gi.test(navigator.userAgent),window.t396__isFacebookMessengerInApp=/FBAN|FBAV/gi.test(navigator.userAgent)&&window.t396__isInAppBrowser,window.t396__isInstagramInApp=/\bInstagram/gi.test(navigator.userAgent)&&window.t396__isInAppBrowser,t_onReady(t396__globalInit);var t396_waitForFinalEvent=function(){var t={};return function(e,i,n){n||(n="Don't call this twice without a uniqueId"),t[n]&&clearTimeout(t[n]),t[n]=setTimeout(e,i)}}();function t396_switchResolution(t,e){var i="ab"+t,n=window.tn[i].screens[window.tn[i].screens.length-1];window.tn[i].curResolution=e,window.tn[i].curResolution_max=n,window.tn.curResolution=e,window.tn.curResolution_max=n}function t396_artboard_build(t,e){var i=document.getElementById("rec"+e),n=document.getElementById("allrecords"),o=i?i.querySelector(".t396__artboard"):null;if(!o)return!1;t396_ab__renderView(o),t396_allgroups__renderView(o),t396__setScaleFactorForElements(e);var r=document.createEvent("Event");r.initEvent("artBoardRendered",!0,!0);var a=o.querySelectorAll(".tn-elem");Array.prototype.forEach.call(a,(function(t){var i;switch(t.getAttribute("data-elem-type")){case"text":t396_addText(o,t);break;case"image":t396_addImage(o,t);break;case"shape":t396_addShape(o,t);break;case"button":t396_addButton(o,t);break;case"video":t396_addVideo(o,t);break;case"html":t396_addHtml(o,t);break;case"tooltip":t396_addTooltip(o,t);break;case"form":t396_addForm(o,t,e);break;case"gallery":t396_addGallery(o,t,e);break;case"vector":t396_addVector(o,t)}})),o.classList.remove("rendering"),o.classList.add("rendered"),o.dispatchEvent(r);var d=o.getAttribute("data-artboard-ovrflw"),l;"visible"!==d&&"visibleX"!==d||!n||(n.style.overflow="hidden",document.querySelector(".t951__sidebar_sticky,.t-store__prod-popup__col_fixed")&&(n.style.cssText+="overflow:clip;"));if("auto"===d){var _=Math.abs(o.offsetHeight-o.clientHeight);0!==_&&(o.style.paddingBottom=_+"px")}if(window.t396__isMobile||window.t396__isIPad){var s=document.createElement("style");s.textContent="@media only screen and (min-width:1366px) and (orientation:landscape) and (-webkit-min-device-pixel-ratio:2) {.t396__carrier {background-attachment:scroll!important;}}",i.insertAdjacentElement("beforeend",s)}}function t396_ab__renderView(t){if(!t)return!1;for(var e=window.tn.ab_fields,i=document.getElementById("allrecords"),n,o=0;o<e.length;o++)t396_ab__renderViewOneField(t,e[o]);var r=t396_ab__getFieldValue(t,"height"),a=t396_ab__getHeight(t),d,l=t396__getCurrentScaleFactor(t.getAttribute("data-artboard-recid")),_=!!i&&"edit"===i.getAttribute("data-tilda-mode"),s="window"===t396_ab__getFieldValue(t,"upscale"),u,c;if(n=t396_ab__getFieldValue(t,"height_vh"),s&&!_&&n)var w=parseInt(r,10)*l;if(r===a||w&&w>=a)u=0;else switch(t396_ab__getFieldValue(t,"valign")){case"top":default:u=0;break;case"center":u=w?parseFloat(((a-w)/2).toFixed(1)):parseFloat(((a-r)/2).toFixed(1));break;case"bottom":u=w?parseFloat((a-w).toFixed(1)):parseFloat((a-r).toFixed(1));break;case"stretch":u=0,r=a}t.setAttribute("data-artboard-proxy-min-offset-top",u),t.setAttribute("data-artboard-proxy-min-height",r),t.setAttribute("data-artboard-proxy-max-height",a);var g=t.querySelector(".t396__filter"),f=t.querySelector(".t396__carrier"),h;if(n=t396_ab__getFieldValue(t,"height_vh"),n=parseFloat(n),(window.t396__isMobile||window.t396__isIPad)&&n){var p=document.documentElement.clientHeight*n/100;t.style.height=p+"px",g&&(g.style.height=p+"px"),f&&(f.style.height=p+"px")}"hug"===t.getAttribute("data-artboard-heightmode")&&!n&&(t.style.height=r+"px",g&&(g.style.height=r+"px"),f&&(f.style.height=r+"px"))}function t396__getCurrentScaleFactor(t){var e="ab"+t,i;return window.tn&&window.tn[e]&&window.tn[e].scaleFactor||window.tn_scale_factor}function t396__setScaleFactorForElements(t){var e=document.getElementById("rec"+t),i=e?e.querySelector(".t396__artboard"):null;if(i){var n=t396__getCurrentScaleFactor(t),o=i.querySelectorAll(".t396__elem, .tn-group");Array.prototype.forEach.call(o,(function(t){t.scaleFactor=n}))}}function t396_addText(t,e){if(e=t396_getEl(e)){var i="top,left,width,height,container,axisx,axisy,widthunits,leftunits,topunits";e.setAttribute("data-fields",i),t396_elem__renderView(e)}}function t396_addImage(t,e){if(e=t396_getEl(e)){var i="img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";e.setAttribute("data-fields",i),t396_elem__renderView(e);var n=e.querySelector("img");n&&(n.addEventListener("load",(function(){t396_elem__renderViewOneField(e,"top"),n.src&&setTimeout((function(){t396_elem__renderViewOneField(e,"top"),t396__updateAutoHeight(t)}),2e3)})),n.complete&&(t396_elem__renderViewOneField(e,"top"),n.src&&setTimeout((function(){t396_elem__renderViewOneField(e,"top"),t396__updateAutoHeight(t)}),2e3)),n.addEventListener("tuwidget_done",(function(){t396_elem__renderViewOneField(e,"top")})),setTimeout((function(){t396_changeFilterOnSafari(e)})))}}function t396_addShape(t,e){if(e=t396_getEl(e)){var i="width,height,top,left,";i+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",e.setAttribute("data-fields",i),t396_elem__renderView(e)}}function t396_changeFilterOnSafari(t){var e;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(t396__checkContainBackdropFilter(t)&&"IntersectionObserver"in window)){var i=t.querySelector(".tn-atom"),n;new IntersectionObserver((function(e,i){e.forEach((function(e){if(e.isIntersecting){var n=e.target;i.unobserve(n),t396__processBackdropFilterOnImage(t)}}))})).observe(i)}}function t396__checkContainBackdropFilter(t){if(!t)return!1;var e=window.getComputedStyle(t).webkitBackdropFilter;if(e&&"none"!==e)return!0;var i=t.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper");if(!i)return!1;var n=window.getComputedStyle(i).webkitBackdropFilter;return n&&"none"!==n}function t396__processBackdropFilterOnImage(t){if(t){var e=t.getAttribute("data-animate-sbs-opts"),i=t.getAttribute("data-animate-prx")||t.getAttribute("data-animate-fix"),n=e||i,o=t.classList.contains("t396__elem--backdrop-filter-img-wrappered");n&&o||!n?t396__updateBackdropFilterOnImage(t):t.addEventListener("backdropFilterImgWrappered",(function(){t396__updateBackdropFilterOnImage(t)}))}}function t396__updateBackdropFilterOnImage(t){if(t){var e=t.querySelector("img"),i=t.querySelector(".tn-atom__sbs-anim-wrapper, .tn-atom__prx-wrapper, .tn-atom__sticky-wrapper"),n="";i&&(t=i,n=window.getComputedStyle(t).webkitBackdropFilter||""),t.style.webkitBackdropFilter="none",t396_waitForUploadImg(e,(function(){t.style.webkitBackdropFilter=n}))}}function t396_waitForUploadImg(t,e){if("y"===window.lazy)var i=setTimeout((function(){t.classList.contains("loaded")&&t.clientWidth&&t.src?(e(),clearTimeout(i)):t396_waitForUploadImg(t,e)}),300);else e()}function t396_addButton(t,e){if(e=t396_getEl(e)){var i="top,left,width,height,container,axisx,axisy,caption,leftunits,topunits";return e.setAttribute("data-fields",i),t396_elem__renderView(e),e}}function t396_addVideo(t,e){if(e=t396_getEl(e)){var i="width,height,top,left,";i+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",e.setAttribute("data-fields",i),t396_elem__renderView(e),t_onFuncLoad("t396_initVideo",(function(){t396_initVideo(e)}))}}function t396_addHtml(t,e){if(e=t396_getEl(e)){var i="width,height,top,left,";i+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits",e.setAttribute("data-fields",i),t396_elem__renderView(e)}}function t396_addTooltip(t,e){if(e=t396_getEl(e)){var i="width,height,top,left,";i+="container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition",e.setAttribute("data-fields",i),t396_elem__renderView(e),t_onFuncLoad("t396_initTooltip",(function(){t396_initTooltip(e)}))}}function t396_addForm(t,e,i){if(e=t396_getEl(e)){var n="width,top,left,",o;n+="inputs,container,axisx,axisy,widthunits,leftunits,topunits",e.setAttribute("data-fields",n);var r=e.getAttribute("data-elem-id"),a=e.querySelector(".tn-atom__inputs-textarea");a&&(o=a.value),t_onFuncLoad("t_zeroForms__init",(function(){t396_elem__renderView(e),t_zeroForms__init(i,r,o),t396_elem__renderView(e)}))}}function t396_addGallery(t,e,i){if(e=t396_getEl(e)){var n="width,height,top,left,";n+="imgs,container,axisx,axisy,widthunits,heightunits,leftunits,topunits",e.setAttribute("data-fields",n),t396_elem__renderView(e);var o=e.getAttribute("data-elem-id");t_onFuncLoad("t_zeroGallery__init",(function(){t_zeroGallery__init(i,o)}))}}function t396_addVector(t,e){if(e=t396_getEl(e)){var i="width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits";e.setAttribute("data-fields",i),t396_elem__renderView(e)}}function t396_elem__getFieldValue(t,e){if(t=t396_getEl(t)){if(t.classList.contains("tn-group"))return t396_group__getFieldValue(t,e);var i=t.closest(".t396__artboard"),n=i.getAttribute("data-artboard-recid"),o="ab"+n,r;if(void 0===window.tn[o])t396_initTNobj(n,i),t396_switchResolution(n,t396_detectResolution(n));var a=window.tn[o].curResolution,d=window.tn[o].curResolution_max,l=window.tn[o].screens,_;if(!(_=a===d?t.getAttribute("data-field-"+e+"-value"):t.getAttribute("data-field-"+e+"-res-"+a+"-value"))&&""!==_)for(var s=0;s<l.length;s++){var u=l[s];if(!(u<=a)&&(_=u===d?t.getAttribute("data-field-"+e+"-value"):t.getAttribute("data-field-"+e+"-res-"+u+"-value")))break}return _}}function t396_elem__renderView(t){var e=(t=t396_getEl(t))?t.getAttribute("data-fields"):"";if(!e)return!1;(e=e.split(",")).forEach((function(e){t396_elem__renderViewOneField(t,e)}))}function t396_group__renderView(t){var e=t?t.getAttribute("data-fields"):"";if(!e)return!1;(e=e.split(",")).forEach((function(e){var i=t396_group__getFieldValue(t,e);switch(e){case"left":i=t396_elem__convertPosition__Local__toAbsolute(t,e,i),t.style.left=parseFloat(i).toFixed(1)+"px";break;case"top":i=t396_elem__convertPosition__Local__toAbsolute(t,e,i),t.style.top=parseFloat(i).toFixed(1)+"px"}}))}function t396_elem__renderViewOneField(t,e){if(t=t396_getEl(t)){var i=document.getElementById("allrecords"),n=i?i.getAttribute("data-tilda-mode"):"",o,r="window"===t396_ab__getFieldValue(t.closest(".t396__artboard"),"upscale");if("yes"!==t.getAttribute("data-scale-off")||!r||"edit"===n){var a=t396_elem__getFieldValue(t,e),d,l,_,s,u,c;switch(e){case"left":a=t396_elem__convertPosition__Local__toAbsolute(t,e,a),t.style.left=parseFloat(a).toFixed(1)+"px";break;case"top":a=t396_elem__convertPosition__Local__toAbsolute(t,e,a),t.style.top=parseFloat(a).toFixed(1)+"px";break;case"width":if("text"===(d=t.getAttribute("data-elem-type"))&&"autowidth"===t396_elem__getFieldValue(t,"textfit"))return void(t.style.width="auto");switch(a=t396_elem__getWidth(t,a),t.style.width=parseFloat(a).toFixed(1)+"px",d){case"tooltip":var w=t.querySelectorAll(".tn-atom__pin-icon");Array.prototype.forEach.call(w,(function(t){var e=parseFloat(a).toFixed(1)+"px";t.style.width=e,t.style.height=e})),t.style.height=parseInt(a).toFixed(1)+"px";break;case"gallery":l=t396_elem__getFieldValue(t,"borderwidth"),(_=t396_elem__getFieldValue(t,"borderstyle"))&&l&&"none"!==_||(l=0),a-=2*l,s=Math.round(parseFloat(a))+"px",u=t.querySelector(".t-slds__main"),c=t.querySelectorAll(".tn-atom__slds-img"),t.style.width=s,u&&(u.style.width=s),Array.prototype.forEach.call(c,(function(t){t.style.width=s}))}break;case"height":d=t.getAttribute("data-elem-type");var g=t396_elem__getFieldValue(t,"textfit");if("text"===d&&(["autowidth","autoheight"].includes(g)||!g))return void(t.style.height="auto");if("tooltip"===d)return;a=t396_elem__getHeight(t,a),t.style.height=parseFloat(a).toFixed(1)+"px","gallery"===d&&(l=t396_elem__getFieldValue(t,"borderwidth"),(_=t396_elem__getFieldValue(t,"borderstyle"))&&l&&"none"!==_||(l=0),a-=2*l,s=Math.round(parseFloat(a))+"px",u=t.querySelector(".t-slds__main"),c=t.querySelectorAll(".tn-atom__slds-img"),t.style.height=s,u&&(u.style.height=s),Array.prototype.forEach.call(c,(function(t){t.style.height=s})));break;case"container":t396_elem__renderViewOneField(t,"left"),t396_elem__renderViewOneField(t,"top");break;case"inputs":var f=t.querySelector(".tn-atom__inputs-textarea");a=f?f.value:"";try{t_zeroForms__renderForm(t,a)}catch(h){}}"width"!==e&&"height"!==e&&"fontsize"!==e&&"fontfamily"!==e&&"letterspacing"!==e&&"fontweight"!==e&&"img"!==e||(t396_elem__renderViewOneField(t,"left"),t396_elem__renderViewOneField(t,"top"))}}}function t396_elem__convertPosition__Local__toAbsolute(t,e,i){if(t=t396_getEl(t)){var n=t.closest(".t396__artboard"),o=n.getAttribute("data-artboard-recid"),r="ab"+o,a=t396_ab__getFieldValue(n,"valign"),d="window"===t396_ab__getFieldValue(n,"upscale"),l=document.getElementById("allrecords"),_,s="edit"===(l?l.getAttribute("data-tilda-mode"):""),u=t396_isOnlyScalableBrowser(),c=!s&&d&&u,w=!s&&d&&!u,g=t396_elem__getFieldValue(t,"axisy"),f=t396_elem__getFieldValue(t,"axisx"),h=t396_elem__getFieldValue(t,"container"),p=t.classList.contains("tn-group")&&"physical"===t396_group__getFieldValue(t,"type"),m=t.parentNode.closest(".tn-group"),b="physical"===t396_group__getFieldValue(m,"type"),v,y,F,A,x,V,E;p&&(h="grid"),i=parseInt(i);var S=t396__getCurrentScaleFactor(o);switch(e){case"left":var k;if(v="grid"===h?"grid":"window",y="grid"===h?window.tn[r].grid_offset_left:0,x="grid"===h?window.tn[r].grid_width:window.tn.window_width,"%"===t396_elem__getFieldValue(t,"leftunits")&&(i=t396_roundFloat(x*i/100)),b){var B=parseInt(t396_group__getFieldValue(m,"left"),10),I;"%"===t396_group__getFieldValue(m,"leftunits")&&(B=t396_roundFloat(x*B/100)),i-=B;break}!s&&d?"grid"===h&&u&&(i*=S):i=y+i,"center"===f&&(A=t396_elem__getWidth(t),c&&"window"!==v&&(x*=S,A*=S),i=x/2-A/2+i),"right"===f&&(A=t396_elem__getWidth(t),c&&"window"!==v&&(x*=S,A*=S),i=x-A+i),c&&"window"!==v&&(i+=((A=t396_elem__getWidth(t))*S-A)/2);break;case"top":var z=t.closest(".t396__artboard"),L=z?z.getAttribute("data-artboard-proxy-min-offset-top"):"0",O=z?z.getAttribute("data-artboard-proxy-min-height"):"0",R=z?z.getAttribute("data-artboard-proxy-max-height"):"0",T=function t(e){var i=t396_elem__getHeight(e);if(e&&"image"===e.getAttribute("data-elem-type")){var n=t396_elem__getWidth(e),o=t396_elem__getFieldValue(e,"filewidth"),r=t396_elem__getFieldValue(e,"fileheight"),a;if(o&&r)i=n/(parseInt(o)/parseInt(r))}return i},q;if(v="grid"===h?"grid":"window",F="grid"===h?parseFloat(L):0,E="grid"===h?parseFloat(O):parseFloat(R),"%"===t396_elem__getFieldValue(t,"topunits")&&(i=E*(i/100)),b){var H=parseInt(t396_group__getFieldValue(m,"top"),10),M;"%"===t396_group__getFieldValue(m,"topunits")&&(H=t396_roundFloat(E*H/100)),i-=H;break}c&&"window"!==v&&(i*=S),w&&"window"!==v&&(F="stretch"===a?0:F/S),i=F+i;var C=t396_ab__getFieldValue(z,"height_vh"),P=t396_ab__getFieldValue(z,"height"),W=t396_ab__getHeight(z);if(d&&!s&&C)var j=parseInt(P,10)*S;if("center"===g&&(V=T(t),c&&"window"!==v&&("stretch"!==a?E*=S:E=j?j>W?j:W:z.clientHeight,V*=S),s||!d||u||"window"===v||"stretch"!==a||(E=j?j>W?j:W:z.clientHeight,E/=S),i=E/2-V/2+i),"bottom"===g&&(V=T(t),c&&"window"!==v&&("stretch"!==a?E*=S:E=j?j>W?j:W:z.clientHeight,V*=S),s||!d||u||"window"===v||"stretch"!==a||(E=j?j>W?j:W:z.clientHeight,E/=S),i=E-V+i),c&&"window"!==v){var N=((V=T(t))*S-V)/2;i+=N=Math.round(N)}}return i}}function t396_elem_findFirstLevelParentGroup(t){for(var e=t.closest(".t396__group");e;){var i=e.parentElement.closest(".t396__group");if(!i)break;e=i}return e}function t396_ab__getFieldValue(t,e){if(t){var i,n=t.getAttribute("data-artboard-recid"),o="ab"+n,r;if(void 0===window.tn[o])t396_initTNobj(n,t),t396_switchResolution(n,t396_detectResolution(n));var a=window.tn[o].curResolution,d=window.tn[o].curResolution_max,l=window.tn[o].screens;if(null===(i=a===d?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+a)))for(var _=0;_<l.length;_++){var s=l[_];if(!(s<=a)&&null!==(i=s===d?t.getAttribute("data-artboard-"+e):t.getAttribute("data-artboard-"+e+"-res-"+s)))break}return i}}function t396_ab__renderViewOneField(t,e){t396_ab__getFieldValue(t,e)}function t396_core__getFieldValue(t,e){return t.classList.contains("t396__elem")?t396_elem__getFieldValue(t,e):t396_group__getFieldValue(t,e)}function t396_group__getFieldValue(t,e){if(t){var i,n,o="ab"+t.closest(".t396__artboard").getAttribute("data-artboard-recid"),r=window.tn[o].curResolution,a=window.tn[o].curResolution_max,d=window.tn[o].screens,l=["widthmode","heightmode","flex"].includes(e)?"":"-value";if(null===(i=r===a?t.getAttribute("data-group-"+e+l):t.getAttribute("data-group-"+e+"-res-"+r+l)))for(var _=0;_<d.length;_++){var s=d[_];if(!(s<=r)&&null!==(i=s===a?t.getAttribute("data-group-"+e+"-value"):t.getAttribute("data-group-"+e+"-res-"+s+"-value")))break}return i}}function t396_allgroups__renderView(t){if(t){var e=t.querySelectorAll(".tn-group"),i=Array.prototype.filter.call(e,(function(t){return"physical"===t396_group__getFieldValue(t,"type")}));Array.prototype.forEach.call(i,(function(t){t396_group__renderView(t),t396_allgroups__renderViewAutolayout(t)}))}}function t396_allgroups__renderViewAutolayout(t){if(t&&t.classList.contains("t396__group-flex")){var e=t396_group__getFieldValue(t,"widthmode"),i=t396_group__getFieldValue(t,"heightmode");t.style.width="hug"===e?"min-content":"",t.style.height="hug"===i?"initial":""}}function t396_allelems__renderView(t){if(!t)return!1;var e=t.querySelectorAll(".tn-elem");Array.prototype.forEach.call(e,(function(t){t396_elem__renderView(t)}))}function t396_ab__getHeight(t,e){e||(e=t396_ab__getFieldValue(t,"height")),e=parseFloat(e);var i=t396_ab__getFieldValue(t,"height_vh");if(i&&(i=parseFloat(i),!isNaN(i))){var n=window.tn.window_height*i/100;e<n&&(e=n)}return e}function t396_elem__getWidth(t,e){var i,n,o="ab"+(t=t396_getEl(t)).closest(".t396__artboard").getAttribute("data-artboard-recid"),r,a;(e||(e=t396_elem__getFieldValue(t,"width")),e=parseFloat(e),"%"===t396_elem__getFieldValue(t,"widthunits"))&&(e="window"===t396_elem__getFieldValue(t,"container")?window.tn.window_width*e/100:window.tn[o].grid_width*e/100);return e}function t396_elem__getHeight(t,e){t=t396_getEl(t),e||(e=t396_elem__getFieldValue(t,"height")),e=parseFloat(e);var i=t.getAttribute("data-elem-type"),n=t396_elem__getFieldValue(t,"textfit"),o;if("shape"===i||"video"===i||"html"===i||"gallery"===i||"button"===i||"text"===i&&"fixedsize"===n){var r;if("%"===t396_elem__getFieldValue(t,"heightunits")){var a=t.closest(".t396__artboard"),d=a?a.getAttribute("data-artboard-proxy-min-height"):"0",l=a?a.getAttribute("data-artboard-proxy-max-height"):"0",_=parseFloat(d),s=parseFloat(l),u;e="window"===t396_elem__getFieldValue(t,"container")?s*(e/100):_*(e/100)}}else{if("text"===i){var c=t.querySelector(".tn-atom");c&&(c.style.lineHeight="")}e=t.clientHeight}return e}function t396_roundFloat(t){return t=Math.round(100*t)/100}function t396_removeElementFromDOM(t){(t=t396_getEl(t))&&t.parentNode&&t.parentNode.removeChild(t)}function t396_getEl(t){return window.jQuery&&t instanceof jQuery?t.length?t.get(0):null:t}function t396_isBlockVisible(t){var e=window.innerWidth,i=t.getAttribute("data-screen-min"),n=t.getAttribute("data-screen-max");return!(i&&e<parseInt(i,10))&&!(n&&e>parseInt(n,10))}function t396__getZeroBlocks(){var t,e;return Array.prototype.slice.call(document.querySelectorAll(".t396__artboard")).map((function(t){return{record:t.closest(".r:not(.t397__off):not(.t395__off):not(.t400__off)"),artboard:t}})).filter((function(t){return t.record}))}function t396__getBlockEditorWidth(){if(!window.tn.isEditMode)return 0;var t,e=window.getComputedStyle(document.body).getPropertyValue("--page-view-width");return e&&"100%"!==e?parseInt(e,10):void 0}function t396__isAllZeroBlocksRendered(t){var e=t396__getZeroBlocks(),i=document.getElementById("allrecords"),n=i&&"edit"===i.getAttribute("data-tilda-mode");if(e.length){n&&clearTimeout(window.tn_waitingForAppendZero);var o=e.map((function(t){return t.artboard})),r;if(o.every((function(t){return t.classList.contains("rendered")})))t();else{var a=o.filter((function(t){return t.classList.contains("rendered")}));o.forEach((function(e){e.classList.contains("rendered")||e.addEventListener("artBoardRendered",(function(){a.push(e),a.length===o.length&&t()}))}))}}else n&&(window.tn_waitingForAppendZero=setTimeout((function(){t396__isAllZeroBlocksRendered(t)}),3e3))}function t396__processElementsTransform(t){var e=t396__initFastDOM(),i=[];e.read((function(){Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("data-elem-type");if("text"===e||"image"===e||"shape"===e||"button"===e||"vector"===e){var n=getComputedStyle(t),o;if(n.backdropFilter&&"none"!==n.backdropFilter||n.webkitBackdropFilter&&"none"!==n.webkitBackdropFilter){var r=t.querySelector(".tn-atom"),a=r?window.getComputedStyle(r).transform:"none";"matrix(1, 0, 0, 1, 0, 0)"===a&&(a="none"),"none"!==a&&i.push({element:t,atom:r,atomTransform:a})}}}))})),e.write((function(){i.forEach((function(t){t.atom.style.transform="none",t.element.style.transform=t.atomTransform}))}))}function t396__fixElementsLineHeights(t){var e=t396__initFastDOM(),i=[];e.read((function(){Array.prototype.forEach.call(t,(function(t){var e;if("text"===t.getAttribute("data-elem-type")){var n=t.querySelector(".tn-atom");if(n){var o=t.closest(".t396__group");if(!o||!o.style.zoom){var r=t.style.zoom,a=n.style.webkitTextSizeAdjust,d=n.style.fontSize;i.push({element:t,atom:n,zoom:r,textSizeAdjust:a,fontSize:d})}}}}))})),e.write((function(){i.forEach((function(t){t.atom.style.removeProperty("line-height"),window.t396__isSafari&&t.zoom&&(t.atom.style.webkitTextSizeAdjust="none",t.atom.style.fontSize="",t.element.style.zoom="")}))})),e.read((function(){i.forEach((function(t){t.computedLineHeight=parseFloat(window.getComputedStyle(t.atom).lineHeight)}))})),e.write((function(){i.forEach((function(t){var e=t.computedLineHeight;window.t396__isSafari&&t.zoom&&(t.atom.style.webkitTextSizeAdjust=t.textSizeAdjust,t.atom.style.fontSize=t.fontSize,t.zoom&&(t.element.style.zoom=t.zoom)),e&&!isNaN(e)&&(t.atom.style.lineHeight=Math.round(e)+"px")}))}))}function t396__fixElementsFontSizes(t){var e;if(!window.t396__isMobile&&window.t396__isIPad||window.t396__isFacebookMessengerInApp||window.t396__isInstagramInApp){var i=t396__initFastDOM(),n=[];i.read((function(){Array.prototype.forEach.call(t,(function(t){var e=t.getAttribute("data-elem-type");if("text"===e||"button"===e){var i=t.querySelector(".tn-atom");if(i){var o=t396_elem_findFirstLevelParentGroup(t);if(o&&o&&o.style.zoom){var r=parseFloat(o.style.zoom);n.push({element:t,atom:i,parentZoom:r})}}}}))})),i.write((function(){n.forEach((function(t){t.atom.style.fontSize=""}))})),i.read((function(){n.forEach((function(t){var e=parseFloat(window.getComputedStyle(t.atom).fontSize);t.correctFontSize=e*Math.pow(t.parentZoom,2)}))})),i.write((function(){n.forEach((function(t){t.atom.style.fontSize=Math.floor(t.correctFontSize)+"px"}))}))}}function t396__initFastDOM(){return{read:function t(e){e()},write:function t(e){e()}}}function t396__applyFixesForAllElements(){var t=document.querySelectorAll(".t396__elem"),e=window.t396__isSafari||window.t396__isFacebookMessengerInApp||window.t396__isInstagramInApp;document.fonts&&e?document.fonts.ready.then((function(){t396__fixElementsLineHeights(t),t396__fixElementsFontSizes(t)})):t396__fixElementsLineHeights(t),t396__processElementsTransform(t)}
