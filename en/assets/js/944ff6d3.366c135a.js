"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[4657],{18640(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","title":"downloadCAOpensslComponent","description":"This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the Secret resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/center-authority","slug":"/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/center-authority/downloadCAOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),a=n(28453),o=n(57390),s=n(60513),i=n(44349);const d={},p=void 0,l={},h=[];function u(e){const t={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,c.jsxs)(t.p,{children:["This section provides instructions for downloading root certificates from the Kubernetes control plane. The certificates are downloaded in encrypted form from the ",(0,c.jsx)(t.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on the node for managing the control plane node lifecycle."]})}),"\n",(0,c.jsx)("h4",{children:"Working directory"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:s.A`
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki
  mkdir -p ${i.M.kubernetesBaseFolderPath.value}/pki/etcd
`}),"\n",(0,c.jsx)("h4",{children:"Environment variables"}),"\n",(0,c.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,c.jsx)(t.p,{children:"In production environments, it is recommended to create a separate bootstrap token for each node.\nHowever, for demonstration purposes (and within this documentation), we have simplified the process and use a single shared token for all control plane nodes."})}),"\n",(0,c.jsx)(o.A,{language:"bash",children:s.A`
  export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
  export KUBE_API_BOOTSTRAP_TOKEN=fjt9ex.lwzqgdlvoxtqk4yw
  export KUBE_API_SERVER=https://api.my-first-cluster.example.com:6443
`}),"\n",(0,c.jsx)(o.A,{language:"bash",children:s.A`
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

`}),"\n",(0,c.jsx)(o.A,{language:"bash",children:s.A`
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

`}),"\n",(0,c.jsx)("h4",{children:"Setting permissions"}),"\n",(0,c.jsx)(o.A,{language:"yaml",children:s.A`
  chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,c.jsx)("h4",{children:"Running the script"}),"\n",(0,c.jsx)(o.A,{language:"yaml",children:s.A`
  ${i.M.kubernetesBaseFolderPath.value}/openssl/download-certs.sh
`}),"\n",(0,c.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(o.A,{language:"yaml",children:s.A`
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
`})})]})}function y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}}}]);