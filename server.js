import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"

// env configured
dotenv.config();

// database configured
connectDB();

const app = express()
const port = 3000

// middlewares
app.use(express.json()); // Can pass JSON in req and res
app.use(morgan('dev'));  // Shows API calls when fn is running

// routes
app.use('/auth', authRoutes)

// rest api's
app.get('/', (req, res) => {
  res.send('Hello World 123!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})