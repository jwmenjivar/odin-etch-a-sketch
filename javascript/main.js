function divCreator(){
let container = document.createElement('div');
document.body.appendChild(container)
for(let i=1; i<=256;i++){
let first = document.createElement('div');
container.appendChild(first)
first.textContent="txt"+i;
first.style.border="1px solid blue"
first.style.margin="10px"
}
container.style.display="grid";
container.style.gridTemplateColumns="repeat(16, 80px)"
}
divCreator();