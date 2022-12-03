import homePage from "./pages/home";
import menuPage from "./pages/menu";
import contactPage from "./pages/contact";
import './style.css';

function loadPage() {
  const content = document.querySelector('#content')
  const nav = document.createElement('div')
  nav.classList.add('nav')
  const tabs = document.createElement('div')
  tabs.classList.add('tabs')
  const homeTab = document.createElement('button')
  homeTab.classList.add('tab', 'tab-active')
  homeTab.innerText = 'Home'
  homeTab.addEventListener('click', mainContent)
  const menuTab = document.createElement('button')
  menuTab.classList.add('tab')
  menuTab.innerText = 'Menu'
  menuTab.addEventListener('click', mainContent)
  const contactTab = document.createElement('button')
  contactTab.classList.add('tab')
  contactTab.innerText = 'Contact'
  contactTab.addEventListener('click', mainContent)
  tabs.appendChild(homeTab)
  tabs.appendChild(menuTab)
  tabs.appendChild(contactTab)
  nav.appendChild(tabs)
  content.appendChild(nav)
  homePage()
}

function mainContent(e) {
  e.currentTarget.classList.add("tab-active")
  const main = document.querySelector('.main')
  main.remove()
  const tab = document.getElementsByClassName("tab");
  for (let i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace("tab-active", "");
  }
  if (e.currentTarget.innerText == "Home") {
    homePage()
  } else if (e.currentTarget.innerText == "Menu") {
    menuPage()
  }
  else {
    contactPage()
  }
}

loadPage()
// Depending on which tab is selected render the page
// homePage()
// menuPage()
// contactPage()