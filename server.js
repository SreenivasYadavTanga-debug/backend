const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post('/analyze', upload.single('image'), (req, res) => {

    res.json({
        message: "Image received successfully",
        filename: req.file.originalname,
        size: req.file.size
    });

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});