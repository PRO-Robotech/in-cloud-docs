"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[2650,2651,9968],{17861(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>f});const c=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/all-examination","title":"5.2.2.5. Verification","description":"This section covers the verification of the correctness of created certificates and keys, as well as the correspondence between them. This is important for eliminating errors before launching Kubernetes components.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/allExaminationComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/all-examination","permalink":"/en/tech-docs/kubernetes/certificates/examination/all-examination","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"all-examination","title":"5.2.2.5. Verification"},"sidebar":"techDocs","previous":{"title":"5.2.2.4. \u0421\u0435\u0440\u0432\u0438\u0441 \u0410\u043a\u043a\u0430\u0443\u043d\u0442","permalink":"/en/tech-docs/kubernetes/certificates/service-account/all-service-account"},"next":{"title":"5.2.3.1. \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f","permalink":"/en/tech-docs/kubernetes/k8s-init"}}');var i=n(74848),o=n(28453),s=n(85517),r=n(16085),a=n(9792),d=n(76331);const l={id:"all-examination",title:"5.2.2.5. Verification"},u=void 0,p={},f=[...r.toc,...s.toc];function m(e){const t={blockquote:"blockquote",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This section covers the verification of the correctness of created certificates and keys, as well as the correspondence between them. This is important for eliminating errors before launching Kubernetes components."}),"\n"]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,i.jsx)("p",{style:{marginBottom:0},children:"Certificate block verification"}),(0,i.jsx)("p",{className:"obligatory-note-green",children:"\u25cf Optional"})]})}),(0,i.jsxs)(d.A,{groupId:"install-type",children:[(0,i.jsx)(a.A,{value:"HardWay",children:(0,i.jsx)(r.default,{})}),(0,i.jsx)(a.A,{value:"Kubeadm",children:(0,i.jsx)(s.default,{})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},85517(e,t,n){n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});const c=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","title":"examinationKubeadmComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationKubeadmComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453),s=n(57390),r=n(60513);const a={},d=void 0,l={},u=[];function p(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,i.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,i.jsx)(s.A,{language:"bash",children:r.A`
  kubeadm certs check-expiration
`}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(s.A,{language:"bash",children:r.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},16085(e,t,n){n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});const c=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","title":"examinationOpensslComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var i=n(74848),o=n(28453),s=n(57390),r=n(60513),a=n(44349);const d={},l=void 0,u={},p=[];function f(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,i.jsx)(t.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,i.jsx)("h4",{children:"Working directory"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:r.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/openssl
  `}),"\n",(0,i.jsx)("h4",{children:"Script creation instructions"}),"\n",(0,i.jsxs)(n,{className:"custom-gray-block",children:[(0,i.jsx)("summary",{children:"Script creation instructions"}),(0,i.jsx)(s.A,{language:"bash",children:r.A`
  cat <<'EOF' > ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  #!/usr/bin/env bash
  set -euo pipefail

  TMPDIR=\$(mktemp -d)
  trap 'rm -rf "\$TMPDIR"' EXIT

  declare -A CN_TO_CA_NAME
  declare -A PROCESSED_FINGERPRINTS
  CERT_ROWS=()
  CA_ROWS=()

  CERT_HEADER=\$(printf "%-28s %-25s %-15s %-24s %-20s" \\
    "CERTIFICATE" "EXPIRES" "RESIDUAL TIME" "CERTIFICATE AUTHORITY" "EXTERNALLY MANAGED")
  CA_HEADER=\$(printf "%-24s %-25s %-15s %-20s" \\
    "CERTIFICATE AUTHORITY" "EXPIRES" "RESIDUAL TIME" "EXTERNALLY MANAGED")

  CERT_PATH="\${1:-}"

  if [ -n "\$CERT_PATH" ]; then
    FILES=("\$CERT_PATH")
  else
    mapfile -t FILES < <(
      find /etc/kubernetes/ \\
        -type d -name openssl -prune -o \\
        -type f \\( -name "*.crt" -o -name "*.pem" -o -name "*.conf" \\) -print 2>/dev/null
    )
  fi

  extract_cert() {
    local file="\$1"
    local out="\$2"
    if grep -q "client-certificate-data:" "\$file"; then
      awk '/client-certificate-data:/ {print \$2}' "\$file" | base64 -d > "\$out"
    else
      cp "\$file" "\$out"
    fi
  }

  cert_lifetime() {
    local end="\$1"
    local end_ts now_ts days years
    end_ts=\$(date -d "\$end" +%s)
    now_ts=\$(date +%s)
    (( end_ts < now_ts )) && echo "expired" && return
    days=\$(( (end_ts - now_ts) / 86400 ))
    years=\$(( days / 365 ))
    (( years > 0 )) && echo "\${years}y" || echo "\${days}d"
  }

  cert_name() {
    local path="\$1"
    local base
    base=\$(basename "\$path" | sed 's/\\.\\(crt\\|pem\\|conf\\)\$//')
    case "\$path" in
      */etcd/*)         echo "etcd-\$base" ;;
      */front-proxy/*)  echo "front-proxy-\$base" ;;
      *)                echo "\$base" ;;
    esac
  }

  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/ca.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout -text 2>/dev/null | grep -A1 "Key Usage" | grep -q "Certificate Sign" || continue
    cn=\$(openssl x509 -in "\$crt" -noout -subject 2>/dev/null | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
    [[ -n "\$cn" ]] && CN_TO_CA_NAME["\$cn"]="\$(cert_name "\$file")"
  done

  for file in "\${FILES[@]}"; do
    crt="\$TMPDIR/cert.crt"
    extract_cert "\$file" "\$crt" || continue
    openssl x509 -in "\$crt" -noout >/dev/null 2>&1 || continue

    fp=\$(openssl x509 -in "\$crt" -noout -fingerprint -sha256 | cut -d= -f2)
    [[ -n "\${PROCESSED_FINGERPRINTS[\$fp]+x}" ]] && continue
    PROCESSED_FINGERPRINTS[\$fp]=1

    name=\$(cert_name "\$file")
    end_raw=\$(openssl x509 -in "\$crt" -noout -enddate | cut -d= -f2)
    expires=\$(date -d "\$end_raw" "+%b %d, %Y %H:%M UTC")
    residual=\$(cert_lifetime "\$end_raw")

    if openssl x509 -in "\$crt" -noout -text | grep -A1 "Key Usage" | grep -q "Certificate Sign"; then
      CA_ROWS+=("\$(printf "%-24s %-25s %-15s %-20s" "\$name" "\$expires" "\$residual" "no")")
    else
      issuer_cn=\$(openssl x509 -in "\$crt" -noout -issuer | sed -n 's/.*CN *= *\\([^,\\/]*\\).*/\\1/p')
      ca_name="\${CN_TO_CA_NAME[\$issuer_cn]:-\$issuer_cn}"
      CERT_ROWS+=("\$(printf "%-28s %-25s %-15s %-24s %-20s" "\$name" "\$expires" "\$residual" "\$ca_name" "no")")
    fi
  done

  echo
  echo "\$CERT_HEADER"
  printf "%s\\n" "\${CERT_ROWS[@]}" | sort
  echo
  echo "\$CA_HEADER"
  printf "%s\\n" "\${CA_ROWS[@]}" | sort
  EOF
`})]}),"\n",(0,i.jsx)("h4",{children:"Setting permissions"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:r.A`
    chmod +x ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,i.jsx)("h4",{children:"Running the script for all certificates/kubeconfigs"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:r.A`
    ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(s.A,{language:"bash",children:r.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
  admin.conf                 Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver                  Oct 22, 2025 22:06 UTC   364d            ca                      no
  apiserver-etcd-client      Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  apiserver-kubelet-client   Oct 22, 2025 22:06 UTC   364d            ca                      no
  controller-manager.conf    Oct 22, 2025 22:06 UTC   364d            ca                      no
  etcd-healthcheck-client    Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-peer                  Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  etcd-server                Oct 22, 2025 22:06 UTC   364d            etcd-ca                 no
  front-proxy-client         Oct 22, 2025 22:06 UTC   364d            front-proxy-ca          no
  scheduler.conf             Oct 22, 2025 22:06 UTC   364d            ca                      no
  super-admin.conf           Oct 22, 2025 22:06 UTC   364d            ca                      no

  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
  etcd-ca                 Oct 20, 2034 22:04 UTC   9y              no
  front-proxy-ca          Oct 20, 2034 22:04 UTC   9y              no
`})}),"\n",(0,i.jsx)("h4",{children:"Running the script for a single certificate/kubeconfig"}),"\n",(0,i.jsx)(s.A,{language:"bash",children:r.A`
    ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt
  `}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"warning",children:(0,i.jsx)(s.A,{language:"bash",children:r.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED


  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);