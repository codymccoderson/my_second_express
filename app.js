const express = require('express');
const app = express();

app.listen(3777, () => {
    console.log('Server running on port 3777');
});

const rootController = (request, response) => {
    const snippet = '<h1>Hello World!</h1>'
    response
    .status(200)
    .send(snippet)
    .end();
};

app.get('/cats', (request, response) => {
    const snippet = '<h1>Meow!</h1>'
    response
    .status(200)
    .send(snippet)
    .end();
});

app.get('/dogs', (request, response) => {
    const snippet = '<h1>Woof!</h1>'
    response
    .status(200)
    .send(snippet)
    .end();
});

app.get('/cats_and_dogs', (request, response) => {
    const snippet = '<h1>Living Together</h1>'
    response
    .status(200)
    .send(snippet)
    .end();
});

app.get('/greet/:user', (request, response) => {
    let user = request.params.user
    const snippet = `<h1>Hello ${user}!</h1>`
    response
    .status(200)
    .send(snippet)
    .end();
});

app.get('/', rootController);