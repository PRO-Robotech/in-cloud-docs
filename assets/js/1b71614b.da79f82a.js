"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5139],{46108(e,t,l){l.r(t),l.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>a,toc:()=>N});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=l(74848),r=l(28453),s=l(60513),u=l(57390),o=l(58700),i=l(68741);const c={value:s.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${o.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${o.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${o.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${o.m.kubelet.path}"


      LOG_TAG="kubelet-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubelet version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $2}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubelet to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubelet..."
        curl -fsSL -o kubelet "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubelet"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubelet.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubelet"}' kubelet.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubelet..."
        install -m 755 kubelet "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubelet successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubelet is already up to date. Skipping installation."
      fi
    `};var d=l(9792),b=l(76331);const h={},m=void 0,O={},N=[];function p(e){return(0,n.jsxs)(b.A,{groupId:"install-type",children:[(0,n.jsxs)(d.A,{value:"Bash",children:[(0,n.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
            mkdir -p /etc/default/kubelet
          `}),(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${i.M.kubernetes.value}"
            REPOSITORY="${o.m.kubelet.baseUrl}"
            EOF
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${c.value}
          EOF
        `}),(0,n.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,n.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          cat <<EOF > /usr/lib/systemd/system/kubelet-install.service
          [Unit]
          Description=Install and update kubelet
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubelet/download.env
          ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,n.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,n.jsxs)(d.A,{value:"Cloud-init",children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${i.M.kubernetes.value}"
              REPOSITORY="${o.m.kubelet.baseUrl}"
        `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${c.value}
        `}),(0,n.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /usr/lib/systemd/system/kubelet-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubelet
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubelet/download.env
              ExecStart=/bin/bash -c "/etc/default/kubelet/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,n.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p()}},9792(e,t,l){l.d(t,{A:()=>s});l(96540);var a=l(34164);const n="tabItem_Ymn6";var r=l(74848);function s({children:e,hidden:t,className:l}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n,l),hidden:t,children:e})}},76331(e,t,l){l.d(t,{A:()=>I});var a=l(96540),n=l(34164),r=l(17559),s=l(23104),u=l(56347),o=l(205),i=l(57485),c=l(31682),d=l(70679);function b(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:l}=e;return(0,a.useMemo)(()=>{const e=t??function(e){return b(e).map(({props:{value:e,label:t,attributes:l,default:a}})=>({value:e,label:t,attributes:l,default:a}))}(l);return function(e){const t=(0,c.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,l])}function m({value:e,tabValues:t}){return t.some(t=>t.value===e)}function O({queryString:e=!1,groupId:t}){const l=(0,u.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(n),(0,a.useCallback)(e=>{if(!n)return;const t=new URLSearchParams(l.location.search);t.set(n,e),l.replace({...l.location,search:t.toString()})},[n,l])]}function N(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,r=h(e),[s,u]=(0,a.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=t.find(e=>e.default)??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r})),[i,c]=O({queryString:l,groupId:n}),[b,N]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[l,n]=(0,d.Dv)(t);return[l,(0,a.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),p=(()=>{const e=i??b;return m({value:e,tabValues:r})?e:null})();(0,o.A)(()=>{p&&u(p)},[p]);return{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),N(e)},[c,N,r]),tabValues:r}}var p=l(92303);const g="tabList__CuJ",k="tabItem_LNqP";var E=l(74848);function f({className:e,block:t,selectedValue:l,selectValue:a,tabValues:r}){const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),i=e=>{const t=e.currentTarget,n=u.indexOf(t),s=r[n].value;s!==l&&(o(t),a(s))},c=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const l=u.indexOf(e.currentTarget)+1;t=u[l]??u[0];break}case"ArrowLeft":{const l=u.indexOf(e.currentTarget)-1;t=u[l]??u[u.length-1];break}}t?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},e),children:r.map(({value:e,label:t,attributes:a})=>(0,E.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:e=>{u.push(e)},onKeyDown:c,onClick:i,...a,className:(0,n.A)("tabs__item",k,a?.className,{"tabs__item--active":l===e}),children:t??e},e))})}function T({lazy:e,children:t,selectedValue:l}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find(e=>e.props.value===l);return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:r.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))})}function v(e){const t=N(e);return(0,E.jsxs)("div",{className:(0,n.A)(r.G.tabs.container,"tabs-container",g),children:[(0,E.jsx)(f,{...t,...e}),(0,E.jsx)(T,{...t,...e})]})}function I(e){const t=(0,p.A)();return(0,E.jsx)(v,{...e,children:b(e.children)},String(t))}},68741(e,t,l){l.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,l){l.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);