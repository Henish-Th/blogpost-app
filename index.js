import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port =  3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.post('/submit', (req,res) =>{
    const blogPost = req.body["blogPost"]
    console.log(blogPost);
    res.render('blog.ejs', {blog: blogPost })  
})

app.get('/blogs', (req,res) =>{
    res.render('blog.ejs')
})

app.get('/superlinear', (req,res) => {
    res.render('superlinear.ejs')
})

app.listen(port, () => {
    console.log(`Server started at port ${port} `)
})