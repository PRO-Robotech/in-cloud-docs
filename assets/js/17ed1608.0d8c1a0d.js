"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3701,99435],{9792:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function l({children:e,hidden:t,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,n),hidden:t,children:e})}},14623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/dir","title":"dir","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/dir.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/dir","permalink":"/tech-docs/kubernetes/components/kubelet/payload/dir","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),s=n(28453),l=n(60513),o=n(68747);const i={},u=void 0,c={},d=[];function b(e){return(0,r.jsx)(o.A,{language:"bash",children:l.A`
      mkdir -p /usr/lib/systemd/system/kubelet.service.d
      mkdir -p /var/lib/kubelet/
  `})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b()}},58700:(e,t,n)=>{n.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},76331:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(96540),r=n(34164),s=n(23104),l=n(56347),o=n(205),i=n(57485),u=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:n,default:a}})=>({value:e,label:t,attributes:n,default:a}))}(n);return function(e){const t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}function m({value:e,tabValues:t}){return t.some(t=>t.value===e)}function h({queryString:e=!1,groupId:t}){const n=(0,l.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)(e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})},[r,n])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=b(e),[l,i]=(0,a.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find(e=>e.default)??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s})),[u,d]=h({queryString:n,groupId:r}),[p,E]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Dv)(t);return[n,(0,a.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),f=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,o.A)(()=>{f&&i(f)},[f]);return{selectedValue:l,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),E(e)},[d,E,s]),tabValues:s}}var E=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function g({className:e,block:t,selectedValue:n,selectValue:a,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(i(t),a(s))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:a})=>(0,k.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>{o.push(e)},onKeyDown:c,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===e}),children:t??e},e))})}function v({lazy:e,children:t,selectedValue:n}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find(e=>e.props.value===n);return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function S(e){const t=p(e);return(0,k.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,k.jsx)(g,{...t,...e}),(0,k.jsx)(v,{...t,...e})]})}function N(e){const t=(0,E.A)();return(0,k.jsx)(S,{...e,children:d(e.children)},String(t))}},76706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>a,toc:()=>E});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"Systemd Unit","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/kubelet/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),s=n(28453),l=n(60513),o=n(68747),i=n(44349),u=n(9792),c=n(76331),d=n(14623),b=n(58700);const m={},h=void 0,p={},E=[...d.toc];function f(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(u.A,{value:"Bash",children:[(0,r.jsx)(d.default,{}),(0,r.jsx)("h4",{children:"Systemd Unit"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service
      [Unit]
      Description=kubelet: The Kubernetes Node Agent
      Documentation=https://kubernetes.io/docs/
      Wants=network-online.target containerd.service
      After=network-online.target containerd.service

      [Service]
      ExecStart=${b.m.kubelet.path}
      Restart=always
      StartLimitInterval=0
      RestartSec=10

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Config"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
      cat <<EOF > /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
      # Note: This dropin only works with kubeadm and kubelet v1.11+
      [Service]
      Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf"
      Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
      # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
      EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
      # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
      # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
      EnvironmentFile=-/etc/default/kubelet/extra-args.env
      ExecStart=
      ExecStart=/usr/local/bin/kubelet \\$KUBELET_KUBECONFIG_ARGS \\$KUBELET_CONFIG_ARGS \\$KUBELET_KUBEADM_ARGS \\$KUBELET_EXTRA_ARGS
      EOF
    `}),(0,r.jsxs)(c.A,{groupId:"ccm",children:[(0,r.jsxs)(u.A,{value:"Default",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS=""
          EOF
        `})]}),(0,r.jsxs)(u.A,{value:"Cloud Controller Manager",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
          cat <<EOF > /etc/default/kubelet/extra-args.env
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
          EOF
        `})]})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
      systemctl enable kubelet
    `})]}),(0,r.jsxs)(u.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Systemd Unit ENV"}),(0,r.jsx)(o.A,{language:"yaml",children:l.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=kubelet: The Kubernetes Node Agent
          Documentation=https://kubernetes.io/docs/
          Wants=network-online.target containerd.service
          After=network-online.target containerd.service

          [Service]
          ExecStart=${b.m.kubelet.path}
          Restart=always
          StartLimitInterval=0
          RestartSec=10

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,r.jsx)(o.A,{language:"yaml",children:l.A`
      # write_files:
      - path: /usr/lib/systemd/system/kubelet.service.d/10-kubeadm.conf
        owner: root:root
        permissions: '0644'
        content: |
          # Note: This dropin only works with kubeadm and kubelet v1.11+
          [Service]
          Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=${i.M.kubernetesBaseFolderPath.value}/bootstrap-kubelet.conf --kubeconfig=${i.M.kubernetesBaseFolderPath.value}/kubelet.conf"
          Environment="KUBELET_CONFIG_ARGS=--config=${i.M.kuberneteKubeletFolderPath.value}/config.yaml"
          # This is a file that "kubeadm init" and "kubeadm join" generates at runtime, populating the KUBELET_KUBEADM_ARGS variable dynamically
          EnvironmentFile=-${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          # This is a file that the user can use for overrides of the kubelet args as a last resort. Preferably, the user should use
          # the .NodeRegistration.KubeletExtraArgs object in the configuration files instead. KUBELET_EXTRA_ARGS should be sourced from this file.
          EnvironmentFile=-/etc/default/kubelet/extra-args.env
          ExecStart=
          ExecStart=/usr/local/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_CONFIG_ARGS $KUBELET_KUBEADM_ARGS $KUBELET_EXTRA_ARGS
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Download"}),(0,r.jsx)(o.A,{language:"yaml",children:l.A`
      # write_files:
      - path: /etc/default/kubelet/extra-args.env
        owner: root:root
        permissions: '0644'
        content: |
          KUBELET_EXTRA_ARGS="--cloud-provider=external"
    `}),(0,r.jsx)("h4",{children:"Systemd Unit Custom ENV"}),(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"info",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
  # write_files:
  - path: ${i.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
    owner: root:root
    permissions: '0644'
    content: |
      KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${i.M.criEndpoint.value} --pod-infra-container-image=${i.M.baseDockerRegistry.value}/${i.M.pausedImage.value} --config=${i.M.kuberneteKubeletFolderPath.value}/config-custom.yaml"
`})]}),(0,r.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 Systemd Unit"}),(0,r.jsx)(o.A,{language:"bash",children:l.A`
      # runcmd:
      - systemctl enable kubelet
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}}}]);