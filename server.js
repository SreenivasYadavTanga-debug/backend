const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/analyze", upload.single("image"), (req, res) => {

    res.json({
        message: "Image received successfully",
        filename: req.file.originalname,
        size: req.file.size
    });

});

app.post("/signup", (req, res) => {

    const { name, email, password } = req.body;

    console.log(name, email, password);

    res.json({
        message: "Signup successful",
        user: {
            name,
            email
        }
    });

});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});