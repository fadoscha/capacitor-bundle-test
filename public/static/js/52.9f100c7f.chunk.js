(this["webpackJsonpcapacitor-testapp"]=this["webpackJsonpcapacitor-testapp"]||[]).push([[52],{173:function(t,e,n){"use strict";n.r(e),n.d(e,"HapticsWeb",(function(){return h}));var r=n(2),a=n.n(r),i=n(4),c=n(8),o=n(9),u=n(11),s=n(12),p=n(7),v=n(82),h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).selectionStarted=!1,t}return Object(o.a)(n,[{key:"impact",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.patternForImpact(null===e||void 0===e?void 0:e.style),this.vibrateWithPattern(n);case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"notification",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.patternForNotification(null===e||void 0===e?void 0:e.type),this.vibrateWithPattern(n);case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"vibrate",value:function(){var t=Object(i.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=(null===e||void 0===e?void 0:e.duration)||300,this.vibrateWithPattern([n]);case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"selectionStart",value:function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.selectionStarted=!0;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"selectionChanged",value:function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.selectionStarted&&this.vibrateWithPattern([70]);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"selectionEnd",value:function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.selectionStarted=!1;case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"patternForImpact",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.a.Heavy;return t===v.a.Medium?[43]:t===v.a.Light?[20]:[61]}},{key:"patternForNotification",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v.b.Success;return t===v.b.Warning?[30,40,30,50,60]:t===v.b.Error?[27,45,50]:[35,65,21]}},{key:"vibrateWithPattern",value:function(t){if(!navigator.vibrate)throw this.unavailable("Browser does not support the vibrate API");navigator.vibrate(t)}}]),n}(p.e)}}]);
//# sourceMappingURL=52.9f100c7f.chunk.js.map