"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[7377],{68601(e,n,t){t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/troubleshooting/alias","title":"5.1.5.2. Aliases","description":"This section will be useful for optimizing connection requests. Let\'s look at several options for connecting to the ETCD cluster.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/troubleshooting/alias.mdx","sourceDirName":"tech-docs/etcd/troubleshooting","slug":"/tech-docs/etcd/troubleshooting/alias","permalink":"/en/tech-docs/etcd/troubleshooting/alias","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"alias","toc_min_heading_level":2,"toc_max_heading_level":2},"sidebar":"techDocs","previous":{"title":"5.1.5.1. \u0427\u0435\u043a \u0431\u043e\u043a\u0441\u044b","permalink":"/en/tech-docs/etcd/troubleshooting/check-box"},"next":{"title":"5.1.5.3. \u041a\u043e\u043c\u0430\u043d\u0434\u044b","permalink":"/en/tech-docs/etcd/troubleshooting/commands"}}');var s=t(74848),a=t(28453),c=t(60513),l=t(57390),i=t(60437),o=t(65742);t(44349);const d={id:"alias",toc_min_heading_level:2,toc_max_heading_level:2},h="5.1.5.2. Aliases",u={},p=[{value:"5.1.5.2.1. Container ID lookup",id:"51521-container-id-lookup",level:2},{value:"5.1.5.2.2. Container PID lookup",id:"51522-container-pid-lookup",level:2},{value:"5.1.5.2.3. Direct connection",id:"51523-direct-connection",level:2},{value:"Connection",id:"connection",level:3},{value:"Cluster member list",id:"cluster-member-list",level:3},{value:"Current revision",id:"current-revision",level:3},{value:"Connection",id:"connection-1",level:3},{value:"Compaction",id:"compaction",level:3},{value:"Defragmentation",id:"defragmentation",level:3},{value:"5.1.5.2.4. Connection via crictl",id:"51524-connection-via-crictl",level:2},{value:"Container ID lookup",id:"container-id-lookup",level:3},{value:"Flags for connecting to etcdctl",id:"flags-for-connecting-to-etcdctl",level:3},{value:"Connection",id:"connection-2",level:3},{value:"Cluster member list",id:"cluster-member-list-1",level:3},{value:"Current revision",id:"current-revision-1",level:3},{value:"Compaction",id:"compaction-1",level:3},{value:"Defragmentation",id:"defragmentation-1",level:3},{value:"5.1.5.2.5. Connection via nsenter",id:"51525-connection-via-nsenter",level:2},{value:"Container ID lookup",id:"container-id-lookup-1",level:3},{value:"Container PID lookup",id:"container-pid-lookup",level:3},{value:"Cluster member list",id:"cluster-member-list-2",level:3},{value:"Current revision",id:"current-revision-2",level:3},{value:"Connection",id:"connection-3",level:3},{value:"Compaction",id:"compaction-2",level:3},{value:"Defragmentation",id:"defragmentation-2",level:3},{value:"5.1.5.2.5. Connection via kubectl",id:"51525-connection-via-kubectl",level:2},{value:"Flags for connecting to kectl",id:"flags-for-connecting-to-kectl",level:3},{value:"Connection",id:"connection-4",level:3},{value:"Cluster member list",id:"cluster-member-list-3",level:3},{value:"Current revision",id:"current-revision-3",level:3},{value:"Compaction",id:"compaction-3",level:3},{value:"Defragmentation",id:"defragmentation-3",level:3},{value:"Getting the <code>data-dir</code> path",id:"getting-the-data-dir-path",level:3},{value:"Downloading a backup file",id:"downloading-a-backup-file",level:3}];function k(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"5152-aliases",children:"5.1.5.2. Aliases"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This section will be useful for optimizing connection requests. Let's look at several options for connecting to the ETCD cluster."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"cidsearch"}),") Container ID lookup"]}),"\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"cpidsearch"}),") Container PID lookup"]}),"\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"etcdctl"}),") Direct connection"]}),"\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"ectl"}),") Connection via crictl"]}),"\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"nectl"}),") Connection via nsenter"]}),"\n",(0,s.jsxs)(n.li,{children:["(alias=",(0,s.jsx)(n.strong,{children:"kectl"}),") Connection via kubelet"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,s.jsx)(n.p,{children:"Please note that all commands except section 5.1.5.2.5 (Connection via kubectl) are executed on nodes where the ETCD instance is deployed."})}),"\n",(0,s.jsx)(n.h2,{id:"51521-container-id-lookup",children:"5.1.5.2.1. Container ID lookup"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This alias helps quickly find the container ID by labels ",(0,s.jsx)(n.code,{children:"io.kubernetes.pod.name"})," and ",(0,s.jsx)(n.code,{children:"io.kubernetes.pod.namespace"})]}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
    cidsearch() {
      crictl ps \\
        --label io.kubernetes.pod.name="$1" \\
        --label io.kubernetes.pod.namespace="$2" \\
        -o json | jq -r '.containers[].id'
    }
  `}),"\n",(0,s.jsx)(n.h2,{id:"51522-container-pid-lookup",children:"5.1.5.2.2. Container PID lookup"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This alias helps quickly find the container PID by labels ",(0,s.jsx)(n.code,{children:"io.kubernetes.container.name"})," and ",(0,s.jsx)(n.code,{children:"io.kubernetes.pod.namespace"})]}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
    cpidsearch() {
      crictl inspect \\
        $(cidsearch "$1" "$2") | jq .info.pid
    }
  `}),"\n",(0,s.jsx)(n.h2,{id:"51523-direct-connection",children:"5.1.5.2.3. Direct connection"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Direct connection is suitable when we know which node the ETCD instance is on, and the certificates are in the host filesystem."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"connection",children:"Connection"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias etcdctl='etcdctl \\
    --cert=${o.$.etcdPeer.crtPath} \\
    --key=${o.$.etcdPeer.keyPath} \\
    --cacert=${o.$.etcdCA.crtPath}'
`}),"\n",(0,s.jsx)(n.h3,{id:"cluster-member-list",children:"Cluster member list"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  etcdctlMembers() {
    etcdctl member list -w json | \\
    jq -r '[.members[].clientURLs[]?] | join(",")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"current-revision",children:"Current revision"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  etcdctlRevision() {
    etcdctl \\
      --endpoints=$(etcdctlMembers) \\
      endpoint status \\
      -w json | jq \\
      -r .[].Status.header.revision
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"connection-1",children:"Connection"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias etcdctl='etcdctl \\
    --cert=${o.$.etcdPeer.crtPath} \\
    --key=${o.$.etcdPeer.keyPath} \\
    --cacert=${o.$.etcdCA.crtPath}'
`}),"\n",(0,s.jsx)(n.h3,{id:"compaction",children:"Compaction"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias etcdctlCompaction='etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    compaction $(etcdctlRevision)'
`}),"\n",(0,s.jsx)(n.h3,{id:"defragmentation",children:"Defragmentation"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias etcdctlDefrag='etcdctl \\
    --endpoints=$(etcdctlMembers) \\
    defrag'
`}),"\n",(0,s.jsx)(n.h2,{id:"51524-connection-via-crictl",children:"5.1.5.2.4. Connection via crictl"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Connection via container is suitable when the application is running as a container and all data is mounted inside the container filesystem."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(n.p,{children:["To ensure requests are sent to the correct container, specify the ",(0,s.jsx)(n.code,{children:"Namespace"})," and ",(0,s.jsx)(n.code,{children:"PodName"})," you want to interact with."]})}),"\n",(0,s.jsx)(i.LX,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please note the dependency on alias=(",(0,s.jsx)(n.code,{children:"cidsearch"}),", ",(0,s.jsx)(n.code,{children:"ectlflagsearch"}),") listed below"]})}),"\n",(0,s.jsx)(n.h3,{id:"container-id-lookup",children:"Container ID lookup"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  cidsearch() {
    crictl ps \\
      --label io.kubernetes.pod.name="$1" \\
      --label io.kubernetes.pod.namespace="$2" \\
      -o json | jq -r '.containers[].id'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"flags-for-connecting-to-etcdctl",children:"Flags for connecting to etcdctl"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"alias function that substitutes flags specifying the PEER certificate, PEER key, ETCD cluster CA certificate, and ENDPOINT."}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  ectlflagsearch() {
    ETCD_ARGS=$( \\
      crictl inspect $(cidsearch "$1" "$2") | jq -r \\
        '.info.runtimeSpec.process.args[]' ) ; \\
      echo -n \\
        '--cert='$(grep --\\
        '--peer-cert-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--key='$(grep --\\
        '--peer-key-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--cacert='$(grep --\\
        '--trusted-ca-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--endpoints='$(grep --\\
        '--advertise-client-urls=' <<< $ETCD_ARGS | sed 's/[^=]*=//')
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"connection-2",children:"Connection"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias ectl='crictl exec \\
    -ti $(cidsearch $\{SEARCH_POD_NAME} $\{SEARCH_NAMESPACE}) \\
    etcdctl \\
    $(ectlflagsearch $\{SEARCH_POD_NAME} $\{SEARCH_NAMESPACE})'
`}),"\n",(0,s.jsx)(n.h3,{id:"cluster-member-list-1",children:"Cluster member list"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  ectlMembers() {
    ectl member list \\
    --write-out=json | jq \\
    -r '[.members[].clientURLs[]] | join(",")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"current-revision-1",children:"Current revision"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  ectlRevision() {
    ectl \\
      endpoint status \\
      --cluster \\
      -w json | jq -r  \\
      '[.[].Status.header.revision] | join(" ")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"compaction-1",children:"Compaction"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias ectlCompaction='ectl \\
    compaction $(ectlRevision) \\
    --cluster'
`}),"\n",(0,s.jsx)(n.h3,{id:"defragmentation-1",children:"Defragmentation"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias ectlDefrag='ectl \\
    defrag \\
    --cluster'
`}),"\n",(0,s.jsx)(n.h2,{id:"51525-connection-via-nsenter",children:"5.1.5.2.5. Connection via nsenter"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"To use etcdctl located inside the process namespace of a running container, you first need to get the CONTAINER_ID. Based on this identifier, you can determine the process PID. Next, we'll create a nectl alias (to avoid conflicts with other aliases). Each time this alias is called, we'll update the data about the current container and process. It's also important to specify the path to the certificates."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please note the dependency on alias=(",(0,s.jsx)(n.code,{children:"cpidsearch"}),")"]})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(n.p,{children:["To ensure requests are sent to the correct container, specify the ",(0,s.jsx)(n.code,{children:"Namespace"})," and ",(0,s.jsx)(n.code,{children:"PodName"})," you want to interact with."]})}),"\n",(0,s.jsx)(i.LX,{}),"\n",(0,s.jsx)(n.h3,{id:"container-id-lookup-1",children:"Container ID lookup"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This alias helps quickly find the container ID by labels ",(0,s.jsx)(n.code,{children:"io.kubernetes.container.name"})," and ",(0,s.jsx)(n.code,{children:"io.kubernetes.pod.namespace"})]}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  cidsearch() {
    crictl ps \\
      --label io.kubernetes.pod.name="$1" \\
      --label io.kubernetes.pod.namespace="$2" \\
      -o json | jq -r '.containers[].id'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"container-pid-lookup",children:"Container PID lookup"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This alias helps quickly find the container PID by labels ",(0,s.jsx)(n.code,{children:"io.kubernetes.container.name"})," and ",(0,s.jsx)(n.code,{children:"io.kubernetes.pod.namespace"})]}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  cpidsearch() {
    crictl inspect \\
      $(cidsearch "$1" "$2") | jq .info.pid
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"cluster-member-list-2",children:"Cluster member list"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  nectlMembers() {
    nectl member list \\
    --write-out=json | jq \\
    -r '[.members[].clientURLs[]] | join(",")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"current-revision-2",children:"Current revision"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  nectlMembers() {
    nectl member list \\
    --write-out=json | jq \\
    -r '[.members[].clientURLs[]] | join(",")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"connection-3",children:"Connection"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias nectl='nsenter \\
    -m -n -t \\
    $(cpidsearch $\{SEARCH_CONTAINER_NAME} $\{SEARCH_NAMESPACE}) \\
    etcdctl \\
    --cert=${o.$.etcdPeer.crtPath} \\
    --key=${o.$.etcdPeer.keyPath} \\
    --cacert=${o.$.etcdCA.crtPath}'
`}),"\n",(0,s.jsx)(n.h3,{id:"compaction-2",children:"Compaction"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias nectlCompaction='nectl \\
    --endpoints=$(nectlMembers) \\
    compaction $(nectlRevision)'
`}),"\n",(0,s.jsx)(n.h3,{id:"defragmentation-2",children:"Defragmentation"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias nectlDefrag='nectl \\
    --endpoints=$(nectlMembers) \\
    defrag'
`}),"\n",(0,s.jsx)(n.h2,{id:"51525-connection-via-kubectl",children:"5.1.5.2.5. Connection via kubectl"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Connection via kubectl is suitable when the application is running as a pod in the k8s cluster, all data is mounted inside the container filesystem, and operations are performed through kube-api."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(n.p,{children:["To ensure requests are sent to the correct container, specify the ",(0,s.jsx)(n.code,{children:"Namespace"})," and ",(0,s.jsx)(n.code,{children:"PodName"})," you want to interact with."]})}),"\n",(0,s.jsx)(i.LX,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please note the dependency on alias=(",(0,s.jsx)(n.code,{children:"kectlflagsearch"}),") listed below"]})}),"\n",(0,s.jsx)(n.h3,{id:"flags-for-connecting-to-kectl",children:"Flags for connecting to kectl"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"alias function that substitutes flags specifying the PEER certificate, PEER key, ETCD cluster CA certificate, and ENDPOINT."}),"\n"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kectlflagsearch() {
    ETCD_ARGS=$( kubectl get pod \\
      -n $\{SEARCH_NAMESPACE} \\
         $\{SEARCH_POD_NAME} \\
      -o yaml) ; \\
      echo -n \\
        '--cert='$(grep --\\
        '--peer-cert-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--key='$(grep --\\
        '--peer-key-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--cacert='$(grep --\\
        '--trusted-ca-file=' <<< $ETCD_ARGS | sed 's/[^=]*=//') \\
        '--endpoints='$(grep --\\
        '--advertise-client-urls=' <<< $ETCD_ARGS \|
        sed 's/[^=]*=//' \|
        sed 's/$(POD_NAME)/'$\{SEARCH_POD_NAME}'/' \|
        sed 's/$(POD_NAMESPACE)/'$\{SEARCH_NAMESPACE}'/')
    }
`}),"\n",(0,s.jsx)(n.h3,{id:"connection-4",children:"Connection"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias kectl='kubectl exec -it \\
    -n $\{SEARCH_NAMESPACE} \\
    $\{SEARCH_POD_NAME} \\
    -- \\
    etcdctl \\
    $(kectlflagsearch $\{SEARCH_POD_NAME} $\{SEARCH_NAMESPACE})'
`}),"\n",(0,s.jsx)(n.h3,{id:"cluster-member-list-3",children:"Cluster member list"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kectlMembers() {
    kectl member list \\
    --write-out=json | jq \\
    -r '[.members[].clientURLs[]] | join(",")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"current-revision-3",children:"Current revision"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kectlRevision() {
    kectl \\
      endpoint status \\
      --cluster \\
      -w json | jq -r  \\
      '[.[].Status.header.revision] | join(" ")'
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"compaction-3",children:"Compaction"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias kectlCompaction='kectl \\
    compaction $(kectlRevision) \\
    --cluster'
`}),"\n",(0,s.jsx)(n.h3,{id:"defragmentation-3",children:"Defragmentation"}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  alias kectlDefrag='kectl \\
    defrag \\
    --cluster'
`}),"\n",(0,s.jsxs)(n.h3,{id:"getting-the-data-dir-path",children:["Getting the ",(0,s.jsx)(n.code,{children:"data-dir"})," path"]}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  kgdatadirpath() {
    jq -r '.spec.containers[0].command[], .spec.containers[0].args[]? | select(startswith("--data-dir"))' <<< "$(kubectl get pod -n "$1" "$2" -o json)" \|
      awk -F= '{print $2}' | head -n1
  }
`}),"\n",(0,s.jsx)(n.h3,{id:"downloading-a-backup-file",children:"Downloading a backup file"}),"\n",(0,s.jsx)(n.p,{children:"This function will download the backup file from the data-dir to the local machine in the current directory."}),"\n",(0,s.jsx)(l.A,{language:"bash",children:c.A`
  dlbackupfile() {
    local POD_JSON=$(kubectl get pod -n "$1" "$2" -o json)
    local DATA_DIR_PATH=$(jq -r '.spec.containers[0].command[], .spec.containers[0].args[]? | select(startswith("--data-dir"))' <<< "$POD_JSON" |
      awk -F= '{print $2}' | head -n1)
    local MOUNT_PATH=$DATA_DIR_PATH
    while [[ -n "$MOUNT_PATH" ]]; do
      local MOUNT_NAME=$(jq -r --arg path "$MOUNT_PATH" '.spec.containers[0].volumeMounts[] | select(.mountPath==$path) | .name' <<< "$POD_JSON") ;
      [[ -n "$MOUNT_NAME" ]] && break
      MOUNT_PATH=\${MOUNT_PATH%/*}
    done
    local VOLUME_JSON=$(jq -r --arg name "$MOUNT_NAME" '.spec.volumes[] | select(.name==$name)' <<< "$POD_JSON")
    local NODE_IP=$(kubectl get node "$(jq -r .spec.nodeName <<< "$POD_JSON")" -o json | jq -r '.status.addresses[] | select(.type=="ExternalIP") | .address')
    if jq -e '.hostPath' <<< "$VOLUME_JSON" > /dev/null; then
      local PVC_MOUNT_PATH=$(jq -r '.hostPath.path' <<< "$VOLUME_JSON")
    else
      local PVC_NAME=$(jq -r '.persistentVolumeClaim.claimName' <<< "$VOLUME_JSON")
      local VOLUME_NAME=$(kubectl get pvc -n "$1" "$PVC_NAME" -o json | jq -r .spec.volumeName)
      local PVC_MOUNT_PATH=$(ssh "$3@$NODE_IP" "sudo lsblk -o MOUNTPOINT | grep '$VOLUME_NAME'")
    fi
    rsync  --rsync-path="sudo rsync" $3@$NODE_IP:\${PVC_MOUNT_PATH}\${DATA_DIR_PATH#"$MOUNT_PATH"}/$4 ./
  }
`})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},94949(e,n,t){t.d(n,{N:()=>i,y:()=>l});t(96540);var r=t(57390),s=t(27653),a=t(21312),c=t(74848);const l=({command:e,output:n})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{language:"bash",children:e}),(0,c.jsx)(s.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,c.jsx)(r.A,{language:"bash",children:n})})]}),i=({binaryName:e,version:n,installSteps:t,successMessage:l,grepCommand:i,lsOutput:o})=>{const d=[`***** [INFO] Checking current ${e} version...`,`***** [INFO] Current: none, Target: ${n}`,"***** [INFO] Download URL: https://*******",`***** [INFO] Updating ${e} to version ${n}...`,"***** [INFO] Working directory: /tmp/tmp.*****",`***** [INFO] Downloading ${e}...`,"***** [INFO] Downloading checksum file...","***** [INFO] Verifying checksum...",...t.map(e=>`***** [INFO] ${e}`),`***** [INFO] ${l} ${n}.`].join("\n");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.A,{language:"bash",children:`journalctl -t ${e}-installer`}),(0,c.jsx)(s.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,c.jsx)(r.A,{language:"text",children:d})}),(0,c.jsx)(r.A,{language:"bash",children:`ls -la /usr/local/bin/ | grep ${i}`}),(0,c.jsx)(s.A,{type:"note",title:(0,a.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,c.jsx)(r.A,{language:"bash",children:o})})]})}},21186(e,n,t){t.d(n,{A:()=>h});t(96540);var r=t(57390),s=t(27653),a=t(69623),c=t(28774),l=t(21312),i=t(60513),o=t(44349),d=t(74848);const h=({method:e,certPath:n,certDisplayName:t,caDisplayName:h})=>{const u="openssl"===e,p=u?`${o.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${n}`:"kubeadm certs check-expiration",k=u?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{id:"cert.dependsOnSections",children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:(0,d.jsx)(c.A,{to:"/tech-docs/kubernetes/certificates/examination/all-examination",children:"SSL Certificate Check"})})})]}):(0,d.jsx)(l.A,{id:"cert.kubeadmLimitation",children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430, \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445."}),b=i.A`
    CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
    ${t.padEnd(27)}Oct 22, 2025 22:06 UTC   364d            ${(h??"").padEnd(24)}no
  `;return(0,d.jsxs)(a.A,{className:"custom-blue-block",summary:(0,d.jsx)("summary",{children:(0,l.T)({id:"cert.checkReadiness",message:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430"})}),children:[(0,d.jsx)(s.A,{type:"warning",title:(0,l.T)({id:"common.attention",message:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435"}),children:k}),(0,d.jsx)(r.A,{language:"bash",children:p}),(0,d.jsx)(s.A,{type:"note",title:(0,l.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,d.jsx)(r.A,{language:"bash",children:b})})]})}},99780(e,n,t){t.d(n,{l:()=>c});var r=t(96540),s=t(60197),a=t(74848);const c=({delegate:e,options:n,children:t})=>{const c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const t=c.current,r=e||"[data-fancybox]",a=n||{};return s.lX.bind(t,r,a),()=>{s.lX.unbind(t),s.lX.close()}}),(0,a.jsx)("div",{ref:c,children:t})}},50400(e,n,t){t.d(n,{Y:()=>a});t(96540);var r=t(99780),s=t(74848);const a=({src:e})=>(0,s.jsx)(r.l,{options:{Carousel:{infinite:!1}},children:(0,s.jsx)("a",{"data-fancybox":"gallery",href:e,children:(0,s.jsx)("img",{src:e})})})},60437(e,n,t){t.d(n,{LX:()=>o,iu:()=>b});var r=t(96540),s=t(71635),a=t(71513),c=t(57390),l=t(60513),i=t(74848);const o=()=>{const[e,n]=(0,r.useState)(),[t,o]=(0,r.useState)();return(0,i.jsxs)(s.A,{vertical:!0,gap:"small",children:[(0,i.jsx)(a.A,{placeholder:"namespace",value:e,onChange:e=>n(e.target.value)}),(0,i.jsx)(a.A,{placeholder:"pod",value:t,onChange:e=>o(e.target.value)}),(0,i.jsx)(c.A,{language:"bash",children:l.A`
          export SEARCH_NAMESPACE=${e}
          export SEARCH_POD_NAME=${t}
          `})]})};var d=t(76331),h=t(9792),u=t(21312);const p=({command:e})=>(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(u.A,{id:"etcd.commands",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"})}),(0,i.jsx)("th",{children:(0,i.jsx)(u.A,{id:"etcd.description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) member list -w table`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.memberList",children:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u0443\u0437\u043b\u043e\u0432 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u0443\u0437\u043b\u043e\u0432 \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) endpoint status -w table`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.endpointStatus",children:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0443\u0437\u043b\u043e\u0432 ETCD \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) get / --prefix`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.getPrefix",children:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0447\u0435\u0439 \u043a\u043b\u044e\u0447 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0443."})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) get / --prefix --keys-only`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.getPrefixKeysOnly",children:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438 \u0432\u0441\u0435 \u043a\u043b\u044e\u0447\u0438, \u0447\u0435\u0439 \u043a\u043b\u044e\u0447 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0443."})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) snapshot save PATH_TO_SAVE.db`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.snapshotSave",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043d\u0438\u043c\u043e\u043a \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 ETCD_api_address"})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) defrag --cluster`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.defrag",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u0444\u0430\u0439\u043b\u043e\u0432 \u0411\u0414. (\u041f\u0440\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441 \u0444\u043b\u0430\u0433\u043e\u043c --data-dir \u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0443\u0442\u0438 \u0434\u043e \u0444\u0430\u0439\u043b\u0430)"})})]})," ",(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(c.A,{language:"bash",children:`${e} --endpoints=$(${e}Members) compaction \${INDEX}`})}),(0,i.jsx)("td",{children:(0,i.jsx)(u.A,{id:"etcd.cmd.compaction",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0440\u0435\u0432\u0438\u0437\u0438\u0438"})})]})]}),k=["etcdctl","ectl","nectl","kectl"],b=()=>(0,i.jsx)(d.A,{groupId:"etcd-alias",children:k.map(e=>(0,i.jsx)(h.A,{value:e,label:e,children:(0,i.jsx)(p,{command:e})},e))});t(99780),t(50400),t(23217);t(21186),t(94949)},65742(e,n,t){t.d(n,{$:()=>s});var r=t(44349);const s={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}}}]);