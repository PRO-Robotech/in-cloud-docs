"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[210,442,694,1488,1654,1999,5106,7167,8261,9474,10824,11597,12159,12527,13515,13884,14048,15093,15800,15945,16658,17393,18001,18185,18743,19689,20430,20434,22077,22355,22770,23374,24361,25703,27603,28446,28466,29096,29433,29876,30948,31200,32834,33049,34927,37556,37683,38006,38647,39967,40685,41653,41899,42334,42613,42881,43052,43281,44710,47582,48034,49116,51507,51575,53536,55660,55915,57167,57224,57492,58129,58143,58154,60810,61356,61585,62393,62528,66993,67162,67735,67875,70359,71301,73054,74730,75253,75889,77750,78492,79200,80346,81063,81802,82505,82752,83103,83659,83843,84582,85733,86661,87001,87279,87579,87774,87929,87933,89136,89336,90148,90276,91449,94742,95266,96156,97110,97786,98145,98866,99435,99671,99724],{86:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","title":"coreModulesComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:","source":"@site/docs/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","permalink":"/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[{value:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:",id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe-1",level:4},{value:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-1",level:4}];function m(e){const t={admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(i.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    cat <<EOF > /etc/modules-load.d/k8s.conf
    overlay
    br_netfilter
    EOF
  `}),(0,r.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    sudo -i
    modprobe overlay
    modprobe br_netfilter
  `})]}),(0,r.jsxs)(i.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-modprobe-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f modprobe"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    # write_files:
    - path: /etc/modules-load.d/k8s.conf
      owner: root:root
      permissions: '0644'
      content: |
        overlay
        br_netfilter
  `}),(0,r.jsx)(t.h4,{id:"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u043c\u043e\u0434\u0443\u043b\u0435\u0439-1",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    # runcmd:
    - modprobe overlay
    - modprobe br_netfilter
  `})]})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c overlay \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 OverlayFS \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u044f\u043c\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439 \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u0430\u043a\u0438\u043c\u0438 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0430\u043c\u0438, \u043a\u0430\u043a Docker \u0438 containerd."}),(0,r.jsx)(t.p,{children:"\u041c\u043e\u0434\u0443\u043b\u044c br_netfilter \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043c\u043e\u0441\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0443 netfilter. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b iptables \u0432 Kubernetes."})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusKubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){return(0,r.jsx)(c.A,{language:"bash",children:a.A`
  systemctl enable containerd
  systemctl start containerd
