const http = require('http');
const {readFileSync} = require('fs')

//get all files
const homepage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) =>{
    //console.log(req.url);
    const url = req.url;

    //home page
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homepage);
        res.end()
    }

    //about page
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }

    else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }

    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //Not found pages
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000);