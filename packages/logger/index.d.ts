import { WriteStream } from "fs";
import { Console } from "console";

/**
 * Create a new instance of the Console class with the
 * stdout and stderr streams pointing to the a file.
 */
declare const logger: Console;

/**
 * Logger object to log messages to the console and to files
 * using different log severity levels.
 */
interface Logger {
  debug: (message: string, ...args: any[]) => void;
  info: (message: string, ...args: any[]) => void;
  warn: (message: string, ...args: any[]) => void;
  error: (message: string, ...args: any[]) => void;
}

declare const Logger: Logger;

export = Logger;
