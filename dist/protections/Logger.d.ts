export default class Logger {
    private format;
    private stream;
    constructor(format: string);
    constructor(format: string, filePath: string);
    getMiddleware(): (req: import("node:http").IncomingMessage, res: import("node:http").ServerResponse<import("node:http").IncomingMessage>, callback: (err?: Error) => void) => void;
    setFormat(format: string): void;
    setLogFile(filePath: string): void;
}
