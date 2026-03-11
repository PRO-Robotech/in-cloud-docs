"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1594,2837,3028,4657,5124,5989,6607,6899,7412,7893,8370,8744,9657],{45280(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(44349),o=r(57390),i=r(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs etcd-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After running the command, we get the following output."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Create ETCD CA
  [certs] Generating "etcd/ca" certificate and key
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},58576(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/main","title":"main","description":"Purpose etcd-server (client connections, port 2379), etcd-peer (inter-node replication, port 2380), and etcd-healthcheck-client (health checks). Also used by kube-apiserver to verify the connection to etcd via the apiserver-etcd-client certificate.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/main.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/main","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(9792),o=r(76331),i=r(12365),l=r(45280);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," CA for all etcd cluster certificates. Signs server, client, and peer certificates for etcd: ",(0,s.jsx)(t.code,{children:"etcd-server"})," (client connections, port 2379), ",(0,s.jsx)(t.code,{children:"etcd-peer"})," (inter-node replication, port 2380), and ",(0,s.jsx)(t.code,{children:"etcd-healthcheck-client"})," (health checks). Also used by kube-apiserver to verify the connection to etcd via the ",(0,s.jsx)(t.code,{children:"apiserver-etcd-client"})," certificate."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this section only describes the process of creating ",(0,s.jsx)(t.code,{children:"ETCD CA"})," root certificates."]})}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},12365(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/certificates/center-authority/etcdCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/certificates/center-authority/etcdCA/openssl.mdx","sourceDirName":"tech-docs/etcd/certificates/center-authority/etcdCA","slug":"/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","permalink":"/en/tech-docs/etcd/certificates/center-authority/etcdCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(65742),o=r(44349),i=r(57390),l=r(60513);const d={},u=void 0,h={},p=[];function k(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki/etcd
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl genrsa \\
      -out ${a.$.etcdCA.keyPath} ${a.$.etcdCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
    openssl req \\
      -x509 \\
      -new \\
      -nodes \\
      -key ${a.$.etcdCA.keyPath} \\
      -sha256 \\
      -days 3650 \\
      -out ${a.$.etcdCA.crtPath} \\
      -config ${a.$.etcdCA.crtConf}
  `}),"\n",(0,s.jsxs)(r,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness check"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    ${o.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.etcdCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},82243(e,t,r){r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/all-ca","title":"5.2.2.1. Root certificates","description":"Certificate Authority (CA) is a trusted source that issues root certificates used to sign all other certificates within the Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/allCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/all-ca","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/all-ca","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-ca","title":"5.2.2.1. Root certificates"},"sidebar":"techDocs","previous":{"title":"5.2.2. All certificates","permalink":"/en/tech-docs/kubernetes/certificates/all-certificates"},"next":{"title":"5.2.2.2. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b","permalink":"/en/tech-docs/kubernetes/certificates/components/all-certificates"}}');var s=r(74848),c=r(28453),a=r(9792),o=r(76331),i=r(94675),l=r(21488),d=r(58576),u=r(12703);const h={id:"all-ca",title:"5.2.2.1. Root certificates"},p=void 0,k={},f=[...i.toc,...l.toc,...d.toc,...u.toc];function m(e){const t={blockquote:"blockquote",p:"p",strong:"strong",...(0,c.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Certificate Authority (CA)"})," is a trusted source that issues root certificates used to sign all other certificates within the Kubernetes cluster."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["CA certificates play a key role in establishing trust between components, ensuring ",(0,s.jsx)(t.strong,{children:"authentication"}),", ",(0,s.jsx)(t.strong,{children:"encryption"}),", and ",(0,s.jsx)(t.strong,{children:"integrity"})," of communications."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This section describes the process of obtaining root certificates that are used to sign the remaining certificates in the Kubernetes cluster."}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"phase",children:[(0,s.jsx)(a.A,{value:"init",label:"Init",children:(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Creating root certificates"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsxs)(o.A,{groupId:"CA",children:[(0,s.jsx)(a.A,{value:"Kubernetes CA",label:"Kubernetes CA",children:(0,s.jsxs)(r,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"Kubernetes CA"}),(0,s.jsx)(i.default,{})]})}),(0,s.jsx)(a.A,{value:"FrontProxy CA",label:"FrontProxy CA",children:(0,s.jsxs)(r,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"FrontProxy CA"}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(a.A,{value:"ETCD CA",label:"ETCD CA",children:(0,s.jsxs)(r,{open:!0,className:"custom-gray-block",children:[(0,s.jsx)("summary",{children:"ETCD CA"}),(0,s.jsx)(d.default,{})]})})]})]})}),(0,s.jsx)(a.A,{value:"join",label:"Join",children:(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Downloading existing CAs"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(u.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},12703(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCA","title":"downloadCA","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCA.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCA","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCA","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(18640),o=r(80303),i=r(9792),l=r(76331);const d={},u=void 0,h={},p=[...a.toc,...o.toc];function k(e){return(0,s.jsxs)(l.A,{groupId:"install-type",children:[(0,s.jsx)(i.A,{value:"HardWay",children:(0,s.jsx)(a.default,{})}),(0,s.jsx)(i.A,{value:"Kubeadm",children:(0,s.jsx)(o.default,{})})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},80303(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","title":"downloadCAKubeadmComponent","description":"This section depends on the following sections:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCAKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(44349),o=r(57390),i=r(60513);const l={},d=void 0,u={},h=[];function p(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/components/kubeadm/lifecycleSettings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)("h4",{children:"Manifest generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm join phase control-plane-prepare download-certs \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(o.A,{language:"bash",children:i.A`
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
`})})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},18640(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","title":"downloadCAOpensslComponent","description":"This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the Secret resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(57390),o=r(60513),i=r(44349);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the ",(0,s.jsx)(t.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle."]})}),"\n",(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(a.A,{language:"bash",children:o.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
`}),"\n",(0,s.jsx)("h4",{children:"Environment variables"}),"\n",(0,s.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,s.jsx)(t.p,{children:"In production environments, it is recommended to create a separate bootstrap token for each node.\nHowever, for demonstration purposes (and within this documentation), we have simplified the process and use a single shared token for all control plane nodes."})}),"\n",(0,s.jsx)(a.A,{language:"bash",children:o.A`
  export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  export KUBE_API_BOOTSTRAP_TOKEN=fjt9ex.lwzqgdlvoxtqk4yw
  export KUBE_API_SERVER=https://api.my-first-cluster.example.com:6443
`}),"\n",(0,s.jsx)(a.A,{language:"bash",children:o.A`
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

`}),"\n",(0,s.jsx)(a.A,{language:"bash",children:o.A`
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

`}),"\n",(0,s.jsx)("h4",{children:"Setting permissions"}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,s.jsx)("h4",{children:"Running the script"}),"\n",(0,s.jsx)(a.A,{language:"yaml",children:o.A`
  ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(a.A,{language:"yaml",children:o.A`
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
`})})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},86498(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(44349),o=r(57390),i=r(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs front-proxy-ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Create Front Proxy CA
  [certs] Generating "front-proxy-ca" certificate and key
`})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21488(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","title":"main","description":"Purpose: CA for the API aggregation mechanism (extension API servers). Signs the front-proxy-client certificate, which kube-apiserver uses when proxying requests to extended API servers (e.g., metrics-server, custom API servers).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(9792),o=r(76331),i=r(77707),l=r(86498);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," CA for the API aggregation mechanism (extension API servers). Signs the ",(0,s.jsx)(t.code,{children:"front-proxy-client"})," certificate, which kube-apiserver uses when proxying requests to extended API servers (e.g., metrics-server, custom API servers)."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this block describes only the process of creating ",(0,s.jsx)(t.code,{children:"Front Proxy CA"})," root certificates."]})}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},77707(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/frontProxyCA","slug":"/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/frontProxyCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(65742),o=r(44349),i=r(57390),l=r(60513);const d={},u=void 0,h={},p=[];function k(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl
      mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
  `}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
  `}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.frontProxyCA.keyPath} ${a.$.frontProxyCA.keySize}
  `}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.frontProxyCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.frontProxyCA.crtPath} \\
    -config ${a.$.frontProxyCA.crtConf}
  `}),"\n",(0,s.jsxs)(r,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness verification"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    ${o.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.frontProxyCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},27144(e,t,r){r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","title":"kubeadm","description":"Certificate generation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/kubeadm","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(44349),o=r(57390),i=r(60513);const l={},d=void 0,u={},h=[];function p(e){const t={admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Certificate generation"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:i.A`
  kubeadm init phase certs ca \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
  `}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"After executing the commands, we get the following output."}),(0,s.jsx)(o.A,{language:"bash",children:i.A`
  #### Create Kubernetes CA
  [certs] Generating "ca" certificate and key
  `})]})]})}function k(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94675(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","title":"main","description":"Purpose: Kubernetes root Certificate Authority (CA). Signs the server and client certificates for kube-apiserver, kubelet, kube-controller-manager, and kube-scheduler. All cluster components trust this CA for TLS connection verification.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/main","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(9792),o=r(76331),i=r(98841),l=r(27144);const d={},u=void 0,h={},p=[...i.toc,...l.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Purpose:"})," Kubernetes root Certificate Authority (CA). Signs the server and client certificates for kube-apiserver, kubelet, kube-controller-manager, and kube-scheduler. All cluster components trust this CA for TLS connection verification."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," this block describes only the process of creating ",(0,s.jsx)(t.code,{children:"Kubernetes CA"})," root certificates."]})}),"\n",(0,s.jsxs)(o.A,{groupId:"install-type",children:[(0,s.jsx)(a.A,{value:"HardWay",children:(0,s.jsx)(i.default,{})}),(0,s.jsx)(a.A,{value:"Kubeadm",children:(0,s.jsx)(l.default,{})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},98841(e,t,r){r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","title":"openssl","description":"Working directory","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority/kubernetesCA","slug":"/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/kubernetesCA/openssl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=r(74848),c=r(28453),a=r(65742),o=r(44349),i=r(57390),l=r(60513);const d={},u=void 0,h={},p=[];function k(e){const t={a:"a",admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Working directory"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${o.M.kubernetesBaseFolderPath.value}/pki
`}),"\n",(0,s.jsx)("h4",{children:"Configuration"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
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
`}),"\n",(0,s.jsx)("h4",{children:"Private key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl genrsa \\
    -out ${a.$.kubernetesCA.keyPath} ${a.$.kubernetesCA.keySize}
`}),"\n",(0,s.jsx)("h4",{children:"Public key generation"}),"\n",(0,s.jsx)(i.A,{language:"bash",children:l.A`
  openssl req \\
    -x509 \\
    -new \\
    -nodes \\
    -key ${a.$.kubernetesCA.keyPath} \\
    -sha256 \\
    -days 3650 \\
    -out ${a.$.kubernetesCA.crtPath} \\
    -config ${a.$.kubernetesCA.crtConf}
`}),"\n",(0,s.jsxs)(r,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"Certificate readiness verification"}),(0,s.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,s.jsx)(t.p,{children:"This section depends on the following sections:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent",children:"SSL Certificate Check"}),"."]}),"\n"]})]}),(0,s.jsx)(i.A,{language:"bash",children:l.A`
    ${o.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.$.kubernetesCA.crtPath}
  `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:l.A`
  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},65742(e,t,r){r.d(t,{$:()=>s});var n=r(44349);const s={etcdCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);