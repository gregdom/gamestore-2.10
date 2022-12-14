import { query } from "../../../../config/db/SnipetConn.js";

class UserQueryModel {
  async findById(id) {
    const user = await query(`SELECT * FROM users WHERE iduser = ${id};`);
    return user[0];
  }

  async findByEmail(email) {
    const user = await query(`SELECT * FROM users WHERE email = '${email}';`);
    console.log("QUERING MODEL > EMAIL", user[0]);
    return user[0];
  }
}

export default UserQueryModel;
