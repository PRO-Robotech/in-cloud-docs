"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55406,60274,91253],{9792:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function o({children:e,hidden:t,className:a}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:t,children:e})}},28799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/all-ca","title":"5.2.4.4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0426\u0410","description":"","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCA.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","permalink":"/tech-docs/kubernetes/additional-setup/upload-ca/all-ca","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-ca"},"sidebar":"techDocs","previous":{"title":"5.2.4.3. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 CFG","permalink":"/tech-docs/kubernetes/additional-setup/upload-configs/all-configs"}}');var r=a(74848),s=a(28453),o=a(57555);const c={id:"all-ca"},l="5.2.4.4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0426\u0410",u={},i=[...o.toc];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"5244-\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430-\u0446\u0430",children:"5.2.4.4. \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0426\u0410"})}),"\n",(0,r.jsx)(o.default,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},57555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","title":"allUploadCAComponent","description":"\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 Kubernetes.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-ca/allUploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),s=a(28453),o=a(74155),c=a(9792),l=a(76331);const u={},i=void 0,d={},p=[...o.toc];function h(e){const t={blockquote:"blockquote",code:"code",p:"p",...(0,s.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u042d\u0442\u043e\u0442 \u0440\u0430\u0437\u0434\u0435\u043b \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440 Kubernetes.\n\u0421\u0435\u043a\u0440\u0435\u0442 kubeadm-certs \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u043b\u044e\u0447\u0438 \u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u0443\u0437\u043b\u043e\u0432 (",(0,r.jsx)(t.code,{children:"kubeadm join"}),").\n\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0436\u0434\u0443 \u0443\u0437\u043b\u0430\u043c\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."]}),"\n"]}),"\n",(0,r.jsx)(l.A,{groupId:"phase",children:(0,r.jsx)(c.A,{value:"init",children:(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsx)("p",{style:{marginBottom:0},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 Kubernetes"}),(0,r.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,r.jsx)(o.default,{})]})})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},74155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>n,toc:()=>b});const n=JSON.parse('{"id":"tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","title":"uploadCAComponent","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 Secret, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a.","source":"@site/docs/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent.mdx","sourceDirName":"tech-docs/kubernetes/additional-setup/upload-ca","slug":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","permalink":"/tech-docs/kubernetes/additional-setup/upload-ca/uploadCAComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=a(74848),s=a(28453),o=a(9792),c=a(76331),l=a(68747),u=a(60513),i=a(44349);const d={},p=void 0,h={},b=[];function m(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432 \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0443\u0440 Kubernetes. \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 ",(0,r.jsx)(t.code,{children:"Secret"}),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u043c \u0443\u0437\u043b\u0435 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u044b\u043c \u0446\u0438\u043a\u043b\u043e\u043c \u0443\u0437\u043b\u043e\u0432 \u0423\u041a."]})}),"\n",(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(o.A,{value:"HardWay",children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
    `}),(0,r.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0440\u043e\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043f\u043e\u0434\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u043e\u043b\u0435\u0432\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043b\u044f \u0432\u044b\u0434\u0430\u0447\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0435\u043a\u0440\u0435\u0442\u0443 kubeadm-certs. \u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043b\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043c\u043e\u0433\u043b\u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b \u0447\u0435\u0440\u0435\u0437 Kubernetes API \u043f\u0440\u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443. \u0420\u043e\u043b\u044c \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u0433\u0440\u0443\u043f\u043f\u043e\u0439 ${AUTH_EXTRA_GROUPS}, \u043f\u043e\u0434 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0434\u043f\u0430\u0434\u0430\u0435\u0442 kubeadm \u043f\u0440\u0438 join."}),"\n"]}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      kubectl \\
        --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf apply -f - <<EOF
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
    `}),(0,r.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      mkdir -p ${i.M.kubernetesBaseFolderPath.value}/openssl
    `}),(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      export CERTIFICATE_UPLOAD_KEY=0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    `}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      cat <<EOF > ${i.M.kubernetesBaseFolderPath.value}/openssl/encrypt.py
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

      # kubeadm ожидает: nonce + ciphertext (включая auth tag)
      payload = nonce + ct
      print(base64.b64encode(payload).decode())
      EOF
    `}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      cat <<'EOF' > ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
      #!/bin/bash
      set -euo pipefail

      CERT_PATH="${i.M.kubernetesBaseFolderPath.value}/pki"
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
    `}),(0,r.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,r.jsx)(l.A,{language:"yaml",children:u.A`
      chmod +x ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u043a\u0440\u0438\u043f\u0442\u0430"}),(0,r.jsx)(l.A,{language:"yaml",children:u.A`
      ${i.M.kubernetesBaseFolderPath.value}/openssl/upload-certs.sh
    `}),(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(l.A,{language:"yaml",children:u.A`
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
`})})]}),(0,r.jsxs)(o.A,{value:"Kubeadm",children:[(0,r.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432"}),(0,r.jsx)(l.A,{language:"bash",children:u.A`
      kubeadm init phase  upload-certs \\
        --config=${i.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
        --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --upload-certs
    `}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(l.A,{language:"bash",children:u.A`
  [upload-certs] Storing the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [upload-certs] Using certificate key:
  0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
`})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},76331:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(96540),r=a(34164),s=a(23104),o=a(56347),c=a(205),l=a(57485),u=a(31682),i=a(70679);function d(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n}))}(a);return function(e){const t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}function h({value:e,tabValues:t}){return t.some(t=>t.value===e)}function b({queryString:e=!1,groupId:t}){const a=(0,o.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l.aZ)(r),(0,n.useCallback)(e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})},[r,a])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,n.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find(e=>e.default)??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s})),[u,d]=b({queryString:a,groupId:r}),[m,f]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,r]=(0,i.Dv)(t);return[a,(0,n.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),k=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,c.A)(()=>{k&&l(k)},[k]);return{selectedValue:o,selectValue:(0,n.useCallback)(e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)},[d,f,s]),tabValues:s}}var f=a(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function g({className:e,block:t,selectedValue:a,selectValue:n,tabValues:o}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=o[r].value;s!==a&&(l(t),n(s))},i=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e),children:o.map(({value:e,label:t,attributes:n})=>(0,y.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{c.push(e)},onKeyDown:i,onClick:u,...n,className:(0,r.A)("tabs__item",k.tabItem,n?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function x({lazy:e,children:t,selectedValue:a}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function A(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",k.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function E(e){const t=(0,f.A)();return(0,y.jsx)(A,{...e,children:d(e.children)},String(t))}}}]);