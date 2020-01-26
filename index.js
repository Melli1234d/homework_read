const express = require('express');

const messageListTemplate = require('./templates/message-list.template');

const app = express();
const jsondatei="./wasauchimmer.json";
app.use(express.urlencoded({ extended: true }));

const messages = [];

app.get('/', (request, response) => {
    response.send(messageListTemplate(messages));
});

app.post('/', (request, response) => {
    const date = newDate
})

text = JSON.stringify(messages);
messages = JSON.parse(text);



let messages;

if( fd.fileExistsSync(´./wieauchimmer.json’)){
fs.readFile(filename, options, function(err, data) {
    if (err) {
        console.log("Failed to read %s: %s",
            filename, err);
    } else {
        var fileinfo = JSON.parse(data);
        console.log("Filename %s: modified %s; created %s",
            filename, fileinfo.mtime, fileinfo.ctime);
    }
});
var fs = require('fs');
var options = { encoding: 'utf8', flag: 'r'};

var filename = 'wieauchimmer.json';
const text= fs.readfileSync(‚./wieauchimmer.json‘,{encoding:’utf-8’});
}else{
    messages= [];
}

messages.push(…)

const text= JSON.stringify(messages);

fs.writeFileSync(‚./wieauchimmer.json‘,text,{encoding:’utf-8’});
function readmessages(wieauchimmer.json){
    function writemessages(messages,wieauchimmer.json){

        const text= JSON.stringify(messages);
        fs.writeFileSync(wieauchimmer.json,text,{encoding:’utf-8’});
        return 1;
    }

    function messagejson(author,text,date){
        return '{\n"author" : "'+author+'",\n "text":"'+ text'",\n "timestamp":"'+date+'"\n  }\n'
    }
    fs.close()

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));


const date= newDate()
messages.push({
    author: request.body.author,
    test: request.body.text,
    timestamp: request.body.date,

    }
);


app.post('/', (request, response) => {
    console.log('a', request.body.author);
    console.log('b', request.body.text);
    console.log('b', request.body.date);

    messages.push({
       author : request.body.author,
       text: request.body.text
    });

    response.send(messageListTemplate(messages));
});

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
