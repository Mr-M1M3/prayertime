var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let h;function m(t){h=t}function p(){if(!h)throw new Error("Function called outside component initialization");return h}const g=[],y=[],b=[],$=[],k=Promise.resolve();let x=!1;function w(t){b.push(t)}const v=new Set;let C=0;function _(){const t=h;do{for(;C<g.length;){const t=g[C];C++,m(t),j(t.$$)}for(m(null),g.length=0,C=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];v.has(e)||(v.add(e),e())}b.length=0}while(g.length);for(;$.length;)$.pop()();x=!1,v.clear(),m(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const F=new Set;let D;function P(t,e){t&&t.i&&(F.delete(t),t.i(e))}function T(t,e){const n=e.token={};function r(t,r,a,c){if(e.token!==n)return;e.resolved=c;let i=e.ctx;void 0!==a&&(i=i.slice(),i[a]=c);const l=t&&(e.current=t)(i);let u=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(D={r:0,c:[],p:D},function(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),D.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),D.r||o(D.c),D=D.p)})):e.block.d(1),l.c(),P(l,1),l.m(e.mount(),e.anchor),u=!0),e.block=l,e.blocks&&(e.blocks[r]=l),u&&_()}if((a=t)&&"object"==typeof a&&"function"==typeof a.then){const n=p();if(t.then((t=>{m(n),r(e.then,1,e.value,t),m(null)}),(t=>{if(m(n),r(e.catch,2,e.error,t),m(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var a}function E(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}function A(t,e){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,k.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(a,c,i,u,s,d,f,p=[-1]){const g=h;m(a);const y=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||g.$$.root};f&&f(y.root);let b=!1;if(y.ctx=i?i(a,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return y.ctx&&s(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),b&&A(a,t)),e})):[],y.update(),b=!0,o(y.before_update),y.fragment=!!u&&u(y.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);y.fragment&&y.fragment.l(t),t.forEach(l)}else y.fragment&&y.fragment.c();c.intro&&P(a.$$.fragment),function(t,n,a,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:s}=t.$$;i&&i.m(n,a),c||w((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(w)}(a,c.target,c.anchor,c.customElement),_()}m(g)}function S(e){let n,o,r=e[12]+"";return{c(){n=u("p"),o=s(r),f(n,"class","text-red-500")},m(t,e){i(t,n,e),c(n,o)},p:t,d(t){t&&l(n)}}}function I(e){let n,o,r,a,h,m,p,g,y=e[14].address.city+"",b=""+(e[14].address.building&&e[14].address.road?`around ${e[14].address.building}, ${e[14].address.road}`:"");return{c(){n=u("p"),o=u("span"),o.textContent="Hey good people, you're in",r=d(),a=u("span"),h=s(y),m=d(),p=u("span"),g=s(b),f(a,"class","font-bold"),f(p,"class","font-bold"),f(n,"class","px-2 my-2 text-lg text-center")},m(t,e){i(t,n,e),c(n,o),c(n,r),c(n,a),c(a,h),c(n,m),c(n,p),c(p,g)},p:t,d(t){t&&l(n)}}}function H(e){let n;return{c(){n=u("p"),n.textContent="Getting location..."},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function O(e){let n,o,r=e[12]+"";return{c(){n=u("p"),o=s(r),f(n,"class","text-red-500")},m(t,e){i(t,n,e),c(n,o)},p:t,d(t){t&&l(n)}}}function W(e){let n,o,r,a,d,h=e[13].current.temp_c+"";return{c(){n=u("p"),o=s("Weather is "),r=u("span"),a=s(h),d=s("°C"),f(r,"class","font-bold"),f(n,"class","text-lg text-center font-sans")},m(t,e){i(t,n,e),c(n,o),c(n,r),c(r,a),c(r,d)},p:t,d(t){t&&l(n)}}}function q(e){let n;return{c(){n=u("p"),n.textContent="Fetching Weather Data..."},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function N(e){let n,o,r=e[12]+"";return{c(){n=u("p"),o=s(r),f(n,"class","text-red-500")},m(t,e){i(t,n,e),c(n,o)},p:t,d(t){t&&l(n)}}}function z(e){let n,o,r=e[11]?`It's time to pray ${e[11]} salah`:"It's not an usual time to pray Farj Salah";return{c(){n=u("p"),o=s(r),f(n,"class","text-center my-2 text-xl font-bold")},m(t,e){i(t,n,e),c(n,o)},p:t,d(t){t&&l(n)}}}function G(e){let n;return{c(){n=u("p"),n.textContent="Getting prayer time..."},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function L(e){let n,o,r,a,h,m,p={ctx:e,current:null,token:null,hasCatch:!0,pending:H,then:I,catch:S,value:14,error:12};T(e[1](),p);let g={ctx:e,current:null,token:null,hasCatch:!0,pending:q,then:W,catch:O,value:13,error:12};T(e[2](),g);let y={ctx:e,current:null,token:null,hasCatch:!0,pending:G,then:z,catch:N,value:11,error:12};return T(e[3](),y),{c(){n=u("main"),o=u("h1"),r=s(e[0]),a=d(),p.block.c(),h=d(),g.block.c(),m=d(),y.block.c(),f(o,"class","text-2xl px-4 py-3 bg-gray-700 text-white text-center font-clock tracking-wider"),f(n,"class","font-alef")},m(t,e){i(t,n,e),c(n,o),c(o,r),c(n,a),p.block.m(n,p.anchor=null),p.mount=()=>n,p.anchor=h,c(n,h),g.block.m(n,g.anchor=null),g.mount=()=>n,g.anchor=m,c(n,m),y.block.m(n,y.anchor=null),y.mount=()=>n,y.anchor=null},p(t,[n]){e=t,1&n&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,e[0]),E(p,e,n),E(g,e,n),E(y,e,n)},i:t,o:t,d(t){t&&l(n),p.block.d(),p.token=null,p=null,g.block.d(),g.token=null,g=null,y.block.d(),y.token=null,y=null}}}function Y(t,e){e||(e=new Date);return new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.split(":")[0],t.split(":")[1],0).getTime()}function B(t,e,n){let o=new Date,r=`${o.getHours()} : ${o.getMinutes()} : ${o.getSeconds()}`;setInterval((()=>{let t=new Date,e=t.getHours(),o=t.getMinutes(),a=t.getSeconds();n(0,r=`${e} : ${o} : ${a}`)}),1e3);const a=new Promise(((t,e)=>{if(!navigator.geolocation)throw alert("This browser is not supported, or did you disabled location service?"),e("This browser is not supported"),new Error("This browser is not supported!");navigator.geolocation.getCurrentPosition((e=>{t(e.coords)}),(t=>{e(""+(1==t.code?"Permission denied":"Couldn't locate you, try changing the browser")),alert(""+(1==t.code?"Permission denied":"Couldn't locate you, try changing the browser"))}),{enableHighAccuracy:!0,maximumAge:1e4,timeOut:1e4})}));return[r,async function(){const t=await a,e=`https://nominatim.openstreetmap.org/reverse?format=json&zoom=18&lat=${t.latitude}&lon=${t.longitude}`,n=await fetch(e);return n.ok?n.json():(alert("Failed to fetch Location data from remote server! Check your internet connection and try again."),Promise.reject("Failed to fetch Location data from remote server! Check your internet connection and try again."))},async function(){const t=await a,e=`https://api.weatherapi.com/v1/current.json?key=b78dee21e1194e14bc250804221701&aqi=no&q=${t.latitude},${t.longitude}`,n=await fetch(e);return n.ok?n.json():(alert("Failed to fetch Weather data from remote server! Check your internet connection and try again."),Promise.reject("Failed to fetch Weather data from remote server! Check your internet connection and try again."))},async function(){let t=await async function(){const t=await a,e=`https://api.aladhan.com/v1/timings?method=4&latitude=${t.latitude}&longitude=${t.longitude}`,n=await fetch(e);return n.ok?n.json():(alert("Failed to fetch PrayerTime data from remote server! Check your internet connection and try again."),Promise.reject("Failed to fetch PrayerTime data from remote server! Check your internet connection and try again."))}();t=t.data.timings;const e=(new Date).getTime(),n=Y(t.Fajr),o=Y(t.Dhuhr),r=Y(t.Asr),c=Y(t.Maghrib),i=Y(t.Isha),l=Y(t.Sunrise),u=Y(t.Sunset);let s=await async function(){const t=await a,e=new Date,n=new Date;n.setDate(e.getDate()+1);const o=`https://api.aladhan.com/v1/timings/${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}?method=4&latitude=${t.latitude}&longitude=${t.longitude}`,r=await fetch(o);if(!r.ok)return alert("Failed to fetch PrayerTime data from remote server! Check your internet connection and try again."),Promise.reject("Failed to fetch PrayerTime data from remote server! Check your internet connection and try again.");const c=await r.json();return Y(c.data.timings.Imsak,n)}();return e>n&&e<l?"Fajr":e>o&&e<r?"Dhuhr":e>r&&e<u?"Asr":e>c&&e<i?"Maghrib":!!(e>i&&e<s)&&"Isha"}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,B,L,a,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map