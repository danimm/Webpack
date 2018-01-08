import '../css/estilos.css'
import { firstMessage,delayedMessage } from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import renderToDOM from './render-to-dom'

console.log(data)

data.teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDOM(element)
})

document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)
document.body.append(img)
console.log('Hola mundo!, desde Webpack.config!')
