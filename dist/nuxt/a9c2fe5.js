(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(t,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("4207ec1a",content,!1,{sourceMap:!1})},171:function(t,e,n){var content=n(179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("594e8fce",content,!1,{sourceMap:!1})},172:function(t,e,n){var content=n(181);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("8f94b3e6",content,!1,{sourceMap:!1})},173:function(t,e,n){"use strict";var o=n(5),r=n(23),c=n(24),l=n(118),d=n(63),v=n(8),m=n(49).f,f=n(50).f,h=n(10).f,_=n(174).trim,w="Number",C=o.Number,x=C,y=C.prototype,I=c(n(82)(y))==w,E="trim"in String.prototype,A=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(I?v((function(){y.valueOf.call(n)})):c(n)!=w)?l(new x(A(e)),n,C):A(e)};for(var N,S=n(7)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;S.length>D;D++)r(x,N=S[D])&&!r(C,N)&&h(C,N,f(x,N));C.prototype=y,y.constructor=C,n(12)(o,w,C)}},174:function(t,e,n){var o=n(4),r=n(29),c=n(8),l=n(175),d="["+l+"]",v=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,n){var r={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),v=r[t]=d?e(h):l[t];n&&(r[n]=v),o(o.P+o.F*d,"String",r)},h=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},175:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},176:function(t,e,n){"use strict";n(170)},177:function(t,e,n){var o=n(35)(!1);o.push([t.i,".countdown-section[data-v-3156b4b7]{display:flex;justify-content:space-between;margin:0 auto;width:740px}.countdown-section .countdown-item[data-v-3156b4b7]{display:flex;flex-direction:column;width:148px;padding:2rem 0;border-radius:6px;background-color:hsla(0,0%,100%,.1);margin:0 .5rem}.countdown-section .countdown-value[data-v-3156b4b7]{font-size:5rem;text-align:center;padding:0;font-weight:500}.countdown-section .small-text[data-v-3156b4b7]{font-size:16px;text-align:center;font-weight:300}",""]),t.exports=o},178:function(t,e,n){"use strict";n(171)},179:function(t,e,n){var o=n(35)(!1);o.push([t.i,".faq-item[data-v-727bb222]{background-color:hsla(0,0%,100%,.1);padding:1rem;border-radius:4px}.short-answer[data-v-727bb222]{margin-bottom:1rem;font-weight:500}.answer[data-v-727bb222]{font-weight:300}",""]),t.exports=o},180:function(t,e,n){"use strict";n(172)},181:function(t,e,n){var o=n(35)(!1);o.push([t.i,".index-page[data-v-7791a9bb]{padding-top:10rem}.index-page .coming-soon[data-v-7791a9bb]{font-size:4rem;color:#fff;font-weight:500;text-align:center}",""]),t.exports=o},182:function(t,e,n){"use strict";n.r(e);n(173);var o={name:"CountdownSection",props:{deadline:{type:Number,default:0}},data:function(){return{days:void 0,hours:void 0,minutes:void 0,seconds:void 0}},watch:{deadline:{handler:function(){this.seconds=Math.floor(this.deadline/1e3%60),this.minutes=Math.floor(this.deadline/1e3/60%60),this.hours=Math.floor(this.deadline/36e5%24),this.days=Math.floor(this.deadline/864e5)},immediate:!0}},mounted:function(){}},r=(n(176),n(18)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"countdown-section"},[n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(t.days))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Days")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.hours).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Hours")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.minutes).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Minutes")])]),t._v(" "),n("div",{staticClass:"countdown-item"},[n("span",{staticClass:"countdown-value"},[t._v(t._s(("0"+t.seconds).slice(-2)))]),t._v(" "),n("div",{staticClass:"small-text"},[t._v("Seconds")])])])}),[],!1,null,"3156b4b7",null).exports,l=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"mission"}},[n("h3",[n("img",{staticClass:"icon",attrs:{src:"/icons/mission.svg",alt:"Our mission"}}),t._v("\n    Our Mission\n  ")]),t._v(" "),n("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim sit amet\n    lacus efficitur euismod. Duis ut nibh turpis. Integer sed arcu ligula. Integer\n    et consequat velit. In laoreet cursus est, eu pretium lacus sollicitudin vel.\n    Vestibulum consectetur, massa vel ullamcorper iaculis, tortor tortor egestas arcu,\n    eu bibendum eros ipsum vel quam. Phasellus tempus imperdiet lacus id mollis. Donec\n    gravida nulla ut hendrerit convallis. Suspendisse varius iaculis velit at commodo.\n  ")])])}],!1,null,null,null).exports,d=(n(178),{name:"IndexPage",components:{CountdownSection:c,MissionSection:l,FAQSection:Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section faq-section",attrs:{id:"faq"}},[n("h3",[n("img",{staticClass:"icon",attrs:{src:"/icons/faq.svg",alt:"FAQ"}}),t._v("\n    FAQ\n  ")]),t._v(" "),n("h4",[t._v("Newbies")]),t._v(" "),n("div",{staticClass:"faq-item"},[n("h5",[t._v("Q: How can I start?")]),t._v(" "),n("div",{staticClass:"short-answer"},[t._v("\n      A: Don't participate in your first pump!\n    ")]),t._v(" "),n("div",{staticClass:"answer"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim sit amet lacus efficitur euismod. Duis ut nibh turpis. Integer sed arcu ligula. Integer et consequat velit. In laoreet cursus est, eu pretium lacus sollicitudin vel. Vestibulum consectetur, massa vel ullamcorper iaculis, tortor tortor egestas arcu, eu bibendum eros ipsum vel quam. Phasellus tempus imperdiet lacus id mollis. Donec gravida nulla ut hendrerit convallis. Suspendisse varius iaculis velit at commodo.\n    ")])]),t._v(" "),n("h4",[t._v("How to pump")]),t._v(" "),n("div",{staticClass:"faq-item"},[n("h5",[t._v("Q: Do you have any VIP or private signals or benefits?")]),t._v(" "),n("div",{staticClass:"short-answer"},[t._v("\n      A: No, we dont!\n    ")]),t._v(" "),n("div",{staticClass:"answer"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim sit amet lacus efficitur euismod. Duis ut nibh turpis. Integer sed arcu ligula. Integer et consequat velit. In laoreet cursus est, eu pretium lacus sollicitudin vel. Vestibulum consectetur, massa vel ullamcorper iaculis, tortor tortor egestas arcu, eu bibendum eros ipsum vel quam. Phasellus tempus imperdiet lacus id mollis. Donec gravida nulla ut hendrerit convallis. Suspendisse varius iaculis velit at commodo.\n    ")])]),t._v(" "),n("h4",[t._v("How it works")]),t._v(" "),n("div",{staticClass:"faq-item"},[n("h5",[t._v("Q: Admins or owners always have advantages, how can you prove that you don't use any?")]),t._v(" "),n("div",{staticClass:"short-answer"},[t._v("\n      A: We are IT nerds and we've created unique service for pumps\n    ")]),t._v(" "),n("div",{staticClass:"answer"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim sit amet lacus efficitur euismod. Duis ut nibh turpis. Integer sed arcu ligula. Integer et consequat velit. In laoreet cursus est, eu pretium lacus sollicitudin vel. Vestibulum consectetur, massa vel ullamcorper iaculis, tortor tortor egestas arcu, eu bibendum eros ipsum vel quam. Phasellus tempus imperdiet lacus id mollis. Donec gravida nulla ut hendrerit convallis. Suspendisse varius iaculis velit at commodo.\n    ")])]),t._v(" "),n("h4",[t._v("Rewards")])])}],!1,null,"727bb222",null).exports,AboutSection:Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"about"}},[n("h3",[n("img",{staticClass:"icon",attrs:{src:"/icons/info.svg",alt:"About us"}}),t._v("\n    About Us\n  ")]),t._v(" "),n("p",[t._v("\n    Our group was created in early 2020, with the goal of creating an awesome\n    community, were everyone can discuss cryptocurrency and master the art of\n    crypto trading, no matter how much experience you have (or don’t have).\n    We have an experienced team, some of our members are in the crypto business\n    since 2013. We provide pump signals based on our awesome crypto AI software\n    and take care of the complicated part and look for good entry & exit points.\n  ")]),t._v(" "),n("p",[t._v("\n    We provide excellent Crypto Pump Signals + CryptoCurrency Education.\n    All of our results can be verified in our Discord channel. Our group is all\n    about those early signals, earning money, and celebrating our success at\n    the Bahamas. We offer Trade Notifications, Education and Experienced Guidance.\n  ")])])}],!1,null,null,null).exports,ContactSection:Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section contact-section",attrs:{id:"contact"}},[n("h3",[n("img",{staticClass:"icon",attrs:{src:"/icons/chat-room.svg",alt:"Contact Us"}}),t._v("\n    Contact Us\n  ")]),t._v(" "),n("p",[t._v("We happy to chat with you in our Discord server, also we duplicate all announcements to  our telegram channel")]),t._v(" "),n("p",[n("a",{staticClass:"button",attrs:{href:"https://discord.gg/2WXEMAah",target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/discord.svg",alt:"discrod"}}),t._v("\n      Discord\n    ")]),t._v(" "),n("a",{staticClass:"button",attrs:{href:"",target:"_blank"}},[n("img",{staticClass:"icon",attrs:{src:"/icons/telegram.svg",alt:"Telegram"}}),t._v("\n      Telegram\n    ")])])])}],!1,null,null,null).exports},data:function(){return{date:new Date("2021-06-01"),deadline:void 0,startTime:Date.now()}},mounted:function(){this.updateDate()},methods:{updateDate:function(){var t=this;this.date=new Date(this.date.getTime()-1e3),this.deadline=this.date.getTime()-this.startTime,setTimeout((function(){t.updateDate()}),1e3)}}}),v=(n(180),Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page"},[n("div",{staticClass:"section"},[n("CountdownSection",{attrs:{deadline:t.deadline}}),t._v(" "),n("h1",{staticClass:"coming-soon"},[t._v("\n      Next pump coming soon\n    ")])],1),t._v(" "),n("MissionSection"),t._v(" "),n("FAQSection"),t._v(" "),n("AboutSection"),t._v(" "),n("ContactSection")],1)}),[],!1,null,"7791a9bb",null));e.default=v.exports}}]);