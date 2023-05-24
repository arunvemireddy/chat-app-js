let socket1 = new WebSocket('ws://54.226.49.155:3001');

let listElement1 = document.getElementById('chat1');
listElement1.innerHTML = '';


socket1.onmessage = (event) => {
  console.log(JSON.parse(event.data));
  let d = JSON.parse(event.data);
  if(d['client']=='client2'){
    c1receivedMsg(d['message']);
  }
};


function sendMessage(client) {
    let messageInput = document.getElementById('messageInput1');
    let message = messageInput.value;
    let listItem = document.createElement('li');
    listItem.textContent = "send : " + message;
    messageInput.value = '';
    listElement1.appendChild(listItem);
    let  msg = {
      client: client,
      message: message,
    };
    socket1.send(JSON.stringify(msg));
}

function c1receivedMsg(msg){
  let listItem = document.createElement('li');
  listItem.textContent = "received : " + msg;
  listElement1.appendChild(listItem);
}



