import { useEffect } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

type SwaggerProps = {
  url: string
}

export const Swagger = ({ url }: SwaggerProps): JSX.Element => {
  useEffect(() => {
    document.title = 'Swagger UI'
  }, [])

  return <SwaggerUI url={url} />
}
