const express = require('express'); 
const server = express(); 
const port = 4000; 
const dbRouter = require('./data/db-router'); 

server.use(express.json()); 
server.use('/api/posts', dbRouter)


server.listen(port, () => {
    console.log('Server is running on http://localhost:4000')
})