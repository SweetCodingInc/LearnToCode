const mongoose = require('mongoose');

const requiredString = {
    type: String,
    required: true
};

const UserSchema = new mongoose.Schema({
    username: requiredString,
    password: requiredString,
    createdOn: Date,
    modifiedOn: Date,
    firstName: requiredString,
    lastName: requiredString,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
