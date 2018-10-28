import * as mongoose from 'mongoose';
import "reflect-metadata";

export const PostSchema = new mongoose.Schema({
    title: {type:String, required: true},
});