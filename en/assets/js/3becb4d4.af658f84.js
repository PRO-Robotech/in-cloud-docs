"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[166,186,288,291,294,301,313,316,333,337,344,354,389,435,461,473,499,529,611,642,644,712,747,843,887,982,1026,1068,1157,1175,1244,1427,1438,1457,1475,1497,1546,1594,1643,1654,1663,1740,1758,1817,1915,1954,2032,2038,2056,2102,2198,2215,2229,2269,2401,2480,2534,2554,2577,2630,2632,2646,2650,2651,2719,2801,2816,2837,2880,3018,3028,3114,3156,3161,3187,3207,3232,3242,3448,3479,3486,3577,3698,3737,3798,3857,3862,3897,3995,4033,4061,4477,4487,4502,4522,4614,4657,4665,4693,4797,4927,4958,4963,5057,5124,5176,5187,5227,5248,5357,5364,5396,5397,5458,5465,5522,5559,5570,5650,5782,5803,5831,5978,5989,6019,6078,6223,6333,6335,6361,6401,6461,6512,6563,6603,6607,6703,6712,6769,6899,7341,7342,7344,7381,7396,7412,7415,7482,7662,7713,7796,7873,7893,7897,7918,7952,7979,8072,8206,8246,8303,8333,8370,8495,8515,8532,8625,8662,8744,8769,8794,8851,8925,9026,9028,9033,9059,9076,9107,9137,9259,9298,9328,9657,9663,9714,9722,9751,9843,9882,9968],{45280(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},58576(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/main","title":"main","description":"Purpose etcd-server (client connections, port 2379), etcd-peer (inter-node replication, port 2380), and etcd-healthcheck-client (health checks). Also used by kube-apiserver to verify the connection to etcd via the apiserver-etcd-client certificate.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/main","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(12365),l=n(45280);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," CA for all etcd cluster certificates. Signs server, client, and peer certificates for etcd: ",(0,s.jsx)(t.code,{children:"etcd-server"})," (client connections, port 2379), ",(0,s.jsx)(t.code,{children:"etcd-peer"})," (inter-node replication, port 2380), and ",(0,s.jsx)(t.code,{children:"etcd-healthcheck-client"})," (health checks). Also used by kube-apiserver to verify the connection to etcd via the ",(0,s.jsx)(t.code,{children:"apiserver-etcd-client"})," certificate."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this section only describes the process of creating ",(0,s.jsx)(t.code,{children:"ETCD CA"})," root certificates."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},12365(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.etcdCA.keyPath} ${a.$.etcdCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${a.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${a.$.etcdCA.crtPath} \\
      -config ${a.$.etcdCA.crtConf}
  `}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness check"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
    ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.etcdCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},21063(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-healthcheck-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "etcd/healthcheck-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25069(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/main","title":"main","description":"Purpose: Client certificate for etcd healthcheck probes (liveness probe). Used for connecting to the etcd client API when checking cluster availability. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(33945),l=n(21063),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Client certificate for etcd healthcheck probes (liveness probe). Used for connecting to the etcd client API when checking cluster availability. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.etcdClient.crtPath,certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},33945(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdClient/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdClient","slug":"/tech-docs/etcd/certificates/components/etcdClient/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdClient.keyPath} ${a.$.etcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdClient.keyPath} \\
    -out ${a.$.etcdClient.csrPath} \\
    -config ${a.$.etcdClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},77794(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-peer \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},51511(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/main","title":"main","description":"Purpose: Certificate for mutual authentication (mutual TLS) between etcd cluster nodes on port 2380. Each cluster member uses the peer certificate for both the server and client side of the connection. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(13840),l=n(77794),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Certificate for mutual authentication (mutual TLS) between etcd cluster nodes on port 2380. Each cluster member uses the peer certificate for both the server and client side of the connection. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.etcdPeer.crtPath,certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},13840(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdPeer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdPeer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdPeer","slug":"/tech-docs/etcd/certificates/components/etcdPeer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdPeer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${i.M.clusterName.value}
      export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdPeer.keyPath} ${a.$.etcdPeer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdPeer.keyPath} \\
    -out ${a.$.etcdPeer.csrPath} \\
    -config ${a.$.etcdPeer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},29673(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/kubeadm","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs etcd-server \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [192.168.10.27 127.0.0.1 ::1]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28250(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/main","title":"main","description":"Purpose: Server certificate for etcd serving client connections on port 2379. Presented during TLS connection from kube-apiserver and other etcd clients. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/main.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/main","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(85447),l=n(29673),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Server certificate for etcd serving client connections on port 2379. Presented during TLS connection from kube-apiserver and other etcd clients. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.etcdServer.crtPath,certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},85447(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/certificates/components/etcdServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/components/etcdServer/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/components/etcdServer","slug":"/tech-docs/etcd/certificates/components/etcdServer/openssl","permalink":"/en/tech-docs/etcd/certificates/components/etcdServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
  export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.etcdServer.keyPath} ${a.$.etcdServer.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.etcdServer.keyPath} \\
    -out ${a.$.etcdServer.csrPath} \\
    -config ${a.$.etcdServer.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},97725(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"Installation verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/en/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Installation verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation verification"}),(0,s.jsx)(a.N,{binaryName:"etcd",version:i.M.etcd.value,installSteps:["Installing etcd..."],successMessage:"etcd successfully updated to",grepCommand:"'etcd'",lsOutput:"-rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd\n-rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl\n-rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl"}),(0,s.jsx)(a.y,{command:"etcd --version",output:"etcd Version: 3.5.5\nGit SHA: 19002cfc6\nGo Version: go1.16.15\nGo OS/Arch: linux/amd64"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},52762(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/en/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(9792),l=n(76331),u=n(58700),d=n(68741);const h={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${d.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${u.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${u.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${u.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${u.m.etcdctl.path}"


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
    `},p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/etcd
    `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${d.M.etcdctl.value}"
      REPOSITORY="${u.m.etcdctl.baseUrl}"
      EOF
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${h.value}
      EOF
    `}),(0,s.jsx)("h4",{children:"Setting permissions"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${d.M.etcdctl.value}"
          REPOSITORY="${u.m.etcdctl.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${h.value}
    `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},29213(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmInit","title":"kubeadmInit","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/kubeadmInit.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmInit","permalink":"/en/tech-docs/etcd/components/etcd/kubeadmInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase etcd local \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${a.M.kubernetesBaseFolderPath.value}"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},86170(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/kubeadmJoin","title":"kubeadmJoin","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/kubeadmJoin.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/kubeadmJoin","permalink":"/en/tech-docs/etcd/components/etcd/kubeadmJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm join phase control-plane-join etcd \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Kube API
  [etcd] Creating static Pod manifest for local etcd in "${a.M.kubernetesBaseFolderPath.value}"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},6284(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","permalink":"/en/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(52762);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Setting permissions."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2045(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupInitComponent","title":"setupInitComponent","description":"This section is optional and is intended only for cases when you need to configure this resource separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/setupInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupInitComponent","permalink":"/en/tech-docs/etcd/components/etcd/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(69989),l=n(29213);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and is intended only for cases when you need to configure this resource separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},88652(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/setupJoinComponent","title":"setupJoinComponent","description":"This section is optional and is intended only for cases when you need to configure this resource separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/setupJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/setupJoinComponent","permalink":"/en/tech-docs/etcd/components/etcd/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(49695),l=n(86170);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and is intended only for cases when you need to configure this resource separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},69989(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodInitComponent","title":"staticPodInitComponent","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/staticPodInitComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodInitComponent","permalink":"/en/tech-docs/etcd/components/etcd/staticPodInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(285),c=n(68741),l=n(95538),u=n(60513),d=n(57390),h=n(98982);const p={},m=void 0,b={},g=[...h.toc];function f(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(h.default,{}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME=${a.M.clusterName.value}
  export BASE_DOMAIN=${a.M.kubernetesBaseDomain.value}
  export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}
  export FULL_HOST_NAME="${a.M.virtualMachineFullName.value}"
  export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${l.D.initialAdvertisePeerUrls.value}"
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Static Pod ETCD"}),(0,s.jsx)("h4",{children:"Manifest generation"}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${i.h.etcdServer.portNumber}
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
      image: ${a.M.baseDockerRegistry.value}/etcd:${c.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 127.0.0.1
          path: /health?exclude=NOSPACE&serializable=true
          port: ${i.h.etcdMetricServer.portNumber}
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
          port: ${i.h.etcdMetricServer.portNumber}
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
`})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},49695(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/staticPodJoinComponent","title":"staticPodJoinComponent","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/staticPodJoinComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/staticPodJoinComponent","permalink":"/en/tech-docs/etcd/components/etcd/staticPodJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(285),c=n(68741),l=n(95538),u=n(60513),d=n(57390),h=n(28415);const p={},m=void 0,b={},g=[...h.toc];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(h.default,{}),"\n",(0,s.jsx)(d.A,{language:"bash",children:(0,u.A)(`\n  export CLUSTER_NAME=${a.M.clusterName.value}\n  export BASE_DOMAIN=${a.M.kubernetesBaseDomain.value}\n  export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}\n  export FULL_HOST_NAME=${a.M.virtualMachineFullName.value}\n\n  # Get the list of existing etcd nodes\n  mapfile -t ETCD_PODS < <(kubectl get pods \\\n    --kubeconfig=/etc/kubernetes/admin.conf \\\n    -n kube-system -l component=etcd \\\n    -o jsonpath="{range .items[*]}{.metadata.name} {.status.podIP}{'\\n'}{end}")\n\n  ETCD_EXISTING_NODES=""\n  ETCD_ENDPOINTS=""\n\n  for entry in "\${ETCD_PODS[@]}"; do\n    read -r podname podip <<< "$entry"\n    nodename="\${podname#etcd-}"\n    ETCD_EXISTING_NODES+="\${nodename}=https://\${podip}:2380,"\n    ETCD_ENDPOINTS+="https://\${podip}:2379,"\n  done\n\n  ETCD_EXISTING_NODES="\${ETCD_EXISTING_NODES%,}"\n  ETCD_ENDPOINTS="\${ETCD_ENDPOINTS%,}"\n\n  # Add the current node if it's not in the list\n  ETCD_CURRENT_NODE="\${FULL_HOST_NAME}=https://\${MACHINE_LOCAL_ADDRESS}:2380"\n\n  if [[ "$ETCD_EXISTING_NODES" == *"\${FULL_HOST_NAME}="* ]]; then\n    export ETCD_INITIAL_CLUSTER="$ETCD_EXISTING_NODES"\n  else\n    if [[ -n "$ETCD_EXISTING_NODES" ]]; then\n      export ETCD_INITIAL_CLUSTER="\${ETCD_EXISTING_NODES},\${ETCD_CURRENT_NODE}"\n    else\n      export ETCD_INITIAL_CLUSTER="\${ETCD_CURRENT_NODE}"\n    fi\n  fi\n\n  export ETCD_ENDPOINTS\n`)}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Static Pod ETCD"}),(0,s.jsx)("h4",{children:"Manifest generation"}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/etcd.yaml
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/etcd.advertise-client-urls: https://$\{MACHINE_LOCAL_ADDRESS}:${i.h.etcdServer.portNumber}
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
      image: ${a.M.baseDockerRegistry.value}/etcd:${c.M.etcd.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          host: 0.0.0.0
          path: /health?exclude=NOSPACE&serializable=true
          port: ${i.h.etcdMetricServer.portNumber}
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
          port: ${i.h.etcdMetricServer.portNumber}
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
`})]}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Expanding the ETCD cluster"}),(0,s.jsx)("h4",{children:"Adding a node"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Declare an alias for ",(0,s.jsx)(t.code,{children:"etcdctl"})," using the required certificates"]}),"\n"]}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  alias etcdctl='etcdctl \\
    --cert=/etc/kubernetes/pki/etcd/peer.crt \\
    --key=/etc/kubernetes/pki/etcd/peer.key \\
    --cacert=/etc/kubernetes/pki/etcd/ca.crt'
`}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Function to get the list of client URLs for all current cluster members"}),"\n"]}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  etcdctlMembers() {
    etcdctl member list -w json | \\
    jq -r '[.members[].clientURLs[]?] | join(",")'
  }
`}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"View the current quorum members"}),"\n"]}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) member list \\
    -w table
`}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Adding a new node to the ETCD cluster"}),"\n"]}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
  etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    member add $\{FULL_HOST_NAME} \\
    --peer-urls=https://$\{MACHINE_LOCAL_ADDRESS}:2380
