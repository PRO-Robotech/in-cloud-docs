const createMedusScript = () => {
  const element = document.createElement('script')
  element.src = '/in-cloud/js/header.bundle.js'
  element.type = 'text/javascript'
  document.querySelector('body').appendChild(element)
}

const injectOnLandingLoad = () => {
  if (document.location.pathname === '/in-cloud/') {
    document.querySelector('footer').style.display = 'none'
    createMedusScript()
  }
}

const observeUrlChange = () => {
  injectOnLandingLoad()
  let oldHref = document.location.href
  let scriptInjected = false
  const body = document.querySelector('body')
  const observer = new MutationObserver(mutations => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href
      if (document.location.pathname === '/in-cloud/') {
        document.getElementById('medusa-root').style.display = 'block'
        document.querySelector('footer').style.display = 'none'
        if (!scriptInjected) {
          createMedusScript()
          scriptInjected = true
        }
      } else {
        document.getElementById('medusa-root').style.display = 'none'
        document.querySelector('footer').style.display = 'block'
      }
    }
  })
  observer.observe(body, { childList: true, subtree: true })
}

window.onload = observeUrlChange
