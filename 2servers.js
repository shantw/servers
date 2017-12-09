var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(req, resp){

    resp.end("you are a good Guy! " + req.url);

};

function handleRequest2(req, resp){
    
        resp.end("you are a bad Guy! " + req.url);
    
};

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){

     console.log("Listening on http:\localhost: " + PORT1);

});



server2.listen(PORT2, function(){
    
         console.log("Listening on:" + PORT2);
    
});