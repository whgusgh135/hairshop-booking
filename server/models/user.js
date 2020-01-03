const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// hash password before storing data
userSchema.pre("save", async function(next) {
    try {
        // check if password is already hashed

        // hash the password
    } catch(error) {
        return next(error);
    }
});

module.exports = mongoose.model("User", userSchema);
