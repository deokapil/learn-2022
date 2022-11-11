// function export
// const logger = require("./logger");
// logger("This is an informational message"); // <- see the diff
// logger.verbose("This is a verbose message");

//  class Export

// const Logger = require("./class-export");
// const dbLogger = new Logger("DB");
// dbLogger.info("This is an informational message");
// const accessLogger = new Logger("ACCESS");
// accessLogger.verbose("This is a verbose message");

//  instance Export

// const logger = require("./instance-export");
// logger.log("This is an informational message");

// const customLogger = new logger.constructor("CUSTOM");
// customLogger.log("This is an informational message");

// Monkey Patching

require("./patcher");
const logger = require("./logger");
logger.customMessage();
