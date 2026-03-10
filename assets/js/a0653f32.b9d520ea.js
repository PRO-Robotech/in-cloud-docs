"use strict";(globalThis.webpackChunkdocumentation=globalThis.webpackChunkdocumentation||[]).push([[9371],{63433(e,t,n){n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","title":"setupSystemdUnit","description":"{dedent`","source":"@site/docs/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit.mdx","sourceDirName":"tech-docs/kubernetes/components/containerd/payload","slug":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","permalink":"/tech-docs/kubernetes/components/containerd/payload/setupSystemdUnit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=n(74848),s=n(28453),i=n(60513),o=n(57390),l=n(9792),u=n(76331);const c={},d=void 0,p={},m=[];function f(e){return(0,a.jsxs)(u.A,{groupId:"install-type",children:[(0,a.jsxs)(l.A,{value:"Bash",children:[(0,a.jsx)(o.A,{language:"bash",children:i.A`
      cat <<EOF > /usr/lib/systemd/system/containerd.service
      [Unit]
      Description=containerd container runtime
      Documentation=https://containerd.io
      After=network.target local-fs.target containerd-install.service runc-install.service
      Wants=containerd-install.service runc-install.service

      [Service]
      ExecStartPre=-/sbin/modprobe overlay
      ExecStart=/usr/local/bin/containerd

      Type=notify
      Delegate=yes
      KillMode=process
      Restart=always
      RestartSec=5
      LimitNPROC=infinity
      LimitCORE=infinity
      LimitNOFILE=infinity
      TasksMax=infinity
      OOMScoreAdjust=-999

      [Install]
      WantedBy=multi-user.target
      EOF
    `}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      systemctl enable containerd
      systemctl start containerd
    `})]}),(0,a.jsxs)(l.A,{value:"Cloud-init",children:[(0,a.jsx)(o.A,{language:"yaml",children:i.A`
        # write_files:
        - path: /usr/lib/systemd/system/containerd.service
          owner: root:root
          permissions: '0644'
          content: |
            [Unit]
            Description=containerd container runtime
            Documentation=https://containerd.io
            After=network.target local-fs.target containerd-install.service runc-install.service
            Wants=containerd-install.service runc-install.service

            [Service]
            ExecStartPre=-/sbin/modprobe overlay
            ExecStart=/usr/local/bin/containerd

            Type=notify
            Delegate=yes
            KillMode=process
            Restart=always
            RestartSec=5
            LimitNPROC=infinity
            LimitCORE=infinity
            LimitNOFILE=infinity
            TasksMax=infinity
            OOMScoreAdjust=-999

            [Install]
            WantedBy=multi-user.target
      `}),(0,a.jsx)(o.A,{language:"bash",children:i.A`
      #runcmd:
      - systemctl enable containerd
      - systemctl start containerd
    `})]})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f()}},9792(e,t,n){n.d(t,{A:()=>i});n(96540);var r=n(34164);const a="tabItem_Ymn6";var s=n(74848);function i({children:e,hidden:t,className:n}){return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a,n),hidden:t,children:e})}},76331(e,t,n){n.d(t,{A:()=>k});var r=n(96540),a=n(34164),s=n(17559),i=n(23104),o=n(56347),l=n(205),u=n(57485),c=n(31682),d=n(70679);function p(e){return r.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)(()=>{const e=t??function(e){return p(e).map(({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r}))}(n);return function(e){const t=(0,c.XI)(e,(e,t)=>e.value===t.value);if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,n])}function f({value:e,tabValues:t}){return t.some(t=>t.value===e)}function b({queryString:e=!1,groupId:t}){const n=(0,o.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(a),(0,r.useCallback)(e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})},[a,n])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,o]=(0,r.useState)(()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find(e=>e.default)??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s})),[u,c]=b({queryString:n,groupId:a}),[p,h]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,d.Dv)(t);return[n,(0,r.useCallback)(e=>{t&&a.set(e)},[t,a])]}({groupId:a}),y=(()=>{const e=u??p;return f({value:e,tabValues:s})?e:null})();(0,l.A)(()=>{y&&o(y)},[y]);return{selectedValue:i,selectValue:(0,r.useCallback)(e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)},[c,h,s]),tabValues:s}}var y=n(92303);const v="tabList__CuJ",g="tabItem_LNqP";var x=n(74848);function A({className:e,block:t,selectedValue:n,selectValue:r,tabValues:s}){const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),i=s[a].value;i!==n&&(l(t),r(i))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e),children:s.map(({value:e,label:t,attributes:r})=>(0,x.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>{o.push(e)},onKeyDown:c,onClick:u,...r,className:(0,a.A)("tabs__item",g,r?.className,{"tabs__item--active":n===e}),children:t??e},e))})}function w({lazy:e,children:t,selectedValue:n}){const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=s.find(e=>e.props.value===n);return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))})}function S(e){const t=h(e);return(0,x.jsxs)("div",{className:(0,a.A)(s.G.tabs.container,"tabs-container",v),children:[(0,x.jsx)(A,{...t,...e}),(0,x.jsx)(w,{...t,...e})]})}function k(e){const t=(0,y.A)();return(0,x.jsx)(S,{...e,children:p(e.children)},String(t))}}}]);