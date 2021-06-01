// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode')

// mobile
const modeMobToggle = document.querySelector('.mode-mob-toggle')
const checkbox = document.querySelector('.mode-mob-switch--input')
const circle = document.querySelector('.mode-mob-switch--slider--circle')

// desktop
const modeDskToggle = document.querySelector('.mode-dsk-toggle')
const dskSun = document.querySelector('.mode-dsk--sun')
const dskMoon = document.querySelector('.mode-dsk--moon')

const enableDarkMode = () => {
  document.body.classList.add('darkmode')
  // mobile
  checkbox.setAttribute('checked', '')
  circle.style.transform = 'translateX(24px)'
  // desktop
  dskMoon.style.display = 'none'
  dskSun.style.display = 'inline-block'
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode')
  // mobile
  checkbox.removeAttribute('checked')
  circle.style.transform = 'translateX(0px)'
  // desktop
  dskSun.style.display = 'none'
  dskMoon.style.display = 'inline-block'
  localStorage.setItem('darkMode', null)
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode()
} else {
  disableDarkMode()
}

// mobile
modeMobToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'enabled') {
    enableDarkMode()
  } else {  
    disableDarkMode()
  }
})

// desktop
modeDskToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== 'enabled') {
    enableDarkMode()
  } else {  
    disableDarkMode()
  }
})