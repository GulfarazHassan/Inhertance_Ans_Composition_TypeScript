import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./csvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTarget/ConsoleReport";


const reader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(reader)
matchReader.load();

const analyzer = new WinsAnalysis('Man United');
const consoleReport = new ConsoleReport()
const summary = new Summary(analyzer, consoleReport);
summary.buildAndPrintReport(matchReader.matches)