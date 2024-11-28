const http = require('http');
const App = require('./routes/routes')

require('dotenv').config();
const port = process.env.PORT

const server = http.createServer(App)
server.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})