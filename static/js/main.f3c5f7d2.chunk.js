(this.webpackJsonpdroppexmas=this.webpackJsonpdroppexmas||[]).push([[0],{38:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),i=c.n(s),d=(c(38),c(2)),a=c(3),o=c(9),u=c(7),l=c(33),j=c(13),p={products:[],fullPrice:0,fullPriceNoDiscount:0},b=Object(j.b)({name:"products",initialState:p,reducers:{setProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,c=Object(l.a)(t.payload);e.products=c.slice(0)},changeProductPrice:function(e,t){var c=Object(u.a)(e.products),n=c.findIndex((function(e){return e.id===t.payload.id}));-1!==n&&(c[n]=Object(o.a)(Object(o.a)({},c[n]),{},{discount:t.payload.discount})),e.products=c},fullPrice:function(e,t){e.fullPrice=t.payload},sumPriceNoDiscount:function(e,t){e.fullPriceNoDiscount=t.payload}}}),h=b.actions,x=h.setProduct,f=h.changeProductPrice,O=h.fullPrice,m=h.sumPriceNoDiscount,v=b.reducer,g=c(8),I=c.n(g),y=c(11),N=c(4),C=c(21),P=c.n(C),w=P.a.create({baseURL:"https://fakestoreapi.com/products"}),k=c(0),D=function(e){var t=e.productId,c=Object(n.useState)(!1),r=Object(N.a)(c,2),s=r[0],i=r[1],d=Object(a.c)((function(e){return e.products.products})),o=Object(n.useState)({title:"",price:0,img:"",id:0,discount:""}),u=Object(N.a)(o,2),l=u[0],j=u[1],p=function(){var e=Object(y.a)(I.a.mark((function e(){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,w.get("/".concat(t));case 4:c=e.sent,j({title:c.data.title,price:c.data.price,img:c.data.image,id:t,discount:null!==t?d.find((function(e){return e.id===t})).discount:""}),i(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[t,d]),Object(k.jsx)(k.Fragment,{children:s?Object(k.jsx)("h2",{children:"Loading..."}):Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"cardItems flex",style:{gap:96},children:[Object(k.jsx)("img",{src:l.img,style:{height:100,width:96},alt:""}),Object(k.jsxs)("div",{className:"flex  flex-col items-start justify-center",children:[Object(k.jsx)("p",{id:"product_title",children:l.title}),Object(k.jsxs)("span",{children:[l.price,"\u20ac"]}),l.discount?Object(k.jsxs)("span",{className:"text-lg discount",children:["-",l.discount,"%"]}):""]})]})})})},A=function(e){var t=e.acceptedProducts;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("span",{id:"approvedLength",className:"approvedSpan",children:["Approved items - ",t.length]}),Object(k.jsx)("div",{className:"flex flex-col",style:{gap:16,marginTop:16},children:t.map((function(e){return Object(k.jsx)("div",{className:"approved items-center flex productContainer",children:Object(k.jsx)(D,{productId:e.productId})},e.productId)}))})]})},S=function(e){var t=e.userId,c=Object(n.useState)(""),r=Object(N.a)(c,2),s=r[0],i=r[1],d=Object(a.c)((function(e){return e.children})).children;return Object(n.useMemo)((function(){var e=d.find((function(e){return e.id===t}));return i(e),function(){}}),[t,d]),Object(k.jsxs)("div",{className:"flex flex-col items-center cardUserContainer",children:[Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:48,height:48},viewBox:"0 0 20 20",fill:"currentColor",children:Object(k.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",clipRule:"evenodd"})}),Object(k.jsxs)("h2",{className:"text-4xl approved",children:[s.name,"'s wishlist"]})]})},F=function(){var e=Object(a.c)((function(e){return e.children.ChildrenApprovedItems}));return Object(k.jsx)("div",{children:e.map((function(e,t){return console.log(e),Object(k.jsxs)("div",{className:"testi",style:{paddingBottom:16},children:[Object(k.jsx)(S,{userId:e.userId}),Object(k.jsx)(A,{acceptedProducts:e.products})]},t)}))})},L=function(e){var t=e.items;return Object(k.jsx)("div",{children:t&&Object(k.jsx)("h2",{style:{textAlign:"center"},children:"No items added yet "})})},T=function(e){var t=e.declinedProducts;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("span",{id:"declinedLength",className:"declinedSpan ",children:["Declined items - ",t.length]}),Object(k.jsx)("div",{className:"flex flex-col",style:{gap:16,marginTop:16},children:t.map((function(e){return Object(k.jsx)("div",{className:"declined items-center flex productContainer",children:Object(k.jsx)(D,{productId:e.productId})},e.productId)}))})]})},B=function(e){var t=e.items,c=Object(a.c)((function(e){return e.children.ChildrenDiscardedItems}));return Object(k.jsxs)("div",{style:{marginTop:36},children:[t?"":Object(k.jsx)("h2",{style:{color:"red"},children:"Discarded items"}),c.map((function(e){return Object(k.jsxs)("div",{className:"declinedSpan",children:[Object(k.jsx)(S,{userId:e.userId}),Object(k.jsx)(T,{declinedProducts:e.products})]})}))]})},q=c(12),M=function(e){var t=e.items;return Object(k.jsxs)("div",{className:"flex items-center justify-between",children:[Object(k.jsx)("h1",{children:"Your cart"}),Object(k.jsx)(q.b,{to:"/cartNext",children:Object(k.jsx)("button",{disabled:t,style:{marginTop:16},className:"text-lg",children:"Next Step"})})]})},z=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.children.cart})),c=Object(a.c)((function(e){return e.children.ChildrenDiscardedItems})),n=Object(a.c)((function(e){return e.products.products}));return 0===t.length?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(M,{items:0===t.length&&0===c.length}),Object(k.jsx)(L,{items:0===t.length&&0===c.length})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)(M,{items:0===t.length&&0===c.length}),Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{children:"Total Price"}),Object(k.jsxs)("p",{children:[function(){var c=[];if(t.map((function(t){if(t.quantity>1){var r=function(e,t){var c=n.find((function(t){return t.id===e}));if(c){var r=c.price*t;return r-r*(10*t/100)}}(t.productId,t.quantity);return e(O(r.toFixed(2))),c.push(r)}var s=function(t,c){var r=n.find((function(e){return e.id===t}));if(r){var s=r.price*c;return e(m(s)),s}}(t.productId,t.quantity);return c.push(s)})),0===c.length)return"";var r=c.reduce((function(e,t){return e+t}));return e(O(r.toFixed(2))),r}().toFixed(2)," \u20ac"]})]}),Object(k.jsx)(F,{}),Object(k.jsx)(B,{items:0===c.length})]})},E=P.a.create({baseURL:"https://fakestoreapi.com/carts"}),R=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),c=t[0],r=t[1],s=Object(d.f)(),i=function(){var e=Object(y.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,E.post("/",{products:u});case 4:t=e.sent,s("/Droppe-Xmas"),r(!1),console.log(t),window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),o=Object(a.c)((function(e){return e.products.fullPrice})),u=Object(a.c)((function(e){return e.children.cart}));return c?Object(k.jsx)("h2",{className:"text-4xl",style:{textAlign:"center"},children:"Thank you for your purchase!"}):Object(k.jsxs)("div",{children:[Object(k.jsxs)("h2",{children:["Total Price: ",o," \u20ac"]}),Object(k.jsx)("button",{type:"submit",onClick:function(){return i()},children:"Submit Cart"}),u.map((function(e){return Object(k.jsxs)("div",{className:"grid grid-cols-2 confirmedBox",style:{marginTop:20},children:[Object(k.jsx)("div",{className:"flex items-center justify-center",children:Object(k.jsx)(D,{productId:e.productId})}),Object(k.jsx)("div",{className:"flex items-center justify-center confirmedBorder",children:Object(k.jsxs)("p",{children:["Quantity: ",e.quantity]})})]},e.productId)}))]})},X=Object(j.b)({name:"children",initialState:{children:[{name:"Ari",id:1},{name:"Jari",id:2},{name:"Ella",id:3},{name:"Pekka",id:4},{name:"Anssi",id:5}],ChildrenApprovedItems:[],ChildrenDiscardedItems:[],cart:[]},reducers:{getChildren:function(e,t){return e.children},setChildrenItemApproved:function(e,t){var c=Object(u.a)(e.ChildrenApprovedItems),n=c.findIndex((function(e){return e.userId===t.payload.userId}));-1!==n?c[n].products.push(t.payload.products[0]):c.push(t.payload),e.ChildrenApprovedItems=c},setChildrenItemDiscarded:function(e,t){var c=Object(u.a)(e.ChildrenDiscardedItems),n=c.findIndex((function(e){return e.userId===t.payload.userId}));-1!==n?c[n].products.push(t.payload.products[0]):c.push(t.payload),e.ChildrenDiscardedItems=c},setCartItems:function(e,t){var c=Object(u.a)(e.cart),n={productId:t.payload.productId,quantity:1},r=c.findIndex((function(e){return e.productId===t.payload.productId}));-1!==r?c[r].quantity++:c.push(n),e.cart=c},addProductsFromApi:function(e,t){e.products=t.payload},changeProductPrice:function(e,t){var c=Object(u.a)(e.ChildrenApprovedItems),n=c.findIndex((function(e){return e.id===t.payload.id}));-1!==n&&(c[n]=Object(o.a)(Object(o.a)({},c[n]),{},{discount:t.payload.discount})),e.products=c}}}),J=X.actions,U=(J.getChildren,J.setChildrenItemApproved),H=J.setChildrenItemDiscarded,Y=J.setCartItems,Q=X.reducer,W=function(){return Object(k.jsx)("div",{className:"flex flex-col loading",children:Object(k.jsx)("h1",{className:"text-6xl",children:"Loading ..."})})},_=function(e){var t=e.products,c=e.userId,r=Object(n.useState)([]),s=Object(N.a)(r,2),i=s[0],d=s[1],o=Object(n.useState)(!1),l=Object(N.a)(o,2),j=l[0],p=l[1],b=Object(n.useState)([]),h=Object(N.a)(b,2),x=h[0],O=h[1],m=Object(n.useState)([]),v=Object(N.a)(m,2),g=v[0],C=v[1],P=Object(a.c)((function(e){return e.children.ChildrenApprovedItems})),w=function(){var e=Object(y.a)(I.a.mark((function e(){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,E.get(t);case 4:c=e.sent,console.log(c),C(c.data.products),p(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),F=Object(a.b)(),L=function(e){var t=[];P.map((function(e){return e.products.map((function(e){return t.push(e)}))}));var c=t.filter((function(t){return t.productId===e}));c.length&&F(f({id:e,discount:10*(c.length+1)}))},B=function(e){var t=Object(u.a)(g);C(t.filter((function(t){return t.productId!==e.productId})))};return Object(n.useEffect)((function(){w()}),[]),Object(k.jsx)(k.Fragment,{children:j?Object(k.jsx)(W,{}):Object(k.jsxs)("article",{className:"card",id:"container",children:[Object(k.jsxs)("div",{className:"testing",children:[Object(k.jsx)(S,{userId:c}),g.map((function(e){return Object(k.jsx)("div",{className:"cardItems",children:Object(k.jsxs)("div",{className:"productContainer grid grid-cols-1",children:[Object(k.jsx)(D,{productId:e.productId},e.productId),Object(k.jsxs)("div",{className:"flex col-start-3 items-center justify-end cardBtns",children:[Object(k.jsx)("button",{type:"submit",onClick:function(){return function(e,t){console.log(e);var n=[].concat(Object(u.a)(i),[e]);d(n),B(e),F(U({userId:c,products:[e]})),F(Y({productId:e.productId,quantity:e.quantity})),L(e.productId)}(e)},className:"buttonAccept",children:"Accept"}),Object(k.jsx)("button",{type:"submit",onClick:function(){return function(e){var t=[].concat(Object(u.a)(x),[e]);O(t),B(e),F(H({userId:c,products:[e]}))}(e)},className:"buttonDelete",children:"Delete"})]})]})},e.productId)}))]}),Object(k.jsxs)("div",{className:"flex flex-col items-center justify-center approvedContainer",children:[Object(k.jsx)(A,{acceptedProducts:i}),Object(k.jsx)(T,{declinedProducts:x})]})]})})},G=function(){var e=Object(a.c)((function(e){return e.children})).children,t=Object(a.b)(),c=function(){var e=Object(y.a)(I.a.mark((function e(){var c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("");case 3:c=e.sent,t(x(c.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(k.jsx)("section",{className:"flex flex-col wishListContainer",children:e.map((function(e){return Object(k.jsx)(_,{userId:e.id,products:"/".concat(e.id)},e.id)}))})},K=function(){return Object(k.jsx)("main",{children:Object(k.jsx)(G,{})})},V=function(){var e=Object(a.c)((function(e){return e.children.ChildrenApprovedItems}));return Object(k.jsx)("nav",{children:Object(k.jsxs)("div",{className:"navContainer flex",children:[Object(k.jsx)("div",{children:Object(k.jsx)(q.b,{to:"/Droppe-Xmas",children:Object(k.jsx)("h2",{className:"text-3xl navh2",children:"Droppe Xmas"})})}),Object(k.jsx)("div",{children:Object(k.jsx)(q.b,{to:"/cart",children:Object(k.jsxs)("button",{className:"navBtn flex",children:[Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:32,height:32},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(k.jsx)("span",{className:"text-base",children:"Your Choices"}),Object(k.jsx)("span",{className:"text-md",children:function(){var t=Object(u.a)(e),c=0;return t.map((function(e){return e.products.map((function(){return c++}))})),c}()})]})})})]})})};var Z=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(V,{}),Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/Droppe-Xmas",element:Object(k.jsx)(K,{})}),Object(k.jsx)(d.a,{path:"/cart",element:Object(k.jsx)(z,{})}),Object(k.jsx)(d.a,{path:"/cartNext",element:Object(k.jsx)(R,{})})]})})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))},ee=Object(j.a)({reducer:{products:v,children:Q}});i.a.render(Object(k.jsx)(q.a,{children:Object(k.jsx)(a.a,{store:ee,children:Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Z,{})})})}),document.getElementById("root")),$()}},[[65,1,2]]]);
//# sourceMappingURL=main.f3c5f7d2.chunk.js.map