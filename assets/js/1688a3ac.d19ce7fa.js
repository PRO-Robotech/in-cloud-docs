"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95362],{58531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=r(74848),s=r(28453),u=r(87464),l=r(62774),o=r(60513),c=r(1775);const i={},d=void 0,b={},f=[];function h(e){return(0,a.jsxs)(l.A,{children:[(0,a.jsx)(u.A,{value:"master-2",children:(0,a.jsx)(c.A,{language:"bash",children:o.A`
        export HOST_NAME=master-2
      `})}),(0,a.jsx)(u.A,{value:"master-3",children:(0,a.jsx)(c.A,{language:"bash",children:o.A`
        export HOST_NAME=master-3
      `})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}},62774:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),s=r(65627),u=r(56347),l=r(50372),o=r(30604),c=r(11861),i=r(78749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=b(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=c??p;return f({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:u,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),i=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==n&&(c(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:i,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function A(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(t))}},87464:(e,t,r)=>{r.d(t,{A:()=>u});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,u),hidden:r,children:t})}}}]);