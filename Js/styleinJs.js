const sections = document.querySelectorAll('section')
for(const section of sections){
    // console.log(section);
    section.style.backgroundColor = 'cyan'
    section.style.border = '2px solid red'
    section.style.marginBottom = '20px'
    section.style.width = '1200px'
    section.style.borderRadius = '15px'
}
const cream = document.getElementById('icecream-title')
cream.style.color = 'blue'
const iceCream = document.getElementById('icecream-container')
iceCream.style.background = 'magenta'

cream.classList.remove('iceText')//kono dot dewa jabe na
iceCream.classList.remove('text-center')