import { msgManager } from "./managers/messages.manager.js";

export const wsServerUp = (socketServer) => {
    socketServer.on('connection', async(socket)=>{
        console.log('¡New connection!', socket.id);
        
        socket.on('disconnect', ()=>{
            console.log('User disconnected', socket.id);
        });
    
        socket.on('newUser', (username)=>{
            console.log(`--> ${username} ingresó al chat`);
            socket.broadcast.emit('userLogin', username);
        })
    
        socketServer.emit('messages', await msgManager.getAll());
    
        socket.on('chat:message', async(message)=>{
            await msgManager.create(message);
            socketServer.emit('messages', await msgManager.getAll());
        })
    
        socket.on('chat:typing', (username)=>{
            socket.broadcast.emit('chat:typinguser', username);
        })
    })
}