const debounce = (method, delay) => {
  clearTimeout(method._tId)
  method._tId = setTimeout(() => {
    method()
  }, delay)
}

window.onscroll = () =>
  debounce(() => {
    const className = 'header-not-at-top'
    const distanceScrolled = document.documentElement.scrollTop
    if (
      (!document.body.classList.contains(className) && distanceScrolled > 220) ||
      (document.body.classList.contains(className) && distanceScrolled > 100)
    ) {
      document.body.classList.add('header-not-at-top')
    } else {
      document.body.classList.remove('header-not-at-top')
    }
  }, 100)
