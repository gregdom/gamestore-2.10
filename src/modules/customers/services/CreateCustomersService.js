import { query } from "../../../config/SnipetConn.js";
import ModelQuerying from "../models/ModelQuerying.js";

class CreateCustomersService {
  async execute(name, email) {
    const emailInit = new ModelQuerying();
    const customer = await emailInit.findByEmail(email);

    if (customer.length > 0) {
      return null;
    }

    const sql = await query(
      `INSERT INTO users (iduser, name, email, password, cpf, id_level) VALUES
        (NULL, '${name}', '${email}', 1);`
    );

    return sql;
  }
}

export default CreateCustomersService;
