const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});

app.post("/analyze", upload.single("image"), (req, res) => {

    if (!req.file) {
        return res.json({
            message: "No image uploaded"
        });
    }

    res.json({
        message: "Image received successfully",
        filename: req.file.originalname,
        size: req.file.size
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
}); console.log("update");