const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send({
      error: "Acceso denegado, no se proporcionó token",
    });
  }
  const bearerToken = token.split(" ")[1];

  if (!bearerToken) {
    return res.status(401).send({
      error: "Acceso denegado, formato de token inválido",
    });
  }

  try {
    // Verificar el token
    const decode = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(401).send({
      error: "Acceso de token inválido",
    });
  }
}

function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(403).send({
      error: "Acceso prohibido",
    });
  }
}

module.exports = { verifyToken, isAdmin };
