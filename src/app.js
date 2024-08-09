const feedDisplay = document.querySelector('#feed')

// fetch a string from localhost:8000 /results and add it to our webpage
fetch('http://localhost:8000/results')
.then(response => {return response.text()})
.then(data => {
    const articleItem = `<div><h3>` + data + `</h3></div>`
    feedDisplay.insertAdjacentHTML("beforeend", articleItem)
})
.catch(err => console.log(err))
