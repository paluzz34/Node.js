
import { createServer } from 'node:http'
import fs from 'fs'
// const fs = require('fs')
import querystring from 'querystring'


const server = createServer((request , response) => {

    const url = request.url

    if(url === '/'){
        
        console.log('Richiesta default')
        response.statusCode = 200
        response.setHeader('Content-type' , 'text/html')
        response.end('<h1>Hello World!</h1>')

    } else if(url === '/user'){
        
        console.log('Richiesta user')
        response.statusCode = 200
        response.setHeader('Content-type' , 'text/html')
        response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/send" method="POST">
                <input name='username' type="text">
                <input name='password' type="password">
                <button>Send</button>
            </form> 
        </body>
        </html>
        `)

    } else if(url === '/send' && request.method === 'POST'){

        let body = ''

        request.on('data' , (chunk)=>{ 
            body += chunk.toString()
            
        })

        request.on('end' , ()=>{
            
            console.log(body);
            const formData = querystring.parse(body)
            console.log(formData);

            fs.appendFile('./data.txt' , JSON.stringify(formData) + '\n' , (err)=>{
                if(err){
                    console.log('Errore');
                }
                console.log('Data salvati con successo');
            })

            console.log('Dati ricevuti')
            response.writeHead('302' , {'location' : 'http://localhost:3000/user'})
            response.end()
        })

    } else {
        
        console.log('NOT FOUND');
        response.statusCode = 404
        response.setHeader('Content-type' , 'text/html')
        response.end('<h2>NOT FOUND</h2>')    
    }

})

server.listen(3000, ()=>{
    console.log(`server running at http://localhost:3000`)
});


//ricordate di creare file data.txt in repository