import mongoose, { Mongoose,Schema, SchemaType } from "mongoose";

export interface IUser{
	email: string,
	name: string,
	password: string,
	_id?: mongoose.Types.ObjectId,
	createdAt?: Date,
	updatedAt?:Date,
};