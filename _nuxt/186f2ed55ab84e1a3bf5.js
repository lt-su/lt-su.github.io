(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{286:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{valid:!1,amount:1e3,moneyRules:[function(e){return!!e||"Amount is required"},function(e){return!isNaN(e)||"Amount must be a number"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{submitForm:function(e){e.preventDefault(),this.$refs.form.validate()&&document.getElementById("proposeForm").submit()}}},r=n(45),l=n(115),m=n.n(l),c=n(108),d=n(282),f=n(101),v=n(106),x=n(283),F=n(107),V=n(284),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{id:"proposeForm",method:"post",action:"https://getform.io/f/71ca0e27-f783-49c2-8a0c-60e13b7a4604"},on:{submit:function(t){return e.submitForm(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{name:"amount",rules:e.moneyRules,counter:10,label:"Amount",required:""},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),e._v(" "),n("v-card-text",[e._v("USD")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{attrs:{name:"email",rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:function(t){return e.submitForm(t)}}},[e._v("\n          Send\n        ")])],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:c.a,VCardText:d.b,VContainer:f.a,VFlex:v.a,VForm:x.a,VLayout:F.a,VTextField:V.a})}}]);