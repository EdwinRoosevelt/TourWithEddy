const jwt = require('jsonwebtoken');

const CustomError = require('../models/custom-error');
const User = require('../models/UserSchema');

module.exports = async (req, res, next) => {
    const token = req.header('x-auth-token');

    try {
        if (!token) throw new CustomError('No Access Token', 403);

        const claimedUser = jwt.verify(token, "NODEISAWESOME");
        const trueUser = await User.findOne({ email: claimedUser.email });

        if(!trueUser) throw new CustomError('Invalid Token', 403);
        
        req.id = trueUser.id;
        next();

    } catch (err) {
        return next(err);
    }
};


