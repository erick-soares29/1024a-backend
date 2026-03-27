// Get the client
import mysql, { type RowDataPacket, type Connection, type ResultSetHeader } from 'mysql2/promise';

//Erro ao passar o id ou o nome
//status 500

import express from 'express';
const app = express()
app.use(express.json())

//Como cria uma rota no express?
interface IPessoa extends RowDataPacket {
    id: number,
    nome: string,
}

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'luademel',
});

app.get("/pessoas", async (req, res) => {
    try {
        const [dados, campos] =
            await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
        res.status(200).json(dados)
    } catch (err) {
        //TODO:
        console.log(err);
    }
})
app.post("/pessoas", async (req, res) => {
    //Pegar as informações do usuário   => REQ.body
    //inserir

    const { id, nome } = req.body

    //Validem o id e nome para não serem vazios.

    try {
        const [result] =
            await connection
                .execute<ResultSetHeader>('INSERT INTO pessoa VALUES (?,?)', [id, nome])
        //Retornar algo que indique que deu certo
         if (result.affectedRows === 0) 
            return res.status(500).json({ mensagem: "Erro ao inserir!" })
        return res.status(201).json({ mensagem: "Sucesso ao inserir!" })
        
    }catch(err){
        return res.status(500).json({ mensagem: "Erro ao inserir!" })
    }
    
})
app.listen(8000, () => {
    console.log("Iniciando o servidor na porta 8000")
})

