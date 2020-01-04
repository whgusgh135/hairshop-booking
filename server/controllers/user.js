const User = require("../models/user");

exports.register = async function(req, res, next) {
    try {
        const { id, password } = req.body;

        await User.create({
            id,
            password
        });

        let user = await User.findOne({id});
        // TODO: return JWT
        return res.json(user);

    } catch(error) {
        return next(error);
    }
}

exports.authenticate = async function(req, res, next) {
    try {
        const { id, password } = req.body

        let user = await User.findOne({id: id});

        let isPasswordMatch = await user.comparePassword(password);
        if(isPasswordMatch) {
            // TODO: return JWT
            return res.json({
                "login": "success"
            });
        };

    } catch(error) {
        return next(error);
    }
}