const accordions = document.getElementsByClassName("accordion")
const accContent = document.getElementsByClassName("accordion-content")
const accToggle = document.getElementsByClassName("accordion-toggle")
const accIcon = document.getElementsByClassName("accordion-toggle--icon")

Object.keys(accordions).forEach((i) => {
  accToggle[i].addEventListener('click', () => {
    accContent[i].classList.toggle("acordion-show")
    if (accContent[i].style.maxHeight) {
      accContent[i].style.maxHeight = null;
      accIcon[i].style.transform = "rotate(-90deg)"
    } else {
      accContent[i].style.maxHeight = accContent[i].scrollHeight + "px"
      accIcon[i].style.transform = "rotate(90deg)"
    }
  })
})
