(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(8),s=c.n(a),i=c(2),o=c(0);function u(e){var t=e.currentScore,c=e.bestScore,n=e.gameOver;return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"instructions",children:[Object(o.jsx)("h1",{children:"Flag Memory Game"}),Object(o.jsx)("p",{children:"Get points by clicking on any flag that you haven't yet clicked on! Your score resets if you forget and click a flag a second time! "})]}),Object(o.jsxs)("div",{className:"scoreboard-and-status",children:[Object(o.jsxs)("div",{className:"scoreboard",children:[Object(o.jsx)("div",{children:"Score: ".concat(t)}),Object(o.jsx)("div",{children:"Best Score: ".concat(c)})]}),n?Object(o.jsx)("div",{className:"status",children:"GAME OVER! CLICK ON A CARD TO START A NEW ROUND!"}):null]})]})}var j=c(6),l=c.n(j),d=c(9),O=c(10),b=c(7),h=c.n(b);function f(e){var t=e.handleClick,c=e.img,n=c.src,r=c.alt;return Object(o.jsxs)("div",{className:"card",onClick:t,children:[Object(o.jsx)("img",{src:n,alt:r,width:"224",height:"168"}),Object(o.jsx)("h2",{children:r})]})}function m(e){var t=e.resetCurrentScoreAndTallyBestScore,c=e.increaseCurrentScore,r=e.showGameOver,a=e.hideGameOver,s=Object(n.useState)([]),u=Object(i.a)(s,2),j=u[0],b=u[1],m=Object(n.useState)([]),v=Object(i.a)(m,2),g=v[0],p=v[1],x=Object(n.useState)([]),S=Object(i.a)(x,2),y=S[0],C=S[1];function N(){p(h.a.sampleSize(j,20))}function k(e){var n=e.currentTarget.firstElementChild.alt;if(y.includes(n))t(),C([]),N(),r();else{c();var s=Object(O.a)(y);s.push(n),C(s),p(h.a.shuffle(g)),a()}}Object(n.useEffect)((function(){return N()}),[j]),Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flagcdn.com/en/codes.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n=Object.entries(c).filter((function(e){var t=Object(i.a)(e,1)[0];return!!(2===t.length||t.startsWith("gb")&&6===t.length)})),r=n.map((function(e){var t=Object(i.a)(e,2),c=t[0],n=t[1],r="https://flagcdn.com/224x168/".concat(c,".png"),a=new Image;return a.src=r,a.alt=n,a})),b(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w=g.map((function(e){return Object(o.jsx)(f,{img:e,handleClick:k},e.alt)}));return Object(o.jsx)("div",{className:"gameboard",children:g.length>0?w:"Loading"})}c(19);var v=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),j=s[0],l=s[1],d=Object(n.useState)(!1),O=Object(i.a)(d,2),b=O[0],h=O[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{currentScore:c,bestScore:j,gameOver:b}),Object(o.jsx)(m,{resetCurrentScoreAndTallyBestScore:function(){c>j&&l(c),r(0)},increaseCurrentScore:function(){r(c+1)},showGameOver:function(){h(!0)},hideGameOver:function(){h(!1)}})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.00b4bfe0.chunk.js.map