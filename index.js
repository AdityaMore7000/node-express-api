import express from 'express';
const app = express();
const port = process.env.PORT || 3000
import userRoutes from './routes/users.js'
app.use('/users',userRoutes);
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.redirect('/users')
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`)
})