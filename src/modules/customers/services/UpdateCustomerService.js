import { query } from "../../../config/SnipetConn.js";
import crypting from "bcryptjs";
import ModelQuerying from "../models/ModelQuerying.js";
const { compare, hash } = crypting;

class UpdateCustomerService {
  async execute(user_id, name, email) {
    const idInit = new ModelQuerying();
    const customer = await idInit.findById(user_id);

    if (!customer) {
      return "Cliente não encontrado!";
    }

    const emailInit = new ModelQuerying();
    const customerMail = await emailInit.findByEmail(email);

    if (customerMail && email !== customer.email) {
      return "Já existe outro cliente com esse email";
    }

    await query(
      `UPDATE customer SET name = '${name}', email = '${email}' WHERE iduser = ${user_id};`
    );

    return customer;
  }
}

export default UpdateCustomerService;
