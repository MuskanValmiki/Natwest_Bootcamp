const name = document.querySelector('#name1');
const tableBody= document.querySelector('#tableBody')
let allData = [];
function editName(index){
   let editedText =  prompt("Enter something")
   allData[index].name =editedText
   displayData()
}
function deleteRow(index){
    allData.splice(index,1);
    displayData()
}
function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=`
        <tr>
        <td>${item.name} <button onclick="editName(${index})">edit</button> </td>
       <td> <button onclick="deleteRow(${index})">Delete </button> </td>
        </tr>
        `
    })
}
function storeData(){
    allData = [...allData,
        {
            "name": name.value
        }
    ]; 
    console.log(allData)
    displayData()
}
const submit2 = document.querySelector('#submit1');
submit2.addEventListener('click', storeData)
displayData()