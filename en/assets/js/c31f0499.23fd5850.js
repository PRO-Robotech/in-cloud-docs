"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[8662],{17255(e,n,t){t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>p,frontMatter:()=>N,metadata:()=>l,toc:()=>E});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(74848),a=t(28453),s=t(60513),c=t(57390),i=t(58700),o=t(68741);const u={value:s.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${i.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.runc.path}"

      LOG_TAG="runc-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current runc version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | head -n1 | awk '{print $NF}') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating runc to version $COMPONENT_VERSION..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading runc..."
        curl -fsSL -o runc.amd64 "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download runc"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o runc.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        grep "runc.amd64" runc.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Installing runc..."
        install -m 755 runc.amd64 "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] runc successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] runc is already up to date. Skipping installation."
      fi
    `};var d=t(9792),O=t(76331);const N={},h=void 0,m={},E=[];function g(e){return(0,r.jsxs)(O.A,{groupId:"install-type",children:[(0,r.jsxs)(d.A,{value:"Bash",children:[(0,r.jsx)("h4",{children:"Creating working directories"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      mkdir -p /etc/default/runc
    `}),(0,r.jsx)("h4",{children:"Environment variables"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${o.M.runc.value}"
      REPOSITORY="${i.m.runc.baseUrl}"
      EOF
    `}),(0,r.jsx)("h4",{children:"Download instructions"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${u.value}
      EOF
    `}),(0,r.jsx)("h4",{children:"Permissions setup"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,r.jsx)("h4",{children:"Download service"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      cat <<EOF > /usr/lib/systemd/system/runc-install.service
      [Unit]
      Description=Install and update in-cloud component runc
      After=network.target
      Wants=network-online.target

      [Service]
      Type=oneshot
      EnvironmentFile=-/etc/default/runc/download.env
      ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
      RemainAfterExit=yes

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,r.jsx)("h4",{children:"Download"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,r.jsxs)(d.A,{value:"Cloud-init",children:[(0,r.jsx)("h4",{children:"Environment variables"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${o.M.runc.value}"
          REPOSITORY="${i.m.runc.baseUrl}"
    `}),(0,r.jsx)("h4",{children:"Download instructions/Permissions setup"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.value}
    `}),(0,r.jsx)("h4",{children:"Download service"}),(0,r.jsx)(c.A,{language:"yaml",children:s.A`
      - path: /usr/lib/systemd/system/runc-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component runc
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/runc/download.env
          ExecStart=/bin/bash -c "/etc/default/runc/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,r.jsx)("h4",{children:"Download"}),(0,r.jsx)(c.A,{language:"bash",children:s.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g()}},68741(e,n,t){t.d(n,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,n,t){t.d(n,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);