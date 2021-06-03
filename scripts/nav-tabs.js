const tabList = document.getElementsByClassName("navtabs-content")
const tablinkList = document.getElementsByClassName("navtabs-tablink")

const openTab = (tabName, tabLink) => {
  let x
  for (x = 0; x < tablinkList.length; x++) {
    tablinkList[x].classList.remove("navtabs-tablink-active")
  }
  for (x = 0; x < tabList.length; x++) {
    tabList[x].style.display = "none"
  }
  tabName.style.display = "block";
  tabLink.className += " navtabs-tablink-active"
}

Object.keys(tablinkList).forEach((i) => {
  tablinkList[i].addEventListener('click', () => {
    openTab(tabList[i], tablinkList[i])
  })
})