// here we scrape the data from website by using axios
// const axios = require('axios');
// axios.get('https://fakestoreapi.com/products')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

const container=document.querySelector('#container');
const btn=document.querySelector('#sortBtn');
let API="https://fakestoreapi.com/products";
let Result;
const Data=async()=>{
    const Response=await fetch(API)
    Result=await Response.json()
    display(Result)
}
Data()

let display=((Result)=>{
    container.innerHTML=''
    Result.map((item, index) => {
        container.innerHTML += `<tr>
        <td id="td">${item.id}</td>
        <td id="td"><h3>${item.title}</h3></td>
        <td id="td"><p>${item.description}</p></td>
        <td id="td"><button>${item.price}</button></td>
        <td id="td">${item.category}</td>
        <td id="td"><img src=${item.image} height="100px"></td>`
    })
})

let asc=((Result)=>{
    Result.sort(function(a, b){return a.price - b.price});
    display(Result)
})

let dec=((Result)=>{
    Result.sort(function(a, b){return b.price - a.price});
    display(Result)
})


