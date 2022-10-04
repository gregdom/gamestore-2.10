import CreateSessionService from "../services/CreateSessionService.js";

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;
    const service = new CreateSessionService();
    const user = await service.execute(email, password);

    return res.json(user);
  }
}

export default SessionController;
