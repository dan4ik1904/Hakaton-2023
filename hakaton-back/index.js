const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require('./routes/api-router')

const cors = require('cors')

const dbURL = ''

const PORT = process.env.PORT || 3001

const app = express()

app.set('view engine', 'ejs')

// new EventForUsers({idUser: '65b4ef90f11e1102553b9184', UserName: 'Даниял', idEvent: '65fae4dca9ab73338047e6e2', isCon: 'Con'}).save()

mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Conected to DB'))
    .catch(error => console.log(error))

app.listen(PORT, (error) => {
    try {
        console.log(`Server started on PORT ${PORT}`)
    } catch (error) {
        console.log(error);
    }
})


app.use(cors());
app.use(express.urlencoded({ extended: false}))

app.use(apiRouter)

