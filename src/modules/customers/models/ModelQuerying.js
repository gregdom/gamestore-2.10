import { query } from "../../../config/SnipetConn.js";

class ModelQuerying {
  async findById(id) {
    const users = await query(`SELECT * FROM users WHERE iduser = ${id};`);
    return users[0];
  }

  async findByEmail(email) {
    const users = await query(`SELECT * FROM users WHERE email = '${email}';`);
    console.log("MODEL QUERING > EMAIL", users[0]);
    return users[0];
  }

  async findByCpf(cpf) {
    const users = await query(`SELECT * FROM users WHERE cpf = '${cpf}';`);
    console.log("MODEL QUERING > EMAIL", users[0]);
    return users[0];
  }
}

export default ModelQuerying;
