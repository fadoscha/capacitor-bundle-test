(this["webpackJsonpcapacitor-testapp"]=this["webpackJsonpcapacitor-testapp"]||[]).push([[58],{212:function(e,t,r){"use strict";r.r(t),r.d(t,"StorageWeb",(function(){return f}));var n=r(79),a=r(2),i=r.n(a),u=r(4),c=r(8),s=r(9),p=r(11),o=r(12),f=function(e){Object(p.a)(r,e);var t=Object(o.a)(r);function r(){var e;return Object(c.a)(this,r),(e=t.apply(this,arguments)).group="CapacitorStorage",e}return Object(s.a)(r,[{key:"configure",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"string"===typeof(r=t.group)&&(this.group=r);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.impl.getItem(this.applyPrefix(t.key)),e.abrupt("return",{value:r});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"set",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.impl.setItem(this.applyPrefix(t.key),t.value);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.impl.removeItem(this.applyPrefix(t.key));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"keys",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.rawKeys().map((function(e){return e.substring(r.prefix.length)})),e.abrupt("return",{keys:t});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(n.a)(this.rawKeys());try{for(t.s();!(r=t.n()).done;)a=r.value,this.impl.removeItem(a)}catch(i){t.e(i)}finally{t.f()}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"migrate",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,r,a,u,c,s,p,o,f,h,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=[],u="_cap_",c=Object.keys(this.impl).filter((function(e){return 0===e.indexOf(u)})),s=Object(n.a)(c),e.prev=5,s.s();case 7:if((p=s.n()).done){e.next=24;break}return o=p.value,f=o.substring(u.length),h=null!==(t=this.impl.getItem(o))&&void 0!==t?t:"",e.next=13,this.get({key:f});case 13:if(l=e.sent,"string"!==typeof l.value){e.next=19;break}a.push(f),e.next=22;break;case 19:return e.next=21,this.set({key:f,value:h});case 21:r.push(f);case 22:e.next=7;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(5),s.e(e.t0);case 29:return e.prev=29,s.f(),e.finish(29);case 32:return e.abrupt("return",{migrated:r,existing:a});case 33:case"end":return e.stop()}}),e,this,[[5,26,29,32]])})));return function(){return e.apply(this,arguments)}}()},{key:"removeOld",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,r,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"_cap_",t=Object.keys(this.impl).filter((function(e){return 0===e.indexOf("_cap_")})),r=Object(n.a)(t);try{for(r.s();!(a=r.n()).done;)u=a.value,this.impl.removeItem(u)}catch(i){r.e(i)}finally{r.f()}case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"impl",get:function(){return window.localStorage}},{key:"prefix",get:function(){return"NativeStorage"===this.group?"":"".concat(this.group,".")}},{key:"rawKeys",value:function(){var e=this;return Object.keys(this.impl).filter((function(t){return 0===t.indexOf(e.prefix)}))}},{key:"applyPrefix",value:function(e){return this.prefix+e}}]),r}(r(7).e)}}]);
//# sourceMappingURL=58.416b0cd5.chunk.js.map