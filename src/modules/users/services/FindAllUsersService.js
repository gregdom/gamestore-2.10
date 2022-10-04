import { query } from "../../../config/db/SnipetConn.js";

class FindAllUsersService {
  async execute() {
    const users = await query(
      `SELECT name, email FROM users WHERE id_level = 1;`
    );
    return users;
  }
}

export default FindAllUsersService;
