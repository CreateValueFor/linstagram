(this.webpackJsonplinstagram=this.webpackJsonplinstagram||[]).push([[0],{48:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),r=t(32),i=t.n(r),s=t(17),o=t(16),l=t(5),d=t(23),b=t.n(d),j=t(27),p=t(13),x=t(14),u=t(19);t(41),t(49),t(50);u.a.initializeApp({apiKey:"AIzaSyD9pk66_uMg6OuqQLSUU5GMKfuYdqUU7ho",authDomain:"linstagram-7daee.firebaseapp.com",projectId:"linstagram-7daee",storageBucket:"linstagram-7daee.appspot.com",messagingSenderId:"1038326556030",appId:"1:1038326556030:web:c891865dc9a2d31befbf2f"});var h,f,g,O,m,v=u.a,w=u.a.auth(),y=(u.a.firestore(),u.a.storage(),t(1)),k=x.a.div(h||(h=Object(p.a)(["\n  display:flex;\n  justify-content : center;\n\n"]))),z=x.a.div(f||(f=Object(p.a)(["\n  background-image: url(https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png);\n  background-size: 454px 618px;\n  flex-basis: 454px;\n  height:618px;\n  background-repeat : no-repeat;\n"]))),N=x.a.div(g||(g=Object(p.a)(["\n  flex-grow: 1;\n  justify-content:center;\n  margin-top:12px;\n  max-width:350px;\n"]))),S=x.a.div(O||(O=Object(p.a)(["\n  display:flex;\n  flex-direction: column;\n  align-items:center;\n  background-color: #fff;\n  border: 1px solid rgba(219,219,291,1);\n  border-radius: 1px;\n  margin: 0 0 10px;\n  padding: 10px 12%;\n  \n  h1{\n    margin:22px auto 12px;\n  }\n  form{\n    display:flex;\n    flex-direction: column;\n\n    width:100%;\n    margin: 0 40px 6px;\n\n  }\n  .email--container, .password--container{\n      display:flex;\n      flex-direction: column;\n      height:36px;\n      flex: 1 0 0;\n      align-items:start;\n      background: rgba(250,250,250,1);\n      border: 1px solid rgba(219,219,291,1);\n      birder-radius:3px;\n      box-sizing:border-box;\n      color:rgba(38,38,38,1);\n      font-size:12px;\n      width:100%;\n    input{\n        border:none;\n        background: rgba(250,250,250,1);\n    }\n    input:focus{\n        border:none;\n        outline:none;\n    }\n  }\n  .password--container{\n    flex-direction: row;\n    justify-content: space-between;\n    p{\n      align-self: center;\n    }\n  }\n  .password--input{\n    display:flex;\n    flex-direction: column;\n    \n    \n  }\n"]))),I=x.a.div(m||(m=Object(p.a)(["\n  background-color: #fff;\n  border: 1px solid rgba(219,219,291,1);\n  border-radius: 1px;\n  display:flex;\n  align-items:center;\n  justify-content: center;\n  padding: 10px 0;\n  margin-bottom: 10px;\n  line-height: 18px;\n  span{\n    font-size: 14px;\n  }\n  button{\n    background: transparent;\n    outline: none;\n    border:none;\n    color: rgba(0,149,246,1);\n    font-size: 14px;\n    font-weight: bold;\n  }\n"])));var B=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),x=p[0],u=p[1],h=function(e){var n=e.target,t=n.name,a=n.value;"email"===t?c(a):"password"===t&&l(a)},f=function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,w.signInWithEmailAndPassword(t,o);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),u(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new v.auth.FacebookAuthProvider,e.next=3,w.signInWithPopup(n);case 3:t=e.sent,console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)(k,{children:[Object(y.jsx)(z,{}),Object(y.jsxs)(N,{children:[Object(y.jsxs)(S,{children:[Object(y.jsx)("h1",{children:"Instgram"}),Object(y.jsxs)("form",{onSubmit:f,children:[Object(y.jsxs)("div",{className:"email--container",children:[Object(y.jsx)("span",{children:"\uc804\ud654\ubc88\ud638, \uc0ac\uc6a9\uc790 \uc774\ub984 \ub610\ub294 \uc774\uba54\uc77c"}),Object(y.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:t,onChange:h})]}),Object(y.jsxs)("div",{className:"password--container",children:[Object(y.jsxs)("div",{className:"password--input",children:[Object(y.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638"}),Object(y.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:h})]}),Object(y.jsx)("p",{children:"\ube44\ubc00\ubc88\ud638 \ud45c\uc2dc"})]}),Object(y.jsx)("button",{type:"submit",children:"\ub85c\uadf8\uc778"})]}),Object(y.jsx)("p",{children:"\ub610\ub294"}),Object(y.jsx)("button",{onClick:g,name:"facebook",children:"Facebook\uc73c\ub85c \ub85c\uadf8\uc778"}),x&&Object(y.jsx)("div",{children:x}),Object(y.jsx)("button",{children:"\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc73c\uc168\ub098\uc694?"})]}),Object(y.jsxs)(I,{children:[Object(y.jsx)("span",{children:"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"}),Object(y.jsx)("button",{children:"\uac00\uc785\ud558\uae30"})]}),Object(y.jsx)("p",{children:"\uc571\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc138\uc694."}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{children:"App store\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ud558\uae30"}),Object(y.jsx)("button",{children:"Google Play \ub2e4\uc6b4\ub85c\ub4dc \ud558\uae30"})]})]})]})};var C,P=function(){return Object(y.jsx)("div",{children:"Explore"})},M=x.a.div(C||(C=Object(p.a)(["\n\n  max-width: 600px;\n  margin: 34px auto;\n  .storyBoard{\n    height: 118px;\n    background-color: #fff;\n    border: 1px solid rgba(219,219,291,1);\n    border-radius: 1px;\n    margin-bottom: 27px;\n    ul{\n      display:flex;\n      list-style:none;\n      height:84px;\n      align-items:center;\n      li{\n        width:66px;\n        height:66px;\n        padding: 0 4px;\n      }\n    }\n  }\n  .feedBoard{\n    background-color: #fff;\n    border: 1px solid rgba(219,219,291,1);\n    border-radius: 1px;\n  }\n"])));var _=function(){return Object(y.jsxs)(M,{children:[Object(y.jsx)("div",{className:"storyBoard",children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"sample1"}),Object(y.jsx)("li",{children:"sample2"}),Object(y.jsx)("li",{children:"sample3"}),Object(y.jsx)("li",{children:"sample4"}),Object(y.jsx)("li",{children:"sample5"})]})}),Object(y.jsx)("div",{className:"feedBoard",children:"feed"})]})};var U=function(){return Object(y.jsx)("div",{children:"Message"})};var A,L=function(){return Object(y.jsx)("div",{})},E=x.a.div(A||(A=Object(p.a)(['\n  display:flex;\n  justify-content: space-between;\n  background: #fff;\n  margin: 0;\n  align-items: center;\n  height:54px;\n  padding: 0 20px;\n  \n  border-bottom: 1px solid rgba(219,219,291,1);\n  \n  .logo{\n    color:black;\n    text-decoration:none;\n    width:103px;\n    height:29px;\n    background: url("https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png");\n    background-size: cover;\n    margin-top:7px;\n  }\n  .menu--box{\n    display:flex;\n    flex-direction:row;\n    padding-left:24px\n    justify-content: space-between;\n    \n  }\n'])));var q=function(e){return e.userObj,Object(y.jsxs)(E,{children:[Object(y.jsx)(o.b,{className:"logo",to:"/"}),Object(y.jsx)("div",{className:"search--input",children:Object(y.jsx)("input",{placeholder:"\uac80\uc0c9"})}),Object(y.jsxs)("div",{className:"menu--box",children:[Object(y.jsx)(o.b,{to:"/",children:Object(y.jsx)("svg",{"aria-label":"\ud648",className:"_8-yf5 ",fill:"#262626",height:"22",viewBox:"0 0 48 48",width:"22",children:Object(y.jsx)("path",{d:"M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"})})}),Object(y.jsx)(o.b,{to:"/direct/inbox/",children:Object(y.jsx)("svg",{"aria-label":"Direct",className:"_8-yf5 ",fill:"#262626",height:"22",viewBox:"0 0 48 48",width:"22",children:Object(y.jsx)("path",{d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"})})}),Object(y.jsx)(o.b,{to:"/explore/",children:Object(y.jsx)("svg",{"aria-label":"\uc0ac\ub78c \ucc3e\uae30",className:"_8-yf5 ",fill:"#262626",height:"22",viewBox:"0 0 48 48",width:"22",children:Object(y.jsx)("path",{clipRule:"evenodd",d:"M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z",fillRule:"evenodd"})})}),Object(y.jsx)("svg",{"aria-label":"\ud65c\ub3d9 \ud53c\ub4dc",className:"_8-yf5 ",fill:"#262626",height:"22",viewBox:"0 0 48 48",width:"22",children:Object(y.jsx)("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})}),Object(y.jsx)(o.b,{to:"/profile/",children:"Profile"})]})]})};var D=function(e){e.refreshUser;var n=e.isLoggedIn,t=e.userObj;return Object(y.jsxs)(o.a,{children:[n&&Object(y.jsx)(q,{userObj:t}),Object(y.jsx)(l.c,{children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(_,{})}),Object(y.jsx)(l.a,{path:"/profile/",children:Object(y.jsx)(L,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/direct/inbox/",children:Object(y.jsx)(U,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/explore/",children:Object(y.jsx)(P,{})})]}):Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(B,{})})})]})};var F=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(!1),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(null),b=Object(s.a)(d,2),j=b[0],p=b[1];return Object(a.useEffect)((function(){w.onAuthStateChanged((function(e){e?(l(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(n){return e.updateProfile(n)}})):p(null),c(!0)}))}),[]),Object(y.jsx)(y.Fragment,{children:t?Object(y.jsx)(D,{refreshUser:function(){var e=w.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(n){return e.updateProfile(n)}})},isLoggedIn:o,userObj:j}):"Initializing"})};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5373ed50.chunk.js.map