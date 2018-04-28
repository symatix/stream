const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let sseExpress = require('sse-express');

const db = require('./db');
const meta = require('./db/meta');

const PORT = process.env.PORT || 5000;

// volume var
let globalVol = 85;

app.use(bodyParser.json());

// sends data of all the streams as JSON array of objects
// if db in cloud, on no internet connection send fallback object with local playlist
app.get('/api/streams', (req, res) => {
    res.send(db)
});


// starts the stream by stream ID
// and sends that stream object along with player volume and mp3 metadata
// if stream unsuccessful, send fallback object
app.post('/api/play', (req, res) => {
    const stream = db.find(stream => stream.id === req.body.id);
    //console.log('=> playing stream: ');
    const resObj = {stream: stream, volume:globalVol, meta:{}}
    console.log(`=> playing stream: ${resObj.stream.name}`);
    res.send(resObj);
})


// stops and resumes play
// sends bool 'true' if change successful
app.post('/api/stop', (req, res) => {
    if(req.body.player === true){
        console.log("=> stopping player")
    } else if (req.body.player === false){
        console.log("=> resuming player");
    }
    res.send(true);
});

// changes volume of player and sends new volume to client
app.post('/api/volume', (req, res) => {
    console.log('=> changing player volume: ', req.body.volume);
    globalVol = req.body.volume;
    res.send({volume: globalVol});
})

app.get('/api/volume', (req, res) => {
    res.send({volume: globalVol});
})

app.get('/api/meta', sseExpress, function(req, res) {
    var interval = null;
    var i = 0;
    var sendMeta = function(){
        if(i < meta.length) {
            console.log('=> sending metadata', new Date().toLocaleString());
            res.sse('connected', meta[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    };
    interval = setInterval(sendMeta, 10000);


});




if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }



app.listen(PORT, () => {
    console.log(`=> server is up on port ${PORT}`);
})

