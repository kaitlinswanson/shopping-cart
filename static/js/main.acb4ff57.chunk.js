(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{11:function(e,s,t){},25:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(18),d=t.n(i),n=(t(25),t(20)),r=t(17),l=(t(11),t(8)),j=t(0);var o=function(e){var s=e.count,t={color:"white"};return Object(j.jsxs)("nav",{children:[Object(j.jsx)(l.b,{style:t,to:"/",children:Object(j.jsx)("h2",{className:"home-link",children:"Nostalgia"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(l.b,{style:t,to:"/shop",children:Object(j.jsx)("li",{children:"Shop"})}),Object(j.jsx)(l.b,{style:t,to:"/cart",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),s]})})]})]})};var m=function(e){function s(s){e.addToCart(s),e.increaseTotal()}return Object(j.jsx)("div",{className:"shop",children:Object(j.jsxs)("div",{className:"card-holder",children:[Object(j.jsxs)("div",{className:"item-card",id:"item-1",children:[Object(j.jsx)("img",{className:"item-images",id:"tamagotchi-img",alt:"tamagotchi",src:"https://www.bandai.com/wp-content/uploads/42876A.jpg"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Tamagotchi Toy"}),Object(j.jsx)("button",{onClick:s,id:"Tamagotchi Toy",className:"add-cart-buttons",value:"1",children:"Add"})]})]}),Object(j.jsxs)("div",{className:"item-card",id:"item-2",children:[Object(j.jsx)("img",{className:"item-images",id:"furby-img",alt:"furby",src:"https://cdn.vox-cdn.com/thumbor/4mLPI9E-cl3ONBU1Z-y3snlZcQ8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13642126/Furbies_2.jpg"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Furby Toy"}),Object(j.jsx)("button",{onClick:s,id:"Furby Toy",className:"add-cart-buttons",children:"Add"})]})]}),Object(j.jsxs)("div",{className:"item-card",id:"item-3",children:[Object(j.jsx)("img",{className:"item-images",id:"sandals-img",alt:"slide sandals",src:"https://cdn.shopify.com/s/files/1/2170/8465/products/STEVEMADDEN-SANDALS_SLINKY30_BLACK_SIDE_grande.jpg?v=1581448804"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Slide Sandals"}),Object(j.jsx)("button",{onClick:s,id:"Slide Sandals",className:"add-cart-buttons",children:"Add"})]})]}),Object(j.jsxs)("div",{className:"item-card",id:"item-4",children:[Object(j.jsx)("img",{className:"item-images",id:"handbag-img",alt:"small handbag",src:"https://hips.hearstapps.com/cos.h-cdn.co/assets/16/31/1024x1024/square-1470075457-louisvuitton-1.jpg?resize=480:*"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Tiny Handbag"}),Object(j.jsx)("button",{onClick:s,id:"Tiny Handbag",className:"add-cart-buttons",children:"Add"})]})]}),Object(j.jsxs)("div",{className:"item-card",id:"item-5",children:[Object(j.jsx)("img",{className:"item-images",id:"pepsi-img",alt:"crystal Pepsi bottle",src:"https://i5.walmartimages.com/asr/da177328-8d3a-4f69-89c0-669b247695bd_1.798d89d0b9c041cdde16e3417f0a8cd4.jpeg"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Clear Pepsi"}),Object(j.jsx)("button",{onClick:s,id:"Clear Pepsi",className:"add-cart-buttons",children:"Add"})]})]}),Object(j.jsxs)("div",{className:"item-card",id:"item-6",children:[Object(j.jsx)("img",{className:"item-images",id:"gameboy-img",alt:"gameboy",src:"https://cdna.artstation.com/p/assets/images/images/012/443/324/large/m-h-sr-01-00000.jpg?1534838164"}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"item-descriptions",children:"Game Boy"}),Object(j.jsx)("button",{onClick:s,id:"Game Boy",className:"add-cart-buttons",children:"Add"})]})]})]})})};var b=function(e){var s=e.cart,t=e.count;return Object(j.jsxs)("div",{className:"cart-div",children:[Object(j.jsx)("h1",{className:"cart-title",children:"Cart"}),Object(j.jsxs)("div",{className:"shopping-cart-holder",children:[s.map((function(e){return Object(j.jsx)("div",{className:"items",children:e.text},e.key)})),Object(j.jsxs)("div",{className:"shopping-cart-counter",children:["Total Items:",t]})]})]})},h=t(2);var x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{id:"home-image",alt:"90s skateboarding girl",src:"https://i1.sndcdn.com/artworks-jpIdvMOSCrtojB1f-Hwux6A-t500x500.jpg"})})},O=function(){var e=Object(c.useState)([]),s=Object(r.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(0),d=Object(r.a)(i,2),O=d[0],p=d[1];return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{count:O}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",component:x}),Object(j.jsx)(h.a,{exact:!0,path:"/shop",children:Object(j.jsx)(m,{increaseTotal:function(){p((function(e){return e+1}))},setCart:a,addToCart:function(e){a((function(s){return[].concat(Object(n.a)(s),[{text:e.target.id,key:1e3*Math.random(),quantity:parseFloat(e.target.value)+1}])})),console.log(t)}})}),Object(j.jsx)(h.a,{exact:!0,path:"/cart",children:Object(j.jsx)(b,{cart:t,count:O})})]})]})})};d.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.acb4ff57.chunk.js.map