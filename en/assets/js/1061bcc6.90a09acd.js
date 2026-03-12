"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[7693],{85184(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>f});const i=JSON.parse('{"id":"tech-docs/kubernetes/k8s-init","title":"5.2.3.1. Initialization","description":"This command performs the initialization of a Kubernetes cluster, including the creation of necessary manifests, certificates, configuration files, starting services, as well as monitoring the cluster state and its post-processing.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/kubernetesInit.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/k8s-init","permalink":"/en/tech-docs/kubernetes/k8s-init","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"k8s-init"},"sidebar":"techDocs","previous":{"title":"5.2.2.5. \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430","permalink":"/en/tech-docs/kubernetes/certificates/examination/all-examination"},"next":{"title":"5.2.3.2. \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435","permalink":"/en/tech-docs/kubernetes/k8s-join"}}');var o=n(74848),r=n(28453),a=n(57390),s=n(60513),c=n(44349);const l={id:"k8s-init"},u="5.2.3.1. Initialization",d={},f=[];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"5231-initialization",children:"5.2.3.1. Initialization"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"This command performs the initialization of a Kubernetes cluster, including the creation of necessary manifests, certificates, configuration files, starting services, as well as monitoring the cluster state and its post-processing."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,o.jsxs)(t.p,{children:["A pre-prepared ",(0,o.jsx)(t.code,{children:"kubeadm"})," configuration file with a pre-specified token for future master nodes is used for cluster initialization, which simplifies the installation. In production environments, it is recommended to generate a unique token for each node with a limited lifetime for enhanced security."]})}),"\n",(0,o.jsx)(t.p,{children:"This command incorporates the following sections:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-components-ready",children:"Node readiness check"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Generation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/components/all-certificates",children:"Certificate Generation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/components/all-kubeconfigs",children:"Kubeconfig Generation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-static-pods-cp",children:"Control plane manifest generation"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/all-kubelet-start",children:"Kubelet Start"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/additional-setup/upload-configs/all-configs",children:"Uploading configuration files to kubernetes"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/additional-setup/upload-ca/all-ca",children:"Uploading root certificates to kubernetes"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/additional-setup/marking/all-marking",children:"Node marking"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/tech-docs/kubernetes/additional-setup/upload-rbac/all-rbac",children:"Creating tokens for joining and role model"}),"."]}),"\n"]}),"\n",(0,o.jsx)(a.A,{language:"bash",children:s.A`
  kubeadm init \\
    --config=${c.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
    --upload-certs
`}),"\n",(0,o.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,o.jsx)(a.A,{language:"bash",children:s.A`
    [init] Using Kubernetes version: v1.30.4
    [preflight] Running pre-flight checks
    [preflight] Pulling images required for setting up a Kubernetes cluster
    [preflight] This might take a minute or two, depending on the speed of your internet connection
    [preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
    [certs] Using certificateDir folder "/etc/kubernetes/pki"
    [certs] Generating "ca" certificate and key
    [certs] Generating "apiserver" certificate and key
    [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com master-1.my-first-cluster.example.com] and IPs [29.64.0.1 212.67.15.21 127.0.0.1]
    [certs] Generating "apiserver-kubelet-client" certificate and key
    [certs] Generating "front-proxy-ca" certificate and key
    [certs] Generating "front-proxy-client" certificate and key
    [certs] Generating "etcd/ca" certificate and key
    [certs] Generating "etcd/server" certificate and key
    [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [212.67.15.21 127.0.0.1 ::1]
    [certs] Generating "etcd/peer" certificate and key
    [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com] and IPs [212.67.15.21 127.0.0.1 ::1]
    [certs] Generating "etcd/healthcheck-client" certificate and key
    [certs] Generating "apiserver-etcd-client" certificate and key
    [certs] Generating "sa" key and public key
    [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
    [kubeconfig] Writing "admin.conf" kubeconfig file
    [kubeconfig] Writing "super-admin.conf" kubeconfig file
    [kubeconfig] Writing "kubelet.conf" kubeconfig file
    [kubeconfig] Writing "controller-manager.conf" kubeconfig file
    [kubeconfig] Writing "scheduler.conf" kubeconfig file
    [etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
    [control-plane] Using manifest folder "/etc/kubernetes/manifests"
    [control-plane] Creating static Pod manifest for "kube-apiserver"
    [control-plane] Creating static Pod manifest for "kube-controller-manager"
    [control-plane] Creating static Pod manifest for "kube-scheduler"
    [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
    [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
    [kubelet-start] Starting the kubelet
    [wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests"
    [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
    [kubelet-check] The kubelet is healthy after 502.403608ms
    [api-check] Waiting for a healthy API server. This can take up to 4m0s
    [api-check] The API server is healthy after 4.502395295s
    [upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
    [kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
    [upload-certs] Storing the ./certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
    [upload-certs] Using certificate key: 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59
    [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
    [mark-control-plane] Marking the node master-1.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
    [bootstrap-token] Using token: ${c.M.bootstrapToken.value}
    [bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
    [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
    [bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
    [bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
    [bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client ./certificates in the cluster
    [bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
    [kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key

    Your Kubernetes control-plane has initialized successfully!

    To start using your cluster, you need to run the following as a regular user:

      mkdir -p $HOME/.kube
      sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
      sudo chown $(id -u):$(id -g) $HOME/.kube/config

    Alternatively, if you are the root user, you can run:

      export KUBECONFIG=/etc/kubernetes/admin.conf

    You should now deploy a pod network to the cluster.
    Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
      https://kubernetes.io/docs/concepts/cluster-administration/addons/

    You can now join any number of control-plane nodes by copying certificate authorities
    and service account keys on each node and then running the following as root:

      kubeadm join api.my-first-cluster.example.com:6443 --token ${c.M.bootstrapToken.value} \\
      --discovery-token-ca-cert-hash sha256:d0a2cf44fc8c8f4e5b9b021243434d303e1dc690b51a23efed0ba056647c87f6 \\
      --control-plane --certificate-key 0c00c2fd5c67c37656c00d78a9d7e1f2eb794ef8e4fc3e2a4b532eb14323cd59

    Then you can join any number of worker nodes by running the following on each as root:

    kubeadm join api.my-first-cluster.example.com:6443 --token ${c.M.bootstrapToken.value} \\
      --discovery-token-ca-cert-hash sha256:d0a2cf44fc8c8f4e5b9b021243434d303e1dc690b51a23efed0ba056647c87f6
  `})})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);