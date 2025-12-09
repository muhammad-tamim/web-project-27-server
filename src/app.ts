import express, { Request, Response } from "express";
import cors from "cors";
import { initDB } from "./config/db.js";


const app = express()
app.use(cors())
app.use(express.json())


initDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


export default app