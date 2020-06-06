import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem');

    // JSON

    res.json([
        'Mike',
        'micael'
    ])
})

app.listen(3333);