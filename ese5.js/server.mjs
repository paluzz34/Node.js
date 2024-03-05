import { createServer} from "node:http";
// Creazione del server HTTP
const server =createServer((req, response)=>{
    console.log("req ok")

    response.statusCode=200;
//impostiamo l'header Content-Type sulla risposta per indicare che inviamo HTML
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1> this page was served whith node.js</h1></body></html>");
})

// Inviamo la risposta al client
server.listen(3000, ()=>{
    console.log(`server running at http://localhost:3000`)
});