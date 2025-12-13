interface InputCompressionOptions {
    threshold?: number;
    level?: number;
    memLevel?: number;
    chunkSize?: number;
    [key: string]: any;
}
export default class Compression {
    private options;
    constructor(options?: InputCompressionOptions);
    init(): import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    setOptions(options: InputCompressionOptions): void;
}
export {};
