(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],{1058:function(e,t,n){},1059:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(11),n(1)),i=function(e){var t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=function(t){var n=t.key;r!==n&&1===n.length&&(c(n),e&&e(n))},n=function(){c(null)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}})),r},u=function(){return(new Date).getTime()},l=n(5),m=n.n(l),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Array(e).fill().map((function(e){return m.a.random.word().toLowerCase()})).join(" ")};n(1058);var b=function(){var e=d(),t=Object(a.useState)(new Array(30).fill(" ").join(" ")),n=Object(s.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(""),m=Object(s.a)(l,2),b=m[0],w=m[1],h=Object(a.useState)(e.charAt(0)),j=Object(s.a)(h,2),p=j[0],f=j[1],g=Object(a.useState)(e.substr(1)),v=Object(s.a)(g,2),O=v[0],E=v[1],y=Object(a.useState)(),S=Object(s.a)(y,2),k=S[0],x=S[1],A=Object(a.useState)("0"),N=Object(s.a)(A,2),L=N[0],B=N[1],T=Object(a.useState)(""),C=Object(s.a)(T,2),F=C[0],I=C[1],J=Object(a.useState)("0"),W=Object(s.a)(J,2),D=W[0],K=W[1],M=Object(a.useState)(!0),P=Object(s.a)(M,2),$=P[0],q=P[1];return i((function(e){k||x(u());var t=b,n=O,a=F+e;if(e===p){if(q(!0),c.length>0&&o(c.substring(1)),w(t+=p),f(O.charAt(0)),(n=O.substring(1)).split(" ").length<10&&(n+=" "+d()),E(n)," "===p){var r=(u()-k)/6e4;B((t.length/(5*r)).toFixed(2))}}else console.log("test"),q(!1);I(a),K((100*t.length/a.length).toFixed(2))})),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"typing test"),r.a.createElement("div",{className:"textInputBase",onKeyPress:i},r.a.createElement("span",{className:"outgoingText correct-text"},(c+b).slice(-30)),r.a.createElement("span",{className:$?"currentChar":"incorrect-text"},p),r.a.createElement("span",{className:"incomingText"},O.substr(0,30))),r.a.createElement("p",{id:"results"},L," wpm | ",D,"% acc")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},11:function(e,t,n){},6:function(e,t,n){e.exports=n(1059)}},[[6,1,2]]]);
//# sourceMappingURL=main.27fb4c10.chunk.js.map