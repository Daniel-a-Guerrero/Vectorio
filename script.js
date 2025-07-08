/**
 * Vectorio: A page for what I learn from the linear algebra
 * 
 * A single web page utilizing vanilla HTML and JS to display functionally what I learn from my Linear Algebra textbook
 * Might add more pages corresponding to more chapters
 * 
 * Chapter 1, Vectors in R^n, C^n, spatial vectors:
 *      Vector Addition (C)
 *      Vector Multiplication (C)
 *      
 */


//Important HTML elements

    //Number input regions
const inOne = document.getElementById("vOneIn");
const inTwo = document.getElementById("vTwoIn");
    //Select Vector
const vecSel = document.getElementById("vChoice");

    //Buttons
    //Vector Input
const addButtonOne = document.getElementById("vOneOut");
const addButtonTwo = document.getElementById("vTwoOut");
    //Addition button
const vectorAdditionButton = document.getElementById("calcAdd");
    //Scalar Multiplication Button
const scalarMultButton = document.getElementById("calcScMult");


const listOne = document.getElementById("vOne");
const listTwo = document.getElementById("vTwo");
const vectorAdditionList = document.getElementById("vSum");

//Declare arrays to be used as vectors
const v1=[];
const v2=[];

const vS=[];

//Button click event listeners for taking initial values

function collecto(input, list, arr, identity=""){
    //Determine if lists are empty, and if not, put them into the selector for scalar multiplication
    if(arr.length!==0)
    {
        ;
    }
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

addButtonOne.addEventListener("click", () => {collecto(inOne, listOne, v1, "v1")});
addButtonTwo.addEventListener("click", () => {collecto(inTwo, listTwo, v2, "v2")});

//Listener for vector addition

const add = (a1, a2) =>{
    vectorAdditionList.innerHTML = '';
    let contento=vS;
    if(a1.length !== a2.length){
        contento="Must add two vectors of equal length";
        const it=document.createElement('p');
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


//Scalar multiplication with vectors
