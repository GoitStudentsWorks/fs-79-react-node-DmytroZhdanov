import{j as e,E as r,P as a}from"./index-ae7c9a9a.js";import{R as h,l as n,E as t,r as x,b as o,a as c,c as v,d as j}from"./inputData-09ad2792.js";import{m as d}from"./motion-97e192dc.js";function m({formik:s}){return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Blood:"}),e.jsx(d.div,{variants:n,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:e.jsx(t,{children:e.jsx(r,{name:"blood",component:"div",className:"error",style:{color:"red",fontSize:"10px"}})})},s.errors.blood),x.map((i,l)=>e.jsx(d.div,{custom:l,variants:n,initial:"hidden",animate:"visible",exit:"hidden",children:e.jsxs(o,{children:[e.jsx(c,{...i,onChange:s.handleChange,checked:s.values.blood===i.value}),e.jsx("span",{}),i.value]})},i.id))]}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Sex:"}),e.jsx(d.div,{variants:n,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:e.jsx(t,{children:e.jsx(r,{name:"sex",component:"div",className:"error",style:{color:"red",fontSize:"10px"}})})},s.errors.sex),v.map((i,l)=>e.jsx(d.div,{custom:l,variants:n,initial:"hidden",animate:"visible",exit:"hidden",children:e.jsxs(o,{htmlFor:i.htmlFor,children:[e.jsx(c,{...i,onChange:s.handleChange,checked:s.values.sex===i.value}),e.jsx("span",{}),i.label]})},i.id))]})]}),e.jsx(h,{children:e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Level Activity:"}),e.jsx(d.div,{variants:n,initial:"hidden",animate:"visible",exit:"hidden",transition:{duration:.3},children:e.jsx(t,{children:e.jsx(r,{name:"levelActivity",component:"div",className:"error",style:{color:"red",fontSize:"10px"}})})},s.errors.levelActivity),j.map((i,l)=>e.jsx(d.div,{custom:l,variants:n,initial:"hidden",animate:"visible",exit:"hidden",children:e.jsxs(o,{htmlFor:i.htmlFor,children:[e.jsx(c,{...i,onChange:()=>s.setFieldValue("levelActivity",i.value.toString()),checked:s.values.levelActivity===i.value.toString()}),e.jsx("span",{}),i.valueText]},i.id)},i.id))]})})]})}m.propTypes={formik:a.shape({values:a.shape({blood:a.string.isRequired,sex:a.string.isRequired,levelActivity:a.string.isRequired}).isRequired,handleChange:a.func,setFieldValue:a.func})};export{m as SecondStep};
