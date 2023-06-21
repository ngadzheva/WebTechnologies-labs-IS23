import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Student first name is required'],
        minLength: [3, 'Student first name must be at least 3 symbols long'],
        maxLength: [20, 'Student first name must be less than 20 symbols long'],
    },
    lastName: {
        type: String,
        required: [true, 'Student last name is required'],
        minLength: [3, 'Student last name must be at least 3 symbols long'],
        maxLength: [30, 'Student last name must be less than 20 symbols long'],
    },
    fn: {
        type: Number,
        required: [true, 'FN is required'],
        min: [70000, 'FN must be greater than 70000'],
        max: [79999, 'FN must be less than 79999']
    },
    marks: {
        type: Array,
        required: false
    }
});

export const Student = model('Student', studentSchema);