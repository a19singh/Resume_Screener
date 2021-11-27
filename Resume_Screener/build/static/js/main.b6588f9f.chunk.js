(this["webpackJsonpresume-screener-ui"]=this["webpackJsonpresume-screener-ui"]||[]).push([[0],{34:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(27),r=a.n(n),l=(a(34),a(1));function i(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"Resume Screener"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Resume Insight"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link disabled",href:"/",children:"Profile Finder"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link disabled",href:"/",children:"About"})})]})})]})})})}a(36);var d=a(2),o=a(3),b=a(7),j=a(6),h=a(17),u=a.n(h),m=a(9),f=a(29);function O(e){var t=Object(s.useState)(!1),a=Object(m.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)([]),i=Object(m.a)(r,2),d=i[0],o=i[1],b=Object(s.useState)([]),j=Object(m.a)(b,2),h=j[0],u=j[1],O=Object(s.useState)([]),p=Object(m.a)(O,2),x=p[0],v=p[1];return Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)("h5",{className:"card-header text-center border border-success text-light bg-dark py-3",children:e.title}),Object(l.jsx)("div",{className:"card-body border bg-light p-4",children:c?Object(l.jsx)(f.a,{data:{datasets:[{label:"Profile Predictor",data:d,backgroundColor:x,hoverOffset:4}],labels:h},height:400,width:400,options:{maintainAspectRatio:!1}}):function(e){console.log(e),o(Object.values(e.payload)),u(Object.keys(e.payload));for(var t=[],a=0;a<Object.values(e.payload).length;a++)t.push("rgb("+Math.floor(256*(1+Math.random())/2)+", "+Math.floor(256*(1+Math.random())/2)+", "+Math.floor(256*(1+Math.random())/2)+")");v(t),n(!0)}(e.res)})]})}u.a.defaults.xsrfHeaderName="X-CSRFTOKEN",u.a.defaults.xsrfCookieName="csrftoken";var p=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).custom_file_upload_url="http://127.0.0.1:8000/get_prediction",s.getFile=function(e){var t=e.target.files[0];s.setState({pdf_file:t})},s.handleSubmit=function(){if(null!==s.state.pdf_file){var e=new FormData;e.append("files",s.state.pdf_file),u.a.post(s.custom_file_upload_url,e,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){console.log("Success, "+JSON.stringify(e.data)),s.setState({data:e.data,data_state:!0})})).catch((function(e){console.log(e)}))}},s.handleBack=function(){s.setState({data:[],data_state:!1,pdf_file:null})},s.state={pdf_file:null,data:[],data_state:!1},s}return Object(o.a)(a,[{key:"render",value:function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"container d-grid gap-3 my-4",children:this.state.data_state?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"row g-3  rounded p-2 my-1",children:[Object(l.jsx)(O,{res:this.state.data,title:this.props.title}),Object(l.jsx)("div",{className:"mb-2 text-center",children:Object(l.jsx)("input",{type:"submit",className:"btn btn-success",onClick:this.handleBack,value:"Back"})})]})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card rounded py-4 px-5 my-2 bg-dark",children:[Object(l.jsx)("div",{className:"mb-3 text-light",children:Object(l.jsx)("strong",{children:Object(l.jsx)("h2",{children:this.props.formTitle})})}),Object(l.jsxs)("div",{className:"row g-3 border border-success rounded p-2 my-1",children:[Object(l.jsxs)("div",{className:"mb-2 text-light",children:[Object(l.jsx)("label",{htmlFor:"formFile",className:"form-label mb-4",children:'Click on the "Choose File" button to upload a file:'}),Object(l.jsx)("input",{className:"form-control ",type:"file",id:"files",name:"files",onChange:this.getFile})]}),Object(l.jsx)("div",{className:"col mb-2 ",children:Object(l.jsx)("input",{type:"submit",className:"btn btn-success",onClick:this.handleSubmit,value:"Upload"})})]})]})})})})}}]),a}(s.Component),x=a(28),v=a(4);var g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{}),Object(l.jsx)(x.a,{children:Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:"/",element:Object(l.jsx)(p,{formTitle:"Upload Resume",title:"Resume Insight"})}),Object(l.jsx)(v.a,{path:"/donut/:res",render:function(e){var t=e.match;return Object(l.jsx)(O,{res:t.params.res})}})]})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()}},[[55,1,2]]]);
//# sourceMappingURL=main.b6588f9f.chunk.js.map