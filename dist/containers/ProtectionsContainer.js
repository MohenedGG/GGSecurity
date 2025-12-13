"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Compression_1 = __importDefault(require("../protections/Compression"));
const HelmetProtection_1 = __importDefault(require("../protections/HelmetProtection"));
const Logger_1 = __importDefault(require("../protections/Logger"));
const XSSProtection_1 = __importDefault(require("../protections/XSSProtection"));
class Protections {
    constructor() {
        // Initialize all protection classes
        this.compression = new Compression_1.default();
        this.helmet = new HelmetProtection_1.default();
        this.logger = new Logger_1.default("dev"); // default logger format
        this.xss = new XSSProtection_1.default();
    }
    // Method to get all middlewares
    getAllMiddlewares() {
        return [
            this.compression.init(),
            this.helmet.getMiddleware(),
            this.logger.getMiddleware(),
            (req, res, next) => this.xss.cleanBody(req, res, next), // prevent losing "this"
        ];
    }
    // Method to apply custom configuration
    configure(config) {
        // Compression
        if (config.compression) {
            this.compression.setOptions(config.compression);
        }
        // Helmet
        if (config.helmet) {
            this.helmet.setOptions(config.helmet);
        }
        // Logger
        if (config.logger) {
            const { format, filePath } = config.logger;
            if (filePath) {
                this.logger.setLogFile(filePath);
            }
            if (format) {
                this.logger.setFormat(format);
            }
        }
        // XSS
        if (config.xss) {
            this.xss.setOptions(config.xss);
        }
    }
}
exports.default = Protections;
