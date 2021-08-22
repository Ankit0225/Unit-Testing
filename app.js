const app = require('./server')

app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}.`);
})