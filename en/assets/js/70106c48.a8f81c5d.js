"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[7344],{52762(e,t,l){l.r(t),l.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>T,frontMatter:()=>N,metadata:()=>n,toc:()=>E});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/en/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=l(74848),c=l(28453),s=l(60513),i=l(57390),r=l(9792),d=l(76331),o=l(58700),O=l(68741);const u={value:s.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${O.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${o.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${o.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${o.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${o.m.etcdctl.path}"


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
    `},N={},m=void 0,h={},E=[];function g(e){return(0,a.jsxs)(d.A,{groupId:"install-type",children:[(0,a.jsxs)(r.A,{value:"Bash",children:[(0,a.jsx)("h4",{children:"Creating working directories"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
      mkdir -p /etc/default/etcd
    `}),(0,a.jsx)("h4",{children:"Environment variables"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${O.M.etcdctl.value}"
      REPOSITORY="${o.m.etcdctl.baseUrl}"
      EOF
    `}),(0,a.jsx)("h4",{children:"Download instructions"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${u.value}
      EOF
    `}),(0,a.jsx)("h4",{children:"Setting permissions"}),(0,a.jsx)(i.A,{language:"yaml",children:s.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,a.jsx)("h4",{children:"Download service"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
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
    `}),(0,a.jsx)("h4",{children:"Download"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,a.jsxs)(r.A,{value:"Cloud-init",children:[(0,a.jsx)("h4",{children:"Environment variables"}),(0,a.jsx)(i.A,{language:"yaml",children:s.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${O.M.etcdctl.value}"
          REPOSITORY="${o.m.etcdctl.baseUrl}"
    `}),(0,a.jsx)("h4",{children:"Download instructions"}),(0,a.jsx)(i.A,{language:"yaml",children:s.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${u.value}
    `}),(0,a.jsx)("h4",{children:"Download service"}),(0,a.jsx)(i.A,{language:"yaml",children:s.A`
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
    `}),(0,a.jsx)("h4",{children:"Download"}),(0,a.jsx)(i.A,{language:"bash",children:s.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function T(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g()}},68741(e,t,l){l.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,l){l.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);