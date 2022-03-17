// express 与 http 在功能上有什么不一样的地方？

const express = require('express')
const app = express()

const expressRouter = require('./expressRouter.router')
app.use('/aa', expressRouter)

// app.use((req, res) => {
//     res.json({
//         name: 'tom'
//     })
// })

app.post('/name', (req, res) => {
    let { age } = req.params;
    res.send('tom')
})

app.get('/name/:age', (req, res) => {
    let { age } = req.params;
    res.json({
        name: 'tom',
        age
    })
})

app.all('/demo', (req, res) => {
    res.json({
        message: 'demo',
        method: req.method
    })
})
app.all('*', (req, res) => {
    res.json({
        message: 'demo',
        method: req.method,
        uri: req.path
    })  
})



app.listen(3000, () => {
    console.log('running on http://127.0.0.1:3000')
})