"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[9968],{16085(e,n,t){t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>$,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","title":"examinationOpensslComponent","description":"After configuring the certificates, it is recommended to verify their correctness using Kubeadm","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent.mdx","sourceDirName":"tech-docs/kubernetes/certificates/examination","slug":"/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","permalink":"/en/tech-docs/kubernetes/certificates/examination/examinationOpensslComponent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var c=t(74848),r=t(28453),o=t(57390),i=t(60513),a=t(44349);const l={},d=void 0,p={},u=[];function E(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["After configuring the certificates, it is recommended to verify their correctness using ",(0,c.jsx)(n.code,{children:"Kubeadm"})]}),"\n"]}),"\n",(0,c.jsx)("h4",{children:"Working directory"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:i.A`
      mkdir -p ${a.M.kubernetesBaseFolderPath.value}/openssl
  `}),"\n",(0,c.jsx)("h4",{children:"Script creation instructions"}),"\n",(0,c.jsxs)(t,{className:"custom-gray-block",children:[(0,c.jsx)("summary",{children:"Script creation instructions"}),(0,c.jsx)(o.A,{language:"bash",children:i.A`
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
`})]}),"\n",(0,c.jsx)("h4",{children:"Setting permissions"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:i.A`
    chmod +x ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,c.jsx)("h4",{children:"Running the script for all certificates/kubeconfigs"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:i.A`
    ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh
  `}),"\n",(0,c.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,c.jsx)(o.A,{language:"bash",children:i.A`
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
`})}),"\n",(0,c.jsx)("h4",{children:"Running the script for a single certificate/kubeconfig"}),"\n",(0,c.jsx)(o.A,{language:"bash",children:i.A`
    ${a.M.kubernetesBaseFolderPath.value}/openssl/cert-report.sh ${a.M.kubernetesBaseFolderPath.value}/pki/ca.crt
  `}),"\n",(0,c.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,c.jsx)(o.A,{language:"bash",children:i.A`
  CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED


  CERTIFICATE AUTHORITY   EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
  ca                      Oct 20, 2034 22:04 UTC   9y              no
`})})]})}function $(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(E,{...e})}):E(e)}}}]);