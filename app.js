const express = require('express');
const app = express();
const socketio = require("socket.io");
const http = require('http');
const { Socket } = require('socket.io');
const path = require('path');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

io.on("connection", (socket) => {
       console.log("connected to socket");
       socket.on("send location", (data) => {
        io.emit("received-location", {id: socket.id, ...data});

       });
       socket.on("disconnect", function(){
        io.emit("user-disconnected",socket.id);
       })
});


app.get("/",(req,res)=>{
    res.render("index");
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
