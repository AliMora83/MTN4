(this["webpackJsonpreact-firebase-crud-app"]=this["webpackJsonpreact-firebase-crud-app"]||[]).push([[0],{72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(29),s=c.n(n),o=c(14),i=c(80),d=c(78),j=c(79),l=c(60),u=c(0),b=c.n(u),h=c(5),O=c(82),x=c(81),f=c(83),p=c(75),m=c(76),v=c(2),g=c(59),k=c(28),B=Object(g.a)({apiKey:"AIzaSyDqw2SYZJIDadrsiVCEXZfj8TmF6ttCVe8",authDomain:"edutech-f4ece.firebaseapp.com",databaseURL:"https://edutech-f4ece-default-rtdb.firebaseio.com",projectId:"edutech-f4ece",storageBucket:"edutech-f4ece.appspot.com",messagingSenderId:"450823695942",appId:"1:450823695942:web:92480f6beeec66cf826447",measurementId:"G-LKQRT84P1Q"}),A=Object(k.g)(B),T=Object(k.b)(A,"Assignments"),y=new function e(){Object(v.a)(this,e),this.addBooks=function(e){return Object(k.a)(T,e)},this.updateBook=function(e,t){var c=Object(k.d)(A,"Assignments",e);return Object(k.h)(c,t)},this.deleteBook=function(e){var t=Object(k.d)(A,"Assignments",e);return Object(k.c)(t)},this.getAllBooks=function(){return Object(k.f)(T)},this.getBook=function(e){var t=Object(k.d)(A,"Assignments",e);return Object(k.e)(t)}},C=c(3),S=function(e){var t=e.id,c=e.setBookId,a=Object(r.useState)(""),n=Object(o.a)(a,2),s=n[0],i=n[1],d=Object(r.useState)(""),j=Object(o.a)(d,2),l=j[0],u=j[1],v=Object(r.useState)(""),g=Object(o.a)(v,2),k=g[0],B=g[1],A=Object(r.useState)(""),T=Object(o.a)(A,2),S=T[0],I=T[1],N=Object(r.useState)("Active"),w=Object(o.a)(N,2),D=w[0],E=w[1],F=Object(r.useState)(!0),G=Object(o.a)(F,2),L=G[0],U=G[1],J=Object(r.useState)({error:!1,msg:""}),R=Object(o.a)(J,2),z=R[0],K=R[1],Q=function(){var e=Object(h.a)(b.a.mark((function e(r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),K(""),""!==s&&""!==l){e.next=5;break}return K({error:!0,msg:"All fields are mandatory!"}),e.abrupt("return");case 5:if(a={title:s,author:l,date:k,file:S,status:D},console.log(a),e.prev=7,void 0===t||""===t){e.next=15;break}return e.next=11,y.updateBook(t,a);case 11:c(""),K({error:!1,msg:"Updated successfully!"}),e.next=18;break;case 15:return e.next=17,y.addBooks(a);case 17:K({error:!1,msg:"New Task added successfully!"});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),K({error:!0,msg:e.t0.message});case 23:i(""),u(""),B(""),I("");case 27:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(h.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(""),e.prev=1,e.next=4,y.getBook(t);case 4:c=e.sent,console.log("the record is :",c.data()),i(c.data().title),u(c.data().author),B(c.data().date),I(c.data().file),E(c.data().status),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),K({error:!0,msg:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){console.log("The id here is : ",t),void 0!==t&&""!==t&&V()}),[t]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"p-4 box",children:[(null===z||void 0===z?void 0:z.msg)&&Object(C.jsx)(O.a,{variant:(null===z||void 0===z?void 0:z.error)?"danger":"success",dismissible:!0,onClose:function(){return K("")},children:null===z||void 0===z?void 0:z.msg}),Object(C.jsxs)(x.a,{onSubmit:Q,children:[Object(C.jsx)(x.a.Group,{className:"mb-3",controlId:"formBookTitle",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a.Text,{id:"formBookTitle",children:"B"}),Object(C.jsx)(x.a.Control,{type:"text",placeholder:"Task Title",value:s,onChange:function(e){return i(e.target.value)}})]})}),Object(C.jsx)(x.a.Group,{className:"mb-3",controlId:"formBookAuthor",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a.Text,{id:"formBookAuthor",children:"A"}),Object(C.jsx)(x.a.Control,{type:"text",placeholder:"Task Author",value:l,onChange:function(e){return u(e.target.value)}})]})}),Object(C.jsx)(x.a.Group,{className:"mb-3",controlId:"formBookAuthor",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a.Text,{id:"formBookAuthor",children:"C"}),Object(C.jsx)(x.a.Control,{type:"text",placeholder:"Submision Date",value:k,onChange:function(e){return B(e.target.value)}})]})}),Object(C.jsx)(x.a.Group,{className:"mb-3",controlId:"formBookAuthor",children:Object(C.jsxs)(f.a,{children:[Object(C.jsx)(f.a.Text,{id:"formBookAuthor",children:"D"}),Object(C.jsx)(x.a.Control,{type:"text",placeholder:"Upload Task",value:S,onChange:function(e){return I(e.target.value)}})]})}),Object(C.jsx)(p.a,{"aria-label":"Basic example",className:"mb-3",children:Object(C.jsxs)("div",{className:"center",children:[Object(C.jsx)(m.a,{disabled:L,variant:"light",onClick:function(e){E("Active"),U(!0)},children:"Active"}),Object(C.jsx)(m.a,{variant:"dark",disabled:!L,onClick:function(e){E("Not Active"),U(!1)},children:"Not Active"})]})}),Object(C.jsx)("div",{className:"d-grid gap-2",children:Object(C.jsx)(m.a,{variant:"primary",type:"Submit",children:"Add/ Update"})})]})]})})},I=c(6),N=c(77),w=function(e){var t=e.getBookId,c=Object(r.useState)([]),a=Object(o.a)(c,2),n=a[0],s=a[1];Object(r.useEffect)((function(){i()}),[]);var i=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAllBooks();case 2:t=e.sent,console.log(t.docs),s(t.docs.map((function(e){return Object(I.a)(Object(I.a)({},e.data()),{},{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.deleteBook(t);case 2:i();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"mb-2",children:Object(C.jsx)(m.a,{variant:"dark edit",onClick:i,children:"Refresh List"})}),Object(C.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Task Title"}),Object(C.jsx)("th",{children:"Task Author"}),Object(C.jsx)("th",{children:"Status"}),Object(C.jsx)("th",{children:"Date"}),Object(C.jsx)("th",{children:"Files"}),Object(C.jsx)("th",{children:"Action"})]})}),Object(C.jsx)("tbody",{children:n.map((function(e,c){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:c+1}),Object(C.jsx)("td",{children:e.subject}),Object(C.jsx)("td",{children:e.author}),Object(C.jsx)("td",{children:e.status}),Object(C.jsx)("td",{children:e.date}),Object(C.jsx)("td",{children:e.files}),Object(C.jsxs)("td",{children:[Object(C.jsx)(m.a,{variant:"secondary",className:"edit",onClick:function(c){return t(e.id)},children:"Edit"}),Object(C.jsx)(m.a,{variant:"dark",className:"delete",onClick:function(t){return d(e.id)},children:"Delete"})]})]},e.id)}))})]})]})};c(72);var D=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.a,{bg:"dark",variant:"dark",className:"header",children:Object(C.jsx)(d.a,{children:Object(C.jsxs)(i.a.Brand,{href:"#home",children:[Object(C.jsx)("img",{className:"Header-logo",src:"/logo.png",alt:"Logo"}),"Teacher | Create Tasks"]})})}),Object(C.jsx)(d.a,{style:{width:"400px"},children:Object(C.jsx)(j.a,{children:Object(C.jsx)(l.a,{children:Object(C.jsx)(S,{id:c,setBookId:a})})})}),Object(C.jsx)(d.a,{children:Object(C.jsx)(j.a,{children:Object(C.jsx)(l.a,{children:Object(C.jsx)(w,{getBookId:function(e){console.log("The ID of document to be edited: ",e),a(e)}})})})})]})};s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(D,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.bb2f49df.chunk.js.map