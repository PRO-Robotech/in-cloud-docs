export type TDownloadDefinitionItems = {
  path: string
  templateUrlBin: string
  templateUrlBinCheckSum: string
  baseUrl: string
}

export type TDownloadItems = Record<string, TDownloadDefinitionItems>
