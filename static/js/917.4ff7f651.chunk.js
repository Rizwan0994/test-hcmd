"use strict";(self.webpackChunkhcmd_communication=self.webpackChunkhcmd_communication||[]).push([[917],{37800:(e,i,l)=>{l.d(i,{F:()=>h});const o=class{constructor(){this.defaultValue={text:"button",name:"button",type:"primary"}}onChange(e){}};const n=class{constructor(){this.defaultValue={id:"",name:"label",label:"Label Class",value:"text label"}}onChange(e){}};const t=class{constructor(){this.defaultValue={label:"Number input field"}}onChange(e){}};const d=class{constructor(){this.defaultValue={label:"password field"}}onChange(e){}};const a=class{constructor(){this.defaultValue={label:"Radio Label",name:"radio",value:"",defaultValue:"",options:[{label:"option 1",value:"option1"}]}}onChange(e){}};const s=class{constructor(){this.defaultValue={label:"Select",name:"selectField",value:[],description:"",options:[{label:"option 1",value:"option1"}]}}onChange(e){}};const u=class{constructor(){this.defaultValue={label:"Textarea",name:"textareaField",placeholder:"Type something here",rows:3,description:"",prefix:"",suffix:"",autoComplete:"",autoFocus:[],isEditable:[],defaultValue:"",value:""}}onChange(e){}};const c=class{constructor(){this.defaultValue={label:"Text Input",name:"textField",placeholder:"Type here",description:"",tooltip:"",prefix:"",suffix:"",autoComplete:"",autoFocus:[],isEditable:[],defaultValue:"",value:""}}onChange(e){}};const r=class{constructor(){this.defaultValue={label:"Signature",name:"signatureField",description:"",value:""}}onChange(e){}};const _=class{constructor(){this.defaultValue={label:"Date Label",value:"",name:"datefield",placeholder:"Enter date",isClearable:!1,timeRequired:!1}}onChange(e){}};const v=class{constructor(){this.defaultValue={label:"Checkbox",name:"checkbox",value:"",defaultValue:"",options:[{label:"option 1",value:"option1"}]}}onChange(e){}};const m=class{constructor(){this.defaultValue={name:"Image",placeholder:"Type here",tooltip:"",method:"static",imageURL:"",defaultValue:"",value:"",style:{height:100,width:100}}}onChange(e){}},h=e=>{let{type:i,position:l,id:h,style:p={},nodeData:f={},output:x={}}=e,b={id:h||"dndnode_".concat(Date.now()),type:i,position:l,output:x,style:p,data:{label:"".concat(i," node")}};switch(i){case"LabelNode":const e=new n;b.data={...b.data,...e.defaultValue,...f,onChange:e.onChange};break;case"TextFieldNode":const i=new c;b.data={...b.data,...i.defaultValue,...f,onChange:i.onChange};break;case"TextAreaNode":const l=new u;b.data={...b.data,...l.defaultValue,...f,onChange:l.onChange};break;case"NumberNode":const h=new t;b.data={...b.data,...h.defaultValue,...f,onChange:h.onChange};break;case"ButtonNode":const p=new o;b.data={...b.data,...p.defaultValue,...f,onChange:p.onChange};break;case"PasswordNode":const x=new d;b.data={...b.data,...x.defaultValue,...f,onChange:x.onChange};break;case"CheckBoxNode":const E=new v;b.data={...b.data,...E.defaultValue,...f,onChange:E.onChange};break;case"RadioNode":const N=new a;b.data={...b.data,...N.defaultValue,...f,onChange:N.onChange};break;case"SelectNode":const g=new s;b.data={...b.data,...g.defaultValue,...f,onChange:g.onChange};break;case"DateTimeNode":const j=new _;b.data={...b.data,...j.defaultValue,...f,onChange:j.onChange};break;case"SignatureNode":const C=new r;b.data={...b.data,...C.defaultValue,...f,onChange:C.onChange};break;case"ImageNode":const A=new m;b.data={...b.data,...A.defaultValue,...f,onChange:A.onChange}}return b}},40366:(e,i,l)=>{l.d(i,{A:()=>s});var o=l(65043),n=l(23072),t=l(33438),d=l(67475),a=l(70579);function s(e){let{show:i,data:l,setInputField:s,nodeId:u}=e;const{setNodes:c}=(0,d.VH)(),r=(0,d.pk)(),_=(0,o.useCallback)((()=>{c(r.filter((e=>e.id!==u)))}),[u,r,c]);return(0,a.jsxs)("div",{className:"component-btn-group action-controller ".concat(i?"":"visibility-hidden"),children:[(0,a.jsx)("div",{className:"btn-secondary component-settings-button",role:"button",children:(0,a.jsx)(n.A,{style:{fontSize:"14px"}})}),(0,a.jsx)("div",{className:"btn-danger component-settings-button nodrag",role:"button",onClick:_,children:(0,a.jsx)(t.A,{style:{fontSize:"14px"}})})]})}},95691:(e,i,l)=>{l.d(i,{A:()=>c});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(14282),u=l(70579);const c=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:o}=(0,n.VH)(),{id:c,selected:r,setInputField:_,rendered:v=!1,output:m}=e,h=(0,n.pk)(),p=o(c),{data:f}=p,[x,b]=(0,d.A)((e=>{var i;return(0,u.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!v?"hovered":""),children:[!v&&(0,u.jsx)(a.A,{show:!0,nodeId:c,setNodes:l,setInputField:_}),!v&&(0,u.jsx)(t.PN,{color:"#ff0071",isVisible:r,minWidth:100,minHeight:57}),(0,u.jsx)("div",{className:"form-inline p-1",children:(0,u.jsx)(s.A,{className:"w-100",variant:(null===f||void 0===f||null===(i=f.type[0])||void 0===i?void 0:i.value)||"primary",children:f.text})})]})}));if(!m||null===(i=p.output)||void 0===i||!i.hasOwnProperty("visibility")||p.output.visibility){if(f.conditional&&v){var E,N,g,j,C;const e=!(null===h||void 0===h||!h.length)&&(null===f||void 0===f||null===(E=f.conditional)||void 0===E?void 0:E.when)&&(null===h||void 0===h||null===(N=h.find((e=>e.id===f.conditional.when)))||void 0===N||null===(g=N.data)||void 0===g?void 0:g.value);if("true"===f.conditional.show&&e!==(null===f||void 0===f||null===(j=f.conditional)||void 0===j?void 0:j.eq)||"false"===f.conditional.show&&e===(null===f||void 0===f||null===(C=f.conditional)||void 0===C?void 0:C.eq))return(0,u.jsx)("div",{})}return(0,u.jsx)("div",{className:"".concat(""),children:x})}}))},26596:(e,i,l)=>{l.d(i,{A:()=>c});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(73722),u=l(70579);const c=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:c}=(0,n.VH)(),r=(0,n.pk)(),{selected:_,setInputField:v,rendered:m=!1,id:h,output:p}=e,[f,x]=(0,o.useState)([]),b=c(h),{data:E}=b,N=(0,o.useCallback)((e=>{m&&l(r.map((i=>(i.id===h&&(i.data={...i.data,value:e}),i))))}),[h,l,r,m]);(0,o.useEffect)((()=>{m&&N(f)}),[f]);const[g,j]=(0,d.A)((i=>{var o;return(0,u.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(i&&!m?"hovered":""),children:[!m&&(0,u.jsx)(a.A,{show:!0,nodeId:h,setNodes:l,setInputField:v}),!m&&(0,u.jsx)(t.PN,{color:"#ff0071",isVisible:_,minWidth:100,minHeight:57}),(0,u.jsx)("div",{className:"form-inline p-1",children:(0,u.jsxs)("div",{className:"text-left",children:[(0,u.jsx)(s.A.Label,{children:null===E||void 0===E?void 0:E.label}),null!==E&&void 0!==E&&E.options&&E.options.length?null===E||void 0===E||null===(o=E.options)||void 0===o?void 0:o.map(((i,l)=>{var o;return(0,u.jsx)(s.A.Check,{type:"checkbox",inline:!0,id:"".concat(e.id,"-").concat(l),name:h,label:i.label,className:"d-flex justify-content-start gap-10",checked:f.includes(i.value),disabled:!(null===E||void 0===E||null===(o=E.isEditable)||void 0===o||!o.length)&&"false"===(null===E||void 0===E?void 0:E.isEditable[0]),onChange:e=>{e.target.checked?x((e=>[...e,i.value])):e.target.checked||x((e=>e.filter((e=>e!==i.value))))}},i.value)})):(0,u.jsx)(s.A.Text,{as:"p",className:"text-muted",children:"No options"})]})})]})}));if(!p||null===(i=b.output)||void 0===i||!i.hasOwnProperty("visibility")||b.output.visibility){if(E.conditional&&m){var C,A,w,P,O;const e=!(null===r||void 0===r||!r.length)&&(null===E||void 0===E||null===(C=E.conditional)||void 0===C?void 0:C.when)&&(null===r||void 0===r||null===(A=r.find((e=>e.id===E.conditional.when)))||void 0===A||null===(w=A.data)||void 0===w?void 0:w.value);if("true"===E.conditional.show&&e!==(null===E||void 0===E||null===(P=E.conditional)||void 0===P?void 0:P.eq)||"false"===E.conditional.show&&e===(null===E||void 0===E||null===(O=E.conditional)||void 0===O?void 0:O.eq))return(0,u.jsx)("div",{})}return(0,u.jsx)("div",{className:"".concat(""),children:g})}}))},76900:(e,i,l)=>{l.d(i,{A:()=>m});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(31899),u=l.n(s),c=l(73722),r=l(34348),_=l.n(r),v=l(70579);const m=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:s}=(0,n.VH)(),r=(0,n.pk)(),{id:m,selected:h,setInputField:p,rendered:f=!1,output:x}=e,b=s(m),{data:E}=b,[N,g]=(0,o.useState)(E.value||""),j=(0,o.useCallback)((e=>{f&&l(r.map((i=>(i.id===m&&(i.data={...i.data,value:e?_()(e).format():""}),i))))}),[m,l,r,f]);(0,o.useEffect)((()=>{f&&j(N)}),[N,f]);const[C,A]=(0,d.A)((e=>{var i,o;return(0,v.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!f?"hovered":""),children:[!f&&(0,v.jsx)(a.A,{show:!0,nodeId:m,setNodes:l,setInputField:p}),!f&&(0,v.jsx)(t.PN,{color:"#ff0071",isVisible:h,minWidth:100,minHeight:57}),(0,v.jsx)("div",{className:"form-inline",children:(0,v.jsxs)("div",{className:"input-group theme-border w-100 p-1",children:[(0,v.jsx)(c.A.Label,{children:E.label||""}),(0,v.jsx)(u(),{className:"form-control w-100",placeholderText:E.placeholder,selected:N,disabled:!1===E.isEditable,onChange:e=>{!1!==E.isEditable&&g(e)},isClearable:!(null===E||void 0===E||null===(i=E.isClearable)||void 0===i||!i.length)&&"true"===(null===E||void 0===E?void 0:E.isClearable[0]),showTimeSelect:!(null===E||void 0===E||null===(o=E.showTime)||void 0===o||!o.length)&&"true"===E.showTime[0],timeFormat:"HH:mm",autoComplete:"off",timeIntervals:15,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time"})]})})]})}));if(!x||null===(i=b.output)||void 0===i||!i.hasOwnProperty("visibility")||b.output.visibility){if(E.conditional&&f){var w,P,O,D,M;const e=!(null===r||void 0===r||!r.length)&&(null===E||void 0===E||null===(w=E.conditional)||void 0===w?void 0:w.when)&&(null===r||void 0===r||null===(P=r.find((e=>e.id===E.conditional.when)))||void 0===P||null===(O=P.data)||void 0===O?void 0:O.value);if("true"===E.conditional.show&&e!==(null===E||void 0===E||null===(D=E.conditional)||void 0===D?void 0:D.eq)||"false"===E.conditional.show&&e===(null===E||void 0===E||null===(M=E.conditional)||void 0===M?void 0:M.eq))return(0,v.jsx)("div",{})}return(0,v.jsx)("div",{className:"".concat(""),children:C})}}))},40220:(e,i,l)=>{l.d(i,{A:()=>c});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(68088),u=l(70579);const c=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:c}=(0,n.VH)(),r=(0,n.pk)(),{selected:_,setInputField:v,rendered:m=!1,id:h,output:p}=e,f=c(h),{data:x}=f,b=(0,o.useCallback)(((e,i)=>{let{height:o,width:n}=i;l(r.map((e=>(e.id===h&&(e.data={...e.data,style:{height:o,width:n}}),e))))}),[h,r,l]),[E,N]=(0,d.A)((e=>(0,u.jsxs)("div",{className:"cstm-field-edit-border cstm-form-input-field m-1 ".concat(e&&!m?"hovered":""),style:x.style,children:[!m&&(0,u.jsx)(a.A,{show:!0,nodeId:h,setNodes:l,setInputField:v}),!m&&(0,u.jsx)(t.PN,{color:"#ff0071",isVisible:_,onResizeEnd:b,minWidth:100,minHeight:57}),(0,u.jsx)("div",{className:"overflow-hidden",style:x.style,children:(0,u.jsx)("img",{src:(0,s.bv)(x.imageURL),style:x.style,alt:""})})]})));if(!p||null===(i=f.output)||void 0===i||!i.hasOwnProperty("visibility")||f.output.visibility){if(x.conditional&&m){var g,j,C,A,w;const e=!(null===r||void 0===r||!r.length)&&(null===x||void 0===x||null===(g=x.conditional)||void 0===g?void 0:g.when)&&(null===r||void 0===r||null===(j=r.find((e=>e.id===x.conditional.when)))||void 0===j||null===(C=j.data)||void 0===C?void 0:C.value);if("true"===x.conditional.show&&e!==(null===x||void 0===x||null===(A=x.conditional)||void 0===A?void 0:A.eq)||"false"===x.conditional.show&&e===(null===x||void 0===x||null===(w=x.conditional)||void 0===w?void 0:w.eq))return(0,u.jsx)("div",{})}return(0,u.jsx)("div",{className:"".concat(""),children:E})}}))},28449:(e,i,l)=>{l.d(i,{A:()=>u});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(70579);const u=(0,o.memo)((e=>{var i,l;const{setNodes:o,getNode:u}=(0,n.VH)(),c=(0,n.pk)(),{selected:r,setInputField:_,rendered:v=!1,id:m,output:h}=e,p=u(m),{data:f}=p,[x,b]=(0,d.A)((i=>(0,s.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(i&&!v?"hovered":""),children:[!v&&(0,s.jsx)(a.A,{show:!0,setNodes:o,setInputField:_,nodeId:m}),!v&&(0,s.jsx)(t.PN,{color:"#ff0071",isVisible:r,minWidth:100,minHeight:57}),(0,s.jsx)("div",{className:"form-inline p-1",children:(0,s.jsx)("div",{className:"input-group theme-border w-100",children:(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:e.data.value||"Unknown label"}})})})]})));if((!h||null===(i=p.output)||void 0===i||!i.hasOwnProperty("visibility")||p.output.visibility)&&(h||null===f||void 0===f||null===(l=f.onlyOutput)||void 0===l||!l.length)){if(f.conditional&&v){var E,N,g,j,C;const e=!(null===c||void 0===c||!c.length)&&(null===f||void 0===f||null===(E=f.conditional)||void 0===E?void 0:E.when)&&(null===c||void 0===c||null===(N=c.find((e=>e.id===f.conditional.when)))||void 0===N||null===(g=N.data)||void 0===g?void 0:g.value);if("true"===f.conditional.show&&e!==(null===f||void 0===f||null===(j=f.conditional)||void 0===j?void 0:j.eq)||"false"===f.conditional.show&&e===(null===f||void 0===f||null===(C=f.conditional)||void 0===C?void 0:C.eq))return(0,s.jsx)("div",{})}return(0,s.jsx)("div",{className:"".concat(""),children:x})}}))},76580:(e,i,l)=>{l.d(i,{A:()=>u});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(70579);const u=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:o}=(0,n.VH)(),u=(0,n.pk)(),{id:c,selected:r,setInputField:_,rendered:v=!1,output:m}=e,h=o(c),{data:p}=h,[f,x]=(0,d.A)((e=>(0,s.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!v?"hovered":""),children:[!v&&(0,s.jsx)(a.A,{show:!0,nodeId:c,setNodes:l,setInputField:_}),!v&&(0,s.jsx)(t.PN,{color:"#ff0071",isVisible:r,minWidth:100,minHeight:57}),(0,s.jsx)("div",{className:"form-inline",children:(0,s.jsx)("div",{className:"input-group theme-border w-100",children:(0,s.jsx)("input",{type:"number",className:"form-control search",title:p.label,onChange:e=>p.onChange(e.target.value),placeholder:p.label})})})]})));if(!m||null===(i=h.output)||void 0===i||!i.hasOwnProperty("visibility")||h.output.visibility){if(p.conditional&&v){var b,E,N,g,j;const e=!(null===u||void 0===u||!u.length)&&(null===p||void 0===p||null===(b=p.conditional)||void 0===b?void 0:b.when)&&(null===u||void 0===u||null===(E=u.find((e=>e.id===p.conditional.when)))||void 0===E||null===(N=E.data)||void 0===N?void 0:N.value);if("true"===p.conditional.show&&e!==(null===p||void 0===p||null===(g=p.conditional)||void 0===g?void 0:g.eq)||"false"===p.conditional.show&&e===(null===p||void 0===p||null===(j=p.conditional)||void 0===j?void 0:j.eq))return(0,s.jsx)("div",{})}return(0,s.jsx)("div",{className:"".concat(""),children:f})}}))},1836:(e,i,l)=>{l.d(i,{A:()=>u});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(70579);const u=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:o}=(0,n.VH)(),u=(0,n.pk)(),{id:c,selected:r,setInputField:_,rendered:v=!1,output:m}=e,h=o(c),{data:p}=h,[f,x]=(0,d.A)((e=>(0,s.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!v?"hovered":""),children:[!v&&(0,s.jsx)(a.A,{show:!0,nodeId:c,setNodes:l,setInputField:_}),!v&&(0,s.jsx)(t.PN,{color:"#ff0071",isVisible:r,minWidth:100,minHeight:57}),(0,s.jsx)("div",{className:"form-inline p-1",children:(0,s.jsx)("div",{className:"input-group theme-border w-100",children:(0,s.jsx)("input",{type:"password",className:"form-control search",title:p.label,onChange:e=>p.onChange(e.target.value),placeholder:p.label})})})]})));if(!m||null===(i=h.output)||void 0===i||!i.hasOwnProperty("visibility")||h.output.visibility){if(p.conditional&&v){var b,E,N,g,j;const e=!(null===u||void 0===u||!u.length)&&(null===p||void 0===p||null===(b=p.conditional)||void 0===b?void 0:b.when)&&(null===u||void 0===u||null===(E=u.find((e=>e.id===p.conditional.when)))||void 0===E||null===(N=E.data)||void 0===N?void 0:N.value);if("true"===p.conditional.show&&e!==(null===p||void 0===p||null===(g=p.conditional)||void 0===g?void 0:g.eq)||"false"===p.conditional.show&&e===(null===p||void 0===p||null===(j=p.conditional)||void 0===j?void 0:j.eq))return(0,s.jsx)("div",{})}return(0,s.jsx)("div",{className:"".concat(""),children:f})}}))},79182:(e,i,l)=>{l.d(i,{A:()=>c});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(73722),u=l(70579);const c=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:c}=(0,n.VH)(),r=(0,n.pk)(),{selected:_,setInputField:v,rendered:m=!1,id:h,output:p}=e,f=c(h),{data:x}=f,[b,E]=(0,o.useState)(x.value||""),N=(0,o.useCallback)((e=>{let[i]=e;m&&l(r.map((e=>(e.id===h&&(e.data={...e.data,value:i}),e))))}),[h,l,r,m]);(0,o.useEffect)((()=>{m&&N(b)}),[b,m]);const[g,j]=(0,d.A)((i=>{var o;return(0,u.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(i&&!m?"hovered":""),children:[!m&&(0,u.jsx)(a.A,{show:!0,nodeId:h,setNodes:l,setInputField:v}),!m&&(0,u.jsx)(t.PN,{color:"#ff0071",isVisible:_,minWidth:100,minHeight:57}),(0,u.jsx)("div",{className:"form-inline p-1",children:(0,u.jsxs)("div",{className:"text-left",children:[x.label&&(0,u.jsx)(s.A.Label,{children:x.label}),null===x||void 0===x||null===(o=x.options)||void 0===o?void 0:o.map(((i,l)=>{var o;return(0,u.jsx)(s.A.Check,{type:"radio",inline:!0,id:"".concat(e.id,"-").concat(l),name:h,label:i.label,className:"d-flex justify-content-start gap-10",checked:b.includes(i.value),disabled:!(null===x||void 0===x||null===(o=x.isEditable)||void 0===o||!o.length)&&"false"===(null===x||void 0===x?void 0:x.isEditable[0]),onChange:e=>{e.target.checked&&E((e=>[i.value]))}},i.value)})),(null===x||void 0===x?void 0:x.description)&&(0,u.jsx)(s.A.Text,{children:x.description})]})})]})}));if(!p||null===(i=f.output)||void 0===i||!i.hasOwnProperty("visibility")||f.output.visibility){if(x.conditional&&m){var C,A,w,P,O;const e=!(null===r||void 0===r||!r.length)&&(null===x||void 0===x||null===(C=x.conditional)||void 0===C?void 0:C.when)&&(null===r||void 0===r||null===(A=r.find((e=>e.id===x.conditional.when)))||void 0===A||null===(w=A.data)||void 0===w?void 0:w.value);if("true"===x.conditional.show&&e!==(null===x||void 0===x||null===(P=x.conditional)||void 0===P?void 0:P.eq)||"false"===x.conditional.show&&e===(null===x||void 0===x||null===(O=x.conditional)||void 0===O?void 0:O.eq))return(0,u.jsx)("div",{})}return(0,u.jsx)("div",{className:"".concat(""),children:g})}}))},3587:(e,i,l)=>{l.d(i,{A:()=>r});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(2364),u=l(73722),c=l(70579);const r=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:r}=(0,n.VH)(),_=(0,n.pk)(),{selected:v,setInputField:m,id:h,rendered:p=!1,output:f}=e,x=r(h),{data:b}=x,[E,N]=(0,o.useState)(b.value||[]),g=(0,o.useCallback)((e=>{p&&l(_.map((i=>(i.id===h&&(i.data={...i.data,value:e}),i))))}),[h,l,_,p]);(0,o.useEffect)((()=>{p&&g(E)}),[E,p]);const[j,C]=(0,d.A)((e=>(0,c.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!p?"hovered":""),children:[!p&&(0,c.jsx)(a.A,{show:!0,nodeId:h,setNodes:l,setInputField:m}),!p&&(0,c.jsx)(t.PN,{color:"#ff0071",isVisible:v,minWidth:185,minHeight:57}),(0,c.jsx)("div",{className:"form-inline",children:(0,c.jsxs)("div",{className:"input-group theme-border w-100 p-1",children:[(0,c.jsx)(u.A.Label,{children:null===b||void 0===b?void 0:b.label}),(0,c.jsx)(s.Ay,{value:[E],classNamePrefix:"select",placeholder:"Select Options",className:"min-width-160 w-100",name:b.name,options:(null===b||void 0===b?void 0:b.options)||[],onChange:e=>N(e),isClearable:!0}),(null===b||void 0===b?void 0:b.description)&&(0,c.jsx)(u.A.Text,{children:null===b||void 0===b?void 0:b.description})]})})]})));if(!f||null===(i=x.output)||void 0===i||!i.hasOwnProperty("visibility")||x.output.visibility){if(b.conditional&&p){var A,w,P,O,D;const e=!(null===_||void 0===_||!_.length)&&(null===b||void 0===b||null===(A=b.conditional)||void 0===A?void 0:A.when)&&(null===_||void 0===_||null===(w=_.find((e=>e.id===b.conditional.when)))||void 0===w||null===(P=w.data)||void 0===P?void 0:P.value);if("true"===b.conditional.show&&e!==(null===b||void 0===b||null===(O=b.conditional)||void 0===O?void 0:O.eq)||"false"===b.conditional.show&&e===(null===b||void 0===b||null===(D=b.conditional)||void 0===D?void 0:D.eq))return(0,c.jsx)("div",{})}return(0,c.jsx)("div",{className:"".concat(""),children:j})}}))},92193:(e,i,l)=>{l.d(i,{A:()=>m});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(25496),u=l.n(s),c=l(73722),r=l(31507),_=l(8911),v=l(70579);const m=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:s}=(0,n.VH)(),m=(0,n.pk)(),{selected:h,setInputField:p,id:f,rendered:x=!1,output:b}=e,E=(0,o.useRef)(),N=s(f),{data:g}=N,[j,C]=(0,o.useState)(g.value||null),A=(0,o.useCallback)((()=>{C(E.current.toDataURL())}),[]),w=(0,o.useCallback)((e=>{x&&l(m.map((i=>(i.id===f&&(i.data={...i.data,value:e}),i))))}),[f,l,m,x]),P=(0,o.useCallback)((()=>{E.current.clear(),C(null)}),[]);(0,o.useEffect)((()=>{x&&w(j)}),[j,x]);const[O,D]=(0,d.A)((e=>(0,v.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!x?"hovered":""),children:[!x&&(0,v.jsx)(a.A,{show:!0,nodeId:f,setNodes:l,setInputField:p}),!x&&(0,v.jsx)(t.PN,{color:"#ff0071",isVisible:h,minWidth:100,minHeight:57}),(0,v.jsxs)("div",{className:"form-inline p-2",children:[(0,v.jsx)(c.A.Label,{children:g.label||""}),(0,v.jsxs)("div",{className:"input-group theme-border w-100 signature-wrapper position-relative",children:[x?(0,v.jsx)("div",{className:"signature",children:(0,v.jsx)(u(),{penColor:"green",ref:E,canvasProps:{className:"bg-light-color"},onEnd:A})}):(0,v.jsx)("div",{className:"bg-light-color",style:{height:"140px",width:"100%",minWidth:"300px"}}),(0,v.jsx)("div",{className:"position-absolute",style:{right:0,bottom:"100%"},children:(0,v.jsx)(r.Ah,{Icon:_.A,size:"medium",onClick:P})})]}),(0,v.jsx)(c.A.Text,{children:g.description||""})]})]})));if(!b||null===(i=N.output)||void 0===i||!i.hasOwnProperty("visibility")||N.output.visibility){if(g.conditional&&x){var M,I,B,y,T;const e=!(null===m||void 0===m||!m.length)&&(null===g||void 0===g||null===(M=g.conditional)||void 0===M?void 0:M.when)&&(null===m||void 0===m||null===(I=m.find((e=>e.id===g.conditional.when)))||void 0===I||null===(B=I.data)||void 0===B?void 0:B.value);if("true"===g.conditional.show&&e!==(null===g||void 0===g||null===(y=g.conditional)||void 0===y?void 0:y.eq)||"false"===g.conditional.show&&e===(null===g||void 0===g||null===(T=g.conditional)||void 0===T?void 0:T.eq))return(0,v.jsx)("div",{})}return(0,v.jsx)("div",{className:"".concat(""),children:O})}}))},50825:(e,i,l)=>{l.d(i,{A:()=>f});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(73722),u=l(47994),c=l(88186),r=l(11917),_=l(53874),v=l(31507),m=l(75454),h=l(2911),p=l(70579);const f=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:f}=(0,n.VH)(),x=(0,n.pk)(),{selected:b,setInputField:E,customClasses:N={},rendered:g=!1,id:j,output:C}=e,A=f(j),{data:w}=A,[P,O]=(0,o.useState)(w.value||""),D=(0,c.A)(P,500),M=(0,o.useCallback)((e=>{g&&l(x.map((i=>(i.id===j&&(i.data={...i.data,value:e}),i))))}),[j,l,x,g]);(0,o.useEffect)((()=>{g&&M(D)}),[D,g]);const I=(0,o.useCallback)((()=>{const e=w.calculated;try{let{value:i,isNull:l}=(0,r.calculateByExpression)({expression:e,nodes:x});i&&!l&&((0,_.J5)(i)&&(i="".concat(Number(i).toFixed(2))),O(i))}catch(i){(0,h.Q)("There is an error occured while calculating the value. Check the given expression: ".concat(e)),console.error(i)}}),[x,w]),[B,y]=(0,d.A)((e=>{var i,o;return(0,p.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(e&&!g?"hovered":""),children:[!g&&(0,p.jsx)(a.A,{show:!0,nodeId:j,setNodes:l,setInputField:E}),!g&&(0,p.jsx)(t.PN,{color:"#ff0071",isVisible:b,minWidth:100,minHeight:57}),(0,p.jsx)("div",{className:"form-inline",children:(0,p.jsxs)("div",{className:"text-left w-100 p-1",children:[""!==(null===w||void 0===w?void 0:w.label)&&(0,p.jsxs)(s.A.Label,{className:"".concat(N.label," d-flex justify-content-start mb-1"),children:[null===w||void 0===w?void 0:w.label,(null===w||void 0===w?void 0:w.isRequired)&&(0,p.jsx)("span",{className:"small text-danger",children:"*"})]}),(0,p.jsxs)(u.A,{className:"mb-0 d-flex",children:[(null===w||void 0===w?void 0:w.prefix)&&(0,p.jsx)(u.A.Text,{id:"".concat(w.id,"-prefix"),children:w.prefix}),(0,p.jsx)(s.A.Control,{value:P||"",as:"textarea",placeholder:w.placeholder?w.placeholder:w.label,className:"form-control",disabled:!(null===w||void 0===w||null===(i=w.isEditable)||void 0===i||!i.length)&&"false"===(null===w||void 0===w?void 0:w.isEditable[0]),autoComplete:null!==w&&void 0!==w&&w.autoComplete?null===w||void 0===w?void 0:w.autoComplete:void 0,autoFocus:!(null===w||void 0===w||null===(o=w.autoFocus)||void 0===o||!o.length)&&Boolean(null===w||void 0===w?void 0:w.autoFocus[0]),defaultValue:null!==w&&void 0!==w&&w.defaultValue?null===w||void 0===w?void 0:w.defaultValue:void 0,onChange:e=>{!1!==(null===w||void 0===w?void 0:w.isEditable)&&O(e.target.value)}}),(null===w||void 0===w?void 0:w.suffix)&&(0,p.jsx)(u.A.Text,{id:"".concat(j,"-suffix"),children:w.suffix}),w.calculated&&g&&(0,p.jsx)(v.Ah,{Icon:m.A,onClick:I,tooltip:"Calculate value"})]}),(null===w||void 0===w?void 0:w.description)&&(0,p.jsx)(s.A.Text,{id:"".concat(j,"-description"),children:null===w||void 0===w?void 0:w.description}),(null===w||void 0===w?void 0:w.error)&&(0,p.jsx)(s.A.Text,{id:"".concat(j,"-error"),children:null===w||void 0===w?void 0:w.error})]})})]})}));if(!C||null===(i=A.output)||void 0===i||!i.hasOwnProperty("visibility")||A.output.visibility){if(w.conditional&&g){var T,k,L,R,W;const e=!(null===x||void 0===x||!x.length)&&(null===w||void 0===w||null===(T=w.conditional)||void 0===T?void 0:T.when)&&(null===x||void 0===x||null===(k=x.find((e=>e.id===w.conditional.when)))||void 0===k||null===(L=k.data)||void 0===L?void 0:L.value);if("true"===w.conditional.show&&e!==(null===w||void 0===w||null===(R=w.conditional)||void 0===R?void 0:R.eq)||"false"===w.conditional.show&&e===(null===w||void 0===w||null===(W=w.conditional)||void 0===W?void 0:W.eq))return(0,p.jsx)("div",{})}return(0,p.jsx)("div",{className:"".concat(""),children:B})}}))},97704:(e,i,l)=>{l.d(i,{A:()=>f});var o=l(65043),n=l(67475),t=l(4812),d=l(62658),a=l(40366),s=l(73722),u=l(47994),c=l(88186),r=l(31507),_=l(75454),v=l(53874),m=l(11917),h=l(2911),p=l(70579);const f=(0,o.memo)((e=>{var i;const{setNodes:l,getNode:f}=(0,n.VH)(),x=(0,n.pk)(),{selected:b,setInputField:E,customClasses:N={},rendered:g=!1,id:j,output:C}=e,A=f(j),{data:w}=A,[P,O]=(0,o.useState)(w.value||""),D=(0,c.A)(P,500),M=(0,o.useCallback)((e=>{g&&l(x.map((i=>(i.id===j&&(i.data={...i.data,value:e}),i))))}),[j,l,x,g]);(0,o.useEffect)((()=>{g&&M(D)}),[D,g]);const I=(0,o.useCallback)((()=>{const e=w.calculated;try{let{value:i,isNull:l}=(0,m.calculateByExpression)({expression:e,nodes:x});i&&!l&&((0,v.J5)(i)&&(i="".concat(Number(i).toFixed(2))),O(i))}catch(i){(0,h.Q)("There is an error occured while calculating the value. Check the given expression: ".concat(e)),console.error(i)}}),[x,w]),[B,y]=(0,d.A)((i=>{var o,n;return(0,p.jsxs)("div",{className:"m-1 cstm-field-edit-border cstm-form-input-field ".concat(i&&!g?"hovered":""),children:[!g&&(0,p.jsx)(a.A,{show:!0,nodeId:j,setNodes:l,setInputField:E}),!g&&(0,p.jsx)(t.PN,{color:"#ff0071",isVisible:b,minWidth:100,minHeight:57}),(0,p.jsx)("div",{className:"form-inline p-1",children:(0,p.jsxs)("div",{className:"text-left w-100",children:[""!==(null===w||void 0===w?void 0:w.label)&&!C&&(0,p.jsxs)(s.A.Label,{className:"".concat(N.label," d-flex justify-content-start mb-1"),children:[null===w||void 0===w?void 0:w.label,(null===w||void 0===w?void 0:w.isRequired)&&(0,p.jsx)("span",{className:"small text-danger",children:"*"})]}),(0,p.jsxs)(u.A,{className:"mb-0 d-flex",children:[(null===w||void 0===w?void 0:w.prefix)&&(0,p.jsx)(u.A.Text,{id:"".concat(w.id,"-prefix"),children:w.prefix}),(0,p.jsx)(s.A.Control,{value:P||"",type:"text",placeholder:w.placeholder?w.placeholder:w.label,className:"form-control",disabled:!(null===w||void 0===w||null===(o=w.isEditable)||void 0===o||!o.length)&&"false"===(null===w||void 0===w?void 0:w.isEditable[0]),autoComplete:null!==w&&void 0!==w&&w.autoComplete?null===w||void 0===w?void 0:w.autoComplete:void 0,autoFocus:!(null===w||void 0===w||null===(n=w.autoFocus)||void 0===n||!n.length)&&Boolean(null===w||void 0===w?void 0:w.autoFocus[0]),defaultValue:null!==w&&void 0!==w&&w.defaultValue?null===w||void 0===w?void 0:w.defaultValue:void 0,onChange:e=>{!1!==(null===w||void 0===w?void 0:w.isEditable)&&("number"===(null===w||void 0===w?void 0:w.inputType)?null===w||void 0===w||w.onChange(Number(e.target.value)):O(e.target.value))}}),(null===w||void 0===w?void 0:w.suffix)&&(0,p.jsx)(u.A.Text,{id:"".concat(w.id,"-suffix"),children:w.suffix}),w.calculated&&g&&(0,p.jsx)(r.Ah,{Icon:_.A,onClick:I,tooltip:"Calculate value"})]}),(null===w||void 0===w?void 0:w.description)&&(0,p.jsx)(s.A.Text,{id:"".concat(null===e||void 0===e?void 0:e.id,"-description"),children:null===w||void 0===w?void 0:w.description}),(null===w||void 0===w?void 0:w.error)&&(0,p.jsx)(s.A.Text,{id:"".concat(null===e||void 0===e?void 0:e.id,"-error"),children:null===w||void 0===w?void 0:w.error})]})})]})}));if(!C||null===(i=A.output)||void 0===i||!i.hasOwnProperty("visibility")||A.output.visibility){if(w.conditional&&g){var T,k,L,R,W;const e=!(null===x||void 0===x||!x.length)&&(null===w||void 0===w||null===(T=w.conditional)||void 0===T?void 0:T.when)&&(null===x||void 0===x||null===(k=x.find((e=>e.id===w.conditional.when)))||void 0===k||null===(L=k.data)||void 0===L?void 0:L.value);if("true"===w.conditional.show&&e!==(null===w||void 0===w||null===(R=w.conditional)||void 0===R?void 0:R.eq)||"false"===w.conditional.show&&e===(null===w||void 0===w||null===(W=w.conditional)||void 0===W?void 0:W.eq))return(0,p.jsx)("div",{})}return(0,p.jsx)("div",{className:"".concat(""),children:B})}}))},11917:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{calculateByExpression:()=>calculateByExpression,default:()=>FormRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65043),reactflow__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(67475),services_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53874),services_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(88186),_Builder_custom_components_inputs_ButtonNode__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(95691),_Builder_custom_components_inputs_CheckBoxNode__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(26596),_Builder_custom_components_inputs_DateTimeNode__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76900),_Builder_custom_components_inputs_ImageNode__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(40220),_Builder_custom_components_inputs_LabelNode__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(28449),_Builder_custom_components_inputs_NumberNode__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(76580),_Builder_custom_components_inputs_PasswordNode__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1836),_Builder_custom_components_inputs_RadioNode__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(79182),_Builder_custom_components_inputs_SelectNode__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(3587),_Builder_custom_components_inputs_SignatureNode__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(92193),_Builder_custom_components_inputs_TextAreaNode__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(50825),_Builder_custom_components_inputs_TextField__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(97704),_Builder_Services_NodeBuilder__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(37800),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(70579);function FormRenderer(e){let{onChange:i=(()=>{}),form:l,height:o}=e;const n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),t=JSON.parse(localStorage.getItem("formNodes"))||[],[d,a,s]=(0,reactflow__WEBPACK_IMPORTED_MODULE_16__.ck)(l.components||t),u=(0,services_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_2__.A)(d,500);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{null!==u&&void 0!==u&&u.length&&localStorage.setItem("formNodes",JSON.stringify([])),i({components:u})}),[u,i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const e=l.components&&l.components.map((e=>(0,_Builder_Services_NodeBuilder__WEBPACK_IMPORTED_MODULE_17__.F)({id:e.id,type:e.type,position:e.position,nodeData:e.data})));a(e||t)}),[a]);const c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({LabelNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_LabelNode__WEBPACK_IMPORTED_MODULE_7__.A,{...e,rendered:!0}),TextFieldNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_TextField__WEBPACK_IMPORTED_MODULE_14__.A,{...e,rendered:!0}),TextAreaNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_TextAreaNode__WEBPACK_IMPORTED_MODULE_13__.A,{...e,rendered:!0}),NumberNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_NumberNode__WEBPACK_IMPORTED_MODULE_8__.A,{...e,rendered:!0}),ButtonNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_ButtonNode__WEBPACK_IMPORTED_MODULE_3__.A,{...e,rendered:!0}),PasswordNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_PasswordNode__WEBPACK_IMPORTED_MODULE_9__.A,{...e,rendered:!0}),SelectNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_SelectNode__WEBPACK_IMPORTED_MODULE_11__.A,{...e,rendered:!0}),RadioNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_RadioNode__WEBPACK_IMPORTED_MODULE_10__.A,{...e,rendered:!0}),CheckBoxNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_CheckBoxNode__WEBPACK_IMPORTED_MODULE_4__.A,{...e,rendered:!0}),DateTimeNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_DateTimeNode__WEBPACK_IMPORTED_MODULE_5__.A,{...e,rendered:!0}),ImageNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_ImageNode__WEBPACK_IMPORTED_MODULE_6__.A,{...e,rendered:!0}),SignatureNode:e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Builder_custom_components_inputs_SignatureNode__WEBPACK_IMPORTED_MODULE_12__.A,{...e,rendered:!0})})),[]),{pageHeight:r=0}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{let e={pageHeight:2e3};if(null!==u&&void 0!==u&&u.length){const i=Math.min(...u.map((e=>{var i;return null===(i=e.position)||void 0===i?void 0:i.y})))||2e3,l=Math.max(...u.map((e=>{var i;return null===(i=e.position)||void 0===i?void 0:i.y})))||2e3;e={pageHeight:Number((l-i).toFixed(0))+1e3}}return e}),[u]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"hcmd-form-builder form-renderer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"form-canvas w-100",style:{height:null!==o&&void 0!==o?o:"85vh",maxWidth:1200},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactflow__WEBPACK_IMPORTED_MODULE_16__.Ln,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div",{className:"reactflow-wrapper h-100 bg-light",ref:n,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(reactflow__WEBPACK_IMPORTED_MODULE_16__.Gc,{nodes:d,onNodesChange:s,style:{background:"#fff"},nodeTypes:c,defaultViewport:{x:0,y:0,zoom:1},nodesDraggable:!1,nodesFocusable:!0,draggable:!1,zoomOnScroll:!1,zoomOnPinch:!1,zoomOnDoubleClick:!1,panOnDrag:!1,panOnScroll:!0,proOptions:{hideAttribution:!0},translateExtent:[[0,0],[1200,r]]})})})})})}const calculateByExpression=_ref2=>{let{expression:expression,nodes:nodes}=_ref2;const variableNames=[...new Set(expression.match(/[a-zA-Z_]+/g))];let modifiedExp=expression,isAnyNull=!1;if(null===variableNames||void 0===variableNames||!variableNames.length)return;let fieldNameValues=variableNames.map((e=>{var i;if(!e)return{name:e,value:""};const l=null===(i=nodes.find((i=>i.data.name===e)))||void 0===i?void 0:i.data;return l&&l.value?{name:e,value:l.value}:{name:e,value:""}}));for(const e of variableNames){let i=fieldNameValues.find((i=>i.name===e)).value||"";i=i.trim(),modifiedExp=modifiedExp.replaceAll(e,(0,services_helper__WEBPACK_IMPORTED_MODULE_1__.J5)(i)?"".concat(Number(i)||0):"'".concat(String(i)||"","'")),i||(isAnyNull=!0)}if(!isAnyNull){let value="".concat(eval(modifiedExp))||"";return(0,services_helper__WEBPACK_IMPORTED_MODULE_1__.J5)(value)&&(value="".concat(Number(value).toFixed(0))),{value:value,isNull:isAnyNull}}return{isNull:isAnyNull}}}}]);
//# sourceMappingURL=917.4ff7f651.chunk.js.map