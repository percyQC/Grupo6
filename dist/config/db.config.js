"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("../shared/constants");
const equipo_1 = require("../entities/equipo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: constants_1.db_type,
    host: constants_1.db_host,
    port: Number(constants_1.db_port || '0'),
    username: constants_1.db_username,
    password: constants_1.db_password,
    database: constants_1.db_database,
    entities: [equipo_1.Equipo],
});
//# sourceMappingURL=db.config.js.map