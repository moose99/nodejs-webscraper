// The frontend source code
// Note: even when this website is hosted on a server, it still runs this frontend code locally.
const feedDisplay = document.querySelector('#feed')
const server = 'https://nodejs-webscraper.fly.dev/results'

// fetch a string from the server and add it to our webpage
fetch(server)
.then(response => {return response.text()})
.then(data => {
    const articleItem = `<div><h3>` + data + `</h3></div>`
    feedDisplay.insertAdjacentHTML("beforeend", articleItem)
})
.catch(err => console.log(err))
