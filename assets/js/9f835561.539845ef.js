"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[559,757,802,1063,2082,2129,2289,2355,2393,2526,2528,4149,4311,4373,4632,4742,5012,5266,5780,6158,6699,6768,7016,7110,7167,7381,7444,8129,8261],{93576(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},37666(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f healthcheck-\u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a etcd (liveness probe). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a client API etcd \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d etcd-ca.","source":"@site/docs/tech-docs/etcd/certificates/components/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/main","permalink":"/tech-docs/etcd/certificates/components/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(43408),l=n(93576),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f healthcheck-\u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a etcd (liveness probe). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a client API etcd \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdClient.crtPath,certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},43408(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/openssl","permalink":"/tech-docs/etcd/certificates/components/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki/etcd
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdClient.keyPath} ${a.$.etcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdClient.keyPath} \\
    -out ${a.$.etcdClient.csrPath} \\
    -config ${a.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},8531(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-peer \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},41689(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (mutual TLS) \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438 etcd-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 2380. \u041a\u0430\u0436\u0434\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 peer-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043a\u0430\u043a \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d etcd-ca.","source":"@site/docs/tech-docs/etcd/certificates/components/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/main","permalink":"/tech-docs/etcd/certificates/components/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(63367),l=n(8531),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043d\u043e\u0439 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 (mutual TLS) \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438 etcd-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 2380. \u041a\u0430\u0436\u0434\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 peer-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043a\u0430\u043a \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdPeer.crtPath,certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},63367(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${o.M.clusterName.value}
      export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdPeer.keyPath} ${a.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdPeer.keyPath} \\
    -out ${a.$.etcdPeer.csrPath} \\
    -config ${a.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},75746(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/etcd/certificates/components/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/kubeadm","permalink":"/tech-docs/etcd/certificates/components/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-server \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},13038(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 etcd \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 2379. \u041f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 TLS-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u043e\u0442 kube-apiserver \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 etcd. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d etcd-ca.","source":"@site/docs/tech-docs/etcd/certificates/components/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/main","permalink":"/tech-docs/etcd/certificates/components/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(60976),l=n(75746),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 etcd \u0434\u043b\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 2379. \u041f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 TLS-\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u043e\u0442 kube-apiserver \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 etcd. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdServer.crtPath,certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},60976(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/certificates/components/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/openssl","permalink":"/tech-docs/etcd/certificates/components/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdServer.keyPath} ${a.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdServer.keyPath} \\
    -out ${a.$.etcdServer.csrPath} \\
    -config ${a.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},55189(e,t,n){n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>v,default:()=>P,frontMatter:()=>x,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","title":"allCertificatesAppsInitComponent","description":"Kubelet server","source":"@site/docs/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","permalink":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(40371),o=n(95910),i=n(93527),l=n(19662),d=n(69407),u=n(37666),h=n(13038),k=n(41689),m=n(64567),p=n(13167),b=n(9792),f=n(76331);const x={},v=void 0,A={},j=[...a.toc,...o.toc,...i.toc,...d.toc,...l.toc,...u.toc,...h.toc,...k.toc,...m.toc,...p.toc];function g(e){const{Details:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(f.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(b.A,{value:"Kubelet Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(b.A,{value:"API -> Etcd",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,s.jsx)(o.default,{})]})}),(0,s.jsx)(b.A,{value:"API -> Kubelet",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(b.A,{value:"API Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(b.A,{value:"Proxy -> API",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Client",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,s.jsx)(h.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Peer",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,s.jsx)(k.default,{})]})}),(0,s.jsx)(b.A,{value:"Controller server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Controller server"})})}),(0,s.jsx)(m.default,{})]})}),(0,s.jsx)(b.A,{value:"Scheduler server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Scheduler server"})})}),(0,s.jsx)(p.default,{})]})})]})}function P(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},19370(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},95910(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 API Server \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a etcd. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d etcd-ca.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(51328),l=n(19370),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 API Server \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a etcd. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesEtcdClient.crtPath,certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},51328(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesEtcdClient.keyPath} ${a.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesEtcdClient.keyPath} \\
    -out    ${a.$.kubernetesEtcdClient.csrPath} \\
    -config ${a.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},46155(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},19662(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 API aggregation (extension API servers). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u043c API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, metrics-server). \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d front-proxy-ca.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(35880),l=n(46155),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0434\u043b\u044f \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 API aggregation (extension API servers). \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u043c API-\u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, metrics-server). \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"front-proxy-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesFrontProxyClient.crtPath,certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},35880(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesFrontProxyClient.keyPath} ${a.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${a.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${a.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${a.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},96556(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [29.64.0.1 10.0.0.16]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},69407(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0443\u0437\u043b\u043e\u0432, VIP \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430, DNS-\u0438\u043c\u0435\u043d\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441 ClusterIP \u0441\u0435\u0440\u0432\u0438\u0441\u0430 kubernetes.default. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d kubernetes-ca.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(41399),l=n(96556),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 API Server, \u043f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u044f\u0435\u043c\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c \u043f\u0440\u0438 TLS-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438. \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 SAN (Subject Alternative Names) \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a API: IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0443\u0437\u043b\u043e\u0432, VIP \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430, DNS-\u0438\u043c\u0435\u043d\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441 ClusterIP \u0441\u0435\u0440\u0432\u0438\u0441\u0430 ",(0,s.jsx)(t.code,{children:"kubernetes.default"}),". \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesServer.crtPath,certDisplayName:"apiserver",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},41399(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${o.M.clusterName.value}
  export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${o.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${o.M.clusterName.value}.${o.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  IP.1  = ${o.M.virtualMachineLocalAddress.value}
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
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesServer.keyPath} ${a.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesServer.keyPath} \\
    -out    ${a.$.kubernetesServer.csrPath} \\
    -config ${a.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},2240(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),o=n(57390),i=n(60513);const l={},d=void 0,u={},h=[];function k(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u044b\u0432\u043e\u0434."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Генерация сертификатов
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},93527(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 API Server \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kubelet. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a kubelet API (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432, exec, port-forward). \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d kubernetes-ca.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(76490),l=n(2240),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 API Server \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kubelet. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f kube-apiserver \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u043a kubelet API (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432, exec, port-forward). \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesKubeletClient.crtPath,certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},76490(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesKubeletClient.keyPath} ${a.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesKubeletClient.keyPath} \\
    -out    ${a.$.kubernetesKubeletClient.csrPath} \\
    -config ${a.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},64567(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u0438\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u2014 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 HardWay.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(51873),l=n(21186),d=n(65742);const u={},h=void 0,k={},m=[...i.toc];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kube-controller-manager \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 \u043c\u0435\u0442\u0440\u0438\u043a \u0438 healthz-\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u043e\u0432. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u0438\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u2014 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 HardWay."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:d.$.kubernetesControllerManagerServer.crtPath,certDisplayName:"controller-manager-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 HardWay \u0440\u0435\u0436\u0438\u043c"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},51873(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesControllerManagerServer.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesControllerManagerServer.keySize}
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
  CN = "${a.$.kubernetesControllerManagerServer.cname}"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerServer.keyPath} ${a.$.kubernetesControllerManagerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesControllerManagerServer.keyPath} \\
  -out ${a.$.kubernetesControllerManagerServer.csrPath} \\
  -config ${a.$.kubernetesControllerManagerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesControllerManagerServer.csrPath} \\
    -out ${a.$.kubernetesControllerManagerServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesControllerManagerServer.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},13167(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u0438\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u2014 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 HardWay.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(32640),l=n(21186),d=n(65742);const u={},h=void 0,k={},m=[...i.toc];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kube-scheduler \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 \u043c\u0435\u0442\u0440\u0438\u043a \u0438 healthz-\u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u043e\u0432. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u044d\u0442\u0438\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c \u2014 \u043e\u043d \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 HardWay."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:d.$.kubernetesSchedulerServer.crtPath,certDisplayName:"scheduler-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"\u041f\u0440\u043e\u0441\u044c\u0431\u0430 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 HardWay \u0440\u0435\u0436\u0438\u043c"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},32640(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.$.kubernetesSchedulerServer.crtConf}
  [ req ]
  default_bits        = ${a.$.kubernetesSchedulerServer.keySize}
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
  CN = "${a.$.kubernetesSchedulerServer.cname}"

  [ v3_ext ]
  authorityKeyIdentifier=keyid,issuer:always
  basicConstraints=CA:FALSE
  keyUsage=keyEncipherment,dataEncipherment
  extendedKeyUsage=serverAuth
  subjectAltName=@alt_names
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerServer.keyPath} ${a.$.kubernetesSchedulerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesSchedulerServer.keyPath} \\
  -out ${a.$.kubernetesSchedulerServer.csrPath} \\
  -config ${a.$.kubernetesSchedulerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl x509 \\
    -req \\
    -days 365 \\
    -sha256 \\
    -outform PEM \\
    -CA ${a.$.kubernetesCA.crtPath} \\
    -CAkey ${a.$.kubernetesCA.keyPath} \\
    -CAcreateserial \\
    -in ${a.$.kubernetesSchedulerServer.csrPath} \\
    -out ${a.$.kubernetesSchedulerServer.crtPath} \\
    -extensions v3_ext \\
    -extfile ${a.$.kubernetesSchedulerServer.crtConf}
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},77904(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","title":"kubeadm","description":"kubeadm \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c kubelet.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(57390),o=n(60513);const i={},l=void 0,d={},u=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubeadm"})," \u043d\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u043c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c ",(0,s.jsx)(t.code,{children:"kubelet"}),"."]}),(0,s.jsxs)(t.p,{children:["\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 systemd-\u044e\u043d\u0438\u0442\u0430 ",(0,s.jsx)(t.code,{children:"kubelet"})," \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0432\u044b\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430.\n\u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0443\u0447\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b:\n",(0,s.jsx)(t.code,{children:"kubectl certificate approve $CERT_NAME"}),"."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)("h4",{children:"RotateKubeletServerCertificate"}),"\n\u0414\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u043e\u0442\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 ",(0,s.jsx)(t.code,{children:"kubelet"})," \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438:"]})]}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kube-Apiserver"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeAPI/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  apiServer:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kube-Controller-Manager"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/controllerManager/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  controllerManager:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f Kubelet"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycleSettings",children:"Kubelet Custom Config"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  rotateCertificates: true
  featureGates:
    RotateKubeletServerCertificate: true
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u043e\u0431\u043b\u0430\u0447\u043d\u044b\u0445 \u0441\u0440\u0435\u0434!",type:"danger",children:(0,s.jsxs)(t.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 Cloud Controller Manager (CCM), \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0434\u0430\u043d \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440,\n\u043f\u043e\u043a\u0430 ",(0,s.jsx)(t.code,{children:"CCM"})," \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442 \u0434\u043b\u044f ",(0,s.jsx)(t.code,{children:"Node"})," \u0430\u0434\u0440\u0435\u0441 \u0432 \u043f\u043e\u043b\u0435 ",(0,s.jsx)(t.code,{children:"INTERNAL_IP"}),"."]})})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},40371(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435: \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 10250. \u041f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 kube-apiserver \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043a kubelet API. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d kubernetes-ca.","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),o=n(76331),i=n(17337),l=n(77904),d=n(21186),u=n(65742);const h={},k=void 0,m={},p=[...i.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 10250. \u041f\u0440\u0435\u0434\u044a\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 kube-apiserver \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043a kubelet API. \u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubeletServer.crtPath,certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},17337(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),o=n(44349),i=n(57390),l=n(60513);const d={},u=void 0,h={},k=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${o.M.clusterName.value}
      export BASE_DOMAIN=${o.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${o.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${o.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${o.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl/csr
      mkdir -p ${o.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletServer.keyPath} ${a.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubeletServer.keyPath} \\
  -out ${a.$.kubeletServer.csrPath} \\
  -config ${a.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c CSR"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletServer.crtPath} ${a.$.kubeletServer.keyPath} >> ${a.$.kubeletNowServer.crtPath}
  ln -s ${a.$.kubeletNowServer.crtPath} ${a.$.kubeletCurrentServer.crtPath}
`})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},27653(e,t,n){n.d(t,{A:()=>_});var r=n(96540),s=n(74848);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),c=t.filter(e=>e!==n),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(34164),o=n(21312),i=n(17559);const l="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",h="admonitionContent_BuS1";function k({type:e,className:t,children:n}){return(0,s.jsx)("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(e),l,t),children:n})}function m({icon:e,title:t}){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("span",{className:u,children:e}),t]})}function p({children:e}){return e?(0,s.jsx)("div",{className:h,children:e}):null}function b(e){const{type:t,icon:n,title:r,children:c,className:a}=e;return(0,s.jsxs)(k,{type:t,className:a,children:[r||n?(0,s.jsx)(m,{title:r,icon:n}):null,(0,s.jsx)(p,{children:c})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function v(e){return(0,s.jsx)(b,{...x,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,s.jsx)(b,{...j,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function P(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(P,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function $(e){return(0,s.jsx)(b,{...y,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const S={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function M(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,s.jsx)(M,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const F={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const I={...{note:v,tip:g,info:$,warning:function(e){return(0,s.jsx)(b,{...S,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(b,{...N,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(v,{title:"secondary",...e}),important:e=>(0,s.jsx)($,{title:"important",...e}),success:e=>(0,s.jsx)(g,{title:"success",...e}),caution:function(e){return(0,s.jsx)(b,{...F,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=c(e),n=(r=t.type,I[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),I.info));var r;return(0,s.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>b});var r=n(96540),s=n(34164),c=n(63427),a=n(92303),o=n(41422);const i="details_lb9f",l="isBrowser_bmU9",d="collapsibleContent_i85q";var u=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function k(e,t){return!!e&&(e===t||k(e.parentElement,t))}function m({summary:e,children:t,...n}){(0,c.A)().collectAnchor(n.id);const m=(0,a.A)(),p=(0,r.useRef)(null),{collapsed:b,setCollapsed:f}=(0,o.u)({initialState:!n.open}),[x,v]=(0,r.useState)(n.open),A=r.isValidElement(e)?e:(0,u.jsx)("summary",{children:e??"Details"});return(0,u.jsxs)("details",{...n,ref:p,open:x,"data-collapsed":b,className:(0,s.A)(i,m&&l,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&k(t,p.current)&&(e.preventDefault(),b?(f(!1),v(!0)):f(!0))},children:[A,(0,u.jsx)(o.N,{lazy:!1,collapsed:b,onCollapseTransitionEnd:e=>{f(e),v(!e)},children:(0,u.jsx)("div",{className:d,children:t})})]})}const p="details_b_Ee";function b({...e}){return(0,u.jsx)(m,{...e,className:(0,s.A)("alert alert--info",p,e.className)})}},21186(e,t,n){n.d(t,{A:()=>u});n(96540);var r=n(57390),s=n(27653),c=n(69623),a=n(28774),o=n(21312),i=n(60513),l=n(44349),d=n(74848);const u=({method:e,certPath:t,certDisplayName:n,caDisplayName:u})=>{const h="openssl"===e,k=h?`${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",m=h?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:(0,d.jsx)(a.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,d.jsx)(o.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),p=i.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(u??"").padEnd(24)}no
  `;return(0,d.jsxs)(c.A,{className:"custom-blue-block",summary:(0,d.jsx)("summary",{children:(0,o.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,d.jsx)(s.A,{type:"warning",title:(0,o.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:m}),(0,d.jsx)(r.A,{language:"bash",children:k}),(0,d.jsx)(s.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,d.jsx)(r.A,{language:"bash",children:p})})]})}},65742(e,t,n){n.d(t,{$:()=>s});var r=n(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);