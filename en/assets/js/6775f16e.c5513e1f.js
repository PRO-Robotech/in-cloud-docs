"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[5082],{39845(t,e,s){s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","title":"statusHelmInstall","description":"{dedent`","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall.mdx","sourceDirName":"tech-docs/etcd/components/etcdbrctl/checks","slug":"/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","permalink":"/en/tech-docs/etcd/components/etcdbrctl/checks/statusHelmInstall","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=s(74848),l=s(28453),a=s(60513),o=s(57390);s(68741);const r={},i=void 0,d={},u=[];function m(t){const e={admonition:"admonition",...(0,l.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{language:"bash",children:a.A`
  kubectl -n "\${NAMESPACE}" get pods -l app=etcd-backup-snapshot
  kubectl -n "\${NAMESPACE}" logs -l app=etcd-backup-snapshot --tail=50
`}),"\n",(0,c.jsx)(e.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(o.A,{language:"bash",children:a.A`
  level=info msg="Creating leaderElector..." actor=backup-restore-server
  level=info msg="Starting leaderElection..." actor=leader-elector
  level=info msg="backup-restore started leading..." actor=leader-elector
  level=info msg="Successfully saved full snapshot at: Full-00000000-01953405-1757675894.gz" actor=snapshotter
  level=info msg="Will take next full snapshot at time: 2025-09-12 11:20:00 +0000 UTC" actor=snapshotter
  level=info msg="Successfully saved delta snapshot at: Incr-01954818-01961242-1757676502.gz" actor=snapshotter
`})}),"\n",(0,c.jsx)(o.A,{language:"bash",children:a.A`
  # using mc utility (minio client)
  mc alias set myS3 "\${S3_ENDPOINT}" "\${S3_ACCESS_KEY_ID}" "\${S3_SECRET_ACCESS_KEY}" --api S3v4
  mc ls myS3/\${STORE_CONTAINER}/\${STORE_PREFIX}
`}),"\n",(0,c.jsx)(e.admonition,{title:"Command output",type:"note",children:(0,c.jsx)(o.A,{language:"bash",children:a.A`
  [2025-09-12 13:40:14 MSK]  14MiB STANDARD Full-00000000-01924106-1757673605.gz
  [2025-09-12 14:00:13 MSK]  14MiB STANDARD Full-00000000-01939464-1757674805.gz
  [2025-09-12 13:48:55 MSK]  19MiB STANDARD Incr-01924107-01930792-1757674123.gz
`})})]})}function p(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(m,{...t})}):m(t)}},68741(t,e,s){s.d(e,{M:()=>n});const n={kubernetes:{value:"v1.30.4"},etcd:{value:"3.5.12-0"},etcdctl:{value:"v3.5.12"},runc:{value:"v1.1.12"},containerd:{value:"1.7.19"},crictl:{value:"v1.30.0"}}}}]);