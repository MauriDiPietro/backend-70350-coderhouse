import http from 'node:http';
import { products } from './products.js';

const server = http.createServer((req, res)=>{
    // res.end('hola mundo')
    console.log(req.url);
    console.log(req.method);
    if(req.url === '/products'){
        res.end(JSON.stringify(products))
    }
    if(req.url === '/home'){
        res.end('Home')
    }
})

server.listen(8080, ()=>console.log('server ok en puerto 8080'))