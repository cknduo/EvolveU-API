const express = require('express')
const app = express();

const chest = {
    treasure: [
        'coins',
        'gem',
        'enchanted sword'
    ]
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/forest', (req, res) => {
    res.send('You are in a deep dark wood...')
})

app.get('/vault', (req, res) => {
    res.send({
        trophies: [
            'rusty dagger',
            'cursed peanut'
        ]
    })
})

app.get('/chest', (req, res) => {
    res.send(chest)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log(`Example app listening at http://localhost:${PORT}`)
})