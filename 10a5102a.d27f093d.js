(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=(n(0),n(180));const o={id:"start32",title:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440",sidebar_label:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440"},c={id:"start32",title:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440",description:"\u0421\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e \u0440\u0435\u0448\u0435\u043d\u0438\u0435.",source:"@site/docs/start32.md",permalink:"/docs/start32",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start32.md",sidebar_label:"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440",sidebar:"someSidebar",previous:{title:"React Children",permalink:"/docs/start31"},next:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",permalink:"/docs/reactNavigation2-00"}},i=[],l={rightToc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0421\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u043c\u043d\u043e\u0433\u0438\u0445. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044e \u0440\u0435\u0448\u0435\u043d\u0438\u0435."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://miro.medium.com/max/4800/1*egojVEXa1_MOTvg521DsOg.gif",alt:"selector"}))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react'\nimport { StyleSheet, View, Text, TouchableOpacity } from 'react-native'\n\nconst data = [\n  {\n    id: 1,\n    title: 'gold'\n  },\n  {\n    id: 2,\n    title: 'pink'\n  },\n  {\n    id: 3,\n    title: 'green'\n  }\n]\n\nconst numbers = ['one', 'two', 'three']\n\nconst App = () => {\n  const [value, setValue] = useState({\n    one: true,\n    two: false,\n    three: false\n  })\n\n  const _onChangeState = number => () => {\n    const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})\n    setValue({ ...defaultObject, [numbers[number - 1]]: true })\n  }\n\n  return (\n    <View style={styles.container}>\n      {data.map(({ id, title }) => {\n        const check = value[numbers[id - 1]]\n        return (\n          <TouchableOpacity key={id} onPress={_onChangeState(id)}>\n            <Text style={check ? styles[title] : styles.default}>{`${check}`}</Text>\n          </TouchableOpacity>\n        )\n      })}\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center'\n  },\n  gold: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: 40,\n    backgroundColor: 'gold',\n    alignSelf: 'center',\n    width: 300\n  },\n  pink: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: 40,\n    backgroundColor: 'pink',\n    width: 300\n  },\n  green: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: 40,\n    backgroundColor: 'green',\n    width: 300\n  },\n  default: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: 40,\n    width: 300\n  }\n})\n\nexport default App\n")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=31769291"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"/img/logo/patreon.png",alt:"Become a Patron!"})))))}u.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);