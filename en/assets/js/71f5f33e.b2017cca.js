"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[186,301,313,611,887,1457,1497,1758,2215,2719,3232,3242,3448,3486,4061,4502,4614,5187,5570,5803,6223,6333,6712,7342,7396,8925,9328,9751,9843],{21063(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25069(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/main","title":"main","description":"Purpose: Client certificate for etcd healthcheck probes (liveness probe). Used for connecting to the etcd client API when checking cluster availability. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(33945),l=n(21063),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Client certificate for etcd healthcheck probes (liveness probe). Used for connecting to the etcd client API when checking cluster availability. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdClient.crtPath,certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},33945(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdClient.keyPath} ${a.$.etcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdClient.keyPath} \\
    -out ${a.$.etcdClient.csrPath} \\
    -config ${a.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},77794(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs etcd-peer \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},51511(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/main","title":"main","description":"Purpose: Certificate for mutual authentication (mutual TLS) between etcd cluster nodes on port 2380. Each cluster member uses the peer certificate for both the server and client side of the connection. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(13840),l=n(77794),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Certificate for mutual authentication (mutual TLS) between etcd cluster nodes on port 2380. Each cluster member uses the peer certificate for both the server and client side of the connection. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdPeer.crtPath,certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},13840(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${i.M.clusterName.value}
      export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdPeer.keyPath} ${a.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdPeer.keyPath} \\
    -out ${a.$.etcdPeer.csrPath} \\
    -config ${a.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},29673(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs etcd-server \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28250(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/main","title":"main","description":"Purpose: Server certificate for etcd serving client connections on port 2379. Presented during TLS connection from kube-apiserver and other etcd clients. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(85447),l=n(29673),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Server certificate for etcd serving client connections on port 2379. Presented during TLS connection from kube-apiserver and other etcd clients. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.etcdServer.crtPath,certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},85447(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdServer.keyPath} ${a.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdServer.keyPath} \\
    -out ${a.$.etcdServer.csrPath} \\
    -config ${a.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},26176(e,t,n){n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>y,frontMatter:()=>x,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","title":"allCertificatesAppsInitComponent","description":"Kubelet server","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(34641),i=n(98829),o=n(41355),l=n(93750),d=n(21824),u=n(25069),h=n(28250),p=n(51511),m=n(81990),k=n(32689),b=n(9792),f=n(76331);const x={},g=void 0,v={},A=[...a.toc,...i.toc,...o.toc,...d.toc,...l.toc,...u.toc,...h.toc,...p.toc,...m.toc,...k.toc];function j(e){const{Details:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(f.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(b.A,{value:"Kubelet Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(b.A,{value:"API -> Etcd",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(b.A,{value:"API -> Kubelet",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,s.jsx)(o.default,{})]})}),(0,s.jsx)(b.A,{value:"API Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(b.A,{value:"Proxy -> API",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Client",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,s.jsx)(h.default,{})]})}),(0,s.jsx)(b.A,{value:"Etcd Peer",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,s.jsx)(p.default,{})]})}),(0,s.jsx)(b.A,{value:"Controller server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Controller server"})})}),(0,s.jsx)(m.default,{})]})}),(0,s.jsx)(b.A,{value:"Scheduler server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Scheduler server"})})}),(0,s.jsx)(k.default,{})]})})]})}function y(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},48256(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},98829(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"Purpose: API Server client certificate for connecting to etcd. Used by kube-apiserver when accessing the cluster data store. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(7991),l=n(48256),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server client certificate for connecting to etcd. Used by kube-apiserver when accessing the cluster data store. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesEtcdClient.crtPath,certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},7991(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesEtcdClient.keyPath} ${a.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesEtcdClient.keyPath} \\
    -out    ${a.$.kubernetesEtcdClient.csrPath} \\
    -config ${a.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},12351(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},93750(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"Purpose: Client certificate for the API aggregation mechanism (extension API servers). Used by kube-apiserver when proxying requests to extended API servers (e.g., metrics-server). Signed by front-proxy-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(55509),l=n(12351),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Client certificate for the API aggregation mechanism (extension API servers). Used by kube-apiserver when proxying requests to extended API servers (e.g., metrics-server). Signed by ",(0,s.jsx)(t.strong,{children:"front-proxy-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesFrontProxyClient.crtPath,certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},55509(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesFrontProxyClient.keyPath} ${a.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${a.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${a.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${a.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},64625(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs apiserver \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [29.64.0.1 10.0.0.16]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21824(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"Purpose node IP addresses, load balancer VIP, DNS names, and the kubernetes.default service ClusterIP address. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(33755),l=n(64625),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server server certificate, presented to clients during TLS connection. Contains SAN (Subject Alternative Names) for all API access addresses: node IP addresses, load balancer VIP, DNS names, and the ",(0,s.jsx)(t.code,{children:"kubernetes.default"})," service ClusterIP address. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesServer.crtPath,certDisplayName:"apiserver",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},33755(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${i.M.clusterName.value}.${i.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
  IP.1  = ${i.M.virtualMachineLocalAddress.value}
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesServer.keyPath} ${a.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesServer.keyPath} \\
    -out    ${a.$.kubernetesServer.csrPath} \\
    -config ${a.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},5319(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(44349),i=n(57390),o=n(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:o.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:o.A`
  #### Certificate generation
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},41355(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"Purpose: API Server client certificate for connecting to kubelet. Used by kube-apiserver when accessing the kubelet API (fetching logs, exec, port-forward). Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(47022),l=n(5319),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server client certificate for connecting to kubelet. Used by kube-apiserver when accessing the kubelet API (fetching logs, exec, port-forward). Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubernetesKubeletClient.crtPath,certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},47022(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesKubeletClient.keyPath} ${a.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesKubeletClient.keyPath} \\
    -out    ${a.$.kubernetesKubeletClient.csrPath} \\
    -config ${a.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},81990(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","title":"main","description":"Purpose kubeadm does not manage this certificate \u2014 it is only created in HardWay mode.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(62242),l=n(21186),d=n(65742);const u={},h=void 0,p={},m=[...o.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kube-controller-manager server certificate for TLS on the metrics port and healthz endpoints. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". Note: kubeadm does not manage this certificate \u2014 it is only created in HardWay mode."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:d.$.kubernetesControllerManagerServer.crtPath,certDisplayName:"controller-manager-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},62242(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerServer.keyPath} ${a.$.kubernetesControllerManagerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesControllerManagerServer.keyPath} \\
  -out ${a.$.kubernetesControllerManagerServer.csrPath} \\
  -config ${a.$.kubernetesControllerManagerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},32689(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","title":"main","description":"Purpose kubeadm does not manage this certificate \u2014 it is only created in HardWay mode.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(73569),l=n(21186),d=n(65742);const u={},h=void 0,p={},m=[...o.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kube-scheduler server certificate for TLS on the metrics port and healthz endpoints. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". Note: kubeadm does not manage this certificate \u2014 it is only created in HardWay mode."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:d.$.kubernetesSchedulerServer.crtPath,certDisplayName:"scheduler-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},73569(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerServer.keyPath} ${a.$.kubernetesSchedulerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesSchedulerServer.keyPath} \\
  -out ${a.$.kubernetesSchedulerServer.csrPath} \\
  -config ${a.$.kubernetesSchedulerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},1359(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","title":"kubeadm","description":"kubeadm does not manage the server certificate used by the kubelet component.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(57390),i=n(60513);const o={},l=void 0,d={},u=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubeadm"})," does not manage the server certificate used by the ",(0,s.jsx)(t.code,{children:"kubelet"})," component."]}),(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"kubelet"})," systemd unit starts, it initiates a certificate signing request.\nTo complete the process, manual approval is required using the command:\n",(0,s.jsx)(t.code,{children:"kubectl certificate approve $CERT_NAME"}),"."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)("h4",{children:"RotateKubeletServerCertificate"}),"\nFor automatic ",(0,s.jsx)(t.code,{children:"kubelet"})," certificate rotation, additional configuration is required:"]})]}),"\n",(0,s.jsx)("h4",{children:"Kube-Apiserver configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeAPI/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  apiServer:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"Kube-Controller-Manager configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/controllerManager/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  spec:
    containers:
    - command:
      - --feature-gates=RotateKubeletServerCertificate=true
`}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  controllerManager:
    extraArgs:
      feature-gates: "RotateKubeletServerCertificate=true"
`}),"\n",(0,s.jsx)("h4",{children:"Kubelet configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettings",children:"Kubelet Custom Config"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  rotateCertificates: true
  featureGates:
    RotateKubeletServerCertificate: true
`}),"\n",(0,s.jsx)(t.admonition,{title:"Important for cloud environments!",type:"danger",children:(0,s.jsxs)(t.p,{children:["If you are using Cloud Controller Manager (CCM), the certificate will not be issued until\n",(0,s.jsx)(t.code,{children:"CCM"})," assigns an address to the ",(0,s.jsx)(t.code,{children:"Node"})," in the ",(0,s.jsx)(t.code,{children:"INTERNAL_IP"})," field."]})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},34641(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"Purpose: kubelet server certificate for TLS on port 10250. Presented when kube-apiserver and other clients connect to the kubelet API. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(9792),i=n(76331),o=n(80281),l=n(1359),d=n(21186),u=n(65742);const h={},p=void 0,m={},k=[...o.toc,...l.toc];function b(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kubelet server certificate for TLS on port 10250. Presented when kube-apiserver and other clients connect to the kubelet API. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:u.$.kubeletServer.crtPath,certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},80281(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),c=n(28453),a=n(65742),i=n(44349),o=n(57390),l=n(60513);const d={},u=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${i.M.clusterName.value}
      export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
      mkdir -p ${i.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletServer.keyPath} ${a.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubeletServer.keyPath} \\
  -out ${a.$.kubeletServer.csrPath} \\
  -config ${a.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletServer.crtPath} ${a.$.kubeletServer.keyPath} >> ${a.$.kubeletNowServer.crtPath}
  ln -s ${a.$.kubeletNowServer.crtPath} ${a.$.kubeletCurrentServer.crtPath}
`})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},27653(e,t,n){n.d(t,{A:()=>E});var r=n(96540),s=n(74848);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),c=t.filter(e=>e!==n),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(34164),i=n(21312),o=n(17559);const l="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",h="admonitionContent_BuS1";function p({type:e,className:t,children:n}){return(0,s.jsx)("div",{className:(0,a.A)(o.G.common.admonition,o.G.common.admonitionType(e),l,t),children:n})}function m({icon:e,title:t}){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("span",{className:u,children:e}),t]})}function k({children:e}){return e?(0,s.jsx)("div",{className:h,children:e}):null}function b(e){const{type:t,icon:n,title:r,children:c,className:a}=e;return(0,s.jsxs)(p,{type:t,className:a,children:[r||n?(0,s.jsx)(m,{title:r,icon:n}):null,(0,s.jsx)(k,{children:c})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,s.jsx)(b,{...x,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const A={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,s.jsx)(b,{...A,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const P={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function C(e){return(0,s.jsx)(b,{...P,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function $(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const S={icon:(0,s.jsx)($,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function M(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,s.jsx)(M,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const F={icon:(0,s.jsx)($,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const I={...{note:g,tip:j,info:C,warning:function(e){return(0,s.jsx)(b,{...S,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(b,{...N,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(g,{title:"secondary",...e}),important:e=>(0,s.jsx)(C,{title:"important",...e}),success:e=>(0,s.jsx)(j,{title:"success",...e}),caution:function(e){return(0,s.jsx)(b,{...F,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=c(e),n=(r=t.type,I[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),I.info));var r;return(0,s.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>b});var r=n(96540),s=n(34164),c=n(63427),a=n(92303),i=n(41422);const o="details_lb9f",l="isBrowser_bmU9",d="collapsibleContent_i85q";var u=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m({summary:e,children:t,...n}){(0,c.A)().collectAnchor(n.id);const m=(0,a.A)(),k=(0,r.useRef)(null),{collapsed:b,setCollapsed:f}=(0,i.u)({initialState:!n.open}),[x,g]=(0,r.useState)(n.open),v=r.isValidElement(e)?e:(0,u.jsx)("summary",{children:e??"Details"});return(0,u.jsxs)("details",{...n,ref:k,open:x,"data-collapsed":b,className:(0,s.A)(o,m&&l,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&p(t,k.current)&&(e.preventDefault(),b?(f(!1),g(!0)):f(!0))},children:[v,(0,u.jsx)(i.N,{lazy:!1,collapsed:b,onCollapseTransitionEnd:e=>{f(e),g(!e)},children:(0,u.jsx)("div",{className:d,children:t})})]})}const k="details_b_Ee";function b({...e}){return(0,u.jsx)(m,{...e,className:(0,s.A)("alert alert--info",k,e.className)})}},21186(e,t,n){n.d(t,{A:()=>u});n(96540);var r=n(57390),s=n(27653),c=n(69623),a=n(28774),i=n(21312),o=n(60513),l=n(44349),d=n(74848);const u=({method:e,certPath:t,certDisplayName:n,caDisplayName:u})=>{const h="openssl"===e,p=h?`${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",m=h?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:(0,d.jsx)(a.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,d.jsx)(i.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),k=o.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(u??"").padEnd(24)}no
  `;return(0,d.jsxs)(c.A,{className:"custom-blue-block",summary:(0,d.jsx)("summary",{children:(0,i.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,d.jsx)(s.A,{type:"warning",title:(0,i.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:m}),(0,d.jsx)(r.A,{language:"bash",children:p}),(0,d.jsx)(s.A,{type:"note",title:(0,i.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,d.jsx)(r.A,{language:"bash",children:k})})]})}},65742(e,t,n){n.d(t,{$:()=>s});var r=n(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);