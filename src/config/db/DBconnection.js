import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "minhasenhaG123321",
  database: "teste1",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("O resultado é: ", results[0].solution, "arquivo database");
});

export default connection;
