const container=document.querySelector(".container");
for (i=1;i<=20;i++){
    let table=''
    for(j=1;j<=10;j++){
        table+=`<p>${i} X ${j} = ${i*j}</p>`
    }
    container.innerHTML+=`<div>${table}</div>`
}
container.style.display="grid"
container.style.gridTemplateColumns="repeat(10,1fr)"