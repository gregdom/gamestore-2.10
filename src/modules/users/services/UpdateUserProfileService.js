import { query } from "../../../config/db/SnipetConn.js";
import UserQueryModel from "../models/findqueries/UserQueryModel.js";
import crypting from "bcryptjs";
const { compare, hash } = crypting;

class UpdateUserProfileService {
  async execute(user_id, name, email, password, oldpassword) {
    const userQueryModelInit = new UserQueryModel();
    const user = await userQueryModelInit.findById(user_id);

    if (!user) {
      return "Usuário não encontrado!";
    }

    const emailExists = new UserQueryModel();
    const emailReturn = await emailExists.findByEmail(email);

    if (emailReturn && emailReturn.iduser !== parseInt(user_id)) {
      return "Já existe outro usuário com esse email";
    }

    if (!password && oldpassword) {
      const verifyOldPassword = await compare(oldpassword, user.password);

      if (!verifyOldPassword) {
        return "Senha atual não compatível com a registrada nessa conta! 1";
      }

      const hashPassword = await hash(oldpassword, 8);

      await query(
        `UPDATE users SET name = '${name}', email = '${email}', password = '${hashPassword}' WHERE iduser = ${user_id};`
      );

      return user;
    }

    if (password && !oldpassword) {
      return "Senha atual é necessária!";
    }

    if (password && oldpassword) {
      const verifyOldPassword = await compare(oldpassword, user.password);
      if (!verifyOldPassword) {
        return "Senha atual não compatível com a registrada nessa conta!";
      }
    }

    const hashPassword = await hash(password, 8);
    await query(
      `UPDATE users SET name = '${name}', email = '${email}', password = '${hashPassword}' WHERE iduser = ${user_id};`
    );

    return user;
  }
}

export default UpdateUserProfileService;