`}),(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsxs)(t.p,{children:["After adding the second node to the ETCD quorum, the first master may become ",(0,s.jsx)(t.strong,{children:"unavailable"})," until the second ETCD node is started.\nMake sure to start ETCD on the new node using ",(0,s.jsx)(t.code,{children:"kubelet"})," (see the step below) before continuing."]})})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},87355(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/all-marking","title":"5.2.4.1. Node marking","description":"This section covers marking and restricting control plane nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/marking/allMarkingComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/all-marking","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/all-marking","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-marking","title":"5.2.4.1. Node marking"},"sidebar":"techDocs","previous":{"title":"5.2.3.3. Kubelet Start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start"},"next":{"title":"5.2.4.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac"}}');var s=n(74848),o=n(28453),a=n(47901),i=n(51524),c=n(9792),l=n(76331);const u={id:"all-marking",title:"5.2.4.1. Node marking"},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers marking and restricting control plane nodes.\nIt describes how to assign the control-plane role to a node and apply a taint that prevents scheduling workload pods on master nodes.\nThese actions are necessary to ensure isolation of control plane components and to comply with the cluster architecture model."}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"phase",children:[(0,s.jsx)(c.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Node marking and restriction"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(c.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Node marking and restriction"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},47901(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/markingInitComponent","title":"markingInitComponent","description":"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and ensure isolation of the control plane from unplanned workloads.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/marking/markingInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/markingInitComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/markingInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(57390),l=n(60513),u=n(44349),d=n(98982);const h={},p=void 0,m={},b=[...d.toc];function g(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and ensure isolation of the control plane from unplanned workloads."})}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${u.M.clusterName.value}
  export BASE_DOMAIN=${u.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"Node labeling"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com labeled
`})}),(0,s.jsx)("h4",{children:"Node tainting"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  node/master-1.my-first-cluster.example.com modified
`})})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase mark-control-plane \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
  [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
`})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},51524(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","title":"markingJoinComponent","description":"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and protect the control plane from unplanned workloads.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/marking","slug":"/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/markingJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(57390),l=n(60513),u=n(44349),d=n(28415);const h={},p=void 0,m={},b=[...d.toc];function g(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section describes the cluster configuration that allows you to set the container scheduling policy in advance and protect the control plane from unplanned workloads."})}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${u.M.clusterName.value}
  export BASE_DOMAIN=${u.M.kubernetesBaseDomain.value}
  export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"Node labeling"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl label node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="" \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  node/master-<n>.my-first-cluster.example.com labeled
`})}),(0,s.jsx)("h4",{children:"Node tainting"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl taint node $\{FULL_HOST_NAME} node-role.kubernetes.io/control-plane="":NoSchedule \\
        --overwrite \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
    node/master-<n>.my-first-cluster.example.com modified
  `})})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm join phase control-plane-join mark-control-plane \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
    [mark-control-plane] Marking the node master-<n>.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
  `})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},56646(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/all-ca","title":"5.2.4.4. CA upload","description":"This section covers uploading root certificates to the Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-ca","title":"5.2.4.4. CA upload"},"sidebar":"techDocs","previous":{"title":"5.2.4.3. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 CFG","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-configs/all-configs"},"next":{"title":"5.3.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/en/tech-docs/kubernetes/setup-environments/os-setup-dp"}}');var s=n(74848),o=n(28453),a=n(28629),i=n(9792),c=n(76331);const l={id:"all-ca",title:"5.2.4.4. CA upload"},u=void 0,d={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section covers uploading root certificates to the Kubernetes cluster.\nThe kubeadm-certs secret is created manually and contains the keys and certificates required when adding new control plane nodes (",(0,s.jsx)(t.code,{children:"kubeadm join"}),").\nThis approach allows sensitive data to be securely transferred between control plane nodes."]}),"\n"]}),"\n",(0,s.jsx)(c.A,{groupId:"phase",children:(0,s.jsx)(i.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Uploading root certificates to Kubernetes"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28629(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","title":"uploadCAComponent","description":"This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a Secret resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(57390),l=n(60513),u=n(44349);const d={},h=void 0,p={},m=[];function b(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a ",(0,s.jsx)(t.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,s.jsx)("h4",{children:"Role model preparation"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This block prepares the role model for granting access to the kubeadm-certs secret. This is necessary so that control plane nodes can securely obtain root certificates through the Kubernetes API when joining the cluster. The role is bound to the ${AUTH_EXTRA_GROUPS} group, which kubeadm typically falls under during join."}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsx)("h4",{children:"Working directory"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      cat <<EOF > ${u.M.kubernetesBaseFolderPath.value}/openssl/encrypt.py
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

      # kubeadm expects: nonce + ciphertext (including auth tag)
      payload = nonce + ct
      print(base64.b64encode(payload).decode())
      EOF
    `}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      cat <<'EOF' > ${u.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${u.M.kubernetesBaseFolderPath.value}/pki"
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
    `}),(0,s.jsx)("h4",{children:"Setting permissions"}),(0,s.jsx)(c.A,{language:"yaml",children:l.A`
      chmod +x ${u.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,s.jsx)("h4",{children:"Running the script"}),(0,s.jsx)(c.A,{language:"yaml",children:l.A`
      ${u.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(c.A,{language:"yaml",children:l.A`
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
`})})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"Uploading certificates"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase  upload-certs \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},46835(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-configs/all-configs","title":"5.2.4.3. Configuration upload","description":"This section covers uploading the current kubeadm and kubelet configuration to the cluster as a ConfigMap. This configuration is required for the correct execution of the kubeadm join command, as it is used during initialization of new control plane nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-configs/allUploadConfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-configs","slug":"/tech-docs/kubernetes/additional-setup/upload-configs/all-configs","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-configs/all-configs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-configs","title":"5.2.4.3. Configuration upload"},"sidebar":"techDocs","previous":{"title":"5.2.4.2. \u0420\u043e\u043b\u0435\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac"},"next":{"title":"5.2.4.4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0426\u0410","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/all-ca"}}');var s=n(74848),o=n(28453),a=n(34675),i=n(9792),c=n(76331);const l={id:"all-configs",title:"5.2.4.3. Configuration upload"},u=void 0,d={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section covers uploading the current ",(0,s.jsx)(t.code,{children:"kubeadm"})," and ",(0,s.jsx)(t.code,{children:"kubelet"})," configuration to the cluster as a ",(0,s.jsx)(t.code,{children:"ConfigMap"}),". This configuration is required for the correct execution of the ",(0,s.jsx)(t.code,{children:"kubeadm join"})," command, as it is used during initialization of new control plane nodes.\nUploading the configuration centralizes cluster parameter management and ensures consistency across all nodes, including both ",(0,s.jsx)(t.code,{children:"master"})," and ",(0,s.jsx)(t.code,{children:"worker"})," nodes."]}),"\n"]}),"\n",(0,s.jsxs)(c.A,{groupId:"phase",children:[(0,s.jsx)(i.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Uploading configuration to the cluster"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(i.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Uploading configuration to the cluster"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(t.p,{children:["When adding a new control plane node (",(0,s.jsx)(t.code,{children:"join"}),"), configuration upload is performed automatically\nas part of the ",(0,s.jsx)(t.code,{children:"kubeadm join"})," phase. The ",(0,s.jsx)(t.code,{children:"kubeadm"})," and ",(0,s.jsx)(t.code,{children:"kubelet"})," configuration is read from the existing ",(0,s.jsx)(t.code,{children:"ConfigMap"}),"\nin the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace, which was uploaded during the initialization of the first node."]}),(0,s.jsxs)(t.p,{children:["A separate manual ",(0,s.jsx)(t.code,{children:"upload-config"})," call is not required during join \u2014 ",(0,s.jsx)(t.code,{children:"kubeadm join"})," independently\nretrieves the necessary parameters from the cluster."]})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},34675(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","title":"uploadConfigsInitComponent","description":"This section describes the instructions for uploading the current Kubeadm and Kubelet configuration to the Kubernetes control plane as a ConfigMap resource. This approach simplifies managing configuration changes for Kubernetes nodes, covering both worker and master nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-configs","slug":"/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-configs/uploadConfigsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(57390),l=n(60513),u=n(12480),d=n(26225),h=n(44349),p=n(95538);const m={},b=void 0,g={},f=[];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["This section describes the instructions for uploading the current ",(0,s.jsx)(t.code,{children:"Kubeadm"})," and ",(0,s.jsx)(t.code,{children:"Kubelet"})," configuration to the Kubernetes control plane as a ",(0,s.jsx)(t.code,{children:"ConfigMap"})," resource. This approach simplifies managing configuration changes for Kubernetes nodes, covering both ",(0,s.jsx)(t.code,{children:"worker"})," and ",(0,s.jsx)(t.code,{children:"master"})," nodes."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME='${h.M.clusterName.value}'
      export BASE_DOMAIN='${h.M.kubernetesBaseDomain.value}'
      export FULL_HOST_NAME=${h.M.virtualMachineFullName.value}
      export INTERNAL_API=api.${h.M.kubernetesClusterExternalDomain.value}
      export MACHINE_LOCAL_ADDRESS=${h.M.virtualMachineLocalAddress.value}
      export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${p.D.initialAdvertisePeerUrls.value}"
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"kubeadm-config"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required to allow nodes to read the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," ConfigMap in the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace:"]}),"\n"]}),(0,s.jsx)(c.A,{children:l.A`
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
      `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required so that when executing ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the node receives the current ",(0,s.jsx)(t.code,{children:"ClusterConfiguration"})," from the control cluster and correctly joins the control-plane."]}),"\n"]}),(0,s.jsx)(c.A,{children:l.A`
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
            ${u.I.data.value}
        EOF
      `})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"kubelet-config"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required to allow nodes to read the ",(0,s.jsx)(t.code,{children:"kubelet-config"})," ConfigMap in the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace:"]}),"\n"]}),(0,s.jsx)(c.A,{children:l.A`
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
      `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required so that when executing ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the node receives the current ",(0,s.jsx)(t.code,{children:"kubelet-config"})," from the control cluster and correctly joins the control-plane."]}),"\n"]}),(0,s.jsx)(c.A,{children:l.A`
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
            ${d.h.data.value}
        EOF
      `})]})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"Configuration update"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase upload-config all \\
        --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${h.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
  [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
`})})]})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},58179(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac","title":"5.2.4.2. Role model","description":"This section covers the configuration of the role model (RBAC) required for the correct operation of the kubeadm join mechanism. It describes the Roles/ClusterRoles, RoleBindings/ClusterRoleBindings, and Bootstrap token that allow new nodes to securely connect to the cluster, request certificates, and obtain API server configuration information.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-rbac/allUploadRbacComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-rbac","slug":"/tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-rbac","title":"5.2.4.2. Role model"},"sidebar":"techDocs","previous":{"title":"5.2.4.1. \u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/all-marking"},"next":{"title":"5.2.4.3. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 CFG","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-configs/all-configs"}}');var s=n(74848),o=n(28453),a=n(81887),i=n(9792),c=n(76331);const l={id:"all-rbac",title:"5.2.4.2. Role model"},u=void 0,d={},h=[...a.toc];function p(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the configuration of the role model (RBAC) required for the correct operation of the kubeadm join mechanism. It describes the Roles/ClusterRoles, RoleBindings/ClusterRoleBindings, and Bootstrap token that allow new nodes to securely connect to the cluster, request certificates, and obtain API server configuration information."}),"\n"]}),"\n",(0,s.jsx)(c.A,{groupId:"phase",children:(0,s.jsx)(i.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubeadm role model setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},81887(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","title":"rbacComponent","description":"Role bindings","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-rbac","slug":"/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-rbac/rbacComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(57390),l=n(60513),u=n(44349),d=n(56223);const h={},p=void 0,m={},b=[];function g(e){const t={admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Role bindings"}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,s.jsx)("h4",{children:"Roles and bindings"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This block is required so that kubeadm can check whether a node with this name is registered in the cluster or not."}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This block is required so that anonymous clients (e.g., kubeadm during the discovery phase) can retrieve the ConfigMap with cluster information (cluster-info) from the kube-public namespace. This allows loading the initial API server connection parameters and verifying the bootstrap token signature before establishing full authentication."}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required to assign cluster-admin rights to all users in the kubeadm",":cluster-admins"," group. This allows granting full cluster access with centralized rights management \u2014 unlike the system",":masters"," group, from which access cannot be revoked through RBAC mechanisms. This approach simplifies administrative role setup and integration with external authorization systems."]}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required so that members of the ${AUTH_EXTRA_GROUPS} group (e.g., system",":bootstrappers",") can use the bootstrap token to initialize the kubelet connection to the cluster. Binding to the system",":node-bootstrapper"," role allows such subjects to request TLS certificates for nodes through CSR (CertificateSigningRequest), which is a necessary step in the kubeadm join process."]}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required for automatic approval of client certificate requests from nodes joining the cluster via bootstrap token. It assigns the system",":certificates",".k8s.io:certificatesigningrequests",":nodeclient"," role to the ${AUTH_EXTRA_GROUPS} group (e.g., system",":bootstrappers","), which allows kube-controller-manager to automatically sign CSRs from kubelet during kubeadm join."]}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This block is required for automatic approval of kubelet client certificate renewal requests. It grants the system",":nodes"," group rights that allow re-requesting and automatically receiving new certificates through CertificateSigningRequest. This is necessary for the correct operation of the node certificate rotation mechanism without manual intervention."]}),"\n"]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
      clusterrole.rbac.authorization.k8s.io/kubeadm:get-nodes created
      role.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      rolebinding.rbac.authorization.k8s.io/kubeadm:bootstrap-signer-clusterinfo created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:cluster-admins created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:get-nodes created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:kubelet-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-bootstrap created
      clusterrolebinding.rbac.authorization.k8s.io/kubeadm:node-autoapprove-certificate-rotation created
  `})})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Bootstrap tokens"}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
      `}),(0,s.jsx)("h4",{children:"Creating access token"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This token is a bootstrap token, and it is needed to allow a new node to securely join the Kubernetes cluster via kubeadm join while it does not yet have its own certificates and a trusted kubeconfig."}),"\n"]}),(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(t.p,{children:"In production environments, it is recommended to create a separate bootstrap token for each node.\nHowever, for demonstration purposes (and within this documentation), we have simplified the process and use a single shared token for all control plane nodes."})}),(0,s.jsx)(c.A,{children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
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
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
      secret/bootstrap-token-fjt9ex configured
  `})})]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Cluster-Info"}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
        export KUBE_CA_CRT_BASE64=$(base64 -w 0 /etc/kubernetes/pki/ca.crt)
        export CLUSTER_API_URL=https://api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}
    `}),(0,s.jsx)("h4",{children:"Updating Cluster-info"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"cluster-info is a public source of basic cluster information required for secure bootstrap joining of new nodes via kubeadm."}),"\n"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ud83d\udd10 Contains a public kubeconfig with CA and API address."}),"\n",(0,s.jsx)(t.li,{children:"\ud83d\udce5 Used by kubeadm join for discovery."}),"\n",(0,s.jsx)(t.li,{children:"\ud83c\udf10 Accessible anonymously through kube-public."}),"\n",(0,s.jsx)(t.li,{children:"\u2705 Allows the node to verify API server authenticity before authentication."}),"\n"]}),(0,s.jsx)(c.A,{children:l.A`
      kubectl \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        apply -f - <<EOF
      ---
      apiVersion: v1
      data:
        kubeconfig: |
          apiVersion: v1
          clusters:
          - cluster:
              certificate-authority-data: $\{KUBE_CA_CRT_BASE64}
              server: $\{CLUSTER_API_URL}:${d.L.securePort.value}
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
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
      configmap/cluster-info created
  `})})]})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"Role model generation"}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
      kubeadm init phase bootstrap-token \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [bootstrap-token] Using token: ${u.M.bootstrapToken.value}
  [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
  [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
  [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
  [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
  [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
`})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},14537(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/aboutAllComponent","title":"aboutAllComponent","description":"This section covers the rules for using certificates in a Kubernetes cluster: which components use certificates, who signs them, and how authentication is performed.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/aboutAllComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/aboutAllComponent","permalink":"/en/tech-docs/kubernetes/certificates/aboutAllComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(50400),i=n(9792),c=n(76331),l=n(22365);const u={},d=void 0,h={},p=[];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the rules for using certificates in a Kubernetes cluster: which components use certificates, who signs them, and how authentication is performed."}),"\n"]}),"\n",(0,s.jsxs)(c.A,{groupId:"group",children:[(0,s.jsxs)(i.A,{value:"masters",children:[(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-masters.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Basic certificate structure"})})]}),(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-masters-transport.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Network communication using certificates"})})]})]}),(0,s.jsxs)(i.A,{value:"workers",children:[(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-workers.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Basic certificate structure"})})]}),(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(a.Y,{src:`${(0,l.I)()}img/certificates/certificates-workers-transport.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Network communication using certificates"})})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},55215(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/allCertificatesComponent","title":"allCertificatesComponent","description":"This section describes the generation of all certificates.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/allCertificatesComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/allCertificatesComponent","permalink":"/en/tech-docs/kubernetes/certificates/allCertificatesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(53474),i=n(44349),c=n(57390),l=n(60513);function u(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase certs all \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}var h=n(9792),p=n(76331);const m={},b=void 0,g={},f=[...a.RM];function k(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the generation of all certificates."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you ",(0,s.jsx)(t.strong,{children:"have not performed manual certificate generation"}),", use this block to automatically create the necessary files."]})}),"\n",(0,s.jsxs)(p.A,{groupId:"phase",children:[(0,s.jsx)(h.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Generation of all certificates"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(d,{})]})}),(0,s.jsx)(h.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Generation of all certificates"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"}),"."]}),"\n"]})]}),(0,s.jsx)(a.Ay,{})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},49887(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/allKubeconfigsComponent","title":"allKubeconfigsComponent","description":"This section describes the generation of all kubeconfig files.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/allKubeconfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/allKubeconfigsComponent","permalink":"/en/tech-docs/kubernetes/certificates/allKubeconfigsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(8174),i=n(44349),c=n(57390),l=n(60513);function u(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Kubeconfig generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  kubeadm init phase kubeconfig all \\
    --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}var h=n(9792),p=n(76331);const m={},b=void 0,g={},f=[...a.RM];function k(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section describes the generation of all ",(0,s.jsx)("code",{children:"kubeconfig"})," files."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["If you ",(0,s.jsxs)(t.strong,{children:["have not performed manual ",(0,s.jsx)("code",{children:"kubeconfig"})," generation"]}),", use this block to automatically create the configurations."]})}),"\n",(0,s.jsxs)(p.A,{groupId:"phase",children:[(0,s.jsx)(h.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Generation of all kubeconfig files"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(d,{})]})}),(0,s.jsx)(h.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Generation of all kubeconfig files"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(a.Ay,{})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},32189(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/authentication-dp","title":"5.3.2. Authentication","description":"This section describes authentication options for kubelet on worker nodes when connecting to a Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/authenticationDP.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/authentication-dp","permalink":"/en/tech-docs/kubernetes/certificates/authentication-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"authentication-dp","title":"5.3.2. Authentication"},"sidebar":"techDocs","previous":{"title":"5.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp"},"next":{"title":"5.3.3. Kubelet Start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp"}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(60513),l=n(57390),u=n(44349),d=n(65742);const h={id:"authentication-dp",title:"5.3.2. Authentication"},p=void 0,m={},b=[];function g(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes authentication options for kubelet on worker nodes when connecting to a Kubernetes cluster.\nThe strategy depends on security requirements and the installation method."}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"auth-strategy",children:[(0,s.jsxs)(a.A,{value:"bootstrap-token",label:"Bootstrap Token (Hard Way)",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Manual creation of ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," using a bootstrap token.\nAfter starting, kubelet will automatically perform TLS Bootstrap: obtain a client certificate and create ",(0,s.jsx)(t.code,{children:"kubelet.conf"}),"."]}),"\n"]}),(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsxs)(t.p,{children:["This example uses a ",(0,s.jsx)(t.strong,{children:"static bootstrap token"})," for all worker nodes.\nIn production environments, it is recommended to ",(0,s.jsx)(t.strong,{children:"generate a unique token for each node"})," with a limited TTL."]})}),(0,s.jsx)("h3",{children:"Creating a bootstrap token"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["A bootstrap token is a Secret in the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace that allows a new node to join the cluster.\nTwo methods for creating the token are shown below."]}),"\n"]}),(0,s.jsxs)(i.A,{groupId:"token-creation",children:[(0,s.jsxs)(a.A,{value:"manual",label:"Manual",children:[(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,s.jsxs)(t.p,{children:["The commands below must be executed on a ",(0,s.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to create Secrets in the ",(0,s.jsx)(t.code,{children:"kube-system"})," namespace."]})}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
        `}),(0,s.jsx)("h4",{children:"Create Secret"}),(0,s.jsx)(l.A,{children:c.A`
          kubectl \\
            --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
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
        `})]}),(0,s.jsxs)(a.A,{value:"kubeadm-token",label:"kubeadm token create",children:[(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,s.jsxs)(t.p,{children:["This command must be executed on a ",(0,s.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to manage bootstrap tokens."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
          kubeadm token create \\
            --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
            --print-join-command \\
            --ttl 24h
        `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The obtained token can be used when creating ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," or passed to the ",(0,s.jsx)(t.code,{children:"kubeadm join"})," configuration."]}),"\n"]})]})]}),(0,s.jsx)("h3",{children:"Creating bootstrap-kubelet.conf"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["All commands in this section are executed on the ",(0,s.jsx)(t.strong,{children:"worker node"}),".\nThe ",(0,s.jsx)(t.code,{children:"ca.crt"})," file is not yet present on the worker node. CA data is fetched from the public ",(0,s.jsx)(t.code,{children:"cluster-info"})," ConfigMap\nin the ",(0,s.jsx)(t.code,{children:"kube-public"})," namespace, accessible anonymously via kube-apiserver."]})}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      export BOOTSTRAP_TOKEN=${u.M.bootstrapToken.value}
      export API_SERVER="https://api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443"
    `}),(0,s.jsx)("h4",{children:"Working directory"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}
    `}),(0,s.jsx)("h4",{children:"Fetch CA from cluster-info"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      export CA_DATA=$(curl -sk "$\{API_SERVER}/api/v1/namespaces/kube-public/configmaps/cluster-info" | \\
        jq -r '.data.kubeconfig' | \\
        grep 'certificate-authority-data' | \\
        awk '{print $2}')
    `}),(0,s.jsx)("h4",{children:"Save CA certificate"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}/pki
      echo "$\{CA_DATA}" | base64 -d > ${u.M.kubernetesBaseFolderPath.value}/pki/ca.crt
    `}),(0,s.jsx)("h4",{children:"Generate kubeconfig"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      cat <<EOF > ${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf
      apiVersion: v1
      clusters:
      - cluster:
          certificate-authority-data: $\{CA_DATA}
          server: $\{API_SERVER}
        name: ${u.M.clusterName.value}
      contexts:
      - context:
          cluster: ${u.M.clusterName.value}
          user: tls-bootstrap-token-user
        name: tls-bootstrap-token-user@kubernetes
      current-context: tls-bootstrap-token-user@kubernetes
      kind: Config
      preferences: {}
      users:
      - name: tls-bootstrap-token-user
        user:
          token: $\{BOOTSTRAP_TOKEN}
      EOF
    `}),(0,s.jsx)("h3",{children:"Kubernetes CSR (TLS Bootstrap simulation)"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This approach simulates kubelet's TLS Bootstrap behavior:\nprivate keys are generated on the worker node, CSRs are submitted through the Kubernetes API\nusing ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),", and approval is performed by an administrator on the master node.\nThe CA private key is ",(0,s.jsx)(t.strong,{children:"not required"})," on the worker node."]}),"\n"]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet Client Certificate (CSR)"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Kubelet client certificate for connecting to kube-apiserver."]}),"\n"]}),(0,s.jsx)("h4",{children:"1. Generate key and CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["All commands in this step are executed on the ",(0,s.jsx)(t.strong,{children:"worker node"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        cat <<EOF > ${d.$.kubeletClient.crtConf}
        [ req ]
        default_bits        = ${d.$.kubeletClient.keySize}
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
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        openssl genrsa \\
          -out ${d.$.kubeletClient.keyPath} ${d.$.kubeletClient.keySize}
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        openssl req -new \\
          -key ${d.$.kubeletClient.keyPath} \\
          -out ${d.$.kubeletClient.csrPath} \\
          -config ${d.$.kubeletClient.crtConf}
      `}),(0,s.jsx)("h4",{children:"2. Submit CSR to Kubernetes API"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["Worker node authenticates with the bootstrap token via ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
        export CSR_CONTENT=$(cat ${d.$.kubeletClient.csrPath} | base64 | tr -d '\\n')
      `}),(0,s.jsx)(l.A,{children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          apply -f - <<EOF
        apiVersion: certificates.k8s.io/v1
        kind: CertificateSigningRequest
        metadata:
          name: $\{CSR_NAME}
        spec:
          request: $\{CSR_CONTENT}
          signerName: kubernetes.io/kube-apiserver-client-kubelet
          usages:
          - digital signature
          - key encipherment
          - client auth
        EOF
      `}),(0,s.jsx)("h4",{children:"3. Approve CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,s.jsxs)(t.p,{children:["CSR approval is performed on the ",(0,s.jsx)(t.strong,{children:"master node"}),". Specify the name of the worker node for which the CSR is being approved."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,s.jsx)("h4",{children:"4. Retrieve signed certificate"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["Certificate is retrieved on the ",(0,s.jsx)(t.strong,{children:"worker node"})," using ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${d.$.kubeletClient.crtPath}
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        cat ${d.$.kubeletClient.crtPath} ${d.$.kubeletClient.keyPath} > ${d.$.kubeletNowClient.crtPath}
        ln -sf ${d.$.kubeletNowClient.crtPath} ${d.$.kubeletCurrentClient.crtPath}
      `})]}),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet Server Certificate (CSR)"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Kubelet server certificate for TLS on port 10250."]}),"\n"]}),(0,s.jsx)("h4",{children:"1. Generate key and CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["All commands in this step are executed on the ",(0,s.jsx)(t.strong,{children:"worker node"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
        export MACHINE_LOCAL_ADDRESS="${u.M.virtualMachineLocalAddress.value}"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        cat <<EOF > ${d.$.kubeletServer.crtConf}
        [ req ]
        default_bits        = ${d.$.kubeletServer.keySize}
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
        CN = system:node:$\{FULL_HOST_NAME}
        O  = system:nodes

        [ v3_ext ]
        authorityKeyIdentifier=keyid,issuer:always
        basicConstraints=CA:FALSE
        keyUsage=keyEncipherment,dataEncipherment
        extendedKeyUsage=serverAuth
        subjectAltName=@alt_names
        EOF
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        openssl genrsa \\
          -out ${d.$.kubeletServer.keyPath} ${d.$.kubeletServer.keySize}
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        openssl req -new \\
          -key ${d.$.kubeletServer.keyPath} \\
          -out ${d.$.kubeletServer.csrPath} \\
          -config ${d.$.kubeletServer.crtConf}
      `}),(0,s.jsx)("h4",{children:"2. Submit CSR to Kubernetes API"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["Worker node authenticates with the bootstrap token via ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
        export CSR_CONTENT=$(cat ${d.$.kubeletServer.csrPath} | base64 | tr -d '\\n')
      `}),(0,s.jsx)(l.A,{children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          apply -f - <<EOF
        apiVersion: certificates.k8s.io/v1
        kind: CertificateSigningRequest
        metadata:
          name: $\{CSR_NAME}
        spec:
          request: $\{CSR_CONTENT}
          signerName: kubernetes.io/kubelet-serving
          usages:
          - digital signature
          - key encipherment
          - server auth
        EOF
      `}),(0,s.jsx)("h4",{children:"3. Approve CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,s.jsxs)(t.p,{children:["CSR approval is performed on the ",(0,s.jsx)(t.strong,{children:"master node"}),". Specify the name of the worker node for which the CSR is being approved."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,s.jsx)("h4",{children:"4. Retrieve signed certificate"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,s.jsxs)(t.p,{children:["Certificate is retrieved on the ",(0,s.jsx)(t.strong,{children:"worker node"})," using ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${d.$.kubeletServer.crtPath}
      `}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
        cat ${d.$.kubeletServer.crtPath} ${d.$.kubeletServer.keyPath} > ${d.$.kubeletNowServer.crtPath}
        ln -sf ${d.$.kubeletNowServer.crtPath} ${d.$.kubeletCurrentServer.crtPath}
      `})]})]}),(0,s.jsxs)(a.A,{value:"kubeadm",label:"Kubeadm",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["When using kubeadm, worker node authentication happens automatically during ",(0,s.jsx)(t.code,{children:"kubeadm join"}),".\nKubeadm uses the bootstrap token from the configuration to obtain cluster-info, start kubelet, and perform TLS Bootstrap."]}),"\n"]}),(0,s.jsx)("h3",{children:"Generating a token"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If the token was not created in advance or has expired, generate a new one."}),"\n"]}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,s.jsxs)(t.p,{children:["This command must be executed on a ",(0,s.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to manage bootstrap tokens."]})}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      kubeadm token create \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --print-join-command \\
        --ttl 24h
    `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,s.jsx)("h3",{children:"Kubeadm configuration"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Use the obtained token in the kubeadm configuration file or pass it via command-line arguments."}),"\n"]}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"Software Config (DP)"})," \u2014 kubeadm configuration for the worker node."]}),"\n"]})]}),(0,s.jsx)("h4",{children:"Using a static config"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      kubeadm join \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsx)("h4",{children:"Using a token from command line"}),(0,s.jsx)(l.A,{language:"bash",children:c.A`
      kubeadm join \\
        api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
        --token <generated-token> \\
        --discovery-token-ca-cert-hash sha256:<hash>
    `})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},82243(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/all-ca","title":"5.2.2.1. Root certificates","description":"Certificate Authority (CA) is a trusted source that issues root certificates used to sign all other certificates within the Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/allCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/all-ca","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/all-ca","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-ca","title":"5.2.2.1. Root certificates"},"sidebar":"techDocs","previous":{"title":"5.2.2. All certificates","permalink":"/en/tech-docs/kubernetes/certificates/all-certificates"},"next":{"title":"5.2.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/en/tech-docs/kubernetes/certificates/components/all-certificates"}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(94675),l=n(21488),u=n(58576),d=n(12703);const h={id:"all-ca",title:"5.2.2.1. Root certificates"},p=void 0,m={},b=[...c.toc,...l.toc,...u.toc,...d.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Certificate Authority (CA)"})," is a trusted source that issues root certificates used to sign all other certificates within the Kubernetes cluster."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["CA certificates play a key role in establishing trust between components, ensuring ",(0,s.jsx)(t.strong,{children:"authentication"}),", ",(0,s.jsx)(t.strong,{children:"encryption"}),", and ",(0,s.jsx)(t.strong,{children:"integrity"})," of communications."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the process of obtaining root certificates that are used to sign the remaining certificates in the Kubernetes cluster."}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"phase",children:[(0,s.jsx)(a.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating root certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(i.A,{groupId:"CA",children:[(0,s.jsx)(a.A,{value:"Kubernetes CA",label:"Kubernetes CA",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubernetes CA"}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(a.A,{value:"FrontProxy CA",label:"FrontProxy CA",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"FrontProxy CA"}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(a.A,{value:"ETCD CA",label:"ETCD CA",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"ETCD CA"}),(0,s.jsx)(u.default,{})]})})]})]})}),(0,s.jsx)(a.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Downloading existing CAs"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(d.default,{})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},12703(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCA","title":"downloadCA","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCA.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCA","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCA","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(18640),i=n(80303),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsx)(c.A,{value:"HardWay",children:(0,s.jsx)(a.default,{})}),(0,s.jsx)(c.A,{value:"Kubeadm",children:(0,s.jsx)(i.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},80303(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","title":"downloadCAKubeadmComponent","description":"This section depends on the following sections:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm join phase control-plane-prepare download-certs \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},18640(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","title":"downloadCAOpensslComponent","description":"This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the Secret resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the ",(0,s.jsx)(t.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle."]})}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${c.M.kubernetesBaseFolderPath.value}/pki/etcd
`}),"\n",(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(t.p,{children:"In production environments, it is recommended to create a separate bootstrap token for each node.\nHowever, for demonstration purposes (and within this documentation), we have simplified the process and use a single shared token for all control plane nodes."})}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  export KUBE_API_BOOTSTRAP_TOKEN=${c.M.bootstrapToken.value}
  export KUBE_API_SERVER=https://api.my-first-cluster.example.com:6443
