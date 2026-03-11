"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[9076],{14256(e,t,l){l.r(t),l.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>p,frontMatter:()=>N,metadata:()=>n,toc:()=>E});const n=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/crictl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/crictl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=l(74848),r=l(28453),a=l(60513),i=l(57390),s=l(58700),o=l(68741);const d={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${o.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${s.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${s.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${s.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${s.m.crictl.path}"


      LOG_TAG="crictl-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current crictl version..."

      CURRENT_VERSION=$($INSTALL_PATH --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating crictl to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading crictl..."
        curl -fsSL -o crictl.tar.gz "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download crictl"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o crictl.sha256sum "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        awk '{print $1"  crictl.tar.gz"}' crictl.sha256sum | sha256sum -c - || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf crictl.tar.gz

        logger -t "$LOG_TAG" "[INFO] Installing crictl..."
        install -m 755 "$TMP_DIR/crictl" "$INSTALL_PATH"

        logger -t "$LOG_TAG" "[INFO] crictl successfully updated to $COMPONENT_VERSION_CLEAN."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] crictl is already up to date. Skipping installation."
      fi
    `};var u=l(9792),O=l(76331);const N={},h=void 0,m={},E=[];function g(e){return(0,c.jsxs)(O.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"Creating working directories"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            mkdir -p /etc/default/crictl
          `}),(0,c.jsx)("h4",{children:"Environment variables"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${o.M.crictl.value}"
            REPOSITORY="${s.m.crictl.baseUrl}"
            EOF
          `}),(0,c.jsx)("h4",{children:"Download instructions"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${d.value}
            EOF
          `}),(0,c.jsx)("h4",{children:"Permission setup"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,c.jsx)("h4",{children:"Download service"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            cat <<EOF > /usr/lib/systemd/system/crictl-install.service
            [Unit]
            Description=Install and update in-cloud component crictl
            After=network.target
            Wants=network-online.target

            [Service]
            Type=oneshot
            EnvironmentFile=-/etc/default/crictl/download.env
            ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
            RemainAfterExit=yes

            [Install]
            WantedBy=multi-user.target
            EOF
          `}),(0,c.jsx)("h4",{children:"Download"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"Environment variables"}),(0,c.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${o.M.crictl.value}"
                REPOSITORY="${s.m.crictl.baseUrl}"
          `}),(0,c.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,c.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${d.value}
          `}),(0,c.jsx)("h4",{children:"Download service"}),(0,c.jsx)(i.A,{language:"yaml",children:a.A`
            - path: /usr/lib/systemd/system/crictl-install.service
              owner: root:root
              permissions: '0644'
              content: |
                [Unit]
                Description=Install and update in-cloud component crictl
                After=network.target
                Wants=network-online.target

                [Service]
                Type=oneshot
                EnvironmentFile=-/etc/default/crictl/download.env
                ExecStart=/bin/bash -c "/etc/default/crictl/download-script.sh"
                RemainAfterExit=yes

                [Install]
                WantedBy=multi-user.target
          `}),(0,c.jsx)("h4",{children:"Download"}),(0,c.jsx)(i.A,{language:"bash",children:a.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},68741(e,t,l){l.d(t,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,l){l.d(t,{m:()=>n});const n={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);