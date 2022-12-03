const input1=document.querySelector('.input1')
const input2=document.querySelector('.input2')
const input3=document.querySelector('.input3')
const input4=document.querySelector('.input4')
const input5=document.querySelector('.input5')
const Add=document.querySelector('.add')
const Sub=document.querySelector('.sub')
const Multi=document.querySelector('.multi')

const AddFun=()=>{
    console.log(Number(input1.value)+Number(input2.value)+Number(input3.value)+Number(input4.value)+Number(input5.value))
}


const SubFun=()=>{
    console.log(Number(input1.value)-Number(input2.value)-Number(input3.value)-Number(input4.value)-Number(input5.value))
}

const MultiFun=()=>{
    console.log(Number(input1.value)*Number(input2.value)*Number(input3.value)*Number(input4.value)*Number(input5.value))
}

Add.addEventListener("click",AddFun)
Sub.addEventListener("click",SubFun)
Multi.addEventListener("click",MultiFun)
