"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5012],{78095(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tech-docs/kubernetes/k8s-join","title":"5.2.3.2. Expansion","description":"This command performs the expansion of a Kubernetes cluster, including the creation of necessary manifests, certificates, configuration files, starting services, as well as monitoring the cluster state and its post-processing.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/kubernetesJoin.mdx","sourceDirName":"tech-docs/kubernetes","slug":"/tech-docs/kubernetes/k8s-join","permalink":"/en/tech-docs/kubernetes/k8s-join","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"k8s-join"},"sidebar":"techDocs","previous":{"title":"5.2.3.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/k8s-init"},"next":{"title":"5.2.3.3. Kubelet Start","permalink":"/en/tech-docs/kubernetes/components/kubelet/all-kubelet-start"}}');var r=n(74848),s=n(28453),o=(n(9792),n(76331),n(57390)),c=n(60513),a=n(44349);const l={id:"k8s-join"},d="5.2.3.2. Expansion",u={},h=[];function f(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"5232-expansion",children:"5.2.3.2. Expansion"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This command performs the expansion of a Kubernetes cluster, including the creation of necessary manifests, certificates, configuration files, starting services, as well as monitoring the cluster state and its post-processing."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,r.jsxs)(t.p,{children:["A pre-prepared ",(0,r.jsx)(t.code,{children:"kubeadm"})," configuration file with a pre-specified token for future master nodes is used for cluster expansion, which simplifies the installation. In production environments, it is recommended to generate a unique token for each node with a limited lifetime for enhanced security."]})}),"\n",(0,r.jsx)(t.p,{children:"This command includes the following sections:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-components-ready",children:"Node readiness check"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/center-authority/all-ca",children:"CA Download"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/components/all-certificates",children:"Certificate Generation"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/certificates/components/all-kubeconfigs",children:"Kubeconfig Generation"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/all-static-pods-cp",children:"Control plane manifest generation"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubelet/all-kubelet-start",children:"Kubelet Start"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/etcd/components/etcd/setup-join-component",children:"etcd Expansion"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/additional-setup/marking/all-marking",children:"Node marking"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This command adds a master node to the Kubernetes cluster, including the creation of necessary manifests, certificates, configuration files, starting services, and adding the node to the etcd cluster."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,r.jsxs)(t.p,{children:["Note: a pre-prepared ",(0,r.jsx)(t.code,{children:"kubeadm"})," configuration file with a pre-specified token is used for node expansion. In production environments, it is recommended to generate a unique token for each node with a limited lifetime for enhanced security."]})}),"\n",(0,r.jsx)(o.A,{language:"bash",children:c.A`
  kubeadm join \\
    --config=${a.M.kubeadmBaseConfigPath.value}/kubeadm.yaml \\
    --kubeconfig=${a.M.kubernetesBaseFolderPath.value}/super-admin.conf
`}),"\n",(0,r.jsx)(t.admonition,{title:"Command output",type:"note",children:(0,r.jsx)(o.A,{language:"bash",children:c.A`
  [preflight] Running pre-flight checks
  [preflight] Reading configuration from the cluster...
  [preflight] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'
  W0221 22:27:30.974959    1886 configset.go:78] Warning: No kubeproxy.config.k8s.io/v1alpha1 config is loaded. Continuing without it: configmaps "kube-proxy" is forbidden: User "system:bootstrap:fjt9ex" cannot get resource "configmaps" in API group "" in the namespace "kube-system"
  [preflight] Running pre-flight checks before initializing the new control plane instance
  [preflight] Pulling images required for setting up a Kubernetes cluster
  [preflight] This might take a minute or two, depending on the speed of your internet connection
  [preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
  [download-certs] Downloading the certificates in Secret "kubeadm-certs" in the "kube-system" Namespace
  [download-certs] Saving the certificates to the folder: "/etc/kubernetes/pki"
  [certs] Using certificateDir folder "/etc/kubernetes/pki"
  [certs] Generating "apiserver" certificate and key
  [certs] apiserver serving cert is signed for DNS names [api.my-first-cluster.example.com kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.my-first-cluster.example.com master-2.my-first-cluster.example.com] and IPs [29.64.0.1 83.222.26.71 31.129.111.153 127.0.0.1]
  [certs] Generating "apiserver-kubelet-client" certificate and key
  [certs] Generating "etcd/server" certificate and key
  [certs] etcd/server serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-2.my-first-cluster.example.com] and IPs [83.222.26.71 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/peer" certificate and key
  [certs] etcd/peer serving cert is signed for DNS names [localhost master-1.my-first-cluster.example.com master-2.my-first-cluster.example.com] and IPs [83.222.26.71 127.0.0.1 ::1 31.129.111.153]
  [certs] Generating "etcd/healthcheck-client" certificate and key
  [certs] Generating "apiserver-etcd-client" certificate and key
  [certs] Generating "front-proxy-client" certificate and key
  [certs] Valid certificates and keys now exist in "/etc/kubernetes/pki"
  [certs] Using the existing "sa" key
  [kubeconfig] Generating kubeconfig files
  [kubeconfig] Using kubeconfig folder "/etc/kubernetes"
  [kubeconfig] Writing "admin.conf" kubeconfig file
  [kubeconfig] Writing "controller-manager.conf" kubeconfig file
  [kubeconfig] Writing "scheduler.conf" kubeconfig file
  [control-plane] Using manifest folder "/etc/kubernetes/manifests"
  [control-plane] Creating static Pod manifest for "kube-apiserver"
  [control-plane] Creating static Pod manifest for "kube-controller-manager"
  [control-plane] Creating static Pod manifest for "kube-scheduler"
  [check-etcd] Checking that the etcd cluster is healthy
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Starting the kubelet
  [kubelet-check] Waiting for a healthy kubelet at http://127.0.0.1:10248/healthz. This can take up to 4m0s
  [kubelet-check] The kubelet is healthy after 502.189678ms
  [kubelet-start] Waiting for the kubelet to perform the TLS Bootstrap
  [etcd] Announced new etcd member joining to the existing etcd cluster
  [etcd] Creating static Pod manifest for "etcd"
  {"level":"warn","ts":"2025-02-21T22:27:55.448925Z","logger":"etcd-client","caller":"v3@v3.5.10/retry_interceptor.go:62","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc000ab8c40/31.129.111.153:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
  {"level":"warn","ts":"2025-02-21T22:27:55.949698Z","logger":"etcd-client","caller":"v3@v3.5.10/retry_interceptor.go:62","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc000ab8c40/31.129.111.153:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
  {"level":"warn","ts":"2025-02-21T22:27:56.476514Z","logger":"etcd-client","caller":"v3@v3.5.10/retry_interceptor.go:62","msg":"retrying of unary invoker failed","target":"etcd-endpoints://0xc000ab8c40/31.129.111.153:2379","attempt":0,"error":"rpc error: code = FailedPrecondition desc = etcdserver: can only promote a learner member which is in sync with leader"}
  [etcd] Waiting for the new etcd member to join the cluster. This can take up to 40s

  The 'update-status' phase is deprecated and will be removed in a future release. Currently it performs no operation
  [mark-control-plane] Marking the node master-2.my-first-cluster.example.com as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
  [mark-control-plane] Marking the node master-2.my-first-cluster.example.com as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]

  This node has joined the cluster and a new control plane instance was created:
  * Certificate signing request was sent to apiserver and approval was received.
  * The Kubelet was informed of the new secure connection details.
  * Control plane label and taint were applied to the new node.
  * The Kubernetes control plane instances scaled up.
  * A new etcd member was added to the local/stacked etcd cluster.

  To start administering your cluster from this node, you need to run the following as a regular user:
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config

  Run 'kubectl get nodes' to see this node join the cluster.
`})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}}}]);