(this["webpackJsonpvoice-call-agora"]=this["webpackJsonpvoice-call-agora"]||[]).push([[0],{237:function(e,n,t){},238:function(e,n,t){},262:function(e,n){},264:function(e,n){},274:function(e,n){},276:function(e,n){},301:function(e,n){},302:function(e,n){},307:function(e,n){},309:function(e,n){},316:function(e,n){},335:function(e,n){},359:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(213),o=t.n(i),r=(t(237),t(16)),l=t(143),s=t(33),u=t(53),d=t(13),j=(t(238),t(222)),b=t(83),x=t.n(b),p=t(421),f=t(422),m=t(425),O=t(218),h=t.n(O),v=t(225),k=t(419),g=t(409),w=t(424),C=t(144),I=t(2),y=function(e){var n=e.user,t=e.initCall,a=e.rtc,i=e.callInProsess,o=e.userInCall,r=Object(c.useState)(o),l=Object(d.a)(r,2),j=l[0],b=l[1],O=n.id,y=C.RtcRole.PUBLISHER,E=Math.floor(Date.now()/1e3)+3600,S={appId:"0c962528da524ac1a646aa034f8b5385",channel:n.id},T=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=C.RtcTokenBuilder.buildTokenWithUid("0c962528da524ac1a646aa034f8b5385","88d7864ddaf34842813b3b9237670158",O,0,y,E),t(c,n.id,n.name),e.next=4,a.client.join(S.appId,S.channel,c,S.uid);case 4:return e.next=6,x.a.createMicrophoneAudioTrack();case 6:return a.localAudioTrack=e.sent,e.next=9,a.client.publish([a.localAudioTrack]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b(o)}),[o]),Object(I.jsxs)(f.a,{sx:{display:"flex",width:"300px",height:"70px",alignItems:"center",padding:"10px"},children:[Object(I.jsx)(g.a,{direction:"row",spacing:2,children:Object(I.jsx)(k.a,{children:function(e){var n=e.split(" ");return"".concat(n[0][0].toUpperCase()).concat(n[1]?n[1][0].toUpperCase():"")}(n.name)})}),Object(I.jsxs)(p.a,{sx:{display:"flex",flexDirection:"column",padding:"2rem"},children:[Object(I.jsx)(p.a,{sx:{display:"flex",alignItems:"center"},children:Object(I.jsx)(w.a,{variant:"h6",gutterBottom:!0,component:"div",children:function(e){var n=e.split(" ");return"".concat(n[0].charAt(0).toUpperCase()).concat(n[0].slice(1)," ").concat(n[1]?n[1].charAt(0).toUpperCase():"").concat(n[1]?n[1].slice(1):"")}(n.name)})}),null!==j&&void 0!==j&&j.some((function(e){return e===n.id}))||i?null:Object(I.jsx)(p.a,{sx:{display:"flex",alignItems:"center"},children:Object(I.jsx)(m.a,{"aria-label":"next",onClick:T,children:Object(I.jsx)(v.a,{component:h.a,inheritViewBox:!0,color:"green"})})})]})]})},E=t(420),S=t(413),T=t(417),A=t(418),B=t(415),_=t(426),P=t(103),L=t.n(P),U=t(219),R=t.n(U);function V(e){var n=e.open,t=e.reciveCall,c=e.declineCall,a=e.callInProsess,i=e.call;return Object(I.jsx)(p.a,{sx:{width:"100%"},children:Object(I.jsx)(_.a,{in:n,children:Object(I.jsxs)(B.a,{action:Object(I.jsxs)(p.a,{sx:{display:"flex",alignItems:"center"},children:[!a&&Object(I.jsx)(m.a,{"aria-label":"next",onClick:t,children:Object(I.jsx)(v.a,{component:R.a,inheritViewBox:!0,color:"green"})}),Object(I.jsx)(m.a,{"aria-label":"play/pause",onClick:c,children:Object(I.jsx)(v.a,{component:L.a,inheritViewBox:!0})})]}),sx:{mb:2},children:[a?"En llamada con":"Llamada entrante de"," ",null===i||void 0===i?void 0:i.nameEmit]})})})}var D=t(220),F=t.n(D);function M(e){var n=e.onClose,t=e.open,c=e.name;return Object(I.jsx)(p.a,{sx:{width:"100%"},children:Object(I.jsx)(_.a,{in:t,children:Object(I.jsxs)(B.a,{action:Object(I.jsx)(m.a,{"aria-label":"close",color:"inherit",size:"small",onClick:n,children:Object(I.jsx)(F.a,{fontSize:"inherit"})}),sx:{mb:2},severity:"info",children:[c," ha abandonado la llamada"]})})})}var z=t(221),J=t.n(z);function H(e){var n=e.open,t=e.declineCall,c=e.callInProsess,a=e.call;return Object(I.jsx)(p.a,{sx:{width:"100%"},children:Object(I.jsx)(_.a,{in:n,children:Object(I.jsxs)(B.a,{action:Object(I.jsxs)(p.a,{sx:{display:"flex",alignItems:"center"},children:[!c&&Object(I.jsx)(m.a,{"aria-label":"next",children:Object(I.jsx)(v.a,{component:J.a,inheritViewBox:!0,color:"green"})}),Object(I.jsx)(m.a,{"aria-label":"play/pause",onClick:t,children:Object(I.jsx)(v.a,{component:L.a,inheritViewBox:!0})})]}),sx:{mb:2},children:[c?"En llamada con":"Llamando a "," ",null===a||void 0===a?void 0:a.name]})})})}var N=j.a.connect("https://voice-call-socket.herokuapp.com/");var W=function(){var e=Object(c.useState)(),n=Object(d.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)([]),o=Object(d.a)(i,2),j=o[0],b=o[1],f=Object(c.useState)(""),m=Object(d.a)(f,2),O=m[0],h=m[1],v=Object(c.useState)({localAudioTrack:null,client:null}),k=Object(d.a)(v,2),g=k[0],w=k[1],C=Object(c.useState)(!1),B=Object(d.a)(C,2),_=B[0],P=B[1],L=Object(c.useState)(),U=Object(d.a)(L,2),R=U[0],D=U[1],F=Object(c.useState)([]),z=Object(d.a)(F,2),J=z[0],W=z[1],q=Object(c.useState)(),G=Object(d.a)(q,2),K=G[0],Q=G[1],X={appId:"0c962528da524ac1a646aa034f8b5385",channel:"test"};Object(c.useLayoutEffect)((function(){var e=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=x.a.createClient({mode:"rtc",codec:"vp8"})).on("user-published",function(){var e=Object(u.a)(Object(s.a)().mark((function e(t,c){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,c),e.next=3,n.subscribe(t,c);case 3:"audio"===c&&t.audioTrack.play(),n.on("user-unpublished",function(){var e=Object(u.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.unsubscribe(t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),w((function(e){return Object(l.a)(Object(l.a)({},e),{},{client:n})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var Y=function(e,n,t){console.log("CALL TO ",t),P(!0),Q({name:t,nameEmit:O,id:n,token:e,room:"".concat(n).concat(N.id)}),N.emit("create_call",{nameEmit:O,name:t,id:n,token:e,room:"".concat(n).concat(N.id)})},Z=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.client.join(X.appId,t.id,t.token,X.uid);case 2:return e.next=4,x.a.createMicrophoneAudioTrack();case 4:g.localAudioTrack=e.sent,N.emit("answer_call",{id:t.id,idEmit:t.idEmit,room:t.room}),P(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(u.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!1),!g.localAudioTrack){e.next=5;break}return g.localAudioTrack.close(),e.next=5,g.client.leave();case 5:t&&N.emit("leave_call",{name:O,id:t.id,token:t.token,room:t.room,idEmit:t.idEmit}),K&&N.emit("leave_call",{name:O,id:N.id,token:K.token,room:K.room,idEmit:K.idEmit}),a(void 0),Q(void 0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N.on("new_active",(function(e){console.log(e);var n=e.filter((function(e){return!j.some((function(n){return n.id===e.id}))&&e.id!==N.id}));b(Object(r.a)(n))})),N.on("recive_call",(function(e){console.log(e),a(e)})),N.on("leave",(function(e){console.log(e),D(e)})),N.on("users_in_call",(function(e){console.log(e,null===K||void 0===K?void 0:K.id),e.some((function(e){return e===(null===K||void 0===K?void 0:K.id)||e===(null===t||void 0===t?void 0:t.id)}))?P(!0):P(!1),W(e)}))}),[null===t||void 0===t?void 0:t.id,null===K||void 0===K?void 0:K.id]),Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(H,{open:void 0!==K&&!R,call:K,callInProsess:J.some((function(e){return e===(null===K||void 0===K?void 0:K.id)})),declineCall:function(){N.emit("cancel_call",{name:O,id:K.id,token:K.token,room:K.room,idEmit:K.idEmit}),$()}}),Object(I.jsx)(V,{open:void 0!==t&&!R,declineCall:function(){return $()},reciveCall:function(){return Z()},callInProsess:_,call:t}),Object(I.jsx)(M,{open:void 0!==R,onClose:function(){$(),D(void 0)},name:null===R||void 0===R?void 0:R.name}),Object(I.jsx)(E.a,{children:Object(I.jsx)(p.a,{sx:{width:"100%"},children:Object(I.jsxs)(T.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(I.jsx)(T.a,{item:!0,xs:6,children:Object(I.jsx)(p.a,{sx:{display:"flex",margin:"2rem auto",width:"300px",gap:"1rem",flexDirection:"column"},children:j.map((function(e){return Object(I.jsx)(y,{user:e,initCall:function(e,n,t){return Y(e,n,t)},rtc:g,callInProsess:_,userInCall:J})}))})}),Object(I.jsxs)(T.a,{item:!0,xs:6,children:[Object(I.jsx)(p.a,{sx:{margin:"2rem auto",width:"300px"},children:Object(I.jsx)(S.a,{onChange:function(e){return h(e.target.value)},variant:"standard",label:"Ingresa tu nombre"})}),Object(I.jsx)(p.a,{sx:{margin:"0 auto",width:"300px"},children:Object(I.jsx)(A.a,{variant:"outlined",size:"small",onClick:function(){N.emit("create_user",{name:O})},children:"Unirte"})})]})]})})})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,428)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(W,{})})),q()}},[[359,1,2]]]);
//# sourceMappingURL=main.b8102800.chunk.js.map