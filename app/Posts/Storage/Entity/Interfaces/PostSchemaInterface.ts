import * as mongoose from "mongoose";

export interface PostInterface extends mongoose.Document {
    title: string;
}