import mongoose from 'mongoose';

export default async function conectaNaDb() {
    mongoose.connect("mongodb+srv://admin:admin@koliadatabase.1dnjc.mongodb.net/?retryWrites=true&w=majority&appName=KoliaDataBase")
    return mongoose.connection;
}