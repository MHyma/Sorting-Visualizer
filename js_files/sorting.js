// swap function util for sorting algorithms  takes input  of 2 DOM  elements  with .style.height feature
function swap(el1,el2){
    console.log("in swap()");
    let tmp =el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=tmp;
}

// disable sorting btn while sorting
function disableSortingbtn(){
    document.querySelector(".bubbleSort").disabled= true;
    document.querySelector(".mergeSort").disabled= true;
    document.querySelector(".quickSort").disabled= true;
    document.querySelector(".insertionSort").disabled= true;
}

// enable sorting btn after sorting
function enableSortingbtn(){
    document.querySelector(".bubbleSort").disabled= false;
    document.querySelector(".mergeSort").disabled= false;  
    document.querySelector(".quickSort").disabled= false;
    document.querySelector(".insertionSort").disabled= false;
}

//disable size  slider
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled= true;  
}

//enable size slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled= false; 
}

//disable new array btn
function disableNewArray(){
    document.querySelector(".newArray").disabled= true;
}

//enable new array btn
function enableNewArray(){
    document.querySelector(".newArray").disabled= false;
}

function waitforme(millisec){
    return new Promise(resolve =>{
        setTimeout(()=>{resolve('')},millisec);
    })
}

let arraySize=document.querySelector('#arr_sz');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay=260;

let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay =320- parseInt(delayElement.value);
})


let array=[];

createNewArray();


function createNewArray(noOfBars = 60){

    deleteChild();
     
    array = [];
    for(let i=0;i< noOfBars;i++){
        array.push(Math.floor(Math.random() * 200)+1);
    }
    console.log(array);

    const bars=document.querySelector("#bars");

    for(let i=0; i< noOfBars;i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]* 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }

}


function deleteChild(){
    const bar= document.querySelector("#bars");
    bar.innerHTML = '';
}


const newArray= document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log(" newArray "+ arraySize.value);
    console.log(" new Array "+ delay);
    enableSortingbtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
})
