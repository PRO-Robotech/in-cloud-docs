"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40124],{17570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/about","title":"about","description":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435: Crictl \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 CRI. Crictl \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435, \u0437\u0430\u043f\u0443\u0441\u043a, \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 CRI.","source":"@site/docs/tech-docs/kubernetes/components/crictl/about.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/about","permalink":"/tech-docs/kubernetes/components/crictl/about","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=t(74848),r=t(28453);const i={},l=void 0,o={},d=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:4},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",level:4}];function u(e){const n={h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),": Crictl \u2014 \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0435\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 CRI. Crictl \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435, \u0437\u0430\u043f\u0443\u0441\u043a, \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 CRI."]}),"\n",(0,s.jsx)(n.h4,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043a\u043e\u043c\u0430\u043d\u0434 \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0435 CRI."}),"\n",(0,s.jsx)(n.li,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432."}),"\n",(0,s.jsx)(n.li,{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u0445, \u043f\u043e\u0434\u0430\u0445 \u0438 \u0438\u0445 \u0441\u0442\u0430\u0442\u0443\u0441\u0435."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0438 \u0438 \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 Kubernetes."}),"\n",(0,s.jsx)(n.li,{children:"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u0443\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c Docker, \u043d\u043e \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e \u043d\u0430 CRI."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);