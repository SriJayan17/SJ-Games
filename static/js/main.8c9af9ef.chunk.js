(this.webpackJsonpredux=this.webpackJsonpredux||[]).push([[0],{23:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(12),i=s.n(n),r=(s(23),s(9)),l=s(3),d=s(0),j=function(){var e="Home";setTimeout((function(){document.getElementById(e).style.background="#fff",document.getElementById(e).style.color="#333"}),10);var t=function(t){var s=t.target.id;document.getElementById(s).style.background="#fff",document.getElementById(s).style.color="#333",document.getElementById(e).style.background="none",document.getElementById(e).style.color="#fff",e=s};return Object(d.jsxs)("div",{id:"main-navbar",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("i",{className:"fas fa-dice-d20 fa-2x"}),Object(d.jsx)("h1",{className:"Primary",children:"SJ Games"})]}),Object(d.jsxs)("div",{className:"nav-tools",children:[Object(d.jsx)(r.b,{to:"/",onClick:t,children:Object(d.jsx)("h1",{className:"secondary",id:"Home",children:"Home"})}),Object(d.jsx)(r.b,{to:"/About",onClick:t,children:Object(d.jsx)("h1",{className:"secondary",id:"About",children:"About"})})]})]})},o=function(){return Object(d.jsx)("div",{id:"launching-page",children:Object(d.jsxs)("div",{className:"bg-cont",children:[Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("i",{className:"fas fa-dice fa-2x"}),Object(d.jsx)("span",{className:"primary",children:" Welcome to SJ Games"}),Object(d.jsx)("h1",{className:"secondary my-1",children:"Online Gaming Platform. Enjoy playing unlimited free games. Your experience is our satisfaction. Have a good luck! Happy gaming guys..."})]}),Object(d.jsx)("img",{src:"https://cdn.fortniteinsider.com/wp-content/uploads/2018/04/30064748/Fortnite-skins-Fortnite-Raven-skin-1.png",alt:"logo"})]})})},m=s(7),b={type:"JUMP"},h={type:"LOWER"},u={type:"GAMEOVER"},x={type:"GAMEON"},O={type:"STARTCOUNT"},f={type:"ENDCOUNT"},g={type:"GAMEPLAYED"},p={type:"GAMEUNPLAYED"},y=function(){var e=Object(m.c)((function(e){return e.game})),t=Object(m.b)();return Object(d.jsxs)("div",{className:"playbutton",onClick:function(){e?(t(f),t(u),t(g)):(t(p),t(O),t(x))},children:[!e&&Object(d.jsxs)("span",{className:"secondary",children:[Object(d.jsx)("i",{className:"fas fa-play-circle"}),"\xa0Start Game"]}),e&&Object(d.jsxs)("span",{className:"secondary",children:[Object(d.jsx)("i",{className:"fas fa-pause-circle"}),"\xa0Stop Game"]})]})},N=function(){return Object(d.jsxs)("div",{id:"games-available",children:[Object(d.jsxs)("span",{className:"primary",children:[Object(d.jsx)("i",{className:"fas fa-dice-d6"}),"\xa0\xa0Available Games :"]}),Object(d.jsx)("div",{className:"games my-1",children:Object(d.jsxs)("div",{id:"game-1",className:"game",children:[Object(d.jsx)("img",{src:"https://preview.free3d.com/img/2014/01/2269196347779319477/rx00lcyw-900.jpg",alt:"Jump-rider"}),Object(d.jsxs)("div",{className:"game-desc",children:[Object(d.jsx)("h1",{className:"secondary",children:"Jump Rider"}),Object(d.jsx)(r.b,{to:"/jumprider",children:Object(d.jsx)(y,{})})]})]})})]})},v=function(){var e=Object(m.c)((function(e){return e.points}));return Object(d.jsxs)("div",{id:"game-over",children:[Object(d.jsx)("i",{className:"fas fa-hourglass-end fa-2x"}),Object(d.jsx)("span",{className:"primary",children:" Game Over :("}),Object(d.jsxs)("div",{className:"result",children:[Object(d.jsx)("img",{src:"https://thumbs.gfycat.com/FoolhardyInsecureFinnishspitz-size_restricted.gif",alt:"car"}),Object(d.jsxs)("div",{className:"score",children:[Object(d.jsx)("h1",{className:"secondary",children:"The Car has been collided with the obstacle. Well played! Try your best to get high scores..."}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"primary",children:[Object(d.jsx)("i",{className:"fas fa-trophy"}),"\xa0\xa0Your Score\xa0\xa0",Object(d.jsx)("i",{className:"fas fa-trophy"})]}),Object(d.jsxs)("h1",{className:"primary",children:[Object(d.jsx)("i",{className:"fas fa-crown"}),"\xa0",Object(d.jsx)("span",{children:typeof e!==typeof new Date?e:0}),"\xa0",Object(d.jsx)("i",{className:"fas fa-crown"})]})]})]}),Object(d.jsx)(y,{})]})]})},E=function(){var e=Object(m.c)((function(e){return e.carpos})),t=Object(m.c)((function(e){return e.game})),s=String(e)+"rem",a=Object(m.c)((function(e){return e.gamefinished})),n=Object(m.b)(),i={position:"absolute",bottom:s,left:"0"},r=function(){if(null!==document.getElementById("carimg")&&t){var e=document.getElementById("carimg").getBoundingClientRect(),s=document.getElementById("stoneimg").getBoundingClientRect(),c=document.getElementById("birdimg").getBoundingClientRect();if(0===c.x&&0===c.y&&0===s.x&&0===s.y)return;0===c.x&&0===c.y&&(c=s),(e.x<=s.x&&e.width+e.x>=s.x&&e.y<=s.y&&e.height+e.y>=s.y||e.x<=c.x&&e.width+e.x>=c.x&&e.y<=c.y&&e.height+e.y>=c.y)&&(n(f),document.getElementById("car").style.display="none",document.getElementById("stone").style.display="none",document.getElementById("bird").style.display="none",document.getElementById("gameover-gif").style.display="block",clearInterval(l),setTimeout((function(){n(u),n(g)}),2e3))}else clearInterval(l)},l=setInterval((function(){t&&r()}),10);return Object(c.useEffect)((function(){t&&r(),setTimeout((function(){var e=document.getElementById("bird");!a&&t&&e&&(document.getElementById("bird").style.display="block")}),15e3)})),Object(d.jsxs)(c.Fragment,{children:[t&&!a&&Object(d.jsxs)("div",{id:"main-plane",onClick:function(){n(b),setTimeout((function(){n(h)}),590)},children:[Object(d.jsxs)("div",{className:"game-title",children:[Object(d.jsx)("h1",{className:"secondary",children:"JUMP RIDER (Click To Jump)"}),Object(d.jsx)(y,{})]}),Object(d.jsxs)("div",{className:"road",children:[Object(d.jsx)("img",{src:"https://cdn.pixilart.com/photos/large/7839761c1cc3eb9.png",alt:"road"}),Object(d.jsx)("div",{id:"car",children:Object(d.jsx)("img",{style:i,id:"carimg",src:"https://thumbs.gfycat.com/FoolhardyInsecureFinnishspitz-size_restricted.gif",alt:"car"})}),Object(d.jsx)("div",{id:"stone",children:Object(d.jsx)("img",{id:"stoneimg",src:"https://pngimg.com/uploads/stone/small/stone_PNG13590.png",alt:"stone"})}),Object(d.jsx)("div",{id:"bird",children:Object(d.jsx)("img",{id:"birdimg",src:"https://i.pinimg.com/originals/5d/e3/03/5de303950e41d173820c0b6cebae7359.gif",alt:"bird"})}),Object(d.jsx)("div",{id:"gameover-gif",children:Object(d.jsx)("img",{id:"birdimg",src:"https://gifimage.net/wp-content/uploads/2017/07/game-over-gif-4.gif",alt:"game-over"})})]})]}),a&&Object(d.jsx)(v,{})]})},w=function(){return Object(d.jsxs)("div",{id:"about",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("i",{className:"fas fa-lightbulb fa-2x"}),Object(d.jsx)("span",{className:"primary",children:"About this App :"})]}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("i",{className:"fas fa-dice-d20"}),"\xa0SJ Games"]}),Object(d.jsx)("h1",{className:"secondary",children:"Threat free online Gaming Platform where you can enjoy cool and amazing games for free and unlimited."})]})]})},I=function(){return Object(d.jsxs)("div",{id:"main-footer",children:[Object(d.jsxs)("div",{id:"email-letter",children:[Object(d.jsxs)("p",{className:"center",children:[Object(d.jsx)("i",{className:"fas fa-envelope fa-2x"}),Object(d.jsx)("span",{className:"secondary",children:"Email-letter"})]}),Object(d.jsx)("p",{children:"Subscribe to our Email Letter to get instant update about Latest Cricket news."}),Object(d.jsxs)("form",{id:"eletter-form",children:[Object(d.jsx)("input",{type:"email",placeholder:"Enter your Email-id"}),Object(d.jsx)("input",{type:"submit",value:"Subscribe"})]})]}),Object(d.jsxs)("div",{id:"social-media",children:[Object(d.jsxs)("p",{className:"center",children:[Object(d.jsx)("i",{className:"fas fa-comments fa-2x"}),Object(d.jsx)("span",{className:"secondary",children:"Follow us"})]}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)("a",{href:"https://www.instagram.com/sri_jayan_17/",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-instagram fa-2x"})}),Object(d.jsx)("a",{href:"https://www.facebook.com/esrijayan.srijayan",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-facebook fa-2x"})}),Object(d.jsx)("a",{href:"https://github.com/SriJayan17",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-github fa-2x"})}),Object(d.jsx)("a",{href:"https://www.youtube.com/",target:"blank",children:Object(d.jsx)("i",{className:"fab fa-youtube fa-2x"})})]}),Object(d.jsx)("p",{className:"center",children:"Support us by following on social media."})]}),Object(d.jsxs)("div",{id:"contact",children:[Object(d.jsxs)("p",{className:"center",children:[Object(d.jsx)("i",{className:"fas fa-phone-square-alt fa-2x"}),Object(d.jsx)("span",{className:"secondary",children:"Contact"})]}),Object(d.jsx)("p",{children:"To contact us reagrding promotion or queries text me on whatsapp 9361482979."})]}),Object(d.jsx)("div",{id:"copy",children:Object(d.jsxs)("p",{className:"center",children:[Object(d.jsx)("i",{className:"fas fa-copyright fa-2x"}),Object(d.jsx)("span",{className:"secondary",children:"SJ Games "}),Object(d.jsx)("i",{className:"fas fa-trademark"}),Object(d.jsx)("span",{className:"secondary",children:" All rights Reserved 2025"})]})})]})};var T=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(o,{}),Object(d.jsx)(N,{})]})}}),Object(d.jsx)(l.a,{exact:!0,path:"/jumprider",render:function(e){return Object(d.jsx)(E,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/About",render:function(e){return Object(d.jsx)(w,{})}})]}),Object(d.jsx)(I,{})]})})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))},A=s(13),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"JUMP":return 15===e?e:e+15;case"LOWER":return 0===e?e:e-15;default:return 0}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAMEOVER":return!1;case"GAMEON":return!0;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STARTCOUNT":return new Date;case"ENDCOUNT":var s=new Date;return typeof e===typeof s?10*Math.round(Math.abs((e.getTime()-s.getTime())/1e3)):e;default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GAMEPLAYED":return!0;case"GAMEUNPLAYED":return!1;default:return e}},_=Object(A.a)({carpos:B,game:S,points:G,gamefinished:C}),R=Object(A.b)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m.a,{store:R,children:Object(d.jsx)(T,{})})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.8c9af9ef.chunk.js.map