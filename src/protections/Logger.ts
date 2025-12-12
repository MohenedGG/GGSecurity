import morgan, { StreamOptions } from "morgan";
import fs from "fs";
import path from "path";

export default class Logger {
    private format: string;
    private stream: StreamOptions;
    
    // Overloaded constructors
    constructor(format: string);
    constructor(format: string, filePath: string);
    constructor(format: string, filePath?: string) {
        this.format = format;

        if (filePath) {
            // convert path to full path
            const fullPath = path.resolve(filePath);
            // create a write stream (in append mode)
            const accessLogStream = fs.createWriteStream(fullPath, { flags: "a" });
            this.stream = {
                write: (message: string) => {
                    accessLogStream.write(message);
                },
            };
        } else {
            // Default to console
            this.stream = {
                write: (message: string) => {
                    process.stdout.write(message);
                },
            };
        }
    }

    // Middleware to log requests
    public getMiddleware() {
        return morgan(this.format, { stream: this.stream });
    }

    // Method to update log format
    public setFormat(format: string) {
        this.format = format;
    }
}