`}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  cat <<EOF > ${c.M.kubernetesBaseFolderPath.value}/openssl/decrypt.py
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

`}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  cat <<'EOF' > ${c.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
  #!/bin/bash
  set -euo pipefail

  CERT_PATH="${c.M.kubernetesBaseFolderPath.value}/pki"
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

`}),"\n",(0,s.jsx)("h4",{children:"Setting permissions"}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  chmod +x ${c.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,s.jsx)("h4",{children:"Running the script"}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
  ${c.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(a.A,{language:"yaml",children:i.A`
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
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},86498(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21488(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","title":"main","description":"Purpose: CA for the API aggregation mechanism (extension API servers). Signs the front-proxy-client certificate, which kube-apiserver uses when proxying requests to extended API servers (e.g., metrics-server, custom API servers).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(77707),l=n(86498);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," CA for the API aggregation mechanism (extension API servers). Signs the ",(0,s.jsx)(t.code,{children:"front-proxy-client"})," certificate, which kube-apiserver uses when proxying requests to extended API servers (e.g., metrics-server, custom API servers)."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this block describes only the process of creating ",(0,s.jsx)(t.code,{children:"Front Proxy CA"})," root certificates."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},77707(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.frontProxyCA.keyPath} ${a.$.frontProxyCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.frontProxyCA.crtPath} \\
    -config ${a.$.frontProxyCA.crtConf}
  `}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness verification"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
    ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.frontProxyCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},27144(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94675(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","title":"main","description":"Purpose: Kubernetes root Certificate Authority (CA). Signs the server and client certificates for kube-apiserver, kubelet, kube-controller-manager, and kube-scheduler. All cluster components trust this CA for TLS connection verification.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(98841),l=n(27144);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Kubernetes root Certificate Authority (CA). Signs the server and client certificates for kube-apiserver, kubelet, kube-controller-manager, and kube-scheduler. All cluster components trust this CA for TLS connection verification."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this block describes only the process of creating ",(0,s.jsx)(t.code,{children:"Kubernetes CA"})," root certificates."]})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},98841(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesCA.keyPath} ${a.$.kubernetesCA.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.kubernetesCA.crtPath} \\
    -config ${a.$.kubernetesCA.crtConf}
`}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness verification"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(c.A,{language:"bash",children:l.A`
    ${i.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.kubernetesCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(c.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},53474(e,t,n){n.d(t,{Ay:()=>u,RM:()=>c});var r=n(74848),s=n(28453),o=n(44349),a=n(57390),i=n(60513);const c=[];function l(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which certificates to generate \u2014 kubeadm creates them all at once, in full."})}),"\n",(0,r.jsx)("h4",{children:"Certificate generation"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare certs \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:i.A`
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
`})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8174(e,t,n){n.d(t,{Ay:()=>u,RM:()=>c});var r=n(74848),s=n(28453),o=n(44349),a=n(57390),i=n(60513);const c=[];function l(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which kubeconfigs to generate \u2014 kubeadm creates them all at once, in full."})}),"\n",(0,r.jsx)("h4",{children:"Manifest generation"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare kubeconfig \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubeconfig] Generating kubeconfig files
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},96728(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig admin \\
    --config=${a.M.kubernetesBaseFolderPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [kubeconfig] Writing "admin.conf" kubeconfig file
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},42081(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","title":"kubeconfig","description":"Kubeconfig setup for admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[{value:"Kubeconfig setup for <code>admin</code>",id:"kubeconfig-setup-for-admin",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"kubeconfig-setup-for-admin",children:["Kubeconfig setup for ",(0,s.jsx)(t.code,{children:"admin"})]}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},51692(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(9754),l=n(96728),u=n(42081),d=n(21186),h=n(65742);const p={},m=void 0,b={},g=[...c.toc,...u.toc,...l.toc];function f(e){return(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesAdminClient.crtPath,certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},9754(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/adminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/adminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/kubeconfig
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private keys"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesAdminClient.keyPath} ${a.$.kubernetesAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesAdminClient.keyPath} \\
    -out    ${a.$.kubernetesAdminClient.csrPath} \\
    -config ${a.$.kubernetesAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},65414(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig super-admin \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [kubeconfig] Writing "super-admin.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},29163(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","title":"kubeconfig","description":"Kubeconfig setup for super-admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[{value:"Kubeconfig setup for <code>super-admin</code>",id:"kubeconfig-setup-for-super-admin",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"kubeconfig-setup-for-super-admin",children:["Kubeconfig setup for ",(0,s.jsx)(t.code,{children:"super-admin"})]}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},16260(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(22541),l=n(65414),u=n(29163),d=n(21186),h=n(65742);const p={},m=void 0,b={},g=[...c.toc,...u.toc,...l.toc];function f(e){return(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesSuperAdminClient.crtPath,certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},22541(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/admin/superAdminClient","slug":"/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/admin/superAdminClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
    mkdir -p ${i.M.kubernetesBaseFolderPath.value}/kubeconfig
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSuperAdminClient.keyPath} ${a.$.kubernetesSuperAdminClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesSuperAdminClient.keyPath} \\
    -out    ${a.$.kubernetesSuperAdminClient.csrPath} \\
    -config ${a.$.kubernetesSuperAdminClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},26176(e,t,n){n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>x,default:()=>A,frontMatter:()=>k,metadata:()=>r,toc:()=>y});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","title":"allCertificatesAppsInitComponent","description":"Kubelet server","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allCertificatesAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(34641),i=n(98829),c=n(41355),l=n(93750),u=n(21824),d=n(25069),h=n(28250),p=n(51511),m=n(81990),b=n(32689),g=n(9792),f=n(76331);const k={},x=void 0,v={},y=[...a.toc,...i.toc,...c.toc,...u.toc,...l.toc,...d.toc,...h.toc,...p.toc,...m.toc,...b.toc];function j(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(f.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(g.A,{value:"Kubelet Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(g.A,{value:"API -> Etcd",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(g.A,{value:"API -> Kubelet",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(g.A,{value:"API Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(g.A,{value:"Proxy -> API",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(g.A,{value:"Etcd Client",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(g.A,{value:"Etcd Server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,s.jsx)(h.default,{})]})}),(0,s.jsx)(g.A,{value:"Etcd Peer",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,s.jsx)(p.default,{})]})}),(0,s.jsx)(g.A,{value:"Controller server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Controller server"})})}),(0,s.jsx)(m.default,{})]})}),(0,s.jsx)(g.A,{value:"Scheduler server",children:(0,s.jsxs)(t,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Scheduler server"})})}),(0,s.jsx)(b.default,{})]})})]})}function A(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},74585(e,t,n){n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>j,default:()=>S,frontMatter:()=>y,metadata:()=>r,toc:()=>C});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","title":"allCertificatesAppsJoinComponent","description":"Kubelet server","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allCertificatesAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(80281),i=n(7991),c=n(47022),l=n(55509),u=n(33755),d=n(33945),h=n(85447),p=n(13840),m=n(62242),b=n(73569),g=n(53474),f=n(21186),k=n(65742),x=n(9792),v=n(76331);const y={},j=void 0,A={},C=[...a.toc,...g.RM,...i.toc,...g.RM,...c.toc,...g.RM,...u.toc,...g.RM,...l.toc,...g.RM,...d.toc,...g.RM,...h.toc,...g.RM,...p.toc,...g.RM,...m.toc,...b.toc];function $(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(v.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(x.A,{value:"Kubelet Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(a.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubeletServer.crtPath,certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(x.A,{value:"API -> Etcd",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Etcd server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(i.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesEtcdClient.crtPath,certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"API -> Kubelet",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API client > Kubelet server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesKubeletClient.crtPath,certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"API Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"K8S-API server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(u.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesServer.crtPath,certDisplayName:"apiserver",caDisplayName:"ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"apiserver",caDisplayName:"ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"Proxy -> API",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"FrontProxy client > K8S-API"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesFrontProxyClient.crtPath,certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"Etcd Client",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd client > Etcd"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.etcdClient.crtPath,certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"etcd-healthcheck-client",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"Etcd Server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(h.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.etcdServer.crtPath,certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"etcd-server",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"Etcd Peer",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Etcd peer > Etcd"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(p.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.etcdPeer.crtPath,certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(x.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"etcd-peer",caDisplayName:"etcd-ca"})]})]})]})}),(0,s.jsx)(x.A,{value:"Controller server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Controller server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(m.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesControllerManagerServer.crtPath,certDisplayName:"controller-manager-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(x.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}),(0,s.jsx)(x.A,{value:"Scheduler server",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Scheduler server"})})}),(0,s.jsxs)(v.A,{groupId:"install-type",children:[(0,s.jsxs)(x.A,{value:"HardWay",children:[(0,s.jsx)(b.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesSchedulerServer.crtPath,certDisplayName:"scheduler-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(x.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})})]})}function S(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)($,{...e})}):$(e)}},93187(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/all-certificates","title":"5.2.2.2. Certificates","description":"Certificates are digital documents that verify the authenticity of components within a Kubernetes cluster. They provide secure communication, authentication, and encryption during interactions between nodes, control components, and users.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allCertificatesComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/all-certificates","permalink":"/en/tech-docs/kubernetes/certificates/components/all-certificates","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-certificates","title":"5.2.2.2. Certificates"},"sidebar":"techDocs","previous":{"title":"5.2.2.1. \u0426\u0410","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/all-ca"},"next":{"title":"5.2.2.3. Kubeconfigs","permalink":"/en/tech-docs/kubernetes/certificates/components/all-kubeconfigs"}}');var s=n(74848),o=n(28453),a=n(26176),i=n(74585),c=n(9792),l=n(76331);const u={id:"all-certificates",title:"5.2.2.2. Certificates"},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Certificates are digital documents that verify the authenticity of components within a Kubernetes cluster. They provide ",(0,s.jsx)(t.strong,{children:"secure communication, authentication, and encryption"})," during interactions between nodes, control components, and users."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["All certificates are created based on ",(0,s.jsx)(t.strong,{children:"Public Key Infrastructure (PKI)"})," and contain information about the owner, validity period, and the Certificate Authority (CA) that issued the certificate."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section generates the certificates required for various Kubernetes components (API server, kubelet, controller-manager, etc.)."}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"phase",children:[(0,s.jsx)(c.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating application certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(c.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating application certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},13708(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","title":"allKubeconfigsAppsInitComponent","description":"Super Admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(75246),i=n(70414),c=n(51692),l=n(16260),u=n(51359),d=n(27653),h=n(9792),p=n(76331);const m={},b=void 0,g={},f=[...l.toc,...c.toc,...u.toc,...a.toc,...i.toc];function k(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(p.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(h.A,{value:"Super Admin",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(h.A,{value:"Admin",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(h.A,{value:"Controller",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(h.A,{value:"Scheduler",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(h.A,{value:"Kubelet",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,s.jsx)(d.A,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Note! Can be signed via ",(0,s.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,s.jsx)(i.default,{})]})})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},33798(e,t,n){n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>A,default:()=>P,frontMatter:()=>j,metadata:()=>r,toc:()=>$});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","title":"allKubeconfigsAppsJoinComponent","description":"Super Admin","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","permalink":"/en/tech-docs/kubernetes/certificates/components/allKubeconfigsAppsJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(22541),i=n(29163),c=n(9754),l=n(42081),u=n(70204),d=n(89462),h=n(34170),p=n(71918),m=n(6242),b=n(35132),g=n(8174),f=n(21186),k=n(65742),x=n(27653),v=n(9792),y=n(76331);const j={},A=void 0,C={},$=[...a.toc,...i.toc,...g.RM,...c.toc,...l.toc,...g.RM,...u.toc,...d.toc,...g.RM,...h.toc,...p.toc,...g.RM,...m.toc,...b.toc,...g.RM];function S(e){const t={code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(y.A,{groupId:"Certs-APPS",children:[(0,s.jsx)(v.A,{value:"Super Admin",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Super Admin"})})}),(0,s.jsxs)(y.A,{groupId:"install-type",children:[(0,s.jsxs)(v.A,{value:"HardWay",children:[(0,s.jsx)(a.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesSuperAdminClient.crtPath,certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(v.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"super-admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(v.A,{value:"Admin",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Admin"})})}),(0,s.jsxs)(y.A,{groupId:"install-type",children:[(0,s.jsxs)(v.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(l.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesAdminClient.crtPath,certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(v.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"admin.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(v.A,{value:"Controller",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager"})})}),(0,s.jsxs)(y.A,{groupId:"install-type",children:[(0,s.jsxs)(v.A,{value:"HardWay",children:[(0,s.jsx)(u.default,{}),(0,s.jsx)(d.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesControllerManagerClient.crtPath,certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(v.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(v.A,{value:"Scheduler",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler"})})}),(0,s.jsxs)(y.A,{groupId:"install-type",children:[(0,s.jsxs)(v.A,{value:"HardWay",children:[(0,s.jsx)(h.default,{}),(0,s.jsx)(p.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubernetesSchedulerClient.crtPath,certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(v.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]})]})]})}),(0,s.jsx)(v.A,{value:"Kubelet",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet client"})})}),(0,s.jsx)(x.A,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Note! Can be signed via ",(0,s.jsx)(t.code,{children:"kubectl certificate approve"})]})}),(0,s.jsxs)(y.A,{groupId:"install-type",children:[(0,s.jsxs)(v.A,{value:"HardWay",children:[(0,s.jsx)(m.default,{}),(0,s.jsx)(b.default,{}),(0,s.jsx)(f.A,{method:"openssl",certPath:k.$.kubeletCurrentClient.crtPath,certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(v.A,{value:"Kubeadm",children:[(0,s.jsx)(g.Ay,{}),(0,s.jsx)(f.A,{method:"kubeadm",certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]})]})]})})]})}function P(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}},92741(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/all-kubeconfigs","title":"5.2.2.3. Kubeconfigs","description":"Kubeconfig is a configuration file that provides access to a Kubernetes cluster. It contains information about API servers, user credentials (such as tokens or certificates), and contexts that define which cluster and user are being used. Kubeconfig provides authentication and authorization when interacting with the cluster through kubectl or other clients, allowing secure management of cluster resources and settings.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/allKubeconfigsComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components","slug":"/tech-docs/kubernetes/certificates/components/all-kubeconfigs","permalink":"/en/tech-docs/kubernetes/certificates/components/all-kubeconfigs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubeconfigs","title":"5.2.2.3. Kubeconfigs"},"sidebar":"techDocs","previous":{"title":"5.2.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/en/tech-docs/kubernetes/certificates/components/all-certificates"},"next":{"title":"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442","permalink":"/en/tech-docs/kubernetes/certificates/service-account/all-service-account"}}');var s=n(74848),o=n(28453),a=n(13708),i=n(33798),c=n(9792),l=n(76331);const u={id:"all-kubeconfigs",title:"5.2.2.3. Kubeconfigs"},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Kubeconfig is a configuration file that provides access to a Kubernetes cluster. It contains information about API servers, user credentials (such as tokens or certificates), and contexts that define which cluster and user are being used. Kubeconfig provides authentication and authorization when interacting with the cluster through kubectl or other clients, allowing secure management of cluster resources and settings."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["We create ",(0,s.jsx)(t.code,{children:"kubeconfig"})," files for components and users. This ensures secure and controlled connection to the API server."]}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"phase",children:[(0,s.jsx)(c.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating kubeconfig configurations and certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(c.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating kubeconfig configurations and certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},48256(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver-etcd-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "apiserver-etcd-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},98829(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","title":"main","description":"Purpose: API Server client certificate for connecting to etcd. Used by kube-apiserver when accessing the cluster data store. Signed by etcd-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(7991),l=n(48256),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server client certificate for connecting to etcd. Used by kube-apiserver when accessing the cluster data store. Signed by ",(0,s.jsx)(t.strong,{children:"etcd-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.kubernetesEtcdClient.crtPath,certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"apiserver-etcd-client",caDisplayName:"etcd-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},7991(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/etcdClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesEtcdClient.keyPath} ${a.$.kubernetesEtcdClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesEtcdClient.keyPath} \\
    -out    ${a.$.kubernetesEtcdClient.csrPath} \\
    -config ${a.$.kubernetesEtcdClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},12351(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
    kubeadm init phase certs front-proxy-client \\
      --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "front-proxy-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},93750(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","title":"main","description":"Purpose: Client certificate for the API aggregation mechanism (extension API servers). Used by kube-apiserver when proxying requests to extended API servers (e.g., metrics-server). Signed by front-proxy-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(55509),l=n(12351),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Client certificate for the API aggregation mechanism (extension API servers). Used by kube-apiserver when proxying requests to extended API servers (e.g., metrics-server). Signed by ",(0,s.jsx)(t.strong,{children:"front-proxy-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.kubernetesFrontProxyClient.crtPath,certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"front-proxy-client",caDisplayName:"front-proxy-ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},55509(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/frontProxyClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesFrontProxyClient.keyPath} ${a.$.kubernetesFrontProxyClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    openssl req \\
      -new \\
      -key    ${a.$.kubernetesFrontProxyClient.keyPath} \\
      -out    ${a.$.kubernetesFrontProxyClient.csrPath} \\
      -config ${a.$.kubernetesFrontProxyClient.crtConf}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},64625(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local master-1.my-first-cluster.example.com] and IPs [29.64.0.1 10.0.0.16]
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21824(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","title":"main","description":"Purpose node IP addresses, load balancer VIP, DNS names, and the kubernetes.default service ClusterIP address. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(33755),l=n(64625),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server server certificate, presented to clients during TLS connection. Contains SAN (Subject Alternative Names) for all API access addresses: node IP addresses, load balancer VIP, DNS names, and the ",(0,s.jsx)(t.code,{children:"kubernetes.default"})," service ClusterIP address. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.kubernetesServer.crtPath,certDisplayName:"apiserver",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"apiserver",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},33755(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeAPIServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
  export CLUSTER_API_ENDPOINT=api.${i.M.clusterName.value}.${i.M.kubernetesBaseDomain.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesServer.keyPath} ${a.$.kubernetesServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesServer.keyPath} \\
    -out    ${a.$.kubernetesServer.csrPath} \\
    -config ${a.$.kubernetesServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},5319(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs apiserver-kubelet-client \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [certs] Generating "apiserver-kubelet-client" certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},41355(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","title":"main","description":"Purpose: API Server client certificate for connecting to kubelet. Used by kube-apiserver when accessing the kubelet API (fetching logs, exec, port-forward). Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(47022),l=n(5319),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," API Server client certificate for connecting to kubelet. Used by kube-apiserver when accessing the kubelet API (fetching logs, exec, port-forward). Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.kubernetesKubeletClient.crtPath,certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"apiserver-kubelet-client",caDisplayName:"ca"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},47022(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient","slug":"/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeAPI/kubeletClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.kubernetesKubeletClient.keyPath} ${a.$.kubernetesKubeletClient.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key    ${a.$.kubernetesKubeletClient.keyPath} \\
    -out    ${a.$.kubernetesKubeletClient.csrPath} \\
    -config ${a.$.kubernetesKubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},19526(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase kubeconfig controller-manager \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Certificate generation
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},89462(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[{value:"Kubeconfig setup for <code>controller-manager-client</code>",id:"kubeconfig-setup-for-controller-manager-client",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${i.M.clusterName.value}"
  export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsxs)(t.h4,{id:"kubeconfig-setup-for-controller-manager-client",children:["Kubeconfig setup for ",(0,s.jsx)(t.code,{children:"controller-manager-client"})]}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},51359(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","title":"main","description":"Purpose: kube-controller-manager client certificate for authentication to the API Server. Embedded in the controller-manager.conf kubeconfig and used for every controller-manager request to kube-apiserver. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(70204),l=n(19526),u=n(89462),d=n(21186),h=n(65742);const p={},m=void 0,b={},g=[...c.toc,...u.toc,...l.toc];function f(e){const t={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kube-controller-manager client certificate for authentication to the API Server. Embedded in the ",(0,s.jsx)(t.code,{children:"controller-manager.conf"})," kubeconfig and used for every controller-manager request to kube-apiserver. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesControllerManagerClient.crtPath,certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"controller-manager.conf",caDisplayName:"kubernetes"})]})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},70204(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerClient.keyPath} ${a.$.kubernetesControllerManagerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesControllerManagerClient.keyPath} \\
    -out ${a.$.kubernetesControllerManagerClient.csrPath} \\
    -config ${a.$.kubernetesControllerManagerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},81990(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","title":"main","description":"Purpose kubeadm does not manage this certificate \u2014 it is only created in HardWay mode.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(62242),l=n(21186),u=n(65742);const d={},h=void 0,p={},m=[...c.toc];function b(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kube-controller-manager server certificate for TLS on the metrics port and healthz endpoints. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". Note: kubeadm does not manage this certificate \u2014 it is only created in HardWay mode."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:u.$.kubernetesControllerManagerServer.crtPath,certDisplayName:"controller-manager-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},62242(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeControllerManager/kubeControllerManagerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesControllerManagerServer.keyPath} ${a.$.kubernetesControllerManagerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesControllerManagerServer.keyPath} \\
  -out ${a.$.kubernetesControllerManagerServer.csrPath} \\
  -config ${a.$.kubernetesControllerManagerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},58483(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig scheduler \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
  #### Kube Scheduler certificate generation
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},71918(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME="${i.M.clusterName.value}"
      export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
      export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
      export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
  `}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Kubeconfig creation instructions"})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},63238(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(34170),l=n(58483),u=n(71918),d=n(21186),h=n(65742);const p={},m=void 0,b={},g=[...c.toc,...u.toc,...l.toc];function f(e){return(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:h.$.kubernetesSchedulerClient.crtPath,certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"scheduler.conf",caDisplayName:"kubernetes"})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},34170(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerClient.keyPath} ${a.$.kubernetesSchedulerClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubernetesSchedulerClient.keyPath} \\
    -out ${a.$.kubernetesSchedulerClient.csrPath} \\
    -config ${a.$.kubernetesSchedulerClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},32689(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","title":"main","description":"Purpose kubeadm does not manage this certificate \u2014 it is only created in HardWay mode.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(73569),l=n(21186),u=n(65742);const d={},h=void 0,p={},m=[...c.toc];function b(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kube-scheduler server certificate for TLS on the metrics port and healthz endpoints. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),". Note: kubeadm does not manage this certificate \u2014 it is only created in HardWay mode."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(l.A,{method:"openssl",certPath:u.$.kubernetesSchedulerServer.crtPath,certDisplayName:"scheduler-server",caDisplayName:"kubernetes"})]}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Please note that kubeadm does not manage these certificates.\nUse HardWay mode"})})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},73569(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/kubeSchedulerServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesSchedulerServer.keyPath} ${a.$.kubernetesSchedulerServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubernetesSchedulerServer.keyPath} \\
  -out ${a.$.kubernetesSchedulerServer.csrPath} \\
  -config ${a.$.kubernetesSchedulerServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},75246(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubeScheduler/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubeScheduler/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubeScheduler","slug":"/tech-docs/kubernetes/certificates/components/kubeScheduler/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubeScheduler/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(63238);const i={},c=void 0,l={},u=[...a.toc];function d(e){return(0,s.jsx)(a.default,{})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},29484(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubeconfig kubelet \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
  #### Certificate generation
  [kubeconfig] Writing "kubelet.conf" kubeconfig file
`})]}),"\n",(0,s.jsx)("h4",{children:"Certificate rotation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-finalize experimental-cert-rotation \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
  #### Certificate rotation
  [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
`})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},35132(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","title":"kubeconfig","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/kubeconfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME="${i.M.clusterName.value}"
  export BASE_DOMAIN="${i.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${i.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${i.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Kubeconfig creation instructions"})}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},70414(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","title":"main","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(6242),l=n(29484),u=n(35132),d=n(21186),h=n(65742);const p={},m=void 0,b={},g=[...c.toc,...u.toc,...l.toc];function f(e){return(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.A,{method:"openssl",certPath:h.$.kubeletCurrentClient.crtPath,certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(d.A,{method:"kubeadm",certDisplayName:"kubelet-client-current",caDisplayName:"kubernetes"})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},6242(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeAPIClient/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  export CLUSTER_NAME=${i.M.clusterName.value}
  export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
  export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
  export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
  mkdir -p ${i.M.kuberneteKubeletFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletClient.keyPath} ${a.$.kubeletClient.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
    -new \\
    -key ${a.$.kubeletClient.keyPath} \\
    -out ${a.$.kubeletClient.csrPath} \\
    -config ${a.$.kubeletClient.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletClient.crtPath} ${a.$.kubeletClient.keyPath} >> ${a.$.kubeletNowClient.crtPath}
  ln -s ${a.$.kubeletNowClient.crtPath} ${a.$.kubeletCurrentClient.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},1359(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","title":"kubeadm","description":"kubeadm does not manage the server certificate used by the kubelet component.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513);const c={},l=void 0,u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"kubeadm"})," does not manage the server certificate used by the ",(0,s.jsx)(t.code,{children:"kubelet"})," component."]}),(0,s.jsxs)(t.p,{children:["When the ",(0,s.jsx)(t.code,{children:"kubelet"})," systemd unit starts, it initiates a certificate signing request.\nTo complete the process, manual approval is required using the command:\n",(0,s.jsx)(t.code,{children:"kubectl certificate approve $CERT_NAME"}),"."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)("h4",{children:"RotateKubeletServerCertificate"}),"\nFor automatic ",(0,s.jsx)(t.code,{children:"kubelet"})," certificate rotation, additional configuration is required:"]})]}),"\n",(0,s.jsx)("h4",{children:"Kube-Apiserver configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeAPI/setup",children:"Static Pod"})}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:i.A`
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
`}),"\n",(0,s.jsx)(t.admonition,{title:"Important for cloud environments!",type:"danger",children:(0,s.jsxs)(t.p,{children:["If you are using Cloud Controller Manager (CCM), the certificate will not be issued until\n",(0,s.jsx)(t.code,{children:"CCM"})," assigns an address to the ",(0,s.jsx)(t.code,{children:"Node"})," in the ",(0,s.jsx)(t.code,{children:"INTERNAL_IP"})," field."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},34641(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","title":"main","description":"Purpose: kubelet server certificate for TLS on port 10250. Presented when kube-apiserver and other clients connect to the kubelet API. Signed by kubernetes-ca.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(80281),l=n(1359),u=n(21186),d=n(65742);const h={},p=void 0,m={},b=[...c.toc,...l.toc];function g(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," kubelet server certificate for TLS on port 10250. Presented when kube-apiserver and other clients connect to the kubelet API. Signed by ",(0,s.jsx)(t.strong,{children:"kubernetes-ca"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsxs)(a.A,{value:"HardWay",children:[(0,s.jsx)(c.default,{}),(0,s.jsx)(u.A,{method:"openssl",certPath:d.$.kubeletServer.crtPath,certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]}),(0,s.jsxs)(a.A,{value:"Kubeadm",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(u.A,{method:"kubeadm",certDisplayName:"kubelet-server-current",caDisplayName:"kubernetes"})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},80281(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","title":"openssl","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/components/kubelet/kubeletServer","slug":"/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","permalink":"/en/tech-docs/kubernetes/certificates/components/kubelet/kubeletServer/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(65742),i=n(44349),c=n(57390),l=n(60513);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      export CLUSTER_NAME=${i.M.clusterName.value}
      export BASE_DOMAIN=${i.M.kubernetesBaseDomain.value}
      export CLUSTER_DOMAIN=${i.M.kubernetesClusterDomain.value}
      export FULL_HOST_NAME=${i.M.virtualMachineFullName.value}
      export MACHINE_LOCAL_ADDRESS=${i.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl/csr
      mkdir -p ${i.M.kuberneteKubeletFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubeletServer.keyPath} ${a.$.kubeletServer.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"CSR generation"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  openssl req \\
  -new \\
  -key ${a.$.kubeletServer.keyPath} \\
  -out ${a.$.kubeletServer.csrPath} \\
  -config ${a.$.kubeletServer.crtConf}
`}),"\n",(0,s.jsx)("h4",{children:"CSR signing"}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)(c.A,{language:"bash",children:l.A`
  cat ${a.$.kubeletServer.crtPath} ${a.$.kubeletServer.keyPath} >> ${a.$.kubeletNowServer.crtPath}
  ln -s ${a.$.kubeletNowServer.crtPath} ${a.$.kubeletCurrentServer.crtPath}
`})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},17861(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/all-examination","title":"5.2.2.5. Verification","description":"This section covers the verification of the correctness of created certificates and keys, as well as the correspondence between them. This is important for eliminating errors before launching Kubernetes components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/allExaminationComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/all-examination","permalink":"/en/tech-docs/kubernetes/certificates/examination/all-examination","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-examination","title":"5.2.2.5. Verification"},"sidebar":"techDocs","previous":{"title":"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442","permalink":"/en/tech-docs/kubernetes/certificates/service-account/all-service-account"},"next":{"title":"5.2.3.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/k8s-init"}}');var s=n(74848),o=n(28453),a=n(85517),i=n(16085),c=n(9792),l=n(76331);const u={id:"all-examination",title:"5.2.2.5. Verification"},d=void 0,h={},p=[...i.toc,...a.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the verification of the correctness of created certificates and keys, as well as the correspondence between them. This is important for eliminating errors before launching Kubernetes components."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Certificate block verification"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsx)(c.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(c.A,{value:"Kubeadm",children:(0,s.jsx)(a.default,{})})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},85517(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","title":"examinationKubeadmComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,s.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm certs check-expiration
`}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
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
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},16085(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","title":"examinationOpensslComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,s.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
      mkdir -p ${c.M.kubernetesBaseFolderPath.value}/openssl
  `}),"\n",(0,s.jsx)("h4",{children:"Script creation instructions"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Script creation instructions"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
  cat <<'EOF' > ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
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
`})]}),"\n",(0,s.jsx)("h4",{children:"Setting permissions"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
    chmod +x ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,s.jsx)("h4",{children:"Running the script for all certificates/kubeconfigs"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
    ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
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
`})}),"\n",(0,s.jsx)("h4",{children:"Running the script for a single certificate/kubeconfig"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
    ${c.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${c.M.kubernetesBaseFolderPath.value}/pki/ca.crt
  `}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED


  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},59373(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/all-service-account","title":"5.2.2.4. Service Account","description":"In Kubernetes, ServiceAccount is a mechanism that allows applications within the cluster to authenticate when accessing the API server.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/service-account/allServiceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/all-service-account","permalink":"/en/tech-docs/kubernetes/certificates/service-account/all-service-account","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-service-account","title":"5.2.2.4. Service Account"},"sidebar":"techDocs","previous":{"title":"5.2.2.3. Kubeconfigs","permalink":"/en/tech-docs/kubernetes/certificates/components/all-kubeconfigs"},"next":{"title":"5.2.2.5. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430","permalink":"/en/tech-docs/kubernetes/certificates/examination/all-examination"}}');var s=n(74848),o=n(28453),a=n(61866),i=n(9792),c=n(76331);const l={id:"all-service-account",title:"5.2.2.4. Service Account"},u=void 0,d={},h=[...a.toc];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["In Kubernetes, ",(0,s.jsx)(t.code,{children:"ServiceAccount"})," is a mechanism that allows applications within the cluster to authenticate when accessing the API server.\nThe private key specified in ",(0,s.jsx)(t.code,{children:"kube-apiserver"})," and ",(0,s.jsx)(t.code,{children:"kube-controller-manager"})," is used for ",(0,s.jsx)(t.strong,{children:"signing tokens"})," of these accounts. This ensures ",(0,s.jsx)(t.strong,{children:"secure and verifiable"})," interaction between services and provides the ability for ",(0,s.jsx)(t.strong,{children:"granular access control"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section creates or connects the key used by Kubernetes to sign ",(0,s.jsx)(t.code,{children:"ServiceAccount"})," tokens."]}),"\n"]}),"\n",(0,s.jsxs)(c.A,{groupId:"phase",children:[(0,s.jsx)(i.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating ServiceAccount signing key"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(i.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Connecting ServiceAccount signing key"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"join"})," phase ",(0,s.jsx)(t.strong,{children:"does not generate a key"}),", but uses the key obtained through the CA download phase."]}),(0,s.jsx)(t.p,{children:"Make sure you have completed the step:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"})}),"\n"]})]})]})})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},61866(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","title":"serviceAccountComponent","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","permalink":"/en/tech-docs/kubernetes/certificates/service-account/serviceAccountComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(12868),l=n(99767);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){return(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},12868(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","title":"serviceAccountHardWayComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","permalink":"/en/tech-docs/kubernetes/certificates/service-account/serviceAccountHardWayComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(65742);const l={},u=void 0,d={},h=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{language:"bash",children:i.A`
  openssl genpkey \\
    -algorithm RSA \\
    -out ${c.$.kubernetesSA.keyPath} \\
    -pkeyopt rsa_keygen_bits:2048
`}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  openssl rsa \\
    -pubout \\
    -in ${c.$.kubernetesSA.keyPath} \\
    -out ${c.$.kubernetesSA.crtPath}
`})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},99767(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","title":"serviceAccountKubeadmComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/service-account","slug":"/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/service-account/serviceAccountKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm init phase certs sa
`}),"\n",(0,s.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),"\n"]}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
  #### Kube API certificate generation
  [certs] Generating "sa" key and public key
