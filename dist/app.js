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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const equipo_route_1 = __importDefault(require("./routes/equipo.route"));
const db_config_1 = require("./config/db.config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/api/v1/equipo', equipo_route_1.default);
app.use((0, morgan_1.default)('dev'));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_config_1.AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    }
    catch (error) {
        console.error('Error al conectar con la base de datos', error);
    }
});
exports.startServer = startServer;
exports.default = app;
//# sourceMappingURL=app.js.map