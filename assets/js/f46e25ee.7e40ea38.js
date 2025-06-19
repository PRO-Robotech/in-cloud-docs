"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20147],{9792:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s({children:e,hidden:t,className:n}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,n),hidden:t,children:e})}},31992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","title":"configFilesDefault","description":"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","permalink":"/tech-docs/kubernetes/components/kubelet/payload/configFilesDefault","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),o=n(28453),s=n(60513),u=n(68747),i=n(44349),l=n(9792),c=n(76331);const d={},h=void 0,f={},b=[];function m(e){return(0,a.jsxs)(c.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
      cat <<EOF > ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b kubelet"}),(0,a.jsx)(u.A,{language:"bash",children:s.A`
      - path: ${i.M.kuberneteKubeletFolderPath.value}/config.yaml
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
    `})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m()}},76331:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),u=n(205),i=n(57485),l=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return d(e).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}))}(n);return function(e){const t=(0,l.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}function f({value:e,tabValues:t}){return t.some(t=>t.value===e)}function b({queryString:e=!1,groupId:t}){const n=(0,s.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)(e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find(e=>e.default)??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o})),[l,d]=b({queryString:n,groupId:a}),[m,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,c.Dv)(t);return[n,(0,r.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:a}),g=(()=>{const e=l??m;return f({value:e,tabValues:o})?e:null})();(0,u.A)(()=>{g&&i(g)},[g]);return{selectedValue:s,selectValue:(0,r.useCallback)(e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)},[d,p,o]),tabValues:o}}var p=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y({className:e,block:t,selectedValue:n,selectValue:r,tabValues:s}){const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),l=e=>{const t=e.currentTarget,a=u.indexOf(t),o=s[a].value;o!==n&&(i(t),r(o))},c=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:r})=>(0,v.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>{u.push(e)},onKeyDown:c,onClick:l,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===e}),children:t??e},e))})}function k({lazy:e,children:t,selectedValue:n}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find(e=>e.props.value===n);return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function A(e){const t=(0,p.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}}}]);