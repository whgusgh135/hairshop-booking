const express    = require("express"),
      cors       = require("cors"),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose"),
      config     = require("./config/dev");

const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = Promise;
mongoose.connect(config.DB_URI);


// handle routes
const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);


// error handler
// note: function that takes 4 arguments is only called if an error occurs
app.use(function(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Something went wrong."
        }
    })
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server running");
});