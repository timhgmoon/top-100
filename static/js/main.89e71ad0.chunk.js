(this["webpackJsonpweb-playback-sdk-sample-app"]=this["webpackJsonpweb-playback-sdk-sample-app"]||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(19),r=c.n(s),i=c(2),o=c(39),j=c.n(o),l=c(48),b=c(7),h=c(8),u=(c(67),c(60)),d=c(9),p=(c(69),c(70),c(1));var m=function(e){var t=Object(n.useState)(),c=Object(b.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(),i=Object(b.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){fetch("https://api.spotify.com/v1/search?q=".concat(e.currentTrack.name,"&type=track&q=").concat(e.currentTrack.artists,"&type=artist&limit=1"),{method:"GET",headers:{Authorization:"Bearer "+e.token}}).then((function(e){return e.json()})).then((function(e){s(e.tracks.items[0]),console.log(e.tracks.items[0]),console.log(e.tracks.items[0].album.images)}))}),[]),Object(n.useEffect)((function(){fetch("https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/lyric/".concat(e.currentTrack.songId),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(e){j(e.lyric.split("\n"))}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("style",{type:"text/css"}),Object(p.jsxs)("div",{className:"main-card-container",children:[a&&Object(p.jsxs)(d.a,{className:"bg-dark text-white mx-auto p-1 m-1",children:[Object(p.jsx)(d.a.Img,{variant:"top",src:a.album.images[0].url,alt:e.currentTrack.name}),Object(p.jsxs)(d.a.Body,{children:[Object(p.jsx)(d.a.Title,{children:e.currentTrack.artists}),Object(p.jsx)(d.a.Text,{children:e.currentTrack.name})]})]}),o&&o.map((function(e){return Object(p.jsx)("p",{children:e})}))]}),a&&Object(p.jsx)(u.a,{token:e.token,uris:a.uri,showSaveIcon:!0,initialVolume:.3,playerPosition:"bottom",styles:{sliderColor:"rgb(213, 126, 140)",sliderHeight:"10px"}})]})};var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("a",{className:"btn-spotify",href:"/auth/login",children:"Login with Spotify"})})})},x=c(21),k=c(33),f=c(28),g=c(20),y=function(e){var t=Object(n.useState)(),c=Object(b.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("https://corsanywhere.herokuapp.com/https://melon.danielko.me/api/v1/chart/live",{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){return e.json()})).then((function(e){var t=Object.entries(e).map((function(e){return e[1]}));s(t)}))}),[]),console.log(a),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(k.a,{fluid:"sm, md, lg",children:[Object(p.jsx)(d.a.Body,{className:"card-body-title",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)(g.a,{xs:3,md:!0,lg:1,children:"Ranking"}),Object(p.jsx)(g.a,{xs:6,md:6,lg:3,children:"Song Title"}),Object(p.jsx)(g.a,{xs:3,children:"Artist"})]})}),a&&a.map((function(t){return Object(p.jsx)(d.a,{className:"bg-transparent",children:Object(p.jsx)(x.b,{to:"/songs/"+t.name,onClick:function(){e.handleOnClick(t)},children:Object(p.jsx)(d.a.Body,{children:Object(p.jsxs)(f.a,{children:[Object(p.jsxs)(g.a,{xs:3,md:!0,lg:1,children:[t.ranking,"."]}),Object(p.jsx)(g.a,{xs:6,md:6,lg:3,children:t.name}),Object(p.jsx)(g.a,{xs:3,children:t.artists})]})})},t.ranking)})}))]})})},v=(c(79),function(){return Object(p.jsxs)(k.a,{fluid:!0,children:[Object(p.jsxs)("div",{className:"about",children:[Object(p.jsx)("h1",{children:"About Top 100 Chart"}),Object(p.jsx)("p",{id:"about-p",children:"Bacon ipsum dolor amet brisket burgdoggen corned beef, buffalo venison pork chop picanha bresaola bacon pork loin tri-tip capicola short loin. Porchetta pork belly swine kevin turducken cow beef. Flank pork belly pastrami, shankle beef doner spare ribs. Brisket tenderloin kevin chislic, hamburger jowl jerky pastrami chuck. Flank pork loin hamburger boudin tri-tip pastrami fatback brisket chicken bacon bresaola capicola leberkas biltong shoulder. Rump sausage ham hock, andouille doner sirloin venison pork chop. Fatback flank strip steak beef tongue drumstick."})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h2",{children:"Api's used"}),Object(p.jsx)(g.a,{md:!0,lg:6,children:Object(p.jsx)(d.a,{className:"bg-dark text-white m-5 p-2",children:Object(p.jsx)(d.a.Link,{href:"https://developer.spotify.com/documentation/web-api/",children:Object(p.jsx)(d.a.Img,{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",alt:"spotify"})})})}),Object(p.jsx)(g.a,{md:!0,lg:6,children:Object(p.jsx)(d.a,{className:"bg-dark text-white m-5 p-2",children:Object(p.jsx)(d.a.Link,{href:"https://github.com/ko28/melon-api",children:Object(p.jsx)(d.a.Img,{src:"https://6.viki.io/image/a2ceb3c346be4350ba4826e928d4257e.jpeg?s=900x600&e=t",alt:"spotify"})})})})]})]})}),w=c(43),T=c(42),N=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(T.a,{className:"bg-dark text-white p-3",children:[Object(p.jsx)(T.a.Brand,{children:Object(p.jsx)(x.b,{to:"/",children:"Top-100"})}),Object(p.jsx)(w.a.Link,{as:x.b,to:"/About",children:"About"}),Object(p.jsx)(w.a.Link,{as:x.b,to:"/login",children:"Spotify Login"})]})})};var S=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(b.a)(s,2),o=r[0],u=r[1],d=function(e){u(e)};return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/auth/token");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.access_token);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(N,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(p.jsx)(y,Object(i.a)(Object(i.a)({},e),{},{handleOnClick:d}))}}),Object(p.jsx)(h.a,{path:"/Login",component:O}),Object(p.jsx)(h.a,{path:"/About",component:v}),Object(p.jsx)(h.a,{path:"/songs/:song",render:function(e){return Object(p.jsx)(m,Object(i.a)(Object(i.a)({},e),{},{currentTrack:o,token:c}))}})]})]})})};c(82),c(83),c(84);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x.a,{children:Object(p.jsx)(S,{})})}),document.getElementById("root"))},67:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},79:function(e,t,c){},82:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.89e71ad0.chunk.js.map