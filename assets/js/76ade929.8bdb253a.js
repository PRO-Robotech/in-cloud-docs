"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[4114],{57266(e,t,r){r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>$,frontMatter:()=>k,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/certificates/authentication-dp","title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f","description":"\u041d\u0438\u0436\u0435 \u0434\u0432\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f worker-\u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443.","source":"@site/docs/tech-docs/kubernetes/certificates/authenticationDP.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/authentication-dp","permalink":"/tech-docs/kubernetes/certificates/authentication-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"authentication-dp","title":"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},"sidebar":"techDocs","previous":{"title":"5.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/tech-docs/kubernetes/components/all-setup-dp"},"next":{"title":"5.3.3. Kubelet Start","permalink":"/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp"}}');var s=r(74848),n=r(28453),l=r(9792),o=r(76331),c=r(60513),i=r(57390),u=r(44349),h=r(65742);const k={id:"authentication-dp",title:"5.3.2. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},d=void 0,b={},p=[];function x(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,n.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u0434\u0432\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f worker-\u043d\u043e\u0434\u044b \u043a \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0443.\n\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u0434 bootstrap-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c, \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,s.jsx)(t.code,{children:"kubeadm join"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.A,{groupId:"auth-strategy",children:[(0,s.jsxs)(l.A,{value:"bootstrap-token",label:"Bootstrap Token (Hard Way)",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u042d\u0442\u043e \u0440\u0443\u0447\u043d\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439: \u0441\u043e\u0437\u0434\u0430\u0435\u043c ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),", \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c kubelet \u0438 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u0430\u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c CSR\n\u0447\u0435\u0440\u0435\u0437 Kubernetes API.\n\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0435\u0441\u044c \u043f\u0443\u0442\u044c TLS Bootstrap \u0431\u0435\u0437 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0438 ",(0,s.jsx)(t.code,{children:"kubeadm"}),"."]}),"\n"]}),(0,s.jsx)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"danger",children:(0,s.jsxs)(t.p,{children:["\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0438\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,s.jsx)(t.strong,{children:"\u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 bootstrap-\u0442\u043e\u043a\u0435\u043d"})," \u0434\u043b\u044f \u0432\u0441\u0435\u0445 worker-\u0443\u0437\u043b\u043e\u0432.\n\u0414\u043b\u044f production-\u0441\u0440\u0435\u0434\u044b \u043b\u0443\u0447\u0448\u0435 \u0432\u044b\u043f\u0443\u0441\u043a\u0430\u0442\u044c ",(0,s.jsx)(t.strong,{children:"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u043e\u0434\u0443"})," \u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0435\u043c\u0443 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0439 \u0441\u0440\u043e\u043a \u0436\u0438\u0437\u043d\u0438."]})}),(0,s.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Bootstrap-\u0442\u043e\u043a\u0435\u043d \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 Secret \u0432 namespace ",(0,s.jsx)(t.code,{children:"kube-system"})," \u0438 \u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u043e\u0439 \u043d\u043e\u0434\u0435 \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0447\u0430\u0442\u044c bootstrap-\u043f\u0440\u043e\u0446\u0435\u0441\u0441.\n\u041d\u0438\u0436\u0435 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c."]}),"\n"]}),(0,s.jsxs)(o.A,{groupId:"token-creation",children:[(0,s.jsxs)(l.A,{value:"manual",label:"\u0412\u0440\u0443\u0447\u043d\u0443\u044e",children:[(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0438\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Secret \u0432 namespace ",(0,s.jsx)(t.code,{children:"kube-system"}),"."]})}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
        `}),(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 Secret"}),(0,s.jsx)(i.A,{children:c.A`
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
        `})]}),(0,s.jsxs)(l.A,{value:"kubeadm-token",label:"kubeadm token create",children:[(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
          kubeadm token create \\
            --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
            --print-join-command \\
            --ttl 24h
        `}),(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e ",(0,s.jsx)(t.code,{children:"kubeadm join"}),"."]}),"\n"]})]})]}),(0,s.jsx)("h3",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 bootstrap-kubelet.conf"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),".\n\u041d\u0430 worker-\u043d\u043e\u0434\u0435 \u0444\u0430\u0439\u043b ",(0,s.jsx)(t.code,{children:"ca.crt"})," \u0435\u0449\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. CA-\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0438\u0437 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e ConfigMap ",(0,s.jsx)(t.code,{children:"cluster-info"}),"\n\u0432 namespace ",(0,s.jsx)(t.code,{children:"kube-public"}),", \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 kube-apiserver."]})}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      export BOOTSTRAP_TOKEN=${u.M.bootstrapToken.value}
      export API_SERVER="https://api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443"
    `}),(0,s.jsx)("h4",{children:"\u0420\u0430\u0431\u043e\u0447\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}
    `}),(0,s.jsx)("h4",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 CA \u0438\u0437 cluster-info"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      export CA_DATA=$(curl -sk "$\{API_SERVER}/api/v1/namespaces/kube-public/configmaps/cluster-info" | \\
        jq -r '.data.kubeconfig' | \\
        grep 'certificate-authority-data' | \\
        awk '{print $2}')
    `}),(0,s.jsx)("h4",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 CA-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}/pki
      echo "$\{CA_DATA}" | base64 -d > ${u.M.kubernetesBaseFolderPath.value}/pki/ca.crt
    `}),(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f kubeconfig"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
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
    `}),(0,s.jsx)("h3",{children:"Kubernetes CSR (\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u044f TLS Bootstrap)"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u0442\u043e\u0442 \u0436\u0435 \u043f\u043e\u0442\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 kubelet \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\u0430\u043c \u0432\u043e \u0432\u0440\u0435\u043c\u044f TLS Bootstrap:\n\u043a\u043b\u044e\u0447\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043d\u0430 worker-\u043d\u043e\u0434\u0435, CSR \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Kubernetes API,\n\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u044c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043d\u0430 \u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435.\n\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 CA \u043d\u0430 worker-\u043d\u043e\u0434\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e ",(0,s.jsx)(t.strong,{children:"\u043d\u0435 \u043d\u0443\u0436\u0435\u043d"}),"."]}),"\n"]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet Client Certificate (CSR)"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a kube-apiserver."]}),"\n"]}),(0,s.jsx)("h4",{children:"1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0438 CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        cat <<EOF > ${h.$.kubeletClient.crtConf}
        [ req ]
        default_bits        = ${h.$.kubeletClient.keySize}
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
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        openssl genrsa \\
          -out ${h.$.kubeletClient.keyPath} ${h.$.kubeletClient.keySize}
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        openssl req -new \\
          -key ${h.$.kubeletClient.keyPath} \\
          -out ${h.$.kubeletClient.csrPath} \\
          -config ${h.$.kubeletClient.crtConf}
      `}),(0,s.jsx)("h4",{children:"2. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 CSR \u0432 Kubernetes API"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["Worker-\u043d\u043e\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f bootstrap-\u0442\u043e\u043a\u0435\u043d\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
        export CSR_CONTENT=$(cat ${h.$.kubeletClient.csrPath} | base64 | tr -d '\\n')
      `}),(0,s.jsx)(i.A,{children:c.A`
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
      `}),(0,s.jsx)("h4",{children:"3. \u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"}),". \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f worker-\u043d\u043e\u0434\u044b, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f CSR."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,s.jsx)("h4",{children:"4. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${h.$.kubeletClient.crtPath}
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        cat ${h.$.kubeletClient.crtPath} ${h.$.kubeletClient.keyPath} > ${h.$.kubeletNowClient.crtPath}
        ln -sf ${h.$.kubeletNowClient.crtPath} ${h.$.kubeletCurrentClient.crtPath}
      `})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"Kubelet Server Certificate (CSR)"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"})," \u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 kubelet \u0434\u043b\u044f TLS \u043d\u0430 \u043f\u043e\u0440\u0442\u0443 10250."]}),"\n"]}),(0,s.jsx)("h4",{children:"1. \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0438 CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["\u0412\u0441\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
        export MACHINE_LOCAL_ADDRESS="${u.M.virtualMachineLocalAddress.value}"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        cat <<EOF > ${h.$.kubeletServer.crtConf}
        [ req ]
        default_bits        = ${h.$.kubeletServer.keySize}
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
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        openssl genrsa \\
          -out ${h.$.kubeletServer.keyPath} ${h.$.kubeletServer.keySize}
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        openssl req -new \\
          -key ${h.$.kubeletServer.keyPath} \\
          -out ${h.$.kubeletServer.csrPath} \\
          -config ${h.$.kubeletServer.crtConf}
      `}),(0,s.jsx)("h4",{children:"2. \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 CSR \u0432 Kubernetes API"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["Worker-\u043d\u043e\u0434\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f bootstrap-\u0442\u043e\u043a\u0435\u043d\u043e\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
        export CSR_CONTENT=$(cat ${h.$.kubeletServer.csrPath} | base64 | tr -d '\\n')
      `}),(0,s.jsx)(i.A,{children:c.A`
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
      `}),(0,s.jsx)("h4",{children:"3. \u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 CSR \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"}),". \u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f worker-\u043d\u043e\u0434\u044b, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f CSR."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,s.jsx)("h4",{children:"4. \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker-\u043d\u043e\u0434\u0430",type:"info",children:(0,s.jsxs)(t.p,{children:["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"worker-\u043d\u043e\u0434\u0435"})," \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,s.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${h.$.kubeletServer.crtPath}
      `}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
        cat ${h.$.kubeletServer.crtPath} ${h.$.kubeletServer.keyPath} > ${h.$.kubeletNowServer.crtPath}
        ln -sf ${h.$.kubeletNowServer.crtPath} ${h.$.kubeletCurrentServer.crtPath}
      `})]})]}),(0,s.jsxs)(l.A,{value:"kubeadm",label:"Kubeadm",children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 ",(0,s.jsx)(t.code,{children:"kubeadm join"}),": \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,s.jsx)(t.code,{children:"cluster-info"}),", \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 kubelet \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 TLS Bootstrap.\n\u042d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0431\u043b\u0438\u0437\u043a\u0438\u0439 \u043a \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043f\u0443\u0442\u044c."]}),"\n"]}),(0,s.jsx)("h3",{children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u0415\u0441\u043b\u0438 \u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0438\u043b\u0438 \u0438\u0441\u0442\u0435\u043a, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439."}),"\n"]}),(0,s.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f \u041c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0430",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(t.strong,{children:"\u043c\u0430\u0441\u0442\u0435\u0440-\u043d\u043e\u0434\u0435"})," \u0438\u043b\u0438 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u0441 kubeconfig, \u0438\u043c\u0435\u044e\u0449\u0438\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 bootstrap-\u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438."]})}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      kubeadm token create \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --print-join-command \\
        --ttl 24h
    `}),(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(i.A,{language:"bash",children:c.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,s.jsx)("h3",{children:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f kubeadm"}),(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433 ",(0,s.jsx)(t.code,{children:"kubeadm"})," \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0440\u044f\u043c\u043e \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435."]}),"\n"]}),(0,s.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:(0,s.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432 \u0444\u0430\u0439\u043b ",(0,s.jsx)(t.code,{children:"kubeadm.yaml"})," \u0438\u0437 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\n",(0,s.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e (DP)"}),"."]})}),(0,s.jsx)("h4",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0430"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      kubeadm join \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,s.jsx)("h4",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"}),(0,s.jsx)(i.A,{language:"bash",children:c.A`
      kubeadm join \\
        api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
        --token <generated-token> \\
        --discovery-token-ca-cert-hash sha256:<hash>
    `})]})]})]})}function $(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},65742(e,t,r){r.d(t,{$:()=>s});var a=r(44349);const s={etcdCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${a.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${a.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${a.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${a.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);