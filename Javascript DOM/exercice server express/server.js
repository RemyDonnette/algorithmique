const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
})
    
app.get('/', (request, response) => {
    response.send(console.log('ok'));
})

app.get('/users', (request, response) => {
    response.send({id: 1, name: 'Rémy', age: 33, });
})

app.post('/users' (request, response) => {
    console.log(request.body);
    const eyeColor = request.body

})
