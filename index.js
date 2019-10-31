require('dotenv').config();

const express = require('express'); 
const server = express(); 
const dbRouter = require('./data/db-router'); 

const port = process.env.PORT || 5000;  

server.use(express.json()); 
server.use('/api/posts', dbRouter);

server.get('/', (req, res) => {
   res.send(`
   <h2>Deployed a[[</h2>
   <p>Welcome${nameInsert} to Umeko's First Deployed Backend</p>
   `)
})
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})