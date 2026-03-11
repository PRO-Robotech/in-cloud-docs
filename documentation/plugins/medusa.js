
export default function (context) {
  const baseUrl = context.siteConfig.baseUrl.replace(/\/+$/, '')
  return {
    name: 'medusa',
    injectHtmlTags() {
      return {
        postBodyTags: [
          `<div id="medusa-root"></div>`,
          `<script>window.BASEURL="${baseUrl}";</script>`,
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: `${context.siteConfig.baseUrl}js/header-enabler.js`,
            },
          },
        ],
      }
    },
  }
}
