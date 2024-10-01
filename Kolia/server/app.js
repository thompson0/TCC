import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import Duvidas from './Models/Duvidas.js';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => { 
    console.error('Erro ao conectar no MongoDB', erro);
});

conexao.once('open', () => {
    console.log('Conectado no MongoDB');
});

app.get('/duvidas', async (req, res) => {
    const listaDuvidas = await Duvidas.find({});
    res.status(200).json(listaDuvidas); 
    console.log(listaDuvidas);
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
