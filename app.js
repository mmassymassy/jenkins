//nodejs app that serves hello world on port 3000 using express

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
    }
);

app.listen(3000, function(){
    console.log('Server is running on port 3000');
    }
);

