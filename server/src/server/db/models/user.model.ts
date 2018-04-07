import { Schema, Model, model } from 'mongoose';
import { IUser } from '../../models/user.model';

const requiredString = {
    type: String,
    required: true
};

const UserSchema = new Schema({
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

export const UserModel = model('User', UserSchema);
