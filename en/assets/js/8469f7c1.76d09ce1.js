"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[529],{32189(e,t,r){r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>x,frontMatter:()=>d,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/kubernetes/certificates/authentication-dp","title":"5.3.2. Authentication","description":"This section describes authentication options for kubelet on worker nodes when connecting to a Kubernetes cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/authenticationDP.mdx","sourceDirName":"tech-docs/kubernetes/certificates","slug":"/tech-docs/kubernetes/certificates/authentication-dp","permalink":"/en/tech-docs/kubernetes/certificates/authentication-dp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"authentication-dp","title":"5.3.2. Authentication"},"sidebar":"techDocs","previous":{"title":"5.3.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/en/tech-docs/kubernetes/components/all-setup-dp"},"next":{"title":"5.3.3. Kubelet Start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start-dp"}}');var a=r(74848),s=r(28453),o=r(9792),l=r(76331),i=r(60513),c=r(57390),u=r(44349),h=r(65742);const d={id:"authentication-dp",title:"5.3.2. Authentication"},k=void 0,b={},p=[];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"This section describes authentication options for kubelet on worker nodes when connecting to a Kubernetes cluster.\nThe strategy depends on security requirements and the installation method."}),"\n"]}),"\n",(0,a.jsxs)(l.A,{groupId:"auth-strategy",children:[(0,a.jsxs)(o.A,{value:"bootstrap-token",label:"Bootstrap Token (Hard Way)",children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Manual creation of ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," using a bootstrap token.\nAfter starting, kubelet will automatically perform TLS Bootstrap: obtain a client certificate and create ",(0,a.jsx)(t.code,{children:"kubelet.conf"}),"."]}),"\n"]}),(0,a.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,a.jsxs)(t.p,{children:["This example uses a ",(0,a.jsx)(t.strong,{children:"static bootstrap token"})," for all worker nodes.\nIn production environments, it is recommended to ",(0,a.jsx)(t.strong,{children:"generate a unique token for each node"})," with a limited TTL."]})}),(0,a.jsx)("h3",{children:"Creating a bootstrap token"}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["A bootstrap token is a Secret in the ",(0,a.jsx)(t.code,{children:"kube-system"})," namespace that allows a new node to join the cluster.\nTwo methods for creating the token are shown below."]}),"\n"]}),(0,a.jsxs)(l.A,{groupId:"token-creation",children:[(0,a.jsxs)(o.A,{value:"manual",label:"Manual",children:[(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,a.jsxs)(t.p,{children:["The commands below must be executed on a ",(0,a.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to create Secrets in the ",(0,a.jsx)(t.code,{children:"kube-system"})," namespace."]})}),(0,a.jsx)("h4",{children:"Environment variables"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
          export AUTH_EXTRA_GROUPS="system:bootstrappers:kubeadm:default-node-token"
          export DESCRIPTION="kubeadm bootstrap token"
          export EXPIRATION=$(date -d '24 hours' "+%Y-%m-%dT%H:%M:%SZ")
          export TOKEN_ID="fjt9ex"
          export TOKEN_SECRET="lwzqgdlvoxtqk4yw"
          export USAGE_BOOTSTRAP_AUTHENTIFICATION="true"
          export USAGE_BOOTSTRAP_SIGNING="true"
        `}),(0,a.jsx)("h4",{children:"Create Secret"}),(0,a.jsx)(c.A,{children:i.A`
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
        `})]}),(0,a.jsxs)(o.A,{value:"kubeadm-token",label:"kubeadm token create",children:[(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,a.jsxs)(t.p,{children:["This command must be executed on a ",(0,a.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to manage bootstrap tokens."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
          kubeadm token create \\
            --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
            --print-join-command \\
            --ttl 24h
        `}),(0,a.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,a.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["The obtained token can be used when creating ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"})," or passed to the ",(0,a.jsx)(t.code,{children:"kubeadm join"})," configuration."]}),"\n"]})]})]}),(0,a.jsx)("h3",{children:"Creating bootstrap-kubelet.conf"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["All commands in this section are executed on the ",(0,a.jsx)(t.strong,{children:"worker node"}),".\nThe ",(0,a.jsx)(t.code,{children:"ca.crt"})," file is not yet present on the worker node. CA data is fetched from the public ",(0,a.jsx)(t.code,{children:"cluster-info"})," ConfigMap\nin the ",(0,a.jsx)(t.code,{children:"kube-public"})," namespace, accessible anonymously via kube-apiserver."]})}),(0,a.jsx)("h4",{children:"Environment variables"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      export BOOTSTRAP_TOKEN=${u.M.bootstrapToken.value}
      export API_SERVER="https://api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443"
    `}),(0,a.jsx)("h4",{children:"Working directory"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}
    `}),(0,a.jsx)("h4",{children:"Fetch CA from cluster-info"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      export CA_DATA=$(curl -sk "$\{API_SERVER}/api/v1/namespaces/kube-public/configmaps/cluster-info" | \\
        jq -r '.data.kubeconfig' | \\
        grep 'certificate-authority-data' | \\
        awk '{print $2}')
    `}),(0,a.jsx)("h4",{children:"Save CA certificate"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      mkdir -p ${u.M.kubernetesBaseFolderPath.value}/pki
      echo "$\{CA_DATA}" | base64 -d > ${u.M.kubernetesBaseFolderPath.value}/pki/ca.crt
    `}),(0,a.jsx)("h4",{children:"Generate kubeconfig"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
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
    `}),(0,a.jsx)("h3",{children:"Kubernetes CSR (TLS Bootstrap simulation)"}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["This approach simulates kubelet's TLS Bootstrap behavior:\nprivate keys are generated on the worker node, CSRs are submitted through the Kubernetes API\nusing ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),", and approval is performed by an administrator on the master node.\nThe CA private key is ",(0,a.jsx)(t.strong,{children:"not required"})," on the worker node."]}),"\n"]}),(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,a.jsx)("p",{style:{marginBottom:0},children:"Kubelet Client Certificate (CSR)"}),(0,a.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Purpose:"})," Kubelet client certificate for connecting to kube-apiserver."]}),"\n"]}),(0,a.jsx)("h4",{children:"1. Generate key and CSR"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["All commands in this step are executed on the ",(0,a.jsx)(t.strong,{children:"worker node"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
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
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        openssl genrsa \\
          -out ${h.$.kubeletClient.keyPath} ${h.$.kubeletClient.keySize}
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        openssl req -new \\
          -key ${h.$.kubeletClient.keyPath} \\
          -out ${h.$.kubeletClient.csrPath} \\
          -config ${h.$.kubeletClient.crtConf}
      `}),(0,a.jsx)("h4",{children:"2. Submit CSR to Kubernetes API"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["Worker node authenticates with the bootstrap token via ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
        export CSR_CONTENT=$(cat ${h.$.kubeletClient.csrPath} | base64 | tr -d '\\n')
      `}),(0,a.jsx)(c.A,{children:i.A`
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
      `}),(0,a.jsx)("h4",{children:"3. Approve CSR"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,a.jsxs)(t.p,{children:["CSR approval is performed on the ",(0,a.jsx)(t.strong,{children:"master node"}),". Specify the name of the worker node for which the CSR is being approved."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,a.jsx)("h4",{children:"4. Retrieve signed certificate"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["Certificate is retrieved on the ",(0,a.jsx)(t.strong,{children:"worker node"})," using ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-client"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${h.$.kubeletClient.crtPath}
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        cat ${h.$.kubeletClient.crtPath} ${h.$.kubeletClient.keyPath} > ${h.$.kubeletNowClient.crtPath}
        ln -sf ${h.$.kubeletNowClient.crtPath} ${h.$.kubeletCurrentClient.crtPath}
      `})]}),(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,a.jsx)("p",{style:{marginBottom:0},children:"Kubelet Server Certificate (CSR)"}),(0,a.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf Required"})]})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Purpose:"})," Kubelet server certificate for TLS on port 10250."]}),"\n"]}),(0,a.jsx)("h4",{children:"1. Generate key and CSR"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["All commands in this step are executed on the ",(0,a.jsx)(t.strong,{children:"worker node"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CLUSTER_NAME="${u.M.clusterName.value}"
        export BASE_DOMAIN="${u.M.kubernetesBaseDomain.value}"
        export FULL_HOST_NAME="${u.M.virtualMachineFullName.value}"
        export MACHINE_LOCAL_ADDRESS="${u.M.virtualMachineLocalAddress.value}"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        mkdir -p ${u.M.kuberneteKubeletFolderPath.value}/pki
        mkdir -p ${u.M.kubernetesBaseFolderPath.value}/openssl/csr
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
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
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        openssl genrsa \\
          -out ${h.$.kubeletServer.keyPath} ${h.$.kubeletServer.keySize}
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        openssl req -new \\
          -key ${h.$.kubeletServer.keyPath} \\
          -out ${h.$.kubeletServer.csrPath} \\
          -config ${h.$.kubeletServer.crtConf}
      `}),(0,a.jsx)("h4",{children:"2. Submit CSR to Kubernetes API"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["Worker node authenticates with the bootstrap token via ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
        export CSR_CONTENT=$(cat ${h.$.kubeletServer.csrPath} | base64 | tr -d '\\n')
      `}),(0,a.jsx)(c.A,{children:i.A`
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
      `}),(0,a.jsx)("h4",{children:"3. Approve CSR"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,a.jsxs)(t.p,{children:["CSR approval is performed on the ",(0,a.jsx)(t.strong,{children:"master node"}),". Specify the name of the worker node for which the CSR is being approved."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
          certificate approve $\{CSR_NAME}
      `}),(0,a.jsx)("h4",{children:"4. Retrieve signed certificate"}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Worker node",type:"info",children:(0,a.jsxs)(t.p,{children:["Certificate is retrieved on the ",(0,a.jsx)(t.strong,{children:"worker node"})," using ",(0,a.jsx)(t.code,{children:"bootstrap-kubelet.conf"}),"."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        export HOST_NAME=worker-1
        export CSR_NAME="$\{HOST_NAME}-kubelet-server"
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        kubectl \\
          --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf \\
          get csr $\{CSR_NAME} \\
          -o jsonpath='{.status.certificate}' | base64 -d > ${h.$.kubeletServer.crtPath}
      `}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
        cat ${h.$.kubeletServer.crtPath} ${h.$.kubeletServer.keyPath} > ${h.$.kubeletNowServer.crtPath}
        ln -sf ${h.$.kubeletNowServer.crtPath} ${h.$.kubeletCurrentServer.crtPath}
      `})]})]}),(0,a.jsxs)(o.A,{value:"kubeadm",label:"Kubeadm",children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["When using kubeadm, worker node authentication happens automatically during ",(0,a.jsx)(t.code,{children:"kubeadm join"}),".\nKubeadm uses the bootstrap token from the configuration to obtain cluster-info, start kubelet, and perform TLS Bootstrap."]}),"\n"]}),(0,a.jsx)("h3",{children:"Generating a token"}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If the token was not created in advance or has expired, generate a new one."}),"\n"]}),(0,a.jsx)(t.admonition,{title:"\ud83d\udda5\ufe0f Master node",type:"warning",children:(0,a.jsxs)(t.p,{children:["This command must be executed on a ",(0,a.jsx)(t.strong,{children:"master node"})," or on a host with a kubeconfig that has permissions to manage bootstrap tokens."]})}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm token create \\
        --kubeconfig=${u.M.kubernetesBaseFolderPath.value}/super-admin.conf \\
        --print-join-command \\
        --ttl 24h
    `}),(0,a.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,a.jsx)(c.A,{language:"bash",children:i.A`
  kubeadm join api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
    --token <generated-token> \\
    --discovery-token-ca-cert-hash sha256:<hash>
`})}),(0,a.jsx)("h3",{children:"Kubeadm configuration"}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Use the obtained token in the kubeadm configuration file or pass it via command-line arguments."}),"\n"]}),(0,a.jsxs)(t.admonition,{title:"Note",type:"warning",children:[(0,a.jsx)(t.p,{children:"This section depends on the following documents:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-setup-dp",children:"Software Config (DP)"})," \u2014 kubeadm configuration for the worker node."]}),"\n"]})]}),(0,a.jsx)("h4",{children:"Using a static config"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm join \\
        --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
    `}),(0,a.jsx)("h4",{children:"Using a token from command line"}),(0,a.jsx)(c.A,{language:"bash",children:i.A`
      kubeadm join \\
        api.${u.M.clusterName.value}.${u.M.kubernetesBaseDomain.value}:6443 \\
        --token <generated-token> \\
        --discovery-token-ca-cert-hash sha256:<hash>
    `})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},65742(e,t,r){r.d(t,{$:()=>a});var n=r(44349);const a={etcdCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${n.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${n.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${n.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${n.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);