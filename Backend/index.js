import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());
app.use(express.json());

// Define PORT and URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI || 'mongodb://127.0.0.1:27017/bookStore';

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get("/msg" , (req , res) =>{
    res.jsom("Hello buyer");
})
// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
