import express from 'express';
import connectDb from './db.js';
import cors from 'cors';
import contato from './Models/contato.js';

const app = express();
app.use(cors());
const conexao = await connectDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.get('/duvidas', async (req, res) => {
    const listaContatos = await contato.find({});
    res.status(200).json(listaContatos);
    console.log(listaContatos)
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
