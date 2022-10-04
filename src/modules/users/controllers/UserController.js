import CreateUserService from "../services/CreateUserService.js";

class UserController {
  async create(req, res) {
    const { name, email, password, cpf } = req.body;
    const service = new CreateUserService();
    const user = await service.execute(name, email, password, cpf);

    user === null
      ? res.status(409).json("Não é possível usar este email!")
      : res.json("Registro realizado!");
  }
}

export default UserController;
