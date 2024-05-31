(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{MZF8:function(n,e,t){"use strict";var o=t("ogwx");t.d(e,"a",(function(){return o["b"]}));t("VCU9")},OYlG:function(n,e,t){"use strict";t.r(e);var o=t("mn0l"),r=t("uLvW"),i=t.n(r),s=t("RGYn"),u=t("DBVu"),c=t("GAyR"),a=t("7JWa"),l="import React, { useState, useCallback } from 'react';\nimport { message } from 'antd';\nimport { useMemoizedFn } from 'jalymg-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const callbackFn = useCallback(() => {\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>count: {count}</p>\n      <button\n        type=\"button\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </button>\n      <div style={{ marginTop: 16 }}>\n        <button type=\"button\" onClick={callbackFn}>\n          call callbackFn\n        </button>\n        <button type=\"button\" onClick={memoizedFn} style={{ marginLeft: 8 }}>\n          call memoizedFn\n        </button>\n      </div>\n    </>\n  );\n};",d="import { useMemoizedFn } from 'jalymg-hooks';\nimport { message } from 'antd';\nimport React, { useCallback, useRef, useState } from 'react';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const callbackFn = useCallback(() => {\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>count: {count}</p>\n      <button\n        type=\"button\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </button>\n\n      <p>You can click the button to see the number of sub-component renderings</p>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>Component with useCallback function:</h3>\n        {/* use callback function, ExpensiveTree component will re-render on state change */}\n        <ExpensiveTree showCount={callbackFn} />\n      </div>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>Component with useMemoizedFn function:</h3>\n        {/* use memoized function, ExpensiveTree component will only render once */}\n        <ExpensiveTree showCount={memoizedFn} />\n      </div>\n    </>\n  );\n};\n\n// some expensive component with React.memo\nconst ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {\n  const renderCountRef = useRef(0);\n  renderCountRef.current += 1;\n\n  return (\n    <div>\n      <p>Render Count: {renderCountRef.current}</p>\n      <button type=\"button\" onClick={showCount}>\n        showParentCount\n      </button>\n    </div>\n  );\n});",p="import React from 'react';\nimport { useToggle } from 'jalymg-hooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Toggle True\n        </button>\n      </p>\n    </div>\n  );\n};",m="import React from 'react';\nimport { useToggle } from 'jalymg-hooks';\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          Toggle\n        </button>\n        <button type=\"button\" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>\n          Set Hello\n        </button>\n        <button type=\"button\" onClick={() => set('World')}>\n          Set World\n        </button>\n        <button type=\"button\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Left\n        </button>\n        <button type=\"button\" onClick={setRight}>\n          Set Right\n        </button>\n      </p>\n    </div>\n  );\n};",b={"usememoizedfn-demo1":{component:Object(a["dynamic"])({loader:function(){var n=Object(c["a"])(Object(u["a"])().mark((function n(){return Object(u["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(1),t.e(11),t.e(4)]).then(t.bind(null,"yQWC"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.17.4"},"jalymg-hooks":{version:"0.2.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useMemoizedFn \u4e0e useCallback \u53ef\u4ee5\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\u3002</p></div>',identifier:"usememoizedfn-demo1"}},"usememoizedfn-demo2":{component:Object(a["dynamic"])({loader:function(){var n=Object(c["a"])(Object(u["a"])().mark((function n(){return Object(u["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(1),t.e(11),t.e(4)]).then(t.bind(null,"lkYe"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{"jalymg-hooks":{version:"0.2.0"},antd:{version:"5.17.4"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},title:"useMemoizedFn \u51fd\u6570\u5730\u5740\u4e0d\u4f1a\u53d8\u5316\uff0c\u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u4f18\u5316",hideActions:["CSB"],description:'<div class="markdown"><p>\u793a\u4f8b\u4e2d <code>memoizedFn</code> \u662f\u4e0d\u4f1a\u53d8\u5316\u7684\uff0c<code>callbackFn</code> \u5728 count \u53d8\u5316\u65f6\u53d8\u5316\u3002</p></div>',identifier:"usememoizedfn-demo2"}},"usetoggle-demo1":{component:Object(a["dynamic"])({loader:function(){var n=Object(c["a"])(Object(u["a"])().mark((function n(){return Object(u["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(1),t.e(11),t.e(4)]).then(t.bind(null,"82LI"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"jalymg-hooks":{version:"0.2.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(a["dynamic"])({loader:function(){var n=Object(c["a"])(Object(u["a"])().mark((function n(){return Object(u["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(1),t.e(11),t.e(4)]).then(t.bind(null,"Dr+N"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"jalymg-hooks":{version:"0.2.0"}},title:"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",hideActions:["CSB"],description:'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}}},g=t("Zs1V"),f=t("6ckQ"),h=t.n(f);e["default"]=n=>i.a.createElement(h.a,Object(o["a"])({},n,{config:s,demos:b,apis:g}))},RGYn:function(n){n.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"}]},{"title":"\u8fdb\u9636","children":[{"path":"/hooks/use-memoized-fn","title":"useMemoizedFn"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/lijintsang/jalymg-hooks"}]},"title":"jalymg hooks","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(n){n.exports=JSON.parse("{}")}}]);