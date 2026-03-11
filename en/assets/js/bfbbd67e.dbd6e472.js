"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[291,337,499,644,843,1026,1427,2816,3187,3857,4693,4927,4958,5176,5248,5396,5465,5522,6078,6401,6603,7713,7979,9026],{8174(e,t,n){n.d(t,{Ay:()=>u,RM:()=>o});var s=n(74848),r=n(28453),c=n(44349),a=n(57390),i=n(60513);const o=[];function l(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which kubeconfigs to generate \u2014 kubeadm creates them all at once, in full."})}),"\n",(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare kubeconfig \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubeconfig] Generating kubeconfig files
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},96728(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase kubeconfig admin \\
    --config=${a.M.kubernetesBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},42081(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"Kubeconfig setup for admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[{value:"Kubeconfig setup for <code>admin</code>",id:"kubeconfig-setup-for-admin",level:4}];function k(e){const t={code:"code",h4:"h4",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"kubeconfig-setup-for-admin",children:["Kubeconfig setup for ",(0,r.jsx)(t.code,{children:"admin"})]}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${a.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${a.$.kubernetesAdminClient.crtPath} \\
    --client-key=${a.$.kubernetesAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/admin.conf

  kubectl config use-context default \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},51692(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(9754),l=n(96728),u=n(42081),d=n(21186),h=n(65742);const m={},k=void 0,b={},p=[...o.toc,...u.toc,...l.toc];function f(e){return(0,r.jsxs)(i.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesAdminClient.crtPath,certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.A,{method:"kubeadm",certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},9754(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Working directory"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/kubeconfig
`}),"\n",(0,r.jsx)("h4",{children:"Configuration"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)("h4",{children:"Private keys"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesAdminClient.keyPath} ${a.$.kubernetesAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"CSR generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesAdminClient.keyPath} \\
    -out    ${a.$.kubernetesAdminClient.csrPath} \\
    -config ${a.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"CSR signing"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},65414(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},29163(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"Kubeconfig setup for super-admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[{value:"Kubeconfig setup for <code>super-admin</code>",id:"kubeconfig-setup-for-super-admin",level:4}];function k(e){const t={code:"code",h4:"h4",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h4,{id:"kubeconfig-setup-for-super-admin",children:["Kubeconfig setup for ",(0,r.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority=${a.$.kubernetesCA.crtPath} \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-credentials system:node:$\{HOST_NAME} \\
    --client-certificate=${a.$.kubernetesSuperAdminClient.crtPath} \\
    --client-key=${a.$.kubernetesSuperAdminClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{HOST_NAME} \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf

  kubectl config use-context default \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},16260(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(22541),l=n(65414),u=n(29163),d=n(21186),h=n(65742);const m={},k=void 0,b={},p=[...o.toc,...u.toc,...l.toc];function f(e){return(0,r.jsxs)(i.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesSuperAdminClient.crtPath,certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.A,{method:"kubeadm",certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},22541(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Working directory"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,r.jsx)("h4",{children:"Configuration"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)("h4",{children:"Private key generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSuperAdminClient.keyPath} ${a.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"CSR generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${a.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${a.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"CSR signing"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},13708(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>b,default:()=>x,frontMatter:()=>k,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","title":"allKubeconfigsAppsInitComponent","description":"Super Admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(75246),i=n(70414),o=n(51692),l=n(16260),u=n(51359),d=n(27653),h=n(9792),m=n(76331);const k={},b=void 0,p={},f=[...l.toc,...o.toc,...u.toc,...a.toc,...i.toc];function g(e){const t={code:"code",p:"p",...(0,c.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(m.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(h.A,{value:"Super Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,r.jsx)(l.default,{})]})}),(0,r.jsx)(h.A,{value:"Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,r.jsx)(o.default,{})]})}),(0,r.jsx)(h.A,{value:"Controller",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,r.jsx)(u.default,{})]})}),(0,r.jsx)(h.A,{value:"Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(h.A,{value:"Kubelet",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,r.jsx)(d.A,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Note! Can be signed via ",(0,r.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,r.jsx)(i.default,{})]})})]})}function x(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},33798(e,t,n){n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>M,frontMatter:()=>j,metadata:()=>s,toc:()=>P});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","title":"allKubeconfigsAppsJoinComponent","description":"Super Admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(22541),i=n(29163),o=n(9754),l=n(42081),u=n(70204),d=n(89462),h=n(34170),m=n(71918),k=n(6242),b=n(35132),p=n(8174),f=n(21186),g=n(65742),x=n(27653),A=n(9792),C=n(76331);const j={},v=void 0,y={},P=[...a.toc,...i.toc,...p.RM,...o.toc,...l.toc,...p.RM,...u.toc,...d.toc,...p.RM,...h.toc,...m.toc,...p.RM,...k.toc,...b.toc,...p.RM];function $(e){const t={code:"code",p:"p",...(0,c.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(C.A,{groupId:"Certs-APPS",children:[(0,r.jsx)(A.A,{value:"Super Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,r.jsxs)(C.A,{groupId:"install-type",children:[(0,r.jsxs)(A.A,{value:"HardWay",children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesSuperAdminClient.crtPath,certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(A.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)(A.A,{value:"Admin",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,r.jsxs)(C.A,{groupId:"install-type",children:[(0,r.jsxs)(A.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesAdminClient.crtPath,certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(A.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)(A.A,{value:"Controller",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,r.jsxs)(C.A,{groupId:"install-type",children:[(0,r.jsxs)(A.A,{value:"HardWay",children:[(0,r.jsx)(u.default,{}),(0,r.jsx)(d.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesControllerManagerClient.crtPath,certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(A.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)(A.A,{value:"Scheduler",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,r.jsxs)(C.A,{groupId:"install-type",children:[(0,r.jsxs)(A.A,{value:"HardWay",children:[(0,r.jsx)(h.default,{}),(0,r.jsx)(m.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubernetesSchedulerClient.crtPath,certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(A.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,r.jsx)(A.A,{value:"Kubelet",children:(0,r.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,r.jsx)("summary",{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,r.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,r.jsx)(x.A,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Note! Can be signed via ",(0,r.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,r.jsxs)(C.A,{groupId:"install-type",children:[(0,r.jsxs)(A.A,{value:"HardWay",children:[(0,r.jsx)(k.default,{}),(0,r.jsx)(b.default,{}),(0,r.jsx)(f.A,{method:"openssl",certPath:g.$.kubeletCurrentClient.crtPath,certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(A.A,{value:"Kubeadm",children:[(0,r.jsx)(p.Ay,{}),(0,r.jsx)(f.A,{method:"kubeadm",certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]})]})]})})]})}function M(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)($,{...e})}):$(e)}},92741(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/all-kubeconfigs","title":"5.2.2.3. Kubeconfigs","description":"Kubeconfig is a configuration file that provides access to a Kubernetes cluster. It contains information about API servers, user credentials (such as tokens or certificates), and contexts that define which cluster and user are being used. Kubeconfig provides authentication and authorization when interacting with the cluster through kubectl or other clients, allowing secure management of cluster resources and settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/all-kubeconfigs","permalink":"/en/tech-docs/kubernetes/certificates/components/all-kubeconfigs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubeconfigs","title":"5.2.2.3. Kubeconfigs"},"sidebar":"techDocs","previous":{"title":"5.2.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/en/tech-docs/kubernetes/certificates/components/all-certificates"},"next":{"title":"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442","permalink":"/en/tech-docs/kubernetes/certificates/service-account/all-service-account"}}');var r=n(74848),c=n(28453),a=n(13708),i=n(33798),o=n(9792),l=n(76331);const u={id:"all-kubeconfigs",title:"5.2.2.3. Kubeconfigs"},d=void 0,h={},m=[...a.toc,...i.toc];function k(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,c.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Kubeconfig is a configuration file that provides access to a Kubernetes cluster. It contains information about API servers, user credentials (such as tokens or certificates), and contexts that define which cluster and user are being used. Kubeconfig provides authentication and authorization when interacting with the cluster through kubectl or other clients, allowing secure management of cluster resources and settings."}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["We create ",(0,r.jsx)(t.code,{children:"kubeconfig"})," files for components and users. This ensures secure and controlled connection to the API server."]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"phase",children:[(0,r.jsx)(o.A,{value:"init",label:"Init",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Creating kubeconfig configurations and certificates"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,r.jsx)(a.default,{})]})}),(0,r.jsx)(o.A,{value:"join",label:"Join",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"Creating kubeconfig configurations and certificates"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,r.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},19526(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},89462(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[{value:"Kubeconfig setup for <code>controller-manager-client</code>",id:"kubeconfig-setup-for-controller-manager-client",level:4}];function k(e){const t={code:"code",h4:"h4",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${i.M.clusterName.value}"
  export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsxs)(t.h4,{id:"kubeconfig-setup-for-controller-manager-client",children:["Kubeconfig setup for ",(0,r.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubernetesControllerManagerClient.crtPath} \\
    --client-key=${a.$.kubernetesControllerManagerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/controller-manager.conf

  kubectl config use-context default \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/controller-manager.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},51359(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"Purpose: kube-controller-manager client certificate for authentication to the API Server. Embedded in the controller-manager.conf kubeconfig and used for every controller-manager request to kube-apiserver. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(70204),l=n(19526),u=n(89462),d=n(21186),h=n(65742);const m={},k=void 0,b={},p=[...o.toc,...u.toc,...l.toc];function f(e){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Purpose:"})," kube-controller-manager client certificate for authentication to the API Server. Embedded in the ",(0,r.jsx)(t.code,{children:"controller-manager.conf"})," kubeconfig and used for every controller-manager request to kube-apiserver. Signed by ",(0,r.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesControllerManagerClient.crtPath,certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.A,{method:"kubeadm",certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]})]})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},70204(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Working directory"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,r.jsx)("h4",{children:"Configuration"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)("h4",{children:"Private key generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerClient.keyPath} ${a.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"CSR generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${a.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${a.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"CSR signing"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},58483(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(60513),i=n(57390),o=n(44349);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:a.A`
  #### Kube Scheduler certificate generation
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},71918(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){const t={p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${i.M.clusterName.value}"
      export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
  `}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Kubeconfig creation instructions"})}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubernetesSchedulerClient.crtPath} \\
    --client-key=${a.$.kubernetesSchedulerClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/scheduler.conf

  kubectl config use-context default \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/scheduler.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},63238(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(34170),l=n(58483),u=n(71918),d=n(21186),h=n(65742);const m={},k=void 0,b={},p=[...o.toc,...u.toc,...l.toc];function f(e){return(0,r.jsxs)(i.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesSchedulerClient.crtPath,certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.A,{method:"kubeadm",certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},34170(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Working directory"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,r.jsx)("h4",{children:"Configuration"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)("h4",{children:"Private key generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerClient.keyPath} ${a.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"CSR generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesSchedulerClient.keyPath} \\
    -out ${a.$.kubernetesSchedulerClient.csrPath} \\
    -config ${a.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"CSR signing"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},75246(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(63238);const i={},o=void 0,l={},u=[...a.toc];function d(e){return(0,r.jsx)(a.default,{})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},29484(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(60513),i=n(57390),o=n(44349);const l={},u=void 0,d={},h=[];function m(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:a.A`
  #### Certificate generation
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,r.jsx)("h4",{children:"Certificate rotation"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,r.jsx)(i.A,{language:"bash",children:a.A`
  #### Certificate rotation
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},35132(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){const t={p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${i.M.clusterName.value}"
  export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
`}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Kubeconfig creation instructions"})}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  kubectl config set-cluster kubernetes \\
    --certificate-authority="${a.$.kubernetesCA.crtPath}" \\
    --embed-certs=true \\
    --server=https://127.0.0.1:6443 \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-credentials system:node:$\{FULL_HOST_NAME} \\
    --client-certificate=${a.$.kubeletClient.crtPath} \\
    --client-key=${a.$.kubeletClient.keyPath} \\
    --embed-certs=true \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config set-context default \\
    --cluster=kubernetes \\
    --user=system:node:$\{FULL_HOST_NAME} \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf

  kubectl config use-context default \\
    --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},70414(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>g,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(6242),l=n(29484),u=n(35132),d=n(21186),h=n(65742);const m={},k=void 0,b={},p=[...o.toc,...u.toc,...l.toc];function f(e){return(0,r.jsxs)(i.A,{groupId:"install-type",children:[(0,r.jsxs)(a.A,{value:"HardWay",children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(u.default,{}),(0,r.jsx)(d.A,{method:"openssl",certPath:h.$.kubeletCurrentClient.crtPath,certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]}),(0,r.jsxs)(a.A,{value:"Kubeadm",children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(d.A,{method:"kubeadm",certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]})]})}function g(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f()}},6242(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const u={},d=void 0,h={},m=[];function k(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"Environment variables"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
`}),"\n",(0,r.jsx)("h4",{children:"Working directory"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${i.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,r.jsx)("h4",{children:"Configuration"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)("h4",{children:"Private key generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletClient.keyPath} ${a.$.kubeletClient.keySize}
`}),"\n",(0,r.jsx)("h4",{children:"CSR generation"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubeletClient.keyPath} \\
    -out ${a.$.kubeletClient.csrPath} \\
    -config ${a.$.kubeletClient.crtConf}
`}),"\n",(0,r.jsx)("h4",{children:"CSR signing"}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,r.jsx)(o.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletClient.crtPath} ${a.$.kubeletClient.keyPath} >> ${a.$.kubeletNowClient.crtPath}
  ln -s ${a.$.kubeletNowClient.crtPath} ${a.$.kubeletCurrentClient.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k()}},27653(e,t,n){n.d(t,{A:()=>I});var s=n(96540),r=n(74848);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),c=t.filter(e=>e!==n),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,r.jsx)(r.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(34164),i=n(21312),o=n(17559);const l="admonition_xJq3",u="admonitionHeading_Gvgb",d="admonitionIcon_Rf37",h="admonitionContent_BuS1";function m({type:e,className:t,children:n}){return(0,r.jsx)("div",{className:(0,a.A)(o.G.common.admonition,o.G.common.admonitionType(e),l,t),children:n})}function k({icon:e,title:t}){return(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)("span",{className:d,children:e}),t]})}function b({children:e}){return e?(0,r.jsx)("div",{className:h,children:e}):null}function p(e){const{type:t,icon:n,title:s,children:c,className:a}=e;return(0,r.jsxs)(m,{type:t,className:a,children:[s||n?(0,r.jsx)(k,{title:s,icon:n}):null,(0,r.jsx)(b,{children:c})]})}function f(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,r.jsx)(f,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,r.jsx)(p,{...g,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function A(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const C={icon:(0,r.jsx)(A,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,r.jsx)(p,{...C,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function P(e){return(0,r.jsx)(p,{...y,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function $(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const M={icon:(0,r.jsx)($,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function S(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,r.jsx)(S,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const F={icon:(0,r.jsx)($,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const B={...{note:x,tip:j,info:P,warning:function(e){return(0,r.jsx)(p,{...M,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(p,{...N,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(x,{title:"secondary",...e}),important:e=>(0,r.jsx)(P,{title:"important",...e}),success:e=>(0,r.jsx)(j,{title:"success",...e}),caution:function(e){return(0,r.jsx)(p,{...F,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function I(e){const t=c(e),n=(s=t.type,B[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),B.info));var s;return(0,r.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>p});var s=n(96540),r=n(34164),c=n(63427),a=n(92303),i=n(41422);const o="details_lb9f",l="isBrowser_bmU9",u="collapsibleContent_i85q";var d=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function k({summary:e,children:t,...n}){(0,c.A)().collectAnchor(n.id);const k=(0,a.A)(),b=(0,s.useRef)(null),{collapsed:p,setCollapsed:f}=(0,i.u)({initialState:!n.open}),[g,x]=(0,s.useState)(n.open),A=s.isValidElement(e)?e:(0,d.jsx)("summary",{children:e??"Details"});return(0,d.jsxs)("details",{...n,ref:b,open:g,"data-collapsed":p,className:(0,r.A)(o,k&&l,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&m(t,b.current)&&(e.preventDefault(),p?(f(!1),x(!0)):f(!0))},children:[A,(0,d.jsx)(i.N,{lazy:!1,collapsed:p,onCollapseTransitionEnd:e=>{f(e),x(!e)},children:(0,d.jsx)("div",{className:u,children:t})})]})}const b="details_b_Ee";function p({...e}){return(0,d.jsx)(k,{...e,className:(0,r.A)("alert alert--info",b,e.className)})}},21186(e,t,n){n.d(t,{A:()=>d});n(96540);var s=n(57390),r=n(27653),c=n(69623),a=n(28774),i=n(21312),o=n(60513),l=n(44349),u=n(74848);const d=({method:e,certPath:t,certDisplayName:n,caDisplayName:d})=>{const h="openssl"===e,m=h?`${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",k=h?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(a.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,u.jsx)(i.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),b=o.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(d??"").padEnd(24)}no
  `;return(0,u.jsxs)(c.A,{className:"custom-blue-block",summary:(0,u.jsx)("summary",{children:(0,i.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,u.jsx)(r.A,{type:"warning",title:(0,i.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:k}),(0,u.jsx)(s.A,{language:"bash",children:m}),(0,u.jsx)(r.A,{type:"note",title:(0,i.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,u.jsx)(s.A,{language:"bash",children:b})})]})}},65742(e,t,n){n.d(t,{$:()=>r});var s=n(44349);const r={etcdCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${s.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${s.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${s.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${s.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);