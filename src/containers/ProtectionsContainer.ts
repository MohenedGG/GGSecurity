import Compression from "../protections/Compression";
import HelmetProtection from "../protections/HelmetProtection";
import Logger from "../protections/Logger";
import XSSProtection from "../protections/XSSProtection";
import { Request, Response, NextFunction } from "express";

export default class Protections {
    public compression: Compression;
    public helmet: HelmetProtection;
    public logger: Logger;
    public xss: XSSProtection;

    constructor() {
        // Initialize all protection classes
        this.compression = new Compression();
        this.helmet = new HelmetProtection();
        this.logger = new Logger("dev"); // default logger format
        this.xss = new XSSProtection();
    }

    // Method to get all middlewares
    public getAllMiddlewares() {
        return [
            this.compression.init(),
            this.helmet.getMiddleware(),
            this.logger.getMiddleware(),
            (req: Request, res: Response, next: NextFunction) => this.xss.cleanBody(req, res, next), // prevent losing "this"
        ];
    }

    // Method to apply custom configuration
    public configure(config: {
        compression?: any;
        helmet?: any;
        logger?: { format?: string; filePath?: string };
        xss?: any;
    }) {
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
