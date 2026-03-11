"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[6461,6769],{4588(e,t,n){n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>N,default:()=>p,frontMatter:()=>h,metadata:()=>l,toc:()=>m});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(60513),o=n(57390),r=n(58700),i=n(68741);const u={value:c.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${r.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${r.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${r.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${r.m.kubectl.path}"


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
    `};var d=n(9792),O=n(76331);const h={},N=void 0,b={},m=[];function k(e){return(0,s.jsxs)(O.A,{groupId:"install-type",children:[(0,s.jsxs)(d.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"Creating working directories"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
            mkdir -p /etc/default/kubectl
          `}),(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${i.M.kubernetes.value}"
            REPOSITORY="${r.m.kubectl.baseUrl}"
            EOF
          `}),(0,s.jsx)("h4",{children:"Download instructions"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${u.value}
          EOF
        `}),(0,s.jsx)("h4",{children:"Permission setup"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,s.jsxs)(d.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"Environment variables"}),(0,s.jsx)(o.A,{language:"yaml",children:c.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${i.M.kubernetes.value}"
              REPOSITORY="${r.m.kubectl.baseUrl}"
        `}),(0,s.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,s.jsx)(o.A,{language:"yaml",children:c.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${u.value}
        `}),(0,s.jsx)("h4",{children:"Download service"}),(0,s.jsx)(o.A,{language:"yaml",children:c.A`
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
        `}),(0,s.jsx)("h4",{children:"Download"}),(0,s.jsx)(o.A,{language:"bash",children:c.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k()}},81127(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>O,frontMatter:()=>o,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453),c=n(4588);const o={},r=void 0,i={},u=[...c.toc];function d(e){const t={li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Component installation steps"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Creating working directories."}),"\n",(0,s.jsx)(t.li,{children:"Environment variables."}),"\n",(0,s.jsx)(t.li,{children:"Download instructions."}),"\n",(0,s.jsx)(t.li,{children:"Permission setup."}),"\n",(0,s.jsx)(t.li,{children:"Download service."}),"\n",(0,s.jsx)(t.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,s.jsx)(c.default,{})]})}function O(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},68741(e,t,n){n.d(t,{M:()=>l});const l={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>l});const l={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);