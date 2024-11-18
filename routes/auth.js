const express = require("express");
const { registerUser, loginUser } = require("../handlers/auth-handler");
const router = express.Router();

router.post("/register", async (req, res) => {
  let model = req.body;
  if (model.name && model.email && model.password) {
    await registerUser(model);
    res.send({
      message: "Usuario registrado",
    });
  } else {
    res.status(400).json({
      error: "Porfavor ingrese nombre, correo y contraseña",
    });
  }
});

router.post("/login", async (req, res) => {
  let model = req.body;
  if (model.email && model.password) {
    const result = await loginUser(model);
    if (result) {
      res.send(result);
    } else {
      res.status(400).json({
        error: "Correo o contraseña incorrecto",
      });
    }
  } else {
    res.status(400).json({
      error: "Porfavor ingrese correo y contraseña",
    });
  }
});

module.exports = router;
