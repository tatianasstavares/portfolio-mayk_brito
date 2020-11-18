const express = require('express');
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

console.log(videos);

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("view", {
    express:server,
    autoescape: false
})

server.get("/", function(request, response){
    const about = {
        avatar_url: 'https://nextlevelweek.com/_next/static/images/mayk-96fb5b73e58e32ff657bcadd02b64308.png" alt="Mayk Brito"',
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para inciantes em programação. Colaborador da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></p>',
        links: [
            
            { name: "github", url: "https://github.com/maykbrito" },
            { name: "twitter", url: "https://Twitter.com/maykbrito" },
            { name: "linkedin", url: "https://linkedin.com/in/maykbrito" },
        ]

    }
    return response.render("about", {about})
})

server.get("/about", function(request, response){
    
})


server.get("/portfolio", function(request, response){
    return response.render("portfolio", {items: videos})
})


server.listen(5000, function() {
    console.log("Server is running");
})
