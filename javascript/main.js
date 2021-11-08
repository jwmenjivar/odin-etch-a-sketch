function divCreator(){
let container = document.createElement('div');
document.body.appendChild(container)
for(let i=1; i<=256;i++){
let first = document.createElement('div');
container.appendChild(first)
//first.textContent="txt"+i;
first.style.height="40px"
first.style.border="1px solid blue"
first.style.margin=""
first.className="child"
first.id=`square${i}`
}
container.style.display="grid";
container.style.gridTemplateColumns="repeat(16, 40px)"
}
divCreator();

function addClassAndColor(){
    //console.log(this.id)
let selected = document.querySelector(`#${this.id}`);
selected.classList.add("colored"); 
}

let divs = document.querySelectorAll('.child');
divs.forEach(div =>  div.addEventListener('mouseover', addClassAndColor))

/* function classNameToggler(div){
    div.classList.add("hovered");
}

let alldivs = document.querySelectorAll('.child');

alldivs.forEach */