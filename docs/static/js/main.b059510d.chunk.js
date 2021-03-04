(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{29:function(e,c,t){"use strict";t.r(c);var a=t(1),r=t.n(a),s=t(17),n=t.n(s),i=t(8),l=(t(7),t(11)),j=t(2),o=t.p+"static/media/logo.de13d484.png",d=t(0);var h=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"header-top",children:Object(d.jsx)("img",{className:"logo",src:o,alt:"Rick and Morty logo"})}),Object(d.jsx)("div",{className:"stripe",children:"character finder"})]})};var m=function(e){return Object(d.jsxs)("section",{className:"input-group",children:[Object(d.jsx)("label",{className:"label",htmlFor:"name",children:"Type to search"}),Object(d.jsx)("input",{className:"input",type:"text",id:"name",name:"name",onChange:function(c){e.filterHandler({key:"name",value:c.target.value})}})]})},u=function(e){return Object(d.jsxs)("section",{className:"input-group",children:[Object(d.jsx)("label",{className:"label",htmlFor:"species",children:"Species"}),Object(d.jsxs)("select",{className:"input",name:"species",id:"species",onChange:function(c){e.filterHandler({key:"species",value:c.target.value})},children:[Object(d.jsx)("option",{value:"All",children:"All"}),Object(d.jsx)("option",{value:"Human",children:"Human"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"})]})]})},b=function(e){e.preventDefault()},O=function(e){return Object(d.jsx)("section",{children:Object(d.jsxs)("form",{onSubmit:b,children:[Object(d.jsx)(m,{filterHandler:e.filterHandler}),Object(d.jsx)(u,{filterHandler:e.filterHandler})]})})};var x=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.b,{to:"/character/".concat(e.character.id),children:[Object(d.jsx)("img",{className:"card-img",src:e.character.image,alt:"Image of ".concat(e.character.name),title:"Image of ".concat(e.character.name)}),Object(d.jsx)("h4",{className:"card-title",children:e.character.name}),Object(d.jsx)("p",{className:"card-text",children:e.character.species})]})})};var f=function(e){var c=e.characters.map((function(e){return Object(d.jsxs)("li",{className:"card",children:[" ",Object(d.jsx)(x,{character:e})," "]},e.id)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"card-list",children:c})})};var p=function(e){return void 0===e.character?Object(d.jsxs)("section",{className:"card",children:[Object(d.jsx)(i.b,{className:"close__card",to:"/",children:Object(d.jsx)("span",{className:"icon fas fa-times"})}),Object(d.jsx)("h2",{children:"Character not found"})]}):Object(d.jsxs)("section",{className:"card",children:[Object(d.jsx)(i.b,{className:"close__card",to:"/",children:Object(d.jsx)("span",{className:"fas fa-times"})}),Object(d.jsx)("img",{className:"card-img",src:e.character.image,alt:"Image of ".concat(e.character.name),title:"Image of ".concat(e.character.name)}),Object(d.jsx)("h4",{className:"card-title",children:e.character.name}),Object(d.jsxs)("p",{className:"card-text",children:["Status: ",e.character.status]}),Object(d.jsxs)("p",{className:"card-text",children:["Species: ",e.character.species]}),Object(d.jsxs)("p",{className:"card-text",children:["Origin: ",e.character.origin]}),Object(d.jsxs)("p",{className:"card-text",children:["Episodes: ",e.character.episode]})]})},g=function(){return fetch("//rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,status:e.status,origin:e.origin.name,episode:e.episode.length}}))}))};var N=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{children:[" Made with ",Object(d.jsx)("i",{className:"footer-icon fab fa-react"})," by",Object(d.jsx)("a",{className:"footer-link",href:"https://github.com/cvcastano",target:"blank",children:" Caro"})]})})};var v=function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],r=c[1],s=Object(a.useState)(""),n=Object(l.a)(s,2),i=n[0],o=n[1],m=Object(a.useState)("all"),u=Object(l.a)(m,2),b=u[0],x=u[1];Object(a.useEffect)((function(){g().then((function(e){return r(e)}))}),[]);var v=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})).filter((function(e){return"all"===b||e.species===b}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(O,{filterHandler:function(e){console.log(e),"name"===e.key?o(e.value):"species"===e.key&&x(e.value)}}),Object(d.jsx)(f,{characters:v})]})}),Object(d.jsx)(j.a,{path:"/character/:id",render:function(e){var c=parseInt(e.match.params.id),a=t.find((function(e){return e.id===c}));return Object(d.jsx)(p,{character:a})}})]}),Object(d.jsx)(N,{})]})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(v,{})})}),document.getElementById("root"))},7:function(e,c,t){}},[[29,1,2]]]);
//# sourceMappingURL=main.b059510d.chunk.js.map