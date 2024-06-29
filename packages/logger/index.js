import fs from "fs";
import { Console } from "console";

/**
 * Create a new instance of the Console class with the
 * stdout and stderr streams pointing to the a file.
 */
const logger = new Console({
  stdout: fs.createWriteStream("server.log"),
  stderr: fs.createWriteStream("errors.log"),
});

/**
 * Logger object to log messages to the console and to files
 * using different log severity level.
 */
export const Logger = {
  debug: (message, ...args) => {
    const date = new Date().toISOString();
    const output = `${date} - DEBUG: ${message}`;
    const params = args.length > 0 ? args : "";
    console.log(output, params);
    logger.log(output, params);
  },

  info: (message, ...args) => {
    const date = new Date().toISOString();
    const output = `${date} - INFO: ${message}`;
    const params = args.length > 0 ? args : "";
    console.log(output, params);
    logger.log(output, params);
  },

  warn: (message, ...args) => {
    const date = new Date().toISOString();
    const output = `${date} - WARN: ${message}`;
    const params = args.length > 0 ? args : "";
    console.log(output, params);
    logger.warn(output, params);
  },

  error: (message, ...args) => {
    const date = new Date().toISOString();
    const output = `${date} - ERROR: ${message}`;
    const params = args.length > 0 ? args : "";
    console.log(output, params);
    logger.error(output, params);
  },
};