`})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},54084(e,t,n){n.d(t,{Ay:()=>u,RM:()=>c});var r=n(74848),s=n(28453),o=n(44349),a=n(57390),i=n(60513);const c=[];function l(e){const t={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,r.jsx)(t.p,{children:"Please note: during the Join phase, you cannot choose which manifests to generate \u2014 kubeadm creates all of them at once, in full."})}),"\n",(0,r.jsx)("h4",{children:"Manifest generation"}),"\n",(0,r.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare control-plane \\
    --config=${o.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(a.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},39402(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-components-ready","title":"5.2.1.5. Verification","description":"This section describes the process of verifying the readiness of Kubernetes components before cluster initialization or joining new nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allComponentsReadyComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-components-ready","permalink":"/en/tech-docs/kubernetes/components/all-components-ready","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-components-ready","title":"5.2.1.5. Verification"},"sidebar":"techDocs","previous":{"title":"5.2.1.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 SP","permalink":"/en/tech-docs/kubernetes/components/all-static-pods-cp"},"next":{"title":"5.2.2. All certificates","permalink":"/en/tech-docs/kubernetes/certificates/all-certificates"}}');var s=n(74848),o=n(28453),a=n(76331),i=n(9792),c=n(74794),l=n(96806);const u={id:"all-components-ready",title:"5.2.1.5. Verification"},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the process of verifying the readiness of Kubernetes components before cluster initialization or joining new nodes."}),"\n"]}),"\n",(0,s.jsxs)(a.A,{groupId:"phase",children:[(0,s.jsx)(i.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Component readiness verification"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(i.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Component readiness verification"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(l.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},39097(e,t,n){n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>A,default:()=>P,frontMatter:()=>j,metadata:()=>r,toc:()=>$});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-install-cp","title":"5.2.1.2. Software Installation","description":"This section describes the installation process for the core components required for a Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allInstallComponentCP.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-install-cp","permalink":"/en/tech-docs/kubernetes/components/all-install-cp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-install-cp","title":"5.2.1.2. Software Installation"},"sidebar":"techDocs","previous":{"title":"5.2.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/en/tech-docs/kubernetes/setup-environments/os-setup-cp"},"next":{"title":"5.2.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-setup-cp"}}');var s=n(74848),o=n(28453),a=n(88193),i=n(86855),c=n(17698),l=n(46140),u=n(19417),d=n(96569),h=n(81127),p=n(8897),m=n(58041),b=n(94488),g=n(2320),f=n(82121),k=n(6284),x=n(97725),v=n(9792),y=n(76331);const j={id:"all-install-cp",title:"5.2.1.2. Software Installation"},A=void 0,C={},$=[...c.toc,...l.toc,...a.toc,...i.toc,...u.toc,...d.toc,...k.toc,...x.toc,...h.toc,...p.toc,...m.toc,...b.toc,...g.toc,...f.toc];function S(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the installation process for the core components required for a Kubernetes cluster.\nThe installation is performed manually and prepares the environment for subsequent initialization and control plane configuration stages."}),"\n"]}),"\n",(0,s.jsxs)(y.A,{groupId:"component",children:[(0,s.jsx)(v.A,{value:"runc",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of runc"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(c.default,{}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(v.A,{value:"containerd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of containerd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(v.A,{value:"kubelet",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(v.A,{value:"etcd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of etcd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(k.default,{}),(0,s.jsx)(x.default,{})]})}),(0,s.jsx)(v.A,{value:"kubectl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubectl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(h.default,{}),(0,s.jsx)(p.default,{})]})}),(0,s.jsx)(v.A,{value:"crictl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of crictl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(m.default,{}),(0,s.jsx)(b.default,{})]})}),(0,s.jsx)(v.A,{value:"kubeadm",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubeadm"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(g.default,{}),(0,s.jsx)(f.default,{})]})})]})]})}function P(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}},75418(e,t,n){n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>y,default:()=>$,frontMatter:()=>v,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-install-dp","title":"5.3.1.2. Software Installation","description":"This section describes the installation process for the components required on Kubernetes worker nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allInstallComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-install-dp","permalink":"/en/tech-docs/kubernetes/components/all-install-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-install-dp","title":"5.3.1.2. Software Installation"},"sidebar":"techDocs","previous":{"title":"5.3.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/en/tech-docs/kubernetes/setup-environments/os-setup-dp"},"next":{"title":"5.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp"}}');var s=n(74848),o=n(28453),a=n(88193),i=n(86855),c=n(17698),l=n(46140),u=n(19417),d=n(96569),h=n(81127),p=n(8897),m=n(58041),b=n(94488),g=n(2320),f=n(82121),k=n(9792),x=n(76331);const v={id:"all-install-dp",title:"5.3.1.2. Software Installation"},y=void 0,j={},A=[...c.toc,...l.toc,...a.toc,...i.toc,...u.toc,...d.toc,...h.toc,...p.toc,...m.toc,...b.toc,...g.toc,...f.toc];function C(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the installation process for the components required on Kubernetes worker nodes.\nThe installation is performed manually and prepares the environment for subsequent node joining to the cluster."}),"\n"]}),"\n",(0,s.jsxs)(x.A,{groupId:"component",children:[(0,s.jsx)(k.A,{value:"runc",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of runc"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(c.default,{}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(k.A,{value:"containerd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of containerd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(k.A,{value:"kubelet",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(u.default,{}),(0,s.jsx)(d.default,{})]})}),(0,s.jsx)(k.A,{value:"kubectl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubectl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(h.default,{}),(0,s.jsx)(p.default,{})]})}),(0,s.jsx)(k.A,{value:"crictl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of crictl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(m.default,{}),(0,s.jsx)(b.default,{})]})}),(0,s.jsx)(k.A,{value:"kubeadm",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Installation of kubeadm"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(g.default,{}),(0,s.jsx)(f.default,{})]})})]})]})}function $(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},80915(e,t,n){n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>k,default:()=>j,frontMatter:()=>f,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-setup-cp","title":"5.2.1.3. Software Configuration","description":"This section describes the setup and configuration of Kubernetes components that ensure proper cluster operation.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allSetupComponentCP.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-setup-cp","permalink":"/en/tech-docs/kubernetes/components/all-setup-cp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-setup-cp","title":"5.2.1.3. Software Configuration"},"sidebar":"techDocs","previous":{"title":"5.2.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-install-cp"},"next":{"title":"5.2.1.4. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 SP","permalink":"/en/tech-docs/kubernetes/components/all-static-pods-cp"}}');var s=n(74848),o=n(28453),a=n(11952),i=n(46890),c=n(66440),l=n(82796),u=n(74773),d=n(40111),h=n(37033),p=n(85092),m=n(91522),b=n(9792),g=n(76331);const f={id:"all-setup-cp",title:"5.2.1.3. Software Configuration"},k=void 0,x={},v=[...i.toc,...a.toc,...l.toc,...c.toc,...d.toc,...u.toc,...p.toc,...h.toc,...m.toc];function y(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the setup and configuration of Kubernetes components that ensure proper cluster operation."}),"\n"]}),"\n",(0,s.jsxs)(g.A,{groupId:"component",children:[(0,s.jsx)(b.A,{value:"containerd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of containerd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(b.A,{value:"kubelet",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(l.default,{}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(b.A,{value:"crictl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of crictl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)("h4",{children:"Component configuration"}),(0,s.jsx)(d.default,{}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(b.A,{value:"kubeadm",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubeadm"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(p.default,{}),(0,s.jsx)(h.default,{})]})}),(0,s.jsx)(b.A,{value:"Kubernetes Audit",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of Kubernetes Audit"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(m.default,{})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},26026(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>y,frontMatter:()=>g,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/all-setup-dp","title":"5.3.1.3. Software Configuration","description":"This section describes the setup and configuration of components required for Kubernetes worker nodes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allSetupComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-setup-dp","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-setup-dp","title":"5.3.1.3. Software Configuration"},"sidebar":"techDocs","previous":{"title":"5.3.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-install-dp"},"next":{"title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/certificates/authentication-dp"}}');var s=n(74848),o=n(28453),a=n(11952),i=n(46890),c=n(66440),l=n(82796),u=n(74773),d=n(40111),h=n(37033),p=n(26338),m=n(9792),b=n(76331);const g={id:"all-setup-dp",title:"5.3.1.3. Software Configuration"},f=void 0,k={},x=[...i.toc,...a.toc,...l.toc,...c.toc,...d.toc,...u.toc,...p.toc,...h.toc];function v(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the setup and configuration of components required for Kubernetes worker nodes."}),"\n"]}),"\n",(0,s.jsxs)(b.A,{groupId:"component",children:[(0,s.jsx)(m.A,{value:"containerd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of containerd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(m.A,{value:"kubelet",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(l.default,{}),(0,s.jsx)(c.default,{})]})}),(0,s.jsx)(m.A,{value:"crictl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of crictl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)("h4",{children:"Component configuration"}),(0,s.jsx)(d.default,{}),(0,s.jsx)(u.default,{})]})}),(0,s.jsx)(m.A,{value:"kubeadm",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuration of kubeadm"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,s.jsx)(p.default,{}),(0,s.jsx)(h.default,{})]})})]})]})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},69770(e,t,n){n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>m,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPComponent","title":"allStaticPodsCPComponent","description":"This section describes the automatic generation of static pod manifests for Kubernetes control plane components using kubeadm.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);function l(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase certs all \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
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
`})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}var d=n(54084),h=n(9792),p=n(76331);const m={},b=void 0,g={},f=[...d.RM];function k(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section describes the automatic generation of static pod manifests for Kubernetes control plane components using ",(0,s.jsx)(t.code,{children:"kubeadm"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(p.A,{groupId:"phase",children:[(0,s.jsx)(h.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(u,{})]})}),(0,s.jsx)(h.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(d.Ay,{})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},37089(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPInitComponent","title":"allStaticPodsCPInitComponent","description":"This section describes the manual creation of static pod manifests for Kubernetes control plane components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(74923),i=n(5529),c=n(89689),l=n(9792),u=n(76331);const d={},h=void 0,p={},m=[...a.toc,...i.toc,...c.toc];function b(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the manual creation of static pod manifests for Kubernetes control plane components."}),"\n"]}),"\n",(0,s.jsxs)(u.A,{groupId:"component",children:[(0,s.jsx)(l.A,{value:"Kube-API",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube-API setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(l.A,{value:"Kube Controller Manager",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(l.A,{value:"Kube Scheduler",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(c.default,{})]})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},77485(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","title":"allStaticPodsCPJoinComponent","description":"This section describes the manual creation of static pod manifests for Kubernetes control plane components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(85029),i=n(58166),c=n(40917),l=n(9792),u=n(76331);const d={},h=void 0,p={},m=[...a.toc,...i.toc,...c.toc];function b(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the manual creation of static pod manifests for Kubernetes control plane components."}),"\n"]}),"\n",(0,s.jsxs)(u.A,{groupId:"component",children:[(0,s.jsx)(l.A,{value:"Kube-API",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube-API setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(l.A,{value:"Kube Controller Manager",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Controller Manager setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(l.A,{value:"Kube Scheduler",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kube Scheduler setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(c.default,{})]})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},39365(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","title":"allStaticPodsCPPhasesComponent","description":"Static Pods setup","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsCPPhasesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(37089),i=n(77485),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(l.A,{groupId:"phase",children:[(0,s.jsx)(c.A,{value:"init",label:"Init",children:(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(c.A,{value:"join",label:"Join",children:(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},53860(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/allStaticPodsETCDComponent","title":"allStaticPodsETCDComponent","description":"This section describes the manual creation of static pod manifests for ETCD.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/allStaticPodsETCDComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/allStaticPodsETCDComponent","permalink":"/en/tech-docs/kubernetes/components/allStaticPodsETCDComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(2045),i=n(88652),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[...a.toc,...i.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the manual creation of static pod manifests for ETCD."}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"phase",children:[(0,s.jsx)(c.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})}),(0,s.jsx)(c.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Static Pods setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(i.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},74794(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyInitComponent","title":"componentsReadyInitComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/componentsReadyInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyInitComponent","permalink":"/en/tech-docs/kubernetes/components/componentsReadyInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm init phase preflight --dry-run \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If everything is installed correctly, the command will complete without errors, and you will see the following output:"}),"\n"]}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    [preflight] Running pre-flight checks
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,s.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If the process was performed in semi-automatic mode, the acceptable output may look like this:"}),"\n"]}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},96806(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/componentsReadyJoinComponent","title":"componentsReadyJoinComponent","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/componentsReadyJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/componentsReadyJoinComponent","permalink":"/en/tech-docs/kubernetes/components/componentsReadyJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{language:"bash",children:i.A`
  kubeadm join phase preflight --dry-run \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If everything is installed correctly, the command will complete without errors, and you will see the following output:"}),"\n"]}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"If the process was performed in semi-automatic mode, the acceptable output may look like this:"}),"\n"]}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml]: /etc/kubernetes/manifests/kube-apiserver.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml]: /etc/kubernetes/manifests/kube-controller-manager.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml]: /etc/kubernetes/manifests/kube-scheduler.yaml already exists
    [WARNING FileAvailable--etc-kubernetes-manifests-etcd.yaml]: /etc/kubernetes/manifests/etcd.yaml already exists
    [preflight] Running pre-flight checks
    [preflight] Reading configuration from the cluster...
    [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
    [preflight] Running pre-flight checks before initializing the new control plane instance
    [preflight] Would pull the required images (like 'kubeadm config images pull')
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},86855(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkBIN","title":"checkBIN","description":"Installation verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkBIN","permalink":"/en/tech-docs/kubernetes/components/containerd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(36668);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Installation verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11952(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(56772),i=n(6301);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6301(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  tree /etc/containerd/
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  /etc/containerd/
  ├── certs.d
  ├── conf.d
  │   └── cloud.toml
  └── config.toml
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},56772(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","title":"statusSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/checks","slug":"/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/checks/statusSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  systemctl status containerd
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
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

`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},88193(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(87672);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permission setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},36668(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"Executable files","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Executable files"}),"\n",(0,s.jsx)(a.N,{binaryName:"containerd",version:i.M.containerd.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"Containerd successfully updated to",grepCommand:'-E "containerd|ctr"',lsOutput:"-rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd\n-rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim\n-rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr"}),"\n",(0,s.jsx)("h3",{children:"Executable file version"}),"\n",(0,s.jsx)(a.y,{command:"containerd --version",output:"containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},46890(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=(n(7094),n(93306)),i=n(98301);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit start"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(a.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},98301(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/configFiles","title":"configFiles","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,p={},m=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /etc/containerd/
      mkdir -p /etc/containerd/conf.d
      mkdir -p /etc/containerd/certs.d
    `}),(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/config.toml
      version = 2
      imports = ["/etc/containerd/conf.d/*.toml"]
      EOF
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/containerd/conf.d/in-cloud.toml
      version = 2
      [plugins]
        [plugins."io.containerd.grpc.v1.cri"]
          sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
          runtime_type = "io.containerd.runc.v2"
        [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
          SystemdCgroup = true
        [plugins."io.containerd.grpc.v1.cri".registry]
          config_path = "/etc/containerd/certs.d/"
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Base configuration file"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/config.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          imports = ["/etc/containerd/conf.d/*.toml"]
    `}),(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/containerd/conf.d/in-cloud.toml
        owner: root:root
        permissions: '0644'
        content: |
          version = 2
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              sandbox_image = "${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value}"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]
              runtime_type = "io.containerd.runc.v2"
            [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]
              SystemdCgroup = true
            [plugins."io.containerd.grpc.v1.cri".registry]
              config_path = "/etc/containerd/certs.d/"
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},87672(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.containerd.path}"


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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
        mkdir -p /etc/default/containerd
      `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${l.M.containerd.value}"
        REPOSITORY="${c.m.containerd.baseUrl}"
        EOF
      `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${u.value}
        EOF
      `}),(0,s.jsx)("h4",{children:"Permission setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
      `}),(0,s.jsx)("h4",{children:"Starting the download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.containerd.value}"
          REPOSITORY="${c.m.containerd.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.value}
    `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Starting the download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},93306(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
      `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},7094(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","title":"startSystemdUnit","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/startSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
  systemctl enable containerd
  systemctl start containerd
`})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},42201(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/kubeadm","permalink":"/en/tech-docs/kubernetes/components/controllerManager/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
      kubeadm init phase  control-plane controller-manager \\
        --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "kube-controller-manager"
  `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5529(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupInitComponent","title":"setupInitComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/controllerManager/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(27450),l=n(42201);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},58166(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/setupJoinComponent","title":"setupJoinComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","permalink":"/en/tech-docs/kubernetes/components/controllerManager/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(27450),l=n(54084);const u={},d=void 0,h={},p=[...c.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},27450(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/controllerManager/staticPod","title":"staticPod","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/controllerManager/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/controllerManager","slug":"/tech-docs/kubernetes/components/controllerManager/staticPod","permalink":"/en/tech-docs/kubernetes/components/controllerManager/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=(n(65742),n(285)),c=n(68741),l=n(21232),u=n(60513),d=n(57390);const h={},p=void 0,m={},b=[];function g(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
  export CLUSTER_NAME=${a.M.clusterName.value}
`}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(d.A,{language:"bash",children:u.A`
  mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-Controller-Manager"}),(0,s.jsx)("h4",{children:"Manifest generation"}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
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
      # IF YOU NEED TO CONNECT CLOUD-CONTROLLER-MANAGER
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --cloud-provider: "${l.L.cloudProvider.value}"
      # IF YOU NEED TO CONNECT SERVER CERTIFICATES FOR KUBE-CONTROLLER-MANAGER
      # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --tls-cert-file=${l.L.tlsCertFile.value}
      # - --tls-private-key-file=${l.L.tlsPrivateKeyFile.value}
      # Do not specify if value is "" or undefined
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
      # - --tls-cipher-suites=${l.L.tlsCipherSuites.value}
      # - --tls-min-version=${l.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${l.L.tlsSniCertKey.value}
      # - --vmodule=${l.L.vmodule.value}
      # - --volume-host-cidr-denylist=${l.L.volumeHostCidrDenylist.value}
      # - --external-cloud-volume-plugin=${l.L.externalCloudVolumePlugin.value}
      # - --requestheader-allowed-names=${l.L.requestheaderAllowedNames.value}
      image: ${a.M.baseDockerRegistry.value}/kube-controller-manager:${c.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${i.h.kubeControllerManager.portNumber}
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
          port: ${i.h.kubeControllerManager.portNumber}
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
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},94488(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkBIN","title":"checkBIN","description":"Installation verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkBIN","permalink":"/en/tech-docs/kubernetes/components/crictl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Installation verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation verification"}),(0,s.jsx)(a.N,{binaryName:"crictl",version:i.M.crictl.value,installSteps:["Installing crictl..."],successMessage:"crictl successfully updated to",grepCommand:"'crictl$'",lsOutput:"-rwxr-xr-x  1 1001  127  58376628 Apr 18  2024 crictl"}),(0,s.jsx)(a.y,{command:"crictl --version",output:"crictl version v1.30.0"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},74773(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkComponent","permalink":"/en/tech-docs/kubernetes/components/crictl/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(92204);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},92204(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/checks","slug":"/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  ls -la /etc/crictl.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 61 Feb 18 15:18 /etc/crictl.yaml
`})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  crictl info \|
    jq '.status.conditions[] \|
    select(.type=="RuntimeReady") \|
    .status'

`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  true
`})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},58041(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(14256);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permission setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},40111(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/crictl/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(54481);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit setup for the component"}),"\n",(0,s.jsx)(t.li,{children:"Systemd Unit start"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54481(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/configFiles","title":"configFiles","description":"Custom configuration file template","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/crictl/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,p={},m=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/crictl.yaml
      runtime-endpoint: unix://${c.M.criEndpoint.value}
      EOF
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Custom configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - path: /etc/crictl.yaml
        owner: root:root
        permissions: '0644'
        content: |
          runtime-endpoint: unix://${c.M.criEndpoint.value}
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},14256(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/crictl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.crictl.path}"


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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/crictl
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${l.M.crictl.value}"
            REPOSITORY="${c.m.crictl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${u.value}
            EOF
          `}),(0,s.jsx)("h4",{children:"Permission setup"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
          `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${l.M.crictl.value}"
                REPOSITORY="${c.m.crictl.baseUrl}"
          `}),(0,s.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${u.value}
          `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
          `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},91522(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/auditPolicy","title":"auditPolicy","description":"The audit policy defines which requests to the API Server are logged and with what level of detail. The file is loaded at kube-apiserver startup via --audit-policy-file; changes require a restart.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/auditPolicy.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/auditPolicy","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/auditPolicy","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=(n(68741),n(44349)),l=n(51430);const u={},d=void 0,h={},p=[];function m(e){const t={blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The audit policy defines which requests to the API Server are logged and with what level of detail. The file is loaded at kube-apiserver startup via ",(0,s.jsx)(t.code,{children:"--audit-policy-file"}),"; changes require a restart."]}),"\n"]}),"\n",(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating the working directory"}),"\n",(0,s.jsx)(t.li,{children:"Preparing the audit policy"}),"\n"]}),"\n",(0,s.jsx)("h3",{children:"Creating the working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  mkdir -p /var/log/kubernetes/audit
`}),"\n",(0,s.jsx)("h3",{children:"Preparing the audit policy"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
    cat <<EOF > ${c.M.kubernetesAPIAuditPolicyPath.value}
    ${l.k.data.value}
    EOF
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},7228(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/kubeadm","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
      kubeadm init phase  control-plane apiserver \\
        --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
      #### Kube API
      [control-plane] Creating static Pod manifest for "apiserver"
  `})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},74923(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupInitComponent","title":"setupInitComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(15944),l=n(7228);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},85029(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","title":"setupJoinComponent","description":"This section is optional and intended only for cases where this resource needs to be configured separately from the others.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(15944),l=n(54084);const u={},d=void 0,h={},p=[...c.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and intended only for cases where this resource needs to be configured separately from the others."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},15944(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeAPI/staticPod","title":"staticPod","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeAPI/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeAPI","slug":"/tech-docs/kubernetes/components/kubeAPI/staticPod","permalink":"/en/tech-docs/kubernetes/components/kubeAPI/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(68741),c=n(56223),l=n(285),u=n(57390),d=n(60513);const h={},p=void 0,m={},b=[];function g(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
    export MACHINE_LOCAL_ADDRESS=${a.M.virtualMachineLocalAddress.value}
  `}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
  `}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-apiserver"}),(0,s.jsx)("h4",{children:"Manifest generation"}),(0,s.jsx)(u.A,{language:"bash",children:d.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/manifests/kube-apiserver.yaml
  ---
  apiVersion: v1
  kind: Pod
  metadata:
    annotations:
      kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: $\{MACHINE_LOCAL_ADDRESS}:${c.L.securePort.value}
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
      - --aggregator-reject-forwarding-redirect=${c.L.aggregatorRejectForwardingRedirect.value}
      - --allow-privileged=${c.L.allowPrivileged.value}
      - --anonymous-auth=${c.L.anonymousAuth.value}
      - --api-audiences=${c.L.apiAudiences.value}
      - --apiserver-count=${c.L.apiserverCount.value}
      - --audit-log-batch-buffer-size=${c.L.auditLogBatchBufferSize.value}
      - --audit-log-batch-max-size=${c.L.auditLogBatchMaxSize.value}
      - --audit-log-batch-max-wait=${c.L.auditLogBatchMaxWait.value}
      - --audit-log-batch-throttle-burst=${c.L.auditLogBatchThrottleBurst.value}
      - --audit-log-batch-throttle-enable=${c.L.auditLogBatchThrottleEnable.value}
      - --audit-log-batch-throttle-qps=${c.L.auditLogBatchThrottleQps.value}
      - --audit-log-compress=${c.L.auditLogCompress.value}
      - --audit-log-format=${c.L.auditLogFormat.value}
      - --audit-log-maxage=${c.L.auditLogMaxage.value}
      - --audit-log-maxbackup=${c.L.auditLogMaxbackup.value}
      - --audit-log-maxsize=${c.L.auditLogMaxsize.value}
      - --audit-log-mode=${c.L.auditLogMode.value}
      - --audit-log-truncate-enabled=${c.L.auditLogTruncateEnabled.value}
      - --audit-log-truncate-max-batch-size=${c.L.auditLogTruncateMaxBatchSize.value}
      - --audit-log-truncate-max-event-size=${c.L.auditLogTruncateMaxEventSize.value}
      - --audit-log-version=${c.L.auditLogVersion.value}
      - --audit-webhook-batch-buffer-size=${c.L.auditWebhookBatchBufferSize.value}
      - --audit-webhook-batch-initial-backoff=${c.L.auditWebhookBatchInitialBackoff.value}
      - --audit-webhook-batch-max-size=${c.L.auditWebhookBatchMaxSize.value}
      - --audit-webhook-batch-max-wait=${c.L.auditWebhookBatchMaxWait.value}
      - --audit-webhook-batch-throttle-burst=${c.L.auditWebhookBatchThrottleBurst.value}
      - --audit-webhook-batch-throttle-enable=${c.L.auditWebhookBatchThrottleEnable.value}
      - --audit-webhook-batch-throttle-qps=${c.L.auditWebhookBatchThrottleQps.value}
      - --audit-webhook-initial-backoff=${c.L.auditWebhookInitialBackoff.value}
      - --audit-webhook-mode=${c.L.auditWebhookMode.value}
      - --audit-webhook-truncate-enabled=${c.L.auditWebhookTruncateEnabled.value}
      - --audit-webhook-truncate-max-batch-size=${c.L.auditWebhookTruncateMaxBatchSize.value}
      - --audit-webhook-truncate-max-event-size=${c.L.auditWebhookTruncateMaxEventSize.value}
      - --audit-webhook-version=${c.L.auditWebhookVersion.value}
      - --audit-policy-file=${c.L.auditPolicyFile.value}
      - --audit-log-path=${c.L.auditLogPath.value}
      - --authentication-token-webhook-cache-ttl=${c.L.authenticationTokenWebhookCacheTtl.value}
      - --authentication-token-webhook-version=${c.L.authenticationTokenWebhookVersion.value}
      - --authorization-mode=${c.L.authorizationMode.value}
      - --authorization-webhook-cache-authorized-ttl=${c.L.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${c.L.authorizationWebhookCacheUnauthorizedTtl.value}
      - --authorization-webhook-version=${c.L.authorizationWebhookVersion.value}
      - --bind-address=${c.L.bindAddress.value}
      - --cert-dir=${c.L.certDir.value}
      - --client-ca-file=${c.L.clientCaFile.value}
      # -> Enable if managing state via Cloud Controller Manager
      # - --cloud-provider=${c.L.cloudProvider.value}
      - --cloud-provider-gce-l7lb-src-cidrs=${c.L.cloudProviderGceL7lbSrcCidrs.value}
      - --cloud-provider-gce-lb-src-cidrs=${c.L.cloudProviderGceLbSrcCidrs.value}
      - --contention-profiling=${c.L.contentionProfiling.value}
      - --default-not-ready-toleration-seconds=${c.L.defaultNotReadyTolerationSeconds.value}
      - --default-unreachable-toleration-seconds=${c.L.defaultUnreachableTolerationSeconds.value}
      - --default-watch-cache-size=${c.L.defaultWatchCacheSize.value}
      - --delete-collection-workers=${c.L.deleteCollectionWorkers.value}
      - --enable-admission-plugins=${c.L.enableAdmissionPlugins.value}
      - --enable-aggregator-routing=${c.L.enableAggregatorRouting.value}
      - --enable-bootstrap-token-auth=${c.L.enableBootstrapTokenAuth.value}
      - --enable-garbage-collector=${c.L.enableGarbageCollector.value}
      - --enable-logs-handler=${c.L.enableLogsHandler.value}
      - --enable-priority-and-fairness=${c.L.enablePriorityAndFairness.value}
      - --encryption-provider-config-automatic-reload=${c.L.encryptionProviderConfigAutomaticReload.value}
      - --endpoint-reconciler-type=${c.L.endpointReconcilerType.value}
      - --etcd-cafile=${c.L.etcdCafile.value}
      - --etcd-certfile=${c.L.etcdCertfile.value}
      - --etcd-compaction-interval=${c.L.etcdCompactionInterval.value}
      - --etcd-count-metric-poll-period=${c.L.etcdCountMetricPollPeriod.value}
      - --etcd-db-metric-poll-interval=${c.L.etcdDbMetricPollInterval.value}
      - --etcd-healthcheck-timeout=${c.L.etcdHealthcheckTimeout.value}
      - --etcd-keyfile=${c.L.etcdKeyfile.value}
      - --etcd-prefix=${c.L.etcdPrefix.value}
      - --etcd-readycheck-timeout=${c.L.etcdReadycheckTimeout.value}
      - --etcd-servers=${c.L.etcdServers.value}
      - --event-ttl=${c.L.eventTtl.value}
      - --feature-gates=${c.L.featureGates.value}
      - --goaway-chance=${c.L.goawayChance.value}
      - --help=${c.L.help.value}
      - --http2-max-streams-per-connection=${c.L.http2MaxStreamsPerConnection.value}
      - --kubelet-client-certificate=${c.L.kubeletClientCertificate.value}
      - --kubelet-client-key=${c.L.kubeletClientKey.value}
      - --kubelet-port=${c.L.kubeletPort.value}
      - --kubelet-preferred-address-types=${c.L.kubeletPreferredAddressTypes.value}
      - --kubelet-read-only-port=${c.L.kubeletReadOnlyPort.value}
      - --kubelet-timeout=${c.L.kubeletTimeout.value}
      - --kubernetes-service-node-port=${c.L.kubernetesServiceNodePort.value}
      - --lease-reuse-duration-seconds=${c.L.leaseReuseDurationSeconds.value}
      - --livez-grace-period=${c.L.livezGracePeriod.value}
      - --log-flush-frequency=${c.L.logFlushFrequency.value}
      - --logging-format=${c.L.loggingFormat.value}
      - --log-json-info-buffer-size=${c.L.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${c.L.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${c.L.logTextInfoBufferSize.value}
      - --log-text-split-stream=${c.L.logTextSplitStream.value}
      - --max-connection-bytes-per-sec=${c.L.maxConnectionBytesPerSec.value}
      - --max-mutating-requests-inflight=${c.L.maxMutatingRequestsInflight.value}
      - --max-requests-inflight=${c.L.maxRequestsInflight.value}
      - --min-request-timeout=${c.L.minRequestTimeout.value}
      - --permit-address-sharing=${c.L.permitAddressSharing.value}
      - --permit-port-sharing=${c.L.permitPortSharing.value}
      - --profiling=${c.L.profiling.value}
      - --proxy-client-cert-file=${c.L.proxyClientCertFile.value}
      - --proxy-client-key-file=${c.L.proxyClientKeyFile.value}
      - --requestheader-allowed-names=${c.L.requestheaderAllowedNames.value}
      - --requestheader-client-ca-file=${c.L.requestheaderClientCaFile.value}
      - --requestheader-extra-headers-prefix=${c.L.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${c.L.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${c.L.requestheaderUsernameHeaders.value}
      - --request-timeout=${c.L.requestTimeout.value}
      - --runtime-config=${c.L.runtimeConfig.value}
      - --secure-port=${c.L.securePort.value}
      - --service-account-extend-token-expiration=${c.L.serviceAccountExtendTokenExpiration.value}
      - --service-account-issuer=${c.L.serviceAccountIssuer.value}
      - --service-account-key-file=${c.L.serviceAccountKeyFile.value}
      - --service-account-lookup=${c.L.serviceAccountLookup.value}
      - --service-account-max-token-expiration=${c.L.serviceAccountMaxTokenExpiration.value}
      - --service-account-signing-key-file=${c.L.serviceAccountSigningKeyFile.value}
      - --service-cluster-ip-range=${c.L.serviceClusterIpRange.value}
      - --service-node-port-range=${c.L.serviceNodePortRange.value}
      - --shutdown-delay-duration=${c.L.shutdownDelayDuration.value}
      - --shutdown-send-retry-after=${c.L.shutdownSendRetryAfter.value}
      - --shutdown-watch-termination-grace-period=${c.L.shutdownWatchTerminationGracePeriod.value}
      - --storage-backend=${c.L.storageBackend.value}
      - --storage-media-type=${c.L.storageMediaType.value}
      - --tls-cert-file=${c.L.tlsCertFile.value}
      - --tls-private-key-file=${c.L.tlsPrivateKeyFile.value}
      - --v=${c.L.v.value}
      - --version=${c.L.version.value}
      - --watch-cache=${c.L.watchCache.value}
      # IF YOU NEED TO CONNECT CLOUD-CONTROLLER-MANAGER
      # UNCOMMENT THE FOLLOWING
      # ->
      # - --cloud-provider: "${c.L.cloudProvider.value}"
      # Do not specify if value is "" or undefined
      # - --cloud-config=${c.L.cloudConfig.value}
      # - --strict-transport-security-directives=${c.L.strictTransportSecurityDirectives.value}
      # - --disable-admission-plugins=${c.L.disableAdmissionPlugins.value}
      # - --disabled-metrics=${c.L.disabledMetrics.value}
      # - --egress-selector-config-file=${c.L.egressSelectorConfigFile.value}
      # - --encryption-provider-config=${c.L.encryptionProviderConfig.value}
      # - --etcd-servers-overrides=${c.L.etcdServersOverrides.value}
      # - --external-hostname=${c.L.externalHostname.value}
      # - --kubelet-certificate-authority=${c.L.kubeletCertificateAuthority.value}
      # - --oidc-ca-file=${c.L.oidcCaFile.value}
      # - --oidc-client-id=${c.L.oidcClientId.value}
      # - --oidc-groups-claim=${c.L.oidcGroupsClaim.value}
      # - --oidc-groups-prefix=${c.L.oidcGroupsPrefix.value}
      # - --oidc-issuer-url=${c.L.oidcIssuerUrl.value}
      # - --oidc-required-claim=${c.L.oidcRequiredClaim.value}
      # - --oidc-signing-algs=${c.L.oidcSigningAlgs.value}
      # - --oidc-username-claim=${c.L.oidcUsernameClaim.value}
      # - --oidc-username-prefix=${c.L.oidcUsernamePrefix.value}
      # - --peer-advertise-ip=${c.L.peerAdvertiseIp.value}
      # - --peer-advertise-port=${c.L.peerAdvertisePort.value}
      # - --peer-ca-file=${c.L.peerCaFile.value}
      # - --service-account-jwks-uri=${c.L.serviceAccountJwksUri.value}
      # - --show-hidden-metrics-for-version=${c.L.showHiddenMetricsForVersion.value}
      # - --tls-cipher-suites=${c.L.tlsCipherSuites.value}
      # - --tls-min-version=${c.L.tlsMinVersion.value}
      # - --tls-sni-cert-key=${c.L.tlsSniCertKey.value}
      # - --token-auth-file=${c.L.tokenAuthFile.value}
      # - --tracing-config-file=${c.L.tracingConfigFile.value}
      # - --vmodule=${c.L.vmodule.value}
      # - --watch-cache-sizes=${c.L.watchCacheSizes.value}
      # - --authorization-webhook-config-file=${c.L.authorizationWebhookConfigFile.value}
      # - --cors-allowed-origins=${c.L.corsAllowedOrigins.value}
      # - --debug-socket-path=${c.L.debugSocketPath.value}
      # - --authorization-policy-file=${c.L.authorizationPolicyFile.value}
      # - --authorization-config=${c.L.authorizationConfig.value}
      # - --authentication-token-webhook-config-file=${c.L.authenticationTokenWebhookConfigFile.value}
      # - --authentication-config=${c.L.authenticationConfig.value}
      # - --audit-webhook-config-file=${c.L.auditWebhookConfigFile.value}
      # - --allow-metric-labels=${c.L.allowMetricLabels.value}
      # - --allow-metric-labels-manifest=${c.L.allowMetricLabelsManifest.value}
      # - --admission-control=${c.L.admissionControl.value}
      # - --admission-control-config-file=${c.L.admissionControlConfigFile.value}
      # - --advertise-address=${c.L.advertiseAddress.value}
      image: ${a.M.baseDockerRegistry.value}/kube-apiserver:${i.M.kubernetes.value}
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
      - mountPath: /etc/kubernetes/audit-policy.yaml
        name: k8s-audit-policy
        readOnly: true
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
        path: /etc/kubernetes/audit-policy.yaml
        type: File
      name: k8s-audit-policy
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
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},82121(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkBIN","title":"checkBIN","description":"Installation verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkBIN","permalink":"/en/tech-docs/kubernetes/components/kubeadm/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Installation verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation verification"}),(0,s.jsx)(a.N,{binaryName:"kubeadm",version:i.M.kubernetes.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"kubeadm successfully updated to",grepCommand:"'kubeadm$'",lsOutput:"-rwxr-xr-x  1 root root  50253976 Aug 14  2024 kubeadm"}),(0,s.jsx)(a.y,{command:"kubeadm version",output:'kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}'})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},37033(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkComponent","title":"checkComponent","description":"Configuration verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkComponent","permalink":"/en/tech-docs/kubernetes/components/kubeadm/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57017);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},57017(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","title":"statusConfigFiles","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/checks","slug":"/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/kubeadm/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
  ls -al ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  -rw-r--r-- 1 root root 6463 Feb 18 15:20 ${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},35981(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>y,frontMatter:()=>g,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/initConfig","title":"initConfig","description":"Kubeadm configuration for cluster initialization","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/configs/initConfig.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/initConfig","permalink":"/en/tech-docs/kubernetes/components/kubeadm/configs/initConfig","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(95538),l=n(56223),u=n(44349),d=n(68741),h=n(12480),p=n(51908),m=n(9792),b=n(76331);const g={},f=void 0,k={},x=[];function v(e){const t={admonition:"admonition",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Kubeadm configuration for cluster initialization"}),(0,s.jsxs)(b.A,{groupId:"install-type",children:[(0,s.jsxs)(m.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
        export CLUSTER_NAME='${u.M.clusterName.value}'
        export BASE_DOMAIN='${u.M.kubernetesBaseDomain.value}'
        export FULL_HOST_NAME=${u.M.virtualMachineFullName.value}
        export INTERNAL_API=api.${u.M.kubernetesClusterExternalDomain.value}
        export MACHINE_LOCAL_ADDRESS=${u.M.virtualMachineLocalAddress.value}
        export ETCD_INITIAL_CLUSTER="$\{FULL_HOST_NAME}=${c.D.initialAdvertisePeerUrls.value}"
        export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
        export BOOTSTRAP_TOKEN=${u.M.bootstrapToken.value}
      `}),(0,s.jsx)("h4",{children:"Kubeadm configuration file for cluster initialization"}),(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that in this configuration file the ",(0,s.jsx)(t.code,{children:"addons"})," installation phase is skipped."]})}),(0,s.jsx)(i.A,{children:a.A`
        cat <<EOF > ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
        ---
        apiVersion: kubeadm.k8s.io/v1beta3
        kind: InitConfiguration
        skipPhases:
          - addon
        bootstrapTokens:
          - token: "$\{BOOTSTRAP_TOKEN}"
            description: "kubeadm bootstrap token"
            ttl: "24h"
        certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
        nodeRegistration:
          imagePullPolicy: IfNotPresent
          taints: null
          kubeletExtraArgs:
            # -> Enable if managing state via Cloud Controller Manager
            # cloud-provider: external
            config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
            cluster-domain: ${u.M.kubernetesClusterDomain.value}
            cluster-dns: "${u.M.kubernetesDNSAddress.value}"
          # name: '$\{FULL_HOST_NAME}'
          ignorePreflightErrors:
            # > When building the cluster step by step rather than running a single command,
            # > you need to specify exceptions in the ignorePreflightErrors parameter
            # > so that the kubeadm init phase preflight command runs without obstacles.
            # > To do this, the following exceptions are added to nodeRegistration:
            - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
            - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
            - FileAvailable--etc-kubernetes-manifests-etcd.yaml
        ---
        ${h.I.data.value}
        EOF
      `})]}),(0,s.jsx)(m.A,{value:"Cloud-init",children:(0,s.jsx)(i.A,{children:a.A`
        - path: ${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
          owner: root:root
          permissions: '0644'
          content: |
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: InitConfiguration
            skipPhases:
              - addon
            bootstrapTokens:
              - token: "${u.M.bootstrapToken.value}"
                description: "kubeadm bootstrap token"
                ttl: "24h"
            certificateKey: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
            nodeRegistration:
              imagePullPolicy: IfNotPresent
              taints: null
              kubeletExtraArgs:
                cloud-provider: external
                config: "${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
                cluster-domain: cluster.local
                cluster-dns: "${u.M.kubernetesDNSAddress.value}"

              # Uncomment to explicitly specify the node name (recommended when using cloud-init)
              # name: {{ local_hostname }}

              ignorePreflightErrors:
                # > When building the cluster step by step rather than running a single command,
                # > you need to specify exceptions in the ignorePreflightErrors parameter
                # > so that the kubeadm init phase preflight command runs without obstacles.
                # > To do this, the following exceptions are added to nodeRegistration:
                - FileAvailable--etc-kubernetes-manifests-kube-apiserver.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-controller-manager.yaml
                - FileAvailable--etc-kubernetes-manifests-kube-scheduler.yaml
                - FileAvailable--etc-kubernetes-manifests-etcd.yaml
            ---
            apiVersion: kubeadm.k8s.io/v1beta3
            kind: ClusterConfiguration

            clusterName: "${u.M.clusterName.value}"
            # Uncomment and specify VIP Load Balancer instead of {{ local_hostname }} for HA cluster
            controlPlaneEndpoint: {{ local_hostname }}:${l.L.securePort.value}

            imageRepository: "${u.M.baseDockerRegistry.value}"

            networking:
              serviceSubnet: ${u.M.kubernetesServiceCIDR.value}
              dnsDomain: cluster.local
            kubernetesVersion: ${d.M.kubernetes.value}

            dns: {}
            etcd:
              local:
                imageRepository: "${u.M.baseDockerRegistry.value}"
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
                cluster-name: "${u.M.clusterName.value}"
                ${p.Uj.data.value}

            scheduler:
              extraArgs:
                ${p.hZ.data.value}
      `})})]})]})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},36864(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfigCP","title":"joinConfigCP","description":"Kubeadm configuration for joining a master node to the cluster","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/configs/joinConfigCP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfigCP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/configs/joinConfigCP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(56223),c=n(60513),l=n(44349),u=n(285);const d={},h=void 0,p={},m=[];function b(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Kubeadm configuration for joining a master node to the cluster"}),(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(a.A,{language:"bash",children:c.A`
      export MACHINE_LOCAL_ADDRESS="${l.M.virtualMachineLocalAddress.value}"
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
      export BOOTSTRAP_TOKEN=${l.M.bootstrapToken.value}

    `}),(0,s.jsx)("h4",{children:"Kubeadm configuration file for joining a master to the cluster"}),(0,s.jsx)(a.A,{children:c.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    controlPlane:
      localAPIEndpoint:
        advertiseAddress: $\{MACHINE_LOCAL_ADDRESS}
        bindPort: ${u.h.kubeAPIServer.portNumber}
      certificateKey: $\{CERTIFICATE_UPLOAD_KEY}
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${i.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "$\{BOOTSTRAP_TOKEN}"
    kind: JoinConfiguration
    EOF
  `})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},89878(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","title":"joinConfigDP","description":"Kubeadm configuration for joining a worker node to the cluster","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/configs","slug":"/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/configs/joinConfigDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(56223),c=n(60513),l=n(44349);const u={},d=void 0,h={},p=[];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Kubeadm configuration for joining a worker node to the cluster"}),(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(a.A,{language:"bash",children:c.A`
      export CLUSTER_API_ENDPOINT=api.${l.M.clusterName.value}.${l.M.kubernetesBaseDomain.value}
      export BOOTSTRAP_TOKEN=${l.M.bootstrapToken.value}
    `}),(0,s.jsx)("h4",{children:"Kubeadm configuration file for joining a worker to the cluster"}),(0,s.jsx)(a.A,{children:c.A`cat <<EOF > ${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    ---
    apiVersion: kubeadm.k8s.io/v1beta3
    discovery:
      bootstrapToken:
        apiServerEndpoint: $\{CLUSTER_API_ENDPOINT}:${i.L.securePort.value}
        unsafeSkipCAVerification: true
        token: "$\{BOOTSTRAP_TOKEN}"
    kind: JoinConfiguration
    EOF
  `})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2320(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(96336);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permission setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85092(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentCP","title":"lifecycleSettingsComponentCP","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentCP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentCP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentCP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(25192),i=n(26329);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycleDownload",children:"Kubelet Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Creating working directories"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(a.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},26338(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","title":"lifecycleSettingsComponentDP","description":"Component setup steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettingsComponentDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(39484),i=n(26329);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component setup steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/lifecycleDownload",children:"Kubelet Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Creating working directories"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)("h3",{children:"Component configuration"}),"\n",(0,s.jsx)(a.default,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},25192(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/configFilesCP","title":"configFilesCP","description":"The kubeadm configuration describes InitConfiguration parameters (bootstrap tokens, nodeRegistration, skipPhases) and ClusterConfiguration (controlPlaneEndpoint, network subnets, control plane component arguments). The init tab is used when creating the first node, join \u2014 when adding subsequent ones.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/configFilesCP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/configFilesCP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/configFilesCP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(36864),i=n(35981),c=n(98982),l=n(28415),u=n(9792),d=n(76331);const h={},p=void 0,m={},b=[...c.toc,...i.toc,...l.toc,...a.toc];function g(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"kubeadm"})," configuration describes ",(0,s.jsx)(t.code,{children:"InitConfiguration"})," parameters (bootstrap tokens, nodeRegistration, skipPhases) and ",(0,s.jsx)(t.code,{children:"ClusterConfiguration"})," (controlPlaneEndpoint, network subnets, control plane component arguments). The ",(0,s.jsx)(t.code,{children:"init"})," tab is used when creating the first node, ",(0,s.jsx)(t.code,{children:"join"})," \u2014 when adding subsequent ones."]}),"\n"]}),"\n",(0,s.jsxs)(d.A,{groupId:"phase",children:[(0,s.jsx)(u.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubeadm Configuration"}),(0,s.jsx)(c.default,{}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(u.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubeadm Configuration"}),(0,s.jsx)(l.default,{}),(0,s.jsx)(a.default,{})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},39484(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","title":"configFilesDP","description":"The kubeadm configuration for a worker node describes JoinConfiguration parameters (bootstrap token, apiServerEndpoint). It is used when joining a worker to an existing cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/configFilesDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(89878);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"kubeadm"})," configuration for a worker node describes ",(0,s.jsx)(t.code,{children:"JoinConfiguration"})," parameters (bootstrap token, apiServerEndpoint). It is used when joining a worker to an existing cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubeadm Configuration"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},26329(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
  mkdir -p /var/run/kubeadm/
`})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},96336(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubeadm.path}"


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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubeadm.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${u.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"Permission setup"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubeadm.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.value}
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},8897(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checkBIN","title":"checkBIN","description":"Installation verification","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/checkBIN","permalink":"/en/tech-docs/kubernetes/components/kubectl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(90084);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Installation verification"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation verification"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4588(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubectl.path}"


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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubectl
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubectl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${u.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"Permission setup"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubectl.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.value}
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},81127(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(4588);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permission setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},90084(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"Executable files","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","permalink":"/en/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Executable files"}),"\n",(0,s.jsx)(a.N,{binaryName:"kubectl",version:i.M.kubernetes.value,installSteps:["Installing kubectl..."],successMessage:"kubectl successfully updated to",grepCommand:"'kubectl$'",lsOutput:"-rwxr-xr-x  1 root root  51454104 Aug 14  2024 kubectl"}),"\n",(0,s.jsx)("h3",{children:"Executable file version"}),"\n",(0,s.jsx)(a.y,{command:"kubectl version",output:"Client Version: v1.30.4\nKustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},95175(e,t,n){n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>b,metadata:()=>r,toc:()=>k});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/all-kubelet-start","title":"5.2.3.3. Kubelet Start","description":"This section covers the manual startup of Kubelet with systemd unit configuration. It describes the creation of a basic kubelet configuration file, setting up environment variables for the kubelet.service, and starting the service itself.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/allServiceStartComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubelet-start","title":"5.2.3.3. Kubelet Start"},"sidebar":"techDocs","previous":{"title":"5.2.3.2. \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435","permalink":"/en/tech-docs/kubernetes/k8s-join"},"next":{"title":"5.2.4.1. \u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u043a\u0430","permalink":"/en/tech-docs/kubernetes/additional-setup/marking/all-marking"}}');var s=n(74848),o=n(28453),a=n(60726),i=n(25202),c=n(4687),l=n(25567),u=n(9792),d=n(76331),h=n(60513),p=n(57390),m=n(44349);const b={id:"all-kubelet-start",title:"5.2.3.3. Kubelet Start"},g=void 0,f={},k=[...l.toc,...c.toc,...a.toc,...l.toc,...c.toc,...i.toc];function x(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the manual startup of Kubelet with systemd unit configuration. It describes the creation of a basic kubelet configuration file, setting up environment variables for the kubelet.service, and starting the service itself."}),"\n"]}),"\n",(0,s.jsxs)(d.A,{groupId:"phase",children:[(0,s.jsx)(u.A,{value:"init",label:"Init",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"HardWay",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This configuration file is required for ",(0,s.jsx)(t.code,{children:"Kubelet"})," to start."]}),"\n"]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet default config"}),(0,s.jsx)(l.default,{})]}),(0,s.jsx)(c.default,{})]}),(0,s.jsx)(u.A,{value:"Kubeadm",children:(0,s.jsx)(a.default,{})})]})]})}),(0,s.jsx)(u.A,{value:"join",label:"Join",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"HardWay",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This configuration file is required for ",(0,s.jsx)(t.code,{children:"Kubelet"})," to start."]}),"\n"]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet default config"}),(0,s.jsx)(l.default,{})]}),(0,s.jsx)(p.A,{language:"bash",children:h.A`
            export BOOTSTRAP_TOKEN=${m.M.bootstrapToken.value}
          `}),(0,s.jsx)(p.A,{language:"bash",children:h.A`
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
                token: $\{BOOTSTRAP_TOKEN}
            EOF
          `}),(0,s.jsx)(c.default,{})]}),(0,s.jsx)(u.A,{value:"Kubeadm",children:(0,s.jsx)(i.default,{})})]})]})})]})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},61008(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","title":"5.3.3. Kubelet Start","description":"This section describes connecting a worker node to a Kubernetes cluster and starting Kubelet.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/allServiceStartComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-kubelet-start-dp","title":"5.3.3. Kubelet Start"},"sidebar":"techDocs","previous":{"title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/certificates/authentication-dp"}}');var s=n(74848),o=n(28453),a=n(25567),i=n(4687),c=n(9792),l=n(76331),u=n(60513),d=n(57390),h=n(44349);const p={id:"all-kubelet-start-dp",title:"5.3.3. Kubelet Start"},m=void 0,b={},g=[...a.toc,...i.toc];function f(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section describes connecting a worker node to a Kubernetes cluster and starting Kubelet.\nFor manual installation (Hard Way), you need to create a bootstrap kubeconfig with an authentication token,\na base kubelet configuration file, and start the systemd service.\nWhen using kubeadm, simply run the ",(0,s.jsx)(t.code,{children:"kubeadm join"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Start/Configure kubelet"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"HardWay",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This configuration file is required to start ",(0,s.jsx)(t.code,{children:"Kubelet"}),"."]}),"\n"]}),(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet default config"}),(0,s.jsx)(a.default,{})]}),(0,s.jsxs)(t.admonition,{title:"Prerequisites",type:"warning",children:[(0,s.jsxs)(t.p,{children:["Before starting kubelet, complete the steps in ",(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/authentication-dp",children:"5.3.2. Authentication"}),":"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Fetch the CA certificate (",(0,s.jsx)(t.code,{children:"ca.crt"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Create ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," (or generate certificates manually)"]}),"\n"]})]}),(0,s.jsx)(i.default,{})]}),(0,s.jsxs)(c.A,{value:"Kubeadm",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This command connects a worker node to the Kubernetes cluster,\nincluding starting kubelet, TLS Bootstrap, and node registration."}),"\n"]}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"Software Config (DP)"}),"."]}),"\n"]})]}),(0,s.jsx)(d.A,{language:"bash",children:u.A`
        kubeadm join \\
          --config=${h.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
      `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(d.A,{language:"bash",children:u.A`
  [preflight] Running pre-flight checks
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 1.001250916s
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap

  This node has joined the cluster:
  * Certificate signing request was sent to apiserver and approval was received.
  * The Kubelet was informed of the new secure connection details.

  Run 'kubectl get nodes' on the control-plane to see this node join the cluster.
`})})]})]})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},96569(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkBIN","title":"checkBIN","description":"Installation check","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkBIN","permalink":"/en/tech-docs/kubernetes/components/kubelet/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Installation check"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation check"}),(0,s.jsx)(a.N,{binaryName:"kubelet",version:i.M.kubernetes.value,installSteps:["Installing kubelet..."],successMessage:"kubelet successfully updated to",grepCommand:"'kubelet$'",lsOutput:"-rwxr-xr-x  1 root root 100125080 Aug 14  2024 kubelet"}),(0,s.jsx)(a.y,{command:"kubelet --version",output:"Kubernetes v1.30.4"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},66440(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkComponent","title":"checkComponent","description":"Configuration check","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checkComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/checkComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(39225),i=n(74989);const c={},l=void 0,u={},d=[...i.toc,...a.toc];function h(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Configuration check"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Configuration check"}),(0,s.jsx)(i.default,{}),(0,s.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},74989(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","title":"statusConfigFiles","description":"Note that when creating a cluster with _Kubeadm_ without running kubeadm init or kubeadm join, the Kubelet configuration file (/var/lib/kubelet/config.yaml) will not be created.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusConfigFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"Kubeadm"})})," without running ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the Kubelet configuration file (",(0,s.jsx)(t.code,{children:"/var/lib/kubelet/config.yaml"}),") will not be created."]})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ls -la ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
  `}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ls -la /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `}),"\n",(0,s.jsxs)(t.admonition,{title:"Command output",type:"note",children:[(0,s.jsx)(i.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 1721 Feb 19 18:57 /var/lib/kubelet/config.yaml
  `}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      -rw-r--r-- 1 root root 903 Feb 19 22:10 /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
  `})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},39225(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","title":"statusSystemdUnitEnabled","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitEnabled","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
      ○ kubelet.service - kubelet: The Kubernetes Node Agent
          Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                  └─10-kubeadm.conf
          Active: inactive (dead)
          Docs: https://kubernetes.io/docs/
  `})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},73397(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"Note that when creating a cluster with Kubeadm without running kubeadm init or kubeadm join, the Systemd Unit will be added to autostart but will be disabled.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/en/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["Note that when creating a cluster with ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Kubeadm"})})," without running ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", the Systemd Unit will be added to autostart but will be disabled."]})}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
  `})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},60726(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","title":"systemdUnitStartInit","description":"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","permalink":"/en/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"Start kubelet"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-start \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Starting the kubelet
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},25202(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","title":"systemdUnitStartJoin","description":"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","permalink":"/en/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartJoin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349);const l={},u=void 0,d={},h=[];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This command starts the Kubelet service as part of a dedicated Kubeadm utility phase."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"Start kubelet"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm join phase kubelet-start \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 502.252318ms
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19417(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(86426);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permissions setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},82796(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","title":"lifecycleSettingsComponent","description":"Component configuration steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleSettingsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(96493),i=n(30221);const c={},l=void 0,u={},d=[...a.toc,...i.toc];function h(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component configuration steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(t.li,{children:"Add Systemd Unit to autostart"}),"\n",(0,s.jsx)(t.li,{children:"Custom component configuration"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/containerd/lifecycleDownload",children:"Containerd Install"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/runc/lifecycleDownload",children:"Runc Install"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h3",{children:"Component Systemd Unit configuration"}),"\n",(0,s.jsx)(a.default,{}),"\n",(0,s.jsx)("h3",{children:"Custom component configuration"}),"\n",(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubelet config"}),(0,s.jsx)(i.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},30221(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFiles","title":"configFiles","description":"Custom kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFiles.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFiles","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(26225),u=n(9792),d=n(76331);const h={},p=void 0,m={},b=[];function g(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(u.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
      ---
      ${l.h.data.value}
      EOF
    `})]}),(0,s.jsxs)(u.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Custom kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          ${l.h.data.value}
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},25567(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"Basic kubelet configuration file","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331);const d={},h=void 0,p={},m=[];function b(e){return(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Basic kubelet configuration file"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - path: ${c.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b()}},28778(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},86426(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${c.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${c.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.kubelet.path}"


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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/kubelet
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${l.M.kubernetes.value}"
            REPOSITORY="${c.m.kubelet.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${u.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"Permissions setup"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${l.M.kubernetes.value}"
              REPOSITORY="${c.m.kubelet.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"Download instructions/Permissions setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.value}
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},96493(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"The dropin configuration 10-kubeadm.conf separates parameters into three levels: bootstrap-kubeconfig is used during initial node registration in the cluster (before obtaining a permanent kubelet.conf), kubeadm-flags.env contains flags that kubeadm init / kubeadm join generate dynamically during initialization, and extra-args.env allows specifying additional arguments (e.g., --cloud-provider=external when using Cloud Controller Manager).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331),d=n(28778),h=n(58700);const p={},m=void 0,b={},g=[...d.toc];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["The dropin configuration ",(0,s.jsx)(t.code,{children:"10-kubeadm.conf"})," separates parameters into three levels: ",(0,s.jsx)(t.code,{children:"bootstrap-kubeconfig"})," is used during initial node registration in the cluster (before obtaining a permanent ",(0,s.jsx)(t.code,{children:"kubelet.conf"}),"), ",(0,s.jsx)(t.code,{children:"kubeadm-flags.env"})," contains flags that ",(0,s.jsx)(t.code,{children:"kubeadm init"})," / ",(0,s.jsx)(t.code,{children:"kubeadm join"})," generate dynamically during initialization, and ",(0,s.jsx)(t.code,{children:"extra-args.env"})," allows specifying additional arguments (e.g., ",(0,s.jsx)(t.code,{children:"--cloud-provider=external"})," when using Cloud Controller Manager)."]}),"\n"]}),"\n",(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsxs)(l.A,{value:"Bash",children:[(0,s.jsx)(d.default,{}),(0,s.jsx)("h4",{children:"Systemd Unit"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Config"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,s.jsxs)(u.A,{groupId:"ccm",children:[(0,s.jsxs)(l.A,{value:"Default",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,s.jsxs)(l.A,{value:"Cloud Controller Manager",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable kubelet
    `})]}),(0,s.jsxs)(l.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Systemd Unit ENV"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${c.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${c.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${c.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Download"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,s.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,s.jsxs)(t.admonition,{title:"Warning",type:"info",children:[(0,s.jsxs)(t.p,{children:["This configuration block is applicable ",(0,s.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,s.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,s.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
  # write_files:
  - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,s.jsx)("h3",{children:"Add Systemd Unit to autostart"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},4687(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnitStart","title":"systemdUnitStart","description":"Environment variables","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnitStart","permalink":"/en/tech-docs/kubernetes/components/kubelet/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(44349),l=n(9792),u=n(76331),d=n(73397);const h={},p=void 0,m={},b=[...d.toc];function g(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsxs)(t.p,{children:["This configuration block is applicable ",(0,s.jsx)(t.strong,{children:"only"})," when installing Kubernetes manually (using the ",(0,s.jsx)(t.em,{children:'"Kubernetes the Hard Way"'})," method). When using the ",(0,s.jsx)(t.strong,{children:"kubeadm"})," utility, the configuration file will be created automatically based on the specification provided in the ",(0,s.jsx)(t.code,{children:"kubeadm-config"})," file."]}),(0,s.jsxs)(u.A,{groupId:"install-type",children:[(0,s.jsx)(l.A,{value:"Bash",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
        cat <<EOF > ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${c.M.kubernetesClusterDomain.value} --cluster-dns=${c.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,s.jsx)(l.A,{value:"Cloud-init",children:(0,s.jsx)(i.A,{language:"bash",children:a.A`
        - path: ${c.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${c.M.criEndpoint.value} --pod-infra-container-image=${c.M.baseDockerRegistry.value}/${c.M.pausedImage.value} --config=${c.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${c.M.kubernetesClusterDomain.value} --cluster-dns=${c.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This command starts the Kubelet service, which is responsible for deploying all containers based on Static Pods manifests."}),"\n"]}),"\n",(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl start kubelet
  `}),"\n",(0,s.jsx)("h3",{children:"Systemd Unit Status"}),"\n",(0,s.jsxs)(n,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Systemd unit readiness check"}),(0,s.jsx)(d.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},46140(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checkBIN","title":"checkBIN","description":"Installation check","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/runc/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/checkBIN","permalink":"/en/tech-docs/kubernetes/components/runc/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(41284);const i={},c=void 0,l={},u=[...a.toc];function d(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Installation check"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Installation check"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},17255(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(60513),i=n(57390),c=n(58700),l=n(68741);const u={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${l.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${c.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${c.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${c.m.runc.path}"

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
    `};var d=n(9792),h=n(76331);const p={},m=void 0,b={},g=[];function f(e){return(0,s.jsxs)(h.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/runc
    `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${l.M.runc.value}"
      REPOSITORY="${c.m.runc.baseUrl}"
      EOF
    `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${u.value}
      EOF
    `}),(0,s.jsx)("h4",{children:"Permissions setup"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${l.M.runc.value}"
          REPOSITORY="${c.m.runc.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"Download instructions/Permissions setup"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.value}
    `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(i.A,{language:"yaml",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(i.A,{language:"bash",children:a.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f()}},17698(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(17255);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permissions setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},41284(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"Executable files","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","permalink":"/en/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(94949),i=n(68741);const c={},l=void 0,u={},d=[];function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Executable files"}),"\n",(0,s.jsx)(a.N,{binaryName:"runc",version:i.M.runc.value,installSteps:["Installing runc..."],successMessage:"runc successfully updated to",grepCommand:"'runc$'",lsOutput:"-rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc"}),"\n",(0,s.jsx)("h3",{children:"Executable file version"}),"\n",(0,s.jsx)(a.y,{command:"runc --version",output:"runc version 1.1.12\ncommit: v1.1.12-0-g51d5e946\nspec: 1.0.2-dev\ngo: go1.20.13\nlibseccomp: 2.5.4"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h()}},56879(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/kubeadm","title":"kubeadm","description":"Manifest generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/kubeadm","permalink":"/en/tech-docs/kubernetes/components/scheduler/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(57390),c=n(60513);const l={},u=void 0,d={},h=[];function p(e){const t={admonition:"admonition",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm init phase  control-plane scheduler \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  #### Kube API
  [control-plane] Creating static Pod manifest for "kube-scheduler"
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},89689(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupInitComponent","title":"setupInitComponent","description":"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/setupInitComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupInitComponent","permalink":"/en/tech-docs/kubernetes/components/scheduler/setupInitComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(33271),l=n(56879);const u={},d=void 0,h={},p=[...c.toc,...l.toc];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},40917(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/setupJoinComponent","title":"setupJoinComponent","description":"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/setupJoinComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/setupJoinComponent","permalink":"/en/tech-docs/kubernetes/components/scheduler/setupJoinComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(33271),l=n(54084);const u={},d=void 0,h={},p=[...c.toc,...l.RM];function m(e){const t={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(t.p,{children:"This section is optional and is intended only for cases where this resource needs to be configured separately from the rest."})}),"\n",(0,s.jsxs)(i.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(c.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.Ay,{})})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},33271(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/scheduler/staticPod","title":"staticPod","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/scheduler/staticPod.mdx","sourceDirName":"tech-docs/kubernetes/components/scheduler","slug":"/tech-docs/kubernetes/components/scheduler/staticPod","permalink":"/en/tech-docs/kubernetes/components/scheduler/staticPod","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(285),c=n(68741),l=n(57390),u=n(60513),d=n(21502);const h={},p=void 0,m={},b=[];function g(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:u.A`
  mkdir -p ${a.M.kubernetesBaseFolderPath.value}/manifests
`}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Static Pod Kube-Scheduler"}),(0,s.jsx)("h4",{children:"Manifest generation"}),(0,s.jsx)(l.A,{language:"bash",children:u.A`
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
      - --authentication-kubeconfig=${d.w.authenticationKubeconfig.value}
      - --authentication-skip-lookup=${d.w.authenticationSkipLookup.value}
      - --authentication-token-webhook-cache-ttl=${d.w.authenticationTokenWebhookCacheTtl.value}
      - --authentication-tolerate-lookup-failure=${d.w.authenticationTolerateLookupFailure.value}
      - --authorization-always-allow-paths=${d.w.authorizationAlwaysAllowPaths.value}
      - --authorization-kubeconfig=${d.w.authorizationKubeconfig.value}
      - --authorization-webhook-cache-authorized-ttl=${d.w.authorizationWebhookCacheAuthorizedTtl.value}
      - --authorization-webhook-cache-unauthorized-ttl=${d.w.authorizationWebhookCacheUnauthorizedTtl.value}
      - --bind-address=${d.w.bindAddress.value}
      - --client-ca-file=${d.w.clientCaFile.value}
      - --contention-profiling=${d.w.contentionProfiling.value}
      - --help=${d.w.help.value}
      - --http2-max-streams-per-connection=${d.w.http2MaxStreamsPerConnection.value}
      - --kube-api-burst=${d.w.kubeApiBurst.value}
      - --kube-api-content-type=${d.w.kubeApiContentType.value}
      - --kube-api-qps=${d.w.kubeApiQps.value}
      - --kubeconfig=${d.w.kubeconfig.value}
      - --leader-elect=${d.w.leaderElect.value}
      - --leader-elect-lease-duration=${d.w.leaderElectLeaseDuration.value}
      - --leader-elect-renew-deadline=${d.w.leaderElectRenewDeadline.value}
      - --leader-elect-resource-lock=${d.w.leaderElectResourceLock.value}
      - --leader-elect-resource-name=${d.w.leaderElectResourceName.value}
      - --leader-elect-resource-namespace=${d.w.leaderElectResourceNamespace.value}
      - --leader-elect-retry-period=${d.w.leaderElectRetryPeriod.value}
      - --log-flush-frequency=${d.w.logFlushFrequency.value}
      - --log-json-info-buffer-size=${d.w.logJsonInfoBufferSize.value}
      - --log-json-split-stream=${d.w.logJsonSplitStream.value}
      - --log-text-info-buffer-size=${d.w.logTextInfoBufferSize.value}
      - --log-text-split-stream=${d.w.logTextSplitStream.value}
      - --logging-format=${d.w.loggingFormat.value}
      - --permit-address-sharing=${d.w.permitAddressSharing.value}
      - --permit-port-sharing=${d.w.permitPortSharing.value}
      - --pod-max-in-unschedulable-pods-duration=${d.w.podMaxInUnschedulablePodsDuration.value}
      - --profiling=${d.w.profiling.value}
      - --requestheader-extra-headers-prefix=${d.w.requestheaderExtraHeadersPrefix.value}
      - --requestheader-group-headers=${d.w.requestheaderGroupHeaders.value}
      - --requestheader-username-headers=${d.w.requestheaderUsernameHeaders.value}
      - --secure-port=${d.w.securePort.value}
      - --v=${d.w.v.value}
      - --version=${d.w.version.value}
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - --tls-cert-file=${d.w.tlsCertFile.value}
    # - --tls-private-key-file=${d.w.tlsPrivateKeyFile.value}
    # <-
    # - --allow-metric-labels=${d.w.allowMetricLabels.value}
    # - --allow-metric-labels-manifest=${d.w.allowMetricLabelsManifest.value}
    # - --cert-dir=${d.w.certDir.value}
    # - --config=${d.w.config.value}
    # - --disabled-metrics=${d.w.disabledMetrics.value}
    # - --feature-gates=${d.w.featureGates.value}
    # - --master=${d.w.master.value}
    # - --requestheader-allowed-names=${d.w.requestheaderAllowedNames.value}
    # - --requestheader-client-ca-file=${d.w.requestheaderClientCaFile.value}
    # - --show-hidden-metrics-for-version=${d.w.showHiddenMetricsForVersion.value}
    # - --tls-cipher-suites=${d.w.tlsCipherSuites.value}
    # - --tls-min-version=${d.w.tlsMinVersion.value}
    # - --tls-sni-cert-key=${d.w.tlsSniCertKey.value}
    # - --vmodule=${d.w.vmodule.value}
    # - --write-config-to=${d.w.writeConfigTo.value}
      image: ${a.M.baseDockerRegistry.value}/kube-scheduler:${c.M.kubernetes.value}
      imagePullPolicy: IfNotPresent
      livenessProbe:
        failureThreshold: 8
        httpGet:
          path: /healthz
          port: ${i.h.kubeScheduler.portNumber}
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
          port: ${i.h.kubeScheduler.portNumber}
          scheme: HTTPS
        initialDelaySeconds: 10
        periodSeconds: 10
        timeoutSeconds: 15
      volumeMounts:
      - mountPath: ${a.M.kubernetesBaseFolderPath.value}/scheduler.conf
        name: kubeconfig
        readOnly: true
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - mountPath: ${d.w.tlsCertFile.value}
    #   name: kube-scheduler-crt
    #   readOnly: true
    # - mountPath: ${d.w.tlsPrivateKeyFile.value}
    #   name: kube-scheduler-key
    #   readOnly: true
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
    # IF YOU NEED TO ATTACH SERVER CERTIFICATES FOR KUBE-SCHEDULER
    # NOTE THAT KUBEADM DOES NOT CREATE THESE CERTIFICATES
    # UNCOMMENT THE FOLLOWING
    # ->
    # - hostPath:
    #     path: ${d.w.tlsCertFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-crt
    # - hostPath:
    #     path: ${d.w.tlsPrivateKeyFile.value}
    #     type: FileOrCreate
    #   name: kube-scheduler-key
  status: {}
  EOF
`})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},98781(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/allMasterTabs","title":"allMasterTabs","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/allMasterTabs.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/allMasterTabs","permalink":"/en/tech-docs/kubernetes/setup-environments/allMasterTabs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(60513),l=n(57390);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"master-1",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-1
      `})}),(0,s.jsx)(a.A,{value:"master-2",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(a.A,{value:"master-3",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},92100(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentCP","title":"allBaseOSSetupComponentCP","description":"This section covers the basic preparation of Kubernetes nodes before installing components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentCP.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentCP","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentCP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(204);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the basic preparation of Kubernetes nodes before installing components.\nIt describes setting up environment variables, changing the hostname, and installing required system utilities. These steps are mandatory for the correct operation of kubelet and other control plane components."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Basic node setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},73641(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentDP","title":"allBaseOSSetupComponentDP","description":"This section covers the basic preparation of Kubernetes worker nodes before installing components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentDP","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/allBaseOSSetupComponentDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57063);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers the basic preparation of Kubernetes worker nodes before installing components.\nIt describes setting up environment variables, changing the hostname, and installing required system utilities. These steps are mandatory for the correct operation of kubelet on worker nodes."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Basic node setup"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},204(e,t,n){n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>h,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentCP","title":"baseOSSetupComponentCP","description":"Basic node settings","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentCP.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentCP","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentCP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(98781),c=n(9792),l=n(76331),u=n(57390),d=n(60513);const h={},p=void 0,m={},b=[...i.toc];function g(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Basic node settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Node environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Changing the node name."}),"\n",(0,s.jsx)(t.li,{children:"Installing dependencies."}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"Node environment variables"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
  export CLUSTER_NAME="${a.M.clusterName.value}"
  export BASE_DOMAIN="${a.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${a.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${a.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)("h4",{children:"Changing the node name"}),"\n",(0,s.jsx)(u.A,{language:"bash",children:d.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,s.jsx)("h4",{children:"Installing dependencies"}),"\n",(0,s.jsxs)(l.A,{groupId:"install-pkg",children:[(0,s.jsx)(c.A,{value:"apt",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,s.jsx)(c.A,{value:"yum",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,s.jsx)(c.A,{value:"dnf",children:(0,s.jsx)(u.A,{language:"bash",children:d.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},57063(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","title":"baseOSSetupComponentDP","description":"Basic node settings","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/base-os","slug":"/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","permalink":"/en/tech-docs/kubernetes/setup-environments/base-os/baseOSSetupComponentDP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(44349),i=n(9792),c=n(76331),l=n(57390),u=n(60513);const d={},h=void 0,p={},m=[];function b(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Basic node settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Node environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Changing the node name."}),"\n",(0,s.jsx)(t.li,{children:"Installing dependencies."}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"Node environment variables"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:u.A`
  export HOST_NAME=worker-1
  export CLUSTER_NAME="${a.M.clusterName.value}"
  export BASE_DOMAIN="${a.M.kubernetesBaseDomain.value}"
  export CLUSTER_DOMAIN="${a.M.kubernetesClusterDomain.value}"
  export FULL_HOST_NAME="${a.M.virtualMachineFullName.value}"
`}),"\n",(0,s.jsx)("h4",{children:"Changing the node name"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:u.A`
  hostnamectl set-hostname $\{FULL_HOST_NAME}
`}),"\n",(0,s.jsx)("h4",{children:"Installing dependencies"}),"\n",(0,s.jsxs)(c.A,{groupId:"install-pkg",children:[(0,s.jsx)(i.A,{value:"apt",children:(0,s.jsx)(l.A,{language:"bash",children:u.A`
        sudo apt update
        sudo apt install -y conntrack socat jq tree
      `})}),(0,s.jsx)(i.A,{value:"yum",children:(0,s.jsx)(l.A,{language:"bash",children:u.A`
        sudo yum update
        sudo yum install -y conntrack-tools socat jq tree
      `})}),(0,s.jsx)(i.A,{value:"dnf",children:(0,s.jsx)(l.A,{language:"bash",children:u.A`
        sudo dnf update
        sudo dnf install -y conntrack-tools socat jq tree
      `})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},98982(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/initMaster","title":"initMaster","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/initMaster.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/initMaster","permalink":"/en/tech-docs/kubernetes/setup-environments/initMaster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(60513),l=n(57390);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsx)(i.A,{children:(0,s.jsx)(a.A,{value:"master-1",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-1
      `})})})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},95512(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","title":"allModprobeComponent","description":"This section covers loading kernel modules required for the correct operation of Kubernetes.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/modprobe/allModprobeComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(12817);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers loading kernel modules required for the correct operation of Kubernetes.\nThe setup includes modprobe configuration and activation of the overlay and br_netfilter modules, which provide support for the container filesystem and network functions. These steps are mandatory for the functioning of network policies, iptables, and container runtimes."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Loading kernel modules"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},12817(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","title":"coreModulesComponent","description":"Component installation steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/modprobe","slug":"/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/modprobe/coreModulesComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[{value:"Component installation steps:",id:"component-installation-steps",level:4},{value:"Modprobe configuration",id:"modprobe-configuration",level:4},{value:"Loading modules",id:"loading-modules",level:4},{value:"Modprobe configuration",id:"modprobe-configuration-1",level:4},{value:"Loading modules",id:"loading-modules-1",level:4}];function m(e){const t={admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"component-installation-steps",children:"Component installation steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Modprobe configuration."}),"\n",(0,s.jsx)(t.li,{children:"Loading modules."}),"\n"]}),"\n",(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"modprobe-configuration",children:"Modprobe configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    cat <<EOF > /etc/modules-load.d/k8s.conf
    overlay
    br_netfilter
    EOF
  `}),(0,s.jsx)(t.h4,{id:"loading-modules",children:"Loading modules"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    sudo -i
    modprobe overlay
    modprobe br_netfilter
  `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"modprobe-configuration-1",children:"Modprobe configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    # write_files:
    - path: /etc/modules-load.d/k8s.conf
      owner: root:root
      permissions: '0644'
      content: |
        overlay
        br_netfilter
  `}),(0,s.jsx)(t.h4,{id:"loading-modules-1",children:"Loading modules"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
    # runcmd:
    - modprobe overlay
    - modprobe br_netfilter
  `})]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"The overlay module is used by the OverlayFS filesystem to manage container layers. It allows merging multiple directories into a single virtual filesystem. It is used by runtimes such as Docker and containerd."}),(0,s.jsx)(t.p,{children:"The br_netfilter module enables processing of network bridge traffic through the netfilter subsystem. This is necessary for the correct operation of iptables in Kubernetes."})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28415(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/secondaryMasters","title":"secondaryMasters","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/secondaryMasters.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments","slug":"/tech-docs/kubernetes/setup-environments/secondaryMasters","permalink":"/en/tech-docs/kubernetes/setup-environments/secondaryMasters","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(9792),i=n(76331),c=n(60513),l=n(57390);const u={},d=void 0,h={},p=[];function m(e){return(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"master-2",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-2
      `})}),(0,s.jsx)(a.A,{value:"master-3",children:(0,s.jsx)(l.A,{language:"bash",children:c.A`
        export HOST_NAME=master-3
      `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},5831(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","title":"allSysctlsComponent","description":"This section covers configuring kernel parameters using sysctl, which are necessary for Kubernetes networking.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/sysctls/allSysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(32009);const i={},c=void 0,l={},u=[...a.toc];function d(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section covers configuring kernel parameters using sysctl, which are necessary for Kubernetes networking.\nChanges are made to ensure traffic routing between pods and correct iptables operation for bridges. These parameters are mandatory for enabling IP packet forwarding and network flow filtering in the cluster."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Configuring sysctl parameters"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},32009(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","title":"sysctlsComponent","description":"Component installation steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent.mdx","sourceDirName":"tech-docs/kubernetes/setup-environments/sysctls","slug":"/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","permalink":"/en/tech-docs/kubernetes/setup-environments/sysctls/sysctlsComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=n(57390),i=n(60513),c=n(9792),l=n(76331);const u={},d=void 0,h={},p=[{value:"Component installation steps:",id:"component-installation-steps",level:4},{value:"Network Parameters",id:"network-parameters",level:4},{value:"Sysctl configuration",id:"sysctl-configuration",level:4},{value:"Applying configuration",id:"applying-configuration",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-1",level:4},{value:"Applying configuration",id:"applying-configuration-1",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-2",level:4},{value:"Sysctl configuration",id:"sysctl-configuration-3",level:4},{value:"Applying configuration",id:"applying-configuration-2",level:4}];function m(e){const t={admonition:"admonition",code:"code",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"component-installation-steps",children:"Component installation steps:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Sysctl configuration."}),"\n",(0,s.jsx)(t.li,{children:"Applying configuration."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.h4,{id:"network-parameters",children:"Network Parameters"}),(0,s.jsx)(t.p,{children:"For correct traffic routing and filtering, kernel parameters must be set."}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"sysctl-configuration",children:"Sysctl configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      cat <<EOF > /etc/sysctl.d/99-br-netfilter.conf
      net.bridge.bridge-nf-call-iptables=1
      net.bridge.bridge-nf-call-ip6tables=1
      EOF
    `}),(0,s.jsx)(t.h4,{id:"applying-configuration",children:"Applying configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      sysctl --system
    `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"sysctl-configuration-1",children:"Sysctl configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      # write_files:
      - path: /etc/sysctl.d/99-br-netfilter.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.bridge.bridge-nf-call-iptables=1
          net.bridge.bridge-nf-call-ip6tables=1
    `}),(0,s.jsx)(t.h4,{id:"applying-configuration-1",children:"Applying configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      # runcmd:
      - sysctl --system
    `})]})]}),(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"net.ipv4.ip_forward"})," parameter is not enabled, the system will not forward IP packets between interfaces. This can lead to network failures within the cluster, service unavailability, and loss of connectivity between pods."]}),(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"Bash",children:[(0,s.jsx)(t.h4,{id:"sysctl-configuration-2",children:"Sysctl configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      cat <<EOF > /etc/sysctl.d/99-network.conf
      net.ipv4.ip_forward=1
      EOF
    `}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      sysctl --system
    `})]}),(0,s.jsxs)(c.A,{value:"Cloud-init",children:[(0,s.jsx)(t.h4,{id:"sysctl-configuration-3",children:"Sysctl configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      # write_files:
      - path: /etc/sysctl.d/99-network.conf
        owner: root:root
        permissions: '0644'
        content: |
          net.ipv4.ip_forward=1
    `}),(0,s.jsx)(t.h4,{id:"applying-configuration-2",children:"Applying configuration"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
      # runcmd:
      - sysctl --system
    `})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},40180(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tech-docs/kubernetes/statusCluster","title":"statusCluster","description":"After kubelet starts, the cluster initialization process will begin, consisting of 3 stages:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/statusCluster.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/statusCluster","permalink":"/en/tech-docs/kubernetes/statusCluster","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453),a=(n(9792),n(76331),n(57390)),i=n(60513);const c={},l=void 0,u={},d=[];function h(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["After ",(0,s.jsx)(t.code,{children:"kubelet"})," starts, the cluster initialization process will begin, consisting of 3 stages:"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Image download"}),"\n",(0,s.jsx)(t.li,{children:"Container startup"}),"\n",(0,s.jsx)(t.li,{children:"Migration"}),"\n"]}),"\n",(0,s.jsx)("h4",{children:"Image download check"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  crictl images
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
  registry.k8s.io/etcd                      3.5.12-0            3861cfcd7c04c       57.2MB
  registry.k8s.io/kube-apiserver            v1.30.4             8a97b1fb3e2eb       32.8MB
  registry.k8s.io/kube-controller-manager   v1.30.4             8398ad49a121d       31.1MB
  registry.k8s.io/kube-scheduler            v1.30.4             4939f82ab9ab4       19.3MB
  registry.k8s.io/pause                     3.9                 e6f1816883972       322kB
`})}),"\n",(0,s.jsx)("h4",{children:"Container state check"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  crictl ps -a
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(a.A,{language:"bash",children:i.A`
  CONTAINER           IMAGE               CREATED             STATE               NAME                      ATTEMPT             POD ID              POD
  09c8c2d7b6446       4939f82ab9ab4       2 minutes ago       Running             kube-scheduler            1                   934a798c482c3       kube-scheduler-master-1.my-first-cluster.example.com
  15a10517ea727       8398ad49a121d       2 minutes ago       Running             kube-controller-manager   1                   765405114b0a9       kube-controller-manager-master-1.my-first-cluster.example.com
  4b2d766a5f129       8a97b1fb3e2eb       2 minutes ago       Running             kube-apiserver            0                   bd281a893a7c1       kube-apiserver-master-1.my-first-cluster.example.com
  3fb02d0f802ae       3861cfcd7c04c       2 minutes ago       Running             etcd                      0                   b6b62dc165409       etcd-master-1.my-first-cluster.example.com
`})}),"\n",(0,s.jsx)("h4",{children:"Migration check"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:i.A`
  crictl logs $(crictl ps -name kube-apiserver \\
  -o json \|
  jq -r '.containers[''].id') 2>&1 \|
  grep created
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsxs)(n,{className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Output"}),(0,s.jsx)(a.A,{language:"bash",children:i.A`
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
`})]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},45454(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>p,metadata:()=>r,toc:()=>g});var r=n(63143),s=n(74848),o=n(28453),a=n(285),i=n(44349),c=n(68741),l=n(26210),u=n(22365),d=n(50400),h=n(72233);const p={title:"Kubernetes The Hard Way",description:"Step-by-step manual deployment of a Kubernetes cluster without kubeadm: certificates, static pods, kubeconfig, and full control plane setup.",date:new Date("2025-03-23T00:00:00.000Z"),slug:"kubernetes-the-hard-way",authors:["dlputilin"],tags:["Kubernetes","Hard-Way"]},m=void 0,b={authorsImageUrls:[void 0]},g=[{value:"1. Introduction",id:"1-introduction",level:3},{value:"2. Why &quot;The Hard Way&quot;",id:"2-why-the-hard-way",level:3},{value:"3. Deployment Architecture",id:"3-deployment-architecture",level:3},{value:"4. Creating the Infrastructure",id:"4-creating-the-infrastructure",level:3},{value:"5. Basic Node Setup",id:"5-basic-node-setup",level:3},{value:"6. Loading Kernel Modules",id:"6-loading-kernel-modules",level:3},{value:"7. Configuring sysctl Parameters",id:"7-configuring-sysctl-parameters",level:3},{value:"8. Installing Components",id:"8-installing-components",level:3},{value:"9. Configuring Components",id:"9-configuring-components",level:3},{value:"10. Verifying Component Readiness",id:"10-verifying-component-readiness",level:3},{value:"11. Working with Certificates",id:"11-working-with-certificates",level:3},{value:"12. Creating Root Certificates",id:"12-creating-root-certificates",level:3},{value:"13. Creating Application Certificates",id:"13-creating-application-certificates",level:3},{value:"14. Creating the ServiceAccount Signing Key",id:"14-creating-the-serviceaccount-signing-key",level:3},{value:"15*. Creating All Certificates",id:"15-creating-all-certificates",level:3},{value:"16. Creating kubeconfig Configurations",id:"16-creating-kubeconfig-configurations",level:3},{value:"17*. Creating All kubeconfigs",id:"17-creating-all-kubeconfigs",level:3},{value:"18. Verifying the Certificate Block",id:"18-verifying-the-certificate-block",level:3},{value:"19. Creating Control Plane Static Pods",id:"19-creating-control-plane-static-pods",level:3},{value:"20*. Creating All Control Plane Static Pods",id:"20-creating-all-control-plane-static-pods",level:3},{value:"21. Creating ETCD Cluster Static Pods",id:"21-creating-etcd-cluster-static-pods",level:3},{value:"22. Starting the Kubelet Service",id:"22-starting-the-kubelet-service",level:3},{value:"23. Checking Cluster Status",id:"23-checking-cluster-status",level:3},{value:"24. Configuring the Role Model",id:"24-configuring-the-role-model",level:3},{value:"25. Uploading Configuration to the Cluster",id:"25-uploading-configuration-to-the-cluster",level:3},{value:"26. Uploading Root Certificates to the Cluster",id:"26-uploading-root-certificates-to-the-cluster",level:3},{value:"27 Labeling and Tainting Nodes",id:"27-labeling-and-tainting-nodes",level:3},{value:"28. Adding Worker Nodes",id:"28-adding-worker-nodes",level:3},{value:"\ud83c\udf40 Conclusion",id:"-conclusion",level:2}];function f(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:(0,s.jsxs)(t.p,{children:["Kubernetes The Hard Way ",(0,s.jsx)("span",{style:{color:"#1cc5ac"},children:"#"})]})}),"\n",(0,s.jsx)("p",{style:{fontStyle:"italic",fontWeight:600},children:"Resuming the Kubernetes article series in a new format."}),"\n",(0,s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",gap:"30px",marginTop:"1.5rem"},children:[(0,s.jsxs)("div",{style:{flex:"1 1 55%",minWidth:"280px"},children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["This article describes the overall experience of manually deploying Kubernetes without\nusing automated tools such as\n",(0,s.jsx)("code",{children:"kubeadm"}),". The presented approach is consistent with our\ndocumentation, which we maintain according to best practices and\n",(0,s.jsx)("code",{children:"IAC"})," methodologies."]})}),(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["All configuration provided below exactly replicates the behavior of\n",(0,s.jsx)("code",{children:"kubeadm"}),". As a result, the final cluster is hard to distinguish \u2014 whether\nit was assembled using ",(0,s.jsx)("code",{children:"kubeadm"})," or manually."]})})]}),(0,s.jsx)("div",{style:{flex:"1 1 40%",minWidth:"220px",textAlign:"center",marginTop:"0rem"},children:(0,s.jsx)("img",{src:`${(0,u.I)()}img/blog/kthw-promo.png`,alt:"comics",style:{width:"90%",maxWidth:"330px",filter:"drop-shadow(0 0 12px rgba(255, 255, 255, 0.2))",transition:"transform 0.3s ease-in-out"}})})]}),"\n","\n",(0,s.jsx)(t.h3,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kubernetes"})," has become the de facto standard for managing containerized applications. Its installation and configuration have been greatly simplified thanks to tools like ",(0,s.jsx)(t.code,{children:"kubeadm"}),", which handle certificate generation, component startup, and basic cluster configuration."]}),"\n",(0,s.jsxs)(t.p,{children:["However, behind this convenience lies a complex architecture, understanding of which is critical when designing fault-tolerant solutions, creating custom automations, or debugging production issues. To truly understand ",(0,s.jsx)(t.em,{children:"how a Kubernetes cluster works"}),", it is important to go through the deployment process manually \u2014 from initialization to full readiness."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Kubernetes The Hard Way"})," is a guide in which a cluster is deployed step by step, ",(0,s.jsxs)(t.strong,{children:["without using ",(0,s.jsx)(t.code,{children:"kubeadm"})," or other automated tools"]}),". Instead of a black box \u2014 sequential execution of all the steps that are usually performed under the hood."]}),"\n",(0,s.jsxs)(t.p,{children:["Each stage corresponds to a specific phase of ",(0,s.jsx)(t.code,{children:"kubeadm init"})," or ",(0,s.jsx)(t.code,{children:"kubeadm join"}),", but is implemented manually, with explicit key generation, configuration preparation, process startup, and system state verification."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ud83d\udca1 ",(0,s.jsx)(t.strong,{children:"Result"})," \u2014 a fully functional Kubernetes cluster, virtually indistinguishable from one assembled via ",(0,s.jsx)(t.code,{children:"kubeadm"}),", but prepared with a complete understanding of all internal dependencies."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Skill Level",type:"info",children:(0,s.jsxs)(t.p,{children:["This article is intended for readers who are already familiar with the basic concepts of containerization and Kubernetes in general.\nWithout this background, the level of detail will be overwhelming.\nIf you are just getting started, we recommend reviewing the official ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",children:"Kubernetes Bootcamp"}),"."]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("h4",{children:"\ud83d\udd27 Preface: Why the Startup Order Matters"}),"\n",(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["Some systems are designed so that components are ",(0,s.jsx)("strong",{children:"interdependent"}),", and their management is partially performed"," ","\n",(0,s.jsx)("strong",{children:"within the system itself"}),". This requires a strict order of operations:"]})}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsxs)(t.p,{children:["\u2699\ufe0f ",(0,s.jsx)("strong",{children:"Component Interdependency"}),(0,s.jsx)("br",{}),"\nOne component cannot start without another.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("em",{children:"Example:"})," API requires storage, and storage requires networking and configuration."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.p,{children:["\u23f1 ",(0,s.jsx)("strong",{children:"Cannot Start Everything Simultaneously"}),(0,s.jsx)("br",{}),"\nParallel startup leads to undesirable results.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("em",{children:"Example:"})," Scheduler waits for API, and API waits for data loading and initialization."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.p,{children:["\ud83d\udd04 ",(0,s.jsx)("strong",{children:"Some Components Are Started Externally"}),(0,s.jsx)("br",{}),"\nBefore the system is ready, some processes are started through the environment.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("em",{children:"Example:"})," ",(0,s.jsx)("code",{children:"kubelet"})," is started via systemd, not as part of the cluster."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.p,{children:["\ud83d\udee0 ",(0,s.jsx)("strong",{children:"A Bootstrap Stage Is Required"}),(0,s.jsx)("br",{}),"\nConfigs, certificates, addresses \u2014 everything is prepared manually.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("em",{children:"Example:"})," Initial generation of root CA, ",(0,s.jsx)("code",{children:"kubeconfig"}),", static pod manifests."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(t.p,{children:["\ud83e\udd16 ",(0,s.jsx)("strong",{children:"Transition to Self-Management"}),(0,s.jsx)("br",{}),"\nAfter startup, the system begins to manage its own processes and state.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("em",{children:"Example:"})," Control plane components begin to control each other through the API."]})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Important",type:"danger",children:(0,s.jsxs)(t.p,{children:["Without a strictly defined sequence, such a system will not work.\nThis is exactly why tools and utilities like ",(0,s.jsx)("code",{children:"kubeadm"}),' exist \u2014 they solve the\n"chicken and egg" problem and establish the correct deployment order.']})}),"\n",(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("h4",{children:"Chapters:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#1-introduction",children:"1. Introduction"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#2-why-the-hard-way",children:'2. Why "The Hard Way"'})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#3-deployment-architecture",children:"3. Deployment Architecture"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#4-creating-the-infrastructure",children:"4. Creating the Infrastructure"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#5-basic-node-setup",children:"5. Basic Node Setup"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#6-loading-kernel-modules",children:"6. Loading Kernel Modules"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#7-configuring-sysctl-parameters",children:"7. Configuring sysctl Parameters"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#8-installing-components",children:"8. Installing Components"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#9-configuring-components",children:"9. Configuring Components"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#10-verifying-component-readiness",children:"10. Verifying Component Readiness"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#11-working-with-certificates",children:"11. Working with Certificates"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#12-creating-root-certificates",children:"12. Creating Root Certificates"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#13-creating-application-certificates",children:"13. Creating Application Certificates"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#14-creating-the-serviceaccount-signing-key",children:"14. Creating the ServiceAccount Signing Key"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#15-creating-all-certificates",children:"15*. Creating All Certificates"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#16-creating-kubeconfig-configurations",children:"16. Creating kubeconfig Configurations"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#17-creating-all-kubeconfigs",children:"17*. Creating All kubeconfigs"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#18-verifying-the-certificate-block",children:"18. Verifying the Certificate Block"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#19-creating-control-plane-static-pods",children:"19. Creating Control Plane Static Pods"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#20-creating-all-control-plane-static-pods",children:"20*. Creating All Control Plane Static Pods"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#21-creating-etcd-cluster-static-pods",children:"21. Creating ETCD Cluster Static Pods"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#22-starting-the-kubelet-service",children:"22. Starting the Kubelet Service"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#23-checking-cluster-status",children:"23. Checking Cluster Status"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#24-configuring-the-role-model",children:"24. Configuring the Role Model"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#25-uploading-configuration-to-the-cluster",children:"25. Uploading Configuration to the Cluster"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#26-uploading-root-certificates-to-the-cluster",children:"26. Uploading Root Certificates to the Cluster"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#27-labeling-and-tainting-nodes",children:"27. Labeling and Tainting Nodes"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#28-adding-worker-nodes",children:"28. Adding Worker Nodes"})})]}),(0,s.jsx)(h.C,{})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"2-why-the-hard-way",children:'2. Why "The Hard Way"'}),"\n",(0,s.jsx)("p",{children:"Deploying Kubernetes manually requires additional effort. However, this approach has several advantages:"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"It provides a deep understanding of the architecture and internal logic of Kubernetes components."}),(0,s.jsx)("li",{children:"It allows flexible configuration of each cluster component to meet specific technical requirements."})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"3-deployment-architecture",children:"3. Deployment Architecture"}),"\n",(0,s.jsx)("h4",{children:"Component Layer"}),"\n",(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(d.Y,{src:`${(0,u.I)()}img/components/pie.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Technology layer."})})]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(t.p,{children:"Below is a list of components required for manual cluster deployment. To ensure compatibility, all\nversions must be synchronized with each other."})}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Component"}),(0,s.jsx)("th",{children:"Version"}),(0,s.jsx)("th",{children:"Purpose"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"containerd"}),(0,s.jsx)("td",{children:c.M.containerd.value}),(0,s.jsx)("td",{children:"Container runtime that manages the container lifecycle."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"runc"}),(0,s.jsx)("td",{children:c.M.runc.value}),(0,s.jsx)("td",{children:"Low-level tool for running containers using Linux kernel capabilities."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"crictl"}),(0,s.jsx)("td",{children:c.M.crictl.value}),(0,s.jsx)("td",{children:"Utility for debugging CRI runtimes with containerd interaction support."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubectl"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:"Client for interacting with the Kubernetes API."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubeadm"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Tool for automating Kubernetes installation and configuration (used for configuration validation)."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:"Agent running on each node, responsible for pod execution and health monitoring."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd"}),(0,s.jsx)("td",{children:c.M.etcd.value}),(0,s.jsx)("td",{children:"Distributed key-value store for storing cluster configuration and state."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-apiserver"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:"Component providing a REST API for cluster interaction."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-controller-manager"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:"Manages the state of cluster objects using built-in controllers."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-scheduler"}),(0,s.jsx)("td",{children:c.M.kubernetes.value}),(0,s.jsx)("td",{children:"Responsible for scheduling pod placement on nodes."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"conntrack"}),(0,s.jsx)("td",{children:"v1.4.+"}),(0,s.jsx)("td",{children:"Utility for tracking network connections (used by iptables and kubelet)."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"socat"}),(0,s.jsx)("td",{children:"1.8.+"}),(0,s.jsx)("td",{children:"Utility for port forwarding and TCP tunneling (used for debugging and proxying)."})]})]})]})}),"\n",(0,s.jsx)("h4",{children:"Switching Layer"}),"\n",(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(d.Y,{src:`${(0,u.I)()}img/control-plane/transport.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Network deployment diagram."})})]}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Component"}),(0,s.jsx)("th",{children:"Port"}),(0,s.jsx)("th",{children:"Protocol"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-server"}),(0,s.jsx)("td",{children:a.h.etcdServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-peer"}),(0,s.jsx)("td",{children:a.h.etcdPeer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"etcd-metrics"}),(0,s.jsx)("td",{children:a.h.etcdMetricServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-apiserver"}),(0,s.jsx)("td",{children:a.h.kubeAPIServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-controller-manager"}),(0,s.jsx)("td",{children:a.h.kubeControllerManager.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kube-scheduler"}),(0,s.jsx)("td",{children:a.h.kubeScheduler.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-healthz"}),(0,s.jsx)("td",{children:a.h.kubeletHealthz.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-server"}),(0,s.jsx)("td",{children:a.h.kubeletServer.portNumber}),(0,s.jsx)("td",{children:"TCP"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"kubelet-read-only-port"}),(0,s.jsx)("td",{children:a.h.kubeletReadOnlyPort.portNumber}),(0,s.jsx)("td",{children:"TCP"})]})]})]})}),"\n",(0,s.jsx)("h4",{children:"Load Balancing Layer"}),"\n",(0,s.jsxs)("figure",{style:{textAlign:"center",display:"contents"},children:[(0,s.jsx)(d.Y,{src:`${(0,u.I)()}img/control-plane/load-balancer.svg`,style:{width:"100%",maxWidth:"none"}}),(0,s.jsx)("figcaption",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666",textAlign:"center"},children:(0,s.jsx)(t.p,{children:"Technology layer."})})]}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"IP Address"}),(0,s.jsx)("th",{children:"Target Group"}),(0,s.jsx)("th",{children:"Port"}),(0,s.jsx)("th",{children:"Target Port"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"VIP-LB"}),(0,s.jsx)("td",{children:"- NODE-IP-1 - NODE-IP-2 - NODE-IP-3"}),(0,s.jsx)("td",{children:"6443"}),(0,s.jsx)("td",{children:"6443"})]})})]})}),"\n",(0,s.jsx)("h4",{children:"DNS Records"}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"A Record"}),(0,s.jsx)("th",{children:"IP Address"}),(0,s.jsx)("th",{children:"TTL"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["api.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"VIP-LB"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-1.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-1"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-2.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-2"}),(0,s.jsx)("td",{children:"60s"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-3.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-3"}),(0,s.jsx)("td",{children:"60s"})]})]})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"4-creating-the-infrastructure",children:"4. Creating the Infrastructure"}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)(t.p,{children:"At this stage, the basic cluster architecture is defined, including its network topology, control plane nodes, and core parameters."})}),"\n",(0,s.jsx)("h4",{children:"Cluster Information"}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"External Domain"}),(0,s.jsx)("th",{children:"Kubernetes Version"})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:i.M.clusterName.value}),(0,s.jsx)("td",{children:i.M.kubernetesBaseDomain.value}),(0,s.jsx)("td",{children:c.M.kubernetes.value})]})})]})}),"\n",(0,s.jsx)("h4",{children:"Control Plane Nodes"}),"\n",(0,s.jsx)("div",{style:{overflowX:"auto"},children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"IP Address"}),(0,s.jsx)("th",{children:"Operating System"}),(0,s.jsx)("th",{children:"Resources"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-1.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-1"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU / 2RAM / 20GB"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-2.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-2"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU / 2RAM / 20GB"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["master-3.",i.M.clusterName.value,".",i.M.kubernetesBaseDomain.value]})}),(0,s.jsx)("td",{children:"NODE-IP-3"}),(0,s.jsx)("td",{children:"ubuntu-24-04-lts"}),(0,s.jsx)("td",{children:"2CPU / 2RAM / 20GB"})]})]})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"5-basic-node-setup",children:"5. Basic Node Setup"}),"\n",(0,s.jsx)(l.xh,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"6-loading-kernel-modules",children:"6. Loading Kernel Modules"}),"\n",(0,s.jsx)(l.NQ,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"7-configuring-sysctl-parameters",children:"7. Configuring sysctl Parameters"}),"\n",(0,s.jsx)(l.EU,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"8-installing-components",children:"8. Installing Components"}),"\n",(0,s.jsx)(l.GT,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"9-configuring-components",children:"9. Configuring Components"}),"\n",(0,s.jsx)(l._G,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"10-verifying-component-readiness",children:"10. Verifying Component Readiness"}),"\n",(0,s.jsx)(l.zk,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"11-working-with-certificates",children:"11. Working with Certificates"}),"\n",(0,s.jsx)(l.vL,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"12-creating-root-certificates",children:"12. Creating Root Certificates"}),"\n",(0,s.jsx)(l.JT,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"13-creating-application-certificates",children:"13. Creating Application Certificates"}),"\n",(0,s.jsx)(l.Bb,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"14-creating-the-serviceaccount-signing-key",children:"14. Creating the ServiceAccount Signing Key"}),"\n",(0,s.jsx)(l.FU,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"15-creating-all-certificates",children:"15*. Creating All Certificates"}),"\n",(0,s.jsx)(l.Nv,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"16-creating-kubeconfig-configurations",children:"16. Creating kubeconfig Configurations"}),"\n",(0,s.jsx)(l.px,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"17-creating-all-kubeconfigs",children:"17*. Creating All kubeconfigs"}),"\n",(0,s.jsx)(l.r6,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"18-verifying-the-certificate-block",children:"18. Verifying the Certificate Block"}),"\n",(0,s.jsx)(l.mG,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"19-creating-control-plane-static-pods",children:"19. Creating Control Plane Static Pods"}),"\n",(0,s.jsx)(l.eg,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"20-creating-all-control-plane-static-pods",children:"20*. Creating All Control Plane Static Pods"}),"\n",(0,s.jsx)(l.sh,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"21-creating-etcd-cluster-static-pods",children:"21. Creating ETCD Cluster Static Pods"}),"\n",(0,s.jsx)(l.VR,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"22-starting-the-kubelet-service",children:"22. Starting the Kubelet Service"}),"\n",(0,s.jsx)(l.cr,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"23-checking-cluster-status",children:"23. Checking Cluster Status"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section is dedicated to verifying the status of cluster components after kubelet startup. It describes commands for monitoring image pulls, container startup, and successful initialization of cluster resources. This allows you to confirm that the cluster has started correctly before proceeding to the next stages."}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Checking Cluster Status"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Not required"})]})}),(0,s.jsx)(l.Qm,{})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"24-configuring-the-role-model",children:"24. Configuring the Role Model"}),"\n",(0,s.jsx)(l.Dp,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"25-uploading-configuration-to-the-cluster",children:"25. Uploading Configuration to the Cluster"}),"\n",(0,s.jsx)(l.aw,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"26-uploading-root-certificates-to-the-cluster",children:"26. Uploading Root Certificates to the Cluster"}),"\n",(0,s.jsx)(l.nv,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"27-labeling-and-tainting-nodes",children:"27 Labeling and Tainting Nodes"}),"\n",(0,s.jsx)(l.q3,{}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"28-adding-worker-nodes",children:"28. Adding Worker Nodes"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Control plane setup is complete. The cluster is running but has no worker nodes for executing workloads.\nThe next step is expanding the cluster with Worker nodes."}),"\n",(0,s.jsxs)(t.p,{children:["A detailed step-by-step guide for adding Worker nodes is available in a separate article:\n",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"/blog/kubernetes-the-hard-way-workers",children:"Kubernetes THW: Workers"})})]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"-conclusion",children:"\ud83c\udf40 Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Kubernetes The Hard Way"})," journey for me has been a path spanning nearly two years. It opened up a wealth of new knowledge, opportunities... And, of course, challenges \ud83d\ude42"]}),"\n",(0,s.jsx)(t.p,{children:"This is far from my first article on this topic \u2014 if you're interested, check out my previous drafts on Habr:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/673730/",children:"K8S Certificates or How to Untangle the Spaghetti. Part 1"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/695344/",children:"K8S Certificates or How to Untangle the Spaghetti. Part 2"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/699074/",children:"Kubernetes the Hard Way"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/704410/",children:"Kubernetes the Hard Way \u2014 Evolution. Part 1"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/727820/",children:"Managed Kubernetes the Hard Way"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://habr.com/ru/articles/730850/",children:"Three Levels of Kubernetes in Kubernetes"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To sum it up: this article took about ",(0,s.jsx)(t.strong,{children:"four months"})," to write.\nEvery script was hand-polished (with the help of ",(0,s.jsx)(t.code,{children:"chatGPT"}),") and tested in real-world conditions.\nNo kidding \u2014 during all this time I spun up ",(0,s.jsx)(t.strong,{children:"over 400 clusters"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Thanks to those who understood the idea, and special thanks to those who read all the way to the end \ud83d\ude4c\nI'd love to hear your feedback and will definitely continue sharing my experience \u2014 in the same spirit, but in a new format."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"\ud83d\udc3e During all four months, no animals were harmed... except for the Good Cat \ud83d\ude3c\nIt was an amazing experience that I wouldn't recommend unless you have a slight inclination toward masochism \ud83d\ude05\nAnd if you do \u2014 welcome!"})})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},27653(e,t,n){n.d(t,{A:()=>M});var r=n(96540),s=n(74848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),o=t.filter(e=>e!==n),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,s.jsx)(s.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var a=n(34164),i=n(21312),c=n(17559);const l="admonition_xJq3",u="admonitionHeading_Gvgb",d="admonitionIcon_Rf37",h="admonitionContent_BuS1";function p({type:e,className:t,children:n}){return(0,s.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(e),l,t),children:n})}function m({icon:e,title:t}){return(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:d,children:e}),t]})}function b({children:e}){return e?(0,s.jsx)("div",{className:h,children:e}):null}function g(e){const{type:t,icon:n,title:r,children:o,className:a}=e;return(0,s.jsxs)(p,{type:t,className:a,children:[r||n?(0,s.jsx)(m,{title:r,icon:n}):null,(0,s.jsx)(b,{children:o})]})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const k={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(g,{...k,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const y={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,s.jsx)(g,{...y,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const C={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function $(e){return(0,s.jsx)(g,{...C,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function S(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const P={icon:(0,s.jsx)(S,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function N(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,s.jsx)(N,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const E={icon:(0,s.jsx)(S,{}),title:(0,s.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:x,tip:j,info:$,warning:function(e){return(0,s.jsx)(g,{...P,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(g,{...w,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)($,{title:"important",...e}),success:e=>(0,s.jsx)(j,{title:"success",...e}),caution:function(e){return(0,s.jsx)(g,{...E,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function M(e){const t=o(e),n=(r=t.type,T[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),T.info));var r;return(0,s.jsx)(n,{...t})}},69623(e,t,n){n.d(t,{A:()=>g});var r=n(96540),s=n(34164),o=n(63427),a=n(92303),i=n(41422);const c="details_lb9f",l="isBrowser_bmU9",u="collapsibleContent_i85q";var d=n(74848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m({summary:e,children:t,...n}){(0,o.A)().collectAnchor(n.id);const m=(0,a.A)(),b=(0,r.useRef)(null),{collapsed:g,setCollapsed:f}=(0,i.u)({initialState:!n.open}),[k,x]=(0,r.useState)(n.open),v=r.isValidElement(e)?e:(0,d.jsx)("summary",{children:e??"Details"});return(0,d.jsxs)("details",{...n,ref:b,open:k,"data-collapsed":g,className:(0,s.A)(c,m&&l,n.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&p(t,b.current)&&(e.preventDefault(),g?(f(!1),x(!0)):f(!0))},children:[v,(0,d.jsx)(i.N,{lazy:!1,collapsed:g,onCollapseTransitionEnd:e=>{f(e),x(!e)},children:(0,d.jsx)("div",{className:u,children:t})})]})}const b="details_b_Ee";function g({...e}){return(0,d.jsx)(m,{...e,className:(0,s.A)("alert alert--info",b,e.className)})}},26210(e,t,n){n.d(t,{Bb:()=>a.default,Dp:()=>h.default,EU:()=>c.default,FU:()=>f.default,GT:()=>r.default,JT:()=>o.default,NQ:()=>y.default,Nv:()=>x.default,Qm:()=>C.default,VC:()=>w.default,VR:()=>b.default,_G:()=>s.default,aw:()=>d.default,cr:()=>A.default,eg:()=>p.default,iD:()=>E.default,iO:()=>N.default,kq:()=>P.default,mG:()=>k.default,nv:()=>u.default,px:()=>i.default,q3:()=>l.default,r6:()=>v.default,sh:()=>m.default,vL:()=>$.default,xh:()=>j.default,z6:()=>S.default,zk:()=>g.default});var r=n(39097),s=n(80915),o=n(82243),a=n(93187),i=n(92741),c=n(5831),l=n(87355),u=n(56646),d=n(46835),h=n(58179),p=n(39365),m=n(69770),b=n(53860),g=n(39402),f=n(59373),k=n(17861),x=n(55215),v=n(49887),y=n(95512),j=n(92100),A=n(95175),C=n(40180),$=n(14537),S=n(73641),P=n(75418),N=n(26026),w=n(32189),E=n(61008)},72233(e,t,n){n.d(t,{C:()=>c});n(96540);var r=n(21312);const s="container_vd7F",o="image_l8wB";var a=n(22365),i=n(74848);const c=()=>(0,i.jsx)("div",{className:s,children:(0,i.jsx)("img",{src:`${(0,a.I)()}img/commics/monkey-user/aaa-bug.png`,alt:(0,r.T)({id:"aaaBug.alt",message:"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 Kubernetes"}),className:o})})},94949(e,t,n){n.d(t,{N:()=>c,y:()=>i});n(96540);var r=n(57390),s=n(27653),o=n(21312),a=n(74848);const i=({command:e,output:t})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{language:"bash",children:e}),(0,a.jsx)(s.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(r.A,{language:"bash",children:t})})]}),c=({binaryName:e,version:t,installSteps:n,successMessage:i,grepCommand:c,lsOutput:l})=>{const u=[`***** [INFO] Checking current ${e} version...`,`***** [INFO] Current: none, Target: ${t}`,"***** [INFO] Download URL: https://*******",`***** [INFO] Updating ${e} to version ${t}...`,"***** [INFO] Working directory: /tmp/tmp.*****",`***** [INFO] Downloading ${e}...`,"***** [INFO] Downloading checksum file...","***** [INFO] Verifying checksum...",...n.map(e=>`***** [INFO] ${e}`),`***** [INFO] ${i} ${t}.`].join("\n");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{language:"bash",children:`journalctl -t ${e}-installer`}),(0,a.jsx)(s.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(r.A,{language:"text",children:u})}),(0,a.jsx)(r.A,{language:"bash",children:`ls -la /usr/local/bin/ | grep ${c}`}),(0,a.jsx)(s.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(r.A,{language:"bash",children:l})})]})}},21186(e,t,n){n.d(t,{A:()=>d});n(96540);var r=n(57390),s=n(27653),o=n(69623),a=n(28774),i=n(21312),c=n(60513),l=n(44349),u=n(74848);const d=({method:e,certPath:t,certDisplayName:n,caDisplayName:d})=>{const h="openssl"===e,p=h?`${l.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${t}`:"kubeadm certs check-expiration",m=h?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(a.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,u.jsx)(i.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),b=c.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${n.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(d??"").padEnd(24)}no
  `;return(0,u.jsxs)(o.A,{className:"custom-blue-block",summary:(0,u.jsx)("summary",{children:(0,i.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,u.jsx)(s.A,{type:"warning",title:(0,i.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:m}),(0,u.jsx)(r.A,{language:"bash",children:p}),(0,u.jsx)(s.A,{type:"note",title:(0,i.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,u.jsx)(r.A,{language:"bash",children:b})})]})}},99780(e,t,n){n.d(t,{l:()=>a});var r=n(96540),s=n(60197),o=n(74848);const a=({delegate:e,options:t,children:n})=>{const a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const n=a.current,r=e||"[data-fancybox]",o=t||{};return s.lX.bind(n,r,o),()=>{s.lX.unbind(n),s.lX.close()}}),(0,o.jsx)("div",{ref:a,children:n})}},50400(e,t,n){n.d(t,{Y:()=>o});n(96540);var r=n(99780),s=n(74848);const o=({src:e})=>(0,s.jsx)(r.l,{options:{Carousel:{infinite:!1}},children:(0,s.jsx)("a",{"data-fancybox":"gallery",href:e,children:(0,s.jsx)("img",{src:e})})})},65742(e,t,n){n.d(t,{$:()=>s});var r=n(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,n){n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},95538(e,t,n){n.d(t,{D:()=>o});var r=n(65742),s=n(285);const o={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},56223(e,t,n){n.d(t,{L:()=>a});var r=n(65742),s=n(285),o=n(44349);const a={etcdCafile:{value:`${r.$.etcdCA.crtPath}`},etcdCertfile:{value:`${r.$.kubernetesEtcdClient.crtPath}`},etcdKeyfile:{value:`${r.$.kubernetesEtcdClient.keyPath}`},certDir:{value:"/var/run/kubernetes"},kubeletClientCertificate:{value:`${r.$.kubernetesKubeletClient.crtPath}`},kubeletClientKey:{value:`${r.$.kubernetesKubeletClient.keyPath}`},clientCAFile:{value:`${r.$.kubernetesCA.crtPath}`},proxyClientCertFile:{value:`${r.$.kubernetesFrontProxyClient.crtPath}`},proxyClientKeyFile:{value:`${r.$.kubernetesFrontProxyClient.keyPath}`},tlsCertFile:{value:`${r.$.kubernetesServer.crtPath}`},tlsPrivateKeyFile:{value:`${r.$.kubernetesServer.keyPath}`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountKeyFile:{value:`${r.$.kubernetesSA.crtPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},serviceAccountSigningKeyFile:{value:`${r.$.kubernetesSA.keyPath}`},aggregatorRejectForwardingRedirect:{value:"true"},allowPrivileged:{value:"true"},anonymousAuth:{value:"true"},auditLogBatchThrottleEnable:{value:"false"},auditLogCompress:{value:"false"},auditLogTruncateEnabled:{value:"false"},auditWebhookBatchThrottleEnable:{value:"true"},auditWebhookTruncateEnabled:{value:"false"},contentionProfiling:{value:"false"},enableAggregatorRouting:{value:"true"},enableBootstrapTokenAuth:{value:"true"},enableGarbageCollector:{value:"true"},enableLogsHandler:{value:"true"},enablePriorityAndFairness:{value:"true"},encryptionProviderConfigAutomaticReload:{value:"false"},help:{value:"false"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},version:{value:"false"},watchCache:{value:"true"},logTextSplitStream:{value:"false"},shutdownSendRetryAfter:{value:"false"},logJsonSplitStream:{value:"false"},serviceAccountExtendTokenExpiration:{value:"true"},serviceAccountLookup:{value:"true"},apiserverCount:{value:"1"},auditLogBatchBufferSize:{value:"10000"},auditLogBatchMaxSize:{value:"1"},auditLogBatchThrottleBurst:{value:"0"},auditLogBatchThrottleQps:{value:"0"},auditLogMaxage:{value:"30"},auditLogMaxbackup:{value:"10"},auditLogMaxsize:{value:"1000"},auditLogTruncateMaxBatchSize:{value:"10485760"},auditLogTruncateMaxEventSize:{value:"102400"},auditWebhookBatchBufferSize:{value:"10000"},auditWebhookBatchMaxSize:{value:"400"},auditWebhookBatchThrottleBurst:{value:"15"},auditWebhookBatchThrottleQps:{value:"10"},auditWebhookTruncateMaxBatchSize:{value:"10485760"},auditWebhookTruncateMaxEventSize:{value:"102400"},defaultNotReadyTolerationSeconds:{value:"300"},defaultUnreachableTolerationSeconds:{value:"300"},defaultWatchCacheSize:{value:"100"},deleteCollectionWorkers:{value:"1"},kubernetesServiceNodePort:{value:"0"},leaseReuseDurationSeconds:{value:"60"},maxMutatingRequestsInflight:{value:"200"},maxRequestsInflight:{value:"400"},minRequestTimeout:{value:"1800"},goawayChance:{value:"0"},http2MaxStreamsPerConnection:{value:"0"},v:{value:"2"},logJsonInfoBufferSize:{value:"0"},logTextInfoBufferSize:{value:"0"},maxConnectionBytesPerSec:{value:"0"},kubeletPort:{value:`${s.h.kubeletServer.portNumber}`},securePort:{value:`${s.h.kubeAPIServer.portNumber}`},kubeletReadOnlyPort:{value:`${s.h.kubeletReadOnlyPort.portNumber}`},serviceNodePortRange:{value:"30000-32767"},etcdServers:{value:`https://127.0.0.1:${s.h.etcdServer.portNumber}`},serviceAccountIssuer:{value:`https://kubernetes.default.svc.${o.M.kubernetesClusterDomain.value}`},serviceClusterIpRange:{value:`${o.M.kubernetesServiceCIDR.value}`},auditWebhookInitialBackoff:{value:"10s"},auditWebhookBatchMaxWait:{value:"30s"},serviceAccountMaxTokenExpiration:{value:"0s"},shutdownWatchTerminationGracePeriod:{value:"0s"},shutdownDelayDuration:{value:"0s"},requestTimeout:{value:"1m0s"},eventTtl:{value:"1h0m0s"},livezGracePeriod:{value:"0s"},logFlushFrequency:{value:"5s"},kubeletTimeout:{value:"5s"},etcdCompactionInterval:{value:"5m0s"},etcdCountMetricPollPeriod:{value:"1m0s"},etcdDbMetricPollInterval:{value:"30s"},etcdHealthcheckTimeout:{value:"2s"},etcdReadycheckTimeout:{value:"2s"},authenticationTokenWebhookCacheTtl:{value:"2m0s"},authorizationWebhookCacheAuthorizedTtl:{value:"5m0s"},authorizationWebhookCacheUnauthorizedTtl:{value:"30s"},auditWebhookBatchInitialBackoff:{value:"10s"},auditLogBatchMaxWait:{value:"0s"},bindAddress:{value:"0.0.0.0"},cloudProviderGceL7lbSrcCidrs:{value:"130.211.0.0/22,35.191.0.0/16"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},apiAudiences:{value:"konnectivity-server"},loggingFormat:{value:"text"},auditLogFormat:{value:"json"},auditLogMode:{value:"batch"},auditWebhookMode:{value:"batch"},auditLogVersion:{value:"audit.k8s.io/v1"},auditWebhookVersion:{value:"audit.k8s.io/v1"},authenticationTokenWebhookVersion:{value:"v1beta1"},authorizationMode:{value:"Node,RBAC"},authorizationWebhookVersion:{value:"v1beta1"},cloudProvider:{value:"external"},enableAdmissionPlugins:{value:"NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,NodeRestriction,PodSecurity"},endpointReconcilerType:{value:"lease"},storageMediaType:{value:"application/vnd.kubernetes.protobuf"},etcdPrefix:{value:"/registry"},featureGates:{value:"RotateKubeletServerCertificate=true"},kubeletPreferredAddressTypes:{value:"InternalIP,ExternalIP,Hostname"},oidcSigningAlgs:{value:"RS256"},oidcUsernameClaim:{value:"sub"},requestheaderAllowedNames:{value:"front-proxy-client"},requestheaderExtraHeadersPrefix:{value:"X-Remote-Extra-"},requestheaderGroupHeaders:{value:"X-Remote-Group"},requestheaderUsernameHeaders:{value:"X-Remote-User"},runtimeConfig:{value:"api/all=true"},storageBackend:{value:"etcd3"},auditPolicyFile:{value:`${o.M.kubernetesAPIAuditPolicyPath.value}`},auditLogPath:{value:`${o.M.kubernetesAPIAuditLogPath.value}`},advertiseAddress:{value:""},admissionControl:{value:""},admissionControlConfigFile:{value:""},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},auditWebhookConfigFile:{value:""},authenticationConfig:{value:""},authenticationTokenWebhookConfigFile:{value:""},authorizationConfig:{value:""},authorizationPolicyFile:{value:""},authorizationWebhookConfigFile:{value:""},cloudConfig:{value:""},corsAllowedOrigins:{value:""},debugSocketPath:{value:""},disableAdmissionPlugins:{value:""},disabledMetrics:{value:""},egressSelectorConfigFile:{value:""},encryptionProviderConfig:{value:""},etcdServersOverrides:{value:""},externalHostname:{value:""},kubeletCertificateAuthority:{value:""},oidcCaFile:{value:""},oidcClientId:{value:""},oidcGroupsClaim:{value:""},oidcGroupsPrefix:{value:""},oidcIssuerUrl:{value:""},oidcRequiredClaim:{value:""},oidcUsernamePrefix:{value:""},peerAdvertiseIp:{value:""},peerAdvertisePort:{value:""},peerCaFile:{value:""},serviceAccountJwksUri:{value:""},showHiddenMetricsForVersion:{value:""},strictTransportSecurityDirectives:{value:""},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsSniCertKey:{value:""},tokenAuthFile:{value:""},tracingConfigFile:{value:""},vmodule:{value:""},watchCacheSizes:{value:""}}},21232(e,t,n){n.d(t,{L:()=>o});var r=n(65742),s=n(44349);const o={authenticationKubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},authorizationKubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},kubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/controller-manager.conf`},clientCaFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningCertFile:{value:`${r.$.kubernetesCA.crtPath}`},clusterSigningKeyFile:{value:`${r.$.kubernetesCA.keyPath}`},requestheaderClientCaFile:{value:`${r.$.frontProxyCA.crtPath}`},rootCaFile:{value:`${r.$.kubernetesCA.crtPath}`},serviceAccountPrivateKeyFile:{value:`${s.M.kubernetesBaseFolderPath.value}/pki/sa.key`},clusterName:{value:"${CLUSTER_NAME}"},allocateNodeCidrs:{value:"false"},allowMetricLabels:{value:""},allowMetricLabelsManifest:{value:""},allowUntaggedCloud:{value:"false"},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"false"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},certDir:{value:""},cidrAllocatorType:{value:"RangeAllocator"},cloudConfig:{value:""},cloudProvider:{value:"external"},cloudProviderGceLbSrcCidrs:{value:"130.211.0.0/22,209.85.152.0/22,209.85.204.0/22,35.191.0.0/16"},clusterCidr:{value:""},clusterSigningDuration:{value:"720h0m0s"},clusterSigningKubeApiserverClientCertFile:{value:""},clusterSigningKubeApiserverClientKeyFile:{value:""},clusterSigningKubeletClientCertFile:{value:""},clusterSigningKubeletClientKeyFile:{value:""},clusterSigningKubeletServingCertFile:{value:""},clusterSigningKubeletServingKeyFile:{value:""},clusterSigningLegacyUnknownCertFile:{value:""},clusterSigningLegacyUnknownKeyFile:{value:""},concurrentCronJobSyncs:{value:"5"},concurrentDeploymentSyncs:{value:"5"},concurrentEndpointSyncs:{value:"5"},concurrentEphemeralvolumeSyncs:{value:"5"},concurrentGcSyncs:{value:"20"},concurrentHorizontalPodAutoscalerSyncs:{value:"5"},concurrentJobSyncs:{value:"5"},concurrentNamespaceSyncs:{value:"10"},concurrentRcSyncs:{value:"5"},concurrentReplicasetSyncs:{value:"20"},concurrentResourceQuotaSyncs:{value:"5"},concurrentServiceEndpointSyncs:{value:"5"},concurrentServiceSyncs:{value:"1"},concurrentServiceaccountTokenSyncs:{value:"5"},concurrentStatefulsetSyncs:{value:"5"},concurrentTtlAfterFinishedSyncs:{value:"5"},concurrentValidatingAdmissionPolicyStatusSyncs:{value:"5"},configureCloudRoutes:{value:"true"},contentionProfiling:{value:"false"},controllerStartInterval:{value:"0s"},controllers:{value:"*,bootstrapsigner,tokencleaner"},disableAttachDetachReconcileSync:{value:"false"},disableForceDetachOnTimeout:{value:"false"},disabledMetrics:{value:""},enableDynamicProvisioning:{value:"true"},enableGarbageCollector:{value:"true"},enableHostpathProvisioner:{value:"false"},enableLeaderMigration:{value:"false"},endpointUpdatesBatchPeriod:{value:"0s"},endpointsliceUpdatesBatchPeriod:{value:"0s"},externalCloudVolumePlugin:{value:""},featureGates:{value:"RotateKubeletServerCertificate=true"},flexVolumePluginDir:{value:"/usr/libexec/kubernetes/kubelet-plugins/volume/exec/"},help:{value:"false"},horizontalPodAutoscalerCpuInitializationPeriod:{value:"5m0s"},horizontalPodAutoscalerDownscaleDelay:{value:"5m0s"},horizontalPodAutoscalerDownscaleStabilization:{value:"5m0s"},horizontalPodAutoscalerInitialReadinessDelay:{value:"30s"},horizontalPodAutoscalerSyncPeriod:{value:"30s"},horizontalPodAutoscalerTolerance:{value:"0.1"},horizontalPodAutoscalerUpscaleDelay:{value:"3m0s"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"120"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"100"},largeClusterSizeThreshold:{value:"50"},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-controller-manager"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},leaderMigrationConfig:{value:""},legacyServiceAccountTokenCleanUpPeriod:{value:"8760h0m0s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},attachDetachReconcileSyncPeriod:{value:"1m0s"},master:{value:""},maxEndpointsPerSlice:{value:"100"},minResyncPeriod:{value:"12h0m0s"},mirroringConcurrentServiceEndpointSyncs:{value:"5"},mirroringEndpointsliceUpdatesBatchPeriod:{value:"0s"},mirroringMaxEndpointsPerSubset:{value:"1000"},namespaceSyncPeriod:{value:"2m0s"},nodeCidrMaskSize:{value:"0"},nodeCidrMaskSizeIpv4:{value:"0"},nodeCidrMaskSizeIpv6:{value:"0"},nodeEvictionRate:{value:"0.1"},nodeMonitorGracePeriod:{value:"40s"},nodeMonitorPeriod:{value:"5s"},nodeStartupGracePeriod:{value:"10s"},nodeSyncPeriod:{value:"0s"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},profiling:{value:"false"},pvRecyclerIncrementTimeoutNfs:{value:"30"},pvRecyclerMinimumTimeoutHostpath:{value:"60"},pvRecyclerMinimumTimeoutNfs:{value:"300"},pvRecyclerPodTemplateFilepathHostpath:{value:""},pvRecyclerPodTemplateFilepathNfs:{value:""},pvRecyclerTimeoutIncrementHostpath:{value:"30"},pvclaimbinderSyncPeriod:{value:"15s"},requestheaderAllowedNames:{value:""},requestheaderExtraHeadersPrefix:{value:"x-remote-extra-"},requestheaderGroupHeaders:{value:"x-remote-group"},requestheaderUsernameHeaders:{value:"x-remote-user"},resourceQuotaSyncPeriod:{value:"5m0s"},routeReconciliationPeriod:{value:"10s"},secondaryNodeEvictionRate:{value:"0.01"},securePort:{value:"10257"},serviceClusterIpRange:{value:""},showHiddenMetricsForVersion:{value:""},terminatedPodGcThreshold:{value:"0"},tlsCertFile:{value:"/etc/kubernetes/pki/controller-manager-server.crt"},tlsCipherSuites:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/controller-manager-server.key"},tlsSniCertKey:{value:""},unhealthyZoneThreshold:{value:"0.55"},useServiceAccountCredentials:{value:"true"},v:{value:"2"},version:{value:"false"},vmodule:{value:""},volumeHostAllowLocalLoopback:{value:"true"},volumeHostCidrDenylist:{value:""}}},21502(e,t,n){n.d(t,{w:()=>o});var r=n(285),s=n(44349);const o={authenticationKubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authenticationSkipLookup:{value:"false"},authenticationTokenWebhookCacheTtl:{value:"10s"},authenticationTolerateLookupFailure:{value:"true"},authorizationAlwaysAllowPaths:{value:"/healthz,/readyz,/livez,/metrics"},authorizationKubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/scheduler.conf`},authorizationWebhookCacheAuthorizedTtl:{value:"10s"},authorizationWebhookCacheUnauthorizedTtl:{value:"10s"},bindAddress:{value:"0.0.0.0"},contentionProfiling:{value:"true"},help:{value:"false"},http2MaxStreamsPerConnection:{value:"0"},kubeApiBurst:{value:"100"},kubeApiContentType:{value:"application/vnd.kubernetes.protobuf"},kubeApiQps:{value:"50"},kubeconfig:{value:`${s.M.kubernetesBaseFolderPath.value}/scheduler.conf`},leaderElect:{value:"true"},leaderElectLeaseDuration:{value:"15s"},leaderElectRenewDeadline:{value:"10s"},leaderElectResourceLock:{value:"leases"},leaderElectResourceName:{value:"kube-scheduler"},leaderElectResourceNamespace:{value:"kube-system"},leaderElectRetryPeriod:{value:"2s"},logFlushFrequency:{value:"5s"},logJsonInfoBufferSize:{value:"0"},logJsonSplitStream:{value:"false"},logTextInfoBufferSize:{value:"0"},logTextSplitStream:{value:"false"},loggingFormat:{value:"text"},permitAddressSharing:{value:"false"},permitPortSharing:{value:"false"},podMaxInUnschedulablePodsDuration:{value:"5m0s"},profiling:{value:"true"},requestheaderExtraHeadersPrefix:{value:"[x-remote-extra-]"},requestheaderGroupHeaders:{value:"[x-remote-group]"},requestheaderUsernameHeaders:{value:"[x-remote-user]"},securePort:{value:`${r.h.kubeScheduler.portNumber}`},v:{value:"2"},version:{value:"false"},allowMetricLabels:{value:"[]"},disabledMetrics:{value:"[]"},requestheaderAllowedNames:{value:"[]"},tlsCipherSuites:{value:"[]"},tlsSniCertKey:{value:"[]"},allowMetricLabelsManifest:{value:""},certDir:{value:""},clientCaFile:{value:""},config:{value:""},featureGates:{value:""},vmodule:{value:""},writeConfigTo:{value:""},tlsMinVersion:{value:""},tlsPrivateKeyFile:{value:"/etc/kubernetes/pki/scheduler-server.key"},showHiddenMetricsForVersion:{value:""},tlsCertFile:{value:"/etc/kubernetes/pki/scheduler-server.crt"},requestheaderClientCaFile:{value:""},master:{value:""}}},12480(e,t,n){n.d(t,{I:()=>c});var r=n(60513),s=n(56223),o=n(68741),a=n(51908),i=n(44349);const c={data:{value:r.A`
      apiVersion: kubeadm.k8s.io/v1beta3
      kind: ClusterConfiguration
      clusterName: "$\{CLUSTER_NAME}"
      certificatesDir: ${i.M.kubernetesBaseFolderPath.value}/pki
      controlPlaneEndpoint: $\{INTERNAL_API}:${s.L.securePort.value}
      imageRepository: "${i.M.baseDockerRegistry.value}"
      networking:
        serviceSubnet: ${i.M.kubernetesServiceCIDR.value}
        dnsDomain: ${i.M.kubernetesClusterDomain.value}
      kubernetesVersion: ${o.M.kubernetes.value}
      dns: {}
      etcd:
        local:
          imageRepository: "${i.M.baseDockerRegistry.value}"
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
        - name: "k8s-audit-policy"
          hostPath: "/etc/kubernetes/audit-policy.yaml"
          mountPath: "/etc/kubernetes/audit-policy.yaml"
          pathType: File
        certSANs:
          - "127.0.0.1"
          # TODO для доабвления внешнего FQDN в сертификаты кластера
          # - $\{INTERNAL_API}
        timeoutForControlPlane: 4m0s
      controllerManager:
        extraArgs:
          cluster-name: "$\{CLUSTER_NAME}"
          ${a.Uj.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "controller-manager-crt"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.crt"
        #   pathType: File
        # - name: "controller-manager-key"
        #   hostPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   mountPath: "/etc/kubernetes/pki/controller-manager-server.key"
        #   pathType: File
      scheduler:
        extraArgs:
          ${a.hZ.data.value}
        # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
        # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
        # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
        # ->
        # extraVolumes:
        # - name: "scheduler-crt"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.crt"
        #   pathType: File
        # - name: "scheduler-key"
        #   hostPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   mountPath: "/etc/kubernetes/pki/scheduler-server.key"
        #   pathType: File
    `}}},26225(e,t,n){n.d(t,{h:()=>i});var r=n(60513),s=n(65742),o=n(44349),a=n(285);const i={data:{value:r.A`
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
            enabled: false
        webhook:
            cacheTTL: 0s
            enabled: true
        x509:
          clientCAFile: "${s.$.kubernetesCA.crtPath}"
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
    `}}},51908(e,t,n){n.d(t,{IL:()=>l,Nu:()=>c,Uj:()=>u,hZ:()=>d});var r=n(60513),s=n(95538),o=n(56223),a=n(21232),i=n(21502);const c={data:{value:r.A`
      auto-compaction-retention: "${s.D.autoCompactionRetention.value}"
      cert-file: "${s.D.certFile.value}"
      client-cert-auth: "${s.D.clientCertAuth.value}"
      data-dir: "${s.D.dataDir.value}"
      election-timeout: "${s.D.electionTimeout.value}"
      heartbeat-interval: "${s.D.heartbeatInterval.value}"
      key-file: "${s.D.keyFile.value}"
      listen-client-urls: "${s.D.listenClientUrls.value}"
      listen-metrics-urls: "${s.D.listenMetricsUrls.value}"
      listen-peer-urls: "${s.D.listenPeerUrls.value}"
      logger: "${s.D.logger.value}"
      max-snapshots: "${s.D.maxSnapshots.value}"
      max-wals: "${s.D.maxWals.value}"
      metrics: "${s.D.metrics.value}"
      peer-cert-file: "${s.D.peerCertFile.value}"
      peer-client-cert-auth: "${s.D.peerClientCertAuth.value}"
      peer-key-file: "${s.D.peerKeyFile.value}"
      peer-trusted-ca-file: "${s.D.peerTrustedCAFile.value}"
      snapshot-count: "${s.D.snapshotCount.value}"
      quota-backend-bytes: "10737418240" # TODO
      experimental-initial-corrupt-check: "true"
      experimental-watch-progress-notify-interval: "5s"
      trusted-ca-file: "${s.D.trustedCAFile.value}"
    `}},l={data:{value:r.A`
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
      audit-policy-file: ${o.L.auditPolicyFile.value}
      audit-log-path: ${o.L.auditLogPath.value}
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
    `}},u={data:{value:r.A`
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
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-CONTROLLER-MANAGER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${a.L.tlsCertFile.value}
      # tls-private-key-file=${a.L.tlsPrivateKeyFile.value}
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
      # tls-cipher-suites: "${a.L.tlsCipherSuites.value}"
      # tls-min-version: "${a.L.tlsMinVersion.value}"
      # tls-sni-cert-key: "${a.L.tlsSniCertKey.value}"
      # vmodule: "${a.L.vmodule.value}"
      # volume-host-cidr-denylist: "${a.L.volumeHostCidrDenylist.value}"
      # external-cloud-volume-plugin: "${a.L.externalCloudVolumePlugin.value}"
      # requestheader-allowed-names: "${a.L.requestheaderAllowedNames.value}"
    `}},d={data:{value:r.A`
      authentication-kubeconfig: "${i.w.authenticationKubeconfig.value}"
      authentication-skip-lookup: "${i.w.authenticationSkipLookup.value}"
      authentication-token-webhook-cache-ttl: "${i.w.authenticationTokenWebhookCacheTtl.value}"
      authentication-tolerate-lookup-failure: "${i.w.authenticationTolerateLookupFailure.value}"
      authorization-always-allow-paths: "${i.w.authorizationAlwaysAllowPaths.value}"
      authorization-kubeconfig: "${i.w.authorizationKubeconfig.value}"
      authorization-webhook-cache-authorized-ttl: "${i.w.authorizationWebhookCacheAuthorizedTtl.value}"
      authorization-webhook-cache-unauthorized-ttl: "${i.w.authorizationWebhookCacheUnauthorizedTtl.value}"
      bind-address: "${i.w.bindAddress.value}"
      client-ca-file: "${i.w.clientCaFile.value}"
      contention-profiling: "${i.w.contentionProfiling.value}"
      help: "${i.w.help.value}"
      http2-max-streams-per-connection: "${i.w.http2MaxStreamsPerConnection.value}"
      kube-api-burst: "${i.w.kubeApiBurst.value}"
      kube-api-content-type: "${i.w.kubeApiContentType.value}"
      kube-api-qps: "${i.w.kubeApiQps.value}"
      kubeconfig: "${i.w.kubeconfig.value}"
      leader-elect: "${i.w.leaderElect.value}"
      leader-elect-lease-duration: "${i.w.leaderElectLeaseDuration.value}"
      leader-elect-renew-deadline: "${i.w.leaderElectRenewDeadline.value}"
      leader-elect-resource-lock: "${i.w.leaderElectResourceLock.value}"
      leader-elect-resource-name: "${i.w.leaderElectResourceName.value}"
      leader-elect-resource-namespace: "${i.w.leaderElectResourceNamespace.value}"
      leader-elect-retry-period: "${i.w.leaderElectRetryPeriod.value}"
      log-flush-frequency: "${i.w.logFlushFrequency.value}"
      log-json-info-buffer-size: "${i.w.logJsonInfoBufferSize.value}"
      log-json-split-stream: "${i.w.logJsonSplitStream.value}"
      log-text-info-buffer-size: "${i.w.logTextInfoBufferSize.value}"
      log-text-split-stream: "${i.w.logTextSplitStream.value}"
      logging-format: "${i.w.loggingFormat.value}"
      permit-address-sharing: "${i.w.permitAddressSharing.value}"
      permit-port-sharing: "${i.w.permitPortSharing.value}"
      pod-max-in-unschedulable-pods-duration: "${i.w.podMaxInUnschedulablePodsDuration.value}"
      profiling: "${i.w.profiling.value}"
      requestheader-extra-headers-prefix: "${i.w.requestheaderExtraHeadersPrefix.value}"
      requestheader-group-headers: "${i.w.requestheaderGroupHeaders.value}"
      requestheader-username-headers: "${i.w.requestheaderUsernameHeaders.value}"
      secure-port: "${i.w.securePort.value}"
      v: "${i.w.v.value}"
      version: "${i.w.version.value}"
      # ЕСЛИ НУЖНО ПОДКЛЮЧИТЬ СЕРВЕРНЫЕ СЕРТИФИКАТЫ ДЛЯ KUBE-SCHEDULER
      # ОБРАТИТЕ ВНИМАНИЕ, ЧТО KUBEADM НЕ СОЗДАЕТ ДАННЫЕ СЕРТИФИКАТЫ
      # ТРЕБУЕТСЯ РАСКОМЕНТИРОВАТЬ
      # ->
      # tls-cert-file=${i.w.tlsCertFile.value}
      # tls-private-key-file=${i.w.tlsPrivateKeyFile.value}
      # <-
      # allow-metric-labels: "${i.w.allowMetricLabels.value}"
      # allow-metric-labels-manifest: "${i.w.allowMetricLabelsManifest.value}"
      # cert-dir: "${i.w.certDir.value}"
      # config: "${i.w.config.value}"
      # disabled-metrics: "${i.w.disabledMetrics.value}"
      # feature-gates: "${i.w.featureGates.value}"
      # master: "${i.w.master.value}"
      # requestheader-allowed-names: "${i.w.requestheaderAllowedNames.value}"
      # requestheader-client-ca-file: "${i.w.requestheaderClientCaFile.value}"
      # show-hidden-metrics-for-version: "${i.w.showHiddenMetricsForVersion.value}"
      # tls-cipher-suites: "${i.w.tlsCipherSuites.value}"
      # tls-min-version: "${i.w.tlsMinVersion.value}"
      # tls-sni-cert-key: "${i.w.tlsSniCertKey.value}"
      # vmodule: "${i.w.vmodule.value}"
      # write-config-to: "${i.w.writeConfigTo.value}"
    `}}},51430(e,t,n){n.d(t,{k:()=>r});const r={data:{value:n(60513).A`
      ---
      apiVersion: audit.k8s.io/v1
      kind: Policy

      # Общие правила
      # Исключаем раннюю стадию аудита "RequestReceived", чтобы снизить объем логов и дублирование
      # Эта настройка применяется глобально, но в некоторых правилах переопределяется локально
      # omitStages может быть указано также внутри отдельных правил
      rules:

        # Отключаем логирование "watch"-запросов от kube-proxy к endpoint'ам и сервисам
        - level: None
          users: ["system:kube-proxy"]
          verbs: ["watch"]
          resources:
            - group: ""  # Core API group
              resources: ["endpoints", "services", "services/status"]

        # Отключаем логирование чтения configmap в kube-system от "system:unsecured"
        - level: None
          users: ["system:unsecured"]
          namespaces: ["kube-system"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["configmaps"]

        # Отключаем логирование чтения узлов legacy-пользователем "kubelet"
        - level: None
          users: ["kubelet"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["nodes", "nodes/status"]

        # Отключаем логирование чтения узлов группой "system:nodes"
        - level: None
          userGroups: ["system:nodes"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["nodes", "nodes/status"]

        # Отключаем логирование get/update endpoint'ов в kube-system от контроллеров
        - level: None
          users:
            - system:kube-controller-manager
            - system:kube-scheduler
            - system:serviceaccount:kube-system:endpoint-controller
          verbs: ["get", "update"]
          namespaces: ["kube-system"]
          resources:
            - group: ""
              resources: ["endpoints"]

        # Отключаем логирование операций с namespace'ами от системного пользователя apiserver
        - level: None
          users: ["system:apiserver"]
          verbs: ["get"]
          resources:
            - group: ""
              resources: ["namespaces", "namespaces/status", "namespaces/finalize"]

        # Отключаем логирование операций с configmap и endpoint в kube-system от cluster-autoscaler
        - level: None
          users: ["cluster-autoscaler"]
          verbs: ["get", "update"]
          namespaces: ["kube-system"]
          resources:
            - group: ""
              resources: ["configmaps", "endpoints"]

        # Отключаем логирование запросов к метрикам от kube-controller-manager
        - level: None
          users: ["system:kube-controller-manager"]
          verbs: ["get", "list"]
          resources:
            - group: "metrics.k8s.io"

        # Отключаем логирование системных non-resource URL (здоровье, версия, swagger и т.п.)
        - level: None
          nonResourceURLs:
            - /healthz*
            - /version
            - /swagger*

        # Отключаем логирование событий (events) — они часто шумные и не критичны
        - level: None
          resources:
            - group: ""
              resources: ["events"]

        # Логирование обновлений статуса узлов и подов от kubelet и node-problem-detector
        - level: Request
          users:
            - kubelet
            - system:node-problem-detector
            - system:serviceaccount:kube-system:node-problem-detector
          verbs:
            - update
            - patch
          resources:
            - group: ""
              resources:
                - nodes/status
                - pods/status
          omitStages:
            - "RequestReceived"

        # То же самое для всех участников группы system:nodes
        - level: Request
          userGroups: ["system:nodes"]
          verbs:
            - update
            - patch
          resources:
            - group: ""
              resources:
                - nodes/status
                - pods/status
          omitStages:
            - "RequestReceived"

        # Логирование массового удаления (deletecollection) от namespace-controller
        - level: Request
          users: ["system:serviceaccount:kube-system:namespace-controller"]
          verbs: ["deletecollection"]
          omitStages:
            - "RequestReceived"

        # Логирование метаданных для чувствительных ресурсов: секретов, токенов, токен-рецензий
        - level: Metadata
          resources:
            - group: ""
              resources: ["secrets", "configmaps", "serviceaccounts/token"]
            - group: authentication.k8s.io
              resources: ["tokenreviews"]
          omitStages:
            - "RequestReceived"

        # Логирование всех безопасных операций чтения (get/list/watch) по всем известным группам
        - level: Request
          verbs: ["get", "list", "watch"]
          resources:
            - group: ""  # Core
            - group: "admissionregistration.k8s.io"
            - group: "apiextensions.k8s.io"
            - group: "apiregistration.k8s.io"
            - group: "apps"
            - group: "authentication.k8s.io"
            - group: "authorization.k8s.io"
            - group: "autoscaling"
            - group: "batch"
            - group: "certificates.k8s.io"
            - group: "extensions"
            - group: "metrics.k8s.io"
            - group: "networking.k8s.io"
            - group: "policy"
            - group: "rbac.authorization.k8s.io"
            - group: "scheduling.k8s.io"
            - group: "settings.k8s.io"
            - group: "storage.k8s.io"
          omitStages:
            - "RequestReceived"

        # Логирование всех операций, включая тело запроса и ответа (RequestResponse)
        - level: RequestResponse
          resources:
            - group: ""  # Core
            - group: "admissionregistration.k8s.io"
            - group: "apiextensions.k8s.io"
            - group: "apiregistration.k8s.io"
            - group: "apps"
            - group: "authentication.k8s.io"
            - group: "authorization.k8s.io"
            - group: "autoscaling"
            - group: "batch"
            - group: "certificates.k8s.io"
            - group: "extensions"
            - group: "metrics.k8s.io"
            - group: "networking.k8s.io"
            - group: "policy"
            - group: "rbac.authorization.k8s.io"
            - group: "scheduling.k8s.io"
            - group: "settings.k8s.io"
            - group: "storage.k8s.io"
          omitStages:
            - "RequestReceived"

        # Финальный catch-all: логируем метаданные всего остального
        - level: Metadata
          omitStages:
            - "RequestReceived"
    `}}},285(e,t,n){n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},22365(e,t,n){n.d(t,{I:()=>r});const r=()=>"/"},63143(e){e.exports=JSON.parse('{"permalink":"/en/blog/kubernetes-the-hard-way","source":"@site/i18n/en/docusaurus-plugin-content-blog/kubernetes-the-hard-way.mdx","title":"Kubernetes The Hard Way","description":"Step-by-step manual deployment of a Kubernetes cluster without kubeadm: certificates, static pods, kubeconfig, and full control plane setup.","date":"2025-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Kubernetes","permalink":"/en/blog/tags/kubernetes"},{"inline":true,"label":"Hard-Way","permalink":"/en/blog/tags/hard-way"}],"readingTime":12.58,"hasTruncateMarker":true,"authors":[{"name":"Putilin Dmitry Lvovich","title":"Architecturer","url":"https://t.me/bezumniy_kot_work","socials":{"github":"https://github.com/PRO-Robotech"},"imageURL":"https://avatars.githubusercontent.com/u/107264732?v=4","key":"dlputilin","page":null}],"frontMatter":{"title":"Kubernetes The Hard Way","description":"Step-by-step manual deployment of a Kubernetes cluster without kubeadm: certificates, static pods, kubeconfig, and full control plane setup.","date":"2025-03-23T00:00:00.000Z","slug":"kubernetes-the-hard-way","authors":["dlputilin"],"tags":["Kubernetes","Hard-Way"]},"unlisted":false,"prevItem":{"title":"Kubernetes Audit","permalink":"/en/blog/kubernetes-audit"}}')}}]);