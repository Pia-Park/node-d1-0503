const express = require('express')
const path = require('path')

const shopRouters = require('./routes/shop')

const app = express()

// app.use((req, res, next) => {
//     console.log('In the first middleware')
//     next()
// })

// app.use((req, res, next) => {
//     console.log('In the second middleware')
// })

// app.get('/', (req, res)=> {
//     // res.send('<h1>Hello Express</h1>')
//     res.sendFile(path.join(__dirname, 'public ', 'index.html'))
// })

app.use(express.urlencoded({extended: false}))


app.use('/add-products', (req, res) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">SEND</button>
        </form>
    `)
})

app.use('/product', (req, res) =>{
    console.log(req.body)
    res.redirect('/')
})

app.use(shopRouters)

// app.get('/', (req, res)=> {
//     // res.send('<h1>Hello Express</h1>')
//     res.sendFile(path.join(__dirname, 'public ', 'index.html'))
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))