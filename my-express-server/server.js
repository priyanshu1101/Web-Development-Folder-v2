const { response } = require('express');
const express = require('express')
const app = express()

app.get("/",function(request,response)
{
    response.send("<h1 style=font-size: 3rem;>Hello World</h1>");
});
app.get("/contact",function(request,response)
{
    response.send("<h1>Contact me at :priyanshubansal35@gmail.com</h1>");
});
app.get("/about",function(request,response)
{
    response.send("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>")
})
app.get("/nodemon",function(request,response)
{
    response.send("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>")
})
app.listen(3000,function()
{
    console.log("Sever starting on port 3000");
});