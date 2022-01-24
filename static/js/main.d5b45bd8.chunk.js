(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={wrapper:"Filter_wrapper__32nu5",label:"Filter_label__2PVIP",input:"Filter_input__U-GLF"}},15:function(e,t,n){e.exports={item:"Contacts_item__2zbRx",paragraph:"Contacts_paragraph__JtbcZ",button:"Contacts_button__1Yxfp"}},19:function(e,t,n){e.exports={section:"Section_section__2k1Yj",title:"Section_title__222Vt"}},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),s=n(12),i=n.n(s),o=n(4),l=n(24),u=n(18),b=n(1),d=n(22),j=n(6),p=Object(d.a)({reducerPath:"contactsApi",baseQuery:Object(j.d)({baseUrl:"https://61ec28a1f3011500174d20d4.mockapi.io/api"}),tagTypes:["Contacts"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:e.mutation({query:function(e){return{url:"/contacts/",method:"POST",body:e}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),m=p.useFetchContactsQuery,h=p.useAddContactMutation,O=p.useDeleteContactMutation,f=Object(b.createSlice)({name:"filter",initialState:"",reducers:{setFilter:function(e,t){return t.payload}}}),x={setFilter:f.actions.setFilter},_=f.reducer,v=n(23),C=Object(b.configureStore)({reducer:(a={},Object(u.a)(a,p.reducerPath,p.reducer),Object(u.a)(a,"filter",_),a),middleware:function(e){return[].concat(Object(l.a)(e()),[p.middleware])},devTools:!1});Object(v.setupListeners)(C.dispatch);n(36),n(37);var g=n(10),F=n(19),w=n.n(F),y=n(2);function N(e){var t=e.title,n=e.children;return Object(y.jsxs)("section",{className:w.a.section,children:[Object(y.jsx)("h2",{className:w.a.title,children:t}),n]})}var S=n(14),k=n.n(S);function A(e){var t=e.value,n=e.onChange;return Object(y.jsxs)("div",{className:k.a.wrapper,children:[Object(y.jsx)("label",{className:k.a.label,htmlFor:"filter",children:"Find contacts by name"}),Object(y.jsx)("input",{className:k.a.input,id:"filter",value:t,onChange:n})]})}var P=n(15),T=n.n(P);function q(e){var t=e.contacts,n=e.onDeleteClick;return Object(y.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(y.jsxs)("li",{className:T.a.item,name:a,children:[Object(y.jsxs)("p",{className:T.a.paragraph,children:[Object(y.jsx)("span",{children:a}),Object(y.jsx)("span",{children:c})]}),Object(y.jsx)("button",{className:T.a.button,onClick:function(){return n(t)},type:"button",children:"Delete"})]},t)}))})}var D=n(8),L=n.n(D);function z(e){var t=e.onSubmitContact,n=Object(c.useState)(""),a=Object(g.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),o=Object(g.a)(i,2),l=o[0],u=o[1];function b(e){var t=e.target,n=t.name,a=t.value;"name"===n&&s(a),"number"===n&&u(a)}return Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),s(""),u("")},children:[Object(y.jsxs)("div",{className:L.a.wrapper,children:[Object(y.jsx)("label",{className:L.a.label,htmlFor:"name",children:"Name:"}),Object(y.jsx)("input",{className:L.a.input,value:r,onChange:b,type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de d'Artagnan",autoComplete:"off",required:!0})]}),Object(y.jsxs)("div",{className:L.a.wrapper,children:[Object(y.jsx)("label",{className:L.a.label,htmlFor:"number",children:"Phone:"}),Object(y.jsx)("input",{className:L.a.input,value:l,onChange:b,type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(y.jsx)("button",{className:L.a.button,type:"submit",children:"Add contact"})]})}function M(){var e=m().data,t=h(),n=Object(g.a)(t,1)[0],a=O(),c=Object(g.a)(a,1)[0],r=Object(o.e)((function(e){return e.filter})),s=Object(o.d)(),i=r.toLowerCase(),l=null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(i)}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(N,{title:"Phonebook",children:Object(y.jsx)(z,{onSubmitContact:n})}),Object(y.jsxs)(N,{title:"Contacts",children:[Object(y.jsx)(A,{value:r,onChange:function(e){return s(x.setFilter(e.target.value))}}),e&&Object(y.jsx)(q,{contacts:l,onDeleteClick:c})]})]})}i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(o.a,{store:C,children:Object(y.jsx)(M,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={wrapper:"Form_wrapper__nPwsx",label:"Form_label__1LjAM",input:"Form_input__1nvba",button:"Form_button__1f-2p"}}},[[39,1,2]]]);
//# sourceMappingURL=main.d5b45bd8.chunk.js.map