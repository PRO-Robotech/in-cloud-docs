"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5057,9259],{19417(e,t,n){n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>O,frontMatter:()=>r,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(86426);const r={},i=void 0,c={},u=[...o.toc];function d(e){const t={li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permissions setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(o.default,{})]})}function O(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},86426(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>p,frontMatter:()=>h,metadata:()=>l,toc:()=>m});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),o=n(60513),r=n(57390),i=n(58700),c=n(68741);const u={value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${c.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubelet.path}"


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
    `};var d=n(9792),O=n(76331);const h={},N=void 0,b={},m=[];function k(e){return(0,s.jsxs)(O.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubelet
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${c.M.kubernetes.value}"
            REPOSITORY="${i.m.kubelet.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${u.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"Permissions setup"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(r.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${c.M.kubernetes.value}"
              REPOSITORY="${i.m.kubelet.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"Download instructions/Permissions setup"}),(0,s.jsx)(r.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.value}
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(r.A,{language:"yaml",children:o.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(r.A,{language:"bash",children:o.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},68741(e,t,n){n.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);