`})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(97106);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","permalink":"/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPComponent","title":"allStaticPodsCPComponent","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);function l(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs all \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "ca" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com pylcozuscb] and IPs [29.64.0.1 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-ca" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Generating "etcd/ca" certificate and key
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "sa" key and public key
`})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}var u=n(70417),h=n(87464),p=n(62774);const m={},b=void 0,k={},f=[...u.RM];function g(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(p.A,{groupId:"phase",children:[(0,r.jsx)(h.A,{value:"init",children:(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(d,{})]})}),(0,r.jsx)(h.A,{value:"join",children:(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(u.Ay,{})]})})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},2763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(70218),c=n(14134);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(85631),l=n(70417);const d={},u=void 0,h={},p=[...i.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/allModprobe","title":"allModprobe","description":"","source":"@site/docs/tech-docs/kubernetes/setup-environments/modprobe/allModprobe.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/allModprobe","permalink":"/tech-docs/kubernetes/setup-environments/modprobe/allModprobe","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(52707);const c={},i=void 0,l={},d=[...a.toc];function u(e){return(0,r.jsx)(a.default,{})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},4391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t runc-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current runc version...
  ***** [INFO] Current: none, Target: ${i.M.runc.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating runc to version ${i.M.runc.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading runc...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing runc...
  ***** [INFO] runc successfully updated to ${i.M.runc.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'runc$'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  -rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(24905);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/runc/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/checks","slug":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/runc/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  runc --version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  runc version 1.1.12
  commit: v1.1.12-0-g51d5e946
  spec: 1.0.2-dev
  go: go1.20.13
  libseccomp: 2.5.4
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(63217),c=n(69536);const i={},l=void 0,d={},u=[...a.toc,...c.toc];function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(c.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},6353:(e,t,n)=>{n.d(t,{$:()=>r});var s=n(7478);const r={etcdCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},etcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"}}},7022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","permalink":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(85631),l=n(4898);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubeletClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = system:node:$\{FULL_HOST_NAME}
  O  = system:nodes

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletClient.keyPath} ${a.$.kubeletClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubeletClient.keyPath} \\
    -out ${a.$.kubeletClient.csrPath} \\
    -config ${a.$.kubeletClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubeletClient.csrPath} \\
    -out ${a.$.kubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubeletClient.crtConf}
`}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletClient.crtPath} ${a.$.kubeletClient.keyPath} >> ${a.$.kubeletNowClient.crtPath}
  ln -s ${a.$.kubeletNowClient.crtPath} ${a.$.kubeletCurrentClient.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},7785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","permalink":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${c.M.clusterName.value}"
      export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
  `}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${a.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/scheduler.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(87464),d=n(62774),u=n(42267),h=n(42567);const p={},m=void 0,b={},k=[...u.toc];function f(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(l.A,{value:"Bash",children:[(0,r.jsx)(u.default,{}),(0,r.jsx)("h4",{children:"Systemd Unit"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${h.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Config"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,r.jsxs)(d.A,{groupId:"ccm",children:[(0,r.jsxs)(l.A,{value:"Default",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,r.jsxs)(l.A,{value:"Cloud Controller Manager",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl enable kubelet
    `})]}),(0,r.jsxs)(l.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=kubelet: The Kubernetes Node Agent
          Documentation=https://kubernetes.io/docs/
          Wants=network-online.target containerd.service
          After=network-online.target containerd.service

          [Service]
          ExecStart=${h.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
  # write_files:
  - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},10119:(e,t,n)=>{n.d(t,{D:()=>o});var s=n(6353),r=n(31798);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${s.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${s.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${s.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${s.$.etcdServer.crtPath}`},keyFile:{value:`${s.$.etcdServer.keyPath}`},trustedCAFile:{value:`${s.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${r.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${r.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${r.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${r.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},10284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>j,frontMatter:()=>k,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","title":"allCertificatesAppsInitComponent","description":"Kubelet server","source":"@site/docs/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","permalink":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(52717),c=n(59968),i=n(23202),l=n(61805),d=n(47279),u=n(55609),h=n(17510),p=n(67069),m=n(87464),b=n(62774);const k={},f=void 0,g={},x=[...a.toc,...c.toc,...i.toc,...d.toc,...l.toc,...u.toc,...h.toc,...p.toc];function v(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(b.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(m.A,{value:"Kubelet Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(m.A,{value:"API -> Etcd",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,r.jsx)(c.default,{})]})}),(0,r.jsx)(m.A,{value:"API -> Kubelet",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,r.jsx)(i.default,{})]})}),(0,r.jsx)(m.A,{value:"API Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,r.jsx)(d.default,{})]})}),(0,r.jsx)(m.A,{value:"Proxy -> API",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,r.jsx)(l.default,{})]})}),(0,r.jsx)(m.A,{value:"Etcd Client",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,r.jsx)(u.default,{})]})}),(0,r.jsx)(m.A,{value:"Etcd Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,r.jsx)(h.default,{})]})}),(0,r.jsx)(m.A,{value:"Etcd Peer",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,r.jsx)(p.default,{})]})})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},11010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","title":"allUploadCAComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(53434),c=n(87464),i=n(62774);const l={},d=void 0,u={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 Kubernetes.\n\u0421\u0435\u043a\u0440\u0435\u0442 kubeadm-certs \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043b\u044e\u0447\u0438 \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u0443\u0437\u043b\u043e\u0432 (",(0,r.jsx)(t.code,{children:"kubeadm join"}),").\n\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."]}),"\n"]}),"\n",(0,r.jsx)(i.A,{groupId:"phase",children:(0,r.jsx)(c.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 Kubernetes"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesFrontProxyClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesFrontProxyClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesFrontProxyClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesFrontProxyClient.keyPath} ${a.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${a.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${a.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${a.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.frontProxyCA.crtPath} \\
    -CAkey ${a.$.frontProxyCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesFrontProxyClient.csrPath} \\
    -out ${a.$.kubernetesFrontProxyClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesFrontProxyClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},11946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,r.jsx)("h4",{children:"\u0420\u043e\u0442\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
  #### Ротация сертификатов
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},12141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $2}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubelet
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubelet.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${d.data.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubelet.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.data.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},12385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},12544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","title":"allKubeconfigsAppsInitComponent","description":"Super Admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","permalink":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(81970),c=n(67716),i=n(68890),l=n(56721),d=n(99119),u=n(8508),h=n(87464),p=n(62774);const m={},b=void 0,k={},f=[...l.toc,...i.toc,...d.toc,...a.toc,...c.toc];function g(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(p.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(h.A,{value:"Super Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,r.jsx)(l.default,{})]})}),(0,r.jsx)(h.A,{value:"Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,r.jsx)(i.default,{})]})}),(0,r.jsx)(h.A,{value:"Controller",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,r.jsx)(d.default,{})]})}),(0,r.jsx)(h.A,{value:"Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(h.A,{value:"Kubelet",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,r.jsx)(u.A,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,r.jsx)(c.default,{})]})})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},13075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesServer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},13766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","title":"examinationOpensslComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","permalink":"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
  `}),"\n",(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
  cat <<'EOF' > ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  #!/usr/bin/env bash
  set -euo pipefail

  TMPDIR=\$(mktemp -d)
  trap 'rm -rf "\$TMPDIR"' EXIT

  declare -A CN_TO_CA_NAME
  declare -A PROCESSED_FINGERPRINTS
  CERT_ROWS=()
  CA_ROWS=()

  CERT_HEADER=\$(printf "%-28s %-25s %-15s %-24s %-20s" \\
    "CERTIFICATE" "EXPIRES" "RESIDUAL TIME" "CERTIFICATE AUTHORITY" "EXTERNALLY MANAGED")
  CA_HEADER=\$(printf "%-24s %-25s %-15s %-20s" \\
    "CERTIFICATE AUTHORITY" "EXPIRES" "RESIDUAL TIME" "EXTERNALLY MANAGED")

  CERT_PATH="\${1:-}"

  if [ -n "\$CERT_PATH" ]; then
    FILES=("\$CERT_PATH")
  else
    mapfile -t FILES < <(
      find /etc/kubernetes/ \\
        -type d -name openssl -prune -o \\
        -type f \\( -name "*.crt" -o -name "*.pem" -o -name "*.conf" \\) -print 2>/dev/null
    )
  fi

  extract_cert() {
    local file="\$1"
    local out="\$2"
    if grep -q "client-certificate-data:" "\$file"; then
      awk '/client-certificate-data:/ {print \$2}' "\$file" | base64 -d > "\$out"
    else
      cp "\$file" "\$out"
    fi
  }

  cert_lifetime() {
    local end="\$1"
    local end_ts now_ts days years
    end_ts=\$(date -d "\$end" +%s)
    now_ts=\$(date +%s)
    (( end_ts < now_ts )) && echo "expired" && return
    days=\$(( (end_ts - now_ts) / 86400 ))
    years=\$(( days / 365 ))
    (( years > 0 )) && echo "\${years}y" || echo "\${days}d"
  }

  cert_name() {
    local path="\$1"
    local base
    base=\$(basename "\$path" | sed 's/\\.\\(crt\\|pem\\|conf\\)\$//')
    case "\$path" in
      */etcd/*)         echo "etcd-\$base" ;;
      */front-proxy/*)  echo "front-proxy-\$base" ;;
      *)                echo "\$base" ;;
    esac
  }

  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/ca.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout -text 2>/dev/null | grep -A1 "Key Usage" | grep -q "Certificate Sign" || continue
    cn=\$(openssl x509 -in "\$crt" -noout -subject 2>/dev/null | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
    [[ -n "\$cn" ]] && CN_TO_CA_NAME["\$cn"]="\$(cert_name "\$file")"
  done

  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/cert.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout >/dev/null 2>&1 || continue

    fp=\$(openssl x509 -in "\$crt" -noout -fingerprint -sha256 | cut -d= -f2)
    [[ -n "\${PROCESSED_FINGERPRINTS[\$fp]+x}" ]] && continue
    PROCESSED_FINGERPRINTS[\$fp]=1

    name=\$(cert_name "\$file")
    end_raw=\$(openssl x509 -in "\$crt" -noout -enddate | cut -d= -f2)
    expires=\$(date -d "\$end_raw" "+%b %d, %Y %H:%M UTC")
    residual=\$(cert_lifetime "\$end_raw")

    if openssl x509 -in "\$crt" -noout -text | grep -A1 "Key Usage" | grep -q "Certificate Sign"; then
      CA_ROWS+=("\$(printf "%-24s %-25s %-15s %-20s" "\$name" "\$expires" "\$residual" "no")")
    else
      issuer_cn=\$(openssl x509 -in "\$crt" -noout -issuer | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
      ca_name="\${CN_TO_CA_NAME[\$issuer_cn]:-\$issuer_cn}"
      CERT_ROWS+=("\$(printf "%-28s %-25s %-15s %-24s %-20s" "\$name" "\$expires" "\$residual" "\$ca_name" "no")")
    fi
  done

  echo
  echo "\$CERT_HEADER"
  printf "%s\\n" "\${CERT_ROWS[@]}" | sort
  echo
  echo "\$CA_HEADER"
  printf "%s\\n" "\${CA_ROWS[@]}" | sort
  EOF
`})]}),"\n",(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
    chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432/kubeconfigs"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})}),"\n",(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430/kubeconfig"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.M.kubernetesBaseFolderPath.value}/pki/ca.crt
  `}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED


  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},13788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/allCAComponent","title":"allCAComponent","description":"\u0426\u0435\u043d\u0442\u0440 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (CA) \u2014 \u044d\u0442\u043e \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a, \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u044e\u0449\u0438\u0439 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/allCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/allCAComponent","permalink":"/tech-docs/kubernetes/certificates/center-authority/allCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(92196),l=n(21905),d=n(55377),u=n(33056);const h={},p=void 0,m={},b=[...i.toc,...l.toc,...d.toc,...u.toc];function k(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u0426\u0435\u043d\u0442\u0440 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (CA)"})," \u2014 \u044d\u0442\u043e \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a, \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u044e\u0449\u0438\u0439 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 Kubernetes."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b CA \u0438\u0433\u0440\u0430\u044e\u0442 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u043e\u0432\u0435\u0440\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f ",(0,r.jsx)(t.strong,{children:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e"}),", ",(0,r.jsx)(t.strong,{children:"\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})," \u0438 ",(0,r.jsx)(t.strong,{children:"\u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c"})," \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 (root) \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0438 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes."}),"\n"]}),"\n",(0,r.jsxs)(c.A,{groupId:"phase",children:[(0,r.jsx)(a.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(c.A,{groupId:"CA",children:[(0,r.jsx)(a.A,{value:"Kubernetes \u0426\u0410",label:"Kubernetes \u0426\u0410",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubernetes CA"}),(0,r.jsx)(i.default,{})]})}),(0,r.jsx)(a.A,{value:"FrontProxy \u0426\u0410",label:"FrontProxy \u0426\u0410",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"FrontProxy CA"}),(0,r.jsx)(l.default,{})]})}),(0,r.jsx)(a.A,{value:"ETCD \u0426\u0410",label:"ETCD \u0426\u0410",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"ETCD CA"}),(0,r.jsx)(d.default,{})]})})]})]})}),(0,r.jsx)(a.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0412\u044b\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 CA"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(u.default,{})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},14134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd/checks","slug":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t etcd-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current etcd version...
  ***** [INFO] Current: none, Target: ${i.M.etcd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating etcd to version ${i.M.etcd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading etcd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing etcd...
  ***** [INFO] etcd successfully updated to ${i.M.etcd.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},15813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","title":"allStaticPodsCPJoinComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(18459),c=n(3637),i=n(30418),l=n(87464),d=n(62774);const u={},h=void 0,p={},m=[...a.toc,...c.toc,...i.toc];function b(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes."}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"Componenet",children:[(0,r.jsx)(l.A,{value:"Kube-API",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(l.A,{value:"Kube Controller Manager",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})}),(0,r.jsx)(l.A,{value:"Kube Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(i.default,{})]})})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},16136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusKubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},16158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusOpenssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.etcdServer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},16455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  systemctl status containerd
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ● containerd.service - containerd container runtime
        Loaded: loaded (/usr/lib/systemd/system/containerd.service; enabled; preset: enabled)
        Active: active (running) since Tue 2024-12-31 17:26:21 UTC; 2min 30s ago
          Docs: https://containerd.io
      Main PID: 839 (containerd)
        Tasks: 7 (limit: 2274)
        Memory: 62.0M (peak: 62.5M)
          CPU: 375ms
        CGroup: /system.slice/containerd.service
                └─839 /usr/local/bin/containerd

  ***** level=info msg="Start subscribing containerd event"
  ***** level=info msg="Start recovering state"
  ***** level=info msg="Start event monitor"
  ***** level=info msg="Start snapshots syncer"
  ***** level=info msg="Start cni network conf syncer for default"
  ***** level=info msg="Start streaming server"
  ***** level=info msg=serving... address=/run/containerd/containerd.sock.ttrpc
  ***** level=info msg=serving... address=/run/containerd/containerd.sock
  ***** level=info msg="containerd successfully booted in 0.065807s"
  ***** Started containerd.service - containerd container runtime.

`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},16523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","permalink":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesCA.crtConf}
  [req]
  distinguished_name = req_distinguished_name
  x509_extensions    = v3_ca
  prompt             = no

  [req_distinguished_name]
  CN = ${a.$.kubernetesCA.cname}

  [v3_ca]
  keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
  basicConstraints = critical,CA:TRUE
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesCA.keyPath} ${a.$.kubernetesCA.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.kubernetesCA.crtPath} \\
    -config ${a.$.kubernetesCA.crtConf}
`}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
    ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.kubernetesCA.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},16728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient/checks","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},16812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
    mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
    mkdir -p ${c.M.kubernetesBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesSuperAdminClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesSuperAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesSuperAdminClient.cname}
  O  = system:masters

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSuperAdminClient.keyPath} ${a.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${a.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${a.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesSuperAdminClient.csrPath} \\
    -out ${a.$.kubernetesSuperAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesSuperAdminClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},17147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkComponent","permalink":"/tech-docs/kubernetes/components/kubeadm/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(71874);const c={},i=void 0,l={},d=[...a.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},17335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/crictl/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  crictl --version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  crictl version v1.30.0
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},17510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(46567),l=n(49717),d=n(16158),u=n(51144);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},17810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusOpenssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.etcdClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},17989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","title":"statusSystemdUnitEnabled","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
      ○ kubelet.service - kubelet: The Kubernetes Node Agent
          Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                  └─10-kubeadm.conf
          Active: inactive (dead)
          Docs: https://kubernetes.io/docs/
  `})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},18459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(79988),l=n(70417);const d={},u=void 0,h={},p=[...i.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},18567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPodJoinComponent","title":"staticPodJoinComponent","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPodJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPodJoinComponent","permalink":"/tech-docs/kubernetes/components/etcd/staticPodJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(31798),i=n(63770),l=n(10119),d=n(60513),u=n(1775),h=n(58531);const p={},m=void 0,b={},k=[...h.toc];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u043d\u0438\u044f"}),"\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsx)(u.A,{language:"bash",children:(0,d.A)(`\n  export CLUSTER_NAME=${a.M.clusterName.value}\n  export BASE_DOMAIN=${a.M.kubernetesBaseDomain.value}\n  export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}\n  export FULL_HOST_NAME=${a.M.virtualMachineFullName.value}\n\n  # \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 etcd-\u043d\u043e\u0434\n  mapfile -t ETCD_PODS < <(kubectl get pods \\\n    --kubeconfig=/etc/kubernetes/admin.conf \\\n    -n kube-system -l component=etcd \\\n    -o jsonpath="{range .items[*]}{.metadata.name} {.status.podIP}{'\\n'}{end}")\n\n  ETCD_EXISTING_NODES=""\n  ETCD_ENDPOINTS=""\n\n  for entry in "\${ETCD_PODS[@]}"; do\n    read -r podname podip <<< "$entry"\n    nodename="\${podname#etcd-}"\n    ETCD_EXISTING_NODES+="\${nodename}=https://\${podip}:2380,"\n    ETCD_ENDPOINTS+="https://\${podip}:2379,"\n  done\n\n  ETCD_EXISTING_NODES="\${ETCD_EXISTING_NODES%,}"\n  ETCD_ENDPOINTS="\${ETCD_ENDPOINTS%,}"\n\n  # \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0437\u0435\u043b, \u0435\u0441\u043b\u0438 \u0435\u0433\u043e \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435\n  ETCD_CURRENT_NODE="\${FULL_HOST_NAME}=https://\${MACHINE_LOCAL_ADDRESS}:2380"\n\n  if [[ "$ETCD_EXISTING_NODES" == *"\${FULL_HOST_NAME}="* ]]; then\n    export ETCD_INITIAL_CLUSTER="$ETCD_EXISTING_NODES"\n  else\n    if [[ -n "$ETCD_EXISTING_NODES" ]]; then\n      export ETCD_INITIAL_CLUSTER="\${ETCD_EXISTING_NODES},\${ETCD_CURRENT_NODE}"\n    else\n      export ETCD_INITIAL_CLUSTER="\${ETCD_CURRENT_NODE}"\n    fi\n  fi\n\n  export ETCD_ENDPOINTS\n`)}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"Static Pod ETCD"}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${c.h.etcdServer.portNumber}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${l.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${l.D.autoCompactionRetention.value}
      - --cert-file=${l.D.certFile.value}
      - --client-cert-auth=${l.D.clientCertAuth.value}
      - --data-dir=${l.D.dataDir.value}
      - --election-timeout=${l.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${l.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${l.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${l.D.initialCluster.value}
      - --initial-cluster-state=existing
      - --key-file=${l.D.keyFile.value}
      - --listen-client-urls=${l.D.listenClientUrls.value}
      - --listen-metrics-urls=${l.D.listenMetricsUrls.value}
      - --listen-peer-urls=${l.D.listenPeerUrls.value}
      - --logger=${l.D.logger.value}
      - --max-snapshots=${l.D.maxSnapshots.value}
      - --max-wals=${l.D.maxWals.value}
      - --metrics=${l.D.metrics.value}
      - --name=${l.D.name.value}
      - --peer-cert-file=${l.D.peerCertFile.value}
      - --peer-client-cert-auth=${l.D.peerClientCertAuth.value}
      - --peer-key-file=${l.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${l.D.peerTrustedCAFile.value}
      - --snapshot-count=${l.D.snapshotCount.value}
      - --quota-backend-bytes=${l.D.quotaBackendBytes.value}
      - --trusted-ca-file=${l.D.trustedCAFile.value}
      image: ${a.M.baseDockerRegistry.value}/etcd:${i.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 0.0.0.0
          path: /health?exclude=NOSPACE&serializable=true
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 0.0.0.0
          path: /health?serializable=false
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,r.jsx)("h4",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041e\u0431\u044a\u044f\u0432\u043b\u044f\u0435\u043c alias \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"etcdctl"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0443\u0436\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"]}),"\n"]}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  alias etcdctl='etcdctl \\
    --cert=/etc/kubernetes/pki/etcd/peer.crt \\
    --key=/etc/kubernetes/pki/etcd/peer.key \\
    --cacert=/etc/kubernetes/pki/etcd/ca.crt'
`}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 client-URL'\u043e\u0432 \u0432\u0441\u0435\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),"\n"]}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  etcdctlMembers() {
    etcdctl member list \\
      --endpoints="$ETCD_ENDPOINTS" \\
      --write-out=json | jq \\
      -r '[.members[].clientURLs[]] | join(",")'
  }
`}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u043a\u0432\u043e\u0440\u0443\u043c\u0430"}),"\n"]}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) member list \\
    -w table
`}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440"}),"\n"]}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    member add $\{FULL_HOST_NAME} \\
    --peer-urls=https://$\{MACHINE_LOCAL_ADDRESS}:2380
`}),(0,r.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,r.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0442\u043e\u0440\u043e\u0439 \u043d\u043e\u0434\u044b \u0432 ETCD-\u043a\u0432\u043e\u0440\u0443\u043c, \u043f\u0435\u0440\u0432\u044b\u0439 \u043c\u0430\u0441\u0442\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044c ",(0,r.jsx)(t.strong,{children:"\u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c"}),", \u043f\u043e\u043a\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0443\u0437\u0435\u043b ETCD \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d.\n\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ETCD \u043d\u0430 \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.code,{children:"kubelet"})," (\u0441\u043c. \u0448\u0430\u0433 \u043d\u0438\u0436\u0435), \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c."]})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},18727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.etcdPeer.crtConf}
  [ req ]
  default_bits        = ${a.$.etcdPeer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = \${MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdPeer.keyPath} ${a.$.etcdPeer.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdPeer.keyPath} \\
    -out ${a.$.etcdPeer.csrPath} \\
    -config ${a.$.etcdPeer.crtConf}
  `}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.etcdCA.crtPath} \\
    -CAkey ${a.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.etcdPeer.csrPath} \\
    -out ${a.$.etcdPeer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.etcdPeer.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},19912:(e,t,n)=>{n.d(t,{C:()=>c});n(96540);const s="container_vd7F",r="image_l8wB";var o=n(84740),a=n(74848);const c=()=>(0,a.jsx)("div",{className:s,children:(0,a.jsx)("img",{src:`${(0,o.I)()}img/commics/monkey-user/aaa-bug.png`,alt:"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes",className:r})})},19979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allComponentsReadyComponent","title":"allComponentsReadyComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes \u0434\u043e \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432.","source":"@site/docs/tech-docs/kubernetes/components/allComponentsReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allComponentsReadyComponent","permalink":"/tech-docs/kubernetes/components/allComponentsReadyComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(62774),c=n(87464),i=n(69839),l=n(84572);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes \u0434\u043e \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432."}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"current-master",children:[(0,r.jsx)(c.A,{value:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(i.default,{})]})}),(0,r.jsx)(c.A,{value:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(l.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},20228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","title":"serviceAccountKubeadmComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm init phase certs sa
`}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),"\n"]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
  #### Генерация Kube API сертификатов
  [certs] Generating "sa" key and public key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/allMarkingComponent","title":"allMarkingComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0435 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044e \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/additional-setup/marking/allMarkingComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/allMarkingComponent","permalink":"/tech-docs/kubernetes/additional-setup/marking/allMarkingComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(98428),c=n(39514),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0435 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044e \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430.\n\u0417\u0434\u0435\u0441\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u0430\u043a \u0437\u0430\u0434\u0430\u0442\u044c \u0440\u043e\u043b\u044c control-plane \u0434\u043b\u044f \u0443\u0437\u043b\u0430 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c taint, \u0437\u0430\u043f\u0440\u0435\u0449\u0430\u044e\u0449\u0438\u0439 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043f\u043e\u0434\u043e\u0432 \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u044b.\n\u042d\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 (control plane) \u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(i.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(i.A,{value:"join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/checks","slug":"/tech-docs/kubernetes/components/kubeadm/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubeadm/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/center-authority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","permalink":"/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${a.$.etcdCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = "${a.$.etcdCA.cname}"

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.etcdCA.keyPath} ${a.$.etcdCA.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${a.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${a.$.etcdCA.crtPath} \\
      -config ${a.$.etcdCA.crtConf}
  `}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
    ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.etcdCA.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFiles","title":"configFiles","description":"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(28702),d=n(87464),u=n(62774);const h={},p=void 0,m={},b=[];function k(e){return(0,r.jsxs)(u.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${l.D.data.value}
      EOF
    `})]}),(0,r.jsxs)(d.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${l.D.data.value}
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},21905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Front Proxy CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","permalink":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(94351),l=n(94534);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,r.jsx)(t.code,{children:"Front Proxy CA"}),"."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},22235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubeadm.path}"


      LOG_TAG="kubeadm-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
        curl -fsSL -o kubeadm "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubeadm.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
        install -m 755 kubeadm "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubeadm.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${d.data.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubeadm.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.data.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},22609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubectl/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl/checks","slug":"/tech-docs/kubernetes/components/kubectl/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubectl/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t kubectl-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current kubectl version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubectl to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubectl...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing kubectl...
  ***** [INFO] kubectl successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'kubectl$'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rwxr-xr-x  1 root root  51454104 Aug 14  2024 kubectl
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},22919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkComponent","permalink":"/tech-docs/kubernetes/components/containerd/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(16455),c=n(71020);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},23082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/allSysctls","title":"allSysctls","description":"","source":"@site/docs/tech-docs/kubernetes/setup-environments/sysctls/allSysctls.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctls","permalink":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctls","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(45879);const c={},i=void 0,l={},d=[...a.toc];function u(e){return(0,r.jsx)(a.default,{})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},23202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(38230),l=n(8790),d=n(48231),u=n(8755);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},23831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},24905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl/payload","slug":"/tech-docs/kubernetes/components/kubectl/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubectl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubectl.path}"


      LOG_TAG="kubectl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json --client=true 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
        curl -fsSL -o kubectl "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubectl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
        install -m 755 kubectl "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubectl
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${i.m.kubectl.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${d.data.value}
          EOF
        `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${i.m.kubectl.baseUrl}"
        `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.data.value}
        `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},25292:(e,t,n)=>{n.d(t,{L:()=>a});var s=n(6353),r=n(31798),o=n(7478);const a={etcdCafile:{value:`${s.$.etcdCA.crtPath}`},etcdCertfile:{value:`${s.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${s.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${s.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${s.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${s.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${s.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${s.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${s.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${s.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${s.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${s.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${s.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${s.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${r.h.kubeletServer.portNumber}`},securePort:{value:`${r.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${r.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${r.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,AlwaysPullImages,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditLogPath:{value:""},auditPolicyFile:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},27588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},27590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${c.M.clusterName.value}
      export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
      mkdir -p ${c.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubeletServer.crtConf}
  [ req ]
  default_bits        = ${a.$.kubeletServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = "system:node:$\{FULL_HOST_NAME}
  O  = "system:nodes"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletServer.keyPath} ${a.$.kubeletServer.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubeletServer.keyPath} \\
  -out ${a.$.kubeletServer.csrPath} \\
  -config ${a.$.kubeletServer.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubeletServer.csrPath} \\
    -out ${a.$.kubeletServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubeletServer.crtConf}
`}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletServer.crtPath} ${a.$.kubeletServer.keyPath} >> ${a.$.kubeletNowServer.crtPath}
  ln -s ${a.$.kubeletNowServer.crtPath} ${a.$.kubeletCurrentServer.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},28702:(e,t,n)=>{n.d(t,{D:()=>c});var s=n(60513),r=n(6353),o=n(7478),a=n(31798);const c={data:{value:s.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${r.$.kubernetesCA.crtPath}"
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      containerLogMaxSize: "50Mi"
      containerRuntimeEndpoint: "${o.M.criEndpoint.value}"
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 5s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: ${a.h.kubeletHealthz.portNumber}
      httpCheckFrequency: 0s
      imageGCHighThresholdPercent: 55
      imageGCLowThresholdPercent: 50
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      kubeAPIQPS: 50
      kubeAPIBurst: 100
      maxPods: 250
      memorySwap: {}
      nodeStatusReportFrequency: 1s
      nodeStatusUpdateFrequency: 1s
      podPidsLimit: 4096
      registerNode: true
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      serializeImagePulls: false
      serverTLSBootstrap: true
      shutdownGracePeriod: 15s
      shutdownGracePeriodCriticalPods: 5s
      staticPodPath: ${o.M.kubernetesBaseFolderPath.value}/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      tlsMinVersion: "VersionTLS12"
      volumeStatsAggPeriod: 0s
      featureGates:
        RotateKubeletServerCertificate: true
        APIPriorityAndFairness:         true
      tlsCipherSuites:
        - "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
        - "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
        - "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
        - "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256"
    `}}},29648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesControllerManagerClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},29852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesFrontProxyClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},29924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubeletServer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  kubelet-server-current     Oct 22, 2025 22:06 UTC   364d            kubernetes                      no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},30158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/aboutAllComponent","title":"aboutAllComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes: \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043a\u0435\u043c \u043e\u043d\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438 \u043a\u0430\u043a \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u0438.","source":"@site/docs/tech-docs/kubernetes/certificates/aboutAllComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/aboutAllComponent","permalink":"/tech-docs/kubernetes/certificates/aboutAllComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(40439),c=n(87464),i=n(62774),l=n(84740);const d={},u=void 0,h={},p=[];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes: \u043a\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043a\u0435\u043c \u043e\u043d\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438 \u043a\u0430\u043a \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u0438."}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"group",children:[(0,r.jsxs)(c.A,{value:"masters",children:[(0,r.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,r.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-masters.svg`,style:{width:"100%",maxWidth:"none"}}),(0,r.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,r.jsx)(t.p,{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"})})]}),(0,r.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,r.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-masters-transport.svg`,style:{width:"100%",maxWidth:"none"}}),(0,r.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,r.jsx)(t.p,{children:"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"})})]})]}),(0,r.jsxs)(c.A,{value:"workers",children:[(0,r.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,r.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-workers.svg`,style:{width:"100%",maxWidth:"none"}}),(0,r.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,r.jsx)(t.p,{children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"})})]}),(0,r.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,r.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-workers-transport.svg`,style:{width:"100%",maxWidth:"none"}}),(0,r.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,r.jsx)(t.p,{children:"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"})})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},30418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupJoinComponent","title":"setupJoinComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupJoinComponent","permalink":"/tech-docs/kubernetes/components/scheduler/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(35825),l=n(70417);const d={},u=void 0,h={},p=[...i.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},31283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(90221),c=n(66479);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycle",children:"Kubelet Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(a.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},31773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubeletClient.crtPath} \\
    --client-key=${a.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},31798:(e,t,n)=>{n.d(t,{h:()=>s});const s={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},32613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","title":"allStaticPodsCPPhasesComponent","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(64042),c=n(15813),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(i.A,{value:"init",children:(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(i.A,{value:"join",children:(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},33056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCA","title":"downloadCA","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/downloadCA.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCA","permalink":"/tech-docs/kubernetes/certificates/center-authority/downloadCA","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(33433),c=n(99481),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){return(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsx)(i.A,{value:"HardWay",children:(0,r.jsx)(a.default,{})}),(0,r.jsx)(i.A,{value:"Kubeadm",children:(0,r.jsx)(c.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},33433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","title":"downloadCAOpensslComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438\u0437 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0432\u044b\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0438\u0437 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 Secret, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a.","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","permalink":"/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438\u0437 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0432\u044b\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u0438\u0437 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,r.jsx)(t.code,{children:"Secret"}),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a."]})}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,r.jsx)(t.p,{children:"\u041f\u043e\u0434 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u043e\u0434\u0443 \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 bootstrap-\u0442\u043e\u043a\u0435\u043d.\n\u041e\u0434\u043d\u0430\u043a\u043e, \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 (\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438) \u043c\u044b \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043e\u0434\u0438\u043d \u043e\u0431\u0449\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."})}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  export KUBE_API_BOOTSTRAP_TOKEN=fjt9ex.lwzqgdlvoxtqk4yw
  export KUBE_API_SERVER=https://api.my-first-cluster.example.com:6443
`}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  cat <<EOF > ${i.M.kubernetesBaseFolderPath.value}/openssl/decrypt.py
  #!/usr/bin/env python3
  import sys, base64
  from cryptography.hazmat.primitives.ciphers.aead import AESGCM

  key = bytes.fromhex(sys.argv[1])
  payload = base64.b64decode(sys.argv[2])

  nonce, ct = payload[:12], payload[12:]
  aesgcm = AESGCM(key)
  plain = aesgcm.decrypt(nonce, ct, None)
  sys.stdout.buffer.write(plain)
  EOF

`}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  cat <<'EOF' > ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
  #!/bin/bash
  set -euo pipefail

  CERT_PATH="${i.M.kubernetesBaseFolderPath.value}/pki"
  KEY="\${CERTIFICATE_UPLOAD_KEY:-}"
  PY_SCRIPT="\$(dirname "\$0")/decrypt.py"
  KUBE_API_SERVER="\${KUBE_API_SERVER:-https://127.0.0.1:6443}"
  TOKEN="\${KUBE_API_BOOTSTRAP_TOKEN:?KUBE_API_BOOTSTRAP_TOKEN is required}"

  declare -A files=(
    ["ca.crt"]="\$CERT_PATH/ca.crt"
    ["ca.key"]="\$CERT_PATH/ca.key"
    ["etcd-ca.crt"]="\$CERT_PATH/etcd/ca.crt"
    ["etcd-ca.key"]="\$CERT_PATH/etcd/ca.key"
    ["front-proxy-ca.crt"]="\$CERT_PATH/front-proxy-ca.crt"
    ["front-proxy-ca.key"]="\$CERT_PATH/front-proxy-ca.key"
    ["sa.key"]="\$CERT_PATH/sa.key"
    ["sa.pub"]="\$CERT_PATH/sa.pub"
  )

  mkdir -p "\$CERT_PATH"
  echo "[INFO] Using certificate key: \$KEY"
  echo "[WARN] TLS verification is DISABLED (insecure mode)"
  echo "[INFO] Fetching Secret kubeadm-certs from API..."

  RESPONSE=\$(curl -sSL -k \\
    -H "Authorization: Bearer \$TOKEN" \\
    "\$KUBE_API_SERVER/api/v1/namespaces/kube-system/secrets/kubeadm-certs")

  echo "\$RESPONSE" | jq -r '.data | to_entries[] | @base64' | while read -r item; do
    name=\$(echo "\$item" | base64 -d | jq -r '.key')
    b64=\$(echo "\$item" | base64 -d | jq -r '.value' | tr -d '\\n')

    out_path="\${files[\$name]:-}"
    if [[ -z "\$out_path" ]]; then
      echo "[WARN] Unknown certificate: \$name — skipping"
      continue
    fi

    mkdir -p "\$(dirname "\$out_path")"
    echo "[INFO] Decrypting \$name → \$out_path"
    python3 "\$PY_SCRIPT" "\$KEY" "\$b64" > "\$out_path"
  done

  echo "[INFO] Certificates unpacked."
  EOF

`}),"\n",(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  [INFO] Using certificate key: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  [WARN] TLS verification is DISABLED (insecure mode)
  [INFO] Fetching Secret kubeadm-certs from API...
  [INFO] Decrypting ca.crt → /etc/kubernetes/pki/ca.crt
  [INFO] Decrypting ca.key → /etc/kubernetes/pki/ca.key
  [INFO] Decrypting etcd-ca.crt → /etc/kubernetes/pki/etcd/ca.crt
  [INFO] Decrypting etcd-ca.key → /etc/kubernetes/pki/etcd/ca.key
  [INFO] Decrypting front-proxy-ca.crt → /etc/kubernetes/pki/front-proxy-ca.crt
  [INFO] Decrypting front-proxy-ca.key → /etc/kubernetes/pki/front-proxy-ca.key
  [INFO] Decrypting sa.key → /etc/kubernetes/pki/sa.key
  [INFO] Decrypting sa.pub → /etc/kubernetes/pki/sa.pub
  [INFO] Certificates unpacked.
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},33901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/kubeconfig
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesAdminClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesAdminClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesAdminClient.keyPath} ${a.$.kubernetesAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesAdminClient.keyPath} \\
    -out    ${a.$.kubernetesAdminClient.csrPath} \\
    -config ${a.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesAdminClient.csrPath} \\
    -out ${a.$.kubernetesAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesAdminClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},34208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(9344),c=n(21849);const i={},l=void 0,d={},u=[...a.toc,...c.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),"\n",(0,r.jsx)(t.li,{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)("h3",{children:"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubelet config"}),(0,r.jsx)(c.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},34283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/scheduler/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","permalink":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(35825),l=n(50488);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},34759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"admin"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${a.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${a.$.kubernetesAdminClient.crtPath} \\
    --client-key=${a.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},35671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/allMasterTabs","permalink":"/tech-docs/kubernetes/setup-environments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(60513),l=n(1775);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(c.A,{children:[(0,r.jsx)(a.A,{value:"master-1",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-1
      `})}),(0,r.jsx)(a.A,{value:"master-2",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-2
      `})}),(0,r.jsx)(a.A,{value:"master-3",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},35825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(31798),i=n(63770),l=n(1775),d=n(60513),u=n(85421);const h={},p=void 0,m={},b=[];function k(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(l.A,{language:"bash",children:d.A`
  mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"Static Pod Kube-Schedulerr"}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,r.jsx)(l.A,{language:"bash",children:d.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/kube-scheduler.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-scheduler
      tier: control-plane
    name: kube-scheduler
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-scheduler
      - --authentication-kubeconfig=${u.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${u.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${u.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${u.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${u.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${u.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${u.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${u.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${u.w.bindAddress.value}
      - --client-ca-file=${u.w.clientCaFile.value}
      - --contention-profiling=${u.w.contentionProfiling.value}
      - --help=${u.w.help.value}
      - --http2-max-streams-per-connection=${u.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${u.w.kubeApiBurst.value}
      - --kube-api-content-type=${u.w.kubeApiContentType.value}
      - --kube-api-qps=${u.w.kubeApiQps.value}
      - --kubeconfig=${u.w.kubeconfig.value}
      - --leader-elect=${u.w.leaderElect.value}
      - --leader-elect-lease-duration=${u.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${u.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${u.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${u.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${u.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${u.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${u.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${u.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${u.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${u.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${u.w.logTextSplitStream.value}
      - --logging-format=${u.w.loggingFormat.value}
      - --permit-address-sharing=${u.w.permitAddressSharing.value}
      - --permit-port-sharing=${u.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${u.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${u.w.profiling.value}
      - --requestheader-extra-headers-prefix=${u.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${u.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${u.w.requestheaderUsernameHeaders.value}
      - --secure-port=${u.w.securePort.value}
      - --v=${u.w.v.value}
      - --version=${u.w.version.value}
    # - --allow-metric-labels=${u.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${u.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${u.w.certDir.value}
    # - --config=${u.w.config.value}
    # - --disabled-metrics=${u.w.disabledMetrics.value}
    # - --feature-gates=${u.w.featureGates.value}
    # - --master=${u.w.master.value}
    # - --requestheader-allowed-names=${u.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${u.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${u.w.showHiddenMetricsForVersion.value}
    # - --tls-cert-file=${u.w.tlsCertFile.value}
    # - --tls-cipher-suites=${u.w.tlsCipherSuites.value}
    # - --tls-min-version=${u.w.tlsMinVersion.value}
    # - --tls-private-key-file=${u.w.tlsPrivateKeyFile.value}
    # - --tls-sni-cert-key=${u.w.tlsSniCertKey.value}
    # - --vmodule=${u.w.vmodule.value}
    # - --write-config-to=${u.w.writeConfigTo.value}
      image: ${a.M.baseDockerRegistry.value}/kube-scheduler:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${c.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-scheduler
      resources:
        requests:
          cpu: 100m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${c.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/scheduler.conf
        type: FileOrCreate
      name: kubeconfig
  status: {}
  EOF
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},35904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>A,default:()=>P,frontMatter:()=>y,metadata:()=>s,toc:()=>$});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allInstallComponent","title":"allInstallComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/components/allInstallComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allInstallComponent","permalink":"/tech-docs/kubernetes/components/allInstallComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(50730),c=n(63330),i=n(60253),l=n(61122),d=n(97836),u=n(57502),h=n(4525),p=n(69613),m=n(876),b=n(58115),k=n(64645),f=n(97373),g=n(58603),x=n(2763),v=n(87464),j=n(62774);const y={},A=void 0,C={},$=[...i.toc,...l.toc,...a.toc,...c.toc,...d.toc,...u.toc,...g.toc,...x.toc,...h.toc,...p.toc,...m.toc,...b.toc,...k.toc,...f.toc];function S(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.\n\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u044d\u0442\u0430\u043f\u043e\u0432 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."}),"\n"]}),"\n",(0,r.jsxs)(j.A,{groupId:"component",children:[(0,r.jsx)(v.A,{value:"runc",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 runc"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(i.default,{}),(0,r.jsx)(l.default,{})]})}),(0,r.jsx)(v.A,{value:"containerd",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 containerd"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{}),(0,r.jsx)(c.default,{})]})}),(0,r.jsx)(v.A,{value:"kubelet",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]})}),(0,r.jsx)(v.A,{value:"etcd",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(g.default,{}),(0,r.jsx)(x.default,{})]})}),(0,r.jsx)(v.A,{value:"kubectl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubectl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(h.default,{}),(0,r.jsx)(p.default,{})]})}),(0,r.jsx)(v.A,{value:"crictl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 crictl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(m.default,{}),(0,r.jsx)(b.default,{})]})}),(0,r.jsx)(v.A,{value:"kubeadm",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubeadm"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(k.default,{}),(0,r.jsx)(f.default,{})]})})]})]})}function P(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(S,{...e})}):S(e)}},36127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","title":"uploadConfigsInitComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubeadm \u0438 Kubelet \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ConfigMap. \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (worker), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (master) \u0443\u0437\u043b\u044b.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-configs","slug":"/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(1775),l=n(60513),d=n(76519),u=n(28702),h=n(7478),p=n(10119);const m={},b=void 0,k={},f=[];function g(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,r.jsx)(t.code,{children:"Kubeadm"})," \u0438 ",(0,r.jsx)(t.code,{children:"Kubelet"})," \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes \u0432 \u0432\u0438\u0434\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 ",(0,r.jsx)(t.code,{children:"ConfigMap"}),". \u042d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0443\u0437\u043b\u043e\u0432 Kubernetes, \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044f \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0447\u0438\u0435 (",(0,r.jsx)(t.code,{children:"worker"}),"), \u0442\u0430\u043a \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0435 (",(0,r.jsx)(t.code,{children:"master"}),") \u0443\u0437\u043b\u044b."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME='${h.M.clusterName.value}'
      export BASE_DOMAIN='${h.M.kubernetesBaseDomain.value}'
      export FULL_HOST_NAME=${h.M.virtualMachineFullName.value}
      export INTERNAL_API=api.${h.M.kubernetesClusterExternalDomain.value}
      export MACHINE_LOCAL_ADDRESS=${h.M.virtualMachineLocalAddress.value}
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${p.D.initialAdvertisePeerUrls.value}"
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"kubeadm-config"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u043e\u0434\u0430\u043c \u0447\u0438\u0442\u0430\u0442\u044c ConfigMap ",(0,r.jsx)(t.code,{children:"kubeadm-config"})," \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0438\u043c\u0451\u043d ",(0,r.jsx)(t.code,{children:"kube-system"}),":"]}),"\n"]}),(0,r.jsx)(i.A,{children:l.A`
        kubectl \\
          --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:nodes-kubeadm-config
          namespace: kube-system
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - kubeadm-config
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:nodes-kubeadm-config
          namespace: kube-system
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:nodes-kubeadm-config
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        EOF
      `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"})," \u0443\u0437\u0435\u043b \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,r.jsx)(t.code,{children:"ClusterConfiguration"})," \u043e\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f \u043a control-plane."]}),"\n"]}),(0,r.jsx)(i.A,{children:l.A`
        kubectl \\
          --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: kubeadm-config
          namespace: kube-system
        data:
          ClusterConfiguration: |
            ${d.Q.data.value}
        EOF
      `})]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"kubelet-config"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u043e\u0434\u0430\u043c \u0447\u0438\u0442\u0430\u0442\u044c ConfigMap ",(0,r.jsx)(t.code,{children:"kubelet-config"})," \u0432 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435 \u0438\u043c\u0451\u043d ",(0,r.jsx)(t.code,{children:"kube-system"}),":"]}),"\n"]}),(0,r.jsx)(i.A,{children:l.A`
        kubectl \\
          --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: kubeadm:kubelet-config
          namespace: kube-system
        rules:
        - apiGroups:
          - ""
          resourceNames:
          - kubelet-config
          resources:
          - configmaps
          verbs:
          - get
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: kubeadm:kubelet-config
          namespace: kube-system
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: kubeadm:kubelet-config
        subjects:
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: system:nodes
        - apiGroup: rbac.authorization.k8s.io
          kind: Group
          name: $\{AUTH_EXTRA_GROUPS}
        EOF
      `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"})," \u0443\u0437\u0435\u043b \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,r.jsx)(t.code,{children:"kubelet-config"})," \u043e\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u043b\u0441\u044f \u043a control-plane."]}),"\n"]}),(0,r.jsx)(i.A,{children:l.A`
        kubectl \\
          --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          apply -f - <<EOF
        ---
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: kubelet-config
          namespace: kube-system
        data:
          kubelet: |
            ${u.D.data.value}
        EOF
      `})]})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase upload-config all \\
        --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
  [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
`})})]})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},36189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki/etcd
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.etcdClient.crtConf}
  [ req ]
  default_bits        = ${a.$.etcdClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.etcdClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdClient.keyPath} ${a.$.etcdClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdClient.keyPath} \\
    -out ${a.$.etcdClient.csrPath} \\
    -config ${a.$.etcdClient.crtConf}
  `}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.etcdCA.crtPath} \\
    -CAkey ${a.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.etcdClient.csrPath} \\
    -out ${a.$.etcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.etcdClient.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},38229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},38230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesKubeletClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesKubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesKubeletClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesKubeletClient.keyPath} ${a.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesKubeletClient.keyPath} \\
    -out    ${a.$.kubernetesKubeletClient.csrPath} \\
    -config ${a.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesKubeletClient.csrPath} \\
    -out ${a.$.kubernetesKubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesKubeletClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},38444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/etcd-settings","title":"etcd-settings","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/etcd-settings","permalink":"/tech-docs/etcd/components/etcd/etcd-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-settings"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/tech-docs/etcd/components/etcd/add-members"}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(97118),l=n(78091);const d={id:"etcd-settings"},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},38816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${c.M.clusterName.value}"
  export BASE_DOMAIN="${c.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${c.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${c.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${a.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/controller-manager.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},39189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc/payload","slug":"/tech-docs/kubernetes/components/runc/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/runc/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${i.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.runc.path}"

      LOG_TAG="runc-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current runc version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating runc to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading runc..."
        curl -fsSL -o runc.amd64 "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o runc.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing runc..."
        install -m 755 runc.amd64 "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] runc successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/runc
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${l.M.runc.value}"
      REPOSITORY="${i.m.runc.baseUrl}"
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${d.data.value}
      EOF
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/runc-install.service
      [Unit]
      Description=Install and update in-cloud component runc
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/runc/download.env
      ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.runc.value}"
          REPOSITORY="${i.m.runc.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${d.data.value}
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /usr/lib/systemd/system/runc-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component runc
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/runc/download.env
          ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},39514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","title":"markingJoinComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a.","source":"@site/docs/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","permalink":"/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(1775),l=n(60513),d=n(7478),u=n(58531);const h={},p=void 0,m={},b=[...u.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a."})}),"\n",(0,r.jsx)(u.default,{}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${d.M.clusterName.value}
  export BASE_DOMAIN=${d.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${d.M.virtualMachineFullName.value}
`}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
    node/master-<n>.my-first-cluster.example.com labeled
  `})}),(0,r.jsx)("h4",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
    node/master-<n>.my-first-cluster.example.com modified
  `})})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm join phase control-plane-join mark-control-plane \\
        --config=${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
  `})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},40413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","title":"serviceAccountHardWayComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353);const l={},d=void 0,u={},h=[];function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{language:"bash",children:c.A`
  openssl genpkey \\
    -algorithm RSA \\
    -out ${i.$.kubernetesSA.keyPath} \\
    -pkeyopt rsa_keygen_bits:2048
`}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  openssl rsa \\
    -pubout \\
    -in ${i.$.kubernetesSA.keyPath} \\
    -out ${i.$.kubernetesSA.crtPath}
`})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},40439:(e,t,n)=>{n.d(t,{Y:()=>o});n(96540);var s=n(53981),r=n(74848);const o=e=>{let{src:t}=e;return(0,r.jsx)(s.l,{options:{Carousel:{infinite:!1}},children:(0,r.jsx)("a",{"data-fancybox":"gallery",href:t,children:(0,r.jsx)("img",{src:t})})})}},41131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(87464),d=n(62774);const u={},h=void 0,p={},m=[];function b(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(l.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
      ---
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
          enabled: false
        webhook:
          cacheTTL: 0s
          enabled: true
        x509:
          clientCAFile: /etc/kubernetes/pki/ca.crt
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - 29.64.0.10
      clusterDomain: cluster.local
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 0s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: 10248
      httpCheckFrequency: 0s
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      memorySwap: {}
      nodeStatusReportFrequency: 0s
      nodeStatusUpdateFrequency: 0s
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      shutdownGracePeriod: 0s
      shutdownGracePeriodCriticalPods: 0s
      staticPodPath: /etc/kubernetes/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      volumeStatsAggPeriod: 0s
      EOF
    `})]}),(0,r.jsxs)(l.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          apiVersion: kubelet.config.k8s.io/v1beta1
          authentication:
            anonymous:
              enabled: false
            webhook:
              cacheTTL: 0s
              enabled: true
            x509:
              clientCAFile: /etc/kubernetes/pki/ca.crt
          authorization:
            mode: Webhook
            webhook:
              cacheAuthorizedTTL: 0s
              cacheUnauthorizedTTL: 0s
          cgroupDriver: systemd
          clusterDNS:
          - 29.64.0.10
          clusterDomain: cluster.local
          containerRuntimeEndpoint: ""
          cpuManagerReconcilePeriod: 0s
          evictionPressureTransitionPeriod: 0s
          fileCheckFrequency: 0s
          healthzBindAddress: 127.0.0.1
          healthzPort: 10248
          httpCheckFrequency: 0s
          imageMaximumGCAge: 0s
          imageMinimumGCAge: 0s
          kind: KubeletConfiguration
          logging:
            flushFrequency: 0
            options:
              json:
                infoBufferSize: "0"
              text:
                infoBufferSize: "0"
            verbosity: 0
          memorySwap: {}
          nodeStatusReportFrequency: 0s
          nodeStatusUpdateFrequency: 0s
          resolvConf: /run/systemd/resolve/resolv.conf
          rotateCertificates: true
          runtimeRequestTimeout: 0s
          shutdownGracePeriod: 0s
          shutdownGracePeriodCriticalPods: 0s
          staticPodPath: /etc/kubernetes/manifests
          streamingConnectionIdleTimeout: 0s
          syncFrequency: 0s
          volumeStatsAggPeriod: 0s
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},42127:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>i});var s=n(74848),r=n(28453),o=n(7478),a=n(1775),c=n(60513);const i=[];function l(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f kubeconfigs"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig all \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:c.A`
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},42267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){return(0,r.jsx)(c.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},42567:(e,t,n)=>{n.d(t,{m:()=>s});const s={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},42750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var s=n(90725),r=n(74848),o=n(28453),a=(n(31798),n(7478),n(63770),n(35904),n(83820),n(13788),n(44692),n(62943),n(23082),n(21305),n(11010),n(96984),n(49268),n(32613),n(2214),n(91591),n(19979),n(66144),n(67996),n(72972),n(86969),n(3806),n(54591),n(44917),n(78862),n(30158),n(84740));n(40439),n(19912);const c={title:"Kubernetes The Hard Way",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-the-hard-way",authors:[{name:"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440",url:"https://t.me/bezumniy_kot_work",image_url:"https://avatars.githubusercontent.com/u/107264732?v=4",socials:{github:"FR-Solution"}}],tags:["Kubernetes","Hard-Way"]},i=void 0,l={authorsImageUrls:[void 0]},d=[];function u(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:(0,r.jsxs)(t.p,{children:["Kubernetes The Hard Way ",(0,r.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,r.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"\u0412\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u0435\u0440\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439 \u043f\u043e Kubernetes \u0432 \u043d\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."}),"\n",(0,r.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,r.jsxs)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:[(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043e\u0431\u0449\u0438\u0439 \u043e\u043f\u044b\u0442 \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u044f Kubernetes \u0431\u0435\u0437\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a\n",(0,r.jsx)("code",{children:"kubeadm"}),". \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u0442\u0441\u044f \u0441 \u043d\u0430\u0448\u0435\u0439\n\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0432\u0435\u0434\u0451\u043c \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u043c \u0438\n\u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f\u043c ",(0,r.jsx)("code",{children:"IAC"}),"."]})}),(0,r.jsx)("p",{children:(0,r.jsxs)(t.p,{children:["\u0412\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f, \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d\u043d\u0430\u044f \u0434\u0430\u043b\u0435\u0435, \u0432 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\n",(0,r.jsx)("code",{children:"kubeadm"}),". \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435, \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0441\u043b\u043e\u0436\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u2014 \u0441\u043e\u0431\u0440\u0430\u043d\n\u043b\u0438 \u043e\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)("code",{children:"kubeadm"})," \u0438\u043b\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e."]})})]}),(0,r.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"-6rem"},children:(0,r.jsx)("img",{src:`${(0,a.I)()}img/commics/monkey-user/k8s.png`,alt:"commics",style:{width:"90%",maxWidth:"330px",filter:"drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},43291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no    `})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},43707:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>i});var s=n(74848),r=n(28453),o=n(7478),a=n(1775),c=n(60513);const i=[];function l(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,s.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm join phase control-plane-prepare certs \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:c.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [217.114.0.145 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [217.114.0.145 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com master-3.my-first-cluster.example.com] and IPs [29.64.0.1 217.114.0.145 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Valid certificates and keys now exist in "/etc/kubernetes/pki"
  [certs] Using the existing "sa" key
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},44692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesComponent","title":"allCertificatesComponent","description":"\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u2014 \u044d\u0442\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b, \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 Kubernetes. \u041e\u043d\u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044e, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0438 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438, \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438.","source":"@site/docs/tech-docs/kubernetes/certificates/components/allCertificatesComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesComponent","permalink":"/tech-docs/kubernetes/certificates/components/allCertificatesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(10284),c=n(62222),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u2014 \u044d\u0442\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b, \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 Kubernetes. \u041e\u043d\u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 ",(0,r.jsx)(t.strong,{children:"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u044e, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0438 \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})," \u043f\u0440\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438, \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",(0,r.jsx)(t.strong,{children:"\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 (PKI)"})," \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435, \u0441\u0440\u043e\u043a\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0435\u043c \u0446\u0435\u043d\u0442\u0440\u0435 (CA), \u0432\u044b\u0434\u0430\u0432\u0448\u0435\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes (API-\u0441\u0435\u0440\u0432\u0435\u0440, kubelet, controller-manager \u0438 \u0434\u0440.)."}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(i.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(i.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},44917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/allServiceStartComponent","title":"allServiceStartComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0443\u0441\u043a Kubelet \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 systemd unit. \u041e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 kubelet, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0436\u0431\u044b kubelet.service, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/allServiceStartComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/allServiceStartComponent","permalink":"/tech-docs/kubernetes/components/kubelet/allServiceStartComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(45936),c=n(88373),i=n(67359),l=n(41131),d=n(87464),u=n(62774),h=n(60513),p=n(1775);const m={},b=void 0,k={},f=[...l.toc,...i.toc,...a.toc,...l.toc,...i.toc,...c.toc];function g(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0443\u0441\u043a Kubelet \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 systemd unit. \u041e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 kubelet, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0436\u0431\u044b kubelet.service, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0430\u043c\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430."}),"\n"]}),"\n",(0,r.jsxs)(u.A,{groupId:"phase",children:[(0,r.jsx)(d.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u043f\u0443\u0441\u043a/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(u.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"HardWay",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043b\u0441\u044f ",(0,r.jsx)(t.code,{children:"Kubelet"}),"."]}),"\n"]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubelet default config"}),(0,r.jsx)(l.default,{})]}),(0,r.jsx)(i.default,{})]}),(0,r.jsx)(d.A,{value:"Kubeadm",children:(0,r.jsx)(a.default,{})})]})]})}),(0,r.jsx)(d.A,{value:"join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u043f\u0443\u0441\u043a/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(u.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"HardWay",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ",(0,r.jsx)(t.code,{children:"Kubelet"}),"."]}),"\n"]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Kubelet default config"}),(0,r.jsx)(l.default,{})]}),(0,r.jsx)(p.A,{language:"bash",children:h.A`
            cat <<EOF > /etc/kubernetes/bootstrap-kubelet.conf
            apiVersion: v1
            clusters:
            - cluster:
                certificate-authority-data: $(base64 -w 0 /etc/kubernetes/pki/ca.crt)
                server: https://api.my-first-cluster.example.com:6443
              name: my-first-cluster
            contexts:
            - context:
                cluster: my-first-cluster
                user: tls-bootstrap-token-user
              name: tls-bootstrap-token-user@kubernetes
            current-context: tls-bootstrap-token-user@kubernetes
            kind: Config
            preferences: {}
            users:
            - name: tls-bootstrap-token-user
              user:
                token: fjt9ex.lwzqgdlvoxtqk4yw
            EOF
          `}),(0,r.jsx)(i.default,{})]}),(0,r.jsx)(d.A,{value:"Kubeadm",children:(0,r.jsx)(c.default,{})})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},45199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>T,default:()=>w,frontMatter:()=>I,metadata:()=>s,toc:()=>R});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","title":"allKubeconfigsAppsJoinComponent","description":"Super Admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","permalink":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(16812),c=n(87935),i=n(59256),l=n(27588),d=n(33901),u=n(34759),h=n(97468),p=n(16728),m=n(66685),b=n(38816),k=n(29648),f=n(23831),g=n(62376),x=n(7915),v=n(74036),j=n(88869),y=n(7109),A=n(31773),C=n(99647),$=n(80851),S=n(67441),P=n(8508),E=n(87464),N=n(62774);const I={},T=void 0,M={},R=[...a.toc,...c.toc,...i.toc,...S.RM,...l.toc,...d.toc,...u.toc,...h.toc,...S.RM,...p.toc,...m.toc,...b.toc,...k.toc,...S.RM,...f.toc,...g.toc,...x.toc,...v.toc,...S.RM,...j.toc,...y.toc,...A.toc,...C.toc,...S.RM,...$.toc];function O(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(N.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(E.A,{value:"Super Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,r.jsxs)(N.A,{groupId:"install-type",children:[(0,r.jsxs)(E.A,{value:"HardWay",children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(c.default,{}),(0,r.jsx)(i.default,{})]}),(0,r.jsxs)(E.A,{value:"Kubeadm",children:[(0,r.jsx)(S.Ay,{}),(0,r.jsx)(l.default,{})]})]})]})}),(0,r.jsx)(E.A,{value:"Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,r.jsxs)(N.A,{groupId:"install-type",children:[(0,r.jsxs)(E.A,{value:"HardWay",children:[(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(h.default,{})]}),(0,r.jsxs)(E.A,{value:"Kubeadm",children:[(0,r.jsx)(S.Ay,{}),(0,r.jsx)(p.default,{})]})]})]})}),(0,r.jsx)(E.A,{value:"Controller",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,r.jsxs)(N.A,{groupId:"install-type",children:[(0,r.jsxs)(E.A,{value:"HardWay",children:[(0,r.jsx)(m.default,{}),(0,r.jsx)(b.default,{}),(0,r.jsx)(k.default,{})]}),(0,r.jsxs)(E.A,{value:"Kubeadm",children:[(0,r.jsx)(S.Ay,{}),(0,r.jsx)(f.default,{})]})]})]})}),(0,r.jsx)(E.A,{value:"Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,r.jsxs)(N.A,{groupId:"install-type",children:[(0,r.jsxs)(E.A,{value:"HardWay",children:[(0,r.jsx)(g.default,{}),(0,r.jsx)(x.default,{}),(0,r.jsx)(v.default,{})]}),(0,r.jsxs)(E.A,{value:"Kubeadm",children:[(0,r.jsx)(S.Ay,{}),(0,r.jsx)(j.default,{})]})]})]})}),(0,r.jsx)(E.A,{value:"Kubelet",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,r.jsx)(P.A,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,r.jsxs)(N.A,{groupId:"install-type",children:[(0,r.jsxs)(E.A,{value:"HardWay",children:[(0,r.jsx)(y.default,{}),(0,r.jsx)(A.default,{}),(0,r.jsx)(C.default,{})]}),(0,r.jsxs)(E.A,{value:"Kubeadm",children:[(0,r.jsx)(S.Ay,{}),(0,r.jsx)($.default,{})]})]})]})})]})}function w(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(O,{...e})}):O(e)}},45749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  true
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},45879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","title":"allSysctlsComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u044f\u0434\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e sysctl, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.","source":"@site/docs/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","permalink":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(78645);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u044f\u0434\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e sysctl, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.\n\u0412\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044e \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0434\u0430\u043c\u0438 \u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 iptables \u0434\u043b\u044f \u043c\u043e\u0441\u0442\u043e\u0432. \u042d\u0442\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u043a\u0438 IP-\u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u043e\u0442\u043e\u043a\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 sysctl"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},45936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","title":"systemdUnitStartInit","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","permalink":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm."}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a kubelet"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-start \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Starting the kubelet
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},46567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${c.M.virtualMachineLocalAddress.value}
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.etcdServer.crtConf}
  [ req ]
  default_bits        = ${a.$.etcdServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = localhost
  DNS.2 = $\{HOST_NAME}
  DNS.3 = $\{FULL_HOST_NAME}
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = $\{FULL_HOST_NAME}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth,clientAuth
  subjectAltName=@alt_names
  EOF
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdServer.keyPath} ${a.$.etcdServer.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdServer.keyPath} \\
    -out ${a.$.etcdServer.csrPath} \\
    -config ${a.$.etcdServer.crtConf}
  `}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.etcdCA.crtPath} \\
    -CAkey ${a.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.etcdServer.csrPath} \\
    -out ${a.$.etcdServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.etcdServer.crtConf}
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},47279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(66832),l=n(51835),d=n(13075),u=n(12385);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},47442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig admin \\
    --config=${a.M.kubernetesBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},47618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/crictl/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/crictl/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t crictl-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current crictl version...
  ***** [INFO] Current: none, Target: ${i.M.crictl.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating crictl to version ${i.M.crictl.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading crictl...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing crictl...
  ***** [INFO] crictl successfully updated to ${i.M.crictl.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'crictl$'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rwxr-xr-x  1 1001  127  58376628 Apr 18  2024 crictl
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},47727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/kubeadmJoin","title":"kubeadmJoin","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/etcd/kubeadmJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/kubeadmJoin","permalink":"/tech-docs/kubernetes/components/etcd/kubeadmJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-join etcd \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${a.M.kubernetesBaseFolderPath.value}"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},48231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesServer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},49268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-rbac/allUploadRbacComponent","title":"allUploadRbacComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 (RBAC), \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0439 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 kubeadm join. \u0417\u0434\u0435\u0441\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f Roles/ClusterRoles, RoleBindings/ClusterRoleBindings \u0438 Bootstrap-\u0442\u043e\u043a\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043d\u043e\u0432\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-rbac/allUploadRbacComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-rbac","slug":"/tech-docs/kubernetes/additional-setup/upload-rbac/allUploadRbacComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-rbac/allUploadRbacComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(92198),c=n(87464),i=n(62774);const l={},d=void 0,u={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 (RBAC), \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0439 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 kubeadm join. \u0417\u0434\u0435\u0441\u044c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f Roles/ClusterRoles, RoleBindings/ClusterRoleBindings \u0438 Bootstrap-\u0442\u043e\u043a\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043d\u043e\u0432\u044b\u043c \u0443\u0437\u043b\u0430\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443, \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430."}),"\n"]}),"\n",(0,r.jsx)(i.A,{groupId:"phase",children:(0,r.jsx)(c.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 Kubeadm"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},49717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-server \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase  control-plane scheduler \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Kube API
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(61176);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},51144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdServer/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusKubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdServer/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},51835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [29.64.0.1 10.0.0.16]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},52707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","title":"allModprobeComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.","source":"@site/docs/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","permalink":"/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(86);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes.\n\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e modprobe \u0438 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u043c\u043e\u0434\u0443\u043b\u0435\u0439 overlay \u0438 br_netfilter, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0445 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u042d\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a, iptables \u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0445 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u043e\u0432."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u044f\u0434\u0440\u0430"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(27590),l=n(71690),d=n(29924),u=n(76039);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},53434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","title":"uploadCAComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 Secret, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(1775),l=n(60513),d=n(7478);const u={},h=void 0,p={},m=[];function b(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,r.jsx)(t.code,{children:"Secret"}),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043f\u043e\u0434\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u043e\u043b\u0435\u0432\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0432\u044b\u0434\u0430\u0447\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u043a\u0440\u0435\u0442\u0443 kubeadm-certs. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043b\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043c\u043e\u0433\u043b\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0447\u0435\u0440\u0435\u0437 Kubernetes API \u043f\u0440\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443. \u0420\u043e\u043b\u044c \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u0433\u0440\u0443\u043f\u043f\u043e\u0439 ${AUTH_EXTRA_GROUPS}, \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u043f\u0430\u0434\u0430\u0435\u0442 kubeadm \u043f\u0440\u0438 join."}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: Role
      metadata:
        name: kubeadm:kubeadm-certs
        namespace: kube-system
      rules:
      - apiGroups:
        - ""
        resourceNames:
        - kubeadm-certs
        resources:
        - secrets
        verbs:
        - get
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: RoleBinding
      metadata:
        name: kubeadm:kubeadm-certs
        namespace: kube-system
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: Role
        name: kubeadm:kubeadm-certs
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: $\{AUTH_EXTRA_GROUPS}
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${d.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      cat <<EOF > ${d.M.kubernetesBaseFolderPath.value}/openssl/encrypt.py
      #!/usr/bin/env python3
      import sys, base64, os
      from cryptography.hazmat.primitives.ciphers.aead import AESGCM

      key = bytes.fromhex(sys.argv[1])
      path = sys.argv[2]

      with open(path, "rb") as f:
          data = f.read()

      nonce = os.urandom(12)
      aesgcm = AESGCM(key)
      ct = aesgcm.encrypt(nonce, data, None)

      # kubeadm ожидает: nonce + ciphertext (включая auth tag)
      payload = nonce + ct
      print(base64.b64encode(payload).decode())
      EOF
    `}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      cat <<'EOF' > ${d.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${d.M.kubernetesBaseFolderPath.value}/pki"
      PY_SCRIPT="$(dirname "$0")/encrypt.py"

      declare -A files=(
        ["ca.crt"]="$CERT_PATH/ca.crt"
        ["ca.key"]="$CERT_PATH/ca.key"
        ["etcd-ca.crt"]="$CERT_PATH/etcd/ca.crt"
        ["etcd-ca.key"]="$CERT_PATH/etcd/ca.key"
        ["front-proxy-ca.crt"]="$CERT_PATH/front-proxy-ca.crt"
        ["front-proxy-ca.key"]="$CERT_PATH/front-proxy-ca.key"
        ["sa.key"]="$CERT_PATH/sa.key"
        ["sa.pub"]="$CERT_PATH/sa.pub"
      )

      KEY="$\{CERTIFICATE_UPLOAD_KEY:-}"
      if [[ -z "$KEY" ]]; then
        echo "[ERROR] CERTIFICATE_UPLOAD_KEY is not set"
        exit 1
      fi

      echo "[INFO] Using certificate key: $KEY"

      TMP_DIR=$(mktemp -d)
      SECRET_FILE="$TMP_DIR/secret.yaml"

      cat <<EOF_SECRET > "$SECRET_FILE"
      apiVersion: v1
      kind: Secret
      metadata:
        name: kubeadm-certs
        namespace: kube-system
      type: Opaque
      data:
      EOF_SECRET

      for name in "$\{!files[@]}"; do
        path="$\{files[$name]}"
        if [[ ! -f "$path" ]]; then
          echo "[WARN] Skipping missing file: $path"
          continue
        fi
        echo "[INFO] Encrypting $name..."
        b64=$(python3 "$PY_SCRIPT" "$KEY" "$path")
        echo "  $name: $b64" >> "$SECRET_FILE"
      done

      echo "[INFO] Applying secret to cluster..."
      kubectl apply -f "$SECRET_FILE"

      echo "[INFO] Secret successfully uploaded."
      EOF
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(i.A,{language:"yaml",children:l.A`
      chmod +x ${d.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),(0,r.jsx)(i.A,{language:"yaml",children:l.A`
      ${d.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"yaml",children:l.A`
  [INFO] Using certificate key: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  [INFO] Encrypting front-proxy-ca.key...
  [INFO] Encrypting sa.key...
  [INFO] Encrypting front-proxy-ca.crt...
  [INFO] Encrypting etcd-ca.crt...
  [INFO] Encrypting sa.pub...
  [INFO] Encrypting ca.key...
  [INFO] Encrypting ca.crt...
  [INFO] Encrypting etcd-ca.key...
  [INFO] Applying secret to cluster...
  secret/kubeadm-certs configured
  [INFO] Secret successfully uploaded.
`})})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase  upload-certs \\
        --config=${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},53981:(e,t,n)=>{n.d(t,{l:()=>a});var s=n(96540),r=n(60197),o=n(74848);const a=e=>{let{delegate:t,options:n,children:a}=e;const c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=c.current,s=t||"[data-fancybox]",o=n||{};return r.lX.bind(e,s,o),()=>{r.lX.unbind(e),r.lX.close()}})),(0,o.jsx)("div",{ref:c,children:a})}},53982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(4391),c=n(4547);const i={},l=void 0,d={},u=[...a.toc,...c.toc];function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(c.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},54591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponent","title":"allBaseOSSetupComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0443\u0437\u043b\u043e\u0432 Kubernetes \u043f\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.","source":"@site/docs/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponent","permalink":"/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(86715);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0435 \u0443\u0437\u043b\u043e\u0432 Kubernetes \u043f\u0435\u0440\u0435\u0434 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432.\n\u0412 \u043d\u0451\u043c \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u0441\u043c\u0435\u043d\u0430 \u0438\u043c\u0435\u043d\u0438 \u0445\u043e\u0441\u0442\u0430 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0443\u0442\u0438\u043b\u0438\u0442. \u042d\u0442\u0438 \u0448\u0430\u0433\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b kubelet \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0411\u0430\u0437\u043e\u0432\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},55377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `ETCD CA`.","source":"@site/docs/tech-docs/etcd/certificates/center-authority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/main","permalink":"/tech-docs/etcd/certificates/center-authority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(21543),l=n(1378);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,r.jsx)(t.code,{children:"ETCD CA"}),"."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},55609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(36189),l=n(80614),d=n(17810),u=n(16136);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},56201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t kubelet-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current kubelet version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubelet to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubelet...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing kubelet...
  ***** [INFO] kubelet successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'kubelet$'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rwxr-xr-x  1 root root 100125080 Aug 14  2024 kubelet
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},56587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer/checks","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusOpenssl","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.etcdPeer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},56721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(16812),l=n(79971),d=n(87935),u=n(59256),h=n(27588);const p={},m=void 0,b={},k=[...i.toc,...d.toc,...u.toc,...l.toc,...h.toc];function f(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(h.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},56960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(i.A,{value:"Bash",children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target local-fs.target containerd-install.service runc-install.service
      Wants=containerd-install.service runc-install.service

      [Service]
      ExecStartPre=-/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd

      Type=notify
      Delegate=yes
      KillMode=process
      Restart=always
      RestartSec=5
      LimitNPROC=infinity
      LimitCORE=infinity
      LimitNOFILE=infinity
      TasksMax=infinity
      OOMScoreAdjust=-999

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,r.jsxs)(i.A,{value:"Cloud-init",children:[(0,r.jsx)(c.A,{language:"yaml",children:a.A`
        # write_files:
        - path: /usr/lib/systemd/system/containerd.service
          owner: root:root
          permissions: '0644'
          content: |
            [Unit]
            Description=containerd container runtime
            Documentation=https://containerd.io
            After=network.target local-fs.target containerd-install.service runc-install.service
            Wants=containerd-install.service runc-install.service

            [Service]
            ExecStartPre=-/sbin/modprobe overlay
            ExecStart=/usr/local/bin/containerd

            Type=notify
            Delegate=yes
            KillMode=process
            Restart=always
            RestartSec=5
            LimitNPROC=infinity
            LimitCORE=infinity
            LimitNOFILE=infinity
            TasksMax=infinity
            OOMScoreAdjust=-999

            [Install]
            WantedBy=multi-user.target
      `}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},57502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkBIN","permalink":"/tech-docs/kubernetes/components/kubelet/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(74823),c=n(56201);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},58115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/crictl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkBIN","permalink":"/tech-docs/kubernetes/components/crictl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(17335),c=n(47618);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},58531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(60513),l=n(1775);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(c.A,{children:[(0,r.jsx)(a.A,{value:"master-2",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-2
      `})}),(0,r.jsx)(a.A,{value:"master-3",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},58603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","permalink":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(59762);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesSuperAdminClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},59288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},59762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd/payload","slug":"/tech-docs/etcd/components/etcd/payload/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(87464),l=n(62774),d=n(42567),u=n(63770);const h={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${u.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${d.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${d.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${d.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${d.m.etcdctl.path}"


      LOG_TAG="etcd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."

      CURRENT_VERSION=$($INSTALL_PATH/etcd --version 2>/dev/null | grep 'etcd Version:' | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating etcd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
        curl -fsSL -o "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "etcd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
      fi
    `}},p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(i.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/etcd
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${u.M.etcdctl.value}"
      REPOSITORY="${d.m.etcdctl.baseUrl}"
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${h.data.value}
      EOF
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/etcd-install.service
      [Unit]
      Description=Install and update in-cloud component etcd
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/etcd/download.env
      ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,r.jsxs)(i.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${u.M.etcdctl.value}"
          REPOSITORY="${d.m.etcdctl.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${h.data.value}
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /usr/lib/systemd/system/etcd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component etcd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/etcd/download.env
          ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},59968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(74279),l=n(74124),d=n(68142),u=n(43291);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},60253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(39189);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},61122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/runc/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/checkBIN","permalink":"/tech-docs/kubernetes/components/runc/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(53982);const c={},i=void 0,l={},d=[...a.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},61130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","title":"examinationKubeadmComponent","description":"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm","source":"@site/docs/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","permalink":"/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u0445 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm certs check-expiration
`}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},61176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.containerd.path}"


      LOG_TAG="containerd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."

      CURRENT_VERSION=$($INSTALL_PATH/containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating containerd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
        curl -fsSL -o "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "containerd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        mkdir -p /etc/default/containerd
      `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${l.M.containerd.value}"
        REPOSITORY="${i.m.containerd.baseUrl}"
        EOF
      `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${d.data.value}
        EOF
      `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        cat <<EOF > /usr/lib/systemd/system/containerd-install.service
        [Unit]
        Description=Install and update in-cloud component containerd
        After=network.target
        Wants=network-online.target

        [Service]
        Type=oneshot
        EnvironmentFile=-/etc/default/containerd/download.env
        ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
        EOF
      `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.containerd.value}"
          REPOSITORY="${i.m.containerd.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${d.data.value}
    `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /usr/lib/systemd/system/containerd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component containerd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/containerd/download.env
          ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},61805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(11321),l=n(18727),d=n(29852),u=n(59288);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},61888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","title":"serviceAccountComponent","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(40413),l=n(20228);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},62222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>O,default:()=>_,frontMatter:()=>R,metadata:()=>s,toc:()=>L});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","title":"allCertificatesAppsJoinComponent","description":"Kubelet server","source":"@site/docs/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","permalink":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(27590),c=n(29924),i=n(76039),l=n(74279),d=n(68142),u=n(43291),h=n(38230),p=n(48231),m=n(8755),b=n(11321),k=n(29852),f=n(59288),g=n(66832),x=n(13075),v=n(12385),j=n(36189),y=n(17810),A=n(16136),C=n(46567),$=n(16158),S=n(51144),P=n(19529),E=n(56587),N=n(573),I=n(43707),T=n(87464),M=n(62774);const R={},O=void 0,w={},L=[...a.toc,...c.toc,...I.RM,...i.toc,...l.toc,...d.toc,...I.RM,...u.toc,...h.toc,...p.toc,...I.RM,...m.toc,...g.toc,...x.toc,...I.RM,...v.toc,...b.toc,...k.toc,...I.RM,...f.toc,...j.toc,...y.toc,...I.RM,...A.toc,...C.toc,...$.toc,...I.RM,...S.toc,...P.toc,...E.toc,...I.RM,...N.toc];function F(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(M.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(T.A,{value:"Kubelet Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(c.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(i.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"API -> Etcd",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(u.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"API -> Kubelet",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(h.default,{}),(0,r.jsx)(p.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(m.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"API Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(g.default,{}),(0,r.jsx)(x.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(v.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"Proxy -> API",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(b.default,{}),(0,r.jsx)(k.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(f.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"Etcd Client",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(j.default,{}),(0,r.jsx)(y.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(A.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"Etcd Server",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(C.default,{}),(0,r.jsx)($.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(S.default,{})]})]})]})}),(0,r.jsx)(T.A,{value:"Etcd Peer",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,r.jsxs)(M.A,{groupId:"install-type",children:[(0,r.jsxs)(T.A,{value:"HardWay",children:[(0,r.jsx)(P.default,{}),(0,r.jsx)(E.default,{})]}),(0,r.jsxs)(T.A,{value:"Kubeadm",children:[(0,r.jsx)(I.Ay,{}),(0,r.jsx)(N.default,{})]})]})]})})]})}function _(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}},62376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesSchedulerClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesSchedulerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesSchedulerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerClient.keyPath} ${a.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesSchedulerClient.keyPath} \\
    -out ${a.$.kubernetesSchedulerClient.csrPath} \\
    -config ${a.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesSchedulerClient.csrPath} \\
    -out ${a.$.kubernetesSchedulerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesSchedulerClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},62943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsComponent","title":"allKubeconfigsComponent","description":"Kubeconfig \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 Kubernetes. \u041e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 API, \u0443\u0447\u0435\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 (\u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0442\u043e\u043a\u0435\u043d\u044b \u0438\u043b\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b) \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\u0445, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445, \u043a\u0430\u043a\u043e\u0439 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f. Kubeconfig \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u0441 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0447\u0435\u0440\u0435\u0437 kubectl \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/certificates/components/allKubeconfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsComponent","permalink":"/tech-docs/kubernetes/certificates/components/allKubeconfigsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(12544),c=n(45199),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Kubeconfig \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 Kubernetes. \u041e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 API, \u0443\u0447\u0435\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 (\u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0442\u043e\u043a\u0435\u043d\u044b \u0438\u043b\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b) \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\u0445, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445, \u043a\u0430\u043a\u043e\u0439 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f. Kubeconfig \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438 \u0441 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u043c \u0447\u0435\u0440\u0435\u0437 kubectl \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0451\u043c ",(0,r.jsx)(t.code,{children:"kubeconfig"}),"-\u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u042d\u0442\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u043e\u0435 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(i.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 kubeconfig \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(i.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439 kubeconfig \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},63217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t containerd-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current containerd version...
  ***** [INFO] Current: none, Target: ${i.M.containerd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating containerd to version ${i.M.containerd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading containerd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Extracting files...
  ***** [INFO] Installing binaries...
  ***** [INFO] Containerd successfully updated to ${i.M.containerd.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep -E "containerd|ctr"
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd
  -rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim
  -rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2
  -rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},63330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkBIN","permalink":"/tech-docs/kubernetes/components/containerd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(5064);const c={},i=void 0,l={},d=[...a.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},63459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(63577);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},63577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/configFiles","title":"configFiles","description":"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/configFiles","permalink":"/tech-docs/kubernetes/components/crictl/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(87464),d=n(62774);const u={},h=void 0,p={},m=[];function b(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(l.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/crictl.yaml
      runtime-endpoint: unix://${i.M.criEndpoint.value}
      EOF
    `})]}),(0,r.jsxs)(l.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      - path: /etc/crictl.yaml
        owner: root:root
        permissions: '0644'
        content: |
          runtime-endpoint: unix://${i.M.criEndpoint.value}
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},63770:(e,t,n)=>{n.d(t,{M:()=>s});const s={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},63859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","title":"statusConfigFiles","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e _Kubeadm_ \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubelet (/var/lib/kubelet/config.yaml) \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Kubelet (",(0,r.jsx)(t.code,{children:"/var/lib/kubelet/config.yaml"}),") \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d."]})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
      ls -la ${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
  `}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
      ls -la /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 1721 Feb 19 18:57 /var/lib/kubelet/config.yaml
  `}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 903 Feb 19 22:10 /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},64042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPInitComponent","title":"allStaticPodsCPInitComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsCPInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(82417),c=n(7022),i=n(34283),l=n(87464),d=n(62774);const u={},h=void 0,p={},m=[...a.toc,...c.toc,...i.toc];function b(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 Kubernetes."}),"\n"]}),"\n",(0,r.jsxs)(d.A,{groupId:"Componenet",children:[(0,r.jsx)(l.A,{value:"Kube-API",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube-API"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(l.A,{value:"Kube Controller Manager",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Controller Manager"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})}),(0,r.jsx)(l.A,{value:"Kube Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kube Scheduler"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(i.default,{})]})})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},64645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(22235);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},65867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkComponent","permalink":"/tech-docs/kubernetes/components/kubelet/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(17989),c=n(63859);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},66144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","title":"allServiceAccountComponent","description":"\u0412 Kubernetes ServiceAccount \u2014 \u044d\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443.","source":"@site/docs/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","permalink":"/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(61888),c=n(87464),i=n(62774);const l={},d=void 0,u={},h=[...a.toc];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0412 Kubernetes ",(0,r.jsx)(t.code,{children:"ServiceAccount"})," \u2014 \u044d\u0442\u043e \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443.\n\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u0432 ",(0,r.jsx)(t.code,{children:"kube-apiserver"})," \u0438 ",(0,r.jsx)(t.code,{children:"kube-controller-manager"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,r.jsx)(t.strong,{children:"\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432"})," \u044d\u0442\u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432. \u042d\u0442\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 ",(0,r.jsx)(t.strong,{children:"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c\u043e\u0435"})," \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 \u0438 \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c ",(0,r.jsx)(t.strong,{children:"\u0433\u0440\u0430\u043d\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0438\u043b\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u043b\u044e\u0447, \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e Kubernetes \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043a\u0435\u043d\u044b ",(0,r.jsx)(t.code,{children:"ServiceAccount"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"phase",children:[(0,r.jsx)(c.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 ServiceAccount"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(c.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0438 ServiceAccount"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u042d\u0442\u0430\u043f ",(0,r.jsx)(t.code,{children:"join"})," ",(0,r.jsx)(t.strong,{children:"\u043d\u0435 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u044e\u0447"}),", \u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043b\u044e\u0447, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 \u044d\u0442\u0430\u043f \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 CA."]}),(0,r.jsx)(t.p,{children:"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u043f\u0440\u043e\u0448\u043b\u0438 \u0448\u0430\u0433:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"})}),"\n"]})]})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},66479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/dir","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){return(0,r.jsx)(c.A,{language:"bash",children:a.A`
  mkdir -p /var/run/kubeadm/
`})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},66483:(e,t,n)=>{n.d(t,{L:()=>o});var s=n(6353),r=n(7478);const o={authenticationKubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${s.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${s.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${s.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${s.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${s.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},66685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesControllerManagerClient.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesControllerManagerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${a.$.kubernetesControllerManagerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerClient.keyPath} ${a.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${a.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${a.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesControllerManagerClient.csrPath} \\
    -out ${a.$.kubernetesControllerManagerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesControllerManagerClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},66832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${c.M.clusterName.value}
  export BASE_DOMAIN=${c.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${c.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${c.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${c.M.clusterName.value}.${c.M.kubernetesBaseDomain.value}
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesServer.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = kubernetes
  DNS.2 = kubernetes.default
  DNS.3 = kubernetes.default.svc
  DNS.4 = kubernetes.default.svc.$\{CLUSTER_DOMAIN}
  DNS.5 = $\{FULL_HOST_NAME}
  DNS.6 = $\{CLUSTER_API_ENDPOINT}
  IP.1  = ${c.M.virtualMachineLocalAddress.value}
  IP.2  = 127.0.0.1

  [ dn ]
  CN = ${a.$.kubernetesServer.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesServer.keyPath} ${a.$.kubernetesServer.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesServer.keyPath} \\
    -out    ${a.$.kubernetesServer.csrPath} \\
    -config ${a.$.kubernetesServer.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesServer.csrPath} \\
    -out ${a.$.kubernetesServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesServer.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},67069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/main","title":"main","description":"","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(19529),l=n(89982),d=n(56587),u=n(573);const h={},p=void 0,m={},b=[...i.toc,...d.toc,...l.toc,...u.toc];function k(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},67359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","title":"systemdUnitStart","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","permalink":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(87464),d=n(62774),u=n(97697);const h={},p=void 0,m={},b=[...u.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsx)(l.A,{value:"Bash",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
        cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${i.M.kubernetesClusterDomain.value} --cluster-dns=${i.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,r.jsx)(l.A,{value:"Cloud-init",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
        - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${i.M.kubernetesClusterDomain.value} --cluster-dns=${i.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 Static Pods."}),"\n"]}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl start kubelet
  `}),"\n",(0,r.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 systemd unit"}),(0,r.jsx)(u.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},67441:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>i});var s=n(74848),r=n(28453),o=n(7478),a=n(1775),c=n(60513);const i=[];function l(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,s.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 kubeconfigs \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm join phase control-plane-prepare kubeconfig \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:c.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubeconfig] Generating kubeconfig files
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},67716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(7109),l=n(11946),d=n(31773),u=n(99647),h=n(80851);const p={},m=void 0,b={},k=[...i.toc,...d.toc,...u.toc,...l.toc,...h.toc];function f(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(h.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},67996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/allExaminationComponent","title":"allExaminationComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438 \u043a\u043b\u044e\u0447\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u0434\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/certificates/examination/allExaminationComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/allExaminationComponent","permalink":"/tech-docs/kubernetes/certificates/examination/allExaminationComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(61130),c=n(13766),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...c.toc,...a.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438 \u043a\u043b\u044e\u0447\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u0434\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes."}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0431\u043b\u043e\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsx)(i.A,{value:"HardWay",children:(0,r.jsx)(c.default,{})}),(0,r.jsx)(i.A,{value:"Kubeadm",children:(0,r.jsx)(a.default,{})})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},68142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesEtcdClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no    `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},68890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(33901),l=n(47442),d=n(34759),u=n(97468),h=n(16728);const p={},m=void 0,b={},k=[...i.toc,...d.toc,...u.toc,...l.toc,...h.toc];function f(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(h.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},69536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  containerd --version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},69613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubectl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/checkBIN","permalink":"/tech-docs/kubernetes/components/kubectl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(98905);const c={},i=void 0,l={},d=[...a.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},69839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyInitComponent","title":"componentsReadyInitComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/componentsReadyInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyInitComponent","permalink":"/tech-docs/kubernetes/components/componentsReadyInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm init phase preflight --dry-run \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),"\n"]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    [preflight] Running pre-flight checks
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d \u0432 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a:"}),"\n"]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},70218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/etcd/components/etcd/checks","slug":"/tech-docs/etcd/components/etcd/checks/statusBinVersion","permalink":"/tech-docs/etcd/components/etcd/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  etcd --version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  etcd Version: 3.5.5
  Git SHA: 19002cfc6
  Go Version: go1.16.15
  Go OS/Arch: linux/amd64
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},70417:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>i});var s=n(74848),r=n(28453),o=n(7478),a=n(1775),c=n(60513);const i=[];function l(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"danger",children:(0,s.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u044b \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm join phase control-plane-prepare control-plane \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:c.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},70667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/checks","slug":"/tech-docs/kubernetes/components/kubeadm/checks/statusBinFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(63770);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  journalctl -t kubeadm-installer
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"text",children:a.A`
  ***** [INFO] Checking current kubeadm version...
  ***** [INFO] Current: none, Target: ${i.M.kubernetes.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating kubeadm to version ${i.M.kubernetes.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading kubeadm...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Extracting files...
  ***** [INFO] Installing binaries...
  ***** [INFO] kubeadm successfully updated to ${i.M.kubernetes.value}.
`})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'kubeadm$'
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b:::info",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rwxr-xr-x  1 root root  50253976 Aug 14  2024 kubeadm
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  tree /etc/containerd/
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>j,frontMatter:()=>k,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(10119),l=n(25292),d=n(7478),u=n(63770),h=n(76519),p=n(86613),m=n(87464),b=n(62774);const k={},f=void 0,g={},x=[];function v(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,r.jsxs)(b.A,{groupId:"install-type",children:[(0,r.jsxs)(m.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
        export CLUSTER_NAME='${d.M.clusterName.value}'
        export BASE_DOMAIN='${d.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${d.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${d.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${d.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${i.D.initialAdvertisePeerUrls.value}"
        export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
      `}),(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430"}),(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u044d\u0442\u0430\u043f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 ",(0,r.jsx)(t.code,{children:"addons"})," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f."]})}),(0,r.jsx)(c.A,{children:a.A`
        cat <<EOF > ${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
        ---
        apiVersion: kubeadm.k8s.io/v1beta3
        kind: InitConfiguration
        skipPhases:
          - addon
        bootstrapTokens:
          - token: "fjt9ex.lwzqgdlvoxtqk4yw"
            description: "kubeadm bootstrap token"
            ttl: "24h"
        certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
        nodeRegistration:
          imagePullPolicy: IfNotPresent
          taints: null
          kubeletExtraArgs:
            # -> Включить, если управляете состоянием через Cloud Controller Manager
            # cloud-provider: external
            config: "${d.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${d.M.kubernetesClusterDomain.value}
            cluster-dns: "${d.M.kubernetesDNSAddress.value}"
          # name: '$\{FULL_HOST_NAME}'
          ignorePreflightErrors:
            # > При поэтапной сборке кластера, а не выполнении единой команды,
            # > необходимо указать исключения в параметре ignorePreflightErrors,
            # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
            # > Для этого в nodeRegistration добавляются следующие исключения:
            - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
            - FileAvailable--etc-kubernetes-manifests-etcd.yaml
        ---
        ${h.Q.data.value}
        EOF
      `})]}),(0,r.jsx)(m.A,{value:"Cloud-init",children:(0,r.jsx)(c.A,{children:a.A`
        - path: ${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
          owner: root:root
          permissions: '0644'
          content: |
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: InitConfiguration
            skipPhases:
              - addon
            bootstrapTokens:
              - token: "fjt9ex.lwzqgdlvoxtqk4yw"
                description: "kubeadm bootstrap token"
                ttl: "24h"
            certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
            nodeRegistration:
              imagePullPolicy: IfNotPresent
              taints: null
              kubeletExtraArgs:
                cloud-provider: external
                config: "${d.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${d.M.kubernetesDNSAddress.value}"

              # TODO тут нужно подумать, нужно ли определение имени узла при инициализации УК
              # name: {{ local_hostname }}

              ignorePreflightErrors:
                # > При поэтапной сборке кластера, а не выполнении единой команды,
                # > необходимо указать исключения в параметре ignorePreflightErrors,
                # > чтобы команда kubeadm init phase preflight выполнялась без препятствий.
                # > Для этого в nodeRegistration добавляются следующие исключения:
                - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
                - FileAvailable--etc-kubernetes-manifests-etcd.yaml
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: ClusterConfiguration

            clusterName: "${d.M.clusterName.value}"
            # TODO нужно указывать VIP LoadBalancer
            controlPlaneEndpoint: {{ local_hostname }}:${l.L.securePort.value}

            imageRepository: "${d.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${d.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${u.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${d.M.baseDockerRegistry.value}"
                dataDir: "/var/lib/etcd"
                extraArgs:
                  ${p.Nu.data.value}
                peerCertSANs:
                  - 127.0.0.1
                serverCertSANs:
                  - 127.0.0.1

            apiServer:
              extraArgs:
                ${p.IL.data.value}

              extraVolumes:
              - name: "k8s-audit"
                hostPath: "/var/log/kubernetes/audit/"
                mountPath: "/var/log/kubernetes/audit/"
                pathType: DirectoryOrCreate
              certSANs:
                - "127.0.0.1"
              timeoutForControlPlane: 4m0s

            controllerManager:
              extraArgs:
                cluster-name: "${d.M.clusterName.value}"
                ${p.Uj.data.value}

            scheduler:
              extraArgs:
                ${p.hZ.data.value}
      `})})]})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},71690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","title":"kubeadm","description":"kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c kubelet.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);const i={},l=void 0,d={},u=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"kubeadm"})," \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c ",(0,r.jsx)(t.code,{children:"kubelet"}),"."]}),(0,r.jsxs)(t.p,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 systemd-\u044e\u043d\u0438\u0442\u0430 ",(0,r.jsx)(t.code,{children:"kubelet"})," \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0432\u044b\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430.\n\u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b:\n",(0,r.jsx)(t.code,{children:"kubectl certificate approve $CERT_NAME"}),"."]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)("h4",{children:"RotateKubeletServerCertificate"}),"\n\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u043e\u0442\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"]})]}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kube-Apiserver"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeAPI/api-settings",children:"Static Pod"})}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  apiServer:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kube-Controller-Manager"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/controllerManager/controller-settings",children:"Static Pod"})}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  controllerManager:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubelet"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycle-settings",children:"Kubelet Custom Config"})}),"\n"]}),"\n",(0,r.jsx)(a.A,{language:"yaml",children:c.A`
  rotateCertificates: true
  featureGates:
    RotateKubeletServerCertificate: true
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0445 \u0441\u0440\u0435\u0434!",type:"danger",children:(0,r.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Cloud Controller Manager (CCM), \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440,\n\u043f\u043e\u043a\u0430 ",(0,r.jsx)(t.code,{children:"CCM"})," \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442 \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"Node"})," \u0430\u0434\u0440\u0435\u0441 \u0432 \u043f\u043e\u043b\u0435 ",(0,r.jsx)(t.code,{children:"INTERNAL_IP"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},71874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/checks","slug":"/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  ls -al ${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 6463 Feb 18 15:20 ${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},72972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/allCertificatesComponent","title":"allCertificatesComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432.","source":"@site/docs/tech-docs/kubernetes/certificates/allCertificatesComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/allCertificatesComponent","permalink":"/tech-docs/kubernetes/certificates/allCertificatesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(43707),c=n(90365),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...c.RM,...a.RM];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b ",(0,r.jsx)(t.strong,{children:"\u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0440\u0443\u0447\u043d\u0443\u044e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432."]})}),"\n",(0,r.jsxs)(l.A,{groupId:"current-master",children:[(0,r.jsx)(i.A,{value:"Init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.Ay,{})]})}),(0,r.jsx)(i.A,{value:"Join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"}),"."]}),"\n"]})]}),(0,r.jsx)(a.Ay,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},74036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesSchedulerClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},74124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},74279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${a.$.kubernetesEtcdClient.crtConf}
    [ req ]
    default_bits        = ${a.$.kubernetesEtcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${a.$.kubernetesEtcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesEtcdClient.keyPath} ${a.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesEtcdClient.keyPath} \\
    -out    ${a.$.kubernetesEtcdClient.csrPath} \\
    -config ${a.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${a.$.etcdCA.crtPath} \\
    -CAkey ${a.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesEtcdClient.csrPath} \\
    -out ${a.$.kubernetesEtcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesEtcdClient.crtConf}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},74823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubelet --version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  Kubernetes v1.30.4
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},76039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453);const a={},c=void 0,i={},l=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{open:!0,className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsxs)(t.p,{children:["kubeadm \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c ",(0,r.jsx)(t.code,{children:"kubelet"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},76519:(e,t,n)=>{n.d(t,{Q:()=>i});var s=n(60513),r=n(25292),o=n(63770),a=n(86613),c=n(7478);const i={data:{value:s.A`
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      clusterName: "$\{CLUSTER_NAME}"
      certificatesDir: ${c.M.kubernetesBaseFolderPath.value}/pki
      controlPlaneEndpoint: $\{INTERNAL_API}:${r.L.securePort.value}
      imageRepository: "${c.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${c.M.kubernetesServiceCIDR.value}
        dnsDomain: ${c.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${o.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${c.M.baseDockerRegistry.value}"
          dataDir: "/var/lib/etcd"
          extraArgs:
            ${a.Nu.data.value}
          peerCertSANs:
            - 127.0.0.1
          serverCertSANs:
            - 127.0.0.1
      apiServer:
        extraArgs:
          ${a.IL.data.value}
        extraVolumes:
        - name: "k8s-audit"
          hostPath: "/var/log/kubernetes/audit/"
          mountPath: "/var/log/kubernetes/audit/"
          readOnly: false
          pathType: DirectoryOrCreate
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${a.Uj.data.value}
      scheduler:
        extraArgs:
          ${a.hZ.data.value}
    `}}},78091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/kubeadmInit","title":"kubeadmInit","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/etcd/kubeadmInit.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/kubeadmInit","permalink":"/tech-docs/kubernetes/components/etcd/kubeadmInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase etcd local \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${a.M.kubernetesBaseFolderPath.value}"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},78645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","title":"sysctlsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:","source":"@site/docs/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","permalink":"/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[{value:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:",id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:4},{value:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-1",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-1",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-2",level:4},{value:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl",id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-3",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-2",level:4}];function m(e){const t={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"\u044d\u0442\u0430\u043f\u044b-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.h4,{id:"\u0441\u0435\u0442\u0435\u0432\u044b\u0435-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),(0,r.jsx)(t.p,{children:"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044f\u0434\u0440\u0430."}),(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(i.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      sysctl --system
    `})]}),(0,r.jsxs)(i.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-1",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-1",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,r.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,r.jsx)(t.code,{children:"net.ipv4.ip_forward"})," \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0442\u044c IP-\u043f\u0430\u043a\u0435\u0442\u044b \u043c\u0435\u0436\u0434\u0443 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043c\u0438. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0441\u0435\u0442\u0435\u0432\u044b\u043c \u0441\u0431\u043e\u044f\u043c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u043f\u043e\u0442\u0435\u0440\u0435 \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0434\u0430\u043c\u0438."]}),(0,r.jsxs)(l.A,{groupId:"install-type",children:[(0,r.jsxs)(i.A,{value:"Bash",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-2",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      sysctl --system
    `})]}),(0,r.jsxs)(i.A,{value:"Cloud-init",children:[(0,r.jsx)(t.h4,{id:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f-sysctl-3",children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f sysctl"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,r.jsx)(t.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-2",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},78862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/statusCluster","title":"statusCluster","description":"\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 kubelet \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3-\u0445 \u044d\u0442\u0430\u043f\u043e\u0432:","source":"@site/docs/tech-docs/kubernetes/statusCluster.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/statusCluster","permalink":"/tech-docs/kubernetes/statusCluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=(n(87464),n(62774),n(1775)),c=n(60513);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3-\u0445 \u044d\u0442\u0430\u043f\u043e\u0432:"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u0431\u0440\u0430\u0437\u043e\u0432"}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"}),"\n",(0,r.jsx)(t.li,{children:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"}),"\n"]}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043e\u0431\u0440\u0430\u0437\u043e\u0432"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  crictl images
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  registry.k8s.io/etcd                      3.5.12-0            3861cfcd7c04c       57.2MB
  registry.k8s.io/kube-apiserver            v1.30.4             8a97b1fb3e2eb       32.8MB
  registry.k8s.io/kube-controller-manager   v1.30.4             8398ad49a121d       31.1MB
  registry.k8s.io/kube-scheduler            v1.30.4             4939f82ab9ab4       19.3MB
  registry.k8s.io/pause                     3.9                 e6f1816883972       322kB
`})}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  crictl ps -a
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CONTAINER           IMAGE               CREATED             STATE               NAME                      ATTEMPT             POD ID              POD
  09c8c2d7b6446       4939f82ab9ab4       2 minutes ago       Running             kube-scheduler            1                   934a798c482c3       kube-scheduler-master-1.my-first-cluster.example.com
  15a10517ea727       8398ad49a121d       2 minutes ago       Running             kube-controller-manager   1                   765405114b0a9       kube-controller-manager-master-1.my-first-cluster.example.com
  4b2d766a5f129       8a97b1fb3e2eb       2 minutes ago       Running             kube-apiserver            0                   bd281a893a7c1       kube-apiserver-master-1.my-first-cluster.example.com
  3fb02d0f802ae       3861cfcd7c04c       2 minutes ago       Running             etcd                      0                   b6b62dc165409       etcd-master-1.my-first-cluster.example.com
`})}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:c.A`
  crictl logs $(crictl ps -name kube-apiserver \\
  -o json \|
  jq -r '.containers[''].id') 2>&1 \|
  grep created
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Output"}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
  I0325 19:50:24.849116       1 strategy.go:270] "Successfully created " type="suggested" name="node-high"
  I0325 19:50:25.015326       1 strategy.go:270] "Successfully created " type="suggested" name="leader-election"
  I0325 19:50:25.015272       1 storage_scheduling.go:95] created PriorityClass system-node-critical with value 2000001000
  I0325 19:50:25.062070       1 strategy.go:270] "Successfully created " type="suggested" name="workload-high"
  I0325 19:50:25.092785       1 storage_scheduling.go:95] created PriorityClass system-cluster-critical with value 2000000000
  I0325 19:50:25.093056       1 storage_scheduling.go:111] all system priority classes are created successfully or already exist.
  I0325 19:50:25.097457       1 strategy.go:270] "Successfully created " type="suggested" name="workload-low"
  I0325 19:50:25.122907       1 strategy.go:270] "Successfully created " type="suggested" name="global-default"
  I0325 19:50:25.136110       1 strategy.go:270] "Successfully created " type="suggested" name="system-nodes"
  I0325 19:50:25.145639       1 strategy.go:270] "Successfully created " type="suggested" name="system-node-high"
  I0325 19:50:25.162094       1 strategy.go:270] "Successfully created " type="suggested" name="probes"
  I0325 19:50:25.171177       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/cluster-admin
  I0325 19:50:25.178987       1 strategy.go:270] "Successfully created " type="suggested" name="system-leader-election"
  I0325 19:50:25.189666       1 strategy.go:270] "Successfully created " type="suggested" name="workload-leader-election"
  I0325 19:50:25.194349       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:discovery
  I0325 19:50:25.201448       1 strategy.go:270] "Successfully created " type="suggested" name="endpoint-controller"
  I0325 19:50:25.209644       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:monitoring
  I0325 19:50:25.216051       1 strategy.go:270] "Successfully created " type="suggested" name="kube-controller-manager"
  I0325 19:50:25.247945       1 strategy.go:270] "Successfully created " type="suggested" name="kube-scheduler"
  I0325 19:50:25.254378       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:basic-user
  I0325 19:50:25.263224       1 strategy.go:270] "Successfully created " type="suggested" name="kube-system-service-accounts"
  I0325 19:50:25.270945       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:public-info-viewer
  I0325 19:50:25.281581       1 strategy.go:270] "Successfully created " type="suggested" name="service-accounts"
  I0325 19:50:25.289105       1 strategy.go:270] "Successfully created " type="suggested" name="global-default"
  I0325 19:50:25.291001       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/admin
  I0325 19:50:25.314232       1 strategy.go:270] "Successfully created " type="mandatory" name="catch-all"
  I0325 19:50:25.318737       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/edit
  I0325 19:50:25.342170       1 strategy.go:270] "Successfully created " type="mandatory" name="exempt"
  I0325 19:50:25.363630       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/view
  I0325 19:50:25.364923       1 strategy.go:270] "Successfully created " type="mandatory" name="exempt"
  I0325 19:50:25.372538       1 strategy.go:270] "Successfully created " type="mandatory" name="catch-all"
  I0325 19:50:25.378771       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-admin
  I0325 19:50:25.390632       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-edit
  I0325 19:50:25.404175       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:aggregate-to-view
  I0325 19:50:25.423981       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:heapster
  I0325 19:50:25.455599       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node
  I0325 19:50:25.470607       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-problem-detector
  I0325 19:50:25.476809       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kubelet-api-admin
  I0325 19:50:25.482742       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-bootstrapper
  I0325 19:50:25.509907       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:auth-delegator
  I0325 19:50:25.518103       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-aggregator
  I0325 19:50:25.523930       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-controller-manager
  I0325 19:50:25.530724       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-dns
  I0325 19:50:25.536652       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:persistent-volume-provisioner
  I0325 19:50:25.548041       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:certificatesigningrequests:nodeclient
  I0325 19:50:25.552946       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
  I0325 19:50:25.563551       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:volume-scheduler
  I0325 19:50:25.569432       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:legacy-unknown-approver
  I0325 19:50:25.587133       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kubelet-serving-approver
  I0325 19:50:25.593244       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kube-apiserver-client-approver
  I0325 19:50:25.601059       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:certificates.k8s.io:kube-apiserver-client-kubelet-approver
  I0325 19:50:25.610208       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:service-account-issuer-discovery
  I0325 19:50:25.618408       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:node-proxier
  I0325 19:50:25.633183       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:kube-scheduler
  I0325 19:50:25.638420       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:attachdetach-controller
  I0325 19:50:25.646202       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:clusterrole-aggregation-controller
  I0325 19:50:25.662691       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:cronjob-controller
  I0325 19:50:25.670479       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:daemon-set-controller
  I0325 19:50:25.695624       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:deployment-controller
  I0325 19:50:25.704607       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:disruption-controller
  I0325 19:50:25.723784       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpoint-controller
  I0325 19:50:25.730609       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpointslice-controller
  I0325 19:50:25.739767       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:endpointslicemirroring-controller
  I0325 19:50:25.749724       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:expand-controller
  I0325 19:50:25.770915       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ephemeral-volume-controller
  I0325 19:50:25.778952       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:generic-garbage-collector
  I0325 19:50:25.789374       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:horizontal-pod-autoscaler
  I0325 19:50:25.849152       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:job-controller
  I0325 19:50:25.876849       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:namespace-controller
  I0325 19:50:25.911640       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:node-controller
  I0325 19:50:25.925130       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:persistent-volume-binder
  I0325 19:50:25.931132       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pod-garbage-collector
  I0325 19:50:25.937393       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:replicaset-controller
  I0325 19:50:25.946109       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:replication-controller
  I0325 19:50:25.960711       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:resourcequota-controller
  I0325 19:50:25.966392       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:route-controller
  I0325 19:50:25.974500       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:service-account-controller
  I0325 19:50:26.006739       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:service-controller
  I0325 19:50:26.024263       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:statefulset-controller
  I0325 19:50:26.030127       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ttl-controller
  I0325 19:50:26.038301       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:certificate-controller
  I0325 19:50:26.052458       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pvc-protection-controller
  I0325 19:50:26.059044       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:pv-protection-controller
  I0325 19:50:26.088843       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:ttl-after-finished-controller
  I0325 19:50:26.094917       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:root-ca-cert-publisher
  I0325 19:50:26.101768       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:validatingadmissionpolicy-status-controller
  I0325 19:50:26.116571       1 storage_rbac.go:226] created clusterrole.rbac.authorization.k8s.io/system:controller:legacy-service-account-token-cleaner
  I0325 19:50:26.124067       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/cluster-admin
  I0325 19:50:26.130435       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:monitoring
  I0325 19:50:26.135037       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:discovery
  I0325 19:50:26.144777       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:basic-user
  I0325 19:50:26.152784       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:public-info-viewer
  I0325 19:50:26.165524       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:node-proxier
  I0325 19:50:26.172777       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-controller-manager
  I0325 19:50:26.179247       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-dns
  I0325 19:50:26.197002       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:kube-scheduler
  I0325 19:50:26.203166       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:volume-scheduler
  I0325 19:50:26.208714       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:node
  I0325 19:50:26.217096       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:service-account-issuer-discovery
  I0325 19:50:26.226190       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:attachdetach-controller
  I0325 19:50:26.239853       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:clusterrole-aggregation-controller
  I0325 19:50:26.244226       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:cronjob-controller
  I0325 19:50:26.257950       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:daemon-set-controller
  I0325 19:50:26.262028       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:deployment-controller
  I0325 19:50:26.281103       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:disruption-controller
  I0325 19:50:26.294203       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpoint-controller
  I0325 19:50:26.309198       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpointslice-controller
  I0325 19:50:26.317701       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:endpointslicemirroring-controller
  I0325 19:50:26.333124       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:expand-controller
  I0325 19:50:26.338934       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ephemeral-volume-controller
  I0325 19:50:26.344080       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:generic-garbage-collector
  I0325 19:50:26.355286       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:horizontal-pod-autoscaler
  I0325 19:50:26.365297       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:job-controller
  I0325 19:50:26.397412       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:namespace-controller
  I0325 19:50:26.402716       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:node-controller
  I0325 19:50:26.452669       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:persistent-volume-binder
  I0325 19:50:26.457837       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pod-garbage-collector
  I0325 19:50:26.469955       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:replicaset-controller
  I0325 19:50:26.477884       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:replication-controller
  I0325 19:50:26.490451       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:resourcequota-controller
  I0325 19:50:26.509024       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:route-controller
  I0325 19:50:26.543252       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:service-account-controller
  I0325 19:50:26.549039       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:service-controller
  I0325 19:50:26.578269       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:statefulset-controller
  I0325 19:50:26.592059       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ttl-controller
  I0325 19:50:26.603091       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:certificate-controller
  I0325 19:50:26.622458       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pvc-protection-controller
  I0325 19:50:26.630783       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:pv-protection-controller
  I0325 19:50:26.647976       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:ttl-after-finished-controller
  I0325 19:50:26.662162       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:root-ca-cert-publisher
  I0325 19:50:26.701501       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:validatingadmissionpolicy-status-controller
  I0325 19:50:26.711935       1 storage_rbac.go:256] created clusterrolebinding.rbac.authorization.k8s.io/system:controller:legacy-service-account-token-cleaner
  I0325 19:50:26.724206       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/extension-apiserver-authentication-reader in kube-system
  I0325 19:50:26.736799       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-system
  I0325 19:50:26.747295       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:cloud-provider in kube-system
  I0325 19:50:26.757544       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:token-cleaner in kube-system
  I0325 19:50:26.766086       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system::leader-locking-kube-controller-manager in kube-system
  I0325 19:50:26.773895       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system::leader-locking-kube-scheduler in kube-system
  I0325 19:50:26.785505       1 storage_rbac.go:289] created role.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-public
  I0325 19:50:26.813423       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::extension-apiserver-authentication-reader in kube-system
  I0325 19:50:26.822640       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::leader-locking-kube-controller-manager in kube-system
  I0325 19:50:26.829331       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system::leader-locking-kube-scheduler in kube-system
  I0325 19:50:26.838203       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-system
  I0325 19:50:26.848813       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:cloud-provider in kube-system
  I0325 19:50:26.861183       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:token-cleaner in kube-system
  I0325 19:50:26.871910       1 storage_rbac.go:321] created rolebinding.rbac.authorization.k8s.io/system:controller:bootstrap-signer in kube-public
`})]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},78915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkComponent","title":"checkComponent","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/crictl/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkComponent","permalink":"/tech-docs/kubernetes/components/crictl/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(45749);const c={},i=void 0,l={},d=[...a.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),(0,r.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=(n(628),n(56960)),c=n(91018);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0442\u0430\u0440\u0442 Systemd Unit"}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycle",children:"Containerd Install"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycle",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)("h3",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Systemd Unit \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsx)(a.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},79988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(63770),i=n(25292),l=n(31798),d=n(1775),u=n(60513);const h={},p=void 0,m={},b=[];function k(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(d.A,{language:"bash",children:u.A`
    export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,r.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/kube-apiserver.yaml
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${i.L.securePort.value}
    creationTimestamp: null
    labels:
      component: kube-apiserver
      tier: control-plane
    name: kube-apiserver
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-apiserver
      - --advertise-address=$\{MACHINE_LOCAL_ADDRESS}
      - --aggregator-reject-forwarding-redirect=${i.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${i.L.allowPrivileged.value}
      - --anonymous-auth=${i.L.anonymousAuth.value}
      - --api-audiences=${i.L.apiAudiences.value}
      - --apiserver-count=${i.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${i.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${i.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${i.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${i.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${i.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${i.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${i.L.auditLogCompress.value}
      - --audit-log-format=${i.L.auditLogFormat.value}
      - --audit-log-maxage=${i.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${i.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${i.L.auditLogMaxsize.value}
      - --audit-log-mode=${i.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${i.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${i.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${i.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${i.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${i.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${i.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${i.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${i.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${i.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${i.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${i.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${i.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${i.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${i.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${i.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${i.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${i.L.auditWebhookVersion.value}
      - --authentication-token-webhook-cache-ttl=${i.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${i.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${i.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${i.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${i.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${i.L.authorizationWebhookVersion.value}
      - --bind-address=${i.L.bindAddress.value}
      - --cert-dir=${i.L.certDir.value}
      - --client-ca-file=${i.L.clientCaFile.value}
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # - --cloud-provider=${i.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${i.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${i.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${i.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${i.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${i.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${i.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${i.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${i.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${i.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${i.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${i.L.enableGarbageCollector.value}
      - --enable-logs-handler=${i.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${i.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${i.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${i.L.endpointReconcilerType.value}
      - --etcd-cafile=${i.L.etcdCafile.value}
      - --etcd-certfile=${i.L.etcdCertfile.value}
      - --etcd-compaction-interval=${i.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${i.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${i.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${i.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${i.L.etcdKeyfile.value}
      - --etcd-prefix=${i.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${i.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${i.L.etcdServers.value}
      - --event-ttl=${i.L.eventTtl.value}
      - --feature-gates=${i.L.featureGates.value}
      - --goaway-chance=${i.L.goawayChance.value}
      - --help=${i.L.help.value}
      - --http2-max-streams-per-connection=${i.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${i.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${i.L.kubeletClientKey.value}
      - --kubelet-port=${i.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${i.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${i.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${i.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${i.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${i.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${i.L.livezGracePeriod.value}
      - --log-flush-frequency=${i.L.logFlushFrequency.value}
      - --logging-format=${i.L.loggingFormat.value}
      - --log-json-info-buffer-size=${i.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${i.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${i.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${i.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${i.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${i.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${i.L.maxRequestsInflight.value}
      - --min-request-timeout=${i.L.minRequestTimeout.value}
      - --permit-address-sharing=${i.L.permitAddressSharing.value}
      - --permit-port-sharing=${i.L.permitPortSharing.value}
      - --profiling=${i.L.profiling.value}
      - --proxy-client-cert-file=${i.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${i.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${i.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${i.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${i.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${i.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${i.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${i.L.requestTimeout.value}
      - --runtime-config=${i.L.runtimeConfig.value}
      - --secure-port=${i.L.securePort.value}
      - --service-account-extend-token-expiration=${i.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${i.L.serviceAccountIssuer.value}
      - --service-account-key-file=${i.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${i.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${i.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${i.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${i.L.serviceClusterIpRange.value}
      - --service-node-port-range=${i.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${i.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${i.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${i.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${i.L.storageBackend.value}
      - --storage-media-type=${i.L.storageMediaType.value}
      - --tls-cert-file=${i.L.tlsCertFile.value}
      - --tls-private-key-file=${i.L.tlsPrivateKeyFile.value}
      - --v=${i.L.v.value}
      - --version=${i.L.version.value}
      - --watch-cache=${i.L.watchCache.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${i.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # - --cloud-config=${i.L.cloudConfig.value}
      # - --strict-transport-security-directives=${i.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${i.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${i.L.disabledMetrics.value}
      # - --egress-selector-config-file=${i.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${i.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${i.L.etcdServersOverrides.value}
      # - --external-hostname=${i.L.externalHostname.value}
      # - --kubelet-certificate-authority=${i.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${i.L.oidcCaFile.value}
      # - --oidc-client-id=${i.L.oidcClientId.value}
      # - --oidc-groups-claim=${i.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${i.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${i.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${i.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${i.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${i.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${i.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${i.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${i.L.peerAdvertisePort.value}
      # - --peer-ca-file=${i.L.peerCaFile.value}
      # - --service-account-jwks-uri=${i.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${i.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${i.L.tlsCipherSuites.value}
      # - --tls-min-version=${i.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${i.L.tlsSniCertKey.value}
      # - --token-auth-file=${i.L.tokenAuthFile.value}
      # - --tracing-config-file=${i.L.tracingConfigFile.value}
      # - --vmodule=${i.L.vmodule.value}
      # - --watch-cache-sizes=${i.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${i.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${i.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${i.L.debugSocketPath.value}
      # - --authorization-policy-file=${i.L.authorizationPolicyFile.value}
      # - --authorization-config=${i.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${i.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${i.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${i.L.auditWebhookConfigFile.value}
      # - --audit-policy-file=${i.L.auditPolicyFile.value}
      # - --audit-log-path=${i.L.auditLogPath.value}
      # - --allow-metric-labels=${i.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${i.L.allowMetricLabelsManifest.value}
      # - --admission-control=${i.L.admissionControl.value}
      # - --admission-control-config-file=${i.L.admissionControlConfigFile.value}
      # - --advertise-address=${i.L.advertiseAddress.value}
      image: ${a.M.baseDockerRegistry.value}/kube-apiserver:${c.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-apiserver
      readinessProbe:
        failureThreshold: 3
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /readyz
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        periodSeconds: 1
        timeoutSeconds: 15
      resources:
        requests:
          cpu: 250m
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: $\{MACHINE_LOCAL_ADDRESS}
          path: /livez
          port: ${l.h.kubeAPIServer.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /var/log/kubernetes/audit/
        name: k8s-audit
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /var/log/kubernetes/audit/
        type: DirectoryOrCreate
      name: k8s-audit
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},80614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},80731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
  #### Генерация Kube Scheduler сертификатов
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},80851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453);const a={},c=void 0,i={},l=[];function d(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{open:!0,className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsxs)(t.p,{children:["kubeadm \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c ",(0,r.jsx)(t.code,{children:"kubelet"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},81970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(82286);const c={},i=void 0,l={},d=[...a.toc];function u(e){return(0,r.jsx)(a.default,{})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},82286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(62376),l=n(80731),d=n(7915),u=n(74036),h=n(88869);const p={},m=void 0,b={},k=[...i.toc,...d.toc,...u.toc,...l.toc,...h.toc];function f(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(h.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},82417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupInitComponent","title":"setupInitComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/kubernetes/components/kubeAPI/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","permalink":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(79988),l=n(38229);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},83820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>j,frontMatter:()=>k,metadata:()=>s,toc:()=>x});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allSetupComponent","title":"allSetupComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/components/allSetupComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allSetupComponent","permalink":"/tech-docs/kubernetes/components/allSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(22919),c=n(79827),i=n(65867),l=n(34208),d=n(78915),u=n(63459),h=n(17147),p=n(31283),m=n(87464),b=n(62774);const k={},f=void 0,g={},x=[...c.toc,...a.toc,...l.toc,...i.toc,...u.toc,...d.toc,...p.toc,...h.toc];function v(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."}),"\n"]}),"\n",(0,r.jsxs)(b.A,{groupId:"component",children:[(0,r.jsx)(m.A,{value:"containerd",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 containerd"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(m.A,{value:"kubelet",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubelet"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(l.default,{}),(0,r.jsx)(i.default,{})]})}),(0,r.jsx)(m.A,{value:"crictl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 crictl"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)("h4",{children:" \u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.default,{})]})}),(0,r.jsx)(m.A,{value:"kubeadm",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 kubeadm"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(p.default,{}),(0,r.jsx)(h.default,{})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},84572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyJoinComponent","title":"componentsReadyJoinComponent","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/componentsReadyJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyJoinComponent","permalink":"/tech-docs/kubernetes/components/componentsReadyJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm join phase preflight --dry-run \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0448\u0438\u0431\u043e\u043a, \u0438 \u0432\u044b \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434:"}),"\n"]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0431\u044b\u043b \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d \u0432 \u043f\u043e\u043b\u0443\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435, \u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a:"}),"\n"]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},84740:(e,t,n)=>{n.d(t,{I:()=>s});const s=()=>"/"},84818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubectl/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl/checks","slug":"/tech-docs/kubernetes/components/kubectl/checks/statusBinVersion","permalink":"/tech-docs/kubernetes/components/kubectl/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubectl  version
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  Client Version: v1.30.4
  Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85421:(e,t,n)=>{n.d(t,{w:()=>o});var s=n(31798),r=n(7478);const o={authenticationKubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${r.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${s.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:""},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:""},requestheaderClientCaFile:{value:""},master:{value:""}}},85631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=(n(6353),n(31798)),i=n(63770),l=n(66483),d=n(60513),u=n(1775);const h={},p=void 0,m={},b=[];function k(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(u.A,{language:"bash",children:d.A`
  export CLUSTER_NAME=${a.M.clusterName.value}
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(u.A,{language:"bash",children:d.A`
  mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/kube-controller-manager.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    creationTimestamp: null
    labels:
      component: kube-controller-manager
      tier: control-plane
    name: kube-controller-manager
    namespace: kube-system
  spec:
    containers:
    - command:
      - kube-controller-manager
      - --allocate-node-cidrs=${l.L.allocateNodeCidrs.value}
      - --allow-untagged-cloud=${l.L.allowUntaggedCloud.value}
      - --attach-detach-reconcile-sync-period=${l.L.attachDetachReconcileSyncPeriod.value}
      - --authentication-kubeconfig=${l.L.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${l.L.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${l.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${l.L.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${l.L.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${l.L.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${l.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${l.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${l.L.bindAddress.value}
      - --cidr-allocator-type=${l.L.cidrAllocatorType.value}
      - --client-ca-file=${l.L.clientCaFile.value}
      - --cluster-name=${l.L.clusterName.value}
      - --cloud-provider-gce-lb-src-cidrs=${l.L.cloudProviderGceLbSrcCidrs.value}
      - --cluster-signing-cert-file=${l.L.clusterSigningCertFile.value}
      - --cluster-signing-duration=${l.L.clusterSigningDuration.value}
      - --cluster-signing-key-file=${l.L.clusterSigningKeyFile.value}
      - --concurrent-cron-job-syncs=${l.L.concurrentCronJobSyncs.value}
      - --concurrent-deployment-syncs=${l.L.concurrentDeploymentSyncs.value}
      - --concurrent-endpoint-syncs=${l.L.concurrentEndpointSyncs.value}
      - --concurrent-ephemeralvolume-syncs=${l.L.concurrentEphemeralvolumeSyncs.value}
      - --concurrent-gc-syncs=${l.L.concurrentGcSyncs.value}
      - --concurrent-horizontal-pod-autoscaler-syncs=${l.L.concurrentHorizontalPodAutoscalerSyncs.value}
      - --concurrent-job-syncs=${l.L.concurrentJobSyncs.value}
      - --concurrent-namespace-syncs=${l.L.concurrentNamespaceSyncs.value}
      - --concurrent-rc-syncs=${l.L.concurrentRcSyncs.value}
      - --concurrent-replicaset-syncs=${l.L.concurrentReplicasetSyncs.value}
      - --concurrent-resource-quota-syncs=${l.L.concurrentResourceQuotaSyncs.value}
      - --concurrent-service-endpoint-syncs=${l.L.concurrentServiceEndpointSyncs.value}
      - --concurrent-service-syncs=${l.L.concurrentServiceSyncs.value}
      - --concurrent-serviceaccount-token-syncs=${l.L.concurrentServiceaccountTokenSyncs.value}
      - --concurrent-statefulset-syncs=${l.L.concurrentStatefulsetSyncs.value}
      - --concurrent-ttl-after-finished-syncs=${l.L.concurrentTtlAfterFinishedSyncs.value}
      - --concurrent-validating-admission-policy-status-syncs=${l.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}
      - --configure-cloud-routes=${l.L.configureCloudRoutes.value}
      - --contention-profiling=${l.L.contentionProfiling.value}
      - --controller-start-interval=${l.L.controllerStartInterval.value}
      - --controllers=${l.L.controllers.value}
      - --disable-attach-detach-reconcile-sync=${l.L.disableAttachDetachReconcileSync.value}
      - --disable-force-detach-on-timeout=${l.L.disableForceDetachOnTimeout.value}
      - --enable-dynamic-provisioning=${l.L.enableDynamicProvisioning.value}
      - --enable-garbage-collector=${l.L.enableGarbageCollector.value}
      - --enable-hostpath-provisioner=${l.L.enableHostpathProvisioner.value}
      - --enable-leader-migration=${l.L.enableLeaderMigration.value}
      - --endpoint-updates-batch-period=${l.L.endpointUpdatesBatchPeriod.value}
      - --endpointslice-updates-batch-period=${l.L.endpointsliceUpdatesBatchPeriod.value}
      - --feature-gates=${l.L.featureGates.value}
      - --flex-volume-plugin-dir=${l.L.flexVolumePluginDir.value}
      - --help=${l.L.help.value}
      - --horizontal-pod-autoscaler-cpu-initialization-period=${l.L.horizontalPodAutoscalerCpuInitializationPeriod.value}
      - --horizontal-pod-autoscaler-downscale-delay=${l.L.horizontalPodAutoscalerDownscaleDelay.value}
      - --horizontal-pod-autoscaler-downscale-stabilization=${l.L.horizontalPodAutoscalerDownscaleStabilization.value}
      - --horizontal-pod-autoscaler-initial-readiness-delay=${l.L.horizontalPodAutoscalerInitialReadinessDelay.value}
      - --horizontal-pod-autoscaler-sync-period=${l.L.horizontalPodAutoscalerSyncPeriod.value}
      - --horizontal-pod-autoscaler-tolerance=${l.L.horizontalPodAutoscalerTolerance.value}
      - --horizontal-pod-autoscaler-upscale-delay=${l.L.horizontalPodAutoscalerUpscaleDelay.value}
      - --http2-max-streams-per-connection=${l.L.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${l.L.kubeApiBurst.value}
      - --kube-api-content-type=${l.L.kubeApiContentType.value}
      - --kube-api-qps=${l.L.kubeApiQps.value}
      - --kubeconfig=${l.L.kubeconfig.value}
      - --large-cluster-size-threshold=${l.L.largeClusterSizeThreshold.value}
      - --leader-elect=${l.L.leaderElect.value}
      - --leader-elect-lease-duration=${l.L.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${l.L.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${l.L.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${l.L.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${l.L.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${l.L.leaderElectRetryPeriod.value}
      - --legacy-service-account-token-clean-up-period=${l.L.legacyServiceAccountTokenCleanUpPeriod.value}
      - --log-flush-frequency=${l.L.logFlushFrequency.value}
      - --log-json-info-buffer-size=${l.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${l.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${l.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${l.L.logTextSplitStream.value}
      - --logging-format=${l.L.loggingFormat.value}
      - --max-endpoints-per-slice=${l.L.maxEndpointsPerSlice.value}
      - --min-resync-period=${l.L.minResyncPeriod.value}
      - --mirroring-concurrent-service-endpoint-syncs=${l.L.mirroringConcurrentServiceEndpointSyncs.value}
      - --mirroring-endpointslice-updates-batch-period=${l.L.mirroringEndpointsliceUpdatesBatchPeriod.value}
      - --mirroring-max-endpoints-per-subset=${l.L.mirroringMaxEndpointsPerSubset.value}
      - --namespace-sync-period=${l.L.namespaceSyncPeriod.value}
      - --node-cidr-mask-size=${l.L.nodeCidrMaskSize.value}
      - --node-cidr-mask-size-ipv4=${l.L.nodeCidrMaskSizeIpv4.value}
      - --node-cidr-mask-size-ipv6=${l.L.nodeCidrMaskSizeIpv6.value}
      - --node-eviction-rate=${l.L.nodeEvictionRate.value}
      - --node-monitor-grace-period=${l.L.nodeMonitorGracePeriod.value}
      - --node-monitor-period=${l.L.nodeMonitorPeriod.value}
      - --node-startup-grace-period=${l.L.nodeStartupGracePeriod.value}
      - --node-sync-period=${l.L.nodeSyncPeriod.value}
      - --permit-address-sharing=${l.L.permitAddressSharing.value}
      - --permit-port-sharing=${l.L.permitPortSharing.value}
      - --profiling=${l.L.profiling.value}
      - --pv-recycler-increment-timeout-nfs=${l.L.pvRecyclerIncrementTimeoutNfs.value}
      - --pv-recycler-minimum-timeout-hostpath=${l.L.pvRecyclerMinimumTimeoutHostpath.value}
      - --pv-recycler-minimum-timeout-nfs=${l.L.pvRecyclerMinimumTimeoutNfs.value}
      - --pv-recycler-timeout-increment-hostpath=${l.L.pvRecyclerTimeoutIncrementHostpath.value}
      - --pvclaimbinder-sync-period=${l.L.pvclaimbinderSyncPeriod.value}
      - --requestheader-client-ca-file=${l.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${l.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${l.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${l.L.requestheaderUsernameHeaders.value}
      - --resource-quota-sync-period=${l.L.resourceQuotaSyncPeriod.value}
      - --root-ca-file=${l.L.rootCaFile.value}
      - --route-reconciliation-period=${l.L.routeReconciliationPeriod.value}
      - --secondary-node-eviction-rate=${l.L.secondaryNodeEvictionRate.value}
      - --secure-port=${l.L.securePort.value}
      - --service-account-private-key-file=${l.L.serviceAccountPrivateKeyFile.value}
      - --terminated-pod-gc-threshold=${l.L.terminatedPodGcThreshold.value}
      - --unhealthy-zone-threshold=${l.L.unhealthyZoneThreshold.value}
      - --use-service-account-credentials=${l.L.useServiceAccountCredentials.value}
      - --v=${l.L.v.value}
      - --version=${l.L.version.value}
      - --volume-host-allow-local-loopback=${l.L.volumeHostAllowLocalLoopback.value}
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # - --cloud-provider: "${l.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # - --cluster-signing-kube-apiserver-client-cert-file=${l.L.clusterSigningKubeApiserverClientCertFile.value}
      # - --cluster-signing-kube-apiserver-client-key-file=${l.L.clusterSigningKubeApiserverClientKeyFile.value}
      # - --cluster-signing-kubelet-client-cert-file=${l.L.clusterSigningKubeletClientCertFile.value}
      # - --cluster-signing-kubelet-client-key-file=${l.L.clusterSigningKubeletClientKeyFile.value}
      # - --cluster-signing-kubelet-serving-cert-file=${l.L.clusterSigningKubeletServingCertFile.value}
      # - --cluster-signing-kubelet-serving-key-file=${l.L.clusterSigningKubeletServingKeyFile.value}
      # - --cluster-signing-legacy-unknown-cert-file=${l.L.clusterSigningLegacyUnknownCertFile.value}
      # - --cluster-signing-legacy-unknown-key-file=${l.L.clusterSigningLegacyUnknownKeyFile.value}
      # - --cluster-cidr=${l.L.clusterCidr.value}
      # - --cloud-config=${l.L.cloudConfig.value}
      # - --cert-dir=${l.L.certDir.value}
      # - --allow-metric-labels-manifest=${l.L.allowMetricLabelsManifest.value}
      # - --allow-metric-labels=${l.L.allowMetricLabels.value}
      # - --disabled-metrics=${l.L.disabledMetrics.value}
      # - --leader-migration-config=${l.L.leaderMigrationConfig.value}
      # - --master=${l.L.master.value}
      # - --pv-recycler-pod-template-filepath-hostpath=${l.L.pvRecyclerPodTemplateFilepathHostpath.value}
      # - --pv-recycler-pod-template-filepath-nfs=${l.L.pvRecyclerPodTemplateFilepathNfs.value}
      # - --service-cluster-ip-range=${l.L.serviceClusterIpRange.value}
      # - --show-hidden-metrics-for-version=${l.L.showHiddenMetricsForVersion.value}
      # - --tls-cert-file=${l.L.tlsCertFile.value}
      # - --tls-cipher-suites=${l.L.tlsCipherSuites.value}
      # - --tls-min-version=${l.L.tlsMinVersion.value}
      # - --tls-private-key-file=${l.L.tlsPrivateKeyFile.value}
      # - --tls-sni-cert-key=${l.L.tlsSniCertKey.value}
      # - --vmodule=${l.L.vmodule.value}
      # - --volume-host-cidr-denylist=${l.L.volumeHostCidrDenylist.value}
      # - --external-cloud-volume-plugin=${l.L.externalCloudVolumePlugin.value}
      # - --requestheader-allowed-names=${l.L.requestheaderAllowedNames.value}
      image: ${a.M.baseDockerRegistry.value}/kube-controller-manager:${i.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${c.h.kubeControllerManager.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: kube-controller-manager
      resources:
        requests:
          cpu: 200m
      startupProbe:
        failureThreshold: 24
        httpGet:
          path: /healthz
          port: ${c.h.kubeControllerManager.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /etc/ssl/certs
        name: ca-certs
        readOnly: true
      - mountPath: /etc/ca-certificates
        name: etc-ca-certificates
        readOnly: true
      - mountPath: /etc/pki
        name: etc-pki
        readOnly: true
      - mountPath: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        name: flexvolume-dir
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/pki
        name: k8s-certs
        readOnly: true
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        name: kubeconfig
        readOnly: true
      - mountPath: /usr/local/share/ca-certificates
        name: usr-local-share-ca-certificates
        readOnly: true
      - mountPath: /usr/share/ca-certificates
        name: usr-share-ca-certificates
        readOnly: true
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: /etc/ssl/certs
        type: DirectoryOrCreate
      name: ca-certs
    - hostPath:
        path: /etc/ca-certificates
        type: DirectoryOrCreate
      name: etc-ca-certificates
    - hostPath:
        path: /etc/pki
        type: DirectoryOrCreate
      name: etc-pki
    - hostPath:
        path: /usr/libexec/kubernetes/kubelet-plugins/volume/exec/
        type: DirectoryOrCreate
      name: flexvolume-dir
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/pki
        type: DirectoryOrCreate
      name: k8s-certs
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/controller-manager.conf
        type: FileOrCreate
      name: kubeconfig
    - hostPath:
        path: /usr/local/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-local-share-ca-certificates
    - hostPath:
        path: /usr/share/ca-certificates
        type: DirectoryOrCreate
      name: usr-share-ca-certificates
  status: {}
  EOF
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},86613:(e,t,n)=>{n.d(t,{IL:()=>l,Nu:()=>i,Uj:()=>d,hZ:()=>u});var s=n(60513),r=n(10119),o=n(25292),a=n(66483),c=n(85421);const i={data:{value:s.A`
      auto-compaction-retention: "${r.D.autoCompactionRetention.value}"
      cert-file: "${r.D.certFile.value}"
      client-cert-auth: "${r.D.clientCertAuth.value}"
      data-dir: "${r.D.dataDir.value}"
      election-timeout: "${r.D.electionTimeout.value}"
      heartbeat-interval: "${r.D.heartbeatInterval.value}"
      key-file: "${r.D.keyFile.value}"
      listen-client-urls: "${r.D.listenClientUrls.value}"
      listen-metrics-urls: "${r.D.listenMetricsUrls.value}"
      listen-peer-urls: "${r.D.listenPeerUrls.value}"
      logger: "${r.D.logger.value}"
      max-snapshots: "${r.D.maxSnapshots.value}"
      max-wals: "${r.D.maxWals.value}"
      metrics: "${r.D.metrics.value}"
      peer-cert-file: "${r.D.peerCertFile.value}"
      peer-client-cert-auth: "${r.D.peerClientCertAuth.value}"
      peer-key-file: "${r.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${r.D.peerTrustedCAFile.value}"
      snapshot-count: "${r.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${r.D.trustedCAFile.value}"
    `}},l={data:{value:s.A`
      aggregator-reject-forwarding-redirect: "${o.L.aggregatorRejectForwardingRedirect.value}"
      allow-privileged: "${o.L.allowPrivileged.value}"
      anonymous-auth: "${o.L.anonymousAuth.value}"
      api-audiences: "${o.L.apiAudiences.value}"
      apiserver-count: "${o.L.apiserverCount.value}"
      audit-log-batch-buffer-size: "${o.L.auditLogBatchBufferSize.value}"
      audit-log-batch-max-size: "${o.L.auditLogBatchMaxSize.value}"
      audit-log-batch-max-wait: "${o.L.auditLogBatchMaxWait.value}"
      audit-log-batch-throttle-burst: "${o.L.auditLogBatchThrottleBurst.value}"
      audit-log-batch-throttle-enable: "${o.L.auditLogBatchThrottleEnable.value}"
      audit-log-batch-throttle-qps: "${o.L.auditLogBatchThrottleQps.value}"
      audit-log-compress: "${o.L.auditLogCompress.value}"
      audit-log-format: "${o.L.auditLogFormat.value}"
      audit-log-maxage: "${o.L.auditLogMaxage.value}"
      audit-log-maxbackup: "${o.L.auditLogMaxbackup.value}"
      audit-log-maxsize: "${o.L.auditLogMaxsize.value}"
      audit-log-mode: "${o.L.auditLogMode.value}"
      audit-log-truncate-enabled: "${o.L.auditLogTruncateEnabled.value}"
      audit-log-truncate-max-batch-size: "${o.L.auditLogTruncateMaxBatchSize.value}"
      audit-log-truncate-max-event-size: "${o.L.auditLogTruncateMaxEventSize.value}"
      audit-log-version: "${o.L.auditLogVersion.value}"
      audit-webhook-batch-buffer-size: "${o.L.auditWebhookBatchBufferSize.value}"
      audit-webhook-batch-initial-backoff: "${o.L.auditWebhookBatchInitialBackoff.value}"
      audit-webhook-batch-max-size: "${o.L.auditWebhookBatchMaxSize.value}"
      audit-webhook-batch-max-wait: "${o.L.auditWebhookBatchMaxWait.value}"
      audit-webhook-batch-throttle-burst: "${o.L.auditWebhookBatchThrottleBurst.value}"
      audit-webhook-batch-throttle-enable: "${o.L.auditWebhookBatchThrottleEnable.value}"
      audit-webhook-batch-throttle-qps: "${o.L.auditWebhookBatchThrottleQps.value}"
      audit-webhook-initial-backoff: "${o.L.auditWebhookInitialBackoff.value}"
      audit-webhook-mode: "${o.L.auditWebhookMode.value}"
      audit-webhook-truncate-enabled: "${o.L.auditWebhookTruncateEnabled.value}"
      audit-webhook-truncate-max-batch-size: "${o.L.auditWebhookTruncateMaxBatchSize.value}"
      audit-webhook-truncate-max-event-size: "${o.L.auditWebhookTruncateMaxEventSize.value}"
      audit-webhook-version: "${o.L.auditWebhookVersion.value}"
      authentication-token-webhook-cache-ttl: "${o.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-token-webhook-version: "${o.L.authenticationTokenWebhookVersion.value}"
      authorization-mode: "${o.L.authorizationMode.value}"
      authorization-webhook-cache-authorized-ttl: "${o.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${o.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      authorization-webhook-version: "${o.L.authorizationWebhookVersion.value}"
      bind-address: "${o.L.bindAddress.value}"
      cert-dir: "${o.L.certDir.value}"
      client-ca-file: "${o.L.clientCaFile.value}"
      cloud-provider-gce-l7lb-src-cidrs: "${o.L.cloudProviderGceL7lbSrcCidrs.value}"
      cloud-provider-gce-lb-src-cidrs: "${o.L.cloudProviderGceLbSrcCidrs.value}"
      contention-profiling: "${o.L.contentionProfiling.value}"
      default-not-ready-toleration-seconds: "${o.L.defaultNotReadyTolerationSeconds.value}"
      default-unreachable-toleration-seconds: "${o.L.defaultUnreachableTolerationSeconds.value}"
      default-watch-cache-size: "${o.L.defaultWatchCacheSize.value}"
      delete-collection-workers: "${o.L.deleteCollectionWorkers.value}"
      enable-admission-plugins: "${o.L.enableAdmissionPlugins.value}"
      enable-aggregator-routing: "${o.L.enableAggregatorRouting.value}"
      enable-bootstrap-token-auth: "${o.L.enableBootstrapTokenAuth.value}"
      enable-garbage-collector: "${o.L.enableGarbageCollector.value}"
      enable-logs-handler: "${o.L.enableLogsHandler.value}"
      enable-priority-and-fairness: "${o.L.enablePriorityAndFairness.value}"
      encryption-provider-config-automatic-reload: "${o.L.encryptionProviderConfigAutomaticReload.value}"
      endpoint-reconciler-type: "${o.L.endpointReconcilerType.value}"
      etcd-cafile: "${o.L.etcdCafile.value}"
      etcd-certfile: "${o.L.etcdCertfile.value}"
      etcd-compaction-interval: "${o.L.etcdCompactionInterval.value}"
      etcd-count-metric-poll-period: "${o.L.etcdCountMetricPollPeriod.value}"
      etcd-db-metric-poll-interval: "${o.L.etcdDbMetricPollInterval.value}"
      etcd-healthcheck-timeout: "${o.L.etcdHealthcheckTimeout.value}"
      etcd-keyfile: "${o.L.etcdKeyfile.value}"
      etcd-prefix: "${o.L.etcdPrefix.value}"
      etcd-readycheck-timeout: "${o.L.etcdReadycheckTimeout.value}"
      etcd-servers: "${o.L.etcdServers.value}"
      event-ttl: "${o.L.eventTtl.value}"
      feature-gates: "${o.L.featureGates.value}"
      goaway-chance: "${o.L.goawayChance.value}"
      help: "${o.L.help.value}"
      http2-max-streams-per-connection: "${o.L.http2MaxStreamsPerConnection.value}"
      kubelet-client-certificate: "${o.L.kubeletClientCertificate.value}"
      kubelet-client-key: "${o.L.kubeletClientKey.value}"
      kubelet-port: "${o.L.kubeletPort.value}"
      kubelet-preferred-address-types: "${o.L.kubeletPreferredAddressTypes.value}"
      kubelet-read-only-port: "${o.L.kubeletReadOnlyPort.value}"
      kubelet-timeout: "${o.L.kubeletTimeout.value}"
      kubernetes-service-node-port: "${o.L.kubernetesServiceNodePort.value}"
      lease-reuse-duration-seconds: "${o.L.leaseReuseDurationSeconds.value}"
      livez-grace-period: "${o.L.livezGracePeriod.value}"
      log-flush-frequency: "${o.L.logFlushFrequency.value}"
      logging-format: "${o.L.loggingFormat.value}"
      log-json-info-buffer-size: "${o.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${o.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${o.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${o.L.logTextSplitStream.value}"
      max-connection-bytes-per-sec: "${o.L.maxConnectionBytesPerSec.value}"
      max-mutating-requests-inflight: "${o.L.maxMutatingRequestsInflight.value}"
      max-requests-inflight: "${o.L.maxRequestsInflight.value}"
      min-request-timeout: "${o.L.minRequestTimeout.value}"
      permit-address-sharing: "${o.L.permitAddressSharing.value}"
      permit-port-sharing: "${o.L.permitPortSharing.value}"
      profiling: "${o.L.profiling.value}"
      proxy-client-cert-file: "${o.L.proxyClientCertFile.value}"
      proxy-client-key-file: "${o.L.proxyClientKeyFile.value}"
      requestheader-allowed-names: "${o.L.requestheaderAllowedNames.value}"
      requestheader-client-ca-file: "${o.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${o.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${o.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${o.L.requestheaderUsernameHeaders.value}"
      request-timeout: "${o.L.requestTimeout.value}"
      runtime-config: "${o.L.runtimeConfig.value}"
      secure-port: "${o.L.securePort.value}"
      service-account-extend-token-expiration: "${o.L.serviceAccountExtendTokenExpiration.value}"
      service-account-issuer: "${o.L.serviceAccountIssuer.value}"
      service-account-key-file: "${o.L.serviceAccountKeyFile.value}"
      service-account-lookup: "${o.L.serviceAccountLookup.value}"
      service-account-max-token-expiration: "${o.L.serviceAccountMaxTokenExpiration.value}"
      service-account-signing-key-file: "${o.L.serviceAccountSigningKeyFile.value}"
      service-cluster-ip-range: "${o.L.serviceClusterIpRange.value}"
      service-node-port-range: "${o.L.serviceNodePortRange.value}"
      shutdown-delay-duration: "${o.L.shutdownDelayDuration.value}"
      shutdown-send-retry-after: "${o.L.shutdownSendRetryAfter.value}"
      shutdown-watch-termination-grace-period: "${o.L.shutdownWatchTerminationGracePeriod.value}"
      storage-backend: "${o.L.storageBackend.value}"
      storage-media-type: "${o.L.storageMediaType.value}"
      tls-cert-file: "${o.L.tlsCertFile.value}"
      tls-private-key-file: "${o.L.tlsPrivateKeyFile.value}"
      v: "${o.L.v.value}"
      version: "${o.L.version.value}"
      watch-cache: "${o.L.watchCache.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ CLOUD-CONTROLLER-MANAGER
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # cloud-provider: "${o.L.cloudProvider.value}"
      # Не указывать если значение "" или undefined
      # cloud-config: "${o.L.cloudConfig.value}"
      # strict-transport-security-directives: "${o.L.strictTransportSecurityDirectives.value}"
      # disable-admission-plugins: "${o.L.disableAdmissionPlugins.value}"
      # disabled-metrics: "${o.L.disabledMetrics.value}"
      # egress-selector-config-file: "${o.L.egressSelectorConfigFile.value}"
      # encryption-provider-config: "${o.L.encryptionProviderConfig.value}"
      # etcd-servers-overrides: "${o.L.etcdServersOverrides.value}"
      # external-hostname: "${o.L.externalHostname.value}"
      # kubelet-certificate-authority: "${o.L.kubeletCertificateAuthority.value}"
      # oidc-ca-file: "${o.L.oidcCaFile.value}"
      # oidc-client-id: "${o.L.oidcClientId.value}"
      # oidc-groups-claim: "${o.L.oidcGroupsClaim.value}"
      # oidc-groups-prefix: "${o.L.oidcGroupsPrefix.value}"
      # oidc-issuer-url: "${o.L.oidcIssuerUrl.value}"
      # oidc-required-claim: "${o.L.oidcRequiredClaim.value}"
      # oidc-signing-algs: "${o.L.oidcSigningAlgs.value}"
      # oidc-username-claim: "${o.L.oidcUsernameClaim.value}"
      # oidc-username-prefix: "${o.L.oidcUsernamePrefix.value}"
      # peer-advertise-ip: "${o.L.peerAdvertiseIp.value}"
      # peer-advertise-port: "${o.L.peerAdvertisePort.value}"
      # peer-ca-file: "${o.L.peerCaFile.value}"
      # service-account-jwks-uri: "${o.L.serviceAccountJwksUri.value}"
      # show-hidden-metrics-for-version: "${o.L.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${o.L.tlsCipherSuites.value}"
      # tls-min-version: "${o.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${o.L.tlsSniCertKey.value}"
      # token-auth-file: "${o.L.tokenAuthFile.value}"
      # tracing-config-file: "${o.L.tracingConfigFile.value}"
      # vmodule: "${o.L.vmodule.value}"
      # watch-cache-sizes: "${o.L.watchCacheSizes.value}"
      # authorization-webhook-config-file: "${o.L.authorizationWebhookConfigFile.value}"
      # cors-allowed-origins: "${o.L.corsAllowedOrigins.value}"
      # debug-socket-path: "${o.L.debugSocketPath.value}"
      # authorization-policy-file: "${o.L.authorizationPolicyFile.value}"
      # authorization-config: "${o.L.authorizationConfig.value}"
      # authentication-token-webhook-config-file: "${o.L.authenticationTokenWebhookConfigFile.value}"
      # authentication-config: "${o.L.authenticationConfig.value}"
      # audit-webhook-config-file: "${o.L.auditWebhookConfigFile.value}"
      # audit-policy-file: "${o.L.auditPolicyFile.value}"
      # audit-log-path: "${o.L.auditLogPath.value}"
      # allow-metric-labels: "${o.L.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${o.L.allowMetricLabelsManifest.value}"
      # admission-control: "${o.L.admissionControl.value}"
      # admission-control-config-file: "${o.L.admissionControlConfigFile.value}"
      # advertise-address: "${o.L.advertiseAddress.value}"
    `}},d={data:{value:s.A`
      allocate-node-cidrs: "${a.L.allocateNodeCidrs.value}"
      allow-untagged-cloud: "${a.L.allowUntaggedCloud.value}"
      attach-detach-reconcile-sync-period: "${a.L.attachDetachReconcileSyncPeriod.value}"
      authentication-kubeconfig: "${a.L.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${a.L.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${a.L.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${a.L.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${a.L.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${a.L.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${a.L.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${a.L.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${a.L.bindAddress.value}"
      cidr-allocator-type: "${a.L.cidrAllocatorType.value}"
      client-ca-file: "${a.L.clientCaFile.value}"
      # -> Включить, если управляете состоянием через Cloud Controller Manager
      # cloud-provider: "${a.L.cloudProvider.value}"
      cloud-provider-gce-lb-src-cidrs: "${a.L.cloudProviderGceLbSrcCidrs.value}"
      cluster-signing-cert-file: "${a.L.clusterSigningCertFile.value}"
      cluster-signing-duration: "${a.L.clusterSigningDuration.value}"
      cluster-signing-key-file: "${a.L.clusterSigningKeyFile.value}"
      concurrent-cron-job-syncs: "${a.L.concurrentCronJobSyncs.value}"
      concurrent-deployment-syncs: "${a.L.concurrentDeploymentSyncs.value}"
      concurrent-endpoint-syncs: "${a.L.concurrentEndpointSyncs.value}"
      concurrent-ephemeralvolume-syncs: "${a.L.concurrentEphemeralvolumeSyncs.value}"
      concurrent-gc-syncs: "${a.L.concurrentGcSyncs.value}"
      concurrent-horizontal-pod-autoscaler-syncs: "${a.L.concurrentHorizontalPodAutoscalerSyncs.value}"
      concurrent-job-syncs: "${a.L.concurrentJobSyncs.value}"
      concurrent-namespace-syncs: "${a.L.concurrentNamespaceSyncs.value}"
      concurrent-rc-syncs: "${a.L.concurrentRcSyncs.value}"
      concurrent-replicaset-syncs: "${a.L.concurrentReplicasetSyncs.value}"
      concurrent-resource-quota-syncs: "${a.L.concurrentResourceQuotaSyncs.value}"
      concurrent-service-endpoint-syncs: "${a.L.concurrentServiceEndpointSyncs.value}"
      concurrent-service-syncs: "${a.L.concurrentServiceSyncs.value}"
      concurrent-serviceaccount-token-syncs: "${a.L.concurrentServiceaccountTokenSyncs.value}"
      concurrent-statefulset-syncs: "${a.L.concurrentStatefulsetSyncs.value}"
      concurrent-ttl-after-finished-syncs: "${a.L.concurrentTtlAfterFinishedSyncs.value}"
      concurrent-validating-admission-policy-status-syncs: "${a.L.concurrentValidatingAdmissionPolicyStatusSyncs.value}"
      configure-cloud-routes: "${a.L.configureCloudRoutes.value}"
      contention-profiling: "${a.L.contentionProfiling.value}"
      controller-start-interval: "${a.L.controllerStartInterval.value}"
      controllers: "${a.L.controllers.value}"
      disable-attach-detach-reconcile-sync: "${a.L.disableAttachDetachReconcileSync.value}"
      disable-force-detach-on-timeout: "${a.L.disableForceDetachOnTimeout.value}"
      enable-dynamic-provisioning: "${a.L.enableDynamicProvisioning.value}"
      enable-garbage-collector: "${a.L.enableGarbageCollector.value}"
      enable-hostpath-provisioner: "${a.L.enableHostpathProvisioner.value}"
      enable-leader-migration: "${a.L.enableLeaderMigration.value}"
      endpoint-updates-batch-period: "${a.L.endpointUpdatesBatchPeriod.value}"
      endpointslice-updates-batch-period: "${a.L.endpointsliceUpdatesBatchPeriod.value}"
      feature-gates: "${a.L.featureGates.value}"
      flex-volume-plugin-dir: "${a.L.flexVolumePluginDir.value}"
      help: "${a.L.help.value}"
      horizontal-pod-autoscaler-cpu-initialization-period: "${a.L.horizontalPodAutoscalerCpuInitializationPeriod.value}"
      horizontal-pod-autoscaler-downscale-delay: "${a.L.horizontalPodAutoscalerDownscaleDelay.value}"
      horizontal-pod-autoscaler-downscale-stabilization: "${a.L.horizontalPodAutoscalerDownscaleStabilization.value}"
      horizontal-pod-autoscaler-initial-readiness-delay: "${a.L.horizontalPodAutoscalerInitialReadinessDelay.value}"
      horizontal-pod-autoscaler-sync-period: "${a.L.horizontalPodAutoscalerSyncPeriod.value}"
      horizontal-pod-autoscaler-tolerance: "${a.L.horizontalPodAutoscalerTolerance.value}"
      horizontal-pod-autoscaler-upscale-delay: "${a.L.horizontalPodAutoscalerUpscaleDelay.value}"
      http2-max-streams-per-connection: "${a.L.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${a.L.kubeApiBurst.value}"
      kube-api-content-type: "${a.L.kubeApiContentType.value}"
      kube-api-qps: "${a.L.kubeApiQps.value}"
      kubeconfig: "${a.L.kubeconfig.value}"
      large-cluster-size-threshold: "${a.L.largeClusterSizeThreshold.value}"
      leader-elect: "${a.L.leaderElect.value}"
      leader-elect-lease-duration: "${a.L.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${a.L.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${a.L.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${a.L.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${a.L.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${a.L.leaderElectRetryPeriod.value}"
      legacy-service-account-token-clean-up-period: "${a.L.legacyServiceAccountTokenCleanUpPeriod.value}"
      log-flush-frequency: "${a.L.logFlushFrequency.value}"
      log-json-info-buffer-size: "${a.L.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${a.L.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${a.L.logTextInfoBufferSize.value}"
      log-text-split-stream: "${a.L.logTextSplitStream.value}"
      logging-format: "${a.L.loggingFormat.value}"
      max-endpoints-per-slice: "${a.L.maxEndpointsPerSlice.value}"
      min-resync-period: "${a.L.minResyncPeriod.value}"
      mirroring-concurrent-service-endpoint-syncs: "${a.L.mirroringConcurrentServiceEndpointSyncs.value}"
      mirroring-endpointslice-updates-batch-period: "${a.L.mirroringEndpointsliceUpdatesBatchPeriod.value}"
      mirroring-max-endpoints-per-subset: "${a.L.mirroringMaxEndpointsPerSubset.value}"
      namespace-sync-period: "${a.L.namespaceSyncPeriod.value}"
      node-cidr-mask-size: "${a.L.nodeCidrMaskSize.value}"
      node-cidr-mask-size-ipv4: "${a.L.nodeCidrMaskSizeIpv4.value}"
      node-cidr-mask-size-ipv6: "${a.L.nodeCidrMaskSizeIpv6.value}"
      node-eviction-rate: "${a.L.nodeEvictionRate.value}"
      node-monitor-grace-period: "${a.L.nodeMonitorGracePeriod.value}"
      node-monitor-period: "${a.L.nodeMonitorPeriod.value}"
      node-startup-grace-period: "${a.L.nodeStartupGracePeriod.value}"
      node-sync-period: "${a.L.nodeSyncPeriod.value}"
      permit-address-sharing: "${a.L.permitAddressSharing.value}"
      permit-port-sharing: "${a.L.permitPortSharing.value}"
      profiling: "${a.L.profiling.value}"
      pv-recycler-increment-timeout-nfs: "${a.L.pvRecyclerIncrementTimeoutNfs.value}"
      pv-recycler-minimum-timeout-hostpath: "${a.L.pvRecyclerMinimumTimeoutHostpath.value}"
      pv-recycler-minimum-timeout-nfs: "${a.L.pvRecyclerMinimumTimeoutNfs.value}"
      pv-recycler-timeout-increment-hostpath: "${a.L.pvRecyclerTimeoutIncrementHostpath.value}"
      pvclaimbinder-sync-period: "${a.L.pvclaimbinderSyncPeriod.value}"
      requestheader-client-ca-file: "${a.L.requestheaderClientCaFile.value}"
      requestheader-extra-headers-prefix: "${a.L.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${a.L.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${a.L.requestheaderUsernameHeaders.value}"
      resource-quota-sync-period: "${a.L.resourceQuotaSyncPeriod.value}"
      root-ca-file: "${a.L.rootCaFile.value}"
      route-reconciliation-period: "${a.L.routeReconciliationPeriod.value}"
      secondary-node-eviction-rate: "${a.L.secondaryNodeEvictionRate.value}"
      secure-port: "${a.L.securePort.value}"
      service-account-private-key-file: "${a.L.serviceAccountPrivateKeyFile.value}"
      terminated-pod-gc-threshold: "${a.L.terminatedPodGcThreshold.value}"
      unhealthy-zone-threshold: "${a.L.unhealthyZoneThreshold.value}"
      use-service-account-credentials: "${a.L.useServiceAccountCredentials.value}"
      v: "${a.L.v.value}"
      version: "${a.L.version.value}"
      volume-host-allow-local-loopback: "${a.L.volumeHostAllowLocalLoopback.value}"
      # Не указывать если значение "" или undefined
      # cluster-signing-kube-apiserver-client-cert-file: "${a.L.clusterSigningKubeApiserverClientCertFile.value}"
      # cluster-signing-kube-apiserver-client-key-file: "${a.L.clusterSigningKubeApiserverClientKeyFile.value}"
      # cluster-signing-kubelet-client-cert-file: "${a.L.clusterSigningKubeletClientCertFile.value}"
      # cluster-signing-kubelet-client-key-file: "${a.L.clusterSigningKubeletClientKeyFile.value}"
      # cluster-signing-kubelet-serving-cert-file: "${a.L.clusterSigningKubeletServingCertFile.value}"
      # cluster-signing-kubelet-serving-key-file: "${a.L.clusterSigningKubeletServingKeyFile.value}"
      # cluster-signing-legacy-unknown-cert-file: "${a.L.clusterSigningLegacyUnknownCertFile.value}"
      # cluster-signing-legacy-unknown-key-file: "${a.L.clusterSigningLegacyUnknownKeyFile.value}"
      # cluster-cidr: "${a.L.clusterCidr.value}"
      # cloud-config: "${a.L.cloudConfig.value}"
      # cert-dir: "${a.L.certDir.value}"
      # allow-metric-labels-manifest: "${a.L.allowMetricLabelsManifest.value}"
      # allow-metric-labels: "${a.L.allowMetricLabels.value}"
      # disabled-metrics: "${a.L.disabledMetrics.value}"
      # leader-migration-config: "${a.L.leaderMigrationConfig.value}"
      # master: "${a.L.master.value}"
      # pv-recycler-pod-template-filepath-hostpath: "${a.L.pvRecyclerPodTemplateFilepathHostpath.value}"
      # pv-recycler-pod-template-filepath-nfs: "${a.L.pvRecyclerPodTemplateFilepathNfs.value}"
      # service-cluster-ip-range: "${a.L.serviceClusterIpRange.value}"
      # show-hidden-metrics-for-version: "${a.L.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${a.L.tlsCertFile.value}"
      # tls-cipher-suites: "${a.L.tlsCipherSuites.value}"
      # tls-min-version: "${a.L.tlsMinVersion.value}"
      # tls-private-key-file: "${a.L.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${a.L.tlsSniCertKey.value}"
      # vmodule: "${a.L.vmodule.value}"
      # volume-host-cidr-denylist: "${a.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${a.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${a.L.requestheaderAllowedNames.value}"
    `}},u={data:{value:s.A`
      authentication-kubeconfig: "${c.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${c.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${c.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${c.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${c.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${c.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${c.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${c.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${c.w.bindAddress.value}"
      client-ca-file: "${c.w.clientCaFile.value}"
      contention-profiling: "${c.w.contentionProfiling.value}"
      help: "${c.w.help.value}"
      http2-max-streams-per-connection: "${c.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${c.w.kubeApiBurst.value}"
      kube-api-content-type: "${c.w.kubeApiContentType.value}"
      kube-api-qps: "${c.w.kubeApiQps.value}"
      kubeconfig: "${c.w.kubeconfig.value}"
      leader-elect: "${c.w.leaderElect.value}"
      leader-elect-lease-duration: "${c.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${c.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${c.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${c.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${c.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${c.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${c.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${c.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${c.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${c.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${c.w.logTextSplitStream.value}"
      logging-format: "${c.w.loggingFormat.value}"
      permit-address-sharing: "${c.w.permitAddressSharing.value}"
      permit-port-sharing: "${c.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${c.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${c.w.profiling.value}"
      requestheader-extra-headers-prefix: "${c.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${c.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${c.w.requestheaderUsernameHeaders.value}"
      secure-port: "${c.w.securePort.value}"
      v: "${c.w.v.value}"
      version: "${c.w.version.value}"
      # allow-metric-labels: "${c.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${c.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${c.w.certDir.value}"
      # config: "${c.w.config.value}"
      # disabled-metrics: "${c.w.disabledMetrics.value}"
      # feature-gates: "${c.w.featureGates.value}"
      # master: "${c.w.master.value}"
      # requestheader-allowed-names: "${c.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${c.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${c.w.showHiddenMetricsForVersion.value}"
      # tls-cert-file: "${c.w.tlsCertFile.value}"
      # tls-cipher-suites: "${c.w.tlsCipherSuites.value}"
      # tls-min-version: "${c.w.tlsMinVersion.value}"
      # tls-private-key-file: "${c.w.tlsPrivateKeyFile.value}"
      # tls-sni-cert-key: "${c.w.tlsSniCertKey.value}"
      # vmodule: "${c.w.vmodule.value}"
      # write-config-to: "${c.w.writeConfigTo.value}"
    `}}},86715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","title":"baseOSSetupComponent","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","permalink":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(35671),i=n(87464),l=n(62774),d=n(1775),u=n(60513);const h={},p=void 0,m={},b=[...c.toc];function k(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430."}),"\n",(0,r.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439."}),"\n"]}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0443\u0437\u043b\u0430"}),"\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME="${a.M.clusterName.value}"
  export BASE_DOMAIN="${a.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${a.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${a.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsx)("h4",{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0443\u0437\u043b\u0430"}),"\n",(0,r.jsx)(d.A,{language:"bash",children:u.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,r.jsx)("h4",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"}),"\n",(0,r.jsxs)(l.A,{groupId:"install-pkg",children:[(0,r.jsx)(i.A,{value:"apt",children:(0,r.jsx)(d.A,{language:"bash",children:u.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,r.jsx)(i.A,{value:"yum",children:(0,r.jsx)(d.A,{language:"bash",children:u.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,r.jsx)(i.A,{value:"dnf",children:(0,r.jsx)(d.A,{language:"bash",children:u.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},86969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/allKubeconfigsComponent","title":"allKubeconfigsComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0432\u0441\u0435\u0445 kubeconfig-\u0444\u0430\u0439\u043b\u043e\u0432.","source":"@site/docs/tech-docs/kubernetes/certificates/allKubeconfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/allKubeconfigsComponent","permalink":"/tech-docs/kubernetes/certificates/allKubeconfigsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(67441),c=n(42127),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...c.RM,...a.RM];function m(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0432\u0441\u0435\u0445 ",(0,r.jsx)("code",{children:"kubeconfig"}),"-\u0444\u0430\u0439\u043b\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b ",(0,r.jsxs)(t.strong,{children:["\u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0440\u0443\u0447\u043d\u0443\u044e \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e ",(0,r.jsx)("code",{children:"kubeconfig"})]}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439."]})}),"\n",(0,r.jsxs)(l.A,{groupId:"current-master",children:[(0,r.jsx)(i.A,{value:"Init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0445 kubeconfig-\u0444\u0430\u0439\u043b\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.Ay,{})]})}),(0,r.jsx)(i.A,{value:"Join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0445 kubeconfig-\u0444\u0430\u0439\u043b\u043e\u0432"}),(0,r.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.Ay,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},87935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f super-admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${a.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${a.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${a.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/super-admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},88373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","title":"systemdUnitStartJoin","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","permalink":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478);const l={},d=void 0,u={},h=[];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm."}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a kubelet"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
  kubeadm join phase kubelet-start \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 502.252318ms
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},88869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusKubeadm","title":"statusKubeadm","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusKubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusKubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/checks/statusKubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513);n(7478);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."})}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    kubeadm certs check-expiration
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},89982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcd/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcd/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-peer \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},90221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/configFiles","title":"configFiles","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/configFiles","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(98744),c=n(71372),i=n(90407),l=n(58531),d=n(87464),u=n(62774);const h={},p=void 0,m={},b=[...i.toc,...c.toc,...l.toc,...a.toc];function k(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(u.A,{groupId:"phase",children:[(0,r.jsx)(d.A,{value:"init",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm"}),(0,r.jsx)(i.default,{}),(0,r.jsx)(c.default,{})]})}),(0,r.jsx)(d.A,{value:"join",children:(0,r.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm"}),(0,r.jsx)(l.default,{}),(0,r.jsx)(a.default,{})]})})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},90365:(e,t,n)=>{n.d(t,{Ay:()=>d,RM:()=>i});var s=n(74848),r=n(28453),o=n(7478),a=n(1775),c=n(60513);const i=[];function l(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:c.A`
  kubeadm init phase certs all \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:c.A`
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "ca" certificate and key
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com pylcozuscb] and IPs [29.64.0.1 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "front-proxy-ca" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Generating "etcd/ca" certificate and key
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com pylcozuscb] and IPs [31.129.111.153 127.0.0.1 ::1]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "sa" key and public key
`})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},90407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/setup-environments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/initMaster","permalink":"/tech-docs/kubernetes/setup-environments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(60513),l=n(1775);const d={},u=void 0,h={},p=[];function m(e){return(0,r.jsx)(c.A,{children:(0,r.jsx)(a.A,{value:"master-1",children:(0,r.jsx)(l.A,{language:"bash",children:i.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},90725:e=>{e.exports=JSON.parse('{"permalink":"/blog/kubernetes-the-hard-way","source":"@site/blog/kubernetes-the-hard-way.mdx","title":"Kubernetes The Hard Way","description":"Kubernetes The Hard Way #","date":"2025-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"Hard-Way","permalink":"/blog/tags/hard-way"}],"readingTime":9.555,"hasTruncateMarker":true,"authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"https://github.com/FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":null,"page":null}],"frontMatter":{"title":"Kubernetes The Hard Way","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-the-hard-way","authors":[{"name":"\u041f\u0443\u0442\u0438\u043b\u0438\u043d \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u041b\u044c\u0432\u043e\u0432\u0438\u0447","title":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u043e\u0440","url":"https://t.me/bezumniy_kot_work","image_url":"https://avatars.githubusercontent.com/u/107264732?v=4","socials":{"github":"FR-Solution"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4"}],"tags":["Kubernetes","Hard-Way"]},"unlisted":false}')},91018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(7478),l=n(87464),d=n(62774);const u={},h=void 0,p={},m=[];function b(e){return(0,r.jsxs)(d.A,{groupId:"install-type",children:[(0,r.jsxs)(l.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/conf.d/in-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,r.jsxs)(l.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,r.jsx)("h4",{children:"\u0428\u0430\u0431\u043b\u043e\u043d \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/conf.d/in-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},91591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsETCDComponent","title":"allStaticPodsETCDComponent","description":"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f ETCD.","source":"@site/docs/tech-docs/kubernetes/components/allStaticPodsETCDComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsETCDComponent","permalink":"/tech-docs/kubernetes/components/allStaticPodsETCDComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(38444),c=n(94472),i=n(87464),l=n(62774);const d={},u=void 0,h={},p=[...a.toc,...c.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 static pod-\u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 \u0434\u043b\u044f ETCD."}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(i.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(i.A,{value:"join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Static Pods"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(c.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},92196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","title":"main","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 `Kubernetes CA`.","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","permalink":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(16523),l=n(7785);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435:"})," \u0434\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,r.jsx)(t.code,{children:"Kubernetes CA"}),"."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},92198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","title":"rbacComponent","description":"Role bindings","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-rbac","slug":"/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(1775),l=n(60513),d=n(7478),u=n(25292);const h={},p=void 0,m={},b=[];function k(e){const t={admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Role bindings"}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,r.jsx)("h4",{children:"\u0420\u043e\u043b\u0438 \u0438 \u0441\u0432\u044f\u0437\u0438"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b kubeadm \u043c\u043e\u0433 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043b\u0438 \u043d\u043e\u0434\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0438\u043b\u0438 \u043d\u0435\u0442."}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRole
      metadata:
        name: kubeadm:get-nodes
      rules:
      - apiGroups:
        - ""
        resources:
        - nodes
        verbs:
        - get
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRoleBinding
      metadata:
        name: kubeadm:get-nodes
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: kubeadm:get-nodes
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: $\{AUTH_EXTRA_GROUPS}
      EOF
    `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, kubeadm \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 discovery) \u043c\u043e\u0433\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ConfigMap \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 (cluster-info) \u0438\u0437 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 kube-public. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a API-\u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u044c bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: Role
      metadata:
        name: kubeadm:bootstrap-signer-clusterinfo
        namespace: kube-public
      rules:
      - apiGroups:
        - ""
        resourceNames:
        - cluster-info
        resources:
        - configmaps
        verbs:
        - get
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: RoleBinding
      metadata:
        name: kubeadm:bootstrap-signer-clusterinfo
        namespace: kube-public
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: Role
        name: kubeadm:bootstrap-signer-clusterinfo
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: User
        name: system:anonymous
      EOF
    `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432 cluster-admin \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 kubeadm",":cluster-admins",". \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u2014 \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0433\u0440\u0443\u043f\u043f\u044b system",":masters",", \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b RBAC. \u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0440\u043e\u043b\u0435\u0439 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."]}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRoleBinding
      metadata:
        name: kubeadm:cluster-admins
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: cluster-admin
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: kubeadm:cluster-admins
      EOF
    `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u0433\u0440\u0443\u043f\u043f\u044b ${AUTH_EXTRA_GROUPS} (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, system",":bootstrappers",") \u043c\u043e\u0433\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c bootstrap-\u0442\u043e\u043a\u0435\u043d \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f kubelet \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443. \u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a \u0440\u043e\u043b\u0438 system",":node-bootstrapper"," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0442\u0430\u043a\u0438\u043c \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c TLS-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0434\u043b\u044f \u0443\u0437\u043b\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 CSR (CertificateSigningRequest), \u0447\u0442\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 kubeadm join."]}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRoleBinding
      metadata:
        name: kubeadm:kubelet-bootstrap
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: system:node-bootstrapper
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: $\{AUTH_EXTRA_GROUPS}
      EOF
    `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0432\u044b\u0434\u0430\u0447\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u043e\u0442 \u0443\u0437\u043b\u043e\u0432, \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 bootstrap-\u0442\u043e\u043a\u0435\u043d. \u041e\u043d \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u0435 ${AUTH_EXTRA_GROUPS} (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, system",":bootstrappers",") \u0440\u043e\u043b\u044c system",":certificates",".k8s.io:certificatesigningrequests",":nodeclient",", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 kube-controller-manager \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c CSR \u043e\u0442 kubelet \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f kubeadm join."]}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRoleBinding
      metadata:
        name: kubeadm:node-autoapprove-bootstrap
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: system:certificates.k8s.io:certificatesigningrequests:nodeclient
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: $\{AUTH_EXTRA_GROUPS}
      EOF
    `}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0434\u043e\u0431\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 kubelet. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u0435 system",":nodes"," \u043f\u0440\u0430\u0432\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0447\u0435\u0440\u0435\u0437 CertificateSigningRequest. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 \u0440\u043e\u0442\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0443\u0437\u043b\u043e\u0432 \u0431\u0435\u0437 \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430."]}),"\n"]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
      ---
      apiVersion: rbac.authorization.k8s.io/v1
      kind: ClusterRoleBinding
      metadata:
        name: kubeadm:node-autoapprove-certificate-rotation
      roleRef:
        apiGroup: rbac.authorization.k8s.io
        kind: ClusterRole
        name: system:certificates.k8s.io:certificatesigningrequests:selfnodeclient
      subjects:
      - apiGroup: rbac.authorization.k8s.io
        kind: Group
        name: system:nodes
      EOF
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
      clusterrole.rbac.authorization.k8s.io/kubeadm:get-nodes created
      role.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      rolebinding.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:cluster-admins created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:get-nodes created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:kubelet-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-certificate-rotation created
  `})})]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Bootstrap tokens"}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
      `}),(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u2014 bootstrap-\u0442\u043e\u043a\u0435\u043d, \u0438 \u043e\u043d \u043d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 kubeadm join, \u043f\u043e\u043a\u0430 \u0443 \u043d\u0435\u0451 \u0435\u0449\u0451 \u043d\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0433\u043e kubeconfig-\u0430."}),"\n"]}),(0,r.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,r.jsx)(t.p,{children:"\u041f\u043e\u0434 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u043e\u0434\u0443 \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 bootstrap-\u0442\u043e\u043a\u0435\u043d.\n\u041e\u0434\u043d\u0430\u043a\u043e, \u0434\u043b\u044f \u0446\u0435\u043b\u0435\u0439 \u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u0438 (\u0438 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438) \u043c\u044b \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043e\u0434\u0438\u043d \u043e\u0431\u0449\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."})}),(0,r.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      kind: Secret
      metadata:
        name: bootstrap-token-$\{TOKEN_ID}
        namespace: kube-system
      data:
        auth-extra-groups: $(echo -n "$AUTH_EXTRA_GROUPS" | base64)
        description: $(echo -n "$DESCRIPTION" | base64)
        expiration: $(echo -n "$EXPIRATION" | base64)
        token-id: $(echo -n "$TOKEN_ID" | base64)
        token-secret: $(echo -n "$TOKEN_SECRET" | base64)
        usage-bootstrap-authentication: $(echo -n "$USAGE_BOOTSTRAP_AUTHENTIFICATION" | base64)
        usage-bootstrap-signing: $(echo -n "$USAGE_BOOTSTRAP_SIGNING" | base64)
      type: bootstrap.kubernetes.io/token
      EOF
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
      secret/bootstrap-token-fjt9ex configured
  `})})]}),(0,r.jsxs)(n,{className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:"Cluster-Info"}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
        export KUBE_CA_CRT_BASE64=$(base64 -w 0 /etc/kubernetes/pki/ca.crt)
        export CLUSTER_API_URL=https://api.${d.M.clusterName.value}.${d.M.kubernetesBaseDomain.value}
    `}),(0,r.jsx)("h4",{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0421luster-info"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"cluster-info \u2014 \u044d\u0442\u043e \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043b\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e bootstrap-\u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 kubeadm."}),"\n"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\ud83d\udd10 \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 kubeconfig \u0441 CA \u0438 \u0430\u0434\u0440\u0435\u0441\u043e\u043c API."}),"\n",(0,r.jsx)(t.li,{children:"\ud83d\udce5 \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kubeadm join \u0434\u043b\u044f discovery."}),"\n",(0,r.jsx)(t.li,{children:"\ud83c\udf10 \u0414\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 kube-public."}),"\n",(0,r.jsx)(t.li,{children:"\u2705 \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u043e\u0434\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u043e\u0434\u043b\u0438\u043d\u043d\u043e\u0441\u0442\u044c API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043e \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."}),"\n"]}),(0,r.jsx)(i.A,{children:l.A`
      kubectl \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      data:
        kubeconfig: |
          apiVersion: v1
          clusters:
          - cluster:
              certificate-authority-data: $\{KUBE_CA_CRT_BASE64}
              server: $\{CLUSTER_API_URL}:${u.L.securePort.value}
            name: ""
          contexts: null
          current-context: ""
          kind: Config
          preferences: {}
          users: null
      kind: ConfigMap
      metadata:
        name: cluster-info
        namespace: kube-public

      EOF
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
      configmap/cluster-info created
  `})})]})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase bootstrap-token \\
        --config=${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  [bootstrap-token] Using token: fjt9ex.lwzqgdlvoxtqk4yw
  [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
  [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
  [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
  [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
`})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},92374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","permalink":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(6353),c=n(7478),i=n(1775),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
    cat <<EOF > ${a.$.frontProxyCA.crtConf}
    [req]
    distinguished_name = req_distinguished_name
    x509_extensions    = v3_ca
    prompt             = no

    [req_distinguished_name]
    CN = ${a.$.frontProxyCA.cname}

    [v3_ca]
    keyUsage = critical, keyCertSign, keyEncipherment, digitalSignature
    basicConstraints = critical,CA:TRUE
    EOF
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.frontProxyCA.keyPath} ${a.$.frontProxyCA.keySize}
  `}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.frontProxyCA.crtPath} \\
    -config ${a.$.frontProxyCA.crtConf}
  `}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
    ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.frontProxyCA.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/etcd-settings","title":"etcd-settings","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445.","source":"@site/docs/tech-docs/etcd/components/etcd/setupJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/etcd-settings","permalink":"/tech-docs/etcd/components/etcd/etcd-settings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"etcd-settings"},"sidebar":"techDocs","previous":{"title":"5.1.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/tech-docs/etcd/certificates/all-certificates"},"next":{"title":"5.1.3.2. \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430","permalink":"/tech-docs/etcd/components/etcd/add-members"}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(18567),l=n(47727);const d={id:"etcd-settings"},u=void 0,h={},p=[...i.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445."})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(a.A,{value:"HardWay",children:(0,r.jsx)(i.default,{})}),(0,r.jsx)(a.A,{value:"Kubeadm",children:(0,r.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","permalink":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,r.jsx)(c.A,{language:"bash",children:i.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},96984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-configs/allUploadConfigsComponent","title":"allUploadConfigsComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 kubeadm \u0438 kubelet \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0432 \u0432\u0438\u0434\u0435 ConfigMap. \u0422\u0430\u043a\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b kubeadm join, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-configs/allUploadConfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-configs","slug":"/tech-docs/kubernetes/additional-setup/upload-configs/allUploadConfigsComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-configs/allUploadConfigsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(36127),c=n(87464),i=n(62774);const l={},d=void 0,u={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm"})," \u0438 ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 \u0432 \u0432\u0438\u0434\u0435 ",(0,r.jsx)(t.code,{children:"ConfigMap"}),". \u0422\u0430\u043a\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0443\u0437\u043b\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430.\n\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0435\u0434\u0438\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u0432\u0441\u0435\u043c\u0438 \u043d\u043e\u0434\u0430\u043c\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u0430\u043a ",(0,r.jsx)(t.code,{children:"master"}),", \u0442\u0430\u043a \u0438 ",(0,r.jsx)(t.code,{children:"worker"}),"-\u0443\u0437\u043b\u044b."]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"phase",children:[(0,r.jsx)(c.A,{value:"init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(c.A,{value:"join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(t.p,{children:"TODO"})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},97106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775),i=n(42567),l=n(63770);const d={data:{value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.crictl.path}"


      LOG_TAG="crictl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating crictl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
        curl -fsSL -o crictl.tar.gz "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o crictl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf crictl.tar.gz

        logger -t "$LOG_TAG" "[INFO] Installing crictl..."
        install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
      fi
    `}};var u=n(87464),h=n(62774);const p={},m=void 0,b={},k=[];function f(e){return(0,r.jsxs)(h.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/crictl
          `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${l.M.crictl.value}"
            REPOSITORY="${i.m.crictl.baseUrl}"
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${d.data.value}
            EOF
          `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update in-cloud component crictl
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.crictl.value}"
                REPOSITORY="${i.m.crictl.baseUrl}"
          `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${d.data.value}
          `}),(0,r.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(c.A,{language:"yaml",children:a.A`
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update in-cloud component crictl
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,r.jsx)(c.A,{language:"bash",children:a.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},97118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/etcd/staticPodInitComponent","title":"staticPodInitComponent","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/etcd/staticPodInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/etcd","slug":"/tech-docs/kubernetes/components/etcd/staticPodInitComponent","permalink":"/tech-docs/kubernetes/components/etcd/staticPodInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(31798),i=n(63770),l=n(10119),d=n(60513),u=n(1775),h=n(90407);const p={},m=void 0,b={},k=[...h.toc];function f(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsx)(u.A,{language:"bash",children:d.A`
  export CLUSTER_NAME=${a.M.clusterName.value}
  export BASE_DOMAIN=${a.M.kubernetesBaseDomain.value}
  export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}
  export FULL_HOST_NAME="${a.M.virtualMachineFullName.value}"
  export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${l.D.initialAdvertisePeerUrls.value}"
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"Static Pod ETCD"}),(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),(0,r.jsx)(u.A,{language:"bash",children:d.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${c.h.etcdServer.portNumber}
    creationTimestamp: null
    labels:
      component: etcd
      tier: control-plane
    name: etcd
    namespace: kube-system
  spec:
    containers:
    - command:
      - etcd
      - --advertise-client-urls=${l.D.advertiseClientUrls.value}
      - --auto-compaction-retention=${l.D.autoCompactionRetention.value}
      - --cert-file=${l.D.certFile.value}
      - --client-cert-auth=${l.D.clientCertAuth.value}
      - --data-dir=${l.D.dataDir.value}
      - --election-timeout=${l.D.electionTimeout.value}
      - --experimental-initial-corrupt-check=true
      - --experimental-watch-progress-notify-interval=5s
      - --heartbeat-interval=${l.D.heartbeatInterval.value}
      - --initial-advertise-peer-urls=${l.D.initialAdvertisePeerUrls.value}
      - --initial-cluster=${l.D.initialCluster.value}
      - --key-file=${l.D.keyFile.value}
      - --listen-client-urls=${l.D.listenClientUrls.value}
      - --listen-metrics-urls=${l.D.listenMetricsUrls.value}
      - --listen-peer-urls=${l.D.listenPeerUrls.value}
      - --logger=${l.D.logger.value}
      - --max-snapshots=${l.D.maxSnapshots.value}
      - --max-wals=${l.D.maxWals.value}
      - --metrics=${l.D.metrics.value}
      - --name=${l.D.name.value}
      - --peer-cert-file=${l.D.peerCertFile.value}
      - --peer-client-cert-auth=${l.D.peerClientCertAuth.value}
      - --peer-key-file=${l.D.peerKeyFile.value}
      - --peer-trusted-ca-file=${l.D.peerTrustedCAFile.value}
      - --snapshot-count=${l.D.snapshotCount.value}
      - --quota-backend-bytes=${l.D.quotaBackendBytes.value}
      - --trusted-ca-file=${l.D.trustedCAFile.value}
      image: ${a.M.baseDockerRegistry.value}/etcd:${i.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      name: etcd
      resources:
        requests:
          cpu: 100m
          memory: 100Mi
      startupProbe:
        failureThreshold: 24
        httpGet:
          host: 127.0.0.1
          path: /health?serializable=false
          port: ${c.h.etcdMetricServer.portNumber}
          scheme: HTTP
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: /var/lib/etcd
        name: etcd-data
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/pki/etcd
        name: etcd-certs
    hostNetwork: true
    priority: 2000001000
    priorityClassName: system-node-critical
    securityContext:
      seccompProfile:
        type: RuntimeDefault
    volumes:
    - hostPath:
        path: ${a.M.kubernetesBaseFolderPath.value}/pki/etcd
        type: DirectoryOrCreate
      name: etcd-certs
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  status: {}
  EOF
`})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},97373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(21327),c=n(70667);const i={},l=void 0,d={},u=[...c.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,r.jsxs)(t,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient/checks","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.kubernetesAdminClient.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},97697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),c=n(1775);const i={},l=void 0,d={},u=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,r.jsx)(c.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:a.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},97836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(12141);const c={},i=void 0,l={},d=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,r.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,r.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,r.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,r.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,r.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},98428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/markingInitComponent","title":"markingInitComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a.","source":"@site/docs/tech-docs/kubernetes/additional-setup/marking/markingInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/markingInitComponent","permalink":"/tech-docs/kubernetes/additional-setup/marking/markingInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(1775),l=n(60513),d=n(7478),u=n(90407);const h={},p=void 0,m={},b=[...u.toc];function k(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0443\u044e \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442\u044c \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043e\u0442 \u043d\u0435\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0433\u0440\u0443\u0437\u043e\u043a."})}),"\n",(0,r.jsx)(u.default,{}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${d.M.clusterName.value}
  export BASE_DOMAIN=${d.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${d.M.virtualMachineFullName.value}
`}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0443\u0437\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com labeled
`})}),(0,r.jsx)("h4",{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0443\u0437\u043b\u0430"}),(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${d.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com modified
`})})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(i.A,{language:"bash",children:l.A`
      kubeadm init phase mark-control-plane \\
        --config=${d.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:l.A`
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
`})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},98744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfig","title":"joinConfig","description":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/configs/joinConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","permalink":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(25292),i=n(60513),l=n(7478),d=n(31798);const u={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440 \u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(a.A,{language:"bash",children:i.A`
      export MACHINE_LOCAL_ADDRESS="${l.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59

    `}),(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubeadm \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443"}),(0,r.jsx)(a.A,{children:i.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${d.h.kubeAPIServer.portNumber}
      certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${c.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "fjt9ex.lwzqgdlvoxtqk4yw"
    kind: JoinConfiguration
    EOF
  `})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},98905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(22609),c=n(84818);const i={},l=void 0,d={},u=[...a.toc,...c.toc];function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,r.jsx)(c.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h()}},99119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(87464),c=n(62774),i=n(66685),l=n(92374),d=n(38816),u=n(29648),h=n(23831);const p={},m=void 0,b={},k=[...i.toc,...d.toc,...u.toc,...l.toc,...h.toc];function f(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(u.default,{})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(h.default,{})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},99481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","title":"downloadCAKubeadmComponent","description":"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:","source":"@site/docs/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","permalink":"/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(7478),c=n(1775),i=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare download-certs \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},99647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusOpenssl","title":"statusOpenssl","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusOpenssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusOpenssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/checks/statusOpenssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(1775),c=n(60513),i=n(6353),l=n(7478);const d={},u=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0412\u041d\u0418\u041c\u0410\u041d\u0418\u0415!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,r.jsx)(a.A,{language:"bash",children:c.A`
    ${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${i.$.etcdServer.crtPath}
  `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:c.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  kubelet-client-current     Oct 22, 2025 22:06 UTC   364d            kubernetes              no
`})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);