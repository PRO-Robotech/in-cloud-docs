"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1200,2770,3515,3843,4582,5889,6759,7224,7393,7579,9689],{85266(e,t,n){n.d(t,{Ay:()=>u,RM:()=>i});var s=n(74848),r=n(28453),a=n(44349),c=n(57390),l=n(60513);const i=[];function o(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"danger",children:(0,s.jsx)(t.p,{children:"\u0418\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443: \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 Join \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 kubeconfigs \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u2014 kubeadm \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u0438\u0445 \u0432\u0441\u0435 \u0441\u0440\u0430\u0437\u0443, \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0451\u043c\u0435."})}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm join phase control-plane-prepare kubeconfig \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubeconfig] Generating kubeconfig files
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11668(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"admin"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${c.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${c.$.kubernetesAdminClient.crtPath} \\
    --client-key=${c.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/admin.conf
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},59894(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/kubeconfig
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesAdminClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesAdminClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0438"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesAdminClient.keyPath} ${c.$.kubernetesAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${c.$.kubernetesAdminClient.keyPath} \\
    -out    ${c.$.kubernetesAdminClient.csrPath} \\
    -config ${c.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesAdminClient.csrPath} \\
    -out ${c.$.kubernetesAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesAdminClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},92141(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f super-admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>super-admin</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-super-admin",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${c.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${c.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${c.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},94811(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
    mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
    mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
    mkdir -p ${l.M.kubernetesBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesSuperAdminClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesSuperAdminClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesSuperAdminClient.cname}
  O  = system:masters

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesSuperAdminClient.keyPath} ${c.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${c.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${c.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${c.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesSuperAdminClient.csrPath} \\
    -out ${c.$.kubernetesSuperAdminClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesSuperAdminClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},15925(e,t,n){n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>v,default:()=>M,frontMatter:()=>C,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","title":"allKubeconfigsAppsJoinComponent","description":"Super Admin","source":"@site/docs/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","permalink":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(94811),l=n(92141),i=n(59894),o=n(11668),u=n(64795),d=n(42824),h=n(82302),k=n(13592),b=n(49353),m=n(8473),p=n(85266),f=n(21186),g=n(65742),x=n(27653),$=n(9792),A=n(76331);const C={},v=void 0,P={},y=[...c.toc,...l.toc,...p.RM,...i.toc,...o.toc,...p.RM,...u.toc,...d.toc,...p.RM,...h.toc,...k.toc,...p.RM,...b.toc,...m.toc,...p.RM];function j(e){const t={code:"code",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(A.A,{groupId:"Certs-APPS",children:[(0,r.jsx)($.A,{value:"Super Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,r.jsxs)(A.A,{groupId:"install-type",children:[(0,r.jsxs)($.A,{value:"HardWay",children:[(0,r.jsx)(c.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesSuperAdminClient.crtPath,certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)($.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)($.A,{value:"Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,r.jsxs)(A.A,{groupId:"install-type",children:[(0,r.jsxs)($.A,{value:"HardWay",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesAdminClient.crtPath,certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)($.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)($.A,{value:"Controller",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,r.jsxs)(A.A,{groupId:"install-type",children:[(0,r.jsxs)($.A,{value:"HardWay",children:[(0,r.jsx)(u.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesControllerManagerClient.crtPath,certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)($.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)($.A,{value:"Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,r.jsxs)(A.A,{groupId:"install-type",children:[(0,r.jsxs)($.A,{value:"HardWay",children:[(0,r.jsx)(h.default,{}),(0,r.jsx)(k.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesSchedulerClient.crtPath,certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)($.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)($.A,{value:"Kubelet",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,r.jsx)(x.A,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,r.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,r.jsxs)(A.A,{groupId:"install-type",children:[(0,r.jsxs)($.A,{value:"HardWay",children:[(0,r.jsx)(b.default,{}),(0,r.jsx)(m.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubeletCurrentClient.crtPath,certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]}),(0,r.jsxs)($.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]})]})]})})]})}function M(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},42824(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f <code>controller-manager-client</code>",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",level:4}];function b(e){const t={code:"code",h4:"h4",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:o.A`
  export CLUSTER_NAME="${l.M.clusterName.value}"
  export BASE_DOMAIN="${l.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${l.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${l.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsxs)(t.h4,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-kubeconfig-\u0434\u043b\u044f-controller-manager-client",children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Kubeconfig \u0434\u043b\u044f ",(0,r.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${c.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${c.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${c.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/controller-manager.conf
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},64795(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesControllerManagerClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesControllerManagerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesControllerManagerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesControllerManagerClient.keyPath} ${c.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${c.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${c.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesControllerManagerClient.csrPath} \\
    -out ${c.$.kubernetesControllerManagerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesControllerManagerClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},13592(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){const t={p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:o.A`
      export CLUSTER_NAME="${l.M.clusterName.value}"
      export BASE_DOMAIN="${l.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${l.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${l.M.virtualMachineFullName.value}"
  `}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${c.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${c.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${c.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/scheduler.conf
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},82302(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesSchedulerClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesSchedulerClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesSchedulerClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesSchedulerClient.keyPath} ${c.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.kubernetesSchedulerClient.keyPath} \\
    -out ${c.$.kubernetesSchedulerClient.csrPath} \\
    -config ${c.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesSchedulerClient.csrPath} \\
    -out ${c.$.kubernetesSchedulerClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesSchedulerClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},8473(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){const t={p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{language:"bash",children:o.A`
  export CLUSTER_NAME="${l.M.clusterName.value}"
  export BASE_DOMAIN="${l.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${l.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${l.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f Kubeconfig"})}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${c.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${c.$.kubeletClient.crtPath} \\
    --client-key=${c.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/kubelet.conf
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},49353(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const u={},d=void 0,h={},k=[];function b(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${l.M.clusterName.value}
  export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${l.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}
`}),"\n",(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${l.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,r.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubeletClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubeletClient.keySize}
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
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubeletClient.keyPath} ${c.$.kubeletClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.kubeletClient.keyPath} \\
    -out ${c.$.kubeletClient.csrPath} \\
    -config ${c.$.kubeletClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubeletClient.csrPath} \\
    -out ${c.$.kubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubeletClient.crtConf}
`}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  cat ${c.$.kubeletClient.crtPath} ${c.$.kubeletClient.keyPath} >> ${c.$.kubeletNowClient.crtPath}
  ln -s ${c.$.kubeletNowClient.crtPath} ${c.$.kubeletCurrentClient.crtPath}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},27653(e,t,n){n.d(t,{A:()=>E});var s=n(96540),r=n(74848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),a=t.filter(e=>e!==n),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,r.jsx)(r.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(34164),l=n(21312),i=n(17559);const o="admonition_xJq3",u="admonitionHeading_Gvgb",d="admonitionIcon_Rf37",h="admonitionContent_BuS1";function k({type:e,className:t,children:n}){return(0,r.jsx)("div",{className:(0,c.A)(i.G.common.admonition,i.G.common.admonitionType(e),o,t),children:n})}function b({icon:e,title:t}){return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("span",{className:d,children:e}),t]})}function m({children:e}){return e?(0,r.jsx)("div",{className:h,children:e}):null}function p(e){const{type:t,icon:n,title:s,children:a,className:c}=e;return(0,r.jsxs)(k,{type:t,className:c,children:[s||n?(0,r.jsx)(b,{title:s,icon:n}):null,(0,r.jsx)(m,{children:a})]})}function f(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,r.jsx)(f,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,r.jsx)(p,{...g,...e,className:(0,c.A)("alert alert--secondary",e.className),children:e.children})}function $(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const A={icon:(0,r.jsx)($,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function C(e){return(0,r.jsx)(p,{...A,...e,className:(0,c.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const P={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,r.jsx)(p,{...P,...e,className:(0,c.A)("alert alert--info",e.className),children:e.children})}function j(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const M={icon:(0,r.jsx)(j,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function F(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const S={icon:(0,r.jsx)(F,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,r.jsx)(j,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const B={...{note:x,tip:C,info:y,warning:function(e){return(0,r.jsx)(p,{...M,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(p,{...S,...e,className:(0,c.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(x,{title:"secondary",...e}),important:e=>(0,r.jsx)(y,{title:"important",...e}),success:e=>(0,r.jsx)(C,{title:"success",...e}),caution:function(e){return(0,r.jsx)(p,{...N,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=a(e),n=(s=t.type,B[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),B.info));var s;return(0,r.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>p});var s=n(96540),r=n(34164),a=n(63427),c=n(92303),l=n(41422);const i="details_lb9f",o="isBrowser_bmU9",u="collapsibleContent_i85q";var d=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function b({summary:e,children:t,...n}){(0,a.A)().collectAnchor(n.id);const b=(0,c.A)(),m=(0,s.useRef)(null),{collapsed:p,setCollapsed:f}=(0,l.u)({initialState:!n.open}),[g,x]=(0,s.useState)(n.open),$=s.isValidElement(e)?e:(0,d.jsx)("summary",{children:e??"Details"});return(0,d.jsxs)("details",{...n,ref:m,open:g,"data-collapsed":p,className:(0,r.A)(i,b&&o,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&k(t,m.current)&&(e.preventDefault(),p?(f(!1),x(!0)):f(!0))},children:[$,(0,d.jsx)(l.N,{lazy:!1,collapsed:p,onCollapseTransitionEnd:e=>{f(e),x(!e)},children:(0,d.jsx)("div",{className:u,children:t})})]})}const m="details_b_Ee";function p({...e}){return(0,d.jsx)(b,{...e,className:(0,r.A)("alert alert--info",m,e.className)})}},21186(e,t,n){n.d(t,{A:()=>u});n(96540);var s=n(57390),r=n(27653),a=n(69623),c=n(28774),l=n(60513),i=n(44349),o=n(74848);const u=({method:e,certPath:t,certDisplayName:n,caDisplayName:u})=>{const d="openssl"===e,h=d?`${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",k=d?(0,o.jsxs)(o.Fragment,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:",(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)(c.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,o.jsx)(o.Fragment,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),b=l.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(u??"").padEnd(24)}no
  `;return(0,o.jsxs)(a.A,{className:"custom-blue-block",summary:(0,o.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),children:[(0,o.jsx)(r.A,{type:"warning",title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",children:k}),(0,o.jsx)(s.A,{language:"bash",children:h}),(0,o.jsx)(r.A,{type:"note",title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:(0,o.jsx)(s.A,{language:"bash",children:b})})]})}},65742(e,t,n){n.d(t,{$:()=>r});var s=n(44349);const r={etcdCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);