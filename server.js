 const express = require('express')
 const fareprice = require('./fare')
 const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public\ static'))

app.post('/calculate_fare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareprice.calculate_Fare(km, min)

    res.send({fare: fare})
})

app.get('/rate',( req,res) => {
    res.send(fareprice.rate)
})

 PORT = process.env.PORT || 8080

 app.listen(PORT, () => {
     console.log(`Server Running on port http://localhost:${PORT}.`);
 })