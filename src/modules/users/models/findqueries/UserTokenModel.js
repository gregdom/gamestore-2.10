import { query } from "../../../../config/db/SnipetConn.js";
import { v4 as uuidv4 } from "uuid";

class UserTokenModel {
  async generateToken(id_user) {
    const usersToken = uuidv4();
    await query(
      `INSERT INTO userstoken VALUES (NULL, '${usersToken}', '${id_user}', now(), now());`
    );
    return usersToken;
  }

  async findByToken(token) {
    const usersToken = await query(
      `SELECT * FROM userstoken WHERE token = '${token}';`
    );
    console.log(usersToken);
    return usersToken[0];
  }
}

export default UserTokenModel;
