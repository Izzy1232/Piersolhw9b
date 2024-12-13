let express = require('express')
let bodyParser = require('body-parser')
let x = express()
let PORT = 3000

x.use(express.static('public'))
x.use(bodyParser.urlencoded({ extended: false }))
x.use(bodyParser.json())

x.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
x.get('/ex1', (req, res) => {
    res.sendFile(__dirname + '/views/ex1.html')
})

x.post('/form-submit', (req, res) => {
    const { name, email } = req.body
    res.send(`Thank you, ${name}. Confirmation sent to ${email}.`)
})

x.get('/ex2', (req, res) => {
    res.sendFile(__dirname + '/views/ex2.html')
})
x.post('/api/countries', (req, res) => {
    const { name, countries } = req.body
    if (!countries || !Array.isArray(countries)) {
        return res.status(400).json({ error: 'Invalid input: "countries" must be an array.' })
    }
    const count = countries.length
    res.json({ message: `Your name is ${name} and you traveled to ${count} countries. Keep traveling!` })
})

let articles = [
    { id: 1, title: 'First Article', content: 'This is the first article.' }
]
x.get('/ex3', (req, res) => {
    res.sendFile(__dirname + '/views/ex3.html')
})

x.post('/articles', (req, res) => {
    const { title, content } = req.body
    if (!title || !content) {
        return res.status(400).json({ error: 'Both "title" and "content" are required.' })
    }
    const id = Math.max(...articles.map(a => a.id)) + 1
    articles.push({ id, title, content })
    res.send(`Article "${title}" added with ID ${id}`)
})
x.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

