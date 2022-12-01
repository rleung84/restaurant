import homePage from "./pages/home";
import menuPage from "./pages/menu";
import contactPage from "./pages/contact";

function navbar() {
  const content = document.querySelector('#content')
  const nav = document.createElement('div')
  nav.classList.add('nav')
  const tabs = document.createElement('div')
  tabs.classList.add('tabs')
  const homeTab = document.createElement('button')
  homeTab.classList.add('tab')
  homeTab.innerText = 'Home'
  const menuTab = document.createElement('button')
  menuTab.classList.add('tab')
  menuTab.innerText = 'Menu'
  const contactTab = document.createElement('button')
  contactTab.classList.add('tab')
  contactTab.innerText = 'Contact'
  tabs.appendChild(homeTab)
  tabs.appendChild(menuTab)
  tabs.appendChild(contactTab)
  nav.appendChild(tabs)
  content.appendChild(nav)
}

navbar()
// Depending on which tab is selected render the page
homePage()
menuPage()
contactPage()