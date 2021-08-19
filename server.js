 const express = require('express')

 const app = express()

app.use(express.static(__dirname + '/public\ static'))

 PORT = process.env.PORT || 8080

 app.listen(PORT, () => {
     console.log(`Server Running on port http://localhost:${PORT}.`);
 })