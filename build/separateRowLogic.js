"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparateRowLogin = void 0;
const csvFileReader_1 = require("./csvFileReader");
const utils_1 = require("./utils");
class SeparateRowLogin extends csvFileReader_1.CsvFileReader {
    constructor(filename) {
        super(filename);
    }
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.SeparateRowLogin = SeparateRowLogin;
