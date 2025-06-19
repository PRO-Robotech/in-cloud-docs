"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20147,20430,27448,51575,52628],{9792:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function a({children:e,hidden:t,className:n}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,n),hidden:t,children:e})}},31992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),i=n(68747),u=n(44349),l=n(9792),c=n(76331);const d={},m=void 0,b={},h=[];function p(e){return(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsxs)(l.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(i.A,{language:"bash",children:a.A`
      cat <<EOF > ${u.M.kuberneteKubeletFolderPath.value}/config.yaml
      ---
      apiVersion: kubelet.config.k8s.io/v1beta1
      authentication:
        anonymous:
          enabled: false
        webhook:
          cacheTTL: 0s
          enabled: true
        x509:
          clientCAFile: /etc/kubernetes/pki/ca.crt
      authorization:
        mode: Webhook
        webhook:
          cacheAuthorizedTTL: 0s
          cacheUnauthorizedTTL: 0s
      cgroupDriver: systemd
      clusterDNS:
      - 29.64.0.10
      clusterDomain: cluster.local
      containerRuntimeEndpoint: ""
      cpuManagerReconcilePeriod: 0s
      evictionPressureTransitionPeriod: 0s
      fileCheckFrequency: 0s
      healthzBindAddress: 127.0.0.1
      healthzPort: 10248
      httpCheckFrequency: 0s
      imageMaximumGCAge: 0s
      imageMinimumGCAge: 0s
      kind: KubeletConfiguration
      logging:
        flushFrequency: 0
        options:
          json:
            infoBufferSize: "0"
          text:
            infoBufferSize: "0"
        verbosity: 0
      memorySwap: {}
      nodeStatusReportFrequency: 0s
      nodeStatusUpdateFrequency: 0s
      resolvConf: /run/systemd/resolve/resolv.conf
      rotateCertificates: true
      runtimeRequestTimeout: 0s
      shutdownGracePeriod: 0s
      shutdownGracePeriodCriticalPods: 0s
      staticPodPath: /etc/kubernetes/manifests
      streamingConnectionIdleTimeout: 0s
      syncFrequency: 0s
      volumeStatsAggPeriod: 0s
      EOF
    `})]}),(0,r.jsxs)(l.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,r.jsx)(i.A,{language:"bash",children:a.A`
      - path: ${u.M.kuberneteKubeletFolderPath.value}/config.yaml
        owner: root:root
        permissions: '0644'
        content: |
          ---
          apiVersion: kubelet.config.k8s.io/v1beta1
          authentication:
            anonymous:
              enabled: false
            webhook:
              cacheTTL: 0s
              enabled: true
            x509:
              clientCAFile: /etc/kubernetes/pki/ca.crt
          authorization:
            mode: Webhook
            webhook:
              cacheAuthorizedTTL: 0s
              cacheUnauthorizedTTL: 0s
          cgroupDriver: systemd
          clusterDNS:
          - 29.64.0.10
          clusterDomain: cluster.local
          containerRuntimeEndpoint: ""
          cpuManagerReconcilePeriod: 0s
          evictionPressureTransitionPeriod: 0s
          fileCheckFrequency: 0s
          healthzBindAddress: 127.0.0.1
          healthzPort: 10248
          httpCheckFrequency: 0s
          imageMaximumGCAge: 0s
          imageMinimumGCAge: 0s
          kind: KubeletConfiguration
          logging:
            flushFrequency: 0
            options:
              json:
                infoBufferSize: "0"
              text:
                infoBufferSize: "0"
            verbosity: 0
          memorySwap: {}
          nodeStatusReportFrequency: 0s
          nodeStatusUpdateFrequency: 0s
          resolvConf: /run/systemd/resolve/resolv.conf
          rotateCertificates: true
          runtimeRequestTimeout: 0s
          shutdownGracePeriod: 0s
          shutdownGracePeriodCriticalPods: 0s
          staticPodPath: /etc/kubernetes/manifests
          streamingConnectionIdleTimeout: 0s
          syncFrequency: 0s
          volumeStatsAggPeriod: 0s
    `})]})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},53338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","title":"statusSystemdUnitRunning","description":"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Kubeadm \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 kubeadm init \u0438\u043b\u0438 kubeadm join, Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/checks","slug":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","permalink":"/tech-docs/kubernetes/components/kubelet/checks/statusSystemdUnitRunning","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),i=n(68747);const u={},l=void 0,c={},d=[];function m(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Kubeadm"})})," \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434 ",(0,r.jsx)(t.code,{children:"kubeadm init"})," \u0438\u043b\u0438 ",(0,r.jsx)(t.code,{children:"kubeadm join"}),", Systemd Unit \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a, \u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d."]})}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
      systemctl status kubelet
  `}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:a.A`
      ● kubelet.service - kubelet: The Kubernetes Node Agent
              Loaded: loaded (/usr/lib/systemd/system/kubelet.service; enabled; preset: enabled)
          Drop-In: /usr/lib/systemd/system/kubelet.service.d
                      └─10-kubeadm.conf
              Active: active (running) since Sat 2025-02-22 10:33:54 UTC; 17min ago
              Docs: https://kubernetes.io/docs/
          Main PID: 13779 (kubelet)
              Tasks: 14 (limit: 7069)
              Memory: 34.0M (peak: 35.3M)
              CPU: 27.131s
              CGroup: /system.slice/kubelet.service
                      └─13779 /usr/local/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml
  `})})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},76163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>f,frontMatter:()=>m,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","title":"systemdUnitStart","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/systemdUnit","slug":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","permalink":"/tech-docs/kubernetes/components/kubelet/systemdUnit/systemdUnitStart","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),i=n(68747),u=n(44349),l=n(9792),c=n(76331),d=n(53338);const m={},b=void 0,h={},p=[...d.toc];function k(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(t.admonition,{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c ",(0,r.jsx)(t.strong,{children:"\u0442\u043e\u043b\u044c\u043a\u043e"})," \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 Kubernetes \u0432\u0440\u0443\u0447\u043d\u0443\u044e (\u043c\u0435\u0442\u043e\u0434\u043e\u043c ",(0,r.jsx)(t.em,{children:"\xabKubernetes the Hard Way\xbb"}),"). \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",(0,r.jsx)(t.strong,{children:"kubeadm"})," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(t.code,{children:"kubeadm-config"}),"."]}),(0,r.jsxs)(c.A,{groupId:"install-type",children:[(0,r.jsx)(l.A,{value:"Bash",children:(0,r.jsx)(i.A,{language:"bash",children:a.A`
        cat <<EOF > ${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
        KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${u.M.criEndpoint.value} --pod-infra-container-image=${u.M.baseDockerRegistry.value}/${u.M.pausedImage.value} --config=${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${u.M.kubernetesClusterDomain.value} --cluster-dns=${u.M.kubernetesDNSAddress.value}
        "
        EOF
      `})}),(0,r.jsx)(l.A,{value:"Cloud-init",children:(0,r.jsx)(i.A,{language:"bash",children:a.A`
        - path: ${u.M.kuberneteKubeletFolderPath.value}/kubeadm-flags.env
          owner: root:root
          permissions: '0644'
          content: |
            KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix://${u.M.criEndpoint.value} --pod-infra-container-image=${u.M.baseDockerRegistry.value}/${u.M.pausedImage.value} --config=${u.M.kuberneteKubeletFolderPath.value}/config-custom.yaml --cluster-domain=${u.M.kubernetesClusterDomain.value} --cluster-dns=${u.M.kubernetesDNSAddress.value}                "
      `})})]})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u043e\u0432 Static Pods."}),"\n"]}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
      systemctl start kubelet
  `}),"\n",(0,r.jsx)("h3",{children:"\u0421\u0442\u0430\u0442\u0443\u0441 Systemd Unit"}),"\n",(0,r.jsxs)(n,{className:"custom-blue-block",children:[(0,r.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 systemd unit"}),(0,r.jsx)(d.default,{})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},76331:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(96540),r=n(34164),o=n(23104),a=n(56347),i=n(205),u=n(57485),l=n(31682),c=n(70679);function d(e){return s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,s.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:n,default:s}})=>({value:e,label:t,attributes:n,default:s}))}(n);return function(e){const t=(0,l.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}function b({value:e,tabValues:t}){return t.some(t=>t.value===e)}function h({queryString:e=!1,groupId:t}){const n=(0,a.W6)(),r=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(r),(0,s.useCallback)(e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})},[r,n])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[a,u]=(0,s.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find(e=>e.default)??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o})),[l,d]=h({queryString:n,groupId:r}),[p,k]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,r]=(0,c.Dv)(t);return[n,(0,s.useCallback)(e=>{t&&r.set(e)},[t,r])]}({groupId:r}),f=(()=>{const e=l??p;return b({value:e,tabValues:o})?e:null})();(0,i.A)(()=>{f&&u(f)},[f]);return{selectedValue:a,selectValue:(0,s.useCallback)(e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),k(e)},[d,k,o]),tabValues:o}}var k=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y({className:e,block:t,selectedValue:n,selectValue:s,tabValues:a}){const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),l=e=>{const t=e.currentTarget,r=i.indexOf(t),o=a[r].value;o!==n&&(u(t),s(o))},c=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e),children:a.map(({value:e,label:t,attributes:s})=>(0,g.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>{i.push(e)},onKeyDown:c,onClick:l,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===e}),children:t??e},e))})}function v({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find(e=>e.props.value===n);return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function x(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function j(e){const t=(0,k.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},88067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","title":"systemdUnitStartInit","description":"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/kubeadm","slug":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","permalink":"/tech-docs/kubernetes/components/kubelet/kubeadm/systemdUnitStartInit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=n(74848),o=n(28453),a=n(60513),i=n(68747),u=n(44349);const l={},c=void 0,d={},m=[];function b(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 Kubelet \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0444\u0430\u0437\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b Kubeadm."}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"warning",children:[(0,r.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/tech-docs/kubernetes/components/kubeadm/lifecycle-settings",children:"Kubeadm Configs"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a kubelet"}),"\n",(0,r.jsx)(i.A,{language:"bash",children:a.A`
  kubeadm init phase kubelet-start \\
    --config=${u.M.kubeadmBaseConfigPath.value}/kubeadm.yaml
`}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,r.jsx)(i.A,{language:"bash",children:a.A`
  [kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
  [kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
  [kubelet-start] Starting the kubelet
`})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},93491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/kubelet-init-start","title":"5.2.3.1.1. Kubelet Start","description":"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 (kubeadm init). \u041e\u043d\u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 kubelet \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e systemd-\u0441\u0435\u0440\u0432\u0438\u0441\u0430.","source":"@site/docs/tech-docs/kubernetes/components/kubelet/serviceInitStart.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/kubelet-init-start","permalink":"/tech-docs/kubernetes/components/kubelet/kubelet-init-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"kubelet-init-start"}}');var r=n(74848),o=n(28453),a=n(88067),i=n(76163),u=n(31992);const l={id:"kubelet-init-start"},c="5.2.3.1.1. Kubelet Start",d={},m=[{value:"5.2.3.1.1.1. Kubeadm init phase",id:"523111-kubeadm-init-phase",level:2},...a.toc,{value:"5.2.3.1.1.1. Systemd Unit",id:"523111-systemd-unit",level:2},...u.toc,...i.toc];function b(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"52311-kubelet-start",children:"5.2.3.1.1. Kubelet Start"})}),"\n",(0,r.jsx)(t.admonition,{title:"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"danger",children:(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 (",(0,r.jsx)(t.code,{children:"kubeadm init"}),"). \u041e\u043d\u0438 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",(0,r.jsx)(t.code,{children:"kubelet"})," \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e systemd-\u0441\u0435\u0440\u0432\u0438\u0441\u0430."]})}),"\n",(0,r.jsx)(t.h2,{id:"523111-kubeadm-init-phase",children:"5.2.3.1.1.1. Kubeadm init phase"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)(t.h2,{id:"523111-systemd-unit",children:"5.2.3.1.1.1. Systemd Unit"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ",(0,r.jsx)(t.code,{children:"Kubelet"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Kubelet default config"}),(0,r.jsx)(u.default,{})]}),"\n",(0,r.jsx)(i.default,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);