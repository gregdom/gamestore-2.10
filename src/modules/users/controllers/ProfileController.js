import ReadUserProfileService from "../services/ReadUserProfileService.js";
import UpdateUserProfileService from "../services/UpdateUserProfileService.js";

class ProfileController {
  async read(req, res) {
    const id = req.user.id;
    const service = new ReadUserProfileService();
    const user = await service.execute(id);
    return res.json(user);
  }

  async update(req, res) {
    const id = req.user.id;
    const { name, email, password, oldpassword } = req.body;
    const service = new UpdateUserProfileService();
    const user = await service.execute(
      id,
      name,
      email,
      password,
      oldpassword
    );
    return res.json(user);
  }
}

export default ProfileController;
