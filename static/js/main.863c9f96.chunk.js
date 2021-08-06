(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(7),n=a.n(c),i=(a(13),a(2)),r=a(0);var o=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(r.jsxs)("nav",{className:"navbar nav-tabs",children:[Object(r.jsx)("h1",{className:"navbar-brand mt-1 mx-5",children:"Shane McNulty: Junior Developer"}),Object(r.jsxs)("ul",{className:"navbar-nav d-flex flex-row px-2",children:[Object(r.jsx)("li",{className:"nav-item px-2",children:Object(r.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(r.jsx)("li",{className:"nav-item px-2 ",children:Object(r.jsx)("a",{href:"#projects",onClick:function(){return a("Projects")},className:"Projects"===t?"nav-link active":"nav-link",children:"Projects"})}),Object(r.jsx)("li",{className:"nav-item px-2",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(r.jsx)("li",{className:"nav-item px-2",children:Object(r.jsx)("a",{href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})]})};var l=function(){return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("h2",{class:"top-title",children:"Shane McNulty"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"media d-flex flex-row",children:[Object(r.jsx)("div",{className:"photo-container",children:Object(r.jsx)("div",{className:"card card0",children:Object(r.jsx)("div",{className:"border",children:Object(r.jsx)("h3",{children:"Hi Faith!"})})})}),Object(r.jsxs)("p",{className:"media-body pt-4",children:["My name is Shane McNulty and I am currently enrolled in the University of Penn's Coding Boot Camp. I am learning full-stack development with a focus on Javascript, CSS, HTML, MySQL and now moving into Mongo and React. This Portfolio is designed to highlight some of my work in this course as I transition into Coding and Digitial Language from 20 years in the hospiality industry.",Object(r.jsx)("hr",{}),"I am a driven worker with 10 years of management experience. I am an excellent communicator that thrives in problem solving and attaining set goals. Please click the 'Project' tabs in the naviagation bar to see a group of projects that I have completed or I am currently working on. Please feel free to reach out at any time if you have any questions about my work or would like to speak further. Thank you for visiting.",Object(r.jsx)("hr",{}),'Click on the headshot and say "Hello" to my partner, Faith.']})]})]})};a(3);var h=function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"img-container",children:Object(r.jsx)("img",{class:"img-thumbnail",alt:e.name,src:e.image})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{className:"card-title",children:e.name}),Object(r.jsx)("p",{class:"topics",children:e.topics}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{class:"proj-icons-container",children:[Object(r.jsxs)("a",{href:e.github,children:[Object(r.jsx)("img",{class:"project-icons",src:"https://img.icons8.com/material-rounded/48/000000/github.png",alt:"Github Icon",title:"Github Link to Code"})," "]}),Object(r.jsxs)("a",{href:e.deploy,children:[Object(r.jsx)("img",{class:"project-icons",src:"https://img.icons8.com/material-outlined/48/000000/link--v1.png",alt:"Link Icon",title:"View Deployment"})," "]})]})]})]})},m=a(8);function j(e){return Object(r.jsx)("div",{className:"wrapper",children:e.children})}var d=function(){return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)("h2",{className:"top-title",children:"Coding Projects"}),Object(r.jsx)("hr",{})]}),Object(r.jsx)(j,{id:"card-data",children:m.map((function(e){return Object(r.jsx)(h,{image:e.image,name:e.name,deploy:e.deploy,github:e.github,topics:e.topics},e.id)}))})]})},u=a(4),b=a(6);var p=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),o=Object(i.a)(n,2),l=o[0],h=o[1],m=a.name,j=a.email,d=a.message;function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);h(t?"":"Please enter a valid email address")}else e.target.value.length?h(""):h("".concat(e.target.name," is required"));l||c(Object(b.a)(Object(b.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Contact Form"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(r.jsxs)("div",{class:"mt-5",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(r.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:m,onBlur:p})]}),Object(r.jsxs)("div",{class:"mt-5",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(r.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:j,onBlur:p})]}),Object(r.jsxs)("div",{class:"mt-5",children:[Object(r.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(r.jsx)("textarea",{class:"form-control",name:"message",defaultValue:d,onBlur:p,rows:"7"})]}),l&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:l})}),Object(r.jsx)("div",{class:"mt-5 mb-5",children:Object(r.jsx)("button",{"data-testid":"button",class:"btn btn-outline-dark ",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})};var g=function(){return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("h2",{className:"top-title",children:"Resume"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{class:"mt-5",children:[Object(r.jsx)("h2",{className:"top-title",children:"Shane McNulty"}),Object(r.jsx)("a",{href:"/images/SJM-Resume-junior_dev7.25.21 (1).pdf",src:"",download:!0,children:"Click Here to download"}),Object(r.jsx)("hr",{}),Object(r.jsx)("h4",{className:"skills",children:"Proficiencies:"}),Object(r.jsx)("p",{children:"React | MongoDB | MySQL | Express | Sequelize | Javascript | CSS"}),Object(r.jsx)("p",{children:"Manager of large teams | Excellent Communicator | Highly Effective is Fast-Paced Environments"})]})})]})};function x(){var e=Object(s.useState)("About"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(r.jsxs)("div",{className:"nav-div",children:[Object(r.jsx)(o,{currentPage:a,handlePageChange:function(e){return c(e)}}),"About"===a?Object(r.jsx)(l,{}):"Projects"===a?Object(r.jsx)(d,{}):"Contact"===a?Object(r.jsx)(p,{}):Object(r.jsx)(g,{})]})}var O=function(){return Object(r.jsxs)("footer",{className:"footer fixed-bottom",children:[Object(r.jsx)("a",{href:"https://github.com/mcnultyshane",children:Object(r.jsx)("img",{src:"https://img.icons8.com/color/48/000000/github--v1.png",alt:"Github",className:"icon"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/shane-mcnulty-5748aa1a/",children:Object(r.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})})]})};var v=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsx)(O,{})]})};n.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"Movie Shelf","image":"https://raw.githubusercontent.com/mcnultyshane/movie_shelf/main/images/screencapture-yourmovieshelf-herokuapp-shelf-search-2021-07-24-13_18_23.jpg","deploy":"https://yourmovieshelf.herokuapp.com","github":"https://github.com/mcnultyshane/movie_shelf","topics":"Full Stack | Express | Handlebars.js | Sequelize | MySQL"},{"id":2,"name":"Artists & Bands","image":"https://raw.githubusercontent.com/Keith-L-Watford/artists-and-bands/main/assets/images/mobile.png","deploy":"https://mcnultyshane.github.io/artists-and-bands/","github":"https://github.com/mcnultyshane/artists-and-bands","topics":"Javascript | CSS Frameworks | API Calls"},{"id":3,"name":"Techno Chronicles","image":"https://raw.githubusercontent.com/mcnultyshane/MVC_tech_blog/main/images/homepage-screencapture.jpg","deploy":"https://tech-blog--s.herokuapp.com/","github":"https://github.com/mcnultyshane/MVC_tech_blog","topics":"Model View Controller | Handlebars.js | Sequelize | Express"},{"id":4,"name":"Budget Tracker","image":"https://raw.githubusercontent.com/mcnultyshane/budget_trackers/main/public/assets/images/screencap-1.jpg","deploy":"https://budget-tracker--s.herokuapp.com/","github":"https://github.com/mcnultyshane/budget_trackers","topics":"Progressive Web Application"},{"id":5,"name":"Weather Dashboard","image":"https://raw.githubusercontent.com/mcnultyshane/weather_dashboard/main/assets/images/full-display.jpg","deploy":"https://mcnultyshane.github.io/weather_dashboard/","github":"https://github.com/mcnultyshane/weather_dashboard","topics":"Server-side API\'s | Local Storage"},{"id":6,"name":"Express Note Taker","image":"https://photos.google.com/search/_tra_/photo/AF1QipPy8OSfYtCIFTnC-gzWC2BOQZh7uTy2iVwvKJZC","deploy":"https://gentle-headland-78161.herokuapp.com/","github":"https://github.com/mcnultyshane/note-taker-express","topics":"Express | JSON Data"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.863c9f96.chunk.js.map