import ModelQuerying from "../models/ModelQuerying.js";

class ListCustomersService {
  async execute(id) {
    const usersExists = new ModelQuerying();
    const users = await usersExists.findById(id);

    if (!users) {
      return "Usuário não encontrado!";
    }

    return users;
  }
}

export default ListCustomersService;
