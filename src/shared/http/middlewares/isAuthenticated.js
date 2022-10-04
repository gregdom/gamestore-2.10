import toking from "jsonwebtoken";
import authConfig from "../../../config/auth/Auth.js";
const { verify } = toking;

function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("AQUI AUTHHEADER", authHeader);
  if (!authHeader) {
    res.json("JWT Token is missing.");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    const sub = decodedToken.sub;

    req.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return "Token inválido!";
  }
}

export default isAuthenticated;
