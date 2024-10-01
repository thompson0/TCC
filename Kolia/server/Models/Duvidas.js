import mongoose from "mongoose";

const DuvidaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true},
    email: {type: String, required: true},
    body: {type: String, required: true}
})

const Duvidas = mongoose.model('Duvidas', DuvidaSchema);

export default Duvidas