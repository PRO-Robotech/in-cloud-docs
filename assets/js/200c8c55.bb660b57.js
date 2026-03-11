"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[359,824,876,1449,1622,1813,2412,3605,4467,4668,5139,5660,5782,6156,7162,7499,7813,8001,8069,8154,8414,8606,8912,9876,9967],{69993(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.N,{binaryName:"etcd",version:r.M.etcd.value,installSteps:["Installing etcd..."],successMessage:"etcd successfully updated to",grepCommand:"'etcd'",lsOutput:"-rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd\n-rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl\n-rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl"}),(0,c.jsx)(l.y,{command:"etcd --version",output:"etcd Version: 3.5.5\nGit SHA: 19002cfc6\nGo Version: go1.16.15\nGo OS/Arch: linux/amd64"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},57368(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(9792),i=n(76331),d=n(58700),u=n(68741);const m={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${u.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${d.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${d.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${d.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${d.m.etcdctl.path}"


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
    `},h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(i.A,{groupId:"install-type",children:[(0,c.jsxs)(a.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      mkdir -p /etc/default/etcd
    `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${u.M.etcdctl.value}"
      REPOSITORY="${d.m.etcdctl.baseUrl}"
      EOF
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${m.value}
      EOF
    `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,c.jsxs)(a.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${u.M.etcdctl.value}"
          REPOSITORY="${d.m.etcdctl.baseUrl}"
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${m.value}
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},47632(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/etcd/components/etcd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","permalink":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(57368);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},5730(e,t,n){n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>j,default:()=>R,frontMatter:()=>A,metadata:()=>s,toc:()=>I});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/all-install","title":"5.2.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/kubernetes/components/allInstallComponent.mdx","sourceDirName":"tech-docs/kubernetes/components","slug":"/tech-docs/kubernetes/components/all-install","permalink":"/tech-docs/kubernetes/components/all-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-install","title":"5.2.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e"},"sidebar":"techDocs","previous":{"title":"5.2.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/tech-docs/kubernetes/setup-environments/os-setup"},"next":{"title":"5.2.1.3. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041f\u041e","permalink":"/tech-docs/kubernetes/components/all-setup"}}');var c=n(74848),o=n(28453),l=n(83282),r=n(55665),a=n(28796),i=n(78765),d=n(70586),u=n(4038),m=n(46981),h=n(63702),p=n(21685),O=n(24542),N=n(12236),g=n(98471),x=n(47632),b=n(69993),f=n(9792),k=n(76331);const A={id:"all-install",title:"5.2.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e"},j=void 0,E={},I=[...a.toc,...i.toc,...l.toc,...r.toc,...d.toc,...u.toc,...x.toc,...b.toc,...m.toc,...h.toc,...p.toc,...O.toc,...N.toc,...g.toc];function T(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b Kubernetes-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.\n\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u044d\u0442\u0430\u043f\u043e\u0432 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."}),"\n"]}),"\n",(0,c.jsxs)(k.A,{groupId:"component",children:[(0,c.jsx)(f.A,{value:"runc",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 runc"}),(0,c.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(a.default,{}),(0,c.jsx)(i.default,{})]})}),(0,c.jsx)(f.A,{value:"containerd",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 containerd"}),(0,c.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(l.default,{}),(0,c.jsx)(r.default,{})]})}),(0,c.jsx)(f.A,{value:"kubelet",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubelet"}),(0,c.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(d.default,{}),(0,c.jsx)(u.default,{})]})}),(0,c.jsx)(f.A,{value:"etcd",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,c.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(x.default,{}),(0,c.jsx)(b.default,{})]})}),(0,c.jsx)(f.A,{value:"kubectl",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubectl"}),(0,c.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(m.default,{}),(0,c.jsx)(h.default,{})]})}),(0,c.jsx)(f.A,{value:"crictl",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 crictl"}),(0,c.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(p.default,{}),(0,c.jsx)(O.default,{})]})}),(0,c.jsx)(f.A,{value:"kubeadm",children:(0,c.jsxs)(n,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 kubeadm"}),(0,c.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(N.default,{}),(0,c.jsx)(g.default,{})]})})]})]})}function R(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(T,{...e})}):T(e)}},55665(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/containerd/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/checkBIN","permalink":"/tech-docs/kubernetes/components/containerd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(11355);const r={},a=void 0,i={},d=[...l.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},83282(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(66140);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},11355(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd","slug":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/containerd/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,c.jsx)(l.N,{binaryName:"containerd",version:r.M.containerd.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"Containerd successfully updated to",grepCommand:'-E "containerd|ctr"',lsOutput:"-rwxr-xr-x  1 root root  54855296 Feb 18 15:12 containerd\n-rwxr-xr-x  1 root root   7176192 Feb 18 15:12 containerd-shim\n-rwxr-xr-x  1 root root   8884224 Feb 18 15:12 containerd-shim-containerd-v1\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 containerd-shim-containerd-v2\n-rwxr-xr-x  1 root root  12169216 Feb 18 15:12 ctr"}),"\n",(0,c.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,c.jsx)(l.y,{command:"containerd --version",output:"containerd github.com/containerd/containerd v1.7.19 2bf793ef6dc9a18e00cb12efb64355c2c9d5eb41"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},66140(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/containerd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.containerd.value}}"
      REPOSITORY="$\{REPOSITORY:-${a.m.containerd.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${a.m.containerd.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.containerd.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.containerd.path}"


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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
        mkdir -p /etc/default/containerd
      `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
        cat <<EOF > /etc/default/containerd/download.env
        COMPONENT_VERSION="${i.M.containerd.value}"
        REPOSITORY="${a.m.containerd.baseUrl}"
        EOF
      `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
        cat <<"EOF" > /etc/default/containerd/download-script.sh
        ${d.value}
        EOF
      `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
        chmod +x /etc/default/containerd/download-script.sh
      `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
      `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
        systemctl enable containerd-install.service
        systemctl start containerd-install.service
      `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      - path: /etc/default/containerd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${i.M.containerd.value}"
          REPOSITORY="${a.m.containerd.baseUrl}"
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      - path: /etc/default/containerd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${d.value}
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      - systemctl enable containerd-install.service
      - systemctl start containerd-install.service
    `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},24542(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/crictl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/checkBIN","permalink":"/tech-docs/kubernetes/components/crictl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.N,{binaryName:"crictl",version:r.M.crictl.value,installSteps:["Installing crictl..."],successMessage:"crictl successfully updated to",grepCommand:"'crictl$'",lsOutput:"-rwxr-xr-x  1 1001  127  58376628 Apr 18  2024 crictl"}),(0,c.jsx)(l.y,{command:"crictl --version",output:"crictl version v1.30.0"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},21685(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl","slug":"/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/crictl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(77613);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},77613(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/crictl/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/crictl/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/crictl/payload","slug":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/crictl/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.crictl.value}}"
      REPOSITORY="$\{REPOSITORY:-${a.m.crictl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${a.m.crictl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.crictl.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.crictl.path}"


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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            mkdir -p /etc/default/crictl
          `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            cat <<EOF > /etc/default/crictl/download.env
            COMPONENT_VERSION="${i.M.crictl.value}"
            REPOSITORY="${a.m.crictl.baseUrl}"
            EOF
          `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            cat <<"EOF" > /etc/default/crictl/download-script.sh
            ${d.value}
            EOF
          `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            chmod +x /etc/default/crictl/download-script.sh
          `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
          `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            systemctl enable crictl-install.service
            systemctl start crictl-install.service
          `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
            - path: /etc/default/crictl/download.env
              owner: root:root
              permissions: '0644'
              content: |
                COMPONENT_VERSION="${i.M.crictl.value}"
                REPOSITORY="${a.m.crictl.baseUrl}"
          `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
            - path: /etc/default/crictl/download-script.sh
              owner: root:root
              permissions: '0755'
              content: |
                ${d.value}
          `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
          `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            - systemctl enable crictl-install.service
            - systemctl start crictl-install.service
          `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},98471(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/checkBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.N,{binaryName:"kubeadm",version:r.M.kubernetes.value,installSteps:["Extracting files...","Installing binaries..."],successMessage:"kubeadm successfully updated to",grepCommand:"'kubeadm$'",lsOutput:"-rwxr-xr-x  1 root root  50253976 Aug 14  2024 kubeadm"}),(0,c.jsx)(l.y,{command:"kubeadm version",output:'kubeadm version: &version.Info{Major:"1", Minor:"30", GitVersion:"v1.30.4", GitCommit:"a51b3b711150f57ffc1f526a640ec058514ed596", GitTreeState:"clean", BuildDate:"2024-08-14T19:02:46Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}'})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},12236(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm","slug":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubeadm/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(15652);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},15652(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubeadm/payload","slug":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubeadm/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${a.m.kubeadm.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${a.m.kubeadm.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.kubeadm.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.kubeadm.path}"


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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            mkdir -p /etc/default/kubeadm
          `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            cat <<EOF > /etc/default/kubeadm/download.env
            COMPONENT_VERSION="${i.M.kubernetes.value}"
            REPOSITORY="${a.m.kubeadm.baseUrl}"
            EOF
          `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          cat <<"EOF" > /etc/default/kubeadm/download-script.sh
          ${d.value}
          EOF
        `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          chmod +x /etc/default/kubeadm/download-script.sh
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          systemctl enable kubeadm-install.service
          systemctl start kubeadm-install.service
        `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubeadm/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${i.M.kubernetes.value}"
              REPOSITORY="${a.m.kubeadm.baseUrl}"
        `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubeadm/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.value}
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          - systemctl enable kubeadm-install.service
          - systemctl start kubeadm-install.service
        `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},63702(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubectl/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/checkBIN","permalink":"/tech-docs/kubernetes/components/kubectl/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(89483);const r={},a=void 0,i={},d=[...l.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},19925(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubectl/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubectl/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${a.m.kubectl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${a.m.kubectl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.kubectl.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.kubectl.path}"


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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            mkdir -p /etc/default/kubectl
          `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            cat <<EOF > /etc/default/kubectl/download.env
            COMPONENT_VERSION="${i.M.kubernetes.value}"
            REPOSITORY="${a.m.kubectl.baseUrl}"
            EOF
          `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          cat <<"EOF" > /etc/default/kubectl/download-script.sh
          ${d.value}
          EOF
        `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          chmod +x /etc/default/kubectl/download-script.sh
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          systemctl enable kubectl-install.service
          systemctl start kubectl-install.service
        `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubectl/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${i.M.kubernetes.value}"
              REPOSITORY="${a.m.kubectl.baseUrl}"
        `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubectl/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.value}
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          - systemctl enable kubectl-install.service
          - systemctl start kubectl-install.service
        `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},46981(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(19925);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},89483(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/kubectl","slug":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/kubectl/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,c.jsx)(l.N,{binaryName:"kubectl",version:r.M.kubernetes.value,installSteps:["Installing kubectl..."],successMessage:"kubectl successfully updated to",grepCommand:"'kubectl$'",lsOutput:"-rwxr-xr-x  1 root root  51454104 Aug 14  2024 kubectl"}),"\n",(0,c.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,c.jsx)(l.y,{command:"kubectl version",output:"Client Version: v1.30.4\nKustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},4038(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/kubelet/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/checkBIN","permalink":"/tech-docs/kubernetes/components/kubelet/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.N,{binaryName:"kubelet",version:r.M.kubernetes.value,installSteps:["Installing kubelet..."],successMessage:"kubelet successfully updated to",grepCommand:"'kubelet$'",lsOutput:"-rwxr-xr-x  1 root root 100125080 Aug 14  2024 kubelet"}),(0,c.jsx)(l.y,{command:"kubelet --version",output:"Kubernetes v1.30.4"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}},70586(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet","slug":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/kubelet/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(80823);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},80823(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/kubelet/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/kubelet/payload/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/kubelet/payload","slug":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","permalink":"/tech-docs/kubernetes/components/kubelet/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.kubernetes.value}}"
      REPOSITORY="$\{REPOSITORY:-${a.m.kubelet.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${a.m.kubelet.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.kubelet.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.kubelet.path}"


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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            mkdir -p /etc/default/kubelet
          `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
            cat <<EOF > /etc/default/kubelet/download.env
            COMPONENT_VERSION="${i.M.kubernetes.value}"
            REPOSITORY="${a.m.kubelet.baseUrl}"
            EOF
          `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          cat <<"EOF" > /etc/default/kubelet/download-script.sh
          ${d.value}
          EOF
        `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          chmod +x /etc/default/kubelet/download-script.sh
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          systemctl enable kubelet-install.service
          systemctl start kubelet-install.service
        `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubelet/download.env
            owner: root:root
            permissions: '0644'
            content: |
              COMPONENT_VERSION="${i.M.kubernetes.value}"
              REPOSITORY="${a.m.kubelet.baseUrl}"
        `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
          - path: /etc/default/kubelet/download-script.sh
            owner: root:root
            permissions: '0755'
            content: |
              ${d.value}
        `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
        `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
          - systemctl enable kubelet-install.service
          - systemctl start kubelet-install.service
        `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},78765(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/kubernetes/components/runc/checkBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/checkBIN","permalink":"/tech-docs/kubernetes/components/runc/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(3813);const r={},a=void 0,i={},d=[...l.toc];function u(e){const{Details:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.default,{})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},96696(e,t,n){n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>p,default:()=>x,frontMatter:()=>h,metadata:()=>s,toc:()=>N});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/kubernetes/components/runc/downloadBIN.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/downloadBIN","permalink":"/tech-docs/kubernetes/components/runc/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(60513),r=n(57390),a=n(58700),i=n(68741);const d={value:l.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${i.M.runc.value}}"
      REPOSITORY="$\{REPOSITORY:-https://github.com/opencontainers/runc/releases/download}"
      PATH_BIN="$\{REPOSITORY}/${a.m.runc.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${a.m.runc.templateUrlBinCheckSum}"
      INSTALL_PATH="${a.m.runc.path}"

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
    `};var u=n(9792),m=n(76331);const h={},p=void 0,O={},N=[];function g(e){return(0,c.jsxs)(m.A,{groupId:"install-type",children:[(0,c.jsxs)(u.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      mkdir -p /etc/default/runc
    `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      cat <<EOF > /etc/default/runc/download.env
      COMPONENT_VERSION="${i.M.runc.value}"
      REPOSITORY="${a.m.runc.baseUrl}"
      EOF
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      cat <<"EOF" > /etc/default/runc/download-script.sh
      ${d.value}
      EOF
    `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      chmod +x /etc/default/runc/download-script.sh
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      systemctl enable runc-install.service
      systemctl start runc-install.service
    `})]}),(0,c.jsxs)(u.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      - path: /etc/default/runc/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${i.M.runc.value}"
          REPOSITORY="${a.m.runc.baseUrl}"
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438/\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
      - path: /etc/default/runc/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${d.value}
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"yaml",children:l.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(r.A,{language:"bash",children:l.A`
      - systemctl enable runc-install.service
      - systemctl start runc-install.service
    `})]})]})}function x(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(g,{...e})}):g()}},28796(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(96696);const r={},a=void 0,i={},d=[...l.toc];function u(e){const t={li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(l.default,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},3813(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","title":"lifecycleDownloadStatus","description":"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b","source":"@site/docs/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus.mdx","sourceDirName":"tech-docs/kubernetes/components/runc","slug":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","permalink":"/tech-docs/kubernetes/components/runc/lifecycleDownloadStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),o=n(28453),l=n(94949),r=n(68741);const a={},i=void 0,d={},u=[];function m(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"}),"\n",(0,c.jsx)(l.N,{binaryName:"runc",version:r.M.runc.value,installSteps:["Installing runc..."],successMessage:"runc successfully updated to",grepCommand:"'runc$'",lsOutput:"-rwxr-xr-x  1 root root  10709696 Jan 23  2024 runc"}),"\n",(0,c.jsx)("h3",{children:"\u0412\u0435\u0440\u0441\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430"}),"\n",(0,c.jsx)(l.y,{command:"runc --version",output:"runc version 1.1.12\ncommit: v1.1.12-0-g51d5e946\nspec: 1.0.2-dev\ngo: go1.20.13\nlibseccomp: 2.5.4"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},27653(e,t,n){n.d(t,{A:()=>y});var s=n(96540),c=n(74848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find(e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),o=t.filter(e=>e!==n),l=n?.props.children;return{mdxAdmonitionTitle:l,rest:o.length>0?(0,c.jsx)(c.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var l=n(34164),r=n(21312),a=n(17559);const i="admonition_xJq3",d="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",m="admonitionContent_BuS1";function h({type:e,className:t,children:n}){return(0,c.jsx)("div",{className:(0,l.A)(a.G.common.admonition,a.G.common.admonitionType(e),i,t),children:n})}function p({icon:e,title:t}){return(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)("span",{className:u,children:e}),t]})}function O({children:e}){return e?(0,c.jsx)("div",{className:m,children:e}):null}function N(e){const{type:t,icon:n,title:s,children:o,className:l}=e;return(0,c.jsxs)(h,{type:t,className:l,children:[s||n?(0,c.jsx)(p,{title:s,icon:n}):null,(0,c.jsx)(O,{children:o})]})}function g(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,c.jsx)(g,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,c.jsx)(N,{...x,...e,className:(0,l.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const k={icon:(0,c.jsx)(f,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function A(e){return(0,c.jsx)(N,{...k,...e,className:(0,l.A)("alert alert--success",e.className),children:e.children})}function j(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const E={icon:(0,c.jsx)(j,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function I(e){return(0,c.jsx)(N,{...E,...e,className:(0,l.A)("alert alert--info",e.className),children:e.children})}function T(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const R={icon:(0,c.jsx)(T,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function $(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const v={icon:(0,c.jsx)($,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,c.jsx)(T,{}),title:(0,c.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const w={...{note:b,tip:A,info:I,warning:function(e){return(0,c.jsx)(N,{...R,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(N,{...v,...e,className:(0,l.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(b,{title:"secondary",...e}),important:e=>(0,c.jsx)(I,{title:"important",...e}),success:e=>(0,c.jsx)(A,{title:"success",...e}),caution:function(e){return(0,c.jsx)(N,{..._,...e,className:(0,l.A)("alert alert--warning",e.className),children:e.children})}}};function y(e){const t=o(e),n=(s=t.type,w[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),w.info));var s;return(0,c.jsx)(n,{...t})}},94949(e,t,n){n.d(t,{N:()=>a,y:()=>r});n(96540);var s=n(57390),c=n(27653),o=n(21312),l=n(74848);const r=({command:e,output:t})=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{language:"bash",children:e}),(0,l.jsx)(c.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,l.jsx)(s.A,{language:"bash",children:t})})]}),a=({binaryName:e,version:t,installSteps:n,successMessage:r,grepCommand:a,lsOutput:i})=>{const d=[`***** [INFO] Checking current ${e} version...`,`***** [INFO] Current: none, Target: ${t}`,"***** [INFO] Download URL: https://*******",`***** [INFO] Updating ${e} to version ${t}...`,"***** [INFO] Working directory: /tmp/tmp.*****",`***** [INFO] Downloading ${e}...`,"***** [INFO] Downloading checksum file...","***** [INFO] Verifying checksum...",...n.map(e=>`***** [INFO] ${e}`),`***** [INFO] ${r} ${t}.`].join("\n");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.A,{language:"bash",children:`journalctl -t ${e}-installer`}),(0,l.jsx)(c.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,l.jsx)(s.A,{language:"text",children:d})}),(0,l.jsx)(s.A,{language:"bash",children:`ls -la /usr/local/bin/ | grep ${a}`}),(0,l.jsx)(c.A,{type:"note",title:(0,o.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,l.jsx)(s.A,{language:"bash",children:i})})]})}},68741(e,t,n){n.d(t,{M:()=>s});const s={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>s});const s={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}}}]);