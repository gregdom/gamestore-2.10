import { query } from "../../../config/SnipetConn.js";

class DeleteCustomersService {
  async execute(id) {
    const idInit = new ModelQuerying();
    const customers = await idInit.findById(id);

    if (!customers) {
      return "Cliente não encontrado!";
    }

    await query(
      `DELETE * FROM customers WHERE iduser = ${id} LIMIT 1`
    );
  }
}

export default DeleteCustomersService;
