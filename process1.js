let socket1 = new WebSocket('ws://localhost:3001');

let listElement2 = document.getElementById('chat2');
listElement2.innerHTML = '';

socket1.onmessage = (event) => {
  console.log(JSON.parse(event.data));
  let d = JSON.parse(event.data);
  if(d['client']=='client1'){
    c2receivedMsg(d['message']);
  }
};


function sendMessage(client) {
    let messageInput = document.getElementById('messageInput2');
    let message = messageInput.value;
    let listItem = document.createElement('li');
    listItem.textContent = "send " + message;
    messageInput.value = '';
    listElement2.appendChild(listItem);
    let  msg = {
      client: client,
      message: message,
    };
    socket1.send(JSON.stringify(msg));
}


function c2receivedMsg(msg){
    let listItem = document.createElement('li');
    listItem.textContent = "received " + msg;
    listElement2.appendChild(listItem);
}



