//Important HTML elements
const inOne = document.getElementById("vOneIn");
const inTwo = document.getElementById("vTwoIn");


const addButtonOne = document.getElementById("vOneOut");
const addButtonTwo = document.getElementById("vTwoOut");

const vectorAdditionButton = document.getElementById("calcAdd");


const listOne = document.getElementById("vOne");
const listTwo = document.getElementById("vTwo");
const vectorAdditionList = document.getElementById("vSum");

//Declare arrays to be used as vectors
const v1=[];
const v2=[];

const vS=[];

//Button click event listeners for taking initial values

function collecto(input, list,arr){
    //console.log("Is this even functional?");
    let newVal=input.value;
    if(newVal === ''){
        newVal=0;
    }
    else{
        newVal=parseInt(newVal,10);
    }
    const newItem=document.createElement('li');
    arr.push(newVal);
    newItem.textContent = newVal;
    list.appendChild(newItem);
    input.value=0;
    console.log(arr)
}

addButtonOne.addEventListener("click", () => {collecto(inOne, listOne, v1)});
addButtonTwo.addEventListener("click", () => {collecto(inTwo, listTwo, v2)});

//Listener for vector addition

const add = (a1, a2) =>{
    vectorAdditionList.innerHTML = '';
    let contento=vS;
    if(a1.length !== a2.length){
        contento="Must add two vectors of equal length";
        const it=document.createElement('li');
        it.textContent=contento;
        vectorAdditionList.appendChild(it);
    }
    else{
        let i=0;
        while(i<v1.length){
            //console.log(vv1);
            vS[i]=v1[i]+v2[i];
            i++;
        };
        
        vS.forEach(function(vvS){
            const it=document.createElement('li');
            it.textContent=vvS;
            vectorAdditionList.appendChild(it);
        });
        //console.log(vS);
    }
};
vectorAdditionButton.addEventListener("click", () => add(v1,v2));