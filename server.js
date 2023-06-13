import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"
import bookRoute from "./routes/bookRoute.js"
import userRoute from "./routes/userRoute.js"
import { rateLimitMiddleware } from "./middlewares/rateLimitMiddleware.js";

/* Make a .env file
  MONGO_URL = {Write mongodb url}
  JWT_SECRET = {Write something random as JWT_SECRET, eg -> DSGOJF41412JAHDG}
*/

// env configured
dotenv.config();

// database configured
connectDB();

const app = express()
const port = 3000   // Use the port 3000 while running this backend

// middlewares
app.use(express.json()); // Can pass JSON in req and res
app.use(morgan('dev'));  // Shows API calls when fn is running
app.use(rateLimitMiddleware)  // Limiting rate of users based on their Ip

// routes
app.use('/auth', authRoute)
app.use('/books', bookRoute)
app.use('/users', userRoute)

// rest api's
app.get('/', (req, res) => {
  res.send('Hello World 123!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})