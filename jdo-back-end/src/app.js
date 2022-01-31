//const http = require("http");
const os = require("os");
const greeting = require("./greeting");

let userName = os.userInfo().username;
 
 
console.log(`Date: ${greeting.date}`);
console.log(greeting.getMessage(userName));


/*
http.createServer(function(request,response){
    response.end("NodeJS Started");
}).listen(3001, "127.0.0.1",function(){
    console.log("Servet start on 3001");
});
*/