(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{213:function(t,o,n){"use strict";n(61);var e=n(18),r=n(57),c=n.n(r),l="https://gp2020sierra.blob.core.windows.net/data/";o.a={_locationsEndpoint:function(){return Object(e.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(l+"locations.json");case 2:return o=t.sent,data=o.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()},_locationEndpoint:function(t){return Object(e.a)(regeneratorRuntime.mark((function o(){var n,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,c.a.get(l+"location/"+t+".json");case 2:return n=o.sent,data=n.data,o.abrupt("return",data);case 5:case"end":return o.stop()}}),o)})))()},getLocations:function(t){var o=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o._locationsEndpoint(t);case 2:return r=n.sent,c={},r.forEach((function(t){t.loadData=Object(e.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0!==t.data){n.next=4;break}return n.next=3,o._locationEndpoint(t.id);case 3:t.data=n.sent;case 4:return n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)}))),c[t.id]=t})),n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))()},page:function(t,o){var n=this;return Object(e.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getLocations();case 2:if(r=e.sent,t.store.commit("setLocations",r),c=null,!o){e.next=13;break}if(!(o in r)){e.next=12;break}return c=r[o],e.next=10,c.loadData();case 10:e.next=13;break;case 12:t.error("Invalid location");case 13:return t.store.commit("setLocation",c),e.abrupt("return",{locations:r,location:c});case 15:case"end":return e.stop()}}),e)})))()}}},214:function(t,o,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("1db0e9a2",content,!0,{sourceMap:!1})},347:function(t,o,n){"use strict";var e=n(214);n.n(e).a},348:function(t,o,n){(o=n(62)(!1)).push([t.i,".locationSmall{background-clip:content-box;border-radius:2rem}.locationSmall .locationSmallData{width:80%;height:300px;border-radius:21px 21px 0 0}@media (min-width:992px){.locationSmall:nth-of-type(4n+2),.locationSmall:nth-of-type(4n+3){color:#fff;background-color:#343a40}.locationSmall:nth-of-type(4n+2) a,.locationSmall:nth-of-type(4n+2) h2,.locationSmall:nth-of-type(4n+3) a,.locationSmall:nth-of-type(4n+3) h2{color:#fff;-webkit-text-decoration-color:#fff;text-decoration-color:#fff}.locationSmall:nth-of-type(4n+0),.locationSmall:nth-of-type(4n+1),.locationSmall:nth-of-type(4n+2) .box-shadow,.locationSmall:nth-of-type(4n+3) .box-shadow{color:#000;background-color:#f8f9fa}.locationSmall:nth-of-type(4n+0) a,.locationSmall:nth-of-type(4n+0) h2,.locationSmall:nth-of-type(4n+1) a,.locationSmall:nth-of-type(4n+1) h2{color:#343a40;-webkit-text-decoration-color:#343a40;text-decoration-color:#343a40}.locationSmall:nth-of-type(4n+0) .box-shadow,.locationSmall:nth-of-type(4n+1) .box-shadow{color:#fff;background-color:#343a40}}@media (max-width:1199.98px){.locationSmall:nth-of-type(2n){color:#fff;background-color:#343a40}.locationSmall:nth-of-type(2n) a,.locationSmall:nth-of-type(2n) h2{color:#fff;-webkit-text-decoration-color:#fff;text-decoration-color:#fff}.locationSmall:nth-of-type(2n) .box-shadow,.locationSmall:nth-of-type(odd){color:#000;background-color:#f8f9fa}.locationSmall:nth-of-type(odd) a,.locationSmall:nth-of-type(odd) h2{color:#343a40;-webkit-text-decoration-color:#343a40;text-decoration-color:#343a40}.locationSmall:nth-of-type(odd) .box-shadow{color:#fff;background-color:#343a40}}",""]),t.exports=o},350:function(t,o,n){"use strict";n.r(o);n(61);var e=n(18),r={props:{location:{type:Object,required:!0}}},c=(n(347),n(44)),l=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-col",{staticClass:"col-12 col-lg-6 m-0 p-2 text-center locationSmall"},[n("div",{staticClass:"my-3 py-3"},[n("a",{attrs:{href:"/location/"+t.location.id}},[n("h2",{staticClass:"display-6"},[t._v(t._s(t.location.name))])]),t._v(" "),n("p",{staticClass:"lead"},[t._v("Location #"+t._s(t.location.id))])]),t._v(" "),n("div",{staticClass:"locationSmallData box-shadow mx-auto"},[t._v("\n    (location data overview)\n  ")])])}),[],!1,null,null,null).exports,f=n(213),d={components:{LocationSmall:l},head:function(){return{title:"Sierra"}},asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function o(){var n,e;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,f.a.page(t);case 2:return n=o.sent,e=n.locations,o.abrupt("return",{locations:e});case 5:case"end":return o.stop()}}),o)})))()}},h=Object(c.a)(d,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",[this._m(0),this._v(" "),this._m(1),this._v(" "),o("b-row",{staticClass:"position-relative m-lg-3 no-gutters"},this._l(Object.values(this.locations),(function(t){return o("LocationSmall",{key:t.id,attrs:{location:t}})})),1)],1)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[o("div",{staticClass:"p-lg-5 mx-auto my-5"},[o("h1",{staticClass:"display-4 font-weight-normal"},[this._v("Sierra")]),this._v(" "),o("p",{staticClass:"lead font-weight-normal"},[this._v("Azure Sphere for Citizen Science")]),this._v(" "),o("a",{staticClass:"btn btn-outline-secondary",attrs:{href:"https://github.com/GP2020-Sierra/",target:"_blank"}},[this._v("View Github")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"text-center text-dark"},[o("div",{staticClass:"p-lg-3 mx-auto my-5"},[o("h2",{staticClass:"display-5"},[this._v("Sensors overview")])])])}],!1,null,null,null);o.default=h.exports}}]);