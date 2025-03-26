
export default function () {
  return {
    name: 'medusa',
    injectHtmlTags({ content }) {
      return {
        postBodyTags: [
          `<div id="medusa-root"></div>`,
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: '/js/header-enabler.js',
            },
          },
        ],
      }
    },
  }
}
