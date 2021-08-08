(this["webpackJsonpform-builder"]=this["webpackJsonpform-builder"]||[]).push([[0],{136:function(e,t,n){e.exports={add_form_div:"App_add_form_div__1a_27",add_form_button_img:"App_add_form_button_img__3sUPp"}},168:function(e,t,n){e.exports={loaderDiv:"loader_loaderDiv__2yVdH"}},293:function(e,t,n){"use strict";n.r(t);var a,c,r,s,o,i,l=n(0),j=n.n(l),d=n(39),u=n.n(d),b=n(21),m=n(47),O=n(71),h=n(20),x=n(305),f=n(308),p=n(307),v=n(301),g=n(309),_=n(163),q=n(162),N=n.n(q),y=Object(_.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;e.extensions.code,Object(m.b)(t,{type:"error"}),console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&(Object(m.b)(n,{type:"error"}),console.log("[Network error]: ".concat(n)))})),w=new f.a({uri:"".concat("/","graphql")}),F=new p.a({link:Object(v.a)([y,w]),cache:new g.a({typePolicies:{Form:{fields:{createdAt:{read:function(e){return N()(e).format("DD MMMM YYYY")}}}}}})}),C=n(312),k=n(302),M=n(310),Q=n(1),S=function(){return Object(Q.jsx)(C.a,{bg:"light",expand:"lg",children:Object(Q.jsxs)(k.a,{children:[Object(Q.jsx)(C.a.Brand,{href:"#home",children:"Form Builder"}),Object(Q.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(Q.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(Q.jsx)(M.a,{className:"me-auto",children:Object(Q.jsx)(M.a.Link,{children:Object(Q.jsx)(O.b,{to:"/",children:"Home"})})})})]})})},B=n(32),D=n(4),T=n(14),A=n(316),I=n(306),$=n(303),H=n(168),L=n.n(H),V=function(){return Object(Q.jsx)("div",{className:L.a.loaderDiv,children:Object(Q.jsx)($.a,{animation:"border",role:"status",children:Object(Q.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},Y=n(6),P=n(89),E=n(91),G=["label","parentClass","name","required"],J=function(e){var t=e.label,n=e.parentClass,a=e.name,c=e.required,r=Object(Y.a)(e,G),s=Math.floor(Math.random()*Math.floor(1e3));return Object(Q.jsxs)("div",{className:n,children:[t&&Object(Q.jsxs)("label",{htmlFor:"".concat(s,"-").concat(a),children:[t," ",c&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Q.jsx)(T.b,Object(D.a)({id:"".concat(s,"-").concat(a),name:a},r)),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:a})})]})},R=["label","name","parentClass","required"],W=function(e){var t=e.label,n=e.name,a=e.parentClass,c=e.required,r=Object(Y.a)(e,R),s=Math.floor(Math.random()*Math.floor(1e3));return Object(Q.jsxs)("div",{className:a,children:[t&&Object(Q.jsxs)("label",{htmlFor:"".concat(s,"-").concat(n),children:[t," ",c&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Q.jsx)(T.b,Object(D.a)({component:"textarea",id:"".concat(s,"-").concat(n),name:n,style:{height:"100px"}},r)),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:n})})]})},z=["label","name","parentClass","dropdownIcon","options","required","typeYearDropDown"],U=function(e){for(var t=e.label,n=e.name,a=e.parentClass,c=(e.dropdownIcon,e.options),r=e.required,s=e.typeYearDropDown,o=Object(Y.a)(e,z),i=Math.floor(Math.random()*Math.floor(1e3)),l=j.a.useState({max:(new Date).getFullYear(),min:(new Date).getFullYear()-10}),d=Object(b.a)(l,2),u=d[0],m=(d[1],[]),O=u.min;O<=u.max;O++)m.unshift(O);return Object(Q.jsxs)("div",{className:a,children:[t&&Object(Q.jsxs)("label",{htmlFor:"".concat(i,"-").concat(n),children:[t," ",r&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Q.jsx)(T.b,Object(D.a)(Object(D.a)({component:"select",id:"".concat(i,"-").concat(n),name:n},o),{},{children:s?Object(Q.jsxs)(j.a.Fragment,{children:[Object(Q.jsx)("option",{value:"",defaultValue:!0,disabled:!0,children:e.placeholder}),m.map((function(e){return Object(Q.jsx)("option",{value:e,children:e},e)}))]}):c.map((function(e){return Object(Q.jsx)("option",{value:e.value,children:e.key},e.value)}))})),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:n})})]})},K=["label","required","options","onClick","parentClass","name"],X=function(e){var t=e.label,n=e.required,a=e.options,c=e.onClick,r=e.parentClass,s=e.name,o=Object(Y.a)(e,K),i=Math.floor(Math.random()*Math.floor(1e3));return Object(Q.jsxs)("div",{className:r,children:[t&&Object(Q.jsxs)("label",{children:[t," ",n&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Q.jsx)("fieldset",{className:"service-select-content",children:Object(Q.jsx)(T.b,Object(D.a)(Object(D.a)({name:s},o),{},{children:function(e){var t=e.field;return a.map((function(e,n){return Object(Q.jsxs)(j.a.Fragment,{children:[Object(Q.jsx)("input",Object(D.a)(Object(D.a)({type:"radio",name:s,id:"".concat(i,"-").concat(s,"-").concat(n)},t),{},{value:e.value,checked:e.value===t.value,onClick:function(){return c&&c()}})),Object(Q.jsx)("label",{htmlFor:"".concat(i,"-").concat(s,"-").concat(n),children:e.key})]},e.value+n)}))}}))}),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:s})})]})},Z=["label","required","options","parentClass","name"],ee=function(e){var t=e.label,n=e.required,a=e.options,c=e.parentClass,r=e.name,s=Object(Y.a)(e,Z);Math.floor(Math.random()*Math.floor(1e3));return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:c,children:[t&&Object(Q.jsxs)("label",{children:[t," ",n&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})]}),Object(Q.jsx)("br",{}),Object(Q.jsx)(T.b,Object(D.a)(Object(D.a)({name:r},s),{},{children:function(e){var t=e.field;return a.map((function(e,n){var a;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("input",Object(D.a)(Object(D.a)({type:"checkbox",name:r},t),{},{value:e.value,onChange:function(e){},checked:null===(a=t.value)||void 0===a?void 0:a.includes(e.value)})),e.key]})}))}}))]}),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:r})})]})},te=function(e){var t=e.label,n=e.parentClass,a=e.className,c=e.accept,r=e.name,s=e.multiple,o=e.required,i=Math.floor(Math.random()*Math.floor(1e3));return Object(Q.jsxs)("div",{className:n,children:[t&&Object(Q.jsxs)("label",{htmlFor:"".concat(i,"-").concat(r),children:[t," ",o&&Object(Q.jsx)("span",{className:"text-danger",children:"*"})," "]}),Object(Q.jsx)(T.b,{name:r,children:function(e){var t=e.form;return Object(Q.jsx)("input",{type:"file",name:r,className:a,accept:c,onChange:function(e){s?t.setFieldValue(r,Object.values(e.currentTarget.files)):t.setFieldValue(r,e.currentTarget.files[0]),t.setFieldTouched(r)},multiple:s})}}),Object(Q.jsx)("small",{className:"text-danger",children:Object(Q.jsx)(T.a,{name:r})})]})},ne=["control"],ae=function(e){var t=e.control,n=Object(Y.a)(e,ne);switch(t){case"input":return Object(Q.jsx)(J,Object(D.a)({},n));case"textarea":return Object(Q.jsx)(W,Object(D.a)({},n));case"select":return Object(Q.jsx)(U,Object(D.a)({},n));case"radio":return Object(Q.jsx)(X,Object(D.a)({},n));case"checkbox":return Object(Q.jsx)(ee,Object(D.a)({},n));case"file":return Object(Q.jsx)(te,Object(D.a)({},n))}},ce=n(49),re=ce.b().shape({name:ce.c().trim("Name cannot include leading and trailing spaces").strict(!0).min(3,(function(e){var t=e.min;return"Name must be at least ".concat(t," characters")})).max(150,(function(e){var t=e.max;return"Name must be less than ".concat(t," characters")})).required("Name is required")}),se=ce.b().shape({questions:ce.a().of(ce.b().shape({question:ce.c().min(4,"too short!!").required("Question is Required"),question_type:ce.c().required("Please select question type."),answer:ce.a().of(ce.c().required("Value should not be empty!.")).required("Must have options").min(1,"Minimum of 1 Options")})).required("Must have Question.").min(1,"Minimum of 1 Question")}),oe=n(66),ie=n(311),le=Object(ie.a)(a||(a=Object(oe.a)(["\n  fragment NewForm on Form {\n    _id\n    name\n    total_response\n    slug\n    createdAt\n  }\n"]))),je=Object(ie.a)(c||(c=Object(oe.a)(["\n  ","\n  query forms( $limit: Int!, $offset: Int!) {\n    forms(limit: $limit, offset: $offset){\n      forms{\n       ...NewForm\n      }\n      pageInfo{\n        offset\n      }\n    }\n  }\n"])),le),de=Object(ie.a)(r||(r=Object(oe.a)(["\n  ","\n  query form( $slug: String!) {\n    form(slug: $slug){\n      ...NewForm\n       questions {\n        _id\n        question\n        question_type\n        answer\n      }\n    }\n  }\n"])),le),ue=Object(ie.a)(s||(s=Object(oe.a)(["\n  ","\n  mutation AddFormMutation($form: FormInput!) {\n    addForm(form: $form){\n      message\n      form{\n        ...NewForm\n      }\n    }\n  }\n"])),le),be=Object(ie.a)(o||(o=Object(oe.a)(["\n  ","\n  mutation AddQuestionsMutation($question: QuestionInput!) {\n    addQuestions(question: $question){\n      message\n      form{\n        ...NewForm\n      }\n    }\n  }\n"])),le),me=Object(ie.a)(i||(i=Object(oe.a)(["\n  ","\n  mutation sumbitForm($slug: String!) {\n    sumbitForm(slug: $slug){\n      message\n      form{\n        ...NewForm\n      }\n    }\n  }\n"])),le),Oe=n(58),he=n.n(Oe),xe=["formId"];var fe=function(e){var t=e.formId,n=Object(Y.a)(e,xe),a=Object(A.a)(be,{onCompleted:function(e){n.onHide(),Object(m.b)(e.addQuestions.message)}}),c=Object(b.a)(a,2),r=c[0];return c[1].loading?Object(Q.jsx)(V,{}):Object(Q.jsxs)(I.a,Object(D.a)(Object(D.a)({},n),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(Q.jsx)(I.a.Header,{closeButton:!0,children:Object(Q.jsx)(I.a.Title,{id:"contained-modal-title-vcenter",children:"Add Questions"})}),Object(Q.jsx)(I.a.Body,{children:Object(Q.jsx)(k.a,{className:"pb-3",children:Object(Q.jsx)(T.e,{initialValues:{questions:[{question_type:"",question:"",answer:[""]}]},onSubmit:function(e){r({variables:{question:Object(D.a)({form:t},e)}})},validationSchema:se,children:function(e){var t=e.values;e.touched,e.errors;return Object(Q.jsxs)(T.d,{children:[Object(Q.jsx)(T.c,{name:"questions",render:function(e){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("button",{type:"button",className:"btn btn-info mb-2 ".concat(he.a.float_right),onClick:function(){return e.push({question:"",question_type:"",answer:[""]})},children:[Object(Q.jsx)(P.a,{icon:E.a})," New Question"]}),Object(Q.jsx)("div",{className:he.a.float_clearfix}),Object(Q.jsx)("div",{children:t.questions.map((function(n,a){return Object(Q.jsxs)("div",{className:"border p-3 my-3",children:[Object(Q.jsxs)("h5",{className:"".concat(he.a.float_left," mb-3"),children:["Question ",a+1]}),0!=a&&Object(Q.jsx)("a",{className:"".concat(he.a.answerButtons," ").concat(he.a.float_right," mb-2"),onClick:function(){return e.remove(a)},children:Object(Q.jsx)(P.a,{icon:E.b})}),Object(Q.jsx)(ae,{control:"input",parentClass:"form-group my-2",name:"questions[".concat(a,"].question"),className:"form-control ",placeholder:"Question",required:!0}),Object(Q.jsx)(ae,{control:"select",options:[{value:"",key:"Select Question Type"},{value:"drop_down",key:"Drop Down"},{value:"text",key:"Text"},{value:"multi_choice",key:"Multichoice Checkbox"},{value:"radio",key:"Single Select Radio"}],parentClass:"form-group my-2",name:"questions[".concat(a,"].question_type"),className:"form-control",placeholder:"Question Type",required:!0}),n.question_type&&Object(Q.jsx)(T.c,{name:"questions[".concat(a,"].answer"),render:function(e){if("text"==n.question_type&&t.questions[a].answer.length>1)for(var c=1;c<=t.questions[a].answer.length-1;c++)e.remove(c);return Object(Q.jsx)("div",{children:t.questions[a].answer&&t.questions[a].answer.length>0?t.questions[a].answer.map((function(t,c){return Object(Q.jsx)("div",{children:"text"==n.question_type?Object(Q.jsx)(ae,{control:"input",parentClass:"form-group my-2 ",name:"questions.[".concat(a,"].answer.").concat(c),className:"form-control",placeholder:"Write Here....",required:!0}):Object(Q.jsxs)("div",{className:"row",children:[Object(Q.jsx)("div",{className:"col-10",children:Object(Q.jsx)(ae,{control:"input",parentClass:"form-group my-2",name:"questions.[".concat(a,"].answer.").concat(c),className:"form-control",placeholder:"Option",required:!0})}),Object(Q.jsx)("div",{className:"col-1 pt-2",children:Object(Q.jsx)("a",{className:he.a.answerButtons,onClick:function(){return e.remove(c)},children:Object(Q.jsx)(P.a,{icon:E.b})})}),Object(Q.jsx)("div",{className:"col-1 pt-2",children:Object(Q.jsx)("a",{className:he.a.answerButtons,onClick:function(){return e.insert(c+1,"")},children:Object(Q.jsx)(P.a,{icon:E.a})})})]})},c)})):Object(Q.jsx)("a",{className:"".concat(he.a.anchor_tag," my-2 mr-2"),onClick:function(){return e.push("")},children:"Add options"})})}})]},a)}))})]})}}),Object(Q.jsx)("div",{className:"form-group mt-3",children:Object(Q.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit"})})]})}})})})]}))};var pe=function(e){var t=Object(l.useState)(0),n=Object(b.a)(t,2),a=n[0],c=n[1],r=Object(l.useState)(!1),s=Object(b.a)(r,2),o=s[0],i=s[1],j=Object(A.a)(ue,{onCompleted:function(t){c(t.addForm.form._id),e.onHide(),i(!0)},update:function(e,t){var n=t.data.addForm;e.modify({fields:{forms:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.writeFragment({data:n.form,fragment:le});return Object(D.a)(Object(D.a)({},t),{},{forms:[a].concat(Object(B.a)(t.forms))})}}})}}),d=Object(b.a)(j,2),u=d[0];return d[1].loading?Object(Q.jsx)(V,{}):Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(I.a,Object(D.a)(Object(D.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(Q.jsx)(I.a.Header,{closeButton:!0,children:Object(Q.jsx)(I.a.Title,{id:"contained-modal-title-vcenter",children:"Create New Form"})}),Object(Q.jsx)(I.a.Body,{children:Object(Q.jsx)(k.a,{className:"py-3",children:Object(Q.jsx)(T.e,{initialValues:{name:""},onSubmit:function(e){return u({variables:{form:e}})},validationSchema:re,children:function(e){return Object(Q.jsxs)(T.d,{children:[Object(Q.jsx)(ae,{control:"input",parentClass:"form-group",name:"name",className:"form-control ".concat(e.touched.name&&e.errors.name&&"is-invalid"),placeholder:"Name",required:!0}),Object(Q.jsx)("div",{className:"form-group mt-3",children:Object(Q.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Add Questions"})})]})}})})})]})),Object(Q.jsx)(fe,{formId:a,show:o,onHide:function(){return i(!1)}})]})},ve=n(314),ge=n(304),_e=n(313),qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return e.length>t?e.slice(0,t-1)+"\u2026":e},Ne=function(){var e=Object(_e.a)(je,{variables:{offset:0,limit:10}}),t=e.data;e.error;return e.loading?Object(Q.jsx)(V,{}):Object(Q.jsx)(k.a,{children:Object(Q.jsx)(ve.a,{children:Object(Q.jsxs)(ve.a.Body,{children:[Object(Q.jsx)(ve.a.Title,{children:"Form Lists"}),Object(Q.jsxs)(ge.a,{striped:!0,bordered:!0,hover:!0,children:[Object(Q.jsx)("thead",{children:Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("th",{children:"#"}),Object(Q.jsx)("th",{children:"Name"}),Object(Q.jsx)("th",{children:"Url"}),Object(Q.jsx)("th",{children:"Generated At"}),Object(Q.jsx)("th",{children:"Total Responses"})]})}),Object(Q.jsx)("tbody",{children:null===t||void 0===t?void 0:t.forms.forms.map((function(e){return Object(Q.jsxs)("tr",{children:[Object(Q.jsx)("td",{children:"1"}),Object(Q.jsx)("td",{title:e.name,children:qe(e.name)}),Object(Q.jsxs)("td",{children:[" ",Object(Q.jsx)(O.b,{to:"/".concat(e.slug),children:e.slug})]}),Object(Q.jsx)("td",{children:e.createdAt}),Object(Q.jsx)("td",{children:e.total_response})]},e._id)}))})]})]})})})},ye=function(){var e=Object(h.f)().slug,t=Object(_e.a)(de,{variables:{slug:e}}),n=t.data,a=(t.error,t.loading),c=Object(A.a)(me,{onCompleted:function(e){return Object(m.b)(e.sumbitForm.message)}}),r=Object(b.a)(c,2),s=r[0],o=r[1].loading;return a||o?Object(Q.jsx)(V,{}):Object(Q.jsx)(k.a,{children:Object(Q.jsx)(ve.a,{children:Object(Q.jsxs)(ve.a.Body,{children:[Object(Q.jsx)(ve.a.Title,{className:"text-center my-3",children:null===n||void 0===n?void 0:n.form.name}),Object(Q.jsx)(T.e,{initialValues:{name:""},onSubmit:function(t){return s({variables:{slug:e}})},children:function(e){return Object(Q.jsxs)(T.d,{children:[null===n||void 0===n?void 0:n.form.questions.map((function(e){return"drop_down"==e.question_type?Object(Q.jsx)(ae,{control:"select",options:[{key:"Please select value",value:""}].concat(Object(B.a)(e.answer.map((function(e,t){return{key:e,value:t}})))),parentClass:"form-group my-4",name:e._id,label:e.question,className:"form-control",placeholder:e.question,required:!0},e._id):"radio"==e.question_type?Object(Q.jsx)(ae,{control:"radio",options:e.answer.map((function(e,t){return{key:e,value:"".concat(t)}})),parentClass:"form-group my-4",name:e._id,label:e.question,className:"form-control",required:!0},e._id):"multi_choice"==e.question_type?Object(Q.jsx)(ae,{control:"checkbox",options:e.answer.map((function(e,t){return{key:e,value:"".concat(t)}})),parentClass:"form-group my-4",name:e._id,label:e.question,className:"form-control",required:!0},e._id):Object(Q.jsx)(ae,{control:"input",parentClass:"form-group my-2",name:e._id,className:"form-control",placeholder:null===e||void 0===e?void 0:e.question,label:null===e||void 0===e?void 0:e.question,required:!0},e._id)})),Object(Q.jsx)("div",{className:"form-group mt-3",children:Object(Q.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:"Submit"})})]})}})]})})})},we=(n(291),n(292),n(136)),Fe=n.n(we),Ce=n.p+"static/media/plus.7b5b49fb.png";var ke=function(){var e=Object(l.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(Q.jsx)(O.a,{children:Object(Q.jsxs)(x.a,{client:F,children:[Object(Q.jsx)(m.a,{}),Object(Q.jsx)(pe,{show:n,onHide:function(){return a(!1)}}),Object(Q.jsx)(S,{}),Object(Q.jsx)("a",{onClick:function(){return a(!0)},children:Object(Q.jsxs)("div",{className:Fe.a.add_form_div,children:[Object(Q.jsx)("img",{src:Ce,alt:"Add",className:Fe.a.add_form_button_img}),Object(Q.jsx)("p",{className:"text-muted mt-2",children:"Add More Forms"})]})}),Object(Q.jsxs)(h.c,{children:[Object(Q.jsx)(h.a,{path:"/",exact:!0,children:Object(Q.jsx)(Ne,{})}),Object(Q.jsx)(h.a,{path:"/:slug",exact:!0,children:Object(Q.jsx)(ye,{})})]})]})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,317)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};u.a.render(Object(Q.jsx)(j.a.StrictMode,{children:Object(Q.jsx)(ke,{})}),document.getElementById("root")),Me()},58:function(e,t,n){e.exports={answerButtons:"addQuestion_answerButtons__2o6i1",float_right:"addQuestion_float_right__5WJuo",float_left:"addQuestion_float_left__13WSG",float_clearfix:"addQuestion_float_clearfix__1OofK",anchor_tag:"addQuestion_anchor_tag__2M1hw"}}},[[293,1,2]]]);
//# sourceMappingURL=main.fd7902b8.chunk.js.map