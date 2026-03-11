"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[1109,1497,1654,2814,4668,4919,5977,8069,8538,9876],{833(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>m});const c=JSON.parse('{"id":"tech-docs/etcd/components/all-setup","title":"5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b ETCD-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/etcd/components/allSetupComponent.mdx","sourceDirName":"tech-docs/etcd/components","slug":"/tech-docs/etcd/components/all-setup","permalink":"/tech-docs/etcd/components/all-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-setup","title":"5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e"},"sidebar":"techDocs","previous":{"title":"5.1.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/tech-docs/etcd/setup-environments/os-setup"},"next":{"title":"5.1.2.1. \u0426\u0410","permalink":"/tech-docs/etcd/certificates/all-center-authority"}}');var s=n(74848),r=n(28453),a=n(47632),l=n(69993),o=n(76699),d=n(9792),i=n(76331);const u={id:"all-setup",title:"5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e"},h=void 0,p={},m=[...a.toc,...l.toc,...o.toc];function k(e){const t={blockquote:"blockquote",p:"p",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b ETCD-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.\n\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u044d\u0442\u0430\u043f\u043e\u0432 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."}),"\n"]}),"\n",(0,s.jsxs)(i.A,{groupId:"component",children:[(0,s.jsx)(d.A,{value:"etcd",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,s.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,s.jsx)(a.default,{}),(0,s.jsx)(l.default,{})]})}),(0,s.jsx)(d.A,{value:"etcdbrctl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,s.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcdbrctl"}),(0,s.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,s.jsx)(o.default,{})]})})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(k,{...e})}):k(e)}},69993(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(94949),l=n(68741);const o={},d=void 0,i={},u=[];function h(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(a.N,{binaryName:"etcd",version:l.M.etcd.value,installSteps:["Installing etcd..."],successMessage:"etcd successfully updated to",grepCommand:"'etcd'",lsOutput:"-rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd\n-rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl\n-rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl"}),(0,s.jsx)(a.y,{command:"etcd --version",output:"etcd Version: 3.5.5\nGit SHA: 19002cfc6\nGo Version: go1.16.15\nGo OS/Arch: linux/amd64"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},57368(e,t,n){n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>P,frontMatter:()=>p,metadata:()=>c,toc:()=>b});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),l=n(57390),o=n(9792),d=n(76331),i=n(58700),u=n(68741);const h={value:a.A`
      #!/bin/bash
      set -Eeuo pipefail


      COMPONENT_VERSION="$\{COMPONENT_VERSION:-${u.M.etcdctl.value}}"
      REPOSITORY="$\{REPOSITORY:-${i.m.etcdctl.baseUrl}}"
      PATH_BIN="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBin}"
      PATH_SHA256="$\{REPOSITORY}/${i.m.etcdctl.templateUrlBinCheckSum}"
      INSTALL_PATH="${i.m.etcdctl.path}"


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
    `},p={},m=void 0,k={},b=[];function v(e){return(0,s.jsxs)(d.A,{groupId:"install-type",children:[(0,s.jsxs)(o.A,{value:"Bash",children:[(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/etcd
    `}),(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${u.M.etcdctl.value}"
      REPOSITORY="${i.m.etcdctl.baseUrl}"
      EOF
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${h.value}
      EOF
    `}),(0,s.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,s.jsx)(l.A,{language:"yaml",children:a.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,s.jsxs)(o.A,{value:"Cloud-init",children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,s.jsx)(l.A,{language:"yaml",children:a.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${u.M.etcdctl.value}"
          REPOSITORY="${i.m.etcdctl.baseUrl}"
    `}),(0,s.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(l.A,{language:"yaml",children:a.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${h.value}
    `}),(0,s.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,s.jsx)(l.A,{language:"yaml",children:a.A`
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
    `}),(0,s.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,s.jsx)(l.A,{language:"bash",children:a.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function P(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(v,{...e})}):v()}},47632(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","permalink":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(57368);const l={},o=void 0,d={},i=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,s.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},16159(e,t,n){n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checkInstall","title":"checkInstall","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checkInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/checkInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checkInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(78351);n(42913);const l={},o=void 0,d={},i=[...a.toc];function u(e){const{Details:t}={...(0,r.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,s.jsxs)(t,{className:"custom-blue-block",children:[(0,s.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,s.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},78351(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","title":"statusHelmInstall","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),l=n(57390);n(68741);const o={},d=void 0,i={},u=[];function h(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{language:"bash",children:a.A`
  kubectl -n "\${NAMESPACE}" get pods -l app=etcd-backup-snapshot
  kubectl -n "\${NAMESPACE}" logs -l app=etcd-backup-snapshot --tail=50
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(l.A,{language:"bash",children:a.A`
  level=info msg="Creating leaderElector..." actor=backup-restore-server
  level=info msg="Starting leaderElection..." actor=leader-elector
  level=info msg="backup-restore started leading..." actor=leader-elector
  level=info msg="Successfully saved full snapshot at: Full-00000000-01953405-1757675894.gz" actor=snapshotter
  level=info msg="Will take next full snapshot at time: 2025-09-12 11:20:00 +0000 UTC" actor=snapshotter
  level=info msg="Successfully saved delta snapshot at: Incr-01954818-01961242-1757676502.gz" actor=snapshotter
`})}),"\n",(0,s.jsx)(l.A,{language:"bash",children:a.A`
  # с помощью утилиты mc (minio client)
  mc alias set myS3 "\${S3_ENDPOINT}" "\${S3_ACCESS_KEY_ID}" "\${S3_SECRET_ACCESS_KEY}" --api S3v4
  mc ls myS3/\${STORE_CONTAINER}/\${STORE_PREFIX}
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(l.A,{language:"bash",children:a.A`
  [2025-09-12 13:40:14 MSK]  14MiB STANDARD Full-00000000-01924106-1757673605.gz
  [2025-09-12 14:00:13 MSK]  14MiB STANDARD Full-00000000-01939464-1757674805.gz
  [2025-09-12 13:48:55 MSK]  19MiB STANDARD Incr-01924107-01930792-1757674123.gz
`})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},42913(e,t,n){n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","title":"statusStaticPodInstall","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(60513),l=n(57390);const o={},d=void 0,i={},u=[];function h(e){const t={admonition:"admonition",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{language:"bash",children:a.A`
  crictl pods --name etcd-backup -o yaml | head -20
`}),"\n",(0,s.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,s.jsx)(l.A,{language:"bash",children:a.A`
  items:
  - id: ...
    metadata:
      name: etcd-backup-...
      namespace: kube-system
    state: SANDBOX_READY
`})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},76699(e,t,n){n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>p});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/lifecycleInstallComponent","title":"lifecycleInstallComponent","description":"\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u0438 \u0441\u043b\u0430\u0431\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0418\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 Helm: \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 S3-\u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 Vault.","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/lifecycleInstallComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/lifecycleInstallComponent","permalink":"/tech-docs/etcd/components/etcdbrctl/lifecycleInstallComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(17300),l=(n(55419),n(9792)),o=n(76331),d=n(16159);const i={},u=void 0,h={},p=[...a.toc,...d.toc];function m(e){const t={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",type:"info",children:(0,s.jsx)(t.p,{children:"\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u0438 \u0441\u043b\u0430\u0431\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0418\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 Helm: \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 S3-\u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 Vault."})}),"\n",(0,s.jsx)(o.A,{groupId:"install-type",children:(0,s.jsxs)(l.A,{value:"Helm",children:[(0,s.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 values-\u0444\u0430\u0439\u043b\u0430."}),"\n",(0,s.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n",(0,s.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."}),"\n"]}),(0,s.jsx)(a.default,{}),(0,s.jsx)(d.default,{})]})})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},17300(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/payload/helmInstall","title":"helmInstall","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/payload/helmInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/payload","slug":"/tech-docs/etcd/components/etcdbrctl/payload/helmInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/payload/helmInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(44349),l=(n(285),n(68741),n(95538),n(60513)),o=n(57390);n(9792),n(76331);const d={},i=void 0,u={},h=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  # Общие
  export CLUSTER_NAME=${a.M.clusterName.value}
  export NAMESPACE=etcd-backup

  # Параметры хранения
  export STORE_CONTAINER="etcd-backups"
  export STORE_PREFIX="etcd-\${CLUSTER_NAME}"

  # Параметры расписания / ротации
  export FULL_SCHEDULE='0 */4 * * *'
  export DELTA_PERIOD='1h'
  export MAX_BACKUPS=6
  export GC_POLICY="LimitBased"
  export GC_PERIOD="30m"
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (S3)"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  export S3_REGION="us-east-1"
  export S3_ACCESS_KEY_ID="<your-access-key>"
  export S3_SECRET_ACCESS_KEY="<your-secret-key>"
  export S3_ENDPOINT="https://s3.example.com"
  export S3_FORCE_PATH_STYLE="true"
`}),"\n",(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 values-\u0444\u0430\u0439\u043b\u0430"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  cat > "\${WORKDIR}/values-s3.yaml" <<EOF
  secret:
    name: etcd-backup
    s3:
      region: "\${S3_REGION}"
      accessKeyID: "\${S3_ACCESS_KEY_ID}"
      secretAccessKey: "\${S3_SECRET_ACCESS_KEY}"
      endpoint: "\${S3_ENDPOINT}"
      s3ForcePathStyle: "\${S3_FORCE_PATH_STYLE}"

  app:
    args:
      - --use-etcd-wrapper=false
      - --schedule=\${FULL_SCHEDULE}
      - --delta-snapshot-period=\${DELTA_PERIOD}
      - --storage-provider=S3
      - --store-container=\${STORE_CONTAINER}
      - --store-prefix=\${STORE_PREFIX}
      - --max-backups=\${MAX_BACKUPS}
      - --garbage-collection-policy=\${GC_POLICY}
      - --garbage-collection-period=\${GC_PERIOD}
      - --endpoints=https://\$(NODE_IP):2379
      - --cacert=/etc/etcd-pki/ca.crt
      - --cert=/etc/etcd-pki/healthcheck-client.crt
      - --key=/etc/etcd-pki/healthcheck-client.key
      - --compression-policy=gzip
      - --compress-snapshots=true
      - --etcd-snapshot-timeout=8m
      - --etcd-defrag-timeout=8m
      - --etcd-connection-timeout=30s
      - --delta-snapshot-memory-limit=204857600
      - --server-port=18080
      - --max-parallel-chunk-uploads=1
      - --min-chunk-size=16777212
      - --defragmentation-schedule=0 0 */3 * *
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  helm repo add incloud-backup https://charts.example.com/etcd-backup
  helm repo update

  helm upgrade \\
    --install etcd-backup incloud-backup/etcd-backup \\
    --namespace "\${NAMESPACE}" \\
    -f "\${WORKDIR}/values-s3.yaml"
`})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},55419(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","title":"staticPodInstall","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/payload","slug":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453),a=n(44349),l=(n(285),n(68741),n(95538),n(60513)),o=n(57390);n(9792),n(76331);const d={},i=void 0,u={},h=[];function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  # Общее
  export CLUSTER_NAME=${a.M.clusterName.value}
  export NAMESPACE=etcd-backup

  # Параметры хранения
  export STORE_CONTAINER="etcd-backups"
  export STORE_PREFIX="etcd-\${CLUSTER_NAME}"

  # Параметры расписания / ротации
  export FULL_SCHEDULE='0 */4 * * *'
  export DELTA_PERIOD='1h'
  export MAX_BACKUPS=6
  export GC_POLICY="LimitBased"
  export GC_PERIOD="30m"

  # Пути на хосте
  export MANIFEST_DIR="${a.M.kubernetesBaseFolderPath.value}/manifests"
  export S3_CREDS_DIR="${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3"
  export ETCD_PKI_DIR="${a.M.kubernetesBaseFolderPath.value}/pki/etcd"
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (S3)"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  export S3_REGION="us-east-1"
  export S3_ACCESS_KEY_ID="<your-access-key>"
  export S3_SECRET_ACCESS_KEY="<your-secret-key>"
  export S3_ENDPOINT="https://s3.example.com"
  export S3_FORCE_PATH_STYLE="true"
`}),"\n",(0,s.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  sudo mkdir -p ${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 S3 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  # Записываем креды в файлы
  printf '%s' "$\{S3_REGION}"            | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/region" >/dev/null
  printf '%s' "$\{S3_ACCESS_KEY_ID}"     | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/accessKeyID" >/dev/null
  printf '%s' "$\{S3_SECRET_ACCESS_KEY}" | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/secretAccessKey" >/dev/null
  printf '%s' "$\{S3_ENDPOINT}"          | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/endpoint" >/dev/null
  printf '%s' "$\{S3_FORCE_PATH_STYLE}"  | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/s3ForcePathStyle" >/dev/null
`}),"\n",(0,s.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 etcd-config"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  cat <<EOF > ${a.M.kubernetesBaseFolderPath.value}/etcd/backup/etcd.conf.yaml
  name: default
  data-dir: default.etcd
  listen-client-urls: http://127.0.0.1:2379
  listen-peer-urls:   http://127.0.0.1:2380

  initial-advertise-peer-urls:
    default:
      - http://127.0.0.1:2380

  initial-cluster: default=http://127.0.0.1:2380
  initial-cluster-token: etcd-cluster
  initial-cluster-state: new
  EOF
`}),"\n",(0,s.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f static pod \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,s.jsx)(o.A,{language:"bash",children:l.A`
  sudo tee "\${MANIFEST_DIR}/etcd-backup.yaml" > /dev/null <<EOF
  apiVersion: v1
  kind: Pod
  metadata:
    name: etcd-backup-snapshot
    namespace: kube-system
    labels:
      app: etcd-backup-snapshot
  spec:
    hostNetwork: true
    dnsPolicy: ClusterFirstWithHostNet
    containers:
      - name: etcdbrctl
        image: europe-docker.pkg.dev/gardener-project/releases/gardener/etcdbrctl:v0.36.3
        command: ["/etcdbrctl","server"]
        args:
          - --use-etcd-wrapper=false
          - --schedule=\${FULL_SCHEDULE}
          - --delta-snapshot-period=\${DELTA_PERIOD}
          - --storage-provider=S3
          - --store-container=\${STORE_CONTAINER}
          - --store-prefix=\${STORE_PREFIX}
          - --max-backups=\${MAX_BACKUPS}
          - --garbage-collection-policy=\${GC_POLICY}
          - --garbage-collection-period=\${GC_PERIOD}
          - --compression-policy=gzip
          - --compress-snapshots=true
          - --etcd-snapshot-timeout=8m
          - --etcd-defrag-timeout=8m
          - --etcd-connection-timeout=30s
          - --delta-snapshot-memory-limit=204857600
          - --endpoints=https://\$(NODE_IP):2379
          - --server-port=18080
          - --cacert=/etc/etcd-pki/ca.crt
          - --cert=/etc/etcd-pki/healthcheck-client.crt
          - --key=/etc/etcd-pki/healthcheck-client.key
          - --max-parallel-chunk-uploads=1
          - --min-chunk-size=16777212
          - --defragmentation-schedule=0 0 */3 * *
        env:
          - name: NODE_IP
            valueFrom:
              fieldRef:
                fieldPath: status.hostIP
          - name: POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
          - name: AWS_APPLICATION_CREDENTIALS
            value: /var/etcd-backup
          - name: AWS_ENDPOINT_URL_S3
            value: "\${S3_ENDPOINT}"
        volumeMounts:
          - name: etcd-pki
            mountPath: /etc/etcd-pki
            readOnly: true
          - name: etcd-backup
            mountPath: /var/etcd-backup
            readOnly: true
          - name: etcd-config
            mountPath: /var/etcd/config
            readOnly: true
    volumes:
      - name: etcd-pki
        hostPath:
          path: "\${ETCD_PKI_DIR}"
          type: Directory
      - name: etcd-backup
        hostPath:
          path: "\${S3_CREDS_DIR}"
          type: Directory
      - name: etcd-config
        hostPath:
          path: "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/etcd.conf.yaml"
          type: File
  EOF
`})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},27653(e,t,n){n.d(t,{A:()=>_});var c=n(96540),s=n(74848);function r(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=c.Children.toArray(e),n=t.find(e=>c.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),r=t.filter(e=>e!==n),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:n}}var a=n(34164),l=n(21312),o=n(17559);const d="admonition_xJq3",i="admonitionHeading_Gvgb",u="admonitionIcon_Rf37",h="admonitionContent_BuS1";function p({type:e,className:t,children:n}){return(0,s.jsx)("div",{className:(0,a.A)(o.G.common.admonition,o.G.common.admonitionType(e),d,t),children:n})}function m({icon:e,title:t}){return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("span",{className:u,children:e}),t]})}function k({children:e}){return e?(0,s.jsx)("div",{className:h,children:e}):null}function b(e){const{type:t,icon:n,title:c,children:r,className:a}=e;return(0,s.jsxs)(p,{type:t,className:a,children:[c||n?(0,s.jsx)(m,{title:c,icon:n}):null,(0,s.jsx)(k,{children:r})]})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const P={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(b,{...P,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const N={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function g(e){return(0,s.jsx)(b,{...N,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function S(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const E={icon:(0,s.jsx)(S,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function O(e){return(0,s.jsx)(b,{...E,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function $(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,s.jsx)($,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const M={icon:(0,s.jsx)($,{}),title:(0,s.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const I={...{note:x,tip:g,info:O,warning:function(e){return(0,s.jsx)(b,{...C,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(b,{...A,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(O,{title:"important",...e}),success:e=>(0,s.jsx)(g,{title:"success",...e}),caution:function(e){return(0,s.jsx)(b,{...M,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=r(e),n=(c=t.type,I[c]||(console.warn(`No admonition component found for admonition type "${c}". Using Info as fallback.`),I.info));var c;return(0,s.jsx)(n,{...t})}},94949(e,t,n){n.d(t,{N:()=>o,y:()=>l});n(96540);var c=n(57390),s=n(27653),r=n(21312),a=n(74848);const l=({command:e,output:t})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:e}),(0,a.jsx)(s.A,{type:"note",title:(0,r.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(c.A,{language:"bash",children:t})})]}),o=({binaryName:e,version:t,installSteps:n,successMessage:l,grepCommand:o,lsOutput:d})=>{const i=[`***** [INFO] Checking current ${e} version...`,`***** [INFO] Current: none, Target: ${t}`,"***** [INFO] Download URL: https://*******",`***** [INFO] Updating ${e} to version ${t}...`,"***** [INFO] Working directory: /tmp/tmp.*****",`***** [INFO] Downloading ${e}...`,"***** [INFO] Downloading checksum file...","***** [INFO] Verifying checksum...",...n.map(e=>`***** [INFO] ${e}`),`***** [INFO] ${l} ${t}.`].join("\n");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{language:"bash",children:`journalctl -t ${e}-installer`}),(0,a.jsx)(s.A,{type:"note",title:(0,r.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(c.A,{language:"text",children:i})}),(0,a.jsx)(c.A,{language:"bash",children:`ls -la /usr/local/bin/ | grep ${o}`}),(0,a.jsx)(s.A,{type:"note",title:(0,r.T)({id:"common.commandOutput",message:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b"}),children:(0,a.jsx)(c.A,{language:"bash",children:d})})]})}},65742(e,t,n){n.d(t,{$:()=>s});var c=n(44349);const s={etcdCA:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${c.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${c.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${c.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${c.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${c.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741(e,t,n){n.d(t,{M:()=>c});const c={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},58700(e,t,n){n.d(t,{m:()=>c});const c={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},95538(e,t,n){n.d(t,{D:()=>r});var c=n(65742),s=n(285);const r={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${c.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${c.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${c.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${c.$.etcdServer.crtPath}`},keyFile:{value:`${c.$.etcdServer.keyPath}`},trustedCAFile:{value:`${c.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${s.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${s.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${s.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${s.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},285(e,t,n){n.d(t,{h:()=>c});const c={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}}}]);