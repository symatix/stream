const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./db');

const PORT = process.env.PORT || 5000;

// volume var
let globalVol = 0.75;

app.use(bodyParser.json());

app.get('/api/streams', (req, res) => {
    res.send(db)
});

app.post('/api/play', (req, res) => {
    console.log(req.body)
    const stream = _.find(db, stream => stream.id === req.body.id);
    console.log('=> playing stream: ', stream);
    res.send({stream, volume:globalVol});
})

app.post('/api/stop', (req, res) => {
    if(req.body.player === true){
        console.log("=> stopping player")
    } else if (req.body.player === false){
        console.log("=> resuming player");
    }
    res.send(true);
});


app.post('/api/volume', (req, res) => {
    console.log('=> changing player volume: ', req.body.volume);
    globalVol = req.body.volume;
    res.send({volume: globalVol});
})

app.post('/api/change-stream', (req, res) => {
    const currentIndex = _.findIndex(db, (stream) => stream.id === req.body.id);
    let index;

    if (req.body.action === 'prev'){
        index = currentIndex - 1 < 0 
            ? db.length - 1 
            : currentIndex - 1;
    }

    if (req.body.action === 'next'){
        index = currentIndex + 1 >= db.length 
            ? 0 
            : currentIndex + 1;
    }

    console.log('=> changing active stream: ', db[index])
    res.send({
        id: db[index].id,
        meta:{}
    });
});




app.listen(PORT, () => {
    console.log(`=> server is up on port ${PORT}`);
})

