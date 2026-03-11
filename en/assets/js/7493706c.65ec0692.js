"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[8794],{28629(e,a,t){t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","title":"uploadCAComponent","description":"This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a Secret resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","permalink":"/en/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),r=t(28453),s=t(9792),o=t(76331),i=t(57390),d=t(60513),l=t(44349);const u={},p=void 0,h={},m=[];function b(e){const a={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.admonition,{title:"Note",type:"warning",children:(0,c.jsxs)(a.p,{children:["This section provides instructions for uploading root certificates to the Kubernetes control plane. The certificates are uploaded in encrypted form as a ",(0,c.jsx)(a.code,{children:"Secret"})," resource, which allows them to be securely transferred and decrypted on another node for managing the control plane node lifecycle."]})}),"\n",(0,c.jsxs)(o.A,{groupId:"install-type",children:[(0,c.jsxs)(s.A,{value:"HardWay",children:[(0,c.jsx)("h4",{children:"Environment variables for configuration file template"}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,c.jsx)("h4",{children:"Role model preparation"}),(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"This block prepares the role model for granting access to the kubeadm-certs secret. This is necessary so that control plane nodes can securely obtain root certificates through the Kubernetes API when joining the cluster. The role is bound to the ${AUTH_EXTRA_GROUPS} group, which kubeadm typically falls under during join."}),"\n"]}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
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
    `}),(0,c.jsx)("h4",{children:"Working directory"}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
      mkdir -p ${l.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,c.jsx)("h4",{children:"Environment variables"}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
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
    `}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
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
    `}),(0,c.jsx)("h4",{children:"Setting permissions"}),(0,c.jsx)(i.A,{language:"yaml",children:d.A`
      chmod +x ${l.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,c.jsx)("h4",{children:"Running the script"}),(0,c.jsx)(i.A,{language:"yaml",children:d.A`
      ${l.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,c.jsx)(a.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(i.A,{language:"yaml",children:d.A`
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
`})})]}),(0,c.jsxs)(s.A,{value:"Kubeadm",children:[(0,c.jsx)("h4",{children:"Uploading certificates"}),(0,c.jsx)(i.A,{language:"bash",children:d.A`
      kubeadm init phase  upload-certs \\
        --config=${l.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${l.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,c.jsx)(a.admonition,{type:"note",children:(0,c.jsx)(i.A,{language:"bash",children:d.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function y(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}}}]);