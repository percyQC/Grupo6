"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipo_controller_1 = require("../controllers/equipo.controller");
const router = (0, express_1.Router)();
router.post('/', equipo_controller_1.insertarEquipo);
router.get('/', equipo_controller_1.listarEquipo);
router.get('/:idEquipo', equipo_controller_1.obtenerEquipo);
router.put('/:idEquipo', equipo_controller_1.actualizarEquipo);
router.delete('/:idEquipo', equipo_controller_1.darBajaEquipo);
exports.default = router;
//# sourceMappingURL=equipo.route.js.map