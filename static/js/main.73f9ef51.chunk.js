(this["webpackJsonpemployee-organizer-project"]=this["webpackJsonpemployee-organizer-project"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(15),r=n.n(a),l=(n(22),n(17)),s=n(6),i=n(16),o=n.n(i),j=function(){return new Promise((function(e,t){o.a.get("https://randomuser.me/api/?results=15").then((function(t){var n=t.data.results.map((function(e){return{firstname:e.name.first,lastname:e.name.last,fullname:e.name.first+" "+e.name.last,email:e.email,image:e.picture.large,phone:e.cell,dob:e.dob.date}}));e(n)})).catch((function(e){return t(e)}))}))},u=function(){return new Promise((function(e){e()}))},m=n(0);var d=function(){return Object(m.jsx)("div",{className:"jumbotron",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"display-4",children:"Employee Organizer"}),Object(m.jsx)("hr",{className:"my-4"}),Object(m.jsx)("p",{className:"lead",children:"Click on the column names to sort by them!"})]})})};var h=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"searchName",children:"Employee Search"}),Object(m.jsx)("input",{type:"name",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Employee Name",onChange:function(t){t.preventDefault(),e.handleSearchQueryChange(t)}})]})})},b=function(e){return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.image})}),Object(m.jsx)("td",{children:e.fullname}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.dob})]})})};var f=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],f=i[1];return Object(c.useEffect)((function(){u().then((function(){j().then((function(e){a(e)}))})).catch((function(e){return console.log(e)}))}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)(d,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h,{handleSearchQueryChange:function(e){f(e.target.value)}}),Object(m.jsxs)("table",{className:"table table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Picture"}),Object(m.jsx)("th",{scope:"col",children:Object(m.jsx)("button",{className:"btn btn-info",onClick:function(e){if(e.preventDefault(),"sortName"===e.target.getAttribute("data-value")){var t=[];t=(t=Object(l.a)(n)).sort((function(e,t){return e.fullname>t.fullname?1:-1})),a(t)}},"data-value":"sortName",children:"Name"})}),Object(m.jsx)("th",{scope:"col",children:"Phone"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"DOB"})]})}),(console.log(n),n.filter((function(e){return!!e.fullname.toLowerCase().includes(o.toLowerCase())})).map((function(e){return Object(m.jsx)(b,{fullname:e.fullname,email:e.email,image:e.image,phone:e.phone,dob:e.dob})})))]})]})]})};r.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.73f9ef51.chunk.js.map