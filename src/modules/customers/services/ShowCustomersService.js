import ModelQuerying from "../models/ModelQuerying.js";

class ShowCustomersService {
  async execute(id) {
    const idInit = new ModelQuerying();
    const customers = await idInit.findById(id);

    if (!customers) {
      return "Cliente não encontrado!";
    }

    return customers;
  }
}

export default ShowCustomersService;
