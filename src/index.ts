import { Database } from './services/db.js'
import { separate } from "./services/separate.js"
import express from "express"

const database = new Database()
database.connect()
separate(1)

const app = express()
app.route('/').get((_req, res) => {
    res.send('Hello World')
})
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
