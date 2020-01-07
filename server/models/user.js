const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
userSchema.pre("save", function(next) {
    try {
        let user = this;

        // check if password is already hashed
        if(!this.isModified("password")) {
            return next();
        }

        // hash the password
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                next();
            });
        });

    } catch(error) {
        return next(error);
    }
});

// hash the user password input to compare with the saved hashed password in DB
userSchema.methods.comparePassword = async function(userPassword, next) {
    try {
        bcrypt.compare(userPassword, this.password, function(err, res) {
            return res === true;
        });
    } catch(error) {
        return next(error);
    }
};

module.exports = mongoose.model("User", userSchema);
