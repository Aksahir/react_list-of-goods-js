(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(6),c=n.n(s),i=n(5),r=n(7),o=(n(12),n(13),n(1)),a=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l="name",b="length";var j=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),j=Object(i.a)(c,2),d=j[0],h=j[1],f=function(t,e){var n=e.sortField,s=e.reverseField,c=Object(r.a)(t);return n&&c.sort((function(t,e){switch(n){case l:return t.localeCompare(e);case b:return t[n]-e[n];default:return 0}})),s&&c.reverse(),c}(u,{sortField:n,reverseField:d});return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:n===l?"button is-info":"button is-info is-light",onClick:function(){return s(l)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:n===b?"button is-success":"button is-success is-light",onClick:function(){return s(b)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:d?"button is-warning":"button is-warning is-light",onClick:function(){return h(!d)},children:"Reverse"}),(n||d)&&Object(a.jsx)("button",{type:"button",className:""===n&&"button is-danger is-light",onClick:function(){s(""),h(!1)},children:"Reset"})]}),Object(a.jsx)("ul",{children:f.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cb0b14ee.chunk.js.map