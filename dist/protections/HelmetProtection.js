"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
class HelmetProtection {
    constructor(options = {}) {
        // Default Helmet options
        this.options = {
            frameguard: { action: "sameorigin" },
            hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
            referrerPolicy: { policy: "no-referrer" },
            noSniff: true,
            ieNoOpen: true,
            hidePoweredBy: true,
            crossOriginResourcePolicy: { policy: "cross-origin" },
            crossOriginOpenerPolicy: { policy: "same-origin" },
            contentSecurityPolicy: {
                directives: {
                    "default-src": ["'self'"],
                    "img-src": ["'self'", "data:", process.env.FRONTEND_URL],
                    "media-src": ["'self'", "data:", process.env.FRONTEND_URL],
                },
            },
            ...options, // If user provides options, they will override defaults
        };
    }
    // Method to update Helmet options
    setOptions(options) {
        this.options = { ...this.options, ...options }; // Merge new options with existing ones
    }
    // Middleware to apply Helmet protection
    getMiddleware() {
        return (0, helmet_1.default)(this.options);
    }
}
exports.default = HelmetProtection;
