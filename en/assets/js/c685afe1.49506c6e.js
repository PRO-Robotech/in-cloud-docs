"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2646,9107],{2320(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),s=n(28453),o=n(96336);const r={},i=void 0,d={},c=[...o.toc];function u(e){const t={li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"Component installation steps"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,l.jsx)(t.li,{children:"Environment variables."}),"\n",(0,l.jsx)(t.li,{children:"Download instructions."}),"\n",(0,l.jsx)(t.li,{children:"Permission setup."}),"\n",(0,l.jsx)(t.li,{children:"Download service."}),"\n",(0,l.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,l.jsx)(o.default,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},96336(e,t,n){n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>h,default:()=>p,frontMatter:()=>O,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var l=n(74848),s=n(28453),o=n(60513),r=n(57390),i=n(58700),d=n(68741);const c={value:o.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${d.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.kubeadm.path}"


      LOG_TAG="kubeadm-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current kubeadm version..."

      CURRENT_VERSION=$($INSTALL_PATH version -o json 2>/dev/null | jq -r '.clientVersion.gitVersion' | sed 's/^v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating kubeadm to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading kubeadm..."
        curl -fsSL -o kubeadm "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download kubeadm"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o kubeadm.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  kubeadm"}' kubeadm.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing kubeadm..."
        install -m 755 kubeadm "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] kubeadm successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] kubeadm is already up to date. Skipping installation."
      fi
    `};var u=n(9792),m=n(76331);const O={},h=void 0,N={},b=[];function k(e){return(0,l.jsxs)(m.A,{groupId:"install-type",children:[(0,l.jsxs)(u.A,{value:"Bash",children:[(0,l.jsx)("h4",{children:"Creating working directories"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,l.jsx)("h4",{children:"Environment variables"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${d.M.kubernetes.value}"
            REPOSITORY="${i.m.kubeadm.baseUrl}"
            EOF
          `}),(0,l.jsx)("h4",{children:"Download instructions"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${c.value}
          EOF
        `}),(0,l.jsx)("h4",{children:"Permission setup"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,l.jsx)("h4",{children:"Download service"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
          cat <<EOF > /usr/lib/systemd/system/kubeadm-install.service
          [Unit]
          Description=Install and update kubeadm
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/kubeadm/download.env
          ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
          EOF
        `}),(0,l.jsx)("h4",{children:"Download"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,l.jsxs)(u.A,{value:"Cloud-init",children:[(0,l.jsx)("h4",{children:"Environment variables"}),(0,l.jsx)(r.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${d.M.kubernetes.value}"
              REPOSITORY="${i.m.kubeadm.baseUrl}"
        `}),(0,l.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,l.jsx)(r.A,{language:"yaml",children:o.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${c.value}
        `}),(0,l.jsx)("h4",{children:"Download service"}),(0,l.jsx)(r.A,{language:"yaml",children:o.A`
          - path: /usr/lib/systemd/system/kubeadm-install.service
            owner: root:root
            permissions: '0644'
            content: |
              [Unit]
              Description=Install and update kubeadm
              After=network.target
              Wants=network-online.target

              [Service]
              Type=oneshot
              EnvironmentFile=-/etc/default/kubeadm/download.env
              ExecStart=/bin/bash -c "/etc/default/kubeadm/download-script.sh"
              RemainAfterExit=yes

              [Install]
              WantedBy=multi-user.target
        `}),(0,l.jsx)("h4",{children:"Download"}),(0,l.jsx)(r.A,{language:"bash",children:o.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(k,{...e})}):k()}},68741(e,t,n){n.d(t,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);