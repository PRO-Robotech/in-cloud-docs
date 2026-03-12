"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[6019,8794],{56646(e,t,a){a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/all-ca","title":"5.2.4.4. CA upload","description":"This section covers uploading root certificates to the Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-ca","title":"5.2.4.4. CA upload"},"sidebar":"techDocs","previous":{"title":"5.2.4.3. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 CFG","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-configs/all-configs"},"next":{"title":"5.3.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/en/tech-docs/kubernetes/setup-environments/os-setup-dp"}}');var s=a(74848),o=a(28453),c=a(28629),r=a(9792),i=a(76331);const d={id:"all-ca",title:"5.2.4.4. CA upload"},l=void 0,u={},p=[...c.toc];function h(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["This section covers uploading root certificates to the Kubernetes cluster.\nThe kubeadm-certs secret is created manually and contains the keys and certificates required when adding new control plane nodes (",(0,s.jsx)(t.code,{children:"kubeadm join"}),").\nThis approach allows sensitive data to be securely transferred between control plane nodes."]}),"\n"]}),"\n",(0,s.jsx)(i.A,{groupId:"phase",children:(0,s.jsx)(r.A,{value:"init",label:"Init",children:(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Uploading root certificates to Kubernetes"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,s.jsx)(c.default,{})]})})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28629(e,t,a){a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","title":"uploadCAComponent","description":"This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a Secret resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=a(74848),o=a(28453),c=a(9792),r=a(76331),i=a(57390),d=a(60513),l=a(44349);const u={},p=void 0,h={},b=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(t.p,{children:["This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a ",(0,s.jsx)(t.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle."]})}),"\n",(0,s.jsxs)(r.A,{groupId:"install-type",children:[(0,s.jsxs)(c.A,{value:"HardWay",children:[(0,s.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,s.jsx)("h4",{children:"Role model preparation"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"This block prepares the role model for granting access to the kubeadm-certs secret. This is necessary so that control plane nodes can securely obtain root certificates through the Kubernetes API when joining the cluster. The role is bound to the ${AUTH_EXTRA_GROUPS} group, which kubeadm typically falls under during join."}),"\n"]}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      kubectl \\
        --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,s.jsx)("h4",{children:"Working directory"}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      cat <<EOF > ${l.M.kubernetesBaseFolderPath.value}/openssl/encrypt.py
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
    `}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      cat <<'EOF' > ${l.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${l.M.kubernetesBaseFolderPath.value}/pki"
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
    `}),(0,s.jsx)("h4",{children:"Setting permissions"}),(0,s.jsx)(i.A,{language:"yaml",children:d.A`
      chmod +x ${l.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,s.jsx)("h4",{children:"Running the script"}),(0,s.jsx)(i.A,{language:"yaml",children:d.A`
      ${l.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,s.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,s.jsx)(i.A,{language:"yaml",children:d.A`
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
`})})]}),(0,s.jsxs)(c.A,{value:"Kubeadm",children:[(0,s.jsx)("h4",{children:"Uploading certificates"}),(0,s.jsx)(i.A,{language:"bash",children:d.A`
      kubeadm init phase  upload-certs \\
        --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:d.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);