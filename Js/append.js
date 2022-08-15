//1.Where to Add
const ice = document.getElementById('icename')

//2.What to be added

const li = document.createElement('li')
li.innerText = "Chololate Flavour"

//3.Add the child kono quotation dewa jabe na "" 
ice.appendChild(li)
//1.where to add
const mainContainer = document.getElementById('main-content')

const section = document.createElement('section')
mainContainer.appendChild(section)
const h1 = document.createElement('h1')
h1.innerText = 'Fast Food'
section.appendChild(h1)
const ul = document.createElement('ul')
section.appendChild(ul)
const li1 = document.createElement('li')
li1.innerText = "Burger"
const li2 = document.createElement('li')
li2.innerText = "Pizza"
const li3 = document.createElement('li')
li3.innerText = "Pasta"
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

//how to creat Html directly

const sectionPhone = document.createElement('section')
sectionPhone.innerHTML = `
<h1>Smart Phone</h1>
<ul>
<li>Iphone 14</li>
<li>Xiomi 12 pro</li>
<li>One Plus 10 pro</li>

</ul>
`


mainContainer.appendChild(sectionPhone)