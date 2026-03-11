const getBasePrefix = () => (window.BASEURL || '').replace(/\/+$/, '')

const createMedusScript = () => {
  const script = document.createElement('script')
  const prefix = getBasePrefix()
  script.src = prefix ? `${prefix}/js/header.bundle.js` : '/js/header.bundle.js'
  script.type = 'text/javascript'
  document.body.appendChild(script)
}

const showMedusa = () => {
  const root = document.getElementById('medusa-root')
  const footer = document.querySelector('footer')
  if (root) root.style.display = 'block'
  if (footer) footer.style.display = 'none'
}

const hideMedusa = () => {
  const root = document.getElementById('medusa-root')
  const footer = document.querySelector('footer')
  if (root) root.style.display = 'none'
  if (footer) footer.style.display = 'block'
}

const isLanding = () => {
  const base = getBasePrefix()
  const current = document.location.pathname.replace(/\/+$/, '')
  if (current === base) return true
  const tail = current.slice(base.length)
  return /^\/[a-z]{2}$/.test(tail)
}

const handleRouteChange = () => {
  if (isLanding()) {
    showMedusa()
    createMedusScript()
  } else {
    hideMedusa()
  }
}

const observeUrlChange = () => {
  let oldHref = document.location.href
  handleRouteChange()

  const observer = new MutationObserver(() => {
    if (oldHref !== document.location.href) {
      oldHref = document.location.href
      handleRouteChange()
    }
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

window.addEventListener('load', observeUrlChange)
