(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(29),i=s.n(n),r=s(12),o=s(13),l=s(15),d=s(14),m=s(8),j=s(2),u=s(30),b=s.n(u),h=s.p+"static/media/stripe-icon.5f8a1d1f.png",p=s(0);function O(e){console.log(e);return Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{stripeKey:"pk_test_51JNn34EA934vxoltGlS1lzurj1QbG6dCdUvModYkoNb1qEcTXA6vHck3w8mnmuTj7aNXQkJn4a80wca5qKmRRONn00Q2PcPgbd",message:"Thank you for your order!",token:function(t){var s={token:t,product:e};return fetch("http://localhost:8282/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){console.log("Response: "+e);var t=e.status;console.log("Status"+t)})).catch((function(e){return console.log(e)}))},name:e.title,amount:100*e.price,children:Object(p.jsxs)("button",{className:"btn-large buy-btn",children:[Object(p.jsx)("img",{className:"buy-btn-icon-stripe",style:{width:"30px",position:"relative",right:"14px",marginRight:"10px"},src:h,alt:"stripe-"}),"Buy $",e.price]})})})}s(34);var x=s(18),v=s.n(x),f=s(31);function g(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){window.paypal.Buttons({createOrder:function(t,s,a){return s.order.create({intent:"CAPTURE",purchase_units:[{description:e.title,amount:{currency_code:"USD",value:e.price}}]})},onApprove:function(){var e=Object(f.a)(v.a.mark((function e(t,s){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.order.capture();case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(t.current)}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"paypal-buttons",ref:t})})}s.p;var N=s.p+"static/media/dummy.698cb0d4.jpeg";function y(){return Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"image",className:"product-image",src:N})})}s.p;var k=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("nav",{className:"navbar p-0",children:[Object(p.jsx)(m.b,{to:"/",style:{textDecoration:"none"},children:Object(p.jsx)("span",{className:"logo",children:"Sock Drive"})}),Object(p.jsx)("span",{className:"logo ml-0 mr-0"}),Object(p.jsx)("div",{className:"navbar-links",children:Object(p.jsx)("ul",{children:Object(p.jsx)("li",{children:Object(p.jsx)(m.b,{to:"/contact",children:"Contact Us"})})})})]})})};s(49);function S(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"title",children:"Sock Drive to Help the Homeless"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("div",{className:"product",children:Object(p.jsxs)("p",{className:"desc_intro",children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",Object(p.jsx)("br",{}),"Itaque illum veritatis ullam, ut iste rem. ",Object(p.jsx)("br",{}),"Vel animi doloribus unde quasi dolorem culpa iste. ",Object(p.jsx)("br",{}),"Molestiae dicta modi tenetur officia omnis earum?"]})}),Object(p.jsxs)("div",{className:"row product",children:[Object(p.jsx)("div",{className:"row product-demo1",children:Object(p.jsx)(y,{})}),Object(p.jsx)("div",{className:"payment-methods",children:Object(p.jsx)("div",{className:"row buy-stripe",children:Object(p.jsx)(O,{price:"1",title:"Book"})})}),Object(p.jsx)("div",{className:"desc",children:Object(p.jsxs)("p",{className:"description",children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",Object(p.jsx)("br",{}),"Itaque illum veritatis ullam, ut iste rem. ",Object(p.jsx)("br",{}),"Vel animi doloribus unde quasi dolorem culpa iste. ",Object(p.jsx)("br",{}),"Molestiae dicta modi tenetur officia omnis earum?"]})})]}),Object(p.jsxs)("div",{className:"row product",children:[Object(p.jsx)("div",{className:"row product-demo2",children:Object(p.jsx)(y,{})}),Object(p.jsx)("div",{className:"payment-methods",children:Object(p.jsx)("div",{className:"row buy-stripe",children:Object(p.jsx)(O,{price:"5",title:"Book"})})}),Object(p.jsx)("div",{className:"desc",children:Object(p.jsxs)("p",{className:"description",children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. ",Object(p.jsx)("br",{}),"Itaque illum veritatis ullam, ut iste rem. ",Object(p.jsx)("br",{}),"Vel animi doloribus unde quasi dolorem culpa iste. ",Object(p.jsx)("br",{}),"Molestiae dicta modi tenetur officia omnis earum?"]})})]})]})]})}var w=s(33),C=s.n(w),E=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).state={name:"",email:"",message:""},a}return Object(o.a)(s,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),C()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"contact",children:Object(p.jsxs)("form",{className:"contactForm",id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"name",children:"Name"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"message",children:"Message"}),Object(p.jsx)("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),s}(c.a.Component),M=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"app",basename:"/index.html",children:Object(p.jsx)(m.a,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(j.a,{exact:!0,path:"/paypal-payment",component:g}),Object(p.jsx)(j.a,{exact:!0,path:"/contact",component:E})]})})})}}]),s}(a.Component),q=M;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8894d7e9.chunk.js.map