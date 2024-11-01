const socketClient = io();

const inputMessage = document.getElementById("message");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const actions = document.getElementById("actions");

let username = null;

if (!username) {
  Swal.fire({
    title: "¡Welcome to chat!",
    text: "Insert your username",
    input: "text",
    inputValidator: (value) => {
      if (!value) return "your username is required";
    },
  }).then((input) => {
    username = input.value;
    socketClient.emit("newUser", username);
  });
}

socketClient.on("userLogin", (username) => {
  Toastify({
    text: `${username} ha iniciado sesion`,
    duration: 3000,
    close: true,
    gravity: "top", 
    position: "left",
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

btn.addEventListener("click", () => {
  const message = {
    username,
    message: inputMessage.value,
  };
  socketClient.emit("chat:message", message);
  inputMessage.value = "";
});

inputMessage.addEventListener('keypress', ()=>{
    socketClient.emit('chat:typing', username)
})

socketClient.on('chat:typinguser', (username)=>{
    actions.innerHTML = `<p><em>${username} está escribiendo un mensaje ...</em></p>`
})

socketClient.on("messages", (data) => {
    actions.innerHTML = ''
  const chatRender = data
    .map((msg) => {
      return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`;
    })
    .join(" ");
  output.innerHTML = chatRender;
});
