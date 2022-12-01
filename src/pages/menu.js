function menuPage() {

  const content = document.querySelector('#content')
  const main = document.createElement('div')
  main.classList.add('main')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.innerText = ('Menu')
  const menu = document.createElement('div')
  menu.classList.add('menu')
  for (let i = 0; i < 6; i++) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')
    menuItem.innerText = (`Item ${i + 1}`)
    menu.appendChild(menuItem)
  }




  main.appendChild(title)
  main.appendChild(menu)
  content.appendChild(main)


}

export default menuPage