(this["webpackJsonpdice-merge"]=this["webpackJsonpdice-merge"]||[]).push([[0],{21:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.Spawn="bounceInDown",e.Merge="rubberBand",e.Hold="pulse",e.None=""}(r||(r={}))},22:function(e,n){},23:function(e,n){},34:function(e,n,t){e.exports=t(48)},39:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(14),a=t.n(c),l=(t(39),t(11)),u=t(10),o=t(3),d=t(4);function s(){var e=Object(o.a)(["\n    width: 100px;\n    height: 100px;\n    border-radius: 12px;\n    background-color: #ecf0f1;\n    box-sizing: border-box;\n    box-shadow: inset 5px 5px 5px 0px rgba(0,0,0,0.25);\n    display: flex;\n    align-items: center;\n"]);return s=function(){return e},e}var f=d.a.div(s()),m=t(5);function p(){var e=Object(o.a)(["\n    height: 100px;\n    width: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: ",";\n    background-image: ",";\n    border-image-slice: 1;\n    border-radius: 12px;\n    padding: 12px;\n    box-sizing: border-box;\n"]);return p=function(){return e},e}function b(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    flex: 1;\n\n    > div {\n        display: flex;\n        flex: 1;\n        align-items: center;\n        justify-content: space-around;\n    }\n"]);return b=function(){return e},e}function h(){var e=Object(o.a)(["\n    display: flex;\n    align-content: center;\n    opacity: ",";\n    width: 20px;\n    height: 20px;\n    background-color: ",";\n    border-radius: 100%;\n"]);return h=function(){return e},e}var E=d.a.div(h(),(function(e){return e.show?1:0}),(function(e){switch(e.multiplier){case 1:return"#2c3e50";case 2:return"#2980b9";case 4:return"#27ae60";case 8:return"#8e44ad";case 16:return"#d35400";case 32:return"#c0392b";case 64:return"white";default:return"none"}})),v=d.a.div(b()),g=d.a.div(p(),(function(e){switch(e.multiplier){case 1:return"#ecf0f1";case 2:return"#3498db";case 4:return"#2ecc71";case 8:return"#9b59b6";case 16:return"#e67e22";case 32:return"#e74c3c";default:return"none"}}),(function(e){return 64===e.multiplier?"linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)":"none"})),x=t(13),w=[[[0,0,0],[0,1,0],[0,0,0]],[[0,0,1],[0,0,0],[1,0,0]],[[0,0,1],[0,1,0],[1,0,0]],[[1,0,1],[0,0,0],[1,0,1]],[[1,0,1],[0,1,0],[1,0,1]],[[1,0,1],[1,0,1],[1,0,1]]],O=function(e){var n=e.dice,t=e.animate,c=e.holderId,a=Object(r.useState)(1),o=Object(l.a)(a,2),d=o[0],s=o[1],f=Object(u.b)(),p=Object(x.c)({item:{type:"DICE",dice:n}}),b=Object(l.a)(p,2)[1];return function(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){if(null!==n){var e=setInterval((function(){t.current&&t.current()}),n);return function(){return clearInterval(e)}}}),[n])}((function(){s(Math.floor(6*Math.random()+1))}),t?50:null),Object(r.useEffect)((function(){if(n.animation!==m.EDiceAnimation.None){var e=setTimeout((function(){f({type:"DICE_ANIM_RESET",payload:{holderId:c}})}),600);return function(){return clearTimeout(e)}}}),[n.animation]),i.a.createElement(g,{className:"animated ".concat(n.animation," faster"),ref:b,multiplier:n.multiplier},i.a.createElement(v,{multiplier:n.multiplier},i.a.createElement("div",null,i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][0][0],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][0][1],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][0][2],multiplier:n.multiplier}))),i.a.createElement(v,{multiplier:n.multiplier},i.a.createElement("div",null,i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][1][0],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][1][1],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][1][2],multiplier:n.multiplier}))),i.a.createElement(v,{multiplier:n.multiplier},i.a.createElement("div",null,i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][2][0],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][2][1],multiplier:n.multiplier}),i.a.createElement(E,{show:1===w[(t?d:n.currentValue)-1][2][2],multiplier:n.multiplier}))))},j=function(e){var n=e.holder,t=e.animate,r=e.onDrop,c=e.holderId,a=Object(x.d)({accept:"DICE",canDrop:function(e){return!n.dice||n.dice.currentValue===e.dice.currentValue&&n.dice.multiplier===e.dice.multiplier&&e.dice.multiplier<64},drop:function(e){r(e)}}),u=Object(l.a)(a,2)[1];return i.a.createElement(f,{className:t&&n.dice?"animated tada":"",ref:u},n.dice?i.a.createElement(O,{holderId:c,dice:n.dice,animate:t}):"")};function y(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]);return y=function(){return e},e}function D(){var e=Object(o.a)(["\n    display: flex;\n    height: 50px;\n    max-width: 632px;\n\n    button {\n        border: none;\n        background-color: #34495e;\n        color: white;\n        font-size: 18px;\n        height: 100%;\n        width: 50%;\n\n        transition: background-color 0.3s ease;\n        \n        &:disabled {\n            background-color: #7f8c8d;\n        }\n\n        &:hover:not(:disabled) {\n            background-color: #2c3e50;\n        }\n\n        &:first-child {\n            border-right: solid 1px white;\n            border-radius: 0 0 0 12px;\n        }\n\n        &:last-child {\n            border-radius: 0 0 12px 0;\n        }\n    }\n"]);return D=function(){return e},e}function I(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 632px;\n    padding: 15px;\n    background-color: #1abc9c;\n    box-sizing: border-box;\n    border-radius: 12px 12px 0 0;\n\n    "," {\n        margin: 10px;\n    }\n"]);return I=function(){return e},e}var k=d.a.div(I(),f),H=d.a.div(D()),A=d.a.div(y()),C=function(){var e=Object(u.c)((function(e){return e.dices.diceHolders})),n=Object(r.useState)(!1),t=Object(l.a)(n,2),c=t[0],a=t[1],o=Object(u.b)();return i.a.createElement(A,null,i.a.createElement("div",null,i.a.createElement(k,null,e.map((function(e,n){return i.a.createElement(j,{holderId:n,onDrop:function(e){return function(e,n){o({type:"DICE_DROP",payload:{newHolder:n,dice:e.dice}})}(e,n)},key:n,animate:c,holder:e})}))),i.a.createElement(H,null,i.a.createElement("button",{disabled:c,onClick:function(){a(!0),setTimeout((function(){a(!1),o({type:"DICE_LAUNCH"})}),1001)}},"Launch dices"),i.a.createElement("button",{disabled:c,onClick:function(){o({type:"DICE_ADD"})}},"Add dice"))))},V=t(6),M=t(29),N=t(15),P=t(30),_=t.n(P),S={dices:{animateDices:!1,diceHolders:[{dice:{currentValue:3,multiplier:1,animation:m.EDiceAnimation.None}},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null},{dice:null}],chips:_()(0)}};function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(t,!0).forEach((function(n){Object(M.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e,n){var t=n.newHolder,r=n.dice,i=Object(N.a)(e.diceHolders),c=e.diceHolders.findIndex((function(e){return e.dice===r}));return-1===c?T({},e):(i[c].dice=null,i[t].dice||(r.animation=m.EDiceAnimation.Hold),i[t].dice&&(r.multiplier*=2,r.animation=m.EDiceAnimation.Merge),i[t].dice=T({},r),T({},e,{diceHolders:i}))},B=function(e){var n=e.diceHolders.map((function(e){if(e.dice){var n=T({},e.dice);return T({},e,{dice:T({},n,{currentValue:Math.floor(6*Math.random())+1})})}return T({},e)}));return T({},e,{diceHolders:n})},L=function(e){var n=Object(N.a)(e.diceHolders),t=n.findIndex((function(e){return!e.dice}));return-1===t?T({},e):(n[t].dice={currentValue:Math.floor(6*Math.random())+1,multiplier:1,animation:m.EDiceAnimation.Spawn},T({},e,{diceHolders:n}))},J=function(e,n){var t=n.holderId,r=Object(N.a)(e.diceHolders),i=T({},r[t].dice,{animation:m.EDiceAnimation.None});return r[t]=T({},r[t],{dice:i}),T({},e,{diceHolders:r})},U=Object(V.b)({dices:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.dices,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DICE_DROP":return z(e,n.payload);case"DICE_LAUNCH":return B(e);case"DICE_ADD":return L(e);case"DICE_ANIM_RESET":return J(e,n.payload);default:return T({},e)}}}),W=t(31),$=(t(46),t(47),function(){return i.a.createElement(u.a,{store:Object(V.c)(U,S)},i.a.createElement(x.b,{backend:W.a},i.a.createElement(C,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,n,t){"use strict";var r=t(21);t.d(n,"EDiceAnimation",(function(){return r.a}));t(22),t(23)}},[[34,1,2]]]);
//# sourceMappingURL=main.2c15dd4c.chunk.js.map