const { response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const query = req.query;

  res.json({
    msg: "get api - Controlador",
    query,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post api - Controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put api - Controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete api - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosDelete,
  usuariosPost,
  usuariosPut,
};
