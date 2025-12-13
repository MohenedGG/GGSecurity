"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
class Compression {
    constructor(options = {}) {
        // Extract zlib-specific options
        const { level, memLevel, chunkSize, ...restOptions } = options;
        // Default compression options and user overrides
        this.options = {
            // Minimum response size in bytes to compress
            threshold: 1024, // 1KB
            zlib: {
                // Compression level (0-9)
                level: level ?? 6, // Default is 6
                // Memory level (1-9)
                memLevel: memLevel ?? 8, // Default is 8
                // Size of the buffer for compression
                chunkSize: chunkSize ?? 16384, // 16KB
            },
            // If user provides options, they will override defaults
            ...restOptions,
        };
    }
    // Middleware to apply compression
    init() {
        return (0, compression_1.default)(this.options);
    }
    // Method to update compression options
    setOptions(options) {
        // Extract zlib-specific options
        const { level, memLevel, chunkSize, ...restOptions } = options;
        // Build updated zlib options
        const zlibOptions = { ...this.options.zlib };
        if (level !== undefined)
            zlibOptions.level = level;
        if (memLevel !== undefined)
            zlibOptions.memLevel = memLevel;
        if (chunkSize !== undefined)
            zlibOptions.chunkSize = chunkSize;
        // Merge new options with existing ones
        this.options = {
            ...this.options,
            ...restOptions,
            zlib: zlibOptions,
        };
    }
}
exports.default = Compression;
