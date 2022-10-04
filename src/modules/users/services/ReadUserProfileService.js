import UserQueryModel from "../models/findqueries/UserQueryModel.js";

class ReadUserProfileService {
  async execute(id) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findById(id);

    if (!user) {
      return "Usuário não encontrado!";
    }

    return user;
  }
}

export default ReadUserProfileService;
