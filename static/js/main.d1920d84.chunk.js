(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],{1058:function(e,t,n){},1059:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(11),n(1)),i=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=function(t){var n=t.key;r!==n&&1===n.length&&(c(n),e&&e(n))},n=function(){c(null)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}})),r},u=function(){return(new Date).getTime()},l=n(5),m=n.n(l),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Array(e).fill().map((function(e){return m.a.random.word()})).join(" ")};n(1058);var p=function(){var e=d(),t=Object(a.useState)(new Array(30).fill(" ").join(" ")),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),m=Object(s.a)(l,2),p=m[0],w=m[1],b=Object(a.useState)(e.charAt(0)),v=Object(s.a)(b,2),f=v[0],h=v[1],g=Object(a.useState)(e.substr(1)),j=Object(s.a)(g,2),O=j[0],E=j[1],y=Object(a.useState)(),k=Object(s.a)(y,2),S=k[0],x=k[1],A=Object(a.useState)("0"),N=Object(s.a)(A,2),T=N[0],L=N[1],B=Object(a.useState)("0"),I=Object(s.a)(B,2);return I[0],I[1],i((function(e){S||x(u());var t=p,n=O;if(e===f&&(c.length>0&&o(c.substring(1)),w(t+=f),h(O.charAt(0)),(n=O.substring(1)).split(" ").length<10&&(n+=" "+d()),E(n)," "===f)){var a=(u()-S)/6e4;L((t.length/(5*a)).toFixed(2))}})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Typing Test"),r.a.createElement("div",{className:"textInputBase",onKeyPress:i},r.a.createElement("span",{className:"outgoingText correct-text"},(c+p).slice(-30)),r.a.createElement("span",{className:"currentChar"},f),r.a.createElement("span",{className:"incomingText"},O.substr(0,30))),r.a.createElement("p",{id:"wpm"},T," wpm")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},11:function(e,t,n){},6:function(e,t,n){e.exports=n(1059)}},[[6,1,2]]]);
//# sourceMappingURL=main.d1920d84.chunk.js.map