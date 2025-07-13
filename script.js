/**
 * Vectorio: A page for what I learn from the linear algebra
 * 
 * A single web page utilizing vanilla HTML and JS to display functionally what I learn from my Linear Algebra textbook
 * Might add more pages corresponding to more chapters
 * 
 * Chapter 1, Vectors in R^n, C^n, spatial vectors:
 *      Vector Addition (C)
 *      Scalar Multiplication (C)
 *      
 */

//Function that creates an element with a certain ID if it does not exist

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
    //Dot Product
const dotProdButton = document.getElementById("calcDotProd");

    //Lists
    //Vector Lists
const listOne = document.getElementById("vOne");
const listTwo = document.getElementById("vTwo");
    //Vector Sum
const vectorAdditionList = document.getElementById("vSum");
    //Scalar Mult
const scalarMultiplicationList = document.getElementById("vSM");
    //Vector Dot Multiplication
const dotMultList = document.getElementById("vDP");


//Declare arrays to be used as vectors
const v1=[];
const v2=[];
const vS=[];



//Button click event listeners for taking initial values



function collecto(input, list, arr, identity=""){
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
    
    //Determine if lists are empty, and if not, put them into the selector for scalar multiplication
    if(arr.length!==0)
    {
        if(!(document.getElementById(identity))){
            let newOpt = document.createElement('option');
            newOpt.id=identity;
            newOpt.textContent=identity;
        newOpt.value=identity;
        vecSel.appendChild(newOpt);
        }
        //let newOpt = document.getElementById('option');
    }
    else{console.log("sum ting wong");}
}

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

//Scalar multiplication with vectors

const scalarMult = (arr, scalar) =>{
    arr.forEach(sM);
    function sM(item){
        item*=scalar;
        console.log(item);  //to be deleted
    }
}

const fullSM = () =>{
    let s = document.getElementById("vScMult").value;   //Get scalar value
    if(s === ''){
        s=0;
    }
    else{
        s=parseInt(s,10);
    }

    scalarMultiplicationList.innerHTML='';
    const c = vecSel.value;
    let m = [];
    switch (c){
        case "v1":
            m = v1;
            break;
        case "v2":
            m = v2;
            break;
        default:
            m = [0];
            break;
    }    
    m.forEach(function(item){
        item*=s;
        const it=document.createElement('li');
        it.textContent=item;
        scalarMultiplicationList.appendChild(it);
    });
}

//Placeholder

const placeholder = () =>{console.log("Placeholder");}

//Event Listeners

addButtonOne.addEventListener("click", () => {collecto(inOne, listOne, v1, "v1")});
addButtonTwo.addEventListener("click", () => {collecto(inTwo, listTwo, v2, "v2")});
vectorAdditionButton.addEventListener("click", () => add(v1,v2));
scalarMultButton.addEventListener("click", () => fullSM());
dotProdButton.addEventListener("click", ()=>placeholder());