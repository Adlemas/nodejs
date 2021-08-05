const express = require('express');
const app = express();
const server = require('http').createServer(app);

const PORT = 8089

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(__dirname + '/main.html')
})

app.get('/user', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.sendFile(__dirname + '/user.html')
})

app.post('/post', (req, res) => {
    res.send('A successfully post request!')
})

server.listen(PORT, () => {
    console.log('Server started!')
})