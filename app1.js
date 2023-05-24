const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
app.use(express.json());

const port = 3001;
const server = app.listen(port, function () {
  console.log(`server 1 running on port ${port}!`);
});

const wss = new WebSocket.Server({server});

let wss2;

wss2 = new WebSocket('ws://localhost:3002');

wss.on('connection',(ws)=>{
  ws.on('message',(message)=>{
    console.log("received message ",message.toString());
    wss.clients.forEach((client)=>{
      if(client!=ws&&client.readyState == WebSocket.OPEN){
        client.send(message.toString());
      }
    })
  })
})


