// Get the client
import mysql, { type RowDataPacket, type Connection } from 'mysql2/promise';

import express from 'express';
const app = express()

//Como cria uma rota no express?
app.get("/pessoas", async (req, res) => {
    let connection: Connection | null = null
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'luademel',
        });
        // const result = 
        //   await connection
        //   .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
        // console.log(result)

        const [dados, campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
        res.status(200).json(dados)

        await connection.end();
    } catch (err) {
        //TODO:
        console.log(err);
        if (connection) {
            await (connection as Connection).end();
        }
    }
})
app.post("/pessoas", (req, res) => {
    //Pegar as informações do usuário   => REQ.body
    //Conectar com o banco
    //inserir
    //Retornar algo que indique que deu certo

})
app.listen(8000, () => {
    console.log("Iniciando o servidor na porta 8000")
})


interface IPessoa extends RowDataPacket {
    id: number,
    nome: string,
}

