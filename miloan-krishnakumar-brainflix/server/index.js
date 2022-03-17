const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

// Config

const PORT = process.env.PORT || 8000;

// Routes files import

const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");

// Middleware

app.use(express.json());
app.use(cors());

// Routes

app.use(express.static("public/images"));

app.use("/api/videos", videoRoutes).use("/api/videos", commentRoutes);

app.listen(PORT, () => {
	console.log(`express is running on ${PORT}
    `);
});
