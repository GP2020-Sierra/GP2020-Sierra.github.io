(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{217:function(t,e,r){var n=r(14),o=r(219)(!1);n(n.S,"Object",{values:function(t){return o(t)}})},218:function(t,e,r){"use strict";r(2),r(1),r(217),r(61);var n=r(18),o=r(57),c=r.n(o),d="https://gp2020-sierra.azurewebsites.net/api/";e.a={_locationsEndpoint:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(d+"locations");case 2:return e=t.sent,data=e.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()},_summaryEndpoint:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(d+"summary");case 2:return e=t.sent,data=e.data,t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})))()},_dataEndpoint:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(d+"data/"+t);case 2:return r=e.sent,(data=r.data).forEach((function(t){t.timestamp=Date.parse(t.timestamp)/1e3})),e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)})))()},getLocations:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return void 0===t&&(t=e._locationsEndpoint),r.next=3,t();case 3:return o=r.sent,c={},o.forEach((function(t){t.loadData=Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0!==t.data){r.next=4;break}return r.next=3,e._dataEndpoint(t.id);case 3:t.data=r.sent;case 4:return r.abrupt("return",t.data);case 5:case"end":return r.stop()}}),r)}))),t.id=t.locationID,t.timestamp=Date.parse(t.timestamp)/1e3,c[t.id]=t})),r.abrupt("return",c);case 7:case"end":return r.stop()}}),r)})))()},getSummary:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var summary;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e._summaryEndpoint(t);case 2:return summary=r.sent,r.abrupt("return",summary);case 4:case"end":return r.stop()}}),r)})))()},page:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.getLocations();case 2:if(o=n.sent,t.store.commit("setLocations",o),c=null,!e){n.next=13;break}if(!(e in o)){n.next=12;break}return c=o[e],n.next=10,c.loadData();case 10:n.next=13;break;case 12:t.error("Invalid location");case 13:return t.store.commit("setLocation",c),n.abrupt("return",{locations:o,location:c});case 15:case"end":return n.stop()}}),n)})))()},summaryPage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getLocations(e._summaryEndpoint);case 2:return o=r.sent,t.store.commit("setLocations",o),t.store.commit("setLocation",null),c=function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getLocations(e._summaryEndpoint);case 2:n=r.sent,Object.values(o).forEach((function(e){t.store.commit("setLocData",{locID:e.id,locData:n[e.id].data})}));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),r.abrupt("return",{locations:o,summaryUpdater:c});case 7:case"end":return r.stop()}}),r)})))()},updateInterval:3e4}},219:function(t,e,r){var n=r(20),o=r(44),c=r(36),d=r(62).f;t.exports=function(t){return function(e){for(var r,m=c(e),l=o(m),f=l.length,i=0,v=[];f>i;)r=l[i++],n&&!d.call(m,r)||v.push(t?[r,m[r]]:m[r]);return v}}},220:function(t,e,r){var content=r(351);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("3ff323c4",content,!0,{sourceMap:!1})},350:function(t,e,r){"use strict";var n=r(220);r.n(n).a},351:function(t,e,r){(e=r(63)(!1)).push([t.i,".graph-picture{max-width:75%}",""]),t.exports=e},360:function(t,e,r){"use strict";r.r(e);r(61);var n=r(18),o=r(218),c={head:function(){return{title:"About"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.page(t);case 2:return r=e.sent,n=r.locations,e.abrupt("return",{locations:n});case 5:case"end":return e.stop()}}),e)})))()}},d=(r(350),r(45)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("b-container",[r("h4",{staticClass:"text-center"},[t._v("The science behind it all")]),t._v(" "),r("p",[t._v("\n      Many studies have shown that the level of carbon dioxide in the room is directly related to a students alertness and ability to concentrate.\n      Even though CO2 is a harmless gas, it can contribute directly to increased tiredness and a loss of concentration.\n    ")]),t._v(" "),r("p",[t._v("\n      According to\n      "),r("a",{attrs:{href:"https://www.aivc.org/sites/default/files/155_0.pdf"}},[t._v("this study")]),t._v(" on students in 16 studies from 1996 to 2015, reducing CO2 concentration from 2,000 ppm (parts per million) to 1,000 ppm\n      would mean that students complete psychological tests 12% faster and make 3% fewer mistakes on average.\n    ")])]),t._v(" "),r("b-container",[r("h4",{staticClass:"text-center"},[t._v("What we set out to achieve")]),t._v(" "),r("p",[t._v("\n      We deployed 6 sensors in common study spaces across Cambridge to try and gauge how well suited for work those enviroments are.\n      To do this we detected CO2 levels as well as tempreture, air pressure, humidity and device count to estimate how many people are using that space.\n    ")])]),t._v(" "),r("b-container",[r("h4",{staticClass:"text-center"},[t._v("What we found")]),t._v(" "),r("p",[t._v("\n      This will be filled in once we have completed our survey and looked at our data.\n    ")])]),t._v(" "),r("b-container",[r("h4",{staticClass:"text-center"},[t._v("Instructions for reproducing our project")]),t._v(" "),r("p",[t._v(" To reproduce this project, follow the instructions in our "),r("a",{attrs:{href:"https://github.com/GP2020-Sierra/README/blob/master/README.md"}},[t._v("README repo")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[e("div",{staticClass:"p-lg-2 mx-auto my-2"},[e("h1",{staticClass:"display-4 font-weight-normal"},[this._v("More about our project")])])])}],!1,null,null,null);e.default=component.exports}}]);