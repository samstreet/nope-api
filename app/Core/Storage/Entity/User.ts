import * as mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import "reflect-metadata";

let Schema = mongoose.Schema;

const personSchema = new mongoose.Schema({
    first: {type: String, required: 'FirstNameInvalid'},
    last: String,
    email: {type: String, unique: true, lowercase: true, required: 'EmailInvalid'},
    password: {type: String, select: false, required: 'PasswordInvalid'}
});

personSchema.plugin(mongoosePaginate);

export default mongoose.model('Person', personSchema);