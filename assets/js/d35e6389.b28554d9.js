"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34674],{29861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/component-ready","title":"5.2.1.4.8. Kube-Controller-Manager","description":"5.2.1.4.8.1. \u042d\u0442\u0430\u043f\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/componentReady.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/component-ready","permalink":"/tech-docs/kubernetes/components/controllerManager/component-ready","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"component-ready"}}');var o=t(74848),s=t(28453);const l={id:"component-ready"},c="5.2.1.4.8. Kube-Controller-Manager",d={},a=[{value:"5.2.1.4.8.1. \u042d\u0442\u0430\u043f\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",id:"521481-\u044d\u0442\u0430\u043f\u044b-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",level:2},{value:"5.2.1.4.8.2. \u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b",id:"521482-\u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435-\u0444\u0430\u0439\u043b\u044b",level:2},{value:"5.2.1.4.8.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b",id:"521483-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435-\u0444\u0430\u0439\u043b\u044b",level:2},{value:"5.2.1.4.8.4. \u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit",id:"521484-\u0441\u0442\u0430\u0442\u0443\u0441-systemd-unit",level:2}];function i(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"52148-kube-controller-manager",children:"5.2.1.4.8. Kube-Controller-Manager"})}),"\n",(0,o.jsx)(n.h2,{id:"521481-\u044d\u0442\u0430\u043f\u044b-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",children:"5.2.1.4.8.1. \u042d\u0442\u0430\u043f\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,o.jsx)(n.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."}),"\n",(0,o.jsx)(n.li,{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"521482-\u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435-\u0444\u0430\u0439\u043b\u044b",children:"5.2.1.4.8.2. \u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,o.jsx)(n.h2,{id:"521483-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435-\u0444\u0430\u0439\u043b\u044b",children:"5.2.1.4.8.3. \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,o.jsx)(n.h2,{id:"521484-\u0441\u0442\u0430\u0442\u0443\u0441-systemd-unit",children:"5.2.1.4.8.4. \u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}}}]);