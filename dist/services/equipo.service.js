"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darBajaEquipo = exports.actualizarEquipo = exports.obtenerEquipo = exports.listarEquipo = exports.insertarEquipo = void 0;
const db_config_1 = require("../config/db.config");
const equipo_1 = require("../entities/equipo");
const estado_auditoria_1 = require("../enums/estado-auditoria");
const repository = db_config_1.AppDataSource.getRepository(equipo_1.Equipo);
const insertarEquipo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newEquipo = yield repository.save(data);
    return yield repository.findOne({ where: { idEquipo: newEquipo.idEquipo } });
});
exports.insertarEquipo = insertarEquipo;
const listarEquipo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.find({ where: { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO } });
});
exports.listarEquipo = listarEquipo;
const obtenerEquipo = (idEquipo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield repository.findOne({ where: { idEquipo, estadoAuditoria: estado_auditoria_1.EstadoAuditoria.ACTIVO } });
});
exports.obtenerEquipo = obtenerEquipo;
const actualizarEquipo = (idEquipo, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield repository.update(idEquipo, data);
    return (0, exports.obtenerEquipo)(idEquipo);
});
exports.actualizarEquipo = actualizarEquipo;
const darBajaEquipo = (idEquipo) => __awaiter(void 0, void 0, void 0, function* () {
    yield repository.update(idEquipo, { estadoAuditoria: estado_auditoria_1.EstadoAuditoria.INACTIVO });
});
exports.darBajaEquipo = darBajaEquipo;
//# sourceMappingURL=equipo.service.js.map