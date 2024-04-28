const catchAsync = require("../util/catchAsync");
const jwt = require("jsonwebtoken"); //token token token babe '>'
const AppError = require("../util/appError");
const {promisify} = require('util');
const Company = require("../model/CompanyModel");

//returns a jwt token created using given id
const signToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}

//creates a jwt token using user's _id, put it into a cookie and send it as response
//ok
const createSendToken = (user, status, res) => {
    const token = signToken(user._id);

    //hide password as we are not 'selecting' user == password is still in user object
    user.password = undefined;
    user.emailVerificationOtp = undefined

    //set cookies
    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), httpOnly: true, secure: true,
    };
    res.cookie("jwt", token, options);


    res.status(status).json({
        status: 'success', token, data: {
            user
        }
    });
}

//to sing up the user
//checked
exports.signup = catchAsync(async (req, res, next) => {

    if (!req.body.email) return next(new AppError("Email id not provided", 400));

    // check if the user already exists
    const existingUser = await Company.findOne({email: req.body.email});
    if (existingUser) {
        return res.status(401).json({
            status: "fail",
            message: "email id already registered",
        });
    }

    //not simply using req.body due to security reasons
    const newCompany = await Company.create({
        ...req.body
    });

    return createSendToken(newCompany, 201, res);

});

exports.login = catchAsync(async (req, res, next) => {
    let {loginField, password} = req.body;

    //check if email and password exists => user entered these fields
    if (!loginField || !password) {
        return next(new AppError("Please provide email and password", 400));
    }

    //check if user exists and password is correct
    //we have restricted the default selection of password, so we explicitly select password
    const filter = loginField.includes("@") ? {email: loginField} : {phone: loginField};
    console.log(filter);
    let company = await Company.findOne(filter).select('+password');
    if (!company?.isEmailVerified) return next(new AppError("No such Company!", 400));

    if (!company || !(await company.correctPassword(password, company.password)))
        return next(new AppError("Incorrect email or password!", 401));

    company = {...company}._doc;

    createSendToken(company, 200, res);
});

exports.logout = catchAsync(async (req, res, next) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    }).json({
        status: "success",
        message: "cookie deleted"
    })

});

//makes sure that user is logged in == has a valid bearer token
//if all is good, that user is added to the req
exports.protect = catchAsync(async (req, res, next) => {
    console.log(req);
    let token = req.cookies.jwt;

    // check if there is a token
    if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError("You are not logged in! Please log in again.", 401));
    }

    // verify the token
    //verify also accepts a callback function, but we will make it return a promise
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // check if user still exists => to check the case if user has jwt token but the user was deleted!
    const freshCompany = await Company.findOne({_id: decoded.id});
    if (!freshCompany) {
        return next(new AppError("The Company belonging to this token does not exist.", 401));
    }

    // check if user changed password after jwt was issued
    if (freshCompany.changePasswordAfter(decoded.iat)) {
        return next(new AppError("Company recently changed their password! Please login again.", 401));
    }

    //grant access to the protected rout
    //also add this user to the request object
    req.company = freshCompany;
    next();
});
