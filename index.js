const express = require('express')
const cors = require('cors')
const  mysql = require('mysql')
const userRouter = require('./routes/users')
const basicAuth = require('express-basic-auth')

app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'tor',
    database: 'API simple'
})

app.use(basicAuth({
  users: {'admin': 'super_sekali'}
})

, app.listen(4001 , function(){
   console.log('konek ke port 4001');

}))

