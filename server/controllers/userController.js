const User = require("../model/userModel");
const catchAsync = require("../util/catchAsync");
const axios = require("axios");
const AppError = require("../util/appError");


exports.deleteMe = catchAsync(async (req, res, next) => {
    //1. get user from the collection
    let user = await User.findById(req.user._id).select('+password');

    //2. check if posted password is correct
    if (!user || !req.body.password || !(await user.correctPassword(req.body.password, user.password))) {
        return next(new AppError("Incorrect password!", 401));
    }

    //delete the platformsFor that user
    for (const platform of user.codingPlatforms) {
        await CodingProfile.findOneAndDelete(platform);
    }

    //delete the user
    await User.findByIdAndDelete(req.user._id);


    //we won't see the response in postman as status code is 204
    res.status(204).json({
        status: 'success', message: "User deleted!", data: null
    });

});