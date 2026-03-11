"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1758,2215,2719,3448,4061,6712,7342,7396,7796,9751,9843],{33945(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki/etcd
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.etcdClient.crtConf}
  [ req ]
  default_bits        = ${c.$.etcdClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.etcdClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.etcdClient.keyPath} ${c.$.etcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.etcdClient.keyPath} \\
    -out ${c.$.etcdClient.csrPath} \\
    -config ${c.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.etcdCA.crtPath} \\
    -CAkey ${c.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.etcdClient.csrPath} \\
    -out ${c.$.etcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.etcdClient.crtConf}
  `})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},13840(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      export CLUSTER_NAME=${l.M.clusterName.value}
      export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.etcdPeer.crtConf}
  [ req ]
  default_bits        = ${c.$.etcdPeer.keySize}
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.etcdPeer.keyPath} ${c.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.etcdPeer.keyPath} \\
    -out ${c.$.etcdPeer.csrPath} \\
    -config ${c.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.etcdCA.crtPath} \\
    -CAkey ${c.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.etcdPeer.csrPath} \\
    -out ${c.$.etcdPeer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.etcdPeer.crtConf}
  `})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},85447(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${l.M.clusterName.value}
  export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.etcdServer.crtConf}
  [ req ]
  default_bits        = ${c.$.etcdServer.keySize}
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.etcdServer.keyPath} ${c.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key ${c.$.etcdServer.keyPath} \\
    -out ${c.$.etcdServer.csrPath} \\
    -config ${c.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.etcdCA.crtPath} \\
    -CAkey ${c.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.etcdServer.csrPath} \\
    -out ${c.$.etcdServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.etcdServer.crtConf}
  `})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},53474(e,t,n){n.d(t,{Ay:()=>d,RM:()=>i});var r=n(74848),s=n(28453),a=n(44349),c=n(57390),l=n(60513);const i=[];function o(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which certificates to generate \u2014 kubeadm creates them all at once, in full."})}),"\n",(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm join phase control-plane-prepare certs \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(c.A,{language:"bash",children:l.A`
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
`})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},74585(e,t,n){n.r(t),n.d(t,{assets:()=>$,contentTitle:()=>g,default:()=>C,frontMatter:()=>A,metadata:()=>r,toc:()=>P});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","title":"allCertificatesAppsJoinComponent","description":"Kubelet server","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(80281),l=n(7991),i=n(47022),o=n(55509),d=n(33755),u=n(33945),h=n(85447),k=n(13840),p=n(62242),m=n(73569),b=n(53474),x=n(21186),v=n(65742),y=n(9792),f=n(76331);const A={},g=void 0,$={},P=[...c.toc,...b.RM,...l.toc,...b.RM,...i.toc,...b.RM,...d.toc,...b.RM,...o.toc,...b.RM,...u.toc,...b.RM,...h.toc,...b.RM,...k.toc,...b.RM,...p.toc,...m.toc];function j(e){const t={admonition:"admonition",p:"p",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(f.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(y.A,{value:"Kubelet Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubeletServer.crtPath,certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(y.A,{value:"API -> Etcd",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesEtcdClient.crtPath,certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"API -> Kubelet",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesKubeletClient.crtPath,certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"API Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesServer.crtPath,certDisplayName:"apiserver",caDisplayName:"ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"apiserver",caDisplayName:"ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"Proxy -> API",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesFrontProxyClient.crtPath,certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"Etcd Client",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(u.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.etcdClient.crtPath,certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"Etcd Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(h.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.etcdServer.crtPath,certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"Etcd Peer",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(k.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.etcdPeer.crtPath,certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(y.A,{value:"Kubeadm",children:[(0,s.jsx)(b.Ay,{}),(0,s.jsx)(x.A,{method:"kubeadm",certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(y.A,{value:"Controller server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Controller server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(p.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesControllerManagerServer.crtPath,certDisplayName:"controller-manager-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(y.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}),(0,s.jsx)(y.A,{value:"Scheduler server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Scheduler server"})})}),(0,s.jsxs)(f.A,{groupId:"install-type",children:[(0,s.jsxs)(y.A,{value:"HardWay",children:[(0,s.jsx)(m.default,{}),(0,s.jsx)(x.A,{method:"openssl",certPath:v.$.kubernetesSchedulerServer.crtPath,certDisplayName:"scheduler-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(y.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})})]})}function C(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},7991(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
    cat <<EOF > ${c.$.kubernetesEtcdClient.crtConf}
    [ req ]
    default_bits        = ${c.$.kubernetesEtcdClient.keySize}
    prompt              = no
    default_md          = sha256
    distinguished_name  = dn

    [ dn ]
    CN = ${c.$.kubernetesEtcdClient.cname}

    [ v3_ext ]
    authorityKeyIdentifier=keyid,issuer:always
    basicConstraints=CA:FALSE
    keyUsage=keyEncipherment,dataEncipherment
    extendedKeyUsage=clientAuth
    EOF
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesEtcdClient.keyPath} ${c.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${c.$.kubernetesEtcdClient.keyPath} \\
    -out    ${c.$.kubernetesEtcdClient.csrPath} \\
    -config ${c.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.etcdCA.crtPath} \\
    -CAkey ${c.$.etcdCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesEtcdClient.csrPath} \\
    -out ${c.$.kubernetesEtcdClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesEtcdClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},55509(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesFrontProxyClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesFrontProxyClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesFrontProxyClient.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
    openssl genrsa \\
      -out ${c.$.kubernetesFrontProxyClient.keyPath} ${c.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
    openssl req \\
      -new \\
      -key    ${c.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${c.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${c.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.frontProxyCA.crtPath} \\
    -CAkey ${c.$.frontProxyCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesFrontProxyClient.csrPath} \\
    -out ${c.$.kubernetesFrontProxyClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesFrontProxyClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},33755(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  export CLUSTER_NAME=${l.M.clusterName.value}
  export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${l.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesServer.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesServer.keySize}
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
  IP.1  = ${l.M.virtualMachineLocalAddress.value}
  IP.2  = 127.0.0.1

  [ dn ]
  CN = ${c.$.kubernetesServer.cname}

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesServer.keyPath} ${c.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${c.$.kubernetesServer.keyPath} \\
    -out    ${c.$.kubernetesServer.csrPath} \\
    -config ${c.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesServer.csrPath} \\
    -out ${c.$.kubernetesServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesServer.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},47022(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesKubeletClient.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesKubeletClient.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn

  [ dn ]
  CN = ${c.$.kubernetesKubeletClient.cname}
  O  = kubeadm:cluster-admins

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=clientAuth
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
    openssl genrsa \\
      -out ${c.$.kubernetesKubeletClient.keyPath} ${c.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
    -new \\
    -key    ${c.$.kubernetesKubeletClient.keyPath} \\
    -out    ${c.$.kubernetesKubeletClient.csrPath} \\
    -config ${c.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesKubeletClient.csrPath} \\
    -out ${c.$.kubernetesKubeletClient.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesKubeletClient.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},62242(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesControllerManagerServer.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesControllerManagerServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = kube-controller-manager
  DNS.2 = kube-controller-manager.kube-system
  DNS.3 = kube-controller-manager.kube-system.svc
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = "${c.$.kubernetesControllerManagerServer.cname}"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesControllerManagerServer.keyPath} ${c.$.kubernetesControllerManagerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
  -new \\
  -key ${c.$.kubernetesControllerManagerServer.keyPath} \\
  -out ${c.$.kubernetesControllerManagerServer.csrPath} \\
  -config ${c.$.kubernetesControllerManagerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesControllerManagerServer.csrPath} \\
    -out ${c.$.kubernetesControllerManagerServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesControllerManagerServer.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},73569(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubernetesSchedulerServer.crtConf}
  [ req ]
  default_bits        = ${c.$.kubernetesSchedulerServer.keySize}
  prompt              = no
  default_md          = sha256
  distinguished_name  = dn
  req_extensions      = req_ext

  [ req_ext ]
  subjectAltName = @alt_names

  [ alt_names ]
  DNS.1 = kube-scheduler
  DNS.2 = kube-scheduler.kube-system
  DNS.3 = kube-scheduler.kube-system.svc
  IP.1  = 127.0.0.1
  IP.2  = 0:0:0:0:0:0:0:1
  IP.3  = $\{MACHINE_LOCAL_ADDRESS}

  [ dn ]
  CN = "${c.$.kubernetesSchedulerServer.cname}"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubernetesSchedulerServer.keyPath} ${c.$.kubernetesSchedulerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
  -new \\
  -key ${c.$.kubernetesSchedulerServer.keyPath} \\
  -out ${c.$.kubernetesSchedulerServer.csrPath} \\
  -config ${c.$.kubernetesSchedulerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubernetesSchedulerServer.csrPath} \\
    -out ${c.$.kubernetesSchedulerServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubernetesSchedulerServer.crtConf}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},80281(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(65742),l=n(44349),i=n(57390),o=n(60513);const d={},u=void 0,h={},k=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      export CLUSTER_NAME=${l.M.clusterName.value}
      export BASE_DOMAIN=${l.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${l.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${l.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${l.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl/csr
      mkdir -p ${l.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat <<EOF > ${c.$.kubeletServer.crtConf}
  [ req ]
  default_bits        = ${c.$.kubeletServer.keySize}
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl genrsa \\
    -out ${c.$.kubeletServer.keyPath} ${c.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl req \\
  -new \\
  -key ${c.$.kubeletServer.keyPath} \\
  -out ${c.$.kubeletServer.csrPath} \\
  -config ${c.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${c.$.kubernetesCA.crtPath} \\
    -CAkey ${c.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${c.$.kubeletServer.csrPath} \\
    -out ${c.$.kubeletServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${c.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  cat ${c.$.kubeletServer.crtPath} ${c.$.kubeletServer.keyPath} >> ${c.$.kubeletNowServer.crtPath}
  ln -s ${c.$.kubeletNowServer.crtPath} ${c.$.kubeletCurrentServer.crtPath}
`})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},27653(e,t,n){n.d(t,{A:()=>_});var r=n(96540),s=n(74848);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),a=t.filter(e=>e!==n),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(34164),l=n(21312),i=n(17559);const o="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",h="admonitionContent_BuS1";function k({type:e,className:t,children:n}){return(0,s.jsx)("div",{className:(0,c.A)(i.G.common.admonition,i.G.common.admonitionType(e),o,t),children:n})}function p({icon:e,title:t}){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("span",{className:u,children:e}),t]})}function m({children:e}){return e?(0,s.jsx)("div",{className:h,children:e}):null}function b(e){const{type:t,icon:n,title:r,children:a,className:c}=e;return(0,s.jsxs)(k,{type:t,className:c,children:[r||n?(0,s.jsx)(p,{title:r,icon:n}):null,(0,s.jsx)(m,{children:a})]})}function x(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const v={icon:(0,s.jsx)(x,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function y(e){return(0,s.jsx)(b,{...v,...e,className:(0,c.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const A={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,s.jsx)(b,{...A,...e,className:(0,c.A)("alert alert--success",e.className),children:e.children})}function $(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const P={icon:(0,s.jsx)($,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function j(e){return(0,s.jsx)(b,{...P,...e,className:(0,c.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const S={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function M(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,s.jsx)(M,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const F={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:y,tip:g,info:j,warning:function(e){return(0,s.jsx)(b,{...S,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(b,{...N,...e,className:(0,c.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(y,{title:"secondary",...e}),important:e=>(0,s.jsx)(j,{title:"important",...e}),success:e=>(0,s.jsx)(g,{title:"success",...e}),caution:function(e){return(0,s.jsx)(b,{...F,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=a(e),n=(r=t.type,E[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),E.info));var r;return(0,s.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>b});var r=n(96540),s=n(34164),a=n(63427),c=n(92303),l=n(41422);const i="details_lb9f",o="isBrowser_bmU9",d="collapsibleContent_i85q";var u=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function p({summary:e,children:t,...n}){(0,a.A)().collectAnchor(n.id);const p=(0,c.A)(),m=(0,r.useRef)(null),{collapsed:b,setCollapsed:x}=(0,l.u)({initialState:!n.open}),[v,y]=(0,r.useState)(n.open),f=r.isValidElement(e)?e:(0,u.jsx)("summary",{children:e??"Details"});return(0,u.jsxs)("details",{...n,ref:m,open:v,"data-collapsed":b,className:(0,s.A)(i,p&&o,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&k(t,m.current)&&(e.preventDefault(),b?(x(!1),y(!0)):x(!0))},children:[f,(0,u.jsx)(l.N,{lazy:!1,collapsed:b,onCollapseTransitionEnd:e=>{x(e),y(!e)},children:(0,u.jsx)("div",{className:d,children:t})})]})}const m="details_b_Ee";function b({...e}){return(0,u.jsx)(p,{...e,className:(0,s.A)("alert alert--info",m,e.className)})}},21186(e,t,n){n.d(t,{A:()=>u});n(96540);var r=n(57390),s=n(27653),a=n(69623),c=n(28774),l=n(21312),i=n(60513),o=n(44349),d=n(74848);const u=({method:e,certPath:t,certDisplayName:n,caDisplayName:u})=>{const h="openssl"===e,k=h?`${o.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",p=h?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:(0,d.jsx)(c.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,d.jsx)(l.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),m=i.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(u??"").padEnd(24)}no
  `;return(0,d.jsxs)(a.A,{className:"custom-blue-block",summary:(0,d.jsx)("summary",{children:(0,l.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,d.jsx)(s.A,{type:"warning",title:(0,l.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:p}),(0,d.jsx)(r.A,{language:"bash",children:k}),(0,d.jsx)(s.A,{type:"note",title:(0,l.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,d.jsx)(r.A,{language:"bash",children:m})})]})}},65742(e,t,n){n.d(t,{$:()=>s});var r=n(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);