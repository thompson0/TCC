import mongoose from "mongoose";

const ContatoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {type: String, required: true},
    email: {type: String, required: true},
    mensagem: {type: String, required: true}
})

const contato = mongoose.model('contatos', ContatoSchema);

export default contato