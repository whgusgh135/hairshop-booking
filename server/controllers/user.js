const User = require("../models/user");

exports.register = async function(req, res, next) {
    try {
        const {id, password } = req.body;

        await User.create({
            id,
            password
        });

        return res.json({
            "registered": true
        });

    } catch(error) {
        return next(error);
    }
}