"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const xss_1 = __importStar(require("xss"));
class XSSProtection {
    constructor(options = {}) {
        // Middleware to clean request body
        this.cleanBody = (req, res, next) => {
            if (req.body) {
                for (const key in req.body) {
                    // Only clean string fields
                    if (typeof req.body[key] === "string") {
                        req.body[key] = (0, xss_1.default)(req.body[key]);
                    }
                }
            }
            next();
        };
        // Default XSS filter options can be set here
        this.filter = new xss_1.FilterXSS(options);
    }
    // Method to clean arbitrary text
    cleanText(text) {
        return this.filter.process(text);
    }
    // Method to update XSS filter options
    setOptions(options = {}) {
        this.filter = new xss_1.FilterXSS(options);
    }
}
exports.default = XSSProtection;
