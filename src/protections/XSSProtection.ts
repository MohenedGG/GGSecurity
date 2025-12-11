import xss, { FilterXSS, IFilterXSSOptions } from "xss";
import { Request, Response, NextFunction } from "express";

export default class XSSProtection {
    private filter: FilterXSS;

    constructor(options: IFilterXSSOptions = {}) {
        this.filter = new FilterXSS(options);
    }

    private cleanBody = (req: Request, res: Response, next: NextFunction) => {
        if (req.body) {
            for (const key in req.body) {
                if (typeof req.body[key] === "string") {
                    req.body[key] = xss(req.body[key]);
                }
            }
        }
        next();
    };

    public cleanText(text: string): string {
        return this.filter.process(text);
    }

    public setOptions(options: IFilterXSSOptions = {}): void {
        this.filter = new FilterXSS(options);
    }
}
