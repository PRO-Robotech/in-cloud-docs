export type TRespondsCodesItems = {
  grpcCode: string
  grpcNumber: string
  httpCode: string
  description: string | React.JSX.Element
}

export type TRespondsCodes = Record<string, TRespondsCodesItems>
