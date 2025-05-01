const express = require('express');
const router = express.Router();
const { Jornada } = require('../models');
const { Op } = require('sequelize');

router.post('/registro', async (req, res) => {
  const { usuarioId, entrada, saida } = req.body;
  const jornada = await Jornada.create({
    usuarioId,
    data: new Date(),
    entrada,
    saida,
    horasExtras: calcularHorasExtras(entrada, saida)
  });
  res.status(201).json(jornada);
});

function calcularHorasExtras(entrada, saida) {
  const horaInicio = parseInt(entrada.split(':')[0]);
  const horaFim = parseInt(saida.split(':')[0]);
  const horas = horaFim - horaInicio;
  return horas > 8 ? horas - 8 : 0;
}

module.exports = router;