const express = require("express");
const path = require("path");
const multer = require("multer");


const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now}-${file.originalname}`)
    },
  });

  const upload = multer({ storage: storage })

app.get('/', (req, resp) => {
    return resp.render("home")
});

app.post('/upload', upload.single("uplodeImage"), (req, resp) => {
    console.log(req.body);
    console.log(req.file);

    return resp.render('/')
});

app.listen(PORT, () => {
    console.log(`server is started on ${PORT} `);
})