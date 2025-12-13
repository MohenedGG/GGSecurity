"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Logger {
    constructor(format, filePath) {
        this.format = format;
        if (filePath) {
            // convert path to full path
            const fullPath = path_1.default.resolve(filePath);
            // create a write stream (in append mode)
            const accessLogStream = fs_1.default.createWriteStream(fullPath, { flags: "a" });
            this.stream = {
                write: (message) => {
                    accessLogStream.write(message);
                },
            };
        }
        else {
            // Default to console
            this.stream = {
                write: (message) => {
                    process.stdout.write(message);
                },
            };
        }
    }
    // Middleware to log requests
    getMiddleware() {
        return (0, morgan_1.default)(this.format, { stream: this.stream });
    }
    // Method to update log format
    setFormat(format) {
        this.format = format;
    }
    // Method to update log file path
    setLogFile(filePath) {
        const fullPath = path_1.default.resolve(filePath);
        const accessLogStream = fs_1.default.createWriteStream(fullPath, { flags: "a" });
        this.stream = {
            write: (message) => {
                accessLogStream.write(message);
            },
        };
    }
}
exports.default = Logger;
