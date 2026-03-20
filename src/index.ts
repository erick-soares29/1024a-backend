// Get the client
import mysql, { type RowDataPacket } from 'mysql2/promise';

interface IPessoa extends RowDataPacket{
  id:number,
  nome:string,
}

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademels',
});

// Using placeholders
try {
  // const result = 
  //   await connection
  //   .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
  // console.log(result)

  const [dados,campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  console.log(dados[0]);
  for (let i = 0; i < dados.length; i++) {
    const element = dados[i];
    console.log(element?.id,element?.nome)
    
  }


} catch (err) {
  //TODO:
  console.log(err);
}
// Close the connection
await connection.end();