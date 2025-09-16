"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[346,1109,1497,1821,2814,4919,5106,5459,6816,8069,8538,9273,9876],{285:(e,t,n)=>{n.d(t,{h:()=>r});const r={etcdServer:{portNumber:"2379"},etcdPeer:{portNumber:"2380"},etcdMetricServer:{portNumber:"2381"},kubeAPIServer:{portNumber:"6443"},kubeControllerManager:{portNumber:"10257"},kubeScheduler:{portNumber:"10259"},kubeletHealthz:{portNumber:"10248"},kubeletServer:{portNumber:"10250"},kubeletReadOnlyPort:{portNumber:"10255"}}},833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/etcd/components/allSetupComponent","title":"allSetupComponent","description":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd","source":"@site/docs/tech-docs/etcd/components/allSetupComponent.mdx","sourceDirName":"tech-docs/etcd/components","slug":"/tech-docs/etcd/components/allSetupComponent","permalink":"/tech-docs/etcd/components/allSetupComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(47632),l=n(69993),o=n(96983),d=n(9792),i=n(76331);const u={},h=void 0,p={},m=[...a.toc,...l.toc,...o.toc];function k(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(i.A,{groupId:"component",children:[(0,c.jsx)(d.A,{value:"etcd",children:(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,c.jsx)("p",{className:"obligatory-note-orange",children:"\u25cf \u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(a.default,{}),(0,c.jsx)(l.default,{})]})}),(0,c.jsx)(d.A,{value:"etcdbrctl",children:(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,c.jsx)("p",{style:{marginBottom:0},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 etcd"}),(0,c.jsx)("p",{className:"obligatory-note-green",children:"\u25cf \u041d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e"})]})}),(0,c.jsx)(o.default,{})]})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(k,{...e})}):k(e)}},9792:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const c={tabItem:"tabItem_Ymn6"};var s=n(74848);function a({children:e,hidden:t,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(c.tabItem,n),hidden:t,children:e})}},16159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checkInstall","title":"checkInstall","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checkInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/checkInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checkInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(78351);n(42913);const l={},o=void 0,d={},i=[...a.toc];function u(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(a.default,{})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},17300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/payload/helmInstall","title":"helmInstall","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/payload/helmInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/payload","slug":"/tech-docs/etcd/components/etcdbrctl/payload/helmInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/payload/helmInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(44349),l=(n(285),n(68741),n(95538),n(60513)),o=n(68747);n(9792),n(76331);const d={},i=void 0,u={},h=[];function p(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (S3)"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  export S3_REGION="us-east-1"
  export S3_ACCESS_KEY_ID="<your-access-key>"
  export S3_SECRET_ACCESS_KEY="<your-secret-key>"
  export S3_ENDPOINT="https://s3.example.com"
  export S3_FORCE_PATH_STYLE="true"
`}),"\n",(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 values-\u0444\u0430\u0439\u043b\u0430"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,c.jsx)("h4",{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  helm repo add incloud-backup https://charts.example.com/etcd-backup
  helm repo update

  helm upgrade \\
    --install etcd-backup incloud-backup/etcd-backup \\
    --namespace "\${NAMESPACE}" \\
    -f "\${WORKDIR}/values-s3.yaml"
`})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p()}},17590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checks/statusBinFiles","title":"statusBinFiles","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/checks/statusBinFiles.mdx","sourceDirName":"tech-docs/etcd/components/etcd/checks","slug":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","permalink":"/tech-docs/etcd/components/etcd/checks/statusBinFiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(60513),l=n(68747),o=n(68741);const d={},i=void 0,u={},h=[];function p(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{language:"bash",children:a.A`
  journalctl -t etcd-installer
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"text",children:a.A`
  ***** [INFO] Checking current etcd version...
  ***** [INFO] Current: none, Target: ${o.M.etcd.value}
  ***** [INFO] Download URL: https://*******
  ***** [INFO] Updating etcd to version ${o.M.etcd.value}...
  ***** [INFO] Working directory: /tmp/tmp.*****
  ***** [INFO] Downloading etcd...
  ***** [INFO] Downloading checksum file...
  ***** [INFO] Verifying checksum...
  ***** [INFO] Installing etcd...
  ***** [INFO] etcd successfully updated to ${o.M.etcd.value}.
`})}),"\n",(0,c.jsx)(l.A,{language:"bash",children:a.A`
  ls -la /usr/local/bin/ | grep 'etcd'
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"text",children:a.A`
  -rwxr-xr-x  1 root root  23760896 Mar 29 16:21 etcd
  -rwxr-xr-x  1 root root  17960960 Mar 29 16:21 etcdctl
  -rwxr-xr-x  1 root root  16031744 Mar 29 16:21 etcdutl
`})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},41255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checks/statusBinVersion","title":"statusBinVersion","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcd/checks/statusBinVersion.mdx","sourceDirName":"tech-docs/etcd/components/etcd/checks","slug":"/tech-docs/etcd/components/etcd/checks/statusBinVersion","permalink":"/tech-docs/etcd/components/etcd/checks/statusBinVersion","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(60513),l=n(68747);const o={},d=void 0,i={},u=[];function h(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{language:"bash",children:a.A`
  etcd --version
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"bash",children:a.A`
  etcd Version: 3.5.5
  Git SHA: 19002cfc6
  Go Version: go1.16.15
  Go OS/Arch: linux/amd64
`})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},42913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","title":"statusStaticPodInstall","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checks/statusStaticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(60513),l=n(68747);const o={},d=void 0,i={},u=[];function h(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{language:"bash",children:a.A`
  etcd --version
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"bash",children:a.A`
  etcd Version: 3.5.5
  Git SHA: 19002cfc6
  Go Version: go1.16.15
  Go OS/Arch: linux/amd64
`})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},47632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430","source":"@site/docs/tech-docs/etcd/components/etcd/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","permalink":"/tech-docs/etcd/components/etcd/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(62466);const l={},o=void 0,d={},i=[...a.toc];function u(e){const t={li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n",(0,c.jsx)(t.li,{children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438."}),"\n"]}),"\n",(0,c.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},51769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"tech-docs/etcd/components/all-setup","title":"5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e","description":"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b ETCD-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.","source":"@site/docs/tech-docs/etcd/components/allSetup.mdx","sourceDirName":"tech-docs/etcd/components","slug":"/tech-docs/etcd/components/all-setup","permalink":"/tech-docs/etcd/components/all-setup","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-setup"},"sidebar":"techDocs","previous":{"title":"5.1.1.1. \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u041e\u0421","permalink":"/tech-docs/etcd/setup-environments/os-setup"},"next":{"title":"5.1.2.1. \u0426\u0410","permalink":"/tech-docs/etcd/certificates/all-center-authority"}}');var c=n(74848),s=n(28453),a=n(833);const l={id:"all-setup"},o="5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e",d={},i=[...a.toc];function u(e){const t={blockquote:"blockquote",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"5112-\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u043f\u043e",children:"5.1.1.2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u041f\u041e"})}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsx)(t.p,{children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b ETCD-\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430.\n\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u044d\u0442\u0430\u043f\u043e\u0432 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0443\u0440\u0430."}),"\n"]}),"\n",(0,c.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},55419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","title":"staticPodInstall","description":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/payload","slug":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/payload/staticPodInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(44349),l=(n(285),n(68741),n(95538),n(60513)),o=n(68747);n(9792),n(76331);const d={},i=void 0,u={},h=[];function p(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (\u043e\u0431\u0449\u0438\u0435)"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f (S3)"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  export S3_REGION="us-east-1"
  export S3_ACCESS_KEY_ID="<your-access-key>"
  export S3_SECRET_ACCESS_KEY="<your-secret-key>"
  export S3_ENDPOINT="https://s3.example.com"
  export S3_FORCE_PATH_STYLE="true"
`}),"\n",(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  sudo mkdir -p ${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3
`}),"\n",(0,c.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 S3 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
  # Записываем креды в файлы
  printf '%s' "$\{S3_REGION}"            | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/region" >/dev/null
  printf '%s' "$\{S3_ACCESS_KEY_ID}"     | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/accessKeyID" >/dev/null
  printf '%s' "$\{S3_SECRET_ACCESS_KEY}" | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/secretAccessKey" >/dev/null
  printf '%s' "$\{S3_ENDPOINT}"          | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/endpoint" >/dev/null
  printf '%s' "$\{S3_FORCE_PATH_STYLE}"  | sudo tee "${a.M.kubernetesBaseFolderPath.value}/etcd/backup/s3/s3ForcePathStyle" >/dev/null
`}),"\n",(0,c.jsx)("h4",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 etcd-config"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
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
`}),"\n",(0,c.jsx)("h4",{children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f static pod \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442\u0430"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:l.A`
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
`})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p()}},58700:(e,t,n)=>{n.d(t,{m:()=>r});const r={kubelet:{path:"/usr/local/bin/kubelet",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubelet.sha256",baseUrl:"https://dl.k8s.io"},kubectl:{path:"/usr/local/bin/kubectl",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubectl.sha256",baseUrl:"https://dl.k8s.io"},kubeadm:{path:"/usr/local/bin/kubeadm",templateUrlBin:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm",templateUrlBinCheckSum:"${COMPONENT_VERSION}/bin/linux/amd64/kubeadm.sha256",baseUrl:"https://dl.k8s.io"},runc:{path:"/usr/local/bin/runc",templateUrlBin:"${COMPONENT_VERSION}/runc.amd64",templateUrlBinCheckSum:"${COMPONENT_VERSION}/runc.sha256sum",baseUrl:"https://github.com/opencontainers/runc/releases/download"},containerd:{path:"/usr/local/bin/",templateUrlBin:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"v${COMPONENT_VERSION}/containerd-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256sum",baseUrl:"https://github.com/containerd/containerd/releases/download"},crictl:{path:"/usr/local/bin/crictl",templateUrlBin:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/crictl-${COMPONENT_VERSION}-linux-amd64.tar.gz.sha256",baseUrl:"https://github.com/kubernetes-sigs/cri-tools/releases/download"},etcdctl:{path:"/usr/local/bin/",templateUrlBin:"${COMPONENT_VERSION}/etcd-${COMPONENT_VERSION}-linux-amd64.tar.gz",templateUrlBinCheckSum:"${COMPONENT_VERSION}/SHA256SUMS",baseUrl:"https://github.com/etcd-io/etcd/releases/download"}}},62466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/payload/downloadBIN","title":"downloadBIN","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439","source":"@site/docs/tech-docs/etcd/components/etcd/payload/downloadBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd/payload","slug":"/tech-docs/etcd/components/etcd/payload/downloadBIN","permalink":"/tech-docs/etcd/components/etcd/payload/downloadBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(60513),l=n(68747),o=n(9792),d=n(76331),i=n(58700),u=n(68741);const h={data:{value:a.A`
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
    `}},p={},m=void 0,k={},b=[];function v(e){return(0,c.jsxs)(d.A,{groupId:"install-type",children:[(0,c.jsxs)(o.A,{value:"Bash",children:[(0,c.jsx)("h4",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0439"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
      mkdir -p /etc/default/etcd
    `}),(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
      cat <<EOF > /etc/default/etcd/download.env
      COMPONENT_VERSION="${u.M.etcdctl.value}"
      REPOSITORY="${i.m.etcdctl.baseUrl}"
      EOF
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
      cat <<"EOF" > /etc/default/etcd/download-script.sh
      ${h.data.value}
      EOF
    `}),(0,c.jsx)("h4",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0430\u0432"}),(0,c.jsx)(l.A,{language:"yaml",children:a.A`
      chmod +x /etc/default/etcd/download-script.sh
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
      systemctl enable etcd-install.service
      systemctl start etcd-install.service
    `})]}),(0,c.jsxs)(o.A,{value:"Cloud-init",children:[(0,c.jsx)("h4",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"}),(0,c.jsx)(l.A,{language:"yaml",children:a.A`
      #write_files:
      - path: /etc/default/etcd/download.env
        owner: root:root
        permissions: '0644'
        content: |
          COMPONENT_VERSION="${u.M.etcdctl.value}"
          REPOSITORY="${i.m.etcdctl.baseUrl}"
    `}),(0,c.jsx)("h4",{children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(l.A,{language:"yaml",children:a.A`
      - path: /etc/default/etcd/download-script.sh
        owner: root:root
        permissions: '0755'
        content: |
          ${h.data.value}
    `}),(0,c.jsx)("h4",{children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),(0,c.jsx)(l.A,{language:"yaml",children:a.A`
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
    `}),(0,c.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),(0,c.jsx)(l.A,{language:"bash",children:a.A`
      - systemctl enable etcd-install.service
      - systemctl start etcd-install.service
    `})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(v,{...e})}):v()}},65742:(e,t,n)=>{n.d(t,{$:()=>c});var r=n(44349);const c={etcdCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-ca.conf`,keySize:"2048",cname:"etcd-ca"},kubernetesCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/ca.conf`,keySize:"2048",cname:"kubernetes"},frontProxyCA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-ca.crt`,csrPath:"",crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-ca.conf`,keySize:"2048",cname:"front-proxy-ca"},kubernetesControllerManagerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/controller-manager-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-client.conf`,keySize:"2048",cname:"system:kube-controller-manager"},kubernetesControllerManagerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/controller-manager-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/controller-manager-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/controller-manager-server.conf`,keySize:"2048",cname:"system:kube-controller-manager-server"},etcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/healthcheck-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/healthcheck-client.conf`,keySize:"2048",cname:"kube-etcd-healthcheck-client"},etcdServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-server.conf`,keySize:"2048",cname:""},etcdPeer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/etcd/peer.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/etcd-peer.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/etcd-peer.conf`,keySize:"2048",cname:""},kubernetesKubeletClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-kubelet-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-kubelet-client.conf`,keySize:"2048",cname:"kube-apiserver-kubelet-client"},kubernetesFrontProxyClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/front-proxy-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/front-proxy-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/front-proxy-client.conf`,keySize:"2048",cname:"front-proxy-client"},kubernetesEtcdClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver-etcd-client.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver-etcd-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver-etcd-client.conf`,keySize:"2048",cname:"kube-apiserver-etcd-client"},kubernetesServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/apiserver.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/apiserver.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/apiserver.conf`,keySize:"2048",cname:"kube-apiserver"},kubernetesSuperAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/super-admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/super-admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/super-admin.conf`,keySize:"2048",cname:"kubernetes-super-admin"},kubernetesAdminClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/admin.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/admin.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/admin.conf`,keySize:"2048",cname:"kubernetes-admin"},kubernetesSA:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/sa.pub`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletClient:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-client.conf`,keySize:"2048",cname:""},kubeletServer:{keyPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-key.pem`,crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/kubelet-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/kubelet-server.conf`,keySize:"2048",cname:""},kubeletCurrentClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowClient:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-client-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletCurrentServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-current.pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubeletNowServer:{keyPath:"",crtPath:`${r.M.kuberneteKubeletFolderPath.value}/pki/kubelet-server-$(date '+%Y-%m-%d-%H-%M-%S').pem`,csrPath:"",crtConf:"",keySize:"2048",cname:""},kubernetesSchedulerClient:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client-key.pem`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/kubeconfig/scheduler-client.pem`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-client.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-client.conf`,keySize:"2048",cname:"system:kube-scheduler"},kubernetesSchedulerServer:{keyPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.key`,crtPath:`${r.M.kubernetesBaseFolderPath.value}/pki/scheduler-server.crt`,csrPath:`${r.M.kubernetesBaseFolderPath.value}/openssl/csr/scheduler-server.csr`,crtConf:`${r.M.kubernetesBaseFolderPath.value}/openssl/scheduler-server.conf`,keySize:"2048",cname:"system:kube-scheduler-server"}}},68741:(e,t,n)=>{n.d(t,{M:()=>r});const r={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}},69993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcd/checkBIN","title":"checkBIN","description":"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438","source":"@site/docs/tech-docs/etcd/components/etcd/checkBIN.mdx","sourceDirName":"tech-docs/etcd/components/etcd","slug":"/tech-docs/etcd/components/etcd/checkBIN","permalink":"/tech-docs/etcd/components/etcd/checkBIN","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(41255),l=n(17590);const o={},d=void 0,i={},u=[...l.toc,...a.toc];function h(e){const{Details:t}={...(0,s.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h4",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),"\n",(0,c.jsxs)(t,{className:"custom-blue-block",children:[(0,c.jsx)("summary",{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438"}),(0,c.jsx)(l.default,{}),(0,c.jsx)(a.default,{})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},76331:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(96540),c=n(34164),s=n(23104),a=n(56347),l=n(205),o=n(57485),d=n(31682),i=n(70679);function u(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return u(e).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}))}(n);return function(e){const t=(0,d.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}function m({queryString:e=!1,groupId:t}){const n=(0,a.W6)(),c=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(c),(0,r.useCallback)(e=>{if(!c)return;const t=new URLSearchParams(n.location.search);t.set(c,e),n.replace({...n.location,search:t.toString()})},[c,n])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:c}=e,s=h(e),[a,o]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find(e=>e.default)??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s})),[d,u]=m({queryString:n,groupId:c}),[k,b]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,c]=(0,i.Dv)(t);return[n,(0,r.useCallback)(e=>{t&&c.set(e)},[t,c])]}({groupId:c}),v=(()=>{const e=d??k;return p({value:e,tabValues:s})?e:null})();(0,l.A)(()=>{v&&o(v)},[v]);return{selectedValue:a,selectValue:(0,r.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)},[u,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function P({className:e,block:t,selectedValue:n,selectValue:r,tabValues:a}){const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const t=e.currentTarget,c=l.indexOf(t),s=a[c].value;s!==n&&(o(t),r(s))},i=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":t},e),children:a.map(({value:e,label:t,attributes:r})=>(0,f.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>{l.push(e)},onKeyDown:i,onClick:d,...r,className:(0,c.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":n===e}),children:t??e},e))})}function g({lazy:e,children:t,selectedValue:n}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find(e=>e.props.value===n);return e?(0,r.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function x(e){const t=k(e);return(0,f.jsxs)("div",{className:(0,c.A)("tabs-container",v.tabList),children:[(0,f.jsx)(P,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function S(e){const t=(0,b.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(t))}},78351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","title":"statusHelmInstall","description":"{dedent`","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","permalink":"/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(60513),l=n(68747);n(68741);const o={},d=void 0,i={},u=[];function h(e){const t={admonition:"admonition",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{language:"bash",children:a.A`
  kubectl -n "\${NAMESPACE}" get pods -l app=etcd-backup-snapshot
  kubectl -n "\${NAMESPACE}" logs -l app=etcd-backup-snapshot --tail=50
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"bash",children:a.A`
  level=info msg="Creating leaderElector..." actor=backup-restore-server
  level=info msg="Starting leaderElection..." actor=leader-elector
  level=info msg="backup-restore started leading..." actor=leader-elector
  level=info msg="Successfully saved full snapshot at: Full-00000000-01953405-1757675894.gz" actor=snapshotter
  level=info msg="Will take next full snapshot at time: 2025-09-12 11:20:00 +0000 UTC" actor=snapshotter
  level=info msg="Successfully saved delta snapshot at: Incr-01954818-01961242-1757676502.gz" actor=snapshotter
`})}),"\n",(0,c.jsx)(l.A,{language:"bash",children:a.A`
  # с помощью утилиты mc (minio client)
  mc alias set myS3 "\${S3_ENDPOINT}" "\${S3_ACCESS_KEY_ID}" "\${S3_SECRET_ACCESS_KEY}" --api S3v4
  mc ls myS3/\${STORE_CONTAINER}/\${STORE_PREFIX}
`}),"\n",(0,c.jsx)(t.admonition,{title:"\u0412\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",type:"note",children:(0,c.jsx)(l.A,{language:"bash",children:a.A`
  [2025-09-12 13:40:14 MSK]  14MiB STANDARD Full-00000000-01924106-1757673605.gz
  [2025-09-12 14:00:13 MSK]  14MiB STANDARD Full-00000000-01939464-1757674805.gz
  [2025-09-12 13:48:55 MSK]  19MiB STANDARD Incr-01924107-01930792-1757674123.gz
`})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},95538:(e,t,n)=>{n.d(t,{D:()=>s});var r=n(65742),c=n(285);const s={name:{value:"${FULL_HOST_NAME}"},initialCluster:{value:"${ETCD_INITIAL_CLUSTER}"},initialAdvertisePeerUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${c.h.etcdPeer.portNumber}`},initialClusterToken:{value:"etcd"},initialClusterState:{value:"new"},peerCertFile:{value:`${r.$.etcdPeer.crtPath}`},peerKeyFile:{value:`${r.$.etcdPeer.keyPath}`},peerTrustedCAFile:{value:`${r.$.etcdCA.crtPath}`},peerClientCertAuth:{value:"true"},certFile:{value:`${r.$.etcdServer.crtPath}`},keyFile:{value:`${r.$.etcdServer.keyPath}`},trustedCAFile:{value:`${r.$.etcdCA.crtPath}`},listenClientUrls:{value:`https://0.0.0.0:${c.h.etcdServer.portNumber}`},listenPeerUrls:{value:`https://0.0.0.0:${c.h.etcdPeer.portNumber}`},listenMetricsUrls:{value:`http://0.0.0.0:${c.h.etcdMetricServer.portNumber}`},dataDir:{value:"/var/lib/etcd"},quotaBackendBytes:{value:"10737418240"},clientCertAuth:{value:"true"},heartbeatInterval:{value:"250"},electionTimeout:{value:"1500"},maxSnapshots:{value:"10"},maxWals:{value:"10"},autoCompactionRetention:{value:"8"},metrics:{value:"extensive"},logger:{value:"zap"},advertiseClientUrls:{value:`https://\${MACHINE_LOCAL_ADDRESS}:${c.h.etcdServer.portNumber}`},workDir:{value:"/tmp/etcd"},dbPath:{value:"/var/lib/etcd/member/snap/db"},snapshotCount:{value:"10000"},experimentalInitialCorruptCheck:{value:"true"},experimentalWatchProgressNotifyInterval:{value:"5s"}}},96983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/lifecycleDownloadComponent","title":"lifecycleDownloadComponent","description":"\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u0438 \u0441\u043b\u0430\u0431\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0418\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 Helm: \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 S3-\u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 Vault.","source":"@site/docs/tech-docs/etcd/components/etcdbrctl/lifecycleDownloadComponent.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl","slug":"/tech-docs/etcd/components/etcdbrctl/lifecycleDownloadComponent","permalink":"/tech-docs/etcd/components/etcdbrctl/lifecycleDownloadComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=n(74848),s=n(28453),a=n(17300),l=(n(55419),n(9792)),o=n(76331),d=n(16159);const i={},u=void 0,h={},p=[...a.toc,...d.toc];function m(e){const t={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.admonition,{title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",type:"warning",children:(0,c.jsx)(t.p,{children:"\u0423\u0447\u0442\u0438\u0442\u0435, \u0447\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0435\u0441\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u0438 \u0441\u043b\u0430\u0431\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0418\u0437 \u043d\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 Helm: \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 S3-\u0441\u0435\u043a\u0440\u0435\u0442\u0430\u043c\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 Vault."})}),"\n",(0,c.jsx)(o.A,{groupId:"install-type",children:(0,c.jsxs)(l.A,{value:"Helm",children:[(0,c.jsx)("h3",{children:"\u042d\u0442\u0430\u043f\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,c.jsx)(t.li,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 values-\u0444\u0430\u0439\u043b\u0430."}),"\n",(0,c.jsx)(t.li,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n",(0,c.jsx)(t.li,{children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438."}),"\n"]}),(0,c.jsx)(a.default,{}),(0,c.jsx)(d.default,{})]})})]})}function k(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m(e)}}}]);