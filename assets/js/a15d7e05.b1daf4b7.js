"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35307],{9792:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function l({children:e,hidden:r,className:t}){return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,t),hidden:r,children:e})}},47611:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"tech-docs/monitoring/victoria-metrics-cluster/victoria-metrics-cluster-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Cluster","description":"VictoriaMetrics Cluster \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm.","source":"@site/docs/tech-docs/monitoring/victoria-metrics-cluster/victoria-metrics-cluster-install.mdx","sourceDirName":"tech-docs/monitoring/victoria-metrics-cluster","slug":"/tech-docs/monitoring/victoria-metrics-cluster/victoria-metrics-cluster-install","permalink":"/tech-docs/monitoring/victoria-metrics-cluster/victoria-metrics-cluster-install","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"victoria-metrics-cluster-install","title":"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Cluster"}}');var a=t(74848),i=t(28453),l=t(9792),n=t(76331),c=t(68747),o=t(60513),u=t(53739);const d={id:"victoria-metrics-cluster-install",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 VictoriaMetrics Cluster"},m="5.5.1.2.7. VictoriaMetrics Cluster",h={},p=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",level:3},{value:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart",id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Cluster",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-cluster",level:3},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e in-cloud manifests",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-in-cloud-manifests",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"55127-victoriametrics-cluster",children:"5.5.1.2.7. VictoriaMetrics Cluster"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"VictoriaMetrics Cluster"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043b\u0438\u0431\u043e \u0438\u0437 in-cloud manifests \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 helm."]}),"\n",(0,a.jsxs)(n.A,{children:[(0,a.jsxs)(l.A,{value:"helm",children:[(0,a.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e helm"}),(0,a.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-helm",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Helm"}),(0,a.jsxs)(r.p,{children:["TODO: \u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0438 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u0443\u044e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443\n\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 Helm, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0435\u0433\u043e. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c Helm \u0441 ",(0,a.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"}),". \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),(0,a.jsx)(r.h3,{id:"\u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435-\u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439-\u0441-helm-chart",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 Helm chart"}),(0,a.jsxs)(r.p,{children:["\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 charts, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f ",(0,a.jsx)(r.code,{children:"VictoriaMetrics Cluster"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 VictoriaMetrics:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"helm repo add helm repo add victoriametrics https://victoriametrics.github.io/helm-charts/\n"})}),(0,a.jsx)(r.p,{children:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a charts:"}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"helm repo update\n"})}),(0,a.jsx)(r.h3,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435-victoriametrics-cluster",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 VictoriaMetrics Cluster"}),(0,a.jsxs)(r.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,a.jsx)(r.code,{children:"VictoriaMetrics Cluster"})," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"helm install --name vmcluster victoriametrics/victoria-metrics-k8s-stack --namespace in-cloud-vmcluster --create-namespace -f values.yaml\n"})}),(0,a.jsxs)(r.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0440\u0435\u043b\u0438\u0437 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,a.jsx)(r.code,{children:"vmcluster"})," \u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0435\u0442 ",(0,a.jsx)(r.code,{children:"VictoriaMetrics Cluster"})," \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 Kubernetes \u0432 \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441\u0435 ",(0,a.jsx)(r.code,{children:"in-cloud-vmcluster"}),"."]}),(0,a.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,a.jsx)("div",{className:"child-block",children:(0,a.jsx)("h4",{className:"center",children:"Enivironments"})}),(0,a.jsxs)("div",{className:"child-block",children:[(0,a.jsx)("h4",{className:"center",children:"Values"}),(0,a.jsx)(c.A,{language:"yaml",children:o.A`
              enabled: true
              createCRD: true
              replicaCount: 1
              rbac:
                create: true
                pspEnabled: true
              operator:
                disable_prometheus_converter: true
                psp_auto_creation_enabled: false
                enable_converter_ownership: false
                useCustomConfigReloader: true
              env:
                - name: GOMAXPROCS
                  value: '1'
                - name: VM_VMAGENTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTMANAGER_CONFIGRELOADERMEMORY
                  value: '100Mi'
                - name: VM_VMALERTDEFAULT_CONFIGRELOADERMEMORY
                  value: '100Mi'
              resources:
                requests:
                  cpu: 100m
                  memory: 128Mi
                limits:
                  cpu: 250m
                  memory: 256Mi
              admissionWebhooks:
                enabled: false
                policy: Fail
                caBundle: ""
                certManager:
                  enabled: false
                  issuer: {}
              serviceMonitor:
                enabled: true
              tolerations:
                - key: node-role.kubernetes.io/master
                  effect: NoSchedule
                - key: node-role.kubernetes.io/control-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/data-plane
                  effect: NoSchedule
                - key: node-role.kubernetes.io/in-cloud-infra
                  effect: NoSchedule
                - key: node-role.kubernetes.io/vmcluster
                  effect: NoSchedule
            `})]})]})]}),(0,a.jsxs)(l.A,{value:"in-cloud/manifests",children:[(0,a.jsx)(r.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-in-cloud-manifests",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e in-cloud manifests"}),(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"VictoriaMetrics Cluster"})," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\u0435 Kubernetes-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Helm Chart."]}),(0,a.jsxs)("div",{className:"parent-div",style:{minHeight:"420px"},children:[(0,a.jsxs)("div",{className:"child-block",children:[(0,a.jsx)("h4",{className:"center",children:"Enivironments"}),(0,a.jsx)(c.A,{language:"bash",children:o.A`
              export VM_CLUSTER_VERSION="${u.M.kubeStateMetrics.value}"
            `})]}),(0,a.jsxs)("div",{className:"child-block",children:[(0,a.jsx)("h4",{className:"center",children:"Values"}),(0,a.jsx)(c.A,{language:"yaml",children:o.A`
            vmcluster:
              enabled: enabled
              spec:
                retentionPeriod: "10d"
                replicationFactor: 2
                vmstorage:
                  replicaCount: 10
                  storageDataPath: "/vm-data"
                  storage:
                    volumeClaimTemplate:
                      spec:
                        storageClassName: default
                        resources:
                          requests:
                            storage: 110Gi
                  extraArgs:
                    dedup.minScrapeInterval: "30s"
                    search.maxUniqueTimeseries: "300000000"
                    search.maxConcurrentRequests: "128"
                  resources:
                    limits:
                      cpu: "5"
                      memory: 12Gi
                    requests:
                      cpu: "2"
                      memory: "5Gi"
                  priorityClassName: system-node-critical
                  nodeSelector:
                    "node-role.kubernetes.io/vmcluster": ""
                  tolerations:
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/data-plane
                    - key: node-role.kubernetes.io/in-cloud-infra
                      effect: NoSchedule
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/vmcluster
                  affinity:
                    podAntiAffinity:
                      preferredDuringSchedulingIgnoredDuringExecution:
                        - weight: 100
                          podAffinityTerm:
                            labelSelector:
                              matchExpressions:
                                - key: "app.kubernetes.io/name"
                                  operator: In
                                  values:
                                    - "vmstorage"
                            topologyKey: "kubernetes.io/hostname"
                vmselect:
                  extraArgs:
                    dedup.minScrapeInterval: 30s
                    search.maxQueryDuration: 60s
                    search.maxQueryLen: "20971520"
                    search.maxSeries: "300000000"
                    search.maxSamplesPerQuery: "2000000000"
                    search.maxSamplesPerSeries: "2000000000"
                    search.maxUniqueTimeseries: "300000000"
                    search.maxSeriesPerAggrFunc: "600000000"
                    search.maxConcurrentRequests: "128"
                    search.maxLabelsAPIDuration: 60s
                    search.logSlowQueryDuration: 60s
                  replicaCount: 10
                  cacheMountPath: "/select-cache"
                  storage:
                    volumeClaimTemplate:
                      spec:
                        storageClassName: default
                  resources:
                    limits:
                      cpu: "3"
                      memory: "5Gi"
                    requests:
                      cpu: "1"
                      memory: "2Gi"
                  priorityClassName: system-node-critical
                  nodeSelector:
                    "node-role.kubernetes.io/vmcluster": ""
                  tolerations:
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/data-plane
                    - key: node-role.kubernetes.io/in-cloud-infra
                      effect: NoSchedule
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/vmcluster
                  affinity:
                    podAntiAffinity:
                      preferredDuringSchedulingIgnoredDuringExecution:
                        - weight: 100
                          podAffinityTerm:
                            labelSelector:
                              matchExpressions:
                                - key: "app.kubernetes.io/name"
                                  operator: In
                                  values:
                                    - "vmselect"
                            topologyKey: "kubernetes.io/hostname"
                vminsert:
                  replicaCount: 10
                  priorityClassName: system-cluster-critical
                  resources:
                    limits:
                      cpu: "2"
                      memory: 4Gi
                    requests:
                      cpu: "1"
                      memory: "2Gi"
                  extraArgs:
                    maxLabelValueLen: "8192"
                    maxLabelsPerTimeseries: "80"
                    insert.maxQueueDuration: 60s
                    maxConcurrentInserts: "2048"
                  nodeSelector:
                    "node-role.kubernetes.io/vmcluster": ""
                  tolerations:
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/data-plane
                    - key: node-role.kubernetes.io/in-cloud-infra
                      effect: NoSchedule
                    - effect: NoSchedule
                      key: node-role.kubernetes.io/vmcluster
                  affinity:
                    podAntiAffinity:
                      preferredDuringSchedulingIgnoredDuringExecution:
                        - weight: 100
                          podAffinityTerm:
                            labelSelector:
                              matchExpressions:
                                - key: "app.kubernetes.io/name"
                                  operator: In
                                  values:
                                    - "vminsert"
                            topologyKey: "kubernetes.io/hostname"
            `})]})]}),(0,a.jsx)(r.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430:"}),(0,a.jsx)(c.A,{language:"bash",children:o.A`helmfile -e $\{VM_CLUSTER_VERSION} -l in-cloud-collections=vmcluster in-cloud-monitoring-stack=infra | kubectl apply -f - `})]})]}),"\n",(0,a.jsx)(r.p,{children:"7"})]})}function v(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},53739:(e,r,t)=>{t.d(r,{M:()=>s});const s={victoriaMetricsOperator:{value:"0.37.0"},victoriaMetricsStack:{value:"0.28.2"},nodeExporter:{value:"4.27.0"},blackboxExporter:{value:"9.0.0"},processExporter:{value:"0.5.0"},kubeStateMetrics:{value:"5.16.4"},metricsServer:{value:"3.12.1"}}},76331:(e,r,t)=>{t.d(r,{A:()=>j});var s=t(96540),a=t(34164),i=t(23104),l=t(56347),n=t(205),c=t(57485),o=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return d(e).map((({props:{value:e,label:r,attributes:t,default:s}})=>({value:e,label:r,attributes:t,default:s})))}(t);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h({value:e,tabValues:r}){return r.some((r=>r.value===e))}function p({queryString:e=!1,groupId:r}){const t=(0,l.W6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})}),[a,t])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,i=m(e),[l,c]=(0,s.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[o,d]=p({queryString:t,groupId:a}),[f,v]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,u.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:a}),b=(()=>{const e=o??f;return h({value:e,tabValues:i})?e:null})();(0,n.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g({className:e,block:r,selectedValue:t,selectValue:s,tabValues:l}){const n=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const r=e.currentTarget,a=n.indexOf(r),i=l[a].value;i!==t&&(c(r),s(i))},u=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=n.indexOf(e.currentTarget)+1;r=n[t]??n[0];break}case"ArrowLeft":{const t=n.indexOf(e.currentTarget)-1;r=n[t]??n[n.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},e),children:l.map((({value:e,label:r,attributes:s})=>(0,x.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>{n.push(e)},onKeyDown:u,onClick:o,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===e}),children:r??e},e)))})}function y({lazy:e,children:r,selectedValue:t}){const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function k(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...r,...e}),(0,x.jsx)(y,{...r,...e})]})}function j(e){const r=(0,v.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(r))}}}]);