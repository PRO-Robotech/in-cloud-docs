"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5188],{9792:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var l=a(34164);const n={tabItem:"tabItem_Ymn6"};var r=a(74848);function s({children:e,hidden:t,className:a}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(n.tabItem,a),hidden:t,children:e})}},30328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>O,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>l,toc:()=>N});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl/payload","slug":"/tech-docs/kubernetes/components/kubectl/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubectl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=a(74848),r=a(28453),s=a(60513),u=a(68747),o=a(58700),c=a(68741);const i={data:{value:s.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${c.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${o.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${o.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${o.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${o.m.kubectl.path}"


      LOG_TAG="kubectl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubectl version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json --client=true 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubectl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubectl..."
        curl -fsSL -o kubectl "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubectl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubectl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubectl"}' kubectl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubectl..."
        install -m 755 kubectl "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubectl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubectl is already up to date. Skipping installation."
      fi
    `}};var d=a(9792),b=a(76331);const h={},m=void 0,O={},N=[];function p(e){return(0,n.jsxs)(b.A,{groupId:"install-type",children:[(0,n.jsxs)(d.A,{value:"Bash",children:[(0,n.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
            mkdir -p /etc/default/kubectl
          `}),(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${c.M.kubernetes.value}"
            REPOSITORY="${o.m.kubectl.baseUrl}"
            EOF
          `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${i.data.value}
          EOF
        `}),(0,n.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,n.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          cat <<EOF > /usr/lib/systemd/system/kubectl-install.service
          [Unit]
          Description=Install and update kubectl
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubectl/download.env
          ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,n.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,n.jsxs)(d.A,{value:"Cloud-init",children:[(0,n.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${c.M.kubernetes.value}"
              REPOSITORY="${o.m.kubectl.baseUrl}"
        `}),(0,n.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${i.data.value}
        `}),(0,n.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,n.jsx)(u.A,{language:"yaml",children:s.A`
          - path: /usr/lib/systemd/system/kubectl-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubectl
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubectl/download.env
              ExecStart=/bin/bash -c "/etc/default/kubectl/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,n.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,n.jsx)(u.A,{language:"bash",children:s.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p()}},58700:(e,t,a)=>{a.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},68741:(e,t,a)=>{a.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},76331:(e,t,a)=>{a.d(t,{A:()=>I});var l=a(96540),n=a(34164),r=a(23104),s=a(56347),u=a(205),o=a(57485),c=a(31682),i=a(70679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((({props:{value:e,label:t,attributes:a,default:l}})=>({value:e,label:t,attributes:a,default:l})))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h({value:e,tabValues:t}){return t.some((t=>t.value===e))}function m({queryString:e=!1,groupId:t}){const a=(0,s.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(n),(0,l.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function O(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=b(e),[s,o]=(0,l.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:n}),[O,N]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,n]=(0,i.Dv)(t);return[a,(0,l.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),p=(()=>{const e=c??O;return h({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{p&&o(p)}),[p]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),N(e)}),[d,N,r]),tabValues:r}}var N=a(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function k({className:e,block:t,selectedValue:a,selectValue:l,tabValues:s}){const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==a&&(o(t),l(r))},i=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},e),children:s.map((({value:e,label:t,attributes:l})=>(0,g.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{u.push(e)},onKeyDown:i,onClick:c,...l,className:(0,n.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":a===e}),children:t??e},e)))})}function E({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function f(e){const t=O(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",p.tabList),children:[(0,g.jsx)(k,{...t,...e}),(0,g.jsx)(E,{...t,...e})]})}function I(e){const t=(0,N.A)();return(0,g.jsx)(f,{...e,children:d(e.children)},String(t))}}}]);