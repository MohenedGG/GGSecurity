import { IFilterXSSOptions } from "xss";
import { Request, Response, NextFunction } from "express";
export default class XSSProtection {
    private filter;
    constructor(options?: IFilterXSSOptions);
    cleanBody: (req: Request, res: Response, next: NextFunction) => void;
    cleanText(text: string): string;
    setOptions(options?: IFilterXSSOptions): void;
}
