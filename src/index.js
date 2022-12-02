import homePage from "./pages/home";
import menuPage from "./pages/menu";
import contactPage from "./pages/contact";
import './style.css';

function navbar() {
  const content = document.querySelector('#content')
  const nav = document.createElement('div')
  nav.classList.add('nav')
  const tabs = document.createElement('div')
  tabs.classList.add('tabs')
  const homeTab = document.createElement('button')
  homeTab.classList.add('tab')
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
}

function mainContent(e) {
  console.log(e.currentTarget.innerText)
}

navbar()
// Depending on which tab is selected render the page
// homePage()
// menuPage()
// contactPage()