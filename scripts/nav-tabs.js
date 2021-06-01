const tabList = document.getElementsByClassName("navtabs-content")
const tablinkList = document.getElementsByClassName("navtabs-tablink")

Object.keys(tablinkList).forEach((i) => {
  tablinkList[i].addEventListener('click', () => {
    openTab(tabList[i], tablinkList[i])
  })
})

openTab = (tabName, tabLink) => {
  for (i = 0; i < tablinkList.length; i++) {
    tablinkList[i].classList.remove("navtabs-tablink-active")
  }
  for (i = 0; i < tabList.length; i++) {
    tabList[i].style.display = "none"
  }
  tabName.style.display = "block";
  tabLink.className += " navtabs-tablink-active"
}