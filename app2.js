const express = require('express');
const WebSocket = require('ws');
const app = express();
app.use(express.json());
const port = 3002;
// const axios = require('axios');
const cors = require('cors');

app.use(cors());

const server = app.listen(port, function () {
    console.log(`server running on port ${port}!`);
});

const wss2 = new WebSocket.Server({server});

let wss;

wss2.on('connection',(ws)=>{
    ws.on('message',(message)=>{
        console.log("received message :", message.toString());
    wss2.clients.forEach((client)=>{
        if(client!=ws && client.readyState == WebSocket.OPEN){
            client.send(message.toString());
        }
    })
    })
})

