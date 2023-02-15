const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Activity = require('./Activity_Model')
const User = require('./User_Model')



app.use(cors())
app.use(bodyParser.json())
mongoose.connect('mongodb://127.0.0.1:27017/Activites', { useNewUrlParser: true, }, (err) => {
    if (err) {
        console.log('DataBAse not connected')
    } else {
        console.log('database connected')
    }
})

// post data in database

app.post('/', (req, res) => {
    console.log(req.body)
    let activity = Activity(req.body)
    activity.save().then((el) => {
        res.send(el)
        console.log(el)
    }
    ).catch(() => {
        console.log('error occured')
    })
})

// Get data from database

app.post('/getdata', async (req, res) => {
    console.log(req.body);
    await Activity.find({ 'user': req.body._id })
        .then((el) => {
            res.send(el)
            // console.log(el)
        }).catch(err => {
            console.log(err)
        })
})

// delete data in database

app.delete('/:id', (req, res) => {
    let id = req.params.id
    Activity.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.send(err)
            console.log('error occuried while deleting activity')
        }
        else {
            res.send(console.log("deleted succesfully"))
            // console.log("deleted succesfully")
        }
    })
})



// user register

app.post('/signup', async (req, res) => {
    let users = User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    let record = await User.findOne({ email: users.email })
    if (record) {
        return res.status(401).send('email already exist')
    }
    else {
        users.save().then(el => {
            res.send(el)
            console.log(el)
        }).catch(err => {
            res.send(err)
            console.log(err)
        })
    }
})

//  user login

app.post('/login', async (req, res) => {
    let { email, password } = req.body
    let record = await User.findOne({ email: req.body.email })
    if (!record) {
        res.status(400).send("not")
        // res.json({status : 'not'})
    }
    else if (record.email === email && record.password === password) {
        // console.log(record)
        res.status(200).send(record)
        // res.json({status : 'ok'})
    }
    else {
        res.status(401).send("nottt")
        // res.send('invalid')
    }
})




app.listen('4000', () => {
    console.log('3000 port connected successfully')
})