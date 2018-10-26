import * as mongoose from 'mongoose';

export interface PostInterface extends mongoose.Document {
    title: string;
}

export const PostSchema = new mongoose.Schema({
    title: {type:String, required: true},
});