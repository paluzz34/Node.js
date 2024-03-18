import { createServer} from "node:http";

const server =createServer(async(request, response)=>{
    console.log("request.url")
    console.log("request.method")

    if(request.url==='/'){
        try{

            const dataFetch= await fetch ("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            const resp =await dataFetch.json()
            console.log(resp)
            response.writeHead(200,'Content-type' , 'application/json')
            response.end(JSON.stringify(resp))
        }catch(error){
            console.error(error)
            response.writeHead(500,'Content-type' , 'text/plain')
            response.end("server error")
        }
    }else if(request.url==='/bulbasaur'){
        try{

            const dataFetch= await fetch ("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            const resp =await dataFetch.json()
            console.log(resp)
            response.writeHead(200,'Content-type' , 'application/json')
            response.end(JSON.stringify(resp))
        }catch(error){
            console.error(error)
            response.writeHead(500,'Content-type' , 'text/plain')
            response.end("server error")
        }
    } else{
        response.writeHead(404,'Content-type' , 'text/html')
        response.end('<h1>NOT FOUND</h1>')  
    }

    
    
})


server.listen(3000, ()=>{
    console.log(`server running at http://localhost:3000`)
});