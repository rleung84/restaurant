function homePage() {

  const content = document.querySelector('#content')
  const main = document.createElement('div')
  main.classList.add('main')
  const title = document.createElement('h1')
  title.classList.add('title')
  title.innerText = ('Subway')
  const img = document.createElement('img')
  img.classList.add('img')
  img.src = '../src/images/photo-1587015566802-5dc157c901cf.png'
  const headline = document.createElement('div')
  headline.classList.add('headline')





  main.appendChild(title)
  main.appendChild(img)
  main.appendChild(headline)
  content.appendChild(main)


}

export default homePage