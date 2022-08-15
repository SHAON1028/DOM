//option1: <h1 onclick="console.log('I am clicked')">DOM er Ajk special EVENTS</h1>


// option2
// button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
//Optikon-3
// {/* <button id="make-blue">Make Blue</button> */}
const blue = document.getElementById('make-blue')
blue.onclick = makeBlue//call kora jabena ()
function makeBlue(blue){
    document.body.style.backgroundColor = 'blue'
}

const green = document.getElementById('make-green')
green.onclick = function greembutton() {
    document.body.style.backgroundColor = 'green'
}
//option:4

const yellow = document.getElementById('make-yellow')
yellow.addEventListener('click',makeYello)

function makeYello(){
    document.body.style.backgroundColor = 'yellow'
}
//option:5 without variable most used
document.getElementById('make-cyan').addEventListener('click',function(){
    document.body.style.backgroundColor = 'cyan'
})