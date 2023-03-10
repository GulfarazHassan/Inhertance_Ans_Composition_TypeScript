"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csvFileReader_1 = require("./csvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTarget/ConsoleReport");
const reader = new csvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
const analyzer = new WinsAnalysis_1.WinsAnalysis('Man United');
const consoleReport = new ConsoleReport_1.ConsoleReport();
const summary = new Summary_1.Summary(analyzer, consoleReport);
summary.buildAndPrintReport(matchReader.matches);
