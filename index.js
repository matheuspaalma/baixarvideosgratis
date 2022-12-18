const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
var path = require('path');

console.log('Inicio do index.js');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));

console.log('Inicializando abertura da porta...');

app.listen(3000, () => {

    console.log('Servidor online! Escutando porta 3000...');
    
});

console.log('Pós abertura da porta...');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/public/back-end/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/back-end/script.js'));
});

app.get('/public/style/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/style/style.css'));
});

app.get('/download', (req,res) => {

    var URL = req.query.URL;
    
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        filter: 'audioandvideo', quality: 'highestvideo'
    }).pipe(res);

});

console.log('Fim do index.js');