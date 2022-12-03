const Id=document.querySelector("#Id");
const Title=document.querySelector("#Title");
const Price=document.querySelector("#Price");
const Description=document.querySelector("#Description");
const Category=document.querySelector("#Category");
const Image=document.querySelector("#Image");
const Rating=document.querySelector("#Rating");
const Btn=document.querySelector("#btn");
const removeId = document.querySelector("#removeId");
const deleteId = document.querySelector('.delete');

// const FileSystem = require("fs");
// let API="https://fakestoreapi.com/products";
// let Result;
// const Data=async()=>{
//     const Response=await fetch(API)
//     Result=await Response.json()
//     console.log(JSON.stringify(Result))
    // FileSystem.writeFileSync('db.json',JSON.stringify(Result,undefined,4),(error)=>{
//         if(error) throw error;
//     })
// }
// Data()

const DeleteData=async()=>{
    del = removeId.value
    const response = await fetch(`http://localhost:3000/products/${del}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    GetData()
    return response.json()
}

const DisplayData = (data) => {
    container=""
    container.innerHTML = ""
    data.map((item, index) => {
        container.innerHTML += `<tr>
        <td>${item.Id}</td>
        <td>${item.Title}</td>
        <td>${item.Description}</td>
        <td>${item.Category}</td>
        <td><img src=${item.Image}></td>
        <td>${item.Rating}</td>
        </tr>`
    })
    console.log(data)
}

const GetData=async(Result)=>{
    const Response=await fetch("https://fakestoreapi.com/products")
    // when we get the data so we use fake api 
    // if we want to post the data and dlt the data so we use http://localhost:3000/products this api
    Result=await Response.json()
    console.log(Result)
    DisplayData(Result)
}

const PostData=async ()=>{
    const data={id:Id.value,title:Title.value,price:Price.value,description:Description.value,category:Category.value,image:Image.value,rating:Rating.value}
    console.log(data)
    const response = await fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    GetData()
    return response.json()
}

Btn.addEventListener('click',PostData)
deleteId.addEventListener('click',DeleteData)
