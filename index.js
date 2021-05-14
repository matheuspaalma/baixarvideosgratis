const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
var path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));

app.listen(4000, () => {

    console.log('Servidor online, escutando porta 4000!');
    
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/download', (req,res) => {

    var URL = req.query.URL;
    
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);

});