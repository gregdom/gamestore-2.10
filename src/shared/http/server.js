import express from "express";
import routes from "./routes/index.js";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(routes);

app.listen(port, () => {
  console.log(
    `Servidor rodando em: http://localhost:${port} arquivo (server.js)`
  );
});
