export type TCertsDefinitionItems = {
  keyPath: string
  crtPath: string
  csrPath: string
  crtConf: string
  keySize: string
  cname: string
}

export type TCertsItems = Record<string, TCertsDefinitionItems>
