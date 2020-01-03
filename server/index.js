const express    = require("express"),
      cors       = require("cors"),
      bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());



app.use("/", (req, res, next) => {
    res.send("working")
});

// handle routes
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server running");
});