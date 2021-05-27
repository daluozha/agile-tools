const fetch = require("node-fetch");
const Request = require('request');
fetch(new Request('http://localhost:8800/screen-shot',{
    method:'POST', 
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body:"param1=value1&param2=value2"
})).then((resp)=>{console.log(resp)})