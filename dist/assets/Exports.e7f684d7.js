import{S as M,i as N,s as P,M as S,c,m as v,t as g,d as _,e as D,u as Q,Z as L,_ as R,$ as k,a0 as A,j as w,k as E,l as C,B as I,F as b,a1 as q,a2 as B,I as j,J}from"./index.37fdfcc6.js";function T(t){let a,u,e,l,s,f,$,d;return a=new b({props:{key:"encoding",value:t[3].imageEncoding,params:{options:q}}}),a.$on("change",t[7]),e=new b({props:{key:"quality",value:t[3].imageQuality,params:{min:1,max:100,suffix:"%",triggerable:!1}}}),e.$on("change",t[8]),s=new b({props:{key:"pixelsPerInch",value:t[3].pixelsPerInch,params:{step:1}}}),s.$on("change",t[9]),$=new b({props:{key:"screenshot",value:t[5],params:{label:"capture",triggerable:!1}}}),{c(){c(a.$$.fragment),u=w(),c(e.$$.fragment),l=w(),c(s.$$.fragment),f=w(),c($.$$.fragment)},m(r,m){v(a,r,m),E(r,u,m),v(e,r,m),E(r,l,m),v(s,r,m),E(r,f,m),v($,r,m),d=!0},p(r,m){const h={};m&8&&(h.value=r[3].imageEncoding),a.$set(h);const i={};m&8&&(i.value=r[3].imageQuality),e.$set(i);const n={};m&8&&(n.value=r[3].pixelsPerInch),s.$set(n)},i(r){d||(g(a.$$.fragment,r),g(e.$$.fragment,r),g(s.$$.fragment,r),g($.$$.fragment,r),d=!0)},o(r){_(a.$$.fragment,r),_(e.$$.fragment,r),_(s.$$.fragment,r),_($.$$.fragment,r),d=!1},d(r){D(a,r),r&&C(u),D(e,r),r&&C(l),D(s,r),r&&C(f),D($,r)}}}function G(t){let a,u;return a=new b({props:{key:"loopCount",value:t[3].loopCount,params:{step:1}}}),a.$on("change",t[14]),{c(){c(a.$$.fragment)},m(e,l){v(a,e,l),u=!0},p(e,l){const s={};l&8&&(s.value=e[3].loopCount),a.$set(s)},i(e){u||(g(a.$$.fragment,e),u=!0)},o(e){_(a.$$.fragment,e),u=!1},d(e){D(a,e)}}}function V(t){let a,u,e,l,s,f,$,d,r,m,h;a=new b({props:{key:"framerate",value:t[3].framerate}}),a.$on("change",t[10]),e=new b({props:{key:"format",value:t[3].videoFormat,params:{options:Object.values(B)}}}),e.$on("change",t[11]),s=new b({props:{key:"quality",value:t[3].videoQuality,params:{min:1,max:100,step:1,suffix:"%",triggerable:!1}}}),s.$on("change",t[12]),$=new b({props:{key:"useDuration",value:t[3].useDuration}}),$.$on("change",t[13]);let i=t[3].useDuration&&G(t);return m=new b({props:{key:"record",value:t[4],params:{label:t[2],triggerable:!1}}}),{c(){c(a.$$.fragment),u=w(),c(e.$$.fragment),l=w(),c(s.$$.fragment),f=w(),c($.$$.fragment),d=w(),i&&i.c(),r=w(),c(m.$$.fragment)},m(n,p){v(a,n,p),E(n,u,p),v(e,n,p),E(n,l,p),v(s,n,p),E(n,f,p),v($,n,p),E(n,d,p),i&&i.m(n,p),E(n,r,p),v(m,n,p),h=!0},p(n,p){const F={};p&8&&(F.value=n[3].framerate),a.$set(F);const y={};p&8&&(y.value=n[3].videoFormat),e.$set(y);const H={};p&8&&(H.value=n[3].videoQuality),s.$set(H);const O={};p&8&&(O.value=n[3].useDuration),$.$set(O),n[3].useDuration?i?(i.p(n,p),p&8&&g(i,1)):(i=G(n),i.c(),g(i,1),i.m(r.parentNode,r)):i&&(j(),_(i,1,1,()=>{i=null}),J());const o={};p&4&&(o.params={label:n[2],triggerable:!1}),m.$set(o)},i(n){h||(g(a.$$.fragment,n),g(e.$$.fragment,n),g(s.$$.fragment,n),g($.$$.fragment,n),g(i),g(m.$$.fragment,n),h=!0)},o(n){_(a.$$.fragment,n),_(e.$$.fragment,n),_(s.$$.fragment,n),_($.$$.fragment,n),_(i),_(m.$$.fragment,n),h=!1},d(n){D(a,n),n&&C(u),D(e,n),n&&C(l),D(s,n),n&&C(f),D($,n),n&&C(d),i&&i.d(n),n&&C(r),D(m,n)}}}function Z(t){let a,u,e,l;return a=new A({props:{name:"image",$$slots:{default:[T]},$$scope:{ctx:t}}}),e=new A({props:{name:"video",$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){c(a.$$.fragment),u=w(),c(e.$$.fragment)},m(s,f){v(a,s,f),E(s,u,f),v(e,s,f),l=!0},p(s,f){const $={};f&65544&&($.$$scope={dirty:f,ctx:s}),a.$set($);const d={};f&65548&&(d.$$scope={dirty:f,ctx:s}),e.$set(d)},i(s){l||(g(a.$$.fragment,s),g(e.$$.fragment,s),l=!0)},o(s){_(a.$$.fragment,s),_(e.$$.fragment,s),l=!1},d(s){D(a,s),s&&C(u),D(e,s)}}}function z(t){let a,u;return a=new S({props:{mID:t[0],hasHeader:t[1],name:"exports",$$slots:{default:[Z]},$$scope:{ctx:t}}}),{c(){c(a.$$.fragment)},m(e,l){v(a,e,l),u=!0},p(e,[l]){const s={};l&1&&(s.mID=e[0]),l&2&&(s.hasHeader=e[1]),l&65548&&(s.$$scope={dirty:l,ctx:e}),a.$set(s)},i(e){u||(g(a.$$.fragment,e),u=!0)},o(e){_(a.$$.fragment,e),u=!1},d(e){D(a,e)}}}const K="start",U="stop";function W(t,a,u){let e,l,s,f;Q(t,L,o=>u(6,l=o)),Q(t,R,o=>u(15,s=o)),Q(t,k,o=>u(3,f=o));let{mID:$}=a,{hasHeader:d=!0}=a;function r(){I(L,l=!l,l)}function m(){I(R,s=!s,s)}const h=o=>{I(k,f.imageEncoding=o.detail,f)},i=o=>{I(k,f.imageQuality=o.detail,f)},n=o=>{I(k,f.pixelsPerInch=o.detail,f)},p=o=>{I(k,f.framerate=o.detail,f)},F=o=>{I(k,f.videoFormat=o.detail,f)},y=o=>{I(k,f.videoQuality=o.detail,f)},H=o=>{I(k,f.useDuration=o.detail,f)},O=o=>{I(k,f.loopCount=o.detail,f)};return t.$$set=o=>{"mID"in o&&u(0,$=o.mID),"hasHeader"in o&&u(1,d=o.hasHeader)},t.$$.update=()=>{t.$$.dirty&64&&u(2,e=l?U:K)},[$,d,e,f,r,m,l,h,i,n,p,F,y,H,O]}class Y extends M{constructor(a){super(),N(this,a,W,z,P,{mID:0,hasHeader:1})}}export{Y as default};
