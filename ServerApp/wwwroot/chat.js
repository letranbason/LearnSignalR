// Create a connection to the SignalR hub
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub") // Matches the hub URL defined in Program.cs
    .build();

// Start the connection
connection.start()
    .then(() => console.log("Connected to SignalR Hub"))
    .catch(err => console.error("Error connecting to SignalR Hub: ", err));

// Listen for messages from the server
connection.on("ReceiveMessage", (user, message) => {
    const msg = `${user}: ${message}`;
    const li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("messagesList").appendChild(li);
});

// Send messages when the button is clicked
document.getElementById("sendButton").addEventListener("click", () => {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;

    if (user && message) {
        connection.invoke("SendMessage", user, message)
            .catch(err => console.error(err.toString()));
    }
});
