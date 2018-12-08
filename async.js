var http = require("http");

console.log("Start server");

 

http.createServer(((req, resp) => {
    console.log("New Request");
    resp.end("<br /> hello world");
    
})).listen(2541,"localhost");
 