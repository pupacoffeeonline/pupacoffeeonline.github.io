function toggleChat(){
const box = document.getElementById("chat-box");
box.classList.toggle("open");
}

function sendMessage(){
const input = document.getElementById("chat-input");
if(!input.value.trim()) return;

const msg = document.createElement("div");
msg.innerText = input.value;
document.getElementById("chat-messages").appendChild(msg);

input.value = "";
}