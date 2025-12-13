export default class HelmetProtection {
    private options;
    constructor(options?: object);
    setOptions(options: object): void;
    getMiddleware(): (req: import("node:http").IncomingMessage, res: import("node:http").ServerResponse, next: (err?: unknown) => void) => void;
}
