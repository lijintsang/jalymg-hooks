(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"5/1s":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("uLvW"),u=n.n(r);function c(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}function o(e,t){var n=Object(r["useRef"])({deps:t,obj:void 0,initialized:!1}),a=n.current;return!1!==a.initialized&&c(a.deps,t)||(a.deps=t,a.obj=e(),a.initialized=!0),a.obj}class l{constructor(){this.data=void 0,this.data=Math.random()}}t["default"]=function(){var e=o((()=>new l),[]),t=Object(r["useState"])({}),n=Object(a["a"])(t,2),c=n[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,e.data),u.a.createElement("button",{type:"button",onClick:()=>{c({})}},"Rerender"))}},"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("uLvW"),u=n.n(r),c=n("L2hj");t["default"]=()=>{var e=Object(c["a"])(),t=Object(a["a"])(e,2),n=t[0],r=t[1],o=r.toggle,l=r.setLeft,i=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"Effects\uff1a","".concat(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:o},"Toggle"),u.a.createElement("button",{type:"button",onClick:l,style:{margin:"0 8px"}},"Toggle False"),u.a.createElement("button",{type:"button",onClick:i},"Toggle True")))}},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("uLvW"),u=n.n(r),c=n("L2hj");t["default"]=()=>{var e=Object(c["a"])("Hello","World"),t=Object(a["a"])(e,2),n=t[0],r=t[1],o=r.toggle,l=r.set,i=r.setLeft,s=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"Effects\uff1a",n),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:o},"Toggle"),u.a.createElement("button",{type:"button",onClick:()=>l("Hello"),style:{margin:"0 8px"}},"Set Hello"),u.a.createElement("button",{type:"button",onClick:()=>l("World")},"Set World"),u.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 8px"}},"Set Left"),u.a.createElement("button",{type:"button",onClick:s},"Set Right")))}},L2hj:function(e,t,n){"use strict";var a=n("iojd"),r=n("uLvW");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(r["useState"])(e),u=Object(a["a"])(n,2),c=u[0],o=u[1],l=Object(r["useMemo"])((()=>{var n=void 0===t?!e:t,a=()=>o((t=>t===e?n:e)),r=e=>o(e),u=()=>o(e),c=()=>o(n);return{toggle:a,set:r,setLeft:u,setRight:c}}),[]);return[c,l]}t["a"]=u},OCTU:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("uLvW"),u=n.n(r);function c(e){var t=Object(r["useRef"])(e);return t.current=e,t}var o=c;t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],c=t[1],l=o(n);return Object(r["useEffect"])((()=>{var e=setInterval((()=>{c(l.current+1)}),1e3);return()=>clearInterval(e)}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"count: ",n))}},lkYe:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("pYEw"),u=n("VGyh"),c=n("uLvW"),o=n.n(c);t["default"]=()=>{var e=Object(c["useState"])(0),t=Object(a["a"])(e,2),n=t[0],i=t[1],s=Object(c["useCallback"])((()=>{u["a"].info("Current count is ".concat(n))}),[n]),b=Object(r["a"])((()=>{u["a"].info("Current count is ".concat(n))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"count: ",n),o.a.createElement("button",{type:"button",onClick:()=>{i((e=>e+1))}},"Add Count"),o.a.createElement("p",null,"You can click the button to see the number of sub-component renderings"),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useCallback function:"),o.a.createElement(l,{showCount:s})),o.a.createElement("div",{style:{marginTop:32}},o.a.createElement("h3",null,"Component with useMemoizedFn function:"),o.a.createElement(l,{showCount:b})))};var l=o.a.memo((e=>{var t=e.showCount,n=Object(c["useRef"])(0);return n.current+=1,o.a.createElement("div",null,o.a.createElement("p",null,"Render Count: ",n.current),o.a.createElement("button",{type:"button",onClick:t},"showParentCount"))}))},pYEw:function(e,t,n){"use strict";var a=n("uLvW"),r=e=>"function"===typeof e,u=!1,c=u;function o(e){c&&(r(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var t=Object(a["useRef"])(e);t.current=Object(a["useMemo"])((()=>e),[e]);var n=Object(a["useRef"])();return n.current||(n.current=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.current.apply(this,n)}),n.current}t["a"]=o},yQWC:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("uLvW"),u=n.n(r),c=n("VGyh"),o=n("pYEw");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],i=Object(r["useCallback"])((()=>{c["a"].info("Current count is ".concat(n))}),[n]),s=Object(o["a"])((()=>{c["a"].info("Current count is ".concat(n))}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"count: ",n),u.a.createElement("button",{type:"button",onClick:()=>{l((e=>e+1))}},"Add Count"),u.a.createElement("div",{style:{marginTop:16}},u.a.createElement("button",{type:"button",onClick:i},"call callbackFn"),u.a.createElement("button",{type:"button",onClick:s,style:{marginLeft:8}},"call memoizedFn")))}}}]);