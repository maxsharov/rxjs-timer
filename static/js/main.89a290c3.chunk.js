(this["webpackJsonprxjs-timer"]=this["webpackJsonprxjs-timer"]||[]).push([[0],{19:function(t,e,c){},20:function(t,e,c){},21:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),i=c.n(s),r=c(13),b=c.n(r),a=(c(19),c(4)),u=function(t){var e=Object(s.useState)(0),c=Object(a.a)(e,2),i=c[0],r=c[1],b=Object(s.useState)(0),u=Object(a.a)(b,2),j=u[0],o=u[1],O=Object(s.useState)(0),l=Object(a.a)(O,2),f=l[0],d=l[1];return Object(s.useEffect)((function(){var e=Math.floor(t.timePassed/3600);r((function(){return(1===e.toString().length?"0":"")+e}));var c=Math.floor(t.timePassed%3600/60);o((function(){return(1===c.toString().length?"0":"")+c}));var n=t.timePassed%60;d((function(){return(1===n.toString().length?"0":"")+n}))}),[t.timePassed]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h3",{children:[i,":",j,":",f]})})},j=c(25),o=c(24);c(20);var O=function(){var t=Object(s.useState)(0),e=Object(a.a)(t,2),c=e[0],i=e[1],r=Object(s.useState)(0),b=Object(a.a)(r,2),O=b[0],l=b[1],f=Object(s.useState)(""),d=Object(a.a)(f,2),h=d[0],m=d[1],x=Object(s.useState)(!0),S=Object(a.a)(x,2),v=S[0],p=S[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"RxJS Timer"}),Object(n.jsx)("hr",{}),Object(n.jsx)(u,{timePassed:c||O}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){if(h)h.unsubscribe(),i(0),l(0),m("");else{var t=Object(j.a)(1e3).pipe(Object(o.a)((function(t){return t+1}))).subscribe((function(t){i(t+O)}));m(t)}},className:"btn btn-success",children:"Start/stop"}),Object(n.jsx)("button",{onClick:function(t){if(v){p(!1);var e=setTimeout((function(){p(!0),clearTimeout(e)}),300)}else h&&h.unsubscribe(),l(c),m("")},className:"btn btn-success",children:"Wait"}),Object(n.jsx)("button",{onClick:function(){h&&h.unsubscribe();var t=Object(j.a)(1e3).subscribe((function(t){i(t)}));m(t)},className:"btn btn-success",children:"Reset"})]})]})};b.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.89a290c3.chunk.js.map