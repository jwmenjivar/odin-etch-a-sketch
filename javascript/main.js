function divCreator(){
let container = document.createElement('div');
document.body.appendChild(container)
for(let i=1; i<=3080;i++){
let first = document.createElement('div');
container.appendChild(first)
//first.textContent="txt"+i;
first.style.height="10px"
first.style.border="1px solid blue"
first.style.margin=""
first.className="child"
first.id=`square${i}`
}
container.style.display="grid";
container.style.gridTemplateColumns="repeat(56, 10px)"
let button = document.createElement('button');
document.body.appendChild(button);
button.textContent="Erase";
button.style.margin="10px";
}
divCreator();

function addClassAndColor(){
    //console.log(this.id)
let selected = document.querySelector(`#${this.id}`);
let arr = ["red", "blue", "yellow"];
let randomElement= arr[Math.floor(Math.random()*3)];
selected.classList.add(`${randomElement}`); 
//selected.style.backgroundColor="red";
}

let divs = document.querySelectorAll('.child');
divs.forEach(div =>  div.addEventListener('mouseover', addClassAndColor))

function erase(){
    let divs = document.querySelectorAll('.child');
    divs.forEach(div => div.classList.remove('yellow', 'red', 'blue'));
}

let btn = document.querySelector('button');
btn.addEventListener('click', erase)