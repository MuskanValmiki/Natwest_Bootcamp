const bookID = document.querySelector('.bookID')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const submitBtn = document.querySelector('.submitBtn')
const container = document.querySelector('.container')

const deleteData = async (dataID) => {
    const response = await fetch(`http://localhost:3000/posts/${dataID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    getData()
    return response.json()
}
const displayData = (data) => {
    container.innerHTML = ""
    data.map((item, index) => {
        container.innerHTML += `<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td><button onclick="deleteData(${item.id})">DELETE</button></td>
        </tr>`
    })
}

const getData = async () => {
    const response = await fetch(`http://localhost:3000/posts`)
    const data = await response.json()
    console.log(data)
    displayData(data)
}
getData()

const postData = async () => {
    const data = { "id": bookID.value, "title": title.value, "author": author.value }
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
    getData()
    return response.json()
}

submitBtn.addEventListener('click', postData)

