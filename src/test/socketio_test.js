import { io } from "socket.io-client";
const socket = io('ws://localhost:4000')

socket.emit('sendMsg', { name: 'abc' })
console.log('Client send message to Server!')

