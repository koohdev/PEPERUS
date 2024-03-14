window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/hpod420i.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.3.1"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);;
/*!
 * jQuery Migrate - v1.4.1 - 2016-05-19
 * Copyright jQuery Foundation and other contributors
 */(function(a,k,d){var j,i,p,L,K,J,I,G,y,g,c,q,f,x,v,u,P,w,h,l,z,A,B,C,D,E,t,n,H,r,m,s,o,M,N,O,F;a.migrateVersion="1.4.1",j={},a.migrateWarnings=[],k.console&&k.console.log&&k.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===d&&(a.migrateTrace=!0),a.migrateReset=function(){j={},a.migrateWarnings.length=0};function b(c){var b=k.console,d=new Error,e={warning:c,trace:d.stack||d};a.migrateWarnings.push(e),j[c]||(j[c]=!0,b&&b.warn&&!a.migrateMute&&(b.warn("JQMIGRATE: "+c),a.migrateTrace&&b.trace&&b.trace()))}function e(d,e,c,f){if(Object.defineProperty)try{Object.defineProperty(d,e,{configurable:!0,enumerable:!0,get:function(){return b(f),c},set:function(a){b(f),c=a}});return}catch(a){}a._definePropertyBroken=!0,d[e]=c}document.compatMode==="BackCompat"&&b("jQuery is not compatible with Quirks Mode"),i=a("<input/>",{size:1}).attr("size")&&a.attrFn,p=a.attr,L=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},K=a.attrHooks.value&&a.attrHooks.value.set||function(){return d},J=/^(?:input|button)$/i,I=/^[238]$/,G=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,y=/^(?:checked|selected)$/i,e(a,"attrFn",i||{},"jQuery.attrFn is deprecated"),a.attr=function(c,e,g,h){var f=e.toLowerCase(),j=c&&c.nodeType;if(h)if(p.length<4&&b("jQuery.fn.attr( props, pass ) is deprecated"),c&&!I.test(j)&&(i?e in i:a.isFunction(a.fn[e])))return a(c)[e](g);return e==="type"&&g!==d&&J.test(c.nodeName)&&c.parentNode&&b("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[f]&&G.test(f)&&(a.attrHooks[f]={get:function(c,b){var e,f=a.prop(c,b);return f===!0||typeof f!="boolean"&&(e=c.getAttributeNode(b))&&e.nodeValue!==!1?b.toLowerCase():d},set:function(c,e,b){var d;return e===!1?a.removeAttr(c,b):(d=a.propFix[b]||b,d in c&&(c[d]=!0),c.setAttribute(b,b.toLowerCase())),b}},y.test(f)&&b("jQuery.fn.attr('"+f+"') might use property instead of attribute")),p.call(a,c,e,g)},a.attrHooks.value={get:function(a,d){var c=(a.nodeName||"").toLowerCase();return c==="button"?L.apply(this,arguments):(c!=="input"&&c!=="option"&&b("jQuery.fn.attr('value') no longer gets properties"),d in a?a.value:null)},set:function(c,d){var a=(c.nodeName||"").toLowerCase();if(a==="button")return K.apply(this,arguments);a!=="input"&&a!=="option"&&b("jQuery.fn.attr('value', val) no longer sets properties"),c.value=d}},q=a.fn.init,f=a.find,x=a.parseJSON,v=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,P=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/,a.fn.init=function(c,e,h){var g,f;if(c&&typeof c=="string")if(!a.isPlainObject(e)&&(g=w.exec(a.trim(c)))&&g[0])if(v.test(c)||b("$(html) HTML strings must start with '<' character"),g[3]&&b("$(html) HTML text after last tag is ignored"),g[0].charAt(0)==="#"&&(b("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)return q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,h);return f=q.apply(this,arguments),c&&c.selector!==d?(f.selector=c.selector,f.context=c.context):(f.selector=typeof c=="string"?c:"",c&&(f.context=c.nodeType?c:e||document)),f},a.fn.init.prototype=a.fn,a.find=function(a){var c=Array.prototype.slice.call(arguments);if(typeof a=="string"&&u.test(a))try{document.querySelector(a)}catch(d){a=a.replace(P,function(d,a,b,c){return"["+a+b+'"'+c+'"]'});try{document.querySelector(a),b("Attribute selector with '#' must be quoted: "+c[0]),c[0]=a}catch(a){b("Attribute selector with '#' was not fixed: "+c[0])}}return f.apply(this,c)};for(h in f)Object.prototype.hasOwnProperty.call(f,h)&&(a.find[h]=f[h]);a.parseJSON=function(a){return a?x.apply(this,arguments):(b("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(g=a.uaMatch(navigator.userAgent),c={},g.browser&&(c[g.browser]=!0,c.version=g.version),c.chrome?c.webkit=!0:c.webkit&&(c.safari=!0),a.browser=c),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel=document.compatMode==="CSS1Compat",e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function c(a,b){return new c.fn.init(a,b)}a.extend(!0,c,this),c.superclass=this,c.fn=c.prototype=this(),c.fn.constructor=c,c.sub=this.sub,c.fn.init=function(e,f){var b=a.fn.init.call(this,e,f,d);return b instanceof c?b:c(b)},c.fn.init.prototype=c.fn;var d=c(document);return b("jQuery.sub() is deprecated"),c},a.fn.size=function(){return b("jQuery.fn.size() is deprecated; use the .length property"),this.length},l=!1,a.swap&&a.each(["height","width","reliableMarginRight"],function(d,b){var c=a.cssHooks[b]&&a.cssHooks[b].get;c&&(a.cssHooks[b].get=function(){var a;return l=!0,a=c.apply(this,arguments),l=!1,a})}),a.swap=function(c,d,g,h){var e,a,f={};l||b("jQuery.swap() is undocumented and deprecated");for(a in d)f[a]=c.style[a],c.style[a]=d[a];e=g.apply(c,h||[]);for(a in d)c.style[a]=f[a];return e},a.ajaxSetup({converters:{"text json":a.parseJSON}}),z=a.fn.data,a.fn.data=function(e){var f,c,g=this[0];if(g&&e==="events"&&arguments.length===1)if(f=a.data(g,e),c=a._data(g,e),(f===d||f===c)&&c!==d)return b("Use of jQuery.fn.data('events') is deprecated"),c;return z.apply(this,arguments)},A=/\/(java|ecma)script/i,a.clean||(a.clean=function(k,c,i,j){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,b("jQuery.clean() is deprecated");var f,d,g,h,e=[];if(a.merge(e,a.buildFragment(k,c).childNodes),i){g=function(a){if(!a.type||A.test(a.type))return j?j.push(a.parentNode?a.parentNode.removeChild(a):a):i.appendChild(a)};for(f=0;(d=e[f])!=null;f++)a.nodeName(d,"script")&&g(d)||(i.appendChild(d),typeof d.getElementsByTagName!="undefined"&&(h=a.grep(a.merge([],d.getElementsByTagName("script")),g),e.splice.apply(e,[f+1,0].concat(h)),f+=h.length))}return e}),B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,t=a.fn.live,n=a.fn.die,H=a.fn.load,r="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",m=new RegExp("\\b(?:"+r+")\\b"),s=/(?:^|\s)hover(\.\S+|)\b/,o=function(c){return typeof c!="string"||a.event.special.hover?c:(s.test(c)&&b("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),c&&c.replace(s,"mouseenter$1 mouseleave$1"))},a.event.props&&a.event.props[0]!=="attrChange"&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(c,a,d,e,f){c!==document&&m.test(a)&&b("AJAX events should be attached to document: "+a),B.call(this,c,o(a||""),d,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,o(b)||"",c,d,e)},a.each(["load","unload","error"],function(d,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return c==="load"&&typeof a[0]=="string"?H.apply(this,a):(b("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length)?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this)}}),a.fn.toggle=function(c,h){if(!a.isFunction(c)||!a.isFunction(h))return E.apply(this,arguments);b("jQuery.fn.toggle(handler, handler...) is deprecated");var d=arguments,f=c.guid||a.guid++,e=0,g=function(f){var b=(a._data(this,"lastToggle"+c.guid)||0)%e;return a._data(this,"lastToggle"+c.guid,b+1),f.preventDefault(),d[b].apply(this,arguments)||!1};for(g.guid=f;e<d.length;)d[e++].guid=f;return this.click(g)},a.fn.live=function(c,d,e){return b("jQuery.fn.live() is deprecated"),t?t.apply(this,arguments):(a(this.context).on(c,this.selector,d,e),this)},a.fn.die=function(c,d){return b("jQuery.fn.die() is deprecated"),n?n.apply(this,arguments):(a(this.context).off(c,this.selector||"**",d),this)},a.event.trigger=function(a,d,c,e){return!c&&!m.test(a)&&b("Global events are undocumented and deprecated"),D.call(this,a,d,c||document,e)},a.each(r.split("|"),function(c,b){a.event.special[b]={setup:function(){var c=this;return c!==document&&(a.event.add(document,b+"."+a.guid,function(){a.event.trigger(b,Array.prototype.slice.call(arguments,1),c,!0)}),a._data(this,b,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,b+"."+a._data(this,b)),!1}}}),a.event.special.ready={setup:function(){this===document&&b("'ready' event is deprecated")}},M=a.fn.andSelf||a.fn.addBack,N=a.fn.find,a.fn.andSelf=function(){return b("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(b){var a=N.apply(this,arguments);return a.context=this.context,a.selector=this.selector?this.selector+" "+b:b,a},a.Callbacks&&(O=a.Deferred,F=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]],a.Deferred=function(d){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var d=arguments;return b("deferred.pipe() is deprecated"),a.Deferred(function(b){a.each(F,function(g,h){var f=a.isFunction(d[g])&&d[g];c[h[1]](function(){var c=f&&f.apply(this,arguments);c&&a.isFunction(c.promise)?c.promise().done(b.resolve).fail(b.reject).progress(b.notify):b[h[0]+"With"](this===e?b.promise():this,f?[c]:arguments)})}),d=null}).promise()},c.isResolved=function(){return b("deferred.isResolved is deprecated"),c.state()==="resolved"},c.isRejected=function(){return b("deferred.isRejected is deprecated"),c.state()==="rejected"},d&&d.call(c,c),c})})(jQuery,window);
jQuery(document).ready(function(){jQuery(".ecs-load-more-button").each(function(){widget=jQuery(this),settings=widget.attr("data-settings"),args=JSON.parse(settings),widget.children(".elementor-button").attr("href","javascript:ECS_load_next_page('"+args.widget_id+"');")})});var canBeLoaded=!0;function ECS_load_next_page(a){widget=jQuery(".elementor-element[data-id='"+a+"'] .ecs-posts"),settings=widget.attr("data-settings"),args=JSON.parse(settings),posts=jQuery(".elementor-element[data-id='"+args.widget_id+"'] .ecs-posts"),args.load_method=='loadmore'&&(button_text=jQuery(".elementor-element[data-id='"+args.widget_id+"'] .ecs-load-more-button .elementor-button"),button=jQuery(".elementor-element[data-id='"+args.widget_id+"'] .ecs-load-more-button"),attb=JSON.parse(button.attr("data-settings"))),args.load_method=='lazyload'&&(animation=jQuery(".elementor-element[data-id='"+args.widget_id+"'] .ecs-lazyload")),data={action:'ecsload',query:ecs_ajax_params.posts,ecs_ajax_settings:settings},jQuery.ajax({url:ecs_ajax_params.ajaxurl,data,type:'POST',beforeSend:function(a){args.load_method=='loadmore'&&button_text.html(attb.loading_text),canBeLoaded=!1},success:function(a){a?(posts.append(a),args.current_page++,args.load_method=='loadmore'&&(button_text.html(attb.text),button_text.blur()),newsettings=JSON.stringify(args),widget.attr("data-settings",newsettings),args.load_method=='lazyload'&&jQuery(animation).addClass("animation-hidden"),ECS_do_action('ajax',args),args.current_page==args.max_num_pages&&(args.load_method=='loadmore'&&button.remove(),args.load_method=='lazyload'&&animation.remove()),canBeLoaded=!0,typeof ECScheckInView!='undefined'&&ECScheckInView()):(args.load_method=='loadmore'&&button.remove(),args.load_method=='lazyload'&&animation.remove())}})}jQuery(function(a){a('.ecs-lazyload').addClass("animation-hidden"),a('.ecs-lazyload a').css("display","none")});function EleCustomSkinChangeUrlPage(a){}jQuery(document).ready(function(){ECS_add_action("ajax",function(a){EleCustomSkinChangeUrlPage(a)})});
var ECS_hooks={},ECS_Columns_Count=0;function ECS_add_action(a,b){ECS_hooks[a]||(ECS_hooks[a]=[]),ECS_hooks[a].push(b)}function ECS_do_action(a,...b){ECS_hooks[a]&&ECS_hooks[a].forEach(a=>a(...b))};
var astraGetParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;0<=--a&&t.item(a)!==this;);return-1<a});for(var a=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&a.push(e);return a},getParents=function(e,t){console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."),astraGetParents(e,t)},astraToggleClass=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)},toggleClass=function(e,t){console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."),astraToggleClass(e,t)},astraTriggerEvent=(!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(e,t){var a=new CustomEvent(t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});e.dispatchEvent(a)});astraSmoothScroll=function(e,t){e.preventDefault(),window.scrollTo({top:t,left:0,behavior:"smooth"})},astScrollToTopHandler=function(e,t){var a=getComputedStyle(t).content,n=t.dataset.onDevices,a=a.replace(/[^0-9]/g,"");"both"==n||"desktop"==n&&"769"==a||"mobile"==n&&""==a?(n=window.pageYOffset||document.body.scrollTop,e&&e.length?n>e.offsetHeight+100?t.style.display="block":t.style.display="none":300<window.pageYOffset?t.style.display="block":t.style.display="none"):t.style.display="none"},function(){var r=document.querySelectorAll("#masthead .main-header-menu-toggle"),c=document.getElementById("masthead"),i={},d="",u=document.body,m="";function e(e){d=e.detail.type;var t=document.querySelectorAll(".menu-toggle");if("dropdown"===d&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),g("updateHeader")),"off-canvas"===d)for(var a=0;a<t.length;a++)void 0!==t[a]&&t[a].classList.contains("toggled")&&t[a].click();n(d)}function g(e){m=c.querySelector("#ast-mobile-header");var t="";if(null==m||"dropdown"!==m.dataset.type||"updateHeader"===e){t=(void 0!==e&&"updateHeader"!==e?e.closest(".ast-mobile-popup-inner"):document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");for(var a=0;a<t.length;a++){t[a].classList.remove("ast-submenu-expanded");for(var n=t[a].querySelectorAll(".sub-menu"),s=0;s<n.length;s++)n[s].style.display="none"}var o=document.querySelectorAll(".menu-toggle");document.body.classList.remove("ast-main-header-nav-open","ast-popup-nav-open"),document.documentElement.classList.remove("ast-off-canvas-active");for(var r=0;r<o.length;r++)o[r].classList.remove("toggled"),o[r].style.display="flex"}}function n(e){var t=document.querySelectorAll("#ast-mobile-header .menu-toggle"),a=document.querySelectorAll("#ast-desktop-header .menu-toggle");if(void 0===e&&null!==c)if(m=c.querySelector("#ast-mobile-header"))e=m.dataset.type;else{var n=c.querySelector("#ast-desktop-header");if(!n)return;e=n.dataset.toggleType}if("off-canvas"===e){var n=document.getElementById("menu-toggle-close"),s=document.querySelector(".ast-mobile-popup-inner");if(null==s)return;popupLinks=s.getElementsByTagName("a");for(var o=0;o<t.length;o++)t[o].removeEventListener("click",astraNavMenuToggle,!1),t[o].addEventListener("click",popupTriggerClick,!1),t[o].trigger_type="mobile";for(o=0;o<a.length;o++)a[o].removeEventListener("click",astraNavMenuToggle,!1),a[o].addEventListener("click",popupTriggerClick,!1),a[o].trigger_type="desktop";n.addEventListener("click",function(e){document.getElementById("ast-mobile-popup").classList.remove("active","show"),g(this)}),document.addEventListener("keyup",function(e){27===e.keyCode&&(e.preventDefault(),document.getElementById("ast-mobile-popup").classList.remove("active","show"),g())}),document.addEventListener("click",function(e){e.target===document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay")&&(document.getElementById("ast-mobile-popup").classList.remove("active","show"),g())});for(let e=0,t=popupLinks.length;e<t;e++)null!==popupLinks[e].getAttribute("href")&&(popupLinks[e].getAttribute("href").startsWith("#")||-1!==popupLinks[e].getAttribute("href").search("#"))&&(!popupLinks[e].parentElement.classList.contains("menu-item-has-children")||popupLinks[e].parentElement.classList.contains("menu-item-has-children")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon"))&&(popupLinks[e].addEventListener("click",p,!0),popupLinks[e].headerType="off-canvas");AstraToggleSetup()}else if("dropdown"===e){var r=document.querySelectorAll(".ast-mobile-header-content")||!1,s=document.querySelector(".ast-desktop-header-content")||!1;if(0<r.length)for(let e=0;e<r.length;e++){var l=r[e].getElementsByTagName("a");for(link=0,len=l.length;link<len;link++)null!==l[link].getAttribute("href")&&(l[link].getAttribute("href").startsWith("#")||-1!==l[link].getAttribute("href").search("#"))&&(!l[link].parentElement.classList.contains("menu-item-has-children")||l[link].parentElement.classList.contains("menu-item-has-children")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon"))&&(l[link].addEventListener("click",p,!0),l[link].headerType="dropdown")}if(s){var i=s.getElementsByTagName("a");for(link=0,len=i.length;link<len;link++)i[link].addEventListener("click",p,!0),i[link].headerType="dropdown"}for(o=0;o<t.length;o++)t[o].removeEventListener("click",popupTriggerClick,!1),t[o].addEventListener("click",astraNavMenuToggle,!1),t[o].trigger_type="mobile";for(o=0;o<a.length;o++)a[o].removeEventListener("click",popupTriggerClick,!1),a[o].addEventListener("click",astraNavMenuToggle,!1),a[o].trigger_type="desktop";AstraToggleSetup()}v()}function p(e){switch(e.currentTarget.headerType){case"dropdown":for(var t=document.querySelectorAll(".menu-toggle.toggled"),a=0;a<t.length;a++)t[a].click();break;case"off-canvas":document.getElementById("menu-toggle-close").click()}}""!==(m=null!=c?c.querySelector("#ast-mobile-header"):m)&&null!==m&&(d=m.dataset.type),document.addEventListener("astMobileHeaderTypeChange",e,!1),popupTriggerClick=function(e){var e=e.currentTarget.trigger_type,t=document.getElementById("ast-mobile-popup"),a=document.getElementById("menu-toggle-close");a&&a.focus(),u.classList.contains("ast-popup-nav-open")||u.classList.add("ast-popup-nav-open"),u.classList.contains("ast-main-header-nav-open")||"mobile"===e||u.classList.add("ast-main-header-nav-open"),document.documentElement.classList.contains("ast-off-canvas-active")||document.documentElement.classList.add("ast-off-canvas-active"),"desktop"===e&&(t.querySelector(".ast-mobile-popup-content").style.display="none",t.querySelector(".ast-desktop-popup-content").style.display="block"),"mobile"===e&&(t.querySelector(".ast-desktop-popup-content").style.display="none",t.querySelector(".ast-mobile-popup-content").style.display="block"),this.style.display="none",t.classList.add("active","show")},window.addEventListener("load",function(){n()}),document.addEventListener("astLayoutWidthChanged",function(){n()}),document.addEventListener("astPartialContentRendered",function(){r=document.querySelectorAll(".main-header-menu-toggle"),u.classList.remove("ast-main-header-nav-open"),document.addEventListener("astMobileHeaderTypeChange",e,!1),n(),v()});var s=null!==navigator.userAgent.match(/Android/i)&&"Android"===navigator.userAgent.match(/Android/i)[0]?window.visualViewport.width:window.innerWidth;window.addEventListener("resize",function(){var e,t,a,n;"INPUT"!==document.activeElement.tagName&&(e=document.getElementById("menu-toggle-close"),t=document.querySelector(".menu-toggle.toggled"),a=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),n=document.querySelector(".elementor-editor-active"),a&&(a.style.display="none"),(null!==navigator.userAgent.match(/Android/i)&&"Android"===navigator.userAgent.match(/Android/i)[0]?window.visualViewport.width:window.innerWidth)!==s&&(t&&null===n&&t.click(),document.body.classList.remove("ast-main-header-nav-open","ast-popup-nav-open"),e)&&null==n&&e.click(),h(),AstraToggleSetup())}),document.addEventListener("DOMContentLoaded",function(){if(AstraToggleSetup(),null!==(e=u.classList.contains("ast-header-break-point")?document.getElementById("ast-mobile-header"):document.getElementById("ast-desktop-header"))){var e,t=e.querySelector(".navigation-accessibility");if(t&&e){var a=e.getElementsByTagName("button")[0];if(void 0===a){if(!0===(a=e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon"))return;if(void 0===a)return}var n=t.getElementsByTagName("ul")[0];if(void 0===n)a.style.display="none";else{if(-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),"off-canvas"===d&&(document.getElementById("menu-toggle-close").onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))}),a.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))},!astra.is_header_footer_builder_active){for(var s=n.getElementsByTagName("a"),o=n.getElementsByTagName("ul"),r=0,l=o.length;r<l;r++)o[r].parentNode.setAttribute("aria-haspopup","true");for(r=0,l=s.length;r<l;r++)s[r].addEventListener("focus",k,!0),s[r].addEventListener("blur",k,!0),s[r].addEventListener("click",L,!0)}astra.is_header_footer_builder_active&&!function(){const t=document.querySelectorAll("nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow"),a=document.querySelectorAll("nav.site-navigation .sub-menu"),n=document.querySelectorAll("nav.site-navigation .menu-item-has-children"),s=document.querySelectorAll(".astra-full-megamenu-wrapper");t&&(t.forEach(e=>{e.addEventListener("keydown",function(a){"Enter"===a.key&&(a.target.closest("li").querySelector(".sub-menu").classList.contains("astra-megamenu")?setTimeout(()=>{var e=a.target.closest("li").querySelector(".sub-menu"),t=a.target.closest("li").querySelector(".astra-full-megamenu-wrapper");e&&e.classList.toggle("astra-megamenu-focus"),t&&t.classList.toggle("astra-megamenu-wrapper-focus"),a.target.closest("li").classList.toggle("ast-menu-hover"),"false"!==a.target.getAttribute("aria-expanded")&&a.target.getAttribute("aria-expanded")?a.target.setAttribute("aria-expanded","false"):a.target.setAttribute("aria-expanded","true")},10):setTimeout(()=>{a.target.closest("li").querySelector(".sub-menu").classList.toggle("toggled-on"),a.target.closest("li").classList.toggle("ast-menu-hover"),"false"!==a.target.getAttribute("aria-expanded")&&a.target.getAttribute("aria-expanded")?a.target.setAttribute("aria-expanded","false"):a.target.setAttribute("aria-expanded","true")},10))})}),(a||n)&&document.addEventListener("click",function(e){b(a,t,n,s)},!1),a||n)&&document.addEventListener("keydown",function(e){"Escape"===e.key&&b(a,t,n,s)},!1);var e=document.querySelectorAll("nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow");e&&e.forEach(e=>{e.addEventListener("keydown",function(e){e.target.closest("li").classList.contains("ast-menu-hover")||"Enter"!==e.key||b(a,t,n,s)},!1)})}()}}}});for(var t,a,o,l,h=function(){var e=u.style.overflow,t=(u.style.overflow="hidden",document.documentElement.clientWidth);if(u.style.overflow=e,astra.break_point<t||0===t){if(0<r.length)for(var a=0;a<r.length;a++)null!==r[a]&&r[a].classList.remove("toggled");u.classList.remove("ast-header-break-point"),u.classList.add("ast-desktop"),astraTriggerEvent(u,"astra-header-responsive-enabled")}else u.classList.add("ast-header-break-point"),u.classList.remove("ast-desktop"),astraTriggerEvent(u,"astra-header-responsive-disabled")},v=function(){var e=document.querySelectorAll(".ast-account-action-login");if(void 0!==e){var a=document.querySelectorAll("#ast-hb-login-close"),n=document.querySelectorAll("#ast-hb-account-login-wrap");if(0<a.length)for(let t=0;t<e.length;t++)e[t].onclick=function(e){e.preventDefault(),e.stopPropagation(),n[t].classList.contains("show")||n[t].classList.add("show")},a[t].onclick=function(e){e.preventDefault(),n[t].classList.remove("show")}}},f=(h(),AstraToggleSubMenu=function(e){e.preventDefault(),"false"!==e.target.getAttribute("aria-expanded")&&e.target.getAttribute("aria-expanded")?e.target.setAttribute("aria-expanded","false"):e.target.setAttribute("aria-expanded","true");for(var t=this.parentNode,a=(t.classList.contains("ast-submenu-expanded")&&document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")&&(this.classList.contains("ast-menu-toggle")||""!==(e=t.querySelector("a").getAttribute("href"))&&"#"!==e&&(window.location=e)),t.querySelectorAll(".menu-item-has-children")),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");var s=a[n].querySelector(".sub-menu, .children");null!==s&&(s.style.display="none")}for(var o=t.parentNode.querySelectorAll(".menu-item-has-children"),n=0;n<o.length;n++)if(o[n]!=t){o[n].classList.remove("ast-submenu-expanded");for(var r=o[n].querySelectorAll(".sub-menu"),l=0;l<r.length;l++)r[l].style.display="none"}t.classList.contains("menu-item-has-children")&&(astraToggleClass(t,"ast-submenu-expanded"),t.classList.contains("ast-submenu-expanded")?t.querySelector(".sub-menu").style.display="block":t.querySelector(".sub-menu").style.display="none")},AstraToggleSetup=function(){if("undefined"!=typeof astraAddon&&"function"==typeof astraToggleSetupPro)astraToggleSetupPro(d,u,i);else{var e,t,a,n=!1;if(0<(e="off-canvas"===d||"full-width"===d?(t=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(a=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length):(t=document.querySelectorAll("#ast-mobile-header"),(n=!(0<(e=(a=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:e))||n)for(var s=0;s<e;s++)if(n||(a[s].setAttribute("data-index",s),i[s])||(i[s]=a[s],a[s].addEventListener("click",astraNavMenuToggle,!1)),void 0!==t[s])for(var o,r=0;r<t.length;r++)if(0<(o=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?t[r].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):t[r].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var l=0;l<o.length;l++)o[l].addEventListener("click",AstraToggleSubMenu,!1)}},astraNavMenuToggle=function(e){if("undefined"!=typeof astraAddon)astraNavMenuTogglePro(e,u,d,this);else{e.preventDefault();var e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),t=(r=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),"0");if(null!==this.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),r=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),t="0"),void 0===e[t])return!1;for(var a=e[t].querySelectorAll(".menu-item-has-children"),n=0;n<a.length;n++){a[n].classList.remove("ast-submenu-expanded");for(var s=a[n].querySelectorAll(".sub-menu"),o=0;o<s.length;o++)s[o].style.display="none"}-1!==(this.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[t],"toggle-on"),astraToggleClass(r[t],"toggled"),e[t].classList.contains("toggle-on")?(e[t].style.display="block",u.classList.add("ast-main-header-nav-open")):(e[t].style.display="",u.classList.remove("ast-main-header-nav-open")))}},u.addEventListener("astra-header-responsive-enabled",function(){var e=document.querySelectorAll(".main-header-bar-navigation");if(0<e.length)for(var t=0;t<e.length;t++){null!=e[t]&&(e[t].classList.remove("toggle-on"),e[t].style.display="");for(var a=e[t].getElementsByClassName("sub-menu"),n=0;n<a.length;n++)a[n].style.display="";for(var s=e[t].getElementsByClassName("children"),o=0;o<s.length;o++)s[o].style.display="";for(var r=e[t].getElementsByClassName("ast-search-menu-icon"),l=0;l<r.length;l++)r[l].classList.remove("ast-dropdown-active"),r[l].style.display=""}},!1),E=navigator.userAgent,a=E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],/trident/i.test(a[1])?t=/\brv[ :]+(\d+)/g.exec(E)||[]:"Chrome"===a[1]&&null!=(t=E.match(/\bOPR|Edge\/(\d+)/))||(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=E.match(/version\/(\d+)/i))&&a.splice(1,1,t[1]),"Safari"===a[0]&&a[1]<11&&document.body.classList.add("ast-safari-browser-less-than-11")),document.getElementsByClassName("astra-search-icon")),y=0;y<f.length;y++)f[y].onclick=function(e){var t;this.classList.contains("slide-search")&&(e.preventDefault(),(t=this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active")?(""!==(t.querySelector(".search-field").value||"")&&t.querySelector(".search-form").submit(),t.classList.remove("ast-dropdown-active")):(t.classList.add("ast-dropdown-active"),t.querySelector(".search-field").setAttribute("autocomplete","off"),setTimeout(function(){t.querySelector(".search-field").focus()},200)))};function b(e,t,a,n){e&&e.forEach(e=>{e.classList.remove("astra-megamenu-focus"),e.classList.remove("toggled-on")}),a&&a.forEach(e=>{e.classList.remove("ast-menu-hover")}),n&&n.forEach(e=>{e.classList.remove("astra-megamenu-wrapper-focus")}),t&&t.forEach(e=>{e.setAttribute("aria-expanded","false")})}function L(){var e=this||"";if(e&&!e.classList.contains("astra-search-icon")&&null===e.closest(".ast-builder-menu")&&-1!==new String(e).indexOf("#")){var t=e.parentNode;if(u.classList.contains("ast-header-break-point"))document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")&&t.classList.contains("menu-item-has-children")||(document.querySelector(".main-header-menu-toggle").classList.remove("toggled"),(t=document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"),t.style.display="none",astraTriggerEvent(document.querySelector("body"),"astraMenuHashLinkClicked"));else for(;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&-1!==e.className.indexOf("focus")&&(e.className=e.className.replace(" focus","")),e=e.parentElement}}function k(){for(var e=this;-1===e.className.indexOf("navigation-accessibility");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("focus"),e=e.parentElement}if(u.onclick=function(e){if(void 0!==e.target.classList&&!e.target.classList.contains("ast-search-menu-icon")&&0===astraGetParents(e.target,".ast-search-menu-icon").length&&0===astraGetParents(e.target,".ast-search-icon").length)for(var t=document.getElementsByClassName("ast-search-menu-icon"),a=0;a<t.length;a++)t[a].classList.remove("ast-dropdown-active")},astra.is_header_footer_builder_active||"querySelector"in document&&"addEventListener"in window&&(u.addEventListener("mousedown",function(){u.classList.add("ast-mouse-clicked")}),u.addEventListener("keydown",function(){u.classList.remove("ast-mouse-clicked")})),astra.is_scroll_to_id){var E=document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"]):not([href*="uagb-tab"])');if(E)for(const link of E)""!==link.hash&&link.addEventListener("click",S);function S(e){let t=0;var a=document.querySelector(".site-header");a&&((a=a.querySelectorAll("div[data-stick-support]"))&&a.forEach(e=>{t+=e.clientHeight}),a=this.hash)&&(a=document.querySelector(a))&&(a=a.offsetTop-t)&&astraSmoothScroll(e,a)}}astra.is_scroll_to_top&&(o=document.querySelector("#page header"),l=document.getElementById("ast-scroll-top"),astScrollToTopHandler(o,l),window.addEventListener("scroll",function(){astScrollToTopHandler(o,l)}),l.onclick=function(e){astraSmoothScroll(e,0)},l.addEventListener("keydown",function(e){"Enter"===e.key&&astraSmoothScroll(e,0)}))}();;
jQuery(document).ready(function(a){});
var elementskit = {
			resturl: 'https://hpod420i.com/wp-json/elementskit/v1/',
		};
!function(){var c={793:function(){var a=function(Z,T){var a,f,X,d,x,i,l,W,v,r,Y,S,R,Q,p,g,s,t,u,k,j,m,P,O,A,N,M,L,K,J,I,H,e,F,E,D,C,B,b,y,o,h,c,q,U,V,w,n,z,G;window.google&&(a=T("#"+Z.find(".ekit-google-map").attr("id")),f=a.data("id"),X=a.data("api_key"),d=a.data("map_type"),x=a.data("map_address_type"),i=a.data("map_lat")||23.7808875,l=a.data("map_lng")||90.2792373,W=a.data("map_addr"),v=a.data("map_basic_marker_title"),r=a.data("map_basic_marker_content"),Y=a.data("map_basic_marker_icon_enable"),S=a.data("map_basic_marker_icon"),R=a.data("map_basic_marker_icon_width"),Q=a.data("map_basic_marker_icon_height"),p=a.data("map_zoom")||14,g=a.data("map_markers"),s=a.data("map_static_width"),t=a.data("map_static_height"),u=a.data("map_polylines"),k=a.data("map_stroke_color"),j=a.data("map_stroke_opacity"),m=a.data("map_stroke_weight"),P=a.data("map_stroke_fill_color"),O=a.data("map_stroke_fill_opacity"),A=a.data("map_overlay_content"),N=a.data("map_routes_origin_lat"),M=a.data("map_routes_origin_lng"),L=a.data("map_routes_dest_lat"),K=a.data("map_routes_dest_lng"),J=a.data("map_routes_travel_mode"),I=a.data("map_panorama_lat"),H=a.data("map_panorama_lng"),e=JSON.parse(decodeURIComponent((a.data("map_theme")+"").replace(/\+/g,"%20"))),F=a.data("map_streeview_control"),E=a.data("map_type_control"),D=a.data("map_zoom_control"),C=a.data("map_fullscreen_control"),B=a.data("map_scroll_zoom"),b={},("static"!==d&&(b=new GMaps({el:"#ekit-google-map-"+f,lat:i,lng:l,zoom:p,streetViewControl:F,mapTypeControl:E,zoomControl:D,fullscreenControl:C,scrollwheel:B})),""!=e&&(b.addStyle({styledMapName:"Styled Map",styles:JSON.parse(e),mapTypeId:"map_style"}),b.setStyle("map_style")),"basic"==d)&&(y=""!=r?{content:r}:"","yes"==Y?(o={url:S,scaledSize:new google.maps.Size(R,Q)}):o=null,"address"==x?GMaps.geocode({address:W,callback:function(c,d){if("OK"==d){var a=c[0].geometry.location;b.setCenter(a.lat()||0,a.lng()||0),b.addMarker({lat:a.lat(),lng:a.lng(),title:v,infoWindow:y,icon:o})}}}):"coordinates"==x&&b.addMarker({lat:i,lng:l,title:v,infoWindow:y,icon:o})),"marker"==d&&(c=JSON.parse(decodeURIComponent((g+"").replace(/\+/g,"%20")))).length>0&&(h=new GMaps({el:"#ekit-google-map-"+f,lat:c[0].map_marker_lat,lng:c[0].map_marker_lng,zoom:p,streetViewControl:F,mapTypeControl:E,zoomControl:D,fullscreenControl:C,scrollwheel:B}),h.setCenter(c[0].map_marker_lat||0,c[0].map_marker_lng||0),""!=e&&(h.addStyle({styledMapName:"Styled Map",styles:JSON.parse(e),mapTypeId:"map_style"}),h.setStyle("map_style")),c.forEach(function(a){var b,c;""!=a.map_marker_content?(b={content:a.map_marker_content}):b="","yes"==a.map_marker_icon_enable?(c={url:a.map_marker_icon.url,scaledSize:new google.maps.Size(a.map_marker_icon_width,a.map_marker_icon_height)}):c="",h.addMarker({lat:parseFloat(a.map_marker_lat),lng:parseFloat(a.map_marker_lng),title:a.map_marker_title,infoWindow:b,icon:c})})),"static"==d&&(c=JSON.parse(decodeURIComponent((g+"").replace(/\+/g,"%20"))),q=[],c.length>0&&c.forEach(function(a){q.push({lat:parseFloat(a.map_marker_lat),lng:parseFloat(a.map_marker_lng),color:a.ekit_google_map_marker_icon_color})}),U=GMaps.staticMapURL({zoom:p,size:[s,t],markers:q}),T("<img />").attr({width:s,height:t,src:U+"&key="+X}).appendTo("#ekit-google-map-"+f)),"polyline"==d&&(V=JSON.parse(decodeURIComponent((u+"").replace(/\+/g,"%20"))),c=JSON.parse(decodeURIComponent((g+"").replace(/\+/g,"%20"))),w=[],V.forEach(function(a){w.push([parseFloat(a.map_polyline_lat),parseFloat(a.map_polyline_lng)])}),n=JSON.parse(JSON.stringify(w)),b.drawPolyline({path:n,strokeColor:k.toString(),strokeOpacity:j,strokeWeight:m}),c.forEach(function(a){var c,d;""!=a.map_marker_content?(c={content:a.map_marker_content}):c="","yes"==a.map_marker_icon_enable?(d={url:a.map_marker_icon.url,scaledSize:new google.maps.Size(a.map_marker_icon_width,a.map_marker_icon_height)}):d="",b.addMarker({lat:a.map_marker_lat,lng:a.map_marker_lng,title:a.map_marker_title,infoWindow:c,icon:d})}),""!=e&&(b.addStyle({styledMapName:"Styled Map",styles:JSON.parse(e),mapTypeId:"polyline_map_style"}),b.setStyle("polyline_map_style"))),"polygon"==d&&(c=JSON.parse(decodeURIComponent((u+"").replace(/\+/g,"%20"))),z=[],c.forEach(function(a){z.push([parseFloat(a.map_polyline_lat),parseFloat(a.map_polyline_lng)])}),n=JSON.parse(JSON.stringify(z)),b.drawPolygon({paths:n,strokeColor:k.toString(),strokeOpacity:j,strokeWeight:m,fillColor:P.toString(),fillOpacity:O})),"overlay"==d&&(""!=A?(G='<div class="ekit-gmap-overlay">'+A+"</div>"):G="",b.drawOverlay({lat:i,lng:l,content:G})),"routes"==d&&(b.drawRoute({origin:[N,M],destination:[L,K],travelMode:J.toString(),strokeColor:k.toString(),strokeOpacity:j,strokeWeight:m}),(c=JSON.parse(decodeURIComponent((g+"").replace(/\+/g,"%20")))).length>0&&c.forEach(function(a){var c,d;""!=a.map_marker_content?(c={content:a.map_marker_content}):c="","yes"==a.map_marker_icon_enable?(d={url:a.map_marker_icon.url,scaledSize:new google.maps.Size(a.map_marker_icon_width,a.map_marker_icon_height)}):d="",b.addMarker({lat:a.map_marker_lat,lng:a.map_marker_lng,title:a.map_marker_title,infoWindow:c,icon:d})})),"panorama"==d&&GMaps.createPanorama({el:"#ekit-google-map-"+f,lat:I,lng:H}))};jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/elementskit-google-map.default",a)})},412:function(g,h,f){var b,e,a,c;function d(a){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(a)}"undefined"!=typeof window&&window,"function"==typeof(e=function(){function b(){}var a=b.prototype;return a.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},a.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{};return(c[a]=c[a]||{})[b]=!0,this}},a.off=function(c,d){var a=this._events&&this._events[c],b;if(a&&a.length)return b=a.indexOf(d),-1!=b&&a.splice(b,1),this},a.emitEvent=function(c,d){var a=this._events&&this._events[c],e,f,b;if(a&&a.length){a=a.slice(0),d=d||[];for(e=this._onceEvents&&this._onceEvents[c],f=0;f<a.length;f++)b=a[f],e&&e[b]&&(this.off(c,b),delete e[b]),b.apply(this,d);return this}},a.allOff=function(){delete this._events,delete this._onceEvents},b})?(a={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},b=e.call(a.exports,f,a.exports,a),a.loaded=!0,b===void 0&&(b=a.exports)):b=e,function(a,e){"use strict";c=function(b){return function(f,g){var e=f.jQuery,l=f.console,i,k;function h(a,b){for(var c in b)a[c]=b[c];return a}i=Array.prototype.slice;function j(a){return Array.isArray(a)?a:"object"==d(a)&&"number"==typeof a.length?i.call(a):[a]}function a(b,c,d){if(!(this instanceof a))return new a(b,c,d);var f=b;"string"==typeof b&&(f=document.querySelectorAll(b)),f?(this.elements=j(f),this.options=h({},this.options),"function"==typeof c?d=c:h(this.options,c),d&&this.on("always",d),this.getImages(),e&&(this.jqDeferred=new e.Deferred),setTimeout(this.check.bind(this))):l.error("Bad element for imagesLoaded "+(f||b))}a.prototype=Object.create(g.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(b){var c,d,a,f,e,g;if("IMG"==b.nodeName&&this.addImage(b),!0===this.options.background&&this.addElementBackgroundImages(b),c=b.nodeType,c&&k[c]){for(d=b.querySelectorAll("img"),a=0;a<d.length;a++)f=d[a],this.addImage(f);if("string"==typeof this.options.background){e=b.querySelectorAll(this.options.background);for(a=0;a<e.length;a++)g=e[a],this.addElementBackgroundImages(g)}}},k={1:!0,9:!0,11:!0};function b(a){this.img=a}function c(a,b){this.url=a,this.element=b,this.img=new Image}return a.prototype.addElementBackgroundImages=function(c){var b=getComputedStyle(c),d,a,e;if(b)for(d=/url\((['"])?(.*?)\1\)/gi,a=d.exec(b.backgroundImage);null!==a;)e=a&&a[2],e&&this.addBackground(e,c),a=d.exec(b.backgroundImage)},a.prototype.addImage=function(a){var c=new b(a);this.images.push(c)},a.prototype.addBackground=function(a,b){var d=new c(a,b);this.images.push(d)},a.prototype.check=function(){var a=this;function b(b,c,d){setTimeout(function(){a.progress(b,c,d)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(a){a.once("progress",b),a.check()}):this.complete()},a.prototype.progress=function(a,b,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emitEvent("progress",[this,a,b]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a),this.progressedCount==this.images.length&&this.complete(),this.options.debug},a.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done",b;this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(b=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[b](this))},b.prototype=Object.create(g.prototype),b.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},b.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},b.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.img,b])},b.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},b.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},b.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},b.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype=Object.create(b.prototype),c.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.element,b])},a.makeJQueryPlugin=function(b){(b=b||f.jQuery)&&((e=b).fn.imagesLoaded=function(b,c){return new a(this,b,c).jqDeferred.promise(e(this))})},a.makeJQueryPlugin(),a}(a,b)}.apply(h,[b]),c===void 0||(g.exports=c)}("undefined"!=typeof window?window:this)},32:function(){!function(a){"use strict";function b(){this.bodyEl=a("body"),this.wnEl=a(window)}b.prototype.setWnWidth=function(){this.wnWidth=this.wnEl.width()},b.prototype.hide=function(){this.el.removeClass("is-active"),this.bodyEl.children("[data-info-tip-content]").remove()},b.prototype.init=function(){var b=this;b.el.length&&(b.setWnWidth(),b.el.on("mouseover",function(){var e=a(this),d=e.offset(),c=e.children("p"),f;e.hasClass("is-active")||(e.addClass("is-active"),d.left=d.left-40,c=c.clone().css({transform:"translate3d("+d.left+"px, "+d.top+"px, 0px)"}).appendTo(b.bodyEl),d.left=d.left+10,c.contentWidth=c.outerWidth(),f=c.contentWidth-(d.left+c.contentWidth-b.wnWidth),f<c.contentWidth&&c.css("width",f))}).on("mouseleave",function(){b.hide()}),this.wnEl.on("resize",function(){c.setWnWidth(),c.hide()}))};var c=new b;a(window).on("load",function(){c.el=a("[data-info-tip]"),c.init()})}(jQuery)},557:function(N,O,n){var h,G,g,a,B,i,j,s,l,m,ah,ag,p,af,r,b,ae,ac,v,ab,x,aa,z,_,c,Y,D,W,F,P,H,U,J,T,L,S,I,R,o,Q,M,e,K,k,V,E,X,C,Z,A,$,y,aj,u,ad,t,q,f,d,ai;function w(a){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},w(a)}ai=window,f=[n(311)],d=function(a){return function(a,b){"use strict";function c(e,h,c){function i(d,b,h){var a,g="$()."+e+'("'+b+'")';return d.each(function(l,j){var d=c.data(j,e),i,k;d?(i=d[b],i&&"_"!=b.charAt(0)?(k=i.apply(d,h),a=void 0===a?k:a):f(g+" is not a valid method")):f(e+" not initialized. Cannot call methods, i.e. "+g)}),void 0!==a?a:d}function j(b,a){b.each(function(f,d){var b=c.data(d,e);b?(b.option(a),b._init()):(b=new h(d,a),c.data(d,e,b))})}(c=c||b||a.jQuery)&&(h.prototype.option||(h.prototype.option=function(a){c.isPlainObject(a)&&(this.options=c.extend(!0,this.options,a))}),c.fn[e]=function(a){return"string"==typeof a?i(this,a,g.call(arguments,1)):(j(this,a),this)},d(c))}function d(a){!a||a&&a.bridget||(a.bridget=c)}var g=Array.prototype.slice,e=a.console,f=void 0===e?function(){}:function(a){e.error(a)};return d(b||a.jQuery),c}(ai,a)}.apply(O,f),d===void 0||(N.exports=d),"undefined"!=typeof window&&window,G=function(){function b(){}var a=b.prototype;return a.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},a.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{};return(c[a]=c[a]||{})[b]=!0,this}},a.off=function(c,d){var a=this._events&&this._events[c],b;if(a&&a.length)return b=a.indexOf(d),-1!=b&&a.splice(b,1),this},a.emitEvent=function(c,d){var a=this._events&&this._events[c],e,f,b;if(a&&a.length){a=a.slice(0),d=d||[];for(e=this._onceEvents&&this._onceEvents[c],f=0;f<a.length;f++)b=a[f],e&&e[b]&&(this.off(c,b),delete e[b]),b.apply(this,d);return this}},a.allOff=function(){delete this._events,delete this._onceEvents},b},"function"==typeof G?(g={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},h=G.call(g.exports,n,g.exports,g),g.loaded=!0,h===void 0&&(h=g.exports)):h=G,window,B=function(){"use strict";function a(a){var b=parseFloat(a);return-1==a.indexOf("%")&&!isNaN(b)&&b}function h(){}function j(){for(var c={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},a=0;a<g;a++)c[b[a]]=0;return c}function d(b){var a=getComputedStyle(b);return a||i("Style returned "+a+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),a}function k(){var b,g,h;e||(e=!0,b=document.createElement("div"),b.style.width="200px",b.style.padding="1px 2px 3px 4px",b.style.borderStyle="solid",b.style.borderWidth="1px 2px 3px 4px",b.style.boxSizing="border-box",g=document.body||document.documentElement,g.appendChild(b),h=d(b),c=200==Math.round(a(h.width)),f.isBoxSizeOuter=c,g.removeChild(b))}function f(f){var h,e,y,i,n,x,p,s,q,v,u,l,r,o,m,t;if(k(),"string"==typeof f&&(f=document.querySelector(f)),f&&"object"==w(f)&&f.nodeType){if(h=d(f),"none"==h.display)return j();e={},e.width=f.offsetWidth,e.height=f.offsetHeight;for(y=e.isBorderBox="border-box"==h.boxSizing,i=0;i<g;i++)n=b[i],x=h[n],p=parseFloat(x),e[n]=isNaN(p)?0:p;return s=e.paddingLeft+e.paddingRight,q=e.paddingTop+e.paddingBottom,v=e.marginLeft+e.marginRight,u=e.marginTop+e.marginBottom,l=e.borderLeftWidth+e.borderRightWidth,r=e.borderTopWidth+e.borderBottomWidth,o=y&&c,m=a(h.width),!1!==m&&(e.width=m+(o?0:s+l)),t=a(h.height),!1!==t&&(e.height=t+(o?0:q+r)),e.innerWidth=e.width-(s+l),e.innerHeight=e.height-(q+r),e.outerWidth=e.width+v,e.outerHeight=e.height+u,e}}var c,i="undefined"==typeof console?h:function(a){console.error(a)},b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],g=b.length,e=!1;return f},"function"==typeof B?(i={id:"get-size/get-size",exports:{},loaded:!1},a=B.call(i.exports,n,i.exports,i),i.loaded=!0,a===void 0&&(a=i.exports)):a=B,function(a,b){"use strict";s=function(){var a=function(){var a=window.Element.prototype,c,b,d;if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(c=["webkit","moz","ms","o"],b=0;b<c.length;b++)if(d=c[b]+"MatchesSelector",a[d])return d}();return function(b,c){return b[a](c)}},"function"==typeof s?(l={id:"desandro-matches-selector/matches-selector",exports:{},loaded:!1},j=s.call(l.exports,n,l.exports,l),l.loaded=!0,j===void 0&&(j=l.exports)):j=s}(window),function(a,b){m=function(b){return function(b,c){var a={extend:function(a,b){for(var c in b)a[c]=b[c];return a},modulo:function(b,a){return(b%a+a)%a}},e=Array.prototype.slice,d;return a.makeArray=function(a){return Array.isArray(a)?a:null==a?[]:"object"==w(a)&&"number"==typeof a.length?e.call(a):[a]},a.removeFrom=function(a,c){var b=a.indexOf(c);-1!=b&&a.splice(b,1)},a.getParent=function(a,b){for(;a.parentNode&&a!=document.body;)if(a=a.parentNode,c(a,b))return a},a.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.filterFindElements=function(d,e){d=a.makeArray(d);var b=[];return d.forEach(function(a){if(a instanceof HTMLElement){if(!e)return void b.push(a);c(a,e)&&b.push(a);for(var f=a.querySelectorAll(e),d=0;d<f.length;d++)b.push(f[d])}}),b},a.debounceMethod=function(d,a,b){b=b||100;var e=d.prototype[a],c=a+"Timeout";d.prototype[a]=function(){var d=this[c],f,a;clearTimeout(d),f=arguments,a=this,this[c]=setTimeout(function(){e.apply(a,f),delete a[c]},b)}},a.docReady=function(a){var b=document.readyState;"complete"==b||"interactive"==b?setTimeout(a):document.addEventListener("DOMContentLoaded",a)},a.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(c,a,b){return a+"-"+b}).toLowerCase()},d=b.console,a.htmlInit=function(e,c){a.docReady(function(){var g=a.toDashed(c),f="data-"+g,i=document.querySelectorAll("["+f+"]"),j=document.querySelectorAll(".js-"+g),k=a.makeArray(i).concat(a.makeArray(j)),l=f+"-options",h=b.jQuery;k.forEach(function(a){var b,g=a.getAttribute(f)||a.getAttribute(l),i;try{b=g&&JSON.parse(g)}catch(b){return void(d&&d.error("Error parsing "+f+" on "+a.className+": "+b))}i=new e(a,b),h&&h.data(a,c,i)})})},a}(a,b)}.apply(ah={},f=[j]),m!==void 0||(m=ah)}(window),window,ag=[h,a],p=function(n,m){"use strict";var f,b,d,c,j,a,h,i,g;function l(a){for(var b in a)return!1;return!0}function e(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function k(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}return f=document.documentElement.style,b="string"==typeof f.transition?"transition":"WebkitTransition",d="string"==typeof f.transform?"transform":"WebkitTransform",c={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[b],j={transform:d,transition:b,transitionDuration:b+"Duration",transitionProperty:b+"Property",transitionDelay:b+"Delay"},a=e.prototype=Object.create(n.prototype),a.constructor=e,a._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.getSize=function(){this.size=m(this.element)},a.css=function(b){var c=this.element.style,a;for(a in b)c[j[a]||a]=b[a]},a.getPosition=function(){var g=getComputedStyle(this.element),h=this.layout._getOption("originLeft"),d=this.layout._getOption("originTop"),e=g[h?"left":"right"],f=g[d?"top":"bottom"],b=parseFloat(e),a=parseFloat(f),c=this.layout.size;-1!=e.indexOf("%")&&(b=b/100*c.width),-1!=f.indexOf("%")&&(a=a/100*c.height),b=isNaN(b)?0:b,a=isNaN(a)?0:a,b-=h?c.paddingLeft:c.paddingRight,a-=d?c.paddingTop:c.paddingBottom,this.position.x=b,this.position.y=a},a.layoutPosition=function(){var d=this.layout.size,a={},b=this.layout._getOption("originLeft"),c=this.layout._getOption("originTop"),e=b?"paddingLeft":"paddingRight",f=b?"left":"right",g=b?"right":"left",h=this.position.x+d[e],i,j,k,l;a[f]=this.getXValue(h),a[g]="",i=c?"paddingTop":"paddingBottom",j=c?"top":"bottom",k=c?"bottom":"top",l=this.position.y+d[i],a[j]=this.getYValue(l),a[k]="",this.css(a),this.emitEvent("layout",[this])},a.getXValue=function(a){var b=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!b?a/this.layout.size.width*100+"%":a+"px"},a.getYValue=function(a){var b=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&b?a/this.layout.size.height*100+"%":a+"px"},a._transitionTo=function(a,b){var d,e,f,g,h,c;this.getPosition(),d=this.position.x,e=this.position.y,f=a==this.position.x&&b==this.position.y,(this.setPosition(a,b),!f||this.isTransitioning)?(g=a-d,h=b-e,c={},c.transform=this.getTranslate(g,h),this.transition({to:c,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})):this.layoutPosition()},a.getTranslate=function(a,b){return"translate3d("+(a=this.layout._getOption("originLeft")?a:-a)+"px, "+(b=this.layout._getOption("originTop")?b:-b)+"px, 0)"},a.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},a.moveTo=a._transitionTo,a.setPosition=function(a,b){this.position.x=parseFloat(a),this.position.y=parseFloat(b)},a._nonTransition=function(a){for(var b in this.css(a.to),a.isCleaning&&this._removeStyles(a.to),a.onTransitionEnd)a.onTransitionEnd[b].call(this)},a.transition=function(a){var c,b;if(parseFloat(this.layout.options.transitionDuration)){c=this._transn;for(b in a.onTransitionEnd)c.onEnd[b]=a.onTransitionEnd[b];for(b in a.to)c.ingProperties[b]=!0,a.isCleaning&&(c.clean[b]=!0);a.from&&(this.css(a.from),this.element.offsetHeight),this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0}else this._nonTransition(a)},h="opacity,"+k(d),a.enableTransition=function(){if(!this.isTransitioning){var a=this.layout.options.transitionDuration;a="number"==typeof a?a+"ms":a,this.css({transitionProperty:h,transitionDuration:a,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(c,this,!1)}},a.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},a.onotransitionend=function(a){this.ontransitionend(a)},i={"-webkit-transform":"transform"},a.ontransitionend=function(c){if(c.target===this.element){var a=this._transn,b=i[c.propertyName]||c.propertyName;delete a.ingProperties[b],l(a.ingProperties)&&this.disableTransition(),b in a.clean&&(this.element.style[c.propertyName]="",delete a.clean[b]),b in a.onEnd&&(a.onEnd[b].call(this),delete a.onEnd[b]),this.emitEvent("transitionEnd",[this])}},a.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a._removeStyles=function(b){var a={},c;for(c in b)a[c]="";this.css(a)},g={transitionProperty:"",transitionDuration:"",transitionDelay:""},a.removeTransitionStyles=function(){this.css(g)},a.stagger=function(a){a=isNaN(a)?0:a,this.staggerDelay=a+"ms"},a.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},a.remove=function(){return b&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},a.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={};b[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},a.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},a.getHideRevealTransitionEndProperty=function(b){var a=this.layout.options[b],c;if(a.opacity)return"opacity";for(c in a)return c},a.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={};b[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},a.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},a.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},e},"function"==typeof p?(r=p.apply(af={},ag))===void 0&&(r=af):r=p,function(c,d){"use strict";b=function(a,b,d,e){return function(g,n,f,b,h){var j,d,i,l,e,a,k;function c(c,g){var a=b.getQueryElement(c),f;a?(this.element=a,d&&(this.$element=d(this.element)),this.options=b.extend({},this.constructor.defaults),this.option(g),f=++l,this.element.outlayerGUID=f,e[f]=this,this._create(),this._getOption("initLayout")&&this.layout()):j&&j.error("Bad element for "+this.constructor.namespace+": "+(a||c))}function m(b){function a(){b.apply(this,arguments)}return a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a}function o(b){if("number"==typeof b)return b;var a=b.match(/(^\d*\.?\d*)(\w*)/),c=a&&a[1],d=a&&a[2];return c.length?(c=parseFloat(c))*(k[d]||1):0}return j=g.console,d=g.jQuery,i=function(){},l=0,e={},c.namespace="outlayer",c.Item=h,c.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},a=c.prototype,b.extend(a,n.prototype),a.option=function(a){b.extend(this.options,a)},a._getOption=function(b){var a=this.constructor.compatOptions[b];return a&&void 0!==this.options[a]?this.options[a]:this.options[b]},c.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},a._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},a.reloadItems=function(){this.items=this._itemize(this.element.children)},a._itemize=function(d){for(var b=this._filterFindItemElements(d),e=this.constructor.Item,c=[],a=0,f;a<b.length;a++)f=new e(b[a],this),c.push(f);return c},a._filterFindItemElements=function(a){return b.filterFindElements(a,this.options.itemSelector)},a.getItemElements=function(){return this.items.map(function(a){return a.element})},a.layout=function(){this._resetLayout(),this._manageStamps();var a=this._getOption("layoutInstant"),b=void 0!==a?a:!this._isLayoutInited;this.layoutItems(this.items,b),this._isLayoutInited=!0},a._init=a.layout,a._resetLayout=function(){this.getSize()},a.getSize=function(){this.size=f(this.element)},a._getMeasurement=function(c,d){var b,a=this.options[c];a?("string"==typeof a?b=this.element.querySelector(a):a instanceof HTMLElement&&(b=a),this[c]=b?f(b)[d]:a):this[c]=0},a.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},a._getItemsForLayout=function(a){return a.filter(function(a){return!a.isIgnored})},a._layoutItems=function(a,c){if(this._emitCompleteOnItems("layout",a),a&&a.length){var b=[];a.forEach(function(a){var d=this._getItemLayoutPosition(a);d.item=a,d.isInstant=c||a.isLayoutInstant,b.push(d)},this),this._processLayoutQueue(b)}},a._getItemLayoutPosition=function(){return{x:0,y:0}},a._processLayoutQueue=function(a){this.updateStagger(),a.forEach(function(a,b){this._positionItem(a.item,a.x,a.y,a.isInstant,b)},this)},a.updateStagger=function(){var a=this.options.stagger;return null==a?void(this.stagger=0):(this.stagger=o(a),this.stagger)},a._positionItem=function(a,b,c,d,e){d?a.goTo(b,c):(a.stagger(e*this.stagger),a.moveTo(b,c))},a._postLayout=function(){this.resizeContainer()},a.resizeContainer=function(){if(this._getOption("resizeContainer")){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},a._getContainerSize=i,a._setContainerMeasure=function(b,c){if(void 0!==b){var a=this.size;a.isBorderBox&&(b+=c?a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth:a.paddingBottom+a.paddingTop+a.borderTopWidth+a.borderBottomWidth),b=Math.max(b,0),this.element.style[c?"width":"height"]=b+"px"}},a._emitCompleteOnItems=function(c,a){var e,b,f;function d(){e.dispatchEvent(c+"Complete",null,[a])}function g(){++f==b&&d()}e=this,b=a.length,a&&b?(f=0,a.forEach(function(a){a.once(c,g)})):d()},a.dispatchEvent=function(c,a,b){var f=a?[a].concat(b):b,e;this.emitEvent(c,f),d&&(this.$element=this.$element||d(this.element),a?(e=d.Event(a),e.type=c,this.$element.trigger(e,b)):this.$element.trigger(c,b))},a.ignore=function(b){var a=this.getItem(b);a&&(a.isIgnored=!0)},a.unignore=function(b){var a=this.getItem(b);a&&delete a.isIgnored},a.stamp=function(a){(a=this._find(a))&&(this.stamps=this.stamps.concat(a),a.forEach(this.ignore,this))},a.unstamp=function(a){(a=this._find(a))&&a.forEach(function(a){b.removeFrom(this.stamps,a),this.unignore(a)},this)},a._find=function(a){if(a)return"string"==typeof a&&(a=this.element.querySelectorAll(a)),b.makeArray(a)},a._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},a._getBoundingRect=function(){var b=this.element.getBoundingClientRect(),a=this.size;this._boundingRect={left:b.left+a.paddingLeft+a.borderLeftWidth,top:b.top+a.paddingTop+a.borderTopWidth,right:b.right-(a.paddingRight+a.borderRightWidth),bottom:b.bottom-(a.paddingBottom+a.borderBottomWidth)}},a._manageStamp=i,a._getElementOffset=function(d){var a=d.getBoundingClientRect(),b=this._boundingRect,c=f(d);return{left:a.left-b.left-c.marginLeft,top:a.top-b.top-c.marginTop,right:b.right-a.right-c.marginRight,bottom:b.bottom-a.bottom-c.marginBottom}},a.handleEvent=b.handleEvent,a.bindResize=function(){g.addEventListener("resize",this),this.isResizeBound=!0},a.unbindResize=function(){g.removeEventListener("resize",this),this.isResizeBound=!1},a.onresize=function(){this.resize()},b.debounceMethod(c,"onresize",100),a.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},a.needsResizeLayout=function(){var a=f(this.element);return this.size&&a&&a.innerWidth!==this.size.innerWidth},a.addItems=function(b){var a=this._itemize(b);return a.length&&(this.items=this.items.concat(a)),a},a.appended=function(b){var a=this.addItems(b);a.length&&(this.layoutItems(a,!0),this.reveal(a))},a.prepended=function(c){var a=this._itemize(c),b;a.length&&(b=this.items.slice(0),this.items=a.concat(b),this._resetLayout(),this._manageStamps(),this.layoutItems(a,!0),this.reveal(a),this.layoutItems(b))},a.reveal=function(a){if(this._emitCompleteOnItems("reveal",a),a&&a.length){var b=this.updateStagger();a.forEach(function(a,c){a.stagger(c*b),a.reveal()})}},a.hide=function(a){if(this._emitCompleteOnItems("hide",a),a&&a.length){var b=this.updateStagger();a.forEach(function(a,c){a.stagger(c*b),a.hide()})}},a.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},a.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},a.getItem=function(c){for(var a=0,b;a<this.items.length;a++)if(b=this.items[a],b.element==c)return b},a.getItems=function(a){a=b.makeArray(a);var c=[];return a.forEach(function(b){var a=this.getItem(b);a&&c.push(a)},this),c},a.remove=function(c){var a=this.getItems(c);this._emitCompleteOnItems("remove",a),a&&a.length&&a.forEach(function(a){a.remove(),b.removeFrom(this.items,a)},this)},a.destroy=function(){var a=this.element.style,b;a.height="",a.position="",a.width="",this.items.forEach(function(a){a.destroy()}),this.unbindResize(),b=this.element.outlayerGUID,delete e[b],delete this.element.outlayerGUID,d&&d.removeData(this.element,this.constructor.namespace)},c.data=function(a){var c=(a=b.getQueryElement(a))&&a.outlayerGUID;return c&&e[c]},c.create=function(e,f){var a=m(c);return a.defaults=b.extend({},c.defaults),b.extend(a.defaults,f),a.compatOptions=b.extend({},c.compatOptions),a.namespace=e,a.data=c.data,a.Item=m(h),b.htmlInit(a,e),d&&d.bridget&&d.bridget(e,a),a},k={ms:1,s:1e3},c.Item=h,c}(c,a,b,d,e)}.apply(ae={},f=[h,a,m,r]),b!==void 0||(b=ae)}(window),window,ac=[b],v=function(b){"use strict";var a,d,e;function c(){b.Item.apply(this,arguments)}return a=c.prototype=Object.create(b.Item.prototype),d=a._create,a._create=function(){this.id=this.layout.itemGUID++,d.call(this),this.sortData={}},a.updateSortData=function(){var b,c,a,d;if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random(),b=this.layout.options.getSortData,c=this.layout._sorters;for(a in b)d=c[a],this.sortData[a]=d(this.element,this)}},e=a.destroy,a.destroy=function(){e.apply(this,arguments),this.css({display:""})},c},"function"==typeof v?(x=v.apply(ab={},ac))===void 0&&(x=ab):x=v,window,aa=[a,b],z=function(c,d){"use strict";function b(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}var a=b.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(b){a[b]=function(){return d.prototype[b].apply(this.isotope,arguments)}}),a.needsVerticalResizeLayout=function(){var a=c(this.isotope.element);return this.isotope.size&&a&&a.innerHeight!=this.isotope.size.innerHeight},a._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},a.getColumnWidth=function(){this.getSegmentSize("column","Width")},a.getRowHeight=function(){this.getSegmentSize("row","Height")},a.getSegmentSize=function(e,a){var b=e+a,c="outer"+a,d;this._getMeasurement(b,c),!this[b]&&(d=this.getFirstItemSize(),this[b]=d&&d[c]||this.isotope.size["inner"+a])},a.getFirstItemSize=function(){var a=this.isotope.filteredItems[0];return a&&a.element&&c(a.element)},a.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},a.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},b.modes={},b.create=function(d,e){function c(){b.apply(this,arguments)}return c.prototype=Object.create(a),c.prototype.constructor=c,e&&(c.options=e),c.prototype.namespace=d,b.modes[d]=c,c},b},"function"==typeof z?(c=z.apply(_={},aa))===void 0&&(c=_):c=z,window,Y=[b,a],D=function(d,b){var c=d.create("masonry"),a;return c.compatOptions.fitWidth="isFitWidth",a=c.prototype,a._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},a.measureColumns=function(){var d,e,a,f,c,g;this.getContainerWidth(),!this.columnWidth&&(d=this.items[0],e=d&&d.element,this.columnWidth=e&&b(e).outerWidth||this.containerWidth),a=this.columnWidth+=this.gutter,f=this.containerWidth+this.gutter,c=f/a,g=a-f%a,c=Math[g&&g<1?"round":"floor"](c),this.cols=Math.max(c,1)},a.getContainerWidth=function(){var c=this._getOption("fitWidth")?this.element.parentNode:this.element,a=b(c);this.containerWidth=a&&a.innerWidth},a._getItemLayoutPosition=function(b){var e,c,a,f,g,h,d;b.getSize(),e=b.size.outerWidth%this.columnWidth,c=Math[e&&e<1?"round":"ceil"](b.size.outerWidth/this.columnWidth),c=Math.min(c,this.cols);for(a=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](c,b),f={x:this.columnWidth*a.col,y:a.y},g=a.y+b.size.outerHeight,h=c+a.col,d=a.col;d<h;d++)this.colYs[d]=g;return f},a._getTopColPosition=function(c){var a=this._getTopColGroup(c),b=Math.min.apply(Math,a);return{col:a.indexOf(b),y:b}},a._getTopColGroup=function(b){if(b<2)return this.colYs;for(var c=[],d=this.cols+1-b,a=0;a<d;a++)c[a]=this._getColGroupY(a,b);return c},a._getColGroupY=function(a,b){if(b<2)return this.colYs[a];var c=this.colYs.slice(a,a+b);return Math.max.apply(Math,c)},a._getHorizontalColPosition=function(b,c){var a=this.horizontalColIndex%this.cols,d;return a=b>1&&a+b>this.cols?0:a,d=c.size.outerWidth&&c.size.outerHeight,this.horizontalColIndex=d?a+b:this.horizontalColIndex,{col:a,y:this._getColGroupY(a,b)}},a._manageStamp=function(i){var f=b(i),c=this._getElementOffset(i),g=this._getOption("originLeft")?c.left:c.right,h=g+f.outerWidth,e=Math.floor(g/this.columnWidth),a,j,d;e=Math.max(0,e),a=Math.floor(h/this.columnWidth),a-=h%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(j=(this._getOption("originTop")?c.top:c.bottom)+f.outerHeight,d=e;d<=a;d++)this.colYs[d]=Math.max(j,this.colYs[d])},a._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("fitWidth")&&(a.width=this._getContainerFitWidth()),a},a._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},a.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!=this.containerWidth},c},"function"==typeof D?(F=D.apply(W={},Y))===void 0&&(F=W):F=D,window,P=[c,F],H=function(e,c){"use strict";var d=e.create("masonry"),a=d.prototype,f={_getElementOffset:!0,layout:!0,_getMeasurement:!0},b,g,h;for(b in c.prototype)f[b]||(a[b]=c.prototype[b]);return g=a.measureColumns,a.measureColumns=function(){this.items=this.isotope.filteredItems,g.call(this)},h=a._getOption,a._getOption=function(a){return"fitWidth"==a?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:h.apply(this.isotope,arguments)},d},"function"==typeof H?(J=H.apply(U={},P))===void 0&&(J=U):J=H,window,T=[c],L=function(c){"use strict";var b=c.create("fitRows"),a=b.prototype;return a._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},a._getItemLayoutPosition=function(a){var b,c,d;return a.getSize(),b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter,0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY),d={x:this.x,y:this.y},this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},a._getContainerSize=function(){return{height:this.maxY}},b},"function"==typeof L?(I=L.apply(S={},T))===void 0&&(I=S):I=L,window,R=[c],o=function(c){"use strict";var b=c.create("vertical",{horizontalAlignment:0}),a=b.prototype;return a._resetLayout=function(){this.y=0},a._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},a._getContainerSize=function(){return{height:this.y}},b},"function"==typeof o?(M=o.apply(Q={},R))===void 0&&(M=Q):M=o,function(e,g){d=function(a,g,b,c,d,f){return function(m,c,n,l,d,k,e){var f,g,b,a,i,h;function j(b,a){return function(g,h){for(var d=0,c,e,f;d<b.length;d++)if(c=b[d],e=g.sortData[c],f=h.sortData[c],e>f||e<f)return(e>f?1:-1)*((void 0!==a[c]?a[c]:a)?1:-1);return 0}}return f=m.jQuery,g=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},b=c.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0}),b.Item=k,b.LayoutMode=e,a=b.prototype,a._create=function(){for(var a in this.itemGUID=0,this._sorters={},this._getSorters(),c.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],e.modes)this._initLayoutMode(a)},a.reloadItems=function(){this.itemGUID=0,c.prototype.reloadItems.call(this)},a._itemize=function(){for(var a=c.prototype._itemize.apply(this,arguments),b=0;b<a.length;b++)a[b].id=this.itemGUID++;return this._updateItemsSortData(a),a},a._initLayoutMode=function(a){var b=e.modes[a],c=this.options[a]||{};this.options[a]=b.options?d.extend(b.options,c):c,this.modes[a]=new b(this)},a.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},a._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},a.arrange=function(b){this.option(b),this._getIsInstant();var a=this._filter(this.items);this.filteredItems=a.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[a]):this._hideReveal(a),this._sort(),this._layout()},a._init=a.arrange,a._hideReveal=function(a){this.reveal(a.needReveal),this.hide(a.needHide)},a._getIsInstant=function(){var a=this._getOption("layoutInstant"),b=void 0!==a?a:!this._isLayoutInited;return this._isInstant=b,b},a._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},a._filter=function(g){var d=this.options.filter,h,e,f,i,b,a,c;d=d||"*";for(h=[],e=[],f=[],i=this._getFilterTest(d),b=0;b<g.length;b++)a=g[b],a.isIgnored||(c=i(a),c&&h.push(a),c&&a.isHidden?e.push(a):c||a.isHidden||f.push(a));return{matches:h,needReveal:e,needHide:f}},a._getFilterTest=function(a){return f&&this.options.isJQueryFiltering?function(b){return f(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return l(b.element,a)}},a.updateSortData=function(a){var b;a?(a=d.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},a._getSorters=function(){var a=this.options.getSortData,b,c;for(b in a)c=a[b],this._sorters[b]=i(c)},a._updateItemsSortData=function(a){for(var c=a&&a.length,b=0;c&&b<c;b++)a[b].updateSortData()},i=function(){function a(a){if("string"!=typeof a)return a;var d=g(a).split(" "),e=d[0],f=e.match(/^\[(.+)\]$/),h=c(f&&f[1],e),i=b.sortDataParsers[d[1]];return i?function(a){return a&&i(h(a))}:function(a){return a&&h(a)}}function c(a,b){return a?function(b){return b.getAttribute(a)}:function(c){var a=c.querySelector(b);return a&&a.textContent}}return a}(),b.sortDataParsers={parseInt:function(a){function b(b){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(a){return parseInt(a,10)}),parseFloat:function(a){function b(b){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(a){return parseFloat(a)})},a._sort=function(){var a,b;this.options.sortBy&&(a=d.makeArray(this.options.sortBy),this._getIsSameSortBy(a)||(this.sortHistory=a.concat(this.sortHistory)),b=j(this.sortHistory,this.options.sortAscending),this.filteredItems.sort(b))},a._getIsSameSortBy=function(b){for(var a=0;a<b.length;a++)if(b[a]!=this.sortHistory[a])return!1;return!0},a._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},a._resetLayout=function(){c.prototype._resetLayout.call(this),this._mode()._resetLayout()},a._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},a._manageStamp=function(a){this._mode()._manageStamp(a)},a._getContainerSize=function(){return this._mode()._getContainerSize()},a.needsResizeLayout=function(){return this._mode().needsResizeLayout()},a.appended=function(b){var a=this.addItems(b),c;a.length&&(c=this._filterRevealAdded(a),this.filteredItems=this.filteredItems.concat(c))},a.prepended=function(b){var a=this._itemize(b),c;a.length&&(this._resetLayout(),this._manageStamps(),c=this._filterRevealAdded(a),this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=a.concat(this.items))},a._filterRevealAdded=function(b){var a=this._filter(b);return this.hide(a.needHide),this.reveal(a.matches),this.layoutItems(a.matches,!0),a.matches},a.insert=function(e){var b=this.addItems(e),a,d,c,f;if(b.length){c=b.length;for(a=0;a<c;a++)d=b[a],this.element.appendChild(d.element);f=this._filter(b).matches;for(a=0;a<c;a++)b[a].isLayoutInstant=!0;for(this.arrange(),a=0;a<c;a++)delete b[a].isLayoutInstant;this.reveal(f)}},h=a.remove,a.remove=function(a){var b,e,c,f;a=d.makeArray(a),b=this.getItems(a),h.call(this,a);for(e=b&&b.length,c=0;e&&c<e;c++)f=b[c],d.removeFrom(this.filteredItems,f)},a.shuffle=function(){for(var a=0;a<this.items.length;a++)this.items[a].sortData.random=Math.random();this.options.sortBy="random",this._sort(),this._layout()},a._noTransition=function(a,b){var c=this.options.transitionDuration,d;return this.options.transitionDuration=0,d=a.apply(this,b),this.options.transitionDuration=c,d},a.getFilteredItemElements=function(){return this.filteredItems.map(function(a){return a.element})},b}(e,a,0,b,c,d,f)}.apply(O,f=[b,a,j,m,x,c,J,I,M]),d===void 0||(N.exports=d)}(window),window,K=function(){function a(c){for(var b in a.defaults)this[b]=a.defaults[b];for(b in c)this[b]=c[b]}a.defaults={x:0,y:0,width:0,height:0};var b=a.prototype;return b.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},b.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},b.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],g=this.x+this.width,h=this.y+this.height,e=b.x+b.width,f=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),g>e&&(c=new a({x:e,y:this.y,width:g-e,height:this.height}),d.push(c)),h>f&&(c=new a({x:this.x,y:f,width:this.width,height:h-f}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},b.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a},"function"==typeof K?(k={id:"packery/js/rect",exports:{},loaded:!1},e=K.call(k.exports,n,k.exports,k),k.loaded=!0,e===void 0&&(e=k.exports)):e=K,window,V=[e],E=function(d){var a,c;function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}return a=b.prototype,a.reset=function(){this.spaces=[];var a=new d({x:0,y:0,width:this.width,height:this.height});this.spaces.push(a),this.sorter=c[this.sortDirection]||c.downwardLeftToRight},a.pack=function(b){for(var a=0,c;a<this.spaces.length;a++)if(c=this.spaces[a],c.canFit(b)){this.placeInSpace(b,c);break}},a.columnPack=function(a){for(var c=0,b;c<this.spaces.length;c++)if(b=this.spaces[c],b.x<=a.x&&b.x+b.width>=a.x+a.width&&b.height>=a.height-.01){a.y=b.y,this.placed(a);break}},a.rowPack=function(a){for(var c=0,b;c<this.spaces.length;c++)if(b=this.spaces[c],b.y<=a.y&&b.y+b.height>=a.y+a.height&&b.width>=a.width-.01){a.x=b.x,this.placed(a);break}},a.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},a.placed=function(e){for(var a=[],b=0,c,d;b<this.spaces.length;b++)c=this.spaces[b],d=c.getMaximalFreeRects(e),d?a.push.apply(a,d):a.push(c);this.spaces=a,this.mergeSortSpaces()},a.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},a.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){var b=0,c=a[b],d,e;t:for(;c;){for(d=0,e=a[b+d];e;){if(e==c)d++;else{if(e.contains(c)){a.splice(b,1),c=a[b];continue t}c.contains(e)?a.splice(b+d,1):d++}e=a[b+d]}c=a[++b]}return a},c={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}},b},"function"==typeof E?(C=E.apply(X={},V))===void 0&&(C=X):C=E,window,Z=[b,e],A=function(c,e){var b="string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform",d=function(){c.Item.apply(this,arguments)},a=d.prototype=Object.create(c.Item.prototype),f=a._create,g;return a._create=function(){f.call(this),this.rect=new e},g=a.moveTo,a.moveTo=function(a,b){var c=Math.abs(this.position.x-a),d=Math.abs(this.position.y-b);return this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>c&&1>d?void this.goTo(a,b):void g.apply(this,arguments)},a.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&b&&(this.element.style[b]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},a.disablePlacing=function(){this.isPlacing=!1},a.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},a.showDropPlaceholder=function(){var a=this.dropPlaceholder;a||((a=this.dropPlaceholder=document.createElement("div")).className="packery-drop-placeholder",a.style.position="absolute"),a.style.width=this.size.width+"px",a.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(a)},a.positionDropPlaceholder=function(){this.dropPlaceholder.style[b]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},a.hideDropPlaceholder=function(){this.layout.element.removeChild(this.dropPlaceholder)},d},"function"==typeof A?(y=A.apply($={},Z))===void 0&&(y=$):y=A,window,aj=[a,b,e,C,y],u=function(d,g,c,f,k){var b,a,e,h;function l(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function i(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}function j(a,b){var c=b.x-a.x,d=b.y-a.y;return Math.sqrt(c*c+d*d)}return c.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1},b=g.create("packery"),b.Item=k,a=b.prototype,a._create=function(){g.prototype._create.call(this),this.packer=new f,this.shiftPacker=new f,this.isEnabled=!0,this.dragItemCount=0;var a=this;this.handleDraggabilly={dragStart:function(){a.itemDragStart(this.element)},dragMove:function(){a.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){a.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(b,c){c&&a.itemDragStart(b.currentTarget)},drag:function(c,b){b&&a.itemDragMove(c.currentTarget,b.position.left,b.position.top)},stop:function(b,c){c&&a.itemDragEnd(b.currentTarget)}}},a._resetLayout=function(){var a,b,c;this.getSize(),this._getMeasurements(),this._getOption("horizontal")?(a=1/0,b=this.size.innerHeight+this.gutter,c="rightwardTopToBottom"):(a=this.size.innerWidth+this.gutter,b=1/0,c="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=a,this.packer.height=this.shiftPacker.height=b,this.packer.sortDirection=this.shiftPacker.sortDirection=c,this.packer.reset(),this.maxY=0,this.maxX=0},a._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},a._getItemLayoutPosition=function(a){if(this._setRectSize(a.element,a.rect),this.isShifting||this.dragItemCount>0){var b=this._getPackMethod();this.packer[b](a.rect)}else this.packer.pack(a.rect);return this._setMaxXY(a.rect),a.rect},a.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},a._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},a._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},a._setRectSize=function(f,c){var e=d(f),a=e.outerWidth,b=e.outerHeight;(a||b)&&(a=this._applyGridGutter(a,this.columnWidth),b=this._applyGridGutter(b,this.rowHeight)),c.width=Math.min(a,this.packer.width),c.height=Math.min(b,this.packer.height)},a._applyGridGutter=function(b,a){if(!a)return b+this.gutter;var c=b%(a+=this.gutter);return Math[c&&1>c?"round":"ceil"](b/a)*a},a._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},a._manageStamp=function(d){var a,e=this.getItem(d),b;e&&e.isPlacing?a=e.rect:(b=this._getElementOffset(d),a=new c({x:this._getOption("originLeft")?b.left:b.right,y:this._getOption("originTop")?b.top:b.bottom})),this._setRectSize(d,a),this.packer.placed(a),this._setMaxXY(a)},a.sortItemsByPosition=function(){var a=this._getOption("horizontal")?i:l;this.items.sort(a)},a.fit=function(d,b,c){var a=this.getItem(d);a&&(this.stamp(a.element),a.enablePlacing(),this.updateShiftTargets(a),b=void 0===b?a.rect.x:b,c=void 0===c?a.rect.y:c,this.shift(a,b,c),this._bindFitEvents(a),a.moveTo(a.rect.x,a.rect.y),this.shiftLayout(),this.unstamp(a.element),this.sortItemsByPosition(),a.disablePlacing())},a._bindFitEvents=function(a){function b(){2==++d&&c.dispatchEvent("fitComplete",null,[a])}var c=this,d=0;a.once("layout",b),this.once("layoutComplete",b)},a.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},a.needsResizeLayout=function(){var b=d(this.element),a=this._getOption("horizontal")?"innerHeight":"innerWidth";return b[a]!=this.size[a]},a.resizeShiftPercentLayout=function(){var f=this._getItemsForLayout(this.items),b=this._getOption("horizontal"),c=b?"y":"x",g=b?"height":"width",e=b?"rowHeight":"columnWidth",h=b?"innerHeight":"innerWidth",a=this[e],i,j,k;(a=a&&a+this.gutter)?(this._getMeasurements(),i=this[e]+this.gutter,f.forEach(function(b){var d=Math.round(b.rect[c]/a);b.rect[c]=d*i})):(j=d(this.element)[h]+this.gutter,k=this.packer[g],f.forEach(function(a){a.rect[c]=a.rect[c]/k*j})),this.shiftLayout()},a.itemDragStart=function(b){if(this.isEnabled){this.stamp(b);var a=this.getItem(b);a&&(a.enablePlacing(),a.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(a))}},a.updateShiftTargets=function(h){var l,k,d,i,e,b,a,j,g,f,m,n;if(this.shiftPacker.reset(),this._getBoundingRect(),l=this._getOption("originLeft"),k=this._getOption("originTop"),this.stamps.forEach(function(b){var d=this.getItem(b),a,e;(!d||!d.isPlacing)&&(a=this._getElementOffset(b),e=new c({x:l?a.left:a.right,y:k?a.top:a.bottom}),this._setRectSize(b,e),this.shiftPacker.placed(e))},this),d=this._getOption("horizontal"),i=d?"rowHeight":"columnWidth",e=d?"height":"width",this.shiftTargetKeys=[],this.shiftTargets=[],a=this[i],a=a&&a+this.gutter){j=Math.ceil(h.rect[e]/a),g=Math.floor((this.shiftPacker[e]+this.gutter)/a),b=(g-j)*a;for(f=0;g>f;f++)this._addShiftTarget(f*a,0,b)}else b=this.shiftPacker[e]+this.gutter-h.rect[e],this._addShiftTarget(0,0,b);m=this._getItemsForLayout(this.items),n=this._getPackMethod(),m.forEach(function(g){var c=g.rect,h,i,j,f,k,l;if(this._setRectSize(g.element,c),this.shiftPacker[n](c),this._addShiftTarget(c.x,c.y,b),h=d?c.x+c.width:c.x,i=d?c.y:c.y+c.height,this._addShiftTarget(h,i,b),a)for(j=Math.round(c[e]/a),f=1;j>f;f++)k=d?h:c.x+a*f,l=d?c.y+a*f:i,this._addShiftTarget(k,l,b)},this)},a._addShiftTarget=function(a,b,e){var c=this._getOption("horizontal")?b:a,d;0!==c&&c>e||(d=a+","+b,-1!=this.shiftTargetKeys.indexOf(d)||(this.shiftTargetKeys.push(d),this.shiftTargets.push({x:a,y:b})))},a.shift=function(b,d,e){var a,c=1/0,f={x:d,y:e};this.shiftTargets.forEach(function(b){var d=j(b,f);c>d&&(a=b,c=d)}),b.rect.x=a.x,b.rect.y=a.y},e=120,a.itemDragMove=function(h,d,f){var a,c,b;function g(){c.shift(a,d,f),a.positionDropPlaceholder(),c.layout()}a=this.isEnabled&&this.getItem(h),a&&(d-=this.size.paddingLeft,f-=this.size.paddingTop,c=this,b=new Date,this._itemDragTime&&b-this._itemDragTime<e?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(g,e)):(g(),this._itemDragTime=b))},a.itemDragEnd=function(e){var a,c,d;function b(){2==++c&&(a.element.classList.remove("is-positioning-post-drag"),a.hideDropPlaceholder(),d.dispatchEvent("dragItemPositioned",null,[a]))}a=this.isEnabled&&this.getItem(e),a&&(clearTimeout(this.dragTimeout),a.element.classList.add("is-positioning-post-drag"),c=0,d=this,a.once("layout",b),this.once("layoutComplete",b),a.moveTo(a.rect.x,a.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),a.disablePlacing(),this.unstamp(a.element))},a.bindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"on")},a.unbindDraggabillyEvents=function(a){this._bindDraggabillyEvents(a,"off")},a._bindDraggabillyEvents=function(a,b){var c=this.handleDraggabilly;a[b]("dragStart",c.dragStart),a[b]("dragMove",c.dragMove),a[b]("dragEnd",c.dragEnd)},a.bindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"on")},a.unbindUIDraggableEvents=function(a){this._bindUIDraggableEvents(a,"off")},a._bindUIDraggableEvents=function(c,a){var b=this.handleUIDraggable;c[a]("dragstart",b.start)[a]("drag",b.drag)[a]("dragstop",b.stop)},h=a.destroy,a.destroy=function(){h.apply(this,arguments),this.isEnabled=!1},b.Rect=c,b.Packer=f,b},"function"==typeof u?(t=u.apply(ad={},aj))===void 0&&(t=ad):t=u,window,f=[c,t],q=function(e,b){var d=e.create("packery"),a=d.prototype,f={_getElementOffset:!0,_getMeasurement:!0},c,g,h,i,j;for(c in b.prototype)f[c]||(a[c]=b.prototype[c]);return g=a._resetLayout,a._resetLayout=function(){this.packer=this.packer||new b.Packer,this.shiftPacker=this.shiftPacker||new b.Packer,g.apply(this,arguments)},h=a._getItemLayoutPosition,a._getItemLayoutPosition=function(a){return a.rect=a.rect||new b.Rect,h.call(this,a)},i=a.needsResizeLayout,a.needsResizeLayout=function(){return this._getOption("horizontal")?this.needsVerticalResizeLayout():i.call(this)},j=a._getOption,a._getOption=function(a){return"horizontal"==a?void 0!==this.options.isHorizontal?this.options.isHorizontal:this.options.horizontal:j.apply(this.isotope,arguments)},d},(d="function"==typeof q?q.apply(O,f):q)===void 0||(N.exports=d)},101:function(d,e,f){var a,b,c;!function(g){"use strict";b=[f(311)],a=function(a){var c=[],b=[],f={precision:100,elapse:!1,defer:!1},e,d;function g(a){if(a instanceof Date)return a;if(String(a).match(b))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}b.push(/^[0-9]*$/.source),b.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),b.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),b=new RegExp(b.join("|")),e={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"};function h(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function i(a){return function(d){var f=d.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi),g,k,c,l,i,m,b;if(f)for(g=0,k=f.length;g<k;++g)c=f[g].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),l=h(c[0]),i=c[1]||"",m=c[3]||"",b=null,c=c[2],e.hasOwnProperty(c)&&(b=e[c],b=Number(a[b])),null!==b&&("!"===i&&(b=j(m,b)),""===i&&b<10&&(b="0"+b.toString()),d=d.replace(l,b.toString()));return d=d.replace(/%%/,"%")}}function j(a,d){var b="s",c="";return a&&(1===(a=a.replace(/(:|;|\s)/gi,"").split(/\,/)).length?b=a[0]:(c=a[0],b=a[1])),Math.abs(d)>1?b:c}d=function(d,e,b){this.el=d,this.$el=a(d),this.interval=null,this.offset={},this.options=a.extend({},f),this.firstTick=!0,this.instanceNumber=c.length,c.push(this),this.$el.data("countdown-instance",this.instanceNumber),b&&("function"==typeof b?(this.$el.on("update.countdown",b),this.$el.on("stoped.countdown",b),this.$el.on("finish.countdown",b)):this.options=a.extend({},f,b)),this.setFinalDate(e),!1===this.options.defer&&this.start()},a.extend(d.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),c[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=g(a)},update:function(){if(0!==this.$el.closest("html").length){var a,b=new Date;a=this.finalDate.getTime()-b.getTime(),a=Math.ceil(a/1e3),a=!this.options.elapse&&a<0?0:Math.abs(a),this.totalSecsLeft===a||this.firstTick?this.firstTick=!1:(this.totalSecsLeft=a,this.elapsed=b>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-b.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))}else this.remove()},dispatchEvent:function(c){var b=a.Event(c+".countdown");b.finalDate=this.finalDate,b.elapsed=this.elapsed,b.offset=a.extend({},this.offset),b.strftime=i(this.offset),this.$el.trigger(b)}}),a.fn.theFinalCountdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var g=a(this).data("countdown-instance"),e,f;g!==void 0?(e=c[g],f=b[0],d.prototype.hasOwnProperty(f)?e[f].apply(e,b.slice(1)):null===String(f).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(e.setFinalDate.call(e,f),e.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,f))):new d(this,b[0],b[1])})}},(c="function"==typeof a?a.apply(e,b):a)===void 0||(d.exports=c)}()},580:function(d,e,f){var c,a;function b(a){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}c=[f(311)],a=function(a){return function(a){var c=function(k,a){var f,d=document.createElement("canvas"),c,e,g,h,l,i,j;k.appendChild(d),"object"==("undefined"==typeof G_vmlCanvasManager?"undefined":b(G_vmlCanvasManager))&&G_vmlCanvasManager.initElement(d),c=d.getContext("2d"),d.width=d.height=a.size,e=1,window.devicePixelRatio>1&&(e=window.devicePixelRatio,d.style.width=d.style.height=[a.size,"px"].join(""),d.width=d.height=a.size*e,c.scale(e,e)),c.translate(a.size/2,a.size/2),c.rotate((a.rotate/180-.5)*Math.PI),g=(a.size-a.lineWidth)/2,a.scaleColor&&a.scaleLength&&(g-=a.scaleLength+2),Date.now=Date.now||function(){return+new Date},h=function(b,d,a){var e=0>=(a=Math.min(Math.max(-1,a||0),1));c.beginPath(),c.arc(0,0,g,0,2*Math.PI*a,e),c.strokeStyle=b,c.lineWidth=d,c.stroke()},l=function(){var d,b,e;c.lineWidth=1,c.fillStyle=a.scaleColor,c.save();for(e=24;e>0;--e)e%6==0?(b=a.scaleLength,d=0):(b=.6*a.scaleLength,d=a.scaleLength-b),c.fillRect(-a.size/2+d,0,b,1),c.rotate(Math.PI/12);c.restore()},i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},j=function(){a.scaleColor&&l(),a.trackColor&&h(a.trackColor,a.trackWidth||a.lineWidth,1)},this.getCanvas=function(){return d},this.getCtx=function(){return c},this.clear=function(){c.clearRect(a.size/-2,a.size/-2,a.size,a.size)},this.draw=function(b){var d;a.scaleColor||a.trackColor?c.getImageData&&c.putImageData?f?c.putImageData(f,0,0):(j(),f=c.getImageData(0,0,a.size*e,a.size*e)):(this.clear(),j()):this.clear(),c.lineCap=a.lineCap,d="function"==typeof a.barColor?a.barColor(b):a.barColor,h(d,a.lineWidth,b/100)}.bind(this),this.animate=function(b,c){var e=Date.now(),d;a.onStart(b,c),d=function(){var f=Math.min(Date.now()-e,a.animate.duration),g=a.easing(this,f,b,c-b,a.animate.duration);this.draw(g),a.onStep(b,c,g),f>=a.animate.duration?a.onStop(b,c):i(d)}.bind(this),i(d)}.bind(this)},d=function(b,e){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}},a,f,g;if(void 0!==c)d.renderer=c;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}a={},f=0,g=function(){for(var c in this.el=b,this.options=a,d)d.hasOwnProperty(c)&&(a[c]=e&&"undefined"!=typeof e[c]?e[c]:d[c],"function"==typeof a[c]&&(a[c]=a[c].bind(this)));"string"==typeof a.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[a.easing])?a.easing=jQuery.easing[a.easing]:a.easing=d.easing,"number"==typeof a.animate&&(a.animate={duration:a.animate,enabled:!0}),"boolean"!=typeof a.animate||a.animate||(a.animate={duration:1e3,enabled:a.animate}),this.renderer=new a.renderer(b,a),this.renderer.draw(f),b.dataset&&b.dataset.percent?this.update(parseFloat(b.dataset.percent)):b.getAttribute&&b.getAttribute("data-percent")&&this.update(parseFloat(b.getAttribute("data-percent")))}.bind(this),this.update=function(b){return b=parseFloat(b),a.animate.enabled?this.renderer.animate(f,b):this.renderer.draw(b),f=b,this}.bind(this),this.disableAnimation=function(){return a.animate.enabled=!1,this},this.enableAnimation=function(){return a.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var c;a.data(this,"easyPieChart")||(c=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new d(this,c)))})}}(a)}.apply(e,c),a===void 0||(d.exports=a)},178:function(d,e){var a,b,c;b=[],a=function(){var O=Object.assign||window.jQuery&&jQuery.extend,t=8,R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){return window.setTimeout(function(){a()},25)},n,c,d,m,Q,i,k;!function(){if("function"==typeof window.CustomEvent)return!1;function a(c,a){a=a||{bubbles:!1,cancelable:!1,detail:void 0};var b=document.createEvent("CustomEvent");return b.initCustomEvent(c,a.bubbles,a.cancelable,a.detail),b}a.prototype=window.Event.prototype,window.CustomEvent=a}(),n={textarea:!0,input:!0,select:!0,button:!0},c={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},d={move:"touchmove",cancel:"touchend",end:"touchend"},m=/\s+/,Q={bubbles:!0,cancelable:!0},i="function"==typeof Symbol?Symbol("events"):{};function P(a){return new CustomEvent(a,Q)}function w(a){return a[i]||(a[i]={})}function a(c,a,d,h,i){a=a.split(m);var b,e=w(c),f=a.length;function g(a){d(a,h)}for(;f--;)(e[b=a[f]]||(e[b]=[])).push([d,g]),c.addEventListener(b,g)}function b(f,c,h,i){c=c.split(m);var e,b,a,g=w(f),d=c.length;if(g)for(;d--;)if(b=g[e=c[d]])for(a=b.length;a--;)b[a][0]===h&&(f.removeEventListener(e,b[a][1]),b.splice(a,1))}function g(c,d,a){var b=P(d);a&&O(b,a),c.dispatchEvent(b)}function N(e){var c=e,a=!1,b=!1;function d(e){a?(c(),R(d),b=!0,a=!1):b=!1}this.kick=function(c){a=!0,b||d()},this.end=function(d){var e=c;d&&(b?(c=a?function(){e(),d()}:d,a=!0):d())}}function M(){}function q(a){a.preventDefault()}function A(a){return!!n[a.target.tagName.toLowerCase()]}function G(a){return 1===a.which&&!a.ctrlKey&&!a.altKey}function e(a,c){var b,d;if(a.identifiedTouch)return a.identifiedTouch(c);for(b=-1,d=a.length;++b<d;)if(a[b].identifier===c)return a[b]}function u(c,b){var a=e(c.changedTouches,b.identifier);if(a&&(a.pageX!==b.pageX||a.pageY!==b.pageY))return a}function F(b){G(b)&&(A(b)||(a(document,c.move,r,b),a(document,c.cancel,x,b)))}function r(a,b){z(a,b,a,y)}function x(a,b){y()}function y(){b(document,c.move,r),b(document,c.cancel,x)}function D(e){if(!n[e.target.tagName.toLowerCase()]){var b=e.changedTouches[0],c={target:b.target,pageX:b.pageX,pageY:b.pageY,identifier:b.identifier,touchmove:function(a,b){C(a,b)},touchend:function(a,b){B(a,b)}};a(document,d.move,c.touchmove,c),a(document,d.cancel,c.touchend,c)}}function C(a,b){var c=u(a,b);c&&z(a,b,c,h)}function B(b,a){e(b.changedTouches,a.identifier)&&h(a)}function h(a){b(document,d.move,a.touchmove),b(document,d.cancel,a.touchend)}function z(e,a,b,f){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;c*c+d*d<t*t||E(e,a,b,c,d,f)}function E(a,b,f,c,d,i){var e=a.targetTouches,h=a.timeStamp-b.timeStamp,j={altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,startX:b.pageX,startY:b.pageY,distX:c,distY:d,deltaX:c,deltaY:d,pageX:f.pageX,pageY:f.pageY,velocityX:c/h,velocityY:d/h,identifier:b.identifier,targetTouches:e,finger:e?e.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=M,a.preventDefault()}};g(b.target,"movestart",j),i(b)}function v(b,a){var c=a.timer;a.touch=b,a.timeStamp=b.timeStamp,c.kick()}function s(f,a){var c=a.target,d=a.event,e=a.timer;H(),p(c,d,e,function(){setTimeout(function(){b(c,"click",q)},0)})}function H(){b(document,c.move,v),b(document,c.end,s)}function I(a,b){var c=b.event,e=b.timer,d=u(a,c);d&&(a.preventDefault(),c.targetTouches=a.targetTouches,b.touch=d,b.timeStamp=a.timeStamp,e.kick())}function J(c,a){var d=a.target,b=a.event,f=a.timer;e(c.changedTouches,b.identifier)&&(K(a),p(d,b,f))}function K(a){b(document,d.move,a.activeTouchmove),b(document,d.end,a.activeTouchend)}function L(a,b,d){var c=d-a.timeStamp;a.distX=b.pageX-a.startX,a.distY=b.pageY-a.startY,a.deltaX=b.pageX-a.pageX,a.deltaY=b.pageY-a.pageY,a.velocityX=.3*a.velocityX+.7*a.deltaX/c,a.velocityY=.3*a.velocityY+.7*a.deltaY/c,a.pageX=b.pageX,a.pageY=b.pageY}function p(b,c,d,a){d.end(function(){return g(b,"moveend",c),a&&a()})}function S(b){if(!b.defaultPrevented&&b.moveEnabled){var f={startX:b.startX,startY:b.startY,pageX:b.pageX,pageY:b.pageY,distX:b.distX,distY:b.distY,deltaX:b.deltaX,deltaY:b.deltaY,velocityX:b.velocityX,velocityY:b.velocityY,identifier:b.identifier,targetTouches:b.targetTouches,finger:b.finger},e={target:b.target,event:f,timer:new N(h),touch:void 0,timeStamp:b.timeStamp};b.identifier===void 0?(a(b.target,"click",q),a(document,c.move,v,e),a(document,c.end,s,e)):(e.activeTouchmove=function(a,b){I(a,b)},e.activeTouchend=function(a,b){J(a,b)},a(document,d.move,e.activeTouchmove,e),a(document,d.end,e.activeTouchend,e))}function h(a){L(f,e.touch,e.timeStamp),g(e.target,"move",f)}}a(document,"mousedown",F),a(document,"touchstart",D),a(document,"movestart",S),window.jQuery&&(k="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" "),jQuery.event.special.movestart={setup:function(){return a(this,"movestart",j),!1},teardown:function(){return b(this,"movestart",j),!1},add:f},jQuery.event.special.move={setup:function(){return a(this,"movestart",l),!1},teardown:function(){return b(this,"movestart",l),!1},add:f},jQuery.event.special.moveend={setup:function(){return a(this,"movestart",o),!1},teardown:function(){return b(this,"movestart",o),!1},add:f});function j(a){a.enableMove()}function l(a){a.enableMove()}function o(a){a.enableMove()}function f(a){var b=a.handler;a.handler=function(a){for(var c,d=k.length;d--;)a[c=k[d]]=a.originalEvent[c];b.apply(this,arguments)}}},(c="function"==typeof a?a.apply(e,b):a)===void 0||(d.exports=c)},595:function(d,e,f){var a,b,c;b=[f(311)],a=function(b){var a,w,f,p,j,L,i="Close",N="BeforeClose",P="AfterClose",R="BeforeAppend",D="MarkupParse",u="Open",O="Change",x="mfp",e="."+x,q="mfp-ready",M="mfp-removing",C="mfp-prevent-close",t=function(){},y=!!window.jQuery,k=b(window),d=function(b,c){a.ev.on(x+b+e,c)},l=function(e,c,d,f){var a=document.createElement("div");return a.className="mfp-"+e,d&&(a.innerHTML=d),f?c&&c.appendChild(a):(a=b(a),c&&a.appendTo(c)),a},c=function(c,d){a.ev.triggerHandler(x+c,d),a.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),a.st.callbacks[c]&&a.st.callbacks[c].apply(a,b.isArray(d)?d:[d]))},z=function(c){return c===L&&a.currTemplate.closeBtn||(a.currTemplate.closeBtn=b(a.st.closeMarkup.replace("%title%",a.st.tClose)),L=c),a.currTemplate.closeBtn},A=function(){b.magnificPopup.instance||((a=new t).init(),b.magnificPopup.instance=a)},T=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1},m,s,r,F,I,n,o,B,K,g,S,G,U,h,Q,v,E,J,H;t.prototype={constructor:t,init:function(){var c=navigator.appVersion;a.isLowIE=a.isIE8=document.all&&!document.addEventListener,a.isAndroid=/android/gi.test(c),a.isIOS=/iphone|ipad|ipod/gi.test(c),a.supportsTransition=T(),a.probablyMobile=a.isAndroid||a.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),f=b(document),a.popupsCache={}},open:function(g){var h,i,t,p,m,r,o,s,n;if(!1===g.isObj){{a.items=g.items.toArray(),a.index=0,t=g.items;for(h=0;h<t.length;h++)if((i=t[h]).parsed&&(i=i.el[0]),i===g.el[0]){a.index=h;break}}}else a.items=b.isArray(g.items)?g.items:[g.items],a.index=g.index||0;if(!a.isOpen){a.types=[],j="",g.mainEl&&g.mainEl.length?a.ev=g.mainEl.eq(0):a.ev=f,g.key?(a.popupsCache[g.key]||(a.popupsCache[g.key]={}),a.currTemplate=a.popupsCache[g.key]):a.currTemplate={},a.st=b.extend(!0,{},b.magnificPopup.defaults,g),a.fixedContentPos="auto"===a.st.fixedContentPos?!a.probablyMobile:a.st.fixedContentPos,a.st.modal&&(a.st.closeOnContentClick=!1,a.st.closeOnBgClick=!1,a.st.showCloseBtn=!1,a.st.enableEscapeKey=!1),a.bgOverlay||(a.bgOverlay=l("bg").on("click"+e,function(){a.close()}),a.wrap=l("wrap").attr("tabindex",-1).on("click"+e,function(b){a._checkIfClose(b.target)&&a.close()}),a.container=l("container",a.wrap)),a.contentContainer=l("content"),a.st.preloader&&(a.preloader=l("preloader",a.container,a.st.tLoading)),p=b.magnificPopup.modules;for(h=0;h<p.length;h++)m=p[h],m=m.charAt(0).toUpperCase()+m.slice(1),a["init"+m].call(a);return c("BeforeOpen"),a.st.showCloseBtn&&(a.st.closeBtnInside?(d(D,function(c,d,a,b){a.close_replaceWith=z(b.type)}),j+=" mfp-close-btn-in"):a.wrap.append(z())),a.st.alignTop&&(j+=" mfp-align-top"),a.fixedContentPos?a.wrap.css({overflow:a.st.overflowY,overflowX:"hidden",overflowY:a.st.overflowY}):a.wrap.css({top:k.scrollTop(),position:"absolute"}),(!1===a.st.fixedBgPos||"auto"===a.st.fixedBgPos&&!a.fixedContentPos)&&a.bgOverlay.css({height:f.height(),position:"absolute"}),a.st.enableEscapeKey&&f.on("keyup"+e,function(b){27===b.keyCode&&a.close()}),k.on("resize"+e,function(){a.updateSize()}),a.st.closeOnContentClick||(j+=" mfp-auto-cursor"),j&&a.wrap.addClass(j),r=a.wH=k.height(),o={},a.fixedContentPos&&a._hasScrollBar(r)&&(s=a._getScrollbarSize(),s&&(o.marginRight=s)),a.fixedContentPos&&(a.isIE7?b("body, html").css("overflow","hidden"):o.overflow="hidden"),n=a.st.mainClass,a.isIE7&&(n+=" mfp-ie7"),n&&a._addClassToMFP(n),a.updateItemHTML(),c("BuildControls"),b("html").css(o),a.bgOverlay.add(a.wrap).prependTo(a.st.prependTo||b(document.body)),a._lastFocusedEl=document.activeElement,setTimeout(function(){a.content?(a._addClassToMFP(q),a._setFocus()):a.bgOverlay.addClass(q),f.on("focusin"+e,a._onFocusIn)},16),a.isOpen=!0,a.updateSize(r),c(u),g}a.updateItemHTML()},close:function(){a.isOpen&&(c(N),a.isOpen=!1,a.st.removalDelay&&!a.isLowIE&&a.supportsTransition?(a._addClassToMFP(M),setTimeout(function(){a._close()},a.st.removalDelay)):a._close())},_close:function(){var d,g;c(i),d=M+" "+q+" ",(a.bgOverlay.detach(),a.wrap.detach(),a.container.empty(),a.st.mainClass&&(d+=a.st.mainClass+" "),a._removeClassFromMFP(d),a.fixedContentPos)&&(g={marginRight:""},a.isIE7?b("body, html").css("overflow",""):g.overflow="",b("html").css(g)),f.off("keyup"+e+" focusin"+e),a.ev.off(e),a.wrap.attr("class","mfp-wrap").removeAttr("style"),a.bgOverlay.attr("class","mfp-bg"),a.container.attr("class","mfp-container"),!a.st.showCloseBtn||a.st.closeBtnInside&&!0!==a.currTemplate[a.currItem.type]||a.currTemplate.closeBtn&&a.currTemplate.closeBtn.detach(),a.st.autoFocusLast&&a._lastFocusedEl&&b(a._lastFocusedEl).focus(),a.currItem=null,a.content=null,a.currTemplate=null,a.prevHeight=0,c(P)},updateSize:function(d){if(a.isIOS){var e=document.documentElement.clientWidth/window.innerWidth,b=window.innerHeight*e;a.wrap.css("height",b),a.wH=b}else a.wH=d||k.height();a.fixedContentPos||a.wrap.css("height",a.wH),c("Resize")},updateItemHTML:function(){var d=a.items[a.index],e,f,g;a.contentContainer.detach(),a.content&&a.content.detach(),d.parsed||(d=a.parseEl(a.index)),e=d.type,(c("BeforeChange",[a.currItem?a.currItem.type:"",e]),a.currItem=d,!a.currTemplate[e])&&(f=!!a.st[e]&&a.st[e].markup,c("FirstMarkupParse",f),a.currTemplate[e]=!f||b(f)),p&&p!==d.type&&a.container.removeClass("mfp-"+p+"-holder"),g=a["get"+e.charAt(0).toUpperCase()+e.slice(1)](d,a.currTemplate[e]),a.appendContent(g,e),d.preloaded=!0,c(O,d),p=d.type,a.container.prepend(a.contentContainer),c("AfterChange")},appendContent:function(b,d){a.content=b,b?a.st.showCloseBtn&&a.st.closeBtnInside&&!0===a.currTemplate[d]?a.content.find(".mfp-close").length||a.content.append(z()):a.content=b:a.content="",c(R),a.container.addClass("mfp-"+d+"-holder"),a.contentContainer.append(a.content)},parseEl:function(e){var g,d=a.items[e],h,f;if(d.tagName?d={el:b(d)}:(g=d.type,d={data:d,src:d.src}),d.el){for(h=a.types,f=0;f<h.length;f++)if(d.el.hasClass("mfp-"+h[f])){g=h[f];break}d.src=d.el.attr("data-mfp-src"),d.src||(d.src=d.el.attr("href"))}return d.type=g||a.st.type||"inline",d.index=e,d.parsed=!0,a.items[e]=d,c("ElementParse",d),a.items[e]},addGroup:function(c,b){var e=function(d){d.mfpEl=this,a._openClick(d,c,b)},d;b||(b={}),d="click.magnificPopup",b.mainEl=c,b.items?(b.isObj=!0,c.off(d).on(d,e)):(b.isObj=!1,b.delegate?c.off(d).on(d,b.delegate,e):(b.items=c,c.off(d).on(d,e)))},_openClick:function(c,f,d){if((void 0!==d.midClick?d.midClick:b.magnificPopup.defaults.midClick)||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var e=void 0!==d.disableOn?d.disableOn:b.magnificPopup.defaults.disableOn;if(e)if(b.isFunction(e)){if(!e.call(a))return!0}else if(k.width()<e)return!0;c.type&&(c.preventDefault(),a.isOpen&&c.stopPropagation()),d.el=b(c.mfpEl),d.delegate&&(d.items=f.find(d.delegate)),a.open(d)}},updateStatus:function(b,d){if(a.preloader){w!==b&&a.container.removeClass("mfp-s-"+w),d||"loading"!==b||(d=a.st.tLoading);var e={status:b,text:d};c("UpdateStatus",e),b=e.status,d=e.text,a.preloader.html(d),a.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),a.container.addClass("mfp-s-"+b),w=b}},_checkIfClose:function(c){if(!b(c).hasClass(C)){var d=a.st.closeOnContentClick,e=a.st.closeOnBgClick;if(d&&e)return!0;if(!a.content||b(c).hasClass("mfp-close")||a.preloader&&c===a.preloader[0])return!0;if(c===a.content[0]||b.contains(a.content[0],c)){if(d)return!0}else if(e&&b.contains(document,c))return!0;return!1}},_addClassToMFP:function(b){a.bgOverlay.addClass(b),a.wrap.addClass(b)},_removeClassFromMFP:function(b){this.bgOverlay.removeClass(b),a.wrap.removeClass(b)},_hasScrollBar:function(b){return(a.isIE7?f.height():document.body.scrollHeight)>(b||k.height())},_setFocus:function(){(a.st.focus?a.content.find(a.st.focus).eq(0):a.wrap).focus()},_onFocusIn:function(c){return c.target===a.wrap[0]||b.contains(a.wrap[0],c.target)?void 0:(a._setFocus(),!1)},_parseMarkup:function(f,a,g){var d;g.data&&(a=b.extend(g.data,a)),c(D,[f,a,g]),b.each(a,function(h,c){var a,g;if(void 0===c||!1===c)return!0;(d=h.split("_")).length>1?(a=f.find(e+"-"+d[0]),a.length>0&&(g=d[1],"replaceWith"===g?a[0]!==c[0]&&a.replaceWith(c):"img"===g?a.is("img")?a.attr("src",c):a.replaceWith(b("<img>").attr("src",c).attr("class",a.attr("class"))):a.attr(d[1],c))):f.find(e+"-"+h).html(c)})},_getScrollbarSize:function(){if(void 0===a.scrollbarSize){var b=document.createElement("div");b.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(b),a.scrollbarSize=b.offsetWidth-b.clientWidth,document.body.removeChild(b)}return a.scrollbarSize}},b.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(a,c){return A(),(a=a?b.extend(!0,{},a):{}).isObj=!0,a.index=c||0,this.instance.open(a)},close:function(){return b.magnificPopup.instance&&b.magnificPopup.instance.close()},registerModule:function(c,a){a.options&&(b.magnificPopup.defaults[c]=a.options),b.extend(this.proto,a.proto),this.modules.push(c)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},b.fn.magnificPopup=function(d){var c,e,f,g;return A(),c=b(this),"string"==typeof d?"open"===d?(f=y?c.data("magnificPopup"):c[0].magnificPopup,g=parseInt(arguments[1],10)||0,f.items?e=f.items[g]:(e=c,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),a._openClick({mfpEl:e},c,f)):a.isOpen&&a[d].apply(a,Array.prototype.slice.call(arguments,1)):(d=b.extend(!0,{},d),y?c.data("magnificPopup",d):c[0].magnificPopup=d,a.addGroup(c,d)),c},F="inline",I=function(){r&&(s.after(r.addClass(m)).detach(),r=null)},b.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){a.types.push(F),d(i+"."+F,function(){I()})},getInline:function(d,g){var e,c,f;return I(),d.src?(e=a.st.inline,c=b(d.src),c.length?(f=c[0].parentNode,f&&f.tagName&&(s||(m=e.hiddenClass,s=l(m),m="mfp-"+m),r=c.after(s).detach().removeClass(m)),a.updateStatus("ready")):(a.updateStatus("error",e.tNotFound),c=b("<div>")),d.inlineElement=c,c):(a.updateStatus("ready"),a._parseMarkup(g,{},d),g)}}}),o="ajax",B=function(){n&&b(document.body).removeClass(n)},K=function(){B(),a.req&&a.req.abort()},b.magnificPopup.registerModule(o,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){a.types.push(o),n=a.st.ajax.cursor,d(i+"."+o,K),d("BeforeChange."+o,K)},getAjax:function(d){n&&b(document.body).addClass(n),a.updateStatus("loading");var e=b.extend({url:d.src,success:function(f,h,g){var e={data:f,xhr:g};c("ParseAjax",e),a.appendContent(b(e.data),o),d.finished=!0,B(),a._setFocus(),setTimeout(function(){a.wrap.addClass(q)},16),a.updateStatus("ready"),c("AjaxContentAdded")},error:function(){B(),d.finished=d.loadError=!0,a.updateStatus("error",a.st.ajax.tError.replace("%url%",d.src))}},a.st.ajax.settings);return a.req=b.ajax(e),""}}}),S=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=a.st.image.titleSrc;if(d){if(b.isFunction(d))return d.call(a,c);if(c.el)return c.el.attr(d)||""}return""},b.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=a.st.image,f=".image";a.types.push("image"),d(u+f,function(){"image"===a.currItem.type&&c.cursor&&b(document.body).addClass(c.cursor)}),d(i+f,function(){c.cursor&&b(document.body).removeClass(c.cursor),k.off("resize"+e)}),d("Resize"+f,a.resizeImage),a.isLowIE&&d("AfterChange",a.resizeImage)},resizeImage:function(){var b=a.currItem,c;b&&b.img&&a.st.image.verticalFit&&(c=0,a.isLowIE&&(c=parseInt(b.img.css("padding-top"),10)+parseInt(b.img.css("padding-bottom"),10)),b.img.css("max-height",a.wH-c))},_onImageHasSize:function(b){b.img&&(b.hasSize=!0,g&&clearInterval(g),b.isCheckingImgSize=!1,c("ImageHasSize",b),b.imgHidden&&(a.content&&a.content.removeClass("mfp-loading"),b.imgHidden=!1))},findImageSize:function(c){var b=0,d=c.img[0],e=function e(f){g&&clearInterval(g),g=setInterval(function(){return d.naturalWidth>0?void a._onImageHasSize(c):(b>200&&clearInterval(g),void(3==++b?e(10):40===b?e(50):100===b&&e(500)))},f)};e(1)},getImage:function(d,e){var k=0,l=function b(){d&&(d.img[0].complete?(d.img.off(".mfploader"),d===a.currItem&&(a._onImageHasSize(d),a.updateStatus("ready")),d.hasSize=!0,d.loaded=!0,c("ImageLoadComplete")):200>++k?setTimeout(b,100):h())},h=function(){d&&(d.img.off(".mfploader"),d===a.currItem&&(a._onImageHasSize(d),a.updateStatus("error",i.tError.replace("%url%",d.src))),d.hasSize=!0,d.loaded=!0,d.loadError=!0)},i=a.st.image,j=e.find(".mfp-img"),f;return j.length&&(f=document.createElement("img"),f.className="mfp-img",d.el&&d.el.find("img").length&&(f.alt=d.el.find("img").attr("alt")),d.img=b(f).on("load.mfploader",l).on("error.mfploader",h),f.src=d.src,j.is("img")&&(d.img=d.img.clone()),(f=d.img[0]).naturalWidth>0?d.hasSize=!0:f.width||(d.hasSize=!1)),a._parseMarkup(e,{title:S(d),img_replaceWith:d.img},d),a.resizeImage(),d.hasSize?(g&&clearInterval(g),d.loadError?(e.addClass("mfp-loading"),a.updateStatus("error",i.tError.replace("%url%",d.src))):(e.removeClass("mfp-loading"),a.updateStatus("ready")),e):(a.updateStatus("loading"),d.loading=!0,d.hasSize||(d.imgHidden=!0,e.addClass("mfp-loading"),a.findImageSize(d)),e)}}}),U=function(){return void 0===G&&(G=void 0!==document.createElement("p").style.MozTransform),G},b.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var e,f=a.st.zoom,h=".zoom",g,b,k,l,j;f.enabled&&a.supportsTransition&&(k=f.duration,l=function(d){var c=d.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),e="all "+f.duration/1e3+"s "+f.easing,a={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},b="transition";return a["-webkit-"+b]=a["-moz-"+b]=a["-o-"+b]=a[b]=e,c.css(a),c},j=function(){a.content.css("visibility","visible")},d("BuildControls"+h,function(){if(a._allowZoom()){if(clearTimeout(g),a.content.css("visibility","hidden"),!(e=a._getItemToZoom()))return void j();(b=l(e)).css(a._getOffset()),a.wrap.append(b),g=setTimeout(function(){b.css(a._getOffset(!0)),g=setTimeout(function(){j(),setTimeout(function(){b.remove(),e=b=null,c("ZoomAnimationEnded")},16)},k)},16)}}),d(N+h,function(){if(a._allowZoom()){if(clearTimeout(g),a.st.removalDelay=k,!e){if(!(e=a._getItemToZoom()))return;b=l(e)}b.css(a._getOffset(!0)),a.wrap.append(b),a.content.css("visibility","hidden"),setTimeout(function(){b.css(a._getOffset())},16)}}),d(i+h,function(){a._allowZoom()&&(j(),b&&b.remove(),e=null)}))},_allowZoom:function(){return"image"===a.currItem.type},_getItemToZoom:function(){return!!a.currItem.hasSize&&a.currItem.img},_getOffset:function(g){var c,d=(c=g?a.currItem.img:a.st.zoom.opener(a.currItem.el||a.currItem)).offset(),f=parseInt(c.css("padding-top"),10),h=parseInt(c.css("padding-bottom"),10),e;return d.top-=b(window).scrollTop()-f,e={width:c.width(),height:(y?c.innerHeight():c[0].offsetHeight)-h-f},U()?e["-moz-transform"]=e.transform="translate("+d.left+"px,"+d.top+"px)":(e.left=d.left,e.top=d.top),e}}}),h="iframe",Q="//about:blank",v=function(c){if(a.currTemplate[h]){var b=a.currTemplate[h].find("iframe");b.length&&(c||(b[0].src=Q),a.isIE8&&b.css("display",c?"block":"none"))}},b.magnificPopup.registerModule(h,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){a.types.push(h),d("BeforeChange",function(c,a,b){a!==b&&(a===h?v():b===h&&v(!0))}),d(i+"."+h,function(){v()})},getIframe:function(e,f){var c=e.src,d=a.st.iframe,g;return b.each(d.patterns,function(){return c.indexOf(this.index)>-1?(this.id&&(c="string"==typeof this.id?c.substr(c.lastIndexOf(this.id)+this.id.length,c.length):this.id.call(this,c)),c=this.src.replace("%id%",c),!1):void 0}),g={},d.srcAction&&(g[d.srcAction]=c),a._parseMarkup(f,g,e),a.updateStatus("ready"),f}}}),E=function(b){var c=a.items.length;return b>c-1?b-c:0>b?c+b:b},J=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)},b.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var e=a.st.gallery,c=".mfp-gallery";return a.direction=!0,!(!e||!e.enabled)&&(j+=" mfp-gallery",d(u+c,function(){e.navigateByImgClick&&a.wrap.on("click"+c,".mfp-img",function(){return a.items.length>1?(a.next(),!1):void 0}),f.on("keydown"+c,function(b){37===b.keyCode?a.prev():39===b.keyCode&&a.next()})}),d("UpdateStatus"+c,function(c,b){b.text&&(b.text=J(b.text,a.currItem.index,a.items.length))}),d(D+c,function(f,g,c,d){var b=a.items.length;c.counter=b>1?J(e.tCounter,d.index,b):""}),d("BuildControls"+c,function(){if(a.items.length>1&&e.arrows&&!a.arrowLeft){var c=e.arrowMarkup,d=a.arrowLeft=b(c.replace(/%title%/gi,e.tPrev).replace(/%dir%/gi,"left")).addClass(C),f=a.arrowRight=b(c.replace(/%title%/gi,e.tNext).replace(/%dir%/gi,"right")).addClass(C);d.click(function(){a.prev()}),f.click(function(){a.next()}),a.container.append(d.add(f))}}),d(O+c,function(){a._preloadTimeout&&clearTimeout(a._preloadTimeout),a._preloadTimeout=setTimeout(function(){a.preloadNearbyImages(),a._preloadTimeout=null},16)}),void d(i+c,function(){f.off(c),a.wrap.off("click"+c),a.arrowRight=a.arrowLeft=null}))},next:function(){a.direction=!0,a.index=E(a.index+1),a.updateItemHTML()},prev:function(){a.direction=!1,a.index=E(a.index-1),a.updateItemHTML()},goTo:function(b){a.direction=b>=a.index,a.index=b,a.updateItemHTML()},preloadNearbyImages:function(){var b,c=a.st.gallery.preload,d=Math.min(c[0],a.items.length),e=Math.min(c[1],a.items.length);for(b=1;b<=(a.direction?e:d);b++)a._preloadItem(a.index+b);for(b=1;b<=(a.direction?d:e);b++)a._preloadItem(a.index-b)},_preloadItem:function(e){if(e=E(e),!a.items[e].preloaded){var d=a.items[e];d.parsed||(d=a.parseEl(e)),c("LazyLoad",d),"image"===d.type&&(d.img=b('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,c("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}}),H="retina",b.magnificPopup.registerModule(H,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var c=a.st.retina,b=c.ratio;(b=isNaN(b)?b():b)>1&&(d("ImageHasSize."+H,function(c,a){a.img.css({"max-width":a.img[0].naturalWidth/b,width:"100%"})}),d("ElementParse."+H,function(d,a){a.src=c.replaceSrc(a,b)}))}}}}),A()},(c="function"==typeof a?a.apply(e,b):a)===void 0||(d.exports=c)},363:function(){!function(a){"use strict";a.fn.twentytwenty=function(b){return b=a.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},b),this.each(function(){var f=b.default_offset_pct,c=a(this),e=b.orientation,u="vertical"===e?"down":"left",t="vertical"===e?"up":"right",s,d,k,g,m,o,j,i,h,l,p,q,r,n;c.wrap("<div class='twentytwenty-wrapper twentytwenty-"+e+"'></div>"),!b.no_overlay&&(c.append("<div class='twentytwenty-overlay'></div>"),s=c.find(".twentytwenty-overlay"),s.append("<div class='twentytwenty-before-label' data-content='"+b.before_label+"'></div>"),s.append("<div class='twentytwenty-after-label' data-content='"+b.after_label+"'></div>")),d=c.find("img:first"),k=c.find("img:last"),c.append("<div class='twentytwenty-handle'></div>"),g=c.find(".twentytwenty-handle"),g.append("<span class='twentytwenty-"+u+"-arrow'></span>"),g.append("<span class='twentytwenty-"+t+"-arrow'></span>"),c.addClass("twentytwenty-container"),d.addClass("twentytwenty-before"),k.addClass("twentytwenty-after"),m=function(i){var a,b,f,h=(a=i,b=d.width(),f=d.height(),{w:b+"px",h:f+"px",cw:a*b+"px",ch:a*f+"px"});g.css("vertical"===e?"top":"left","vertical"===e?h.ch:h.cw),function(a){"vertical"===e?(d.css("clip","rect(0,"+a.w+","+a.ch+",0)"),k.css("clip","rect("+a.ch+","+a.w+","+a.h+",0)")):(d.css("clip","rect(0,"+a.cw+","+a.h+",0)"),k.css("clip","rect(0,"+a.w+","+a.h+","+a.cw+")")),c.css("height",a.h)}(h)},o=function(d,f){var a,b,c;return a="vertical"===e?(f-i)/l:(d-j)/h,b=0,c=1,Math.max(b,Math.min(c,a))},a(window).on("resize.twentytwenty",function(a){m(f)}),j=0,i=0,h=0,l=0,p=function(a){((a.distX>a.distY&&a.distX<-a.distY||a.distX<a.distY&&a.distX>-a.distY)&&"vertical"!==e||(a.distX<a.distY&&a.distX<-a.distY||a.distX>a.distY&&a.distX>-a.distY)&&"vertical"===e)&&a.preventDefault(),c.addClass("active"),j=c.offset().left,i=c.offset().top,h=d.width(),l=d.height()},q=function(a){c.hasClass("active")&&(f=o(a.pageX,a.pageY),m(f))},r=function(){c.removeClass("active")},n=b.move_with_handle_only?g:c,n.on("movestart",p),n.on("move",q),n.on("moveend",r),b.move_slider_on_hover&&(c.on("mouseenter",p),c.on("mousemove",q),c.on("mouseleave",r)),g.on("touchmove",function(a){a.preventDefault()}),c.find("img").on("mousedown",function(a){a.preventDefault()}),b.click_to_move&&c.on("click",function(a){j=c.offset().left,i=c.offset().top,h=d.width(),l=d.height(),f=o(a.pageX,a.pageY),m(f)}),a(window).trigger("resize.twentytwenty")})}}(jQuery)},430:function(){jQuery(document).ready(function(a){"use strict";jQuery(document.body).on("submit",".ekit-mailChimpForm",function(b){b.preventDefault();var c=jQuery(this).serialize(),d=jQuery(this).attr("data-listed"),e=jQuery(this).attr("data-success-message"),f=jQuery(this).attr("data-success-opt-in-message"),a=jQuery(this).children(".ekit-mail-message");jQuery.ajax({data:c,type:"get",url:window.elementskit.resturl+"widget/mailchimp/sendmail/?listed="+d,success:function(b){if(a.show(),b.error.length>0)a.removeClass("error").html("Found error : "+b.error).addClass("error");else{var c=JSON.parse(b.success.body);"subscribed"!=c.status?"pending"!=c.status?a.html(c.title):a.removeClass("success").html(f).addClass("success"):a.removeClass("success").html(e).addClass("success")}}})})})},644:function(x,v,p){var c,i,d,e,u,g,j,b,l,q,t,k,r,h,n,s,m,a,f,w;function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}w=window,a=[p(311)],f=function(a){return function(a,b){"use strict";function c(e,h,c){function i(d,b,h){var a,g="$()."+e+'("'+b+'")';return d.each(function(l,j){var d=c.data(j,e),i,k;d?(i=d[b],i&&"_"!=b.charAt(0)?(k=i.apply(d,h),a=void 0===a?k:a):f(g+" is not a valid method")):f(e+" not initialized. Cannot call methods, i.e. "+g)}),void 0!==a?a:d}function j(b,a){b.each(function(f,d){var b=c.data(d,e);b?(b.option(a),b._init()):(b=new h(d,a),c.data(d,e,b))})}(c=c||b||a.jQuery)&&(h.prototype.option||(h.prototype.option=function(a){c.isPlainObject(a)&&(this.options=c.extend(!0,this.options,a))}),c.fn[e]=function(a){return"string"==typeof a?i(this,a,g.call(arguments,1)):(j(this,a),this)},d(c))}function d(a){!a||a&&a.bridget||(a.bridget=c)}var g=Array.prototype.slice,e=a.console,f=void 0===e?function(){}:function(a){e.error(a)};return d(b||a.jQuery),c}(w,a)}.apply(v,a),f===void 0||(x.exports=f),"undefined"!=typeof window&&window,i=function(){function b(){}var a=b.prototype;return a.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},a.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{};return(c[a]=c[a]||{})[b]=!0,this}},a.off=function(c,d){var a=this._events&&this._events[c],b;if(a&&a.length)return b=a.indexOf(d),-1!=b&&a.splice(b,1),this},a.emitEvent=function(c,d){var b=this._events&&this._events[c],f,a,e,g;if(b&&b.length){f=0,a=b[f],d=d||[];for(e=this._onceEvents&&this._onceEvents[c];a;)g=e&&e[a],g&&(this.off(c,a),delete e[a]),a.apply(this,d),a=b[f+=g?0:1];return this}},b},"function"==typeof i?(d={id:"ev-emitter/ev-emitter",exports:{},loaded:!1},c=i.call(d.exports,p,d.exports,d),d.loaded=!0,c===void 0&&(c=d.exports)):c=i,function(b,c){"use strict";e=function(){return function(){function a(a){var b=parseFloat(a);return-1==a.indexOf("%")&&!isNaN(b)&&b}function h(){}function j(){for(var c={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},a=0;g>a;a++)c[b[a]]=0;return c}function c(b){var a=getComputedStyle(b);return a||i("Style returned "+a+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),a}function k(){var b,g,h;d||(d=!0,b=document.createElement("div"),b.style.width="200px",b.style.padding="1px 2px 3px 4px",b.style.borderStyle="solid",b.style.borderWidth="1px 2px 3px 4px",b.style.boxSizing="border-box",g=document.body||document.documentElement,g.appendChild(b),h=c(b),e.isBoxSizeOuter=f=200==a(h.width),g.removeChild(b))}function e(e){var h,d,y,i,n,x,q,t,r,w,v,l,s,p,m,u;if(k(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==o(e)&&e.nodeType){if(h=c(e),"none"==h.display)return j();d={},d.width=e.offsetWidth,d.height=e.offsetHeight;for(y=d.isBorderBox="border-box"==h.boxSizing,i=0;g>i;i++)n=b[i],x=h[n],q=parseFloat(x),d[n]=isNaN(q)?0:q;return t=d.paddingLeft+d.paddingRight,r=d.paddingTop+d.paddingBottom,w=d.marginLeft+d.marginRight,v=d.marginTop+d.marginBottom,l=d.borderLeftWidth+d.borderRightWidth,s=d.borderTopWidth+d.borderBottomWidth,p=y&&f,m=a(h.width),!1!==m&&(d.width=m+(p?0:t+l)),u=a(h.height),!1!==u&&(d.height=u+(p?0:r+s)),d.innerWidth=d.width-(t+l),d.innerHeight=d.height-(r+s),d.outerWidth=d.width+w,d.outerHeight=d.height+v,d}}var f,i="undefined"==typeof console?h:function(a){console.error(a)},b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],g=b.length,d=!1;return e}()}.apply(u={},a=[]),e!==void 0||(e=u)}(window),function(a,c){"use strict";j=function(){var a=function(){var a=Element.prototype,c,b,d;if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(c=["webkit","moz","ms","o"],b=0;b<c.length;b++)if(d=c[b]+"MatchesSelector",a[d])return d}();return function(b,c){return b[a](c)}},"function"==typeof j?(b={id:"desandro-matches-selector/matches-selector",exports:{},loaded:!1},g=j.call(b.exports,p,b.exports,b),b.loaded=!0,g===void 0&&(g=b.exports)):g=j}(window),function(b,c){l=function(a){return function(b,c){var a={extend:function(a,b){for(var c in b)a[c]=b[c];return a},modulo:function(b,a){return(b%a+a)%a},makeArray:function(a){var b=[],c;if(Array.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(c=0;c<a.length;c++)b.push(a[c]);else b.push(a);return b},removeFrom:function(a,c){var b=a.indexOf(c);-1!=b&&a.splice(b,1)}},d;return a.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},a.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.filterFindElements=function(d,e){d=a.makeArray(d);var b=[];return d.forEach(function(a){if(a instanceof HTMLElement){if(!e)return void b.push(a);c(a,e)&&b.push(a);for(var f=a.querySelectorAll(e),d=0;d<f.length;d++)b.push(f[d])}}),b},a.debounceMethod=function(c,a,d){var e=c.prototype[a],b=a+"Timeout";c.prototype[a]=function(){var a=this[b],f,c;a&&clearTimeout(a),f=arguments,c=this,this[b]=setTimeout(function(){e.apply(c,f),delete c[b]},d||100)}},a.docReady=function(a){var b=document.readyState;"complete"==b||"interactive"==b?a():document.addEventListener("DOMContentLoaded",a)},a.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(c,a,b){return a+"-"+b}).toLowerCase()},d=b.console,a.htmlInit=function(e,c){a.docReady(function(){var g=a.toDashed(c),f="data-"+g,i=document.querySelectorAll("["+f+"]"),j=document.querySelectorAll(".js-"+g),k=a.makeArray(i).concat(a.makeArray(j)),l=f+"-options",h=b.jQuery;k.forEach(function(a){var b,g=a.getAttribute(f)||a.getAttribute(l),i;try{b=g&&JSON.parse(g)}catch(b){return void(d&&d.error("Error parsing "+f+" on "+a.className+": "+b))}i=new e(a,b),h&&h.data(a,c,i)})})},a}(b,a)}.apply(q={},a=[g]),l!==void 0||(l=q)}(window),window,t=[c,e],k=function(n,m){"use strict";var f,b,d,c,j,a,h,i,g;function l(a){for(var b in a)return!1;return!0}function e(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function k(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}return f=document.documentElement.style,b="string"==typeof f.transition?"transition":"WebkitTransition",d="string"==typeof f.transform?"transform":"WebkitTransform",c={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[b],j={transform:d,transition:b,transitionDuration:b+"Duration",transitionProperty:b+"Property",transitionDelay:b+"Delay"},a=e.prototype=Object.create(n.prototype),a.constructor=e,a._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},a.getSize=function(){this.size=m(this.element)},a.css=function(b){var c=this.element.style,a;for(a in b)c[j[a]||a]=b[a]},a.getPosition=function(){var g=getComputedStyle(this.element),h=this.layout._getOption("originLeft"),f=this.layout._getOption("originTop"),d=g[h?"left":"right"],e=g[f?"top":"bottom"],a=this.layout.size,b=-1!=d.indexOf("%")?parseFloat(d)/100*a.width:parseInt(d,10),c=-1!=e.indexOf("%")?parseFloat(e)/100*a.height:parseInt(e,10);b=isNaN(b)?0:b,c=isNaN(c)?0:c,b-=h?a.paddingLeft:a.paddingRight,c-=f?a.paddingTop:a.paddingBottom,this.position.x=b,this.position.y=c},a.layoutPosition=function(){var d=this.layout.size,a={},b=this.layout._getOption("originLeft"),c=this.layout._getOption("originTop"),e=b?"paddingLeft":"paddingRight",f=b?"left":"right",g=b?"right":"left",h=this.position.x+d[e],i,j,k,l;a[f]=this.getXValue(h),a[g]="",i=c?"paddingTop":"paddingBottom",j=c?"top":"bottom",k=c?"bottom":"top",l=this.position.y+d[i],a[j]=this.getYValue(l),a[k]="",this.css(a),this.emitEvent("layout",[this])},a.getXValue=function(a){var b=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!b?a/this.layout.size.width*100+"%":a+"px"},a.getYValue=function(a){var b=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&b?a/this.layout.size.height*100+"%":a+"px"},a._transitionTo=function(a,b){var d,j,e,f,g,h,i,c;this.getPosition(),d=this.position.x,j=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y,(this.setPosition(a,b),!g||this.isTransitioning)?(h=a-d,i=b-j,c={},c.transform=this.getTranslate(h,i),this.transition({to:c,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})):this.layoutPosition()},a.getTranslate=function(a,b){return"translate3d("+(a=this.layout._getOption("originLeft")?a:-a)+"px, "+(b=this.layout._getOption("originTop")?b:-b)+"px, 0)"},a.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},a.moveTo=a._transitionTo,a.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},a._nonTransition=function(a){for(var b in this.css(a.to),a.isCleaning&&this._removeStyles(a.to),a.onTransitionEnd)a.onTransitionEnd[b].call(this)},a.transition=function(a){var c,b;if(parseFloat(this.layout.options.transitionDuration)){c=this._transn;for(b in a.onTransitionEnd)c.onEnd[b]=a.onTransitionEnd[b];for(b in a.to)c.ingProperties[b]=!0,a.isCleaning&&(c.clean[b]=!0);a.from&&(this.css(a.from),this.element.offsetHeight),this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0}else this._nonTransition(a)},h="opacity,"+k(d),a.enableTransition=function(){if(!this.isTransitioning){var a=this.layout.options.transitionDuration;a="number"==typeof a?a+"ms":a,this.css({transitionProperty:h,transitionDuration:a,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(c,this,!1)}},a.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},a.onotransitionend=function(a){this.ontransitionend(a)},i={"-webkit-transform":"transform"},a.ontransitionend=function(c){if(c.target===this.element){var a=this._transn,b=i[c.propertyName]||c.propertyName;delete a.ingProperties[b],l(a.ingProperties)&&this.disableTransition(),b in a.clean&&(this.element.style[c.propertyName]="",delete a.clean[b]),b in a.onEnd&&(a.onEnd[b].call(this),delete a.onEnd[b]),this.emitEvent("transitionEnd",[this])}},a.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(c,this,!1),this.isTransitioning=!1},a._removeStyles=function(b){var a={},c;for(c in b)a[c]="";this.css(a)},g={transitionProperty:"",transitionDuration:"",transitionDelay:""},a.removeTransitionStyles=function(){this.css(g)},a.stagger=function(a){a=isNaN(a)?0:a,this.staggerDelay=a+"ms"},a.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},a.remove=function(){return b&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},a.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={};b[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},a.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},a.getHideRevealTransitionEndProperty=function(b){var a=this.layout.options[b],c;if(a.opacity)return"opacity";for(c in a)return c},a.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={};b[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},a.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},a.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},e},"function"==typeof k?(h=k.apply(r={},t))===void 0&&(h=r):h=k,function(b,d){"use strict";n=function(a,c,d,e){return function(g,n,f,b,h){var j,d,i,l,e,a,k;function c(c,g){var a=b.getQueryElement(c),f;a?(this.element=a,d&&(this.$element=d(this.element)),this.options=b.extend({},this.constructor.defaults),this.option(g),f=++l,this.element.outlayerGUID=f,e[f]=this,this._create(),this._getOption("initLayout")&&this.layout()):j&&j.error("Bad element for "+this.constructor.namespace+": "+(a||c))}function m(b){function a(){b.apply(this,arguments)}return a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a}function o(b){if("number"==typeof b)return b;var a=b.match(/(^\d*\.?\d*)(\w*)/),c=a&&a[1],d=a&&a[2];return c.length?(c=parseFloat(c))*(k[d]||1):0}return j=g.console,d=g.jQuery,i=function(){},l=0,e={},c.namespace="outlayer",c.Item=h,c.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},a=c.prototype,b.extend(a,n.prototype),a.option=function(a){b.extend(this.options,a)},a._getOption=function(b){var a=this.constructor.compatOptions[b];return a&&void 0!==this.options[a]?this.options[a]:this.options[b]},c.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},a._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},a.reloadItems=function(){this.items=this._itemize(this.element.children)},a._itemize=function(d){for(var b=this._filterFindItemElements(d),e=this.constructor.Item,c=[],a=0,f;a<b.length;a++)f=new e(b[a],this),c.push(f);return c},a._filterFindItemElements=function(a){return b.filterFindElements(a,this.options.itemSelector)},a.getItemElements=function(){return this.items.map(function(a){return a.element})},a.layout=function(){this._resetLayout(),this._manageStamps();var a=this._getOption("layoutInstant"),b=void 0!==a?a:!this._isLayoutInited;this.layoutItems(this.items,b),this._isLayoutInited=!0},a._init=a.layout,a._resetLayout=function(){this.getSize()},a.getSize=function(){this.size=f(this.element)},a._getMeasurement=function(c,d){var b,a=this.options[c];a?("string"==typeof a?b=this.element.querySelector(a):a instanceof HTMLElement&&(b=a),this[c]=b?f(b)[d]:a):this[c]=0},a.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},a._getItemsForLayout=function(a){return a.filter(function(a){return!a.isIgnored})},a._layoutItems=function(a,c){if(this._emitCompleteOnItems("layout",a),a&&a.length){var b=[];a.forEach(function(a){var d=this._getItemLayoutPosition(a);d.item=a,d.isInstant=c||a.isLayoutInstant,b.push(d)},this),this._processLayoutQueue(b)}},a._getItemLayoutPosition=function(){return{x:0,y:0}},a._processLayoutQueue=function(a){this.updateStagger(),a.forEach(function(a,b){this._positionItem(a.item,a.x,a.y,a.isInstant,b)},this)},a.updateStagger=function(){var a=this.options.stagger;return null==a?void(this.stagger=0):(this.stagger=o(a),this.stagger)},a._positionItem=function(a,b,c,d,e){d?a.goTo(b,c):(a.stagger(e*this.stagger),a.moveTo(b,c))},a._postLayout=function(){this.resizeContainer()},a.resizeContainer=function(){if(this._getOption("resizeContainer")){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},a._getContainerSize=i,a._setContainerMeasure=function(b,c){if(void 0!==b){var a=this.size;a.isBorderBox&&(b+=c?a.paddingLeft+a.paddingRight+a.borderLeftWidth+a.borderRightWidth:a.paddingBottom+a.paddingTop+a.borderTopWidth+a.borderBottomWidth),b=Math.max(b,0),this.element.style[c?"width":"height"]=b+"px"}},a._emitCompleteOnItems=function(c,a){var e,b,f;function d(){e.dispatchEvent(c+"Complete",null,[a])}function g(){++f==b&&d()}e=this,b=a.length,a&&b?(f=0,a.forEach(function(a){a.once(c,g)})):d()},a.dispatchEvent=function(c,a,b){var f=a?[a].concat(b):b,e;this.emitEvent(c,f),d&&(this.$element=this.$element||d(this.element),a?(e=d.Event(a),e.type=c,this.$element.trigger(e,b)):this.$element.trigger(c,b))},a.ignore=function(b){var a=this.getItem(b);a&&(a.isIgnored=!0)},a.unignore=function(b){var a=this.getItem(b);a&&delete a.isIgnored},a.stamp=function(a){(a=this._find(a))&&(this.stamps=this.stamps.concat(a),a.forEach(this.ignore,this))},a.unstamp=function(a){(a=this._find(a))&&a.forEach(function(a){b.removeFrom(this.stamps,a),this.unignore(a)},this)},a._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=b.makeArray(a)):void 0},a._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},a._getBoundingRect=function(){var b=this.element.getBoundingClientRect(),a=this.size;this._boundingRect={left:b.left+a.paddingLeft+a.borderLeftWidth,top:b.top+a.paddingTop+a.borderTopWidth,right:b.right-(a.paddingRight+a.borderRightWidth),bottom:b.bottom-(a.paddingBottom+a.borderBottomWidth)}},a._manageStamp=i,a._getElementOffset=function(d){var a=d.getBoundingClientRect(),b=this._boundingRect,c=f(d);return{left:a.left-b.left-c.marginLeft,top:a.top-b.top-c.marginTop,right:b.right-a.right-c.marginRight,bottom:b.bottom-a.bottom-c.marginBottom}},a.handleEvent=b.handleEvent,a.bindResize=function(){g.addEventListener("resize",this),this.isResizeBound=!0},a.unbindResize=function(){g.removeEventListener("resize",this),this.isResizeBound=!1},a.onresize=function(){this.resize()},b.debounceMethod(c,"onresize",100),a.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},a.needsResizeLayout=function(){var a=f(this.element);return this.size&&a&&a.innerWidth!==this.size.innerWidth},a.addItems=function(b){var a=this._itemize(b);return a.length&&(this.items=this.items.concat(a)),a},a.appended=function(b){var a=this.addItems(b);a.length&&(this.layoutItems(a,!0),this.reveal(a))},a.prepended=function(c){var a=this._itemize(c),b;a.length&&(b=this.items.slice(0),this.items=a.concat(b),this._resetLayout(),this._manageStamps(),this.layoutItems(a,!0),this.reveal(a),this.layoutItems(b))},a.reveal=function(a){if(this._emitCompleteOnItems("reveal",a),a&&a.length){var b=this.updateStagger();a.forEach(function(a,c){a.stagger(c*b),a.reveal()})}},a.hide=function(a){if(this._emitCompleteOnItems("hide",a),a&&a.length){var b=this.updateStagger();a.forEach(function(a,c){a.stagger(c*b),a.hide()})}},a.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},a.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},a.getItem=function(c){for(var a=0,b;a<this.items.length;a++)if(b=this.items[a],b.element==c)return b},a.getItems=function(a){a=b.makeArray(a);var c=[];return a.forEach(function(b){var a=this.getItem(b);a&&c.push(a)},this),c},a.remove=function(c){var a=this.getItems(c);this._emitCompleteOnItems("remove",a),a&&a.length&&a.forEach(function(a){a.remove(),b.removeFrom(this.items,a)},this)},a.destroy=function(){var a=this.element.style,b;a.height="",a.position="",a.width="",this.items.forEach(function(a){a.destroy()}),this.unbindResize(),b=this.element.outlayerGUID,delete e[b],delete this.element.outlayerGUID,d&&d.removeData(this.element,this.constructor.namespace)},c.data=function(a){var c=(a=b.getQueryElement(a))&&a.outlayerGUID;return c&&e[c]},c.create=function(e,f){var a=m(c);return a.defaults=b.extend({},c.defaults),b.extend(a.defaults,f),a.compatOptions=b.extend({},c.compatOptions),a.namespace=e,a.data=c.data,a.Item=m(h),b.htmlInit(a,e),d&&d.bridget&&d.bridget(e,a),a},k={ms:1,s:1e3},c.Item=h,c}(b,a,c,d,e)}.apply(s={},a=[c,e,l,h]),n!==void 0||(n=s)}(window),window,a=[n,e],m=function(c,b){var a=c.create("masonry");return a.compatOptions.fitWidth="isFitWidth",a.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var a=0;a<this.cols;a++)this.colYs.push(0);this.maxY=0},a.prototype.measureColumns=function(){var d,e,a,f,c,g;this.getContainerWidth(),!this.columnWidth&&(d=this.items[0],e=d&&d.element,this.columnWidth=e&&b(e).outerWidth||this.containerWidth),a=this.columnWidth+=this.gutter,f=this.containerWidth+this.gutter,c=f/a,g=a-f%a,c=Math[g&&1>g?"round":"floor"](c),this.cols=Math.max(c,1)},a.prototype.getContainerWidth=function(){var c=this._getOption("fitWidth")?this.element.parentNode:this.element,a=b(c);this.containerWidth=a&&a.innerWidth},a.prototype._getItemLayoutPosition=function(a){var f,b,c,d,g,h,i,j,e;a.getSize(),f=a.size.outerWidth%this.columnWidth,b=Math[f&&1>f?"round":"ceil"](a.size.outerWidth/this.columnWidth),b=Math.min(b,this.cols);for(c=this._getColGroup(b),d=Math.min.apply(Math,c),g=c.indexOf(d),h={x:this.columnWidth*g,y:d},i=d+a.size.outerHeight,j=this.cols+1-c.length,e=0;j>e;e++)this.colYs[g+e]=i;return h},a.prototype._getColGroup=function(b){var c,d,a,e;if(2>b)return this.colYs;for(c=[],d=this.cols+1-b,a=0;d>a;a++)e=this.colYs.slice(a,a+b),c[a]=Math.max.apply(Math,e);return c},a.prototype._manageStamp=function(i){var f=b(i),c=this._getElementOffset(i),g=this._getOption("originLeft")?c.left:c.right,h=g+f.outerWidth,e=Math.floor(g/this.columnWidth),a,j,d;e=Math.max(0,e),a=Math.floor(h/this.columnWidth),a-=h%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(j=(this._getOption("originTop")?c.top:c.bottom)+f.outerHeight,d=e;a>=d;d++)this.colYs[d]=Math.max(j,this.colYs[d])},a.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this._getOption("fitWidth")&&(a.width=this._getContainerFitWidth()),a},a.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},a.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!=this.containerWidth},a},(f="function"==typeof m?m.apply(v,a):m)===void 0||(x.exports=f)},989:function(){!function(a){"use strict";a(function(){var b;function c(b,c,d){a(document).on(b,c,d)}b=a(".elementskit-menu-container"),a(b).each(function(){var b=a(this);"yes"!=b.attr("ekit-dom-added")&&(0===b.parents(".elementor-widget-ekit-nav-menu").length&&b.parents(".ekit-wid-con").addClass("ekit_menu_responsive_tablet"),b.attr("ekit-dom-added","yes"))}),c("click",".elementskit-dropdown-has > a",function(c){var d=a(this).parents(".elementskit-navbar-nav, .ekit-vertical-navbar-nav"),e=a(this).parents(".ekit-wid-con").data("responsive-breakpoint"),b;(!d.hasClass("submenu-click-on-icon")||a(c.target).hasClass("elementskit-submenu-indicator"))&&(!(a(document).width()>Number(e)&&d.hasClass("submenu-click-on-"))||a(c.target).hasClass("elementskit-submenu-indicator"))&&(c.preventDefault(),b=a(this).parent().find(">.elementskit-dropdown, >.elementskit-megamenu-panel"),b.find(".elementskit-dropdown-open").removeClass("elementskit-dropdown-open"),b.hasClass("elementskit-dropdown-open")?b.removeClass("elementskit-dropdown-open"):b.addClass("elementskit-dropdown-open"))}),c("click",".elementskit-menu-toggler",function(d){var b,c;d.preventDefault(),b=a(this).parents(".elementskit-menu-container").parent(),b.length<1&&(b=a(this).parent()),c=b.find(".elementskit-menu-offcanvas-elements"),c.hasClass("active")?c.removeClass("active"):c.addClass("active")}),a(".elementskit-navbar-nav li a").on("click",function(c){if(a(this).attr("href")&&"elementskit-submenu-indicator"!==c.target.className){var b=a(this),d=b.get(0),e=d.href,f=e.indexOf("#"),g=b.parents(".elementskit-menu-container").hasClass("ekit-nav-menu-one-page-yes");-1!==f&&e.length>1&&g&&d.pathname==window.location.pathname&&(c.preventDefault(),b.parents(".ekit-wid-con").find(".elementskit-menu-close").trigger("click"))}})})}(jQuery)},457:function(){!function(a){function b(b){var a="",c;return"lowerLetter"==b?a="abcdefghijklmnopqrstuvwxyz0123456789":"upperLetter"==b?a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789":"symbol"==b&&(a=",.?/\\(^)![]{}*&^%$#'\""),c=a.split(""),c[Math.floor(Math.random()*c.length)]}a.fn.shuffleLetters=function(d){var c=a.extend({step:8,fps:25,text:"",callback:function(){}},d);return this.each(function(){var e=a(this),h="",f,g,d,i;if(e.data("animated"))return!0;e.data("animated",!0),h=c.text?c.text.split(""):e.text().split("");for(f=[],g=[],d=0;d<h.length;d++)i=h[d]," "!=i?(/[a-z]/.test(i)?f[d]="lowerLetter":/[A-Z]/.test(i)?f[d]="upperLetter":f[d]="symbol",g.push(d)):f[d]="space";e.html(""),function k(d){var a,j=g.length,i=h.slice(0);if(d>j)return e.data("animated",!1),void c.callback(e);for(a=Math.max(d,0);a<j;a++)a<d+c.step?i[g[a]]=b(f[g[a]]):i[g[a]]="";e.text(i.join("")),setTimeout(function(){k(d+1)},1e3/c.fps)}(-c.step)})}}(jQuery)},285:function(g,e,f){"use strict";var a,c,d;function b(a){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}"function"==typeof Symbol&&b(Symbol.iterator),c=[f(311)],a=function(a){return a.fn.tilt=function(g){var c=function(){this.ticking||(requestAnimationFrame(k.bind(this)),this.ticking=!0)},j=function(){var b=this;a(this).on("mousemove",i),a(this).on("mouseenter",h),this.settings.reset&&a(this).on("mouseleave",f),this.settings.glare&&a(window).on("resize",m.bind(b))},e=function(){var b=this;void 0!==this.timeout&&clearTimeout(this.timeout),a(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){a(b).css({transition:""}),b.settings.glare&&b.glareElement.css({transition:""})},this.settings.speed)},h=function(b){this.ticking=!1,a(this).css({"will-change":"transform"}),e.call(this),a(this).trigger("tilt.mouseEnter")},b=function(b){return void 0===b&&(b={pageX:a(this).offset().left+a(this).outerWidth()/2,pageY:a(this).offset().top+a(this).outerHeight()/2}),{x:b.pageX,y:b.pageY}},i=function(a){this.mousePositions=b(a),c.call(this)},f=function(){e.call(this),this.reset=!0,c.call(this),a(this).trigger("tilt.mouseLeave")},d=function(){var b=a(this).outerWidth(),c=a(this).outerHeight(),d=a(this).offset().left,e=a(this).offset().top,f=(this.mousePositions.x-d)/b,g=(this.mousePositions.y-e)/c,h=(this.settings.maxTilt/2-f*this.settings.maxTilt).toFixed(2),i=(g*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),j=Math.atan2(this.mousePositions.x-(d+b/2),-(this.mousePositions.y-(e+c/2)))*(180/Math.PI);return{tiltX:h,tiltY:i,percentageX:100*f,percentageY:100*g,angle:j}},k=function(){return this.transforms=d.call(this),this.reset?(this.reset=!1,a(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(a(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),a(this).trigger("change",[this.transforms]),void(this.ticking=!1))},l=function(){var b=this.settings.glarePrerender,c;b||a(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=a(this).find(".js-tilt-glare"),this.glareElement=a(this).find(".js-tilt-glare-inner"),!b&&(c={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},this.glareElementWrapper.css(c).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*a(this).outerWidth(),height:""+2*a(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))},m=function(){this.glareElement.css({width:""+2*a(this).outerWidth(),height:""+2*a(this).outerWidth()})};return a.fn.tilt.destroy=function(){a(this).each(function(){a(this).find(".js-tilt-glare").remove(),a(this).css({"will-change":"",transform:""}),a(this).off("mousemove mouseenter mouseleave")})},a.fn.tilt.getValues=function(){var c=[];return a(this).each(function(){this.mousePositions=b.call(this),c.push(d.call(this))}),c},a.fn.tilt.reset=function(){a(this).each(function(){var c=this;this.mousePositions=b.call(this),this.settings=a(this).data("settings"),f.call(this),setTimeout(function(){c.reset=!1},this.settings.transition)})},this.each(function(){var b=this;this.settings=a.extend({maxTilt:a(this).is("[data-tilt-max]")?a(this).data("tilt-max"):20,perspective:a(this).is("[data-tilt-perspective]")?a(this).data("tilt-perspective"):300,easing:a(this).is("[data-tilt-easing]")?a(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:a(this).is("[data-tilt-scale]")?a(this).data("tilt-scale"):"1",speed:a(this).is("[data-tilt-speed]")?a(this).data("tilt-speed"):"400",transition:!a(this).is("[data-tilt-transition]")||a(this).data("tilt-transition"),disableAxis:a(this).is("[data-tilt-disable-axis]")?a(this).data("tilt-disable-axis"):null,axis:a(this).is("[data-tilt-axis]")?a(this).data("tilt-axis"):null,reset:!a(this).is("[data-tilt-reset]")||a(this).data("tilt-reset"),glare:!!a(this).is("[data-tilt-glare]")&&a(this).data("tilt-glare"),maxGlare:a(this).is("[data-tilt-maxglare]")?a(this).data("tilt-maxglare"):1},g),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){a(b).data("settings",b.settings),b.settings.glare&&l.call(b),j.call(b)},this.init()})},a("[data-tilt]").tilt(),!0},(d="function"==typeof a?a.apply(e,c):a)===void 0||(g.exports=d)},112:function(h,a,e){var d,f,g,c;function b(a){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}c=function(e,c,d){"use strict";function g(d,c){for(var b=0,a;b<c.length;b++)a=c[b],a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}function h(a,b,c){return b&&g(a.prototype,b),c&&g(a,c),a}function f(){return(f=Object.assign||function(d){for(var a=1,b,c;a<arguments.length;a++){b=arguments[a];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}c=c&&c.hasOwnProperty("default")?c.default:c,d=d&&d.hasOwnProperty("default")?d.default:d;var a=function(a){var c=!1,b={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a))return a},getSelectorFromElement:function(c){var b=c.getAttribute("data-target");b&&"#"!==b||(b=c.getAttribute("href")||""),"#"===b.charAt(0)&&(b=function(b){return"function"==typeof a.escapeSelector?a.escapeSelector(b).substr(1):b.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}(b));try{return a(document).find(b).length>0?b:null}catch(a){return null}},reflow:function(a){return a.offsetHeight},triggerTransitionEnd:function(b){a(b).trigger(c.end)},supportsTransitionEnd:function(){return Boolean(c)},isElement:function(a){return(a[0]||a).nodeType},typeCheckConfig:function(h,i,f){var a,g,c,d,e;for(a in f)if(Object.prototype.hasOwnProperty.call(f,a))if(g=f[a],c=i[a],d=c&&b.isElement(c)?"element":(e=c,{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()),!new RegExp(g).test(d))throw new Error(h.toUpperCase()+': Option "'+a+'" provided type "'+d+'" but expected type "'+g+'".')}};return c=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},a.fn.emulateTransitionEnd=function(d){var e=this,c=!1;return a(this).one(b.TRANSITION_END,function(){c=!0}),setTimeout(function(){c||b.triggerTransitionEnd(e)},d),this},b.supportsTransitionEnd()&&(a.event.special[b.TRANSITION_END]={bindType:c.end,delegateType:c.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}}),b}(c),i=function(c){var e="collapse",g="bs.collapse",q=c.fn[e],m={toggle:!0,parent:""},p={toggle:"boolean",parent:"(string|element)"},v="show.bs.collapse",t="shown.bs.collapse",s="hide.bs.collapse",w="hidden.bs.collapse",r="click.bs.collapse.data-api",d="show",j="collapse",k="collapsing",l="collapsed",o="width",u=".show, .collapsing",n='[data-ekit-toggle="collapse"]',i=function(){function q(b,h){var f,d,g,e;this._isTransitioning=!1,this._element=b,this._config=this._getConfig(h),this._triggerArray=c.makeArray(c('[data-ekit-toggle="collapse"][href="#'+b.id+'"],[data-ekit-toggle="collapse"][data-target="#'+b.id+'"]'));for(f=c(n),d=0;d<f.length;d++)g=f[d],e=a.getSelectorFromElement(g),null!==e&&c(e).filter(b).length>0&&(this._selector=e,this._triggerArray.push(g));this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var i=q.prototype;return i.toggle=function(){c(this._element).hasClass(d)?this.hide():this.show()},i.show=function(){var b,h,f=this,i,e,m,n;this._isTransitioning||c(this._element).hasClass(d)||(this._parent&&0===(b=c.makeArray(c(this._parent).find(u).filter('[data-parent="'+this._config.parent+'"]'))).length&&(b=null),b&&(h=c(b).not(this._selector).data(g))&&h._isTransitioning)||(i=c.Event(v),(c(this._element).trigger(i),!i.isDefaultPrevented())&&(b&&(q._jQueryInterface.call(c(b).not(this._selector),"hide"),h||c(b).data(g,null)),e=this._getDimension(),c(this._element).removeClass(j).addClass(k),this._element.style[e]=0,this._triggerArray.length>0&&c(this._triggerArray).removeClass(l).attr("aria-expanded",!0),this.setTransitioning(!0),m=function(){c(f._element).removeClass(k).addClass(j).addClass(d),f._element.style[e]="",f.setTransitioning(!1),c(f._element).trigger(t)},a.supportsTransitionEnd()?(n="scroll"+(e[0].toUpperCase()+e.slice(1)),c(this._element).one(a.TRANSITION_END,m).emulateTransitionEnd(600),this._element.style[e]=this._element[n]+"px"):m()))},i.hide=function(){var f=this,g,b,e,h,i,m;if(!this._isTransitioning&&c(this._element).hasClass(d))if(g=c.Event(s),c(this._element).trigger(g),!g.isDefaultPrevented()){if(b=this._getDimension(),this._element.style[b]=this._element.getBoundingClientRect()[b]+"px",a.reflow(this._element),c(this._element).addClass(k).removeClass(j).removeClass(d),this._triggerArray.length>0)for(e=0;e<this._triggerArray.length;e++)h=this._triggerArray[e],i=a.getSelectorFromElement(h),null!==i&&(c(i).hasClass(d)||c(h).addClass(l).attr("aria-expanded",!1));this.setTransitioning(!0),m=function(){f.setTransitioning(!1),c(f._element).removeClass(k).addClass(j).trigger(w)},this._element.style[b]="",a.supportsTransitionEnd()?c(this._element).one(a.TRANSITION_END,m).emulateTransitionEnd(600):m()}},i.setTransitioning=function(a){this._isTransitioning=a},i.dispose=function(){c.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},i._getConfig=function(b){return(b=f({},m,b)).toggle=Boolean(b.toggle),a.typeCheckConfig(e,b,p),b},i._getDimension=function(){return c(this._element).hasClass(o)?o:"height"},i._getParent=function(){var d=this,b=null,e;return a.isElement(this._config.parent)?(b=this._config.parent,void 0!==this._config.parent.jquery&&(b=this._config.parent[0])):b=c(this._config.parent)[0],e='[data-ekit-toggle="collapse"][data-parent="'+this._config.parent+'"]',c(b).find(e).each(function(b,a){d._addAriaAndCollapsedClass(q._getTargetFromElement(a),[a])}),b},i._addAriaAndCollapsedClass=function(a,b){if(a){var e=c(a).hasClass(d);b.length>0&&c(b).toggleClass(l,!e).attr("aria-expanded",e)}},q._getTargetFromElement=function(d){var b=a.getSelectorFromElement(d);return b?c(b)[0]:null},q._jQueryInterface=function(a){return this.each(function(){var e=c(this),d=e.data(g),h=f({},m,e.data(),"object"==b(a)&&a);if(!d&&h.toggle&&/show|hide/.test(a)&&(h.toggle=!1),d||(d=new q(this,h),e.data(g,d)),"string"==typeof a){if(void 0===d[a])throw new TypeError('No method named "'+a+'"');d[a]()}})},h(q,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return m}}]),q}();return c(document).on(r,n,function(b){"A"===b.currentTarget.tagName&&b.preventDefault();var d=c(this),e=a.getSelectorFromElement(this);c(e).each(function(){var a=c(this),b=a.data(g)?"toggle":d.data();i._jQueryInterface.call(a,b)})}),c.fn[e]=i._jQueryInterface,c.fn[e].Constructor=i,c.fn[e].noConflict=function(){return c.fn[e]=q,i._jQueryInterface},i}(c),j=function(b){var j=b.fn.tab,k="hide.bs.tab",l="hidden.bs.tab",m="show.bs.tab",n="shown.bs.tab",i="click.bs.tab.data-api",c="active",e="show",f=".active",g="> li > .active",d=function(){function d(a){this._element=a}var i=d.prototype;return i.show=function(){var i=this,e,d,h,j,r,o,p,q;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&b(this._element).hasClass(c)||b(this._element).hasClass("disabled")||(h=b(this._element).closest(".nav, .list-group")[0],j=a.getSelectorFromElement(this._element),h&&(r="UL"===h.nodeName?g:f,d=(d=b.makeArray(b(h).find(r)))[d.length-1]),o=b.Event(k,{relatedTarget:this._element}),p=b.Event(m,{relatedTarget:d}),(d&&b(d).trigger(o),b(this._element).trigger(p),!p.isDefaultPrevented()&&!o.isDefaultPrevented())&&(j&&(e=b(j)[0]),this._activate(this._element,h),q=function(){var a=b.Event(l,{relatedTarget:i._element}),c=b.Event(n,{relatedTarget:d});b(d).trigger(a),b(i._element).trigger(c)},e?this._activate(e,e.parentNode,q):q()))},i.dispose=function(){b.removeData(this._element,"bs.tab"),this._element=null},i._activate=function(k,d,h){var i=this,c=("UL"===d.nodeName?b(d).find(g):b(d).children(f))[0],j=h&&a.supportsTransitionEnd()&&c&&b(c).hasClass("fade"),e=function(){return i._transitionComplete(k,c,h)};c&&j?b(c).one(a.TRANSITION_END,e).emulateTransitionEnd(150):e()},i._transitionComplete=function(d,f,i){var g,h;f&&(b(f).removeClass(e+" "+c),g=b(f.parentNode).find("> .dropdown-menu .active")[0],g&&b(g).removeClass(c),"tab"===f.getAttribute("role")&&f.setAttribute("aria-selected",!1)),(b(d).addClass(c),"tab"===d.getAttribute("role")&&d.setAttribute("aria-selected",!0),a.reflow(d),b(d).addClass(e),d.parentNode&&b(d.parentNode).hasClass("dropdown-menu"))&&(h=b(d).closest(".dropdown")[0],h&&b(h).find(".dropdown-toggle").addClass(c),d.setAttribute("aria-expanded",!0)),i&&i()},d._jQueryInterface=function(a){return this.each(function(){var e=b(this),c=e.data("bs.tab");if(c||(c=new d(this),e.data("bs.tab",c)),"string"==typeof a){if(void 0===c[a])throw new TypeError('No method named "'+a+'"');c[a]()}})},h(d,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),d}();return b(document).on(i,'[data-ekit-toggle="tab"], [data-ekit-toggle="pill"], [data-ekit-toggle="list"]',function(a){a.preventDefault(),d._jQueryInterface.call(b(this),"show")}),b.fn.tab=d._jQueryInterface,b.fn.tab.Constructor=d,b.fn.tab.noConflict=function(){return b.fn.tab=j,d._jQueryInterface},d}(c);!function(b){if(void 0===b)throw new TypeError("Ekit Prefixed Bootstrap's JavaScript requires jQuery. jQuery must be included before Ekit Prefixed Bootstrap's JavaScript.");var a=b.fn.jquery.split(" ")[0].split(".");if(a[0]<2&&a[1]<9||1===a[0]&&9===a[1]&&a[2]<1||a[0]>=4)throw new Error("Ekit Prefixed UI's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(c),e.Util=a,e.Collapse=i,e.Tab=j,Object.defineProperty(e,"__esModule",{value:!0})},"object"==b(a)?c(a,e(311)):(f=[a,e(311)],(g="function"==typeof(d=c)?d.apply(a,f):d)===void 0||(h.exports=g))},311:function(a){"use strict";a.exports=jQuery}},b={};function a(e){var f=b[e],d;return f!==void 0?f.exports:(d=b[e]={exports:{}},c[e].call(d.exports,d,d.exports,a),d.exports)}a.n=function(b){var c=b&&b.__esModule?function(){return b.default}:function(){return b};return a.d(c,{a:c}),c},a.d=function(d,c){for(var b in c)a.o(c,b)&&!a.o(d,b)&&Object.defineProperty(d,b,{enumerable:!0,get:c[b]})},a.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},function(){"use strict";a(412),a(557),a(101),a(580),a(178),a(595),a(363),a(644),a(989),a(430),a(457),a(285),a(112),a(793),a(32)}()}();
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=98)}({98:function(e,t,n){"use strict";n.r(t);var r=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(e,t){return function(n,i,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,l=e[t];if(o(n)&&r(i))if("function"==typeof a)if("number"==typeof s){var c={callback:a,priority:s,namespace:i};if(l[n]){var u,d=l[n].handlers;for(u=d.length;u>0&&!(s>=d[u-1].priority);u--);u===d.length?d[u]=c:d.splice(u,0,c),l.__current.forEach((function(e){e.name===n&&e.currentIndex>=u&&e.currentIndex++}))}else l[n]={handlers:[c],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,i,a,s)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,a){var s=e[t];if(o(i)&&(n||r(a))){if(!s[i])return 0;var l=0;if(n)l=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else for(var c=s[i].handlers,u=function(e){c[e].namespace===a&&(c.splice(e,1),l++,s.__current.forEach((function(t){t.name===i&&t.currentIndex>=e&&t.currentIndex--})))},d=c.length-1;d>=0;d--)u(d);return"hookRemoved"!==i&&e.doAction("hookRemoved",i,a),l}}};var s=function(e,t){return function(n,r){var o=e[t];return void 0!==r?n in o&&o[n].handlers.some((function(e){return e.namespace===r})):n in o}};var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;var i=o[r].handlers;for(var a=arguments.length,s=new Array(a>1?a-1:0),l=1;l<a;l++)s[l-1]=arguments[l];if(!i||!i.length)return n?s[0]:void 0;var c={name:r,currentIndex:0};for(o.__current.push(c);c.currentIndex<i.length;){var u=i[c.currentIndex],d=u.callback.apply(null,s);n&&(s[0]=d),c.currentIndex++}return o.__current.pop(),n?s[0]:void 0}};var c=function(e,t){return function(){var n,r,o=e[t];return null!==(n=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var u=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var d=function(e,t){return function(n){var r=e[t];if(o(n))return r[n]&&r[n].runs?r[n].runs:0}},f=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=a(this,"actions"),this.removeFilter=a(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=a(this,"actions",!0),this.removeAllFilters=a(this,"filters",!0),this.doAction=l(this,"actions"),this.applyFilters=l(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")};var h,p=function(){return new f},y=p();y.addAction,y.addFilter,y.removeAction,y.removeFilter,y.hasAction,y.hasFilter,y.removeAllActions,y.removeAllFilters,y.doAction,y.applyFilters,y.currentAction,y.currentFilter,y.doingAction,y.doingFilter,y.didAction,y.didFilter,y.actions,y.filters;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.isEditMode=!1,window.ea={hooks:p(),isEditMode:!1,elementStatusCheck:function(e){return!(!window.eaElementList||!(e in window.eaElementList))||(window.eaElementList=g(g({},window.eaElementList),{},b({},e,!0)),!1)}},ea.hooks.addAction("widgets.reinit","ea",(function(e){var t=jQuery(".eael-filter-gallery-container",e),n=jQuery(".eael-post-grid:not(.eael-post-carousel)",e),r=jQuery(".eael-twitter-feed-masonry",e),o=jQuery(".eael-instafeed",e),i=jQuery(".premium-gallery-container",e),a=jQuery(".eael-event-calendar-cls",e),s=jQuery(".eael-testimonial-slider",e),l=jQuery(".eael-tm-carousel",e),c=jQuery(".eael-post-carousel:not(.eael-post-grid)",e),u=jQuery(".eael-logo-carousel",e),d=jQuery(".eael-twitter-feed-carousel",e);t.length&&t.isotope("layout"),n.length&&n.isotope("layout"),r.length&&r.isotope("layout"),o.length&&o.isotope("layout"),i.length&&i.isotope("layout"),a.length&&ea.hooks.doAction("eventCalendar.reinit"),s.length&&ea.hooks.doAction("testimonialSlider.reinit"),l.length&&ea.hooks.doAction("teamMemberCarousel.reinit"),c.length&&ea.hooks.doAction("postCarousel.reinit"),u.length&&ea.hooks.doAction("logoCarousel.reinit"),d.length&&ea.hooks.doAction("twitterCarousel.reinit")})),jQuery(window).on("elementor/frontend/init",(function(){window.isEditMode=elementorFrontend.isEditMode(),window.ea.isEditMode=elementorFrontend.isEditMode(),ea.hooks.doAction("init"),ea.isEditMode&&ea.hooks.doAction("editMode.init")})),h=jQuery,ea.getToken=function(){localize.nonce&&!ea.noncegenerated&&h.ajax({url:localize.ajaxurl,type:"post",data:{action:"eael_get_token"},success:function(e){e.success&&(localize.nonce=e.data.nonce,ea.noncegenerated=!0)}})},h("a").on("click",(function(e){var t,n=h(this).attr("href");(t=(n=void 0===n?"":n).startsWith("#"))||(t=(n=n.replace(localize.page_permalink,"")).startsWith("#"));try{if(t&&(h(n).hasClass("eael-tab-item-trigger")||h(n).hasClass("eael-accordion-header"))&&(h(n).trigger("click"),void 0!==n&&n)){var r=h(n).closest(".eael-advance-tabs").data("custom-id-offset");r=r?parseFloat(r):0,h("html, body").animate({scrollTop:h(n).offset().top-r},300)}}catch(e){}})),function(e){e(document).on("click",".theme-savoy .eael-product-popup .nm-qty-minus, .theme-savoy .eael-product-popup .nm-qty-plus",(function(t){var n=e(this),r=n.closest(".quantity").find(".qty"),o=parseFloat(r.val()),i=parseFloat(r.attr("max")),a=parseFloat(r.attr("min")),s=r.attr("step");o&&""!==o&&"NaN"!==o||(o=0),""!==i&&"NaN"!==i||(i=""),""!==a&&"NaN"!==a||(a=0),"any"!==s&&""!==s&&void 0!==s&&"NaN"!==parseFloat(s)||(s=1),n.hasClass("nm-qty-plus")?i&&(i==o||o>i)?r.val(i):r.val(o+parseFloat(s)):a&&(a==o||o<a)?r.val(a):o>0&&r.val(o-parseFloat(s))}))}(jQuery),function(e){e.fn.isInViewport=function(){if(e(this).length<1)return!1;var t=e(this).offset().top,n=t+e(this).outerHeight()/2,r=e(window).scrollTop(),o=r+e(window).height()/2;return n>r&&t<o},e(document).ready((function(){var e=new URLSearchParams(location.search);if(e.has("popup-selector")&&(e.has("eael-lostpassword")||e.has("eael-resetpassword"))){var t=e.get("popup-selector");t.length&&(t=t.replace(/_/g," "),setTimeout((function(){jQuery(t).trigger("click")}),300))}}))}(jQuery)}});;
!function(){var e=function(t,i){function s(){this.q=[],this.add=function(e){this.q.push(e)};var e,t;this.call=function(){for(e=0,t=this.q.length;e<t;e++)this.q[e].call()}}function o(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t]}function n(e,t){if(e.resizedAttached){if(e.resizedAttached)return void e.resizedAttached.add(t)}else e.resizedAttached=new s,e.resizedAttached.add(t);e.resizeSensor=document.createElement("div"),e.resizeSensor.className="resize-sensor";var i="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",n="position: absolute; left: 0; top: 0; transition: 0s;";e.resizeSensor.style.cssText=i,e.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+i+'"><div style="'+n+'"></div></div><div class="resize-sensor-shrink" style="'+i+'"><div style="'+n+' width: 200%; height: 200%"></div></div>',e.appendChild(e.resizeSensor),{fixed:1,absolute:1}[o(e,"position")]||(e.style.position="relative");var d,r,l=e.resizeSensor.childNodes[0],c=l.childNodes[0],h=e.resizeSensor.childNodes[1],a=(h.childNodes[0],function(){c.style.width=l.offsetWidth+10+"px",c.style.height=l.offsetHeight+10+"px",l.scrollLeft=l.scrollWidth,l.scrollTop=l.scrollHeight,h.scrollLeft=h.scrollWidth,h.scrollTop=h.scrollHeight,d=e.offsetWidth,r=e.offsetHeight});a();var f=function(){e.resizedAttached&&e.resizedAttached.call()},u=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)},p=function(){e.offsetWidth==d&&e.offsetHeight==r||f(),a()};u(l,"scroll",p),u(h,"scroll",p)}var d=Object.prototype.toString.call(t),r="[object Array]"===d||"[object NodeList]"===d||"[object HTMLCollection]"===d||"undefined"!=typeof jQuery&&t instanceof jQuery||"undefined"!=typeof Elements&&t instanceof Elements;if(r)for(var l=0,c=t.length;l<c;l++)n(t[l],i);else n(t,i);this.detach=function(){if(r)for(var i=0,s=t.length;i<s;i++)e.detach(t[i]);else e.detach(t)}};e.detach=function(e){e.resizeSensor&&(e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)},"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e:window.ResizeSensor=e}();
;
/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
**/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.StickySidebar={})}(this,function(t){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e,i,n=(function(t,e){(function(t){Object.defineProperty(t,"__esModule",{value:!0});var l,n,e=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),i=(l=".stickySidebar",n={topSpacing:0,bottomSpacing:0,containerSelector:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",resizeSensor:!0,minWidth:!1},function(){function c(t){var e=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.options=c.extend(n,i),this.sidebar="string"==typeof t?document.querySelector(t):t,void 0===this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach(function(t){e[t]=e[t].bind(e)}),this.initialize()}return e(c,[{key:"initialize",value:function(){var i=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var t=document.createElement("div");for(t.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(t);this.sidebar.firstChild!=t;)t.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var e=document.querySelectorAll(this.options.containerSelector);if((e=Array.prototype.slice.call(e)).forEach(function(t,e){t.contains(i.sidebar)&&(i.container=t)}),!e.length)throw new Error("The container does not contains on the sidebar.")}"function"!=typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!=typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){window.addEventListener("resize",this,{passive:!0,capture:!1}),window.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+l,this),this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(new ResizeSensor(this.sidebarInner,this.handleEvent),new ResizeSensor(this.container,this.handleEvent))}},{key:"handleEvent",value:function(t){this.updateSticky(t)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=c.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var t=this.dimensions;t.sidebarLeft=c.offsetRelative(this.sidebar).left,t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportBottom=t.viewportTop+t.viewportHeight,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"==typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"==typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){var t=this.dimensions,e="down"===this.scrollDirection?t.lastBottomSpacing:t.lastTopSpacing;return this.dimensions.sidebarHeight+e<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,i=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,i="STATIC"):i="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,i}},{key:"_getAffixTypeScrollingDown",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,o=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+i>=t.containerBottom?(t.translateY=t.containerBottom-e,o="CONTAINER-BOTTOM"):i>=t.containerTop&&(t.translateY=i-t.containerTop,o="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,o="CONTAINER-BOTTOM"):e+t.translateY<=n?(t.translateY=n-e,o="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(o="VIEWPORT-UNBOTTOM"),o}},{key:"_getAffixTypeScrollingUp",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,n=t.viewportBottom-t.bottomSpacing,o=this.affixedType;return i<=t.translateY+t.containerTop?(t.translateY=i-t.containerTop,o="VIEWPORT-TOP"):t.containerBottom<=n?(t.translateY=t.containerBottom-e,o="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(o="VIEWPORT-UNBOTTOM"),o}},{key:"_getStyle",value:function(t){if(void 0!==t){var e={inner:{},outer:{}},i=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var n=this._getTranslate(0,i.translateY+"px");e.inner=n?{transform:n}:{position:"absolute",top:i.translateY,width:i.sidebarWidth}}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:i.sidebarHeight,position:"relative"}}return e.outer=c.extend({height:"",position:""},e.outer),e.inner=c.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},e.inner),e}}},{key:"stickyPosition",value:function(t){if(!this._breakpoint){t=this._reStyle||t||!1,this.options.topSpacing,this.options.bottomSpacing;var e=this.getAffixType(),i=this._getStyle(e);if((this.affixedType!=e||t)&&e){var n="affix."+e.toLowerCase().replace("viewport-","")+l;for(var o in c.eventTrigger(this.sidebar,n),"STATIC"===e?c.removeClass(this.sidebar,this.options.stickyClass):c.addClass(this.sidebar,this.options.stickyClass),i.outer){var s="number"==typeof i.outer[o]?"px":"";this.sidebar.style[o]=i.outer[o]+s}for(var r in i.inner){var a="number"==typeof i.inner[r]?"px":"";this.sidebarInner.style[r]=i.inner[r]+a}var p="affixed."+e.toLowerCase().replace("viewport-","")+l;c.eventTrigger(this.sidebar,p)}else this._initialized&&(this.sidebarInner.style.left=i.inner.left);this.affixedType=e}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),c.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var t,e=this,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,t=i.type,requestAnimationFrame(function(){switch(t){case"scroll":e._calcDimensionsWithScroll(),e.observeScrollDir(),e.stickyPosition();break;case"resize":default:e._widthBreakpoint(),e.calcDimensions(),e.stickyPosition(!0)}e._running=!1}))}},{key:"_setSupportFeatures",value:function(){var t=this.support;t.transform=c.supportTransform(),t.transform3d=c.supportTransform(!0)}},{key:"_getTranslate",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":!!this.support.translate&&"translate("+t+", "+e+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+l,this);var t={inner:{},outer:{}};for(var e in t.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},t.outer={height:"",position:""},t.outer)this.sidebar.style[e]=t.outer[e];for(var i in t.inner)this.sidebarInner.style[i]=t.inner[i];this.options.resizeSensor&&"undefined"!=typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(t){var i=!1,e=t?"perspective":"transform",n=e.charAt(0).toUpperCase()+e.slice(1),o=document.createElement("support").style;return(e+" "+["Webkit","Moz","O","ms"].join(n+" ")+n).split(" ").forEach(function(t,e){if(void 0!==o[t])return i=t,!1}),i}},{key:"eventTrigger",value:function(t,e,i){try{var n=new CustomEvent(e,{detail:i})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i)}t.dispatchEvent(n)}},{key:"extend",value:function(t,e){var i={};for(var n in t)void 0!==e[n]?i[n]=e[n]:i[n]=t[n];return i}},{key:"offsetRelative",value:function(t){var e={left:0,top:0};do{var i=t.offsetTop,n=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(n)||(e.left+=n),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}},{key:"addClass",value:function(t,e){c.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}},{key:"removeClass",value:function(t,e){c.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}},{key:"defaults",get:function(){return n}}]),c}());t.default=i,window.StickySidebar=i})(e)}(e={exports:{}},e.exports),e.exports),o=(i=n)&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;t.default=o,t.__moduleExports=n,Object.defineProperty(t,"__esModule",{value:!0})});;
/* jSticky Plugin
 * =============
 * Author: Andrew Henderson (@AndrewHenderson)
 * Contributor: Mike Street (@mikestreety)
 * Date: 9/7/2012
 * Update: 09/20/2016
 * Website: http://github.com/andrewhenderson/jsticky/
 * Description: A jQuery plugin that keeps select DOM
 * element(s) in view while scrolling the page.
 */

;(function($) {

  $.fn.deStickySection = function(options) {
    var defaults = {
      topSpacing: 0, // No spacing by default
      zIndex: '', // No default z-index
      stopper: $('.sticky-stopper'), // Default stopper class, also accepts number value
      stickyClass: false // Class applied to element when it's stuck
    };
    var settings = $.extend({}, defaults, options); // Accepts custom stopper id or class

    // Checks if custom z-index was defined
    function checkIndex() {
      if (typeof settings.zIndex == 'number') {
        return true;
      } else {
        return false;
      }
    }

    var hasIndex = checkIndex(); // True or false

    // Checks if a stopper exists in the DOM or number defined
    function checkStopper() {
      if (0 < settings.stopper.length || typeof settings.stopper === 'number') {
        return true;
      } else {
        return false;
      }
    }
    var hasStopper = checkStopper(); // True or false

    return this.each(function() {

      var $this = $(this);
      var topSpacing = settings.topSpacing;
      var thisHeight = $this.outerHeight();
      var thisWidth = $this.outerWidth();
      var zIndex = settings.zIndex;
      var pushPoint = $this.offset().top - topSpacing; // Point at which the sticky element starts pushing
      var placeholder = $('<div></div>').width(thisWidth ).height(thisHeight).addClass('sticky-placeholder'); // Cache a clone sticky element
      var stopper = settings.stopper;
      var $window = $(window);
      var detached = false;
      var stick = false;

      function stickyScroll() {
        if (detached) {
          return;
        }

        var thisHeight = $this.outerHeight();
        var windowTop = $window.scrollTop(); // Check window's scroll position
        var stopPoint = stopper;
        var parentWidth = $this.parent().width();

        placeholder.width(parentWidth);

        if ( hasStopper && typeof settings.stopper !== 'number' ) {
          var stopperTop = stopper.offset().top;
          stopPoint  = (stopperTop - thisHeight) - topSpacing;
        }

        if (pushPoint < windowTop) {
          // Create a placeholder for sticky element to occupy vertical real estate
          if(settings.stickyClass)
            $this.addClass(settings.stickyClass);

          $this.after(placeholder ).css({
            position: 'fixed',
            top: topSpacing,
            width: parentWidth
          });

          if (hasIndex) {
            $this.css({
              zIndex: zIndex
            });
          }

          if (hasStopper) {
            if (stopPoint < windowTop) {
              var diff = (stopPoint - windowTop) + topSpacing;
              $this.css({
                top: diff
              });
            }
          }
          if ( ! stick ) {
            $this.trigger( 'deStickySection:stick' );
          }
          stick = true;
        } else {
          if(settings.stickyClass)
            $this.removeClass(settings.stickyClass);

          $this.css({
            position: '',
            top: '',
            left: '',
            width: ''
          });

          placeholder.remove();
          if ( stick ) {
            $this.trigger( 'deStickySection:unstick' );
          }
          stick = false;
        }
      }

      function detachStickyScroll() {
        detached = true;
        //$window.off('load', stickyScroll);
        $window.off('scroll', stickyScroll);
        $window.off('touchmove', stickyScroll);
        $window.off('resize', stickyScroll);

        if(settings.stickyClass)
          $this.removeClass(settings.stickyClass);

        $this.css({
          position: '',
          top: '',
          left: '',
          width: ''
        });

        placeholder.remove();
      }

      if($window.innerHeight() > thisHeight) {
        //$window.on('load', stickyScroll);
        $this.on( 'deStickySection:activated', stickyScroll );

        $window.on('scroll', stickyScroll);
        $window.on('touchmove', stickyScroll);
        $window.on('resize', stickyScroll);

        $this.on( 'deStickySection:detach', detachStickyScroll );
      }
    });
  };
})(jQuery);
;
/*! elementor-pro - v3.15.0 - 09-08-2023 */
(()=>{"use strict";var e,r,n,a={},c={};function __webpack_require__(e){var r=c[e];if(void 0!==r)return r.exports;var n=c[e]={exports:{}};return a[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=a,e=[],__webpack_require__.O=(r,n,a,c)=>{if(!n){var _=1/0;for(o=0;o<e.length;o++){for(var[n,a,c]=e[o],i=!0,b=0;b<n.length;b++)(!1&c||_>=c)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](n[b])))?n.splice(b--,1):(i=!1,c<_&&(_=c));if(i){e.splice(o--,1);var t=a();void 0!==t&&(r=t)}}return r}c=c||0;for(var o=e.length;o>0&&e[o-1][2]>c;o--)e[o]=e[o-1];e[o]=[n,a,c]},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,n)=>(__webpack_require__.f[n](e,r),r)),[])),__webpack_require__.u=e=>714===e?"code-highlight.28a979661569ddbbf60d.bundle.min.js":721===e?"video-playlist.74fca1f2470fa6474595.bundle.min.js":256===e?"paypal-button.3d0d5af7df85963df32c.bundle.min.js":699===e?"60745ddf42fde6647dbc.bundle.min.js":156===e?"stripe-button.2acbca466dfeb9585680.bundle.min.js":241===e?"progress-tracker.e19e2547639d7d9dac17.bundle.min.js":26===e?"animated-headline.ffb4bb4ce1b16b11446d.bundle.min.js":534===e?"media-carousel.aca2224ef13e6f999011.bundle.min.js":369===e?"carousel.9b02b45d7826c1c48f33.bundle.min.js":804===e?"countdown.b0ef6392ec4ff09ca2f2.bundle.min.js":888===e?"hotspot.6ab1751404c381bfe390.bundle.min.js":680===e?"form.72b77b99d67b130634d2.bundle.min.js":121===e?"gallery.8ca9a354ce039d1ba641.bundle.min.js":288===e?"lottie.565b778d23c04461c4ea.bundle.min.js":42===e?"nav-menu.3347cc64f9b3d71f7f0c.bundle.min.js":50===e?"popup.483b906ddaa1af17ff14.bundle.min.js":985===e?"load-more.064e7e640e7ef9c3fc30.bundle.min.js":287===e?"posts.e33113a212454e383747.bundle.min.js":824===e?"portfolio.042905bde20a1afccada.bundle.min.js":58===e?"share-buttons.81497e7fccd4fa77b6b9.bundle.min.js":114===e?"slides.fb6b9afd278bb9c5e75b.bundle.min.js":443===e?"social.2d2e44e8608690943f29.bundle.min.js":838===e?"table-of-contents.4c244acf62929782146e.bundle.min.js":685===e?"archive-posts.80f1139e64eb8bd1a74a.bundle.min.js":858===e?"search-form.6eb419c467197ca411a7.bundle.min.js":102===e?"woocommerce-menu-cart.faa7b80e9ba9e5072070.bundle.min.js":1===e?"woocommerce-purchase-summary.46445ab1120a8c28c05c.bundle.min.js":124===e?"woocommerce-checkout-page.b18af78282979b6f74e4.bundle.min.js":859===e?"woocommerce-cart.fc30c6cb753d4098eff5.bundle.min.js":979===e?"woocommerce-my-account.3ee10d01e625dad87f73.bundle.min.js":497===e?"woocommerce-notices.da27b22c491f7cbe9158.bundle.min.js":800===e?"product-add-to-cart.023d7d31fbf96c3dbdfc.bundle.min.js":149===e?"loop.a9bed2dcd86eddf71249.bundle.min.js":153===e?"loop-carousel.4e8fd6593adbba21698e.bundle.min.js":495===e?"mega-menu.e835faaf6e328f296a63.bundle.min.js":157===e?"mega-menu-stretch-content.99000844c609182f2303.bundle.min.js":209===e?"nested-carousel.9145d6891784d5818672.bundle.min.js":188===e?"taxonomy-filter.9df78f10e131a7423313.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="elementor-pro:",__webpack_require__.l=(e,a,c,_)=>{if(r[e])r[e].push(a);else{var i,b;if(void 0!==c)for(var t=document.getElementsByTagName("script"),o=0;o<t.length;o++){var u=t[o];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+c){i=u;break}}i||(b=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",n+c),i.src=e),r[e]=[a];var onScriptComplete=(n,a)=>{i.onerror=i.onload=null,clearTimeout(d);var c=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),c&&c.forEach((e=>e(a))),n)return n(a)},d=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=onScriptComplete.bind(null,i.onerror),i.onload=onScriptComplete.bind(null,i.onload),b&&document.head.appendChild(i)}},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={396:0};__webpack_require__.f.j=(r,n)=>{var a=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==a)if(a)n.push(a[2]);else if(396!=r){var c=new Promise(((n,c)=>a=e[r]=[n,c]));n.push(a[2]=c);var _=__webpack_require__.p+__webpack_require__.u(r),i=new Error;__webpack_require__.l(_,(n=>{if(__webpack_require__.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var c=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+c+": "+_+")",i.name="ChunkLoadError",i.type=c,i.request=_,a[1](i)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,n)=>{var a,c,[_,i,b]=n,t=0;if(_.some((r=>0!==e[r]))){for(a in i)__webpack_require__.o(i,a)&&(__webpack_require__.m[a]=i[a]);if(b)var o=b(__webpack_require__)}for(r&&r(n);t<_.length;t++)c=_[t],__webpack_require__.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return __webpack_require__.O(o)},r=self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();;
/*! elementor - v3.15.0 - 20-08-2023 */
(()=>{"use strict";var e,r,_,t,i,a={},n={};function __webpack_require__(e){var r=n[e];if(void 0!==r)return r.exports;var _=n[e]={exports:{}};return a[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=a,e=[],__webpack_require__.O=(r,_,t,i)=>{if(!_){var a=1/0;for(u=0;u<e.length;u++){for(var[_,t,i]=e[u],n=!0,c=0;c<_.length;c++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](_[c])))?_.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(u--,1);var o=t();void 0!==o&&(r=o)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[_,t,i]},_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var i=Object.create(null);__webpack_require__.r(i);var a={};r=r||[null,_({}),_([]),_(_)];for(var n=2&t&&e;"object"==typeof n&&!~r.indexOf(n);n=_(n))Object.getOwnPropertyNames(n).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,__webpack_require__.d(i,a),i},__webpack_require__.d=(e,r)=>{for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,_)=>(__webpack_require__.f[_](e,r),r)),[])),__webpack_require__.u=e=>723===e?"lightbox.1b6e05e0607040eb8929.bundle.min.js":48===e?"text-path.b50b3e74488a4e302613.bundle.min.js":209===e?"accordion.8799675460c73eb48972.bundle.min.js":745===e?"alert.cbc2a0fee74ee3ed0419.bundle.min.js":120===e?"counter.02cef29c589e742d4c8c.bundle.min.js":192===e?"progress.ca55d33bb06cee4e6f02.bundle.min.js":520===e?"tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js":181===e?"toggle.31881477c45ff5cf9d4d.bundle.min.js":791===e?"video.fea4f8dfdf17262f23e8.bundle.min.js":268===e?"image-carousel.4455c6362492d9067512.bundle.min.js":357===e?"text-editor.2c35aafbe5bf0e127950.bundle.min.js":52===e?"wp-audio.75f0ced143febb8cd31a.bundle.min.js":413===e?"container.3e03f0b480c65f79dee6.bundle.min.js":void 0,__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},i="elementor:",__webpack_require__.l=(e,r,_,a)=>{if(t[e])t[e].push(r);else{var n,c;if(void 0!==_)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var b=o[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==i+_){n=b;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",i+_),n.src=e),t[e]=[r];var onScriptComplete=(r,_)=>{n.onerror=n.onload=null,clearTimeout(p);var i=t[e];if(delete t[e],n.parentNode&&n.parentNode.removeChild(n),i&&i.forEach((e=>e(_))),r)return r(_)},p=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=onScriptComplete.bind(null,n.onerror),n.onload=onScriptComplete.bind(null,n.onload),c&&document.head.appendChild(n)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={162:0};__webpack_require__.f.j=(r,_)=>{var t=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==t)if(t)_.push(t[2]);else if(162!=r){var i=new Promise(((_,i)=>t=e[r]=[_,i]));_.push(t[2]=i);var a=__webpack_require__.p+__webpack_require__.u(r),n=new Error;__webpack_require__.l(a,(_=>{if(__webpack_require__.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var i=_&&("load"===_.type?"missing":_.type),a=_&&_.target&&_.target.src;n.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",n.name="ChunkLoadError",n.type=i,n.request=a,t[1](n)}}),"chunk-"+r,r)}else e[r]=0},__webpack_require__.O.j=r=>0===e[r];var webpackJsonpCallback=(r,_)=>{var t,i,[a,n,c]=_,o=0;if(a.some((r=>0!==e[r]))){for(t in n)__webpack_require__.o(n,t)&&(__webpack_require__.m[t]=n[t]);if(c)var u=c(__webpack_require__)}for(r&&r(_);o<a.length;o++)i=a[o],__webpack_require__.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return __webpack_require__.O(u)},r=self.webpackChunkelementor=self.webpackChunkelementor||[];r.forEach(webpackJsonpCallback.bind(null,0)),r.push=webpackJsonpCallback.bind(null,r.push.bind(r))})()})();;
/*! elementor - v3.15.0 - 20-08-2023 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[354],{381:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{t=Array.isArray(t)?t:[t];for(const n of t)if(e.constructor.name===n.prototype[Symbol.toStringTag])return!0;return!1}},8135:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{elements:".elementor-element",nestedDocumentElements:".elementor .elementor-element"},classes:{editMode:"elementor-edit-mode"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$elements:this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))}}getDocumentSettings(e){let t;if(this.isEdit){t={};const e=elementor.settings.page.model;jQuery.each(e.getActiveControls(),(n=>{t[n]=e.attributes[n]}))}else t=this.$element.data("elementor-settings")||{};return this.getItems(t,e)}runElementsHandlers(){this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))}onInit(){this.$element=this.getSettings("$element"),super.onInit(),this.isEdit=this.$element.hasClass(this.getSettings("classes.editMode")),this.isEdit?elementor.on("document:loaded",(()=>{elementor.settings.page.model.on("change",this.onSettingsChange.bind(this))})):this.runElementsHandlers()}onSettingsChange(){}}t.default=_default},1292:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2821));class CarouselHandlerBase extends i.default{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,swiperWrapper:".swiper-wrapper",slideContent:".swiper-slide",swiperArrow:".elementor-swiper-button",paginationWrapper:".swiper-pagination",paginationBullet:".swiper-pagination-bullet",paginationBulletWrapper:".swiper-pagination-bullets"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$swiperContainer:this.$element.find(e.carousel),$swiperWrapper:this.$element.find(e.swiperWrapper),$swiperArrows:this.$element.find(e.swiperArrow),$paginationWrapper:this.$element.find(e.paginationWrapper),$paginationBullets:this.$element.find(e.paginationBullet),$paginationBulletWrapper:this.$element.find(e.paginationBulletWrapper)};return t.$slides=t.$swiperContainer.find(e.slideContent),t}getSwiperSettings(){const e=this.getElementSettings(),t=+e.slides_to_show||3,n=1===t,r=elementorFrontend.config.responsive.activeBreakpoints,i={mobile:1,tablet:n?1:2},s={slidesPerView:t,loop:"yes"===e.infinite,speed:e.speed,handleElementorBreakpoints:!0,breakpoints:{}};let o=t;Object.keys(r).reverse().forEach((t=>{const n=i[t]?i[t]:o;s.breakpoints[r[t].value]={slidesPerView:+e["slides_to_show_"+t]||n,slidesPerGroup:+e["slides_to_scroll_"+t]||1},e.image_spacing_custom&&(s.breakpoints[r[t].value].spaceBetween=this.getSpaceBetween(t)),o=+e["slides_to_show_"+t]||n})),"yes"===e.autoplay&&(s.autoplay={delay:e.autoplay_speed,disableOnInteraction:"yes"===e.pause_on_interaction}),n?(s.effect=e.effect,"fade"===e.effect&&(s.fadeEffect={crossFade:!0})):s.slidesPerGroup=+e.slides_to_scroll||1,e.image_spacing_custom&&(s.spaceBetween=this.getSpaceBetween());const a="arrows"===e.navigation||"both"===e.navigation,l="dots"===e.navigation||"both"===e.navigation||e.pagination;return a&&(s.navigation={prevEl:".elementor-swiper-button-prev",nextEl:".elementor-swiper-button-next"}),l&&(s.pagination={el:`.elementor-element-${this.getID()} .swiper-pagination`,type:e.pagination?e.pagination:"bullets",clickable:!0,renderBullet:(e,t)=>`<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e+1}"></span>`}),"yes"===e.lazyload&&(s.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),s.a11y={enabled:!0,prevSlideMessage:elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,nextSlideMessage:elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,firstSlideMessage:elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,lastSlideMessage:elementorFrontend.config.i18n.a11yCarouselLastSlideMessage},s.on={slideChangeTransitionEnd:()=>{this.a11ySetSlideAriaHidden()},slideChange:()=>{this.a11ySetPaginationTabindex(),this.handleElementHandlers()}},this.applyOffsetSettings(e,s,t),s}getOffsetWidth(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"offset_width","size",e)||0}applyOffsetSettings(e,t,n){const r=e.offset_sides;if(elementorFrontend.isEditMode()&&"NestedCarousel"===this.constructor.name||!r||"none"===r)return;this.getOffsetWidth();switch(r){case"right":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-right");break;case"left":this.addClassToSwiperContainer("offset-left");break;case"both":this.forceSliderToShowNextSlideWhenOnLast(t,n),this.addClassToSwiperContainer("offset-both")}}forceSliderToShowNextSlideWhenOnLast(e,t){e.slidesPerView=t+.001}addClassToSwiperContainer(e){this.getDefaultElements().$swiperContainer[0].classList.add(e)}async onInit(){if(super.onInit(...arguments),!this.elements.$swiperContainer.length||2>this.elements.$slides.length)return;const e=elementorFrontend.utils.swiper;this.swiper=await new e(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper);"yes"===this.getElementSettings().pause_on_hover&&this.togglePauseOnHover(!0),this.a11ySetWidgetAriaDetails(),this.a11ySetPaginationTabindex(),this.a11ySetSlideAriaHidden("initialisation")}bindEvents(){this.elements.$swiperArrows.on("keydown",this.onDirectionArrowKeydown.bind(this)),this.elements.$paginationWrapper.on("keydown",".swiper-pagination-bullet",this.onDirectionArrowKeydown.bind(this)),this.elements.$swiperContainer.on("keydown",".swiper-slide",this.onDirectionArrowKeydown.bind(this)),this.$element.find(":focusable").on("focus",this.onFocusDisableAutoplay.bind(this)),elementorFrontend.elements.$window.on("resize",this.getSwiperSettings.bind(this))}unbindEvents(){this.elements.$swiperArrows.off(),this.elements.$paginationWrapper.off(),this.elements.$swiperContainer.off(),this.$element.find(":focusable").off(),elementorFrontend.elements.$window.off("resize")}onDirectionArrowKeydown(e){const t=elementorFrontend.config.isRTL,n=e.originalEvent.code,r=t?"ArrowLeft":"ArrowRight";if(!(-1!==["ArrowLeft","ArrowRight"].indexOf(n)))return!0;(t?"ArrowRight":"ArrowLeft")===n?this.swiper.slidePrev():r===n&&this.swiper.slideNext()}onFocusDisableAutoplay(){this.swiper.autoplay.stop()}updateSwiperOption(e){const t=this.getElementSettings()[e],n=this.swiper.params;switch(e){case"autoplay_speed":n.autoplay.delay=t;break;case"speed":n.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",arrows_position:"arrows_position"}}onElementChange(e){if(0===e.indexOf("image_spacing_custom"))return void this.updateSpaceBetween(e);if(this.getChangeableProperties()[e])if("pause_on_hover"===e){const e=this.getElementSettings("pause_on_hover");this.togglePauseOnHover("yes"===e)}else this.updateSwiperOption(e)}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}getSpaceBetween(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"image_spacing_custom","size",e)||0}updateSpaceBetween(e){const t=e.match("image_spacing_custom_(.*)"),n=t?t[1]:"desktop",r=this.getSpaceBetween(n);"desktop"!==n&&(this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween=r),this.swiper.params.spaceBetween=r,this.swiper.update()}getPaginationBullets(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"array";const t=this.$element.find(this.getSettings("selectors").paginationBullet);return"array"===e?Array.from(t):t}a11ySetWidgetAriaDetails(){const e=this.$element;e.attr("aria-roledescription","carousel"),e.attr("aria-label",elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)}a11ySetPaginationTabindex(){const e=this.swiper?.params.pagination.bulletClass,t=this.swiper?.params.pagination.bulletActiveClass;this.getPaginationBullets().forEach((e=>{e.classList.contains(t)||e.removeAttribute("tabindex")}));const n="ArrowLeft"===event?.code||"ArrowRight"===event?.code;event?.target?.classList.contains(e)&&n&&this.$element.find(`.${t}`).trigger("focus")}getSwiperWrapperTranformXValue(){let e=this.elements.$swiperWrapper[0]?.style.transform;return e=e.replace("translate3d(",""),e=e.split(","),e=parseInt(e[0].replace("px","")),e||0}a11ySetSlideAriaHidden(){if("number"!=typeof("initialisation"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")?0:this.swiper?.activeIndex))return;const e=this.getSwiperWrapperTranformXValue(),t=this.elements.$swiperWrapper[0].clientWidth;this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n,r)=>{0<=r.offsetLeft+e&&t>r.offsetLeft+e?(r.removeAttribute("aria-hidden"),r.removeAttribute("inert")):(r.setAttribute("aria-hidden",!0),r.setAttribute("inert",""))}))}handleElementHandlers(){}}t.default=CarouselHandlerBase},2821:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class SwiperHandlerBase extends i.default{getInitialSlide(){const e=this.getEditSettings();return e.activeItemIndex?e.activeItemIndex-1:0}getSlidesCount(){return this.elements.$slides.length}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}handleKenBurns(){const e=this.getSettings();this.$activeImageBg&&this.$activeImageBg.removeClass(e.classes.kenBurnsActive),this.activeItemIndex=this.swiper?this.swiper.activeIndex:this.getInitialSlide(),this.swiper?this.$activeImageBg=jQuery(this.swiper.slides[this.activeItemIndex]).children("."+e.classes.slideBackground):this.$activeImageBg=jQuery(this.elements.$slides[0]).children("."+e.classes.slideBackground),this.$activeImageBg.addClass(e.classes.kenBurnsActive)}}t.default=SwiperHandlerBase},3090:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({$element:null,editorListeners:null,onElementChange:null,onEditSettingsChange:null,onPageSettingsChange:null,isEdit:null,__construct(e){this.isActive(e)&&(this.$element=e.$element,this.isEdit=this.$element.hasClass("elementor-element-edit-mode"),this.isEdit&&this.addEditorListeners())},isActive:()=>!0,isElementInTheCurrentDocument(){return!!elementorFrontend.isEditMode()&&elementor.documents.currentDocument.id.toString()===this.$element[0].closest(".elementor").dataset.elementorId},findElement(e){var t=this.$element;return t.find(e).filter((function(){return jQuery(this).parent().closest(".elementor-element").is(t)}))},getUniqueHandlerID(e,t){return e||(e=this.getModelCID()),t||(t=this.$element),e+t.attr("data-element_type")+this.getConstructorID()},initEditorListeners(){var e=this;if(e.editorListeners=[{event:"element:destroy",to:elementor.channels.data,callback(t){t.cid===e.getModelCID()&&e.onDestroy()}}],e.onElementChange){const t=e.getWidgetType()||e.getElementType();let n="change";"global"!==t&&(n+=":"+t),e.editorListeners.push({event:n,to:elementor.channels.editor,callback(t,n){e.getUniqueHandlerID(n.model.cid,n.$el)===e.getUniqueHandlerID()&&e.onElementChange(t.model.get("name"),t,n)}})}e.onEditSettingsChange&&e.editorListeners.push({event:"change:editSettings",to:elementor.channels.editor,callback(t,n){if(n.model.cid!==e.getModelCID())return;const r=Object.keys(t.changed)[0];e.onEditSettingsChange(r,t.changed[r])}}),["page"].forEach((function(t){var n="on"+t[0].toUpperCase()+t.slice(1)+"SettingsChange";e[n]&&e.editorListeners.push({event:"change",to:elementor.settings[t].model,callback(t){e[n](t.changed)}})}))},getEditorListeners(){return this.editorListeners||this.initEditorListeners(),this.editorListeners},addEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.addListenerOnce(e,t.event,t.callback,t.to)}))},removeEditorListeners(){var e=this.getUniqueHandlerID();this.getEditorListeners().forEach((function(t){elementorFrontend.removeListeners(e,t.event,null,t.to)}))},getElementType(){return this.$element.data("element_type")},getWidgetType(){const e=this.$element.data("widget_type");if(e)return e.split(".")[0]},getID(){return this.$element.data("id")},getModelCID(){return this.$element.data("model-cid")},getElementSettings(e){let t={};const n=this.getModelCID();if(this.isEdit&&n){const e=elementorFrontend.config.elements.data[n],r=e.attributes;let i=r.widgetType||r.elType;r.isInner&&(i="inner-"+i);let s=elementorFrontend.config.elements.keys[i];s||(s=elementorFrontend.config.elements.keys[i]=[],jQuery.each(e.controls,((e,t)=>{t.frontend_available&&s.push(e)}))),jQuery.each(e.getActiveControls(),(function(e){if(-1!==s.indexOf(e)){let n=r[e];n.toJSON&&(n=n.toJSON()),t[e]=n}}))}else t=this.$element.data("settings")||{};return this.getItems(t,e)},getEditSettings(e){var t={};return this.isEdit&&(t=elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),this.getItems(t,e)},getCurrentDeviceSetting(e){return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(),e)},onInit(){this.isActive(this.getSettings())&&elementorModules.ViewModule.prototype.onInit.apply(this,arguments)},onDestroy(){this.isEdit&&this.removeEditorListeners(),this.unbindEvents&&this.unbindEvents()}})},2263:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class StretchedElement extends i.default{getStretchedClass(){return"e-stretched"}getStretchSettingName(){return"stretch_element"}getStretchActiveValue(){return"yes"}bindEvents(){const e=this.getUniqueHandlerID();elementorFrontend.addListenerOnce(e,"resize",this.stretch),elementorFrontend.addListenerOnce(e,"sticky:stick",this.stretch,this.$element),elementorFrontend.addListenerOnce(e,"sticky:unstick",this.stretch,this.$element),elementorFrontend.isEditMode()&&(this.onKitChangeStretchContainerChange=this.onKitChangeStretchContainerChange.bind(this),elementor.channels.editor.on("kit:change:stretchContainer",this.onKitChangeStretchContainerChange))}unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID(),"resize",this.stretch),elementorFrontend.isEditMode()&&elementor.channels.editor.off("kit:change:stretchContainer",this.onKitChangeStretchContainerChange)}isActive(e){return elementorFrontend.isEditMode()||e.$element.hasClass(this.getStretchedClass())}getStretchElementForConfig(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.$element.find(e):this.$element}getStretchElementConfig(){return{element:this.getStretchElementForConfig(),selectors:{container:this.getStretchContainer()},considerScrollbar:elementorFrontend.isEditMode()&&elementorFrontend.config.is_rtl}}initStretch(){this.stretch=this.stretch.bind(this),this.stretchElement=new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())}getStretchContainer(){return elementorFrontend.getKitSettings("stretched_section_container")||window}isStretchSettingEnabled(){return this.getElementSettings(this.getStretchSettingName())===this.getStretchActiveValue()}stretch(){this.isStretchSettingEnabled()&&this.stretchElement.stretch()}onInit(){this.isActive(this.getSettings())&&(this.initStretch(),super.onInit(...arguments),this.stretch())}onElementChange(e){this.getStretchSettingName()===e&&(this.isStretchSettingEnabled()?this.stretch():this.stretchElement.reset())}onKitChangeStretchContainerChange(){this.stretchElement.setSettings("selectors.container",this.getStretchContainer()),this.stretch()}}t.default=StretchedElement},6412:(e,t,n)=>{"use strict";var r=n(3203),i=r(n(5955)),s=r(n(8135)),o=r(n(5658)),a=r(n(2263)),l=r(n(3090)),c=r(n(2821)),u=r(n(1292)),d=r(n(7323)),h=r(n(32));i.default.frontend={Document:s.default,tools:{StretchElement:o.default},handlers:{Base:l.default,StretchedElement:a.default,SwiperBase:c.default,CarouselBase:u.default,NestedTabs:d.default,NestedAccordion:h.default}}},5658:e=>{"use strict";e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({element:null,direction:elementorFrontend.config.is_rtl?"right":"left",selectors:{container:window},considerScrollbar:!1}),getDefaultElements(){return{$element:jQuery(this.getSettings("element"))}},stretch(){const e=this.getSettings();let t;try{t=jQuery(e.selectors.container)}catch(e){}t&&t.length||(t=jQuery(this.getDefaultSettings().selectors.container)),this.reset();var n=this.elements.$element,r=t.innerWidth(),i=n.offset().left,s="fixed"===n.css("position"),o=s?0:i,a=window===t[0];if(!a){var l=t.offset().left;s&&(o=l),i>l&&(o=i-l)}if(e.considerScrollbar&&a){o-=window.innerWidth-r}s||(elementorFrontend.config.is_rtl&&(o=r-(n.outerWidth()+o)),o=-o),e.margin&&(o+=e.margin);var c={};let u=r;e.margin&&(u-=2*e.margin),c.width=u+"px",c[e.direction]=o+"px",n.css(c)},reset(){var e={width:""};e[this.getSettings("direction")]="",this.elements.$element.css(e)}})},6630:(e,t)=>{"use strict";function getChildrenWidth(e){let t=0;const n=e[0].parentNode,r=getComputedStyle(n),i=parseFloat(r.gap)||0;for(let n=0;n<e.length;n++)t+=e[n].offsetWidth+i;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.changeScrollStatus=function changeScrollStatus(e,t){"mousedown"===t.type?(e.classList.add("e-scroll"),e.dataset.pageX=t.pageX):(e.classList.remove("e-scroll","e-scroll-active"),e.dataset.pageX="")},t.setHorizontalScrollAlignment=function setHorizontalScrollAlignment(e){let{element:t,direction:n,justifyCSSVariable:r,horizontalScrollStatus:i}=e;if(!t)return;!function isHorizontalScroll(e,t){return e.clientWidth<getChildrenWidth(e.children)&&"enable"===t}(t,i)?t.style.setProperty(r,""):function initialScrollPosition(e,t,n){const r=elementorCommon.config.isRTL;if("end"===t)e.style.setProperty(n,"start"),e.scrollLeft=r?-1*getChildrenWidth(e.children):getChildrenWidth(e.children);else e.style.setProperty(n,"start"),e.scrollLeft=0}(t,n,r)},t.setHorizontalTitleScrollValues=function setHorizontalTitleScrollValues(e,t,n){const r=e.classList.contains("e-scroll"),i="enable"===t,s=e.scrollWidth>e.clientWidth;if(!r||!i||!s)return;n.preventDefault();const o=parseFloat(e.dataset.pageX),a=n.pageX-o;let l=0;l=20<a?5:-20>a?-5:a;e.scrollLeft=e.scrollLeft-l,e.classList.add("e-scroll-active")}},2618:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(740);var i=r(n(7597)),s=r(n(381));class ArgsObject extends i.default{static getInstanceType(){return"ArgsObject"}constructor(e){super(),this.args=e}requireArgument(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.args;if(!Object.prototype.hasOwnProperty.call(t,e))throw Error(`${e} is required.`)}requireArgumentType(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),typeof n[e]!==t)throw Error(`${e} invalid type: ${t}.`)}requireArgumentInstance(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),!(n[e]instanceof t||(0,s.default)(n[e],t)))throw Error(`${e} invalid instance.`)}requireArgumentConstructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.args;if(this.requireArgument(e,n),n[e].constructor.toString()!==t.prototype.constructor.toString())throw Error(`${e} invalid constructor type.`)}}t.default=ArgsObject},869:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ForceMethodImplementation=void 0,n(740);class ForceMethodImplementation extends Error{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(`${e.isStatic?"static ":""}${e.fullName}() should be implemented, please provide '${e.functionName||e.fullName}' functionality.`,t),Object.keys(t).length&&console.error(t),Error.captureStackTrace(this,ForceMethodImplementation)}}t.ForceMethodImplementation=ForceMethodImplementation;t.default=e=>{const t=Error().stack.split("\n")[2].trim(),n=t.startsWith("at new")?"constructor":t.split(" ")[1],r={};if(r.functionName=n,r.fullName=n,r.functionName.includes(".")){const e=r.functionName.split(".");r.className=e[0],r.functionName=e[1]}else r.isStatic=!0;throw new ForceMethodImplementation(r,e)}},7597:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class InstanceType{static[Symbol.hasInstance](e){let t=super[Symbol.hasInstance](e);if(e&&!e.constructor.getInstanceType)return t;if(e&&(e.instanceTypes||(e.instanceTypes=[]),t||this.getInstanceType()===e.constructor.getInstanceType()&&(t=!0),t)){const t=this.getInstanceType===InstanceType.getInstanceType?"BaseInstanceType":this.getInstanceType();-1===e.instanceTypes.indexOf(t)&&e.instanceTypes.push(t)}return!t&&e&&(t=e.instanceTypes&&Array.isArray(e.instanceTypes)&&-1!==e.instanceTypes.indexOf(this.getInstanceType())),t}static getInstanceType(){elementorModules.ForceMethodImplementation()}constructor(){let e=new.target;const t=[];for(;e.__proto__&&e.__proto__.name;)t.push(e.__proto__),e=e.__proto__;t.reverse().forEach((e=>this instanceof e))}}t.default=InstanceType},1192:(e,t,n)=>{"use strict";n(740);const Module=function(){const e=jQuery,t=arguments,n=this,r={};let i;this.getItems=function(e,t){if(t){const n=t.split("."),r=n.splice(0,1);if(!n.length)return e[r];if(!e[r])return;return this.getItems(e[r],n.join("."))}return e},this.getSettings=function(e){return this.getItems(i,e)},this.setSettings=function(t,r,s){if(s||(s=i),"object"==typeof t)return e.extend(s,t),n;const o=t.split("."),a=o.splice(0,1);return o.length?(s[a]||(s[a]={}),n.setSettings(o.join("."),r,s[a])):(s[a]=r,n)},this.getErrorMessage=function(e,t){let n;if("forceMethodImplementation"===e)n=`The method '${t}' must to be implemented in the inheritor child.`;else n="An error occurs";return n},this.forceMethodImplementation=function(e){throw new Error(this.getErrorMessage("forceMethodImplementation",e))},this.on=function(t,i){if("object"==typeof t)return e.each(t,(function(e){n.on(e,this)})),n;return t.split(" ").forEach((function(e){r[e]||(r[e]=[]),r[e].push(i)})),n},this.off=function(e,t){if(!r[e])return n;if(!t)return delete r[e],n;const i=r[e].indexOf(t);return-1!==i&&(delete r[e][i],r[e]=r[e].filter((e=>e))),n},this.trigger=function(t){const i="on"+t[0].toUpperCase()+t.slice(1),s=Array.prototype.slice.call(arguments,1);n[i]&&n[i].apply(n,s);const o=r[t];return o?(e.each(o,(function(e,t){t.apply(n,s)})),n):n},n.__construct.apply(n,t),e.each(n,(function(e){const t=n[e];"function"==typeof t&&(n[e]=function(){return t.apply(n,arguments)})})),function(){i=n.getDefaultSettings();const r=t[0];r&&e.extend(!0,i,r)}(),n.trigger("init")};Module.prototype.__construct=function(){},Module.prototype.getDefaultSettings=function(){return{}},Module.prototype.getConstructorID=function(){return this.constructor.name},Module.extend=function(e){const t=jQuery,n=this,child=function(){return n.apply(this,arguments)};return t.extend(child,n),(child.prototype=Object.create(t.extend({},n.prototype,e))).constructor=child,child.__super__=n.prototype,child},e.exports=Module},6516:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(2640)).default.extend({getDefaultSettings:()=>({container:null,items:null,columnsCount:3,verticalSpaceBetween:30}),getDefaultElements(){return{$container:jQuery(this.getSettings("container")),$items:jQuery(this.getSettings("items"))}},run(){var e=[],t=this.elements.$container.position().top,n=this.getSettings(),r=n.columnsCount;t+=parseInt(this.elements.$container.css("margin-top"),10),this.elements.$items.each((function(i){var s=Math.floor(i/r),o=jQuery(this),a=o[0].getBoundingClientRect().height+n.verticalSpaceBetween;if(s){var l=o.position(),c=i%r,u=l.top-t-e[c];u-=parseInt(o.css("margin-top"),10),u*=-1,o.css("margin-top",u+"px"),e[c]+=a}else e.push(a)}))}});t.default=i},400:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Scroll{static scrollObserver(e){let t=0;const n={root:e.root||null,rootMargin:e.offset||"0px",threshold:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const t=[];if(e>0&&e<=100){const n=100/e;for(let e=0;e<=100;e+=n)t.push(e/100)}else t.push(0);return t}(e.sensitivity)};return new IntersectionObserver((function handleIntersect(n){const r=n[0].boundingClientRect.y,i=n[0].isIntersecting,s=r<t?"down":"up",o=Math.abs(parseFloat((100*n[0].intersectionRatio).toFixed(2)));e.callback({sensitivity:e.sensitivity,isInViewport:i,scrollPercentage:o,intersectionScrollDirection:s}),t=r}),n)}static getElementViewportPercentage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e[0].getBoundingClientRect(),r=t.start||0,i=t.end||0,s=window.innerHeight*r/100,o=window.innerHeight*i/100,a=n.top-window.innerHeight,l=0-a+s,c=n.top+s+e.height()-a+o,u=Math.max(0,Math.min(l/c,1));return parseFloat((100*u).toFixed(2))}static getPageScrollPercentage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const n=e.start||0,r=e.end||0,i=t||document.documentElement.scrollHeight-document.documentElement.clientHeight,s=i*n/100,o=i+s+i*r/100;return(document.documentElement.scrollTop+document.body.scrollTop+s)/o*100}}},2640:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1192)).default.extend({elements:null,getDefaultElements:()=>({}),bindEvents(){},onInit(){this.initElements(),this.bindEvents()},initElements(){this.elements=this.getDefaultElements()}});t.default=i},5955:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1192)),s=r(n(2640)),o=r(n(2618)),a=r(n(6516)),l=r(n(400)),c=r(n(869)),u=window.elementorModules={Module:i.default,ViewModule:s.default,ArgsObject:o.default,ForceMethodImplementation:c.default,utils:{Masonry:a.default,Scroll:l.default}};t.default=u},32:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090));class NestedAccordion extends i.default{constructor(){super(...arguments),this.animations=new Map}getDefaultSettings(){return{selectors:{accordion:".e-n-accordion",accordionContentContainers:".e-n-accordion > .e-con",accordionItems:".e-n-accordion-item",accordionItemTitles:".e-n-accordion-item-title",accordionContent:".e-n-accordion-item > .e-con"},default_state:"expanded"}}getDefaultElements(){const e=this.getSettings("selectors");return{$accordion:this.findElement(e.accordion),$contentContainers:this.findElement(e.accordionContentContainers),$accordionItems:this.findElement(e.accordionItems),$accordionTitles:this.findElement(e.accordionItemTitles),$accordionContent:this.findElement(e.accordionContent)}}onInit(){super.onInit(...arguments),elementorFrontend.isEditMode()&&this.interlaceContainers()}interlaceContainers(){const{$contentContainers:e,$accordionItems:t}=this.getDefaultElements();e.each(((e,n)=>{t[e].appendChild(n)}))}bindEvents(){this.elements.$accordionTitles.on("click",this.clickListener.bind(this))}unbindEvents(){this.elements.$accordionTitles.off()}clickListener(e){e.preventDefault();const t=e.currentTarget.parentElement,n=this.getSettings(),r=t.querySelector(n.selectors.accordionContent),{max_items_expended:i}=this.getElementSettings(),{$accordionTitles:s,$accordionItems:o}=this.elements;"one"===i&&this.closeAllItems(o,s),t.open?this.closeAccordionItem(t,e.currentTarget):this.prepareOpenAnimation(t,e.currentTarget,r)}animateItem(e,t,n,r){e.style.overflow="hidden";let i=this.animations.get(e);i&&i.cancel(),i=e.animate({height:[t,n]},{duration:this.getAnimationDuration()}),i.onfinish=()=>this.onAnimationFinish(e,r),this.animations.set(e,i)}closeAccordionItem(e,t){const n=`${e.offsetHeight}px`,r=`${t.offsetHeight}px`;this.animateItem(e,n,r,!1)}prepareOpenAnimation(e,t,n){e.style.overflow="hidden",e.style.height=`${e.offsetHeight}px`,e.open=!0,window.requestAnimationFrame((()=>this.openAccordionItem(e,t,n)))}openAccordionItem(e,t,n){const r=`${e.offsetHeight}px`,i=`${t.offsetHeight+n.offsetHeight}px`;this.animateItem(e,r,i,!0)}onAnimationFinish(e,t){e.open=t,this.animations.set(e,null),e.style.height=e.style.overflow=""}closeAllItems(e,t){t.each(((t,n)=>{this.closeAccordionItem(e[t],n)}))}getAnimationDuration(){const{size:e,unit:t}=this.getElementSettings("n_accordion_animation_duration");return e*("ms"===t?1:1e3)}}t.default=NestedAccordion},7323:(e,t,n)=>{"use strict";var r=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(3090)),s=n(6630);class NestedTabs extends i.default{constructor(){super(...arguments),this.resizeListenerNestedTabs=null}getTabTitleFilterSelector(e){return`[data-tab="${e}"]`}getTabContentFilterSelector(e){return`*:nth-child(${2*e})`}getTabIndex(e){return e.getAttribute("data-tab")}getDefaultSettings(){return{selectors:{tablist:'[role="tablist"]',tabTitle:".e-n-tab-title",tabContent:".e-con",headingContainer:".e-n-tabs-heading",activeTabContentContainers:".e-con.e-active",mobileTabTitle:".e-collapse"},classes:{active:"e-active"},showTabFn:"show",hideTabFn:"hide",toggleSelf:!1,hidePrevious:!0,autoExpand:!0,keyDirection:{ArrowLeft:elementorFrontendConfig.is_rtl?1:-1,ArrowUp:-1,ArrowRight:elementorFrontendConfig.is_rtl?-1:1,ArrowDown:1}}}getDefaultElements(){const e=this.getSettings("selectors");return{$tabTitles:this.findElement(e.tabTitle),$tabContents:this.findElement(e.tabContent),$mobileTabTitles:this.findElement(e.mobileTabTitle),$headingContainer:this.findElement(e.headingContainer)}}activateDefaultTab(){const e=this.getSettings(),t=this.getEditSettings("activeItemIndex")||1,n={showTabFn:e.showTabFn,hideTabFn:e.hideTabFn};this.setSettings({showTabFn:"show",hideTabFn:"hide"}),this.changeActiveTab(t),this.setSettings(n)}handleKeyboardNavigation(e){const t=e.currentTarget,n=jQuery(t.closest(this.getSettings("selectors").tablist)),r=n.find(this.getSettings("selectors").tabTitle),i="vertical"===n.attr("aria-orientation");switch(e.key){case"ArrowLeft":case"ArrowRight":if(i)return;break;case"ArrowUp":case"ArrowDown":if(!i)return;e.preventDefault();break;case"Home":return e.preventDefault(),void r.first().trigger("focus");case"End":return e.preventDefault(),void r.last().trigger("focus");default:return}const s=t.getAttribute("data-tab")-1,o=this.getSettings("keyDirection")[e.key],a=r[s+o];a?a.focus():-1===s+o?r.last().trigger("focus"):r.first().trigger("focus")}deactivateActiveTab(e){const t=this.getSettings(),n=t.classes.active,r=e?this.getTabTitleFilterSelector(e):"."+n,i=e?this.getTabContentFilterSelector(e):"."+n,s=this.elements.$tabTitles.filter(r),o=this.elements.$tabContents.filter(i);s.add(o).removeClass(n),s.attr(this.getTitleDeactivationAttributes()),o[t.hideTabFn](0,(()=>this.onHideTabContent(o))),o.attr("hidden","hidden")}getTitleDeactivationAttributes(){return{tabindex:"-1","aria-selected":"false","aria-expanded":"false"}}onHideTabContent(e){}activateTab(e){const t=this.getSettings(),n=t.classes.active,r="show"===t.showTabFn?0:400;let i=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));if(!i.length){const t=Math.max(e-1,1);i=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),s=this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))}i.add(s).addClass(n),i.attr({tabindex:"0","aria-selected":"true","aria-expanded":"true"}),s[t.showTabFn](r,(()=>this.onShowTabContent(s))),s.removeAttr("hidden")}onShowTabContent(e){elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate",e),elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")}isActiveTab(e){return this.elements.$tabTitles.filter('[data-tab="'+e+'"]').hasClass(this.getSettings("classes.active"))}onTabClick(e){e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"),!0)}onTabKeyDown(e){this.onKeydownAvoidUndesiredPageScrolling(e)}onTabKeyUp(e){switch(e.code){case"ArrowLeft":case"ArrowRight":this.handleKeyboardNavigation(e);break;case"Enter":case"Space":e.preventDefault(),this.changeActiveTab(e.currentTarget.getAttribute("data-tab"),!0)}}getTabEvents(){return{keydown:this.onTabKeyDown.bind(this),keyup:this.onTabKeyUp.bind(this),click:this.onTabClick.bind(this)}}getHeadingEvents(){const e=this.elements.$headingContainer[0];return{mousedown:s.changeScrollStatus.bind(this,e),mouseup:s.changeScrollStatus.bind(this,e),mouseleave:s.changeScrollStatus.bind(this,e),mousemove:s.setHorizontalTitleScrollValues.bind(this,e,this.getHorizontalScrollSetting())}}bindEvents(){this.elements.$tabTitles.on(this.getTabEvents()),this.elements.$headingContainer.on(this.getHeadingEvents());const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};this.resizeListenerNestedTabs=s.setHorizontalScrollAlignment.bind(this,e),elementorFrontend.elements.$window.on("resize",this.resizeListenerNestedTabs),elementorFrontend.elements.$window.on("elementor/nested-tabs/activate",this.reInitSwipers)}unbindEvents(){this.elements.$tabTitles.off(),this.elements.$headingContainer.off(),elementorFrontend.elements.$window.off("resize"),elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")}onKeydownAvoidUndesiredPageScrolling(e){["End","Home","ArrowUp","ArrowDown"].includes(e.key)&&this.handleKeyboardNavigation(e)}reInitSwipers(e,t){const n=t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);for(const e of n){if(!e.swiper)return;e.swiper.initialized=!1,e.swiper.init()}}onInit(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.createMobileTabs(t),super.onInit(...t),this.getSettings("autoExpand")&&this.activateDefaultTab();const r={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(r)}onEditSettingsChange(e,t){"activeItemIndex"===e&&this.changeActiveTab(t,!1)}onElementChange(e){if(this.checkSliderPropsToWatch(e)){const e={element:this.elements.$headingContainer[0],direction:this.getTabsDirection(),justifyCSSVariable:"--n-tabs-heading-justify-content",horizontalScrollStatus:this.getHorizontalScrollSetting()};(0,s.setHorizontalScrollAlignment)(e)}}checkSliderPropsToWatch(e){return 0===e.indexOf("horizontal_scroll")||0===e.indexOf("tabs_justify_horizontal")||0===e.indexOf("tabs_title_space_between")}changeActiveTab(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&this.isEdit&&this.isElementInTheCurrentDocument())return window.top.$e.run("document/repeater/select",{container:elementor.getContainer(this.$element.attr("data-id")),index:parseInt(e)});const t=this.isActiveTab(e),n=this.getSettings();if(!n.toggleSelf&&t||!n.hidePrevious||this.deactivateActiveTab(),!n.hidePrevious&&t&&this.deactivateActiveTab(e),!t){if("none"===this.elements.$headingContainer.css("display"))return void this.activateMobileTab(e);this.activateTab(e)}}activateMobileTab(e){setTimeout((()=>{this.activateTab(e),this.forceActiveTabToBeInViewport(e)}),10)}forceActiveTabToBeInViewport(e){if(!elementorFrontend.isEditMode())return;const t=this.elements.$mobileTabTitles.filter(this.getTabTitleFilterSelector(e));elementor.helpers.isInViewport(t[0])||t[0].scrollIntoView({block:"center"})}createMobileTabs(e){const t=this.getSettings();if(elementorFrontend.isEditMode()){const n=this.$element,r=this.findElement(".e-collapse").remove();let i=1;if(this.findElement(".e-con").each((function(){const e=jQuery(this),r=n.find(`${t.selectors.headingContainer} > *:nth-child(${i})`),s=`<div class="${t.selectors.tabTitle.replace(".","")} e-collapse" data-tab="${i}" role="tab">${r.html()}</div>`;e.before(s),++i})),r.length)return elementorModules.ViewModule.prototype.onInit.apply(this,e)}}getActiveClass(){return this.getSettings().classes.active}getVisibleTabTitle(e){const t=this.elements.$tabTitles.filter(e);return null!==t[0]?.offsetParent?t[0]:t[1]}getKeyPressed(e){const t=9===e?.which,n=e?.shiftKey;return!!t&&n?"ShiftTab":!!t&&!n?"Tab":27===e?.which?"Escape":void 0}changeFocusFromContentContainerItemBackToTabTitle(e){if(this.hasDropdownLayout())return;const t="ShiftTab"===this.getKeyPressed(e),n="Tab"===this.getKeyPressed(e),r="Escape"===this.getKeyPressed(e),i=this.itemInsideContentContainerHasFocus(0),s=this.itemInsideContentContainerHasFocus("last"),o=`.${this.getActiveClass()}`,a=this.getVisibleTabTitle(o),l=parseInt(a?.getAttribute("data-tab")),c=this.getTabTitleFilterSelector(l+1),u=this.getVisibleTabTitle(c),d=n&&s&&!!u;t&&i&&!!a||r?(e.preventDefault(),a?.focus()):d&&(e.preventDefault(),this.setTabindexOfActiveContainerItems("-1"),u?.focus())}changeFocusFromActiveTabTitleToContentContainer(e){const t="Tab"===this.getKeyPressed(e),n=this.getFocusableItemsInsideActiveContentContainer()[0],r=elementorFrontend.elements.window.document.activeElement,i=parseInt(r.getAttribute("data-tab"));t&&this.tabTitleHasActiveContentContainer(i)&&n&&(e.preventDefault(),n.trigger("focus"))}itemInsideContentContainerHasFocus(e){const t=elementorFrontend.elements.window.document.activeElement,n=this.getFocusableItemsInsideActiveContentContainer();return n["last"===e?n.length-1:e]===t}getFocusableItemsInsideActiveContentContainer(){const e=this.getSettings();return this.$element.find(e.selectors.activeTabContentContainers).find(":focusable")}setTabindexOfActiveContainerItems(e){this.getFocusableItemsInsideActiveContentContainer().attr("tabindex",e)}setActiveCurrentContainerItemsToFocusable(){const e=elementorFrontend.elements.window.document.activeElement,t=parseInt(e?.getAttribute("data-tab"));this.tabTitleHasActiveContentContainer(t)&&this.setTabindexOfActiveContainerItems("0")}tabTitleHasActiveContentContainer(e){const t=this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e)),n=t[0]?.classList.contains(`${this.getActiveClass()}`);return!(!this.elements.$tabContents.filter(this.getTabContentFilterSelector(e))||!n)}getTabsDirection(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"tabs_justify_horizontal","",e)}getHorizontalScrollSetting(){const e=elementorFrontend.getCurrentDeviceMode();return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(),"horizontal_scroll","",e)}}t.default=NestedTabs},5089:(e,t,n)=>{var r=n(930),i=n(9268),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},1378:(e,t,n)=>{var r=n(930),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},6112:(e,t,n)=>{var r=n(8759),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},6198:(e,t,n)=>{var r=n(4088),i=n(7740),s=n(2871),createMethod=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){for(;c>u;)if((a=l[u++])!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},2306:(e,t,n)=>{var r=n(8240),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},375:(e,t,n)=>{var r=n(2371),i=n(930),s=n(2306),o=n(211)("toStringTag"),a=Object,l="Arguments"==s(function(){return arguments}());e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=a(e),o))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},8474:(e,t,n)=>{var r=n(9606),i=n(6095),s=n(4399),o=n(7826);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var d=a[u];r(e,d)||n&&r(n,d)||l(e,d,c(t,d))}}},2585:(e,t,n)=>{var r=n(5283),i=n(7826),s=n(5736);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5736:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},1343:(e,t,n)=>{var r=n(930),i=n(7826),s=n(3712),o=n(9444);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(e){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9444:(e,t,n)=>{var r=n(2086),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5283:(e,t,n)=>{var r=n(3677);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7886:e=>{var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},821:(e,t,n)=>{var r=n(2086),i=n(8759),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4999:e=>{e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1448:(e,t,n)=>{var r,i,s=n(2086),o=n(4999),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(i=(r=u.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(i=+r[1]),e.exports=i},8684:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79:(e,t,n)=>{var r=n(8240),i=Error,s=r("".replace),o=String(i("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)for(;t--;)e=s(e,a,"");return e}},8395:(e,t,n)=>{var r=n(2585),i=n(79),s=n(2114),o=Error.captureStackTrace;e.exports=function(e,t,n,a){s&&(o?o(e,t):r(e,"stack",i(n,a)))}},2114:(e,t,n)=>{var r=n(3677),i=n(5736);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},1695:(e,t,n)=>{var r=n(2086),i=n(4399).f,s=n(2585),o=n(1343),a=n(9444),l=n(8474),c=n(7189);e.exports=function(e,t){var n,u,d,h,g,p=e.target,f=e.global,m=e.stat;if(n=f?r:m?r[p]||a(p,{}):(r[p]||{}).prototype)for(u in t){if(h=t[u],d=e.dontCallGetSet?(g=i(n,u))&&g.value:n[u],!c(f?u:p+(m?".":"#")+u,e.forced)&&void 0!==d){if(typeof h==typeof d)continue;l(h,d)}(e.sham||d&&d.sham)&&s(h,"sham",!0),o(n,u,h,e)}}},3677:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},7258:(e,t,n)=>{var r=n(6059),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6059:(e,t,n)=>{var r=n(3677);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9413:(e,t,n)=>{var r=n(6059),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},4398:(e,t,n)=>{var r=n(5283),i=n(9606),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function something(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1518:(e,t,n)=>{var r=n(8240),i=n(5089);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(e){}}},8240:(e,t,n)=>{var r=n(6059),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},563:(e,t,n)=>{var r=n(2086),i=n(930);e.exports=function(e,t){return arguments.length<2?(n=r[e],i(n)?n:void 0):r[e]&&r[e][t];var n}},2964:(e,t,n)=>{var r=n(5089),i=n(1858);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},2086:(e,t,n)=>{var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},9606:(e,t,n)=>{var r=n(8240),i=n(3060),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function hasOwn(e,t){return s(i(e),t)}},7153:e=>{e.exports={}},6761:(e,t,n)=>{var r=n(5283),i=n(3677),s=n(821);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},5974:(e,t,n)=>{var r=n(8240),i=n(3677),s=n(2306),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},5070:(e,t,n)=>{var r=n(930),i=n(8759),s=n(7530);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9277:(e,t,n)=>{var r=n(8240),i=n(930),s=n(4489),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8945:(e,t,n)=>{var r=n(8759),i=n(2585);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},3278:(e,t,n)=>{var r,i,s,o=n(640),a=n(2086),l=n(8759),c=n(2585),u=n(9606),d=n(4489),h=n(8944),g=n(7153),p="Object already initialized",f=a.TypeError,m=a.WeakMap;if(o||d.state){var v=d.state||(d.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,r=function(e,t){if(v.has(e))throw f(p);return t.facade=e,v.set(e,t),t},i=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var b=h("state");g[b]=!0,r=function(e,t){if(u(e,b))throw f(p);return t.facade=e,c(e,b,t),t},i=function(e){return u(e,b)?e[b]:{}},s=function(e){return u(e,b)}}e.exports={set:r,get:i,has:s,enforce:function(e){return s(e)?i(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=i(t)).type!==e)throw f("Incompatible receiver, "+e+" required");return n}}}},930:(e,t,n)=>{var r=n(7886),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},7189:(e,t,n)=>{var r=n(3677),i=n(930),s=/#|\.prototype\./,isForced=function(e,t){var n=a[o(e)];return n==c||n!=l&&(i(t)?r(t):!!t)},o=isForced.normalize=function(e){return String(e).replace(s,".").toLowerCase()},a=isForced.data={},l=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},1858:e=>{e.exports=function(e){return null==e}},8759:(e,t,n)=>{var r=n(930),i=n(7886),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},3296:e=>{e.exports=!1},2071:(e,t,n)=>{var r=n(563),i=n(930),s=n(5516),o=n(1876),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},2871:(e,t,n)=>{var r=n(4005);e.exports=function(e){return r(e.length)}},3712:(e,t,n)=>{var r=n(8240),i=n(3677),s=n(930),o=n(9606),a=n(5283),l=n(4398).CONFIGURABLE,c=n(9277),u=n(3278),d=u.enforce,h=u.get,g=String,p=Object.defineProperty,f=r("".slice),m=r("".replace),v=r([].join),b=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),y=String(String).split("String"),S=e.exports=function(e,t,n){"Symbol("===f(g(t),0,7)&&(t="["+m(g(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||l&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),b&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=d(e);return o(r,"source")||(r.source=v(y,"string"==typeof t?t:"")),e};Function.prototype.toString=S((function toString(){return s(this)&&h(this).source||c(this)}),"toString")},5681:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function trunc(e){var r=+e;return(r>0?n:t)(r)}},1879:(e,t,n)=>{var r=n(4059);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},7826:(e,t,n)=>{var r=n(5283),i=n(6761),s=n(8202),o=n(6112),a=n(2258),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",g="writable";t.f=r?s?function defineProperty(e,t,n){if(o(e),t=a(t),o(n),"function"==typeof e&&"prototype"===t&&"value"in n&&g in n&&!n[g]){var r=u(e,t);r&&r[g]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return c(e,t,n)}:c:function defineProperty(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},4399:(e,t,n)=>{var r=n(5283),i=n(9413),s=n(7446),o=n(5736),a=n(4088),l=n(2258),c=n(9606),u=n(6761),d=Object.getOwnPropertyDescriptor;t.f=r?d:function getOwnPropertyDescriptor(e,t){if(e=a(e),t=l(t),u)try{return d(e,t)}catch(e){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},62:(e,t,n)=>{var r=n(1352),i=n(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return r(e,i)}},6952:(e,t)=>{t.f=Object.getOwnPropertySymbols},5516:(e,t,n)=>{var r=n(8240);e.exports=r({}.isPrototypeOf)},1352:(e,t,n)=>{var r=n(8240),i=n(9606),s=n(4088),o=n(6198).indexOf,a=n(7153),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);for(;t.length>c;)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},7446:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function propertyIsEnumerable(e){var t=r(this,e);return!!t&&t.enumerable}:n},7530:(e,t,n)=>{var r=n(1518),i=n(6112),s=n(1378);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=r(Object.prototype,"__proto__","set"))(n,[]),t=n instanceof Array}catch(e){}return function setPrototypeOf(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},7999:(e,t,n)=>{var r=n(9413),i=n(930),s=n(8759),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},6095:(e,t,n)=>{var r=n(563),i=n(8240),s=n(62),o=n(6952),a=n(6112),l=i([].concat);e.exports=r("Reflect","ownKeys")||function ownKeys(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},1632:(e,t,n)=>{var r=n(7826).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},9586:(e,t,n)=>{var r=n(1858),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},8944:(e,t,n)=>{var r=n(9197),i=n(5422),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},4489:(e,t,n)=>{var r=n(2086),i=n(9444),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},9197:(e,t,n)=>{var r=n(3296),i=n(4489);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5558:(e,t,n)=>{var r=n(1448),i=n(3677);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7740:(e,t,n)=>{var r=n(9502),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},4088:(e,t,n)=>{var r=n(5974),i=n(9586);e.exports=function(e){return r(i(e))}},9502:(e,t,n)=>{var r=n(5681);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},4005:(e,t,n)=>{var r=n(9502),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},3060:(e,t,n)=>{var r=n(9586),i=Object;e.exports=function(e){return i(r(e))}},1288:(e,t,n)=>{var r=n(9413),i=n(8759),s=n(2071),o=n(2964),a=n(7999),l=n(211),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},2258:(e,t,n)=>{var r=n(1288),i=n(2071);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2371:(e,t,n)=>{var r={};r[n(211)("toStringTag")]="z",e.exports="[object z]"===String(r)},4059:(e,t,n)=>{var r=n(375),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},9268:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},5422:(e,t,n)=>{var r=n(8240),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},1876:(e,t,n)=>{var r=n(5558);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(e,t,n)=>{var r=n(5283),i=n(3677);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},640:(e,t,n)=>{var r=n(2086),i=n(930),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},211:(e,t,n)=>{var r=n(2086),i=n(9197),s=n(9606),o=n(5422),a=n(5558),l=n(1876),c=r.Symbol,u=i("wks"),d=l?c.for||c:c&&c.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(c,e)?c[e]:d("Symbol."+e)),u[e]}},1557:(e,t,n)=>{"use strict";var r=n(563),i=n(9606),s=n(2585),o=n(5516),a=n(7530),l=n(8474),c=n(1632),u=n(5070),d=n(1879),h=n(8945),g=n(8395),p=n(5283),f=n(3296);e.exports=function(e,t,n,m){var v="stackTraceLimit",b=m?2:1,y=e.split("."),S=y[y.length-1],w=r.apply(null,y);if(w){var C=w.prototype;if(!f&&i(C,"cause")&&delete C.cause,!n)return w;var T=r("Error"),E=t((function(e,t){var n=d(m?t:e,void 0),r=m?new w(e):new w;return void 0!==n&&s(r,"message",n),g(r,E,r.stack,2),this&&o(C,this)&&u(r,this,E),arguments.length>b&&h(r,arguments[b]),r}));if(E.prototype=C,"Error"!==S?a?a(E,T):l(E,T,{name:!0}):p&&v in w&&(c(E,w,v),c(E,w,"prepareStackTrace")),l(E,w),!f)try{C.name!==S&&s(C,"name",S),C.constructor=E}catch(e){}return E}}},740:(e,t,n)=>{var r=n(1695),i=n(2086),s=n(7258),o=n(1557),a="WebAssembly",l=i[a],c=7!==Error("e",{cause:7}).cause,exportGlobalErrorCauseWrapper=function(e,t){var n={};n[e]=o(e,t,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},exportWebAssemblyErrorCauseWrapper=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),r({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};exportGlobalErrorCauseWrapper("Error",(function(e){return function Error(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("EvalError",(function(e){return function EvalError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("RangeError",(function(e){return function RangeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("ReferenceError",(function(e){return function ReferenceError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("SyntaxError",(function(e){return function SyntaxError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("TypeError",(function(e){return function TypeError(t){return s(e,this,arguments)}})),exportGlobalErrorCauseWrapper("URIError",(function(e){return function URIError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("CompileError",(function(e){return function CompileError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("LinkError",(function(e){return function LinkError(t){return s(e,this,arguments)}})),exportWebAssemblyErrorCauseWrapper("RuntimeError",(function(e){return function RuntimeError(t){return s(e,this,arguments)}}))},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=6412,e(e.s=t)}]);;
!function(e){"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?e():define("inert",e)}((function(){"use strict";var e,t,n,i,o,r,s=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){d(this,u),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}function h(e,t){d(this,h),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}function l(e){if(d(this,l),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),_(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}function c(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var i=e;if(s=(t&&t(i),i.shadowRoot))return void c(s,t,s);if("content"==i.localName){for(var o=(s=i).getDistributedNodes?s.getDistributedNodes():[],r=0;r<o.length;r++)c(o[r],t,n);return}if("slot"==i.localName){for(var s,a=(s=i).assignedNodes?s.assignedNodes({flatten:!0}):[],d=0;d<a.length;d++)c(a[d],t,n);return}}for(var u=e.firstChild;null!=u;)c(u,t,n),u=u.nextSibling}function _(e){var t;e.querySelector("style#inert-style, link#inert-style")||((t=document.createElement("style")).setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t))}"undefined"!=typeof window&&(e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),s(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this,n=(c(e,(function(e){return t._visitNode(e)})),document.activeElement);if(!document.body.contains(e)){for(var i=e,o=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=i;break}i=i.parentNode}o&&(n=o.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(t.call(e,n)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){e=this._inertManager.register(e,this),this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(e){(e=this._inertManager.deregister(e,this))&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(e){var t=this;c(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,n){t.forEach((function(t){var n,i=t.target;"childList"===t.type?(e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this)):"attributes"===t.type&&("tabindex"===t.attributeName?this._manageNode(i):i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")&&(this._adoptInertRoot(i),n=this._inertManager.getInertRoot(i),this._managedNodes.forEach((function(e){i.contains(e.node)&&n._manageNode(e.node)}))))}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),i=u,s(h,[{key:"destructor",value:function(){var e;this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE&&(e=this._node,null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e;this.node.nodeType===Node.ELEMENT_NODE&&(e=this.node,t.call(e,n)?-1===e.tabIndex&&this.hasSavedTabIndex||(e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)):e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex")))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),o=h,s(l,[{key:"setInert",value:function(e,t){if(t){if(!this._inertRoots.has(e)&&(t=new i(e,this),e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)))for(var n=e.parentNode;n;)11===n.nodeType&&_(n),n=n.parentNode}else this._inertRoots.has(e)&&(this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert"))}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new o(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(n,i){var o=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){var i;n.nodeType===Node.ELEMENT_NODE&&(i=e.call(n.querySelectorAll("[inert]")),t.call(n,"[inert]")&&i.unshift(n),i.forEach((function(e){this.setInert(e,!0)}),o))}),o);break;case"attributes":if("inert"!==n.attributeName)return;var i=n.target,r=i.hasAttribute("inert");o.setInert(i,r)}}),this)}}]),s=l,HTMLElement.prototype.hasOwnProperty("inert")||(r=new s(document),Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})))}));;
var runtime=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i=(w="function"==typeof Symbol?Symbol:{}).iterator||"@@iterator",a=w.asyncIterator||"@@asyncIterator",c=w.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(e){u=function(t,r,e){return t[r]=e}}function h(t,e,n,i){var a,c,u,h;e=e&&e.prototype instanceof v?e:v,e=Object.create(e.prototype),i=new O(i||[]);return o(e,"_invoke",{value:(a=t,c=n,u=i,h=f,function(t,e){if(h===p)throw new Error("Generator is already running");if(h===y){if("throw"===t)throw e;return G()}for(u.method=t,u.arg=e;;){var n=u.delegate;if(n&&(n=function t(e,n){var o=n.method,i=e.iterator[o];return i===r?(n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g):"throw"===(o=l(i,e.iterator,n.arg)).type?(n.method="throw",n.arg=o.arg,n.delegate=null,g):(i=o.arg)?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u),n)){if(n===g)continue;return n}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(h===f)throw h=y,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(h=p,"normal"===(n=l(a,c,u)).type){if(h=u.done?y:s,n.arg!==g)return{value:n.arg,done:u.done}}else"throw"===n.type&&(h=y,u.method="throw",u.arg=n.arg)}})}),e}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w,b,L=((b=(b=(u(w={},i,(function(){return this})),Object.getPrototypeOf))&&b(b(k([]))))&&b!==e&&n.call(b,i)&&(w=b),m.prototype=v.prototype=Object.create(w));function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){var e;o(this,"_invoke",{value:function(o,i){function a(){return new r((function(e,a){!function e(o,i,a,c){var u;if("throw"!==(o=l(t[o],t,i)).type)return(i=(u=o.arg).value)&&"object"==typeof i&&n.call(i,"__await")?r.resolve(i.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(i).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}));c(o.arg)}(o,i,e,a)}))}return e=e?e.then(a,a):a()}})}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e,o=t[i];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(o=function o(){for(;++e<t.length;)if(n.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=r,o.done=!0,o}).next=o}return{next:G}}function G(){return{value:r,done:!0}}return o(L,"constructor",{value:d.prototype=m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r,e=Object(t),n=[];for(r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var a=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc?null:i)?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e,n,o=this.tryEntries[r];if(o.tryLoc===t)return"throw"===(e=o.completion).type&&(n=e.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)};
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );;
/*! elementor-pro - v3.15.0 - 09-08-2023 */
(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[819],{2:(e,t,n)=>{"use strict";var s=n(3203);n(4242);var i=s(n(4774)),o=s(n(9575)),r=s(n(6254)),a=s(n(5161)),l=s(n(5039)),c=s(n(9210)),d=s(n(450)),u=s(n(7660));class ElementorProFrontend extends elementorModules.ViewModule{onInit(){super.onInit(),this.config=ElementorProFrontendConfig,this.modules={},this.initOnReadyComponents()}bindEvents(){jQuery(window).on("elementor/frontend/init",this.onElementorFrontendInit.bind(this))}initModules(){let e={motionFX:i.default,sticky:o.default,codeHighlight:r.default,videoPlaylist:a.default,payments:l.default,progressTracker:c.default};elementorProFrontend.trigger("elementor-pro/modules/init:before"),elementorProFrontend.trigger("elementor-pro/modules/init/before"),e=elementorFrontend.hooks.applyFilters("elementor-pro/frontend/handlers",e),jQuery.each(e,((e,t)=>{this.modules[e]=new t})),this.modules.linkActions={addAction:function(){elementorFrontend.utils.urlActions.addAction(...arguments)}}}onElementorFrontendInit(){this.initModules()}initOnReadyComponents(){this.utils={controls:new d.default,DropdownMenuHeightController:u.default}}}window.elementorProFrontend=new ElementorProFrontend},450:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let s;return s="object"==typeof e[t]&&n?e[t][n]:e[t],s}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===s){const s=this.getControlValue(e,`${t}_widescreen`,n);return s||0===s?s:i}const o=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=s,a=o.indexOf(s),l="";for(;a<=o.length;){if("desktop"===r){l=i;break}const s=`${t}_${r}`,c=this.getControlValue(e,s,n);if(c||0===c){l=c;break}a++,r=o[a]}return l}}},7660:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class DropdownMenuHeightController{constructor(e){this.widgetConfig=e}calculateStickyMenuNavHeight(){const e=this.widgetConfig.elements.$dropdownMenuContainer.offset().top-jQuery(window).scrollTop();return elementorFrontend.elements.$window.height()-e}isElementSticky(){return this.widgetConfig.elements.$element.hasClass("elementor-sticky")||this.widgetConfig.elements.$element.parents(".elementor-sticky").length}getMenuHeight(){return this.isElementSticky()?this.calculateStickyMenuNavHeight()+"px":this.widgetConfig.settings.dropdownMenuContainerMaxHeight}setMenuHeight(e){this.widgetConfig.elements.$dropdownMenuContainer.css(this.widgetConfig.settings.menuHeightCssVarName,e)}reassignMobileMenuHeight(){const e=this.widgetConfig.elements.$menuToggle.hasClass(this.widgetConfig.classes.menuToggleActiveClass)?this.getMenuHeight():0;return this.setMenuHeight(e)}}},4242:(e,t,n)=>{"use strict";n.p=ElementorProFrontendConfig.urls.assets+"js/"},6254:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("code-highlight",(()=>n.e(714).then(n.bind(n,8604))))}}t.default=_default},4774:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(3515));class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("global",i.default,null)}}t.default=_default},3515:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(5469));class _default extends elementorModules.frontend.handlers.Base{__construct(){super.__construct(...arguments),this.toggle=elementorFrontend.debounce(this.toggle,200)}getDefaultSettings(){return{selectors:{container:".elementor-widget-container"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$container:this.$element.find(e.container)}}bindEvents(){elementorFrontend.elements.$window.on("resize",this.toggle)}unbindEvents(){elementorFrontend.elements.$window.off("resize",this.toggle)}addCSSTransformEvents(){this.getElementSettings("motion_fx_motion_fx_scrolling")&&!this.isTransitionEventAdded&&(this.isTransitionEventAdded=!0,this.elements.$container.on("mouseenter",(()=>{this.elements.$container.css("--e-transform-transition-duration","")})))}initEffects(){this.effects={translateY:{interaction:"scroll",actions:["translateY"]},translateX:{interaction:"scroll",actions:["translateX"]},rotateZ:{interaction:"scroll",actions:["rotateZ"]},scale:{interaction:"scroll",actions:["scale"]},opacity:{interaction:"scroll",actions:["opacity"]},blur:{interaction:"scroll",actions:["blur"]},mouseTrack:{interaction:"mouseMove",actions:["translateXY"]},tilt:{interaction:"mouseMove",actions:["tilt"]}}}prepareOptions(e){const t=this.getElementSettings(),n="motion_fx"===e?"element":"background",s={};jQuery.each(t,((n,i)=>{const o=new RegExp("^"+e+"_(.+?)_effect"),r=n.match(o);if(!r||!i)return;const a={},l=r[1];jQuery.each(t,((t,n)=>{const s=new RegExp(e+"_"+l+"_(.+)"),i=t.match(s);if(!i)return;"effect"!==i[1]&&("object"==typeof n&&(n=Object.keys(n.sizes).length?n.sizes:n.size),a[i[1]]=n)}));const c=this.effects[l],d=c.interaction;s[d]||(s[d]={}),c.actions.forEach((e=>s[d][e]=a))}));let i,o=this.$element;const r=this.getElementType();if("element"===n&&!["section","container"].includes(r)){let e;i=o,e="column"===r?elementorFrontend.config.legacyMode.elementWrappers?".elementor-column-wrap":".elementor-widget-wrap":".elementor-widget-container",o=o.find("> "+e)}const a={type:n,interactions:s,elementSettings:t,$element:o,$dimensionsElement:i,refreshDimensions:this.isEdit,range:t[e+"_range"],classes:{element:"elementor-motion-effects-element",parent:"elementor-motion-effects-parent",backgroundType:"elementor-motion-effects-element-type-background",container:"elementor-motion-effects-container",layer:"elementor-motion-effects-layer",perspective:"elementor-motion-effects-perspective"}};return a.range||"fixed"!==this.getCurrentDeviceSetting("_position")||(a.range="page"),"fixed"===this.getCurrentDeviceSetting("_position")&&(a.isFixedPosition=!0),"background"===n&&"column"===this.getElementType()&&(a.addBackgroundLayerTo=" > .elementor-element-populated"),a}activate(e){const t=this.prepareOptions(e);jQuery.isEmptyObject(t.interactions)||(this[e]=new i.default(t))}deactivate(e){this[e]&&(this[e].destroy(),delete this[e])}toggle(){const e=elementorFrontend.getCurrentDeviceMode(),t=this.getElementSettings();["motion_fx","background_motion_fx"].forEach((n=>{const s=t[n+"_devices"];(!s||-1!==s.indexOf(e))&&(t[n+"_motion_fx_scrolling"]||t[n+"_motion_fx_mouse"])?this[n]?this.refreshInstance(n):this.activate(n):this.deactivate(n)}))}refreshInstance(e){const t=this[e];if(!t)return;const n=this.prepareOptions(e);t.setSettings(n),t.refresh()}onInit(){super.onInit(),this.initEffects(),this.addCSSTransformEvents(),this.toggle()}onElementChange(e){if(/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e))return"motion_fx_motion_fx_scrolling"===e&&this.addCSSTransformEvents(),void this.toggle();const t=e.match(".*?(motion_fx|_transform)");if(t){const e=t[0].match("(_transform)")?"motion_fx":t[0];this.refreshInstance(e),this[e]||this.activate(e)}/^_position/.test(e)&&["motion_fx","background_motion_fx"].forEach((e=>{this.refreshInstance(e)}))}onDestroy(){super.onDestroy(),["motion_fx","background_motion_fx"].forEach((e=>{this.deactivate(e)}))}}t.default=_default},2292:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{getMovePointFromPassedPercents(e,t){return+(t/e*100).toFixed(2)}getEffectValueFromMovePoint(e,t){return e*t/100}getStep(e,t){return"element"===this.getSettings("type")?this.getElementStep(e,t):this.getBackgroundStep(e,t)}getElementStep(e,t){return-(e-50)*t.speed}getBackgroundStep(e,t){const n=this.getSettings("dimensions.movable"+t.axis.toUpperCase());return-this.getEffectValueFromMovePoint(n,e)}getDirectionMovePoint(e,t,n){let s;return e<n.start?"out-in"===t?s=0:"in-out"===t?s=100:(s=this.getMovePointFromPassedPercents(n.start,e),"in-out-in"===t&&(s=100-s)):e<n.end?"in-out-in"===t?s=0:"out-in-out"===t?s=100:(s=this.getMovePointFromPassedPercents(n.end-n.start,e-n.start),"in-out"===t&&(s=100-s)):"in-out"===t?s=0:"out-in"===t?s=100:(s=this.getMovePointFromPassedPercents(100-n.end,100-e),"in-out-in"===t&&(s=100-s)),s}translateX(e,t){e.axis="x",e.unit="px",this.transform("translateX",t,e)}translateY(e,t){e.axis="y",e.unit="px",this.transform("translateY",t,e)}translateXY(e,t,n){this.translateX(e,t),this.translateY(e,n)}tilt(e,t,n){const s={speed:e.speed/10,direction:e.direction};this.rotateX(s,n),this.rotateY(s,100-t)}rotateX(e,t){e.axis="x",e.unit="deg",this.transform("rotateX",t,e)}rotateY(e,t){e.axis="y",e.unit="deg",this.transform("rotateY",t,e)}rotateZ(e,t){e.unit="deg",this.transform("rotateZ",t,e)}scale(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range);this.updateRulePart("transform","scale",1+e.speed*n/1e3)}transform(e,t,n){n.direction&&(t=100-t),this.updateRulePart("transform",e,this.getStep(t,n)+n.unit)}setCSSTransformVariables(e){this.CSSTransformVariables=[],jQuery.each(e,((e,t)=>{const n=e.match(/_transform_(.+?)_effect/m);if(n&&t){if("perspective"===n[1])return void this.CSSTransformVariables.unshift(n[1]);if(this.CSSTransformVariables.includes(n[1]))return;this.CSSTransformVariables.push(n[1])}}))}opacity(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range),s=e.level/10,i=1-s+this.getEffectValueFromMovePoint(s,n);this.$element.css({opacity:i,"will-change":"opacity"})}blur(e,t){const n=this.getDirectionMovePoint(t,e.direction,e.range),s=e.level-this.getEffectValueFromMovePoint(e.level,n);this.updateRulePart("filter","blur",s+"px")}updateRulePart(e,t,n){this.rulesVariables[e]||(this.rulesVariables[e]={}),this.rulesVariables[e][t]||(this.rulesVariables[e][t]=!0,this.updateRule(e));const s=`--${t}`;this.$element[0].style.setProperty(s,n)}updateRule(e){let t="";t+=this.concatTransformCSSProperties(e),t+=this.concatTransformMotionEffectCSSProperties(e),this.$element.css(e,t)}concatTransformCSSProperties(e){let t="";return"transform"===e&&jQuery.each(this.CSSTransformVariables,((e,n)=>{const s=n;n.startsWith("flip")&&(n=n.replace("flip","scale"));const i=n.startsWith("rotate")||n.startsWith("skew")?"deg":"px",o=n.startsWith("scale")?1:0+i;t+=`${n}(var(--e-transform-${s}, ${o}))`})),t}concatTransformMotionEffectCSSProperties(e){let t="";return jQuery.each(this.rulesVariables[e],(e=>{t+=`${e}(var(--${e}))`})),t}runAction(e,t,n){t.affectedRange&&(t.affectedRange.start>n&&(n=t.affectedRange.start),t.affectedRange.end<n&&(n=t.affectedRange.end));for(var s=arguments.length,i=new Array(s>3?s-3:0),o=3;o<s;o++)i[o-3]=arguments[o];this[e](t,n,...i)}refresh(){this.rulesVariables={},this.CSSTransformVariables=[],this.$element.css({transform:"",filter:"",opacity:"","will-change":""})}onInit(){this.$element=this.getSettings("$targetElement"),this.refresh()}}t.default=_default},371:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(3231));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),(0,i.default)(this,"onInsideViewport",(()=>{this.run(),this.animationFrameRequest=requestAnimationFrame(this.onInsideViewport)}))}__construct(e){this.motionFX=e.motionFX,this.intersectionObservers||this.setElementInViewportObserver()}setElementInViewportObserver(){this.intersectionObserver=elementorModules.utils.Scroll.scrollObserver({callback:e=>{e.isInViewport?this.onInsideViewport():this.removeAnimationFrameRequest()}});const e="page"===this.motionFX.getSettings("range")?elementorFrontend.elements.$body[0]:this.motionFX.elements.$parent[0];this.intersectionObserver.observe(e)}runCallback(){this.getSettings("callback")(...arguments)}removeIntersectionObserver(){this.intersectionObserver&&this.intersectionObserver.unobserve(this.motionFX.elements.$parent[0])}removeAnimationFrameRequest(){this.animationFrameRequest&&cancelAnimationFrame(this.animationFrameRequest)}destroy(){this.removeAnimationFrameRequest(),this.removeIntersectionObserver()}onInit(){super.onInit()}}t.default=_default},3802:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(371));class MouseMoveInteraction extends i.default{bindEvents(){MouseMoveInteraction.mouseTracked||(elementorFrontend.elements.$window.on("mousemove",MouseMoveInteraction.updateMousePosition),MouseMoveInteraction.mouseTracked=!0)}run(){const e=MouseMoveInteraction.mousePosition,t=this.oldMousePosition;if(t.x===e.x&&t.y===e.y)return;this.oldMousePosition={x:e.x,y:e.y};const n=100/innerWidth*e.x,s=100/innerHeight*e.y;this.runCallback(n,s)}onInit(){this.oldMousePosition={},super.onInit()}}t.default=MouseMoveInteraction,MouseMoveInteraction.mousePosition={},MouseMoveInteraction.updateMousePosition=e=>{MouseMoveInteraction.mousePosition={x:e.clientX,y:e.clientY}}},5931:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(371));class _default extends i.default{run(){if(pageYOffset===this.windowScrollTop)return!1;this.onScrollMovement(),this.windowScrollTop=pageYOffset}onScrollMovement(){this.updateMotionFxDimensions(),this.updateAnimation(),this.resetTransitionVariable()}resetTransitionVariable(){this.motionFX.$element.css("--e-transform-transition-duration","100ms")}updateMotionFxDimensions(){this.motionFX.getSettings().refreshDimensions&&this.motionFX.defineDimensions()}updateAnimation(){let e;e="page"===this.motionFX.getSettings("range")?elementorModules.utils.Scroll.getPageScrollPercentage():this.motionFX.getSettings("isFixedPosition")?elementorModules.utils.Scroll.getPageScrollPercentage({},window.innerHeight):elementorModules.utils.Scroll.getElementViewportPercentage(this.motionFX.elements.$parent),this.runCallback(e)}}t.default=_default},5469:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(5931)),o=s(n(3802)),r=s(n(2292));class _default extends elementorModules.ViewModule{getDefaultSettings(){return{type:"element",$element:null,$dimensionsElement:null,addBackgroundLayerTo:null,interactions:{},refreshDimensions:!1,range:"viewport",classes:{element:"motion-fx-element",parent:"motion-fx-parent",backgroundType:"motion-fx-element-type-background",container:"motion-fx-container",layer:"motion-fx-layer",perspective:"motion-fx-perspective"}}}bindEvents(){this.defineDimensions=this.defineDimensions.bind(this),elementorFrontend.elements.$window.on("resize elementor-pro/motion-fx/recalc",this.defineDimensions)}unbindEvents(){elementorFrontend.elements.$window.off("resize elementor-pro/motion-fx/recalc",this.defineDimensions)}addBackgroundLayer(){const e=this.getSettings();this.elements.$motionFXContainer=jQuery("<div>",{class:e.classes.container}),this.elements.$motionFXLayer=jQuery("<div>",{class:e.classes.layer}),this.updateBackgroundLayerSize(),this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);(e.addBackgroundLayerTo?this.$element.find(e.addBackgroundLayerTo):this.$element).prepend(this.elements.$motionFXContainer)}removeBackgroundLayer(){this.elements.$motionFXContainer.remove()}updateBackgroundLayerSize(){const e=this.getSettings(),t={x:0,y:0},n=e.interactions.mouseMove,s=e.interactions.scroll;n&&n.translateXY&&(t.x=10*n.translateXY.speed,t.y=10*n.translateXY.speed),s&&(s.translateX&&(t.x=10*s.translateX.speed),s.translateY&&(t.y=10*s.translateY.speed)),this.elements.$motionFXLayer.css({width:100+t.x+"%",height:100+t.y+"%"})}defineDimensions(){const e=this.getSettings("$dimensionsElement")||this.$element,t=e.offset(),n={elementHeight:e.outerHeight(),elementWidth:e.outerWidth(),elementTop:t.top,elementLeft:t.left};n.elementRange=n.elementHeight+innerHeight,this.setSettings("dimensions",n),"background"===this.getSettings("type")&&this.defineBackgroundLayerDimensions()}defineBackgroundLayerDimensions(){const e=this.getSettings("dimensions");e.layerHeight=this.elements.$motionFXLayer.height(),e.layerWidth=this.elements.$motionFXLayer.width(),e.movableX=e.layerWidth-e.elementWidth,e.movableY=e.layerHeight-e.elementHeight,this.setSettings("dimensions",e)}initInteractionsTypes(){this.interactionsTypes={scroll:i.default,mouseMove:o.default}}prepareSpecialActions(){const e=this.getSettings(),t=!(!e.interactions.mouseMove||!e.interactions.mouseMove.tilt);this.elements.$parent.toggleClass(e.classes.perspective,t)}cleanSpecialActions(){const e=this.getSettings();this.elements.$parent.removeClass(e.classes.perspective)}runInteractions(){var e=this;const t=this.getSettings();this.actions.setCSSTransformVariables(t.elementSettings),this.prepareSpecialActions(),jQuery.each(t.interactions,((t,n)=>{this.interactions[t]=new this.interactionsTypes[t]({motionFX:this,callback:function(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];jQuery.each(n,((t,n)=>e.actions.runAction(t,n,...s)))}}),this.interactions[t].run()}))}destroyInteractions(){this.cleanSpecialActions(),jQuery.each(this.interactions,((e,t)=>t.destroy())),this.interactions={}}refresh(){this.actions.setSettings(this.getSettings()),"background"===this.getSettings("type")&&(this.updateBackgroundLayerSize(),this.defineBackgroundLayerDimensions()),this.actions.refresh(),this.destroyInteractions(),this.runInteractions()}destroy(){this.destroyInteractions(),this.actions.refresh();const e=this.getSettings();this.$element.removeClass(e.classes.element),this.elements.$parent.removeClass(e.classes.parent),"background"===e.type&&(this.$element.removeClass(e.classes.backgroundType),this.removeBackgroundLayer())}onInit(){super.onInit();const e=this.getSettings();this.$element=e.$element,this.elements.$parent=this.$element.parent(),this.$element.addClass(e.classes.element),this.elements.$parent=this.$element.parent(),this.elements.$parent.addClass(e.classes.parent),"background"===e.type&&(this.$element.addClass(e.classes.backgroundType),this.addBackgroundLayer()),this.defineDimensions(),e.$targetElement="element"===e.type?this.$element:this.elements.$motionFXLayer,this.interactions={},this.actions=new r.default(e),this.initInteractionsTypes(),this.runInteractions()}}t.default=_default},5039:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("paypal-button",(()=>n.e(256).then(n.bind(n,4452)))),elementorFrontend.elementsHandler.attachHandler("stripe-button",(()=>Promise.all([n.e(699),n.e(156)]).then(n.bind(n,7121))))}}t.default=_default},9210:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("progress-tracker",(()=>n.e(241).then(n.bind(n,2177))))}}t.default=_default},9575:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(2090));class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("section",i.default,null),elementorFrontend.elementsHandler.attachHandler("container",i.default,null),elementorFrontend.elementsHandler.attachHandler("widget",i.default,null)}}t.default=_default},2090:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=elementorModules.frontend.handlers.Base.extend({currentConfig:{},debouncedReactivate:null,bindEvents(){elementorFrontend.addListenerOnce(this.getUniqueHandlerID()+"sticky","resize",this.reactivateOnResize)},unbindEvents(){elementorFrontend.removeListeners(this.getUniqueHandlerID()+"sticky","resize",this.reactivateOnResize)},isStickyInstanceActive(){return void 0!==this.$element.data("sticky")},getResponsiveSetting(e){const t=this.getElementSettings();return elementorFrontend.getCurrentDeviceSetting(t,e)},getResponsiveSettingList:e=>["",...Object.keys(elementorFrontend.config.responsive.activeBreakpoints)].map((t=>t?`${e}_${t}`:e)),getConfig(){const e=this.getElementSettings(),t={to:e.sticky,offset:this.getResponsiveSetting("sticky_offset"),effectsOffset:this.getResponsiveSetting("sticky_effects_offset"),classes:{sticky:"elementor-sticky",stickyActive:"elementor-sticky--active elementor-section--handles-inside",stickyEffects:"elementor-sticky--effects",spacer:"elementor-sticky__spacer"},isRTL:elementorFrontend.config.is_rtl,handleScrollbarWidth:elementorFrontend.isEditMode()},n=elementorFrontend.elements.$wpAdminBar,s=this.isContainerElement(this.$element[0])&&!this.isContainerElement(this.$element[0].parentElement);return n.length&&"top"===e.sticky&&"fixed"===n.css("position")&&(t.offset+=n.height()),e.sticky_parent&&!s&&(t.parent=".e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap"),t},activate(){this.currentConfig=this.getConfig(),this.$element.sticky(this.currentConfig)},deactivate(){this.isStickyInstanceActive()&&this.$element.sticky("destroy")},run(e){if(this.getElementSettings("sticky")){var t=elementorFrontend.getCurrentDeviceMode();-1!==this.getElementSettings("sticky_on").indexOf(t)?!0===e?this.reactivate():this.isStickyInstanceActive()||this.activate():this.deactivate()}else this.deactivate()},reactivateOnResize(){clearTimeout(this.debouncedReactivate),this.debouncedReactivate=setTimeout((()=>{const e=this.getConfig();JSON.stringify(e)!==JSON.stringify(this.currentConfig)&&this.run(!0)}),300)},reactivate(){this.deactivate(),this.activate()},onElementChange(e){-1!==["sticky","sticky_on"].indexOf(e)&&this.run(!0);-1!==[...this.getResponsiveSettingList("sticky_offset"),...this.getResponsiveSettingList("sticky_effects_offset"),"sticky_parent"].indexOf(e)&&this.reactivate()},onDeviceModeChange(){setTimeout((()=>this.run(!0)))},onInit(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),elementorFrontend.isEditMode()&&elementor.listenTo(elementor.channels.deviceMode,"change",(()=>this.onDeviceModeChange())),this.run()},onDestroy(){elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this,arguments),this.deactivate()},isContainerElement:e=>["e-container","e-container__inner","e-con","e-con-inner"].some((t=>e?.classList.contains(t)))});t.default=n},5161:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.hooks.addAction("frontend/element_ready/video-playlist.default",(e=>{n.e(721).then(n.bind(n,1580)).then((t=>{let{default:n}=t;elementorFrontend.elementsHandler.addHandler(n,{$element:e,toggleSelf:!1})}))}))}}t.default=_default},3231:(e,t,n)=>{var s=n(4040);e.exports=function _defineProperty(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},3203:e=>{e.exports=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6027:(e,t,n)=>{var s=n(7501).default;e.exports=function _toPrimitive(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4040:(e,t,n)=>{var s=n(7501).default,i=n(6027);e.exports=function _toPropertyKey(e){var t=i(e,"string");return"symbol"===s(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},7501:e=>{function _typeof(t){return e.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,_typeof(t)}e.exports=_typeof,e.exports.__esModule=!0,e.exports.default=e.exports}},e=>{var t;t=2,e(e.s=t)}]);;
!function(){"use strict";function Waypoint(options){if(!options)throw new Error("No options passed to Waypoint constructor");if(!options.element)throw new Error("No element option passed to Waypoint constructor");if(!options.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+keyCounter,this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options),this.element=this.options.element,this.adapter=new Waypoint.Adapter(this.element),this.callback=options.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=Waypoint.Context.findOrCreateByElement(this.options.context),Waypoint.offsetAliases[this.options.offset]&&(this.options.offset=Waypoint.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),allWaypoints[this.key]=this,keyCounter+=1}var keyCounter=0,allWaypoints={};Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)},Waypoint.prototype.trigger=function(args){this.enabled&&this.callback&&this.callback.apply(this,args)},Waypoint.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete allWaypoints[this.key]},Waypoint.prototype.disable=function(){return this.enabled=!1,this},Waypoint.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},Waypoint.prototype.next=function(){return this.group.next(this)},Waypoint.prototype.previous=function(){return this.group.previous(this)},Waypoint.invokeAll=function(method){var allWaypointsArray=[];for(var waypointKey in allWaypoints)allWaypointsArray.push(allWaypoints[waypointKey]);for(var i=0,end=allWaypointsArray.length;i<end;i++)allWaypointsArray[i][method]()},Waypoint.destroyAll=function(){Waypoint.invokeAll("destroy")},Waypoint.disableAll=function(){Waypoint.invokeAll("disable")},Waypoint.enableAll=function(){Waypoint.Context.refreshAll();for(var waypointKey in allWaypoints)allWaypoints[waypointKey].enabled=!0;return this},Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()},Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},Waypoint.viewportWidth=function(){return document.documentElement.clientWidth},Waypoint.adapters=[],Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},Waypoint.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=Waypoint}(),function(){"use strict";function requestAnimationFrameShim(callback){window.setTimeout(callback,1e3/60)}function Context(element){this.element=element,this.Adapter=Waypoint.Adapter,this.adapter=new this.Adapter(element),this.key="waypoint-context-"+keyCounter,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},element.waypointContextKey=this.key,contexts[element.waypointContextKey]=this,keyCounter+=1,Waypoint.windowContext||(Waypoint.windowContext=!0,Waypoint.windowContext=new Context(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var keyCounter=0,contexts={},Waypoint=window.Waypoint,oldWindowLoad=window.onload;Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?"horizontal":"vertical";this.waypoints[axis][waypoint.key]=waypoint,this.refresh()},Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal),verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical),isWindow=this.element==this.element.window;horizontalEmpty&&verticalEmpty&&!isWindow&&(this.adapter.off(".waypoints"),delete contexts[this.key])},Context.prototype.createThrottledResizeHandler=function(){function resizeHandler(){self.handleResize(),self.didResize=!1}var self=this;this.adapter.on("resize.waypoints",function(){self.didResize||(self.didResize=!0,Waypoint.requestAnimationFrame(resizeHandler))})},Context.prototype.createThrottledScrollHandler=function(){function scrollHandler(){self.handleScroll(),self.didScroll=!1}var self=this;this.adapter.on("scroll.waypoints",function(){self.didScroll&&!Waypoint.isTouch||(self.didScroll=!0,Waypoint.requestAnimationFrame(scrollHandler))})},Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()},Context.prototype.handleScroll=function(){var triggeredGroups={},axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var axisKey in axes){var axis=axes[axisKey],isForward=axis.newScroll>axis.oldScroll,direction=isForward?axis.forward:axis.backward;for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey];if(null!==waypoint.triggerPoint){var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint,nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint,crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint,crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint;(crossedForward||crossedBackward)&&(waypoint.queueTrigger(direction),triggeredGroups[waypoint.group.id]=waypoint.group)}}}for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers();this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}},Context.prototype.innerHeight=function(){return this.element==this.element.window?Waypoint.viewportHeight():this.adapter.innerHeight()},Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key],this.checkEmpty()},Context.prototype.innerWidth=function(){return this.element==this.element.window?Waypoint.viewportWidth():this.adapter.innerWidth()},Context.prototype.destroy=function(){var allWaypoints=[];for(var axis in this.waypoints)for(var waypointKey in this.waypoints[axis])allWaypoints.push(this.waypoints[axis][waypointKey]);for(var i=0,end=allWaypoints.length;i<end;i++)allWaypoints[i].destroy()},Context.prototype.refresh=function(){var axes,isWindow=this.element==this.element.window,contextOffset=isWindow?void 0:this.adapter.offset(),triggeredGroups={};this.handleScroll(),axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var axisKey in axes){var axis=axes[axisKey];for(var waypointKey in this.waypoints[axisKey]){var contextModifier,wasBeforeScroll,nowAfterScroll,triggeredBackward,triggeredForward,waypoint=this.waypoints[axisKey][waypointKey],adjustment=waypoint.options.offset,oldTriggerPoint=waypoint.triggerPoint,elementOffset=0,freshWaypoint=null==oldTriggerPoint;waypoint.element!==waypoint.element.window&&(elementOffset=waypoint.adapter.offset()[axis.offsetProp]),"function"==typeof adjustment?adjustment=adjustment.apply(waypoint):"string"==typeof adjustment&&(adjustment=parseFloat(adjustment),waypoint.options.offset.indexOf("%")>-1&&(adjustment=Math.ceil(axis.contextDimension*adjustment/100))),contextModifier=axis.contextScroll-axis.contextOffset,waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment),wasBeforeScroll=oldTriggerPoint<axis.oldScroll,nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll,triggeredBackward=wasBeforeScroll&&nowAfterScroll,triggeredForward=!wasBeforeScroll&&!nowAfterScroll,!freshWaypoint&&triggeredBackward?(waypoint.queueTrigger(axis.backward),triggeredGroups[waypoint.group.id]=waypoint.group):!freshWaypoint&&triggeredForward?(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group):freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint&&(waypoint.queueTrigger(axis.forward),triggeredGroups[waypoint.group.id]=waypoint.group)}}return Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups)triggeredGroups[groupKey].flushTriggers()}),this},Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)},Context.refreshAll=function(){for(var contextId in contexts)contexts[contextId].refresh()},Context.findByElement=function(element){return contexts[element.waypointContextKey]},window.onload=function(){oldWindowLoad&&oldWindowLoad(),Context.refreshAll()},Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim;requestFn.call(window,callback)},Waypoint.Context=Context}(),function(){"use strict";function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}function Group(options){this.name=options.name,this.axis=options.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),groups[this.axis][this.name]=this}var groups={vertical:{},horizontal:{}},Waypoint=window.Waypoint;Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)},Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction],reverse="up"===direction||"left"===direction;waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint);for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i];(waypoint.options.continuous||i===waypoints.length-1)&&waypoint.trigger([direction])}}this.clearTriggerQueues()},Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints),isLast=index===this.waypoints.length-1;return isLast?null:this.waypoints[index+1]},Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint);var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);return index?this.waypoints[index-1]:null},Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)},Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints);index>-1&&this.waypoints.splice(index,1)},Group.prototype.first=function(){return this.waypoints[0]},Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)},Waypoint.Group=Group}(),function(){"use strict";function JQueryAdapter(element){this.$element=$(element)}var $=window.jQuery,Waypoint=window.Waypoint;$.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments);return this.$element[method].apply(this.$element,args)}}),$.each(["extend","inArray","isEmptyObject"],function(i,method){JQueryAdapter[method]=$[method]}),Waypoint.adapters.push({name:"jquery",Adapter:JQueryAdapter}),Waypoint.Adapter=JQueryAdapter}(),function(){"use strict";function createExtension(framework){return function(){var waypoints=[],overrides=arguments[0];return framework.isFunction(arguments[0])&&(overrides=framework.extend({},arguments[1]),overrides.handler=arguments[0]),this.each(function(){var options=framework.extend({},overrides,{element:this});"string"==typeof options.context&&(options.context=framework(this).closest(options.context)[0]),waypoints.push(new Waypoint(options))}),waypoints}}var Waypoint=window.Waypoint;window.jQuery&&(window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)),window.Zepto&&(window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto))}();;
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,u;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.2",
/*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s=t.nodeName.toLowerCase();return"area"===s?(o=(i=t.parentNode).name,!(!t.href||!o||"map"!==i.nodeName.toLowerCase())&&0<(i=x("img[usemap='#"+o+"']")).length&&i.is(":visible")):(/^(input|select|textarea|button|object)$/.test(s)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===s&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){var t,e,i;return void 0!==n?n:(i=(e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i)},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(f){var c,d,p,g,m,v,y,w,b,_,t,e;return f&&f.of?(v="string"==typeof(f=x.extend({},f)).of?x(document).find(f.of):x(f.of),y=x.position.getWithinInfo(f.within),w=x.position.getScrollInfo(y),b=(f.collision||"flip").split(" "),_={},e=9===(e=(t=v)[0]).nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:N(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()},v[0].preventDefault&&(f.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(f[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],f[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===f.at[0]?m.left+=d:"center"===f.at[0]&&(m.left+=d/2),"bottom"===f.at[1]?m.top+=p:"center"===f.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),u=E(_.my,r.outerWidth(),r.outerHeight());"right"===f.my[0]?h.left-=l:"center"===f.my[0]&&(h.left-=l/2),"bottom"===f.my[1]?h.top-=a:"center"===f.my[1]&&(h.top-=a/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+u[0],c[1]+u[1]],my:f.my,at:f.at,within:y,elem:r})}),f.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",f.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})):h.apply(this,arguments)},x.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,n=n.width,s=t.left-e.collisionPosition.marginLeft,r=o-s,l=s+e.collisionWidth-n-o;e.collisionWidth>n?0<r&&l<=0?(i=t.left+r+e.collisionWidth-n-o,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?o+n-e.collisionWidth:o:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i,n=e.within,n=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,i=i.isWindow?i.scrollLeft:i.offset.left,s=t.left-e.collisionPosition.marginLeft,r=s-i,s=s+e.collisionWidth-o-i,l="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,a="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,h=-2*e.offset[0];r<0?((o=t.left+l+a+h+e.collisionWidth-o-n)<0||o<C(r))&&(t.left+=l+a+h):0<s&&(0<(n=t.left-e.collisionPosition.marginLeft+l+a+h-i)||C(n)<s)&&(t.left+=l+a+h)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,i=i.isWindow?i.scrollTop:i.offset.top,s=t.top-e.collisionPosition.marginTop,r=s-i,s=s+e.collisionHeight-o-i,l="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,a="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,h=-2*e.offset[1];r<0?((o=t.top+l+a+h+e.collisionHeight-o-n)<0||o<C(r))&&(t.top+=l+a+h):0<s&&(0<(n=t.top-e.collisionPosition.marginTop+l+a+h-i)||C(n)<s)&&(t.top+=l+a+h)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=(i=i||e.body).nodeName?i:e.body},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(u=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var f,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(f=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");f(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"!=typeof n?n:function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(function(){var i=[];o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),r._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,e={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return e.element.toggleClass(this._classes(e),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),n=t[1]+l.eventNamespace,t=t[2];t?r.on(n,t,i):s.on(n,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});;
/*! elementor - v3.15.0 - 20-08-2023 */
(self.webpackChunkelementor=self.webpackChunkelementor||[]).push([[819],{9220:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(8135));class _default extends elementorModules.ViewModule{constructor(){super(...arguments),this.documents={},this.initDocumentClasses(),this.attachDocumentsClasses()}getDefaultSettings(){return{selectors:{document:".elementor"}}}getDefaultElements(){const e=this.getSettings("selectors");return{$documents:jQuery(e.document)}}initDocumentClasses(){this.documentClasses={base:i.default},elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes",this)}addDocumentClass(e,t){this.documentClasses[e]=t}attachDocumentsClasses(){this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))}attachDocumentClass(e){const t=e.data(),n=t.elementorId,s=t.elementorType,i=this.documentClasses[s]||this.documentClasses.base;this.documents[n]=new i({$element:e,id:n})}}t.default=_default},9804:(e,t,n)=>{"use strict";var s=n(3203),i=s(n(6397)),o=s(n(8704)),r=s(n(4985)),a=s(n(7537)),l=s(n(355)),d=s(n(2804)),c=s(n(3384));e.exports=function(e){var t=this;const s={};this.elementsHandlers={"accordion.default":()=>n.e(209).then(n.bind(n,8470)),"alert.default":()=>n.e(745).then(n.bind(n,9269)),"counter.default":()=>n.e(120).then(n.bind(n,7884)),"progress.default":()=>n.e(192).then(n.bind(n,1351)),"tabs.default":()=>n.e(520).then(n.bind(n,9459)),"toggle.default":()=>n.e(181).then(n.bind(n,2)),"video.default":()=>n.e(791).then(n.bind(n,5363)),"image-carousel.default":()=>n.e(268).then(n.bind(n,5914)),"text-editor.default":()=>n.e(357).then(n.bind(n,1327)),"wp-widget-media_audio.default":()=>n.e(52).then(n.bind(n,7602))},elementorFrontendConfig.experimentalFeatures["nested-elements"]&&(this.elementsHandlers["nested-tabs.default"]=()=>Promise.resolve().then(n.bind(n,7323)),this.elementsHandlers["nested-accordion.default"]=()=>Promise.resolve().then(n.bind(n,32)));const addElementsHandlers=()=>{this.elementsHandlers.section=[d.default,...o.default,l.default,c.default],this.elementsHandlers.container=[...o.default],elementorFrontend.isEditMode()&&this.elementsHandlers.container.push(...r.default),this.elementsHandlers.column=a.default,e.each(this.elementsHandlers,((e,t)=>{const n=e.split(".");e=n[0];const s=n[1]||null;this.attachHandler(e,t,s)}))},isClassHandler=e=>e.prototype?.getUniqueHandlerID;this.addHandler=function(t,n){const i=n.$element.data("model-cid");let o;if(i){o=t.prototype.getConstructorID(),s[i]||(s[i]={});const e=s[i][o];e&&e.onDestroy()}const r=new t(n);elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`,n.$element,e),i&&(s[i][o]=r)},this.attachHandler=(e,n,s)=>{Array.isArray(n)||(n=[n]),n.forEach((n=>function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";s=s?"."+s:"";const i=e+s;elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`,(e=>{if(isClassHandler(n))t.addHandler(n,{$element:e,elementName:i},!0);else{const s=n();if(!s)return;s instanceof Promise?s.then((n=>{let{default:s}=n;t.addHandler(s,{$element:e,elementName:i},!0)})):t.addHandler(s,{$element:e,elementName:i},!0)}}))}(e,n,s)))},this.getHandler=function(e){const t=this.elementsHandlers[e];return isClassHandler(t)?t:new Promise((e=>{t().then((t=>{let{default:n}=t;e(n)}))}))},this.getHandlers=function(e){return elementorDevTools.deprecation.deprecated("getHandlers","3.1.0","elementorFrontend.elementsHandler.getHandler"),e?this.getHandler(e):this.elementsHandlers},this.runReadyTrigger=function(t){if(elementorFrontend.config.is_static)return;const n=jQuery(t),s=n.attr("data-element_type");if(s&&(elementorFrontend.hooks.doAction("frontend/element_ready/global",n,e),elementorFrontend.hooks.doAction(`frontend/element_ready/${s}`,n,e),"widget"===s)){const t=n.attr("data-widget_type");elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`,n,e)}},this.init=()=>{elementorFrontend.hooks.addAction("frontend/element_ready/global",i.default),addElementsHandlers()}}},5654:(e,t,n)=>{"use strict";var s=n(3203);n(59);var i=s(n(9220)),o=s(n(5107)),r=s(n(3308)),a=s(n(1604)),l=s(n(1911)),d=s(n(4773)),c=s(n(2064)),u=s(n(8628)),h=s(n(8646)),m=s(n(6866)),g=s(n(4375)),p=s(n(6404)),f=s(n(6046)),v=s(n(1322)),b=n(6028);const _=n(9469),y=n(9804),w=n(3346);class Frontend extends elementorModules.ViewModule{constructor(){super(...arguments),this.config=elementorFrontendConfig,this.config.legacyMode={get elementWrappers(){return elementorFrontend.isEditMode()&&window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers","3.1.0","elementorFrontend.config.experimentalFeatures.e_dom_optimization"),!elementorFrontend.config.experimentalFeatures.e_dom_optimization}},this.populateActiveBreakpointsConfig()}get Module(){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module","2.5.0","elementorModules.frontend.handlers.Base"),elementorModules.frontend.handlers.Base}getDefaultSettings(){return{selectors:{elementor:".elementor",adminBar:"#wpadminbar"}}}getDefaultElements(){const e={window,$window:jQuery(window),$document:jQuery(document),$head:jQuery(document.head),$body:jQuery(document.body),$deviceMode:jQuery("<span>",{id:"elementor-device-mode",class:"elementor-screen-only"})};return e.$body.append(e.$deviceMode),e}bindEvents(){this.elements.$window.on("resize",(()=>this.setDeviceModeData()))}getElements(e){return this.getItems(this.elements,e)}getPageSettings(e){const t=this.isEditMode()?elementor.settings.page.model.attributes:this.config.settings.page;return this.getItems(t,e)}getGeneralSettings(e){return this.isEditMode()&&parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()","3.0.0","getKitSettings() and remove the `elementor_` prefix"),this.getKitSettings(`elementor_${e}`)}getKitSettings(e){return this.getItems(this.config.kit,e)}getCurrentDeviceMode(){return getComputedStyle(this.elements.$deviceMode[0],":after").content.replace(/"/g,"")}getDeviceSetting(e,t,n){if("widescreen"===e)return this.getWidescreenSetting(t,n);const s=elementorFrontend.breakpoints.getActiveBreakpointsList({largeToSmall:!0,withDesktop:!0});let i=s.indexOf(e);for(;i>0;){const e=t[n+"_"+s[i]];if(e||0===e)return e;i--}return t[n]}getWidescreenSetting(e,t){const n=t+"_widescreen";let s;return s=e[n]?e[n]:e[t],s}getCurrentDeviceSetting(e,t){return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(),e,t)}isEditMode(){return this.config.environmentMode.edit}isWPPreviewMode(){return this.config.environmentMode.wpPreview}initDialogsManager(){let e;this.getDialogsManager=()=>(e||(e=new DialogsManager.Instance),e)}initOnReadyComponents(){this.utils={youtube:new a.default,vimeo:new l.default,baseVideoLoader:new d.default,anchors:new w,get lightbox(){return h.default.getLightbox()},urlActions:new c.default,swiper:u.default,environment:r.default,assetsLoader:new m.default,escapeHTML:b.escapeHTML,events:p.default,controls:new v.default},this.modules={StretchElement:elementorModules.frontend.tools.StretchElement,Masonry:elementorModules.utils.Masonry},this.elementsHandler.init(),this.isEditMode()?elementor.once("document:loaded",(()=>this.onDocumentLoaded())):this.onDocumentLoaded()}initOnReadyElements(){this.elements.$wpAdminBar=this.elements.$document.find(this.getSettings("selectors.adminBar"))}addUserAgentClasses(){for(const[e,t]of Object.entries(r.default))t&&this.elements.$body.addClass("e--ua-"+e)}setDeviceModeData(){this.elements.$body.attr("data-elementor-device-mode",this.getCurrentDeviceMode())}addListenerOnce(e,t,n,s){if(s||(s=this.elements.$window),this.isEditMode())if(this.removeListeners(e,t,s),s instanceof jQuery){const i=t+"."+e;s.on(i,n)}else s.on(t,n,e);else s.on(t,n)}removeListeners(e,t,n,s){if(s||(s=this.elements.$window),s instanceof jQuery){const i=t+"."+e;s.off(i,n)}else s.off(t,n,e)}debounce(e,t){let n;return function(){const s=this,i=arguments,o=!n;clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(s,i)}),t),o&&e.apply(s,i)}}waypoint(e,t,n){n=jQuery.extend({offset:"100%",triggerOnce:!0},n);return e.elementorWaypoint((function(){const e=this.element||this,s=t.apply(e,arguments);return n.triggerOnce&&this.destroy&&this.destroy(),s}),n)}muteMigrationTraces(){jQuery.migrateMute=!0,jQuery.migrateTrace=!1}initModules(){const e={shapes:f.default};elementorFrontend.trigger("elementor/modules/init:before"),elementorFrontend.trigger("elementor/modules/init/before"),Object.entries(e).forEach((e=>{let[t,n]=e;this.modulesHandlers[t]=new n}))}populateActiveBreakpointsConfig(){this.config.responsive.activeBreakpoints={},Object.entries(this.config.responsive.breakpoints).forEach((e=>{let[t,n]=e;n.is_enabled&&(this.config.responsive.activeBreakpoints[t]=n)}))}init(){this.hooks=new _,this.breakpoints=new g.default(this.config.responsive),this.storage=new o.default,this.elementsHandler=new y(jQuery),this.modulesHandlers={},this.addUserAgentClasses(),this.setDeviceModeData(),this.initDialogsManager(),this.isEditMode()&&this.muteMigrationTraces(),p.default.dispatch(this.elements.$window,"elementor/frontend/init"),this.initModules(),this.initOnReadyElements(),this.initOnReadyComponents()}onDocumentLoaded(){this.documentsManager=new i.default,this.trigger("components:init"),new h.default}}window.elementorFrontend=new Frontend,elementorFrontend.isEditMode()||jQuery((()=>elementorFrontend.init()))},4058:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase{getDefaultSettings(){return{classes:{swiperContainer:`elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,swiperWrapper:"swiper-wrapper",swiperSlide:"elementor-background-slideshow__slide swiper-slide",swiperPreloader:"swiper-lazy-preloader",slideBackground:"elementor-background-slideshow__slide__image",kenBurns:"elementor-ken-burns",kenBurnsActive:"elementor-ken-burns--active",kenBurnsIn:"elementor-ken-burns--in",kenBurnsOut:"elementor-ken-burns--out"}}}getSwiperOptions(){const e=this.getElementSettings(),t={grabCursor:!1,slidesPerView:1,slidesPerGroup:1,loop:"yes"===e.background_slideshow_loop,speed:e.background_slideshow_transition_duration,autoplay:{delay:e.background_slideshow_slide_duration,stopOnLastSlide:!e.background_slideshow_loop},handleElementorBreakpoints:!0,on:{slideChange:()=>{e.background_slideshow_ken_burns&&this.handleKenBurns()}}};switch("yes"===e.background_slideshow_loop&&(t.loopedSlides=this.getSlidesCount()),e.background_slideshow_slide_transition){case"fade":t.effect="fade",t.fadeEffect={crossFade:!0};break;case"slide_down":t.autoplay.reverseDirection=!0,t.direction="vertical";break;case"slide_up":t.direction="vertical"}return"yes"===e.background_slideshow_lazyload&&(t.lazy={loadPrevNext:!0,loadPrevNextAmount:1}),t}buildSwiperElements(){const e=this.getSettings("classes"),t=this.getElementSettings(),n="slide_left"===t.background_slideshow_slide_transition?"ltr":"rtl",s=jQuery("<div>",{class:e.swiperContainer,dir:n}),i=jQuery("<div>",{class:e.swiperWrapper}),o=t.background_slideshow_ken_burns,r="yes"===t.background_slideshow_lazyload;let a=e.slideBackground;if(o){a+=" "+e.kenBurns;const n="in"===t.background_slideshow_ken_burns_zoom_direction?"kenBurnsIn":"kenBurnsOut";a+=" "+e[n]}r&&(a+=" swiper-lazy"),this.elements.$slides=jQuery(),t.background_slideshow_gallery.forEach((t=>{const n=jQuery("<div>",{class:e.swiperSlide});let s;if(r){const n=jQuery("<div>",{class:e.swiperPreloader});s=jQuery("<div>",{class:a,"data-background":t.url}),s.append(n)}else s=jQuery("<div>",{class:a,style:'background-image: url("'+t.url+'");'});n.append(s),i.append(n),this.elements.$slides=this.elements.$slides.add(n)})),s.append(i),this.$element.prepend(s),this.elements.$backgroundSlideShowContainer=s}async initSlider(){if(1>=this.getSlidesCount())return;const e=this.getElementSettings(),t=elementorFrontend.utils.swiper;this.swiper=await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),this.elements.$backgroundSlideShowContainer.data("swiper",this.swiper),e.background_slideshow_ken_burns&&this.handleKenBurns()}activate(){this.buildSwiperElements(),this.initSlider()}deactivate(){this.swiper&&(this.swiper.destroy(),this.elements.$backgroundSlideShowContainer.remove())}run(){"slideshow"===this.getElementSettings("background_background")?this.activate():this.deactivate()}onInit(){super.onInit(),this.getElementSettings("background_slideshow_gallery")&&this.run()}onDestroy(){super.onDestroy(),this.deactivate()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundSlideshow},9501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BackgroundVideo extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{backgroundVideoContainer:".elementor-background-video-container",backgroundVideoEmbed:".elementor-background-video-embed",backgroundVideoHosted:".elementor-background-video-hosted"}}}getDefaultElements(){const e=this.getSettings("selectors"),t={$backgroundVideoContainer:this.$element.find(e.backgroundVideoContainer)};return t.$backgroundVideoEmbed=t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),t.$backgroundVideoHosted=t.$backgroundVideoContainer.children(e.backgroundVideoHosted),t}calcVideosSize(e){let t="16:9";"vimeo"===this.videoType&&(t=e[0].width+":"+e[0].height);const n=this.elements.$backgroundVideoContainer.outerWidth(),s=this.elements.$backgroundVideoContainer.outerHeight(),i=t.split(":"),o=i[0]/i[1],r=n/s>o;return{width:r?n:s*o,height:r?n/o:s}}changeVideoSize(){if("hosted"!==this.videoType&&!this.player)return;let e;if("youtube"===this.videoType?e=jQuery(this.player.getIframe()):"vimeo"===this.videoType?e=jQuery(this.player.element):"hosted"===this.videoType&&(e=this.elements.$backgroundVideoHosted),!e)return;const t=this.calcVideosSize(e);e.width(t.width).height(t.height)}startVideoLoop(e){if(!this.player.getIframe().contentWindow)return;const t=this.getElementSettings(),n=t.background_video_start||0,s=t.background_video_end;if(!t.background_play_once||e){if(this.player.seekTo(n),s){setTimeout((()=>{this.startVideoLoop(!1)}),1e3*(s-n+1))}}else this.player.stopVideo()}prepareVimeoVideo(e,t){const n=this.getElementSettings(),s={url:t,width:this.elements.$backgroundVideoContainer.outerWidth().width,autoplay:!0,loop:!n.background_play_once,transparent:!1,background:!0,muted:!0};n.background_privacy_mode&&(s.dnt=!0),this.player=new e.Player(this.elements.$backgroundVideoContainer,s),this.handleVimeoStartEndTimes(n),this.player.ready().then((()=>{jQuery(this.player.element).addClass("elementor-background-video-embed"),this.changeVideoSize()}))}handleVimeoStartEndTimes(e){e.background_video_start&&this.player.on("play",(t=>{0===t.seconds&&this.player.setCurrentTime(e.background_video_start)})),this.player.on("timeupdate",(t=>{e.background_video_end&&e.background_video_end<t.seconds&&(e.background_play_once?this.player.pause():this.player.setCurrentTime(e.background_video_start)),this.player.getDuration().then((n=>{e.background_video_start&&!e.background_video_end&&t.seconds>n-.5&&this.player.setCurrentTime(e.background_video_start)}))}))}prepareYTVideo(e,t){const n=this.elements.$backgroundVideoContainer,s=this.getElementSettings();let i=e.PlayerState.PLAYING;window.chrome&&(i=e.PlayerState.UNSTARTED);const o={videoId:t,events:{onReady:()=>{this.player.mute(),this.changeVideoSize(),this.startVideoLoop(!0),this.player.playVideo()},onStateChange:t=>{switch(t.data){case i:n.removeClass("elementor-invisible elementor-loading");break;case e.PlayerState.ENDED:"function"==typeof this.player.seekTo&&this.player.seekTo(s.background_video_start||0),s.background_play_once&&this.player.destroy()}}},playerVars:{controls:0,rel:0,playsinline:1}};s.background_privacy_mode&&(o.host="https://www.youtube-nocookie.com",o.origin=window.location.hostname),n.addClass("elementor-loading elementor-invisible"),this.player=new e.Player(this.elements.$backgroundVideoEmbed[0],o)}activate(){let e,t=this.getElementSettings("background_video_link");const n=this.getElementSettings("background_play_once");if(-1!==t.indexOf("vimeo.com")?(this.videoType="vimeo",this.apiProvider=elementorFrontend.utils.vimeo):t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)&&(this.videoType="youtube",this.apiProvider=elementorFrontend.utils.youtube),this.apiProvider)e=this.apiProvider.getVideoIDFromURL(t),this.apiProvider.onApiReady((n=>{"youtube"===this.videoType&&this.prepareYTVideo(n,e),"vimeo"===this.videoType&&this.prepareVimeoVideo(n,t)}));else{this.videoType="hosted";const e=this.getElementSettings("background_video_start"),s=this.getElementSettings("background_video_end");(e||s)&&(t+="#t="+(e||0)+(s?","+s:"")),this.elements.$backgroundVideoHosted.attr("src",t).one("canplay",this.changeVideoSize.bind(this)),n&&this.elements.$backgroundVideoHosted.on("ended",(()=>{this.elements.$backgroundVideoHosted.hide()}))}elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc",this.changeVideoSize)}deactivate(){"youtube"===this.videoType&&this.player.getIframe()||"vimeo"===this.videoType?this.player.destroy():this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),elementorFrontend.elements.$window.off("resize",this.changeVideoSize)}run(){const e=this.getElementSettings();(e.background_play_on_mobile||"mobile"!==elementorFrontend.getCurrentDeviceMode())&&("video"===e.background_background&&e.background_video_link?this.activate():this.deactivate())}onInit(){super.onInit(...arguments),this.changeVideoSize=this.changeVideoSize.bind(this),this.run()}onElementChange(e){"background_background"===e&&this.run()}}t.default=BackgroundVideo},8704:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4058)),o=s(n(9501)),r=[i.default,o.default];t.default=r},7537:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[s(n(4058)).default];t.default=i},4985:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=[()=>n.e(413).then(n.bind(n,2929)),()=>n.e(413).then(n.bind(n,343)),()=>n.e(413).then(n.bind(n,8073))];t.default=s},6397:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class GlobalHandler extends elementorModules.frontend.handlers.Base{getWidgetType(){return"global"}animate(){const e=this.$element,t=this.getAnimation();if("none"===t)return void e.removeClass("elementor-invisible");const n=this.getElementSettings(),s=n._animation_delay||n.animation_delay||0;e.removeClass(t),this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=t,setTimeout((()=>{e.removeClass("elementor-invisible").addClass("animated "+t)}),s)}getAnimation(){return this.getCurrentDeviceSetting("animation")||this.getCurrentDeviceSetting("_animation")}onInit(){if(super.onInit(...arguments),this.getAnimation()){const e=elementorModules.utils.Scroll.scrollObserver({callback:t=>{t.isInViewport&&(this.animate(),e.unobserve(this.$element[0]))}});e.observe(this.$element[0])}}onElementChange(e){/^_?animation/.test(e)&&this.animate()}}t.default=e=>{elementorFrontend.elementsHandler.addHandler(GlobalHandler,{$element:e})}},355:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class HandlesPosition extends elementorModules.frontend.handlers.Base{isActive(){return elementorFrontend.isEditMode()}isFirstSection(){return this.$element[0]===document.querySelector(".elementor-edit-mode .elementor-top-section")}isOverflowHidden(){return"hidden"===this.$element.css("overflow")}getOffset(){if("body"===elementor.config.document.container)return this.$element.offset().top;const e=jQuery(elementor.config.document.container);return this.$element.offset().top-e.offset().top}setHandlesPosition(){const e=elementor.documents.getCurrent();if(!e||!e.container.isEditable())return;const t="elementor-section--handles-inside";if(elementor.settings.page.model.attributes.scroll_snap)return void this.$element.addClass(t);const n=this.isOverflowHidden();if(!n&&!this.isFirstSection())return;const s=n?0:this.getOffset();if(s<25){this.$element.addClass(t);const e=this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");s<-5?e.css("top",-s):e.css("top","")}else this.$element.removeClass(t)}onInit(){this.isActive()&&(this.setHandlesPosition(),this.$element.on("mouseenter",this.setHandlesPosition.bind(this)))}}t.default=HandlesPosition},3384:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Shapes extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{container:"> .elementor-shape-%s"},svgURL:elementorFrontend.config.urls.assets+"shapes/"}}getDefaultElements(){const e={},t=this.getSettings("selectors");return e.$topContainer=this.$element.find(t.container.replace("%s","top")),e.$bottomContainer=this.$element.find(t.container.replace("%s","bottom")),e}isActive(){return elementorFrontend.isEditMode()}getSvgURL(e,t){let n=this.getSettings("svgURL")+t+".svg";return elementor.config.additional_shapes&&e in elementor.config.additional_shapes&&(n=elementor.config.additional_shapes[e],-1<t.indexOf("-negative")&&(n=n.replace(".svg","-negative.svg"))),n}buildSVG(e){const t="shape_divider_"+e,n=this.getElementSettings(t),s=this.elements["$"+e+"Container"];if(s.attr("data-shape",n),!n)return void s.empty();let i=n;this.getElementSettings(t+"_negative")&&(i+="-negative");const o=this.getSvgURL(n,i);jQuery.get(o,(e=>{s.empty().append(e.childNodes[0])})),this.setNegative(e)}setNegative(e){this.elements["$"+e+"Container"].attr("data-negative",!!this.getElementSettings("shape_divider_"+e+"_negative"))}onInit(){this.isActive(this.getSettings())&&(super.onInit(...arguments),["top","bottom"].forEach((e=>{this.getElementSettings("shape_divider_"+e)&&this.buildSVG(e)})))}onElementChange(e){const t=e.match(/^shape_divider_(top|bottom)$/);if(t)return void this.buildSVG(t[1]);const n=e.match(/^shape_divider_(top|bottom)_negative$/);n&&(this.buildSVG(n[1]),this.setNegative(n[1]))}}t.default=Shapes},2804:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class StretchedSection extends elementorModules.frontend.handlers.StretchedElement{getStretchedClass(){return"elementor-section-stretched"}getStretchSettingName(){return"stretch_section"}getStretchActiveValue(){return"section-stretched"}}t.default=StretchedSection},3346:(e,t,n)=>{"use strict";var s=n(6028);e.exports=elementorModules.ViewModule.extend({getDefaultSettings:()=>({scrollDuration:500,selectors:{links:'a[href*="#"]',targets:".elementor-element, .elementor-menu-anchor",scrollable:(0,s.isScrollSnapActive)()?"body":"html, body"}}),getDefaultElements(){return{$scrollable:jQuery(this.getSettings("selectors").scrollable)}},bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.handleAnchorLinks)},handleAnchorLinks(e){var t,n=e.currentTarget,i=location.pathname===n.pathname;if(location.hostname===n.hostname&&i&&!(n.hash.length<2)){try{t=jQuery(n.hash).filter(this.getSettings("selectors.targets"))}catch(e){return}if(t.length){var o=t.offset().top,r=elementorFrontend.elements.$wpAdminBar,a=jQuery(".elementor-section.elementor-sticky--active:visible");r.length>0&&(o-=r.height()),a.length>0&&(o-=Math.max.apply(null,a.map((function(){return jQuery(this).outerHeight()})).get())),e.preventDefault(),o=elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance",o),(0,s.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","none"),this.elements.$scrollable.animate({scrollTop:o},this.getSettings("scrollDuration"),"linear",(()=>{(0,s.isScrollSnapActive)()&&elementorFrontend.elements.$body.css("scroll-snap-type","")}))}}},onInit(){elementorModules.ViewModule.prototype.onInit.apply(this,arguments)}})},6866:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class AssetsLoader{getScriptElement(e){const t=document.createElement("script");return t.src=e,t}getStyleElement(e){const t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}load(e,t){const n=AssetsLoader.assets[e][t];return n.loader||(n.loader=new Promise((t=>{const s="style"===e?this.getStyleElement(n.src):this.getScriptElement(n.src);s.onload=()=>t(!0);const i="head"===n.parent?n.parent:"body";document[i].appendChild(s)}))),n.loader}}t.default=AssetsLoader;const n=elementorFrontendConfig.environmentMode.isScriptDebug?"":".min",s=elementorFrontendConfig.experimentalFeatures.e_swiper_latest?`${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`:`${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;AssetsLoader.assets={script:{dialog:{src:`${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`},"share-link":{src:`${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`},swiper:{src:s}},style:{}}},1322:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Controls{getControlValue(e,t,n){let s;return s="object"==typeof e[t]&&n?e[t][n]:e[t],s}getResponsiveControlValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const s=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:null)||elementorFrontend.getCurrentDeviceMode(),i=this.getControlValue(e,t,n);if("widescreen"===s){const s=this.getControlValue(e,`${t}_widescreen`,n);return s||0===s?s:i}const o=elementorFrontend.breakpoints.getActiveBreakpointsList({withDesktop:!0});let r=s,a=o.indexOf(s),l="";for(;a<=o.length;){if("desktop"===r){l=i;break}const s=`${t}_${r}`,d=this.getControlValue(e,s,n);if(d||0===d){l=d;break}a++,r=o[a]}return l}}},8646:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class LightboxManager extends elementorModules.ViewModule{static getLightbox(){const e=new Promise((e=>{n.e(723).then(n.t.bind(n,3896,23)).then((t=>{let{default:n}=t;return e(new n)}))})),t=elementorFrontend.utils.assetsLoader.load("script","dialog"),s=elementorFrontend.utils.assetsLoader.load("script","share-link");return Promise.all([e,t,s]).then((()=>e))}getDefaultSettings(){return{selectors:{links:"a, [data-elementor-lightbox]"}}}getDefaultElements(){return{$links:jQuery(this.getSettings("selectors.links"))}}isLightboxLink(e){if("a"===e.tagName.toLowerCase()&&(e.hasAttribute("download")||!/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href))&&!e.dataset.elementorLightboxVideo)return!1;const t=elementorFrontend.getKitSettings("global_image_lightbox"),n=e.dataset.elementorOpenLightbox;return"yes"===n||t&&"no"!==n}async onLinkClick(e){const t=e.currentTarget,n=jQuery(e.target),s=elementorFrontend.isEditMode(),i=s&&elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker"),o=!!n.closest(".elementor-edit-area").length;if(!this.isLightboxLink(t))return void(s&&o&&e.preventDefault());if(e.preventDefault(),s&&!elementor.getPreferences("lightbox_in_editor"))return;if(i)return;(this.isOptimizedAssetsLoading()?await LightboxManager.getLightbox():elementorFrontend.utils.lightbox).createLightbox(t)}isOptimizedAssetsLoading(){return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),(e=>this.onLinkClick(e)))}onInit(){super.onInit(...arguments),this.isOptimizedAssetsLoading()&&!elementorFrontend.isEditMode()&&this.elements.$links.each(((e,t)=>{if(this.isLightboxLink(t))return LightboxManager.getLightbox(),!1}))}}t.default=LightboxManager},8628:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class Swiper{constructor(e,t){return this.config=t,this.config.breakpoints&&(this.config=this.adjustConfig(t)),e instanceof jQuery&&(e=e[0]),e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),new Promise((t=>{if(!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)return t(this.createSwiperInstance(e,this.config));elementorFrontend.utils.assetsLoader.load("script","swiper").then((()=>t(this.createSwiperInstance(e,this.config))))}))}createSwiperInstance(e,t){const n=window.Swiper;return n.prototype.adjustConfig=this.adjustConfig,new n(e,t)}adjustConfig(e){if(!e.handleElementorBreakpoints)return e;const t=elementorFrontend.config.responsive.activeBreakpoints,n=elementorFrontend.breakpoints.getBreakpointValues();return Object.keys(e.breakpoints).forEach((s=>{const i=parseInt(s);let o;if(i===t.mobile.value||i+1===t.mobile.value)o=0;else if(!t.widescreen||i!==t.widescreen.value&&i+1!==t.widescreen.value){const e=n.findIndex((e=>i===e||i+1===e));o=n[e-1]}else o=i;e.breakpoints[o]=e.breakpoints[s],e.breakpoints[s]={slidesPerView:e.slidesPerView,slidesPerGroup:e.slidesPerGroup?e.slidesPerGroup:1}})),e}}},2064:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(5719);class _default extends elementorModules.ViewModule{getDefaultSettings(){return{selectors:{links:'a[href^="%23elementor-action"], a[href^="#elementor-action"]'}}}bindEvents(){elementorFrontend.elements.$document.on("click",this.getSettings("selectors.links"),this.runLinkAction.bind(this))}initActions(){this.actions={lightbox:async e=>{const t=await elementorFrontend.utils.lightbox;e.slideshow?t.openSlideshow(e.slideshow,e.url):(e.id&&(e.type="image"),t.showModal(e))}}}addAction(e,t){this.actions[e]=t}runAction(e){const t=(e=decodeURIComponent(e)).match(/action=(.+?)&/);if(!t)return;const n=this.actions[t[1]];if(!n)return;let s={};const i=e.match(/settings=(.+)/);i&&(s=JSON.parse(atob(i[1])));for(var o=arguments.length,r=new Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];n(s,...r)}runLinkAction(e){e.preventDefault(),this.runAction(jQuery(e.currentTarget).attr("href"),e)}runHashAction(){if(!location.hash)return;const e=document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);e&&this.runAction(e.getAttribute("data-e-action-hash"))}createActionHash(e,t){return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)}onInit(){super.onInit(),this.initActions(),elementorFrontend.on("components:init",this.runHashAction.bind(this))}}t.default=_default},6028:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isScrollSnapActive=t.escapeHTML=void 0;t.escapeHTML=e=>{const t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return e.replace(/[&<>'"]/g,(e=>t[e]||e))};t.isScrollSnapActive=()=>"yes"===(elementorFrontend.isEditMode()?elementor.settings.page.model.attributes?.scroll_snap:elementorFrontend.config.settings.page?.scroll_snap)},4773:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class BaseLoader extends elementorModules.ViewModule{getDefaultSettings(){return{isInserted:!1,selectors:{firstScript:"script:first"}}}getDefaultElements(){return{$firstScript:jQuery(this.getSettings("selectors.firstScript"))}}insertAPI(){this.elements.$firstScript.before(jQuery("<script>",{src:this.getApiURL()})),this.setSettings("isInserted",!0)}getVideoIDFromURL(e){const t=e.match(this.getURLRegex());return t&&t[1]}onApiReady(e){this.getSettings("isInserted")||this.insertAPI(),this.isApiLoaded()?e(this.getApiObject()):setTimeout((()=>{this.onApiReady(e)}),350)}getAutoplayURL(e){return e.replace("&autoplay=0","")+"&autoplay=1"}}t.default=BaseLoader},1911:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4773));class VimeoLoader extends i.default{getApiURL(){return"https://player.vimeo.com/api/player.js"}getURLRegex(){return/^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/}isApiLoaded(){return window.Vimeo}getApiObject(){return Vimeo}getAutoplayURL(e){const t=(e=super.getAutoplayURL(e)).match(/#t=[^&]*/);return e.replace(t[0],"")+t}}t.default=VimeoLoader},1604:(e,t,n)=>{"use strict";var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(4773));class YoutubeLoader extends i.default{getApiURL(){return"https://www.youtube.com/iframe_api"}getURLRegex(){return/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/}isApiLoaded(){return window.YT&&YT.loaded}getApiObject(){return YT}}t.default=YoutubeLoader},59:(e,t,n)=>{"use strict";n.p=elementorFrontendConfig.urls.assets+"js/"},4375:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class Breakpoints extends elementorModules.Module{constructor(e){super(),this.responsiveConfig=e}getActiveBreakpointsList(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e={largeToSmall:!1,withDesktop:!1,...e};const t=Object.keys(this.responsiveConfig.activeBreakpoints);if(e.withDesktop){const e=-1===t.indexOf("widescreen")?t.length:t.length-1;t.splice(e,0,"desktop")}return e.largeToSmall&&t.reverse(),t}getBreakpointValues(){const{activeBreakpoints:e}=this.responsiveConfig,t=[];return Object.values(e).forEach((e=>{t.push(e.value)})),t}getDesktopPreviousDeviceKey(){let e="";const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t),s=n.length;return e="min"===t[n[s-1]].direction?n[s-2]:n[s-1],e}getDesktopMinPoint(){const{activeBreakpoints:e}=this.responsiveConfig;return e[this.getDesktopPreviousDeviceKey()].value+1}getDeviceMinBreakpoint(e){if("desktop"===e)return this.getDesktopMinPoint();const{activeBreakpoints:t}=this.responsiveConfig,n=Object.keys(t);let s;if(n[0]===e)s=320;else if("widescreen"===e)s=t[e]?t[e].value:this.responsiveConfig.breakpoints.widescreen;else{const i=n.indexOf(e);s=t[n[i-1]].value+1}return s}getActiveMatchRegex(){return new RegExp(this.getActiveBreakpointsList().map((e=>"_"+e)).join("|")+"$")}}t.default=Breakpoints},6404:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Events=void 0;class Events{static dispatch(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e=e instanceof jQuery?e[0]:e,s&&e.dispatchEvent(new CustomEvent(s,{detail:n})),e.dispatchEvent(new CustomEvent(t,{detail:n}))}}t.Events=Events;var n=Events;t.default=n},9469:e=>{"use strict";e.exports=function(){var e,t=Array.prototype.slice,n={actions:{},filters:{}};function _removeHook(e,t,s,i){var o,r,a;if(n[e][t])if(s)if(o=n[e][t],i)for(a=o.length;a--;)(r=o[a]).callback===s&&r.context===i&&o.splice(a,1);else for(a=o.length;a--;)o[a].callback===s&&o.splice(a,1);else n[e][t]=[]}function _addHook(e,t,s,i,o){var r={callback:s,priority:i,context:o},a=n[e][t];if(a){var l=!1;if(jQuery.each(a,(function(){if(this.callback===s)return l=!0,!1})),l)return;a.push(r),a=function _hookInsertSort(e){for(var t,n,s,i=1,o=e.length;i<o;i++){for(t=e[i],n=i;(s=e[n-1])&&s.priority>t.priority;)e[n]=e[n-1],--n;e[n]=t}return e}(a)}else a=[r];n[e][t]=a}function _runHook(e,t,s){var i,o,r=n[e][t];if(!r)return"filters"===e&&s[0];if(o=r.length,"filters"===e)for(i=0;i<o;i++)s[0]=r[i].callback.apply(r[i].context,s);else for(i=0;i<o;i++)r[i].callback.apply(r[i].context,s);return"filters"!==e||s[0]}return e={removeFilter:function removeFilter(t,n){return"string"==typeof t&&_removeHook("filters",t,n),e},applyFilters:function applyFilters(){var n=t.call(arguments),s=n.shift();return"string"==typeof s?_runHook("filters",s,n):e},addFilter:function addFilter(t,n,s,i){return"string"==typeof t&&"function"==typeof n&&_addHook("filters",t,n,s=parseInt(s||10,10),i),e},removeAction:function removeAction(t,n){return"string"==typeof t&&_removeHook("actions",t,n),e},doAction:function doAction(){var n=t.call(arguments),s=n.shift();return"string"==typeof s&&_runHook("actions",s,n),e},addAction:function addAction(t,n,s,i){return"string"==typeof t&&"function"==typeof n&&_addHook("actions",t,n,s=parseInt(s||10,10),i),e}},e}},3308:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const matchUserAgent=e=>n.indexOf(e)>=0,n=navigator.userAgent,s=!!window.opr&&!!opr.addons||!!window.opera||matchUserAgent(" OPR/"),i=matchUserAgent("Firefox"),o=/^((?!chrome|android).)*safari/i.test(n)||/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=/Trident|MSIE/.test(n)&&!!document.documentMode,a=!r&&!!window.StyleMedia||matchUserAgent("Edg"),l=!!window.chrome&&matchUserAgent("Chrome")&&!(a||s),d=matchUserAgent("Chrome")&&!!window.CSS,c=matchUserAgent("AppleWebKit")&&!d;var u={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,appleWebkit:c,blink:d,chrome:l,edge:a,firefox:i,ie:r,mac:matchUserAgent("Macintosh"),opera:s,safari:o,webkit:matchUserAgent("AppleWebKit")};t.default=u},5107:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{get(e,t){let n;t=t||{};try{n=t.session?sessionStorage:localStorage}catch(t){return e?void 0:{}}let s=n.getItem("elementor");s=s?JSON.parse(s):{},s.__expiration||(s.__expiration={});const i=s.__expiration;let o=[];e?i[e]&&(o=[e]):o=Object.keys(i);let r=!1;return o.forEach((e=>{new Date(i[e])<new Date&&(delete s[e],delete i[e],r=!0)})),r&&this.save(s,t.session),e?s[e]:s}set(e,t,n){n=n||{};const s=this.get(null,n);if(s[e]=t,n.lifetimeInSeconds){const t=new Date;t.setTime(t.getTime()+1e3*n.lifetimeInSeconds),s.__expiration[e]=t.getTime()}this.save(s,n.session)}save(e,t){let n;try{n=t?sessionStorage:localStorage}catch(e){return}n.setItem("elementor",JSON.stringify(e))}}t.default=_default},6046:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("text-path",(()=>n.e(48).then(n.bind(n,6468))))}}t.default=_default},1855:(e,t,n)=>{var s=n(5516),i=TypeError;e.exports=function(e,t){if(s(t,e))return e;throw i("Incorrect invocation")}},3621:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},5719:(e,t,n)=>{"use strict";var s=n(1695),i=n(2086),o=n(563),r=n(5736),a=n(7826).f,l=n(9606),d=n(1855),c=n(5070),u=n(1879),h=n(3621),m=n(79),g=n(5283),p=n(3296),f="DOMException",v=o("Error"),b=o(f),_=function DOMException(){d(this,y);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),s=new b(t,n),i=v(t);return i.name=f,a(s,"stack",r(1,m(i.stack,1))),c(s,this,_),s},y=_.prototype=b.prototype,w="stack"in v(f),k="stack"in new b(1,2),S=b&&g&&Object.getOwnPropertyDescriptor(i,f),E=!(!S||S.writable&&S.configurable),M=w&&!E&&!k;s({global:!0,constructor:!0,forced:p||M},{DOMException:M?_:b});var C=o(f),A=C.prototype;if(A.constructor!==C)for(var D in p||a(A,"constructor",r(1,C)),h)if(l(h,D)){var $=h[D],R=$.s;l(C,R)||a(C,R,r(6,$.c))}}},e=>{e.O(0,[354],(()=>{return t=5654,e(e.s=t);var t}));e.O()}]);;
/*! elementor-pro - v3.15.0 - 09-08-2023 */
"use strict";(self.webpackChunkelementor_pro=self.webpackChunkelementor_pro||[]).push([[437],{7996:(e,t,n)=>{var s=n(3203),o=s(n(4042)),r=s(n(8528)),l=s(n(7857)),i=s(n(3184)),d=s(n(7043)),a=s(n(4223)),u=s(n(4231)),c=s(n(2741)),m=s(n(3513)),h=s(n(3002)),g=s(n(8650)),f=s(n(6701)),p=s(n(102)),_=s(n(1748)),v=s(n(5438)),b=s(n(2439)),y=s(n(5032)),M=s(n(1474)),F=s(n(2105)),S=s(n(4351)),w=s(n(3159));const extendDefaultHandlers=e=>({...e,...{animatedText:o.default,carousel:r.default,countdown:l.default,hotspot:i.default,form:d.default,gallery:a.default,lottie:u.default,nav_menu:c.default,popup:m.default,posts:h.default,share_buttons:g.default,slides:f.default,social:p.default,themeBuilder:v.default,themeElements:b.default,woocommerce:y.default,tableOfContents:_.default,loopBuilder:M.default,megaMenu:F.default,nestedCarousel:S.default,taxonomyFilter:w.default}});elementorProFrontend.on("elementor-pro/modules/init:before",(()=>{elementorFrontend.hooks.addFilter("elementor-pro/frontend/handlers",extendDefaultHandlers)}))},8115:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.close=void 0;const o=new(s(n(4519)).default)("eicon"),r={get element(){return o.createSvgElement("close",{path:"M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",width:1e3,height:1e3})}};t.close=r},4519:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3231));class IconsManager{constructor(e){if(this.prefix=`${e}-`,!IconsManager.symbolsContainer){const e="e-font-icon-svg-symbols";IconsManager.symbolsContainer=document.getElementById(e),IconsManager.symbolsContainer||(IconsManager.symbolsContainer=document.createElementNS("http://www.w3.org/2000/svg","svg"),IconsManager.symbolsContainer.setAttributeNS(null,"style","display: none;"),IconsManager.symbolsContainer.setAttributeNS(null,"class",e),document.body.appendChild(IconsManager.symbolsContainer))}}createSvgElement(e,t){let{path:n,width:s,height:o}=t;const r=this.prefix+e,l="#"+this.prefix+e;if(!IconsManager.iconsUsageList.includes(r)){if(!IconsManager.symbolsContainer.querySelector(l)){const e=document.createElementNS("http://www.w3.org/2000/svg","symbol");e.id=r,e.innerHTML='<path d="'+n+'"></path>',e.setAttributeNS(null,"viewBox","0 0 "+s+" "+o),IconsManager.symbolsContainer.appendChild(e)}IconsManager.iconsUsageList.push(r)}const i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.innerHTML='<use xlink:href="'+l+'" />',i.setAttributeNS(null,"class","e-font-icon-svg e-"+r),i}}t.default=IconsManager,(0,o.default)(IconsManager,"symbolsContainer",void 0),(0,o.default)(IconsManager,"iconsUsageList",[])},6399:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function runElementHandlers(e){[...e].flatMap((e=>[...e.querySelectorAll(".elementor-element")])).forEach((e=>elementorFrontend.elementsHandler.runReadyTrigger(e)))}},4042:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("animated-headline",(()=>n.e(26).then(n.bind(n,629))))}}t.default=_default},8528:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("media-carousel",(()=>n.e(534).then(n.bind(n,8509)))),elementorFrontend.elementsHandler.attachHandler("testimonial-carousel",(()=>n.e(369).then(n.bind(n,4526)))),elementorFrontend.elementsHandler.attachHandler("reviews",(()=>n.e(369).then(n.bind(n,4526))))}}t.default=_default},7857:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("countdown",(()=>n.e(804).then(n.bind(n,5449))))}}t.default=_default},7043:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("form",[()=>n.e(680).then(n.bind(n,8503)),()=>n.e(680).then(n.bind(n,1393)),()=>n.e(680).then(n.bind(n,6529)),()=>n.e(680).then(n.bind(n,784)),()=>n.e(680).then(n.bind(n,2108)),()=>n.e(680).then(n.bind(n,5347))]),elementorFrontend.elementsHandler.attachHandler("subscribe",[()=>n.e(680).then(n.bind(n,8503)),()=>n.e(680).then(n.bind(n,1393)),()=>n.e(680).then(n.bind(n,6529))])}}t.default=_default},4223:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("gallery",(()=>n.e(121).then(n.bind(n,2219))))}}t.default=_default},3184:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("hotspot",(()=>n.e(888).then(n.bind(n,1016))))}}t.default=_default},1474:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),["post","product"].forEach((e=>{elementorFrontend.elementsHandler.attachHandler("loop-grid",(()=>n.e(985).then(n.bind(n,4098))),e),elementorFrontend.elementsHandler.attachHandler("loop-grid",(()=>n.e(149).then(n.bind(n,6685))),e),elementorFrontend.elementsHandler.attachHandler("loop-carousel",(()=>n.e(149).then(n.bind(n,6685))),e),elementorFrontend.elementsHandler.attachHandler("loop-carousel",(()=>n.e(153).then(n.bind(n,7188))),e)}))}}t.default=_default},3651:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(6399));class BaseFilterFrontendModule extends elementorModules.Module{constructor(){super(),this.loopWidgetsStore={}}removeWidgetFromLoopWidgetsStore(e){delete this.loopWidgetsStore[e]}addWidgetToLoopWidgetsStore(e){this.loopWidgetsStore[e]={filters:{},consolidatedFilters:{}}}removeFilterFromLoopWidget(e,t){this.loopWidgetsStore[e]||this.addWidgetToLoopWidgetsStore(e),delete this.loopWidgetsStore[e].filters[t],this.refreshLoopWidget(e,t)}setFilterDataForLoopWidget(e,t,n){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.loopWidgetsStore[e]||this.addWidgetToLoopWidgetsStore(e),this.loopWidgetsStore[e].filters[t]=n,s?this.refreshLoopWidget(e,t):this.consolidateFiltersForLoopWidget(e)}consolidateFiltersForLoopWidget(e){const t=this.loopWidgetsStore[e].filters,n={};for(const e in t){const s=t[e],o=s.filterType,r=s.filterData;n[o]||(n[o]={}),n[o][r.selectedTaxonomy]||(n[o][r.selectedTaxonomy]=[]),n[o][r.selectedTaxonomy].includes(r.term)||n[o][r.selectedTaxonomy].push(r.term)}this.loopWidgetsStore[e].consolidatedFilters=n}getQueryStringInObjectForm(){const e={};for(const t in this.loopWidgetsStore){const n=this.loopWidgetsStore[t];for(const s in n.consolidatedFilters){const o=n.consolidatedFilters[s];for(const n in o)e[`e-filter-${t}-${n}`]=o[n].join(",")}}return e}updateURLQueryString(e){const t=new URL(window.location.href).searchParams,n=this.getQueryStringInObjectForm(),s=new URLSearchParams,o=this.getFilterHelperAttributes(e);t.forEach(((e,t)=>{t.startsWith("e-filter")||s.append(t,e)}));for(const e in n)s.set(e,n[e]);let r=s.toString();r=o.pageNum>1?r?this.formatQueryString(o.baseUrl,r):o.baseUrl:r?`?${r}`:location.pathname,history.pushState(null,null,r)}formatQueryString(e,t){const n=e.includes("?")?new URLSearchParams(e.split("?")[1]):new URLSearchParams,s=new URLSearchParams(t);for(const e of n.keys())s.has(e)&&s.delete(e);const o=["page","paged"];for(const e of o)n.delete(e),s.delete(e);const r=new URLSearchParams(n.toString());for(const[e,t]of s.entries())r.append(e,t);return e.split("?")[0]+(r.toString()?`?${r.toString()}`:"")}getFilterHelperAttributes(e){const t=document.querySelector('[data-id="'+e+'"]');if(!t)return{baseUrl:location.href,pageNum:1};return t.querySelector(".e-filter").dataset}prepareLoopUpdateRequestData(e,t){const n=this.loopWidgetsStore[e].consolidatedFilters,s=this.getFilterHelperAttributes(t),o={post_id:elementorFrontend.config.post.id||this.getClosestDataElementorId(document.querySelector(`.elementor-element-${e}`)),widget_filters:n,widget_id:e,pagination_base_url:s.baseUrl};if(elementorFrontend.isEditMode()){const t=window.top.$e.components.get("document").utils.findContainerById(e);o.widget_model=t.model.toJSON({remove:["default","editSettings","defaultEditSettings"]}),o.is_edit_mode=!0}return o}getClosestDataElementorId(e){const t=e.closest("[data-elementor-id]");return t?t.getAttribute("data-elementor-id"):0}getFetchArgumentsForLoopUpdate(e,t){const n=this.prepareLoopUpdateRequestData(e,t),s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return elementorFrontend.isEditMode()&&elementorPro.config.loopFilter?.nonce&&(s.headers["X-WP-Nonce"]=elementorPro.config.loopFilter?.nonce),s}fetchUpdatedLoopWidgetMarkup(e,t){return fetch(`${elementorProFrontend.config.urls.rest}elementor-pro/v1/refresh-loop`,this.getFetchArgumentsForLoopUpdate(e,t))}createElementFromHTMLString(e){const t=document.createElement("div");return e?(t.innerHTML=e.trim(),t.firstElementChild):(t.classList.add("elementor-widget-container"),t)}addLoadingAnimationOverlay(e){const t=document.querySelector(`.elementor-element-${e}`);if(!t)return;const n=document.createElement("div");n.classList.add("e-loading-overlay"),t.appendChild(n)}removeLoadingAnimationOverlay(e){const t=document.querySelector(`.elementor-element-${e}`);if(!t)return;const n=t.querySelector(".e-loading-overlay");n&&n.remove()}refreshLoopWidget(e,t){this.consolidateFiltersForLoopWidget(e),this.updateURLQueryString(t);const n=document.querySelector(`.elementor-element-${e}`);if(!n)return;this.addLoadingAnimationOverlay(e);return this.fetchUpdatedLoopWidgetMarkup(e,t).then((e=>e instanceof Response&&e?.ok&&!(400<=e?.status)?e.json():{})).catch((e=>({}))).then((t=>{if(!t?.data&&""!==t?.data)return;const s=n.querySelector(".elementor-widget-container"),o=this.createElementFromHTMLString(t.data);n.replaceChild(o,s),this.handleElementHandlers(o),elementorFrontend.elementsHandler.runReadyTrigger(document.querySelector(`.elementor-element-${e}`)),n.classList.remove("e-loading")})).finally((()=>{this.removeLoadingAnimationOverlay(e)}))}handleElementHandlers(e){const t=e.querySelectorAll(".e-loop-item");(0,o.default)(t)}}t.default=BaseFilterFrontendModule},3159:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3651));class LoopFilter extends o.default{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("taxonomy-filter",(()=>n.e(188).then(n.bind(n,6961))))}}t.default=LoopFilter},4231:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("lottie",(()=>n.e(288).then(n.bind(n,1464))))}}t.default=_default},2105:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("mega-menu",[()=>n.e(495).then(n.bind(n,9318)),()=>n.e(157).then(n.bind(n,9638))])}}t.default=_default},2741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),jQuery.fn.smartmenus&&(jQuery.SmartMenus.prototype.isCSSOn=function(){return!0},elementorFrontend.config.is_rtl&&(jQuery.fn.smartmenus.defaults.rightToLeftSubMenus=!0)),elementorFrontend.elementsHandler.attachHandler("nav-menu",(()=>n.e(42).then(n.bind(n,7480))))}}t.default=_default},4351:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("nested-carousel",(()=>n.e(209).then(n.bind(n,1826))))}}t.default=_default},7107:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2635)),r=s(n(3467)),l=n(8115);class _default extends elementorModules.frontend.Document{bindEvents(){const e=this.getDocumentSettings("open_selector");e&&elementorFrontend.elements.$body.on("click",e,this.showModal.bind(this))}startTiming(){new r.default(this.getDocumentSettings("timing"),this).check()&&this.initTriggers()}initTriggers(){this.triggers=new o.default(this.getDocumentSettings("triggers"),this)}showModal(e,t){const n=this.getDocumentSettings();if(!this.isEdit){if(!elementorFrontend.isWPPreviewMode()){if(this.getStorage("disable"))return;if(e&&elementorProFrontend.modules.popup.popupPopped&&n.avoid_multiple_popups)return}this.$element=jQuery(this.elementHTML),this.elements.$elements=this.$element.find(this.getSettings("selectors.elements"))}const s=this.getModal(),o=s.getElements("closeButton");s.setMessage(this.$element).show(),this.isEdit||(n.close_button_delay&&(o.hide(),clearTimeout(this.closeButtonTimeout),this.closeButtonTimeout=setTimeout((()=>o.show()),1e3*n.close_button_delay)),super.runElementsHandlers()),this.setEntranceAnimation(),n.timing&&n.timing.times_count||this.countTimes(),elementorProFrontend.modules.popup.popupPopped=!0,!this.isEdit&&n.a11y_navigation&&this.handleKeyboardA11y(t)}setEntranceAnimation(){const e=this.getModal().getElements("widgetContent"),t=this.getDocumentSettings(),n=elementorFrontend.getCurrentDeviceSetting(t,"entrance_animation");if(this.currentAnimation&&e.removeClass(this.currentAnimation),this.currentAnimation=n,!n)return;const s=t.entrance_animation_duration.size;e.addClass(n),setTimeout((()=>e.removeClass(n)),1e3*s)}handleKeyboardA11y(e){const t=this.getModal().getElements("widgetContent").find(":focusable");if(!t.length)return;let n=null;e?.currentTarget&&(n=jQuery(e.currentTarget));const s=t[t.length-1],o=t[0],onKeyDownPressed=e=>{const t=e.shiftKey;if(!("Tab"===e.key||9===e.keyCode))return;const n=elementorFrontend.elements.window.document.activeElement;if(t){n===o&&(s.focus(),e.preventDefault())}else{n===s&&(o.focus(),e.preventDefault())}};o.focus();const r=elementorFrontend.elements.$window;r.on("keydown",onKeyDownPressed).on("elementor/popup/hide",(()=>{r.off("keydown",onKeyDownPressed),n&&n.focus()}))}setExitAnimation(){const e=this.getModal(),t=this.getDocumentSettings(),n=e.getElements("widgetContent"),s=elementorFrontend.getCurrentDeviceSetting(t,"exit_animation"),o=s?t.entrance_animation_duration.size:0;setTimeout((()=>{s&&n.removeClass(s+" reverse"),this.isEdit||(this.$element.remove(),e.getElements("widget").hide())}),1e3*o),s&&n.addClass(s+" reverse")}initModal(){let e;this.getModal=()=>{if(!e){const t=this.getDocumentSettings(),n=this.getSettings("id"),triggerPopupEvent=e=>{const t="elementor/popup/"+e;elementorFrontend.elements.$document.trigger(t,[n,this]),window.dispatchEvent(new CustomEvent(t,{detail:{id:n,instance:this}}))};let s="elementor-popup-modal";t.classes&&(s+=" "+t.classes);const o={id:"elementor-popup-modal-"+n,className:s,closeButton:!0,preventScroll:t.prevent_scroll,onShow:()=>triggerPopupEvent("show"),onHide:()=>triggerPopupEvent("hide"),effects:{hide:()=>{t.timing&&t.timing.times_count&&this.countTimes(),this.setExitAnimation()},show:"show"},hide:{auto:!!t.close_automatically,autoDelay:1e3*t.close_automatically,onBackgroundClick:!t.prevent_close_on_background_click,onOutsideClick:!t.prevent_close_on_background_click,onEscKeyPress:!t.prevent_close_on_esc_key,ignore:".flatpickr-calendar"},position:{enable:!1}};elementorFrontend.config.experimentalFeatures.e_font_icon_svg&&(o.closeButtonOptions={iconElement:l.close.element}),o.closeButtonClass="eicon-close",e=elementorFrontend.getDialogsManager().createWidget("lightbox",o),e.getElements("widgetContent").addClass("animated");const r=e.getElements("closeButton");this.isEdit&&(r.off("click"),e.hide=()=>{}),this.setCloseButtonPosition()}return e}}setCloseButtonPosition(){const e=this.getModal(),t=this.getDocumentSettings("close_button_position");e.getElements("closeButton").appendTo(e.getElements("outside"===t?"widget":"widgetContent"))}disable(){this.setStorage("disable",!0)}setStorage(e,t,n){elementorFrontend.storage.set(`popup_${this.getSettings("id")}_${e}`,t,n)}getStorage(e,t){return elementorFrontend.storage.get(`popup_${this.getSettings("id")}_${e}`,t)}countTimes(){const e=this.getStorage("times")||0;this.setStorage("times",e+1)}runElementsHandlers(){}async onInit(){super.onInit(),window.DialogsManager||await elementorFrontend.utils.assetsLoader.load("script","dialog"),this.initModal(),this.isEdit?this.showModal():(this.$element.show().remove(),this.elementHTML=this.$element[0].outerHTML,elementorFrontend.isEditMode()||(elementorFrontend.isWPPreviewMode()&&elementorFrontend.config.post.id===this.getSettings("id")?this.showModal():this.startTiming()))}onSettingsChange(e){const t=Object.keys(e.changed)[0];-1!==t.indexOf("entrance_animation")&&this.setEntranceAnimation(),"exit_animation"===t&&this.setExitAnimation(),"close_button_position"===t&&this.setCloseButtonPosition()}}t.default=_default},3513:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(7107));class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.hooks.addAction("elementor/frontend/documents-manager/init-classes",this.addDocumentClass),elementorFrontend.elementsHandler.attachHandler("form",(()=>n.e(50).then(n.bind(n,8872)))),elementorFrontend.on("components:init",(()=>this.onFrontendComponentsInit())),elementorFrontend.isEditMode()||elementorFrontend.isWPPreviewMode()||this.setViewsAndSessions()}addDocumentClass(e){e.addDocumentClass("popup",o.default)}setViewsAndSessions(){const e=elementorFrontend.storage.get("pageViews")||0;elementorFrontend.storage.set("pageViews",e+1);if(!elementorFrontend.storage.get("activeSession",{session:!0})){elementorFrontend.storage.set("activeSession",!0,{session:!0});const e=elementorFrontend.storage.get("sessions")||0;elementorFrontend.storage.set("sessions",e+1)}}showPopup(e,t){const n=elementorFrontend.documentsManager.documents[e.id];if(!n)return;const s=n.getModal();e.toggle&&s.isVisible()?s.hide():n.showModal(null,t)}closePopup(e,t){const n=jQuery(t.target).parents('[data-elementor-type="popup"]').data("elementorId");if(!n)return;const s=elementorFrontend.documentsManager.documents[n];s.getModal().hide(),e.do_not_show_again&&s.disable()}onFrontendComponentsInit(){elementorFrontend.utils.urlActions.addAction("popup:open",((e,t)=>this.showPopup(e,t))),elementorFrontend.utils.urlActions.addAction("popup:close",((e,t)=>this.closePopup(e,t)))}}t.default=_default},3467:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(6723)),r=s(n(3754)),l=s(n(6470)),i=s(n(221)),d=s(n(2193)),a=s(n(6195)),u=s(n(5247)),c=s(n(349)),m=s(n(5503));class _default extends elementorModules.Module{constructor(e,t){super(e),this.document=t,this.timingClasses={page_views:o.default,sessions:r.default,url:l.default,sources:i.default,logged_in:d.default,devices:a.default,times:u.default,browsers:c.default,schedule:m.default}}check(){const e=this.getSettings();let t=!0;return jQuery.each(this.timingClasses,((n,s)=>{if(!e[n])return;new s(e,this.document).check()||(t=!1)})),t}}t.default=_default},3107:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(e,t){super(e),this.document=t}getTimingSetting(e){return this.getSettings(this.getName()+"_"+e)}}t.default=_default},349:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"browsers"}check(){if("all"===this.getTimingSetting("browsers"))return!0;const e=this.getTimingSetting("browsers_options"),t=elementorFrontend.utils.environment;return e.some((e=>t[e]))}}t.default=_default},6195:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"devices"}check(){return-1!==this.getTimingSetting("devices").indexOf(elementorFrontend.getCurrentDeviceMode())}}t.default=_default},2193:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"logged_in"}check(){const e=elementorFrontend.config.user;if(!e)return!0;if("all"===this.getTimingSetting("users"))return!1;return!this.getTimingSetting("roles").filter((t=>-1!==e.roles.indexOf(t))).length}}t.default=_default},6723:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"page_views"}check(){const e=elementorFrontend.storage.get("pageViews"),t=this.getName();let n=this.document.getStorage(t+"_initialPageViews");return n||(this.document.setStorage(t+"_initialPageViews",e),n=e),e-n>=this.getTimingSetting("views")}}t.default=_default},2097:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3231));t.default=class ScheduleUtils{constructor(e){(0,o.default)(this,"shouldDisplay",(()=>{if(!this.settings.startDate&&!this.settings.endDate)return!0;const e=this.getCurrentDateTime();return(!this.settings.startDate||e>=this.settings.startDate)&&(!this.settings.endDate||e<=this.settings.endDate)})),this.settings=e.settings}getCurrentDateTime(){let e=new Date;return"site"===this.settings.timezone&&this.settings.serverDatetime&&(e=new Date(this.settings.serverDatetime)),e}}},5503:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107)),r=s(n(2097));class _default extends o.default{constructor(){super(...arguments);const{schedule_timezone:e,schedule_start_date:t,schedule_end_date:n,schedule_server_datetime:s}=this.getSettings();this.settings={timezone:e,startDate:!!t&&new Date(t),endDate:!!n&&new Date(n),serverDatetime:!!s&&new Date(s)},this.scheduleUtils=new r.default({settings:this.settings})}getName(){return"schedule"}check(){return this.scheduleUtils.shouldDisplay()}}t.default=_default},3754:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"sessions"}check(){const e=elementorFrontend.storage.get("sessions"),t=this.getName();let n=this.document.getStorage(t+"_initialSessions");return n||(this.document.setStorage(t+"_initialSessions",e),n=e),e-n>=this.getTimingSetting("sessions")}}t.default=_default},221:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"sources"}check(){const e=this.getTimingSetting("sources");if(3===e.length)return!0;const t=document.referrer.replace(/https?:\/\/(?:www\.)?/,"");return 0===t.indexOf(location.host.replace("www.",""))?-1!==e.indexOf("internal"):-1!==e.indexOf("external")||-1!==e.indexOf("search")&&/^(google|yahoo|bing|yandex|baidu)\./.test(t)}}t.default=_default},6237:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class TimesUtils{constructor(e){this.uniqueId=e.uniqueId,this.settings=e.settings,this.storage=e.storage}getTimeFramesInSecounds(e){return{day:86400,week:604800,month:2628288}[e]}setExpiration(e,t,n){if(this.storage.get(e))this.storage.set(e,t);else{const s={lifetimeInSeconds:this.getTimeFramesInSecounds(n)};this.storage.set(e,t,s)}}getImpressionsCount(){const e=this.storage.get(this.uniqueId)??0;return parseInt(e)}incrementImpressionsCount(){if(this.settings.period)if("session"!==this.settings.period){const e=this.getImpressionsCount();this.setExpiration(this.uniqueId,e+1,this.settings.period)}else sessionStorage.setItem(this.uniqueId,parseInt(sessionStorage.getItem(this.uniqueId)??0)+1);else this.storage.set("times",(this.storage.get("times")??0)+1)}shouldCountOnOpen(){this.settings.countOnOpen&&this.incrementImpressionsCount()}shouldDisplayPerTimeFrame(){return this.getImpressionsCount()<this.settings.showsLimit&&(this.shouldCountOnOpen(),!0)}shouldDisplayPerSession(){const e=sessionStorage.getItem(this.uniqueId)??0;return parseInt(e)<this.settings.showsLimit&&(this.shouldCountOnOpen(),!0)}shouldDisplayBackwordCompatible(){let e=arguments.length>1?arguments[1]:void 0;const t=parseInt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)<parseInt(e);return this.shouldCountOnOpen(),t}}},5247:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107)),r=s(n(6237));class _default extends o.default{constructor(){super(...arguments),this.uniqueId=`popup-${this.document.getSettings("id")}-impressions-count`;const{times_count:e,times_period:t,times_times:n}=this.getSettings();this.settings={countOnOpen:e,period:t,showsLimit:parseInt(n)},""===this.settings.period&&(this.settings.period=!1),["","close"].includes(this.settings.countOnOpen)?(this.settings.countOnOpen=!1,this.onPopupHide()):this.settings.countOnOpen=!0,this.utils=new r.default({uniqueId:this.uniqueId,settings:this.settings,storage:elementorFrontend.storage})}getName(){return"times"}check(){if(!this.settings.period){const e=this.document.getStorage("times")||0,t=this.getTimingSetting("times");return this.utils.shouldDisplayBackwordCompatible(e,t)}if("session"!==this.settings.period){if(!this.utils.shouldDisplayPerTimeFrame())return!1}else if(!this.utils.shouldDisplayPerSession())return!1;return!0}onPopupHide(){window.addEventListener("elementor/popup/hide",(()=>{this.utils.incrementImpressionsCount()}))}}t.default=_default},6470:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(3107));class _default extends o.default{getName(){return"url"}check(){const e=this.getTimingSetting("url"),t=this.getTimingSetting("action"),n=document.referrer;if("regex"!==t)return"hide"===t^-1!==n.indexOf(e);let s;try{s=new RegExp(e)}catch(e){return!1}return s.test(n)}}t.default=_default},2635:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(4622)),r=s(n(8729)),l=s(n(358)),i=s(n(62)),d=s(n(8811)),a=s(n(9758));class _default extends elementorModules.Module{constructor(e,t){super(e),this.document=t,this.triggers=[],this.triggerClasses={page_load:o.default,scrolling:r.default,scrolling_to:l.default,click:i.default,inactivity:d.default,exit_intent:a.default},this.runTriggers()}runTriggers(){const e=this.getSettings();jQuery.each(this.triggerClasses,((t,n)=>{if(!e[t])return;const s=new n(e,(()=>this.onTriggerFired()));s.run(),this.triggers.push(s)}))}destroyTriggers(){this.triggers.forEach((e=>e.destroy())),this.triggers=[]}onTriggerFired(){this.document.showModal(!0),this.destroyTriggers()}}t.default=_default},2162:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(e,t){super(e),this.callback=t}getTriggerSetting(e){return this.getSettings(this.getName()+"_"+e)}}t.default=_default},62:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{constructor(){super(...arguments),this.checkClick=this.checkClick.bind(this),this.clicksCount=0}getName(){return"click"}checkClick(){this.clicksCount++,this.clicksCount===this.getTriggerSetting("times")&&this.callback()}run(){elementorFrontend.elements.$body.on("click",this.checkClick)}destroy(){elementorFrontend.elements.$body.off("click",this.checkClick)}}t.default=_default},9758:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{constructor(){super(...arguments),this.detectExitIntent=this.detectExitIntent.bind(this)}getName(){return"exit_intent"}detectExitIntent(e){e.clientY<=0&&this.callback()}run(){elementorFrontend.elements.$window.on("mouseleave",this.detectExitIntent)}destroy(){elementorFrontend.elements.$window.off("mouseleave",this.detectExitIntent)}}t.default=_default},8811:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{constructor(){super(...arguments),this.restartTimer=this.restartTimer.bind(this)}getName(){return"inactivity"}run(){this.startTimer(),elementorFrontend.elements.$document.on("keypress mousemove",this.restartTimer)}startTimer(){this.timeOut=setTimeout(this.callback,1e3*this.getTriggerSetting("time"))}clearTimer(){clearTimeout(this.timeOut)}restartTimer(){this.clearTimer(),this.startTimer()}destroy(){this.clearTimer(),elementorFrontend.elements.$document.off("keypress mousemove",this.restartTimer)}}t.default=_default},4622:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{getName(){return"page_load"}run(){this.timeout=setTimeout(this.callback,1e3*this.getTriggerSetting("delay"))}destroy(){clearTimeout(this.timeout)}}t.default=_default},358:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{getName(){return"scrolling_to"}run(){let e;try{e=jQuery(this.getTriggerSetting("selector"))}catch(e){return}this.waypointInstance=elementorFrontend.waypoint(e,this.callback)[0]}destroy(){this.waypointInstance&&this.waypointInstance.destroy()}}t.default=_default},8729:(e,t,n)=>{var s=n(3203);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2162));class _default extends o.default{constructor(){super(...arguments),this.checkScroll=this.checkScroll.bind(this),this.lastScrollOffset=0}getName(){return"scrolling"}checkScroll(){const e=scrollY>this.lastScrollOffset?"down":"up",t=this.getTriggerSetting("direction");if(this.lastScrollOffset=scrollY,e!==t)return;if("up"===e)return void this.callback();const n=elementorFrontend.elements.$document.height()-innerHeight;scrollY/n*100>=this.getTriggerSetting("offset")&&this.callback()}run(){elementorFrontend.elements.$window.on("scroll",this.checkScroll)}destroy(){elementorFrontend.elements.$window.off("scroll",this.checkScroll)}}t.default=_default},3002:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),["classic","full_content","cards"].forEach((e=>{elementorFrontend.elementsHandler.attachHandler("posts",(()=>n.e(985).then(n.bind(n,2607))),e)})),elementorFrontend.elementsHandler.attachHandler("posts",(()=>n.e(287).then(n.bind(n,2298))),"classic"),elementorFrontend.elementsHandler.attachHandler("posts",(()=>n.e(287).then(n.bind(n,2298))),"full_content"),elementorFrontend.elementsHandler.attachHandler("posts",(()=>n.e(287).then(n.bind(n,8496))),"cards"),elementorFrontend.elementsHandler.attachHandler("portfolio",(()=>n.e(824).then(n.bind(n,5208))))}}t.default=_default},8650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("share-buttons",(()=>n.e(58).then(n.bind(n,4112))))}}t.default=_default},6701:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("slides",(()=>n.e(114).then(n.bind(n,9378))))}}t.default=_default},102:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("facebook-button",(()=>n.e(443).then(n.bind(n,3225)))),elementorFrontend.elementsHandler.attachHandler("facebook-comments",(()=>n.e(443).then(n.bind(n,3225)))),elementorFrontend.elementsHandler.attachHandler("facebook-embed",(()=>n.e(443).then(n.bind(n,3225)))),elementorFrontend.elementsHandler.attachHandler("facebook-page",(()=>n.e(443).then(n.bind(n,3225))))}}t.default=_default},1748:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("table-of-contents",(()=>Promise.all([n.e(699),n.e(838)]).then(n.bind(n,8208))))}}t.default=_default},5438:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),["archive_classic","archive_full_content","archive_cards"].forEach((e=>{elementorFrontend.elementsHandler.attachHandler("archive-posts",(()=>n.e(685).then(n.bind(n,8297))),e)})),elementorFrontend.elementsHandler.attachHandler("archive-posts",(()=>n.e(685).then(n.bind(n,8537))),"archive_classic"),elementorFrontend.elementsHandler.attachHandler("archive-posts",(()=>n.e(685).then(n.bind(n,8537))),"archive_full_content"),elementorFrontend.elementsHandler.attachHandler("archive-posts",(()=>n.e(685).then(n.bind(n,9409))),"archive_cards"),jQuery((function(){var e=location.search.match(/theme_template_id=(\d*)/),t=e?jQuery(".elementor-"+e[1]):[];t.length&&jQuery("html, body").animate({scrollTop:t.offset().top-window.innerHeight/2})}))}}t.default=_default},2439:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("search-form",(()=>n.e(858).then(n.bind(n,6709))))}}t.default=_default},5032:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;class _default extends elementorModules.Module{constructor(){super(),elementorFrontend.elementsHandler.attachHandler("woocommerce-menu-cart",(()=>n.e(102).then(n.bind(n,2083)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-purchase-summary",(()=>n.e(1).then(n.bind(n,484)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-checkout-page",(()=>n.e(124).then(n.bind(n,9035)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-cart",(()=>n.e(859).then(n.bind(n,7649)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-my-account",(()=>n.e(979).then(n.bind(n,1915)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-notices",(()=>n.e(497).then(n.bind(n,2627)))),elementorFrontend.elementsHandler.attachHandler("woocommerce-product-add-to-cart",(()=>n.e(800).then(n.bind(n,5767)))),elementorFrontend.isEditMode()&&elementorFrontend.on("components:init",(()=>{elementorFrontend.elements.$body.find(".elementor-widget-woocommerce-cart").length||elementorFrontend.elements.$body.append('<div class="woocommerce-cart-form">')}))}}t.default=_default},8003:e=>{e.exports=wp.i18n}},e=>{e.O(0,[819],(()=>{return t=7996,e(e.s=t);var t}));e.O()}]);;
( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

			elementorFrontend.hooks.addAction( 'frontend/element_ready/section', DeSticky.setStickySection );

			// $( document ).on( 'ready', DeSticky.stickySection );
			$( DeSticky.stickySection );
		},

		elementorColumn: function( $scope ) {
			var $target  = $scope,
				$window  = $( window ),
				columnId = $target.data( 'id' ),
				editMode = Boolean( elementor.isEditMode() ),
				settings = {},
				stickyInstance = null,
				stickyInstanceOptions = {
					topSpacing: 50,
					bottomSpacing: 50,
					containerSelector: '.elementor-section',
					innerWrapperSelector: '.elementor-widget-wrap'
				};

			if ( ! editMode ) {
				settings = $target.data( 'de-sticky-column-settings' );

				if ( $target.hasClass( 'de-sticky-column-sticky' ) ) {

					if ( -1 !== settings['stickyOn'].indexOf( elementorFrontend.getCurrentDeviceMode() ) ) {

						stickyInstanceOptions.topSpacing = settings['topSpacing'];
						stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];

						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );

						$window.on( 'resize.DeStickyColumnSticky orientationchange.DeStickyColumnSticky', DeStickyTools.debounce( 50, resizeDebounce ) );
					}
				}
			} else {
				settings = DeSticky.columnEditorSettings( columnId );

				if ( 'true' === settings['sticky'] ) {
					$target.addClass( 'de-sticky-column-sticky' );

					if ( -1 !== settings['stickyOn'].indexOf( elementorFrontend.getCurrentDeviceMode() ) ) {
						stickyInstanceOptions.topSpacing = settings['topSpacing'];
						stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];

						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );

						$window.on( 'resize.DeStickyColumnSticky orientationchange.DeStickyColumnSticky', DeStickyTools.debounce( 50, resizeDebounce ) );
					}
				}
			}
			

			function resizeDebounce() {
				var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
					availableDevices  = settings['stickyOn'] || [],
					isInit            = $target.data( 'stickyColumnInit' );

				if ( -1 !== availableDevices.indexOf( currentDeviceMode ) ) {

					if ( ! isInit ) {
						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );
						stickyInstance.updateSticky();
					}
				} else {
					$target.data( 'stickyColumnInit', false );
					stickyInstance.destroy();
				}
			}
			

		},

		columnEditorSettings: function( columnId ) {
			var editorElements = null,
				columnData     = {};

			if ( ! window.elementor.hasOwnProperty( 'elements' ) ) {
				return false;
			}

			editorElements = window.elementor.elements;

			if ( ! editorElements.models ) {
				return false;
			}

			$.each( editorElements.models, function( index, obj ) {

				$.each( obj.attributes.elements.models, function( index, obj ) {
					if ( columnId == obj.id ) {
						columnData = obj.attributes.settings.attributes;
					}
				} );

			} );

			return {
				// 'active': columnData['dethemekit_carousel_active_column'] || false,
				'sticky': columnData['de_sticky_column_sticky_enable'] || false,
				'topSpacing': columnData['de_sticky_column_sticky_top_spacing'] || 50,
				'bottomSpacing': columnData['de_sticky_column_sticky_bottom_spacing'] || 50,
				'stickyOn': columnData['de_sticky_column_sticky_enable_on'] || [ 'desktop', 'tablet', 'mobile']
			}
		},

		getStickySectionsDesktop: [],
		getStickySectionsTablet:  [],
		getStickySectionsMobile:  [],

		setStickySection: function( $scope ) {
			var setStickySection = {

				target: $scope,
				
				isEditMode: Boolean( elementorFrontend.isEditMode() ),

				init: function() {
					if ( this.isEditMode ) {
						return;
					}

					if (  'yes' === this.getSectionSetting( 'de_sticky_section_sticky' ) ) {
						var availableDevices = this.getSectionSetting( 'de_sticky_section_sticky_visibility' ) || [];

						if ( ! availableDevices[0] ) {
							return;
						}

						if ( -1 !== availableDevices.indexOf( 'desktop' ) ) {
							DeSticky.getStickySectionsDesktop.push( $scope );
						}

						if ( -1 !== availableDevices.indexOf( 'tablet' ) ) {
							DeSticky.getStickySectionsTablet.push( $scope );
						}

						if ( -1 !== availableDevices.indexOf( 'mobile' ) ) {
							DeSticky.getStickySectionsMobile.push( $scope );
						}
					}
				},

				getSectionSetting: function( setting ){
					var settings = {},
						editMode = Boolean( elementorFrontend.isEditMode() );

					if ( editMode ) {
						if ( ! elementorFrontend.hasOwnProperty( 'config' ) ) {
							return;
						}

						if ( ! elementorFrontend.config.hasOwnProperty( 'elements' ) ) {
							return;
						}

						if ( ! elementorFrontend.config.elements.hasOwnProperty( 'data' ) ) {
							return;
						}

						var modelCID = this.target.data( 'model-cid' ),
							editorSectionData = elementorFrontend.config.elements.data[ modelCID ];

						if ( ! editorSectionData ) {
							return;
						}

						if ( ! editorSectionData.hasOwnProperty( 'attributes' ) ) {
							return;
						}

						settings = editorSectionData.attributes || {};
					} else {
						settings = this.target.data( 'settings' ) || {};
					}

					if ( ! settings[ setting ] ) {
						return;
					}

					return settings[ setting ];
				},

				
			};

			setStickySection.init();
		},

		stickySection: function() {
			var stickySection = {

				isEditMode: Boolean( elementorFrontend.isEditMode() ),

				correctionSelector: $( '#wpadminbar' ),

				initDesktop: false,
				initTablet:  false,
				initMobile:  false,

				init: function() {
					if ( this.isEditMode ) {
						return;
					}

					this.run();
					$( window ).on( 'resize.DeStickySectionSticky orientationchange.DeStickySectionSticky', this.run.bind( this ) );
				},

				getOffset: function(){
					var offset = 0;

					if ( this.correctionSelector[0] && 'fixed' === this.correctionSelector.css( 'position' ) ) {
						offset = this.correctionSelector.outerHeight( true );
					}

					return offset;
				},

				run: function() {
					var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
						transitionIn  = 'de-sticky-transition-in',
						transitionOut = 'de-sticky-transition-out',
						options = {
							stickyClass: 'de-sticky-section-sticky--stuck',
							topSpacing: this.getOffset()
						};

					function initSticky ( section, options ) {
						section.deStickySection( options )
							.on( 'deStickySection:stick', function( event ) {
								$( event.target ).addClass( transitionIn );
								setTimeout( function() {
									$( event.target ).removeClass( transitionIn );
								}, 3000 );
							} )
							.on( 'deStickySection:unstick', function( event ) {
								$( event.target ).addClass( transitionOut );
								setTimeout( function() {
									$( event.target ).removeClass( transitionOut );
								}, 3000 );
							} );
						section.trigger( 'deStickySection:activated' );
					}

					if ( 'desktop' === currentDeviceMode && ! this.initDesktop ) {
						if ( this.initTablet ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initTablet = false;
						}

						if ( this.initMobile ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initMobile = false;
						}

						if ( DeSticky.getStickySectionsDesktop[0] ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {

								if ( DeSticky.getStickySectionsDesktop[i+1] ) {
									options.stopper = DeSticky.getStickySectionsDesktop[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initDesktop = true;
						}
					}

					if ( 'tablet' === currentDeviceMode && ! this.initTablet ) {
						if ( this.initDesktop ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initDesktop = false;
						}

						if ( this.initMobile ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initMobile = false;
						}

						if ( DeSticky.getStickySectionsTablet[0] ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								if ( DeSticky.getStickySectionsTablet[i+1] ) {
									options.stopper = DeSticky.getStickySectionsTablet[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initTablet = true;
						}
					}

					if ( 'mobile' === currentDeviceMode && ! this.initMobile ) {
						if ( this.initDesktop ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initDesktop = false;
						}

						if ( this.initTablet ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initTablet = false;
						}

						if ( DeSticky.getStickySectionsMobile[0] ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {

								if ( DeSticky.getStickySectionsMobile[i+1] ) {
									options.stopper = DeSticky.getStickySectionsMobile[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initMobile = true;
						}
					}
				}
			};

			stickySection.init();
		}
	};

	$( window ).on( 'elementor/frontend/init', DeSticky.init );

	var DeStickyTools = {
		debounce: function( threshold, callback ) {
			var timeout;

			return function debounced( $event ) {
				function delayed() {
					callback.call( this, $event );
					timeout = null;
				}

				if ( timeout ) {
					clearTimeout( timeout );
				}

				timeout = setTimeout( delayed, threshold );
			};
		}
	}

}( jQuery, window.elementorFrontend ) );
;
( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

			// elementorFrontend.hooks.addAction( 'frontend/element_ready/section', DeSticky.setStickySection );

			// $( document ).on( 'ready', DeSticky.stickySection );
		},

		elementorColumn: function( $scope ) {
			var $target  = $scope,
				cek = {},
				$window  = $( window ),
				columnId = $target.data( 'id' ),
				editMode = Boolean( elementor.isEditMode() ),
				settings = {},
				stickyInstance = null,
				stickyInstanceOptions = {
					topSpacing: 50,
					bottomSpacing: 50,
					containerSelector: '.elementor-container',
					innerWrapperSelector: '.elementor-column-wrap'
				};

                if ( editMode ) {
                    settings = DeSticky.columnEditorSettings( columnId );
                    if ( 'yes' === settings['de_icon_box'] ) {
                        // $target.addClass( 'de-carousel-tab-active-icon-box' );
                        $target.addClass( 'de-carousel-active' );
                    }else {
                        // $target.removeClass( 'de-carousel-tab-active-icon-box' );
                        $target.removeClass( 'de-carousel-active' );
                    }
                }
            },

            columnEditorSettings: function( columnId ) {
                var editorElements = null,
                    columnData     = {};
    
                if ( ! window.elementor.hasOwnProperty( 'elements' ) ) {
                    return false;
                }
    
                editorElements = window.elementor.elements;
    
                if ( ! editorElements.models ) {
                    return false;
                }
    
                $.each( editorElements.models, function( index, obj ) {
    
                    $.each( obj.attributes.elements.models, function( index, obj ) {
                        if ( columnId == obj.id ) {
                            columnData = obj.attributes.settings.attributes;
                        }
                    } );
    
                } );
    
                return {
                    'de_icon_box': columnData['dethemekit_carousel_tab_active_icon_box'] 
                }
            }
        }

        $( window ).on( 'elementor/frontend/init', DeSticky.init );

        

    }( jQuery, window.elementorFrontend ) );;
( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

		},

		elementorColumn: function( $scope ) {
			var $target  = $scope,
				cek = {},
				$window  = $( window ),
				columnId = $target.data( 'id' ),
				editMode = Boolean( elementor.isEditMode() ),
				settings = {},
				stickyInstance = null,
				stickyInstanceOptions = {
					topSpacing: 50,
					bottomSpacing: 50,
					containerSelector: '.elementor-container',
					innerWrapperSelector: '.elementor-column-wrap'
				};

                if ( editMode ) {
                    settings = DeSticky.columnEditorSettings( columnId );
                    if ( 'yes' === settings['de_column1'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_1 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_1') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_1 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column2'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_2 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_2') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_2 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column3'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_3 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_3') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_3 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column4'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_4 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_4') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_4 de-carousel-active' );
                        }
                    }
                }
            },

            columnEditorSettings: function( columnId ) {
                var editorElements = null,
                    columnData     = {};
    
                if ( ! window.elementor.hasOwnProperty( 'elements' ) ) {
                    return false;
                }
    
                editorElements = window.elementor.elements;
    
                if ( ! editorElements.models ) {
                    return false;
                }
    
                $.each( editorElements.models, function( index, obj ) {
    
                    $.each( obj.attributes.elements.models, function( index, obj ) {
                        if ( columnId == obj.id ) {
                            columnData = obj.attributes.settings.attributes;
                        }
                    } );
    
                } );
    
                return {
                    'de_column1': columnData['dethemekit_carousel_tab_active1'] || false,
                    'de_column2': columnData['dethemekit_carousel_tab_active2'] || false,
                    'de_column3': columnData['dethemekit_carousel_tab_active3'] || false,
                    'de_column4': columnData['dethemekit_carousel_tab_active4'] || false
                }
            }
        }

        $( window ).on( 'elementor/frontend/init', DeSticky.init );

        

    }( jQuery, window.elementorFrontend ) );;
function animateCircle({percentage:e=100,onScroll:t=!1,speed:i=1,element:n,size:o=50,backgroundClr:r="white",color:l="blue",strokeWidth:a=5}){let c=Math.ceil(document.body.scrollHeight-window.innerHeight);if(!n)return void console.error("Invalid element:",n);let d=n,h=d.getContext("2d"),s=2*o+a,g=s,m=s/2,u=g/2;d.width=s,d.height=g;let k=()=>{let n=t?Math.floor(window.pageYOffset/c*100):e>100?100:e+i;h.clearRect(0,0,s,g),h.beginPath(),h.lineWidth=a,h.arc(m,u,o,0,2*Math.PI),h.strokeStyle=r,h.stroke(),(e=>{h.beginPath(),h.lineWidth=a,h.strokeStyle=l,h.arc(m,u,o,0,2*Math.PI*e/100),h.stroke()})(n),(!t||n<e)&&requestAnimationFrame(k)};t?document.addEventListener("scroll",k):k()};
!function(e,t){"use strict";window.ElementsKit_Helper={},ElementsKit_Helper.setURLHash=function(t,n,i){if(void 0===t||!("ekit_hash_change"in t))return;void 0===i&&(i="ekit-handler-id");let s="#"+e(n).data(i);window.location.hash=s},ElementsKit_Helper.ajaxLoading=function(n,i){if(n.hasClass("ekit-template-ajax--yes")){var s=i.find("[data-ajax-post-id]");s.hasClass("is--loaded")||e.ajax({type:"POST",url:ekit_config.ajaxurl,data:{action:"ekit_widgetarea_content",nonce:ekit_config.nonce,post_id:s.data("ajax-post-id")},success:function(n){s.addClass("is--loaded").html(n),s.find("[data-widget_type]").each((function(){var n=e(this);t.hooks.doAction("frontend/element_ready/"+n.data("widget_type"),n)}))}})}},ElementsKit_Helper.triggerClickOnEvent=function(t,n){"click"!==t&&n.on(t,(function(){e(this).trigger("click")}))},ElementsKit_Helper.megaMenuAjaxLoad=function(t){let n=t.find(".elementskit-submenu-indicator"),i=t.find(".megamenu-ajax-load"),s=t.closest(".ekit-wid-con").data("responsive-breakpoint");i.length&&!t.hasClass("ekit-ajax-loading")&&e.ajax({url:window.elementskit.resturl+"megamenu/megamenu_content",type:"get",data:{id:i.data("id")},beforeSend:function(){t.addClass("ekit-ajax-loading"),n.toggleClass("icon icon-down-arrow1 eicon-loading eicon-animation-spin"),e(document).width()<=Number(s)?n.css({border:"none"}):n.css({"padding-right":0,"margin-right":"5px"})},success:function(s){t.removeClass("ekit-ajax-loading"),i.replaceWith(s),n.toggleClass("eicon-loading eicon-animation-spin icon icon-down-arrow1").removeAttr("style"),t.find(".elementor-element").each((function(){elementorFrontend.elementsHandler.runReadyTrigger(e(this))}))}})},ElementsKit_Helper.swiper=function(e,n){var i=e.get(0);if("function"!=typeof Swiper){return new(0,t.utils.swiper)(i,n).then((e=>e))}{const e=new Swiper(i,n);return Promise.resolve(e)}};let n={init:function(){var i={"elementskit-accordion.default":n.Accordion,"elementskit-blog-posts.default":n.BlogPosts,"elementskit-countdown-timer.default":n.Countdown_Timer,"elementskit-client-logo.default":n.Client_Logo,"elementskit-testimonial.default":n.Testimonial_Slider,"elementskit-image-comparison.default":n.Image_Comparison,"elementskit-progressbar.default":n.Progressbar,"elementskit-piechart.default":n.Piechart,"elementskit-funfact.default":n.Funfact,"elementskit-post-tab.default":n.PostTab,"elementskit-header-search.default":n.Header_Search,"elementskit-header-offcanvas.default":n.Header_Off_Canvas,"ekit-nav-menu.default":n.Nav_Menu,"elementskit-team.default":n.Team,"elementskit-simple-tab.default":n.Tab,"elementskit-back-to-top.default":n.Back_To_Top,"elementskit-image-accordion.default":n.Image_Accordion,"elementskit-video.default":n.Video};e.each(i,(function(e,n){t.hooks.addAction("frontend/element_ready/"+e,n)}))},Accordion:function(t){t.on("click",".elementskit-card-header",(function(t){e(this).parent().toggleClass("active"),e(this).parent().siblings().removeClass("active")}))},Image_Accordion:function(t){const n=t.find(".elementskit-single-image-accordion");let i;for(let t=0;t<n.length;t++){let s=n[t];"yes"===e(s).data("active")&&(i=n[t])}t.on("click",".ekit-image-accordion-item",(function(t){let n=e(this),s=n.data("link"),o=n.data("behavior"),a=n.find("a, a *"),l=e(t.target).is(a),r=s?.is_external?s.is_external:"_self";if("hover"===o||i===this)!l&&s?.url&&window.open(s.url,r);else{if(!n.hasClass("item-opened"))return i="",e(this).closest(".elementskit-image-accordion-wraper").find(".ekit-image-accordion-item").removeClass("item-opened"),void n.addClass("item-opened");if(n.hasClass("item-opened"))return void(!l&&s?.url&&window.open(s.url,r))}}))},Nav_Menu:function(t){if(t.find(".elementskit-megamenu-has").length>0){let n=t.find(".ekit-wid-con").data("responsive-breakpoint"),i=t.find(".elementskit-megamenu-has"),s=t.find(".elementskit-menu-container").outerHeight();e(window).on("resize",(function(){t.find(".elementskit-megamenu-panel").css({top:s})})).trigger("resize"),i.on("mouseenter",(function(){let t=e(this).data("vertical-menu"),i=e(this).children(".elementskit-megamenu-panel");if(e(this).hasClass("elementskit-dropdown-menu-full_width")&&e(this).hasClass("top_position")){let t=Math.floor(e(this).position().left-e(this).offset().left),n=e(this);n.find(".elementskit-megamenu-panel").css("max-width",e(window).width()),e(window).on("resize",(function(){n.find(".elementskit-megamenu-panel").css({left:t+"px"})})).trigger("resize")}!e(this).hasClass("elementskit-dropdown-menu-full_width")&&e(this).hasClass("top_position")&&e(this).on({mouseenter:function(){0===e(".default_menu_position").length&&e(this).parents(".elementor-section-wrap").addClass("default_menu_position")},mouseleave:function(){0!==e(".default_menu_position").length&&e(this).parents(".elementor-section-wrap").removeClass("default_menu_position")}}),t&&t!==undefined?"string"==typeof t?/^[0-9]/.test(t)?e(window).on("resize",(function(){i.css({width:t}),e(document).width()>Number(n)||i.removeAttr("style")})).trigger("resize"):e(window).on("resize",(function(){i.css({width:t+"px"}),e(document).width()>Number(n)||i.removeAttr("style")})).trigger("resize"):i.css({width:t+"px"}):e(window).on("resize",(function(){i.css({width:t+"px"}),e(document).width()>Number(n)||i.removeAttr("style")})).trigger("resize")})),i.trigger("mouseenter")}if(t.find(".ekit-nav-dropdown-click").length>0){let n=t.find(".ekit-wid-con").data("responsive-breakpoint");t.on("click",".elementskit-dropdown-has > a",(function(i){if(i.preventDefault(),e(document).width()<Number(n))return;let s=e(this).parent(),o=e(this).parents(".elementskit-dropdown-has"),a=s.find(">.elementskit-dropdown, >.elementskit-megamenu-panel");t.find(".elementskit-dropdown-has").not(o).find(">.elementskit-dropdown, >.elementskit-megamenu-panel").removeClass("ekit-dropdown-open-onclick"),a.toggleClass("ekit-dropdown-open-onclick")})),e(window).on("resize",(function(){e(document).width()<Number(n)&&t.find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")})),e(document).on("click",(function(n){e(n.target).closest(".elementskit-dropdown-has").length||t.find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")})),e(window).on("sticky:stick sticky:unstick",(t=>{e(t.target).find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick"),e(t.target).next().find(".ekit-dropdown-open-onclick").removeClass("ekit-dropdown-open-onclick")}))}t.find(".megamenu-ajax-load").length>0&&(t.find(".ekit-nav-dropdown-hover").on("mouseenter",".elementskit-megamenu-has",(function(t){ElementsKit_Helper.megaMenuAjaxLoad(e(this))})),t.find(".ekit-nav-dropdown-click").on("click",".elementskit-megamenu-has",(function(t){ElementsKit_Helper.megaMenuAjaxLoad(e(this))})))},Progressbar:function(e){var t=e.find(".single-skill-bar"),n=t.find(".skill-track"),i=t.find(".number-percentage"),s=i.data("value"),o=i.data("animation-duration")||300;t.elementorWaypoint((function(){i.animateNumbers(s,!0,o),n.animate({width:s+"%"},o)}),{offset:"100%"})},Funfact:function(e){var t=e.find(".elementskit-funfact"),n=t.find(".number-percentage"),i=n.data("style"),s=n.data("value"),o=n.data("animation-duration");t.elementorWaypoint((function(){"static"==i?n.animateNumbers(s,!0,o):new Odometer({el:n[0],value:0,duration:o}).update(s)}),{offset:"100%"})},BlogPosts:function(e){var t=e.find(".post-items");t.data("masonry-config")&&t.imagesLoaded((function(){t.masonry()}))},Countdown_Timer:function(t){var n=t.find(".ekit-countdown"),i=n.data(),s="elementskit-inner-container ekit-countdown-inner",o="elementskit-inner-container",a="elementskit-timer-content ekit-countdown-inner";if(n.length){switch(n[0].classList[0]){case"elementskit-countdown-timer":default:i.markup='<div class="elementskit-timer-container elementskit-days"><div class="'+s+'"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%-D </span><span class="elementskit-timer-title">'+i.dateEkitDay+'</span></div></div></div><div class="elementskit-timer-container elementskit-hours"><div class="'+s+'"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%H </span><span class="elementskit-timer-title">'+i.dateEkitHour+'</span></div></div></div><div class="elementskit-timer-container elementskit-minutes"><div class="'+s+'"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%M </span><span class="elementskit-timer-title">'+i.dateEkitMinute+'</span></div></div></div><div class="elementskit-timer-container elementskit-seconds"><div class="'+s+'"><div class="elementskit-timer-content"><span class="elementskit-timer-count">%S </span><span class="elementskit-timer-title">'+i.dateEkitSecond+"</span></div></div></div>";break;case"elementskit-countdown-timer-3":i.markup='<div class="elementskit-timer-container elementskit-days"><div class="'+a+'"><div class="'+o+'"><span class="elementskit-timer-count">%-D </span><span class="elementskit-timer-title">'+i.dateEkitDay+'</span></div></div></div><div class="elementskit-timer-container elementskit-hours"><div class="'+a+'"><div class="'+o+'"><span class="elementskit-timer-count">%H </span><span class="elementskit-timer-title">'+i.dateEkitHour+'</span></div></div></div><div class="elementskit-timer-container elementskit-minutes"><div class="'+a+'"><div class="'+o+'"><span class="elementskit-timer-count">%M </span><span class="elementskit-timer-title">'+i.dateEkitMinute+'</span></div></div></div><div class="elementskit-timer-container elementskit-seconds"><div class="'+a+'"><div class="'+o+'"><span class="elementskit-timer-count">%S </span><span class="elementskit-timer-title">'+i.dateEkitSecond+"</span></div></div></div>"}n.theFinalCountdown(i.ekitCountdown,(function(e){this.innerHTML=e.strftime(i.markup)})).on("finish.countdown",(function(){this.innerHTML=i.finishTitle+"<br />"+i.finishContent,"elementskit-countdown-timer-4"===this.classList[0]&&e(this).addClass("elementskit-coundown-finish")}))}let l=t.find(".elementskit-flip-clock"),r=l.data();if(l.length){let e=[r.dateEkitWeek,r.dateEkitDay,r.dateEkitHour,r.dateEkitMinute,r.dateEkitSecond],t=["elementskit-wks","elementskit-days","elementskit-hrs","elementskit-mins","elementskit-secs"],n="";e.forEach((function(e,i){n+='<div class="elementskit-time '+t[i]+' ekit-countdown-inner"><span class="elementskit-count elementskit-curr elementskit-top"></span><span class="elementskit-count elementskit-next elementskit-top"></span><span class="elementskit-count elementskit-next elementskit-bottom"></span><span class="elementskit-count elementskit-curr elementskit-bottom"></span><span class="elementskit-label">'+e+"</span></div>"})),l.html(n);let i=l.children(".elementskit-mins"),s=l.children(".elementskit-secs"),o=l.children(".elementskit-hrs"),a=l.children(".elementskit-days"),d=l.children(".elementskit-wks"),c={s:"",m:"",h:"",d:"",w:""},m=function(e,t,n){e!==t&&(e=1===e.toString().length?"0"+e:e,t=1===t.toString().length?"0"+t:t,n.removeClass("elementskit-flip"),n.children(".elementskit-curr").text(e),n.children(".elementskit-next").text(t),setTimeout((function(e){e.addClass("elementskit-flip")}),50,n))};l.theFinalCountdown(r.ekitCountdown,(function(e){m(c.s,e.offset.seconds,s),m(c.m,e.offset.minutes,i),m(c.h,e.offset.hours,o),m(c.d,e.offset.days,a),m(c.w,e.offset.weeks,d),c.s=e.offset.seconds,c.m=e.offset.minutes,c.h=e.offset.hours,c.d=e.offset.days,c.w=e.offset.weeks})).on("finish.countdown",(function(){this.innerHTML=r.finishTitle+"<br/>"+r.finishContent}))}},Client_Logo:function(e){var n=e.find(".elementskit-clients-slider").data("config");n.arrows&&(n.navigation={prevEl:e.find(".swiper-button-prev").get(0),nextEl:e.find(".swiper-button-next").get(0)}),n.dots&&(n.pagination={el:e.find(".swiper-pagination").get(0),type:"bullets",clickable:!0});let i=e.find(`.${t.config.swiperClass}`);ElementsKit_Helper.swiper(i,n).then((function(e){n.autoplay&&n.pauseOnHover&&i.hover((function(){e.autoplay.stop()}),(function(){e.autoplay.start()}))}))},Testimonial_Slider:function(e){var n=e.find(".elementskit-testimonial-slider").data("config");n.arrows&&(n.navigation={prevEl:e.find(".swiper-button-prev").get(0),nextEl:e.find(".swiper-button-next").get(0)}),n.dots&&(n.pagination={el:e.find(".swiper-pagination").get(0),type:"bullets",clickable:!0});let i=e.find(`.${t.config.swiperClass}`);ElementsKit_Helper.swiper(i,n).then((function(e){n.autoplay&&n.pauseOnHover&&i.hover((function(){e.autoplay.stop()}),(function(){e.autoplay.start()}))}))},Image_Comparison:function(e){var t=e.find(".elementskit-image-comparison");t.imagesLoaded((function(){var e={orientation:t.hasClass("image-comparison-container-vertical")?"vertical":"horizontal",before_label:t.data("label_before"),after_label:t.data("label_after"),default_offset_pct:t.data("offset"),no_overlay:t.data("overlay"),move_slider_on_hover:t.data("move_slider_on_hover"),click_to_move:t.data("click_to_move")};t.twentytwenty(e)}))},Piechart:function(t){var n=t.find(".colorful-chart"),i=n.data(),s={barColor:i.color,lineWidth:i.linewidth,trackColor:i.barbg,gradientChart:!1};"pie_color_style"in i&&(s={gradientChart:!0,barColor:i.gradientcolor1,gradientColor1:i.gradientcolor2,gradientColor2:i.gradientcolor1,lineWidth:i.linewidth,trackColor:i.barbg});var o=e.extend({barColor:"#666666",gradientColor1:"",gradientColor2:"",scaleColor:"transparent",lineWidth:20,size:150,trackColor:"#f7f7f7",lineCap:"round",gradientChart:!1},s);n.elementorWaypoint((function(){e(this.element).easyPieChart({barColor:!0===o.gradientChart?function(e){var t=this.renderer.getCtx(),n=this.renderer.getCanvas(),i=t.createLinearGradient(0,0,n.width,0);return i.addColorStop(0,o.gradientColor1),i.addColorStop(1,o.gradientColor2),i}:o.barColor,scaleColor:o.scaleColor,trackColor:o.trackColor,lineCap:o.lineCap,size:o.size,lineWidth:o.lineWidth})}),{offset:"100%"})},PostTab:function(t){var n=t.hasClass("is-click-yes")?"click":"mouseenter",i=t.find(".tab__list__item"),s=t.find(".tabItem");t.on(n,".tab__list__item",(function(){var t=e(this),n=s.eq(t.index());i.add(s).removeClass("active"),t.add(n).addClass("active")}))},Header_Search:function(t){var n=t.find(".ekit_navsearch-button"),i=e("body");n.magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,prependTo:n.parent(".ekit-wid-con"),callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom ekit-promo-popup"},open:function(){i.css("overflow","hidden"),i.find(".mfp-close").addClass("ekit-popup-close")},close:function(){i.css("overflow","auto"),i.find(".mfp-close").removeClass("ekit-popup-close")}}})},Team:function(e){var t=e.find(".ekit-team-popup");t.magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,prependTo:e.find(".ekit-wid-con"),showCloseBtn:!1,callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom ekit-promo-popup ekit-team-modal"}}}),e.find(".ekit-team-modal-close").on("click",(function(){t.magnificPopup("close")}))},Tab:function(e){var t=e.find('[data-ekit-toggle="tab"]'),n=t.data("ekit-toggle-trigger"),i=e.data("settings");ElementsKit_Helper.triggerClickOnEvent(n,t),t.on("shown.bs.tab",(function(){ElementsKit_Helper.setURLHash(i,this,"ekit-handler-id")}))},Header_Off_Canvas:function(t){var n=t.find(".ekit-sidebar-group"),i=t.find(".ekit_offcanvas-sidebar, .ekit_close-side-widget, .ekit-overlay"),s=t.find(".ekit-sidebar-group").data("settings");i.on("click",(function(t){t.preventDefault(),n.toggleClass("ekit_isActive"),"yes"===s?.disable_bodyscroll&&(n.hasClass("ekit_isActive")?e("body").css("overflow","hidden"):e("body").css("overflow",""))}))},Back_To_Top:function(t){const n=t.find(".ekit-btt__button"),{offset_top:i,show_after:s,show_scroll:o,style:a,foreground:l,background:r}=t.find(".ekit-btt").data("settings");if("progress_indicator"===a){const e="#canvas-"+t.find(".progress_indicator .progress_indicator canvas").data("canvas"),n=t.find(e).get(0);animateCircle({element:n,size:100,percentage:100,onScroll:!0,speed:50,backgroundClr:r,color:l,strokeWidth:10})}n.on("click",(e=>{e.target;var t;t=i,window.scrollTo({left:0,top:t,behavior:"smooth"})})),"yes"===o&&e(document).on("scroll",(()=>{(e=>{let t=n.hasClass("ekit-tt-show");e&&!t&&n.addClass("ekit-tt-show"),!e&&t&&n.removeClass("ekit-tt-show")})(Math.ceil(window.pageYOffset)>s+i)}))},Video:function(t){var n=t.find(".video-content"),i=n.find(".ekit-video-popup"),s=n.data("video-player"),o=n.data("video-setting");if(i.length>0){const a={type:o.videoType,mainClass:o.videoClass,removalDelay:160,preloader:!0,fixedContentPos:!1,callbacks:{open:function(){e("body").find(".mfp-close").addClass("ekit-popup-close"),window.dispatchEvent(new Event("resize"))},close:function(){e("body").find(".mfp-close").removeClass("ekit-popup-close"),t.find("video").each((function(){this.pause()}))}}};"iframe"===o.videoType&&(a.iframe={markup:'<div class="mfp-iframe-scaler"><div class="mfp-close ekit-popup-close"></div><iframe class="mfp-iframe"  frameborder="0" allowfullscreen></iframe></div>',patterns:{youtube:{index:"https://youtube.com/",id:"v=",src:"%id%"}}}),n.find("video").mediaelementplayer({features:s,videoVolume:o.videoVolume,startVolume:o.startVolume,stretching:"responsive",enableAutosize:!0,videoWidth:"100%",videoHeight:"100%"}),i.magnificPopup(a)}},rememberTab:function(){if(!window.location.hash)return;let t='[data-ekit-handler-id="'+window.location.hash.split("?")[0].substring(1)+'"]';e(t).tab("show")},load:function(){n.rememberTab()},hash:function(){n.rememberTab()}};e(window).on("elementor/frontend/init",n.init).on("load",n.load).on("hashchange",n.hash)}(jQuery,window.elementorFrontend),function(e){"use strict";e.fn.animateNumbers=function(t,n,i,s){return this.each((function(){var o=e(this),a=parseInt(o.text().replace(/,/g,""),10);n=n===undefined||n,e({value:a}).animate({value:t},{duration:i===undefined?500:i,easing:s===undefined?"swing":s,step:function(){o.text(Math.floor(this.value)),n&&o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(o.text(),10)!==t&&(o.text(t),n&&o.text(o.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})}))},e((function(){if(e("#wp-admin-bar-elementor_edit_page-default").length>0){let t=e("#wp-admin-bar-elementor_edit_page-default").children("li");e(t).map((function(t,n){var i=e(n).find(".elementor-edit-link-title");-1!==i.text().indexOf("dynamic-content-")&&i.parent().parent().remove()}))}}))}(jQuery);;
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},t=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],r={CSS:{},springs:{}};function a(n,e,t){return Math.min(Math.max(n,e),t)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return i.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(t){return!n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var t=c(n),o=a(i.und(t[0])?1:t[0],.1,100),u=a(i.und(t[1])?100:t[1],.1,100),s=a(i.und(t[2])?10:t[2],.1,100),f=a(i.und(t[3])?0:t[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var t=e?e*n/1e3:n;return t=d<1?Math.exp(-t*d*l)*(v*Math.cos(p*t)+h*Math.sin(p*t)):(v+h*t)*Math.exp(-t*l),0===n||1===n?n:1-t}return e?g:function(){var e=r.springs[n];if(e)return e;for(var t=0,a=0;;)if(1===g(t+=1/6)){if(++a>=16)break}else a=0;var o=t*(1/6)*1e3;return r.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function t(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((t(e,o)*n+r(e,o))*n+a(e))*n}function u(n,e,o){return 3*t(e,o)*n*n+2*r(e,o)*n+a(e)}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(t!==r||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,t,a);return function(n){return t===r&&a===i?n:0===n||1===n?n:o(f(n),r,i)}}function f(r){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=r;++s)i+=e;var l=i+(r-c[--s])/(c[s+1]-c[s])*e,d=u(l,t,a);return d>=.001?function(n,e,t,r){for(var a=0;a<4;++a){var i=u(e,t,r);if(0===i)return e;e-=(o(e,t,r)-n)/i}return e}(r,l,t,a):0===d?l:function(n,e,t,r,a){for(var u,i,c=0;(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(r,i,i+e,t,a)}}}(),v=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=a(n,1,10),r=a(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},l["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},l["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),l);function h(n,e){if(i.fnc(n))return n;var t=n.split("(")[0],r=v[t],a=c(n);switch(t){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(r,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<t;o++)if(o in n){var u=n[o];e.call(r,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function M(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){var t=x(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function k(n,e){var t=x(n);for(var r in e)t[r]=i.und(n[r])?e[r]:n[r];return t}function O(n){return i.rgb(n)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+t[1]+",1)":e:i.hex(n)?(r=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==u)e=t=r=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),t=s(l,f,o),r=s(l,f,o-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+c+")"}(n):void 0;var e,t,r,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function P(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function I(n,e){return n.getAttribute(e)}function D(n,e,t){if(M([t,"deg","rad","turn"],C(e)))return e;var a=r.CSS[e+t];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+t;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return r.CSS[e+t]=s,s}function B(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?D(n,a,t):a}}function T(n,e){return i.dom(n)&&!i.inp(n)&&(!i.nil(I(n,e))||i.svg(n)&&n[e])?"attribute":i.dom(n)&&M(t,e)?"transform":i.dom(n)&&"transform"!==e&&B(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function F(n,e,t,r){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return t&&(t.transforms.list.set(e,i),t.transforms.last=e),r?D(n,i,r):i}function A(n,e,t,r){switch(T(n,e)){case"transform":return F(n,e,r,t);case"css":return B(n,e,t);case"attribute":return I(n,e);default:return n[e]||0}}function N(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function S(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var t=C(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function L(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function j(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var o=t.getItem(a);a>0&&(r+=L(e,o)),e=o}return r}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*I(o,"r");case"rect":return 2*I(a=n,"width")+2*I(a,"height");case"line":return L({x:I(r=n,"x1"),y:I(r,"y1")},{x:I(r,"x2"),y:I(r,"y2")});case"polyline":return j(n);case"polygon":return t=(e=n).points,j(e)+L(t.getItem(t.numberOfItems-1),t.getItem(0))}var e,t,r,a,o}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),o=I(r,"viewBox"),u=a.width,c=a.height,s=t.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:u,h:c,vW:s[2],vH:s[3]}}function V(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),o=r(),u=r(-1),i=r(1),c=t?1:a.w/a.vW,s=t?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=S(i.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:i.str(n)||e?r.split(t):[]}}function W(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,t){return t.indexOf(n)===e})}function X(n){var e=W(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:E(n)}}})}function Y(n,e){var t=x(e);if(/^spring/.test(t.easing)&&(t.duration=s(t.easing)),i.arr(n)){var r=n.length;2===r&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(t.duration=e.duration/r)}var a=i.arr(n)?n:[n];return a.map(function(n,t){var r=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(r.delay)&&(r.delay=t?0:e.delay),i.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return k(n,t)})}function Z(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),t={},r=function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)i.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})},a=0;a<e.length;a++)r(a);return t}(r),e)),e)i.key(a)&&t.push({name:a,tweens:Y(e[a],n)});return t}function G(n,e){var t;return n.tweens.map(function(r){var a=function(n,e){var t={};for(var r in n){var a=P(n[r],e);i.arr(a)&&1===(a=a.map(function(n){return P(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=A(e.target,n.name,c,e),f=t?t.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=$(l,p),a.to=$(N(u,l),p),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=h(a.easing,a.duration),a.isPath=i.pth(o),a.isPathTargetInsideSVG=a.isPath&&i.svg(e.target),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),t=a,a})}var Q={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var o="";r.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function z(n,e){X(n).forEach(function(n){for(var t in e){var r=P(e[t],n),a=n.target,o=C(r),u=A(a,t,o,n),i=N(S(r,o||C(u)),u),c=T(a,t);Q[c](a,t,i,n.transforms,!0)}})}function _(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var t=T(n.target,e.name);if(t){var r=G(e,n),a=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function R(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var J=0;var K=[],U=function(){var n;function e(t){for(var r=K.length,a=0;a<r;){var o=K[a];o.paused?(K.splice(a,1),r--):(o.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){en.suspendWhenDocumentHidden&&(nn()?n=cancelAnimationFrame(n):(K.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||nn()&&en.suspendWhenDocumentHidden||!(K.length>0)||(n=requestAnimationFrame(e))}}();function nn(){return!!document&&document.hidden}function en(t){void 0===t&&(t={});var r,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,v,h,g,y,b,M=(d=w(n,l=t),p=w(e,l),v=Z(p,l),h=X(l.targets),g=_(h,v),y=R(g,p),b=J,J++,k(d,{id:b,children:[],animatables:h,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(M);function x(){var n=M.direction;"alternate"!==n&&(M.direction="normal"!==n?"normal":"reverse"),M.reversed=!M.reversed,r.forEach(function(n){return n.reversed=M.reversed})}function O(n){return M.reversed?M.duration-n:n}function C(){o=0,u=O(M.currentTime)*(1/en.speed)}function P(n,e){e&&e.seek(n-e.timelineOffset)}function I(n){for(var e=0,t=M.animations,r=t.length;e<r;){var o=t[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,v=[],h=s.to.numbers.length,g=void 0,y=0;y<h;y++){var b=void 0,x=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?V(s.value,l*x,s.isPathTargetInsideSVG):w+l*(x-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),v.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],P=v[O];isNaN(P)||(g+=C?P+C:P+" ")}}else g=v[0];Q[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function D(n){M[n]&&!M.passThrough&&M[n](M)}function B(n){var e=M.duration,t=M.delay,l=e-M.endDelay,d=O(n);M.progress=a(d/e*100,0,100),M.reversePlayback=d<M.currentTime,r&&function(n){if(M.reversePlayback)for(var e=c;e--;)P(n,r[e]);else for(var t=0;t<c;t++)P(n,r[t])}(d),!M.began&&M.currentTime>0&&(M.began=!0,D("begin")),!M.loopBegan&&M.currentTime>0&&(M.loopBegan=!0,D("loopBegin")),d<=t&&0!==M.currentTime&&I(0),(d>=l&&M.currentTime!==e||!e)&&I(e),d>t&&d<l?(M.changeBegan||(M.changeBegan=!0,M.changeCompleted=!1,D("changeBegin")),D("change"),I(d)):M.changeBegan&&(M.changeCompleted=!0,M.changeBegan=!1,D("changeComplete")),M.currentTime=a(d,0,e),M.began&&D("update"),n>=e&&(u=0,M.remaining&&!0!==M.remaining&&M.remaining--,M.remaining?(o=i,D("loopComplete"),M.loopBegan=!1,"alternate"===M.direction&&x()):(M.paused=!0,M.completed||(M.completed=!0,D("loopComplete"),D("complete"),!M.passThrough&&"Promise"in window&&(s(),f(M)))))}return M.reset=function(){var n=M.direction;M.passThrough=!1,M.currentTime=0,M.progress=0,M.paused=!0,M.began=!1,M.loopBegan=!1,M.changeBegan=!1,M.completed=!1,M.changeCompleted=!1,M.reversePlayback=!1,M.reversed="reverse"===n,M.remaining=M.loop,r=M.children;for(var e=c=r.length;e--;)M.children[e].reset();(M.reversed&&!0!==M.loop||"alternate"===n&&1===M.loop)&&M.remaining++,I(M.reversed?M.duration:0)},M._onDocumentVisibility=C,M.set=function(n,e){return z(n,e),M},M.tick=function(n){i=n,o||(o=i),B((i+(u-o))*en.speed)},M.seek=function(n){B(O(n))},M.pause=function(){M.paused=!0,C()},M.play=function(){M.paused&&(M.completed&&M.reset(),M.paused=!1,K.push(M),C(),U())},M.reverse=function(){x(),M.completed=!M.reversed,C()},M.restart=function(){M.reset(),M.play()},M.remove=function(n){rn(W(n),M)},M.reset(),M.autoplay&&M.play(),M}function tn(n,e){for(var t=e.length;t--;)M(n,e[t].animatable.target)&&e.splice(t,1)}function rn(n,e){var t=e.animations,r=e.children;tn(n,t);for(var a=r.length;a--;){var o=r[a],u=o.animations;tn(n,u),u.length||o.children.length||r.splice(a,1)}t.length||r.length||e.pause()}return en.version="3.2.1",en.speed=1,en.suspendWhenDocumentHidden=!0,en.running=K,en.remove=function(n){for(var e=W(n),t=K.length;t--;)rn(e,K[t])},en.get=A,en.set=z,en.convertPx=D,en.path=function(n,e){var t=i.str(n)?g(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},en.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},en.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?h(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,v=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var h=0;h<i;h++){if(a){var b=s?(a[0]-1)/2:u%a[0],M=s?(a[1]-1)/2:Math.floor(u/a[0]),x=b-h%a[0],w=M-Math.floor(h/a[0]),k=Math.sqrt(x*x+w*w);"x"===o&&(k=-x),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-h));y=Math.max.apply(Math,m)}r&&(m=m.map(function(n){return r(n/y)*y})),"reverse"===t&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+v}},en.timeline=function(n){void 0===n&&(n={});var t=en(n);return t.duration=0,t.add=function(r,a){var o=K.indexOf(t),u=t.children;function c(n){n.passThrough=!0}o>-1&&K.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(r,w(e,n));f.targets=f.targets||n.targets;var l=t.duration;f.autoplay=!1,f.direction=t.direction,f.timelineOffset=i.und(a)?l:N(a,l),c(t),t.seek(f.timelineOffset);var d=en(f);c(d),u.push(d);var p=R(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},en.easing=h,en.penner=v,en.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},en});;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrollMonitor",[],e):"object"==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),u=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(u=a.watchers.length;u--;)a.watchers[u].recalculateLocation();p=a.documentHeight}}function c(){for(w=a.watchers.length;w--;)a.watchers[w].update();for(w=a.watchers.length;w--;)a.watchers[w].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,u,w;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener):this.item.addEventListener("scroll",this.DOMListener),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t),this.updateAndTriggerWatchers(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=u},function(t,e,i){"use strict";function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)T=t[E],T.callback.call(s,e,s),T.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||w.top,bottom:i.bottom||w.bottom}:this.offsets=w,this.callbacks={};for(var d=0,f=u.length;d<f;d++)s.callbacks[u[d]]=[];this.locked=!1;var m,v,b,I,E,T;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;"none"===i&&(this.watchItem.style.display="");for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,"none"===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,u=s.eventTypes,w=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+u.join(", "));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=u.length;i<o;i++)e.callbacks[u[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=u.length;f<m;f++){var v=u[f];o.prototype[v]=d(v)}t.exports=o}])});
;
let animObjects = [];
let deScrollOptions = [];

class DeScrollOption {
  constructor(classes) {
    var arr_classes = classes.split(' ')

    this.active = false;
    this.animation_preview = false;
    this.editMode = false;
    this.elementWatcher = null;
    this.scrollTop = 0; 
    this.id = '';
    this.transform = 'translateX'; 
    this.distance = '50'; 
    this.duration = '1000', 
    this.direction = 'normal', 
    this.easing = 'linear',
    this.start_animate = 0,
    this.finish_animate = 0,

    this.translateX = false,
    this.translateX_distance = '',

    this.translateY = false,
    this.translateY_distance = '',

		this.rotate = false,
		this.rotate_distance = '',
						
    this.scale = false,
    this.scale_distance = '',
				
    this.skew = false,
    this.skew_distance = '',

    this.run_on_desktop = false,
    this.run_on_tablet = false,
    this.run_on_mobile = false,
    this.run_animation = true,

    jQuery.each(arr_classes, (index, value) => {
      if ( value.search('de_scroll_animation_yes') === 0 ) {
        this.active = true;
      }

      if ( value.search('de_scroll_animation_preview_yes') === 0 ) {
        this.animation_preview = true;
      }

      if ( value.search('elementor-element-edit-mode') === 0 ) {
        this.editMode = true;
      }

      if ( value.length === 25 && value.search('elementor-element-') === 0 ) {
        this.id = value.replace('elementor-element-','')
      }

      if ( value.search('de_scroll_transform_') === 0 ) {
        this.transform = value.replace('de_scroll_transform_','')
      }

      if ( value.search('de_scroll_distance_') === 0 ) {
        this.distance = value.replace('de_scroll_distance_','')
      }

      if ( value.search('de_scroll_start_animate_') === 0 ) {
        this.start_animate = parseInt(value.replace('de_scroll_start_animate_',''))
      }

      if ( value.search('de_scroll_finish_animate_') === 0 ) {
        this.finish_animate = parseInt(value.replace('de_scroll_finish_animate_',''))
      }

      if (this.finish_animate < this.start_animate) {
          this.finish_animate = parseInt(this.start_animate) + 100
      }

      if ( 'de_scroll_translateX_popover_checked' === value ) { this.translateX = true }
      if ( 'de_scroll_translateY_popover_checked' === value ) { this.translateY = true }
      if ( 'de_scroll_rotate_popover_checked' === value ) { this.rotate = true }
      if ( 'de_scroll_scale_popover_checked' === value ) { this.scale = true }
      if ( 'de_scroll_skew_popover_checked' === value ) { this.skew = true }

      if ( value.search('de_scroll_translateX_distance_') === 0 ) {
        this.translateX_distance = value.replace('de_scroll_translateX_distance_','')
      }
      if ( value.search('de_scroll_translateY_distance_') === 0 ) {
        this.translateY_distance = value.replace('de_scroll_translateY_distance_','')
      }
      if ( value.search('de_scroll_rotate_distance_') === 0 ) {
        this.rotate_distance = value.replace('de_scroll_rotate_distance_','')
      }
      if ( value.search('de_scroll_scale_distance_') === 0 ) {
        this.scale_distance = value.replace('de_scroll_scale_distance_','')
      }
      if ( value.search('de_scroll_skew_distance_') === 0 ) {
        this.skew_distance = value.replace('de_scroll_skew_distance_','')
      }
      if ( value.search('de_scroll_animation_on_desktop_yes') === 0 ) {
        this.run_on_desktop = true;
      }
      if ( value.search('de_scroll_animation_on_tablet_yes') === 0 ) {
        this.run_on_tablet = true;
      }
      if ( value.search('de_scroll_animation_on_mobile_yes') === 0 ) {
        this.run_on_mobile = true;
      }
    })

  }
}

class DeScrollAnimationHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_scroll_animation_yes',
                widget_container: '.elementor-widget-container',
            },
            last_known_scroll_position: this.last_known_scroll_position,
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $wrapper: this.$element.find( selectors.wrapper ),
            $widget_container: this.$element.find( selectors.widget_container ),
            $body: this.$element.find( 'body' ),
            $document: this.$element.find( 'document' ),
        };
    }

    onInit() {    
      // console.log(elementorFrontend.config.responsive.breakpoints)
      // console.log(elementorFrontend.config.responsive.activeBreakpoints)
      // console.log(elementorFrontend.config.responsive.breakpoints.mobile.value)
      // console.log('scrollWidth : ' + document.scrollingElement.scrollWidth)

      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            
            var $arr_classes = attributeValue.split(' ')

            var do_animation = false
            var do_animation_preview = false
      
            jQuery.each($arr_classes, (index, value) => {
              if ( value.search('de_scroll_animation_yes') === 0 ) {
                  do_animation = true;
              }

              if ( value.search('de_scroll_animation_preview_yes') === 0 ) {
                do_animation_preview = true;
              }
            })

            if (do_animation) {
                let deScrollOption = new DeScrollOption(attributeValue);
                let animindex = animObjects.length;
                let i;
                for (i = 0; i < deScrollOptions.length; i++) {
                  if ( deScrollOptions[i].id === deScrollOption.id ) {
                    animindex = i;
                    break;
                  }
                }

                let tZ_perspective = 0;

                deScrollOptions[animindex] = new DeScrollOption(attributeValue);

                // reset transform
                var el = document.querySelector(".elementor-element-" + deScrollOption.id + ".de_scroll_animation_yes .elementor-widget-container")

                if (el) {
                  el.setAttribute('style','')
                  // console.log(el)
                }

                // create anim
                animObjects[animindex] = anime({
                  targets: ".elementor-element-" + deScrollOption.id + ".de_scroll_animation_yes .elementor-widget-container",
                  perspective: [tZ_perspective, tZ_perspective],
                  scale: function() {
                    let result = 1;
                    if ( deScrollOption.scale ) {
                      result = deScrollOption.scale_distance;
                    }
                    return result;
                  },
                  translateX: function() {
                    let result = 0;
                    if ( deScrollOption.translateX ) {
                      result = deScrollOption.translateX_distance;
                    }
                    return result;
                  },
                  translateY: function() {
                    let result = 0;
                    if ( deScrollOption.translateY ) {
                      result = deScrollOption.translateY_distance;
                    }
                    return result;
                  },
                  rotate: function() {
                    let result = 0;
                    if ( deScrollOption.rotate ) {
                      result = deScrollOption.rotate_distance;
                    }
                    return result;
                  },
                  skew: function() {
                    let result = 0;
                    if ( deScrollOption.skew ) {
                      result = deScrollOption.skew_distance;
                    }
                    return result;
                  },
                  // delay: function(el, i) {
                  //   return i * 100;
                  // },
                  // elasticity: 200,
                  easing: deScrollOption.easing,
                  direction: "normal",
                  autoplay: false,
                  duration: deScrollOption.duration
                });
            }
          }
        });
      });

      if (this.$element) {
        var elementId = this.$element.context.attributes['data-id'].nodeValue;
        var elementSelector = document.querySelector("[data-id='" + elementId + "']");
        if (elementSelector) {
            observer.observe(elementSelector, {
                attributes: true
            });

            if ( this.$element.context.classList.contains('de_scroll_animation_yes') ) {
              let last_known_scroll_position = 0;
              let ticking = false;
              let animindex = animObjects.length;
              let optionindex = deScrollOptions.length;

              
              deScrollOptions[optionindex] = new DeScrollOption(this.$element.context.className);
              
              let tZ_perspective = 0;

              animObjects[animindex] = anime({
                targets: ".elementor-element-" + deScrollOptions[optionindex].id + ".de_scroll_animation_yes .elementor-widget-container",
                perspective: [tZ_perspective, tZ_perspective],
                scale: function() {
                  let result = 1;
                  if ( deScrollOptions[optionindex].scale ) {
                    result = deScrollOptions[optionindex].scale_distance;
                  }
                  return result;
                },
                translateX: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].translateX ) {
                    result = deScrollOptions[optionindex].translateX_distance;
                  }
                  return result;
                },
                translateY: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].translateY ) {
                    result = deScrollOptions[optionindex].translateY_distance;
                  }
                  return result;
                },
                rotate: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].rotate ) {
                    result = deScrollOptions[optionindex].rotate_distance;
                  }
                  return result;
                },
                skew: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].skew ) {
                    result = deScrollOptions[optionindex].skew_distance;
                  }
                  return result;
                },
                // delay: function(el, i) {
                //   return i * 100;
                // },
                // elasticity: 200,
                easing: deScrollOptions[optionindex].easing,
                autoplay: false,
                duration: deScrollOptions[optionindex].duration
              });

              var elRect = elementSelector.getBoundingClientRect()
              deScrollOptions[optionindex].scrollTop = elRect.y

              document.onscroll = () => { 
                if (!ticking) {
                  window.requestAnimationFrame(function() {
                    var i;
                    for (i = 0; i < animObjects.length; i++) {
                      // last_known_scroll_position = ( document.scrollingElement.scrollTop - deScrollOptions[i].scrollTop ) / window.innerHeight

                      last_known_scroll_position = 0

                      // console.log(document.querySelector(animObjects[i].targets))
                      var scrolledEl = document.querySelector(".elementor-element-" + deScrollOptions[i].id + ".de_scroll_animation_yes .elementor-widget-container")
                      var sTop = 0
                      if (scrolledEl) {
                        var scrollbarHeight = document.scrollingElement.scrollHeight
                        var scrollbarTop = document.scrollingElement.scrollTop
                        
                        var rect = scrolledEl.getBoundingClientRect()
                        sTop = rect.y
                        var sHeight = rect.height 
                        // var wHeight = window.innerHeight - sHeight - 50
                        var wHeight = window.innerHeight

                        // console.log('document.body.clientHeight : ' + document.body.clientHeight)
                        // console.log('window.clientHeight : ' + window.clientHeight)
                        // console.log('window.innerHeight :' + window.innerHeight)
                        // console.log(document.documentElement.offsetHeight)

                        // if ( scrollbarTop === 0 ) {
                        //   last_known_scroll_position = 0
                        // } else if ( sTop <= 50 ) {
                        //   last_known_scroll_position = 100
                        // } else if ( sTop <= wHeight ) {
                        //   if ( sHeight > (.5 * wHeight) ) {
                        //     last_known_scroll_position = ( wHeight - sTop) / sHeight * 100
                        //   } else {
                        //     last_known_scroll_position = ( wHeight - sTop) / wHeight * 100
                        //   }
                        // }

                        

                        if ( scrollbarTop === 0 ) {
                          last_known_scroll_position = 0
                        } else if ( sTop <= wHeight ) {
                          var animHeight = (deScrollOptions[i].finish_animate - deScrollOptions[i].start_animate) * sHeight / 100
                          var animTop = sTop + deScrollOptions[i].start_animate * sHeight / 100
                          last_known_scroll_position = ( wHeight - animTop) / animHeight * 100
                          // if (deScrollOptions[i].id === 'cd08401') {
                          //   console.log('last_known_scroll_position : ' + last_known_scroll_position)
                          //   console.log('wHeight : ' + wHeight)
                          //   console.log('animTop : ' + animTop)
                          //   console.log('start_animate : ' + deScrollOptions[i].start_animate)
                          //   console.log('finish_animate : ' + deScrollOptions[i].finish_animate)
                          //   console.log('sHeight : ' + sHeight)
                          // }
                        }

                      }

                      if (!deScrollOptions[i].run_animation) {
                        last_known_scroll_position = 0
                      }

                      if ( deScrollOptions[i].editMode ) {
                        if ( deScrollOptions[i].animation_preview ) {
                          animObjects[i].seek((last_known_scroll_position / 100) * animObjects[i].duration);
                        }
                      } else {
                        // if ( deScrollOptions[i].id === 'a2d5ac4' ) {
                        //   console.log(sHeight)
                        //   console.log('calc : ' + (last_known_scroll_position / 100) * animObjects[i].duration )
                        // }
                        animObjects[i].seek((last_known_scroll_position / 100) * animObjects[i].duration);
                      }

                      
                      
                    }
                    ticking = false;
                  });
              
                  ticking = true;
                }
              
              }    
            } //if (this.$element.context.classList.contains('de_scroll_animation_yes'))

        }
      }
    }

    bindEvents() {
    }
} //class DeScrollAnimationHandlerClass

jQuery( window ).on( 'elementor/frontend/init', () => {
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeScrollAnimationHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
} );

jQuery( document ).ready( () => {
  de_scroll_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_scroll_init_responsive()
})

function de_scroll_init_responsive() {
  var onDesktop = false
  var onTablet = false
  var onMobile = false
  var docWidth = document.scrollingElement.scrollWidth
  var tabletBreakpoint = elementorFrontend.config.responsive.breakpoints.tablet.value
  var mobileBreakpoint = elementorFrontend.config.responsive.breakpoints.mobile.value

  if ( docWidth > tabletBreakpoint ) {
    onDesktop = true 
  } else if ( docWidth <= mobileBreakpoint ) {
    onMobile = true
  } else {
    onTablet = true
  }

  for (i = 0; i < deScrollOptions.length; i++) {
    deScrollOptions[i].run_animation = false

    if ( onDesktop && deScrollOptions[i].run_on_desktop ) {
      deScrollOptions[i].run_animation = true
    }

    if ( onTablet && deScrollOptions[i].run_on_tablet ) {
      deScrollOptions[i].run_animation = true
    }

    if ( onMobile && deScrollOptions[i].run_on_mobile ) {
      deScrollOptions[i].run_animation = true
    }
  }
};
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
    'use strict';
    
    // Exit early if we're not running in a browser.
    if (typeof window !== 'object') {
      return;
    }
    
    // Exit early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.
    if ('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    
      // Minimal polyfill for Edge 15's lack of `isIntersecting`
      // See: https://github.com/w3c/IntersectionObserver/issues/211
      if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype,
          'isIntersecting', {
          get: function () {
            return this.intersectionRatio > 0;
          }
        });
      }
      return;
    }
    
    
    /**
     * A local reference to the document.
     */
    var document = window.document;
    
    
    /**
     * An IntersectionObserver registry. This registry exists to hold a strong
     * reference to IntersectionObserver instances currently observing a target
     * element. Without this registry, instances without another reference may be
     * garbage collected.
     */
    var registry = [];
    
    
    /**
     * Creates the global IntersectionObserverEntry constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
     * @param {Object} entry A dictionary of instance properties.
     * @constructor
     */
    function IntersectionObserverEntry(entry) {
      this.time = entry.time;
      this.target = entry.target;
      this.rootBounds = entry.rootBounds;
      this.boundingClientRect = entry.boundingClientRect;
      this.intersectionRect = entry.intersectionRect || getEmptyRect();
      this.isIntersecting = !!entry.intersectionRect;
    
      // Calculates the intersection ratio.
      var targetRect = this.boundingClientRect;
      var targetArea = targetRect.width * targetRect.height;
      var intersectionRect = this.intersectionRect;
      var intersectionArea = intersectionRect.width * intersectionRect.height;
    
      // Sets intersection ratio.
      if (targetArea) {
        // Round the intersection ratio to avoid floating point math issues:
        // https://github.com/w3c/IntersectionObserver/issues/324
        this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
      } else {
        // If area is zero and is intersecting, sets to 1, otherwise to 0
        this.intersectionRatio = this.isIntersecting ? 1 : 0;
      }
    }
    
    
    /**
     * Creates the global IntersectionObserver constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
     * @param {Function} callback The function to be invoked after intersection
     *     changes have queued. The function is not invoked if the queue has
     *     been emptied by calling the `takeRecords` method.
     * @param {Object=} opt_options Optional configuration options.
     * @constructor
     */
    function IntersectionObserver(callback, opt_options) {
    
      var options = opt_options || {};
    
      if (typeof callback != 'function') {
        throw new Error('callback must be a function');
      }
    
      if (options.root && options.root.nodeType != 1) {
        throw new Error('root must be an Element');
      }
    
      // Binds and throttles `this._checkForIntersections`.
      this._checkForIntersections = throttle(
          this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
    
      // Private properties.
      this._callback = callback;
      this._observationTargets = [];
      this._queuedEntries = [];
      this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    
      // Public properties.
      this.thresholds = this._initThresholds(options.threshold);
      this.root = options.root || null;
      this.rootMargin = this._rootMarginValues.map(function(margin) {
        return margin.value + margin.unit;
      }).join(' ');
    }
    
    
    /**
     * The minimum interval within which the document will be checked for
     * intersection changes.
     */
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    
    
    /**
     * The frequency in which the polyfill polls for intersection changes.
     * this can be updated on a per instance basis and must be set prior to
     * calling `observe` on the first target.
     */
    IntersectionObserver.prototype.POLL_INTERVAL = null;
    
    /**
     * Use a mutation observer on the root element
     * to detect intersection changes.
     */
    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
    
    
    /**
     * Starts observing a target element for intersection changes based on
     * the thresholds values.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.observe = function(target) {
      var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
        return item.element == target;
      });
    
      if (isTargetAlreadyObserved) {
        return;
      }
    
      if (!(target && target.nodeType == 1)) {
        throw new Error('target must be an Element');
      }
    
      this._registerInstance();
      this._observationTargets.push({element: target, entry: null});
      this._monitorIntersections();
      this._checkForIntersections();
    };
    
    
    /**
     * Stops observing a target element for intersection changes.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.unobserve = function(target) {
      this._observationTargets =
          this._observationTargets.filter(function(item) {
    
        return item.element != target;
      });
      if (!this._observationTargets.length) {
        this._unmonitorIntersections();
        this._unregisterInstance();
      }
    };
    
    
    /**
     * Stops observing all target elements for intersection changes.
     */
    IntersectionObserver.prototype.disconnect = function() {
      this._observationTargets = [];
      this._unmonitorIntersections();
      this._unregisterInstance();
    };
    
    
    /**
     * Returns any queue entries that have not yet been reported to the
     * callback and clears the queue. This can be used in conjunction with the
     * callback to obtain the absolute most up-to-date intersection information.
     * @return {Array} The currently queued entries.
     */
    IntersectionObserver.prototype.takeRecords = function() {
      var records = this._queuedEntries.slice();
      this._queuedEntries = [];
      return records;
    };
    
    
    /**
     * Accepts the threshold value from the user configuration object and
     * returns a sorted array of unique threshold values. If a value is not
     * between 0 and 1 and error is thrown.
     * @private
     * @param {Array|number=} opt_threshold An optional threshold value or
     *     a list of threshold values, defaulting to [0].
     * @return {Array} A sorted list of unique and valid threshold values.
     */
    IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
      var threshold = opt_threshold || [0];
      if (!Array.isArray(threshold)) threshold = [threshold];
    
      return threshold.sort().filter(function(t, i, a) {
        if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
          throw new Error('threshold must be a number between 0 and 1 inclusively');
        }
        return t !== a[i - 1];
      });
    };
    
    
    /**
     * Accepts the rootMargin value from the user configuration object
     * and returns an array of the four margin values as an object containing
     * the value and unit properties. If any of the values are not properly
     * formatted or use a unit other than px or %, and error is thrown.
     * @private
     * @param {string=} opt_rootMargin An optional rootMargin value,
     *     defaulting to '0px'.
     * @return {Array<Object>} An array of margin objects with the keys
     *     value and unit.
     */
    IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
      var marginString = opt_rootMargin || '0px';
      var margins = marginString.split(/\s+/).map(function(margin) {
        var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
        if (!parts) {
          throw new Error('rootMargin must be specified in pixels or percent');
        }
        return {value: parseFloat(parts[1]), unit: parts[2]};
      });
    
      // Handles shorthand.
      margins[1] = margins[1] || margins[0];
      margins[2] = margins[2] || margins[0];
      margins[3] = margins[3] || margins[1];
    
      return margins;
    };
    
    
    /**
     * Starts polling for intersection changes if the polling is not already
     * happening, and if the page's visibility state is visible.
     * @private
     */
    IntersectionObserver.prototype._monitorIntersections = function() {
      if (!this._monitoringIntersections) {
        this._monitoringIntersections = true;
    
        // If a poll interval is set, use polling instead of listening to
        // resize and scroll events or DOM mutations.
        if (this.POLL_INTERVAL) {
          this._monitoringInterval = setInterval(
              this._checkForIntersections, this.POLL_INTERVAL);
        }
        else {
          addEvent(window, 'resize', this._checkForIntersections, true);
          addEvent(document, 'scroll', this._checkForIntersections, true);
    
          if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
            this._domObserver = new MutationObserver(this._checkForIntersections);
            this._domObserver.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          }
        }
      }
    };
    
    
    /**
     * Stops polling for intersection changes.
     * @private
     */
    IntersectionObserver.prototype._unmonitorIntersections = function() {
      if (this._monitoringIntersections) {
        this._monitoringIntersections = false;
    
        clearInterval(this._monitoringInterval);
        this._monitoringInterval = null;
    
        removeEvent(window, 'resize', this._checkForIntersections, true);
        removeEvent(document, 'scroll', this._checkForIntersections, true);
    
        if (this._domObserver) {
          this._domObserver.disconnect();
          this._domObserver = null;
        }
      }
    };
    
    
    /**
     * Scans each observation target for intersection changes and adds them
     * to the internal entries queue. If new entries are found, it
     * schedules the callback to be invoked.
     * @private
     */
    IntersectionObserver.prototype._checkForIntersections = function() {
      var rootIsInDom = this._rootIsInDom();
      var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    
      this._observationTargets.forEach(function(item) {
        var target = item.element;
        var targetRect = getBoundingClientRect(target);
        var rootContainsTarget = this._rootContainsTarget(target);
        var oldEntry = item.entry;
        var intersectionRect = rootIsInDom && rootContainsTarget &&
            this._computeTargetAndRootIntersection(target, rootRect);
    
        var newEntry = item.entry = new IntersectionObserverEntry({
          time: now(),
          target: target,
          boundingClientRect: targetRect,
          rootBounds: rootRect,
          intersectionRect: intersectionRect
        });
    
        if (!oldEntry) {
          this._queuedEntries.push(newEntry);
        } else if (rootIsInDom && rootContainsTarget) {
          // If the new entry intersection ratio has crossed any of the
          // thresholds, add a new entry.
          if (this._hasCrossedThreshold(oldEntry, newEntry)) {
            this._queuedEntries.push(newEntry);
          }
        } else {
          // If the root is not in the DOM or target is not contained within
          // root but the previous entry for this target had an intersection,
          // add a new record indicating removal.
          if (oldEntry && oldEntry.isIntersecting) {
            this._queuedEntries.push(newEntry);
          }
        }
      }, this);
    
      if (this._queuedEntries.length) {
        this._callback(this.takeRecords(), this);
      }
    };
    
    
    /**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */
    IntersectionObserver.prototype._computeTargetAndRootIntersection =
        function(target, rootRect) {
    
      // If the element isn't displayed, an intersection can't happen.
      if (window.getComputedStyle(target).display == 'none') return;
    
      var targetRect = getBoundingClientRect(target);
      var intersectionRect = targetRect;
      var parent = getParentNode(target);
      var atRoot = false;
    
      while (!atRoot) {
        var parentRect = null;
        var parentComputedStyle = parent.nodeType == 1 ?
            window.getComputedStyle(parent) : {};
    
        // If the parent isn't displayed, an intersection can't happen.
        if (parentComputedStyle.display == 'none') return;
    
        if (parent == this.root || parent == document) {
          atRoot = true;
          parentRect = rootRect;
        } else {
          // If the element has a non-visible overflow, and it's not the <body>
          // or <html> element, update the intersection rect.
          // Note: <body> and <html> cannot be clipped to a rect that's not also
          // the document rect, so no need to compute a new intersection.
          if (parent != document.body &&
              parent != document.documentElement &&
              parentComputedStyle.overflow != 'visible') {
            parentRect = getBoundingClientRect(parent);
          }
        }
    
        // If either of the above conditionals set a new parentRect,
        // calculate new intersection data.
        if (parentRect) {
          intersectionRect = computeRectIntersection(parentRect, intersectionRect);
    
          if (!intersectionRect) break;
        }
        parent = getParentNode(parent);
      }
      return intersectionRect;
    };
    
    
    /**
     * Returns the root rect after being expanded by the rootMargin value.
     * @return {Object} The expanded root rect.
     * @private
     */
    IntersectionObserver.prototype._getRootRect = function() {
      var rootRect;
      if (this.root) {
        rootRect = getBoundingClientRect(this.root);
      } else {
        // Use <html>/<body> instead of window since scroll bars affect size.
        var html = document.documentElement;
        var body = document.body;
        rootRect = {
          top: 0,
          left: 0,
          right: html.clientWidth || body.clientWidth,
          width: html.clientWidth || body.clientWidth,
          bottom: html.clientHeight || body.clientHeight,
          height: html.clientHeight || body.clientHeight
        };
      }
      return this._expandRectByRootMargin(rootRect);
    };
    
    
    /**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {Object} rect The rect object to expand.
     * @return {Object} The expanded rect.
     * @private
     */
    IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
      var margins = this._rootMarginValues.map(function(margin, i) {
        return margin.unit == 'px' ? margin.value :
            margin.value * (i % 2 ? rect.width : rect.height) / 100;
      });
      var newRect = {
        top: rect.top - margins[0],
        right: rect.right + margins[1],
        bottom: rect.bottom + margins[2],
        left: rect.left - margins[3]
      };
      newRect.width = newRect.right - newRect.left;
      newRect.height = newRect.bottom - newRect.top;
    
      return newRect;
    };
    
    
    /**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */
    IntersectionObserver.prototype._hasCrossedThreshold =
        function(oldEntry, newEntry) {
    
      // To make comparing easier, an entry that has a ratio of 0
      // but does not actually intersect is given a value of -1
      var oldRatio = oldEntry && oldEntry.isIntersecting ?
          oldEntry.intersectionRatio || 0 : -1;
      var newRatio = newEntry.isIntersecting ?
          newEntry.intersectionRatio || 0 : -1;
    
      // Ignore unchanged ratios
      if (oldRatio === newRatio) return;
    
      for (var i = 0; i < this.thresholds.length; i++) {
        var threshold = this.thresholds[i];
    
        // Return true if an entry matches a threshold or if the new ratio
        // and the old ratio are on the opposite sides of a threshold.
        if (threshold == oldRatio || threshold == newRatio ||
            threshold < oldRatio !== threshold < newRatio) {
          return true;
        }
      }
    };
    
    
    /**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */
    IntersectionObserver.prototype._rootIsInDom = function() {
      return !this.root || containsDeep(document, this.root);
    };
    
    
    /**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */
    IntersectionObserver.prototype._rootContainsTarget = function(target) {
      return containsDeep(this.root || document, target);
    };
    
    
    /**
     * Adds the instance to the global IntersectionObserver registry if it isn't
     * already present.
     * @private
     */
    IntersectionObserver.prototype._registerInstance = function() {
      if (registry.indexOf(this) < 0) {
        registry.push(this);
      }
    };
    
    
    /**
     * Removes the instance from the global IntersectionObserver registry.
     * @private
     */
    IntersectionObserver.prototype._unregisterInstance = function() {
      var index = registry.indexOf(this);
      if (index != -1) registry.splice(index, 1);
    };
    
    
    /**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */
    function now() {
      return window.performance && performance.now && performance.now();
    }
    
    
    /**
     * Throttles a function and delays its execution, so it's only called at most
     * once within a given time period.
     * @param {Function} fn The function to throttle.
     * @param {number} timeout The amount of time that must pass before the
     *     function can be called again.
     * @return {Function} The throttled function.
     */
    function throttle(fn, timeout) {
      var timer = null;
      return function () {
        if (!timer) {
          timer = setTimeout(function() {
            fn();
            timer = null;
          }, timeout);
        }
      };
    }
    
    
    /**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */
    function addEvent(node, event, fn, opt_useCapture) {
      if (typeof node.addEventListener == 'function') {
        node.addEventListener(event, fn, opt_useCapture || false);
      }
      else if (typeof node.attachEvent == 'function') {
        node.attachEvent('on' + event, fn);
      }
    }
    
    
    /**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */
    function removeEvent(node, event, fn, opt_useCapture) {
      if (typeof node.removeEventListener == 'function') {
        node.removeEventListener(event, fn, opt_useCapture || false);
      }
      else if (typeof node.detatchEvent == 'function') {
        node.detatchEvent('on' + event, fn);
      }
    }
    
    
    /**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object} The intersection rect or undefined if no intersection
     *     is found.
     */
    function computeRectIntersection(rect1, rect2) {
      var top = Math.max(rect1.top, rect2.top);
      var bottom = Math.min(rect1.bottom, rect2.bottom);
      var left = Math.max(rect1.left, rect2.left);
      var right = Math.min(rect1.right, rect2.right);
      var width = right - left;
      var height = bottom - top;
    
      return (width >= 0 && height >= 0) && {
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        width: width,
        height: height
      };
    }
    
    
    /**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {Object} The (possibly shimmed) rect of the element.
     */
    function getBoundingClientRect(el) {
      var rect;
    
      try {
        rect = el.getBoundingClientRect();
      } catch (err) {
        // Ignore Windows 7 IE11 "Unspecified error"
        // https://github.com/w3c/IntersectionObserver/pull/205
      }
    
      if (!rect) return getEmptyRect();
    
      // Older IE
      if (!(rect.width && rect.height)) {
        rect = {
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
          left: rect.left,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };
      }
      return rect;
    }
    
    
    /**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {Object} The empty rect.
     */
    function getEmptyRect() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      };
    }
    
    /**
     * Checks to see if a parent element contains a child element (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */
    function containsDeep(parent, child) {
      var node = child;
      while (node) {
        if (node == parent) return true;
    
        node = getParentNode(node);
      }
      return false;
    }
    
    
    /**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */
    function getParentNode(node) {
      var parent = node.parentNode;
    
      if (parent && parent.nodeType == 11 && parent.host) {
        // If the parent is a shadow root, return the host element.
        return parent.host;
      }
    
      if (parent && parent.assignedSlot) {
        // If the parent is distributed in a <slot>, return the parent of a slot.
        return parent.assignedSlot.parentNode;
      }
    
      return parent;
    }
    
    
    // Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
    
    }());;
!function(e){"undefined"==typeof module?this.charming=e:module.exports=e}(function(e,n){"use strict";n=n||{};var t=n.tagName||"span",o=null!=n.classPrefix?n.classPrefix:"char",r=1,a=function(e){for(var n=e.parentNode,a=e.nodeValue,c=a.length,l=-1;++l<c;){var d=document.createElement(t);o&&(d.className=o+r,r++),d.appendChild(document.createTextNode(a[l])),n.insertBefore(d,e)}n.removeChild(e)};return function c(e){for(var n=[].slice.call(e.childNodes),t=n.length,o=-1;++o<t;)c(n[o]);e.nodeType===Node.TEXT_NODE&&a(e)}(e),e});;
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// Helper vars and functions.
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * Line obj.
	 */
	function Line(options) {
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	Line.prototype.options = {
		// top, left, width, height: numerical for pixels or string for % and viewport units. Examples: 2 || '20%' || '50vw'.
		// color: the (bg)color of the line.
		// hidden: defines if the line is rendered initially or hidden by default.
		// animation: animation properties for the line
		// 		duration: animation speed.
		// 		easing: animation easing (animejs easing. To see all possible values console animejs.easings).
		// 		delay: animation delay.
		// 		direction: line animation direction. Possible values: TopBottom || BottomTop || LeftRight || RightLeft || CenterV || CenterH.
		width: 1,
		height: '100%',
		left: '50%',
		top: '0%',
		color: '#000',
		hidden: false,
		animation: {
			duration: 500,
			easing: 'linear',
			delay: 0,
			direction: 'TopBottom'
		}
	};

	/**
	 * Set style.
	 */
	Line.prototype._init = function() {
		this.el = document.createElement('div');
		this.el.className = 'decoline';
		var opts = this.options;
		this.el.style.width = typeof opts.width === 'number' ? opts.width + 'px' : opts.width;
		this.el.style.height = typeof opts.height === 'number' ? opts.height + 'px' : opts.height;
		this.el.style.left = typeof opts.left === 'number' ? opts.left + 'px' : opts.left;
		this.el.style.top = typeof opts.top === 'number' ? opts.top + 'px' : opts.top;
		this.el.style.background = opts.color || opts.color;
		this.el.style.opacity = opts.hidden ? 0 : 1;
		this._setOrigin();
		this.rendered = !opts.hidden;
	};

	/**
	 * Transform origin is set according to the animation direction.
	 */
	Line.prototype._setOrigin = function() {
		var opts = this.options, tOrigin = '50% 50%';

		if( opts.animation.direction === 'TopBottom' ) {
			tOrigin = '50% 0%';
		}
		else if( opts.animation.direction === 'BottomTop' ) {
			tOrigin = '50% 100%';
		}
		else if( opts.animation.direction === 'LeftRight' ) {
			tOrigin = '0% 50%';
		}
		else if( opts.animation.direction === 'RightLeft' ) {
			tOrigin = '100% 50%';
		}
		
		this.el.style.WebkitTransformOrigin = this.el.style.transformOrigin = tOrigin;
	};

	/**
	 * Animates the line.
	 */
	Line.prototype.animate = function(settings) {
		if( this.isAnimating ) {
			return false;
		}
		this.isAnimating = true;

		var animeProps = {
			targets: this.el,
			duration: settings && settings.duration != undefined ? settings.duration : this.options.animation.duration,
			easing: settings && settings.easing != undefined ? settings.easing : this.options.animation.easing,
			delay: settings && settings.delay != undefined ? settings.delay : this.options.animation.delay
		};

		if( settings && settings.direction ) {
			this.options.animation.direction = settings.direction;
		}

		// Sets origin again. Settings might contain a different animation direction?
		this._setOrigin();

		if( this.options.animation.direction === 'TopBottom' || this.options.animation.direction === 'BottomTop' || this.options.animation.direction === 'CenterV' ) {
			animeProps.scaleY = this.rendered ? [1, 0] : [0, 1];
		}
		else {
			animeProps.scaleX = this.rendered ? [1, 0] : [0, 1];
		}

		if( !this.rendered ) {
			this.el.style.opacity = 1;
		}

		var self = this;
		animeProps.complete = function() {
			self.rendered = !self.rendered;
			self.isAnimating = false;
			if( settings && settings.complete ) {
				settings.complete();
			}
		}

		anime(animeProps);
	};

	/**
	 * Show the line.
	 */
	Line.prototype.show = function() {
		this.el.style.opacity = 1;
		this.el.style.WebkitTransform = this.el.style.transform = 'scale3d(1,1,1)';
		this.rendered = true;
	};

	/**
	 * Hide the line.
	 */
	Line.prototype.hide = function() {
		this.el.style.opacity = 0;
		this.rendered = false;
	};

	/**
	 * LineMaker obj.
	 */
	function LineMaker(options) {
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	/**
	 * LineMaker options.
	 */
	LineMaker.prototype.options = {
		// Where to insert the lines container.
		// element: the DOM element or a string to specify the selector, e.g. '#id' or '.classname'.
		// position: Whether to prepend or append to the parent.element
		parent: {element: document.body, position: 'prepend'},
		// position: if fixed the lines container will have fixed position.
		position: 'absolute',
		// The lines settings.
		lines: []
	};

	/**
	 * Create the lines and its structure.
	 */
	LineMaker.prototype._init = function() {
		this.lines = [];

		this.decolines = document.createElement('div');
		this.decolines.className = 'decolines';
		if( this.options.position === 'fixed' ) {
			this.decolines.className += ' decolines--fixed';
		}

		for(var i = 0, len = this.options.lines.length; i < len; ++i) {
			var lineconfig = this.options.lines[i],
				line = new Line(lineconfig);

			this.decolines.appendChild(line.el);
			this.lines.push(line);
		}

		var p = this.options.parent, 
			pEl = typeof p.element === 'string' ? document.querySelector(p.element) : p.element;

		if( p.position === 'prepend' ) {
			pEl.insertBefore(this.decolines, pEl.firstChild);
		}
		else {
			pEl.appendChild(this.decolines);
		}
	};

	/**
	 * Shows/Hides one line with an animation.
	 */
	LineMaker.prototype._animateLine = function(lineIdx, dir, settings) {
		var line = this.lines[lineIdx];
		if( line && dir === 'in' && !line.rendered || dir === 'out' && line.rendered ) {
			line.animate(settings);
		}
	};

	/**
	 * Shows/Hides all lines with an animation.
	 */
	LineMaker.prototype._animateLines = function(dir, callback) {
		var completed = 0, totalLines = this.lines.length;

		if( totalLines === 0 ) {
			callback();
			return;
		}

		var checkCompleted = function() {
			completed++;
			if( completed === totalLines && typeof callback === 'function' ) {
				callback();
			}
		};

		for(var i = 0; i < totalLines; ++i) {
			var line = this.lines[i];
			if( dir === 'in' && !line.rendered || dir === 'out' && line.rendered ) {
				line.animate({
					complete: function() {
						checkCompleted();
					}
				});
			}
			else {
				checkCompleted();
			}
		}
	};

	/**
	 * Shows/Hides one line.
	 */
	LineMaker.prototype._toggleLine = function(lineIdx, action) {
		var line = this.lines[lineIdx];
		if( !line ) { return; }
		
		if( action === 'show' && !line.rendered ) {
			line.show();
		}
		else if( action === 'hide' && line.rendered ) {
			line.hide();
		}
	};

	/**
	 * Shows/Hides all lines.
	 */
	LineMaker.prototype._toggleLines = function(action) {
		for(var i = 0, len = this.lines.length; i < len; ++i) {
			this._toggleLine(i, action);
		}
	};

	/**
	 * Shows one line with an animation.
	 * lineIndex: index/position of the line in the LineMaker.options.lines array.
	 * animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
	 */
	LineMaker.prototype.animateLineIn = function(lineIdx, settings) {
		this._animateLine(lineIdx, 'in', settings);
	};

	/**
	 * Hides one line with an animation.
	 * lineIndex: index/position of the line in the LineMaker.options.lines array.
	 * animationSettings is optional: if not passed, the animation settings defined in LineMaker.options.lines for each line will be used.
	 */
	LineMaker.prototype.animateLineOut = function(lineIdx, settings) {
		this._animateLine(lineIdx, 'out', settings);
	};

	/**
	 * Shows all lines with an animation.
	 */
	LineMaker.prototype.animateLinesIn = function(callback) {
		this._animateLines('in', callback);
	};

	/**
	 * Hides all lines with an animation.
	 */
	LineMaker.prototype.animateLinesOut = function(callback) {
		this._animateLines('out', callback);
	};

	/**
	 * Shows one line.
	 * lineIndex: index/position of the line in the LineMaker.options.lines array.
	 */
	LineMaker.prototype.showLine = function(lineIdx) {
		this._toggleLine(lineIdx, 'show');
	};
	
	/**
	 * Hides one line.
	 * lineIndex: index/position of the line in the LineMaker.options.lines array.
	 */
	LineMaker.prototype.hideLine = function(lineIdx) {
		this._toggleLine(lineIdx, 'hide');
	};

	/**
	 * Shows all lines.
	 */
	LineMaker.prototype.showLines = function() {
		this._toggleLines('show');
	};

	/**
	 * Hides all lines.
	 */
	LineMaker.prototype.hideLines = function() {
		this._toggleLines('hide');
	};

	/**
	 * Removes a line.
	 * lineIndex: index/position of the line in the LineMaker.options.lines array.
	 */
	LineMaker.prototype.removeLine = function(lineIdx) {
		var line = this.lines[lineIdx];
		if( line ) {
			this.lines.splice(lineIdx, 1);
			this.decolines.removeChild(this.decolines.children[lineIdx]);
		}
	};

	/**
	 * Removes all lines.
	 */
	LineMaker.prototype.removeLines = function() {
		this.lines = [];
		this.decolines.innerHTML = '';
	};

	/**
	 * Creates a line.
	 * settings is optional: same settings passed in LineMaker.options.lines for one line.
	 */
	LineMaker.prototype.createLine = function(settings) {
		var line = new Line(settings);
		this.decolines.appendChild(line.el);
		this.lines.push(line);
	};

	/**
	 * Returns the total number of lines.
	 */
	LineMaker.prototype.getTotalLines = function() {
		return this.lines.length;
	}

	window.LineMaker = LineMaker;

})(window);;
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});;
/**
 * TextFx.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	/**
	 * Equation of a line.
	 */
	function lineEq(y2, y1, x2, x1, currentVal) {
		// y = mx + b
		var m = (y2 - y1) / (x2 - x1),
			b = y1 - m * x1;

		return m * currentVal + b;
	}

	function TextFx(el) {
		this.el = el;
		this._init();
	}

	TextFx.prototype.effects = {
		'fx1' : {
			in: {
				duration: 1000,
				delay: function(el, index) { return 75+index*40; },
				easing: 'easeOutElastic',
				elasticity: 650,
				opacity: {
					value: 1,
					easing: 'easeOutExpo',
				},
				translateY: ['50%','0%']
			},
			out: {
				duration: 400,
				delay: function(el, index) { return index*40; },
				easing: 'easeOutExpo',
				opacity: 0,
				translateY: '-100%'
			}
		},
		'fx2' : {
			in: {
				duration: 700,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutCirc',
				opacity: 1,
				translateX: function(el, index) {
					return [(50+index*10),0]
				}
			},
			out: {
				duration: 0,
				opacity: 0
			}
		},
		'fx3' : {
			in: {
				duration: 800,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutElastic',
				opacity: 1,
				translateY: function(el, index) {
					return index%2 === 0 ? ['-80%', '0%'] : ['80%', '0%'];
				}
			},
			out: {
				duration: 800,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutExpo',
				opacity: 0,
				translateY: function(el, index) {
					return index%2 === 0 ? '80%' : '-80%';
				}
			}
		},
		'fx4' : {
			in: {
				duration: 700,
				delay: function(el, index) { return (el.parentNode.children.length-index-1)*80; },
				easing: 'easeOutElastic',
				opacity: 1,
				translateY: function(el, index) {
					return index%2 === 0 ? ['-80%', '0%'] : ['80%', '0%'];
				},
				rotateZ: [90,0]
			},
			out: {
				duration: 500,
				delay: function(el, index) { return (el.parentNode.children.length-index-1)*80; },
				easing: 'easeOutExpo',
				opacity: 0,
				translateY: function(el, index) {
					return index%2 === 0 ? '80%' : '-80%';
				},
				rotateZ: function(el, index) {
					return index%2 === 0 ? -25 : 25;
				}
			}
		},
		'fx5' : {
			perspective: 1000,
			in: {
				duration: 700,
				delay: function(el, index) { return 550+index*50; },
				easing: 'easeOutQuint',
				opacity: {
					value: 1,
					easing: 'linear',
				},
				translateY: ['-150%','0%'],
				rotateY: [180,0]
			},
			out: {
				duration: 700,
				delay: function(el, index) { return index*60; },
				easing: 'easeInQuint',
				opacity: {
					value: 0,
					easing: 'linear',
				},
				translateY: '150%',
				rotateY: -180
			}
		},
		'fx6' : {
			in: {
				duration: 600,
				easing: 'easeOutQuart',
				opacity: 1,
				translateY: function(el, index) {
					return index%2 === 0 ? ['-40%', '0%'] : ['40%', '0%'];
				},
				rotateZ: [10,0]
			},
			out: {
				duration: 0,
				opacity: 0
			}
		},
		'fx7' : {
			in: {
				duration: 250,
				delay: function(el, index) { return 200+index*25; },
				easing: 'easeOutCubic',
				opacity: 1,
				translateY: ['-50%','0%']
			},
			out: {
				duration: 250,
				delay: function(el, index) { return index*25; },
				easing: 'easeOutCubic',
				opacity: 0,
				translateY: '50%'
			}
		},
		'fx8' : {
			in: {
				duration: 400,
				delay: function(el, index) { return 150+(el.parentNode.children.length-index-1)*20; },
				easing: 'easeOutQuad',
				opacity: 1,
				translateY: ['100%','0%']
			},
			out: {
				duration: 400,
				delay: function(el, index) { return (el.parentNode.children.length-index-1)*20; },
				easing: 'easeInOutQuad',
				opacity: 0,
				translateY: '-100%'
			}
		},
		'fx9' : {
			perspective: 1000,
			origin: '50% 100%',
			in: {
				duration: 400,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutSine',
				opacity: 1,
				rotateY: [-90,0]
			},
			out: {
				duration: 200,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutSine',
				opacity: 0,
				rotateY: 45
			}
		},
		'fx10' : {
			in: {
				duration: 1000,
				delay: function(el, index) { return 100+index*30; },
				easing: 'easeOutElastic',
				elasticity: anime.random(400, 700),
				opacity: 1,
				rotateZ: function(el, index) {
					return [anime.random(20,40),0];
				}
			},
			out: {
				duration: 0,
				opacity: 0
			}
		},
		'fx11' : {
			perspective: 1000,
			origin: '50% 100%',
			in: {
				duration: 400,
				delay: function(el, index) { return 200+index*20; },
				easing: 'easeOutExpo',
				opacity: 1,
				rotateY: [-90,0]
			},
			out: {
				duration: 400,
				delay: function(el, index) { return index*20; },
				easing: 'easeOutExpo',
				opacity: 0,
				rotateY: 90
			}
		},
		'fx12' : {
			perspective: 1000,
			origin: '50% 100%',
			in: {
				duration: 400,
				delay: function(el, index) { return 200+index*30; },
				easing: 'easeOutExpo',
				opacity: 1,
				rotateX: [90,0]
			},
			out: {
				duration: 400,
				delay: function(el, index) { return index*30; },
				easing: 'easeOutExpo',
				opacity: 0,
				rotateX: -90
			}
		},
		'fx13' : {
			in: {
				duration: 800,
				easing: 'easeOutExpo',
				opacity: 1,
				translateY: function(el, index) {
					var p = el.parentNode,
						lastElOffW = p.lastElementChild.offsetWidth,
						firstElOffL = p.firstElementChild.offsetLeft,
						w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
						tyVal = lineEq(0, 200, firstElOffL + w/2, firstElOffL, el.offsetLeft);

					return [Math.abs(tyVal)+50+'%','0%'];
				},
				rotateZ: function(el, index) {
					var p = el.parentNode,
						lastElOffW = p.lastElementChild.offsetWidth,
						firstElOffL = p.firstElementChild.offsetLeft,
						w = p.offsetWidth - lastElOffW - p.firstElementChild.offsetLeft - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
						rz = lineEq(90, -90,firstElOffL + w, firstElOffL, el.offsetLeft);

					return [rz,0];
				}
			},
			out: {
				duration: 500,
				easing: 'easeOutExpo',
				opacity: 0,
				translateY: '-150%'
			}
		},
		'fx14' : {
			in: {
				duration: 500,
				easing: 'easeOutExpo',
				delay: function(el, index) { return 200+index*30; },
				opacity: 1,
				rotateZ: [20,0],
				translateY: function(el, index) {
					var p = el.parentNode,
						lastElOffW = p.lastElementChild.offsetWidth,
						firstElOffL = p.firstElementChild.offsetLeft,
						w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
						tyVal = lineEq(-130, -60, firstElOffL+w, firstElOffL, el.offsetLeft);

					return [Math.abs(tyVal)+'%','0%'];
				}
			},
			out: {
				duration: 400,
				easing: 'easeOutExpo',
				delay: function(el, index) { return (el.parentNode.children.length-index-1)*30; },
				opacity: 0,
				rotateZ: 20,
				translateY: function(el, index) {
					var p = el.parentNode,
						lastElOffW = p.lastElementChild.offsetWidth,
						firstElOffL = p.firstElementChild.offsetLeft,
						w = p.offsetWidth - lastElOffW - firstElOffL - (p.offsetWidth - lastElOffW - p.lastElementChild.offsetLeft),
						tyVal = lineEq(-60, -130, firstElOffL+w, firstElOffL, el.offsetLeft);

					return tyVal+'%';
				}
			}
		},
		'fx15' : {
			perspective: 1000,
			in: {
				duration: 400,
				delay: function(el, index) { return 100+index*50; },
				easing: 'easeOutExpo',
				opacity: 1,
				rotateX: [110,0]
			},
			out: {
				duration: 400,
				delay: function(el, index) { return index*50; },
				easing: 'easeOutExpo',
				opacity: 0,
				rotateX: -110
			}
		},
		'fx16' : {
			in: {
				duration: function(el, index) { return anime.random(800,1000) },
				delay: function(el, index) { return anime.random(0,75) },
				easing: 'easeInOutExpo',
				opacity: 1,
				translateY: ['-300%','0%'],
				rotateZ: function(el, index) { return [anime.random(-50,50), 0]; }
			},
			out: {
				duration: function(el, index) { return anime.random(800,1000) },
				delay: function(el, index) { return anime.random(0,80) },
				easing: 'easeInOutExpo',
				opacity: 0,
				translateY: '300%',
				rotateZ: function(el, index) { return anime.random(-50,50); }
			}
		},
		'fx17' : {
			in: {
				duration: 650,
				easing: 'easeOutQuint',
				delay: function(el, index) { return 450+(el.parentNode.children.length-index-1)*30; },
				opacity: 1,
				translateX: function(el, index) {
					return [-1*el.offsetLeft,0];
				}
			},
			out: {
				duration: 1,
				delay: 400,
				opacity: 0
			}
		},
		'fx18' : {
			in: {
				duration: 800,
				delay: function(el, index) { return 600+index*150; },
				easing: 'easeInOutQuint',
				opacity: 1,
				scaleY: [8,1],
				scaleX: [0.5,1],
				translateY: ['-100%','0%']
			},
			out: {
				duration: 800,
				delay: function(el, index) { return index*150; },
				easing: 'easeInQuint',
				opacity: 0,
				scaleY: {
					value: 8,
					delay: function(el, index) { return 100+index*150; },
				},
				scaleX: 0.5,
				translateY: '100%'
			}
		}
	};

	TextFx.prototype._init = function() {
		this.el.classList.add('letter-effect');
		// Split word(s) into letters/spans.
		charming(this.el, {classPrefix: 'letter'});
		this.letters = [].slice.call(this.el.querySelectorAll('span'));
		this.lettersTotal = this.letters.length;
	};
	
	TextFx.prototype._stop = function() {
		anime.remove(this.letters);
		this.letters.forEach(function(letter) { letter.style.WebkitTransform = letter.style.transform = ''; });
	};

	TextFx.prototype.show = function(effect, callback) {
		this._stop();
		arguments.length ? this._animate('in', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 1; });
	};

	TextFx.prototype.hide = function(effect, callback) {
		this._stop();
		arguments.length ? this._animate('out', effect, callback) : this.letters.forEach(function(letter) { letter.style.opacity = 0; });
	};

	TextFx.prototype._animate = function(direction, effect, callback) {
		var effecSettings = typeof effect === 'string' ? this.effects[effect] : effect;

		if( effecSettings.perspective != undefined ) {
			this.el.style.WebkitPerspective = this.el.style.perspective = effecSettings.perspective + 'px';
		}
		if( effecSettings.origin != undefined ) {
			this.letters.forEach(function(letter) { 
				letter.style.WebkitTransformOrigin = letter.style.transformOrigin = effecSettings.origin;
			});
		}

		// Custom effect
		var iscustom = this._checkCustomFx(direction, effect, callback);

		var animOpts = effecSettings[direction],
			target = this.letters;
		
		target.forEach(function(t,p) { 
			if( t.innerHTML === ' ' ) {
				target.splice(p, 1);
			}
		});

		animOpts.targets = target;
		
		if( !iscustom ) {
			animOpts.complete = callback;
		}

		anime(animOpts);
	};

	/**
	 * Extra stuff for an effect.. this is just an example for effect 17.
	 * TODO! (for now, just some quick way to implement something different only for fx17)
	 */
	TextFx.prototype._checkCustomFx = function(direction, effect, callback) {
		var custom = typeof effect === 'string' && effect === 'fx17' && direction === 'out';
		
		if( custom ) {
			var tmp = document.createElement('div');
			tmp.style.width = tmp.style.height = '100%';
			tmp.style.top = tmp.style.left = 0;
			tmp.style.background = '#e24b1e';
			tmp.style.position = 'absolute';
			tmp.style.WebkitTransform = tmp.style.transform = 'scale3d(0,1,1)';
			tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '0% 50%';
			this.el.appendChild(tmp);
			var self = this;
			anime({
				targets: tmp,
				duration: 400,
				easing: 'easeInOutCubic',
				scaleX: [0,1],
				complete: function() {
					tmp.style.WebkitTransformOrigin = tmp.style.transformOrigin = '100% 50%';
					anime({
						targets: tmp,
						duration: 400,
						easing: 'easeInOutCubic',
						scaleX: [1,0],
						complete: function() {
							self.el.removeChild(tmp);
							if( typeof callback === 'function' ) {
								callback();
							}
						}
					});
				}
			});
		}

		return custom;
	};

	window.TextFx = TextFx;

})(window);;
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// Helper vars and functions.
	function extend(a, b) {
		for(var key in b) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function createDOMEl(type, className, content) {
		var el = document.createElement(type);
		el.className = className || '';
		el.innerHTML = content || '';
		return el;
	}

	/**
	 * RevealFx obj.
	 */
	function RevealFx(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this.content = null;
		this.revealer = null;
		this._init();
	}

	/**
	 * RevealFx options.
	 */
	RevealFx.prototype.options = {
		// If true, then the content will be hidden until it´s "revealed".
		isContentHidden: true,
		// The animation/reveal settings. This can be set initially or passed when calling the reveal method.
		revealSettings: {
			// Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
			direction: 'lr',
			// Revealer´s background color.
			bgcolor: '#f0f0f0',
			// Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
			duration: 500,
			// Animation easing. This is the easing to "cover" and also "uncover" the element.
			easing: 'easeInOutQuint',
			// percentage-based value representing how much of the area should be left covered.
			coverArea: 0,
			// Callback for when the revealer is covering the element (halfway through of the whole animation).
			onCover: function(contentEl, revealerEl) { return false; },
			// Callback for when the animation starts (animation start).
			onStart: function(contentEl, revealerEl) { return false; },
			// Callback for when the revealer has completed uncovering (animation end).
			onComplete: function(contentEl, revealerEl) { return false; }
		}
	};

	/**
	 * Init.
	 */
	RevealFx.prototype._init = function() {
		this._layout();
	};

	/**
	 * Build the necessary structure.
	 */
	RevealFx.prototype._layout = function() {
    if (!this.el) return

		var position = getComputedStyle(this.el).position;
		if( position !== 'fixed' && position !== 'absolute' && position !== 'relative' ) {
			this.el.style.position = 'relative';
		}

		if (!this.el.classList.contains('block-revealer')) {

			if ( this.el.classList.contains('elementor-section') ) {
				// Content element.
				this.content = this.el.querySelector('.elementor-container');
			} else {
				// Content element.
				this.content = this.el.querySelector('.elementor-widget-container');
			}

			if (this.content) {
				this.content.classList.add('block-revealer__content');
				if( this.options.isContentHidden) {
					this.content.style.opacity = 0;
				}
				// Revealer element (the one that animates)
				this.revealer = createDOMEl('div', 'block-revealer__element');
				this.el.classList.add('block-revealer');
				this.el.appendChild(this.content);
				this.el.appendChild(this.revealer);
			}

		} else {
			// Content element.
			this.content = this.el.querySelector('.block-revealer__content');
			if (this.content) {
				if( this.options.isContentHidden) {
					this.content.style.opacity = 0;
				}
				// Revealer element (the one that animates)
				this.revealer = this.el.querySelector('.block-revealer__element');
			} else {
				this.content = this.el.querySelector('.elementor-widget-container');

				if (this.content) {
					this.content.classList.add('block-revealer__content');
					if( this.options.isContentHidden) {
						this.content.style.opacity = 0;
					}
					// Revealer element (the one that animates)
					this.revealer = createDOMEl('div', 'block-revealer__element');
					this.el.classList.add('block-revealer');
					// this.el.appendChild(this.content);
					this.el.appendChild(this.revealer);
				}	
			}
		}
	};

	/**
	 * Gets the revealer element´s transform and transform origin.
	 */
	RevealFx.prototype._getTransformSettings = function(direction) {
		var val, origin, origin_2;

		switch (direction) {
			case 'lr' : 
				val = 'scale3d(1,1,1)';
				origin = '0 50%';
				origin_2 = '100% 50%';
				break;
			case 'rl' : 
				val = 'scale3d(1,1,1)';
				origin = '100% 50%';
				origin_2 = '0 50%';
				break;
			case 'tb' : 
				val = 'scale3d(1,1,1)';
				origin = '50% 0';
				origin_2 = '50% 100%';
				break;
			case 'bt' : 
				val = 'scale3d(1,1,1)';
				origin = '50% 100%';
				origin_2 = '50% 0';
				break;
			default : 
				val = 'scale3d(1,1,1)';
				origin = '0 50%';
				origin_2 = '100% 50%';
				break;
		};

		return {
			// transform value.
			val: val,
			// initial and halfway/final transform origin.
			origin: {initial: origin, halfway: origin_2},
		};
	};

	/**
	 * Reveal animation. If revealSettings is passed, then it will overwrite the options.revealSettings.
	 */
	RevealFx.prototype.reveal = function(revealSettings) {
		// Do nothing if currently animating.
		if( this.isAnimating ) {
			return false;
		}
		this.isAnimating = true;
		
		// Set the revealer element´s transform and transform origin.
		var defaults = { // In case revealSettings is incomplete, its properties deafault to:
				duration: 500,
				easing: 'easeInOutQuint',
				delay: 0,
				bgcolor: '#f0f0f0',
				direction: 'lr',
				coverArea: 0
			},
			revealSettings = revealSettings || this.options.revealSettings,
			direction = revealSettings.direction || defaults.direction,
			transformSettings = this._getTransformSettings(direction);

		if ( this.revealer ) {
			this.revealer.style.WebkitTransform = this.revealer.style.transform =  transformSettings.val;
			this.revealer.style.WebkitTransformOrigin = this.revealer.style.transformOrigin =  transformSettings.origin.initial;
			
			// Set the Revealer´s background color.
			// this.revealer.style.backgroundColor = revealSettings.bgcolor || defaults.bgcolor;
			
			// Show it. By default the revealer element has opacity = 0 (CSS).
			this.revealer.style.opacity = 1;
		}

		// Animate it.
		var self = this,
			// Second animation step.
			animationSettings_2 = {
				complete: function() {
					self.isAnimating = false;
					if( typeof revealSettings.onComplete === 'function' ) {
						revealSettings.onComplete(self.content, self.revealer);
					}
				}
			},
			// First animation step.
			animationSettings = {
				delay: revealSettings.delay || defaults.delay,
				complete: function() {
					if (self.revealer) {
						self.revealer.style.WebkitTransformOrigin = self.revealer.style.transformOrigin = transformSettings.origin.halfway;		
						if( typeof revealSettings.onCover === 'function' ) {
							revealSettings.onCover(self.content, self.revealer);
						}
						anime(animationSettings_2);
					}
				}
			};

		animationSettings.targets = animationSettings_2.targets = this.revealer;
		animationSettings.duration = animationSettings_2.duration = revealSettings.duration || defaults.duration;
		animationSettings.easing = animationSettings_2.easing = revealSettings.easing || defaults.easing;

		var coverArea = revealSettings.coverArea || defaults.coverArea;
		if( direction === 'lr' || direction === 'rl' ) {
			animationSettings.scaleX = [0,1];
			animationSettings_2.scaleX = [1,coverArea/100];
		}
		else {
			animationSettings.scaleY = [0,1];
			animationSettings_2.scaleY = [1,coverArea/100];
		}

		if( typeof revealSettings.onStart === 'function' ) {
			revealSettings.onStart(self.content, self.revealer);
		}
		anime(animationSettings);
	};
	
	window.RevealFx = RevealFx;

})(window);;
var observersDefault = []
var observersCurtain = []
var observersLetter = []
var letterAnim
var originalLetters
var animObject

function getDefaultPreviewAnimObj($target = '', $animation_style = 'fu', $distance = '200', $rotation = '0', $scale = '1', $duration = '2000', $direction = 'normal', $loop = '1', $easing = 'linear', is_stagger = false, $delay = '0', stagger_delay = '500', elTarget = null) {
  switch ($animation_style) {
    case 'fu':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'fd':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [-$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
    break;
    case 'fl':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateX: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'fr':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateX: [-$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'rotate':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        rotate: [-$rotation,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'scale':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        scale: [1/$scale,1],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;  
    default:
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }    
      break;
  }

  if (is_stagger) {
    animObj.delay = anime.stagger(stagger_delay)    
  }

  if (elTarget) {
    animObj.begin = function(anim) {
      if ( anim.began ) {
        // elTarget.setAttribute("style", "")
        elTarget.setAttribute("data-de-reveal-animated", true)
      }
    }
    
    animObj.complete = function(anim) {
      if ( anim.completed ) {
        elTarget.setAttribute("data-de-reveal-animated", false)
      }
    }
    
    animObj.change = function() {
      // elTarget.style.backgroundColor = '#00FF00'
      elTarget.style.opacity = 0
    }
  }

  return animObj
}

function observerCallbackDefault(entries, observer) {  
  entries.forEach(function (entry) {
    var element = entry.target;
    var animating = false
    if ( element.hasAttribute("data-de-reveal-animated") ) {
      if ( element.getAttribute("data-de-reveal-animated") === "true" ) {
        animating = true 
      }
    }

    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;

    var animation_style = element.getAttribute("data-de-reveal-animation-style")
    var distance = element.getAttribute("data-de-reveal-distance")
    var rotation = element.getAttribute("data-de-reveal-default-rotation")
    var scale = element.getAttribute("data-de-reveal-default-scale")
    var duration = element.getAttribute("data-de-reveal-duration")
    var direction = element.getAttribute("data-de-reveal-direction")
    var easing = element.getAttribute("data-de-reveal-easing")
    // var loop = element.getAttribute("data-de-reveal-animation-loop")
    var loop = element.hasAttribute("data-de-reveal-animation-loop-infinite") ? true : element.getAttribute("data-de-reveal-animation-loop")

    var id = element.getAttribute("data-id")
    var is_section = element.hasAttribute("data-de-reveal-section") ? true : false;
    var is_stagger = element.hasAttribute("data-de-reveal-stagger") ? true : false;
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;
    
    var delay = element.getAttribute("data-de-reveal-default-delay")
    var stagger_delay = element.getAttribute("de-reveal-stagger-child-delay")

    if (entry.isIntersecting) {
      var targets

      if (is_stagger) {
        targets = ".de_reveal_animation_yes.elementor-element-" + id + " > .elementor-container > .elementor-column"
      } else {
        if (is_section) {
          targets = ".de_reveal_animation_yes.elementor-section.elementor-element-" + id
        } else {
          targets = ".de_reveal_animation_yes.elementor-element-" + id
        }
      }

      var isChild = true
      var carouselTemplate = deFindUpParentElementByClass(element,'dethemekit-carousel-template')

      if ( carouselTemplate ) {
        if ( carouselTemplate.classList.contains('slick-active') ) {
          var carouselWrapperEl = deFindUpParentElementByClass(carouselTemplate,'dethemekit-carousel-wrapper')
          if (carouselWrapperEl) {
            var carouselId = carouselWrapperEl.getAttribute('id')
            targets = '#' + carouselId + ' ' + targets
          }
          isChild = document.querySelectorAll(targets).length > 0 ? true : false
        } else {
          isChild = false
        }        
      }

      if ( !animating && isChild ) {
        if (run_animation) {
          var animObj = getDefaultPreviewAnimObj(targets,animation_style,distance,rotation,scale,duration,direction,loop,easing,is_stagger,delay,stagger_delay, element)
          anime(animObj)
        } else {
          element.style.opacity = 1
        }
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }

    } else {
      element.style.opacity = 0
      if (infinite) {

      }
    }
  })
}

function observerCallbackCurtain(entries, observer) {
  entries.forEach(function (entry) {
    var element = entry.target;

    // To be implemented later:
    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;
    
    
    var duration = element.getAttribute("data-de-reveal-duration")
    var curtain_direction = element.getAttribute("data-de-reveal-curtain-direction")
    var easing = element.getAttribute("data-de-reveal-easing")
    var curtain_delay = element.getAttribute("data-de-reveal-curtain-delay")    
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;

    if (entry.isIntersecting) {
      if (run_animation) {

        var revealer = new RevealFx(element);
  
        revealer.reveal({
          duration: duration,
          direction: curtain_direction,
          easing: easing,
          delay: curtain_delay,
          onStart: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 0 }
          },
          onCover: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 1 }
          },
          onComplete: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 1 } 
          },
        });  
      } else {
        var wcontainer = element.querySelector(".elementor-widget-container")

        if (wcontainer) {
          wcontainer.style.opacity = 1
        }
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }
    } else {
        if (infinite) {

        }
    }
  })
}

function observerCallbackLetter(entries, observer) {
  entries.forEach(function (entry) {
    var element = entry.target

    // To be implemented later:
    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;

    if (entry.isIntersecting) {
      if (run_animation) {
        var animated = element.querySelectorAll(".elementor-widget-container > *:not(style)");
  
        Array.prototype.forEach.call(animated, function(el, i){
          doLetterEffect(element,el)
        })
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }
    } else {
        if (infinite) {

        }
    }
  })
}

function doLetterEffect(element,text_element) {  
  var effect = element.getAttribute("data-dereveal-letter-effects")
  var initial_state = element.getAttribute("data-dereveal-letter-initial-state")
  
  var hasLetterEffect = text_element.classList.contains('letter-effect')
  var tempInnerText = text_element.innerHTML

  if ( !hasLetterEffect ) {        
    var letterAnim = new TextFx(text_element)

    if ( initial_state==='hidden' ) {
      letterAnim.hide()
    } else {
      letterAnim.show()  
    }

    letterAnim.show(effect, function(){
      if (!element.classList.contains('de_reveal_letter_animated')) {
        element.classList.add('de_reveal_letter_animated')
      }

      
      if (tempInnerText !== '') {
        text_element.innerHTML = tempInnerText
      }
      text_element.classList.remove('letter-effect')
    })
  }
}

function deFindUpTemplateElement(el) {
  while (el.parentElement) {
      el = el.parentElement;
      if ( el.hasAttribute('data-elementor-type') ) {
        if ( el.getAttribute('data-elementor-type') !== "wp-page" )
          return el;
      }
  }
  return null;
}

function deFindUpParentElementByClass(el,classname) {
  while (el.parentElement) {
      el = el.parentElement;
      if ( el.classList.contains(classname) ) {
        return el;
      }
  }
  return null;
}

function deClassToSelector(classes) {
  result = classes.replace(' ','.')
  result = '.' + result
  return result 
}

class DeRevealAnimationHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_reveal_animation_yes',
                widget_container: '.elementor-widget-container',
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $wrapper: this.$element.find( selectors.wrapper ),
            $widget_container: this.$element.find( selectors.widget_container ),
        };
    }

    do_frontend_reveal_default() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_default')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }

      var ele = this.$element.get()
      
      var element = ele[0]
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0

      var de_reveal_distance = 0
      element.setAttribute("data-de-reveal-distance", de_reveal_distance)

      var de_reveal_rotation = 0
      element.setAttribute("data-de-reveal-default-rotation", de_reveal_rotation)

      var de_reveal_scale = 0
      element.setAttribute("data-de-reveal-default-scale", de_reveal_scale)

      var de_reveal_default_delay = 0
      element.setAttribute("data-de-reveal-default-delay", de_reveal_default_delay)

      var de_reveal_duration = 0
      element.setAttribute("data-de-reveal-duration", de_reveal_duration)

      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_animation_style_') === 0 ) {
          var de_reveal_animation_style = item.replace('de_reveal_animation_style_','')

          element.setAttribute("data-de-reveal-animation-style", de_reveal_animation_style)
        }

        if ( item.search('de_reveal_distance_') === 0 ) {
          de_reveal_distance = item.replace('de_reveal_distance_','')
          element.setAttribute("data-de-reveal-distance", de_reveal_distance)
        }

        if ( item.search('de_reveal_default_rotation_') === 0 ) {
          de_reveal_rotation = item.replace('de_reveal_default_rotation_','')
          element.setAttribute("data-de-reveal-default-rotation", de_reveal_rotation)
        }

        if ( item.search('de_reveal_default_scale_') === 0 ) {
          de_reveal_scale = item.replace('de_reveal_default_scale_','')
          element.setAttribute("data-de-reveal-default-scale", de_reveal_scale)
        }

        if ( item.search('de_reveal_default_delay_') === 0 ) {
          de_reveal_default_delay = item.replace('de_reveal_default_delay_','')
          element.setAttribute("data-de-reveal-default-delay", de_reveal_default_delay)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          de_reveal_duration = item.replace('de_reveal_duration_','')
          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }

        if ( item.search('de_reveal_direction_') === 0 ) {
          var de_reveal_direction = item.replace('de_reveal_direction_','')
          element.setAttribute("data-de-reveal-direction", de_reveal_direction)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          var de_reveal_easing = item.replace('de_reveal_easing_','')
          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        var $loop_type = 'custom'
        var $loop 
        if ( item.search('de_reveal_loop_') === 0 ) {
          $loop_type = item.replace('de_reveal_loop_','')

          if ( $loop_type === 'infinite' ) {
            $loop = true
            element.setAttribute("data-de-reveal-animation-loop-infinite", true)
          }
        }

        if (( item.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
          $loop = item.replace('de_reveal_custom_loop_','')
          element.setAttribute("data-de-reveal-animation-loop", $loop)
        }

        if ( item.search('de_reveal_stagger_yes') === 0 ) {
          element.setAttribute("data-de-reveal-stagger", "true")
        }

        if ( item.search('elementor-section') === 0 ) {
          element.setAttribute("data-de-reveal-section", "true")
        }

        if ( item.search('de_reveal_run_animation') === 0 ) {
          element.setAttribute("data-de-reveal-run-animation", "true")
        }

        if ( item.search('de_reveal_stagger_child_delay_') === 0 ) {
          var stagger_delay = item.replace('de_reveal_stagger_child_delay_','')

          element.setAttribute("de-reveal-stagger-child-delay", stagger_delay)
        }
      })

      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      var doObserve = true
      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('dethemekit-carousel-template') ) {
          var carouselWrapperEl = deFindUpParentElementByClass(templateEl,'dethemekit-carousel-wrapper')

          if (carouselWrapperEl) {
            var carouselId = carouselWrapperEl.getAttribute('id')

            observerOptions.root = document.querySelector('#' + carouselId + ' .slick-slide.slick-current.slick-active')
            observerOptions.threshold = 0
          }

          if (templateEl.parentElement.classList.contains('slick-cloned')) {
            doObserve = false
          }
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      if (doObserve) {
        var id = element.getAttribute('data-id')
        // initialize intersection observer
        if (!observersDefault[id]) {
          observersDefault[id] = new IntersectionObserver(observerCallbackDefault, observerOptions)
          observersDefault[id].observe(element)
        }
      }
    }

    do_frontend_reveal_curtain() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_blockcurtain')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }

      var ele = this.$element.get()
      
      var element = ele[0]

      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0
      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_curtain_direction_') === 0 ) {
          var de_reveal_curtain_direction = item.replace('de_reveal_curtain_direction_','')

          element.setAttribute("data-de-reveal-curtain-direction", de_reveal_curtain_direction)
        }

        if ( item.search('de_reveal_curtain_delay_') === 0 ) {
          var de_reveal_curtain_delay = item.replace('de_reveal_curtain_delay_','')

          element.setAttribute("data-de-reveal-curtain-delay", de_reveal_curtain_delay)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          var de_reveal_easing = item.replace('de_reveal_easing_','')

          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          var de_reveal_duration = item.replace('de_reveal_duration_','')

          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }

      })
      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('slick-slide') ) {
          var carouselId = templateEl.parentElement.parentElement.parentElement.parentElement.getAttribute('id')
          observerOptions.root = document.querySelector('#' + carouselId + '.slick-slide.slick-current.slick-active')              
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      var id = element.getAttribute('data-id')
      // initialize intersection observer
      if (!observersDefault[id]) {
        // initialize intersection observer
        observersCurtain[id] = new IntersectionObserver(observerCallbackCurtain, observerOptions);
  
        // observe wrapper element
        observersCurtain[id].observe(element);        
      }
    }

    do_frontend_reveal_letter() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_letter')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        thresholds: [0.5],
      }

      var ele = this.$element.get()
      
      var element = ele[0]
  
      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0

      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_letter_effects_') === 0 ) {
          var de_reveal_letter_effects = item.replace('de_reveal_letter_effects_','')

          element.setAttribute("data-dereveal-letter-effects", de_reveal_letter_effects)
        }

        if ( item.search('de_reveal_letter_initial_state_') === 0 ) {
          var initial_state = item.replace('de_reveal_letter_initial_state_','')

          element.setAttribute("data-dereveal-letter-initial-state", initial_state)
        }
      })
      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('slick-slide') ) {
          var carouselId = templateEl.parentElement.parentElement.parentElement.parentElement.getAttribute('id')
          observerOptions.root = document.querySelector('#' + carouselId + '.slick-slide.slick-current.slick-active')
          
          // observerOptions.root = document.querySelector('.slick-slide.slick-current.slick-active')
          // observerOptions.root =  templateEl.parentElement.parentElement.parentElement.parentElement.querySelector('.slick-slide.slick-current.slick-active')
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      var id = element.getAttribute('data-id')
      // initialize intersection observer
      if (!observersDefault[id]) {
        // initialize intersection observer
        observersLetter[id] = new IntersectionObserver(observerCallbackLetter, observerOptions);

        // observe wrapper element
        observersLetter[id].observe(element);
      }
    }

    do_frontend_reveal() {
      this.do_frontend_reveal_default()
      this.do_frontend_reveal_curtain()
      this.do_frontend_reveal_letter()
    }

    onInit() {
      var editMode = document.querySelector('.elementor-editor-active')

      // Is in elementor editor
      if (editMode) {
        var animObject
  
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
              var attributeValue = $(mutation.target).prop(mutation.attributeName);
              
              var $arr_classes = attributeValue.split(' ')

              var do_animation = false, de_reveal_animation_yes = false, run_animation = false, $animation_type = 'default', $id, $duration = '2000', $curtain_color = '#000000', $curtain_direction = 'lr', $direction = 'normal', $easing = 'linear', $animation_style = 'fu', $loop_type = 'custom', $loop = '1', is_stagger = false, is_section = false, $letter_effect = 'fx1', letterAnim, initial_state = 'hidden'
        
              jQuery.each($arr_classes, (index, value) => {
                if ( value.search('de_reveal_animation_yes') === 0 ) {
                  de_reveal_animation_yes = true;
                }

                if ( value.search('de_reveal_run_animation') === 0 ) {
                  run_animation = true;
                }

                if ( value.search('de_reveal_animation_type_') === 0 ) {
                  $animation_type = value.replace('de_reveal_animation_type_','')
                }          

                if ( value.search('elementor-section') === 0 ) {
                  is_section = true;
                }

                if ( value.length === 25 && value.search('elementor-element-') === 0 ) {
                  $id = value.replace('elementor-element-','')
                }
          
                if ( value.search('de_reveal_curtain_direction_') === 0 ) {
                  $curtain_direction = value.replace('de_reveal_curtain_direction_','')
                }

                if ( value.search('de_reveal_letter_effects_') === 0 ) {
                  $letter_effect = value.replace('de_reveal_letter_effects_','')
                }

                if ( value.search('de_reveal_letter_initial_state_') === 0 ) {
                  initial_state = value.replace('de_reveal_letter_initial_state_','')
                }

                if ( value.search('de_reveal_duration_') === 0 ) {
                  $duration = value.replace('de_reveal_duration_','')
                }
        
                if ( value.search('de_reveal_direction_') === 0 ) {
                  $direction = value.replace('de_reveal_direction_','')
                }
        
                if ( value.search('de_reveal_easing_') === 0 ) {
                  $easing = value.replace('de_reveal_easing_','')
                }

                if ( value.search('de_reveal_loop_') === 0 ) {
                  $loop_type = value.replace('de_reveal_loop_','')

                  if ( $loop_type === 'infinite' ) {
                    $loop = true
                  }
                }

                if (( value.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
                  $loop = value.replace('de_reveal_custom_loop_','')
                }

                if ( value.search('de_reveal_animation_style_') === 0 ) {
                  $animation_style = value.replace('de_reveal_animation_style_','')
                }

                if ( value.search('de_reveal_stagger_yes') === 0 ) {
                  is_stagger = true;
                }

              })

              var elementSelector
              var $target = ''

              if (de_reveal_animation_yes && run_animation) {
                do_animation = true
              }

              if (do_animation) {
                if (is_stagger) {
                  $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
                } else {
                  if (is_section) {
                    $target = ".de_reveal_animation_yes.elementor-section.elementor-element-" + $id
                  } else {
                    switch ($animation_type) {
                      case 'letter':
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container > *" 
                        break;
                      case 'blockcurtain':
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id 
                        break;                          
                      default:
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container"
                        break;
                    }
                    
                    // if ( $animation_type === 'letter' ) {
                    //   $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container > *" 
                    // } else {
                    //   $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container"
                    // }
                  }
                }

                elementSelector = document.querySelector($target)
              } else {
                if (is_stagger) {
                  $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
                } else {
                  if (is_section) {
                    $target = ".de_reveal_animation_no.elementor-section.elementor-element-" + $id
                  } else {
                    if ( $animation_type === 'letter' ) {
                      $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-widget-container > *"
                    } else {
                      $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-widget-container"
                    }
                  }
                }

                elementSelector = document.querySelector($target)
              }


              if (do_animation && elementSelector) {
                if ( $animation_type === 'blockcurtain' ) {
                  
                  var revealer = new RevealFx(elementSelector);

                  revealer.reveal({
                    duration: $duration,
                    direction: $curtain_direction,
                    easing: $easing,
                    onStart: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 0; },
                    onCover: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 1; },
                    onComplete: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 1; },
                  });

                } else if ( $animation_type === 'letter' ) { //if ( $animation_type === 'blockcurtain' )

                  var hasLetterEffect = elementSelector.classList.contains('letter-effect')
                  var tempInnerText = elementSelector.innerText

                  if ( !hasLetterEffect ) {
                    letterAnim = new TextFx(elementSelector)

                    if ( initial_state==='hidden' ) {
                      letterAnim.hide()
                    } else {
                      letterAnim.show()  
                    }

                    letterAnim.show($letter_effect, function(){
                      elementSelector.classList.remove('letter-effect')
                      elementSelector.innerText = tempInnerText
                    })
                  }

                } else { //if ( $animation_type === 'blockcurtain' )
                } //if ( $animation_type === 'blockcurtain' )

              } else { //if (do_animation)
                if (elementSelector) {
                  elementSelector.style.transform = "none"
                }
              } //if (do_animation)
            }
          });
        });
  
        if (this.$element) {
          var elementId = this.$element.context.attributes['data-id'].nodeValue;
          var elementSelector = document.querySelector("[data-id='" + elementId + "']");
          if (elementSelector) {
            this.do_frontend_reveal()
          }
        }
      } else { //if (editMode)
        this.do_frontend_reveal()
      } //if (editMode)
    } //onInit()

    bindEvents() {
    }
}

function do_preview_default_animation() {
  // find all edited element wrappers
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_default.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) { 

    // initial variables values
    var do_animation = false
    var $animation_type = 'default'
    var $id, $duration = 2000, $distance = '200', $rotation = '0', $scale = '1'
    var $direction = 'normal'
    var $easing = 'linear'
    var $animation_style = 'fu'
    var $loop_type = 'custom'
    var $loop = '1'
    var is_stagger = false
    var is_section = false
    var $delay = '0'
    var stagger_delay = '500'
    
    var classes = element.getAttribute("class")
    var arr_classes = classes.split(' ')
        
    Array.prototype.forEach.call(arr_classes, function(item, num){
      if ( item.search('de_reveal_animation_yes') === 0 ) {
        do_animation = true
      }
    
      if ( item.search('de_reveal_animation_type_') === 0 ) {
        $animation_type = item.replace('de_reveal_animation_type_','')
      }          
    
      if ( item.search('elementor-section') === 0 ) {
        is_section = true
      }
    
      if ( item.length === 25 && item.search('elementor-element-') === 0 ) {
        $id = item.replace('elementor-element-','')
      }

      if ( item.search('de_reveal_distance_') === 0 ) {
        $distance = item.replace('de_reveal_distance_','')
      }

      if ( item.search('de_reveal_default_rotation_') === 0 ) {
        $rotation = item.replace('de_reveal_default_rotation_','')
      }

      if ( item.search('de_reveal_default_scale_') === 0 ) {
        $scale = item.replace('de_reveal_default_scale_','')
      }

      if ( item.search('de_reveal_default_delay_') === 0 ) {
        $delay = item.replace('de_reveal_default_delay_','')
      }

      if ( item.search('de_reveal_duration_') === 0 ) {
        $duration = item.replace('de_reveal_duration_','')
      }
    
      if ( item.search('de_reveal_direction_') === 0 ) {
        $direction = item.replace('de_reveal_direction_','')
      }
    
      if ( item.search('de_reveal_easing_') === 0 ) {
        $easing = item.replace('de_reveal_easing_','')
      }
    
      if ( item.search('de_reveal_loop_') === 0 ) {
        $loop_type = item.replace('de_reveal_loop_','')
    
        if ( $loop_type === 'infinite' ) {
          $loop = true
        }
      }
    
      if (( item.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
        $loop = item.replace('de_reveal_custom_loop_','')
      }
    
      if ( item.search('de_reveal_animation_style_') === 0 ) {
        $animation_style = item.replace('de_reveal_animation_style_','')
      }
    
      if ( item.search('de_reveal_stagger_yes') === 0 ) {
        is_stagger = true
      }    

      if ( item.search('de_reveal_stagger_child_delay_') === 0 ) {
        stagger_delay = item.replace('de_reveal_stagger_child_delay_','')
      }
    })

    var elementSelector
    var $target = ''

    if (do_animation) {
      if (is_stagger) {
        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-container > .elementor-column"                        
      } else {
        if (is_section) {
          $target = ".de_reveal_animation_yes.elementor-section.elementor-element-" + $id 
        } else {
          $target = ".de_reveal_animation_yes.elementor-element-" + $id
        }
      }

      elementSelector = document.querySelector($target)
    } else {
      if (is_stagger) {
        $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
      } else {
        if (is_section) {
          $target = ".de_reveal_animation_no.elementor-section.elementor-element-" + $id
        } else {
          $target = ".de_reveal_animation_no.elementor-element-" + $id
        }
      }

      elementSelector = document.querySelector($target)
    }

    if (do_animation && elementSelector) {    

      if (animObject) {
        animObject.remove(elementSelector)
      }
        
      var animObj = getDefaultPreviewAnimObj($target,$animation_style,$distance,$rotation,$scale,$duration,$direction,$loop,$easing,is_stagger,$delay,stagger_delay)
      animObject = anime(animObj)

    } else { //if (do_animation)
      if (elementSelector) {
        elementSelector.style.transform = "none"
      }
    } //if (do_animation)    
  })
}

function do_preview_curtain_animation() {
  // find all animated element wrappers with data-anim attribute
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_blockcurtain.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) { 
      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0
      var de_reveal_curtain_direction = 'lr'
      var de_reveal_easing = 'linier'
      var de_reveal_duration = 2000
      var de_reveal_curtain_delay = 0
      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_curtain_direction_') === 0 ) {
          de_reveal_curtain_direction = item.replace('de_reveal_curtain_direction_','')

          element.setAttribute("data-de-reveal-curtain-direction", de_reveal_curtain_direction)
        }

        if ( item.search('de_reveal_curtain_delay_') === 0 ) {
          de_reveal_curtain_delay = item.replace('de_reveal_curtain_delay_','')

          element.setAttribute("data-de-reveal-curtain-delay", de_reveal_curtain_delay)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          de_reveal_easing = item.replace('de_reveal_easing_','')

          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          de_reveal_duration = item.replace('de_reveal_duration_','')

          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }  
      })
      
      var revealer = new RevealFx(element);

      revealer.reveal({
        duration: de_reveal_duration,
        direction: de_reveal_curtain_direction,
        easing: de_reveal_easing,
        delay: de_reveal_curtain_delay,
        onStart: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 0 }
        },
        onCover: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 1 }
        },
        onComplete: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 1 }
        },
      });

      delete revealer
    
  })
}

function do_preview_letter_animation() {
  // find all animated element wrappers with data-anim attribute
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_letter.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) {
    // Get threshold settings from class de_reveal_start_
    var classes = element.getAttribute("class")
    var arr_classes = classes.split(' ')
    var de_reveal_start = 0
    var initial_state = 'hidden'

    Array.prototype.forEach.call(arr_classes, function(item, num){
      if ( item.search('de_reveal_start_') === 0 ) {
        de_reveal_start = item.replace('de_reveal_start_','')
      }

      if ( item.search('de_reveal_letter_initial_state_') === 0 ) {
        initial_state = item.replace('de_reveal_letter_initial_state_','')
      }

      if ( item.search('de_reveal_letter_effects_') === 0 ) {
        var de_reveal_letter_effects = item.replace('de_reveal_letter_effects_','')

        element.setAttribute("data-dereveal-letter-effects", de_reveal_letter_effects)
      }
    })
    var threshold = de_reveal_start;

    var animated = element.querySelectorAll(".elementor-widget-container > *:not(style)");

    Array.prototype.forEach.call(animated, function(el, i){
      var hasLetterEffect = el.classList.contains('letter-effect')

      // if ( !hasLetterEffect ) {
        var de_reveal_letter_effects = element.getAttribute("data-dereveal-letter-effects")
        originalLetters = el.innerText
        letterAnim = new TextFx(el)
        if ( initial_state==='hidden' ) {
          letterAnim.hide()
        } else {
          letterAnim.show()  
        }
        letterAnim.show(de_reveal_letter_effects, callback_after_letter_animation)
      // }      
    })
  })
}

function callback_after_letter_animation() {
  if (letterAnim) {
    letterAnim.el.innerText = originalLetters
    letterAnim.el.classList.remove('letter-effect')    
  }
}


jQuery( window ).on( 'elementor/frontend/init', () => {  
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeRevealAnimationHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
  
  if ( undefined !== window.elementor ) {
    elementor.channels.editor.on( 'RunPreviewDefault', () => do_preview_default_animation() )
    elementor.channels.editor.on( 'RunPreviewCurtain', () => do_preview_curtain_animation() )
    elementor.channels.editor.on( 'RunPreviewLetter', () => do_preview_letter_animation() )
  }
});

jQuery( document ).ready( () => {
  de_reveal_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_reveal_init_responsive()
})

function de_reveal_init_responsive() {
  var onDesktop = false
  var onTablet = false
  var onMobile = false
  var docWidth = document.body.clientWidth
  var tabletBreakpoint = elementorFrontend.config.responsive.breakpoints.tablet.value
  var mobileBreakpoint = elementorFrontend.config.responsive.breakpoints.mobile.value

  if ( docWidth > tabletBreakpoint ) {
    onDesktop = true 
  } else if ( docWidth <= mobileBreakpoint ) {
    onMobile = true
  } else {
    onTablet = true
  }

  const editMode = document.querySelector('.elementor-editor-active')

  if (!editMode) {
    const elements = document.querySelectorAll(".de_reveal_animation_yes")
  
    Array.prototype.forEach.call(elements, function (element, index) { 
      element.classList.remove('de_reveal_run_animation')
      element.removeAttribute("data-de-reveal-run-animation")
      
      if ( onDesktop && element.classList.contains('de_reveal_on_desktop_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
      if ( onTablet && element.classList.contains('de_reveal_on_tablet_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
      if ( onMobile && element.classList.contains('de_reveal_on_mobile_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
    })
  }
}
;
class DeStaggeringHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_staggering_hover_yes',
                widget_container: '.de_staggering_animation_yes',
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $wrapper: this.$element.find( selectors.wrapper ),
            $widget_container: this.$element.find( selectors.widget_container ),
        };
    }

    do_frontend_animation() {
      if (!this.$element.hasClass('de_staggering_hover_yes')) {
        return
      }

      var ele = this.$element.get()
      
      var element = ele[0]
      var column_classes = element.classList

      var delay_increment = 500, parent_animation_mousehover = 'fadeIn', parent_animation_mouseout = 'fadeOut', run_animation = false 
      jQuery.each(column_classes, (index, value) => {
        if ( value.search('de_staggering_parent_animation_mousehover_') === 0 ) {
          parent_animation_mousehover = value.replace('de_staggering_parent_animation_mousehover_','')
        }

        if ( value.search('de_staggering_parent_animation_mouseout_') === 0 ) {
          parent_animation_mouseout = value.replace('de_staggering_parent_animation_mouseout_','')
        }
        
        if ( value.search('de_staggering_child_delay_') === 0 ) {
          delay_increment = parseInt(value.replace('de_staggering_child_delay_',''))
        }

        if ( value.search('de_staggering_run_animation') === 0 ) {
          run_animation = true
        }
      })

      // On Mouse Hover on Column
      element.addEventListener("mouseenter", function(e) {
        e.preventDefault;

        var run_animation = element.classList.contains('de_staggering_run_animation')


        // find all animated element wrappers with data-anim attribute
        var childs = element.querySelectorAll(".de_staggering_animation_yes")
        var delay = 0

        Array.prototype.forEach.call(childs, function (el, index) { 

          delay = delay + delay_increment

          var arr_classes = el.classList

          var animation_mousehover = 'inherited'
          var animation_mouseout = 'inherited'

          jQuery.each(arr_classes, (index, value) => {
            if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
              animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
            }

            if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
              animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
            }

          })

          if ( animation_mousehover === 'inherited' ) {
            animation_mousehover = parent_animation_mousehover
          }

          if ( animation_mouseout === 'inherited' ) {
            animation_mouseout = parent_animation_mouseout
          }

          if (run_animation) {
            var animation_delay = 'animation-delay:' + delay + 'ms'
            el.setAttribute('style',animation_delay)
  
            // -> removing the class
            el.classList.remove("animate__animated");
            el.classList.remove("animate__" + animation_mousehover);
            el.classList.remove("animate__" + animation_mouseout);
            
            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void el.offsetWidth;
            
            // -> and re-adding the class
            el.classList.add("animate__animated");
            el.classList.add("animate__" + animation_mousehover);
          } else { //if (run_animation)
            // -> removing the class
            el.classList.remove("animate__animated");
            el.classList.remove("animate__" + animation_mousehover);
            el.classList.remove("animate__" + animation_mouseout);

            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void el.offsetWidth;
          } //if (run_animation)

        })
        
      }, false);

      // On Mouse Leave from Column
      element.addEventListener("mouseleave", function(e) {
        e.preventDefault;

        var run_animation = element.classList.contains('de_staggering_run_animation')
        
          // find all animated element wrappers with data-anim attribute
          var childs = element.querySelectorAll(".de_staggering_animation_yes");
          var delay = 0
  
          Array.prototype.forEach.call(childs, function (el, index) { 
  
            delay = delay + delay_increment
  
            var arr_classes = el.classList
  
            var animation_mousehover = 'inherited'
            var animation_mouseout = 'inherited'
            
            jQuery.each(arr_classes, (index, value) => {
              if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
              }
  
              if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
              }
            })
  
            if ( animation_mousehover === 'inherited' ) {
              animation_mousehover = parent_animation_mousehover
            }
  
            if ( animation_mouseout === 'inherited' ) {
              animation_mouseout = parent_animation_mouseout
            }

            if (run_animation) {
              var animation_delay = 'animation-delay:' + delay + 'ms'
              el.setAttribute('style',animation_delay)
    
              // -> removing the class
              el.classList.remove("animate__animated");
              el.classList.remove("animate__" + animation_mousehover);
              el.classList.remove("animate__" + animation_mouseout);
              
              // -> triggering reflow /* The actual magic */
              // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
              // Oops! This won't work in strict mode. Thanks Felis Phasma!
              // element.offsetWidth = element.offsetWidth;
              // Do this instead:
              void el.offsetWidth;
              
              // -> and re-adding the class
              el.classList.add("animate__animated");
              el.classList.add("animate__" + animation_mouseout);
            } else {
              // -> removing the class
              el.classList.remove("animate__animated");
              el.classList.remove("animate__" + animation_mousehover);
              el.classList.remove("animate__" + animation_mouseout);
              
              // -> triggering reflow /* The actual magic */
              // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
              // Oops! This won't work in strict mode. Thanks Felis Phasma!
              // element.offsetWidth = element.offsetWidth;
              // Do this instead:
              void el.offsetWidth;
            }

          })

        
      }, false);      
    }

    onInit() {
      // var editMode = document.querySelector('.elementor-editor-active')

      // Is in elementor editor
      // if (editMode) {
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {

              var classes = $(mutation.target).prop(mutation.attributeName);
              var arr_classes = classes.split(' ')
              var do_animation = false, delay_increment = 500, parent_animation_mousehover = 'fadeIn', parent_animation_mouseout = 'fadeOut'
              var de_staggering_hover_yes = false, de_staggering_preview_on_hover_yes = false, run_animation = false

              jQuery.each(arr_classes, (index, value) => {
                if ( value.search('de_staggering_hover_yes') === 0 ) {
                  de_staggering_hover_yes = true
                }

                if ( value.search('de_staggering_preview_on_hover_yes') === 0 )  {
                  de_staggering_preview_on_hover_yes = true;
                }

                if ( value.search('de_staggering_parent_animation_mousehover_') === 0 ) {
                  parent_animation_mousehover = value.replace('de_staggering_parent_animation_mousehover_','')
                }

                if ( value.search('de_staggering_parent_animation_mouseout_') === 0 ) {
                  parent_animation_mouseout = value.replace('de_staggering_parent_animation_mouseout_','')
                }

                if ( value.search('de_staggering_child_delay_') === 0 ) {
                  delay_increment = parseInt(value.replace('de_staggering_child_delay_',''))
                }      

                if ( value.search('de_staggering_run_animation') === 0 ) {
                  run_animation = true
                }        
              })

              if ( de_staggering_hover_yes && de_staggering_preview_on_hover_yes && run_animation ) {
                do_animation = true
              }
  
              var elementId = mutation.target.attributes['data-id'].nodeValue;
              var elementSelector = document.querySelector("[data-id='" + elementId + "']");

              if ( do_animation ) {
    
                mutation.target.onmouseenter = function(e) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
                  var delay = 0

                  Array.prototype.forEach.call(childs, function (el, index) { 

                    delay = delay + delay_increment

                    var arr_classes = el.classList
                    var remove_classes = []

                    var animation_mousehover = 'inherited'
                    var animation_mouseout = 'inherited'

                    jQuery.each(arr_classes, (index, value) => {
                      if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                        animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                        animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('animate__') === 0 ) {
                        // -> removing the class
                        remove_classes.push(value)
                      }                     
                    })

                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })

                    var animation_delay = 'animation-delay:' + delay + 'ms'
                    el.setAttribute('style',animation_delay)

                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);
                    
                    // -> triggering reflow /* The actual magic */
                    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                    // Oops! This won't work in strict mode. Thanks Felis Phasma!
                    // element.offsetWidth = element.offsetWidth;
                    // Do this instead:
                    void el.offsetWidth;
                    
                    // -> and re-adding the class

                    // el.classList.add("de_staggering_animation_type_" + animation_mousehover);
                    el.classList.add("animate__animated");
                    if ( animation_mousehover === 'inherited' ) {
                      el.classList.add("animate__" + parent_animation_mousehover);
                    } else {
                      el.classList.add("animate__" + animation_mousehover);
                    }

                  })
                }

                mutation.target.onmouseleave = function(e) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
                  var delay = 0

                  Array.prototype.forEach.call(childs, function (el, index) { 

                    delay = delay + delay_increment

                    var arr_classes = el.classList
                    var remove_classes = []

                    var animation_mousehover = 'inherited'
                    var animation_mouseout = 'inherited'

                    jQuery.each(arr_classes, (index, value) => {
                      if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                        animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                        animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('animate__') === 0 ) {
                        // -> removing the class
                        remove_classes.push(value)
                      }                     
                    })

                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })

                    var animation_delay = 'animation-delay:' + delay + 'ms'
                    el.setAttribute('style',animation_delay)

                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);
                    
                    // -> triggering reflow /* The actual magic */
                    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                    // Oops! This won't work in strict mode. Thanks Felis Phasma!
                    // element.offsetWidth = element.offsetWidth;
                    // Do this instead:
                    void el.offsetWidth;
                    
                    // -> and re-adding the class

                    // el.classList.add("de_staggering_animation_type_" + animation_mouseout);
                    el.classList.add("animate__animated");
                    if ( animation_mouseout === 'inherited' ) {
                      el.classList.add("animate__" + parent_animation_mouseout);
                    } else {
                      el.classList.add("animate__" + animation_mouseout);
                    }

                  })
                }
              } else {
                if ( elementSelector ) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
  
                  Array.prototype.forEach.call(childs, function (el, index) { 
  
                    var arr_classes = el.classList
                    var remove_classes = []
  
                    var animation_type = 'inherited'
                    jQuery.each(arr_classes, (index, value) => {
                      if (value) {
                        if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                          animation_type = value.replace('de_staggering_animation_mousehover_','')
                        }
    
                        if ( value.search('animate__') === 0 ) {
                          // -> removing the class
                          remove_classes.push(value)
                        }                     
                      }
                    })
  
                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })
  
                    // if ( animation_type === 'inherited' ) {
                    //   animation_type = parent_animation_type
                    // }
  
                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);                    
                  })
                  mutation.target.onmouseenter = null
                  mutation.target.onmouseleave = null
                }
              }
            }
          });
        });

        if (this.$element) {
          var element_type = this.$element.context.attributes['data-element_type'].value;

          if ( element_type === 'column' ) {
            var elementId = this.$element.context.attributes['data-id'].nodeValue;
            var elementSelector = document.querySelector("[data-id='" + elementId + "']");
            if (elementSelector) {
              observer.observe(elementSelector, {
                  attributes: true
              });
            }
          }
        }


      // } else { //if (editMode)
        // this.do_frontend_animation()
      // } //if (editMode)
    } //onInit()
}

jQuery( window ).on( 'elementor/frontend/init', () => {
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeStaggeringHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
} );

jQuery( document ).ready( () => {
  de_staggering_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_staggering_init_responsive()
})

function de_staggering_init_responsive() {
  var onDesktop = false
  var onTablet = false
  var onMobile = false
  var docWidth = document.body.clientWidth
  var tabletBreakpoint = elementorFrontend.config.responsive.breakpoints.tablet.value
  var mobileBreakpoint = elementorFrontend.config.responsive.breakpoints.mobile.value

  if ( docWidth > tabletBreakpoint ) {
    onDesktop = true 
  } else if ( docWidth <= mobileBreakpoint ) {
    onMobile = true
  } else {
    onTablet = true
  }

  var columns = document.querySelectorAll(".de_staggering_hover_yes")

  Array.prototype.forEach.call(columns, function (col, index) { 
    
    col.classList.remove('de_staggering_run_animation')
    
    if ( onDesktop && col.classList.contains('de_staggering_on_desktop_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

    if ( onTablet && col.classList.contains('de_staggering_on_tablet_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

    if ( onMobile && col.classList.contains('de_staggering_on_mobile_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

  })
}
;
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);