import Compression from "../protections/Compression";
import HelmetProtection from "../protections/HelmetProtection";
import Logger from "../protections/Logger";
import XSSProtection from "../protections/XSSProtection";
export default class Protections {
    compression: Compression;
    helmet: HelmetProtection;
    logger: Logger;
    xss: XSSProtection;
    constructor();
    getAllMiddlewares(): import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
    configure(config: {
        compression?: any;
        helmet?: any;
        logger?: {
            format?: string;
            filePath?: string;
        };
        xss?: any;
    }): void;
}
