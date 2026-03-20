// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});

// Using placeholders
try {
  const results = await connection.execute('SELECT * FROM pessoa')
  console.log(results);
} catch (err) {
  console.log(err);
}
// Close the connection
await connection.end();