let socket1 = new WebSocket('ws://localhost:3001');
let socket2 = new WebSocket('ws://localhost:3002');

socket1.onmessage = (event) => {
  const message = event.data;
  console.log('Received message:', message);
};

socket2.onmessage = (event) => {
  const message = event.data;
  console.log('Received message:', message);
};


let listElement1 = document.getElementById('chat1');
listElement1.innerHTML = '';
let listElement2 = document.getElementById('chat2');
listElement2.innerHTML = '';

function sendMessage(client) {
  if (client == "client1") {
    let messageInput = document.getElementById('messageInput1');
    let message = messageInput.value;
    let listItem = document.createElement('li');
    listItem.textContent = "send " + message;
    messageInput.value = '';
    listElement1.appendChild(listItem);
    socket1.send(message);
  } else {
    let messageInput = document.getElementById('messageInput2');
    let message = messageInput.value;
    let listItem = document.createElement('li');
    listItem.textContent = "send " + message;
    messageInput.value = '';
    listElement2.appendChild(listItem);
    socket2.send(message);
  }
}

function receiveMsg(client) {
  if (client == 'client1') {
    let listItem = document.createElement('li');
    listItem.textContent = "received " + message;
    messageInput.value = '';
    listElement1.appendChild(listItem);
  } else {
    let listItem = document.createElement('li');
    listItem.textContent = "received " + message;
    messageInput.value = '';
    listElement2.appendChild(listItem);
  }
 
}

function z(){
    console.log("z function");
}

