(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{79:function(n,t,e){"use strict";e.r(t);var i,r,c,a,o,s=e(0),d=e(10),j=e.n(d),l=e(45),u=e(26),b=e(49),x=e(48),h=e.n(x),p=e(53),m=e(115),O=e(106),f=e(19),v=e(20),g=v.a.div(i||(i=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    font-family: Arial, Helvetica, sans-serif;\n    border-bottom: 1px solid lightblue;\n    padding-bottom: 20px;\n\n    div {\n        flex: 1;\n    }\n    \n    .information, .buttons {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    img {\n        max-width: 80px;\n        object-fit: cover;\n        margin-left: 40px;\n    }\n"]))),C=e(4),w=function(n){var t=n.item,e=n.addToCart,i=n.removeFromCart;return Object(C.jsxs)(g,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsxs)("div",{className:"information",children:[Object(C.jsxs)("p",{children:["Price: $",t.price]}),Object(C.jsxs)("p",{children:["Total: $",(t.amount*t.price).toFixed(2)]})]}),Object(C.jsxs)("div",{className:"buttons",children:[Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return i(t.id)},children:"-"}),Object(C.jsx)("p",{children:t.amount}),Object(C.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",onClick:function(){return e(t)},children:"+"})]})]}),Object(C.jsx)("img",{src:t.image,alt:t.title})]})},y=v.a.aside(r||(r=Object(f.a)(["\n    font-family: Arial, Helvetica, sans-serif;\n    width: 500px;\n    padding: 20px;\n"]))),k=function(n){var t,e=n.cartItems,i=n.addToCart,r=n.removeFromCart;return Object(C.jsxs)(y,{children:[Object(C.jsx)("h2",{children:"Your Shopping Cart"}),0===e.length?Object(C.jsx)("p",{children:"No items in the cart."}):null,e.map((function(n){return Object(C.jsx)(w,{item:n,addToCart:i,removeFromCart:r},n.id)})),Object(C.jsxs)("h2",{children:["Total: $",(t=e,t.reduce((function(n,t){return n+t.amount*t.price}),0)).toFixed(2)]})]})},T=v.a.div(c||(c=Object(f.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    border: 1px solid lightblue;\n    border-radius: 20px;\n    height: 100%;\n\n    button {\n        border-radius: 0 0 20px 20px;\n    }\n\n    img {\n        max-height: 250px;\n        object-fit: cover;\n        border-radius: 20px 20px 0 0;\n    }\n\n    div {\n        font-family: Arial, Helvetica, sans-serif;\n        padding: 1rem;\n        height: 100%\n    }\n"]))),A=function(n){var t=n.item,e=n.handleAddToCart;return Object(C.jsxs)(T,{children:[Object(C.jsx)("img",{src:t.image,alt:t.title}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:t.title}),Object(C.jsx)("p",{children:t.description}),Object(C.jsxs)("h3",{children:["$",t.price]})]}),Object(C.jsx)(O.a,{onClick:function(){return e(t)},children:"Add to Cart"})]})},F=e(113),S=e(110),$=e(112),z=e(58),E=e.n(z),H=e(111),I=e(109),N=v.a.div(a||(a=Object(f.a)(["\n    margin: 40px;\n"]))),J=Object(v.a)(I.a)(o||(o=Object(f.a)(["\n    position: fixed;\n    z-index: 100;\n    right: 20px;\n    top: 20px;\n"]))),P=function(){var n=Object(p.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){var n,t=Object(s.useState)(!1),e=Object(b.a)(t,2),i=e[0],r=e[1],c=Object(s.useState)([]),a=Object(b.a)(c,2),o=a[0],d=a[1],j=Object(m.a)("Products",P),x=j.data,h=j.isLoading,p=j.error,O=function(n){d((function(t){return t.find((function(t){return t.id===n.id}))?t.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},n),{},{amount:1})])}))};return h?Object(C.jsx)(S.a,{}):p?Object(C.jsx)("div",{children:"Something Went Wrong..."}):Object(C.jsxs)(N,{children:[Object(C.jsx)(F.a,{anchor:"right",open:i,onClose:function(){return r(!1)},children:Object(C.jsx)(k,{cartItems:o,addToCart:O,removeFromCart:function(n){d((function(t){return t.reduce((function(t,e){return e.id===n?1===e.amount?t:[].concat(Object(l.a)(t),[Object(u.a)(Object(u.a)({},e),{},{amount:e.amount-1})]):[].concat(Object(l.a)(t),[e])}),[])}))}})}),Object(C.jsx)(J,{onClick:function(){return r(!0)},children:Object(C.jsx)(H.a,{badgeContent:(n=o,n.reduce((function(n,t){return n+t.amount}),0)),color:"error",children:Object(C.jsx)(E.a,{})})}),Object(C.jsx)($.a,{container:!0,spacing:3,children:null===x||void 0===x?void 0:x.map((function(n){return Object(C.jsx)($.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(A,{item:n,handleAddToCart:O})},n.id)}))})]})},B=e(114),L=e(57),Y=new B.a;j.a.render(Object(C.jsx)(L.a,{client:Y,children:Object(C.jsx)(W,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.9e27ad63.chunk.js.map