"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[965,2632,2801],{67737(e,n,t){t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>O,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownload","title":"Containerd","description":"","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleDownload.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownload","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleDownload","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),r=t(28453),i=t(88193);const l={},s="Containerd",c={},d=[...i.toc];function u(e){const n={h1:"h1",header:"header",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"containerd",children:"Containerd"})}),"\n",(0,o.jsx)(i.default,{})]})}function O(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},88193(e,n,t){t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>O,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"Component installation steps","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","permalink":"/en/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),r=t(28453),i=t(87672);const l={},s=void 0,c={},d=[...i.toc];function u(e){const n={li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Component installation steps"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Creating working directories."}),"\n",(0,o.jsx)(n.li,{children:"Environment variables."}),"\n",(0,o.jsx)(n.li,{children:"Download instructions."}),"\n",(0,o.jsx)(n.li,{children:"Permission setup."}),"\n",(0,o.jsx)(n.li,{children:"Download service."}),"\n",(0,o.jsx)(n.li,{children:"Starting the download service."}),"\n"]}),"\n",(0,o.jsx)(i.default,{})]})}function O(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},87672(e,n,t){t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>m,default:()=>E,frontMatter:()=>h,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/downloadBIN","title":"downloadBIN","description":"Creating working directories","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/components/containerd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","permalink":"/en/tech-docs/kubernetes/components/containerd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var o=t(74848),r=t(28453),i=t(60513),l=t(57390),s=t(58700),c=t(68741);const d={value:i.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${c.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${s.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${s.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${s.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${s.m.containerd.path}"


      LOG_TAG="containerd-installer"
      TMP_DIR="$(mktemp -d)"

      logger -t "$LOG_TAG" "[INFO] Checking current containerd version..."

      CURRENT_VERSION=$($INSTALL_PATH/containerd --version 2>/dev/null | awk '{print $3}' | sed 's/v//') || CURRENT_VERSION="none"
      COMPONENT_VERSION_CLEAN=$(echo "$COMPONENT_VERSION" | sed 's/^v//')

      logger -t "$LOG_TAG" "[INFO] Current: $CURRENT_VERSION, Target: $COMPONENT_VERSION_CLEAN"

      if [[ "$CURRENT_VERSION" != "$COMPONENT_VERSION_CLEAN" ]]; then
        logger -t "$LOG_TAG" "[INFO] Download URL: $PATH_BIN"
        logger -t "$LOG_TAG" "[INFO] Updating containerd to version $COMPONENT_VERSION_CLEAN..."

        cd "$TMP_DIR"
        logger -t "$LOG_TAG" "[INFO] Working directory: $PWD"

        logger -t "$LOG_TAG" "[INFO] Downloading containerd..."
        curl -fsSL -o "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz" "$PATH_BIN" || { logger -t "$LOG_TAG" "[ERROR] Failed to download containerd"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Downloading checksum file..."
        curl -fsSL -o "containerd.sha256sum" "$PATH_SHA256" || { logger -t "$LOG_TAG" "[ERROR] Failed to download checksum file"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Verifying checksum..."
        sha256sum -c containerd.sha256sum | grep 'OK' || { logger -t "$LOG_TAG" "[ERROR] Checksum verification failed!"; exit 1; }

        logger -t "$LOG_TAG" "[INFO] Extracting files..."
        tar -C "$TMP_DIR" -xvf "containerd-$\{COMPONENT_VERSION}-linux-amd64.tar.gz"

        logger -t "$LOG_TAG" "[INFO] Installing binaries..."
        install -m 755 "$TMP_DIR/bin/containerd" $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/containerd-shim"* $INSTALL_PATH
        install -m 755 "$TMP_DIR/bin/ctr" $INSTALL_PATH

        logger -t "$LOG_TAG" "[INFO] Containerd successfully updated to $COMPONENT_VERSION."
        rm -rf "$TMP_DIR"

      else
        logger -t "$LOG_TAG" "[INFO] Containerd is already up to date. Skipping installation."
      fi
    `};var u=t(9792),O=t(76331);const h={},m=void 0,N={},p=[];function g(e){return(0,o.jsxs)(O.A,{groupId:"install-type",children:[(0,o.jsxs)(u.A,{value:"Bash",children:[(0,o.jsx)("h4",{children:"Creating working directories"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
        mkdir -p /etc/default/containerd
      `}),(0,o.jsx)("h4",{children:"Environment variables"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${c.M.containerd.value}"
        REPOSITORY="${s.m.containerd.baseUrl}"
        EOF
      `}),(0,o.jsx)("h4",{children:"Download instructions"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${d.value}
        EOF
      `}),(0,o.jsx)("h4",{children:"Permission setup"}),(0,o.jsx)(l.A,{language:"yaml",children:i.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,o.jsx)("h4",{children:"Download service"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
        cat <<EOF > /usr/lib/systemd/system/containerd-install.service
        [Unit]
        Description=Install and update in-cloud component containerd
        After=network.target
        Wants=network-online.target

        [Service]
        Type=oneshot
        EnvironmentFile=-/etc/default/containerd/download.env
        ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
        RemainAfterExit=yes

        [Install]
        WantedBy=multi-user.target
        EOF
      `}),(0,o.jsx)("h4",{children:"Starting the download service"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,o.jsxs)(u.A,{value:"Cloud-init",children:[(0,o.jsx)("h4",{children:"Environment variables"}),(0,o.jsx)(l.A,{language:"yaml",children:i.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${c.M.containerd.value}"
          REPOSITORY="${s.m.containerd.baseUrl}"
    `}),(0,o.jsx)("h4",{children:"Download instructions/Permission setup"}),(0,o.jsx)(l.A,{language:"yaml",children:i.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${d.value}
    `}),(0,o.jsx)("h4",{children:"Download service"}),(0,o.jsx)(l.A,{language:"yaml",children:i.A`
      - path: /usr/lib/systemd/system/containerd-install.service
        owner: root:root
        permissions: '0644'
        content: |
          [Unit]
          Description=Install and update in-cloud component containerd
          After=network.target
          Wants=network-online.target

          [Service]
          Type=oneshot
          EnvironmentFile=-/etc/default/containerd/download.env
          ExecStart=/bin/bash -c "/etc/default/containerd/download-script.sh"
          RemainAfterExit=yes

          [Install]
          WantedBy=multi-user.target
    `}),(0,o.jsx)("h4",{children:"Starting the download service"}),(0,o.jsx)(l.A,{language:"bash",children:i.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g()}},68741(e,n,t){t.d(n,{M:()=>a});const a={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,n,t){t.d(n,{m:()=>a});const a={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);