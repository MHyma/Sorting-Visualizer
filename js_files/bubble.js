async function bubble(){
    console.log("In bubble");
    const ele = document.querySelectorAll(".bar");
    for(let i=0; i< ele.length-1;i++){
        console.log("in ithe forloop");
        for(let j=0;j<ele.length-i-1;j++){
            console.log("in jthe forloop");
            ele[j].style.background ='blue';
            ele[j+1].style.background='blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log("if condition");
                await waitforme(delay);
                swap(ele[j] , ele[j+1]);
            }
            ele[j].style.background ='cyan';
            ele[j+1].style.background='cyan';
        }
        ele[ele.length-1-i].style.background='green';
}
ele[0].style.background='green';
}

const bubbleSortbtn=document.querySelector(".bubbleSort");
bubbleSortbtn.addEventListener('click', async function(){
    disableSortingbtn();
    disableSizeSlider();
    disableNewArray();
    await bubble();
    enableSortingbtn();
    enableSizeSlider();
    enableNewArray();
});