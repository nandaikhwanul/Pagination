import http from "http";
import {listServis} from "./service.mjs";

const service = new listServis();
const server = http.createServer((req, res) => {
    
    res.setHeader("Content-type", "application/json");

    if(req.method === "GET"){
        
        service.getServis(req, res);

    } else if (req.method === "POST"){
        service.createServis(req, res);

    } else if (req.method === "PUT"){
        service.updateServis(req, res);

    } else if (req.method === "DELETE"){
        service.deleteServis(req, res);
    }
    

});

server.listen(4001);