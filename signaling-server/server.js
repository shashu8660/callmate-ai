const express = require("express")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
const server = http.createServer(app)

const io = new Server(server)

io.on("connection",(socket)=>{

  console.log("user connected")

  socket.on("join-room",(room)=>{
    socket.join(room)
  })

  socket.on("signal",(data)=>{
    io.to(data.room).emit("signal",data)
  })

})

server.listen(3000,()=>{
  console.log("signaling server running on port 3000")
})