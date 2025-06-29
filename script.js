//Important HTML elements
const inOne = document.getElementById("vOneIn");
const inTwo = document.getElementById("vTwoIn");

const addButtonOne = document.getElementById("vOneOut");
const addButtonTwo = document.getElementById("vTwoOut");

const listOne = document.getElementById("vOne");
const listTwo = document.getElementById("vTwo");

//Button click event listeners
/*const collecto = (list, base) =>{
    const newVal=base.value;
        const newItem=document.createElement('li');
        newItem.textContent = newVal;
        list.appendChild(newItem);
        base.value=0;
}
addButtonOne.addEventListener("click", collecto(listOne,inOne));*/
function collecto(input, list){
    console.log("Is this even functional?");
    const newVal=input.value;
    const newItem=document.createElement('li');
    newItem.textContent = newVal;
    list.appendChild(newItem);
    input.value=0;
}

addButtonOne.addEventListener("click", () => {collecto(inOne, listOne)});
addButtonTwo.addEventListener("click", () => {collecto(inTwo, listTwo)});