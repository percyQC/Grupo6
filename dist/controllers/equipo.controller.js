"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const EquipoService = __importStar(require("../services/equipo.service"));
const base_response_1 = require("../shared/base-response");
const message_1 = require("../enums/message");
const insertarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('insertarEquipo');
        const equipo = req.body;
        const newEquipo = yield EquipoService.insertarEquipo(equipo);
        res.json(base_response_1.BaseResponse.success(newEquipo, message_1.Message.INSERTADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarEquipo = insertarEquipo;
const listarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('listarEquipo');
        const equipos = yield EquipoService.listarEquipo();
        res.json(base_response_1.BaseResponse.success(equipos));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarEquipo = listarEquipo;
const obtenerEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('obtenerEquipo');
        const { idEquipo } = req.params;
        const equipo = yield EquipoService.obtenerEquipo(Number(idEquipo));
        if (!equipo) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.Message.NOT_FOUND, 404));
            return;
        }
        res.json(base_response_1.BaseResponse.success(equipo));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.obtenerEquipo = obtenerEquipo;
const actualizarEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idEquipo } = req.params;
        const equipo = req.body;
        if (!(yield EquipoService.obtenerEquipo(Number(idEquipo)))) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.Message.NOT_FOUND, 404));
            return;
        }
        const updateEquipo = yield EquipoService.actualizarEquipo(Number(idEquipo), equipo);
        res.json(base_response_1.BaseResponse.success(updateEquipo, message_1.Message.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarEquipo = actualizarEquipo;
const darBajaEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('darBajaEquipo');
        const { idEquipo } = req.params;
        if (!(yield EquipoService.obtenerEquipo(Number(idEquipo)))) {
            res.status(404).json(base_response_1.BaseResponse.error(message_1.Message.NOT_FOUND, 404));
            return;
        }
        yield EquipoService.darBajaEquipo(Number(idEquipo));
        res.json(base_response_1.BaseResponse.success(null, message_1.Message.ELIMINADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.darBajaEquipo = darBajaEquipo;
//# sourceMappingURL=equipo.controller.js.map