"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5459],{62466(e,t,a){a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>N,default:()=>b,frontMatter:()=>h,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd/payload","slug":"/tech-docs/etcd/components/etcd/payload/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=a(74848),r=a(28453),s=a(60513),c=a(57390),o=a(9792),i=a(76331),u=a(58700),d=a(68741);const O={value:s.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${d.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${u.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${u.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${u.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${u.m.etcdctl.path}"


      LOG_TAG="etcd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current etcd version..."

      CURRENT_VERSION=$($INSTALL_PATH/etcd --version 2>/dev/null | grep 'etcd Version:' | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating etcd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading etcd..."
        curl -fsSL -o "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download etcd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "etcd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" etcd.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "etcd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdctl" $INSTALL_PATH
        install -m 755 "$TMP_DIR/etcd-$\{COMPONENT_VERSION}-linux-amd64/etcdutl" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] etcd successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] etcd is already up to date. Skipping installation."
      fi
    `},h={},N=void 0,m={},p=[];function E(e){return(0,l.jsxs)(i.A,{groupId:"install-type",children:[(0,l.jsxs)(o.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      mkdir -p /etc/default/etcd
    `}),(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${d.M.etcdctl.value}"
      REPOSITORY="${u.m.etcdctl.baseUrl}"
      EOF
    `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${O.value}
      EOF
    `}),(0,l.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,l.jsx)(c.A,{language:"yaml",children:s.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,l.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      cat <<EOF > /usr/lib/systemd/system/etcd-install.service
      [Unit]
      Description=Install and update in-cloud component etcd
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/etcd/download.env
      ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,l.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,l.jsxs)(o.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,l.jsx)(c.A,{language:"yaml",children:s.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${d.M.etcdctl.value}"
          REPOSITORY="${u.m.etcdctl.baseUrl}"
    `}),(0,l.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(c.A,{language:"yaml",children:s.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${O.value}
    `}),(0,l.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,l.jsx)(c.A,{language:"yaml",children:s.A`
      - path: /usr/lib/systemd/system/etcd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component etcd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/etcd/download.env
          ExecStart=/bin/bash -c "/etc/default/etcd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,l.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,l.jsx)(c.A,{language:"bash",children:s.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(E,{...e})}):E()}},9792(e,t,a){a.d(t,{A:()=>s});a(96540);var n=a(34164);const l="tabItem_Ymn6";var r=a(74848);function s({children:e,hidden:t,className:a}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(l,a),hidden:t,children:e})}},76331(e,t,a){a.d(t,{A:()=>_});var n=a(96540),l=a(34164),r=a(17559),s=a(23104),c=a(56347),o=a(205),i=a(57485),u=a(31682),d=a(70679);function O(e){return n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)(()=>{const e=t??function(e){return O(e).map(({props:{value:e,label:t,attributes:a,default:n}})=>({value:e,label:t,attributes:a,default:n}))}(a);return function(e){const t=(0,u.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,a])}function N({value:e,tabValues:t}){return t.some(t=>t.value===e)}function m({queryString:e=!1,groupId:t}){const a=(0,c.W6)(),l=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,i.aZ)(l),(0,n.useCallback)(e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})},[l,a])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=h(e),[s,c]=(0,n.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!N({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find(e=>e.default)??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r})),[i,u]=m({queryString:a,groupId:l}),[O,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[a,l]=(0,d.Dv)(t);return[a,(0,n.useCallback)(e=>{t&&l.set(e)},[t,l])]}({groupId:l}),E=(()=>{const e=i??O;return N({value:e,tabValues:r})?e:null})();(0,o.A)(()=>{E&&c(E)},[E]);return{selectedValue:s,selectValue:(0,n.useCallback)(e=>{if(!N({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)},[u,p,r]),tabValues:r}}var E=a(92303);const b="tabList__CuJ",g="tabItem_LNqP";var T=a(74848);function I({className:e,block:t,selectedValue:a,selectValue:n,tabValues:r}){const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),i=e=>{const t=e.currentTarget,l=c.indexOf(t),s=r[l].value;s!==a&&(o(t),n(s))},u=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},e),children:r.map(({value:e,label:t,attributes:n})=>(0,T.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:e=>{c.push(e)},onKeyDown:u,onClick:i,...n,className:(0,l.A)("tabs__item",g,n?.className,{"tabs__item--active":a===e}),children:t??e},e))})}function f({lazy:e,children:t,selectedValue:a}){const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=r.find(e=>e.props.value===a);return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:r.map((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))})}function v(e){const t=p(e);return(0,T.jsxs)("div",{className:(0,l.A)(r.G.tabs.container,"tabs-container",b),children:[(0,T.jsx)(I,{...t,...e}),(0,T.jsx)(f,{...t,...e})]})}function _(e){const t=(0,E.A)();return(0,T.jsx)(v,{...e,children:O(e.children)},String(t))}},68741(e,t,a){a.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,a){a.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);