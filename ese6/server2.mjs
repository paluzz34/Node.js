import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "application/json");

    const jsonResponseBody = JSON.stringify({ location: "mars" });

    response.end(jsonResponseBody);
});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});

//1 node server2.mjs
//2 curl --verbose http://localhost:3000
//Qual è il valore dell'intestazione della risposta Content-Length?
//Content-Length: 19
