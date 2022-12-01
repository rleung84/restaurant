function contactPage() {

  const content = document.querySelector('#content')
  const main = document.createElement('div')
  main.classList.add('main')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.innerText = ('Contact Us')
  const map = document.createElement('div')
  map.classList.add('map')






  main.appendChild(title)
  main.appendChild(map)
  content.appendChild(main)


}

export default contactPage