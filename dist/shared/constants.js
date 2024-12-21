"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_database = exports.db_password = exports.db_username = exports.db_port = exports.db_host = exports.db_type = void 0;
require("dotenv/config");
_a = process.env, exports.db_type = _a.db_type, exports.db_host = _a.db_host, exports.db_port = _a.db_port, exports.db_username = _a.db_username, exports.db_password = _a.db_password, exports.db_database = _a.db_database;
//# sourceMappingURL=constants.js.map