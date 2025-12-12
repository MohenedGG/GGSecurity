import compression from "compression";

interface InputCompressionOptions {
    threshold?: number;
    level?: number;
    memLevel?: number;
    chunkSize?: number;
    [key: string]: any; // any other compression options
}

interface CompressionOptions {
    threshold?: number;
    zlib?: {
        level?: number;
        memLevel?: number;
        chunkSize?: number;
        [key: string]: any; // any other zlib options
    };
    [key: string]: any; // any other compression options
}

export default class Compression {
    private options: CompressionOptions;

    constructor(options: InputCompressionOptions = {}) {
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
    public init() {
        return compression(this.options);
    }

    // Method to update compression options
    public setOptions(options: InputCompressionOptions) {
        // Extract zlib-specific options
        const { level, memLevel, chunkSize, ...restOptions } = options;

        // Build updated zlib options
        const zlibOptions: any = { ...(this.options as any).zlib };
        if (level !== undefined) zlibOptions.level = level;
        if (memLevel !== undefined) zlibOptions.memLevel = memLevel;
        if (chunkSize !== undefined) zlibOptions.chunkSize = chunkSize;

        // Merge new options with existing ones
        this.options = {
            ...this.options,
            ...restOptions,
            zlib: zlibOptions,
        };
    }
}
