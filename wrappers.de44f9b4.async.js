(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{MZF8:function(t,e,n){"use strict";var o=n("ogwx");n.d(e,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(t,e,n){"use strict";n.r(e);var o=n("mn0l"),s=n("uLvW"),i=n.n(s),r=n("RGYn"),l=n("DBVu"),u=n("GAyR"),a=n("7JWa"),c="import React from 'react';\nimport { useToggle } from 'jalymg-hooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",p="import React from 'react';\nimport { useToggle } from 'jalymg-hooks';\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>\n          Set Hello\n        </button>\n        <button type=\"button\" onClick={() => set('World')}>\n          Set World\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Left\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Set Right\n        </button>\n      </p>\n    </div>\n  );\n};",g={"usetoggle-demo1":{component:Object(a["dynamic"])({loader:function(){var t=Object(u["a"])(Object(l["a"])().mark((function t(){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,"82LI"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"jalymg-hooks":{version:"0.1.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(a["dynamic"])({loader:function(){var t=Object(u["a"])(Object(l["a"])().mark((function t(){return Object(l["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.bind(null,"Dr+N"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"jalymg-hooks":{version:"0.1.0"}},title:"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",hideActions:["CSB"],description:'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}}},d=n("Zs1V"),b=n("6ckQ"),m=n.n(b);e["default"]=t=>i.a.createElement(m.a,Object(o["a"])({},t,{config:r,demos:g,apis:d}))},RGYn:function(t){t.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/lijintsang/jalymg-hooks"}]},"title":"jalymg hooks","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(t){t.exports=JSON.parse("{}")}}]);